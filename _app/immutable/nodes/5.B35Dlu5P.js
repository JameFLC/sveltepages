var Xe=Object.defineProperty;var He=(n,e,t)=>e in n?Xe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var be=(n,e,t)=>He(n,typeof e!="symbol"?e+"":e,t);import{s as Z,c as Le,u as Ye,g as Oe,a as Ue,x as Ee,i as Se,n as j,r as ce,o as Fe,e as We,y as Ge}from"../chunks/scheduler.DdkJUDWp.js";import{S as ee,i as te,e as x,a as E,o as A,k as g,f as z,h as D,t as O,j as U,x as B,q as C,r as F,s as $,b as V,A as Re,B as Ke,C as Je,c as G,n as Be,d as K,p as Ne,g as Qe,m as J,u as Ze,l as Q}from"../chunks/index.BNXqwp--.js";import{C as et}from"../chunks/counter.9enF2eNO.js";function tt(n){let e,t;const i=n[1].default,r=Le(i,n,n[0],null);return{c(){e=x("div"),r&&r.c(),this.h()},l(s){e=E(s,"DIV",{class:!0});var o=A(e);r&&r.l(o),o.forEach(g),this.h()},h(){z(e,"class","centerer svelte-14eozoa")},m(s,o){D(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&Ye(r,i,s,s[0],t?Ue(i,s[0],o,null):Oe(s[0]),null)},i(s){t||(O(r,s),t=!0)},o(s){U(r,s),t=!1},d(s){s&&g(e),r&&r.d(s)}}}function nt(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class st extends ee{constructor(e){super(),te(this,e,nt,tt,Z,{})}}class W{constructor(e=0,t=0){be(this,"x",0);be(this,"y",0);this.x=e,this.y=t}add(e){return new W(this.x+e.x,this.y+e.y)}sub(e){return new W(this.x-e.x,this.y-e.y)}}var ye={dragStart:!0},Me=(n,e,t)=>Math.min(Math.max(n,e),t),we=n=>typeof n=="string",rt=([n,e],t,i)=>{const r=(s,o)=>o===0?0:Math.ceil(s/o)*o;return[r(t,n),r(i,e)]},Pe=(n,e)=>n.some(t=>e.some(i=>t.contains(i)));function De(n,e){if(n===void 0)return;if(xe(n))return n.getBoundingClientRect();if(typeof n=="object"){const{top:i=0,left:r=0,right:s=0,bottom:o=0}=n;return{top:i,right:window.innerWidth-s,bottom:window.innerHeight-o,left:r}}if(n==="parent")return e.parentNode.getBoundingClientRect();const t=document.querySelector(n);if(t===null)throw new Error("The selector provided for bound doesn't exists in the document.");return t.getBoundingClientRect()}var fe=(n,e,t)=>n.style.setProperty(e,t),xe=n=>n instanceof HTMLElement,ze=(n,e={})=>{let t,i,{bounds:r,axis:s="both",gpuAcceleration:o=!0,legacyTranslate:f=!0,transform:u,applyUserSelectHack:p=!0,disabled:m=!1,ignoreMultitouch:h=!1,recomputeBounds:y=ye,grid:v,position:_,cancel:l,handle:w,defaultClass:d="neodrag",defaultClassDragging:a="neodrag-dragging",defaultClassDragged:b="neodrag-dragged",defaultPosition:X={x:0,y:0},onDragStart:ie,onDrag:qe,onDragEnd:je}=e,oe=!1,H=0,L=0,ne=0,se=0,de=0,ge=0,{x:ae,y:le}=_?{x:(_==null?void 0:_.x)??0,y:(_==null?void 0:_.y)??0}:X;he(ae,le);let P,Y,re,me,ke,Ce="",Te=!!_;y={...ye,...y};let ue=new Set;const pe=document.body.style,T=n.classList;function he(c=H,k=L){if(!u){if(f){let R=`${+c}px, ${+k}px`;return fe(n,"transform",o?`translate3d(${R}, 0)`:`translate(${R})`)}return fe(n,"translate",`${+c}px ${+k}px ${o?"1px":""}`)}const I=u({offsetX:c,offsetY:k,rootNode:n});we(I)&&fe(n,"transform",I)}const ve=(c,k)=>{const I={offsetX:H,offsetY:L,rootNode:n,currentNode:ke};n.dispatchEvent(new CustomEvent(c,{detail:I})),k==null||k(I)},_e=addEventListener;_e("pointerdown",Ae,!1),_e("pointerup",$e,!1),_e("pointermove",Ve,!1),fe(n,"touch-action","none");const Ie=()=>{let c=n.offsetWidth/Y.width;return isNaN(c)&&(c=1),c};function Ae(c){if(m||c.button===2)return;if(ue.add(c.pointerId),h&&ue.size>1)return c.preventDefault();if(y.dragStart&&(P=De(r,n)),we(w)&&we(l)&&w===l)throw new Error("`handle` selector can't be same as `cancel` selector");if(T.add(d),re=function(S,M){if(!S)return[M];if(xe(S))return[S];if(Array.isArray(S))return S;const q=M.querySelectorAll(S);if(q===null)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(q.values())}(w,n),me=function(S,M){if(!S)return[];if(xe(S))return[S];if(Array.isArray(S))return S;const q=M.querySelectorAll(S);if(q===null)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(q.values())}(l,n),t=/(both|x)/.test(s),i=/(both|y)/.test(s),Pe(me,re))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const k=c.composedPath()[0];if(!re.some(S=>{var M;return S.contains(k)||((M=S.shadowRoot)==null?void 0:M.contains(k))})||Pe(me,[k]))return;ke=re.length===1?n:re.find(S=>S.contains(k)),oe=!0,Y=n.getBoundingClientRect(),p&&(Ce=pe.userSelect,pe.userSelect="none"),ve("neodrag:start",ie);const{clientX:I,clientY:R}=c,N=Ie();t&&(ne=I-ae/N),i&&(se=R-le/N),P&&(de=I-Y.left,ge=R-Y.top)}function $e(c){ue.delete(c.pointerId),oe&&(y.dragEnd&&(P=De(r,n)),T.remove(a),T.add(b),p&&(pe.userSelect=Ce),ve("neodrag:end",je),t&&(ne=H),i&&(se=L),oe=!1)}function Ve(c){if(!oe||h&&ue.size>1)return;y.drag&&(P=De(r,n)),T.add(a),c.preventDefault(),Y=n.getBoundingClientRect();let k=c.clientX,I=c.clientY;const R=Ie();if(P){const N={left:P.left+de,top:P.top+ge,right:P.right+de-Y.width,bottom:P.bottom+ge-Y.height};k=Me(k,N.left,N.right),I=Me(I,N.top,N.bottom)}if(Array.isArray(v)){let[N,S]=v;if(isNaN(+N)||N<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+S)||S<0)throw new Error("2nd argument of `grid` must be a valid positive number");let M=k-ne,q=I-se;[M,q]=rt([N/R,S/R],M,q),k=ne+M,I=se+q}t&&(H=Math.round((k-ne)*R)),i&&(L=Math.round((I-se)*R)),ae=H,le=L,ve("neodrag",qe),he()}return{destroy:()=>{const c=removeEventListener;c("pointerdown",Ae,!1),c("pointerup",$e,!1),c("pointermove",Ve,!1)},update:c=>{var I,R;s=c.axis||"both",m=c.disabled??!1,h=c.ignoreMultitouch??!1,w=c.handle,r=c.bounds,y=c.recomputeBounds??ye,l=c.cancel,p=c.applyUserSelectHack??!0,v=c.grid,o=c.gpuAcceleration??!0,f=c.legacyTranslate??!0,u=c.transform;const k=T.contains(b);T.remove(d,b),d=c.defaultClass??"neodrag",a=c.defaultClassDragging??"neodrag-dragging",b=c.defaultClassDragged??"neodrag-dragged",T.add(d),k&&T.add(b),Te&&(ae=H=((I=c.position)==null?void 0:I.x)??H,le=L=((R=c.position)==null?void 0:R.y)??L,he())}}};function it(n){let e,t,i,r,s;return{c(){e=x("div"),t=x("div"),this.h()},l(o){e=E(o,"DIV",{class:!0,style:!0});var f=A(e);t=E(f,"DIV",{class:!0,style:!0}),A(t).forEach(g),f.forEach(g),this.h()},h(){z(t,"class","joystick svelte-1x303ur"),B(t,"--size-x",n[2].x+"px"),B(t,"--size-y",n[2].y+"px"),z(e,"class","dragzone svelte-1x303ur"),B(e,"--size-x",n[1].x+"px"),B(e,"--size-y",n[1].y+"px")},m(o,f){D(o,e,f),C(e,t),r||(s=[Ee(i=ze.call(null,t,{position:n[0],bounds:"parent",onDrag:n[3]})),F(t,"neodrag:end",n[4])],r=!0)},p(o,[f]){f&4&&B(t,"--size-x",o[2].x+"px"),f&4&&B(t,"--size-y",o[2].y+"px"),i&&Se(i.update)&&f&1&&i.update.call(null,{position:o[0],bounds:"parent",onDrag:o[3]}),f&2&&B(e,"--size-x",o[1].x+"px"),f&2&&B(e,"--size-y",o[1].y+"px")},i:j,o:j,d(o){o&&g(e),r=!1,ce(s)}}}function ot(n,e,t){let{containerSize:i=new W(128,128)}=e,{joystickSize:r=new W(64,64)}=e,{position:s={x:0,y:0}}=e;const o=({offsetX:u,offsetY:p})=>{t(0,s={x:u,y:p})},f=u=>t(0,s={x:0,y:0});return n.$$set=u=>{"containerSize"in u&&t(1,i=u.containerSize),"joystickSize"in u&&t(2,r=u.joystickSize),"position"in u&&t(0,s=u.position)},[s,i,r,o,f]}class at extends ee{constructor(e){super(),te(this,e,ot,it,Z,{containerSize:1,joystickSize:2,position:0})}}function lt(n){let e,t,i,r,s,o,f,u;return{c(){e=x("div"),t=x("div"),i=x("div"),r=$(),s=x("div"),this.h()},l(p){e=E(p,"DIV",{class:!0});var m=A(e);t=E(m,"DIV",{class:!0,style:!0});var h=A(t);i=E(h,"DIV",{class:!0}),A(i).forEach(g),h.forEach(g),r=V(m),s=E(m,"DIV",{class:!0}),A(s).forEach(g),m.forEach(g),this.h()},h(){z(i,"class","tick svelte-tq6oae"),z(t,"class","knob svelte-tq6oae"),B(t,"--angle",n[1]+"deg"),z(s,"class","drag-zone svelte-tq6oae"),z(e,"class","knob-container svelte-tq6oae")},m(p,m){D(p,e,m),C(e,t),C(t,i),C(e,r),C(e,s),f||(u=[Ee(o=ze.call(null,s,{position:n[0],onDrag:n[3]})),F(s,"neodrag:end",n[4])],f=!0)},p(p,[m]){m&2&&B(t,"--angle",p[1]+"deg"),o&&Se(o.update)&&m&1&&o.update.call(null,{position:p[0],onDrag:p[3]})},i:j,o:j,d(p){p&&g(e),f=!1,ce(u)}}}function ut(n,e){let t=e-n;return t=t%360,t>180&&(t-=360),t<-180&&(t+=360),t}function ft(n,e,t){let i={x:0,y:0},r=0,s=0,o=0;function f(){let h=Math.atan2(i.y,i.x)*(180/Math.PI)+90;o=ut(s,h),t(1,r+=o),s=h}return[i,r,f,({offsetX:m,offsetY:h})=>{t(0,i={x:m,y:h}),f()},m=>t(0,i={x:0,y:0})]}class ct extends ee{constructor(e){super(),te(this,e,ft,lt,Z,{})}}function dt(n){let e,t,i,r,s,o,f,u,p,m,h,y,v,_,l,w;return{c(){e=x("div"),t=x("div"),i=$(),r=x("div"),s=$(),o=x("div"),f=$(),u=x("div"),p=$(),m=x("br"),h=$(),y=x("div"),v=x("div"),this.h()},l(d){e=E(d,"DIV",{class:!0,style:!0});var a=A(e);t=E(a,"DIV",{class:!0}),A(t).forEach(g),i=V(a),r=E(a,"DIV",{class:!0}),A(r).forEach(g),s=V(a),o=E(a,"DIV",{class:!0}),A(o).forEach(g),f=V(a),u=E(a,"DIV",{class:!0}),A(u).forEach(g),a.forEach(g),p=V(d),m=E(d,"BR",{}),h=V(d),y=E(d,"DIV",{class:!0});var b=A(y);v=E(b,"DIV",{class:!0}),A(v).forEach(g),b.forEach(g),this.h()},h(){z(t,"class","topleft svelte-16r83yb"),z(r,"class","topright svelte-16r83yb"),z(o,"class","bottomleft svelte-16r83yb"),z(u,"class","bottomright svelte-16r83yb"),z(e,"class","wheel svelte-16r83yb"),B(e,"--angle",n[2]*n[0]*n[4]/10+"deg"),z(v,"class","grabbable svelte-16r83yb"),z(y,"class","grab-zone svelte-16r83yb")},m(d,a){D(d,e,a),C(e,t),C(e,i),C(e,r),C(e,s),C(e,o),C(e,f),C(e,u),D(d,p,a),D(d,m,a),D(d,h,a),D(d,y,a),C(y,v),l||(w=[Ee(_=ze.call(null,v,{position:n[1],axis:"x",grid:[10,10]})),F(v,"neodrag:start",n[8]),F(v,"neodrag",n[9]),F(v,"neodrag:end",n[10])],l=!0)},p(d,[a]){a&21&&B(e,"--angle",d[2]*d[0]*d[4]/10+"deg"),_&&Se(_.update)&&a&2&&_.update.call(null,{position:d[1],axis:"x",grid:[10,10]})},i:j,o:j,d(d){d&&(g(e),g(p),g(m),g(h),g(y)),l=!1,ce(w)}}}let gt=!1;function mt(n,e,t){let{damping:i=1}=e,{speed:r=1}=e,s={x:0,y:0},o=0,f=0,u=performance.now(),p=0,m=0,h=1;Fe(()=>t(4,h=window?window.devicePixelRatio:1));function y(d){t(1,s={x:d,y:0}),t(2,o=d+p);const a=performance.now(),b=(a-u)/1e3;m=(o-f)/b,f=o,u=a}function v(){const d=performance.now(),a=(d-u)/1e3;t(2,o=f+m*a),m=m*(1-i*a),u=d,!(Math.abs(m)<1||gt)&&(f=o,requestAnimationFrame(v))}const _=d=>{t(3,p=o)},l=d=>{console.log(d),y(d.detail.offsetX)},w=d=>{t(1,s={x:0,y:0}),requestAnimationFrame(v)};return n.$$set=d=>{"damping"in d&&t(7,i=d.damping),"speed"in d&&t(0,r=d.speed)},[r,s,o,p,h,y,v,i,_,l,w]}class pt extends ee{constructor(e){super(),te(this,e,mt,dt,Z,{damping:7,speed:0})}}function ht(n){let e,t,i;return{c(){e=x("input"),this.h()},l(r){e=E(r,"INPUT",{type:!0,min:!0,max:!0,step:!0}),this.h()},h(){z(e,"type","range"),z(e,"min",n[1]),z(e,"max",n[2]),z(e,"step",n[3])},m(r,s){D(r,e,s),Re(e,n[0]),t||(i=[F(e,"change",n[4]),F(e,"input",n[4])],t=!0)},p(r,[s]){s&2&&z(e,"min",r[1]),s&4&&z(e,"max",r[2]),s&8&&z(e,"step",r[3]),s&1&&Re(e,r[0])},i:j,o:j,d(r){r&&g(e),t=!1,ce(i)}}}function vt(n,e,t){let{min:i=0}=e,{max:r=100}=e,{step:s=1}=e,{value:o=0}=e;function f(){o=Ke(this.value),t(0,o)}return n.$$set=u=>{"min"in u&&t(1,i=u.min),"max"in u&&t(2,r=u.max),"step"in u&&t(3,s=u.step),"value"in u&&t(0,o=u.value)},[o,i,r,s,f]}class _t extends ee{constructor(e){super(),te(this,e,vt,ht,Z,{min:1,max:2,step:3,value:0})}}function bt(n){let e,t,i,r,s,o,f,u,p,m,h,y,v,_;return e=new ct({}),f=new at({props:{containerSize:new W(512,512),joystickSize:new W(96,96)}}),v=new pt({props:{damping:3,speed:-1.5}}),{c(){G(e.$$.fragment),t=$(),i=x("br"),r=$(),s=x("br"),o=$(),G(f.$$.fragment),u=$(),p=x("br"),m=$(),h=x("br"),y=$(),G(v.$$.fragment)},l(l){K(e.$$.fragment,l),t=V(l),i=E(l,"BR",{}),r=V(l),s=E(l,"BR",{}),o=V(l),K(f.$$.fragment,l),u=V(l),p=E(l,"BR",{}),m=V(l),h=E(l,"BR",{}),y=V(l),K(v.$$.fragment,l)},m(l,w){J(e,l,w),D(l,t,w),D(l,i,w),D(l,r,w),D(l,s,w),D(l,o,w),J(f,l,w),D(l,u,w),D(l,p,w),D(l,m,w),D(l,h,w),D(l,y,w),J(v,l,w),_=!0},p:j,i(l){_||(O(e.$$.fragment,l),O(f.$$.fragment,l),O(v.$$.fragment,l),_=!0)},o(l){U(e.$$.fragment,l),U(f.$$.fragment,l),U(v.$$.fragment,l),_=!1},d(l){l&&(g(t),g(i),g(r),g(s),g(o),g(u),g(p),g(m),g(h),g(y)),Q(e,l),Q(f,l),Q(v,l)}}}function yt(n){let e,t,i,r,s,o="baba",f,u,p,m,h,y,v,_,l;e=new et({});function w(a){n[1](a)}let d={step:1};return n[0]!==void 0&&(d.value=n[0]),h=new _t({props:d}),We.push(()=>Je(h,"value",w)),_=new st({props:{$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){G(e.$$.fragment),t=$(),i=x("p"),r=Be("Value of the slider is "),s=x("kbd"),s.textContent=o,f=$(),u=x("code"),p=Be(n[0]),m=$(),G(h.$$.fragment),v=$(),G(_.$$.fragment)},l(a){K(e.$$.fragment,a),t=V(a),i=E(a,"P",{});var b=A(i);r=Ne(b,"Value of the slider is "),s=E(b,"KBD",{"data-svelte-h":!0}),Qe(s)!=="svelte-15gsgs4"&&(s.textContent=o),f=V(b),u=E(b,"CODE",{});var X=A(u);p=Ne(X,n[0]),X.forEach(g),b.forEach(g),m=V(a),K(h.$$.fragment,a),v=V(a),K(_.$$.fragment,a)},m(a,b){J(e,a,b),D(a,t,b),D(a,i,b),C(i,r),C(i,s),C(i,f),C(i,u),C(u,p),D(a,m,b),J(h,a,b),D(a,v,b),J(_,a,b),l=!0},p(a,[b]){(!l||b&1)&&Ze(p,a[0]);const X={};!y&&b&1&&(y=!0,X.value=a[0],Ge(()=>y=!1)),h.$set(X);const ie={};b&16&&(ie.$$scope={dirty:b,ctx:a}),_.$set(ie)},i(a){l||(O(e.$$.fragment,a),O(h.$$.fragment,a),O(_.$$.fragment,a),l=!0)},o(a){U(e.$$.fragment,a),U(h.$$.fragment,a),U(_.$$.fragment,a),l=!1},d(a){a&&(g(t),g(i),g(m),g(v)),Q(e,a),Q(h,a),Q(_,a)}}}function wt(n,e,t){let i;function r(s){i=s,t(0,i)}return[i,r]}class zt extends ee{constructor(e){super(),te(this,e,wt,yt,Z,{})}}export{zt as component};
