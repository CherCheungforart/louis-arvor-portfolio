// Adapted from the user-provided Originkit PixelTrail component.
export const TRAIL_DEFAULTS = Object.freeze({columns:20,hold:300,fade:450,maxCells:4200});
export function pawAppearance(serial,heading){
  return {angle:heading+((serial*37+11)%57)-28,scale:1};
}
export function pawScale(age){
  const depth=Math.max(0,age);
  return .55+.45*Math.exp(-.12*depth)+.2*Math.pow(Math.max(0,1-depth/5),2);
}
export function pawDepth(age){return Math.pow(.82,Math.max(0,age));}
export function spacePawCells(candidates,grid,last){
  const indices=[];
  for(const index of candidates){
    const point={x:index%grid.cols*grid.pitch,y:Math.floor(index/grid.cols)*grid.pitch};
    if(last&&Math.hypot(point.x-last.x,point.y-last.y)<18)continue;
    indices.push(index);last=point;
  }
  return {indices,last};
}
// Cursor-relative scale; cells are allocated only while visible.
export function measureCursorGrid(width,height){
  const pitch=12,cols=Math.ceil(width/pitch),rows=Math.ceil(height/pitch);
  return {pitch,cols,rows,count:cols*rows};
}
export function behindCat(cat,pitch){
  return {x:cat.left-.5-pitch,y:cat.top+(cat.bottom-cat.top)*.65};
}
export function overlapsCat(index,grid,cat){
  const x=index%grid.cols*grid.pitch,y=Math.floor(index/grid.cols)*grid.pitch;
  return x<cat.right+.5&&x+grid.pitch>cat.left-.5&&y<cat.bottom+.5&&y+grid.pitch>cat.top-.5;
}
export function measureGrid(width,height,columns=TRAIL_DEFAULTS.columns) {
  let cols=Math.max(2,Math.round(columns));
  if(width<=0||height<=0)return {cols,rows:0,pitch:0,count:0};
  const measure=()=>({pitch:Math.max(1,width/cols),rows:Math.max(1,Math.ceil(height/Math.max(1,width/cols)))});
  let size=measure();
  while(cols*size.rows>TRAIL_DEFAULTS.maxCells&&cols>2){cols=Math.max(2,Math.floor(cols*.85));size=measure();}
  return {cols,...size,count:cols*size.rows};
}
export function traceCells(last,point,grid) {
  if(grid.pitch<=0)return [];
  const indices=new Set();
  const stamp=(x,y)=>{
    const col=Math.floor(x/grid.pitch),row=Math.floor(y/grid.pitch);
    if(col>=0&&row>=0&&col<grid.cols&&row<grid.rows)indices.add(row*grid.cols+col);
  };
  if(last){
    const dx=point.x-last.x,dy=point.y-last.y;
    const steps=Math.min(96,Math.ceil(Math.hypot(dx,dy)/(grid.pitch*.5)));
    for(let i=1;i<steps;i++)stamp(last.x+dx*i/steps,last.y+dy*i/steps);
  }
  stamp(point.x,point.y);
  return [...indices];
}
