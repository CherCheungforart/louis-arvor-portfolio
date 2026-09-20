import * as THREE from 'three';

// Measured on the supplied GLBs, in mesh rest coordinates. Their eye UVs span
// multiple atlas islands, so UV displacement would tear. A small rest-space
// aperture stays on the skin through the existing Walk deformation instead.
const CALIBRATION = {
  sitting: {
    y: .7308, z: .4499, radiusY: .0113, radiusZ: .0048, slope: .13,
    sides: [
      { x: -.0445, face: [12613,12615,12616] },
      { x: .07175, face: [22349,22350,22351] },
    ],
  },
  walking: {
    y: .55285, z: .4499, radiusY: .0098, radiusZ: .0039, slope: .08,
    sides: [
      { x: -.04763, face: [10128,10130,10170] },
      { x: .04585, face: [35038,35034,35032] },
    ],
  },
};

export function gazeTarget(pointer, anchor, viewport, facing) {
  if (!pointer.active) return { x: 0, y: 0, weight: 0 };
  let x = (pointer.x-anchor.x)/Math.max(150, viewport.width*.3);
  let y = (anchor.y-pointer.y)/Math.max(120, viewport.height*.25);
  const length = Math.hypot(x,y);
  if (length>1) {x/=length;y/=length;}
  return { x: x*facing, y, weight: 1 };
}

export function smoothGaze(current, target, elapsed) {
  const blend = 1-Math.exp(-Math.max(0,elapsed)/.055);
  const value = Object.fromEntries(['x','y','weight'].map(key=>[key,current[key]+(target[key]-current[key])*blend]));
  const settled = ['x','y','weight'].every(key=>Math.abs(value[key]-target[key])<.001);
  return settled ? { ...target, settled } : { ...value, settled };
}

const declarations = `
varying vec3 vCatEye;
uniform vec2 uCatGaze;
uniform float uCatAttention;
`;
const eyeFragment = `
  // The outer eyelids, nose and fur retain their original texture. Only the
  // interior aperture receives a very small iris/pupil shift (no vertex motion).
  vec2 eye = vCatEye.xy;
  float aperture = (1.0-smoothstep(0.78,1.0,dot(eye,eye))) * vCatEye.z;
  if (aperture > 0.0 && uCatAttention > 0.0) {
    vec2 iris = eye-uCatGaze*vec2(0.38,0.24);
    float angle = atan(iris.y,iris.x);
    float fibres = sin(angle*47.0+length(iris)*17.0)*0.017;
    vec3 irisColor = vec3(0.245,0.212,0.126)*(0.90+fibres);
    irisColor *= 1.0-0.27*smoothstep(0.45,1.0,length(eye));
    float pupil = 1.0-smoothstep(0.82,1.0,length(iris/vec2(0.34,0.91)));
    vec3 eyeColor = mix(irisColor,vec3(0.009,0.011,0.010),pupil);
    // A restrained corneal catchlight remains above the pupil, not on the fur.
    vec2 glint = (iris-vec2(-0.08,0.36))/vec2(0.14,0.16);
    float highlight = (1.0-smoothstep(0.10,1.0,dot(glint,glint)))*0.38;
    eyeColor = mix(eyeColor,vec3(0.68,0.68,0.63),highlight);
    diffuseColor.rgb = mix(diffuseColor.rgb,eyeColor,aperture*uCatAttention);
  }
`;

export function attachEyeFollow(root, kind) {
  const config = CALIBRATION[kind];
  let mesh;
  root.traverse(object=>{if(object.isMesh && object.material.map)mesh=object;});
  if (!mesh || !config) throw Error('Eye calibration requires the supplied cat model');
  const position = mesh.geometry.attributes.position;
  const coordinates = new Float32Array(position.count*3);
  for(let i=0;i<position.count;i++) {
    const x=position.getX(i), y=position.getY(i), z=position.getZ(i);
    const side=config.sides[x<0?0:1];
    coordinates[i*3] = (z-config.z-config.slope*(y-config.y))/config.radiusZ;
    coordinates[i*3+1] = (y-config.y)/config.radiusY;
    coordinates[i*3+2] = 1-THREE.MathUtils.smoothstep(Math.abs(x-side.x),.014,.029);
  }
  mesh.geometry.setAttribute('catEye',new THREE.BufferAttribute(coordinates,3));
  const uniforms = {uCatGaze:{value:new THREE.Vector2()},uCatAttention:{value:0}};
  mesh.material.onBeforeCompile = shader=>{
    Object.assign(shader.uniforms,uniforms);
    shader.vertexShader = 'attribute vec3 catEye;\nvarying vec3 vCatEye;\n'+shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvCatEye = catEye;');
    shader.fragmentShader = declarations+shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n'+eyeFragment);
  };
  mesh.material.customProgramCacheKey = ()=> 'profile-pupil-follow-v1';
  mesh.material.needsUpdate = true;
  const v0=new THREE.Vector3(),v1=new THREE.Vector3(),v2=new THREE.Vector3();
  const anchor=new THREE.Vector3(),projected=new THREE.Vector3();
  const weights=config.sides.map(side=>{
    v0.fromBufferAttribute(position,side.face[0]);v1.fromBufferAttribute(position,side.face[1]);v2.fromBufferAttribute(position,side.face[2]);
    return THREE.Triangle.getBarycoord(new THREE.Vector3(side.x,config.y,config.z),v0,v1,v2,new THREE.Vector3());
  });
  let state={x:0,y:0,weight:0,settled:true};
  let screen={x:0,y:0};
  return {
    update({pointer,camera,rect,viewport,facing,elapsed}) {
      // A right-facing model shows its negative-X eye to the camera.
      const sideIndex=facing>0?0:1,face=config.sides[sideIndex].face,w=weights[sideIndex];
      mesh.getVertexPosition(face[0],v0);mesh.getVertexPosition(face[1],v1);mesh.getVertexPosition(face[2],v2);
      anchor.set(0,0,0).addScaledVector(v0,w.x).addScaledVector(v1,w.y).addScaledVector(v2,w.z).applyMatrix4(mesh.matrixWorld);
      projected.copy(anchor).project(camera);
      screen={x:rect.left+(projected.x+1)*rect.width/2,y:rect.top+(1-projected.y)*rect.height/2};
      const target=gazeTarget(pointer,screen,viewport,facing);
      state=smoothGaze(state,target,elapsed);
      uniforms.uCatGaze.value.set(state.x,state.y);
      uniforms.uCatAttention.value=state.weight;
      return !state.settled;
    },
    inspect(){return {kind,...state,screen,vertexCount:position.count,headRotationApplied:false};},
    // Calibration fixture uses the same shader, without the production input loop.
    setForStudy(x,y,weight=1){uniforms.uCatGaze.value.set(x,y);uniforms.uCatAttention.value=weight;},
  };
}
