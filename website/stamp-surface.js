/* Image-derived print relief. These maps describe a visual material approximation,
   not recovered physical depth. The source PNGs are never changed. */
(() => {
  'use strict';

  const vertexSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = vec2(aPosition.x * .5 + .5, .5 - aPosition.y * .5);
      gl_Position = vec4(aPosition, 0., 1.);
    }
  `;

  const fragmentSource = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uArt;
    uniform sampler2D uRelief;
    uniform sampler2D uPigment;
    uniform sampler2D uPaper;
    uniform vec2 uPointer;
    uniform float uStrength;
    uniform vec3 uSheenTint;

    float luminance(vec3 c) { return dot(c, vec3(.2126, .7152, .0722)); }

    void main() {
      vec4 art = texture2D(uArt, vUv);
      if (art.a < .002) { gl_FragColor = vec4(0.); return; }
      vec4 relief = texture2D(uRelief, vUv);
      vec3 pigment = texture2D(uPigment, vUv).rgb;
      vec4 paper = texture2D(uPaper, vUv);
      vec2 slope = (relief.rg * 2. - 1.) * .85;
      vec2 fibres = (paper.rg * 2. - 1.) * .42;
      vec3 printNormal = normalize(vec3(slope, 1.));
      vec3 normal = normalize(vec3(slope + fibres, 1.));
      vec3 light = normalize(vec3(uPointer.x * 1.65 - .22, uPointer.y * 1.5 - .25, 1.3));
      vec3 halfway = normalize(light + vec3(0., 0., 1.));

      // A broad light source crosses normals shaped by the printed image.
      // It has no diagonal sweep, repeating bands, or time-driven movement.
      vec2 centre = vec2(.5) + uPointer * vec2(.27, .24);
      vec2 delta = (vUv - centre + slope * .1) * vec2(1., 1.16);
      float reach = exp(-dot(delta, delta) * 3.7);
      float grain = (relief.b * 2. - 1.) * .4 + (paper.b * 2. - 1.) * .6;
      float roughness = clamp(abs(grain) * .65 + .24, .24, .8);
      float specular = pow(max(dot(normal, halfway), 0.), mix(52., 22., roughness));
      float contour = smoothstep(.025, .28, length(slope));
      float pigmentLuma = luminance(pigment);
      float ink = mix(.36, 1., smoothstep(.12, .78, pigmentLuma));
      float shine = specular * (.23 + reach * .77) * (.30 + .70 * contour) * ink;

      // Local ink supplies the reflection colour; the optional accent only tints
      // the reflected contribution, never the underlying artwork or alpha.
      vec3 tint = max(mix(vec3(pigmentLuma), pigment, 1.65), vec3(.015));
      tint /= max(max(tint.r, tint.g), max(tint.b, .02));
      float amount = shine * uStrength;
      float directionalRelief = (dot(printNormal, light) - light.z) * reach;
      vec3 lit = art.rgb * (1. + directionalRelief * .13 * uStrength);
      float gain = min(1. + amount * .43, .985 / max(max(art.r, art.g), max(art.b, .02)));
      vec3 reflection = lit * (max(gain, 1.) - 1.);
      reflection += tint * amount * .075 * (1. - art.rgb);

      // Signed detail from the actual scan gives fibres both lit and shaded sides.
      // It remains fixed to the artwork while the light changes direction.
      float fibreLight = dot(normal, light) - dot(printNormal, light);
      reflection += tint * (grain * .10 + fibreLight * .85) * amount;
      vec3 accent = mix(vec3(1.), uSheenTint, .4);
      accent /= luminance(accent);
      lit += reflection * accent;
      gl_FragColor = vec4(clamp(lit, 0., 1.), art.a);
    }
  `;

  function surfaceMaps(image) {
    const scale = Math.min(1, 1024 / image.naturalWidth);
    const width = Math.round(image.naturalWidth * scale);
    const height = Math.round(image.naturalHeight * scale);
    const makeCanvas = () => Object.assign(document.createElement('canvas'), { width, height });
    const art = makeCanvas();
    const ctx = art.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(image, 0, 0, width, height);
    const original = ctx.getImageData(0, 0, width, height);
    const blur = radius => {
      const canvas = makeCanvas();
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.filter = `blur(${radius}px)`;
      context.drawImage(art, 0, 0);
      return { canvas, pixels: context.getImageData(0, 0, width, height).data };
    };
    const fine = blur(1.2);
    const mid = blur(3.5);
    const broad = blur(10);
    const count = width * height;
    const localHeight = new Float32Array(count);
    const broadHeight = new Float32Array(count);
    const paper = new Float32Array(count);
    const luma = (pixels, i) => (pixels[i] * .2126 + pixels[i + 1] * .7152 + pixels[i + 2] * .0722) / 255;
    const heightAt = (pixels, i) => luma(pixels, i) + (pixels[i] - pixels[i + 2]) / 255 * .18;
    for (let p = 0; p < count; p++) {
      const i = p * 4;
      localHeight[p] = heightAt(mid.pixels, i);
      broadHeight[p] = heightAt(broad.pixels, i);
      paper[p] = luma(original.data, i) - luma(fine.pixels, i);
    }
    const maps = makeCanvas();
    const mapsContext = maps.getContext('2d');
    const data = mapsContext.createImageData(width, height);
    const sample = (field, x, y, fallback) => {
      x = Math.max(0, Math.min(width - 1, x));
      y = Math.max(0, Math.min(height - 1, y));
      const p = y * width + x;
      return original.data[p * 4 + 3] > 220 ? field[p] : fallback;
    };
    const encode = value => Math.round(Math.max(0, Math.min(1, value)) * 255);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const p = y * width + x;
        const i = p * 4;
        const gradient = (field, offset, axis) => {
          const dx = axis === 0 ? offset : 0;
          const dy = axis === 1 ? offset : 0;
          return sample(field, x + dx, y + dy, field[p]) - sample(field, x - dx, y - dy, field[p]);
        };
        const dx = gradient(broadHeight, 5, 0) * 3.0 + gradient(localHeight, 2, 0) * 1.7 + gradient(paper, 1, 0) * .45;
        const dy = gradient(broadHeight, 5, 1) * 3.0 + gradient(localHeight, 2, 1) * 1.7 + gradient(paper, 1, 1) * .45;
        data.data[i] = encode(.5 - dx * .5);
        data.data[i + 1] = encode(.5 - dy * .5);
        data.data[i + 2] = encode(.5 + paper[p] * 3.8);
        data.data[i + 3] = 255;
      }
    }
    mapsContext.putImageData(data, 0, 0);
    return { relief: maps, pigment: mid.canvas };
  }

  let paperMapPromise;
  function paperMap() {
    if (paperMapPromise) return paperMapPromise;
    paperMapPromise = (async () => {
      const reference = new Image();
      reference.src = new URL('assets/stamp-pocket/paper-grain.jpg', document.baseURI).href;
      await reference.decode();
      const width = 1024, height = 1280;
      const canvas = Object.assign(document.createElement('canvas'), { width, height });
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      const cover = Math.max(width / reference.naturalWidth, height / reference.naturalHeight);
      ctx.drawImage(reference, (width - reference.naturalWidth * cover) / 2, (height - reference.naturalHeight * cover) / 2, reference.naturalWidth * cover, reference.naturalHeight * cover);
      const pixels = ctx.getImageData(0, 0, width, height);
      const softened = Object.assign(document.createElement('canvas'), { width, height });
      const softCtx = softened.getContext('2d', { willReadFrequently: true });
      softCtx.filter = 'blur(7px)';
      softCtx.drawImage(canvas, 0, 0);
      const broad = softCtx.getImageData(0, 0, width, height).data;
      const field = new Float32Array(width * height);
      for (let p = 0; p < field.length; p++) {
        const i = p * 4;
        // Remove the photograph's broad illumination and discard all chroma.
        const grey = (pixels.data[i] + pixels.data[i + 1] + pixels.data[i + 2]) / 765;
        const average = (broad[i] + broad[i + 1] + broad[i + 2]) / 765;
        field[p] = Math.max(-.16, Math.min(.16, grey - average));
      }
      const data = ctx.createImageData(width, height);
      const at = (x, y) => field[Math.max(0, Math.min(height - 1, y)) * width + Math.max(0, Math.min(width - 1, x))];
      const encode = value => Math.round(Math.max(0, Math.min(1, value)) * 255);
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          data.data[i] = encode(.5 - (at(x + 1, y) - at(x - 1, y)) * 2.8);
          data.data[i + 1] = encode(.5 - (at(x, y + 1) - at(x, y - 1)) * 2.8);
          data.data[i + 2] = encode(.5 + at(x, y) * 4);
          data.data[i + 3] = 255;
        }
      }
      ctx.putImageData(data, 0, 0);
      return canvas;
    })();
    return paperMapPromise;
  }

  const bakedCache = new Map();
  function bakedImage(path) {
    if (!bakedCache.has(path)) {
      const image = new Image();
      image.src = new URL(path, document.baseURI).href;
      bakedCache.set(path, image.decode().then(() => image));
    }
    return bakedCache.get(path);
  }

  window.createStampSurface = async function createStampSurface(image, canvas, onFailure, sheenTint = [1, 1, 1], options = {}) {
    let art = image, maps, paper;
    if (options.bakedKey) {
      const base = 'assets/stamp-pocket/touch-v1/';
      const files = [`${options.bakedKey}-relief.webp`, `${options.bakedKey}-pigment.webp`, 'paper.webp'];
      const [, ...textures] = await Promise.all([image.decode(), ...files.map(file => bakedImage(base + file))]);
      paper = textures[2];
      maps = {relief: textures[0], pigment: textures[1]};
    } else {
      [, paper] = await Promise.all([image.decode(), paperMap()]);
    }
    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, stencil: false });
    if (!gl) throw new Error('WebGL is unavailable; keeping the original image.');
    const resources = [];
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const message = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(message);
      }
      return shader;
    };
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    gl.useProgram(program);
    gl.uniform3fv(gl.getUniformLocation(program, 'uSheenTint'), sheenTint);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    maps ||= surfaceMaps(image);
    [art, maps.relief, maps.pigment, paper].forEach((source, index) => {
      const texture = gl.createTexture();
      resources.push(texture);
      gl.activeTexture(gl.TEXTURE0 + index);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.uniform1i(gl.getUniformLocation(program, ['uArt', 'uRelief', 'uPigment', 'uPaper'][index]), index);
    });
    const pointer = gl.getUniformLocation(program, 'uPointer');
    const strength = gl.getUniformLocation(program, 'uStrength');
    let last = [0, 0, 0];
    function draw(x, y, amount) {
      last = [x, y, amount];
      gl.uniform2f(pointer, x, y);
      gl.uniform1f(strength, amount);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    function resize() {
      const scale = Math.min(window.devicePixelRatio || 1, options.bakedKey ? 1.5 : 2);
      const width = Math.max(1, Math.round(canvas.clientWidth * scale));
      const height = Math.max(1, Math.round(canvas.clientHeight * scale));
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      draw(...last);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener('webglcontextlost', () => onFailure());
    resize();
    draw(0, 0, 0);
    return {
      draw,
      dispose() {
        observer.disconnect();
        resources.forEach(texture => gl.deleteTexture(texture));
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
      },
    };
  };
})();
