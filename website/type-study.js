(() => {
 const params=new URLSearchParams(location.search);
 if(!params.has('type-study'))return;
 let saved='georgia';try{saved=sessionStorage.getItem('louis-type-study')||saved;}catch{}
 const style=document.createElement('link');style.rel='stylesheet';style.href='type-study.css';document.head.append(style);
 const controls=document.createElement('div');controls.className='type-study-controls';controls.setAttribute('role','group');controls.setAttribute('aria-label','标题字体对比');
 const set=value=>{
  document.documentElement.dataset.typeStudy=value;
  try{sessionStorage.setItem('louis-type-study',value);}catch{}
  controls.querySelectorAll('button[data-face]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.face===value)));
 };
 for(const [value,label] of [['georgia','A · Georgia'],['palatino','B · Palatino'],['geist','C · 角标字体']]){
  const button=document.createElement('button');button.type='button';button.dataset.face=value;button.textContent=label;button.onclick=()=>set(value);controls.append(button);
 }
 document.body.append(controls);set(['palatino','geist'].includes(saved)?saved:'georgia');
 const bodyButton=document.createElement('button');bodyButton.type='button';bodyButton.textContent='正文：角标字体';bodyButton.setAttribute('aria-pressed','true');
 bodyButton.onclick=()=>{const serif=document.documentElement.dataset.studyBody!=='serif';document.documentElement.dataset.studyBody=serif?'serif':'sans';bodyButton.textContent=serif?'正文：信纸字体':'正文：角标字体';bodyButton.setAttribute('aria-pressed',String(!serif));};controls.append(bodyButton);
 document.querySelectorAll('.portfolio-nav a').forEach(link=>{
  const url=new URL(link.href);url.searchParams.set('type-study','1');link.href=url.pathname+url.search+url.hash;
 });
})();
