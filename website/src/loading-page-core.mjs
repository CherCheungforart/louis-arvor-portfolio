export function gazeTarget(dx,dy,width,height){
  const x=dx/Math.max(width/2,1),y=dy/Math.max(height/2,1);
  const length=Math.max(1,Math.hypot(x,y));
  return {x:x/length*13,y:y/length*8};
}
export const bootReady=s=>!s.error&&['assets','cat','material','dissolve','background'].every(k=>s[k]===true);
export const waitForAssets=promises=>Promise.all(promises);
