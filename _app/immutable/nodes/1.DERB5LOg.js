import{s as S,n as _,b as q}from"../chunks/scheduler.DdkJUDWp.js";import{S as x,i as k,e as f,n as d,s as y,a as g,o as h,p as v,k as u,b as C,h as m,q as $,u as E}from"../chunks/index.BNXqwp--.js";import{s as H}from"../chunks/entry.fEEfCZ4p.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=d(r),n=y(),i=f("p"),l=d(p)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=C(e),i=g(e,"P",{});var c=h(i);l=v(c,p),c.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&E(l,p)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return q(s,j,n=>r(0,o=n)),[o]}let F=class extends x{constructor(t){super(),k(this,t,z,w,S,{})}};export{F as component};
