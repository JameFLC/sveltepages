function S(){}function C(n,t){for(const e in t)n[e]=t[e];return n}function P(n){return n()}function Q(){return Object.create(null)}function B(n){n.forEach(P)}function R(n){return typeof n=="function"}function U(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function W(n){return Object.keys(n).length===0}function M(n,...t){if(n==null){for(const i of t)i(void 0);return S}const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function V(n,t,e){n.$$.on_destroy.push(M(t,e))}function X(n,t,e,i){if(n){const r=w(n,t,e,i);return n[0](r)}}function w(n,t,e,i){return n[1]&&i?C(e.ctx.slice(),n[1](i(t))):e.ctx}function Y(n,t,e,i){if(n[2]&&i){const r=n[2](i(e));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(t.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=t.dirty[u]|r[u];return s}return t.dirty|r}return t.dirty}function Z(n,t,e,i,r,s){if(r){const c=w(t,e,i,s);n.p(c,r)}}function $(n){if(n.ctx.length>32){const t=[],e=n.ctx.length/32;for(let i=0;i<e;i++)t[i]=-1;return t}return-1}let m=!1;function nn(){m=!0}function tn(){m=!1}function O(n,t,e,i){for(;n<t;){const r=n+(t-n>>1);e(r)<=i?n=r+1:t=r}return n}function T(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const l=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&l.push(o)}t=l}const e=new Int32Array(t.length+1),i=new Int32Array(t.length);e[0]=-1;let r=0;for(let l=0;l<t.length;l++){const a=t[l].claim_order,o=(r>0&&t[e[r]].claim_order<=a?r+1:O(1,r,j=>t[e[j]].claim_order,a))-1;i[l]=e[o]+1;const k=o+1;e[k]=l,r=Math.max(k,r)}const s=[],c=[];let u=t.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(t[l-1]);u>=l;u--)c.push(t[u]);u--}for(;u>=0;u--)c.push(t[u]);s.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<s.length&&c[l].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;n.insertBefore(c[l],o)}}function q(n,t){if(m){for(T(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentNode!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function en(n,t,e){m&&!e?q(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function rn(n){n.parentNode&&n.parentNode.removeChild(n)}function D(n){return document.createElement(n)}function g(n){return document.createTextNode(n)}function cn(){return g(" ")}function ln(){return g("")}function un(n,t,e,i){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e,i)}function sn(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function an(n){return n.dataset.svelteH}function on(n){return n===""?null:+n}function fn(n){return Array.from(n.childNodes)}function H(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function N(n,t,e,i,r=!1){H(n);const s=(()=>{for(let c=n.claim_info.last_index;c<n.length;c++){const u=n[c];if(t(u)){const l=e(u);return l===void 0?n.splice(c,1):n[c]=l,r||(n.claim_info.last_index=c),u}}for(let c=n.claim_info.last_index-1;c>=0;c--){const u=n[c];if(t(u)){const l=e(u);return l===void 0?n.splice(c,1):n[c]=l,r?l===void 0&&n.claim_info.last_index--:n.claim_info.last_index=c,u}}return i()})();return s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,s}function I(n,t,e,i){return N(n,r=>r.nodeName===t,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(t))}function _n(n,t,e){return I(n,t,e,D)}function L(n,t){return N(n,e=>e.nodeType===3,e=>{const i=""+t;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>g(t),!0)}function dn(n){return L(n," ")}function hn(n,t){t=""+t,n.data!==t&&(n.data=t)}function mn(n,t){n.value=t??""}function pn(n,t,e,i){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,"")}function z(n,t,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:i})}function bn(n,t){return new n(t)}let h;function p(n){h=n}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function yn(n){v().$$.on_mount.push(n)}function xn(n){v().$$.after_update.push(n)}function gn(){const n=v();return(t,e,{cancelable:i=!1}={})=>{const r=n.$$.callbacks[t];if(r){const s=z(t,e,{cancelable:i});return r.slice().forEach(c=>{c.call(n,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const y=[],A=Promise.resolve();let x=!1;function F(){x||(x=!0,A.then(J))}function vn(){return F(),A}function G(n){_.push(n)}function kn(n){y.push(n)}const b=new Set;let f=0;function J(){if(f!==0)return;const n=h;do{try{for(;f<d.length;){const t=d[f];f++,p(t),K(t.$$)}}catch(t){throw d.length=0,f=0,t}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;y.length;)y.pop()();x=!1,b.clear(),p(n)}function K(n){if(n.fragment!==null){n.update(),B(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(G)}}function En(n){const t=[],e=[];_.forEach(i=>n.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),_=t}export{bn as A,vn as B,B as C,Q as D,J as E,R as F,W as G,G as H,En as I,h as J,p as K,P as L,d as M,F as N,nn as O,tn as P,gn as Q,mn as R,on as S,kn as T,cn as a,dn as b,_n as c,sn as d,D as e,rn as f,an as g,fn as h,en as i,L as j,q as k,un as l,hn as m,S as n,X as o,$ as p,Y as q,V as r,U as s,g as t,Z as u,ln as v,xn as w,yn as x,pn as y,E as z};
