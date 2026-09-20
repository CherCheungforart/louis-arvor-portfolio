function hr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uo={duration:.5,overwrite:!1,delay:0},rf,mn,Pt,gi=1e8,Tt=1/gi,Yh=Math.PI*2,Ix=Yh/4,Lx=0,dm=Math.sqrt,Dx=Math.cos,Nx=Math.sin,Jt=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},dr=function(e){return typeof e=="number"},sc=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},Xn=function(e){return e!==!1},sf=function(){return typeof window<"u"},$l=function(e){return Bt(e)||Jt(e)},pm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,qh=/(?:-?\.?\d|\.)+/gi,of=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,af=/[+-]=-?[.\d]+/,mm=/[^,'"\[\]\s]+/gi,Ux=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Wi,Zh,lf,ii={},ec={},gm,_m=function(e){return(ec=ps(e,ii))&&_n},oc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ra=function(e,t){return!t&&console.warn(e)},xm=function(e,t){return e&&(ii[e]=t)&&ec&&(ec[e]=t)||ii},Ca=function(){return 0},Ox={suppressEvents:!0,isStart:!0,kill:!1},Jl={suppressEvents:!0,kill:!1},Fx={suppressEvents:!0},cf={},Br=[],Kh={},ym,Gn={},zh={},sm=30,jl=[],uf="",hf=function(e){var t=e[0],n,i;if(Yi(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=jl.length;i--&&!jl[i].targetTest(t););n=jl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pf(e[i],n)))||e.splice(i,1);return e},kr=function(e){return e._gsap||hf(_i(e))[0]._gsap},ff=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():sc(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},kt=function(e){return Math.round(e*1e5)/1e5||0},tn=function(e){return Math.round(e*1e7)/1e7||0},gs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},tc=function(){var e=Br.length,t=Br.slice(0),n,i;for(Kh={},Br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vm=function(e,t,n,i){Br.length&&!mn&&tc(),e.render(t,n,i||mn&&t<0&&(e._initted||e._startAt)),Br.length&&!mn&&tc()},Mm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(mm).length<2?t:Jt(e)?e.trim():e},Sm=function(e){return e},xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},kx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ps=function(e,t){for(var n in t)e[n]=t[n];return e},om=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},nc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wa=function(e){var t=e.parent||Nt,n=e.keyframes?kx(gn(e.keyframes)):xi;if(Xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bm=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ac=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Vx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$h=function(e,t,n,i){return e._startAt&&(mn?e._startAt.revert(Jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Hx=function s(e){return!e||e._ts&&s(e.parent)},am=function(e){return e._repeat?ho(e._tTime,e=e.duration()+e._rDelay)*e:0},ho=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ic=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},lc=function(e){return e._end=tn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},cc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=tn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),lc(e),n._dirty||hs(n,e)),e},Tm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ic(e.rawTime(),t),(!t._dur||La(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Xi=function(e,t,n,i){return t.parent&&zr(t),t._start=tn((dr(n)?n:n||e!==Nt?mi(e,n,t):e._time)+t._delay),t._end=tn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bm(e,t,"_first","_last",e._sort?"_start":0),Jh(t)||(e._recent=t),i||Tm(e,t),e._ts<0&&cc(e,e._tTime),e},wm=function(e,t){return(ii.ScrollTrigger||oc("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},Em=function(e,t,n,i,r){if(_f(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ym!==Wn.frame)return Br.push(e),e._lazy=[r,i],1},Gx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Jh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wx=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Gx(e)&&!(!e._initted&&Jh(e))||(e._ts<0||e._dp._ts<0)&&!Jh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=La(0,e._tDur,t),u=ho(l,a),e._yoyo&&u&1&&(o=1-o),u!==ho(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||mn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Em(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$h(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zr(e,1),!n&&!mn&&(ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Xx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},fo=function(e,t,n,i){var r=e._repeat,o=tn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:tn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&cc(e,e._tTime=e._tDur*a),e.parent&&lc(e),n||hs(e.parent,e),e},lm=function(e){return e instanceof cn?hs(e):fo(e,e._dur)},Yx={_start:0,endTime:Ca,totalDuration:Ca},mi=function s(e,t,n){var i=e.labels,r=e._recent||Yx,o=e.duration()>=gi?r.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ea=function(e,t,n){var i=dr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Xn(l.vars.inherit)&&l.parent;o.immediateRender=Xn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Wt(t[0],o,t[r+1])},Vr=function(e,t){return e||e===0?t(e):t},La=function(e,t,n){return n<e?e:n>t?t:n},un=function(e,t){return!Jt(e)||!(t=Ux.exec(e))?"":t[1]},qx=function(e,t,n){return Vr(n,function(i){return La(e,t,i)})},jh=[].slice,Am=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==Wi},Zx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Jt(i)&&!t||Am(i,1)?(r=n).push.apply(r,_i(i)):n.push(i)})||n},_i=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):Jt(e)&&!n&&(Zh||!po())?jh.call((t||lf).querySelectorAll(e),0):gn(e)?Zx(e,n):Am(e)?jh.call(e,0):e?[e]:[]},Qh=function(e){return e=_i(e)[0]||Ra("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _i(t,n.querySelectorAll?n:n===e?Ra("Invalid scope")||lf.createElement("div"):e)}},Rm=function(e){return e.sort(function(){return .5-Math.random()})},Cm=function(e){if(Bt(e))return e;var t=Yi(e)?e:{each:e},n=fs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,b,S,x,E,A,w,I,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,gi])[1],!y){for(w=-gi;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,b=y===gi?0:l?g*h/y-.5:i/y|0,w=0,I=gi,A=0;A<g;A++)S=A%y-p,x=b-(A/y|0),m[A]=E=c?Math.abs(c==="y"?x:S):dm(S*S+x*x),E>w&&(w=E),E<I&&(I=E);i==="random"&&Rm(m),m.max=w-I,m.min=I,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=un(t.amount||t.each)||0,n=n&&g<0?Bm(n):n}return g=(m[f]-m.min)/m.max||0,tn(m.b+(n?n(g):g)*m.v)+m.u}},ef=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=tn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(dr(n)?0:un(n))}},Pm=function(e,t){var n=gn(e),i,r;return!n&&Yi(e)&&(i=n=e.radius||gi,e.values?(e=_i(e.values),(r=!dr(e[0]))&&(i*=i)):e=ef(e.increment)),Vr(t,n?Bt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=gi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||dr(o)?u:u+un(o)}:ef(e))},Im=function(e,t,n,i){return Vr(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Kx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},$x=function(e,t){return function(n){return e(parseFloat(n))+(t||un(n))}},Jx=function(e,t,n){return Dm(e,t,0,1,n)},Lm=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},jx=function s(e,t,n){var i=t-e;return gn(e)?Lm(e,s(0,e.length),t):Vr(n,function(r){return(i+(r-e)%i)%i+e})},Qx=function s(e,t,n){var i=t-e,r=i*2;return gn(e)?Lm(e,s(0,e.length-1),t):Vr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},mo=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?mm:qh),n+=e.substr(t,i-t)+Im(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dm=function(e,t,n,i,r){var o=t-e,a=i-n;return Vr(r,function(l){return n+((l-e)/o*a||0)})},ey=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Jt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ps(gn(e)?[]:{},e));if(!u){for(l in t)mf.call(a,e,l,"get",t[l]);r=function(_){return vf(_,a)||(o?e.p:e)}}}return Vr(n,r)},cm=function(e,t,n){var i=e.labels,r=gi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ni=function(e,t,n){var i=e.vars,r=i[t],o=Pt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Br.length&&tc(),a&&(Pt=a),u=l?r.apply(c,l):r.call(c),Pt=o,u},ba=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&ni(e,"onInterrupt"),e},co,Nm=[],Um=function(e){if(e)if(e=!e.name&&e.default||e,sf()||e.headless){var t=e.name,n=Bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ca,render:vf,add:mf,kill:gy,modifier:my,rawVars:0},o={targetTest:0,get:0,getSetter:uc,aliases:{},register:0};if(po(),e!==i){if(Gn[t])return;xi(i,xi(nc(e,r),o)),ps(i.prototype,ps(r,nc(e,o))),Gn[i.prop=t]=i,e.targetTest&&(jl.push(i),cf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xm(t,i),e.register&&e.register(_n,i,Rn)}else Nm.push(e)},bt=255,Ta={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Vh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Om=function(e,t,n){var i=e?dr(e)?[e>>16,e>>8&bt,e&bt]:0:Ta.black,r,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ta[e])i=Ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(qh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Vh(l+1/3,r,o),i[1]=Vh(l,r,o),i[2]=Vh(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(of),n&&i.length<4&&(i[3]=1),i}else i=e.match(qh)||Ta.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/bt,o=i[1]/bt,a=i[2]/bt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fm=function(e){var t=[],n=[],i=-1;return e.split(fr).forEach(function(r){var o=r.match(ms)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},um=function(e,t,n){var i="",r=(e+i).match(fr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Om(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(fr,"1").split(ms),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(fr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},fr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ta)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),ty=/hsl[a]?\(/,df=function(e){var t=e.join(" "),n;if(fr.lastIndex=0,fr.test(t))return n=ty.test(t),e[1]=um(e[1],n),e[0]=um(e[0],n,Fm(e[1])),!0},Pa,Wn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,_=function g(m){var p=s()-i,b=m===!0,S,x,E,A;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,S=E-o,(S>0||b)&&(A=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,o+=S+(S>=r?4:r-S),x=1),b||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](E,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){gm&&(!Zh&&sf()&&(Wi=Zh=window,lf=Wi.document||{},ii.gsap=_n,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(_n.version),_m(ec||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),Nm.forEach(Um)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Pa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Pa=0,c=Ca},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,b){var S=p?function(x,E,A,w){m(x,E,A,w),h.remove(S)}:m;return h.remove(m),a[b?"unshift":"push"](S),po(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),po=function(){return!Pa&&Wn.wake()},ct={},ny=/^[\d.\-M][\d.\-,\s]/,iy=/["']/g,ry=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(iy,"").trim():+c,i=l.substr(a+1).trim();return t},sy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},oy=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ry(t[1])]:sy(e).split(",").map(Mm)):ct._CE&&ny.test(e)?ct._CE("",e):n},Bm=function(e){return function(t){return 1-e(1-t)}},km=function s(e,t){for(var n=e._first,i;n;)n instanceof cn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},fs=function(e,t){return e&&(Bt(e)?e:ct[e]||oy(e))||t},_s=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return An(e,function(a){ct[a]=ii[a]=r,ct[o=a.toLowerCase()]=n;for(var l in r)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=r[l]}),r},zm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hh=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Yh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Nx((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:zm(a);return r=Yh/r,l.config=function(c,u){return s(e,c,u)},l},Gh=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:zm(n);return i.config=function(r){return s(e,r)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;_s(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;_s("Elastic",Hh("in"),Hh("out"),Hh());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};_s("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);_s("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});_s("Circ",function(s){return-(dm(1-s*s)-1)});_s("Sine",function(s){return s===1?1:-Dx(s*Ix)+1});_s("Back",Gh("in"),Gh("out"),Gh());ct.SteppedEase=ct.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Tt;return function(a){return((i*La(0,o,a)|0)+r)*n}}};uo.ease=ct["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return uf+=s+","+s+"Params,"});var pf=function(e,t){this.id=Lx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ff,this.set=t?t.getSetter:uc},Ia=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fo(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Pa||Wn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,fo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(po(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(cc(this,n),!r._dp||r.parent||Tm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+am(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+am(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ho(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ic(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this._tDur,r),i!==!1),lc(this),Vx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(po(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ic(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Fx);var i=mn;return mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mi(this,n),Xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Xn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Bt(n)?n:Sm,a=function(){var c=i.then;i.then=null,Bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ba(this)},s})();xi(Ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var cn=(function(s){fm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Xn(n.sortChildren),Nt&&Xi(n.parent||Nt,hr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&wm(hr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ea(0,arguments,this),this},t.from=function(i,r,o){return Ea(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ea(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,wa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Wt(i,r,mi(this,o),1),this},t.call=function(i,r,o){return Xi(this,Wt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Wt(i,o,mi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,wa(o).immediateRender=Xn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,wa(a).immediateRender=Xn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:tn(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,b,S,x,E,A,w;if(this!==Nt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=tn(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),E=ho(this._tTime,m),!a&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),A&&g&1&&(f=c-f,w=1),g!==E&&!this._lock){var I=A&&E&1,y=I===(A&&g&1);if(g<E&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:tn(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;km(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Xx(this,tn(a),tn(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!g&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-Tt);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,o||mn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=v?-Tt:Tt);break}}d=_}}if(b&&!r&&(this.pause(),b.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=x,lc(this),this.render(i,r,o);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(dr(r)||(r=mi(this,r,i)),!(i instanceof Ia)){if(gn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Jt(i))return this.addLabel(i,r);if(Bt(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Xi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Wt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Bt(i)?this.killTweensOf(i):(ac(this,i),i===this._recent&&(this._recent=this._last),hs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=mi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Wt.delayedCall(0,r||Ca,o);return a.data="isPause",this._hasPause=1,Xi(this,a,mi(this,i))},t.removePause=function(i){var r=this._first;for(i=mi(this,i);r;)r._start===i&&r.data==="isPause"&&zr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=_i(i),l=this._first,c=dr(r),u;l;)l instanceof Wt?Bx(l._targets,a)&&(c?(!Fr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=mi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=Wt.to(o,xi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&fo(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,xi({startAt:{time:mi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),cm(this,mi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),cm(this,mi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return hs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=gi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;fo(o,o===Nt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(vm(Nt,ic(i,Nt)),ym=Wn.frame),Wn.frame>=sm){sm+=Yn.autoSleep||120;var r=Nt._first;if((!r||!r._ts)&&Yn.autoSleep&&Wn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Wn.sleep()}}},e})(Ia);xi(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ay=function(e,t,n,i,r,o,a){var l=new Rn(this._pt,e,t,0,1,yf,null,r),c=0,u=0,h,f,d,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=mo(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),f=n.match(kh)||[];h=kh.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?gs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=kh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(af.test(i)||p)&&(l.e=0),this._pt=l,l},mf=function(e,t,n,i,r,o,a,l,c,u){Bt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Bt(h)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Bt(h)?c?fy:Gm:xf,_;if(Jt(i)&&(~i.indexOf("random(")&&(i=mo(i)),i.charAt(1)==="="&&(_=gs(f,i)+(un(f)||0),(_||_===0)&&(i=_))),!u||f!==i||tf)return!isNaN(f*i)&&i!==""?(_=new Rn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?py:Wm,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&oc(t,i),ay.call(this,e,t,f,i,d,l||Yn.stringFilter,c))},ly=function(e,t,n,i,r){if(Bt(e)&&(e=Aa(e,r,t,n,i)),!Yi(e)||e.style&&e.nodeType||gn(e)||pm(e))return Jt(e)?Aa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Aa(e[a],r,t,n,i);return o},gf=function(e,t,n,i,r,o){var a,l,c,u;if(Gn[e]&&(a=new Gn[e]).init(r,a.rawVars?t[e]:ly(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Rn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==co))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fr,tf,_f=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!rf,x=e.timeline,E,A,w,I,y,v,L,N,V,G,X,H,Z;if(x&&(!f||!r)&&(r="none"),e._ease=fs(r,uo.ease),e._yEase=h?Bm(fs(h===!0?r:h,uo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=m[0]?kr(m[0]).harness:0,H=N&&i[N.prop],E=nc(i,cf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?Jl:Ox),g._lazy=0),o){if(zr(e._startAt=Wt.set(m,xi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Xn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!d)&&e._startAt.revert(Jl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),w=xi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Xn(l),immediateRender:a,stagger:0,parent:p},E),H&&(w[N.prop]=H),zr(e._startAt=Wt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Jl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Xn(l)||l&&!_,A=0;A<m.length;A++){if(y=m[A],L=y._gsap||hf(m)[A]._gsap,e._ptLookup[A]=G={},Kh[L.id]&&Br.length&&tc(),X=b===m?A:b.indexOf(y),N&&(V=new N).init(y,H||E,e,X,b)!==!1&&(e._pt=I=new Rn(e._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(z){G[z]=I}),V.priority&&(v=1)),!N||H)for(w in E)Gn[w]&&(V=gf(w,E,e,X,y,b))?V.priority&&(v=1):G[w]=I=mf.call(e,y,w,"get",E[w],X,b,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),S&&e._pt&&(Fr=e,Nt.killTweensOf(y,G,e.globalTime(t)),Z=!e.parent,Fr=0),e._pt&&l&&(Kh[L.id]=1)}v&&Mf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,f&&t<=0&&x.render(gi,!0,!0)},cy=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return tf=1,e.vars[t]="+=0",_f(e,a),tf=0,l?Ra(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=kt(n)+un(h.e)),h.b&&(h.b=u.s+un(h.b))},uy=function(e,t){var n=e[0]?kr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ps({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},hy=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Aa=function(e,t,n,i,r){return Bt(e)?e.call(t,n,i,r):Jt(e)&&~e.indexOf("random(")?mo(e):e},Vm=uf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hm={};An(Vm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Hm[s]=1});var Wt=(function(s){fm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:wa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||Nt,S=(gn(n)||pm(n)?dr(n[0]):"length"in i)?[n]:_i(n),x,E,A,w,I,y,v,L;if(a._targets=S.length?hf(S):Ra("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||$l(c)||$l(u)){if(i=a.vars,x=a.timeline=new cn({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:S}),x.kill(),x.parent=x._dp=hr(a),x._start=0,f||$l(c)||$l(u)){if(w=S.length,v=f&&Cm(f),Yi(f))for(I in f)~Vm.indexOf(I)&&(L||(L={}),L[I]=f[I]);for(E=0;E<w;E++)A=nc(i,Hm),A.stagger=0,p&&(A.yoyoEase=p),L&&ps(A,L),y=S[E],A.duration=+Aa(c,hr(a),E,y,S),A.delay=(+Aa(u,hr(a),E,y,S)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(y,A,v?v(E,y,S):0),x._ease=ct.none;x.duration()?c=u=0:a.timeline=0}else if(_){wa(xi(x.vars.defaults,{ease:"none"})),x._ease=fs(_.ease||i.ease||"none");var N=0,V,G,X;if(gn(_))_.forEach(function(H){return x.to(S,H,">")}),x.duration();else{A={};for(I in _)I==="ease"||I==="easeEach"||hy(I,_[I],A,_.easeEach);for(I in A)for(V=A[I].sort(function(H,Z){return H.t-Z.t}),N=0,E=0;E<V.length;E++)G=V[E],X={ease:G.e,duration:(G.t-(E?V[E-1].t:0))/100*c},X[I]=G.v,x.to(S,X,N),N+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!rf&&(Fr=hr(a),Nt.killTweensOf(S),Fr=0),Xi(b,hr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===tn(b._time)&&Xn(h)&&Hx(hr(a))&&b.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),m&&wm(hr(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,_,g,m,p,b,S,x;if(!c)Wx(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(f=tn(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===tn(h/g)&&(f=c,_--),f>c&&(f=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,f=c-f),m=ho(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&km(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(tn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Em(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!r&&!_&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&$h(this,i,r,o),ni(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&$h(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!r&&!(u&&!a)&&(h||a||p)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Pa||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_f(this,c),u=this._ease(c/this._dur),cy(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(cc(this,0),this.parent||bm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ba(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Fr&&Fr.vars.overwrite!==!0)._first||ba(this),this.parent&&o!==this.timeline.totalDuration()&&fo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?_i(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&zx(a,l))return r==="all"&&(this._pt=0),ba(this);for(h=this._op=this._op||[],r!=="all"&&(Jt(r)&&(g={},An(r,function(b){return g[b]=1}),r=g),r=uy(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ac(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ba(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ea(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ea(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Nt.killTweensOf(i,r,o)},e})(Ia);xi(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(s){Wt[s]=function(){var e=new cn,t=jh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var xf=function(e,t,n){return e[t]=n},Gm=function(e,t,n){return e[t](n)},fy=function(e,t,n,i){return e[t](i.fp,n)},dy=function(e,t,n){return e.setAttribute(t,n)},uc=function(e,t){return Bt(e[t])?Gm:sc(e[t])&&e.setAttribute?dy:xf},Wm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},py=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},my=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},gy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ac(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_y=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Mf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Rn=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Wm,this.d=l||this,this.set=c||xf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=_y,this.m=n,this.mt=r,this.tween=i},s})();An(uf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return cf[s]=1});ii.TweenMax=ii.TweenLite=Wt;ii.TimelineLite=ii.TimelineMax=cn;Nt=new cn({sortChildren:!1,defaults:uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=df;var ds=[],Ql={},xy=[],hm=0,yy=0,Wh=function(e){return(Ql[e]||xy).map(function(t){return t()})},nf=function(){var e=Date.now(),t=[];e-hm>2&&(Wh("matchMediaInit"),ds.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Wi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Wh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hm=e,Wh("matchMedia"))},Xm=(function(){function s(t,n){this.selector=n&&Qh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yy++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Bt(n)&&(r=i,i=n,n=Bt);var o=this,a=function(){var c=Pt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Qh(r)),Pt=o,h=i.apply(o,arguments),Bt(h)&&o._r.push(h),Pt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Bt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),vy=(function(){function s(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Yi(n)||(n={matches:n});var o=new Xm(0,r||this.scope),a=o.conditions={},l,c,u;Pt&&!o.selector&&(o.selector=Pt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Wi.matchMedia(n[c]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(nf):l.addEventListener("change",nf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),rc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Um(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=_i(e)[0]);var r=kr(e||{}).get,o=n?Sm:Mm;return n==="native"&&(n=""),e&&(t?o((Gn[t]&&Gn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Gn[a]&&Gn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=_i(e),e.length>1){var i=e.map(function(u){return _n.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Gn[t],a=kr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;co._pt=0,h.init(e,n?u+n:u,co,0,[e]),h.render(1,h),co._pt&&vf(1,co)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=_n.to(e,ps((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,uo.ease)),om(uo,e||{})},config:function(e){return om(Yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Gn[a]&&!ii[a]&&Ra(t+" effect requires "+a+" plugin.")}),zh[t]=function(a,l,c){return n(_i(a),xi(l||{},r),c)},o&&(cn.prototype[t]=function(a,l,c){return this.add(zh[t](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):ct},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,r;for(n.smoothChildTiming=Xn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=r;return Xi(Nt,n,0),n},context:function(e,t){return e?new Xm(e,t):Pt},matchMedia:function(e){return new vy(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nf()},addEventListener:function(e,t){var n=Ql[e]||(Ql[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ql[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:jx,wrapYoyo:Qx,distribute:Cm,random:Im,snap:Pm,normalize:Jx,getUnit:un,clamp:qx,splitColor:Om,toArray:_i,selector:Qh,mapRange:Dm,pipe:Kx,unitize:$x,interpolate:ey,shuffle:Rm},install:_m,effects:zh,ticker:Wn,updateRoot:cn.updateRoot,plugins:Gn,globalTimeline:Nt,core:{PropTween:Rn,globals:xm,Tween:Wt,Timeline:cn,Animation:Ia,getCache:kr,_removeLinkedListItem:ac,reverting:function(){return mn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return rf=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return rc[s]=Wt[s]});Wn.add(cn.updateRoot);co=rc.to({},{duration:0});var My=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Sy=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=My(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Xh=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Jt(r)&&(l={},An(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Sy(a,r)}}}},_n=rc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Xh("roundProps",ef),Xh("modifiers"),Xh("snap",Pm))||rc;Wt.version=cn.version=_n.version="3.12.5";gm=1;sf()&&po();var by=ct.Power0,Ty=ct.Power1,wy=ct.Power2,Ey=ct.Power3,Ay=ct.Power4,Ry=ct.Linear,Cy=ct.Quad,Py=ct.Cubic,Iy=ct.Quart,Ly=ct.Quint,Dy=ct.Strong,Ny=ct.Elastic,Uy=ct.Back,Oy=ct.SteppedEase,Fy=ct.Bounce,By=ct.Sine,ky=ct.Expo,zy=ct.Circ;var Ym,Hr,_o,Rf,Ms,Vy,qm,Cf,Hy=function(){return typeof window<"u"},mr={},vs=180/Math.PI,xo=Math.PI/180,go=Math.atan2,Zm=1e8,Pf=/([A-Z])/g,Gy=/(left|right|width|margin|padding|x)/i,Wy=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ng=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zy=function(e,t,n){return e.style[t]=n},Ky=function(e,t,n){return e.style.setProperty(t,n)},$y=function(e,t,n){return e._gsap[t]=n},Jy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jy=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Qy=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ut="transform",qn=Ut+"Origin",ev=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in mr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=pr(i,a)}):this.tfm[e]=o.x?o[e]:pr(i,e),e===qn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ut)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=Ut}(r||t)&&this.props.push(e,t,r[e])},ig=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Pf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cf(),(!r||!r.isStart)&&!n[Ut]&&(ig(n),i.zOrigin&&n[qn]&&(n[qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rg=function(e,t){var n={target:e,props:[],revert:tv,save:ev};return e._gsap||_n.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},sg,wf=function(e,t){var n=Hr.createElementNS?Hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hr.createElement(e);return n&&n.style?n:Hr.createElement(e)},Zi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,yo(t)||t,1)||""},Km="O,Moz,ms,Ms,Webkit".split(","),yo=function(e,t,n){var i=t||Ms,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Km[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Km[o]:"")+e},Ef=function(){Hy()&&window.document&&(Ym=window,Hr=Ym.document,_o=Hr.documentElement,Ms=wf("div")||{style:{}},Vy=wf("div"),Ut=yo(Ut),qn=Ut+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sg=!!yo("perspective"),Cf=_n.core.reverting,Rf=1)},Sf=function s(e){var t=wf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(_o.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),_o.removeChild(t),this.style.cssText=r,o},$m=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},og=function(e){var t;try{t=e.getBBox()}catch{t=Sf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Sf||(t=Sf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+$m(e,["x","cx","x1"])||0,y:+$m(e,["y","cy","y1"])||0,width:0,height:0}:t},ag=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&og(e))},Ss=function(e,t){if(t){var n=e.style,i;t in mr&&t!==qn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pf,"-$1").toLowerCase())):n.removeAttribute(t)}},Gr=function(e,t,n,i,r,o){var a=new Rn(e._pt,t,n,0,1,o?ng:tg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Jm={deg:1,rad:1,turn:1},nv={grid:1,flex:1},Wr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ms.style,l=Gy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!r||Jm[i]||Jm[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&ag(e),(d||o==="%")&&(mr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],kt(d?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Hr||!g.appendChild)&&(g=Hr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Wn.time&&!m.uncache)return kt(r/m.width*h);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=h+i,_=e[u],b?e.style[t]=b:Ss(e,t)}else(d||o==="%")&&!nv[Zi(g,"display")]&&(a.position=Zi(e,"position")),g===e&&(a.position="static"),g.appendChild(Ms),_=Ms[u],g.removeChild(Ms),a.position="absolute";return l&&d&&(m=kr(g),m.time=Wn.time,m.width=g[u]),kt(f?_*r/h:_&&r?h/_*r:0)},pr=function(e,t,n,i){var r;return Rf||Ef(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),mr[t]&&t!=="transform"?(r=Ua(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:fc(Zi(e,qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=hc[t]&&hc[t](e,t,n)||Zi(e,t)||ff(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Wr(e,t,r,n)+n:r},iv=function(e,t,n,i){if(!n||n==="none"){var r=yo(t,e,1),o=r&&Zi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Zi(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,yf),l=0,c=0,u,h,f,d,_,g,m,p,b,S,x,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Zi(e,t)||i,g?e.style[t]=g:Ss(e,t)),u=[n,i],df(u),n=u[0],i=u[1],f=n.match(ms)||[],E=i.match(ms)||[],E.length){for(;h=ms.exec(i);)m=h[0],b=i.substring(l,h.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=gs(d,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=ms.lastIndex-S.length,S||(S=S||Yn.units[t]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(d=Wr(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?ng:tg;return af.test(i)&&(a.e=0),this._pt=a,a},jm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jm[n]||n,t[1]=jm[i]||i,t.join(" ")},sv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],mr[a]&&(l=1,a=a==="transformOrigin"?qn:Ut),Ss(n,a);l&&(Ss(n,Ut),o&&(o.svg&&n.removeAttribute("transform"),Ua(n,1),o.uncache=1,ig(i)))}},hc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,sv);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Na=[1,0,0,1,0,0],lg={},cg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qm=function(e){var t=Zi(e,Ut);return cg(t)?Na:t.substr(7).match(of).map(kt)},If=function(e,t){var n=e._gsap||kr(e),i=e.style,r=Qm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Na:r):(r===Na&&!e.offsetParent&&e!==_o&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,_o.appendChild(e)),r=Qm(e),l?i.display=l:Ss(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):_o.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Af=function(e,t,n,i,r,o){var a=e._gsap,l=r||If(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],S=t.split(" "),x=parseFloat(S[0])||0,E=parseFloat(S[1])||0,A,w,I,y;n?l!==Na&&(w=d*m-_*g)&&(I=x*(m/w)+E*(-g/w)+(g*b-m*p)/w,y=x*(-_/w)+E*(d/w)-(d*b-_*p)/w,x=I,E=y):(A=og(e),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),E=A.y+(~(S[1]||S[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&a.smooth?(p=x-c,b=E-u,a.xOffset=h+(p*d+b*g)-p,a.yOffset=f+(p*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[qn]="0px 0px",o&&(Gr(o,a,"xOrigin",c,x),Gr(o,a,"yOrigin",u,E),Gr(o,a,"xOffset",h,a.xOffset),Gr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},Ua=function(e,t){var n=e._gsap||new pf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zi(e,qn)||"0",u,h,f,d,_,g,m,p,b,S,x,E,A,w,I,y,v,L,N,V,G,X,H,Z,z,te,P,ie,Te,qe,Pe,Ne;return u=h=f=g=m=p=b=S=x=0,d=_=1,n.svg=!!(e.getCTM&&ag(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),w=If(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Af(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,A=n.yOrigin||0,w!==Na&&(L=w[0],N=w[1],V=w[2],G=w[3],u=X=w[4],h=H=w[5],w.length===6?(d=Math.sqrt(L*L+N*N),_=Math.sqrt(G*G+V*V),g=L||N?go(N,L)*vs:0,b=V||G?go(V,G)*vs+g:0,b&&(_*=Math.abs(Math.cos(b*xo))),n.svg&&(u-=E-(E*L+A*V),h-=A-(E*N+A*G))):(Ne=w[6],qe=w[7],P=w[8],ie=w[9],Te=w[10],Pe=w[11],u=w[12],h=w[13],f=w[14],I=go(Ne,Te),m=I*vs,I&&(y=Math.cos(-I),v=Math.sin(-I),Z=X*y+P*v,z=H*y+ie*v,te=Ne*y+Te*v,P=X*-v+P*y,ie=H*-v+ie*y,Te=Ne*-v+Te*y,Pe=qe*-v+Pe*y,X=Z,H=z,Ne=te),I=go(-V,Te),p=I*vs,I&&(y=Math.cos(-I),v=Math.sin(-I),Z=L*y-P*v,z=N*y-ie*v,te=V*y-Te*v,Pe=G*v+Pe*y,L=Z,N=z,V=te),I=go(N,L),g=I*vs,I&&(y=Math.cos(I),v=Math.sin(I),Z=L*y+N*v,z=X*y+H*v,N=N*y-L*v,H=H*y-X*v,L=Z,X=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=kt(Math.sqrt(L*L+N*N+V*V)),_=kt(Math.sqrt(H*H+Ne*Ne)),I=go(X,H),b=Math.abs(I)>2e-4?I*vs:0,x=Pe?1/(Pe<0?-Pe:Pe):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cg(Zi(e,Ut)),Z&&e.setAttribute("transform",Z))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(d*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=kt(d),n.scaleY=kt(_),n.rotation=kt(g)+a,n.rotationX=kt(m)+a,n.rotationY=kt(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[qn]=fc(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?av:sg?ug:ov,n.uncache=0,n},fc=function(e){return(e=e.split(" "))[0]+" "+e[1]},bf=function(e,t,n){var i=un(t);return kt(parseFloat(t)+parseFloat(Wr(e,"x",n+"px",i)))+i},ov=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ug(e,t)},xs="0deg",Da="0px",ys=") ",ug=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,x="",E=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==xs||u!==xs)){var A=parseFloat(u)*xo,w=Math.sin(A),I=Math.cos(A),y;A=parseFloat(h)*xo,y=Math.cos(A),o=bf(b,o,w*y*-S),a=bf(b,a,-Math.sin(A)*-S),l=bf(b,l,I*y*-S+S)}m!==Da&&(x+="perspective("+m+ys),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(E||o!==Da||a!==Da||l!==Da)&&(x+=l!==Da||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ys),c!==xs&&(x+="rotate("+c+ys),u!==xs&&(x+="rotateY("+u+ys),h!==xs&&(x+="rotateX("+h+ys),(f!==xs||d!==xs)&&(x+="skew("+f+", "+d+ys),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ys),b.style[Ut]=x||"translate(0, 0)"},av=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(o),x=parseFloat(a),E,A,w,I,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xo,c*=xo,E=Math.cos(l)*h,A=Math.sin(l)*h,w=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=xo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),w*=y,I*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),E*=y,A*=y)),E=kt(E),A=kt(A),w=kt(w),I=kt(I)):(E=h,I=f,A=w=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Wr(d,"x",o,"px"),x=Wr(d,"y",a,"px")),(_||g||m||p)&&(S=kt(S+_-(_*E+g*w)+m),x=kt(x+g-(_*A+g*I)+p)),(i||r)&&(y=d.getBBox(),S=kt(S+i/100*y.width),x=kt(x+r/100*y.height)),y="matrix("+E+","+A+","+w+","+I+","+S+","+x+")",d.setAttribute("transform",y),b&&(d.style[Ut]=y)},lv=function(e,t,n,i,r){var o=360,a=Jt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?vs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Zm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Zm)%o-~~(c/o)*o)),e._pt=f=new Rn(e._pt,t,n,i,c,Xy),f.e=u,f.u="deg",e._props.push(n),f},eg=function(e,t){for(var n in t)e[n]=t[n];return e},cv=function(e,t,n){var i=eg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ut]=t,a=Ua(n,1),Ss(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],o[Ut]=t,a=Ua(n,1),o[Ut]=c);for(l in mr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=un(c),_=un(u),h=d!==_?Wr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Rn(e._pt,a,l,h,f-h,Tf),e._pt.u=_||0,e._props.push(l));eg(a,i)};An("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});hc[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return pr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Lf={name:"css",register:Ef,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,b,S,x,E,A,w,I;Rf||Ef(),this.styles=this.styles||rg(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Gn[g]&&gf(g,t,n,i,e,r)))){if(d=typeof u,_=hc[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=mo(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",fr.lastIndex=0,fr.test(c)||(m=un(c),p=un(u)),p?m!==p&&(c=Wr(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),I.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Jt(c)&&~c.indexOf("random(")&&(c=mo(c)),un(c+"")||c==="auto"||(c+=Yn.units[g]||un(pr(e,g))||""),(c+"").charAt(1)==="="&&(c=pr(e,g))):c=pr(e,g),f=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),g in qi&&(g==="autoAlpha"&&(f===1&&pr(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),Gr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in mr,S){if(this.styles.save(g),x||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ua(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new Rn(this._pt,a,Ut,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new Rn(this._pt,E,"scaleY",E.scaleY,(b?gs(E.scaleY,b+h):h)-E.scaleY||0,Tf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(qn,0,a[qn]),u=rv(u),E.svg?Af(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Gr(this,E,"zOrigin",E.zOrigin,p),Gr(this,a,g,fc(c),fc(u)));continue}else if(g==="svgOrigin"){Af(e,u,1,A,0,this);continue}else if(g in lg){lv(this,E,g,f,b?gs(f,b+u):u);continue}else if(g==="smoothOrigin"){Gr(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){cv(this,u,e);continue}}else g in a||(g=yo(g)||g);if(S||(h||h===0)&&(f||f===0)&&!Wy.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=un(u)||(g in Yn.units?Yn.units[g]:m),m!==p&&(f=Wr(e,g,c,p)),this._pt=new Rn(this._pt,S?E:a,g,f,(b?gs(f,b+h):h)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?qy:Tf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Yy);else if(g in a)iv.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,r);else if(g!=="parseTransform"){oc(g,u);continue}S||(g in a?I.push(g,0,a[g]):I.push(g,1,c||e[g])),o.push(g)}}w&&Mf(this)},render:function(e,t){if(t.tween._time||!Cf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:pr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in mr&&t!==qn&&(e._gsap.x||pr(e,"x"))?n&&qm===n?t==="scale"?Jy:$y:(qm=n||{})&&(t==="scale"?jy:Qy):e.style&&!sc(e.style[t])?Zy:~t.indexOf("-")?Ky:uc(e,t)},core:{_removeProperty:Ss,_getMatrix:If}};_n.utils.checkPrefix=yo;_n.core.getStyleSaver=rg;(function(s,e,t,n){var i=An(s+","+e+","+t,function(r){mr[r]=1});An(e,function(r){Yn.units[r]="deg",lg[r]=1}),qi[i[13]]=s+","+e,An(n,function(r){var o=r.split(":");qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Yn.units[s]="px"});_n.registerPlugin(Lf);var Ki=_n.registerPlugin(Lf)||_n,IE=Ki.core.Tween;function hg(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function uv(s,e,t){return e&&hg(s.prototype,e),t&&hg(s,t),s}var hn,mc,hv,ri,Xr,Yr,Mo,dg,bs,Fa,pg,gr,Ci,mg,gg=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},_g=1,vo=[],rt=[],Pi=[],Ba=Date.now,Df=function(e,t){return t},fv=function(){var e=Fa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Pi),rt=n,Pi=i,Df=function(o,a){return t[o](a)}},xr=function(e,t){return~Pi.indexOf(e)&&Pi[Pi.indexOf(e)+1][t]},ka=function(e){return!!~pg.indexOf(e)},Pn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},dc="scrollLeft",pc="scrollTop",Nf=function(){return gr&&gr.isPressed||rt.cache++},gc=function(e,t){var n=function i(r){if(r||r===0){_g&&(ri.history.scrollRestoration="manual");var o=gr&&gr.isPressed;r=i.v=Math.round(r)||(gr&&gr.iOS?1:0),e(r),i.cacheID=rt.cache,o&&Df("ss",r)}else(t||rt.cache!==i.cacheID||Df("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},xn={s:dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gc(function(s){return arguments.length?ri.scrollTo(s,Yt.sc()):ri.pageXOffset||Xr[dc]||Yr[dc]||Mo[dc]||0})},Yt={s:pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:gc(function(s){return arguments.length?ri.scrollTo(xn.sc(),s):ri.pageYOffset||Xr[pc]||Yr[pc]||Mo[pc]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_r=function(e,t){var n=t.s,i=t.sc;ka(e)&&(e=Xr.scrollingElement||Yr);var r=rt.indexOf(e),o=i===Yt.sc?1:2;!~r&&(r=rt.push(e)-1),rt[r+o]||Pn(e,"scroll",Nf);var a=rt[r+o],l=a||(rt[r+o]=gc(xr(e,n),!0)||(ka(e)?i:gc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},_c=function(e,t,n){var i=e,r=e,o=Ba(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Ba();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(_){var g=a,m=r,p=Ba();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Oa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},xg=function(){Fa=hn.core.globals().ScrollTrigger,Fa&&Fa.core&&fv()},yg=function(e){return hn=e||gg(),!mc&&hn&&typeof document<"u"&&document.body&&(ri=window,Xr=document,Yr=Xr.documentElement,Mo=Xr.body,pg=[ri,Xr,Yr,Mo],hv=hn.utils.clamp,mg=hn.core.context||function(){},bs="onpointerenter"in Mo?"pointer":"mouse",dg=zt.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=zt.eventTypes=("ontouchstart"in Yr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _g=0},500),xg(),mc=1),mc};xn.op=Yt;rt.cache=0;var zt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){mc||yg(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Fa||xg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,S=n.onPress,x=n.onRelease,E=n.onRight,A=n.onLeft,w=n.onUp,I=n.onDown,y=n.onChangeX,v=n.onChangeY,L=n.onChange,N=n.onToggleX,V=n.onToggleY,G=n.onHover,X=n.onHoverEnd,H=n.onMove,Z=n.ignoreCheck,z=n.isNormalizer,te=n.onGestureStart,P=n.onGestureEnd,ie=n.onWheel,Te=n.onEnable,qe=n.onDisable,Pe=n.onClick,Ne=n.scrollSpeed,K=n.capture,J=n.allowClicks,le=n.lockAxis,_e=n.onLockAxis;this.target=a=In(a)||Yr,this.vars=n,d&&(d=hn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,Ne=Ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(Mo).lineHeight)||22);var ye,Ie,ft,C,ke,Se,Ae,O=this,He=0,he=0,ze=n.passive||!u,$e=_r(a,xn),dt=_r(a,Yt),R=$e(),M=dt(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ci[0]==="pointerdown",$=ka(a),j=a.ownerDocument||Xr,q=[0,0,0],ve=[0,0,0],oe=0,Re=function(){return oe=Ba()},de=function(Le,Je){return(O.event=Le)&&d&&~d.indexOf(Le.target)||Je&&k&&Le.pointerType!=="touch"||Z&&Z(Le,Je)},se=function(){O._vx.reset(),O._vy.reset(),Ie.pause(),h&&h(O)},fe=function(){var Le=O.deltaX=fg(q),Je=O.deltaY=fg(ve),pe=Math.abs(Le)>=i,We=Math.abs(Je)>=i;L&&(pe||We)&&L(O,Le,Je,q,ve),pe&&(E&&O.deltaX>0&&E(O),A&&O.deltaX<0&&A(O),y&&y(O),N&&O.deltaX<0!=He<0&&N(O),He=O.deltaX,q[0]=q[1]=q[2]=0),We&&(I&&O.deltaY>0&&I(O),w&&O.deltaY<0&&w(O),v&&v(O),V&&O.deltaY<0!=he<0&&V(O),he=O.deltaY,ve[0]=ve[1]=ve[2]=0),(C||ft)&&(H&&H(O),ft&&(b(O),ft=!1),C=!1),Se&&!(Se=!1)&&_e&&_e(O),ke&&(ie(O),ke=!1),ye=0},Oe=function(Le,Je,pe){q[pe]+=Le,ve[pe]+=Je,O._vx.update(Le),O._vy.update(Je),c?ye||(ye=requestAnimationFrame(fe)):fe()},Ce=function(Le,Je){le&&!Ae&&(O.axis=Ae=Math.abs(Le)>Math.abs(Je)?"x":"y",Se=!0),Ae!=="y"&&(q[2]+=Le,O._vx.update(Le,!0)),Ae!=="x"&&(ve[2]+=Je,O._vy.update(Je,!0)),c?ye||(ye=requestAnimationFrame(fe)):fe()},ue=function(Le){if(!de(Le,1)){Le=Oa(Le,u);var Je=Le.clientX,pe=Le.clientY,We=Je-O.x,Fe=pe-O.y,Ze=O.isDragging;O.x=Je,O.y=pe,(Ze||Math.abs(O.startX-Je)>=r||Math.abs(O.startY-pe)>=r)&&(b&&(ft=!0),Ze||(O.isDragging=!0),Ce(We,Fe),Ze||m&&m(O))}},Xe=O.onPress=function(xe){de(xe,1)||xe&&xe.button||(O.axis=Ae=null,Ie.pause(),O.isPressed=!0,xe=Oa(xe),He=he=0,O.startX=O.x=xe.clientX,O.startY=O.y=xe.clientY,O._vx.reset(),O._vy.reset(),Pn(z?a:j,Ci[1],ue,ze,!0),O.deltaX=O.deltaY=0,S&&S(O))},D=O.onRelease=function(xe){if(!de(xe,1)){Cn(z?a:j,Ci[1],ue,!0);var Le=!isNaN(O.y-O.startY),Je=O.isDragging,pe=Je&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),We=Oa(xe);!pe&&Le&&(O._vx.reset(),O._vy.reset(),u&&J&&hn.delayedCall(.08,function(){if(Ba()-oe>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(j.createEvent){var Fe=j.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,ri,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Fe)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,h&&Je&&!z&&Ie.restart(!0),p&&Je&&p(O),x&&x(O,pe)}},re=function(Le){return Le.touches&&Le.touches.length>1&&(O.isGesturing=!0)&&te(Le,O.isDragging)},ae=function(){return(O.isGesturing=!1)||P(O)},me=function(Le){if(!de(Le)){var Je=$e(),pe=dt();Oe((Je-R)*Ne,(pe-M)*Ne,1),R=Je,M=pe,h&&Ie.restart(!0)}},ne=function(Le){if(!de(Le)){Le=Oa(Le,u),ie&&(ke=!0);var Je=(Le.deltaMode===1?l:Le.deltaMode===2?ri.innerHeight:1)*_;Oe(Le.deltaX*Je,Le.deltaY*Je,0),h&&!z&&Ie.restart(!0)}},Q=function(Le){if(!de(Le)){var Je=Le.clientX,pe=Le.clientY,We=Je-O.x,Fe=pe-O.y;O.x=Je,O.y=pe,C=!0,h&&Ie.restart(!0),(We||Fe)&&Ce(We,Fe)}},be=function(Le){O.event=Le,G(O)},Ve=function(Le){O.event=Le,X(O)},pt=function(Le){return de(Le)||Oa(Le,u)&&Pe(O)};Ie=O._dc=hn.delayedCall(f||.25,se).pause(),O.deltaX=O.deltaY=0,O._vx=_c(0,50,!0),O._vy=_c(0,50,!0),O.scrollX=$e,O.scrollY=dt,O.isDragging=O.isGesturing=O.isPressed=!1,mg(this),O.enable=function(xe){return O.isEnabled||(Pn($?j:a,"scroll",Nf),o.indexOf("scroll")>=0&&Pn($?j:a,"scroll",me,ze,K),o.indexOf("wheel")>=0&&Pn(a,"wheel",ne,ze,K),(o.indexOf("touch")>=0&&dg||o.indexOf("pointer")>=0)&&(Pn(a,Ci[0],Xe,ze,K),Pn(j,Ci[2],D),Pn(j,Ci[3],D),J&&Pn(a,"click",Re,!0,!0),Pe&&Pn(a,"click",pt),te&&Pn(j,"gesturestart",re),P&&Pn(j,"gestureend",ae),G&&Pn(a,bs+"enter",be),X&&Pn(a,bs+"leave",Ve),H&&Pn(a,bs+"move",Q)),O.isEnabled=!0,xe&&xe.type&&Xe(xe),Te&&Te(O)),O},O.disable=function(){O.isEnabled&&(vo.filter(function(xe){return xe!==O&&ka(xe.target)}).length||Cn($?j:a,"scroll",Nf),O.isPressed&&(O._vx.reset(),O._vy.reset(),Cn(z?a:j,Ci[1],ue,!0)),Cn($?j:a,"scroll",me,K),Cn(a,"wheel",ne,K),Cn(a,Ci[0],Xe,K),Cn(j,Ci[2],D),Cn(j,Ci[3],D),Cn(a,"click",Re,!0),Cn(a,"click",pt),Cn(j,"gesturestart",re),Cn(j,"gestureend",ae),Cn(a,bs+"enter",be),Cn(a,bs+"leave",Ve),Cn(a,bs+"move",Q),O.isEnabled=O.isPressed=O.isDragging=!1,qe&&qe(O))},O.kill=O.revert=function(){O.disable();var xe=vo.indexOf(O);xe>=0&&vo.splice(xe,1),gr===O&&(gr=0)},vo.push(O),z&&ka(a)&&(gr=O),O.enable(g)},uv(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();zt.version="3.12.5";zt.create=function(s){return new zt(s)};zt.register=yg;zt.getAll=function(){return vo.slice()};zt.getById=function(s){return vo.filter(function(e){return e.vars.id===s})[0]};gg()&&hn.registerPlugin(zt);var Ee,To,ut,Ot,Ii,Rt,Fg,Dc,ja,Ya,Va,xc,yn,Fc,Hf,Dn,vg,Mg,wo,Bg,Uf,kg,Ln,Gf,zg,Vg,qr,Wf,Kf,Eo,$f,Nc,Xf,Of,yc=1,vn=Date.now,Ff=vn(),Mi=0,Ha=0,Sg=function(e,t,n){var i=oi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},bg=function(e,t){return t&&(!oi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dv=function s(){return Ha&&requestAnimationFrame(s)},Tg=function(){return Fc=1},wg=function(){return Fc=0},$i=function(e){return e},Ga=function(e){return Math.round(e*1e5)/1e5||0},Hg=function(){return typeof window<"u"},Gg=function(){return Ee||Hg()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Cs=function(e){return!!~Fg.indexOf(e)},Wg=function(e){return(e==="Height"?$f:ut["inner"+e])||Ii["client"+e]||Rt["client"+e]},Xg=function(e){return xr(e,"getBoundingClientRect")||(Cs(e)?function(){return Lc.width=ut.innerWidth,Lc.height=$f,Lc}:function(){return yr(e)})},pv=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=xr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Wg(r):e["client"+r])||0}},mv=function(e,t){return!t||~Pi.indexOf(e)?Xg(e):function(){return Lc}},Ji=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=xr(e,n))?o()-Xg(e)()[r]:Cs(e)?(Ii[n]||Rt[n])-Wg(i):e[n]-e["offset"+i])},vc=function(e,t){for(var n=0;n<wo.length;n+=3)(!t||~t.indexOf(wo[n+1]))&&e(wo[n],wo[n+1],wo[n+2])},oi=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},Wa=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},za=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Bf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},So=Math.abs,Yg="left",qg="top",Jf="right",jf="bottom",Es="width",As="height",qa="Right",Za="Left",Ka="Top",$a="Bottom",qt="padding",yi="margin",Ro="Width",Qf="Height",jt="px",vi=function(e){return ut.getComputedStyle(e)},gv=function(e){var t=vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Eg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yr=function(e,t){var n=t&&vi(e)[Hf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Zg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},_v=function(e){return function(t){return Ee.utils.snap(Zg(e),t)}},ed=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},xv=function(e){return function(t,n){return ed(Zg(e))(t,n.direction)}},Mc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},rn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Sc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ag={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bc={toggleActions:"play",anticipatePin:0},Oc={top:0,left:0,center:.5,bottom:1,right:1},Rc=function(e,t){if(oi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Oc?Oc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Tc=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=Ot.createElement("div"),g=Cs(n)||xr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Rt:n,b=e.indexOf("start")!==-1,S=b?c:u,x="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Yt?Jf:jf)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Cc(_,0,i,b),_},Cc=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Ro]=1,r["border"+a+Ro]=0,r[n.p]=t+"px",Ee.set(e,r)},st=[],Yf={},Qa,Rg=function(){return vn()-Mi>34&&(Qa||(Qa=requestAnimationFrame(vr)))},bo=function(){(!Ln||!Ln.isPressed||Ln.startX>Rt.clientWidth)&&(rt.cache++,Ln?Qa||(Qa=requestAnimationFrame(vr)):vr(),Mi||Is("scrollStart"),Mi=vn())},kf=function(){Vg=ut.innerWidth,zg=ut.innerHeight},Xa=function(){rt.cache++,!yn&&!kg&&!Ot.fullscreenElement&&!Ot.webkitFullscreenElement&&(!Gf||Vg!==ut.innerWidth||Math.abs(ut.innerHeight-zg)>ut.innerHeight*.25)&&Dc.restart(!0)},Ps={},yv=[],Kg=function s(){return nn(Ke,"scrollEnd",s)||ws(!0)},Is=function(e){return Ps[e]&&Ps[e].map(function(t){return t()})||yv},si=[],$g=function(e){for(var t=0;t<si.length;t+=5)(!e||si[t+4]&&si[t+4].query===e)&&(si[t].style.cssText=si[t+1],si[t].getBBox&&si[t].setAttribute("transform",si[t+2]||""),si[t+3].uncache=1)},td=function(e,t){var n;for(Dn=0;Dn<st.length;Dn++)n=st[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Nc=!0,t&&$g(t),t||Is("revert")},Jg=function(e,t){rt.cache++,(t||!Nn)&&rt.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(ut.history.scrollRestoration=Kf=e)},Nn,Rs=0,Cg,vv=function(){if(Cg!==Rs){var e=Cg=Rs;requestAnimationFrame(function(){return e===Rs&&ws(!0)})}},jg=function(){Rt.appendChild(Eo),$f=!Ln&&Eo.offsetHeight||ut.innerHeight,Rt.removeChild(Eo)},Pg=function(e){return ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ws=function(e,t){if(Mi&&!e&&!Nc){rn(Ke,"scrollEnd",Kg);return}jg(),Nn=Ke.isRefreshing=!0,rt.forEach(function(i){return Un(i)&&++i.cacheID&&(i.rec=i())});var n=Is("refreshInit");Bg&&Ke.sort(),t||td(),rt.forEach(function(i){Un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Nc=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Xf=1,Pg(!0),st.forEach(function(i){var r=Ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Pg(!1),Xf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){Un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Jg(Kf,1),Dc.pause(),Rs++,Nn=2,vr(2),st.forEach(function(i){return Un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=Ke.isRefreshing=!1,Is("refresh")},qf=0,Pc=1,Ja,vr=function(e){if(e===2||!Nn&&!Nc){Ke.isUpdating=!0,Ja&&Ja.update(0);var t=st.length,n=vn(),i=n-Ff>=50,r=t&&st[0].scroll();if(Pc=qf>r?-1:1,Nn||(qf=r),i&&(Mi&&!Fc&&n-Mi>200&&(Mi=0,Is("scrollEnd")),Va=Ff,Ff=n),Pc<0){for(Dn=t;Dn-- >0;)st[Dn]&&st[Dn].update(0,i);Pc=1}else for(Dn=0;Dn<t;Dn++)st[Dn]&&st[Dn].update(0,i);Ke.isUpdating=!1}Qa=0},Zf=[Yg,qg,jf,Jf,yi+$a,yi+qa,yi+Ka,yi+Za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ic=Zf.concat([Es,As,"boxSizing","max"+Ro,"max"+Qf,"position",yi,qt,qt+Ka,qt+qa,qt+$a,qt+Za]),Mv=function(e,t,n){Ao(n);var i=e._gsap;if(i.spacerIsNative)Ao(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},zf=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Zf.length,o=t.style,a=e.style,l;r--;)l=Zf[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[jf]=a[Jf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Es]=Uc(e,xn)+jt,o[As]=Uc(e,Yt)+jt,o[qt]=a[yi]=a[qg]=a[Yg]="0",Ao(i),a[Es]=a["max"+Ro]=n[Es],a[As]=a["max"+Qf]=n[As],a[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Sv=/([A-Z])/g,Ao=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Sv,"-$1").toLowerCase())}},wc=function(e){for(var t=Ic.length,n=e.style,i=[],r=0;r<t;r++)i.push(Ic[r],n[Ic[r]]);return i.t=e,i},bv=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Lc={left:0,top:0},Ig=function(e,t,n,i,r,o,a,l,c,u,h,f,d,_){Un(e)&&(e=e(l)),oi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Rc("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,b;if(d&&d.seek(0),isNaN(e)||(e=+e),Wa(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Cc(a,n,i,!0);else{Un(t)&&(t=t(l));var S=(e||"0").split(" "),x,E,A,w;b=In(t,l)||Rt,x=yr(b)||{},(!x||!x.left&&!x.top)&&vi(b).display==="none"&&(w=b.style.display,b.style.display="block",x=yr(b),w?b.style.display=w:b.style.removeProperty("display")),E=Rc(S[0],x[i.d]),A=Rc(S[1]||"0",n),e=x[i.p]-c[i.p]-u+E+r-A,a&&Cc(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var I=e+n,y=o._isStart;m="scroll"+i.d2,Cc(o,I,i,y&&I>20||!y&&(h?Math.max(Rt[m],Ii[m]):o.parentNode[m])<=I+1),h&&(c=yr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return d&&b&&(m=yr(b),d.seek(f),p=yr(b),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Tv=/(webkit|moz|length|cssText|inset)/i,Lg=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Rt){e._stOrig=r.cssText,a=vi(e);for(o in a)!+o&&!Tv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Qg=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Ec=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Dg=function(e,t){var n=_r(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=Qg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&vr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ee.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},rn(e,"wheel",n.wheelHandler),Ke.isTouch&&rn(e,"touchmove",n.wheelHandler),r},Ke=(function(){function s(t,n){To||s.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wf(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ha){this.update=this.refresh=this.kill=$i;return}n=Eg(oi(n)||Wa(n)||n.nodeType?{trigger:n}:n,bc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,b=r.onSnapComplete,S=r.once,x=r.snap,E=r.pinReparent,A=r.pinSpacer,w=r.containerAnimation,I=r.fastScrollEnd,y=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:Yt,L=!h&&h!==0,N=In(n.scroller||ut),V=Ee.core.getCache(N),G=Cs(N),X=("pinType"in n?n.pinType:xr(N,"pinType")||G&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=L&&n.toggleActions.split(" "),z="markers"in n?n.markers:bc.markers,te=G?0:parseFloat(vi(N)["border"+v.p2+Ro])||0,P=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Te=pv(N,G,v),qe=mv(N,G),Pe=0,Ne=0,K=0,J=_r(N,v),le,_e,ye,Ie,ft,C,ke,Se,Ae,O,He,he,ze,$e,dt,R,M,k,$,j,q,ve,oe,Re,de,se,fe,Oe,Ce,ue,Xe,D,re,ae,me,ne,Q,be,Ve;if(P._startClamp=P._endClamp=!1,P._dir=v,m*=45,P.scroller=N,P.scroll=w?w.time.bind(w):J,Ie=J(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Bg=1,n.refreshPriority===-9999&&(Ja=P)),V.tweenScroll=V.tweenScroll||{top:Dg(N,Yt),left:Dg(N,xn)},P.tweenTo=le=V.tweenScroll[v.p],P.scrubDuration=function(pe){re=Wa(pe)&&pe,re?D?D.duration(pe):D=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return p&&p(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(h),ue=0,l||(l=i.vars.id)),x&&((!Ts(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Rt.style&&Ee.set(G?[Rt,Ii]:N,{scrollBehavior:"auto"}),rt.forEach(function(pe){return Un(pe)&&pe.target===(G?Ot.scrollingElement||Ii:N)&&(pe.smooth=!1)}),ye=Un(x.snapTo)?x.snapTo:x.snapTo==="labels"?_v(i):x.snapTo==="labelsDirectional"?xv(i):x.directional!==!1?function(pe,We){return ed(x.snapTo)(pe,vn()-Ne<500?0:We.direction)}:Ee.utils.snap(x.snapTo),ae=x.duration||{min:.1,max:2},ae=Ts(ae)?Ya(ae.min,ae.max):Ya(ae,ae),me=Ee.delayedCall(x.delay||re/2||.1,function(){var pe=J(),We=vn()-Ne<500,Fe=le.tween;if((We||Math.abs(P.getVelocity())<10)&&!Fe&&!Fc&&Pe!==pe){var Ze=(pe-C)/$e,Ht=i&&!L?i.totalProgress():Ze,tt=We?0:(Ht-Xe)/(vn()-Va)*1e3||0,Ct=Ee.utils.clamp(-Ze,1-Ze,So(tt/2)*tt/.185),Gt=Ze+(x.inertia===!1?0:Ct),wt,Mt,_t=x,Qn=_t.onStart,Et=_t.onInterrupt,wn=_t.onComplete;if(wt=ye(Gt,P),Wa(wt)||(wt=Gt),Mt=Math.round(C+wt*$e),pe<=ke&&pe>=C&&Mt!==pe){if(Fe&&!Fe._initted&&Fe.data<=So(Mt-pe))return;x.inertia===!1&&(Ct=wt-Ze),le(Mt,{duration:ae(So(Math.max(So(Gt-Ht),So(wt-Ht))*.185/tt/.05||0)),ease:x.ease||"power3",data:So(Mt-pe),onInterrupt:function(){return me.restart(!0)&&Et&&Et(P)},onComplete:function(){P.update(),Pe=J(),i&&(D?D.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ue=Xe=i&&!L?i.totalProgress():P.progress,b&&b(P),wn&&wn(P)}},pe,Ct*$e,Mt-pe-Ct*$e),Qn&&Qn(P,le.tween)}}else P.isActive&&Pe!==pe&&me.restart(!0)}).pause()),l&&(Yf[l]=P),f=P.trigger=In(f||d!==!0&&d),Ve=f&&f._gsap&&f._gsap.stRevert,Ve&&(Ve=Ve(P)),d=d===!0?f:In(d),oi(a)&&(a={targets:f,className:a}),d&&(_===!1||_===yi||(_=!_&&d.parentNode&&d.parentNode.style&&vi(d.parentNode).display==="flex"?!1:qt),P.pin=d,_e=Ee.core.getCache(d),_e.spacer?dt=_e.pinState:(A&&(A=In(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),_e.spacerIsNative=!!A,A&&(_e.spacerState=wc(A))),_e.spacer=k=A||Ot.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),_e.pinState=dt=wc(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),P.spacer=k=_e.spacer,Ce=vi(d),Re=Ce[_+v.os2],j=Ee.getProperty(d),q=Ee.quickSetter(d,v.a,jt),zf(d,k,Ce),M=wc(d)),z){he=Ts(z)?Eg(z,Ag):Ag,O=Tc("scroller-start",l,N,v,he,0),He=Tc("scroller-end",l,N,v,he,0,O),$=O["offset"+v.op.d2];var pt=In(xr(N,"content")||N);Se=this.markerStart=Tc("start",l,pt,v,he,$,0,w),Ae=this.markerEnd=Tc("end",l,pt,v,he,$,0,w),w&&(be=Ee.quickSetter([Se,Ae],v.a,jt)),!X&&!(Pi.length&&xr(N,"fixedMarkers")===!0)&&(gv(G?Rt:N),Ee.set([O,He],{force3D:!0}),se=Ee.quickSetter(O,v.a,jt),Oe=Ee.quickSetter(He,v.a,jt))}if(w){var xe=w.vars.onUpdate,Le=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),xe&&xe.apply(w,Le||[])})}if(P.previous=function(){return st[st.indexOf(P)-1]},P.next=function(){return st[st.indexOf(P)+1]},P.revert=function(pe,We){if(!We)return P.kill(!0);var Fe=pe!==!1||!P.enabled,Ze=yn;Fe!==P.isReverted&&(Fe&&(ne=Math.max(J(),P.scroll.rec||0),K=P.progress,Q=i&&i.progress()),Se&&[Se,Ae,O,He].forEach(function(Ht){return Ht.style.display=Fe?"none":"block"}),Fe&&(yn=P,P.update(Fe)),d&&(!E||!P.isActive)&&(Fe?Mv(d,k,dt):zf(d,k,vi(d),de)),Fe||P.update(Fe),yn=Ze,P.isReverted=Fe)},P.refresh=function(pe,We,Fe,Ze){if(!((yn||!P.enabled)&&!We)){if(d&&pe&&Mi){rn(s,"scrollEnd",Kg);return}!Nn&&ie&&ie(P),yn=P,le.tween&&!Fe&&(le.tween.kill(),le.tween=0),D&&D.pause(),g&&i&&i.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ht=Te(),tt=qe(),Ct=w?w.duration():Ji(N,v),Gt=$e<=.01,wt=0,Mt=Ze||0,_t=Ts(Fe)?Fe.end:n.end,Qn=n.endTrigger||f,Et=Ts(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),wn=P.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,P),fi=f&&Math.max(0,st.indexOf(P))||0,$t=fi,T,U,W,Y,F,ee,ce,we,Me,Be,Ue,De,Qe;for(z&&Ts(Fe)&&(De=Ee.getProperty(O,v.p),Qe=Ee.getProperty(He,v.p));$t--;)ee=st[$t],ee.end||ee.refresh(0,1)||(yn=P),ce=ee.pin,ce&&(ce===f||ce===d||ce===wn)&&!ee.isReverted&&(Be||(Be=[]),Be.unshift(ee),ee.revert(!0,!0)),ee!==st[$t]&&(fi--,$t--);for(Un(Et)&&(Et=Et(P)),Et=Sg(Et,"start",P),C=Ig(Et,f,Ht,v,J(),Se,O,P,tt,te,X,Ct,w,P._startClamp&&"_startClamp")||(d?-.001:0),Un(_t)&&(_t=_t(P)),oi(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(oi(Et)?Et.split(" ")[0]:"")+_t:(wt=Rc(_t.substr(2),Ht),_t=oi(Et)?Et:(w?Ee.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,C):C)+wt,Qn=f)),_t=Sg(_t,"end",P),ke=Math.max(C,Ig(_t||(Qn?"100% 0":Ct),Qn,Ht,v,J()+wt,Ae,He,P,tt,te,X,Ct,w,P._endClamp&&"_endClamp"))||-.001,wt=0,$t=fi;$t--;)ee=st[$t],ce=ee.pin,ce&&ee.start-ee._pinPush<=C&&!w&&ee.end>0&&(T=ee.end-(P._startClamp?Math.max(0,ee.start):ee.start),(ce===f&&ee.start-ee._pinPush<C||ce===wn)&&isNaN(Et)&&(wt+=T*(1-ee.progress)),ce===d&&(Mt+=T));if(C+=wt,ke+=wt,P._startClamp&&(P._startClamp+=wt),P._endClamp&&!Nn&&(P._endClamp=ke||-.001,ke=Math.min(ke,Ji(N,v))),$e=ke-C||(C-=.01)&&.001,Gt&&(K=Ee.utils.clamp(0,1,Ee.utils.normalize(C,ke,ne))),P._pinPush=Mt,Se&&wt&&(T={},T[v.a]="+="+wt,wn&&(T[v.p]="-="+J()),Ee.set([Se,Ae],T)),d&&!(Xf&&P.end>=Ji(N,v)))T=vi(d),Y=v===Yt,W=J(),ve=parseFloat(j(v.a))+Mt,!Ct&&ke>1&&(Ue=(G?Ot.scrollingElement||Ii:N).style,Ue={style:Ue,value:Ue["overflow"+v.a.toUpperCase()]},G&&vi(Rt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ue.style["overflow"+v.a.toUpperCase()]="scroll")),zf(d,k,T),M=wc(d),U=yr(d,!0),we=X&&_r(N,Y?xn:Yt)(),_?(de=[_+v.os2,$e+Mt+jt],de.t=k,$t=_===qt?Uc(d,v)+$e+Mt:0,$t&&(de.push(v.d,$t+jt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=$t+jt)),Ao(de),wn&&st.forEach(function(ht){ht.pin===wn&&ht.vars.pinSpacing!==!1&&(ht._subPinOffset=!0)}),X&&J(ne)):($t=Uc(d,v),$t&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=$t+jt)),X&&(F={top:U.top+(Y?W-C:we)+jt,left:U.left+(Y?we:W-C)+jt,boxSizing:"border-box",position:"fixed"},F[Es]=F["max"+Ro]=Math.ceil(U.width)+jt,F[As]=F["max"+Qf]=Math.ceil(U.height)+jt,F[yi]=F[yi+Ka]=F[yi+qa]=F[yi+$a]=F[yi+Za]="0",F[qt]=T[qt],F[qt+Ka]=T[qt+Ka],F[qt+qa]=T[qt+qa],F[qt+$a]=T[qt+$a],F[qt+Za]=T[qt+Za],R=bv(dt,F,E),Nn&&J(0)),i?(Me=i._initted,Uf(1),i.render(i.duration(),!0,!0),oe=j(v.a)-ve+$e+Mt,fe=Math.abs($e-oe)>1,X&&fe&&R.splice(R.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Uf(0)):oe=$e,Ue&&(Ue.value?Ue.style["overflow"+v.a.toUpperCase()]=Ue.value:Ue.style.removeProperty("overflow-"+v.a));else if(f&&J()&&!w)for(U=f.parentNode;U&&U!==Rt;)U._pinOffset&&(C-=U._pinOffset,ke-=U._pinOffset),U=U.parentNode;Be&&Be.forEach(function(ht){return ht.revert(!1,!0)}),P.start=C,P.end=ke,Ie=ft=Nn?ne:J(),!w&&!Nn&&(Ie<ne&&J(ne),P.scroll.rec=0),P.revert(!1,!0),Ne=vn(),me&&(Pe=-1,me.restart(!0)),yn=0,i&&L&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Gt||K!==P.progress||w||g)&&(i&&!L&&i.totalProgress(w&&C<-.001&&!K?Ee.utils.normalize(C,ke,0):K,!0),P.progress=Gt||(Ie-C)/$e===K?0:K),d&&_&&(k._pinOffset=Math.round(P.progress*oe)),D&&D.invalidate(),isNaN(De)||(De-=Ee.getProperty(O,v.p),Qe-=Ee.getProperty(He,v.p),Ec(O,v,De),Ec(Se,v,De-(Ze||0)),Ec(He,v,Qe),Ec(Ae,v,Qe-(Ze||0))),Gt&&!Nn&&P.update(),u&&!Nn&&!ze&&(ze=!0,u(P),ze=!1)}},P.getVelocity=function(){return(J()-ft)/(vn()-Va)*1e3||0},P.endAnimation=function(){za(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||za(i,P.direction<0,1):za(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(C||P.refresh()||C)+i.labels[pe]/i.duration()*$e||0},P.getTrailing=function(pe){var We=st.indexOf(P),Fe=P.direction>0?st.slice(0,We).reverse():st.slice(We+1);return(oi(pe)?Fe.filter(function(Ze){return Ze.vars.preventOverlaps===pe}):Fe).filter(function(Ze){return P.direction>0?Ze.end<=C:Ze.start>=ke})},P.update=function(pe,We,Fe){if(!(w&&!Fe&&!pe)){var Ze=Nn===!0?ne:P.scroll(),Ht=pe?0:(Ze-C)/$e,tt=Ht<0?0:Ht>1?1:Ht||0,Ct=P.progress,Gt,wt,Mt,_t,Qn,Et,wn,fi;if(We&&(ft=Ie,Ie=w?J():Ze,x&&(Xe=ue,ue=i&&!L?i.totalProgress():tt)),m&&d&&!yn&&!yc&&Mi&&(!tt&&C<Ze+(Ze-ft)/(vn()-Va)*m?tt=1e-4:tt===1&&ke>Ze+(Ze-ft)/(vn()-Va)*m&&(tt=.9999)),tt!==Ct&&P.enabled){if(Gt=P.isActive=!!tt&&tt<1,wt=!!Ct&&Ct<1,Et=Gt!==wt,Qn=Et||!!tt!=!!Ct,P.direction=tt>Ct?1:-1,P.progress=tt,Qn&&!yn&&(Mt=tt&&!Ct?0:tt===1?1:Ct===1?2:3,L&&(_t=!Et&&Z[Mt+1]!=="none"&&Z[Mt+1]||Z[Mt],fi=i&&(_t==="complete"||_t==="reset"||_t in i))),y&&(Et||fi)&&(fi||h||!i)&&(Un(y)?y(P):P.getTrailing(y).forEach(function(W){return W.endAnimation()})),L||(D&&!yn&&!yc?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",tt,i._tTime/i._tDur):(D.vars.totalProgress=tt,D.invalidate().restart())):i&&i.totalProgress(tt,!!(yn&&(Ne||pe)))),d){if(pe&&_&&(k.style[_+v.os2]=Re),!X)q(Ga(ve+oe*tt));else if(Qn){if(wn=!pe&&tt>Ct&&ke+1>Ze&&Ze+1>=Ji(N,v),E)if(!pe&&(Gt||wn)){var $t=yr(d,!0),T=Ze-C;Lg(d,Rt,$t.top+(v===Yt?T:0)+jt,$t.left+(v===Yt?0:T)+jt)}else Lg(d,k);Ao(Gt||wn?R:M),fe&&tt<1&&Gt||q(ve+(tt===1&&!wn?oe:0))}}x&&!le.tween&&!yn&&!yc&&me.restart(!0),a&&(Et||S&&tt&&(tt<1||!Of))&&ja(a.targets).forEach(function(W){return W.classList[Gt||S?"add":"remove"](a.className)}),o&&!L&&!pe&&o(P),Qn&&!yn?(L&&(fi&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),o&&o(P)),(Et||!Of)&&(c&&Et&&Bf(P,c),H[Mt]&&Bf(P,H[Mt]),S&&(tt===1?P.kill(!1,1):H[Mt]=0),Et||(Mt=tt===1?1:3,H[Mt]&&Bf(P,H[Mt]))),I&&!Gt&&Math.abs(P.getVelocity())>(Wa(I)?I:2500)&&(za(P.callbackAnimation),D?D.progress(1):za(i,_t==="reverse"?1:!tt,1))):L&&o&&!yn&&o(P)}if(Oe){var U=w?Ze/w.duration()*(w._caScrollDist||0):Ze;se(U+(O._isFlipped?1:0)),Oe(U)}be&&be(-Ze/w.duration()*(w._caScrollDist||0))}},P.enable=function(pe,We){P.enabled||(P.enabled=!0,rn(N,"resize",Xa),G||rn(N,"scroll",bo),ie&&rn(s,"refreshInit",ie),pe!==!1&&(P.progress=K=0,Ie=ft=Pe=J()),We!==!1&&P.refresh())},P.getTween=function(pe){return pe&&le?le.tween:D},P.setPositions=function(pe,We,Fe,Ze){if(w){var Ht=w.scrollTrigger,tt=w.duration(),Ct=Ht.end-Ht.start;pe=Ht.start+Ct*pe/tt,We=Ht.start+Ct*We/tt}P.refresh(!1,!1,{start:bg(pe,Fe&&!!P._startClamp),end:bg(We,Fe&&!!P._endClamp)},Ze),P.update()},P.adjustPinSpacing=function(pe){if(de&&pe){var We=de.indexOf(v.d)+1;de[We]=parseFloat(de[We])+pe+jt,de[1]=parseFloat(de[1])+pe+jt,Ao(de)}},P.disable=function(pe,We){if(P.enabled&&(pe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,We||D&&D.pause(),ne=0,_e&&(_e.uncache=1),ie&&nn(s,"refreshInit",ie),me&&(me.pause(),le.tween&&le.tween.kill()&&(le.tween=0)),!G)){for(var Fe=st.length;Fe--;)if(st[Fe].scroller===N&&st[Fe]!==P)return;nn(N,"resize",Xa),G||nn(N,"scroll",bo)}},P.kill=function(pe,We){P.disable(pe,We),D&&!We&&D.kill(),l&&delete Yf[l];var Fe=st.indexOf(P);Fe>=0&&st.splice(Fe,1),Fe===Dn&&Pc>0&&Dn--,Fe=0,st.forEach(function(Ze){return Ze.scroller===P.scroller&&(Fe=1)}),Fe||Nn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),We||i.kill()),Se&&[Se,Ae,O,He].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),Ja===P&&(Ja=0),d&&(_e&&(_e.uncache=1),Fe=0,st.forEach(function(Ze){return Ze.pin===d&&Fe++}),Fe||(_e.spacer=0)),n.onKill&&n.onKill(P)},st.push(P),P.enable(!1,!1),Ve&&Ve(P),i&&i.add&&!$e){var Je=P.update;P.update=function(){P.update=Je,C||ke||P.refresh()},Ee.delayedCall(.01,P.update),$e=.01,C=ke=0}else P.refresh();d&&vv()},s.register=function(n){return To||(Ee=n||Gg(),Hg()&&window.document&&s.enable(),To=Ha),To},s.defaults=function(n){if(n)for(var i in n)bc[i]=n[i];return bc},s.disable=function(n,i){Ha=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),nn(ut,"wheel",bo),nn(Ot,"scroll",bo),clearInterval(xc),nn(Ot,"touchcancel",$i),nn(Rt,"touchstart",$i),Mc(nn,Ot,"pointerdown,touchstart,mousedown",Tg),Mc(nn,Ot,"pointerup,touchend,mouseup",wg),Dc.kill(),vc(nn);for(var r=0;r<rt.length;r+=3)Sc(nn,rt[r],rt[r+1]),Sc(nn,rt[r],rt[r+2])},s.enable=function(){if(ut=window,Ot=document,Ii=Ot.documentElement,Rt=Ot.body,Ee&&(ja=Ee.utils.toArray,Ya=Ee.utils.clamp,Wf=Ee.core.context||$i,Uf=Ee.core.suppressOverwrites||$i,Kf=ut.history.scrollRestoration||"auto",qf=ut.pageYOffset,Ee.core.globals("ScrollTrigger",s),Rt)){Ha=1,Eo=document.createElement("div"),Eo.style.height="100vh",Eo.style.position="absolute",jg(),dv(),zt.register(Ee),s.isTouch=zt.isTouch,qr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gf=zt.isTouch===1,rn(ut,"wheel",bo),Fg=[ut,Ot,Ii,Rt],Ee.matchMedia?(s.matchMedia=function(l){var c=Ee.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ee.addEventListener("matchMediaInit",function(){return td()}),Ee.addEventListener("matchMediaRevert",function(){return $g()}),Ee.addEventListener("matchMedia",function(){ws(0,1),Is("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return kf(),kf})):console.warn("Requires GSAP 3.11.0 or later"),kf(),rn(Ot,"scroll",bo);var n=Rt.style,i=n.borderTopStyle,r=Ee.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=yr(Rt),Yt.m=Math.round(o.top+Yt.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),xc=setInterval(Rg,250),Ee.delayedCall(.5,function(){return yc=0}),rn(Ot,"touchcancel",$i),rn(Rt,"touchstart",$i),Mc(rn,Ot,"pointerdown,touchstart,mousedown",Tg),Mc(rn,Ot,"pointerup,touchend,mouseup",wg),Hf=Ee.utils.checkPrefix("transform"),Ic.push(Hf),To=vn(),Dc=Ee.delayedCall(.2,ws).pause(),wo=[Ot,"visibilitychange",function(){var l=ut.innerWidth,c=ut.innerHeight;Ot.hidden?(vg=l,Mg=c):(vg!==l||Mg!==c)&&Xa()},Ot,"DOMContentLoaded",ws,ut,"load",ws,ut,"resize",Xa],vc(rn),st.forEach(function(l){return l.enable(0,1)}),a=0;a<rt.length;a+=3)Sc(nn,rt[a],rt[a+1]),Sc(nn,rt[a],rt[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Of=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(xc)||(xc=i)&&setInterval(Rg,i),"ignoreMobileResize"in n&&(Gf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(vc(nn)||vc(rn,n.autoRefreshEvents||"none"),kg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=In(n),o=rt.indexOf(r),a=Cs(r);~o&&rt.splice(o,a?6:2),i&&(a?Pi.unshift(ut,i,Rt,i,Ii,i):Pi.unshift(r,i))},s.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(oi(n)?In(n):n).getBoundingClientRect(),a=o[r?Es:As]*i||0;return r?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},s.positionInViewport=function(n,i,r){oi(n)&&(n=In(n));var o=n.getBoundingClientRect(),a=o[r?Es:As],l=i==null?a/2:i in Oc?Oc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},s.killAll=function(n){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ps.killAll||[];Ps={},i.forEach(function(r){return r()})}},s})();Ke.version="3.12.5";Ke.saveStyles=function(s){return s?ja(s).forEach(function(e){if(e&&e.style){var t=si.indexOf(e);t>=0&&si.splice(t,5),si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Wf())}}):si};Ke.revert=function(s,e){return td(!s,e)};Ke.create=function(s,e){return new Ke(s,e)};Ke.refresh=function(s){return s?Xa():(To||Ke.register())&&ws(!0)};Ke.update=function(s){return++rt.cache&&vr(s===!0?2:0)};Ke.clearScrollMemory=Jg;Ke.maxScroll=function(s,e){return Ji(s,e?xn:Yt)};Ke.getScrollFunc=function(s,e){return _r(In(s),e?xn:Yt)};Ke.getById=function(s){return Yf[s]};Ke.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!Mi};Ke.snapDirectional=ed;Ke.addEventListener=function(s,e){var t=Ps[s]||(Ps[s]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(s,e){var t=Ps[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ee.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(r)&&(r=r(),rn(Ke,"refresh",function(){return r=e.batchMax()})),ja(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ke.create(c))}),t};var Ng=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vf=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===Ii&&s(Rt,t)},Ac={auto:1,scroll:1},wv=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ee.core.getCache(r),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Rt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Ac[(l=vi(r)).overflowY]||Ac[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Cs(r)&&(Ac[(l=vi(r)).overflowY]||Ac[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},e_=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&wv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(Ot,zt.eventTypes[0],Og,!1,!0)},onDisable:function(){return nn(Ot,zt.eventTypes[0],Og,!0)}})},Ev=/(input|label|select|textarea)/i,Ug,Og=function(e){var t=Ev.test(e.target.tagName);(t||Ug)&&(e._gsapAllow=!0,Ug=t)},Av=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=In(e.target)||Ii,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),f=qr&&(e.content&&In(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=_r(c,Yt),_=_r(c,xn),g=1,m=(zt.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,p=0,b=Un(i)?function(){return i(a)}:function(){return i||2.8},S,x,E=e_(c,e.type,!0,r),A=function(){return x=!1},w=$i,I=$i,y=function(){l=Ji(c,Yt),I=Ya(qr?1:0,l),n&&(w=Ya(0,Ji(c,xn))),S=Rs},v=function(){f._gsap.y=Ga(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(x){requestAnimationFrame(A);var z=Ga(a.deltaY/2),te=I(d.v-z);if(f&&te!==d.v+d.offset){d.offset=te-d.v;var P=Ga((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=rt.cache,vr()}return!0}d.offset&&v(),x=!0},N,V,G,X,H=function(){y(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(Z){return qr&&Z.type==="touchmove"&&L(Z)||g>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){x=!1;var Z=g;g=Ga((ut.visualViewport&&ut.visualViewport.scale||1)/m),N.pause(),Z!==g&&Vf(c,g>1.01?!0:n?!1:"x"),V=_(),G=d(),y(),S=Rs},e.onRelease=e.onGestureStart=function(Z,z){if(d.offset&&v(),!z)X.restart(!0);else{rt.cache++;var te=b(),P,ie;n&&(P=_(),ie=P+te*.05*-Z.velocityX/.227,te*=Ng(_,P,ie,Ji(c,xn)),N.vars.scrollX=w(ie)),P=d(),ie=P+te*.05*-Z.velocityY/.227,te*=Ng(d,P,ie,Ji(c,Yt)),N.vars.scrollY=I(ie),N.invalidate().duration(te).play(.01),(qr&&N.vars.scrollY>=l||P>=l-1)&&Ee.to({},{onUpdate:H,duration:te})}o&&o(Z)},e.onWheel=function(){N._ts&&N.pause(),vn()-p>1e3&&(S=0,p=vn())},e.onChange=function(Z,z,te,P,ie){if(Rs!==S&&y(),z&&n&&_(w(P[2]===z?V+(Z.startX-Z.x):_()+z-P[1])),te){d.offset&&v();var Te=ie[2]===te,qe=Te?G+Z.startY-Z.y:d()+te-ie[1],Pe=I(qe);Te&&qe!==Pe&&(G+=Pe-qe),d(Pe)}(te||z)&&vr()},e.onEnable=function(){Vf(c,n?!1:"x"),Ke.addEventListener("refresh",H),rn(ut,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){Vf(c,!0),nn(ut,"resize",H),Ke.removeEventListener("refresh",H),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=qr,qr&&!d()&&d(1),qr&&Ee.ticker.add($i),X=a._dc,N=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Qg(d,d(),function(){return N.pause()})},onUpdate:vr,onComplete:X.vars.onComplete}),a};Ke.sort=function(s){return st.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(s){return new zt(s)};Ke.normalizeScroll=function(s){if(typeof s>"u")return Ln;if(s===!0&&Ln)return Ln.enable();if(s===!1){Ln&&Ln.kill(),Ln=s;return}var e=s instanceof zt?s:Av(s);return Ln&&Ln.target===e.target&&Ln.kill(),Cs(e.target)&&(Ln=e),e};Ke.core={_getVelocityProp:_c,_inputObserver:e_,_scrollers:rt,_proxies:Pi,bridge:{ss:function(){Mi||Is("scrollStart"),Mi=vn()},ref:function(){return yn}}};Gg()&&Ee.registerPlugin(Ke);var F_=0,Fd=1,B_=2;var Bd=1,k_=2,lr=3,Bi=0,zn=1,bi=2,Dr=0,ks=1,kd=2,zd=3,Vd=4,z_=5,es=100,V_=101,H_=102,G_=103,W_=104,X_=200,Y_=201,q_=202,Z_=203,cu=204,uu=205,K_=206,$_=207,J_=208,j_=209,Q_=210,e0=211,t0=212,n0=213,i0=214,Cu=0,Pu=1,Iu=2,zs=3,Lu=4,Du=5,Nu=6,Uu=7,Hd=0,r0=1,s0=2,Nr=0,o0=1,a0=2,l0=3,c0=4,u0=5,Ou=6,h0=7,Cd="attached",f0="detached",Gd=300,Ks=301,$s=302,Fu=303,Bu=304,kl=306,ts=1e3,er=1001,Wo=1002,fn=1003,ku=1004;var Js=1005;var Bn=1006,ra=1007;var Hi=1008;var Gi=1009,Wd=1010,Xd=1011,sa=1012,zu=1013,rs=1014,Ti=1015,oa=1016,Vu=1017,Hu=1018,aa=1020,Yd=35902,qd=35899,Zd=1021,Kd=1022,hi=1023,Xo=1026,la=1027,Gu=1028,Wu=1029,$d=1030,Xu=1031;var Yu=1033,zl=33776,Vl=33777,Hl=33778,Gl=33779,qu=35840,Zu=35841,Ku=35842,$u=35843,Ju=36196,ju=37492,Qu=37496,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,lh=37816,ch=37817,uh=37818,hh=37819,fh=37820,dh=37821,ph=36492,mh=36494,gh=36495,_h=36283,xh=36284,yh=36285,vh=36286,d0=2200,Mh=2201,p0=2202,Vs=2300,Hs=2301,lu=2302,Fs=2400,Bs=2401,ul=2402,Sh=2500,m0=2501,Jd=0,Wl=1,ca=2,g0=3200,_0=3201;var jd=0,x0=1,Ur="",Xt="srgb",dn="srgb-linear",hl="linear",yt="srgb";var Os=7680;var Pd=519,y0=512,v0=513,M0=514,Qd=515,S0=516,b0=517,T0=518,w0=519,hu=35044;var ep="300 es",Oi=2e3,fl=2001;var nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],t_=1234567,ll=Math.PI/180,Gs=180/Math.PI;function Fi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function tp(s,e){return(s%e+e)%e}function Rv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cv(s,e,t){return s!==e?(t-s)/(e-s):0}function cl(s,e,t){return(1-t)*s+t*e}function Pv(s,e,t,n){return cl(s,e,1-Math.exp(-t*n))}function Iv(s,e=1){return e-Math.abs(tp(s,e*2)-e)}function Lv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Dv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Nv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Uv(s,e){return s+Math.random()*(e-s)}function Ov(s){return s*(.5-Math.random())}function Fv(s){s!==void 0&&(t_=s);let e=t_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bv(s){return s*ll}function kv(s){return s*Gs}function zv(s){return(s&s-1)===0&&s!==0}function Vv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gv(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Xl={DEG2RAD:ll,RAD2DEG:Gs,generateUUID:Fi,clamp:ot,euclideanModulo:tp,mapLinear:Rv,inverseLerp:Cv,lerp:cl,damp:Pv,pingpong:Iv,smoothstep:Lv,smootherstep:Dv,randInt:Nv,randFloat:Uv,randFloatSpread:Ov,seededRandom:Fv,degToRad:Bv,radToDeg:kv,isPowerOfTwo:zv,ceilPowerOfTwo:Vv,floorPowerOfTwo:Hv,setQuaternionFromProperEuler:Gv,normalize:xt,denormalize:Ui},it=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a,p=l*f+c*d+u*_+h*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let E=Math.sqrt(S),A=Math.atan2(E,p*b);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}let x=a*b;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){let E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(n_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nd=new B,n_=new Fn,je=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],S=i[4],x=i[7],E=i[2],A=i[5],w=i[8];return r[0]=o*g+a*b+l*E,r[3]=o*m+a*S+l*A,r[6]=o*p+a*x+l*w,r[1]=c*g+u*b+h*E,r[4]=c*m+u*S+h*A,r[7]=c*p+u*x+h*w,r[2]=f*g+d*b+_*E,r[5]=f*m+d*S+_*A,r[8]=f*p+d*x+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(id.makeScale(e,t)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,t){return this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},id=new je;function np(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E0(){let s=Yo("canvas");return s.style.display="block",s}var i_={};function qo(s){s in i_||(i_[s]=!0,console.warn(s))}function A0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var r_=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wv(){let s={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(i.r=Go(i.r),i.g=Go(i.g),i.b=Go(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ur?hl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dn]:{primaries:e,whitePoint:n,transfer:hl,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),s}var lt=Wv();function Ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Co,fu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Co===void 0&&(Co=Yo("canvas")),Co.width=e.width,Co.height=e.height;let i=Co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ar(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ar(t[n]/255)*255):t[n]=Ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xv=0,Zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(rd(i[o].image)):r.push(rd(i[o]))}else r=rd(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yv=0,sd=new B,an=class s extends nr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=er,i=er,r=Bn,o=Hi,a=hi,l=Gi,c=s.DEFAULT_ANISOTROPY,u=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Fi(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Gd;an.DEFAULT_ANISOTROPY=1;var gt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(d+1)/2,E=(p+1)/2,A=(u+f)/4,w=(h+g)/4,I=(_+m)/4;return S>x&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=w/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=I/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=I/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},du=class extends nr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new an(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ir=class extends du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dl=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pu=class extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Li):Li.fromBufferAttribute(r,o),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bc.copy(n.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),kc.subVectors(this.max,el),Po.subVectors(e.a,el),Io.subVectors(e.b,el),Lo.subVectors(e.c,el),Zr.subVectors(Io,Po),Kr.subVectors(Lo,Io),Ls.subVectors(Po,Lo);let t=[0,-Zr.z,Zr.y,0,-Kr.z,Kr.y,0,-Ls.z,Ls.y,Zr.z,0,-Zr.x,Kr.z,0,-Kr.x,Ls.z,0,-Ls.x,-Zr.y,Zr.x,0,-Kr.y,Kr.x,0,-Ls.y,Ls.x,0];return!od(t,Po,Io,Lo,kc)||(t=[1,0,0,0,1,0,0,0,1],!od(t,Po,Io,Lo,kc))?!1:(zc.crossVectors(Zr,Kr),t=[zc.x,zc.y,zc.z],od(t,Po,Io,Lo,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mr=[new B,new B,new B,new B,new B,new B,new B,new B],Li=new B,Bc=new kn,Po=new B,Io=new B,Lo=new B,Zr=new B,Kr=new B,Ls=new B,el=new B,kc=new B,zc=new B,Ds=new B;function od(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ds.fromArray(s,r);let a=i.x*Math.abs(Ds.x)+i.y*Math.abs(Ds.y)+i.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),u=n.dot(Ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qv=new kn,tl=new B,ad=new B,Kn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);let t=tl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(tl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(ad)),this.expandByPoint(tl.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sr=new B,ld=new B,Vc=new B,$r=new B,cd=new B,Hc=new B,ud=new B,Ws=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ld.copy(e).add(t).multiplyScalar(.5),Vc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(ld);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vc),a=$r.dot(this.direction),l=-$r.dot(Vc),c=$r.lengthSq(),u=Math.abs(1-o*o),h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ld).addScaledVector(Vc,f),d}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);let n=Sr.dot(this.direction),i=Sr.dot(Sr)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,n,i,r){cd.subVectors(t,e),Hc.subVectors(n,e),ud.crossVectors(cd,Hc);let o=this.direction.dot(ud),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$r.subVectors(this.origin,e);let l=a*this.direction.dot(Hc.crossVectors($r,Hc));if(l<0)return null;let c=a*this.direction.dot(cd.cross($r));if(c<0||l+c>o)return null;let u=-a*$r.dot(ud);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Do.setFromMatrixColumn(e,0).length(),r=1/Do.setFromMatrixColumn(e,1).length(),o=1/Do.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zv,e,Kv)}lookAt(e,t,n){let i=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Jr.crossVectors(n,ai),Jr.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Jr.crossVectors(n,ai)),Jr.normalize(),Gc.crossVectors(ai,Jr),i[0]=Jr.x,i[4]=Gc.x,i[8]=ai.x,i[1]=Jr.y,i[5]=Gc.y,i[9]=ai.y,i[2]=Jr.z,i[6]=Gc.z,i[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],S=n[7],x=n[11],E=n[15],A=i[0],w=i[4],I=i[8],y=i[12],v=i[1],L=i[5],N=i[9],V=i[13],G=i[2],X=i[6],H=i[10],Z=i[14],z=i[3],te=i[7],P=i[11],ie=i[15];return r[0]=o*A+a*v+l*G+c*z,r[4]=o*w+a*L+l*X+c*te,r[8]=o*I+a*N+l*H+c*P,r[12]=o*y+a*V+l*Z+c*ie,r[1]=u*A+h*v+f*G+d*z,r[5]=u*w+h*L+f*X+d*te,r[9]=u*I+h*N+f*H+d*P,r[13]=u*y+h*V+f*Z+d*ie,r[2]=_*A+g*v+m*G+p*z,r[6]=_*w+g*L+m*X+p*te,r[10]=_*I+g*N+m*H+p*P,r[14]=_*y+g*V+m*Z+p*ie,r[3]=b*A+S*v+x*G+E*z,r[7]=b*w+S*L+x*X+E*te,r[11]=b*I+S*N+x*H+E*P,r[15]=b*y+S*V+x*Z+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,E=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,A=t*b+n*S+i*x+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=b*w,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=S*w,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=x*w,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*w,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=E*w,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,g=o*u,m=o*h,p=a*h,b=l*c,S=l*u,x=l*h,E=n.x,A=n.y,w=n.z;return i[0]=(1-(g+p))*E,i[1]=(d+x)*E,i[2]=(_-S)*E,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(_+S)*w,i[9]=(m-b)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Do.set(i[0],i[1],i[2]).length(),o=Do.set(i[4],i[5],i[6]).length(),a=Do.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Di.copy(this);let c=1/r,u=1/o,h=1/a;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=h,Di.elements[9]*=h,Di.elements[10]*=h,t.setFromRotationMatrix(Di),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Oi,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),_,g;if(l)_=r/(o-r),g=o*r/(o-r);else if(a===Oi)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fl)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Oi,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),_,g;if(l)_=1/(o-r),g=o/(o-r);else if(a===Oi)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===fl)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Do=new B,Di=new et,Zv=new B(0,0,0),Kv=new B(1,1,1),Jr=new B,Gc=new B,ai=new B,o_=new et,a_=new Fn,ki=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ki.DEFAULT_ORDER="XYZ";var pl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$v=0,l_=new B,No=new Fn,br=new et,Wc=new B,nl=new B,Jv=new B,jv=new Fn,c_=new B(1,0,0),u_=new B(0,1,0),h_=new B(0,0,1),f_={type:"added"},Qv={type:"removed"},Uo={type:"childadded",child:null},hd={type:"childremoved",child:null},It=class s extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new ki,n=new Fn,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new je}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.multiply(No),this}rotateOnWorldAxis(e,t){return No.setFromAxisAngle(e,t),this.quaternion.premultiply(No),this}rotateX(e){return this.rotateOnAxis(c_,e)}rotateY(e){return this.rotateOnAxis(u_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,t){return l_.copy(e).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c_,e)}translateY(e){return this.translateOnAxis(u_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wc.copy(e):Wc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(nl,Wc,this.up):br.lookAt(Wc,nl,this.up),this.quaternion.setFromRotationMatrix(br),i&&(br.extractRotation(i.matrixWorld),No.setFromRotationMatrix(br),this.quaternion.premultiply(No.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qv),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};It.DEFAULT_UP=new B(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new B,Tr=new B,fd=new B,wr=new B,Oo=new B,Fo=new B,d_=new B,dd=new B,pd=new B,md=new B,gd=new gt,_d=new gt,xd=new gt,Qi=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ni.subVectors(e,t),i.cross(Ni);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ni.subVectors(i,t),Tr.subVectors(n,t),fd.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(Tr),l=Ni.dot(fd),c=Tr.dot(Tr),u=Tr.dot(fd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(a,wr.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return gd.setScalar(0),_d.setScalar(0),xd.setScalar(0),gd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,n),xd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(gd,r.x),o.addScaledVector(_d,r.y),o.addScaledVector(xd,r.z),o}static isFrontFacing(e,t,n,i){return Ni.subVectors(n,t),Tr.subVectors(e,t),Ni.cross(Tr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Ni.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Oo.subVectors(i,n),Fo.subVectors(r,n),dd.subVectors(e,n);let l=Oo.dot(dd),c=Fo.dot(dd);if(l<=0&&c<=0)return t.copy(n);pd.subVectors(e,i);let u=Oo.dot(pd),h=Fo.dot(pd);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Oo,o);md.subVectors(e,r);let d=Oo.dot(md),_=Fo.dot(md);if(_>=0&&d<=_)return t.copy(r);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Fo,a);let m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return d_.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(d_,a);let p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Oo,o).addScaledVector(Fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function yd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=tp(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yd(o,r,e+1/3),this.g=yd(o,r,e),this.b=yd(o,r,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=R0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return lt.workingToColorSpace(Sn.copy(this),e),Math.round(ot(Sn.r*255,0,255))*65536+Math.round(ot(Sn.g*255,0,255))*256+Math.round(ot(Sn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Xt){lt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,i=Sn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Xc);let n=cl(jr.h,Xc.h,t),i=cl(jr.s,Xc.s,t),r=cl(jr.l,Xc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Ye;Ye.NAMES=R0;var eM=0,$n=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ks,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cu&&(n.blendSrc=this.blendSrc),this.blendDst!==uu&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zi=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new B,Yc=new it,tM=0,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yc.fromBufferAttribute(this,t),Yc.applyMatrix3(e),this.setXY(t,Yc.x,Yc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}};var ml=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gl=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ci=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},nM=0,Si=new et,vd=new It,Bo=new B,li=new kn,il=new kn,sn=new B,ui=class s extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?gl:ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ci(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];il.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(li.min,il.min),li.expandByPoint(sn),sn.addVectors(li.max,il.max),li.expandByPoint(sn)):(li.expandByPoint(il.min),li.expandByPoint(il.max))}li.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(e,c),sn.add(Bo)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;let c=new B,u=new B,h=new B,f=new it,d=new it,_=new it,g=new B,m=new B;function p(I,y,v){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);let L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[I].add(g),a[y].add(g),a[v].add(g),l[I].add(m),l[y].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,y=b.length;I<y;++I){let v=b[I],L=v.start,N=v.count;for(let V=L,G=L+N;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let S=new B,x=new B,E=new B,A=new B;function w(I){E.fromBufferAttribute(i,I),A.copy(E);let y=a[I];S.copy(y),S.sub(E.multiplyScalar(E.dot(y))).normalize(),x.crossVectors(A,y);let L=x.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,y=b.length;I<y;++I){let v=b[I],L=v.start,N=v.count;for(let V=L,G=L+N;V<G;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},p_=new et,Ns=new Ws,qc=new Kn,m_=new B,Zc=new B,Kc=new B,$c=new B,Md=new B,Jc=new B,g_=new B,jc=new B,pn=class extends It{constructor(e=new ui,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Jc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Md.fromBufferAttribute(h,e),o?Jc.addScaledVector(Md,u):Jc.addScaledVector(Md.sub(t),u))}t.add(Jc)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(qc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(qc,m_)===null||Ns.origin.distanceToSquared(m_)>(e.far-e.near)**2))&&(p_.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(p_),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,E=S;x<E;x+=3){let A=a.getX(x),w=a.getX(x+1),I=a.getX(x+2);i=Qc(this,p,e,n,c,u,h,A,w,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Qc(this,o,e,n,c,u,h,b,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,E=S;x<E;x+=3){let A=x,w=x+1,I=x+2;i=Qc(this,p,e,n,c,u,h,A,w,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let b=m,S=m+1,x=m+2;i=Qc(this,o,e,n,c,u,h,b,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function iM(s,e,t,n,i,r,o,a){let l;if(e.side===zn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bi,a),l===null)return null;jc.copy(a),jc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(jc);return c<t.near||c>t.far?null:{distance:c,point:jc.clone(),object:s}}function Qc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Zc),s.getVertexPosition(l,Kc),s.getVertexPosition(c,$c);let u=iM(s,e,t,n,Zc,Kc,$c,g_);if(u){let h=new B;Qi.getBarycoord(g_,Zc,Kc,$c,h),i&&(u.uv=Qi.getInterpolatedAttribute(i,a,l,c,h,new it)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,l,c,h,new it)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new B,materialIndex:0};Qi.getNormal(Zc,Kc,$c,f.normal),u.face=f,u.barycoord=h}return u}var Ko=class s extends ui{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(h,2));function _(g,m,p,b,S,x,E,A,w,I,y){let v=x/w,L=E/I,N=x/2,V=E/2,G=A/2,X=w+1,H=I+1,Z=0,z=0,te=new B;for(let P=0;P<H;P++){let ie=P*L-V;for(let Te=0;Te<X;Te++){let qe=Te*v-N;te[g]=qe*b,te[m]=ie*S,te[p]=G,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=A>0?1:-1,u.push(te.x,te.y,te.z),h.push(Te/w),h.push(1-P/I),Z+=1}}for(let P=0;P<I;P++)for(let ie=0;ie<w;ie++){let Te=f+ie+X*P,qe=f+ie+X*(P+1),Pe=f+(ie+1)+X*(P+1),Ne=f+(ie+1)+X*P;l.push(Te,qe,Ne),l.push(qe,Pe,Ne),z+=6}a.addGroup(d,z,y),d+=z,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function js(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(s){let e={};for(let t=0;t<s.length;t++){let n=js(s[t]);for(let i in n)e[i]=n[i]}return e}function rM(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ip(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var C0={clone:js,merge:bn},sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_l=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qr=new B,__=new it,x_=new it,on=class extends _l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,__,x_),t.subVectors(x_,__)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ll*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ko=-90,zo=1,mu=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new on(ko,zo,e,t);i.layers=this.layers,this.add(i);let r=new on(ko,zo,e,t);r.layers=this.layers,this.add(r);let o=new on(ko,zo,e,t);o.layers=this.layers,this.add(o);let a=new on(ko,zo,e,t);a.layers=this.layers,this.add(a);let l=new on(ko,zo,e,t);l.layers=this.layers,this.add(l);let c=new on(ko,zo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xl=class extends an{constructor(e=[],t=Ks,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gu=class extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ko(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Dr});r.uniforms.tEquirect.value=t;let o=new pn(i,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Bn),new mu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Zn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},aM={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var yl=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hu,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new B,jo=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var y_=new B,v_=new gt,M_=new gt,lM=new B,S_=new et,eu=new B,Sd=new Kn,b_=new et,bd=new Ws,vl=class extends pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cd,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eu),this.boundingBox.expandByPoint(eu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,eu),this.boundingSphere.expandByPoint(eu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sd.copy(this.boundingSphere),Sd.applyMatrix4(i),e.ray.intersectsSphere(Sd)!==!1&&(b_.copy(i).invert(),bd.copy(e.ray).applyMatrix4(b_),!(this.boundingBox!==null&&bd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===f0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;v_.fromBufferAttribute(i.attributes.skinIndex,e),M_.fromBufferAttribute(i.attributes.skinWeight,e),y_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=M_.getComponent(r);if(o!==0){let a=v_.getComponent(r);S_.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(lM.copy(y_).applyMatrix4(S_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Qo=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ml=class extends an{constructor(e=null,t=1,n=1,i,r,o,a,l,c=fn,u=fn,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},T_=new et,cM=new et,Sl=class s{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:cM;T_.multiplyMatrices(a,t[r]),T_.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ml(t,e,e,hi,Ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qo),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ns=class extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vo=new et,w_=new et,tu=[],E_=new kn,uM=new et,rl=new pn,sl=new Kn,bl=class extends pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),E_.copy(e.boundingBox).applyMatrix4(Vo),this.boundingBox.union(E_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),sl.copy(e.boundingSphere).applyMatrix4(Vo),this.boundingSphere.union(sl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(rl.geometry=this.geometry,rl.material=this.material,rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(n),e.ray.intersectsSphere(sl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vo),w_.multiplyMatrices(n,Vo),rl.matrixWorld=w_,rl.raycast(e,tu);for(let o=0,a=tu.length;o<a;o++){let l=tu[o];l.instanceId=r,l.object=this,t.push(l)}tu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ml(new Float32Array(i*this.count),i,this.count,Gu,Ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Td=new B,hM=new B,fM=new je,ji=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Td.subVectors(n,t).cross(hM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Td),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fM.getNormalMatrix(e),i=this.coplanarPoint(Td).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Kn,dM=new it(.5,.5),nu=new B,ea=class{constructor(e=new ji,t=new ji,n=new ji,i=new ji,r=new ji,o=new ji){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],b=r[12],S=r[13],x=r[14],E=r[15];if(i[0].setComponents(c-o,d-u,p-_,E-b).normalize(),i[1].setComponents(c+o,d+u,p+_,E+b).normalize(),i[2].setComponents(c+a,d+h,p+g,E+S).normalize(),i[3].setComponents(c-a,d-h,p-g,E-S).normalize(),n)i[4].setComponents(l,f,m,x).normalize(),i[5].setComponents(c-l,d-f,p-m,E-x).normalize();else if(i[4].setComponents(c-l,d-f,p-m,E-x).normalize(),t===Oi)i[5].setComponents(c+l,d+f,p+m,E+x).normalize();else if(t===fl)i[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=dM.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(nu.x=i.normal.x>0?e.max.x:e.min.x,nu.y=i.normal.y>0?e.max.y:e.min.y,nu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ta=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_u=new B,xu=new B,A_=new et,ol=new Ws,iu=new Kn,wd=new B,R_=new B,Xs=class extends It{constructor(e=new ui,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_u.fromBufferAttribute(t,i-1),xu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_u.distanceTo(xu);e.setAttribute("lineDistance",new ci(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),iu.copy(n.boundingSphere),iu.applyMatrix4(i),iu.radius+=r,e.ray.intersectsSphere(iu)===!1)return;A_.copy(i).invert(),ol.copy(e.ray).applyMatrix4(A_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){let p=u.getX(g),b=u.getX(g+1),S=ru(this,e,ol,l,p,b,g);S&&t.push(S)}if(this.isLineLoop){let g=u.getX(_-1),m=u.getX(d),p=ru(this,e,ol,l,g,m,_-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){let p=ru(this,e,ol,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=ru(this,e,ol,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ru(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(_u.fromBufferAttribute(a,i),xu.fromBufferAttribute(a,r),t.distanceSqToSegment(_u,xu,wd,R_)>n)return;wd.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(wd);if(!(c<e.near||c>e.far))return{distance:c,point:R_.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var C_=new B,P_=new B,Tl=class extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)C_.fromBufferAttribute(t,i),P_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+C_.distanceTo(P_);e.setAttribute("lineDistance",new ci(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wl=class extends Xs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},na=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},I_=new et,Id=new Ws,su=new Kn,ou=new B,El=class extends It{constructor(e=new ui,t=new na){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),su.copy(n.boundingSphere),su.applyMatrix4(i),su.radius+=r,e.ray.intersectsSphere(su)===!1)return;I_.copy(i).invert(),Id.copy(e.ray).applyMatrix4(I_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){let m=c.getX(_);ou.fromBufferAttribute(h,m),L_(ou,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)ou.fromBufferAttribute(h,_),L_(ou,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function L_(s,e,t,n,i,r,o){let a=Id.distanceSqToPoint(s);if(a<t){let l=new B;Id.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Al=class extends an{constructor(e,t,n=rs,i,r,o,a=fn,l=fn,c,u=Xo,h=1){if(u!==Xo&&u!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rl=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Cl=class s extends ui{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let S=0;S<c;S++){let x=S*h-r;_.push(x,-b,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let S=b+c*p,x=b+c*(p+1),E=b+1+c*(p+1),A=b+1+c*p;d.push(S,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new ci(_,3)),this.setAttribute("normal",new ci(g,3)),this.setAttribute("uv",new ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ys=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends Ys{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var yu=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vu=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function au(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function mM(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function D_(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function P0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Rr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mu=class extends Rr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fs,endingEnd:Fs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,a=2*t-n;break;case ul:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bs:o=e,l=2*n-t;break;case ul:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,b=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+b*o[c+E]+S*o[l+E]+x*o[h+E];return r}},Pl=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Su=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=au(t,this.TimeBufferType),this.values=au(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:au(e.times,Array),values:au(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case lu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&pM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){let g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Hs;var Cr=class extends jn{constructor(e,t,n){super(e,t,n)}};Cr.prototype.ValueTypeName="bool";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Vs;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}};Il.prototype.ValueTypeName="color";var rr=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}};rr.prototype.ValueTypeName="number";var bu=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},sr=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new bu(this.times,this.values,this.getValueSize(),e)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends jn{constructor(e,t,n){super(e,t,n)}};Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=Vs;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}};or.prototype.ValueTypeName="vector";var qs=class{constructor(e="",t=-1,n=[],i=Sh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_M(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=mM(l);l=D_(l,1,u),c=D_(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new rr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,_,g){if(d.length!==0){let m=[],p=[];P0(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(let g in d){let m=[],p=[];for(let b=0;b!==f[_].morphTargets.length;++b){let S=f[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new rr(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(or,d+".position",f,"pos",i),n(sr,d+".quaternion",f,"rot",i),n(or,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Il;case"quaternion":return sr;case"bool":case"boolean":return Cr;case"string":return Pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _M(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gM(s.type);if(s.times===void 0){let t=[],n=[];P0(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var tr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Tu=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},I0=new Tu,ar=class{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ar.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er={},Ld=class extends Error{constructor(e,t){super(e),this.response=t}},ia=class extends ar{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=tr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Er[e]!==void 0){Er[e].push({onLoad:t,onProgress:n,onError:i});return}Er[e]=[],Er[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Er[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0,g=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,w=u.length;A<w;A++){let I=u[A];I.onProgress&&I.onProgress(E)}p.enqueue(x),b()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Ld(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{tr.add(`file:${e}`,c);let u=Er[e];delete Er[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Er[e];if(u===void 0)throw this.manager.itemError(e),c;delete Er[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ho=new WeakMap,wu=class extends ar{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=tr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Ho.get(o);h===void 0&&(h=[],Ho.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=Yo("img");function l(){u(),t&&t(this);let h=Ho.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Ho.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),tr.remove(`image:${e}`);let f=Ho.get(this)||[];for(let d=0;d<f.length;d++){let _=f[d];_.onError&&_.onError(h)}Ho.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),tr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ll=class extends ar{constructor(e){super(e)}load(e,t,n,i){let r=new an,o=new wu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Zs=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Dl=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ed=new et,N_=new B,U_=new B,Nl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;N_.setFromMatrixPosition(e.matrixWorld),t.position.copy(N_),U_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(U_),t.updateMatrixWorld(),Ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dd=class extends Nl{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ul=class extends Zs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},O_=new et,al=new B,Ad=new B,Nd=class extends Nl{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),al.setFromMatrixPosition(e.matrixWorld),n.position.copy(al),Ad.copy(n.position),Ad.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ad),n.updateMatrixWorld(),i.makeTranslation(-al.x,-al.y,-al.z),O_.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(O_,n.coordinateSystem,n.reversedDepth)}},Ol=class extends Zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ir=class extends _l{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ud=class extends Nl{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ud}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Lr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rd=new WeakMap,Fl=class extends ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=tr.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Rd.has(o)===!0)i&&i(Rd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return tr.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Rd.set(l,c),tr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});tr.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Eu=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Au=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Fn.multiplyQuaternionsFlat(e,o,e,t,e,n),Fn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},rp="\\[\\]\\.:\\/",xM=new RegExp("["+rp+"]","g"),sp="[^"+rp+"]",yM="[^"+rp.replace("\\.","")+"]",vM=/((?:WC+[\/:])*)/.source.replace("WC",sp),MM=/(WCOD+)?/.source.replace("WCOD",yM),SM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sp),bM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sp),TM=new RegExp("^"+vM+MM+SM+bM+"$"),wM=["material","materials","bones","map"],Od=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xM,"")}static parseTrackName(e){let t=TM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);wM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Od;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ru=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Fs,endingEnd:Fs};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case m0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Sh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===p0;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===d0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Bs,i.endingEnd=Bs):(e?i.endingStart=this.zeroSlopeAtStart?Bs:Fs:i.endingStart=ul,t?i.endingEnd=this.zeroSlopeAtEnd?Bs:Fs:i.endingEnd=ul)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},EM=new Float32Array(1),Bl=class extends nr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=i[h],d=f.name,_=u[d];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,d));continue}let g=t&&t._propertyBindings[h].binding.parsedPath;_=new Au(vt.create(n,d,g),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,d),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Pl(new Float32Array(2),new Float32Array(2),1,EM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?qs.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Sh),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Ru(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?qs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};function op(s,e,t,n){let i=AM(n);switch(t){case Zd:return s*e;case Gu:return s*e/i.components*i.byteLength;case Wu:return s*e/i.components*i.byteLength;case $d:return s*e*2/i.components*i.byteLength;case Xu:return s*e*2/i.components*i.byteLength;case Kd:return s*e*3/i.components*i.byteLength;case hi:return s*e*4/i.components*i.byteLength;case Yu:return s*e*4/i.components*i.byteLength;case zl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zu:case $u:return Math.max(s,16)*Math.max(e,8)/4;case qu:case Ku:return Math.max(s,8)*Math.max(e,8)/2;case Ju:case ju:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case gh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _h:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yh:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AM(s){switch(s){case Gi:case Wd:return{byteLength:1,components:1};case sa:case Xd:case oa:return{byteLength:2,components:1};case Vu:case Hu:return{byteLength:2,components:4};case rs:case zu:case Ti:return{byteLength:4,components:1};case Yd:case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function tx(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function CM(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){let _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){let g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ob=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:PM,alphahash_pars_fragment:IM,alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:NM,alphatest_pars_fragment:UM,aomap_fragment:OM,aomap_pars_fragment:FM,batching_pars_vertex:BM,batching_vertex:kM,begin_vertex:zM,beginnormal_vertex:VM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:WM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:ZM,color_fragment:KM,color_pars_fragment:$M,color_pars_vertex:JM,color_vertex:jM,common:QM,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:oS,colorspace_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:SS,envmap_vertex:fS,fog_vertex:dS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:xS,lights_lambert_fragment:yS,lights_lambert_pars_fragment:vS,lights_pars_begin:MS,lights_toon_fragment:bS,lights_toon_pars_fragment:TS,lights_phong_fragment:wS,lights_phong_pars_fragment:ES,lights_physical_fragment:AS,lights_physical_pars_fragment:RS,lights_fragment_begin:CS,lights_fragment_maps:PS,lights_fragment_end:IS,logdepthbuf_fragment:LS,logdepthbuf_pars_fragment:DS,logdepthbuf_pars_vertex:NS,logdepthbuf_vertex:US,map_fragment:OS,map_pars_fragment:FS,map_particle_fragment:BS,map_particle_pars_fragment:kS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:VS,morphinstance_vertex:HS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:YS,normal_fragment_begin:qS,normal_fragment_maps:ZS,normal_pars_fragment:KS,normal_pars_vertex:$S,normal_vertex:JS,normalmap_pars_fragment:jS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:rb,premultiplied_alpha_fragment:sb,project_vertex:ob,dithering_fragment:ab,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:hb,shadowmap_pars_vertex:fb,shadowmap_vertex:db,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:_b,skinnormal_vertex:xb,specularmap_fragment:yb,specularmap_pars_fragment:vb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Sb,transmission_fragment:bb,transmission_pars_fragment:Tb,uv_pars_fragment:wb,uv_pars_vertex:Eb,uv_vertex:Ab,worldpos_vertex:Rb,background_vert:Cb,background_frag:Pb,backgroundCube_vert:Ib,backgroundCube_frag:Lb,cube_vert:Db,cube_frag:Nb,depth_vert:Ub,depth_frag:Ob,distanceRGBA_vert:Fb,distanceRGBA_frag:Bb,equirect_vert:kb,equirect_frag:zb,linedashed_vert:Vb,linedashed_frag:Hb,meshbasic_vert:Gb,meshbasic_frag:Wb,meshlambert_vert:Xb,meshlambert_frag:Yb,meshmatcap_vert:qb,meshmatcap_frag:Zb,meshnormal_vert:Kb,meshnormal_frag:$b,meshphong_vert:Jb,meshphong_frag:jb,meshphysical_vert:Qb,meshphysical_frag:eT,meshtoon_vert:tT,meshtoon_frag:nT,points_vert:iT,points_frag:rT,shadow_vert:sT,shadow_frag:oT,sprite_vert:aT,sprite_frag:lT},ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},cr={basic:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:bn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:bn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:bn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:bn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:bn([ge.points,ge.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:bn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:bn([ge.common,ge.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:bn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:bn([ge.sprite,ge.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:bn([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:bn([ge.lights,ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};cr.physical={uniforms:bn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var bh={r:0,b:0,g:0},Qs=new ki,cT=new et;function uT(s,e,t,n,i,r,o){let a=new Ye(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function g(S){let x=!1,E=_(S);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){let E=_(x);E&&(E.isCubeTexture||E.mapping===kl)?(u===void 0&&(u=new pn(new Ko(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:js(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Qs.copy(x.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Qs)),u.material.toneMapped=lt.getTransfer(E.colorSpace)!==yt,(h!==E||f!==E.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pn(new Cl(2,2),new Vi({name:"BackgroundMaterial",uniforms:js(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==yt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(bh,ip(s)),n.buffers.color.setClear(bh.r,bh.g,bh.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:b}}function hT(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(v,L,N,V,G){let X=!1,H=h(V,N,L);r!==H&&(r=H,c(r.object)),X=d(v,V,N,G),X&&_(v,V,N,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(v,L,N,V),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,L,N){let V=N.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let X=G[L.id];X===void 0&&(X={},G[L.id]=X);let H=X[V];return H===void 0&&(H=f(l()),X[V]=H),H}function f(v){let L=[],N=[],V=[];for(let G=0;G<t;G++)L[G]=0,N[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:V,object:v,attributes:{},index:null}}function d(v,L,N,V){let G=r.attributes,X=L.attributes,H=0,Z=N.getAttributes();for(let z in Z)if(Z[z].location>=0){let P=G[z],ie=X[z];if(ie===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function _(v,L,N,V){let G={},X=L.attributes,H=0,Z=N.getAttributes();for(let z in Z)if(Z[z].location>=0){let P=X[z];P===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));let ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),G[z]=ie,H++}r.attributes=G,r.attributesNum=H,r.index=V}function g(){let v=r.newAttributes;for(let L=0,N=v.length;L<N;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){let N=r.newAttributes,V=r.enabledAttributes,G=r.attributeDivisors;N[v]=1,V[v]===0&&(s.enableVertexAttribArray(v),V[v]=1),G[v]!==L&&(s.vertexAttribDivisor(v,L),G[v]=L)}function b(){let v=r.newAttributes,L=r.enabledAttributes;for(let N=0,V=L.length;N<V;N++)L[N]!==v[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function S(v,L,N,V,G,X,H){H===!0?s.vertexAttribIPointer(v,L,N,G,X):s.vertexAttribPointer(v,L,N,V,G,X)}function x(v,L,N,V){g();let G=V.attributes,X=N.getAttributes(),H=L.defaultAttributeValues;for(let Z in X){let z=X[Z];if(z.location>=0){let te=G[Z];if(te===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){let P=te.normalized,ie=te.itemSize,Te=e.get(te);if(Te===void 0)continue;let qe=Te.buffer,Pe=Te.type,Ne=Te.bytesPerElement,K=Pe===s.INT||Pe===s.UNSIGNED_INT||te.gpuType===zu;if(te.isInterleavedBufferAttribute){let J=te.data,le=J.stride,_e=te.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<z.locationSize;ye++)p(z.location+ye,J.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<z.locationSize;ye++)m(z.location+ye);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ye=0;ye<z.locationSize;ye++)S(z.location+ye,ie/z.locationSize,Pe,P,le*Ne,(_e+ie/z.locationSize*ye)*Ne,K)}else{if(te.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)p(z.location+J,te.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let J=0;J<z.locationSize;J++)S(z.location+J,ie/z.locationSize,Pe,P,ie*Ne,ie/z.locationSize*J*Ne,K)}}else if(H!==void 0){let P=H[Z];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(z.location,P);break;case 3:s.vertexAttrib3fv(z.location,P);break;case 4:s.vertexAttrib4fv(z.location,P);break;default:s.vertexAttrib1fv(z.location,P)}}}}b()}function E(){I();for(let v in n){let L=n[v];for(let N in L){let V=L[N];for(let G in V)u(V[G].object),delete V[G];delete L[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let N in L){let V=L[N];for(let G in V)u(V[G].object),delete V[G];delete L[N]}delete n[v.id]}function w(v){for(let L in n){let N=n[L];if(N[v.id]===void 0)continue;let V=N[v.id];for(let G in V)u(V[G].object),delete V[G];delete N[v.id]}}function I(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function fT(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dT(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==hi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Gi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ti&&!I)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:E,maxSamples:A}}function pT(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ji,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,S=b*4,x=p.clippingState||null;l.value=x,x=u(_,f,S,d);for(let E=0;E!==S;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==g;++S,x+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function mT(s){let e=new WeakMap;function t(o,a){return a===Fu?o.mapping=Ks:a===Bu&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fu||a===Bu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gu(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ha=4,L0=[.125,.215,.35,.446,.526,.582],no=20,ap=new Ir,D0=new Ye,lp=null,cp=0,up=0,hp=!1,to=(1+Math.sqrt(5))/2,ua=1/to,N0=[new B(-to,ua,0),new B(to,ua,0),new B(-ua,0,to),new B(ua,0,to),new B(0,to,-ua),new B(0,to,ua),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],gT=new B,Eh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=gT}=r;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=hp,e.scissorTest=!1,Th(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:oa,format:hi,colorSpace:dn,depthBuffer:!1},i=U0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_T(r)),this._blurMaterial=xT(r,e,t)}return i}_compileMaterial(e){let t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,ap)}_sceneToCubeUV(e,t,n,i,r){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(D0),h.toneMapping=Nr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let g=new zi({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),m=new pn(new Ko,g),p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(D0),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;Th(i,x*E,S>2?E:0,E,E),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ks||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=F0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Th(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ap)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=N0[(i-r-1)%N0.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new pn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*no-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):no;m>no&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${no}`);let p=[],b=0;for(let w=0;w<no;++w){let I=w/g,y=Math.exp(-I*I/2);p.push(y),w===0?b+=y:w<m&&(b+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;let x=this._sizeLods[i],E=3*x*(i>S-ha?i-S+ha:0),A=4*(this._cubeSize-x);Th(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(h,ap)}};function _T(s){let e=[],t=[],n=[],i=s,r=s-ha+1+L0.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ha?l=L0[o-s+ha-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),S=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,I=A>2?0:-1,y=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];b.set(y,g*_*A),S.set(f,m*_*A);let v=[A,A,A,A,A,A];x.set(v,p*_*A)}let E=new ui;E.setAttribute("position",new Vt(b,g)),E.setAttribute("uv",new Vt(S,m)),E.setAttribute("faceIndex",new Vt(x,p)),e.push(E),i>ha&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function U0(s,e,t){let n=new ir(s,e,t);return n.texture.mapping=kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Th(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function xT(s,e,t){let n=new Float32Array(no),i=new B(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function O0(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function F0(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Mp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yT(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fu||l===Bu,u=l===Ks||l===$s;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Eh(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Eh(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vT(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&qo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function MT(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,_=h.attributes.position,g=0;if(d!==null){let b=d.array;g=d.version;for(let S=0,x=b.length;S<x;S+=3){let E=b[S+0],A=b[S+1],w=b[S+2];f.push(E,A,A,w,w,E)}}else if(_!==void 0){let b=_.array;g=_.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let E=S+0,A=S+1,w=S+2;f.push(E,A,A,w,w,E)}}else return;let m=new(np(f)?gl:ml)(f,1);m.version=g;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ST(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b]*g[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bT(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function TT(s,e,t){let n=new WeakMap,i=new gt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=a.attributes.position.count*S,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*E*4*h),w=new dl(A,x,E,h);w.type=Ti,w.needsUpdate=!0;let I=S*4;for(let v=0;v<h;v++){let L=m[v],N=p[v],V=b[v],G=x*E*4*v;for(let X=0;X<L.count;X++){let H=X*I;d===!0&&(i.fromBufferAttribute(L,X),A[G+H+0]=i.x,A[G+H+1]=i.y,A[G+H+2]=i.z,A[G+H+3]=0),_===!0&&(i.fromBufferAttribute(N,X),A[G+H+4]=i.x,A[G+H+5]=i.y,A[G+H+6]=i.z,A[G+H+7]=0),g===!0&&(i.fromBufferAttribute(V,X),A[G+H+8]=i.x,A[G+H+9]=i.y,A[G+H+10]=i.z,A[G+H+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new it(x,E)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function wT(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var nx=new an,B0=new Al(1,1),ix=new dl,rx=new pu,sx=new xl,k0=[],z0=[],V0=new Float32Array(16),H0=new Float32Array(9),G0=new Float32Array(4);function da(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=k0[i];if(r===void 0&&(r=new Float32Array(i),k0[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Rh(s,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ET(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function AT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function RT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function CT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function PT(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;G0.set(n),s.uniformMatrix2fv(this.addr,!1,G0),en(t,n)}}function IT(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;H0.set(n),s.uniformMatrix3fv(this.addr,!1,H0),en(t,n)}}function LT(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;V0.set(n),s.uniformMatrix4fv(this.addr,!1,V0),en(t,n)}}function DT(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function NT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function UT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function OT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function FT(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function BT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function kT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function zT(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function VT(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(B0.compareFunction=Qd,r=B0):r=nx,t.setTexture2D(e||r,i)}function HT(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rx,i)}function GT(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sx,i)}function WT(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ix,i)}function XT(s){switch(s){case 5126:return ET;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return PT;case 35675:return IT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return NT;case 35668:case 35672:return UT;case 35669:case 35673:return OT;case 5125:return FT;case 36294:return BT;case 36295:return kT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return WT}}function YT(s,e){s.uniform1fv(this.addr,e)}function qT(s,e){let t=da(e,this.size,2);s.uniform2fv(this.addr,t)}function ZT(s,e){let t=da(e,this.size,3);s.uniform3fv(this.addr,t)}function KT(s,e){let t=da(e,this.size,4);s.uniform4fv(this.addr,t)}function $T(s,e){let t=da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function JT(s,e){let t=da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jT(s,e){let t=da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function QT(s,e){s.uniform1iv(this.addr,e)}function ew(s,e){s.uniform2iv(this.addr,e)}function tw(s,e){s.uniform3iv(this.addr,e)}function nw(s,e){s.uniform4iv(this.addr,e)}function iw(s,e){s.uniform1uiv(this.addr,e)}function rw(s,e){s.uniform2uiv(this.addr,e)}function sw(s,e){s.uniform3uiv(this.addr,e)}function ow(s,e){s.uniform4uiv(this.addr,e)}function aw(s,e,t){let n=this.cache,i=e.length,r=Rh(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nx,r[o])}function lw(s,e,t){let n=this.cache,i=e.length,r=Rh(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rx,r[o])}function cw(s,e,t){let n=this.cache,i=e.length,r=Rh(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sx,r[o])}function uw(s,e,t){let n=this.cache,i=e.length,r=Rh(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ix,r[o])}function hw(s){switch(s){case 5126:return YT;case 35664:return qT;case 35665:return ZT;case 35666:return KT;case 35674:return $T;case 35675:return JT;case 35676:return jT;case 5124:case 35670:return QT;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}var dp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=XT(t.type)}},pp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hw(t.type)}},mp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},fp=/(\w+)(\])?(\[|\.)?/g;function W0(s,e){s.seq.push(e),s.map[e.id]=e}function fw(s,e,t){let n=s.name,i=n.length;for(fp.lastIndex=0;;){let r=fp.exec(n),o=fp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){W0(t,c===void 0?new dp(a,s,e):new pp(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new mp(a),W0(t,h)),t=h}}}var fa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);fw(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function X0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var dw=37297,pw=0;function mw(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Y0=new je;function gw(s){lt._getMatrix(Y0,lt.workingColorSpace,s);let e=`mat3( ${Y0.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(s)){case hl:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function q0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mw(s.getShaderSource(e),a)}else return r}function _w(s,e){let t=gw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xw(s,e){let t;switch(e){case o0:t="Linear";break;case a0:t="Reinhard";break;case l0:t="Cineon";break;case c0:t="ACESFilmic";break;case Ou:t="AgX";break;case h0:t="Neutral";break;case u0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wh=new B;function yw(){lt.getLuminanceCoefficients(wh);let s=wh.x.toFixed(4),e=wh.y.toFixed(4),t=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yl).join(`
`)}function Mw(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sw(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Yl(s){return s!==""}function Z0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(s){return s.replace(bw,ww)}var Tw=new Map;function ww(s,e){let t=nt[e];if(t===void 0){let n=Tw.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gp(t)}var Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $0(s){return s.replace(Ew,Aw)}function Aw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function J0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function Cw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case $s:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function Iw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case r0:e="ENVMAP_BLENDING_MIX";break;case s0:e="ENVMAP_BLENDING_ADD";break}return e}function Lw(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dw(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Rw(t),c=Cw(t),u=Pw(t),h=Iw(t),f=Lw(t),d=vw(t),_=Mw(r),g=i.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yl).join(`
`),p.length>0&&(p+=`
`)):(m=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yl).join(`
`),p=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?nt.tonemapping_pars_fragment:"",t.toneMapping!==Nr?xw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,_w("linearToOutputTexel",t.outputColorSpace),yw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yl).join(`
`)),o=gp(o),o=Z0(o,t),o=K0(o,t),a=gp(a),a=Z0(a,t),a=K0(a,t),o=$0(o),a=$0(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+o,x=b+p+a,E=X0(i,i.VERTEX_SHADER,S),A=X0(i,i.FRAGMENT_SHADER,x);i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(g)||"",V=i.getShaderInfoLog(E)||"",G=i.getShaderInfoLog(A)||"",X=N.trim(),H=V.trim(),Z=G.trim(),z=!0,te=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,A);else{let P=q0(i,E,"vertex"),ie=q0(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+P+`
`+ie)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||Z==="")&&(te=!1);te&&(L.diagnostics={runnable:z,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(E),i.deleteShader(A),I=new fa(i,g),y=Sw(i,g)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,dw)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}var Nw=0,_p=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xp(e),t.set(e,n)),n}},xp=class{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}};function Uw(s,e,t,n,i,r,o){let a=new pl,l=new _p,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,L,N,V){let G=N.fog,X=V.geometry,H=y.isMeshStandardMaterial?N.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),z=Z&&Z.mapping===kl?Z.image.height:null,te=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let P=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=P!==void 0?P.length:0,Te=0;X.morphAttributes.position!==void 0&&(Te=1),X.morphAttributes.normal!==void 0&&(Te=2),X.morphAttributes.color!==void 0&&(Te=3);let qe,Pe,Ne,K;if(te){let xe=cr[te];qe=xe.vertexShader,Pe=xe.fragmentShader}else qe=y.vertexShader,Pe=y.fragmentShader,l.update(y),Ne=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);let J=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),_e=V.isInstancedMesh===!0,ye=V.isBatchedMesh===!0,Ie=!!y.map,ft=!!y.matcap,C=!!Z,ke=!!y.aoMap,Se=!!y.lightMap,Ae=!!y.bumpMap,O=!!y.normalMap,He=!!y.displacementMap,he=!!y.emissiveMap,ze=!!y.metalnessMap,$e=!!y.roughnessMap,dt=y.anisotropy>0,R=y.clearcoat>0,M=y.dispersion>0,k=y.iridescence>0,$=y.sheen>0,j=y.transmission>0,q=dt&&!!y.anisotropyMap,ve=R&&!!y.clearcoatMap,oe=R&&!!y.clearcoatNormalMap,Re=R&&!!y.clearcoatRoughnessMap,de=k&&!!y.iridescenceMap,se=k&&!!y.iridescenceThicknessMap,fe=$&&!!y.sheenColorMap,Oe=$&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,ue=!!y.specularColorMap,Xe=!!y.specularIntensityMap,D=j&&!!y.transmissionMap,re=j&&!!y.thicknessMap,ae=!!y.gradientMap,me=!!y.alphaMap,ne=y.alphaTest>0,Q=!!y.alphaHash,be=!!y.extensions,Ve=Nr;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ve=s.toneMapping);let pt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:Pe,defines:y.defines,customVertexShaderID:Ne,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ye,batchingColor:ye&&V._colorsTexture!==null,instancing:_e,instancingColor:_e&&V.instanceColor!==null,instancingMorph:_e&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dn,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:ft,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:z,aoMap:ke,lightMap:Se,bumpMap:Ae,normalMap:O,displacementMap:f&&He,emissiveMap:he,normalMapObjectSpace:O&&y.normalMapType===x0,normalMapTangentSpace:O&&y.normalMapType===jd,metalnessMap:ze,roughnessMap:$e,anisotropy:dt,anisotropyMap:q,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Re,dispersion:M,iridescence:k,iridescenceMap:de,iridescenceThicknessMap:se,sheen:$,sheenColorMap:fe,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:ue,specularIntensityMap:Xe,transmission:j,transmissionMap:D,thicknessMap:re,gradientMap:ae,opaque:y.transparent===!1&&y.blending===ks&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:Q,combine:y.combine,mapUv:Ie&&g(y.map.channel),aoMapUv:ke&&g(y.aoMap.channel),lightMapUv:Se&&g(y.lightMap.channel),bumpMapUv:Ae&&g(y.bumpMap.channel),normalMapUv:O&&g(y.normalMap.channel),displacementMapUv:He&&g(y.displacementMap.channel),emissiveMapUv:he&&g(y.emissiveMap.channel),metalnessMapUv:ze&&g(y.metalnessMap.channel),roughnessMapUv:$e&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:ve&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(y.sheenRoughnessMap.channel),specularMapUv:Ce&&g(y.specularMap.channel),specularColorMapUv:ue&&g(y.specularColorMap.channel),specularIntensityMapUv:Xe&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:re&&g(y.thicknessMap.channel),alphaMapUv:me&&g(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(O||dt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Ie||me),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Te,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:he&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bi,flipSided:y.side===zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&y.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)v.push(L),v.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(v,y),S(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function b(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=_[y.type],L;if(v){let N=cr[v];L=C0.clone(N.uniforms)}else L=y.uniforms;return L}function E(y,v){let L;for(let N=0,V=u.length;N<V;N++){let G=u[N];if(G.cacheKey===v){L=G,++L.usedTimes;break}}return L===void 0&&(L=new Dw(s,v,y,r),u.push(L)),L}function A(y){if(--y.usedTimes===0){let v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:I}}function Ow(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Fw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function j0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Q0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){let p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){let p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Fw),n.length>1&&n.sort(f||j0),i.length>1&&i.sort(f||j0)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Bw(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Q0,s.set(n,[o])):i>=r.length?(o=new Q0,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kw(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function zw(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Vw=0;function Hw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gw(s){let e=new kw,t=zw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new et,o=new et;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,b=0,S=0,x=0,E=0,A=0,w=0;c.sort(Hw);for(let y=0,v=c.length;y<v;y++){let L=c[y],N=L.color,V=L.intensity,G=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*V,h+=N.g*V,f+=N.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],V);w++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,z=t.get(L);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=H,d++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(N).multiplyScalar(V),H.distance=G,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[g]=H;let Z=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[g]=Z.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=X,x++}g++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(N).multiplyScalar(V),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let Z=L.shadow,z=t.get(L);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=L.shadow.matrix,S++}n.point[_]=H,_++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==E||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,I.directionalLength=d,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=E,I.numLightProbes=w,n.version=Vw++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function ex(s){let e=new Gw(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ww(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new ex(s),e.set(i,[a])):r>=o.length?(a=new ex(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qw(s,e,t){let n=new ea,i=new it,r=new it,o=new gt,a=new yu({depthPacking:_0}),l=new vu,c={},u=t.maxTextureSize,h={[Bi]:zn,[zn]:Bi,[bi]:bi},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Xw,fragmentShader:Yw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new ui;_.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new pn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(A,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=s.getRenderTarget(),v=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Dr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=p!==lr&&this.type===lr,G=p===lr&&this.type!==lr;for(let X=0,H=A.length;X<H;X++){let Z=A[X],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let te=z.getFrameExtents();if(i.multiply(te),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||V===!0||G===!0){let ie=this.type!==lr?{minFilter:fn,magFilter:fn}:{};z.map!==null&&z.map.dispose(),z.map=new ir(i.x,i.y,ie),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let P=z.getViewportCount();for(let ie=0;ie<P;ie++){let Te=z.getViewport(ie);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),N.viewport(o),z.updateMatrices(Z,ie),n=z.getFrustum(),x(w,I,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===lr&&b(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,L)};function b(A,w){let I=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ir(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,I,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,I,d,g,null)}function S(A,w,I,y){let v=null,L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=I.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=v.uuid,V=w.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let X=G[V];X===void 0&&(X=v.clone(),G[V]=X,w.addEventListener("dispose",E)),v=X}if(v.visible=w.visible,v.wireframe=w.wireframe,y===lr?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=s.properties.get(v);N.light=I}return v}function x(A,w,I,y,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===lr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let V=e.update(A),G=A.material;if(Array.isArray(G)){let X=V.groups;for(let H=0,Z=X.length;H<Z;H++){let z=X[H],te=G[z.materialIndex];if(te&&te.visible){let P=S(A,te,y,v);A.onBeforeShadow(s,A,w,I,V,P,z),s.renderBufferDirect(I,null,V,P,A,z),A.onAfterShadow(s,A,w,I,V,P,z)}}}else if(G.visible){let X=S(A,G,y,v);A.onBeforeShadow(s,A,w,I,V,X,null),s.renderBufferDirect(I,null,V,X,A,null),A.onAfterShadow(s,A,w,I,V,X,null)}}let N=A.children;for(let V=0,G=N.length;V<G;V++)x(N[V],w,I,y,v)}function E(A){A.target.removeEventListener("dispose",E);for(let I in c){let y=c[I],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var Zw={[Cu]:Pu,[Iu]:Nu,[Lu]:Uu,[zs]:Du,[Pu]:Cu,[Nu]:Iu,[Uu]:Lu,[Du]:zs};function Kw(s,e){function t(){let D=!1,re=new gt,ae=null,me=new gt(0,0,0,0);return{setMask:function(ne){ae!==ne&&!D&&(s.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){D=ne},setClear:function(ne,Q,be,Ve,pt){pt===!0&&(ne*=Ve,Q*=Ve,be*=Ve),re.set(ne,Q,be,Ve),me.equals(re)===!1&&(s.clearColor(ne,Q,be,Ve),me.copy(re))},reset:function(){D=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,ae=null,me=null,ne=null;return{setReversed:function(Q){if(re!==Q){let be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),re=Q;let Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return re},setTest:function(Q){Q?J(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!D&&(s.depthMask(Q),ae=Q)},setFunc:function(Q){if(re&&(Q=Zw[Q]),me!==Q){switch(Q){case Cu:s.depthFunc(s.NEVER);break;case Pu:s.depthFunc(s.ALWAYS);break;case Iu:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Lu:s.depthFunc(s.EQUAL);break;case Du:s.depthFunc(s.GEQUAL);break;case Nu:s.depthFunc(s.GREATER);break;case Uu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ne!==Q&&(re&&(Q=1-Q),s.clearDepth(Q),ne=Q)},reset:function(){D=!1,ae=null,me=null,ne=null,re=!1}}}function i(){let D=!1,re=null,ae=null,me=null,ne=null,Q=null,be=null,Ve=null,pt=null;return{setTest:function(xe){D||(xe?J(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(xe){re!==xe&&!D&&(s.stencilMask(xe),re=xe)},setFunc:function(xe,Le,Je){(ae!==xe||me!==Le||ne!==Je)&&(s.stencilFunc(xe,Le,Je),ae=xe,me=Le,ne=Je)},setOp:function(xe,Le,Je){(Q!==xe||be!==Le||Ve!==Je)&&(s.stencilOp(xe,Le,Je),Q=xe,be=Le,Ve=Je)},setLocked:function(xe){D=xe},setClear:function(xe){pt!==xe&&(s.clearStencil(xe),pt=xe)},reset:function(){D=!1,re=null,ae=null,me=null,ne=null,Q=null,be=null,Ve=null,pt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,S=null,x=null,E=null,A=null,w=new Ye(0,0,0),I=0,y=!1,v=null,L=null,N=null,V=null,G=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=Z>=2);let te=null,P={},ie=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),qe=new gt().fromArray(ie),Pe=new gt().fromArray(Te);function Ne(D,re,ae,me){let ne=new Uint8Array(4),Q=s.createTexture();s.bindTexture(D,Q),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<ae;be++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(re+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return Q}let K={};K[s.TEXTURE_2D]=Ne(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=Ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=Ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=Ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(zs),Ae(!1),O(Fd),J(s.CULL_FACE),ke(Dr);function J(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function le(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function _e(D,re){return h[D]!==re?(s.bindFramebuffer(D,re),h[D]=re,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=re),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=re),!0):!1}function ye(D,re){let ae=d,me=!1;if(D){ae=f.get(re),ae===void 0&&(ae=[],f.set(re,ae));let ne=D.textures;if(ae.length!==ne.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,be=ne.length;Q<be;Q++)ae[Q]=s.COLOR_ATTACHMENT0+Q;ae.length=ne.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function Ie(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let ft={[es]:s.FUNC_ADD,[V_]:s.FUNC_SUBTRACT,[H_]:s.FUNC_REVERSE_SUBTRACT};ft[G_]=s.MIN,ft[W_]=s.MAX;let C={[X_]:s.ZERO,[Y_]:s.ONE,[q_]:s.SRC_COLOR,[cu]:s.SRC_ALPHA,[Q_]:s.SRC_ALPHA_SATURATE,[J_]:s.DST_COLOR,[K_]:s.DST_ALPHA,[Z_]:s.ONE_MINUS_SRC_COLOR,[uu]:s.ONE_MINUS_SRC_ALPHA,[j_]:s.ONE_MINUS_DST_COLOR,[$_]:s.ONE_MINUS_DST_ALPHA,[e0]:s.CONSTANT_COLOR,[t0]:s.ONE_MINUS_CONSTANT_COLOR,[n0]:s.CONSTANT_ALPHA,[i0]:s.ONE_MINUS_CONSTANT_ALPHA};function ke(D,re,ae,me,ne,Q,be,Ve,pt,xe){if(D===Dr){g===!0&&(le(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),D!==z_){if(D!==m||xe!==y){if((p!==es||x!==es)&&(s.blendEquation(s.FUNC_ADD),p=es,x=es),xe)switch(D){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kd:s.blendFunc(s.ONE,s.ONE);break;case zd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,E=null,A=null,w.set(0,0,0),I=0,m=D,y=xe}return}ne=ne||re,Q=Q||ae,be=be||me,(re!==p||ne!==x)&&(s.blendEquationSeparate(ft[re],ft[ne]),p=re,x=ne),(ae!==b||me!==S||Q!==E||be!==A)&&(s.blendFuncSeparate(C[ae],C[me],C[Q],C[be]),b=ae,S=me,E=Q,A=be),(Ve.equals(w)===!1||pt!==I)&&(s.blendColor(Ve.r,Ve.g,Ve.b,pt),w.copy(Ve),I=pt),m=D,y=!1}function Se(D,re){D.side===bi?le(s.CULL_FACE):J(s.CULL_FACE);let ae=D.side===zn;re&&(ae=!ae),Ae(ae),D.blending===ks&&D.transparent===!1?ke(Dr):ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),he(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function O(D){D!==F_?(J(s.CULL_FACE),D!==L&&(D===Fd?s.cullFace(s.BACK):D===B_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),L=D}function He(D){D!==N&&(H&&s.lineWidth(D),N=D)}function he(D,re,ae){D?(J(s.POLYGON_OFFSET_FILL),(V!==re||G!==ae)&&(s.polygonOffset(re,ae),V=re,G=ae)):le(s.POLYGON_OFFSET_FILL)}function ze(D){D?J(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function $e(D){D===void 0&&(D=s.TEXTURE0+X-1),te!==D&&(s.activeTexture(D),te=D)}function dt(D,re,ae){ae===void 0&&(te===null?ae=s.TEXTURE0+X-1:ae=te);let me=P[ae];me===void 0&&(me={type:void 0,texture:void 0},P[ae]=me),(me.type!==D||me.texture!==re)&&(te!==ae&&(s.activeTexture(ae),te=ae),s.bindTexture(D,re||K[D]),me.type=D,me.texture=re)}function R(){let D=P[te];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){qe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),qe.copy(D))}function Oe(D){Pe.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function Ce(D,re){let ae=c.get(re);ae===void 0&&(ae=new WeakMap,c.set(re,ae));let me=ae.get(D);me===void 0&&(me=s.getUniformBlockIndex(re,D.name),ae.set(D,me))}function ue(D,re){let me=c.get(re).get(D);l.get(re)!==me&&(s.uniformBlockBinding(re,me,D.__bindingPointIndex),l.set(re,me))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,P={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,b=null,S=null,x=null,E=null,A=null,w=new Ye(0,0,0),I=0,y=!1,v=null,L=null,N=null,V=null,G=null,qe.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:le,bindFramebuffer:_e,drawBuffers:ye,useProgram:Ie,setBlending:ke,setMaterial:Se,setFlipSided:Ae,setCullFace:O,setLineWidth:He,setPolygonOffset:he,setScissorTest:ze,activeTexture:$e,bindTexture:dt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:de,texImage3D:se,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Re,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:fe,viewport:Oe,reset:Xe}}function $w(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return d?new OffscreenCanvas(R,M):Yo("canvas")}function g(R,M,k){let $=1,j=dt(R);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor($*j.width),ve=Math.floor($*j.height);h===void 0&&(h=_(q,ve));let oe=M?_(q,ve):h;return oe.width=q,oe.height=ve,oe.getContext("2d").drawImage(R,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+ve+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(R,M,k,$,j=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),M===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){let ve=j?hl:lt.getTransfer($);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=ve===yt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,M){let k;return R?M===null||M===rs||M===aa?k=s.DEPTH24_STENCIL8:M===Ti?k=s.DEPTH32F_STENCIL8:M===sa&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===aa?k=s.DEPTH_COMPONENT24:M===Ti?k=s.DEPTH_COMPONENT32F:M===sa&&(k=s.DEPTH_COMPONENT16),k}function E(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&u.delete(M)}function w(R){let M=R.target;M.removeEventListener("dispose",w),v(M)}function I(R){let M=n.get(R);if(M.__webglInit===void 0)return;let k=R.source,$=f.get(k);if($){let j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(R),Object.keys($).length===0&&f.delete(k)}n.remove(R)}function y(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let k=R.source,$=f.get(k);delete $[M.__cacheKey],o.memory.textures--}function v(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(M.__webglFramebuffer[$][j]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=R.textures;for(let $=0,j=k.length;$<j;$++){let q=n.get(k[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(R)}let L=0;function N(){L=0}function V(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function G(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){let k=n.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function H(R,M){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function Z(R,M){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function z(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){J(k,R,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let te={[ts]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[Wo]:s.MIRRORED_REPEAT},P={[fn]:s.NEAREST,[ku]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[ra]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},ie={[y0]:s.NEVER,[w0]:s.ALWAYS,[v0]:s.LESS,[Qd]:s.LEQUAL,[M0]:s.EQUAL,[T0]:s.GEQUAL,[S0]:s.GREATER,[b0]:s.NOTEQUAL};function Te(R,M){if(M.type===Ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===ra||M.magFilter===Js||M.magFilter===Hi||M.minFilter===Bn||M.minFilter===ra||M.minFilter===Js||M.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,te[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,te[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,te[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,P[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==Js&&M.minFilter!==Hi||M.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qe(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let $=M.source,j=f.get($);j===void 0&&(j={},f.set($,j));let q=G(M);if(q!==R.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[q].usedTimes++;let ve=j[R.__cacheKey];ve!==void 0&&(j[R.__cacheKey].usedTimes--,ve.usedTimes===0&&y(M)),R.__cacheKey=q,R.__webglTexture=j[q].texture}return k}function Pe(R,M,k){return Math.floor(Math.floor(R/k)/M)}function Ne(R,M,k,$){let q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,$,M.data);else{q.sort((se,fe)=>se.start-fe.start);let ve=0;for(let se=1;se<q.length;se++){let fe=q[ve],Oe=q[se],Ce=fe.start+fe.count,ue=Pe(Oe.start,M.width,4),Xe=Pe(fe.start,M.width,4);Oe.start<=Ce+1&&ue===Xe&&Pe(Oe.start+Oe.count-1,M.width,4)===ue?fe.count=Math.max(fe.count,Oe.start+Oe.count-fe.start):(++ve,q[ve]=Oe)}q.length=ve+1;let oe=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),de=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let se=0,fe=q.length;se<fe;se++){let Oe=q[se],Ce=Math.floor(Oe.start/4),ue=Math.ceil(Oe.count/4),Xe=Ce%M.width,D=Math.floor(Ce/M.width),re=ue,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,Xe,D,re,ae,k,$,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function K(R,M,k){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let j=qe(R,M),q=M.source;t.bindTexture($,R.__webglTexture,s.TEXTURE0+k);let ve=n.get(q);if(q.version!==ve.__version||j===!0){t.activeTexture(s.TEXTURE0+k);let oe=lt.getPrimaries(lt.workingColorSpace),Re=M.colorSpace===Ur?null:lt.getPrimaries(M.colorSpace),de=M.colorSpace===Ur||oe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let se=g(M.image,!1,i.maxTextureSize);se=$e(M,se);let fe=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),Ce=S(M.internalFormat,fe,Oe,M.colorSpace,M.isVideoTexture);Te($,M);let ue,Xe=M.mipmaps,D=M.isVideoTexture!==!0,re=ve.__version===void 0||j===!0,ae=q.dataReady,me=E(M,se);if(M.isDepthTexture)Ce=x(M.format===la,M.type),re&&(D?t.texStorage2D(s.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ce,se.width,se.height,0,fe,Oe,null));else if(M.isDataTexture)if(Xe.length>0){D&&re&&t.texStorage2D(s.TEXTURE_2D,me,Ce,Xe[0].width,Xe[0].height);for(let ne=0,Q=Xe.length;ne<Q;ne++)ue=Xe[ne],D?ae&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,fe,Oe,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,fe,Oe,ue.data);M.generateMipmaps=!1}else D?(re&&t.texStorage2D(s.TEXTURE_2D,me,Ce,se.width,se.height),ae&&Ne(M,se,fe,Oe)):t.texImage2D(s.TEXTURE_2D,0,Ce,se.width,se.height,0,fe,Oe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Ce,Xe[0].width,Xe[0].height,se.depth);for(let ne=0,Q=Xe.length;ne<Q;ne++)if(ue=Xe[ne],M.format!==hi)if(fe!==null)if(D){if(ae)if(M.layerUpdates.size>0){let be=op(ue.width,ue.height,M.format,M.type);for(let Ve of M.layerUpdates){let pt=ue.data.subarray(Ve*be/ue.data.BYTES_PER_ELEMENT,(Ve+1)*be/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Ve,ue.width,ue.height,1,fe,pt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,fe,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Ce,ue.width,ue.height,se.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,fe,Oe,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Ce,ue.width,ue.height,se.depth,0,fe,Oe,ue.data)}else{D&&re&&t.texStorage2D(s.TEXTURE_2D,me,Ce,Xe[0].width,Xe[0].height);for(let ne=0,Q=Xe.length;ne<Q;ne++)ue=Xe[ne],M.format!==hi?fe!==null?D?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,fe,Oe,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,fe,Oe,ue.data)}else if(M.isDataArrayTexture)if(D){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Ce,se.width,se.height,se.depth),ae)if(M.layerUpdates.size>0){let ne=op(se.width,se.height,M.format,M.type);for(let Q of M.layerUpdates){let be=se.data.subarray(Q*ne/se.data.BYTES_PER_ELEMENT,(Q+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,fe,Oe,be)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Oe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,fe,Oe,se.data);else if(M.isData3DTexture)D?(re&&t.texStorage3D(s.TEXTURE_3D,me,Ce,se.width,se.height,se.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Oe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,fe,Oe,se.data);else if(M.isFramebufferTexture){if(re)if(D)t.texStorage2D(s.TEXTURE_2D,me,Ce,se.width,se.height);else{let ne=se.width,Q=se.height;for(let be=0;be<me;be++)t.texImage2D(s.TEXTURE_2D,be,Ce,ne,Q,0,fe,Oe,null),ne>>=1,Q>>=1}}else if(Xe.length>0){if(D&&re){let ne=dt(Xe[0]);t.texStorage2D(s.TEXTURE_2D,me,Ce,ne.width,ne.height)}for(let ne=0,Q=Xe.length;ne<Q;ne++)ue=Xe[ne],D?ae&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,fe,Oe,ue):t.texImage2D(s.TEXTURE_2D,ne,Ce,fe,Oe,ue);M.generateMipmaps=!1}else if(D){if(re){let ne=dt(se);t.texStorage2D(s.TEXTURE_2D,me,Ce,ne.width,ne.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Oe,se)}else t.texImage2D(s.TEXTURE_2D,0,Ce,fe,Oe,se);m(M)&&p($),ve.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,k){if(M.image.length!==6)return;let $=qe(R,M),j=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let q=n.get(j);if(j.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+k);let ve=lt.getPrimaries(lt.workingColorSpace),oe=M.colorSpace===Ur?null:lt.getPrimaries(M.colorSpace),Re=M.colorSpace===Ur||ve===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let Q=0;Q<6;Q++)!de&&!se?fe[Q]=g(M.image[Q],!0,i.maxCubemapSize):fe[Q]=se?M.image[Q].image:M.image[Q],fe[Q]=$e(M,fe[Q]);let Oe=fe[0],Ce=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),Xe=S(M.internalFormat,Ce,ue,M.colorSpace),D=M.isVideoTexture!==!0,re=q.__version===void 0||$===!0,ae=j.dataReady,me=E(M,Oe);Te(s.TEXTURE_CUBE_MAP,M);let ne;if(de){D&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Xe,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){ne=fe[Q].mipmaps;for(let be=0;be<ne.length;be++){let Ve=ne[be];M.format!==hi?Ce!==null?D?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ve.width,Ve.height,Ce,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ve.width,Ve.height,Ce,ue,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,Xe,Ve.width,Ve.height,0,Ce,ue,Ve.data)}}}else{if(ne=M.mipmaps,D&&re){ne.length>0&&me++;let Q=dt(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,fe[Q].width,fe[Q].height,Ce,ue,fe[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,fe[Q].width,fe[Q].height,0,Ce,ue,fe[Q].data);for(let be=0;be<ne.length;be++){let pt=ne[be].image[Q].image;D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,pt.width,pt.height,Ce,ue,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Xe,pt.width,pt.height,0,Ce,ue,pt.data)}}else{D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ue,fe[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Ce,ue,fe[Q]);for(let be=0;be<ne.length;be++){let Ve=ne[be];D?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Ce,ue,Ve.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,Xe,Ce,ue,Ve.image[Q])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),q.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function le(R,M,k,$,j,q){let ve=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),Re=S(k.internalFormat,ve,oe,k.colorSpace),de=n.get(M),se=n.get(k);if(se.__renderTarget=M,!de.__hasExternalTextures){let fe=Math.max(1,M.width>>q),Oe=Math.max(1,M.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,q,Re,fe,Oe,M.depth,0,ve,oe,null):t.texImage2D(j,q,Re,fe,Oe,0,ve,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,se.__webglTexture,0,He(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,se.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(R,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=x(M.stencilBuffer,j),ve=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=He(M);he(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,R)}else{let $=M.textures;for(let j=0;j<$.length;j++){let q=$[j],ve=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Re=S(q.internalFormat,ve,oe,q.colorSpace),de=He(M);k&&he(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Re,M.width,M.height):he(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let j=$.__webglTexture,q=He(M);if(M.depthTexture.format===Xo)he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===la)he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ie(R){let M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let $=R.texture.mipmaps;$&&$.length>0?ye(M.__webglFramebuffer[0],R):ye(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),_e(M.__webglDepthbuffer[$],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else{let $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),_e(M.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(R,M,k){let $=n.get(R);M!==void 0&&le($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ie(R)}function C(R){let M=R.texture,k=n.get(R),$=n.get(M);R.addEventListener("dispose",w);let j=R.textures,q=R.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let Re=0;Re<M.mipmaps.length;Re++)k.__webglFramebuffer[oe][Re]=s.createFramebuffer()}else k.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)k.__webglFramebuffer[oe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ve)for(let oe=0,Re=j.length;oe<Re;oe++){let de=n.get(j[oe]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&he(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){let Re=j[oe];k.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);let de=r.convert(Re.format,Re.colorSpace),se=r.convert(Re.type),fe=S(Re.internalFormat,de,se,Re.colorSpace,R.isXRRenderTarget===!0),Oe=He(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Te(s.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)le(k.__webglFramebuffer[oe][Re],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re);else le(k.__webglFramebuffer[oe],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Re=j.length;oe<Re;oe++){let de=j[oe],se=n.get(de),fe=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),Te(fe,de),le(k.__webglFramebuffer,R,de,s.COLOR_ATTACHMENT0+oe,fe,0),m(de)&&p(fe)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Te(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)le(k.__webglFramebuffer[Re],R,M,s.COLOR_ATTACHMENT0,oe,Re);else le(k.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,oe,0);m(M)&&p(oe),t.unbindTexture()}R.depthBuffer&&Ie(R)}function ke(R){let M=R.textures;for(let k=0,$=M.length;k<$;k++){let j=M[k];if(m(j)){let q=b(R),ve=n.get(j).__webglTexture;t.bindTexture(q,ve),p(q),t.unbindTexture()}}}let Se=[],Ae=[];function O(R){if(R.samples>0){if(he(R)===!1){let M=R.textures,k=R.width,$=R.height,j=s.COLOR_BUFFER_BIT,q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(R),oe=M.length>1;if(oe)for(let de=0;de<M.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let Re=R.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);let se=n.get(M[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,j,s.NEAREST),l===!0&&(Se.length=0,Ae.length=0,Se.push(s.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Se.push(q),Ae.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<M.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);let se=n.get(M[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function He(R){return Math.min(i.maxSamples,R.samples)}function he(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ze(R){let M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function $e(R,M){let k=R.colorSpace,$=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==dn&&k!==Ur&&(lt.getTransfer(k)===yt?($!==hi||j!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=le,this.useMultisampledRTT=he}function Jw(s,e){function t(n,i=Ur){let r,o=lt.getTransfer(i);if(n===Gi)return s.UNSIGNED_BYTE;if(n===Vu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wd)return s.BYTE;if(n===Xd)return s.SHORT;if(n===sa)return s.UNSIGNED_SHORT;if(n===zu)return s.INT;if(n===rs)return s.UNSIGNED_INT;if(n===Ti)return s.FLOAT;if(n===oa)return s.HALF_FLOAT;if(n===Zd)return s.ALPHA;if(n===Kd)return s.RGB;if(n===hi)return s.RGBA;if(n===Xo)return s.DEPTH_COMPONENT;if(n===la)return s.DEPTH_STENCIL;if(n===Gu)return s.RED;if(n===Wu)return s.RED_INTEGER;if(n===$d)return s.RG;if(n===Xu)return s.RG_INTEGER;if(n===Yu)return s.RGBA_INTEGER;if(n===zl||n===Vl||n===Hl||n===Gl)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qu||n===Zu||n===Ku||n===$u)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ku)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ju||n===ju||n===Qu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ju||n===ju)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eh||n===th||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===lh||n===ch||n===uh||n===hh||n===fh||n===dh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ih)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ah)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ph||n===mh||n===gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ph)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===xh||n===yh||n===vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_h)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vi({vertexShader:jw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new Cl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vp=class extends nr{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null,g=typeof XRWebGLBinding<"u",m=new yp,p={},b=t.getContextAttributes(),S=null,x=null,E=[],A=[],w=new it,I=null,y=new on;y.viewport=new gt;let v=new on;v.viewport=new gt;let L=[y,v],N=new Eu,V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=E[K];return J===void 0&&(J=new $o,E[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=E[K];return J===void 0&&(J=new $o,E[K]=J),J.getGripSpace()},this.getHand=function(K){let J=E[K];return J===void 0&&(J=new $o,E[K]=J),J.getHandSpace()};function X(K){let J=A.indexOf(K.inputSource);if(J===-1)return;let le=E[J];le!==void 0&&(le.update(K.inputSource,K.frame,c||o),le.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let K=0;K<E.length;K++){let J=A[K];J!==null&&(A[K]=null,E[K].disconnect(J))}V=null,G=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(S),d=null,f=null,h=null,i=null,x=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,_e=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?la:Xo,_e=b.stencil?aa:rs);let Ie={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ie),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ir(f.textureWidth,f.textureHeight,{format:hi,type:Gi,depthTexture:new Al(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ir(d.framebufferWidth,d.framebufferHeight,{format:hi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let J=0;J<K.removed.length;J++){let le=K.removed[J],_e=A.indexOf(le);_e>=0&&(A[_e]=null,E[_e].disconnect(le))}for(let J=0;J<K.added.length;J++){let le=K.added[J],_e=A.indexOf(le);if(_e===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=A.length){A.push(le),_e=Ie;break}else if(A[Ie]===null){A[Ie]=le,_e=Ie;break}if(_e===-1)break}let ye=E[_e];ye&&ye.connect(le)}}let z=new B,te=new B;function P(K,J,le){z.setFromMatrixPosition(J.matrixWorld),te.setFromMatrixPosition(le.matrixWorld);let _e=z.distanceTo(te),ye=J.projectionMatrix.elements,Ie=le.projectionMatrix.elements,ft=ye[14]/(ye[10]-1),C=ye[14]/(ye[10]+1),ke=(ye[9]+1)/ye[5],Se=(ye[9]-1)/ye[5],Ae=(ye[8]-1)/ye[0],O=(Ie[8]+1)/Ie[0],He=ft*Ae,he=ft*O,ze=_e/(-Ae+O),$e=ze*-Ae;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($e),K.translateZ(ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let dt=ft+ze,R=C+ze,M=He-$e,k=he+(_e-$e),$=ke*C/R*dt,j=Se*C/R*dt;K.projectionMatrix.makePerspective(M,k,$,j,dt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ie(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,le=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(le=m.depthFar)),N.near=v.near=y.near=J,N.far=v.far=y.far=le,(V!==N.near||G!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,G=N.far),N.layers.mask=K.layers.mask|6,y.layers.mask=N.layers.mask&3,v.layers.mask=N.layers.mask&5;let _e=K.parent,ye=N.cameras;ie(N,_e);for(let Ie=0;Ie<ye.length;Ie++)ie(ye[Ie],_e);ye.length===2?P(N,y,v):N.projectionMatrix.copy(y.projectionMatrix),Te(K,N,_e)};function Te(K,J,le){le===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let qe=null;function Pe(K,J){if(u=J.getViewerPose(c||o),_=J,u!==null){let le=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let _e=!1;le.length!==N.cameras.length&&(N.cameras.length=0,_e=!0);for(let C=0;C<le.length;C++){let ke=le[C],Se=null;if(d!==null)Se=d.getViewport(ke);else{let O=h.getViewSubImage(f,ke);Se=O.viewport,C===0&&(e.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(x))}let Ae=L[C];Ae===void 0&&(Ae=new on,Ae.layers.enable(C),Ae.viewport=new gt,L[C]=Ae),Ae.matrix.fromArray(ke.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ke.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Se.x,Se.y,Se.width,Se.height),C===0&&(N.matrix.copy(Ae.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),_e===!0&&N.cameras.push(Ae)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let C=h.getDepthInformation(le[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<le.length;C++){let ke=le[C].camera;if(ke){let Se=p[ke];Se||(Se=new Rl,p[ke]=Se);let Ae=h.getCameraImage(ke);Se.sourceTexture=Ae}}}}for(let le=0;le<E.length;le++){let _e=A[le],ye=E[le];_e!==null&&ye!==void 0&&ye.update(_e,J,c||o)}qe&&qe(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}let Ne=new tx;Ne.setAnimationLoop(Pe),this.setAnimationLoop=function(K){qe=K},this.dispose=function(){}}},eo=new ki,eE=new et;function tE(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ip(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,eo.copy(x),eo.x*=-1,eo.y*=-1,eo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),m.envMapRotation.value.setFromMatrix4(eE.makeRotationFromEuler(eo)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nE(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let x=S.program;n.uniformBlockBinding(b,x)}function c(b,S){let x=i[b.id];x===void 0&&(_(b),x=u(b),i[b.id]=x,b.addEventListener("dispose",m));let E=S.program;n.updateUBOMapping(b,E);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function u(b){let S=h();b.__bindingPointIndex=S;let x=s.createBuffer(),E=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=i[b.id],x=b.uniforms,E=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,w=x.length;A<w;A++){let I=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=I.length;y<v;y++){let L=I[y];if(d(L,A,y,E)===!0){let N=L.__offset,V=Array.isArray(L.value)?L.value:[L.value],G=0;for(let X=0;X<V.length;X++){let H=V[X],Z=g(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+G,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,S,x,E){let A=b.value,w=S+"_"+x;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{let I=E[w];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return E[w]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(b){let S=b.uniforms,x=0,E=16;for(let w=0,I=S.length;w<I;w++){let y=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,L=y.length;v<L;v++){let N=y[v],V=Array.isArray(N.value)?N.value:[N.value];for(let G=0,X=V.length;G<X;G++){let H=V[G],Z=g(H),z=x%E,te=z%Z.boundary,P=z+te;x+=te,P!==0&&E-P<Z.storage&&(x+=E-P),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Z.storage}}}let A=x%E;return A>0&&(x+=E-A),b.__size=x,b.__cache={},this}function g(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Ah=class{constructor(e={}){let{canvas:t=E0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=Xt;let A=0,w=0,I=null,y=-1,v=null,L=new gt,N=new gt,V=null,G=new Ye(0),X=0,H=t.width,Z=t.height,z=1,te=null,P=null,ie=new gt(0,0,H,Z),Te=new gt(0,0,H,Z),qe=!1,Pe=new ea,Ne=!1,K=!1,J=new et,le=new B,_e=new gt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function ft(){return I===null?z:1}let C=n;function ke(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),C===null){let U="webgl2";if(C=ke(U,T),C===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Ae,O,He,he,ze,$e,dt,R,M,k,$,j,q,ve,oe,Re,de,se,fe,Oe,Ce,ue,Xe;function D(){Se=new vT(C),Se.init(),Ce=new Jw(C,Se),Ae=new dT(C,Se,e,Ce),O=new Kw(C,Se),Ae.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),He=new bT(C),he=new Ow,ze=new $w(C,Se,O,he,Ae,Ce,He),$e=new mT(x),dt=new yT(x),R=new CM(C),ue=new hT(C,R),M=new MT(C,R,He,ue),k=new wT(C,M,R,He),se=new TT(C,Ae,ze),oe=new pT(he),$=new Uw(x,$e,dt,Se,Ae,ue,oe),j=new tE(x,he),q=new Bw,ve=new Ww(Se),de=new uT(x,$e,dt,O,k,d,l),Re=new qw(x,k,Ae),Xe=new nE(C,He,Ae,O),fe=new fT(C,Se,He),Oe=new ST(C,Se,He),He.programs=$.programs,x.capabilities=Ae,x.extensions=Se,x.properties=he,x.renderLists=q,x.shadowMap=Re,x.state=O,x.info=He}D();let re=new vp(x,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(H,Z,!1))},this.getSize=function(T){return T.set(H,Z)},this.setSize=function(T,U,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Z=U,t.width=Math.floor(T*z),t.height=Math.floor(U*z),W===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(H*z,Z*z).floor()},this.setDrawingBufferSize=function(T,U,W){H=T,Z=U,z=W,t.width=Math.floor(T*W),t.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,U,W,Y){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,W,Y),O.viewport(L.copy(ie).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,U,W,Y){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,U,W,Y),O.scissor(N.copy(Te).multiplyScalar(z).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(T){O.setScissorTest(qe=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,W=!0){let Y=0;if(T){let F=!1;if(I!==null){let ee=I.texture.format;F=ee===Yu||ee===Xu||ee===Wu}if(F){let ee=I.texture.type,ce=ee===Gi||ee===rs||ee===sa||ee===aa||ee===Vu||ee===Hu,we=de.getClearColor(),Me=de.getClearAlpha(),Be=we.r,Ue=we.g,De=we.b;ce?(_[0]=Be,_[1]=Ue,_[2]=De,_[3]=Me,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=Be,g[1]=Ue,g[2]=De,g[3]=Me,C.clearBufferiv(C.COLOR,0,g))}else Y|=C.COLOR_BUFFER_BIT}U&&(Y|=C.DEPTH_BUFFER_BIT),W&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),de.dispose(),q.dispose(),ve.dispose(),he.dispose(),$e.dispose(),dt.dispose(),k.dispose(),ue.dispose(),Xe.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",Je),re.removeEventListener("sessionend",pe),We.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=He.autoReset,U=Re.enabled,W=Re.autoUpdate,Y=Re.needsUpdate,F=Re.type;D(),He.autoReset=T,Re.enabled=U,Re.autoUpdate=W,Re.needsUpdate=Y,Re.type=F}function ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){let U=T.target;U.removeEventListener("dispose",Q),be(U)}function be(T){Ve(T),he.remove(T)}function Ve(T){let U=he.get(T).programs;U!==void 0&&(U.forEach(function(W){$.releaseProgram(W)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,Y,F,ee){U===null&&(U=ye);let ce=F.isMesh&&F.matrixWorld.determinant()<0,we=_t(T,U,W,Y,F);O.setMaterial(Y,ce);let Me=W.index,Be=1;if(Y.wireframe===!0){if(Me=M.getWireframeAttribute(W),Me===void 0)return;Be=2}let Ue=W.drawRange,De=W.attributes.position,Qe=Ue.start*Be,ht=(Ue.start+Ue.count)*Be;ee!==null&&(Qe=Math.max(Qe,ee.start*Be),ht=Math.min(ht,(ee.start+ee.count)*Be)),Me!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Me.count)):De!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,De.count));let Ft=ht-Qe;if(Ft<0||Ft===1/0)return;ue.setup(F,Y,we,W,Me);let At,St=fe;if(Me!==null&&(At=R.get(Me),St=Oe,St.setIndex(At)),F.isMesh)Y.wireframe===!0?(O.setLineWidth(Y.wireframeLinewidth*ft()),St.setMode(C.LINES)):St.setMode(C.TRIANGLES);else if(F.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),O.setLineWidth(Ge*ft()),F.isLineSegments?St.setMode(C.LINES):F.isLineLoop?St.setMode(C.LINE_LOOP):St.setMode(C.LINE_STRIP)}else F.isPoints?St.setMode(C.POINTS):F.isSprite&&St.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))St.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ge=F._multiDrawStarts,Lt=F._multiDrawCounts,mt=F._multiDrawCount,ei=Me?R.get(Me).bytesPerElement:1,lo=he.get(Y).currentProgram.getUniforms();for(let ti=0;ti<mt;ti++)lo.setValue(C,"_gl_DrawID",ti),St.render(Ge[ti]/ei,Lt[ti])}else if(F.isInstancedMesh)St.renderInstances(Qe,Ft,F.count);else if(W.isInstancedBufferGeometry){let Ge=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Lt=Math.min(W.instanceCount,Ge);St.renderInstances(Qe,Ft,Lt)}else St.render(Qe,Ft)};function pt(T,U,W){T.transparent===!0&&T.side===bi&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,Gt(T,U,W),T.side=Bi,T.needsUpdate=!0,Gt(T,U,W),T.side=bi):Gt(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),p=ve.get(W),p.init(U),S.push(p),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==W&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let Y=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ee=F.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){let we=ee[ce];pt(we,W,F),Y.add(we)}else pt(ee,W,F),Y.add(ee)}),p=S.pop(),Y},this.compileAsync=function(T,U,W=null){let Y=this.compile(T,U,W);return new Promise(F=>{function ee(){if(Y.forEach(function(ce){he.get(ce).currentProgram.isReady()&&Y.delete(ce)}),Y.size===0){F(T);return}setTimeout(ee,10)}Se.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let xe=null;function Le(T){xe&&xe(T)}function Je(){We.stop()}function pe(){We.start()}let We=new tx;We.setAnimationLoop(Le),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(T){xe=T,re.setAnimationLoop(T),T===null?We.stop():We.start()},re.addEventListener("sessionstart",Je),re.addEventListener("sessionend",pe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,I),p=ve.get(T,S.length),p.init(U),S.push(p),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(J,Oi,U.reversedDepth),K=this.localClippingEnabled,Ne=oe.init(this.clippingPlanes,K),m=q.get(T,b.length),m.init(),b.push(m),re.enabled===!0&&re.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&Fe(ee,U,-1/0,x.sortObjects)}Fe(T,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,P),Ie=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ie&&de.addToRenderList(m,T),this.info.render.frame++,Ne===!0&&oe.beginShadows();let W=p.state.shadowsArray;Re.render(W,T,U),Ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){let ee=U.cameras;if(F.length>0)for(let ce=0,we=ee.length;ce<we;ce++){let Me=ee[ce];Ht(Y,F,T,Me)}Ie&&de.render(T);for(let ce=0,we=ee.length;ce<we;ce++){let Me=ee[ce];Ze(m,T,Me,Me.viewport)}}else F.length>0&&Ht(Y,F,T,U),Ie&&de.render(T),Ze(m,T,U);I!==null&&w===0&&(ze.updateMultisampleRenderTarget(I),ze.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,U),ue.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],Ne===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Fe(T,U,W,Y){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Pe.intersectsSprite(T)){Y&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);let ce=k.update(T),we=T.material;we.visible&&m.push(T,ce,we,W,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Pe.intersectsObject(T))){let ce=k.update(T),we=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),_e.copy(ce.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(we)){let Me=ce.groups;for(let Be=0,Ue=Me.length;Be<Ue;Be++){let De=Me[Be],Qe=we[De.materialIndex];Qe&&Qe.visible&&m.push(T,ce,Qe,W,_e.z,De)}}else we.visible&&m.push(T,ce,we,W,_e.z,null)}}let ee=T.children;for(let ce=0,we=ee.length;ce<we;ce++)Fe(ee[ce],U,W,Y)}function Ze(T,U,W,Y){let F=T.opaque,ee=T.transmissive,ce=T.transparent;p.setupLightsView(W),Ne===!0&&oe.setGlobalState(x.clippingPlanes,W),Y&&O.viewport(L.copy(Y)),F.length>0&&tt(F,U,W),ee.length>0&&tt(ee,U,W),ce.length>0&&tt(ce,U,W),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ht(T,U,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ir(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?oa:Gi,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let ee=p.state.transmissionRenderTarget[Y.id],ce=Y.viewport||L;ee.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let we=x.getRenderTarget(),Me=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(G),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ie&&de.render(W);let Ue=x.toneMapping;x.toneMapping=Nr;let De=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Ne===!0&&oe.setGlobalState(x.clippingPlanes,Y),tt(T,W,Y),ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ht=0,Ft=U.length;ht<Ft;ht++){let At=U[ht],St=At.object,Ge=At.geometry,Lt=At.material,mt=At.group;if(Lt.side===bi&&St.layers.test(Y.layers)){let ei=Lt.side;Lt.side=zn,Lt.needsUpdate=!0,Ct(St,W,Y,Ge,Lt,mt),Lt.side=ei,Lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee))}x.setRenderTarget(we,Me,Be),x.setClearColor(G,X),De!==void 0&&(Y.viewport=De),x.toneMapping=Ue}function tt(T,U,W){let Y=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=T.length;F<ee;F++){let ce=T[F],we=ce.object,Me=ce.geometry,Be=ce.group,Ue=ce.material;Ue.allowOverride===!0&&Y!==null&&(Ue=Y),we.layers.test(W.layers)&&Ct(we,U,W,Me,Ue,Be)}}function Ct(T,U,W,Y,F,ee){T.onBeforeRender(x,U,W,Y,F,ee),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,U,W,Y,T,ee),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=zn,F.needsUpdate=!0,x.renderBufferDirect(W,U,Y,F,T,ee),F.side=Bi,F.needsUpdate=!0,x.renderBufferDirect(W,U,Y,F,T,ee),F.side=bi):x.renderBufferDirect(W,U,Y,F,T,ee),T.onAfterRender(x,U,W,Y,F,ee)}function Gt(T,U,W){U.isScene!==!0&&(U=ye);let Y=he.get(T),F=p.state.lights,ee=p.state.shadowsArray,ce=F.state.version,we=$.getParameters(T,F.state,ee,U,W),Me=$.getProgramCacheKey(we),Be=Y.programs;Y.environment=T.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(T.isMeshStandardMaterial?dt:$e).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Q),Be=new Map,Y.programs=Be);let Ue=Be.get(Me);if(Ue!==void 0){if(Y.currentProgram===Ue&&Y.lightsStateVersion===ce)return Mt(T,we),Ue}else we.uniforms=$.getUniforms(T),T.onBeforeCompile(we,x),Ue=$.acquireProgram(we,Me),Be.set(Me,Ue),Y.uniforms=we.uniforms;let De=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=oe.uniform),Mt(T,we),Y.needsLights=Et(T),Y.lightsStateVersion=ce,Y.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=Ue,Y.uniformsList=null,Ue}function wt(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=fa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Mt(T,U){let W=he.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function _t(T,U,W,Y,F){U.isScene!==!0&&(U=ye),ze.resetTextureUnits();let ee=U.fog,ce=Y.isMeshStandardMaterial?U.environment:null,we=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:dn,Me=(Y.isMeshStandardMaterial?dt:$e).get(Y.envMap||ce),Be=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color,Ft=Nr;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ft=x.toneMapping);let At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=At!==void 0?At.length:0,Ge=he.get(Y),Lt=p.state.lights;if(Ne===!0&&(K===!0||T!==v)){let En=T===v&&Y.id===y;oe.setState(Y,T,En)}let mt=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Lt.state.version||Ge.outputColorSpace!==we||F.isBatchedMesh&&Ge.batching===!1||!F.isBatchedMesh&&Ge.batching===!0||F.isBatchedMesh&&Ge.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ge.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ge.instancing===!1||!F.isInstancedMesh&&Ge.instancing===!0||F.isSkinnedMesh&&Ge.skinning===!1||!F.isSkinnedMesh&&Ge.skinning===!0||F.isInstancedMesh&&Ge.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ge.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ge.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ge.instancingMorph===!1&&F.morphTexture!==null||Ge.envMap!==Me||Y.fog===!0&&Ge.fog!==ee||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==oe.numPlanes||Ge.numIntersection!==oe.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==Ue||Ge.morphTargets!==De||Ge.morphNormals!==Qe||Ge.morphColors!==ht||Ge.toneMapping!==Ft||Ge.morphTargetsCount!==St)&&(mt=!0):(mt=!0,Ge.__version=Y.version);let ei=Ge.currentProgram;mt===!0&&(ei=Gt(Y,U,F));let lo=!1,ti=!1,Sa=!1,Dt=ei.getUniforms(),di=Ge.uniforms;if(O.useProgram(ei.program)&&(lo=!0,ti=!0,Sa=!0),Y.id!==y&&(y=Y.id,ti=!0),lo||v!==T){O.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(C,"projectionMatrix",T.projectionMatrix),Dt.setValue(C,"viewMatrix",T.matrixWorldInverse);let Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(C,le.setFromMatrixPosition(T.matrixWorld)),Ae.logarithmicDepthBuffer&&Dt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Dt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,ti=!0,Sa=!0)}if(F.isSkinnedMesh){Dt.setOptional(C,F,"bindMatrix"),Dt.setOptional(C,F,"bindMatrixInverse");let En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Dt.setValue(C,"boneTexture",En.boneTexture,ze))}F.isBatchedMesh&&(Dt.setOptional(C,F,"batchingTexture"),Dt.setValue(C,"batchingTexture",F._matricesTexture,ze),Dt.setOptional(C,F,"batchingIdTexture"),Dt.setValue(C,"batchingIdTexture",F._indirectTexture,ze),Dt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Dt.setValue(C,"batchingColorTexture",F._colorsTexture,ze));let pi=W.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&se.update(F,W,ei),(ti||Ge.receiveShadow!==F.receiveShadow)&&(Ge.receiveShadow=F.receiveShadow,Dt.setValue(C,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(di.envMap.value=Me,di.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&U.environment!==null&&(di.envMapIntensity.value=U.environmentIntensity),ti&&(Dt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Qn(di,Sa),ee&&Y.fog===!0&&j.refreshFogUniforms(di,ee),j.refreshMaterialUniforms(di,Y,z,Z,p.state.transmissionRenderTarget[T.id]),fa.upload(C,wt(Ge),di,ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fa.upload(C,wt(Ge),di,ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Dt.setValue(C,"center",F.center),Dt.setValue(C,"modelViewMatrix",F.modelViewMatrix),Dt.setValue(C,"normalMatrix",F.normalMatrix),Dt.setValue(C,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let En=Y.uniformsGroups;for(let Hn=0,Bh=En.length;Hn<Bh;Hn++){let us=En[Hn];Xe.update(us,ei),Xe.bind(us,ei)}}return ei}function Qn(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Et(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,U,W){let Y=he.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),he.get(T.texture).__webglTexture=U,he.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:W,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let W=he.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let wn=C.createFramebuffer();this.setRenderTarget=function(T,U=0,W=0){I=T,A=U,w=W;let Y=!0,F=null,ee=!1,ce=!1;if(T){let Me=he.get(T);if(Me.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(Me.__webglFramebuffer===void 0)ze.setupRenderTarget(T);else if(Me.__hasExternalTextures)ze.rebindTextures(T,he.get(T.texture).__webglTexture,he.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let De=T.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&he.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(T)}}let Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ce=!0);let Ue=he.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?F=Ue[U][W]:F=Ue[U],ee=!0):T.samples>0&&ze.useMultisampledRTT(T)===!1?F=he.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[W]:F=Ue,L.copy(T.viewport),N.copy(T.scissor),V=T.scissorTest}else L.copy(ie).multiplyScalar(z).floor(),N.copy(Te).multiplyScalar(z).floor(),V=qe;if(W!==0&&(F=wn),O.bindFramebuffer(C.FRAMEBUFFER,F)&&Y&&O.drawBuffers(T,F),O.viewport(L),O.scissor(N),O.setScissorTest(V),ee){let Me=he.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,W)}else if(ce){let Me=U;for(let Be=0;Be<T.textures.length;Be++){let Ue=he.get(T.textures[Be]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Be,Ue.__webglTexture,W,Me)}}else if(T!==null&&W!==0){let Me=he.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(T,U,W,Y,F,ee,ce,we=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(Me=Me[ce]),Me){O.bindFramebuffer(C.FRAMEBUFFER,Me);try{let Be=T.textures[we],Ue=Be.format,De=Be.type;if(!Ae.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-Y&&W>=0&&W<=T.height-F&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we),C.readPixels(U,W,Y,F,Ce.convert(Ue),Ce.convert(De),ee))}finally{let Be=I!==null?he.get(I).__webglFramebuffer:null;O.bindFramebuffer(C.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,Y,F,ee,ce,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=he.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(Me=Me[ce]),Me)if(U>=0&&U<=T.width-Y&&W>=0&&W<=T.height-F){O.bindFramebuffer(C.FRAMEBUFFER,Me);let Be=T.textures[we],Ue=Be.format,De=Be.type;if(!Ae.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,ee.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we),C.readPixels(U,W,Y,F,Ce.convert(Ue),Ce.convert(De),0);let ht=I!==null?he.get(I).__webglFramebuffer:null;O.bindFramebuffer(C.FRAMEBUFFER,ht);let Ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await A0(C,Ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ee),C.deleteBuffer(Qe),C.deleteSync(Ft),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,W=0){let Y=Math.pow(2,-W),F=Math.floor(T.image.width*Y),ee=Math.floor(T.image.height*Y),ce=U!==null?U.x:0,we=U!==null?U.y:0;ze.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,ce,we,F,ee),O.unbindTexture()};let fi=C.createFramebuffer(),$t=C.createFramebuffer();this.copyTextureToTexture=function(T,U,W=null,Y=null,F=0,ee=null){ee===null&&(F!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let ce,we,Me,Be,Ue,De,Qe,ht,Ft,At=T.isCompressedTexture?T.mipmaps[ee]:T.image;if(W!==null)ce=W.max.x-W.min.x,we=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,Ue=W.min.y,De=W.isBox3?W.min.z:0;else{let pi=Math.pow(2,-F);ce=Math.floor(At.width*pi),we=Math.floor(At.height*pi),T.isDataArrayTexture?Me=At.depth:T.isData3DTexture?Me=Math.floor(At.depth*pi):Me=1,Be=0,Ue=0,De=0}Y!==null?(Qe=Y.x,ht=Y.y,Ft=Y.z):(Qe=0,ht=0,Ft=0);let St=Ce.convert(U.format),Ge=Ce.convert(U.type),Lt;U.isData3DTexture?(ze.setTexture3D(U,0),Lt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ze.setTexture2DArray(U,0),Lt=C.TEXTURE_2D_ARRAY):(ze.setTexture2D(U,0),Lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let mt=C.getParameter(C.UNPACK_ROW_LENGTH),ei=C.getParameter(C.UNPACK_IMAGE_HEIGHT),lo=C.getParameter(C.UNPACK_SKIP_PIXELS),ti=C.getParameter(C.UNPACK_SKIP_ROWS),Sa=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,De);let Dt=T.isDataArrayTexture||T.isData3DTexture,di=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let pi=he.get(T),En=he.get(U),Hn=he.get(pi.__renderTarget),Bh=he.get(En.__renderTarget);O.bindFramebuffer(C.READ_FRAMEBUFFER,Hn.__webglFramebuffer),O.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bh.__webglFramebuffer);for(let us=0;us<Me;us++)Dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,he.get(T).__webglTexture,F,De+us),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,he.get(U).__webglTexture,ee,Ft+us)),C.blitFramebuffer(Be,Ue,ce,we,Qe,ht,ce,we,C.DEPTH_BUFFER_BIT,C.NEAREST);O.bindFramebuffer(C.READ_FRAMEBUFFER,null),O.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||he.has(T)){let pi=he.get(T),En=he.get(U);O.bindFramebuffer(C.READ_FRAMEBUFFER,fi),O.bindFramebuffer(C.DRAW_FRAMEBUFFER,$t);for(let Hn=0;Hn<Me;Hn++)Dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,pi.__webglTexture,F,De+Hn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,pi.__webglTexture,F),di?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,En.__webglTexture,ee,Ft+Hn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,En.__webglTexture,ee),F!==0?C.blitFramebuffer(Be,Ue,ce,we,Qe,ht,ce,we,C.COLOR_BUFFER_BIT,C.NEAREST):di?C.copyTexSubImage3D(Lt,ee,Qe,ht,Ft+Hn,Be,Ue,ce,we):C.copyTexSubImage2D(Lt,ee,Qe,ht,Be,Ue,ce,we);O.bindFramebuffer(C.READ_FRAMEBUFFER,null),O.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else di?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Lt,ee,Qe,ht,Ft,ce,we,Me,St,Ge,At.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Lt,ee,Qe,ht,Ft,ce,we,Me,St,At.data):C.texSubImage3D(Lt,ee,Qe,ht,Ft,ce,we,Me,St,Ge,At):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ee,Qe,ht,ce,we,St,Ge,At.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ee,Qe,ht,At.width,At.height,St,At.data):C.texSubImage2D(C.TEXTURE_2D,ee,Qe,ht,ce,we,St,Ge,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,mt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ei),C.pixelStorei(C.UNPACK_SKIP_PIXELS,lo),C.pixelStorei(C.UNPACK_SKIP_ROWS,ti),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Sa),ee===0&&U.generateMipmaps&&C.generateMipmap(Lt),O.unbindTexture()},this.initRenderTarget=function(T){he.get(T).__webglFramebuffer===void 0&&ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),O.unbindTexture()},this.resetState=function(){A=0,w=0,I=null,O.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function Sp(s,e){if(e===Jd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ca||e===Wl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ca)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ch=class extends ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new Vp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new Np(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Rp(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Ip(t)}),this.register(function(t){return new Bp(t)}),this.register(function(t){return new Fp(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new Hp(t)}),this.register(function(t){return new Gp(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Lr.extractUrlBase(e);o=Lr.resolveURL(c,this.path)}else o=Lr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ia(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hx){try{o[at.KHR_BINARY_GLTF]=new Wp(e)}catch(h){i&&i(h);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Jp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new Ap;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new Xp(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new Yp;break;case at.KHR_MESH_QUANTIZATION:o[h]=new qp;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function iE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ep=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],dn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new is(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ol(u),c.distance=h;break;case"spot":c=new Ul(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ur(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Ap=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return zi}extendParams(e,t,n){let i=[];e.color=new Ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(i)}},Rp=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cp=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(a,a)}return Promise.all(r)}},Pp=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ip=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Lp=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],dn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Dp=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Np=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(a[0],a[1],a[2],dn),Promise.all(r)}},Up=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Op=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(a[0],a[1],a[2],dn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xt)),Promise.all(r)}},Fp=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Bp=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},kp=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},zp=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Vp=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Hp=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Gp=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==wi.TRIANGLES&&c.mode!==wi.TRIANGLE_STRIP&&c.mode!==wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let _ of h){let g=new et,m=new B,p=new Fn,b=new B(1,1,1),S=new bl(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,g.compose(m,p,b));for(let x in l)if(x==="_COLOR_0"){let E=l[x];S.instanceColor=new ns(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);It.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},hx="glTF",ql=12,ax={JSON:1313821514,BIN:5130562},Wp=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ql),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ql,r=new DataView(e,ql),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ax.JSON){let c=new Uint8Array(e,ql+o,a);this.content=n.decode(c)}else if(l===ax.BIN){let c=ql+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Kp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Kp[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=pa[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let _ in d.attributes){let g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(d)},a,c,dn,f)})})}},Yp=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},qp=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Ph=class extends Rr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,b=1-m,S=p-f+h;for(let x=0;x!==a;x++){let E=o[g+x+a],A=o[g+x+l]*u,w=o[_+x+a],I=o[_+x]*u;r[x]=b*E+S*A+m*w+p*I}return r}},rE=new Fn,Zp=class extends Ph{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return rE.fromArray(r).normalize().toArray(r),r}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lx={9728:fn,9729:Bn,9984:ku,9985:ra,9986:Js,9987:Hi},cx={33071:er,33648:Wo,10497:ts},bp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sE={CUBICSPLINE:void 0,LINEAR:Hs,STEP:Vs},Tp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ys({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bi})),s.DefaultMaterial}function io(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ur(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function lE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cE(s){let e,t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wp(t.attributes):e=s.indices+":"+wp(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wp(s.targets[n]);return e}function wp(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $p(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hE=new et,Jp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ll(this.options.manager):this.textureLoader=new Fl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return io(r,a,i),ur(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Lr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=bp[i.type],a=pa[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Vt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=bp[i.type],c=pa[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,g,m;if(d&&d!==h){let p=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,S=t.cache.get(b);S||(g=new c(a,p*d,i.count*d/u),S=new Jo(g,d/u),t.cache.add(b,S)),m=new jo(S,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new Vt(g,l,_);if(i.sparse!==void 0){let p=bp.SCALAR,b=pa[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new b(o[1],S,i.sparse.count*p),A=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=E.length;w<I;w++){let y=E[w];if(m.setX(y,A[w*l]),l>=2&&m.setY(y,A[w*l+1]),l>=3&&m.setZ(y,A[w*l+2]),l>=4&&m.setW(y,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=lx[f.magFilter]||Bn,u.minFilter=lx[f.minFilter]||Hi,u.wrapS=cx[f.wrapS]||ts,u.wrapT=cx[f.wrapT]||ts,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==fn&&u.minFilter!==Bn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let m=new an(g);m.needsUpdate=!0,f(m)}),t.load(Lr.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ur(h,o),h.userData.mimeType=o.mimeType||uE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new na,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ta,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ys}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let h=i[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bi);let u=r.alphaMode||Tp.OPAQUE;if(u===Tp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tp.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==zi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zi){let h=r.emissiveFactor;a.emissive=new Ye().setRGB(h[0],h[1],h[2],dn)}return r.emissiveTexture!==void 0&&o!==zi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ur(h,r),t.associations.set(h,{materials:e}),r.extensions&&io(i,h,r),h})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ux(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=cE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ux(new ui,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?oE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){let g=u[d],m=o[d],p,b=c[d];if(m.mode===wi.TRIANGLES||m.mode===wi.TRIANGLE_STRIP||m.mode===wi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new vl(g,b):new pn(g,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wi.TRIANGLE_STRIP?p.geometry=Sp(p.geometry,Wl):m.mode===wi.TRIANGLE_FAN&&(p.geometry=Sp(p.geometry,ca));else if(m.mode===wi.LINES)p=new Tl(g,b);else if(m.mode===wi.LINE_STRIP)p=new Xs(g,b);else if(m.mode===wi.LINE_LOOP)p=new wl(g,b);else if(m.mode===wi.POINTS)p=new El(g,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ur(p,r),m.extensions&&io(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&io(i,h[0],r),h[0];let f=new Zn;r.extensions&&io(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Xl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ir(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ur(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new et;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,b=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let S=0,x=f.length;S<x;S++){let E=f[S],A=d[S],w=_[S],I=g[S],y=m[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let v=n._createAnimationTracks(E,A,w,I,y);if(v)for(let L=0;L<v.length;L++)p.push(v[L])}let b=new qs(r,void 0,p);return ur(b,i),b})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hE)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Qo:c.length>1?u=new Zn:c.length===1?u=c[0]:u=new It,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ur(u,r),r.extensions&&io(n,u,r),r.matrix!==void 0){let h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Zn;n.name&&(r.name=i.createUniqueName(n.name)),ur(r,n),n.extensions&&io(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof $n||f instanceof an)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];ss[r.path]===ss.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ss[r.path]){case ss.weights:c=rr;break;case ss.rotation:c=sr;break;case ss.translation:case ss.scale:c=or;break;default:switch(n.itemSize){case 1:c=rr;break;case 2:case 3:default:c=or;break}break}let u=i.interpolation!==void 0?sE[i.interpolation]:Hs,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let _=new c(l[f]+"."+ss[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$p(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof sr?Zp:Ph;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function fE(s,e,t){let n=e.attributes,i=new kn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){let u=$p(pa[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){let g=$p(pa[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ux(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Kp[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return lt.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),ur(s,e),fE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?aE(s,e.targets,t):s})}var Ih=class{constructor(e=0){this.scrollY=Math.max(0,e),this.facing=1,this.moving=!1,this.walkTime=0}scrollTo(e,t){let n=Math.max(0,Number.isFinite(e)?e:this.scrollY),i=n-this.scrollY;return this.scrollY=n,Math.abs(i)<.01?!1:(this.facing=i>0?1:-1,this.walkTime+=Math.abs(i)*t,this.moving=!0,!0)}stop(){this.moving=!1}rebase(e){this.scrollY=Math.max(0,e)}};function jp(s,e,t,n){let i=Math.min(1,Math.max(0,s/Math.max(1,e)));return t+(n-t)*i}function fx(s,e,t,n){let i=n?1-Math.exp(-Math.max(0,t)/.035):1,r=s.x+(e.x-s.x)*i,o=s.time+(e.time-s.time)*i;return Math.abs(e.x-r)<.05&&Math.abs(e.time-o)<1e-4?{...e,settled:!0}:{x:r,time:o,settled:!1}}function Qp(s,e){let n=(s%e.duration+e.duration)%e.duration*e.samples_per_second,i=Math.floor(n),r=n-i;return e.ground[i]*(1-r)+e.ground[i+1]*r}var dE={sitting:{y:.7308,z:.4499,radiusY:.0113,radiusZ:.0048,slope:.13,sides:[{x:-.0445,face:[12613,12615,12616]},{x:.07175,face:[22349,22350,22351]}]},walking:{y:.55285,z:.4499,radiusY:.0098,radiusZ:.0039,slope:.08,sides:[{x:-.04763,face:[10128,10130,10170]},{x:.04585,face:[35038,35034,35032]}]}};function pE(s,e,t,n){if(!s.active)return{x:0,y:0,weight:0};let i=(s.x-e.x)/Math.max(150,t.width*.3),r=(e.y-s.y)/Math.max(120,t.height*.25),o=Math.hypot(i,r);return o>1&&(i/=o,r/=o),{x:i*n,y:r,weight:1}}function mE(s,e,t){let n=1-Math.exp(-Math.max(0,t)/.055),i=Object.fromEntries(["x","y","weight"].map(o=>[o,s[o]+(e[o]-s[o])*n])),r=["x","y","weight"].every(o=>Math.abs(i[o]-e[o])<.001);return r?{...e,settled:r}:{...i,settled:r}}var gE=`
varying vec3 vCatEye;
uniform vec2 uCatGaze;
uniform float uCatAttention;
`,_E=`
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
`;function em(s,e){let t=dE[e],n;if(s.traverse(g=>{g.isMesh&&g.material.map&&(n=g)}),!n||!t)throw Error("Eye calibration requires the supplied cat model");let i=n.geometry.attributes.position,r=new Float32Array(i.count*3);for(let g=0;g<i.count;g++){let m=i.getX(g),p=i.getY(g),b=i.getZ(g),S=t.sides[m<0?0:1];r[g*3]=(b-t.z-t.slope*(p-t.y))/t.radiusZ,r[g*3+1]=(p-t.y)/t.radiusY,r[g*3+2]=1-Xl.smoothstep(Math.abs(m-S.x),.014,.029)}n.geometry.setAttribute("catEye",new Vt(r,3));let o={uCatGaze:{value:new it},uCatAttention:{value:0}};n.material.onBeforeCompile=g=>{Object.assign(g.uniforms,o),g.vertexShader=`attribute vec3 catEye;
varying vec3 vCatEye;
`+g.vertexShader,g.vertexShader=g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vCatEye = catEye;`),g.fragmentShader=gE+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
`+_E)},n.material.customProgramCacheKey=()=>"profile-pupil-follow-v1",n.material.needsUpdate=!0;let a=new B,l=new B,c=new B,u=new B,h=new B,f=t.sides.map(g=>(a.fromBufferAttribute(i,g.face[0]),l.fromBufferAttribute(i,g.face[1]),c.fromBufferAttribute(i,g.face[2]),Qi.getBarycoord(new B(g.x,t.y,t.z),a,l,c,new B))),d={x:0,y:0,weight:0,settled:!0},_={x:0,y:0};return{update({pointer:g,camera:m,rect:p,viewport:b,facing:S,elapsed:x}){let E=S>0?0:1,A=t.sides[E].face,w=f[E];n.getVertexPosition(A[0],a),n.getVertexPosition(A[1],l),n.getVertexPosition(A[2],c),u.set(0,0,0).addScaledVector(a,w.x).addScaledVector(l,w.y).addScaledVector(c,w.z).applyMatrix4(n.matrixWorld),h.copy(u).project(m),_={x:p.left+(h.x+1)*p.width/2,y:p.top+(1-h.y)*p.height/2};let I=pE(g,_,b,S);return d=mE(d,I,x),o.uCatGaze.value.set(d.x,d.y),o.uCatAttention.value=d.weight,!d.settled},inspect(){return{kind:e,...d,screen:_,vertexCount:i.count,headRotationApplied:!1}},setForStudy(g,m,p=1){o.uCatGaze.value.set(g,m),o.uCatAttention.value=p}}}function dx(s,e){let t=getComputedStyle(s),n=document.createElement("canvas").getContext("2d"),i=s.textContent.trim(),r=l=>(n.font=`${t.fontWeight} ${l}px ${t.fontFamily}`,n.fontKerning=t.fontKerning,n.measureText(i)),o=100,a=r(o);for(let l=0;l<3;l++)o*=e/(a.actualBoundingBoxLeft+a.actualBoundingBoxRight),a=r(o);s.style.fontSize=`${o}px`,s.style.left=`${a.actualBoundingBoxLeft}px`}function px({artwork:s,baseline:e,ascent:t,descent:n,catWidth:i,viewWidth:r}){let o=s.closest(".hero__stage");if(!o)return;let a=o.querySelector(".hero__header"),l=s.parentElement,c=o.getBoundingClientRect().top,u=a.getBoundingClientRect().bottom-c,h=parseFloat(getComputedStyle(l).paddingTop),f=parseFloat(getComputedStyle(o).minHeight),d=e.getBoundingClientRect().top-t-s.getBoundingClientRect().top,_=.74*i/r,g=Math.max(f*.64,u+h+_),m=g-d;o.style.setProperty("--wordmark-top",`${m}px`);let p=parseFloat(getComputedStyle(a).paddingTop);o.style.setProperty("--hero-composition-height",`${Math.ceil(g+t+n+p)}px`)}var Tn=s=>document.querySelector(s),mx=Tn("#cat-canvas"),xa=Tn("#cat-stage"),ma=Tn("#artwork"),Ei=Tn(".wordmark"),oo=document.body,Nh=Tn("#motion-status"),vx=Tn("#load-status"),ls=matchMedia("(prefers-reduced-motion: reduce)"),tm=matchMedia("(pointer: coarse)"),Kt=new Ih(window.scrollY),gx="assets/cat-3d-preview/",nm=.9,ro=1.38,Uh=.04,Ai,Ri,os,Vn,ln,_a,ga,Lh,Zl=0,Dh=0,ya=!1,va=!1,cs={width:0,height:0,minX:0,maxX:0,range:1,top:0,secondsPerPixel:.005},Mx=0,Sx,as={x:0,time:0},_x=0,Oh=!1,bx=!1,im,rm,so={x:0,y:0,active:!1};function Tx(s){va=!0,clearTimeout(Zl),Kt.stop(),oo.dataset.ready="false",oo.dataset.motion="error",Nh&&(Nh.textContent="\u9884\u89C8\u672A\u80FD\u52A0\u8F7D"),Tn("#loading-message").hidden=!1,vx.textContent="\u6A21\u578B\u6216 WebGL \u52A0\u8F7D\u5931\u8D25\u3002\u8BF7\u91CD\u65B0\u52A0\u8F7D\uFF0C\u6216\u6362\u7528\u652F\u6301 WebGL 2 \u7684\u6D4F\u89C8\u5668\u3002",Tn("#retry").hidden=!1,console.error("Cat preview:",s)}function Or(){!ya||va||Oh||Dh||document.hidden||(Dh=requestAnimationFrame(s=>{Dh=0;let e=Kt.moving&&!ls.matches;Vn.visible=!e,ln.visible=e;let t=Kt.facing*Math.PI/2;Vn.rotation.y=t,ln.rotation.y=t;let n={x:jp(ls.matches?0:Kt.scrollY,cs.range,cs.minX,cs.maxX),time:Kt.walkTime},i=Math.min(.05,(s-_x)/1e3);if(as=fx(as,n,i,e),_x=s,e){let u=as.time%ga.duration;_a.setTime(u),ln.position.y=-Qp(u,Lh)}xa.style.transform=`translate3d(${as.x}px,0,0)`,Ri.updateMatrixWorld(!0);let r=xa.getBoundingClientRect(),o=r.bottom>0&&r.top<innerHeight,a={pointer:{...so,active:so.active&&o&&!ls.matches},camera:os,rect:r,viewport:{width:innerWidth,height:innerHeight},facing:Kt.facing,elapsed:i},l=(e?rm:im).update(a);Ai.render(Ri,os),Mx++,oo.dataset.motion=e?"walking":"sitting",oo.dataset.facing=Kt.facing===1?"right":"left";let c=`${e?"\u884C\u8D70":"\u5750\u59FF"} / ${Kt.facing===1?"\u671D\u53F3 \u2192":"\u2190 \u671D\u5DE6"}`;Nh&&(Nh.textContent=ls.matches?"\u5750\u59FF / \u5DF2\u542F\u7528\u51CF\u5C11\u52A8\u6001\u6548\u679C":c),(e&&!as.settled||l)&&Or()}))}function Fh(){clearTimeout(Zl),Kt.moving&&(Kt.stop(),Or())}function xE(){if(!ya||va)return;let s=Math.min(Math.max(0,window.scrollY),Math.max(0,document.documentElement.scrollHeight-window.innerHeight));Kt.scrollTo(s,cs.secondsPerPixel)&&(clearTimeout(Zl),ls.matches?Kt.stop():Zl=setTimeout(Fh,140),Or())}function Kl(){if(!bx||Oh)return;Ei.id==="hero-title"?dx(Ei,ma.clientWidth):(Ei.style.fontSize=`${ma.clientWidth*.36}px`,Ei.style.fontSize=`${parseFloat(getComputedStyle(Ei).fontSize)*ma.clientWidth/Ei.getBoundingClientRect().width}px`);let s=getComputedStyle(Ei),e=document.createElement("canvas").getContext("2d");e.font=`${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;let t=Ei.textContent===Ei.textContent.toLowerCase()?"lui":"LUI",n=e.measureText(t).actualBoundingBoxAscent,i=xa.offsetWidth;if(px({artwork:ma,baseline:Tn("#font-baseline"),ascent:n,descent:e.measureText(Ei.textContent.trim()).actualBoundingBoxDescent,catWidth:i,viewWidth:ro}),Ei.dataset.layoutReady="true",!ya||va)return;Kt.rebase(window.scrollY);let o=Tn("#font-baseline").getBoundingClientRect().top-n-ma.getBoundingClientRect().top,a=i*nm/ro,l=i/ro,c=o-a+Uh*l;xa.style.top=`${c}px`,Tn("#ground-guide")&&(Tn("#ground-guide").style.top=`${o}px`),Ai.setPixelRatio(Math.min(devicePixelRatio||1,tm.matches?1.5:2)),Ai.setSize(i,a,!1);let u=.56*l,h=u-i/2,f=ma.clientWidth-u-i/2,d=Math.max(220,window.innerHeight*.57),_=Math.max(1,f-h);cs={width:i,height:a,minX:h,maxX:f,range:d,top:c,secondsPerPixel:_/d/l*(ga.duration/.98)},as={x:jp(Kt.scrollY,d,h,f),time:Kt.walkTime},Or()}async function xx(s){let e=new Set;if(s.traverse(t=>{if(!t.isMesh)return;t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!1;let n=Array.isArray(t.material)?t.material:[t.material];for(let i of n)i.map&&e.add(i.map)}),!!tm.matches)for(let t of e){let n=t.image,i=Math.max(n.width,n.height);if(i<=2048||!window.createImageBitmap)continue;let r=2048/i;t.image=await createImageBitmap(n,{resizeWidth:Math.round(n.width*r),resizeHeight:Math.round(n.height*r),resizeQuality:"high",imageOrientation:"none",premultiplyAlpha:"none",colorSpaceConversion:"none"}),t.needsUpdate=!0,n.close?.()}}function yE(){if(!ya)return{ready:!1,failed:va};Ri.updateMatrixWorld(!0);let s=ln.visible?ln:Vn,e=1/0,t=-1/0,n=1/0,i=0,r=new B;return s.traverse(o=>{if(o.isBone)for(let a of o.scale.toArray())n=Math.min(n,a),i=Math.max(i,a);if(o.isMesh)for(let a=0;a<o.geometry.attributes.position.count;a++)o.getVertexPosition(a,r).applyMatrix4(o.matrixWorld),e=Math.min(e,r.y),t=Math.max(t,r.y)}),{ready:ya,failed:va,moving:Kt.moving,facing:Kt.facing,walkTime:Kt.walkTime,clipTime:_a.time,drawCount:Mx,scrollY:Kt.scrollY,renderedX:as.x,renderedWalkTime:as.time,eyes:(ln.visible?rm:im).inspect(),headQuaternion:ln.getObjectByName("DEF_head")?.quaternion.toArray(),pointerActive:so.active,visibleModels:Number(Vn.visible)+Number(ln.visible),sittingVisible:Vn.visible,walkingVisible:ln.visible,sittingScale:Vn.scale.toArray(),walkingScale:ln.scale.toArray(),floorGapPx:e*cs.width/ro,headDocumentTop:xa.getBoundingClientRect().top+window.scrollY+(nm-Uh-t)*cs.width/ro,minBoneScale:Number.isFinite(n)?n:null,maxBoneScale:i||null,layout:cs,stageDocumentTop:xa.getBoundingClientRect().top+window.scrollY,textureSizes:[...new Set([...Vn.children,...ln.children].flatMap(o=>{let a=[];return o.traverse(l=>{l.isMesh&&l.material.map&&a.push(`${l.material.map.image.width}x${l.material.map.image.height}`)}),a}))]}}async function vE(){Ai=new Ah({canvas:mx,alpha:!0,antialias:!0,powerPreference:"high-performance"}),Ai.setClearColor(0,0),Ai.outputColorSpace=Xt,Ai.toneMapping=Ou,Ai.toneMappingExposure=1.03,Ri=new yl,os=new Ir(-ro/2,ro/2,nm-Uh,-Uh,.1,10),os.position.set(0,0,3),os.lookAt(0,0,0),Ri.add(new Dl(16250095,9868173,2));for(let c of[-2,2]){let u=new is(16775925,1.55);u.position.set(c,2.5,3),Ri.add(u)}let s=new is(16777215,.65);s.position.set(0,.7,4),Ri.add(s);let e=new Ch,t=0,n=c=>e.loadAsync(gx+c).then(u=>(t++,vx.textContent=`\u6A21\u578B ${t}/2 \u5DF2\u52A0\u8F7D\uFF0C\u6B63\u5728\u51C6\u5907\u7EB9\u7406\u2026`,u)),[i,r,o]=await Promise.all([n("sitting-v1.glb"),n("walk-normal-v7.glb"),fetch(gx+"walk-calibration.json").then(c=>{if(!c.ok)throw Error("Ground calibration missing");return c.json()}),SE]);Lh=o,await Promise.all([xx(i.scene),xx(r.scene)]),Vn=new Zn,ln=new Zn,Vn.name="Seated supplied GLB",ln.name="Normal-stride v7, unmodified",Vn.add(i.scene),ln.add(r.scene);let a=new kn().setFromObject(i.scene,!0),l=.68017578125/(a.max.y-a.min.y);if(Vn.scale.setScalar(l),Vn.position.y=-a.min.y*l,i.scene.traverse(c=>{c.isMesh&&(c.material=c.material.clone(),c.material.color.set(16777215),c.material.roughness=.9)}),im=em(i.scene,"sitting"),rm=em(r.scene,"walking"),Ri.add(Vn,ln),ga=r.animations.find(c=>c.name==="Walk"),!ga||Math.abs(ga.duration-Lh.duration)>.001)throw Error("Expected original 2-second Walk clip");_a=new Bl(r.scene),_a.clipAction(ga).setLoop(Mh,1/0).play(),_a.setTime(0),ln.position.y=-Qp(0,Lh),await Ai.compileAsync(Ri,os),Vn.visible=!1,ln.visible=!0,Ai.render(Ri,os),Vn.visible=!0,ln.visible=!1,Ai.render(Ri,os),ya=!0,Kt.rebase(window.scrollY),Kl(),Ki.registerPlugin(Ke),Ke.config({ignoreMobileResize:!0}),Sx=Ke.create({id:"cat-dual-model-preview",start:0,end:"max",onUpdate:xE}),Ke.addEventListener("refreshInit",wx),window.addEventListener("pointermove",Ex,{passive:!0}),document.documentElement.addEventListener("pointerleave",Ma),window.addEventListener("blur",Ma),ls.addEventListener("change",Ax),document.addEventListener("visibilitychange",Rx),mx.addEventListener("webglcontextlost",c=>{c.preventDefault(),Tx(Error("WebGL context lost"))}),Tn("#loading-message").hidden=!0,oo.dataset.ready="true",Ke.refresh(),Or()}function wx(){Fh(),Kl()}function Ex(s){s.pointerType==="touch"||tm.matches||ls.matches||(so.x=s.clientX,so.y=s.clientY,so.active=!0,Or())}function Ma(){so.active=!1,Or()}function Ax(){Ma(),Fh(),Or()}function Rx(){document.hidden?(Ma(),Fh()):Or()}function ME(){if(Oh)return;Oh=!0,clearTimeout(Zl),cancelAnimationFrame(Dh),Sx?.kill(),Ke.removeEventListener("refreshInit",wx),window.removeEventListener("resize",Kl),window.removeEventListener("pointermove",Ex),document.documentElement.removeEventListener("pointerleave",Ma),window.removeEventListener("blur",Ma),ls.removeEventListener("change",Ax),document.removeEventListener("visibilitychange",Rx),_a?.stopAllAction();let s=new Set,e=new Set,t=new Set;Ri?.traverse(n=>{if(n.isMesh){t.add(n.geometry),n.skeleton?.dispose();for(let i of Array.isArray(n.material)?n.material:[n.material]){e.add(i);for(let r of Object.values(i))r?.isTexture&&s.add(r)}}});for(let n of s)n.dispose(),n.image?.close?.();for(let n of e)n.dispose();for(let n of t)n.dispose();Ai?.dispose()}window.addEventListener("pagehide",s=>{s.persisted||ME()});Tn("#retry").addEventListener("click",()=>location.reload());Tn("#show-ground")?.addEventListener("change",s=>{oo.dataset.guide=String(s.target.checked)});Tn("#back-top")?.addEventListener("click",s=>{s.preventDefault(),window.scrollTo({top:0,behavior:"auto"})});window.__catPreview={inspect:yE,version:"profile-eye-follow-v3",stopDelayMs:140};var SE=Promise.all([document.fonts.load(`400 100px ${getComputedStyle(Ei).fontFamily}`),document.fonts.load(`400 16px ${getComputedStyle(oo).fontFamily}`)]).then(()=>{bx=!0,Kl()});window.addEventListener("resize",Kl,{passive:!0});vE().catch(Tx);function Cx(s=0){let t=Number.isFinite(s)?Math.max(0,s):0,n=0,i=0;return{rebase(r){Number.isFinite(r)&&(t=Math.max(0,r))},update(r){if(!Number.isFinite(r))return!1;let o=Math.max(0,r),a=o-t;if(t=o,!a)return!1;n=Math.sign(a);let l=i;return i=Math.max(0,Math.min(260,i+a)),i!==l},inspect(){return{y:t,direction:n,playhead:i,range:260,phase:i*.018,strength:i/260}}}}var bE=s=>Math.max(0,Math.min(1,s)),ao=s=>{let e=bE(s);return e*e*(3-2*e)};function Px({title:s,baseline:e,container:t,ScrollTrigger:n}){if(!s||!e||!t)return()=>{};let i=document.createElement("canvas");i.className="louis-dissolve",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{position:"absolute",left:"0",pointerEvents:"none",zIndex:"2"}),t.append(i);let r=i.getContext("2d"),o=document.createElement("canvas"),a=o.getContext("2d",{willReadFrequently:!0}),l=document.createElement("canvas"),c=l.getContext("2d",{willReadFrequently:!0}),u=document.createElement("canvas"),h=u.getContext("2d",{willReadFrequently:!0}),f="filter"in h,d=Cx(window.scrollY),_=matchMedia("(prefers-reduced-motion: reduce)"),g,m=!1,p=0,b=0,S=!1,x=0,E=0,A=0,w={direction:0,maxOffset:0,activeStart:0},I=new Uint8Array(256*3);for(let P=0;P<256;P++){let ie=P/255,Te=ie<.3?ao(ie/.3):ie<.6?1-ao((ie-.3)/.3):ao((ie-.6)/.4);[177,170,163].forEach((qe,Pe)=>{I[P*3+Pe]=13+(qe-13)*Te})}function y(){if(b=0,m||!S)return;let P=getComputedStyle(s);a.font=`${P.fontWeight} ${P.fontSize} ${P.fontFamily}`;let ie=s.textContent.trim(),Te=a.measureText(ie),qe=t.getBoundingClientRect(),Pe=Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent,Ne=e.getBoundingClientRect().top-qe.top-Te.actualBoundingBoxAscent,K=Pe*.42,J=t.clientWidth,le=Math.min(1,640/J),_e=Math.ceil(J*le),ye=parseFloat(P.fontSize)*(35*23.2/341),Ie=Pe+ye*1.08+Pe*.15,ft=Math.ceil(Ie*le);g={top:Ne,cap:Pe,guard:K,scale:le,width:_e,height:ft,cssWidth:J,maxTrail:ye,extent:Ie,fontSize:P.fontSize},o.width=_e,o.height=Math.ceil(Pe*le)+2;for(let ke of[l,u])ke.width=_e,ke.height=ft;i.width=_e,i.height=Math.ceil((Ie-K)*le),Object.assign(i.style,{top:`${Ne+K}px`,width:`${J}px`,height:`${i.height/le}px`}),a.setTransform(le,0,0,le,0,0),a.font=`${P.fontWeight} ${P.fontSize} ${P.fontFamily}`,a.fillStyle="#fff",a.fillText(ie,s.getBoundingClientRect().left-qe.left,Te.actualBoundingBoxAscent);let C=t.closest(".hero");if(C){let Se=`${Math.ceil(qe.top-C.getBoundingClientRect().top+Ne+Ie+Pe*.12)}px`;C.style.getPropertyValue("--dissolve-min-height")!==Se&&(C.style.setProperty("--dissolve-min-height",Se),n.refresh())}d.rebase(window.scrollY),v()}function v(){if(p=0,m||!g)return;let P=performance.now();r.clearRect(0,0,i.width,i.height);let ie=d.inspect();if(_.matches||!ie.strength){w={direction:ie.direction,maxOffset:0,activeStart:g.guard},!_.matches&&ie.direction&&x++;return}let{width:Te,height:qe,scale:Pe,cap:Ne,guard:K,maxTrail:J}=g,le=ie.strength,_e=J*le,ye=35;c.clearRect(0,0,Te,qe);for(let He=ye;He>=0;He--){let he=He/ye,ze=he*(1+.045*Math.sin(ie.phase+he*9));c.globalAlpha=Math.pow(1-he,1.5),c.drawImage(o,0,_e*ze*Pe)}c.globalAlpha=1,h.clearRect(0,0,Te,qe);let Ie=Math.max(.5,Ne*.018*Pe);if(f)h.filter=`blur(${Ie}px)`,h.drawImage(l,0,0),h.filter="none";else{h.globalCompositeOperation="lighter",h.globalAlpha=1/25;for(let He=-2;He<=2;He++)for(let he=-2;he<=2;he++)h.drawImage(l,he*Ie,He*Ie);h.globalAlpha=1,h.globalCompositeOperation="source-over"}let ft=Math.round(K*Pe),C=i.height,ke=h.getImageData(0,ft,Te,C),Se=ke.data,Ae=K,O=Math.floor(ie.phase*997);for(let He=0;He<C;He++){let he=He/Pe+K,ze=1-ao((he-Ne-_e*.7)/Math.max(Ne*.08,_e*.28)),$e=ao((he-Ae)/(Ne*.32))*ze,dt=1-.62*ao((he-Ne)/Math.max(1,_e*.85));for(let R=0;R<Te;R++){let M=(He*Te+R)*4,k=Se[M+3];if(k<2||$e===0){Se[M+3]=0;continue}let j=((Math.imul(R+He*4099^O,1597334677)>>>0>>>24)/255-.5)*30,q=Math.max(0,Math.min(255,Math.round(k*dt+j)));Se[M]=I[q*3],Se[M+1]=I[q*3+1],Se[M+2]=I[q*3+2],Se[M+3]=Math.min(255,k*2.5)*$e*ao(le*3)}}r.putImageData(ke,0,0),w={direction:ie.direction,maxOffset:_e,activeStart:Ae},x++,E=performance.now()-P,A=Math.max(A,E)}function L(){if(m||!g||_.matches){d.rebase(window.scrollY);return}let P=i.getBoundingClientRect();if(P.bottom<0||P.top>innerHeight){d.rebase(window.scrollY);return}d.update(window.scrollY)&&!p&&(p=requestAnimationFrame(v))}function N(){!b&&!m&&(b=requestAnimationFrame(y))}function V(){d.rebase(window.scrollY),v()}let G=n.create({start:0,end:"max",onUpdate:L}),X=new ResizeObserver(N);X.observe(s),X.observe(t);let H=new MutationObserver(N);H.observe(s,{childList:!0,characterData:!0,subtree:!0}),window.addEventListener("resize",N,{passive:!0}),_.addEventListener("change",V),document.fonts.ready.then(()=>{S=!0,N()});let Z={inspect:()=>({ready:!!g&&!b&&!!s.style.fontSize&&g.fontSize===getComputedStyle(s).fontSize,...d.inspect(),geometry:g,effect:w,draws:x,lastRenderMs:E,maxRenderMs:A,reducedMotion:_.matches})};window.__louisDissolve=Z;function z(){m=!0,cancelAnimationFrame(p),cancelAnimationFrame(b),G.kill(),X.disconnect(),H.disconnect(),_.removeEventListener("change",V),window.removeEventListener("resize",N),window.removeEventListener("pagehide",te),i.remove(),window.__louisDissolve===Z&&delete window.__louisDissolve}function te(P){P.persisted||z()}return window.addEventListener("pagehide",te),z}(()=>{"use strict";let s=document.querySelectorAll(".hero__identity, .hero__discipline"),e=document.querySelector(".overview");Ki.registerPlugin(Ke),Ki.defaults({ease:"none"}),Px({title:document.querySelector("#hero-title"),baseline:document.querySelector("#font-baseline"),container:document.querySelector("#artwork"),ScrollTrigger:Ke}),Ki.matchMedia().add({desktop:"(min-width: 901px)",compact:"(max-width: 900px)",reduceMotion:"(prefers-reduced-motion: reduce)"},n=>{let{desktop:i,reduceMotion:r}=n.conditions;if(r){Ki.set(s,{clearProps:"all"});return}Ki.fromTo(s,{autoAlpha:0,y:-9},{autoAlpha:1,y:0,duration:1.05,stagger:.12,ease:"power2.out"}),Ki.timeline({scrollTrigger:{trigger:e,start:"top 96%",end:"top 22%",scrub:!0,invalidateOnRefresh:!0}}).fromTo(".overview__divider",i?{scaleY:0}:{scaleX:0},i?{scaleY:1,duration:.62}:{scaleX:1,duration:.62},0).fromTo(".overview__name, .project-nav",{autoAlpha:0,y:30},{autoAlpha:1,y:0,stagger:.08,duration:.42},.09).fromTo(".profile, .project__number, .project__heading, .project__summary",{autoAlpha:0,y:38},{autoAlpha:1,y:0,stagger:.055,duration:.46},.16).fromTo(".market-plate",{autoAlpha:0,y:46,clipPath:"inset(0 0 100% 0)"},{autoAlpha:1,y:0,clipPath:"inset(0 0 0% 0)",duration:.46},.36).fromTo(".project__link",{autoAlpha:0,x:-18},{autoAlpha:1,x:0,duration:.26},.66)}),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",i=>{let r=document.querySelector(n.getAttribute("href"));r&&(i.preventDefault(),r.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}))})}),window.addEventListener("load",()=>Ke.refresh(),{once:!0})})();
/*! For license information please see home.bundle.js.LEGAL.txt */
