(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function cl(s,t){const n=Object.create(null),o=s.split(",");for(let l=0;l<o.length;l++)n[o[l]]=!0;return t?l=>!!n[l.toLowerCase()]:l=>!!n[l]}function Ke(s){if(le(s)){const t={};for(let n=0;n<s.length;n++){const o=s[n],l=Ne(o)?nd(o):Ke(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(Ne(s))return s;if(Fe(s))return s}}const ed=/;(?![^(]*\))/g,sd=/:([^]+)/,td=/\/\*.*?\*\//gs;function nd(s){const t={};return s.replace(td,"").split(ed).forEach(n=>{if(n){const o=n.split(sd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Oe(s){let t="";if(Ne(s))t=s;else if(le(s))for(let n=0;n<s.length;n++){const o=Oe(s[n]);o&&(t+=o+" ")}else if(Fe(s))for(const n in s)s[n]&&(t+=n+" ");return t.trim()}function ee(s){if(!s)return null;let{class:t,style:n}=s;return t&&!Ne(t)&&(s.class=Oe(t)),n&&(s.style=Ke(n)),s}const od="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",ld=cl(od),rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=cl(rd);function np(s){return!!s||s===""}const ot=s=>Ne(s)?s:s==null?"":le(s)||Fe(s)&&(s.toString===ap||!ce(s.toString))?JSON.stringify(s,op,2):String(s),op=(s,t)=>t&&t.__v_isRef?op(s,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,l])=>(n[`${o} =>`]=l,n),{})}:lp(t)?{[`Set(${t.size})`]:[...t.values()]}:Fe(t)&&!le(t)&&!ip(t)?String(t):t,xe={},cn=[],Os=()=>{},id=()=>!1,cd=/^on[^a-z]/,pl=s=>cd.test(s),Hr=s=>s.startsWith("onUpdate:"),ps=Object.assign,Qr=(s,t)=>{const n=s.indexOf(t);n>-1&&s.splice(n,1)},pd=Object.prototype.hasOwnProperty,Ae=(s,t)=>pd.call(s,t),le=Array.isArray,pn=s=>ul(s)==="[object Map]",lp=s=>ul(s)==="[object Set]",ce=s=>typeof s=="function",Ne=s=>typeof s=="string",Vr=s=>typeof s=="symbol",Fe=s=>s!==null&&typeof s=="object",rp=s=>Fe(s)&&ce(s.then)&&ce(s.catch),ap=Object.prototype.toString,ul=s=>ap.call(s),ud=s=>ul(s).slice(8,-1),ip=s=>ul(s)==="[object Object]",Jr=s=>Ne(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,No=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=s=>{const t=Object.create(null);return n=>t[n]||(t[n]=s(n))},yd=/-(\w)/g,Gs=yl(s=>s.replace(yd,(t,n)=>n?n.toUpperCase():"")),dd=/\B([A-Z])/g,Wt=yl(s=>s.replace(dd,"-$1").toLowerCase()),dl=yl(s=>s.charAt(0).toUpperCase()+s.slice(1)),Tl=yl(s=>s?`on${dl(s)}`:""),so=(s,t)=>!Object.is(s,t),un=(s,t)=>{for(let n=0;n<s.length;n++)s[n](t)},Vo=(s,t,n)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,value:n})},Jo=s=>{const t=parseFloat(s);return isNaN(t)?s:t};let Wa;const fd=()=>Wa||(Wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ms;class cp{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ms,!t&&ms&&(this.index=(ms.scopes||(ms.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ms;try{return ms=this,t()}finally{ms=n}}}on(){ms=this}off(){ms=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}}}function hd(s){return new cp(s)}function md(s,t=ms){t&&t.active&&t.effects.push(s)}function pp(){return ms}function up(s){ms&&ms.cleanups.push(s)}const Wr=s=>{const t=new Set(s);return t.w=0,t.n=0,t},yp=s=>(s.w&Bt)>0,dp=s=>(s.n&Bt)>0,gd=({deps:s})=>{if(s.length)for(let t=0;t<s.length;t++)s[t].w|=Bt},_d=s=>{const{deps:t}=s;if(t.length){let n=0;for(let o=0;o<t.length;o++){const l=t[o];yp(l)&&!dp(l)?l.delete(s):t[n++]=l,l.w&=~Bt,l.n&=~Bt}t.length=n}},tr=new WeakMap;let In=0,Bt=1;const nr=30;let Ts;const jt=Symbol(""),or=Symbol("");class Gr{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,md(this,o)}run(){if(!this.active)return this.fn();let t=Ts,n=_t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ts,Ts=this,_t=!0,Bt=1<<++In,In<=nr?gd(this):Ga(this),this.fn()}finally{In<=nr&&_d(this),Bt=1<<--In,Ts=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ts===this?this.deferStop=!0:this.active&&(Ga(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(s){const{deps:t}=s;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(s);t.length=0}}let _t=!0;const fp=[];function Gt(){fp.push(_t),_t=!1}function Yt(){const s=fp.pop();_t=s===void 0?!0:s}function bs(s,t,n){if(_t&&Ts){let o=tr.get(s);o||tr.set(s,o=new Map);let l=o.get(n);l||o.set(n,l=Wr()),hp(l)}}function hp(s,t){let n=!1;In<=nr?dp(s)||(s.n|=Bt,n=!yp(s)):n=!s.has(Ts),n&&(s.add(Ts),Ts.deps.push(s))}function lt(s,t,n,o,l,r){const a=tr.get(s);if(!a)return;let c=[];if(t==="clear")c=[...a.values()];else if(n==="length"&&le(s)){const p=Jo(o);a.forEach((u,y)=>{(y==="length"||y>=p)&&c.push(u)})}else switch(n!==void 0&&c.push(a.get(n)),t){case"add":le(s)?Jr(n)&&c.push(a.get("length")):(c.push(a.get(jt)),pn(s)&&c.push(a.get(or)));break;case"delete":le(s)||(c.push(a.get(jt)),pn(s)&&c.push(a.get(or)));break;case"set":pn(s)&&c.push(a.get(jt));break}if(c.length===1)c[0]&&lr(c[0]);else{const p=[];for(const u of c)u&&p.push(...u);lr(Wr(p))}}function lr(s,t){const n=le(s)?s:[...s];for(const o of n)o.computed&&Ya(o);for(const o of n)o.computed||Ya(o)}function Ya(s,t){(s!==Ts||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const Ad=cl("__proto__,__v_isRef,__isVue"),mp=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Vr)),vd=Yr(),bd=Yr(!1,!0),Dd=Yr(!0),Ka=Bd();function Bd(){const s={};return["includes","indexOf","lastIndexOf"].forEach(t=>{s[t]=function(...n){const o=be(this);for(let r=0,a=this.length;r<a;r++)bs(o,"get",r+"");const l=o[t](...n);return l===-1||l===!1?o[t](...n.map(be)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{s[t]=function(...n){Gt();const o=be(this)[t].apply(this,n);return Yt(),o}}),s}function Yr(s=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!s;if(l==="__v_isReadonly")return s;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(s?t?Md:bp:t?vp:Ap).get(o))return o;const a=le(o);if(!s&&a&&Ae(Ka,l))return Reflect.get(Ka,l,r);const c=Reflect.get(o,l,r);return(Vr(l)?mp.has(l):Ad(l))||(s||bs(o,"get",l),t)?c:Ce(c)?a&&Jr(l)?c:c.value:Fe(c)?s?Mt(c):$e(c):c}}const Cd=gp(),Ed=gp(!0);function gp(s=!1){return function(n,o,l,r){let a=n[o];if(_n(a)&&Ce(a)&&!Ce(l))return!1;if(!s&&(!Wo(l)&&!_n(l)&&(a=be(a),l=be(l)),!le(n)&&Ce(a)&&!Ce(l)))return a.value=l,!0;const c=le(n)&&Jr(o)?Number(o)<n.length:Ae(n,o),p=Reflect.set(n,o,l,r);return n===be(r)&&(c?so(l,a)&&lt(n,"set",o,l):lt(n,"add",o,l)),p}}function wd(s,t){const n=Ae(s,t);s[t];const o=Reflect.deleteProperty(s,t);return o&&n&&lt(s,"delete",t,void 0),o}function kd(s,t){const n=Reflect.has(s,t);return(!Vr(t)||!mp.has(t))&&bs(s,"has",t),n}function Sd(s){return bs(s,"iterate",le(s)?"length":jt),Reflect.ownKeys(s)}const _p={get:vd,set:Cd,deleteProperty:wd,has:kd,ownKeys:Sd},xd={get:Dd,set(s,t){return!0},deleteProperty(s,t){return!0}},Td=ps({},_p,{get:bd,set:Ed}),Kr=s=>s,fl=s=>Reflect.getPrototypeOf(s);function Eo(s,t,n=!1,o=!1){s=s.__v_raw;const l=be(s),r=be(t);n||(t!==r&&bs(l,"get",t),bs(l,"get",r));const{has:a}=fl(l),c=o?Kr:n?ea:to;if(a.call(l,t))return c(s.get(t));if(a.call(l,r))return c(s.get(r));s!==l&&s.get(t)}function wo(s,t=!1){const n=this.__v_raw,o=be(n),l=be(s);return t||(s!==l&&bs(o,"has",s),bs(o,"has",l)),s===l?n.has(s):n.has(s)||n.has(l)}function ko(s,t=!1){return s=s.__v_raw,!t&&bs(be(s),"iterate",jt),Reflect.get(s,"size",s)}function Za(s){s=be(s);const t=be(this);return fl(t).has.call(t,s)||(t.add(s),lt(t,"add",s,s)),this}function Xa(s,t){t=be(t);const n=be(this),{has:o,get:l}=fl(n);let r=o.call(n,s);r||(s=be(s),r=o.call(n,s));const a=l.call(n,s);return n.set(s,t),r?so(t,a)&&lt(n,"set",s,t):lt(n,"add",s,t),this}function ei(s){const t=be(this),{has:n,get:o}=fl(t);let l=n.call(t,s);l||(s=be(s),l=n.call(t,s)),o&&o.call(t,s);const r=t.delete(s);return l&&lt(t,"delete",s,void 0),r}function si(){const s=be(this),t=s.size!==0,n=s.clear();return t&&lt(s,"clear",void 0,void 0),n}function So(s,t){return function(o,l){const r=this,a=r.__v_raw,c=be(a),p=t?Kr:s?ea:to;return!s&&bs(c,"iterate",jt),a.forEach((u,y)=>o.call(l,p(u),p(y),r))}}function xo(s,t,n){return function(...o){const l=this.__v_raw,r=be(l),a=pn(r),c=s==="entries"||s===Symbol.iterator&&a,p=s==="keys"&&a,u=l[s](...o),y=n?Kr:t?ea:to;return!t&&bs(r,"iterate",p?or:jt),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:c?[y(d[0]),y(d[1])]:y(d),done:f}},[Symbol.iterator](){return this}}}}function yt(s){return function(...t){return s==="delete"?!1:this}}function Ld(){const s={get(r){return Eo(this,r)},get size(){return ko(this)},has:wo,add:Za,set:Xa,delete:ei,clear:si,forEach:So(!1,!1)},t={get(r){return Eo(this,r,!1,!0)},get size(){return ko(this)},has:wo,add:Za,set:Xa,delete:ei,clear:si,forEach:So(!1,!0)},n={get(r){return Eo(this,r,!0)},get size(){return ko(this,!0)},has(r){return wo.call(this,r,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:So(!0,!1)},o={get(r){return Eo(this,r,!0,!0)},get size(){return ko(this,!0)},has(r){return wo.call(this,r,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:So(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=xo(r,!1,!1),n[r]=xo(r,!0,!1),t[r]=xo(r,!1,!0),o[r]=xo(r,!0,!0)}),[s,n,t,o]}const[Rd,Pd,Od,$d]=Ld();function Zr(s,t){const n=t?s?$d:Od:s?Pd:Rd;return(o,l,r)=>l==="__v_isReactive"?!s:l==="__v_isReadonly"?s:l==="__v_raw"?o:Reflect.get(Ae(n,l)&&l in o?n:o,l,r)}const Fd={get:Zr(!1,!1)},Nd={get:Zr(!1,!0)},Id={get:Zr(!0,!1)},Ap=new WeakMap,vp=new WeakMap,bp=new WeakMap,Md=new WeakMap;function Ud(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(s){return s.__v_skip||!Object.isExtensible(s)?0:Ud(ud(s))}function $e(s){return _n(s)?s:Xr(s,!1,_p,Fd,Ap)}function zd(s){return Xr(s,!1,Td,Nd,vp)}function Mt(s){return Xr(s,!0,xd,Id,bp)}function Xr(s,t,n,o,l){if(!Fe(s)||s.__v_raw&&!(t&&s.__v_isReactive))return s;const r=l.get(s);if(r)return r;const a=qd(s);if(a===0)return s;const c=new Proxy(s,a===2?o:n);return l.set(s,c),c}function yn(s){return _n(s)?yn(s.__v_raw):!!(s&&s.__v_isReactive)}function _n(s){return!!(s&&s.__v_isReadonly)}function Wo(s){return!!(s&&s.__v_isShallow)}function Dp(s){return yn(s)||_n(s)}function be(s){const t=s&&s.__v_raw;return t?be(t):s}function hl(s){return Vo(s,"__v_skip",!0),s}const to=s=>Fe(s)?$e(s):s,ea=s=>Fe(s)?Mt(s):s;function sa(s){_t&&Ts&&(s=be(s),hp(s.dep||(s.dep=Wr())))}function ta(s,t){s=be(s),s.dep&&lr(s.dep)}function Ce(s){return!!(s&&s.__v_isRef===!0)}function H(s){return Bp(s,!1)}function Ys(s){return Bp(s,!0)}function Bp(s,t){return Ce(s)?s:new jd(s,t)}class jd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:to(t)}get value(){return sa(this),this._value}set value(t){const n=this.__v_isShallow||Wo(t)||_n(t);t=n?t:be(t),so(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:to(t),ta(this))}}function E(s){return Ce(s)?s.value:s}const Hd={get:(s,t,n)=>E(Reflect.get(s,t,n)),set:(s,t,n,o)=>{const l=s[t];return Ce(l)&&!Ce(n)?(l.value=n,!0):Reflect.set(s,t,n,o)}};function Cp(s){return yn(s)?s:new Proxy(s,Hd)}class Qd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>sa(this),()=>ta(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function Ep(s){return new Qd(s)}function Vd(s){const t=le(s)?new Array(s.length):{};for(const n in s)t[n]=Wd(s,n);return t}class Jd{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Wd(s,t,n){const o=s[t];return Ce(o)?o:new Jd(s,t,n)}var wp;class Gd{constructor(t,n,o,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[wp]=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,ta(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=be(this);return sa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}wp="__v_isReadonly";function Yd(s,t,n=!1){let o,l;const r=ce(s);return r?(o=s,l=Os):(o=s.get,l=s.set),new Gd(o,l,r||!l,n)}const qn=[];function Kd(s,...t){Gt();const n=qn.length?qn[qn.length-1].component:null,o=n&&n.appContext.config.warnHandler,l=Zd();if(o)nt(o,n,11,[s+t.join(""),n&&n.proxy,l.map(({vnode:r})=>`at <${Xp(n,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${s}`,...t];l.length&&r.push(`
`,...Xd(l)),console.warn(...r)}Yt()}function Zd(){let s=qn[qn.length-1];if(!s)return[];const t=[];for(;s;){const n=t[0];n&&n.vnode===s?n.recurseCount++:t.push({vnode:s,recurseCount:0});const o=s.component&&s.component.parent;s=o&&o.vnode}return t}function Xd(s){const t=[];return s.forEach((n,o)=>{t.push(...o===0?[]:[`
`],...ef(n))}),t}function ef({vnode:s,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=s.component?s.component.parent==null:!1,l=` at <${Xp(s.component,s.type,o)}`,r=">"+n;return s.props?[l,...sf(s.props),r]:[l+r]}function sf(s){const t=[],n=Object.keys(s);return n.slice(0,3).forEach(o=>{t.push(...kp(o,s[o]))}),n.length>3&&t.push(" ..."),t}function kp(s,t,n){return Ne(t)?(t=JSON.stringify(t),n?t:[`${s}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${s}=${t}`]:Ce(t)?(t=kp(s,be(t.value),!0),n?t:[`${s}=Ref<`,t,">"]):ce(t)?[`${s}=fn${t.name?`<${t.name}>`:""}`]:(t=be(t),n?t:[`${s}=`,t])}function nt(s,t,n,o){let l;try{l=o?s(...o):s()}catch(r){ml(r,t,n)}return l}function $s(s,t,n,o){if(ce(s)){const r=nt(s,t,n,o);return r&&rp(r)&&r.catch(a=>{ml(a,t,n)}),r}const l=[];for(let r=0;r<s.length;r++)l.push($s(s[r],t,n,o));return l}function ml(s,t,n,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,c=n;for(;r;){const u=r.ec;if(u){for(let y=0;y<u.length;y++)if(u[y](s,a,c)===!1)return}r=r.parent}const p=t.appContext.config.errorHandler;if(p){nt(p,null,10,[s,a,c]);return}}tf(s,n,l,o)}function tf(s,t,n,o=!0){console.error(s)}let no=!1,rr=!1;const ss=[];let js=0;const dn=[];let et=null,$t=0;const Sp=Promise.resolve();let na=null;function ts(s){const t=na||Sp;return s?t.then(this?s.bind(this):s):t}function nf(s){let t=js+1,n=ss.length;for(;t<n;){const o=t+n>>>1;oo(ss[o])<s?t=o+1:n=o}return t}function oa(s){(!ss.length||!ss.includes(s,no&&s.allowRecurse?js+1:js))&&(s.id==null?ss.push(s):ss.splice(nf(s.id),0,s),xp())}function xp(){!no&&!rr&&(rr=!0,na=Sp.then(Lp))}function of(s){const t=ss.indexOf(s);t>js&&ss.splice(t,1)}function lf(s){le(s)?dn.push(...s):(!et||!et.includes(s,s.allowRecurse?$t+1:$t))&&dn.push(s),xp()}function ti(s,t=no?js+1:0){for(;t<ss.length;t++){const n=ss[t];n&&n.pre&&(ss.splice(t,1),t--,n())}}function Tp(s){if(dn.length){const t=[...new Set(dn)];if(dn.length=0,et){et.push(...t);return}for(et=t,et.sort((n,o)=>oo(n)-oo(o)),$t=0;$t<et.length;$t++)et[$t]();et=null,$t=0}}const oo=s=>s.id==null?1/0:s.id,rf=(s,t)=>{const n=oo(s)-oo(t);if(n===0){if(s.pre&&!t.pre)return-1;if(t.pre&&!s.pre)return 1}return n};function Lp(s){rr=!1,no=!0,ss.sort(rf);const t=Os;try{for(js=0;js<ss.length;js++){const n=ss[js];n&&n.active!==!1&&nt(n,null,14)}}finally{js=0,ss.length=0,Tp(),no=!1,na=null,(ss.length||dn.length)&&Lp()}}function af(s,t,...n){if(s.isUnmounted)return;const o=s.vnode.props||xe;let l=n;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const y=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:f}=o[y]||xe;f&&(l=n.map(m=>Ne(m)?m.trim():m)),d&&(l=n.map(Jo))}let c,p=o[c=Tl(t)]||o[c=Tl(Gs(t))];!p&&r&&(p=o[c=Tl(Wt(t))]),p&&$s(p,s,6,l);const u=o[c+"Once"];if(u){if(!s.emitted)s.emitted={};else if(s.emitted[c])return;s.emitted[c]=!0,$s(u,s,6,l)}}function Rp(s,t,n=!1){const o=t.emitsCache,l=o.get(s);if(l!==void 0)return l;const r=s.emits;let a={},c=!1;if(!ce(s)){const p=u=>{const y=Rp(u,t,!0);y&&(c=!0,ps(a,y))};!n&&t.mixins.length&&t.mixins.forEach(p),s.extends&&p(s.extends),s.mixins&&s.mixins.forEach(p)}return!r&&!c?(Fe(s)&&o.set(s,null),null):(le(r)?r.forEach(p=>a[p]=null):ps(a,r),Fe(s)&&o.set(s,a),a)}function gl(s,t){return!s||!pl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ae(s,t[0].toLowerCase()+t.slice(1))||Ae(s,Wt(t))||Ae(s,t))}let ns=null,_l=null;function Go(s){const t=ns;return ns=s,_l=s&&s.type.__scopeId||null,t}function la(s){_l=s}function ra(){_l=null}function _(s,t=ns,n){if(!t||s._n)return s;const o=(...l)=>{o._d&&yi(-1);const r=Go(t);let a;try{a=s(...l)}finally{Go(r),o._d&&yi(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function Ll(s){const{type:t,vnode:n,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:c,attrs:p,emit:u,render:y,renderCache:d,data:f,setupState:m,ctx:h,inheritAttrs:A}=s;let b,B;const w=Go(s);try{if(n.shapeFlag&4){const x=l||o;b=zs(y.call(x,x,d,r,m,f,h)),B=p}else{const x=t;b=zs(x.length>1?x(r,{attrs:p,slots:c,emit:u}):x(r,null)),B=t.props?p:cf(p)}}catch(x){Hn.length=0,ml(x,s,1),b=S(Ct)}let C=b;if(B&&A!==!1){const x=Object.keys(B),{shapeFlag:N}=C;x.length&&N&7&&(a&&x.some(Hr)&&(B=pf(B,a)),C=Vt(C,B))}return n.dirs&&(C=Vt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),b=C,Go(w),b}const cf=s=>{let t;for(const n in s)(n==="class"||n==="style"||pl(n))&&((t||(t={}))[n]=s[n]);return t},pf=(s,t)=>{const n={};for(const o in s)(!Hr(o)||!(o.slice(9)in t))&&(n[o]=s[o]);return n};function uf(s,t,n){const{props:o,children:l,component:r}=s,{props:a,children:c,patchFlag:p}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&p>=0){if(p&1024)return!0;if(p&16)return o?ni(o,a,u):!!a;if(p&8){const y=t.dynamicProps;for(let d=0;d<y.length;d++){const f=y[d];if(a[f]!==o[f]&&!gl(u,f))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===a?!1:o?a?ni(o,a,u):!0:!!a;return!1}function ni(s,t,n){const o=Object.keys(t);if(o.length!==Object.keys(s).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==s[r]&&!gl(n,r))return!0}return!1}function yf({vnode:s,parent:t},n){for(;t&&t.subTree===s;)(s=t.vnode).el=n,t=t.parent}const Pp=s=>s.__isSuspense;function df(s,t){t&&t.pendingBranch?le(s)?t.effects.push(...s):t.effects.push(s):lf(s)}function _s(s,t){if(Ge){let n=Ge.provides;const o=Ge.parent&&Ge.parent.provides;o===n&&(n=Ge.provides=Object.create(o)),n[s]=t}}function O(s,t,n=!1){const o=Ge||ns;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&s in l)return l[s];if(arguments.length>1)return n&&ce(t)?t.call(o.proxy):t}}function En(s,t){return aa(s,null,t)}const To={};function he(s,t,n){return aa(s,t,n)}function aa(s,t,{immediate:n,deep:o,flush:l,onTrack:r,onTrigger:a}=xe){const c=Ge;let p,u=!1,y=!1;if(Ce(s)?(p=()=>s.value,u=Wo(s)):yn(s)?(p=()=>s,o=!0):le(s)?(y=!0,u=s.some(C=>yn(C)||Wo(C)),p=()=>s.map(C=>{if(Ce(C))return C.value;if(yn(C))return Ut(C);if(ce(C))return nt(C,c,2)})):ce(s)?t?p=()=>nt(s,c,2):p=()=>{if(!(c&&c.isUnmounted))return d&&d(),$s(s,c,3,[f])}:p=Os,t&&o){const C=p;p=()=>Ut(C())}let d,f=C=>{d=B.onStop=()=>{nt(C,c,4)}},m;if(ro)if(f=Os,t?n&&$s(t,c,3,[p(),y?[]:void 0,f]):p(),l==="sync"){const C=ih();m=C.__watcherHandles||(C.__watcherHandles=[])}else return Os;let h=y?new Array(s.length).fill(To):To;const A=()=>{if(!!B.active)if(t){const C=B.run();(o||u||(y?C.some((x,N)=>so(x,h[N])):so(C,h)))&&(d&&d(),$s(t,c,3,[C,h===To||y&&h[0]===To?void 0:h,f]),h=C)}else B.run()};A.allowRecurse=!!t;let b;l==="sync"?b=A:l==="post"?b=()=>Xe(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),b=()=>oa(A));const B=new Gr(p,b);t?n?A():h=B.run():l==="post"?Xe(B.run.bind(B),c&&c.suspense):B.run();const w=()=>{B.stop(),c&&c.scope&&Qr(c.scope.effects,B)};return m&&m.push(w),w}function ff(s,t,n){const o=this.proxy,l=Ne(s)?s.includes(".")?Op(o,s):()=>o[s]:s.bind(o,o);let r;ce(t)?r=t:(r=t.handler,n=t);const a=Ge;bn(this);const c=aa(l,r.bind(o),n);return a?bn(a):Ht(),c}function Op(s,t){const n=t.split(".");return()=>{let o=s;for(let l=0;l<n.length&&o;l++)o=o[n[l]];return o}}function Ut(s,t){if(!Fe(s)||s.__v_skip||(t=t||new Set,t.has(s)))return s;if(t.add(s),Ce(s))Ut(s.value,t);else if(le(s))for(let n=0;n<s.length;n++)Ut(s[n],t);else if(lp(s)||pn(s))s.forEach(n=>{Ut(n,t)});else if(ip(s))for(const n in s)Ut(s[n],t);return s}function $p(s,t){s.shapeFlag&6&&s.component?$p(s.component.subTree,t):s.shapeFlag&128?(s.ssContent.transition=t.clone(s.ssContent),s.ssFallback.transition=t.clone(s.ssFallback)):s.transition=t}function ye(s){return ce(s)?{setup:s,name:s.name}:s}const fn=s=>!!s.type.__asyncLoader,Fp=s=>s.type.__isKeepAlive,hf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:t}){const n=Et(),o=n.ctx;if(!o.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const l=new Map,r=new Set;let a=null;const c=n.suspense,{renderer:{p,m:u,um:y,o:{createElement:d}}}=o,f=d("div");o.activate=(w,C,x,N,M)=>{const P=w.component;u(w,C,x,0,c),p(P.vnode,w,C,x,P,c,N,w.slotScopeIds,M),Xe(()=>{P.isDeactivated=!1,P.a&&un(P.a);const G=w.props&&w.props.onVnodeMounted;G&&Cs(G,P.parent,w)},c)},o.deactivate=w=>{const C=w.component;u(w,f,null,1,c),Xe(()=>{C.da&&un(C.da);const x=w.props&&w.props.onVnodeUnmounted;x&&Cs(x,C.parent,w),C.isDeactivated=!0},c)};function m(w){Rl(w),y(w,n,c,!0)}function h(w){l.forEach((C,x)=>{const N=Ko(C.type);N&&(!w||!w(N))&&A(x)})}function A(w){const C=l.get(w);!a||C.type!==a.type?m(C):a&&Rl(a),l.delete(w),r.delete(w)}he(()=>[s.include,s.exclude],([w,C])=>{w&&h(x=>Mn(w,x)),C&&h(x=>!Mn(C,x))},{flush:"post",deep:!0});let b=null;const B=()=>{b!=null&&l.set(b,Pl(n.subTree))};return rt(B),mo(B),vl(()=>{l.forEach(w=>{const{subTree:C,suspense:x}=n,N=Pl(C);if(w.type===N.type){Rl(N);const M=N.component.da;M&&Xe(M,x);return}m(w)})}),()=>{if(b=null,!t.default)return null;const w=t.default(),C=w[0];if(w.length>1)return a=null,w;if(!vn(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return a=null,C;let x=Pl(C);const N=x.type,M=Ko(fn(x)?x.type.__asyncResolved||{}:N),{include:P,exclude:G,max:re}=s;if(P&&(!M||!Mn(P,M))||G&&M&&Mn(G,M))return a=x,C;const de=x.key==null?N:x.key,ve=l.get(de);return x.el&&(x=Vt(x),C.shapeFlag&128&&(C.ssContent=x)),b=de,ve?(x.el=ve.el,x.component=ve.component,x.transition&&$p(x,x.transition),x.shapeFlag|=512,r.delete(de),r.add(de)):(r.add(de),re&&r.size>parseInt(re,10)&&A(r.values().next().value)),x.shapeFlag|=256,a=x,Pp(C.type)?C:x}}},Np=hf;function Mn(s,t){return le(s)?s.some(n=>Mn(n,t)):Ne(s)?s.split(",").includes(t):s.test?s.test(t):!1}function mf(s,t){Ip(s,"a",t)}function gf(s,t){Ip(s,"da",t)}function Ip(s,t,n=Ge){const o=s.__wdc||(s.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return s()});if(Al(t,o,n),n){let l=n.parent;for(;l&&l.parent;)Fp(l.parent.vnode)&&_f(o,t,n,l),l=l.parent}}function _f(s,t,n,o){const l=Al(t,s,o,!0);bl(()=>{Qr(o[t],l)},n)}function Rl(s){let t=s.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),s.shapeFlag=t}function Pl(s){return s.shapeFlag&128?s.ssContent:s}function Al(s,t,n=Ge,o=!1){if(n){const l=n[s]||(n[s]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Gt(),bn(n);const c=$s(t,n,s,a);return Ht(),Yt(),c});return o?l.unshift(r):l.push(r),r}}const at=s=>(t,n=Ge)=>(!ro||s==="sp")&&Al(s,(...o)=>t(...o),n),Af=at("bm"),rt=at("m"),vf=at("bu"),mo=at("u"),vl=at("bum"),bl=at("um"),bf=at("sp"),Df=at("rtg"),Bf=at("rtc");function Cf(s,t=Ge){Al("ec",s,t)}function ia(s,t){const n=ns;if(n===null)return s;const o=Bl(n)||n.proxy,l=s.dirs||(s.dirs=[]);for(let r=0;r<t.length;r++){let[a,c,p,u=xe]=t[r];a&&(ce(a)&&(a={mounted:a,updated:a}),a.deep&&Ut(c),l.push({dir:a,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u}))}return s}function St(s,t,n,o){const l=s.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){const c=l[a];r&&(c.oldValue=r[a].value);let p=c.dir[o];p&&(Gt(),$s(p,n,8,[s.el,c,s,t]),Yt())}}const Mp="components";function An(s,t){return wf(Mp,s,!0,t)||s}const Ef=Symbol();function wf(s,t,n=!0,o=!1){const l=ns||Ge;if(l){const r=l.type;if(s===Mp){const c=Ko(r,!1);if(c&&(c===t||c===Gs(t)||c===dl(Gs(t))))return r}const a=oi(l[s]||r[s],t)||oi(l.appContext[s],t);return!a&&o?r:a}}function oi(s,t){return s&&(s[t]||s[Gs(t)]||s[dl(Gs(t))])}function go(s,t,n,o){let l;const r=n&&n[o];if(le(s)||Ne(s)){l=new Array(s.length);for(let a=0,c=s.length;a<c;a++)l[a]=t(s[a],a,void 0,r&&r[a])}else if(typeof s=="number"){l=new Array(s);for(let a=0;a<s;a++)l[a]=t(a+1,a,void 0,r&&r[a])}else if(Fe(s))if(s[Symbol.iterator])l=Array.from(s,(a,c)=>t(a,c,void 0,r&&r[c]));else{const a=Object.keys(s);l=new Array(a.length);for(let c=0,p=a.length;c<p;c++){const u=a[c];l[c]=t(s[u],u,c,r&&r[c])}}else l=[];return n&&(n[o]=l),l}function Me(s,t,n={},o,l){if(ns.isCE||ns.parent&&fn(ns.parent)&&ns.parent.isCE)return S("slot",t==="default"?null:{name:t},o&&o());let r=s[t];r&&r._c&&(r._d=!1),D();const a=r&&Up(r(n)),c=q(ke,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&s._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Up(s){return s.some(t=>vn(t)?!(t.type===Ct||t.type===ke&&!Up(t.children)):!0)?s:null}const ar=s=>s?Yp(s)?Bl(s)||s.proxy:ar(s.parent):null,zn=ps(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>ar(s.parent),$root:s=>ar(s.root),$emit:s=>s.emit,$options:s=>ca(s),$forceUpdate:s=>s.f||(s.f=()=>oa(s.update)),$nextTick:s=>s.n||(s.n=ts.bind(s.proxy)),$watch:s=>ff.bind(s)}),kf={get({_:s},t){const{ctx:n,setupState:o,data:l,props:r,accessCache:a,type:c,appContext:p}=s;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return l[t];case 4:return n[t];case 3:return r[t]}else{if(o!==xe&&Ae(o,t))return a[t]=1,o[t];if(l!==xe&&Ae(l,t))return a[t]=2,l[t];if((u=s.propsOptions[0])&&Ae(u,t))return a[t]=3,r[t];if(n!==xe&&Ae(n,t))return a[t]=4,n[t];ir&&(a[t]=0)}}const y=zn[t];let d,f;if(y)return t==="$attrs"&&bs(s,"get",t),y(s);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==xe&&Ae(n,t))return a[t]=4,n[t];if(f=p.config.globalProperties,Ae(f,t))return f[t]},set({_:s},t,n){const{data:o,setupState:l,ctx:r}=s;return l!==xe&&Ae(l,t)?(l[t]=n,!0):o!==xe&&Ae(o,t)?(o[t]=n,!0):Ae(s.props,t)||t[0]==="$"&&t.slice(1)in s?!1:(r[t]=n,!0)},has({_:{data:s,setupState:t,accessCache:n,ctx:o,appContext:l,propsOptions:r}},a){let c;return!!n[a]||s!==xe&&Ae(s,a)||t!==xe&&Ae(t,a)||(c=r[0])&&Ae(c,a)||Ae(o,a)||Ae(zn,a)||Ae(l.config.globalProperties,a)},defineProperty(s,t,n){return n.get!=null?s._.accessCache[t]=0:Ae(n,"value")&&this.set(s,t,n.value,null),Reflect.defineProperty(s,t,n)}};let ir=!0;function Sf(s){const t=ca(s),n=s.proxy,o=s.ctx;ir=!1,t.beforeCreate&&li(t.beforeCreate,s,"bc");const{data:l,computed:r,methods:a,watch:c,provide:p,inject:u,created:y,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:A,deactivated:b,beforeDestroy:B,beforeUnmount:w,destroyed:C,unmounted:x,render:N,renderTracked:M,renderTriggered:P,errorCaptured:G,serverPrefetch:re,expose:de,inheritAttrs:ve,components:We,directives:He,filters:Ie}=t;if(u&&xf(u,o,null,s.appContext.config.unwrapInjectedRef),a)for(const Y in a){const oe=a[Y];ce(oe)&&(o[Y]=oe.bind(n))}if(l){const Y=l.call(n,n);Fe(Y)&&(s.data=$e(Y))}if(ir=!0,r)for(const Y in r){const oe=r[Y],me=ce(oe)?oe.bind(n,n):ce(oe.get)?oe.get.bind(n,n):Os,Ee=!ce(oe)&&ce(oe.set)?oe.set.bind(n):Os,rs=T({get:me,set:Ee});Object.defineProperty(o,Y,{enumerable:!0,configurable:!0,get:()=>rs.value,set:qe=>rs.value=qe})}if(c)for(const Y in c)qp(c[Y],o,n,Y);if(p){const Y=ce(p)?p.call(n):p;Reflect.ownKeys(Y).forEach(oe=>{_s(oe,Y[oe])})}y&&li(y,s,"c");function Pe(Y,oe){le(oe)?oe.forEach(me=>Y(me.bind(n))):oe&&Y(oe.bind(n))}if(Pe(Af,d),Pe(rt,f),Pe(vf,m),Pe(mo,h),Pe(mf,A),Pe(gf,b),Pe(Cf,G),Pe(Bf,M),Pe(Df,P),Pe(vl,w),Pe(bl,x),Pe(bf,re),le(de))if(de.length){const Y=s.exposed||(s.exposed={});de.forEach(oe=>{Object.defineProperty(Y,oe,{get:()=>n[oe],set:me=>n[oe]=me})})}else s.exposed||(s.exposed={});N&&s.render===Os&&(s.render=N),ve!=null&&(s.inheritAttrs=ve),We&&(s.components=We),He&&(s.directives=He)}function xf(s,t,n=Os,o=!1){le(s)&&(s=cr(s));for(const l in s){const r=s[l];let a;Fe(r)?"default"in r?a=O(r.from||l,r.default,!0):a=O(r.from||l):a=O(r),Ce(a)&&o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:c=>a.value=c}):t[l]=a}}function li(s,t,n){$s(le(s)?s.map(o=>o.bind(t.proxy)):s.bind(t.proxy),t,n)}function qp(s,t,n,o){const l=o.includes(".")?Op(n,o):()=>n[o];if(Ne(s)){const r=t[s];ce(r)&&he(l,r)}else if(ce(s))he(l,s.bind(n));else if(Fe(s))if(le(s))s.forEach(r=>qp(r,t,n,o));else{const r=ce(s.handler)?s.handler.bind(n):t[s.handler];ce(r)&&he(l,r,s)}}function ca(s){const t=s.type,{mixins:n,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=s.appContext,c=r.get(t);let p;return c?p=c:!l.length&&!n&&!o?p=t:(p={},l.length&&l.forEach(u=>Yo(p,u,a,!0)),Yo(p,t,a)),Fe(t)&&r.set(t,p),p}function Yo(s,t,n,o=!1){const{mixins:l,extends:r}=t;r&&Yo(s,r,n,!0),l&&l.forEach(a=>Yo(s,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const c=Tf[a]||n&&n[a];s[a]=c?c(s[a],t[a]):t[a]}return s}const Tf={data:ri,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:as,created:as,beforeMount:as,mounted:as,beforeUpdate:as,updated:as,beforeDestroy:as,beforeUnmount:as,destroyed:as,unmounted:as,activated:as,deactivated:as,errorCaptured:as,serverPrefetch:as,components:Pt,directives:Pt,watch:Rf,provide:ri,inject:Lf};function ri(s,t){return t?s?function(){return ps(ce(s)?s.call(this,this):s,ce(t)?t.call(this,this):t)}:t:s}function Lf(s,t){return Pt(cr(s),cr(t))}function cr(s){if(le(s)){const t={};for(let n=0;n<s.length;n++)t[s[n]]=s[n];return t}return s}function as(s,t){return s?[...new Set([].concat(s,t))]:t}function Pt(s,t){return s?ps(ps(Object.create(null),s),t):t}function Rf(s,t){if(!s)return t;if(!t)return s;const n=ps(Object.create(null),s);for(const o in t)n[o]=as(s[o],t[o]);return n}function Pf(s,t,n,o=!1){const l={},r={};Vo(r,Dl,1),s.propsDefaults=Object.create(null),zp(s,t,l,r);for(const a in s.propsOptions[0])a in l||(l[a]=void 0);n?s.props=o?l:zd(l):s.type.props?s.props=l:s.props=r,s.attrs=r}function Of(s,t,n,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=s,c=be(l),[p]=s.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const y=s.vnode.dynamicProps;for(let d=0;d<y.length;d++){let f=y[d];if(gl(s.emitsOptions,f))continue;const m=t[f];if(p)if(Ae(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const h=Gs(f);l[h]=pr(p,c,h,m,s,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{zp(s,t,l,r)&&(u=!0);let y;for(const d in c)(!t||!Ae(t,d)&&((y=Wt(d))===d||!Ae(t,y)))&&(p?n&&(n[d]!==void 0||n[y]!==void 0)&&(l[d]=pr(p,c,d,void 0,s,!0)):delete l[d]);if(r!==c)for(const d in r)(!t||!Ae(t,d)&&!0)&&(delete r[d],u=!0)}u&&lt(s,"set","$attrs")}function zp(s,t,n,o){const[l,r]=s.propsOptions;let a=!1,c;if(t)for(let p in t){if(No(p))continue;const u=t[p];let y;l&&Ae(l,y=Gs(p))?!r||!r.includes(y)?n[y]=u:(c||(c={}))[y]=u:gl(s.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,a=!0)}if(r){const p=be(n),u=c||xe;for(let y=0;y<r.length;y++){const d=r[y];n[d]=pr(l,p,d,u[d],s,!Ae(u,d))}}return a}function pr(s,t,n,o,l,r){const a=s[n];if(a!=null){const c=Ae(a,"default");if(c&&o===void 0){const p=a.default;if(a.type!==Function&&ce(p)){const{propsDefaults:u}=l;n in u?o=u[n]:(bn(l),o=u[n]=p.call(null,t),Ht())}else o=p}a[0]&&(r&&!c?o=!1:a[1]&&(o===""||o===Wt(n))&&(o=!0))}return o}function jp(s,t,n=!1){const o=t.propsCache,l=o.get(s);if(l)return l;const r=s.props,a={},c=[];let p=!1;if(!ce(s)){const y=d=>{p=!0;const[f,m]=jp(d,t,!0);ps(a,f),m&&c.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(y),s.extends&&y(s.extends),s.mixins&&s.mixins.forEach(y)}if(!r&&!p)return Fe(s)&&o.set(s,cn),cn;if(le(r))for(let y=0;y<r.length;y++){const d=Gs(r[y]);ai(d)&&(a[d]=xe)}else if(r)for(const y in r){const d=Gs(y);if(ai(d)){const f=r[y],m=a[d]=le(f)||ce(f)?{type:f}:Object.assign({},f);if(m){const h=pi(Boolean,m.type),A=pi(String,m.type);m[0]=h>-1,m[1]=A<0||h<A,(h>-1||Ae(m,"default"))&&c.push(d)}}}const u=[a,c];return Fe(s)&&o.set(s,u),u}function ai(s){return s[0]!=="$"}function ii(s){const t=s&&s.toString().match(/^\s*function (\w+)/);return t?t[1]:s===null?"null":""}function ci(s,t){return ii(s)===ii(t)}function pi(s,t){return le(t)?t.findIndex(n=>ci(n,s)):ce(t)&&ci(t,s)?0:-1}const Hp=s=>s[0]==="_"||s==="$stable",pa=s=>le(s)?s.map(zs):[zs(s)],$f=(s,t,n)=>{if(t._n)return t;const o=_((...l)=>pa(t(...l)),n);return o._c=!1,o},Qp=(s,t,n)=>{const o=s._ctx;for(const l in s){if(Hp(l))continue;const r=s[l];if(ce(r))t[l]=$f(l,r,o);else if(r!=null){const a=pa(r);t[l]=()=>a}}},Vp=(s,t)=>{const n=pa(t);s.slots.default=()=>n},Ff=(s,t)=>{if(s.vnode.shapeFlag&32){const n=t._;n?(s.slots=be(t),Vo(t,"_",n)):Qp(t,s.slots={})}else s.slots={},t&&Vp(s,t);Vo(s.slots,Dl,1)},Nf=(s,t,n)=>{const{vnode:o,slots:l}=s;let r=!0,a=xe;if(o.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:(ps(l,t),!n&&c===1&&delete l._):(r=!t.$stable,Qp(t,l)),a=t}else t&&(Vp(s,t),a={default:1});if(r)for(const c in l)!Hp(c)&&!(c in a)&&delete l[c]};function Jp(){return{app:null,config:{isNativeTag:id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let If=0;function Mf(s,t){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!Fe(l)&&(l=null);const r=Jp(),a=new Set;let c=!1;const p=r.app={_uid:If++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:ch,get config(){return r.config},set config(u){},use(u,...y){return a.has(u)||(u&&ce(u.install)?(a.add(u),u.install(p,...y)):ce(u)&&(a.add(u),u(p,...y))),p},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),p},component(u,y){return y?(r.components[u]=y,p):r.components[u]},directive(u,y){return y?(r.directives[u]=y,p):r.directives[u]},mount(u,y,d){if(!c){const f=S(o,l);return f.appContext=r,y&&t?t(f,u):s(f,u,d),c=!0,p._container=u,u.__vue_app__=p,Bl(f.component)||f.component.proxy}},unmount(){c&&(s(null,p._container),delete p._container.__vue_app__)},provide(u,y){return r.provides[u]=y,p}};return p}}function ur(s,t,n,o,l=!1){if(le(s)){s.forEach((f,m)=>ur(f,t&&(le(t)?t[m]:t),n,o,l));return}if(fn(o)&&!l)return;const r=o.shapeFlag&4?Bl(o.component)||o.component.proxy:o.el,a=l?null:r,{i:c,r:p}=s,u=t&&t.r,y=c.refs===xe?c.refs={}:c.refs,d=c.setupState;if(u!=null&&u!==p&&(Ne(u)?(y[u]=null,Ae(d,u)&&(d[u]=null)):Ce(u)&&(u.value=null)),ce(p))nt(p,c,12,[a,y]);else{const f=Ne(p),m=Ce(p);if(f||m){const h=()=>{if(s.f){const A=f?Ae(d,p)?d[p]:y[p]:p.value;l?le(A)&&Qr(A,r):le(A)?A.includes(r)||A.push(r):f?(y[p]=[r],Ae(d,p)&&(d[p]=y[p])):(p.value=[r],s.k&&(y[s.k]=p.value))}else f?(y[p]=a,Ae(d,p)&&(d[p]=a)):m&&(p.value=a,s.k&&(y[s.k]=a))};a?(h.id=-1,Xe(h,n)):h()}}}const Xe=df;function Uf(s){return qf(s)}function qf(s,t){const n=fd();n.__VUE__=!0;const{insert:o,remove:l,patchProp:r,createElement:a,createText:c,createComment:p,setText:u,setElementText:y,parentNode:d,nextSibling:f,setScopeId:m=Os,insertStaticContent:h}=s,A=(g,v,k,L=null,$=null,j=null,W=!1,z=null,Q=!!v.dynamicChildren)=>{if(g===v)return;g&&!Tn(g,v)&&(L=V(g),qe(g,$,j,!0),g=null),v.patchFlag===-2&&(Q=!1,v.dynamicChildren=null);const{type:F,ref:se,shapeFlag:K}=v;switch(F){case ya:b(g,v,k,L);break;case Ct:B(g,v,k,L);break;case Io:g==null&&w(v,k,L,W);break;case ke:We(g,v,k,L,$,j,W,z,Q);break;default:K&1?N(g,v,k,L,$,j,W,z,Q):K&6?He(g,v,k,L,$,j,W,z,Q):(K&64||K&128)&&F.process(g,v,k,L,$,j,W,z,Q,ge)}se!=null&&$&&ur(se,g&&g.ref,j,v||g,!v)},b=(g,v,k,L)=>{if(g==null)o(v.el=c(v.children),k,L);else{const $=v.el=g.el;v.children!==g.children&&u($,v.children)}},B=(g,v,k,L)=>{g==null?o(v.el=p(v.children||""),k,L):v.el=g.el},w=(g,v,k,L)=>{[g.el,g.anchor]=h(g.children,v,k,L,g.el,g.anchor)},C=({el:g,anchor:v},k,L)=>{let $;for(;g&&g!==v;)$=f(g),o(g,k,L),g=$;o(v,k,L)},x=({el:g,anchor:v})=>{let k;for(;g&&g!==v;)k=f(g),l(g),g=k;l(v)},N=(g,v,k,L,$,j,W,z,Q)=>{W=W||v.type==="svg",g==null?M(v,k,L,$,j,W,z,Q):re(g,v,$,j,W,z,Q)},M=(g,v,k,L,$,j,W,z)=>{let Q,F;const{type:se,props:K,shapeFlag:te,transition:ae,dirs:_e}=g;if(Q=g.el=a(g.type,j,K&&K.is,K),te&8?y(Q,g.children):te&16&&G(g.children,Q,null,L,$,j&&se!=="foreignObject",W,z),_e&&St(g,null,L,"created"),K){for(const Se in K)Se!=="value"&&!No(Se)&&r(Q,Se,null,K[Se],j,g.children,L,$,J);"value"in K&&r(Q,"value",null,K.value),(F=K.onVnodeBeforeMount)&&Cs(F,L,g)}P(Q,g,g.scopeId,W,L),_e&&St(g,null,L,"beforeMount");const Le=(!$||$&&!$.pendingBranch)&&ae&&!ae.persisted;Le&&ae.beforeEnter(Q),o(Q,v,k),((F=K&&K.onVnodeMounted)||Le||_e)&&Xe(()=>{F&&Cs(F,L,g),Le&&ae.enter(Q),_e&&St(g,null,L,"mounted")},$)},P=(g,v,k,L,$)=>{if(k&&m(g,k),L)for(let j=0;j<L.length;j++)m(g,L[j]);if($){let j=$.subTree;if(v===j){const W=$.vnode;P(g,W,W.scopeId,W.slotScopeIds,$.parent)}}},G=(g,v,k,L,$,j,W,z,Q=0)=>{for(let F=Q;F<g.length;F++){const se=g[F]=z?ht(g[F]):zs(g[F]);A(null,se,v,k,L,$,j,W,z)}},re=(g,v,k,L,$,j,W)=>{const z=v.el=g.el;let{patchFlag:Q,dynamicChildren:F,dirs:se}=v;Q|=g.patchFlag&16;const K=g.props||xe,te=v.props||xe;let ae;k&&xt(k,!1),(ae=te.onVnodeBeforeUpdate)&&Cs(ae,k,v,g),se&&St(v,g,k,"beforeUpdate"),k&&xt(k,!0);const _e=$&&v.type!=="foreignObject";if(F?de(g.dynamicChildren,F,z,k,L,_e,j):W||oe(g,v,z,null,k,L,_e,j,!1),Q>0){if(Q&16)ve(z,v,K,te,k,L,$);else if(Q&2&&K.class!==te.class&&r(z,"class",null,te.class,$),Q&4&&r(z,"style",K.style,te.style,$),Q&8){const Le=v.dynamicProps;for(let Se=0;Se<Le.length;Se++){const ze=Le[Se],ks=K[ze],en=te[ze];(en!==ks||ze==="value")&&r(z,ze,ks,en,$,g.children,k,L,J)}}Q&1&&g.children!==v.children&&y(z,v.children)}else!W&&F==null&&ve(z,v,K,te,k,L,$);((ae=te.onVnodeUpdated)||se)&&Xe(()=>{ae&&Cs(ae,k,v,g),se&&St(v,g,k,"updated")},L)},de=(g,v,k,L,$,j,W)=>{for(let z=0;z<v.length;z++){const Q=g[z],F=v[z],se=Q.el&&(Q.type===ke||!Tn(Q,F)||Q.shapeFlag&70)?d(Q.el):k;A(Q,F,se,null,L,$,j,W,!0)}},ve=(g,v,k,L,$,j,W)=>{if(k!==L){if(k!==xe)for(const z in k)!No(z)&&!(z in L)&&r(g,z,k[z],null,W,v.children,$,j,J);for(const z in L){if(No(z))continue;const Q=L[z],F=k[z];Q!==F&&z!=="value"&&r(g,z,F,Q,W,v.children,$,j,J)}"value"in L&&r(g,"value",k.value,L.value)}},We=(g,v,k,L,$,j,W,z,Q)=>{const F=v.el=g?g.el:c(""),se=v.anchor=g?g.anchor:c("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:ae}=v;ae&&(z=z?z.concat(ae):ae),g==null?(o(F,k,L),o(se,k,L),G(v.children,k,se,$,j,W,z,Q)):K>0&&K&64&&te&&g.dynamicChildren?(de(g.dynamicChildren,te,k,$,j,W,z),(v.key!=null||$&&v===$.subTree)&&ua(g,v,!0)):oe(g,v,k,se,$,j,W,z,Q)},He=(g,v,k,L,$,j,W,z,Q)=>{v.slotScopeIds=z,g==null?v.shapeFlag&512?$.ctx.activate(v,k,L,W,Q):Ie(v,k,L,$,j,W,Q):Re(g,v,Q)},Ie=(g,v,k,L,$,j,W)=>{const z=g.component=Zf(g,L,$);if(Fp(g)&&(z.ctx.renderer=ge),Xf(z),z.asyncDep){if($&&$.registerDep(z,Pe),!g.el){const Q=z.subTree=S(Ct);B(null,Q,v,k)}return}Pe(z,g,v,k,$,j,W)},Re=(g,v,k)=>{const L=v.component=g.component;if(uf(g,v,k))if(L.asyncDep&&!L.asyncResolved){Y(L,v,k);return}else L.next=v,of(L.update),L.update();else v.el=g.el,L.vnode=v},Pe=(g,v,k,L,$,j,W)=>{const z=()=>{if(g.isMounted){let{next:se,bu:K,u:te,parent:ae,vnode:_e}=g,Le=se,Se;xt(g,!1),se?(se.el=_e.el,Y(g,se,W)):se=_e,K&&un(K),(Se=se.props&&se.props.onVnodeBeforeUpdate)&&Cs(Se,ae,se,_e),xt(g,!0);const ze=Ll(g),ks=g.subTree;g.subTree=ze,A(ks,ze,d(ks.el),V(ks),g,$,j),se.el=ze.el,Le===null&&yf(g,ze.el),te&&Xe(te,$),(Se=se.props&&se.props.onVnodeUpdated)&&Xe(()=>Cs(Se,ae,se,_e),$)}else{let se;const{el:K,props:te}=v,{bm:ae,m:_e,parent:Le}=g,Se=fn(v);if(xt(g,!1),ae&&un(ae),!Se&&(se=te&&te.onVnodeBeforeMount)&&Cs(se,Le,v),xt(g,!0),K&&ie){const ze=()=>{g.subTree=Ll(g),ie(K,g.subTree,g,$,null)};Se?v.type.__asyncLoader().then(()=>!g.isUnmounted&&ze()):ze()}else{const ze=g.subTree=Ll(g);A(null,ze,k,L,g,$,j),v.el=ze.el}if(_e&&Xe(_e,$),!Se&&(se=te&&te.onVnodeMounted)){const ze=v;Xe(()=>Cs(se,Le,ze),$)}(v.shapeFlag&256||Le&&fn(Le.vnode)&&Le.vnode.shapeFlag&256)&&g.a&&Xe(g.a,$),g.isMounted=!0,v=k=L=null}},Q=g.effect=new Gr(z,()=>oa(F),g.scope),F=g.update=()=>Q.run();F.id=g.uid,xt(g,!0),F()},Y=(g,v,k)=>{v.component=g;const L=g.vnode.props;g.vnode=v,g.next=null,Of(g,v.props,L,k),Nf(g,v.children,k),Gt(),ti(),Yt()},oe=(g,v,k,L,$,j,W,z,Q=!1)=>{const F=g&&g.children,se=g?g.shapeFlag:0,K=v.children,{patchFlag:te,shapeFlag:ae}=v;if(te>0){if(te&128){Ee(F,K,k,L,$,j,W,z,Q);return}else if(te&256){me(F,K,k,L,$,j,W,z,Q);return}}ae&8?(se&16&&J(F,$,j),K!==F&&y(k,K)):se&16?ae&16?Ee(F,K,k,L,$,j,W,z,Q):J(F,$,j,!0):(se&8&&y(k,""),ae&16&&G(K,k,L,$,j,W,z,Q))},me=(g,v,k,L,$,j,W,z,Q)=>{g=g||cn,v=v||cn;const F=g.length,se=v.length,K=Math.min(F,se);let te;for(te=0;te<K;te++){const ae=v[te]=Q?ht(v[te]):zs(v[te]);A(g[te],ae,k,null,$,j,W,z,Q)}F>se?J(g,$,j,!0,!1,K):G(v,k,L,$,j,W,z,Q,K)},Ee=(g,v,k,L,$,j,W,z,Q)=>{let F=0;const se=v.length;let K=g.length-1,te=se-1;for(;F<=K&&F<=te;){const ae=g[F],_e=v[F]=Q?ht(v[F]):zs(v[F]);if(Tn(ae,_e))A(ae,_e,k,null,$,j,W,z,Q);else break;F++}for(;F<=K&&F<=te;){const ae=g[K],_e=v[te]=Q?ht(v[te]):zs(v[te]);if(Tn(ae,_e))A(ae,_e,k,null,$,j,W,z,Q);else break;K--,te--}if(F>K){if(F<=te){const ae=te+1,_e=ae<se?v[ae].el:L;for(;F<=te;)A(null,v[F]=Q?ht(v[F]):zs(v[F]),k,_e,$,j,W,z,Q),F++}}else if(F>te)for(;F<=K;)qe(g[F],$,j,!0),F++;else{const ae=F,_e=F,Le=new Map;for(F=_e;F<=te;F++){const ds=v[F]=Q?ht(v[F]):zs(v[F]);ds.key!=null&&Le.set(ds.key,F)}let Se,ze=0;const ks=te-_e+1;let en=!1,Qa=0;const xn=new Array(ks);for(F=0;F<ks;F++)xn[F]=0;for(F=ae;F<=K;F++){const ds=g[F];if(ze>=ks){qe(ds,$,j,!0);continue}let qs;if(ds.key!=null)qs=Le.get(ds.key);else for(Se=_e;Se<=te;Se++)if(xn[Se-_e]===0&&Tn(ds,v[Se])){qs=Se;break}qs===void 0?qe(ds,$,j,!0):(xn[qs-_e]=F+1,qs>=Qa?Qa=qs:en=!0,A(ds,v[qs],k,null,$,j,W,z,Q),ze++)}const Va=en?zf(xn):cn;for(Se=Va.length-1,F=ks-1;F>=0;F--){const ds=_e+F,qs=v[ds],Ja=ds+1<se?v[ds+1].el:L;xn[F]===0?A(null,qs,k,Ja,$,j,W,z,Q):en&&(Se<0||F!==Va[Se]?rs(qs,k,Ja,2):Se--)}}},rs=(g,v,k,L,$=null)=>{const{el:j,type:W,transition:z,children:Q,shapeFlag:F}=g;if(F&6){rs(g.component.subTree,v,k,L);return}if(F&128){g.suspense.move(v,k,L);return}if(F&64){W.move(g,v,k,ge);return}if(W===ke){o(j,v,k);for(let K=0;K<Q.length;K++)rs(Q[K],v,k,L);o(g.anchor,v,k);return}if(W===Io){C(g,v,k);return}if(L!==2&&F&1&&z)if(L===0)z.beforeEnter(j),o(j,v,k),Xe(()=>z.enter(j),$);else{const{leave:K,delayLeave:te,afterLeave:ae}=z,_e=()=>o(j,v,k),Le=()=>{K(j,()=>{_e(),ae&&ae()})};te?te(j,_e,Le):Le()}else o(j,v,k)},qe=(g,v,k,L=!1,$=!1)=>{const{type:j,props:W,ref:z,children:Q,dynamicChildren:F,shapeFlag:se,patchFlag:K,dirs:te}=g;if(z!=null&&ur(z,null,k,g,!0),se&256){v.ctx.deactivate(g);return}const ae=se&1&&te,_e=!fn(g);let Le;if(_e&&(Le=W&&W.onVnodeBeforeUnmount)&&Cs(Le,v,g),se&6)R(g.component,k,L);else{if(se&128){g.suspense.unmount(k,L);return}ae&&St(g,null,v,"beforeUnmount"),se&64?g.type.remove(g,v,k,$,ge,L):F&&(j!==ke||K>0&&K&64)?J(F,v,k,!1,!0):(j===ke&&K&384||!$&&se&16)&&J(Q,v,k),L&&ut(g)}(_e&&(Le=W&&W.onVnodeUnmounted)||ae)&&Xe(()=>{Le&&Cs(Le,v,g),ae&&St(g,null,v,"unmounted")},k)},ut=g=>{const{type:v,el:k,anchor:L,transition:$}=g;if(v===ke){Xt(k,L);return}if(v===Io){x(g);return}const j=()=>{l(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(g.shapeFlag&1&&$&&!$.persisted){const{leave:W,delayLeave:z}=$,Q=()=>W(k,j);z?z(g.el,j,Q):Q()}else j()},Xt=(g,v)=>{let k;for(;g!==v;)k=f(g),l(g),g=k;l(v)},R=(g,v,k)=>{const{bum:L,scope:$,update:j,subTree:W,um:z}=g;L&&un(L),$.stop(),j&&(j.active=!1,qe(W,g,v,k)),z&&Xe(z,v),Xe(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},J=(g,v,k,L=!1,$=!1,j=0)=>{for(let W=j;W<g.length;W++)qe(g[W],v,k,L,$)},V=g=>g.shapeFlag&6?V(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),X=(g,v,k)=>{g==null?v._vnode&&qe(v._vnode,null,null,!0):A(v._vnode||null,g,v,null,null,null,k),ti(),Tp(),v._vnode=g},ge={p:A,um:qe,m:rs,r:ut,mt:Ie,mc:G,pc:oe,pbc:de,n:V,o:s};let De,ie;return t&&([De,ie]=t(ge)),{render:X,hydrate:De,createApp:Mf(X,De)}}function xt({effect:s,update:t},n){s.allowRecurse=t.allowRecurse=n}function ua(s,t,n=!1){const o=s.children,l=t.children;if(le(o)&&le(l))for(let r=0;r<o.length;r++){const a=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=ht(l[r]),c.el=a.el),n||ua(a,c))}}function zf(s){const t=s.slice(),n=[0];let o,l,r,a,c;const p=s.length;for(o=0;o<p;o++){const u=s[o];if(u!==0){if(l=n[n.length-1],s[l]<u){t[o]=l,n.push(o);continue}for(r=0,a=n.length-1;r<a;)c=r+a>>1,s[n[c]]<u?r=c+1:a=c;u<s[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}const jf=s=>s.__isTeleport,jn=s=>s&&(s.disabled||s.disabled===""),ui=s=>typeof SVGElement<"u"&&s instanceof SVGElement,yr=(s,t)=>{const n=s&&s.to;return Ne(n)?t?t(n):null:n},Hf={__isTeleport:!0,process(s,t,n,o,l,r,a,c,p,u){const{mc:y,pc:d,pbc:f,o:{insert:m,querySelector:h,createText:A,createComment:b}}=u,B=jn(t.props);let{shapeFlag:w,children:C,dynamicChildren:x}=t;if(s==null){const N=t.el=A(""),M=t.anchor=A("");m(N,n,o),m(M,n,o);const P=t.target=yr(t.props,h),G=t.targetAnchor=A("");P&&(m(G,P),a=a||ui(P));const re=(de,ve)=>{w&16&&y(C,de,ve,l,r,a,c,p)};B?re(n,M):P&&re(P,G)}else{t.el=s.el;const N=t.anchor=s.anchor,M=t.target=s.target,P=t.targetAnchor=s.targetAnchor,G=jn(s.props),re=G?n:M,de=G?N:P;if(a=a||ui(M),x?(f(s.dynamicChildren,x,re,l,r,a,c),ua(s,t,!0)):p||d(s,t,re,de,l,r,a,c,!1),B)G||Lo(t,n,N,u,1);else if((t.props&&t.props.to)!==(s.props&&s.props.to)){const ve=t.target=yr(t.props,h);ve&&Lo(t,ve,null,u,0)}else G&&Lo(t,M,P,u,1)}},remove(s,t,n,o,{um:l,o:{remove:r}},a){const{shapeFlag:c,children:p,anchor:u,targetAnchor:y,target:d,props:f}=s;if(d&&r(y),(a||!jn(f))&&(r(u),c&16))for(let m=0;m<p.length;m++){const h=p[m];l(h,t,n,!0,!!h.dynamicChildren)}},move:Lo,hydrate:Qf};function Lo(s,t,n,{o:{insert:o},m:l},r=2){r===0&&o(s.targetAnchor,t,n);const{el:a,anchor:c,shapeFlag:p,children:u,props:y}=s,d=r===2;if(d&&o(a,t,n),(!d||jn(y))&&p&16)for(let f=0;f<u.length;f++)l(u[f],t,n,2);d&&o(c,t,n)}function Qf(s,t,n,o,l,r,{o:{nextSibling:a,parentNode:c,querySelector:p}},u){const y=t.target=yr(t.props,p);if(y){const d=y._lpa||y.firstChild;if(t.shapeFlag&16)if(jn(t.props))t.anchor=u(a(s),t,c(s),n,o,l,r),t.targetAnchor=d;else{t.anchor=a(s);let f=d;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,y._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(d,t,y,n,o,l,r)}}return t.anchor&&a(t.anchor)}const Vf=Hf,ke=Symbol(void 0),ya=Symbol(void 0),Ct=Symbol(void 0),Io=Symbol(void 0),Hn=[];let Rs=null;function D(s=!1){Hn.push(Rs=s?null:[])}function Jf(){Hn.pop(),Rs=Hn[Hn.length-1]||null}let lo=1;function yi(s){lo+=s}function Wp(s){return s.dynamicChildren=lo>0?Rs||cn:null,Jf(),lo>0&&Rs&&Rs.push(s),s}function U(s,t,n,o,l,r){return Wp(e(s,t,n,o,l,r,!0))}function q(s,t,n,o,l){return Wp(S(s,t,n,o,l,!0))}function vn(s){return s?s.__v_isVNode===!0:!1}function Tn(s,t){return s.type===t.type&&s.key===t.key}const Dl="__vInternal",Gp=({key:s})=>s!=null?s:null,Mo=({ref:s,ref_key:t,ref_for:n})=>s!=null?Ne(s)||Ce(s)||ce(s)?{i:ns,r:s,k:t,f:!!n}:s:null;function e(s,t=null,n=null,o=0,l=null,r=s===ke?0:1,a=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&Gp(t),ref:t&&Mo(t),scopeId:_l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null};return c?(da(p,n),r&128&&s.normalize(p)):n&&(p.shapeFlag|=Ne(n)?8:16),lo>0&&!a&&Rs&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&Rs.push(p),p}const S=Wf;function Wf(s,t=null,n=null,o=0,l=null,r=!1){if((!s||s===Ef)&&(s=Ct),vn(s)){const c=Vt(s,t,!0);return n&&da(c,n),lo>0&&!r&&Rs&&(c.shapeFlag&6?Rs[Rs.indexOf(s)]=c:Rs.push(c)),c.patchFlag|=-2,c}if(oh(s)&&(s=s.__vccOpts),t){t=Z(t);let{class:c,style:p}=t;c&&!Ne(c)&&(t.class=Oe(c)),Fe(p)&&(Dp(p)&&!le(p)&&(p=ps({},p)),t.style=Ke(p))}const a=Ne(s)?1:Pp(s)?128:jf(s)?64:Fe(s)?4:ce(s)?2:0;return e(s,t,n,o,l,a,r,!0)}function Z(s){return s?Dp(s)||Dl in s?ps({},s):s:null}function Vt(s,t,n=!1){const{props:o,ref:l,patchFlag:r,children:a}=s,c=t?ne(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:c,key:c&&Gp(c),ref:t&&t.ref?n&&l?le(l)?l.concat(Mo(t)):[l,Mo(t)]:Mo(t):l,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:a,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==ke?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Vt(s.ssContent),ssFallback:s.ssFallback&&Vt(s.ssFallback),el:s.el,anchor:s.anchor}}function i(s=" ",t=0){return S(ya,null,s,t)}function Gf(s,t){const n=S(Io,null,s);return n.staticCount=t,n}function fe(s="",t=!1){return t?(D(),q(Ct,null,s)):S(Ct,null,s)}function zs(s){return s==null||typeof s=="boolean"?S(Ct):le(s)?S(ke,null,s.slice()):typeof s=="object"?ht(s):S(ya,null,String(s))}function ht(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Vt(s)}function da(s,t){let n=0;const{shapeFlag:o}=s;if(t==null)t=null;else if(le(t))n=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),da(s,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!(Dl in t)?t._ctx=ns:l===3&&ns&&(ns.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:ns},n=32):(t=String(t),o&64?(n=16,t=[i(t)]):n=8);s.children=t,s.shapeFlag|=n}function ne(...s){const t={};for(let n=0;n<s.length;n++){const o=s[n];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Oe([t.class,o.class]));else if(l==="style")t.style=Ke([t.style,o.style]);else if(pl(l)){const r=t[l],a=o[l];a&&r!==a&&!(le(r)&&r.includes(a))&&(t[l]=r?[].concat(r,a):a)}else l!==""&&(t[l]=o[l])}return t}function Cs(s,t,n,o=null){$s(s,t,7,[n,o])}const Yf=Jp();let Kf=0;function Zf(s,t,n){const o=s.type,l=(t?t.appContext:s.appContext)||Yf,r={uid:Kf++,vnode:s,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jp(o,l),emitsOptions:Rp(o,l),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:o.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=af.bind(null,r),s.ce&&s.ce(r),r}let Ge=null;const Et=()=>Ge||ns,bn=s=>{Ge=s,s.scope.on()},Ht=()=>{Ge&&Ge.scope.off(),Ge=null};function Yp(s){return s.vnode.shapeFlag&4}let ro=!1;function Xf(s,t=!1){ro=t;const{props:n,children:o}=s.vnode,l=Yp(s);Pf(s,n,l,t),Ff(s,o);const r=l?eh(s,t):void 0;return ro=!1,r}function eh(s,t){const n=s.type;s.accessCache=Object.create(null),s.proxy=hl(new Proxy(s.ctx,kf));const{setup:o}=n;if(o){const l=s.setupContext=o.length>1?Zp(s):null;bn(s),Gt();const r=nt(o,s,0,[s.props,l]);if(Yt(),Ht(),rp(r)){if(r.then(Ht,Ht),t)return r.then(a=>{di(s,a,t)}).catch(a=>{ml(a,s,0)});s.asyncDep=r}else di(s,r,t)}else Kp(s,t)}function di(s,t,n){ce(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:Fe(t)&&(s.setupState=Cp(t)),Kp(s,n)}let fi;function Kp(s,t,n){const o=s.type;if(!s.render){if(!t&&fi&&!o.render){const l=o.template||ca(s).template;if(l){const{isCustomElement:r,compilerOptions:a}=s.appContext.config,{delimiters:c,compilerOptions:p}=o,u=ps(ps({isCustomElement:r,delimiters:c},a),p);o.render=fi(l,u)}}s.render=o.render||Os}bn(s),Gt(),Sf(s),Yt(),Ht()}function sh(s){return new Proxy(s.attrs,{get(t,n){return bs(s,"get","$attrs"),t[n]}})}function Zp(s){const t=o=>{s.exposed=o||{}};let n;return{get attrs(){return n||(n=sh(s))},slots:s.slots,emit:s.emit,expose:t}}function Bl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Cp(hl(s.exposed)),{get(t,n){if(n in t)return t[n];if(n in zn)return zn[n](s)},has(t,n){return n in t||n in zn}}))}const th=/(?:^|[-_])(\w)/g,nh=s=>s.replace(th,t=>t.toUpperCase()).replace(/[-_]/g,"");function Ko(s,t=!0){return ce(s)?s.displayName||s.name:s.name||t&&s.__name}function Xp(s,t,n=!1){let o=Ko(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&s&&s.parent){const l=r=>{for(const a in r)if(r[a]===t)return a};o=l(s.components||s.parent.type.components)||l(s.appContext.components)}return o?nh(o):n?"App":"Anonymous"}function oh(s){return ce(s)&&"__vccOpts"in s}const T=(s,t)=>Yd(s,t,ro);function lh(){return rh().slots}function rh(){const s=Et();return s.setupContext||(s.setupContext=Zp(s))}function Ye(s,t,n){const o=arguments.length;return o===2?Fe(t)&&!le(t)?vn(t)?S(s,null,[t]):S(s,t):S(s,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&vn(n)&&(n=[n]),S(s,t,n))}const ah=Symbol(""),ih=()=>{{const s=O(ah);return s||Kd("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}},ch="3.2.42",ph="http://www.w3.org/2000/svg",Ft=typeof document<"u"?document:null,hi=Ft&&Ft.createElement("template"),uh={insert:(s,t,n)=>{t.insertBefore(s,n||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,n,o)=>{const l=t?Ft.createElementNS(ph,s):Ft.createElement(s,n?{is:n}:void 0);return s==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:s=>Ft.createTextNode(s),createComment:s=>Ft.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Ft.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},insertStaticContent(s,t,n,o,l,r){const a=n?n.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===r||!(l=l.nextSibling)););else{hi.innerHTML=o?`<svg>${s}</svg>`:s;const c=hi.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function yh(s,t,n){const o=s._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?s.removeAttribute("class"):n?s.setAttribute("class",t):s.className=t}function dh(s,t,n){const o=s.style,l=Ne(n);if(n&&!l){for(const r in n)dr(o,r,n[r]);if(t&&!Ne(t))for(const r in t)n[r]==null&&dr(o,r,"")}else{const r=o.display;l?t!==n&&(o.cssText=n):t&&s.removeAttribute("style"),"_vod"in s&&(o.display=r)}}const mi=/\s*!important$/;function dr(s,t,n){if(le(n))n.forEach(o=>dr(s,t,o));else if(n==null&&(n=""),t.startsWith("--"))s.setProperty(t,n);else{const o=fh(s,t);mi.test(n)?s.setProperty(Wt(o),n.replace(mi,""),"important"):s[o]=n}}const gi=["Webkit","Moz","ms"],Ol={};function fh(s,t){const n=Ol[t];if(n)return n;let o=Gs(t);if(o!=="filter"&&o in s)return Ol[t]=o;o=dl(o);for(let l=0;l<gi.length;l++){const r=gi[l]+o;if(r in s)return Ol[t]=r}return t}const _i="http://www.w3.org/1999/xlink";function hh(s,t,n,o,l){if(o&&t.startsWith("xlink:"))n==null?s.removeAttributeNS(_i,t.slice(6,t.length)):s.setAttributeNS(_i,t,n);else{const r=ad(t);n==null||r&&!np(n)?s.removeAttribute(t):s.setAttribute(t,r?"":n)}}function mh(s,t,n,o,l,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,l,r),s[t]=n==null?"":n;return}if(t==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=n;const p=n==null?"":n;(s.value!==p||s.tagName==="OPTION")&&(s.value=p),n==null&&s.removeAttribute(t);return}let c=!1;if(n===""||n==null){const p=typeof s[t];p==="boolean"?n=np(n):n==null&&p==="string"?(n="",c=!0):p==="number"&&(n=0,c=!0)}try{s[t]=n}catch{}c&&s.removeAttribute(t)}function on(s,t,n,o){s.addEventListener(t,n,o)}function gh(s,t,n,o){s.removeEventListener(t,n,o)}function _h(s,t,n,o,l=null){const r=s._vei||(s._vei={}),a=r[t];if(o&&a)a.value=o;else{const[c,p]=Ah(t);if(o){const u=r[t]=Dh(o,l);on(s,c,u,p)}else a&&(gh(s,c,a,p),r[t]=void 0)}}const Ai=/(?:Once|Passive|Capture)$/;function Ah(s){let t;if(Ai.test(s)){t={};let o;for(;o=s.match(Ai);)s=s.slice(0,s.length-o[0].length),t[o[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):Wt(s.slice(2)),t]}let $l=0;const vh=Promise.resolve(),bh=()=>$l||(vh.then(()=>$l=0),$l=Date.now());function Dh(s,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;$s(Bh(o,n.value),t,5,[o])};return n.value=s,n.attached=bh(),n}function Bh(s,t){if(le(t)){const n=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{n.call(s),s._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const vi=/^on[a-z]/,Ch=(s,t,n,o,l=!1,r,a,c,p)=>{t==="class"?yh(s,o,l):t==="style"?dh(s,n,o):pl(t)?Hr(t)||_h(s,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Eh(s,t,o,l))?mh(s,t,o,r,a,c,p):(t==="true-value"?s._trueValue=o:t==="false-value"&&(s._falseValue=o),hh(s,t,o,l))};function Eh(s,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in s&&vi.test(t)&&ce(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA"||vi.test(t)&&Ne(n)?!1:t in s}const bi=s=>{const t=s.props["onUpdate:modelValue"]||!1;return le(t)?n=>un(t,n):t};function wh(s){s.target.composing=!0}function Di(s){const t=s.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kh={created(s,{modifiers:{lazy:t,trim:n,number:o}},l){s._assign=bi(l);const r=o||l.props&&l.props.type==="number";on(s,t?"change":"input",a=>{if(a.target.composing)return;let c=s.value;n&&(c=c.trim()),r&&(c=Jo(c)),s._assign(c)}),n&&on(s,"change",()=>{s.value=s.value.trim()}),t||(on(s,"compositionstart",wh),on(s,"compositionend",Di),on(s,"change",Di))},mounted(s,{value:t}){s.value=t==null?"":t},beforeUpdate(s,{value:t,modifiers:{lazy:n,trim:o,number:l}},r){if(s._assign=bi(r),s.composing||document.activeElement===s&&s.type!=="range"&&(n||o&&s.value.trim()===t||(l||s.type==="number")&&Jo(s.value)===t))return;const a=t==null?"":t;s.value!==a&&(s.value=a)}},Sh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bi=(s,t)=>n=>{if(!("key"in n))return;const o=Wt(n.key);if(t.some(l=>l===o||Sh[l]===o))return s(n)},eu={beforeMount(s,{value:t},{transition:n}){s._vod=s.style.display==="none"?"":s.style.display,n&&t?n.beforeEnter(s):Ln(s,t)},mounted(s,{value:t},{transition:n}){n&&t&&n.enter(s)},updated(s,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(s),Ln(s,!0),o.enter(s)):o.leave(s,()=>{Ln(s,!1)}):Ln(s,t))},beforeUnmount(s,{value:t}){Ln(s,t)}};function Ln(s,t){s.style.display=t?s._vod:"none"}const xh=ps({patchProp:Ch},uh);let Ci;function Th(){return Ci||(Ci=Uf(xh))}const Lh=(...s)=>{const t=Th().createApp(...s),{mount:n}=t;return t.mount=o=>{const l=Rh(o);if(!l)return;const r=t._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function Rh(s){return Ne(s)?document.querySelector(s):s}var Ei;const Ns=typeof window<"u",Ph=s=>typeof s<"u",Oh=Object.prototype.toString,Zo=s=>typeof s=="function",$h=s=>typeof s=="number",su=s=>typeof s=="string",fr=s=>Oh.call(s)==="[object Object]",hr=()=>+Date.now(),hn=()=>{};Ns&&((Ei=window==null?void 0:window.navigator)==null?void 0:Ei.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ve(s){return typeof s=="function"?s():E(s)}function Fh(s,t){function n(...o){s(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const tu=s=>s();function Nh(s=tu){const t=H(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...r)=>{t.value&&s(...r)}}}function Ih(s){return s}function Mh(s,t){var n;if(typeof s=="number")return s+t;const o=((n=s.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=s.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?s:r+l}function Uh(s,t){let n,o,l;const r=H(!0),a=()=>{r.value=!0,l()};he(s,a,{flush:"sync"});const c=Zo(t)?t:t.get,p=Zo(t)?void 0:t.set,u=Ep((y,d)=>(o=y,l=d,{get(){return r.value&&(n=c(),r.value=!1),o(),n},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function Ks(s){return pp()?(up(s),!0):!1}function qh(s){if(!Ce(s))return $e(s);const t=new Proxy({},{get(n,o,l){return E(Reflect.get(s.value,o,l))},set(n,o,l){return Ce(s.value[o])&&!Ce(l)?s.value[o].value=l:s.value[o]=l,!0},deleteProperty(n,o){return Reflect.deleteProperty(s.value,o)},has(n,o){return Reflect.has(s.value,o)},ownKeys(){return Object.keys(s.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return $e(t)}function nu(s){return typeof s=="function"?T(s):H(s)}var zh=Object.defineProperty,jh=Object.defineProperties,Hh=Object.getOwnPropertyDescriptors,wi=Object.getOwnPropertySymbols,Qh=Object.prototype.hasOwnProperty,Vh=Object.prototype.propertyIsEnumerable,ki=(s,t,n)=>t in s?zh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,Jh=(s,t)=>{for(var n in t||(t={}))Qh.call(t,n)&&ki(s,n,t[n]);if(wi)for(var n of wi(t))Vh.call(t,n)&&ki(s,n,t[n]);return s},Wh=(s,t)=>jh(s,Hh(t));function Gh(s){if(!Ce(s))return Vd(s);const t=Array.isArray(s.value)?new Array(s.value.length):{};for(const n in s.value)t[n]=Ep(()=>({get(){return s.value[n]},set(o){if(Array.isArray(s.value)){const l=[...s.value];l[n]=o,s.value=l}else{const l=Wh(Jh({},s.value),{[n]:o});Object.setPrototypeOf(l,s.value),s.value=l}}}));return t}function Cl(s,t=!0){Et()?rt(s):t?s():ts(s)}function ou(s){Et()&&bl(s)}function Yh(s,t=1e3,n={}){const{immediate:o=!0,immediateCallback:l=!1}=n;let r=null;const a=H(!1);function c(){r&&(clearInterval(r),r=null)}function p(){a.value=!1,c()}function u(){E(t)<=0||(a.value=!0,l&&s(),c(),r=setInterval(s,Ve(t)))}if(o&&Ns&&u(),Ce(t)){const y=he(t,()=>{a.value&&Ns&&u()});Ks(y)}return Ks(p),{isActive:a,pause:p,resume:u}}function Kh(s,t,n={}){const{immediate:o=!0}=n,l=H(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,a()}function p(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,s(...u)},Ve(t))}return o&&(l.value=!0,Ns&&p()),Ks(c),{isPending:l,start:p,stop:c}}function lu(s=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,l=Ce(s),r=H(s);function a(c){if(arguments.length)return r.value=c,r.value;{const p=Ve(n);return r.value=r.value===p?Ve(o):p,r.value}}return l?a:[r,a]}var Si=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,Xh=Object.prototype.propertyIsEnumerable,em=(s,t)=>{var n={};for(var o in s)Zh.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&Si)for(var o of Si(s))t.indexOf(o)<0&&Xh.call(s,o)&&(n[o]=s[o]);return n};function sm(s,t,n={}){const o=n,{eventFilter:l=tu}=o,r=em(o,["eventFilter"]);return he(s,Fh(l,t),r)}var tm=Object.defineProperty,nm=Object.defineProperties,om=Object.getOwnPropertyDescriptors,Xo=Object.getOwnPropertySymbols,ru=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,xi=(s,t,n)=>t in s?tm(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,lm=(s,t)=>{for(var n in t||(t={}))ru.call(t,n)&&xi(s,n,t[n]);if(Xo)for(var n of Xo(t))au.call(t,n)&&xi(s,n,t[n]);return s},rm=(s,t)=>nm(s,om(t)),am=(s,t)=>{var n={};for(var o in s)ru.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&Xo)for(var o of Xo(s))t.indexOf(o)<0&&au.call(s,o)&&(n[o]=s[o]);return n};function im(s,t,n={}){const o=n,{eventFilter:l}=o,r=am(o,["eventFilter"]),{eventFilter:a,pause:c,resume:p,isActive:u}=Nh(l);return{stop:sm(s,t,rm(lm({},r),{eventFilter:a})),pause:c,resume:p,isActive:u}}var iu="usehead",Ti="head:count",Fl="data-head-attrs",cu="data-meta-body",cm=(s,t)=>{const n=o=>{if(o.props.renderPriority)return o.props.renderPriority;switch(o.tag){case"base":return-1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(s)-n(t)},pm=s=>{if(!["meta","base","script","link","title"].includes(s.tag))return!1;const{props:t,tag:n}=s;if(n==="base"||n==="title")return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const o=["key","id","name","property","http-equiv"];for(const l of o){let r;if(typeof t.getAttribute=="function"&&t.hasAttribute(l)?r=t.getAttribute(l):r=t[l],r!==void 0)return`${n}-${l}-${r}`}return!1};function mr(s){const t=Ve(s);return!s||!t?t:Array.isArray(t)?t.map(mr):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([n,o])=>n==="titleTemplate"?[n,E(o)]:[n,mr(o)])):t}function um(s){return{...s,input:mr(s.input)}}function Li(s,t){if(s instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!s.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===s.nonce&&s.isEqualNode(o)}}return s.isEqualNode(t)}var Ri=(s,t)=>{const n=s.getAttribute(Fl);if(n)for(const l of n.split(","))l in t||s.removeAttribute(l);const o=[];for(const l in t){const r=t[l];r!=null&&(r===!1?s.removeAttribute(l):s.setAttribute(l,r),o.push(l))}o.length?s.setAttribute(Fl,o.join(",")):s.removeAttribute(Fl)},ym=(s,t,n)=>{const o=n.createElement(s);for(const l of Object.keys(t))if(l==="body"&&t.body===!0)o.setAttribute(cu,"true");else{const r=t[l];if(l==="renderPriority"||l==="key"||r===!1)continue;l==="children"||l==="textContent"?o.textContent=r:l==="innerHTML"?o.innerHTML=r:o.setAttribute(l,r)}return o},dm=(s=window.document,t,n)=>{var o,l;const r=s.head,a=s.body;let c=r.querySelector(`meta[name="${Ti}"]`);const p=a.querySelectorAll(`[${cu}]`),u=c?Number(c.getAttribute("content")):0,y=[],d=[];if(p)for(let m=0;m<p.length;m++)p[m]&&((o=p[m].tagName)==null?void 0:o.toLowerCase())===t&&d.push(p[m]);if(c)for(let m=0,h=c.previousElementSibling;m<u;m++,h=(h==null?void 0:h.previousElementSibling)||null)((l=h==null?void 0:h.tagName)==null?void 0:l.toLowerCase())===t&&y.push(h);else c=s.createElement("meta"),c.setAttribute("name",Ti),c.setAttribute("content","0"),r.append(c);let f=n.map(m=>{var h;return{element:ym(m.tag,m.props,s),body:(h=m.props.body)!=null?h:!1}});f=f.filter(m=>{for(let h=0;h<y.length;h++){const A=y[h];if(Li(A,m.element))return y.splice(h,1),!1}for(let h=0;h<d.length;h++){const A=d[h];if(Li(A,m.element))return d.splice(h,1),!1}return!0}),d.forEach(m=>{var h;return(h=m.parentNode)==null?void 0:h.removeChild(m)}),y.forEach(m=>{var h;return(h=m.parentNode)==null?void 0:h.removeChild(m)}),f.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):r.insertBefore(m.element,c)}),c.setAttribute("content",`${u-y.length+f.filter(m=>!m.body).length}`)},fm=({domCtx:s,document:t,previousTags:n})=>{t||(t=window.document),s.title!==void 0&&(t.title=s.title),Ri(t.documentElement,s.htmlAttrs),Ri(t.body,s.bodyAttrs);const o=new Set([...Object.keys(s.actualTags),...n]);for(const l of o)dm(t,l,s.actualTags[l]||[]);n.clear(),Object.keys(s.actualTags).forEach(l=>n.add(l))},hm=()=>{const s=O(iu);if(!s)throw new Error("You may forget to apply app.use(head)");return s},mm=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],gm=(s,t)=>s==null?"":typeof s=="function"?s(t):s.replace("%s",t!=null?t:""),_m=s=>{const t=[],n=Object.keys(s),o=l=>(l.hid&&(l.key=l.hid,delete l.hid),l.vmid&&(l.key=l.vmid,delete l.vmid),l);for(const l of n)if(s[l]!=null)switch(l){case"title":t.push({tag:l,props:{textContent:s[l]}});break;case"titleTemplate":break;case"base":t.push({tag:l,props:{key:"default",...s[l]}});break;default:if(mm.includes(l)){const r=s[l];Array.isArray(r)?r.forEach(a=>{const c=o(a);t.push({tag:l,props:c})}):r&&t.push({tag:l,props:o(r)})}break}return t},Am=s=>{let t=[];const n=new Set;let o=0;const l=[],r=[];s&&t.push({input:s});let a=null,c;const p={install(u){u.config.globalProperties.$head=p,u.provide(iu,p)},hookBeforeDomUpdate:l,hookTagsResolved:r,get headTags(){const u=[],y={},d=t.map(um),f=d.map(h=>h.input.titleTemplate).reverse().find(h=>h!=null);d.forEach((h,A)=>{_m(h.input).forEach((B,w)=>{var C;if(B._position=A*1e4+w,B._options&&delete B._options,h.options&&(B._options=h.options),f&&B.tag==="title"&&(B.props.textContent=gm(f,B.props.textContent)),!((C=B._options)!=null&&C.raw)){for(const N in B.props)N.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",B),delete B.props[N]);B.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",B),delete B.props.innerHTML)}const x=pm(B);x?y[x]=B:u.push(B)})}),u.push(...Object.values(y));const m=u.sort((h,A)=>h._position-A._position);return p.hookTagsResolved.forEach(h=>h(m)),m},addHeadObjs(u,y){const d={input:u,options:y,id:o++};return t.push(d),()=>{t=t.filter(f=>f.id!==d.id)}},removeHeadObjs(u){t=t.filter(y=>y.input!==u)},updateDOM:(u,y)=>{c={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const f of p.headTags.sort(cm)){if(f.tag==="title"){c.title=f.props.textContent;continue}if(f.tag==="htmlAttrs"||f.tag==="bodyAttrs"){Object.assign(c[f.tag],f.props);continue}c.actualTags[f.tag]=c.actualTags[f.tag]||[],c.actualTags[f.tag].push(f)}const d=()=>{a=null;for(const f in p.hookBeforeDomUpdate)if(p.hookBeforeDomUpdate[f](c.actualTags)===!1)return;fm({domCtx:c,document:u,previousTags:n})};if(y){d();return}a=a||ts(()=>d())}};return p},vm=typeof window<"u",bm=(s,t={})=>{const n=hm(),o=n.addHeadObjs(s,t);vm&&(En(()=>{n.updateDOM()}),vl(()=>{o(),n.updateDOM()}))},Dm=s=>{bm(s)};const Qn=Symbol("v-click-clicks"),Nt=Symbol("v-click-clicks-elements"),gr=Symbol("v-click-clicks-order-map"),Vn=Symbol("v-click-clicks-disabled"),pu=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),Bm=Symbol("slidev-route"),Cm=Symbol("slidev-slide-context"),Ot="slidev-vclick-target",Nl="slidev-vclick-hidden",Em="slidev-vclick-fade",Il="slidev-vclick-hidden-explicitly",Rn="slidev-vclick-current",Ro="slidev-vclick-prior";function _r(s,t){if(!s)return!1;const n=s.indexOf(t);return n>=0?(s.splice(n,1),!0):!1}function wm(...s){let t,n,o;s.length===1?(t=0,o=1,[n]=s):[t,n,o=1]=s;const l=[];let r=t;for(;r<n;)l.push(r),r+=o||1;return l}function km(s){return s!=null}function Sm(s,t){return Object.fromEntries(Object.entries(s).map(([n,o])=>t(n,o)).filter(km))}const Un={theme:"default",title:"PostgreSQL as seen by Rubyists",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>PostgreSQL as seen by Rubyists</h2>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Martian Grotesk"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Martian Grotesk"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Martian Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Martian Grotesk","Martian Mono"],provider:"none",local:["Martian Grotesk","Martian Mono"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!1},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss"},Be=Un;var sp;const At=(sp=Be.aspectRatio)!=null?sp:16/9;var tp;const vt=(tp=Be.canvasWidth)!=null?tp:980,fa=Math.ceil(vt/At),uu=T(()=>Sm(Be.themeConfig||{},(s,t)=>[`--slidev-theme-${s}`,t]));function ws(s,t,n){Object.defineProperty(s,t,{value:n,writable:!0,enumerable:!1})}const Kt=$e({page:0,clicks:0});let xm=[],Tm=[];ws(Kt,"$syncUp",!0);ws(Kt,"$syncDown",!0);ws(Kt,"$paused",!1);ws(Kt,"$onSet",s=>xm.push(s));ws(Kt,"$onPatch",s=>Tm.push(s));ws(Kt,"$patch",async()=>!1);function yu(s,t,n=!1){const o=[];let l=!1,r=!1,a,c;const p=$e(t);function u(m){o.push(m)}function y(m,h){clearTimeout(a),l=!0,p[m]=h,a=setTimeout(()=>l=!1,0)}function d(m){l||(clearTimeout(c),r=!0,Object.entries(m).forEach(([h,A])=>{p[h]=A}),c=setTimeout(()=>r=!1,0))}function f(m){let h;n?n&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&d(JSON.parse(b.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",b=>d(b.data)));function A(){!n&&h&&!r?h.postMessage(be(p)):n&&!r&&window.localStorage.setItem(m,JSON.stringify(p)),l||o.forEach(b=>b(p))}if(he(p,A,{deep:!0}),n){const b=window.localStorage.getItem(m);b&&d(JSON.parse(b))}}return{init:f,onPatch:u,patch:y,state:p}}const{init:Lm,onPatch:Rm,patch:Pi,state:Ml}=yu(Kt,{page:1,clicks:0}),Zt=$e({});let Pm=[],Om=[];ws(Zt,"$syncUp",!0);ws(Zt,"$syncDown",!0);ws(Zt,"$paused",!1);ws(Zt,"$onSet",s=>Pm.push(s));ws(Zt,"$onPatch",s=>Om.push(s));ws(Zt,"$patch",async()=>!1);const{init:$m,onPatch:Fm,patch:du,state:el}=yu(Zt,{},!1),Nm="modulepreload",Im=function(s){return"/kaigionrails-postgresql-as-seen-by-rubyists/"+s},Oi={},Jt=function(t,n,o){if(!n||n.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=Im(r),r in Oi)return;Oi[r]=!0;const a=r.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!o)for(let y=l.length-1;y>=0;y--){const d=l[y];if(d.href===r&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Nm,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((y,d)=>{u.addEventListener("load",y),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function Ps(s){var t;const n=Ve(s);return(t=n==null?void 0:n.$el)!=null?t:n}const ls=Ns?window:void 0,ha=Ns?window.document:void 0,Mm=Ns?window.navigator:void 0;function ue(...s){let t,n,o,l;if(su(s[0])||Array.isArray(s[0])?([n,o,l]=s,t=ls):[t,n,o,l]=s,!t)return hn;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(y=>y()),r.length=0},c=(y,d,f)=>(y.addEventListener(d,f,l),()=>y.removeEventListener(d,f,l)),p=he(()=>Ps(t),y=>{a(),y&&r.push(...n.flatMap(d=>o.map(f=>c(y,d,f))))},{immediate:!0,flush:"post"}),u=()=>{p(),a()};return Ks(u),u}function Um(s,t,n={}){const{window:o=ls,ignore:l,capture:r=!0,detectIframe:a=!1}=n;if(!o)return;const c=H(!0);let p;const u=m=>{o.clearTimeout(p);const h=Ps(s);!h||h===m.target||m.composedPath().includes(h)||!c.value||t(m)},y=m=>l&&l.some(h=>{const A=Ps(h);return A&&(m.target===A||m.composedPath().includes(A))}),d=[ue(o,"click",u,{passive:!0,capture:r}),ue(o,"pointerdown",m=>{const h=Ps(s);c.value=!!h&&!m.composedPath().includes(h)&&!y(m)},{passive:!0}),ue(o,"pointerup",m=>{if(m.button===0){const h=m.composedPath();m.composedPath=()=>h,p=o.setTimeout(()=>u(m),50)}},{passive:!0}),a&&ue(o,"blur",m=>{var h;const A=Ps(s);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(A!=null&&A.contains(o.document.activeElement))&&t(m)})].filter(Boolean);return()=>d.forEach(m=>m())}const qm=s=>typeof s=="function"?s:typeof s=="string"?t=>t.key===s:Array.isArray(s)?t=>s.includes(t.key):()=>!0;function zm(...s){let t,n,o={};s.length===3?(t=s[0],n=s[1],o=s[2]):s.length===2?typeof s[1]=="object"?(t=!0,n=s[0],o=s[1]):(t=s[0],n=s[1]):(t=!0,n=s[0]);const{target:l=ls,eventName:r="keydown",passive:a=!1}=o,c=qm(t);return ue(l,r,u=>{c(u)&&n(u)},a)}function jm(s={}){const{window:t=ls}=s,n=Uh(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(ue(t,"blur",n.trigger,!0),ue(t,"focus",n.trigger,!0)),n}function _o(s,t=!1){const n=H(),o=()=>n.value=Boolean(s());return o(),Cl(o,t),n}function ln(s,t={}){const{window:n=ls}=t,o=_o(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let l;const r=H(!1),a=()=>{!l||("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{!o.value||(a(),l=n.matchMedia(nu(s).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",c):l.addListener(c))};return En(c),Ks(()=>a()),r}const Hm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Qm=Object.defineProperty,$i=Object.getOwnPropertySymbols,Vm=Object.prototype.hasOwnProperty,Jm=Object.prototype.propertyIsEnumerable,Fi=(s,t,n)=>t in s?Qm(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,Wm=(s,t)=>{for(var n in t||(t={}))Vm.call(t,n)&&Fi(s,n,t[n]);if($i)for(var n of $i(t))Jm.call(t,n)&&Fi(s,n,t[n]);return s};function Gm(s,t={}){function n(c,p){let u=s[c];return p!=null&&(u=Mh(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=ls}=t;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>ln(`(min-width: ${n(c)})`,t),a=Object.keys(s).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return Wm({greater(c){return ln(`(min-width: ${n(c,.1)})`,t)},greaterOrEqual:r,smaller(c){return ln(`(max-width: ${n(c,-.1)})`,t)},smallerOrEqual(c){return ln(`(max-width: ${n(c)})`,t)},between(c,p){return ln(`(min-width: ${n(c)}) and (max-width: ${n(p,-.1)})`,t)},isGreater(c){return l(`(min-width: ${n(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${n(c)})`)},isSmaller(c){return l(`(max-width: ${n(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${n(c)})`)},isInBetween(c,p){return l(`(min-width: ${n(c)}) and (max-width: ${n(p,-.1)})`)}},a)}function Ym(s={}){const{navigator:t=Mm,read:n=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=s,a=["copy","cut"],c=_o(()=>t&&"clipboard"in t),p=T(()=>c.value||r),u=H(""),y=H(!1),d=Kh(()=>y.value=!1,l);function f(){c.value?t.clipboard.readText().then(b=>{u.value=b}):u.value=A()}if(p.value&&n)for(const b of a)ue(b,f);async function m(b=Ve(o)){p.value&&b!=null&&(c.value?await t.clipboard.writeText(b):h(b),u.value=b,y.value=!0,d.start())}function h(b){const B=document.createElement("textarea");B.value=b!=null?b:"",B.style.position="absolute",B.style.opacity="0",document.body.appendChild(B),B.select(),document.execCommand("copy"),B.remove()}function A(){var b,B,w;return(w=(B=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:B.toString())!=null?w:""}return{isSupported:p,text:u,copied:y,copy:m}}function Km(s){return JSON.parse(JSON.stringify(s))}const Ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vr="__vueuse_ssr_handlers__";Ar[vr]=Ar[vr]||{};const Zm=Ar[vr];function Xm(s,t){return Zm[s]||t}function e1(s){return s==null?"any":s instanceof Set?"set":s instanceof Map?"map":s instanceof Date?"date":typeof s=="boolean"?"boolean":typeof s=="string"?"string":typeof s=="object"?"object":Number.isNaN(s)?"any":"number"}var s1=Object.defineProperty,Ni=Object.getOwnPropertySymbols,t1=Object.prototype.hasOwnProperty,n1=Object.prototype.propertyIsEnumerable,Ii=(s,t,n)=>t in s?s1(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,Mi=(s,t)=>{for(var n in t||(t={}))t1.call(t,n)&&Ii(s,n,t[n]);if(Ni)for(var n of Ni(t))n1.call(t,n)&&Ii(s,n,t[n]);return s};const o1={boolean:{read:s=>s==="true",write:s=>String(s)},object:{read:s=>JSON.parse(s),write:s=>JSON.stringify(s)},number:{read:s=>Number.parseFloat(s),write:s=>String(s)},any:{read:s=>s,write:s=>String(s)},string:{read:s=>s,write:s=>String(s)},map:{read:s=>new Map(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s.entries()))},set:{read:s=>new Set(JSON.parse(s)),write:s=>JSON.stringify(Array.from(s))},date:{read:s=>new Date(s),write:s=>s.toISOString()}};function Ms(s,t,n,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:y,window:d=ls,eventFilter:f,onError:m=P=>{console.error(P)}}=o,h=(y?Ys:H)(t);if(!n)try{n=Xm("getDefaultStorage",()=>{var P;return(P=ls)==null?void 0:P.localStorage})()}catch(P){m(P)}if(!n)return h;const A=Ve(t),b=e1(A),B=(l=o.serializer)!=null?l:o1[b],{pause:w,resume:C}=im(h,()=>x(h.value),{flush:r,deep:a,eventFilter:f});return d&&c&&ue(d,"storage",M),M(),h;function x(P){try{P==null?n.removeItem(s):n.setItem(s,B.write(P))}catch(G){m(G)}}function N(P){w();try{const G=P?P.newValue:n.getItem(s);if(G==null)return p&&A!==null&&n.setItem(s,B.write(A)),A;if(!P&&u){const re=B.read(G);return Zo(u)?u(re,A):b==="object"&&!Array.isArray(re)?Mi(Mi({},A),re):re}else return typeof G!="string"?G:B.read(G)}catch(G){m(G)}finally{C()}}function M(P){if(!(P&&P.storageArea!==n)){if(P&&P.key===null){h.value=A;return}P&&P.key!==s||(h.value=N(P))}}}function l1(s){return ln("(prefers-color-scheme: dark)",s)}var r1=Object.defineProperty,a1=Object.defineProperties,i1=Object.getOwnPropertyDescriptors,Ui=Object.getOwnPropertySymbols,c1=Object.prototype.hasOwnProperty,p1=Object.prototype.propertyIsEnumerable,qi=(s,t,n)=>t in s?r1(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,u1=(s,t)=>{for(var n in t||(t={}))c1.call(t,n)&&qi(s,n,t[n]);if(Ui)for(var n of Ui(t))p1.call(t,n)&&qi(s,n,t[n]);return s},y1=(s,t)=>a1(s,i1(t));function gw(s,t={}){var n,o,l;const r=(n=t.draggingElement)!=null?n:ls,a=(o=t.handle)!=null?o:s,c=H((l=Ve(t.initialValue))!=null?l:{x:0,y:0}),p=H(),u=h=>t.pointerTypes?t.pointerTypes.includes(h.pointerType):!0,y=h=>{Ve(t.preventDefault)&&h.preventDefault(),Ve(t.stopPropagation)&&h.stopPropagation()},d=h=>{var A;if(!u(h)||Ve(t.exact)&&h.target!==Ve(s))return;const b=Ve(s).getBoundingClientRect(),B={x:h.pageX-b.left,y:h.pageY-b.top};((A=t.onStart)==null?void 0:A.call(t,B,h))!==!1&&(p.value=B,y(h))},f=h=>{var A;!u(h)||!p.value||(c.value={x:h.pageX-p.value.x,y:h.pageY-p.value.y},(A=t.onMove)==null||A.call(t,c.value,h),y(h))},m=h=>{var A;!u(h)||!p.value||(p.value=void 0,(A=t.onEnd)==null||A.call(t,c.value,h),y(h))};return Ns&&(ue(a,"pointerdown",d,!0),ue(r,"pointermove",f,!0),ue(r,"pointerup",m,!0)),y1(u1({},Gh(c)),{position:c,isDragging:T(()=>!!p.value),style:T(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var zi=Object.getOwnPropertySymbols,d1=Object.prototype.hasOwnProperty,f1=Object.prototype.propertyIsEnumerable,h1=(s,t)=>{var n={};for(var o in s)d1.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&zi)for(var o of zi(s))t.indexOf(o)<0&&f1.call(s,o)&&(n[o]=s[o]);return n};function m1(s,t,n={}){const o=n,{window:l=ls}=o,r=h1(o,["window"]);let a;const c=_o(()=>l&&"ResizeObserver"in l),p=()=>{a&&(a.disconnect(),a=void 0)},u=he(()=>Ps(s),d=>{p(),c.value&&l&&d&&(a=new ResizeObserver(t),a.observe(d,r))},{immediate:!0,flush:"post"}),y=()=>{p(),u()};return Ks(y),{isSupported:c,stop:y}}function g1(s,t={}){const{immediate:n=!0,window:o=ls}=t,l=H(!1);let r=null;function a(){!l.value||!o||(s(),r=o.requestAnimationFrame(a))}function c(){!l.value&&o&&(l.value=!0,a())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return n&&c(),Ks(p),{isActive:l,pause:p,resume:c}}function _1(s,t={width:0,height:0},n={}){const{box:o="content-box"}=n,l=H(t.width),r=H(t.height);return m1(s,([a])=>{const c=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;c?(l.value=c.reduce((p,{inlineSize:u})=>p+u,0),r.value=c.reduce((p,{blockSize:u})=>p+u,0)):(l.value=a.contentRect.width,r.value=a.contentRect.height)},n),he(()=>Ps(s),a=>{l.value=a?t.width:0,r.value=a?t.height:0}),{width:l,height:r}}const ji=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function A1(s,t={}){const{document:n=ha,autoExit:o=!1}=t,l=s||(n==null?void 0:n.querySelector("html")),r=H(!1);let a=ji[0];const c=_o(()=>{if(n){for(const A of ji)if(A[1]in n)return a=A,!0}else return!1;return!1}),[p,u,y,,d]=a;async function f(){!c.value||(n!=null&&n[y]&&await n[u](),r.value=!1)}async function m(){if(!c.value)return;await f();const A=Ps(l);A&&(await A[p](),r.value=!0)}async function h(){r.value?await f():await m()}return n&&ue(n,d,()=>{r.value=!!(n!=null&&n[y])},!1),o&&Ks(f),{isSupported:c,isFullscreen:r,enter:m,exit:f,toggle:h}}function v1(s,t,n={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=ls}=n,c=_o(()=>a&&"IntersectionObserver"in a);let p=hn;const u=c.value?he(()=>({el:Ps(s),root:Ps(o)}),({el:d,root:f})=>{if(p(),!d)return;const m=new IntersectionObserver(t,{root:f,rootMargin:l,threshold:r});m.observe(d),p=()=>{m.disconnect(),p=hn}},{immediate:!0,flush:"post"}):hn,y=()=>{p(),u()};return Ks(y),{isSupported:c,stop:y}}const b1={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function D1(s={}){const{reactive:t=!1,target:n=ls,aliasMap:o=b1,passive:l=!0,onEventFired:r=hn}=s,a=$e(new Set),c={toJSON(){return{}},current:a},p=t?$e(c):c,u=new Set,y=new Set;function d(A,b){A in p&&(t?p[A]=b:p[A].value=b)}function f(){for(const A of y)d(A,!1)}function m(A,b){var B,w;const C=(B=A.key)==null?void 0:B.toLowerCase(),N=[(w=A.code)==null?void 0:w.toLowerCase(),C].filter(Boolean);C&&(b?a.add(C):a.delete(C));for(const M of N)y.add(M),d(M,b);C==="meta"&&!b?(u.forEach(M=>{a.delete(M),d(M,!1)}),u.clear()):typeof A.getModifierState=="function"&&A.getModifierState("Meta")&&b&&[...a,...N].forEach(M=>u.add(M))}ue(n,"keydown",A=>(m(A,!0),r(A)),{passive:l}),ue(n,"keyup",A=>(m(A,!1),r(A)),{passive:l}),ue("blur",f,{passive:!0}),ue("focus",f,{passive:!0});const h=new Proxy(p,{get(A,b,B){if(typeof b!="string")return Reflect.get(A,b,B);if(b=b.toLowerCase(),b in o&&(b=o[b]),!(b in p))if(/[+_-]/.test(b)){const C=b.split(/[+_-]/g).map(x=>x.trim());p[b]=T(()=>C.every(x=>E(h[x])))}else p[b]=H(!1);const w=Reflect.get(A,b,B);return t?E(w):w}});return h}function _w(s={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=ls,eventFilter:a}=s,c=H(l.x),p=H(l.y),u=H(null),y=A=>{t==="page"?(c.value=A.pageX,p.value=A.pageY):t==="client"&&(c.value=A.clientX,p.value=A.clientY),u.value="mouse"},d=()=>{c.value=l.x,p.value=l.y},f=A=>{if(A.touches.length>0){const b=A.touches[0];t==="page"?(c.value=b.pageX,p.value=b.pageY):t==="client"&&(c.value=b.clientX,p.value=b.clientY),u.value="touch"}},m=A=>a===void 0?y(A):a(()=>y(A),{}),h=A=>a===void 0?f(A):a(()=>f(A),{});return r&&(ue(r,"mousemove",m,{passive:!0}),ue(r,"dragover",m,{passive:!0}),n&&(ue(r,"touchstart",h,{passive:!0}),ue(r,"touchmove",h,{passive:!0}),o&&ue(r,"touchend",d,{passive:!0}))),{x:c,y:p,sourceType:u}}var tt;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(tt||(tt={}));function B1(s,t={}){const n=nu(s),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=t,c=$e({x:0,y:0}),p=(M,P)=>{c.x=M,c.y=P},u=$e({x:0,y:0}),y=(M,P)=>{u.x=M,u.y=P},d=T(()=>c.x-u.x),f=T(()=>c.y-u.y),{max:m,abs:h}=Math,A=T(()=>m(h(d.value),h(f.value))>=o),b=H(!1),B=H(!1),w=T(()=>A.value?h(d.value)>h(f.value)?d.value>0?tt.LEFT:tt.RIGHT:f.value>0?tt.UP:tt.DOWN:tt.NONE),C=M=>{var P,G,re;const de=M.buttons===0,ve=M.buttons===1;return(re=(G=(P=t.pointerTypes)==null?void 0:P.includes(M.pointerType))!=null?G:de||ve)!=null?re:!0},x=[ue(s,"pointerdown",M=>{var P,G;if(!C(M))return;B.value=!0,(G=(P=n.value)==null?void 0:P.style)==null||G.setProperty("touch-action","none");const re=M.target;re==null||re.setPointerCapture(M.pointerId);const{clientX:de,clientY:ve}=M;p(de,ve),y(de,ve),a==null||a(M)}),ue(s,"pointermove",M=>{if(!C(M)||!B.value)return;const{clientX:P,clientY:G}=M;y(P,G),!b.value&&A.value&&(b.value=!0),b.value&&(l==null||l(M))}),ue(s,"pointerup",M=>{var P,G;!C(M)||(b.value&&(r==null||r(M,w.value)),B.value=!1,b.value=!1,(G=(P=n.value)==null?void 0:P.style)==null||G.setProperty("touch-action","initial"))})],N=()=>x.forEach(M=>M());return{isSwiping:Mt(b),direction:Mt(w),posStart:Mt(c),posEnd:Mt(u),distanceX:d,distanceY:f,stop:N}}function C1(s,t=hn,n={}){const{immediate:o=!0,manual:l=!1,type:r="text/javascript",async:a=!0,crossOrigin:c,referrerPolicy:p,noModule:u,defer:y,document:d=ha,attrs:f={}}=n,m=H(null);let h=null;const A=w=>new Promise((C,x)=>{const N=G=>(m.value=G,C(G),G);if(!d){C(!1);return}let M=!1,P=d.querySelector(`script[src="${Ve(s)}"]`);P?P.hasAttribute("data-loaded")&&N(P):(P=d.createElement("script"),P.type=r,P.async=a,P.src=Ve(s),y&&(P.defer=y),c&&(P.crossOrigin=c),u&&(P.noModule=u),p&&(P.referrerPolicy=p),Object.entries(f).forEach(([G,re])=>P==null?void 0:P.setAttribute(G,re)),M=!0),P.addEventListener("error",G=>x(G)),P.addEventListener("abort",G=>x(G)),P.addEventListener("load",()=>{P.setAttribute("data-loaded","true"),t(P),N(P)}),M&&(P=d.head.appendChild(P)),w||N(P)}),b=(w=!0)=>(h||(h=A(w)),h),B=()=>{if(!d)return;h=null,m.value&&(m.value=null);const w=d.querySelector(`script[src="${Ve(s)}"]`);w&&d.head.removeChild(w)};return o&&!l&&Cl(b),l||ou(B),{scriptTag:m,load:b,unload:B}}let E1=0;function Aw(s,t={}){const n=H(!1),{document:o=ha,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++E1}`}=t,c=H(s);let p=()=>{};const u=()=>{if(!o)return;const d=o.getElementById(a)||o.createElement("style");d.type="text/css",d.id=a,t.media&&(d.media=t.media),o.head.appendChild(d),!n.value&&(p=he(c,f=>{d.innerText=f},{immediate:!0}),n.value=!0)},y=()=>{!o||!n.value||(p(),o.head.removeChild(o.getElementById(a)),n.value=!1)};return l&&!r&&Cl(u),r||Ks(y),{id:a,css:c,unload:y,load:u,isLoaded:Mt(n)}}var w1=Object.defineProperty,Hi=Object.getOwnPropertySymbols,k1=Object.prototype.hasOwnProperty,S1=Object.prototype.propertyIsEnumerable,Qi=(s,t,n)=>t in s?w1(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,x1=(s,t)=>{for(var n in t||(t={}))k1.call(t,n)&&Qi(s,n,t[n]);if(Hi)for(var n of Hi(t))S1.call(t,n)&&Qi(s,n,t[n]);return s};function vw(s={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=s,a=H(hr()+n),c=()=>a.value=hr()+n,p=r?()=>{c(),r(a.value)}:c,u=l==="requestAnimationFrame"?g1(p,{immediate:o}):Yh(p,l,{immediate:o});return t?x1({timestamp:a},u):a}var T1=Object.defineProperty,Vi=Object.getOwnPropertySymbols,L1=Object.prototype.hasOwnProperty,R1=Object.prototype.propertyIsEnumerable,Ji=(s,t,n)=>t in s?T1(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,P1=(s,t)=>{for(var n in t||(t={}))L1.call(t,n)&&Ji(s,n,t[n]);if(Vi)for(var n of Vi(t))R1.call(t,n)&&Ji(s,n,t[n]);return s};const O1={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};P1({linear:Ih},O1);function Vs(s,t,n,o={}){var l,r,a;const{clone:c=!1,passive:p=!1,eventName:u,deep:y=!1,defaultValue:d}=o,f=Et(),m=n||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((a=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(f==null?void 0:f.proxy));let h=u;t||(t="modelValue"),h=u||h||`update:${t.toString()}`;const A=B=>c?Zo(c)?c(B):Km(B):B,b=()=>Ph(s[t])?A(s[t]):d;if(p){const B=b(),w=H(B);return he(()=>s[t],C=>w.value=A(C)),he(w,C=>{(C!==s[t]||y)&&m(h,C)},{deep:y}),w}else return T({get(){return b()},set(B){m(h,B)}})}function bw({window:s=ls}={}){if(!s)return H(!1);const t=H(s.document.hasFocus());return ue(s,"blur",()=>{t.value=!1}),ue(s,"focus",()=>{t.value=!0}),t}function $1(s={}){const{window:t=ls,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=s,a=H(n),c=H(o),p=()=>{t&&(r?(a.value=t.innerWidth,c.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return p(),Cl(p),ue("resize",p,{passive:!0}),l&&ue("orientationchange",p,{passive:!0}),{width:a,height:c}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof window<"u";function F1(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const we=Object.assign;function Ul(s,t){const n={};for(const o in t){const l=t[o];n[o]=Is(l)?l.map(s):s(l)}return n}const Jn=()=>{},Is=Array.isArray,N1=/\/$/,I1=s=>s.replace(N1,"");function ql(s,t,n="/"){let o,l={},r="",a="";const c=t.indexOf("#");let p=t.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(o=t.slice(0,p),r=t.slice(p+1,c>-1?c:t.length),l=s(r)),c>-1&&(o=o||t.slice(0,c),a=t.slice(c,t.length)),o=z1(o!=null?o:t,n),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function M1(s,t){const n=t.query?s(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Wi(s,t){return!t||!s.toLowerCase().startsWith(t.toLowerCase())?s:s.slice(t.length)||"/"}function U1(s,t,n){const o=t.matched.length-1,l=n.matched.length-1;return o>-1&&o===l&&Dn(t.matched[o],n.matched[l])&&fu(t.params,n.params)&&s(t.query)===s(n.query)&&t.hash===n.hash}function Dn(s,t){return(s.aliasOf||s)===(t.aliasOf||t)}function fu(s,t){if(Object.keys(s).length!==Object.keys(t).length)return!1;for(const n in s)if(!q1(s[n],t[n]))return!1;return!0}function q1(s,t){return Is(s)?Gi(s,t):Is(t)?Gi(t,s):s===t}function Gi(s,t){return Is(t)?s.length===t.length&&s.every((n,o)=>n===t[o]):s.length===1&&s[0]===t}function z1(s,t){if(s.startsWith("/"))return s;if(!s)return t;const n=t.split("/"),o=s.split("/");let l=n.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var ao;(function(s){s.pop="pop",s.push="push"})(ao||(ao={}));var Wn;(function(s){s.back="back",s.forward="forward",s.unknown=""})(Wn||(Wn={}));function j1(s){if(!s)if(rn){const t=document.querySelector("base");s=t&&t.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),I1(s)}const H1=/^[^#]+#/;function Q1(s,t){return s.replace(H1,"#")+t}function V1(s,t){const n=document.documentElement.getBoundingClientRect(),o=s.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const El=()=>({left:window.pageXOffset,top:window.pageYOffset});function J1(s){let t;if("el"in s){const n=s.el,o=typeof n=="string"&&n.startsWith("#"),l=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=V1(l,s)}else t=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Yi(s,t){return(history.state?history.state.position-t:-1)+s}const br=new Map;function W1(s,t){br.set(s,t)}function G1(s){const t=br.get(s);return br.delete(s),t}let Y1=()=>location.protocol+"//"+location.host;function hu(s,t){const{pathname:n,search:o,hash:l}=t,r=s.indexOf("#");if(r>-1){let c=l.includes(s.slice(r))?s.slice(r).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),Wi(p,"")}return Wi(n,s)+o+l}function K1(s,t,n,o){let l=[],r=[],a=null;const c=({state:f})=>{const m=hu(s,location),h=n.value,A=t.value;let b=0;if(f){if(n.value=m,t.value=f,a&&a===h){a=null;return}b=A?f.position-A.position:0}else o(m);l.forEach(B=>{B(n.value,h,{delta:b,type:ao.pop,direction:b?b>0?Wn.forward:Wn.back:Wn.unknown})})};function p(){a=n.value}function u(f){l.push(f);const m=()=>{const h=l.indexOf(f);h>-1&&l.splice(h,1)};return r.push(m),m}function y(){const{history:f}=window;!f.state||f.replaceState(we({},f.state,{scroll:El()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",y),{pauseListeners:p,listen:u,destroy:d}}function Ki(s,t,n,o=!1,l=!1){return{back:s,current:t,forward:n,replaced:o,position:window.history.length,scroll:l?El():null}}function Z1(s){const{history:t,location:n}=window,o={value:hu(s,n)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(p,u,y){const d=s.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?s:s.slice(d))+p:Y1()+s+p;try{t[y?"replaceState":"pushState"](u,"",f),l.value=u}catch(m){console.error(m),n[y?"replace":"assign"](f)}}function a(p,u){const y=we({},t.state,Ki(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,y,!0),o.value=p}function c(p,u){const y=we({},l.value,t.state,{forward:p,scroll:El()});r(y.current,y,!0);const d=we({},Ki(o.value,p,null),{position:y.position+1},u);r(p,d,!1),o.value=p}return{location:o,state:l,push:c,replace:a}}function X1(s){s=j1(s);const t=Z1(s),n=K1(s,t.state,t.location,t.replace);function o(r,a=!0){a||n.pauseListeners(),history.go(r)}const l=we({location:"",base:s,go:o,createHref:Q1.bind(null,s)},t,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function eg(s){return typeof s=="string"||s&&typeof s=="object"}function mu(s){return typeof s=="string"||typeof s=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gu=Symbol("");var Zi;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Zi||(Zi={}));function Bn(s,t){return we(new Error,{type:s,[gu]:!0},t)}function Zs(s,t){return s instanceof Error&&gu in s&&(t==null||!!(s.type&t))}const Xi="[^/]+?",sg={sensitive:!1,strict:!1,start:!0,end:!0},tg=/[.+*?^${}()[\]/\\]/g;function ng(s,t){const n=we({},sg,t),o=[];let l=n.start?"^":"";const r=[];for(const u of s){const y=u.length?[]:[90];n.strict&&!u.length&&(l+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(l+="/"),l+=f.value.replace(tg,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:A,optional:b,regexp:B}=f;r.push({name:h,repeatable:A,optional:b});const w=B||Xi;if(w!==Xi){m+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${h}" (${w}): `+x.message)}}let C=A?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(C=b&&u.length<2?`(?:/${C})`:"/"+C),b&&(C+="?"),l+=C,m+=20,b&&(m+=-8),A&&(m+=-20),w===".*"&&(m+=-50)}y.push(m)}o.push(y)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const a=new RegExp(l,n.sensitive?"":"i");function c(u){const y=u.match(a),d={};if(!y)return null;for(let f=1;f<y.length;f++){const m=y[f]||"",h=r[f-1];d[h.name]=m&&h.repeatable?m.split("/"):m}return d}function p(u){let y="",d=!1;for(const f of s){(!d||!y.endsWith("/"))&&(y+="/"),d=!1;for(const m of f)if(m.type===0)y+=m.value;else if(m.type===1){const{value:h,repeatable:A,optional:b}=m,B=h in u?u[h]:"";if(Is(B)&&!A)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const w=Is(B)?B.join("/"):B;if(!w)if(b)f.length<2&&(y.endsWith("/")?y=y.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);y+=w}}return y||"/"}return{re:a,score:o,keys:r,parse:c,stringify:p}}function og(s,t){let n=0;for(;n<s.length&&n<t.length;){const o=t[n]-s[n];if(o)return o;n++}return s.length<t.length?s.length===1&&s[0]===40+40?-1:1:s.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function lg(s,t){let n=0;const o=s.score,l=t.score;for(;n<o.length&&n<l.length;){const r=og(o[n],l[n]);if(r)return r;n++}if(Math.abs(l.length-o.length)===1){if(ec(o))return 1;if(ec(l))return-1}return l.length-o.length}function ec(s){const t=s[s.length-1];return s.length>0&&t[t.length-1]<0}const rg={type:0,value:""},ag=/[a-zA-Z0-9_]/;function ig(s){if(!s)return[[]];if(s==="/")return[[rg]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const l=[];let r;function a(){r&&l.push(r),r=[]}let c=0,p,u="",y="";function d(){!u||(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(p==="*"||p==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:y,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;c<s.length;){if(p=s[c++],p==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:p==="/"?(u&&d(),a()):p===":"?(d(),n=1):f();break;case 4:f(),n=o;break;case 1:p==="("?n=2:ag.test(p)?f():(d(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+p:n=3:y+=p;break;case 3:d(),n=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,y="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),l}function cg(s,t,n){const o=ng(ig(s.path),n),l=we(o,{record:s,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function pg(s,t){const n=[],o=new Map;t=nc({strict:!1,end:!0,sensitive:!1},t);function l(y){return o.get(y)}function r(y,d,f){const m=!f,h=ug(y);h.aliasOf=f&&f.record;const A=nc(t,y),b=[h];if("alias"in y){const C=typeof y.alias=="string"?[y.alias]:y.alias;for(const x of C)b.push(we({},h,{components:f?f.record.components:h.components,path:x,aliasOf:f?f.record:h}))}let B,w;for(const C of b){const{path:x}=C;if(d&&x[0]!=="/"){const N=d.record.path,M=N[N.length-1]==="/"?"":"/";C.path=d.record.path+(x&&M+x)}if(B=cg(C,d,A),f?f.alias.push(B):(w=w||B,w!==B&&w.alias.push(B),m&&y.name&&!tc(B)&&a(y.name)),h.children){const N=h.children;for(let M=0;M<N.length;M++)r(N[M],B,f&&f.children[M])}f=f||B,(B.record.components&&Object.keys(B.record.components).length||B.record.name||B.record.redirect)&&p(B)}return w?()=>{a(w)}:Jn}function a(y){if(mu(y)){const d=o.get(y);d&&(o.delete(y),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(y);d>-1&&(n.splice(d,1),y.record.name&&o.delete(y.record.name),y.children.forEach(a),y.alias.forEach(a))}}function c(){return n}function p(y){let d=0;for(;d<n.length&&lg(y,n[d])>=0&&(y.record.path!==n[d].record.path||!_u(y,n[d]));)d++;n.splice(d,0,y),y.record.name&&!tc(y)&&o.set(y.record.name,y)}function u(y,d){let f,m={},h,A;if("name"in y&&y.name){if(f=o.get(y.name),!f)throw Bn(1,{location:y});A=f.record.name,m=we(sc(d.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),y.params&&sc(y.params,f.keys.map(w=>w.name))),h=f.stringify(m)}else if("path"in y)h=y.path,f=n.find(w=>w.re.test(h)),f&&(m=f.parse(h),A=f.record.name);else{if(f=d.name?o.get(d.name):n.find(w=>w.re.test(d.path)),!f)throw Bn(1,{location:y,currentLocation:d});A=f.record.name,m=we({},d.params,y.params),h=f.stringify(m)}const b=[];let B=f;for(;B;)b.unshift(B.record),B=B.parent;return{name:A,path:h,params:m,matched:b,meta:dg(b)}}return s.forEach(y=>r(y)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:c,getRecordMatcher:l}}function sc(s,t){const n={};for(const o of t)o in s&&(n[o]=s[o]);return n}function ug(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:yg(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function yg(s){const t={},n=s.props||!1;if("component"in s)t.default=n;else for(const o in s.components)t[o]=typeof n=="boolean"?n:n[o];return t}function tc(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function dg(s){return s.reduce((t,n)=>we(t,n.meta),{})}function nc(s,t){const n={};for(const o in s)n[o]=o in t?t[o]:s[o];return n}function _u(s,t){return t.children.some(n=>n===s||_u(s,n))}const Au=/#/g,fg=/&/g,hg=/\//g,mg=/=/g,gg=/\?/g,vu=/\+/g,_g=/%5B/g,Ag=/%5D/g,bu=/%5E/g,vg=/%60/g,Du=/%7B/g,bg=/%7C/g,Bu=/%7D/g,Dg=/%20/g;function ma(s){return encodeURI(""+s).replace(bg,"|").replace(_g,"[").replace(Ag,"]")}function Bg(s){return ma(s).replace(Du,"{").replace(Bu,"}").replace(bu,"^")}function Dr(s){return ma(s).replace(vu,"%2B").replace(Dg,"+").replace(Au,"%23").replace(fg,"%26").replace(vg,"`").replace(Du,"{").replace(Bu,"}").replace(bu,"^")}function Cg(s){return Dr(s).replace(mg,"%3D")}function Eg(s){return ma(s).replace(Au,"%23").replace(gg,"%3F")}function wg(s){return s==null?"":Eg(s).replace(hg,"%2F")}function sl(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function kg(s){const t={};if(s===""||s==="?")return t;const o=(s[0]==="?"?s.slice(1):s).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(vu," "),a=r.indexOf("="),c=sl(a<0?r:r.slice(0,a)),p=a<0?null:sl(r.slice(a+1));if(c in t){let u=t[c];Is(u)||(u=t[c]=[u]),u.push(p)}else t[c]=p}return t}function oc(s){let t="";for(let n in s){const o=s[n];if(n=Cg(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Is(o)?o.map(r=>r&&Dr(r)):[o&&Dr(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Sg(s){const t={};for(const n in s){const o=s[n];o!==void 0&&(t[n]=Is(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const xg=Symbol(""),lc=Symbol(""),ga=Symbol(""),Cu=Symbol(""),Br=Symbol("");function Pn(){let s=[];function t(o){return s.push(o),()=>{const l=s.indexOf(o);l>-1&&s.splice(l,1)}}function n(){s=[]}return{add:t,list:()=>s,reset:n}}function mt(s,t,n,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,c)=>{const p=d=>{d===!1?c(Bn(4,{from:n,to:t})):d instanceof Error?c(d):eg(d)?c(Bn(2,{from:t,to:d})):(r&&o.enterCallbacks[l]===r&&typeof d=="function"&&r.push(d),a())},u=s.call(o&&o.instances[l],t,n,p);let y=Promise.resolve(u);s.length<3&&(y=y.then(p)),y.catch(d=>c(d))})}function zl(s,t,n,o){const l=[];for(const r of s)for(const a in r.components){let c=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(Tg(c)){const u=(c.__vccOpts||c)[t];u&&l.push(mt(u,n,o,r,a))}else{let p=c();l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const y=F1(u)?u.default:u;r.components[a]=y;const f=(y.__vccOpts||y)[t];return f&&mt(f,n,o,r,a)()}))}}return l}function Tg(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function rc(s){const t=O(ga),n=O(Cu),o=T(()=>t.resolve(E(s.to))),l=T(()=>{const{matched:p}=o.value,{length:u}=p,y=p[u-1],d=n.matched;if(!y||!d.length)return-1;const f=d.findIndex(Dn.bind(null,y));if(f>-1)return f;const m=ac(p[u-2]);return u>1&&ac(y)===m&&d[d.length-1].path!==m?d.findIndex(Dn.bind(null,p[u-2])):f}),r=T(()=>l.value>-1&&Og(n.params,o.value.params)),a=T(()=>l.value>-1&&l.value===n.matched.length-1&&fu(n.params,o.value.params));function c(p={}){return Pg(p)?t[E(s.replace)?"replace":"push"](E(s.to)).catch(Jn):Promise.resolve()}return{route:o,href:T(()=>o.value.href),isActive:r,isExactActive:a,navigate:c}}const Lg=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rc,setup(s,{slots:t}){const n=$e(rc(s)),{options:o}=O(ga),l=T(()=>({[ic(s.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[ic(s.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return s.custom?r:Ye("a",{"aria-current":n.isExactActive?s.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},r)}}}),Rg=Lg;function Pg(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const t=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return s.preventDefault&&s.preventDefault(),!0}}function Og(s,t){for(const n in t){const o=t[n],l=s[n];if(typeof o=="string"){if(o!==l)return!1}else if(!Is(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function ac(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const ic=(s,t,n)=>s!=null?s:t!=null?t:n,$g=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:t,slots:n}){const o=O(Br),l=T(()=>s.route||o.value),r=O(lc,0),a=T(()=>{let u=E(r);const{matched:y}=l.value;let d;for(;(d=y[u])&&!d.components;)u++;return u}),c=T(()=>l.value.matched[a.value]);_s(lc,T(()=>a.value+1)),_s(xg,c),_s(Br,l);const p=H();return he(()=>[p.value,c.value,s.name],([u,y,d],[f,m,h])=>{y&&(y.instances[d]=u,m&&m!==y&&u&&u===f&&(y.leaveGuards.size||(y.leaveGuards=m.leaveGuards),y.updateGuards.size||(y.updateGuards=m.updateGuards))),u&&y&&(!m||!Dn(y,m)||!f)&&(y.enterCallbacks[d]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=l.value,y=s.name,d=c.value,f=d&&d.components[y];if(!f)return cc(n.default,{Component:f,route:u});const m=d.props[y],h=m?m===!0?u.params:typeof m=="function"?m(u):m:null,b=Ye(f,we({},h,t,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(d.instances[y]=null)},ref:p}));return cc(n.default,{Component:b,route:u})||b}}});function cc(s,t){if(!s)return null;const n=s(t);return n.length===1?n[0]:n}const Fg=$g;function Ng(s){const t=pg(s.routes,s),n=s.parseQuery||kg,o=s.stringifyQuery||oc,l=s.history,r=Pn(),a=Pn(),c=Pn(),p=Ys(dt);let u=dt;rn&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=Ul.bind(null,R=>""+R),d=Ul.bind(null,wg),f=Ul.bind(null,sl);function m(R,J){let V,X;return mu(R)?(V=t.getRecordMatcher(R),X=J):X=R,t.addRoute(X,V)}function h(R){const J=t.getRecordMatcher(R);J&&t.removeRoute(J)}function A(){return t.getRoutes().map(R=>R.record)}function b(R){return!!t.getRecordMatcher(R)}function B(R,J){if(J=we({},J||p.value),typeof R=="string"){const g=ql(n,R,J.path),v=t.resolve({path:g.path},J),k=l.createHref(g.fullPath);return we(g,v,{params:f(v.params),hash:sl(g.hash),redirectedFrom:void 0,href:k})}let V;if("path"in R)V=we({},R,{path:ql(n,R.path,J.path).path});else{const g=we({},R.params);for(const v in g)g[v]==null&&delete g[v];V=we({},R,{params:d(R.params)}),J.params=d(J.params)}const X=t.resolve(V,J),ge=R.hash||"";X.params=y(f(X.params));const De=M1(o,we({},R,{hash:Bg(ge),path:X.path})),ie=l.createHref(De);return we({fullPath:De,hash:ge,query:o===oc?Sg(R.query):R.query||{}},X,{redirectedFrom:void 0,href:ie})}function w(R){return typeof R=="string"?ql(n,R,p.value.path):we({},R)}function C(R,J){if(u!==R)return Bn(8,{from:J,to:R})}function x(R){return P(R)}function N(R){return x(we(w(R),{replace:!0}))}function M(R){const J=R.matched[R.matched.length-1];if(J&&J.redirect){const{redirect:V}=J;let X=typeof V=="function"?V(R):V;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=w(X):{path:X},X.params={}),we({query:R.query,hash:R.hash,params:"path"in X?{}:R.params},X)}}function P(R,J){const V=u=B(R),X=p.value,ge=R.state,De=R.force,ie=R.replace===!0,g=M(V);if(g)return P(we(w(g),{state:typeof g=="object"?we({},ge,g.state):ge,force:De,replace:ie}),J||V);const v=V;v.redirectedFrom=J;let k;return!De&&U1(o,X,V)&&(k=Bn(16,{to:v,from:X}),Ee(X,X,!0,!1)),(k?Promise.resolve(k):re(v,X)).catch(L=>Zs(L)?Zs(L,2)?L:me(L):Y(L,v,X)).then(L=>{if(L){if(Zs(L,2))return P(we({replace:ie},w(L.to),{state:typeof L.to=="object"?we({},ge,L.to.state):ge,force:De}),J||v)}else L=ve(v,X,!0,ie,ge);return de(v,X,L),L})}function G(R,J){const V=C(R,J);return V?Promise.reject(V):Promise.resolve()}function re(R,J){let V;const[X,ge,De]=Ig(R,J);V=zl(X.reverse(),"beforeRouteLeave",R,J);for(const g of X)g.leaveGuards.forEach(v=>{V.push(mt(v,R,J))});const ie=G.bind(null,R,J);return V.push(ie),sn(V).then(()=>{V=[];for(const g of r.list())V.push(mt(g,R,J));return V.push(ie),sn(V)}).then(()=>{V=zl(ge,"beforeRouteUpdate",R,J);for(const g of ge)g.updateGuards.forEach(v=>{V.push(mt(v,R,J))});return V.push(ie),sn(V)}).then(()=>{V=[];for(const g of R.matched)if(g.beforeEnter&&!J.matched.includes(g))if(Is(g.beforeEnter))for(const v of g.beforeEnter)V.push(mt(v,R,J));else V.push(mt(g.beforeEnter,R,J));return V.push(ie),sn(V)}).then(()=>(R.matched.forEach(g=>g.enterCallbacks={}),V=zl(De,"beforeRouteEnter",R,J),V.push(ie),sn(V))).then(()=>{V=[];for(const g of a.list())V.push(mt(g,R,J));return V.push(ie),sn(V)}).catch(g=>Zs(g,8)?g:Promise.reject(g))}function de(R,J,V){for(const X of c.list())X(R,J,V)}function ve(R,J,V,X,ge){const De=C(R,J);if(De)return De;const ie=J===dt,g=rn?history.state:{};V&&(X||ie?l.replace(R.fullPath,we({scroll:ie&&g&&g.scroll},ge)):l.push(R.fullPath,ge)),p.value=R,Ee(R,J,V,ie),me()}let We;function He(){We||(We=l.listen((R,J,V)=>{if(!Xt.listening)return;const X=B(R),ge=M(X);if(ge){P(we(ge,{replace:!0}),X).catch(Jn);return}u=X;const De=p.value;rn&&W1(Yi(De.fullPath,V.delta),El()),re(X,De).catch(ie=>Zs(ie,12)?ie:Zs(ie,2)?(P(ie.to,X).then(g=>{Zs(g,20)&&!V.delta&&V.type===ao.pop&&l.go(-1,!1)}).catch(Jn),Promise.reject()):(V.delta&&l.go(-V.delta,!1),Y(ie,X,De))).then(ie=>{ie=ie||ve(X,De,!1),ie&&(V.delta&&!Zs(ie,8)?l.go(-V.delta,!1):V.type===ao.pop&&Zs(ie,20)&&l.go(-1,!1)),de(X,De,ie)}).catch(Jn)}))}let Ie=Pn(),Re=Pn(),Pe;function Y(R,J,V){me(R);const X=Re.list();return X.length?X.forEach(ge=>ge(R,J,V)):console.error(R),Promise.reject(R)}function oe(){return Pe&&p.value!==dt?Promise.resolve():new Promise((R,J)=>{Ie.add([R,J])})}function me(R){return Pe||(Pe=!R,He(),Ie.list().forEach(([J,V])=>R?V(R):J()),Ie.reset()),R}function Ee(R,J,V,X){const{scrollBehavior:ge}=s;if(!rn||!ge)return Promise.resolve();const De=!V&&G1(Yi(R.fullPath,0))||(X||!V)&&history.state&&history.state.scroll||null;return ts().then(()=>ge(R,J,De)).then(ie=>ie&&J1(ie)).catch(ie=>Y(ie,R,J))}const rs=R=>l.go(R);let qe;const ut=new Set,Xt={currentRoute:p,listening:!0,addRoute:m,removeRoute:h,hasRoute:b,getRoutes:A,resolve:B,options:s,push:x,replace:N,go:rs,back:()=>rs(-1),forward:()=>rs(1),beforeEach:r.add,beforeResolve:a.add,afterEach:c.add,onError:Re.add,isReady:oe,install(R){const J=this;R.component("RouterLink",Rg),R.component("RouterView",Fg),R.config.globalProperties.$router=J,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>E(p)}),rn&&!qe&&p.value===dt&&(qe=!0,x(l.location).catch(ge=>{}));const V={};for(const ge in dt)V[ge]=T(()=>p.value[ge]);R.provide(ga,J),R.provide(Cu,$e(V)),R.provide(Br,p);const X=R.unmount;ut.add(R),R.unmount=function(){ut.delete(R),ut.size<1&&(u=dt,We&&We(),We=null,p.value=dt,qe=!1,Pe=!1),X()}}};return Xt}function sn(s){return s.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Ig(s,t){const n=[],o=[],l=[],r=Math.max(t.matched.length,s.matched.length);for(let a=0;a<r;a++){const c=t.matched[a];c&&(s.matched.find(u=>Dn(u,c))?o.push(c):n.push(c));const p=s.matched[a];p&&(t.matched.find(u=>Dn(u,p))||l.push(p))}return[n,o,l]}const jl=H(!1),Gn=H(!1),an=H(!1),Mg=H(!0),Cr=Gm({xs:460,...Hm}),Qt=$1(),Eu=D1(),Ug=T(()=>Qt.height.value-Qt.width.value/At>180),wu=A1(Ns?document.body:null),mn=jm(),qg=T(()=>{var s,t;return["INPUT","TEXTAREA"].includes(((s=mn.value)==null?void 0:s.tagName)||"")||((t=mn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),zg=T(()=>{var s;return["BUTTON","A"].includes(((s=mn.value)==null?void 0:s.tagName)||"")});Ms("slidev-camera","default");Ms("slidev-mic","default");const Uo=Ms("slidev-scale",0),is=Ms("slidev-show-overview",!1),Hl=Ms("slidev-presenter-cursor",!0),pc=Ms("slidev-show-editor",!1);Ms("slidev-editor-width",Ns?window.innerWidth*.4:100);const ku=lu(is);function uc(s,t,n,o=l=>l){return s*o(.5-t*(.5-n))}function jg(s){return[-s[0],-s[1]]}function xs(s,t){return[s[0]+t[0],s[1]+t[1]]}function Es(s,t){return[s[0]-t[0],s[1]-t[1]]}function Ss(s,t){return[s[0]*t,s[1]*t]}function Hg(s,t){return[s[0]/t,s[1]/t]}function On(s){return[s[1],-s[0]]}function yc(s,t){return s[0]*t[0]+s[1]*t[1]}function Qg(s,t){return s[0]===t[0]&&s[1]===t[1]}function Vg(s){return Math.hypot(s[0],s[1])}function Jg(s){return s[0]*s[0]+s[1]*s[1]}function dc(s,t){return Jg(Es(s,t))}function Su(s){return Hg(s,Vg(s))}function Wg(s,t){return Math.hypot(s[1]-t[1],s[0]-t[0])}function $n(s,t,n){let o=Math.sin(n),l=Math.cos(n),r=s[0]-t[0],a=s[1]-t[1],c=r*l-a*o,p=r*o+a*l;return[c+t[0],p+t[1]]}function Er(s,t,n){return xs(s,Ss(Es(t,s),n))}function fc(s,t,n){return xs(s,Ss(t,n))}var{min:tn,PI:Gg}=Math,hc=.275,Fn=Gg+1e-4;function Yg(s,t={}){let{size:n=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=Y=>Y,start:c={},end:p={},last:u=!1}=t,{cap:y=!0,easing:d=Y=>Y*(2-Y)}=c,{cap:f=!0,easing:m=Y=>--Y*Y*Y+1}=p;if(s.length===0||n<=0)return[];let h=s[s.length-1].runningLength,A=c.taper===!1?0:c.taper===!0?Math.max(n,h):c.taper,b=p.taper===!1?0:p.taper===!0?Math.max(n,h):p.taper,B=Math.pow(n*o,2),w=[],C=[],x=s.slice(0,10).reduce((Y,oe)=>{let me=oe.pressure;if(r){let Ee=tn(1,oe.distance/n),rs=tn(1,1-Ee);me=tn(1,Y+(rs-Y)*(Ee*hc))}return(Y+me)/2},s[0].pressure),N=uc(n,l,s[s.length-1].pressure,a),M,P=s[0].vector,G=s[0].point,re=G,de=G,ve=re,We=!1;for(let Y=0;Y<s.length;Y++){let{pressure:oe}=s[Y],{point:me,vector:Ee,distance:rs,runningLength:qe}=s[Y];if(Y<s.length-1&&h-qe<3)continue;if(l){if(r){let De=tn(1,rs/n),ie=tn(1,1-De);oe=tn(1,x+(ie-x)*(De*hc))}N=uc(n,l,oe,a)}else N=n/2;M===void 0&&(M=N);let ut=qe<A?d(qe/A):1,Xt=h-qe<b?m((h-qe)/b):1;N=Math.max(.01,N*Math.min(ut,Xt));let R=(Y<s.length-1?s[Y+1]:s[Y]).vector,J=Y<s.length-1?yc(Ee,R):1,V=yc(Ee,P)<0&&!We,X=J!==null&&J<0;if(V||X){let De=Ss(On(P),N);for(let ie=1/13,g=0;g<=1;g+=ie)de=$n(Es(me,De),me,Fn*g),w.push(de),ve=$n(xs(me,De),me,Fn*-g),C.push(ve);G=de,re=ve,X&&(We=!0);continue}if(We=!1,Y===s.length-1){let De=Ss(On(Ee),N);w.push(Es(me,De)),C.push(xs(me,De));continue}let ge=Ss(On(Er(R,Ee,J)),N);de=Es(me,ge),(Y<=1||dc(G,de)>B)&&(w.push(de),G=de),ve=xs(me,ge),(Y<=1||dc(re,ve)>B)&&(C.push(ve),re=ve),x=oe,P=Ee}let He=s[0].point.slice(0,2),Ie=s.length>1?s[s.length-1].point.slice(0,2):xs(s[0].point,[1,1]),Re=[],Pe=[];if(s.length===1){if(!(A||b)||u){let Y=fc(He,Su(On(Es(He,Ie))),-(M||N)),oe=[];for(let me=1/13,Ee=me;Ee<=1;Ee+=me)oe.push($n(Y,He,Fn*2*Ee));return oe}}else{if(!(A||b&&s.length===1))if(y)for(let oe=1/13,me=oe;me<=1;me+=oe){let Ee=$n(C[0],He,Fn*me);Re.push(Ee)}else{let oe=Es(w[0],C[0]),me=Ss(oe,.5),Ee=Ss(oe,.51);Re.push(Es(He,me),Es(He,Ee),xs(He,Ee),xs(He,me))}let Y=On(jg(s[s.length-1].vector));if(b||A&&s.length===1)Pe.push(Ie);else if(f){let oe=fc(Ie,Y,N);for(let me=1/29,Ee=me;Ee<1;Ee+=me)Pe.push($n(oe,Ie,Fn*3*Ee))}else Pe.push(xs(Ie,Ss(Y,N)),xs(Ie,Ss(Y,N*.99)),Es(Ie,Ss(Y,N*.99)),Es(Ie,Ss(Y,N)))}return w.concat(Pe,C.reverse(),Re)}function Kg(s,t={}){var n;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(s.length===0)return[];let a=.15+(1-o)*.85,c=Array.isArray(s[0])?s:s.map(({x:m,y:h,pressure:A=.5})=>[m,h,A]);if(c.length===2){let m=c[1];c=c.slice(0,-1);for(let h=1;h<5;h++)c.push(Er(c[0],m,h/4))}c.length===1&&(c=[...c,[...xs(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,y=0,d=p[0],f=c.length-1;for(let m=1;m<c.length;m++){let h=r&&m===f?c[m].slice(0,2):Er(d.point,c[m],a);if(Qg(d.point,h))continue;let A=Wg(h,d.point);if(y+=A,m<f&&!u){if(y<l)continue;u=!0}d={point:h,pressure:c[m][2]>=0?c[m][2]:.5,vector:Su(Es(d.point,h)),distance:A,runningLength:y},p.push(d)}return p[0].vector=((n=p[1])==null?void 0:n.vector)||[0,0],p}function Zg(s,t={}){return Yg(Kg(s,t),t)}var Xg=()=>({events:{},emit(s,...t){let n=this.events[s]||[];for(let o=0,l=n.length;o<l;o++)n[o](...t)},on(s,t){var n;return(n=this.events[s])!=null&&n.push(t)||(this.events[s]=[t]),()=>{var o;this.events[s]=(o=this.events[s])==null?void 0:o.filter(l=>t!==l)}}});function tl(s,t){return s-t}function e3(s){return s<0?-1:1}function nl(s){return[Math.abs(s),e3(s)]}function xu(){const s=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${s()+s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`}var s3=2,st=s3,wn=class{constructor(s){this.drauu=s,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(s){}onUnselected(){}onStart(s){}onMove(s){return!1}onEnd(s){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(s){var l;var t;const n=this.drauu.el,o=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(s.pageX-r.left)*o,y:(s.pageY-r.top)*o,pressure:s.pressure}}else{const r=this.drauu.svgPoint;r.x=s.clientX,r.y=s.clientY;const a=r.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*o,y:a.y*o,pressure:s.pressure}}}createElement(s,t){var l;const n=document.createElementNS("http://www.w3.org/2000/svg",s),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(l=o.fill)!=null?l:"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(s,t){this.el.setAttribute(s,typeof t=="string"?t:t.toFixed(st))}_setEvent(s){this.event=s,this.point=this.getMousePosition(s)}_eventDown(s){return this._setEvent(s),this.start=this.point,this.onStart(this.point)}_eventMove(s){return this._setEvent(s),this.onMove(this.point)}_eventUp(s){return this._setEvent(s),this.onEnd(this.point)}},t3=class extends wn{constructor(){super(...arguments),this.points=[]}onStart(s){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[s],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&this.points.push(s),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!!s}getSvgData(s){const t=Zg(s,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[l,r],a,c)=>{const[p,u]=c[(a+1)%c.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},n3=class extends wn{onStart(s){return this.el=this.createElement("ellipse"),this.attr("cx",s.x),this.attr("cy",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,n]=nl(s.x-this.start.x),[o,l]=nl(s.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(tl),[c,p]=[this.start.y,this.start.y+o*l].sort(tl);this.attr("cx",(r+a)/2),this.attr("cy",(c+p)/2),this.attr("rx",(a-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function Tu(s,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",s),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),n.appendChild(o),n}var o3=class extends wn{onStart(s){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",s.x),this.attr("y1",s.y),this.attr("x2",s.x),this.attr("y2",s.y),this.brush.arrowEnd){const t=xu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Tu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(s){if(!this.el)return!1;let{x:t,y:n}=s;if(this.shiftPressed){const o=s.x-this.start.x,l=s.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,n=this.start.y+l):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||s.getTotalLength()<5)}},l3=class extends wn{onStart(s){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",s.x),this.attr("y",s.y),this.el}onMove(s){if(!this.el||!this.start)return!1;let[t,n]=nl(s.x-this.start.x),[o,l]=nl(s.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+t*n].sort(tl),[c,p]=[this.start.y,this.start.y+o*l].sort(tl);this.attr("x",r),this.attr("y",c),this.attr("width",a-r),this.attr("height",p-c)}return!0}onEnd(){const s=this.el;return this.el=null,!(!s||!s.getTotalLength())}};function r3(s,t){const n=s.x-t.x,o=s.y-t.y;return n*n+o*o}function a3(s,t,n){let o=t.x,l=t.y,r=n.x-o,a=n.y-l;if(r!==0||a!==0){const c=((s.x-o)*r+(s.y-l)*a)/(r*r+a*a);c>1?(o=n.x,l=n.y):c>0&&(o+=r*c,l+=a*c)}return r=s.x-o,a=s.y-l,r*r+a*a}function i3(s,t){let n=s[0];const o=[n];let l;for(let r=1,a=s.length;r<a;r++)l=s[r],r3(l,n)>t&&(o.push(l),n=l);return n!==l&&l&&o.push(l),o}function wr(s,t,n,o,l){let r=o,a=0;for(let c=t+1;c<n;c++){const p=a3(s[c],s[t],s[n]);p>r&&(a=c,r=p)}r>o&&(a-t>1&&wr(s,t,a,o,l),l.push(s[a]),n-a>1&&wr(s,a,n,o,l))}function c3(s,t){const n=s.length-1,o=[s[0]];return wr(s,0,n,t,o),o.push(s[n]),o}function mc(s,t,n=!1){if(s.length<=2)return s;const o=t!==void 0?t*t:1;return s=n?s:i3(s,o),s=c3(s,o),s}var p3=class extends wn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(s){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[s],this.brush.arrowEnd){this.arrowId=xu();const t=Tu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(s){return this.el||this.onStart(s),this.points[this.points.length-1]!==s&&(this.points.push(s),this.count+=1),this.count>5&&(this.points=mc(this.points,1,!0),this.count=0),this.attr("d",_c(this.points)),!0}onEnd(){const s=this.el;return this.el=null,!(!s||(s.setAttribute("d",_c(mc(this.points,1,!0))),!s.getTotalLength()))}};function u3(s,t){const n=t.x-s.x,o=t.y-s.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function gc(s,t,n,o){const l=t||s,r=n||s,a=.2,c=u3(l,r),p=c.angle+(o?Math.PI:0),u=c.length*a,y=s.x+Math.cos(p)*u,d=s.y+Math.sin(p)*u;return{x:y,y:d}}function y3(s,t,n){const o=gc(n[t-1],n[t-2],s),l=gc(s,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(st)},${o.y.toFixed(st)} ${l.x.toFixed(st)},${l.y.toFixed(st)} ${s.x.toFixed(st)},${s.y.toFixed(st)}`}function _c(s){return s.reduce((t,n,o,l)=>o===0?`M ${n.x.toFixed(st)},${n.y.toFixed(st)}`:`${t} ${y3(n,o,l)}`,"")}var d3=class extends wn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(s){const t=(n,o)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const r=n[l];if(r.getTotalLength){const a=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(a*c/this.pathSubFactor),u=r.getPointAtLength(a*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||r})}}else r.children&&t(r.children,r)}};s&&t(s.children)}onUnselected(){this.pathFragments=[]}onStart(s){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=s.x,this.svgPointPrevious.y=s.y}onMove(s){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=s.x,this.svgPointCurrent.y=s.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const s=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),s.push(t))}return s.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!s.includes(n))),s.length>0}lineLineIntersect(s,t){const n=s.x1,o=s.x2,l=t.x1,r=t.x2,a=s.y1,c=s.y2,p=t.y1,u=t.y2,y=(n-o)*(p-u)-(a-c)*(l-r),d=(n*c-a*o)*(l-r)-(n-o)*(l*u-p*r),f=(n*c-a*o)*(p-u)-(a-c)*(l*u-p*r),m=(h,A,b)=>h>=A&&h<=b?!0:h>=b&&h<=A;if(y===0)return!1;{const h={x:d/y,y:f/y};return m(h.x,n,o)&&m(h.y,a,c)&&m(h.x,l,r)&&m(h.y,p,u)}}};function f3(s){return{draw:new p3(s),stylus:new t3(s),line:new o3(s),rectangle:new l3(s),ellipse:new n3(s),eraseLine:new d3(s)}}var h3=class{constructor(s={}){this.options=s,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Xg(),this._models=f3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),s.el&&this.mount(s.el,s.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(s){this._models[this.mode].onUnselected(),this.options.brush.mode=s,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(s){this.options.brush=s}resolveSelector(s){return typeof s=="string"?document.querySelector(s):s||null}mount(s,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(s),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(s=>s()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(s,t){return this._emitter.on(s,t)}undo(){const s=this.el;return s.lastElementChild?(this._undoStack.push(s.lastElementChild.cloneNode(!0)),s.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var s;return!!((s=this.el)!=null&&s.lastElementChild)}eventMove(s){!this.acceptsInput(s)||!this.drawing||this.model._eventMove(s)&&(s.stopPropagation(),s.preventDefault(),this._emitter.emit("changed"))}eventStart(s){!this.acceptsInput(s)||(s.stopPropagation(),s.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(s),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(s){if(!this.acceptsInput(s)||!this.drawing)return;const t=this.model._eventUp(s);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(s){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(s.pointerType)}eventKeyboard(s){this.shiftPressed===s.shiftKey&&this.altPressed===s.altKey||(this.shiftPressed=s.shiftKey,this.altPressed=s.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const s=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",s)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(s){this.clear(),this.el.innerHTML=s}};function m3(s){return new h3(s)}const kr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Js=Ms("slidev-drawing-enabled",!1),Dw=Ms("slidev-drawing-pinned",!1),g3=H(!1),_3=H(!1),A3=H(!1),io=H(!1),qt=qh(Ms("slidev-drawing-brush",{color:kr[0],size:4,mode:"stylus"})),Ac=H("stylus"),Lu=T(()=>Be.drawings.syncAll||Hs.value);let co=!1;const Nn=T({get(){return Ac.value},set(s){Ac.value=s,s==="arrow"?(qt.mode="line",qt.arrowEnd=!0):(qt.mode=s,qt.arrowEnd=!1)}}),v3=$e({brush:qt,acceptsInputTypes:T(()=>Js.value?void 0:["pen"]),coordinateTransform:!1}),cs=hl(m3(v3));function b3(){cs.clear(),Lu.value&&du(je.value,"")}function Ru(){var s;_3.value=cs.canRedo(),g3.value=cs.canUndo(),A3.value=!!((s=cs.el)!=null&&s.children.length)}function D3(s){co=!0;const t=el[s||je.value];t!=null?cs.load(t):cs.clear(),co=!1}cs.on("changed",()=>{if(Ru(),!co){const s=cs.dump(),t=je.value;(el[t]||"")!==s&&Lu.value&&du(t,cs.dump())}});Fm(s=>{co=!0,s[je.value]!=null&&cs.load(s[je.value]||""),co=!1,Ru()});ts(()=>{he(je,()=>{!cs.mounted||D3()},{immediate:!0})});cs.on("start",()=>io.value=!0);cs.on("end",()=>io.value=!1);window.addEventListener("keydown",s=>{if(!Js.value)return;const t=!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey;let n=!0;s.code==="KeyZ"&&(s.ctrlKey||s.metaKey)?s.shiftKey?cs.redo():cs.undo():s.code==="Escape"?Js.value=!1:s.code==="KeyL"&&t?Nn.value="line":s.code==="KeyA"&&t?Nn.value="arrow":s.code==="KeyS"&&t?Nn.value="stylus":s.code==="KeyR"&&t?Nn.value="rectangle":s.code==="KeyE"&&t?Nn.value="ellipse":s.code==="KeyC"&&t?b3():s.code.startsWith("Digit")&&t&&+s.code[5]<=kr.length?qt.color=kr[+s.code[5]-1]:n=!1,n&&(s.preventDefault(),s.stopPropagation())},!1);function Qe(...s){return T(()=>s.every(t=>Ve(t)))}function hs(s){return T(()=>!Ve(s))}const vc=l1(),Ql=Ms("slidev-color-schema","auto"),Sr=T(()=>Be.colorSchema!=="auto"),wl=T({get(){return Sr.value?Be.colorSchema==="dark":Ql.value==="auto"?vc.value:Ql.value==="dark"},set(s){Sr.value||(Ql.value=s===vc.value?"auto":s?"dark":"light")}}),Pu=lu(wl);Ns&&he(wl,s=>{const t=document.querySelector("html");t.classList.toggle("dark",s),t.classList.toggle("light",!s)},{immediate:!0});const qo=H(1),zo=T(()=>Je.length-1),As=H(0),_a=H(0);function B3(){As.value>qo.value&&(As.value-=1)}function C3(){As.value<zo.value&&(As.value+=1)}function E3(){if(As.value>qo.value){let s=As.value-_a.value;s<qo.value&&(s=qo.value),As.value=s}}function w3(){if(As.value<zo.value){let s=As.value+_a.value;s>zo.value&&(s=zo.value),As.value=s}}function k3(){const{escape:s,space:t,shift:n,left:o,right:l,up:r,down:a,enter:c,d:p,g:u,o:y}=Eu;let d=[{name:"next_space",key:Qe(t,hs(n)),fn:bt,autoRepeat:!0},{name:"prev_space",key:Qe(t,n),fn:Dt,autoRepeat:!0},{name:"next_right",key:Qe(l,hs(n),hs(is)),fn:bt,autoRepeat:!0},{name:"prev_left",key:Qe(o,hs(n),hs(is)),fn:Dt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:bt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Dt,autoRepeat:!0},{name:"next_down",key:Qe(a,hs(is)),fn:uo,autoRepeat:!0},{name:"prev_up",key:Qe(r,hs(is)),fn:()=>yo(!1),autoRepeat:!0},{name:"next_shift",key:Qe(l,n),fn:uo,autoRepeat:!0},{name:"prev_shift",key:Qe(o,n),fn:()=>yo(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(p,hs(Js)),fn:Pu},{name:"toggle_overview",key:Qe(y,hs(Js)),fn:ku},{name:"hide_overview",key:Qe(s,hs(Js)),fn:()=>is.value=!1},{name:"goto",key:Qe(u,hs(Js)),fn:()=>an.value=!an.value},{name:"next_overview",key:Qe(l,is),fn:C3},{name:"prev_overview",key:Qe(o,is),fn:B3},{name:"up_overview",key:Qe(r,is),fn:E3},{name:"down_overview",key:Qe(a,is),fn:w3},{name:"goto_from_overview",key:Qe(c,is),fn:()=>{Cn(As.value),is.value=!1}}];const f=new Set(d.map(h=>h.name));if(d.filter(h=>h.name&&f.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return d}const Ou=Qe(hs(qg),hs(zg),Mg);function S3(s,t,n=!1){typeof s=="string"&&(s=Eu[s]);const o=Qe(s,Ou);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}n&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return he(o,a,{flush:"sync"})}function x3(s,t){return zm(s,n=>{!Ou.value||n.repeat||t()})}function T3(){const s=k3();new Map(s.map(n=>[n.key,n])).forEach(n=>{n.fn&&S3(n.key,n.fn,n.autoRepeat)}),x3("f",()=>wu.toggle())}const L3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R3=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),P3=[R3];function O3(s,t){return D(),U("svg",L3,P3)}const $3={name:"carbon-close",render:O3};function Aa(s){var n,o;const t=(o=(n=s==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const $u=ye({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(s){const t=s;O(I);const n=H(),o=_1(n),l=T(()=>t.width?t.width:o.width.value),r=T(()=>t.width?t.width/At:o.height.value);t.width&&En(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${r.value}px`)});const a=T(()=>l.value/r.value),c=T(()=>t.scale?t.scale:a.value<At?l.value/vt:r.value*At/vt),p=T(()=>({height:`${fa}px`,width:`${vt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=T(()=>({"select-none":!Be.selectable,"slidev-code-line-numbers":Be.lineNumbers}));return _s(pu,c),(y,d)=>(D(),U("div",{id:"slide-container",ref_key:"root",ref:n,class:Oe(E(u))},[e("div",{id:"slide-content",style:Ke(E(p))},[Me(y.$slots,"default")],4),Me(y.$slots,"controls")],2))}});const va=ye({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(s,{emit:t}){const n=Vs(s,"clicks",t),o=Vs(s,"clicksElements",t),l=Vs(s,"clicksDisabled",t),r=Vs(s,"clicksOrderMap",t);o.value.length=0,_s(Bm,s.route),_s(Cm,s.context),_s(Qn,n),_s(Vn,l),_s(Nt,o),_s(gr,r)},render(){var s,t;return this.$props.is?Ye(this.$props.is):(t=(s=this.$slots)==null?void 0:s.default)==null?void 0:t.call(s)}}),F3=["innerHTML"],N3=ye({__name:"DrawingPreview",props:{page:null},setup(s){return O(I),(t,n)=>E(el)[s.page]?(D(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:E(el)[s.page]},null,8,F3)):fe("v-if",!0)}}),I3={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},M3=["onClick"],U3=ye({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(s,{emit:t}){const n=s;O(I);const o=Vs(n,"modelValue",t);function l(){o.value=!1}function r(m){Cn(m),l()}function a(m){return m===As.value}const c=Cr.smaller("xs"),p=Cr.smaller("sm"),u=4*16*2,y=2*16,d=T(()=>c.value?Qt.width.value-u:p.value?(Qt.width.value-u-y)/2:300),f=T(()=>Math.floor((Qt.width.value-u)/(d.value+y)));return En(()=>{As.value=je.value,_a.value=f.value}),(m,h)=>{const A=$3;return D(),U(ke,null,[ia(e("div",I3,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ke(`grid-template-columns: repeat(auto-fit,minmax(${E(d)}px,1fr))`)},[(D(!0),U(ke,null,go(E(Je).slice(0,-1),(b,B)=>(D(),U("div",{key:b.path,class:"relative"},[e("div",{class:Oe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(B+1)}]),onClick:w=>r(+b.path)},[(D(),q($u,{key:b.path,width:E(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:_(()=>[S(E(va),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Oe(E(Aa)(b)),route:b,context:"overview"},null,8,["is","class","route"]),S(N3,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,M3),e("div",{class:"absolute top-0 opacity-50",style:Ke(`left: ${E(d)+5}px`)},ot(B+1),5)]))),128))],4)],512),[[eu,E(o)]]),E(o)?(D(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[S(A)])):fe("v-if",!0)],64)}}});const q3="/kaigionrails-postgresql-as-seen-by-rubyists/assets/logo.b72bde5d.png",z3={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},j3=ye({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(s,{emit:t}){const n=s;O(I);const o=Vs(n,"modelValue",t);function l(){o.value=!1}return(r,a)=>(D(),q(Np,null,[E(o)?(D(),U("div",z3,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=c=>l())}),e("div",{class:Oe(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Me(r.$slots,"default")],2)])):fe("v-if",!0)],1024))}}),H3={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Q3=["innerHTML"],V3=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:q3,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),i("dev ")])])],-1),J3=ye({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(s,{emit:t}){const n=s;O(I);const o=Vs(n,"modelValue",t),l=T(()=>typeof Be.info=="string");return(r,a)=>(D(),q(j3,{modelValue:E(o),"onUpdate:modelValue":a[0]||(a[0]=c=>Ce(o)?o.value=c:null),class:"px-6 py-4"},{default:_(()=>[e("div",H3,[E(l)?(D(),U("div",{key:0,class:"mb-4",innerHTML:E(Be).info},null,8,Q3)):fe("v-if",!0),V3])]),_:1},8,["modelValue"]))}});const W3=["disabled","onKeydown"],G3=ye({__name:"Goto",setup(s){O(I);const t=H(),n=H(""),o=T(()=>{if(n.value.startsWith("/"))return!!Je.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=Ku.value}});function l(){o.value&&(n.value.startsWith("/")?Cn(n.value.substring(1)):Cn(+n.value)),r()}function r(){an.value=!1}return he(an,async a=>{var c,p;a?(await ts(),n.value="",(c=t.value)==null||c.focus()):(p=t.value)==null||p.blur()}),he(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,c)=>(D(),U("div",{id:"slidev-goto-dialog",class:Oe(["fixed right-5 bg-main transform transition-all",E(an)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ia(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=p=>n.value=p),type:"text",disabled:!E(an),class:Oe(["outline-none bg-transparent",{"text-red-400":!E(o)&&n.value}]),placeholder:"Goto...",onKeydown:[Bi(l,["enter"]),Bi(r,["escape"])],onBlur:r},null,42,W3),[[kh,n.value]])],2))}}),Y3=ye({__name:"Controls",setup(s){O(I);const t=Ys(),n=Ys();return(o,l)=>(D(),U(ke,null,[S(U3,{modelValue:E(is),"onUpdate:modelValue":l[0]||(l[0]=r=>Ce(is)?is.value=r:null)},null,8,["modelValue"]),S(G3),E(t)?(D(),q(E(t),{key:0})):fe("v-if",!0),E(n)?(D(),q(E(n),{key:1,modelValue:E(jl),"onUpdate:modelValue":l[1]||(l[1]=r=>Ce(jl)?jl.value=r:null)},null,8,["modelValue"])):fe("v-if",!0),E(Be).info?(D(),q(J3,{key:2,modelValue:E(Gn),"onUpdate:modelValue":l[2]||(l[2]=r=>Ce(Gn)?Gn.value=r:null)},null,8,["modelValue"])):fe("v-if",!0)],64))}}),K3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z3=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),X3=[Z3];function e0(s,t){return D(),U("svg",K3,X3)}const s0={name:"carbon-settings-adjust",render:e0},t0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n0=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),o0=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),l0=[n0,o0];function r0(s,t){return D(),U("svg",t0,l0)}const a0={name:"carbon-information",render:r0},i0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c0=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),p0=[c0];function u0(s,t){return D(),U("svg",i0,p0)}const y0={name:"carbon-download",render:u0},d0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f0=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),h0=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),m0=[f0,h0];function g0(s,t){return D(),U("svg",d0,m0)}const _0={name:"carbon-user-speaker",render:g0},A0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v0=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),b0=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),D0=[v0,b0];function B0(s,t){return D(),U("svg",A0,D0)}const C0={name:"carbon-presentation-file",render:B0},E0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w0=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),k0=[w0];function S0(s,t){return D(),U("svg",E0,k0)}const x0={name:"carbon-pen",render:S0},T0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},L0=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),R0=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),P0=[L0,R0];function O0(s,t){return D(),U("svg",T0,P0)}const $0={name:"ph-cursor-duotone",render:O0},F0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},N0=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),I0=[N0];function M0(s,t){return D(),U("svg",F0,I0)}const Fu={name:"ph-cursor-fill",render:M0},U0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q0=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),z0=[q0];function j0(s,t){return D(),U("svg",U0,z0)}const H0={name:"carbon-sun",render:j0},Q0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V0=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),J0=[V0];function W0(s,t){return D(),U("svg",Q0,J0)}const G0={name:"carbon-moon",render:W0},Y0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K0=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Z0=[K0];function X0(s,t){return D(),U("svg",Y0,Z0)}const e8={name:"carbon-apps",render:X0},s8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t8=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),n8=[t8];function o8(s,t){return D(),U("svg",s8,n8)}const l8={name:"carbon-arrow-right",render:o8},r8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a8=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),i8=[a8];function c8(s,t){return D(),U("svg",r8,i8)}const p8={name:"carbon-arrow-left",render:c8},u8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y8=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),d8=[y8];function f8(s,t){return D(),U("svg",u8,d8)}const h8={name:"carbon-maximize",render:f8},m8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g8=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),_8=[g8];function A8(s,t){return D(),U("svg",m8,_8)}const v8={name:"carbon-minimize",render:A8},b8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D8=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),B8=[D8];function C8(s,t){return D(),U("svg",b8,B8)}const E8={name:"carbon-checkmark",render:C8},w8={class:"select-list"},k8={class:"title"},S8={class:"items"},x8=["onClick"],T8=ye({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(s,{emit:t}){const n=s;O(I);const o=Vs(n,"modelValue",t,{passive:!0});return(l,r)=>{const a=E8;return D(),U("div",w8,[e("div",k8,ot(s.title),1),e("div",S8,[(D(!0),U(ke,null,go(s.items,c=>(D(),U("div",{key:c.value,class:Oe(["item",{active:E(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[S(a,{class:Oe(["text-green-500",{"opacity-0":E(o)!==c.value}])},null,8,["class"]),i(" "+ot(c.display||c.value),1)],10,x8))),128))])])}}});const kn=(s,t)=>{const n=s.__vccOpts||s;for(const[o,l]of t)n[o]=l;return n},L8=kn(T8,[["__scopeId","data-v-7dd0eaca"]]),R8={class:"text-sm"},P8=ye({__name:"Settings",setup(s){O(I);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(D(),U("div",R8,[S(L8,{modelValue:E(Uo),"onUpdate:modelValue":o[0]||(o[0]=l=>Ce(Uo)?Uo.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),O8={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},$8=ye({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(s,{emit:t}){const n=s;O(I);const o=Vs(n,"modelValue",t,{passive:!0}),l=H();return Um(l,()=>{o.value=!1}),(r,a)=>(D(),U("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Oe({disabled:s.disabled}),onClick:a[0]||(a[0]=c=>o.value=!E(o))},[Me(r.$slots,"button",{class:Oe({disabled:s.disabled})})],2),(D(),q(Np,null,[E(o)?(D(),U("div",O8,[Me(r.$slots,"menu")])):fe("v-if",!0)],1024))],512))}}),F8={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Po={__name:"VerticalDivider",setup(s){return O(I),(t,n)=>(D(),U("div",F8))}},N8={render(){return[]}},I8={class:"icon-btn"},M8={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},U8={class:"my-auto"},q8={class:"opacity-50"},z8=ye({__name:"NavControls",props:{persist:{default:!1}},setup(s){const t=s;O(I);const n=Cr.smaller("md"),{isFullscreen:o,toggle:l}=wu,r=T(()=>Tr.value?`?password=${Tr.value}`:""),a=T(()=>`/presenter/${je.value}${r.value}`),c=T(()=>`/${je.value}${r.value}`),p=H(),u=()=>{p.value&&mn.value&&p.value.contains(mn.value)&&mn.value.blur()},y=T(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Ys(),f=Ys();return Jt(()=>import("./DrawingControls.d182594e.js"),["assets/DrawingControls.d182594e.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.12e03e6d.js"]).then(m=>f.value=m.default),(m,h)=>{const A=v8,b=h8,B=p8,w=l8,C=e8,x=G0,N=H0,M=Fu,P=$0,G=x0,re=C0,de=An("RouterLink"),ve=_0,We=y0,He=a0,Ie=s0;return D(),U("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:Oe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E(y)]),onMouseleave:u},[E(Xs)?fe("v-if",!0):(D(),U("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...Re)=>E(l)&&E(l)(...Re))},[E(o)?(D(),q(A,{key:0})):(D(),q(b,{key:1}))])),e("button",{class:Oe(["icon-btn",{disabled:!E(S6)}]),onClick:h[1]||(h[1]=(...Re)=>E(Dt)&&E(Dt)(...Re))},[S(B)],2),e("button",{class:Oe(["icon-btn",{disabled:!E(k6)}]),title:"Next",onClick:h[2]||(h[2]=(...Re)=>E(bt)&&E(bt)(...Re))},[S(w)],2),E(Xs)?fe("v-if",!0):(D(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Re=>E(ku)())},[S(C)])),E(Sr)?fe("v-if",!0):(D(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Re=>E(Pu)())},[E(wl)?(D(),q(x,{key:0})):(D(),q(N,{key:1}))])),S(Po),E(Xs)?fe("v-if",!0):(D(),U(ke,{key:3},[!E(Hs)&&!E(n)&&E(d)?(D(),U(ke,{key:0},[S(E(d)),S(Po)],64)):fe("v-if",!0),E(Hs)?(D(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Re=>Hl.value=!E(Hl))},[E(Hl)?(D(),q(M,{key:0})):(D(),q(P,{key:1,class:"opacity-50"}))])):fe("v-if",!0)],64)),!E(Be).drawings.presenterOnly&&!E(Xs)?(D(),U(ke,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Re=>Js.value=!E(Js))},[S(G),E(Js)?(D(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ke({background:E(qt).color})},null,4)):fe("v-if",!0)]),S(Po)],64)):fe("v-if",!0),E(Xs)?fe("v-if",!0):(D(),U(ke,{key:5},[E(Hs)?(D(),q(de,{key:0,to:E(c),class:"icon-btn",title:"Play Mode"},{default:_(()=>[S(re)]),_:1},8,["to"])):fe("v-if",!0),E(C6)?(D(),q(de,{key:1,to:E(a),class:"icon-btn",title:"Presenter Mode"},{default:_(()=>[S(ve)]),_:1},8,["to"])):fe("v-if",!0),fe("v-if",!0)],64)),(D(),U(ke,{key:6},[E(Be).download?(D(),U("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...Re)=>E(Lr)&&E(Lr)(...Re))},[S(We)])):fe("v-if",!0)],64)),!E(Hs)&&E(Be).info&&!E(Xs)?(D(),U("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=Re=>Gn.value=!E(Gn))},[S(He)])):fe("v-if",!0),!E(Hs)&&!E(Xs)?(D(),q($8,{key:8},{button:_(()=>[e("button",I8,[S(Ie)])]),menu:_(()=>[S(P8)]),_:1})):fe("v-if",!0),E(Xs)?fe("v-if",!0):(D(),q(Po,{key:9})),e("div",M8,[e("div",U8,[i(ot(E(je))+" ",1),e("span",q8,"/ "+ot(E(Ku)),1)])]),S(E(N8))],34)],512)}}}),Nu={render(){return[]}},Iu={render(){return[]}},j8={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},H8=ye({__name:"PresenterMouse",setup(s){return O(I),(t,n)=>{const o=Fu;return E(Ml).cursor?(D(),U("div",j8,[S(o,{class:"absolute",style:Ke({left:`${E(Ml).cursor.x}%`,top:`${E(Ml).cursor.y}%`})},null,8,["style"])])):fe("v-if",!0)}}}),Q8=ye({__name:"SlidesShow",props:{context:null},setup(s){O(I),he(gs,()=>{var n,o;((n=gs.value)==null?void 0:n.meta)&&gs.value.meta.preload!==!1&&(gs.value.meta.__preloaded=!0),((o=Vl.value)==null?void 0:o.meta)&&Vl.value.meta.preload!==!1&&(Vl.value.meta.__preloaded=!0)},{immediate:!0});const t=Ys();return Jt(()=>import("./DrawingLayer.9489c6a1.js"),[]).then(n=>t.value=n.default),(n,o)=>(D(),U(ke,null,[fe(" Global Bottom "),S(E(Iu)),fe(" Slides "),(D(!0),U(ke,null,go(E(Je),l=>{var r,a;return D(),U(ke,{key:l.path},[((r=l.meta)==null?void 0:r.__preloaded)||l===E(gs)?ia((D(),q(E(va),{key:0,is:l==null?void 0:l.component,clicks:l===E(gs)?E(Fs):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Oe(E(Aa)(l)),route:l,context:s.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[eu,l===E(gs)]]):fe("v-if",!0)],64)}),128)),fe(" Global Top "),S(E(Nu)),E(t)?(D(),q(E(t),{key:0})):fe("v-if",!0),E(Hs)?fe("v-if",!0):(D(),q(H8,{key:1}))],64))}}),V8=ye({__name:"Play",setup(s){O(I),T3();const t=H();function n(r){var a;pc.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?bt():Dt())}L6(t);const o=T(()=>Ug.value||pc.value);Ys();const l=Ys();return Jt(()=>import("./DrawingControls.d182594e.js"),["assets/DrawingControls.d182594e.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.12e03e6d.js"]).then(r=>l.value=r.default),(r,a)=>(D(),U(ke,null,[e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ke(E(uu))},[S($u,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:E(ka)?E(Qt).width.value:void 0,scale:E(Uo),onPointerdown:n},{default:_(()=>[S(Q8,{context:"slide"})]),controls:_(()=>[e("div",{class:Oe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[E(o)?"opacity-100 right-0":"opacity-0 p-2",E(io)?"pointer-events-none":""]])},[S(z8,{class:"m-auto",persist:E(o)},null,8,["persist"])],2),!E(Be).drawings.presenterOnly&&!E(Xs)&&E(l)?(D(),q(E(l),{key:0,class:"ml-0"})):fe("v-if",!0)]),_:1},8,["style","width","scale"]),fe("v-if",!0)],4),S(Y3)],64))}});function Mu(s){const t=T(()=>s.value.path),n=T(()=>Je.length-1),o=T(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=T(()=>kl(o.value)),r=T(()=>Je.find(f=>f.path===`${o.value}`)),a=T(()=>{var f,m,h;return(h=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:h.id}),c=T(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),p=T(()=>Je.find(f=>f.path===`${Math.min(Je.length,o.value+1)}`)),u=T(()=>Je.filter(f=>{var m,h;return(h=(m=f.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((f,m)=>(Sa(f,m),f),[])),y=T(()=>xa(u.value,r.value)),d=T(()=>Ta(y.value));return{route:s,path:t,total:n,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:y,tree:d}}function Uu(s,t,n){const o=H(0);ts(()=>{vs.afterEach(async()=>{await ts(),o.value+=1})});const l=T(()=>{var p,u;return o.value,((u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=T(()=>{var p,u,y;return+((y=(u=(p=t.value)==null?void 0:p.meta)==null?void 0:u.clicks)!=null?y:l.value.length)}),a=T(()=>n.value<Je.length-1||s.value<r.value),c=T(()=>n.value>1||s.value>0);return{clicks:s,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:c}}const J8=["id"],bc=ye({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(s,{emit:t}){const n=s,o=Vs(n,"clicksElements",t),l=T(()=>({height:`${fa}px`,width:`${vt}px`})),r=Ys();Jt(()=>import("./DrawingPreview.32b25ce0.js"),[]).then(u=>r.value=u.default);const a=T(()=>n.clicks),c=Uu(a,n.nav.currentRoute,n.nav.currentPage),p=T(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return _s(I,$e({nav:{...n.nav,...c},configs:Be,themeConfigs:T(()=>Be.themeConfig)})),(u,y)=>{var d;return D(),U("div",{id:E(p),class:"slide-container",style:Ke(E(l))},[S(E(Iu)),S(E(va),{is:(d=s.route)==null?void 0:d.component,"clicks-elements":E(o),"onUpdate:clicks-elements":y[0]||(y[0]=f=>Ce(o)?o.value=f:null),clicks:E(a),"clicks-disabled":!1,class:Oe(E(Aa)(s.route)),route:s.route},null,8,["is","clicks-elements","clicks","class","route"]),E(r)?(D(),q(E(r),{key:0,page:+s.route.path},null,8,["page"])):fe("v-if",!0),S(E(Nu))],12,J8)}}}),W8=ye({__name:"PrintSlide",props:{route:null},setup(s){var r;const t=s;O(I);const n=$e(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=T(()=>t.route),l=Mu(o);return(a,c)=>(D(),U(ke,null,[S(bc,{"clicks-elements":n,"onUpdate:clicks-elements":c[0]||(c[0]=p=>Ce(n)?n.value=p:null),clicks:0,nav:E(l),route:E(o)},null,8,["clicks-elements","nav","route"]),E(Yn)?fe("v-if",!0):(D(!0),U(ke,{key:0},go(n.length,p=>(D(),q(bc,{key:p,clicks:p,nav:E(l),route:E(o)},null,8,["clicks","nav","route"]))),128))],64))}}),G8={id:"print-content"},Y8=ye({__name:"PrintContainer",props:{width:null},setup(s){const t=s;O(I);const n=T(()=>t.width),o=T(()=>t.width/At),l=T(()=>n.value/o.value),r=T(()=>l.value<At?n.value/vt:o.value*At/vt),a=Je.slice(0,-1),c=T(()=>({"select-none":!Be.selectable,"slidev-code-line-numbers":Be.lineNumbers}));return _s(pu,r),(p,u)=>(D(),U("div",{id:"print-container",class:Oe(E(c))},[e("div",G8,[(D(!0),U(ke,null,go(E(a),y=>(D(),q(W8,{key:y.path,route:y},null,8,["route"]))),128))]),Me(p.$slots,"controls")],2))}});const K8=ye({__name:"Print",setup(s){O(I);function t(n,{slots:o}){if(o.default)return Ye("style",o.default())}return En(()=>{ka?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,o)=>(D(),U(ke,null,[S(t,null,{default:_(()=>[i(" @page { size: "+ot(E(vt))+"px "+ot(E(fa))+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ke(E(uu))},[S(Y8,{class:"w-full h-full",style:Ke({background:"var(--slidev-slide-container-background, black)"}),width:E(Qt).width.value},null,8,["style","width"])],4)],64))}});const Z8={class:"slidev-layout end"},X8={__name:"end",setup(s){return O(I),(t,n)=>(D(),U("div",Z8," END "))}},e_=kn(X8,[["__scopeId","data-v-ab32435f"]]),ba="/kaigionrails-postgresql-as-seen-by-rubyists/images/01_Evil-Martians_Logo_v2.1_RGB.svg",Da="/kaigionrails-postgresql-as-seen-by-rubyists/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg",s_="/kaigionrails-postgresql-as-seen-by-rubyists/images/kaigi-on-rails-2022-light.svg",t_="/kaigionrails-postgresql-as-seen-by-rubyists/images/kaigi-on-rails-2022-dark.svg";function Dc(s){return s.startsWith("/")?"/kaigionrails-postgresql-as-seen-by-rubyists/"+s.slice(1):s}function n_(s,t=!1){const n=s&&["#","rgb","hsl"].some(l=>s.indexOf(l)===0),o={background:n?s:void 0,color:s&&!n?"white":void 0,backgroundImage:n?void 0:s?t?`linear-gradient(#0005, #0008), url(${Dc(s)})`:`url("${Dc(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const o_={class:"my-auto w-full"},Ao=ye({__name:"cover",props:{background:{default:""}},setup(s){const t=s;O(I);const n=T(()=>n_(t.background,!0));return(o,l)=>(D(),U("div",{class:"slidev-layout cover",style:Ke(E(n))},[e("div",o_,[Me(o.$slots,"default")])],4))}});const Ba=s=>(la("data-v-20d3c02b"),s=s(),ra(),s),l_=Ba(()=>e("h1",null,[e("span",{class:"postgresql"},"PostgreSQL"),e("br"),i("as seen by"),e("br"),e("span",{class:"rubyists"},"Rubyists")],-1)),r_=Ba(()=>e("div",{class:"absolute bottom-0 my-2"},[i(" Andrey Novikov, Evil Martians"),e("br"),e("small",null,[e("a",{href:"https://kaigionrails.org/2022/"},"Kaigi on Rails 2022")]),e("br"),e("small",null,[e("time",{datetime:"2022-10-22"},"22 October 2022")])],-1)),a_=Ba(()=>e("div",{class:"absolute bottom-0 right-0 h-40 scaled-image flex items-end"},[e("a",{href:"https://evilmartians.com/",class:"w-40 p-3"},[e("img",{alt:"Evil Martians",src:ba,class:"block dark:hidden"}),e("img",{alt:"Evil Martians",src:Da,class:"hidden dark:block"})]),e("a",{href:"https://kaigionrails.org/",class:"w-40 p-4"},[e("img",{alt:"Kaigi on Rails",src:s_,class:"block dark:hidden"}),e("img",{alt:"Kaigi on Rails",src:t_,class:"hidden dark:block"})])],-1)),i_={__name:"1",setup(s){const t={theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1,syncAll:!1},info:`## PostgreSQL as seen by Rubyists
`,css:"unocss",fonts:{provider:"none",fallback:!1,local:"Martian Grotesk, Martian Mono",sans:"Martian Grotesk",serif:"Martian Grotesk",mono:"Martian Mono"}};return O(I),(n,o)=>(D(),q(Ao,ee(Z(t)),{default:_(()=>[l_,r_,a_]),_:1},16))}},c_=kn(i_,[["__scopeId","data-v-20d3c02b"]]),p_="/kaigionrails-postgresql-as-seen-by-rubyists/images/github-envek-light.png",u_="/kaigionrails-postgresql-as-seen-by-rubyists/images/github-envek-dark.png",qu={__name:"none",setup(s){return O(I),(t,n)=>(D(),U("div",null,[Me(t.$slots,"default")]))}},y_=e("img",{alt:"My GitHub",src:p_,class:"block dark:hidden"},null,-1),d_=e("img",{alt:"Evil Martians",src:u_,class:"hidden dark:block"},null,-1),f_={__name:"2",setup(s){const t={layout:"none"};return O(I),(n,o)=>(D(),q(qu,ee(Z(t)),{default:_(()=>[y_,d_]),_:1},16))}},h_={class:"slidev-layout default"},Ue={__name:"default",setup(s){return O(I),(t,n)=>(D(),U("div",h_,[Me(t.$slots,"default")]))}},m_=e("a",{href:"https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists"},[e("img",{alt:"Evil Martians",src:ba,class:"block dark:hidden object-contain text-center m-auto max-h-112"}),e("img",{alt:"Evil Martians",src:Da,class:"hidden dark:block object-contain text-center m-auto max-h-112"}),e("p",{class:"text-2xl text-center"},"evilmartians.com")],-1),g_=e("div",{class:"absolute bottom-32px left-32px rotate-10 text-2xl"},"\u90AA\u60AA\u306A\u706B\u661F\u4EBA\uFF1F",-1),__=e("div",{class:"absolute bottom-32px right-32px rotate-350 text-2xl"},"\u30A4\u30FC\u30D3\u30EB\u30DE\u30FC\u30B7\u30E3\u30F3\u30BA\uFF01",-1),A_={__name:"3",setup(s){const t={};return O(I),(n,o)=>(D(),q(Ue,ee(Z(t)),{default:_(()=>[m_,g_,__]),_:1},16))}},v_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/yabeda.svg",b_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/lefthook.svg",D_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/anycable.svg",B_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/postcss.svg",C_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/imgproxy-light.svg",E_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/imgproxy-dark.svg",w_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/logux-logo-light.svg",k_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/logux-logo-dark.svg",S_="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/overmind.svg";const it=s=>(la("data-v-c2ab992a"),s=s(),ra(),s),x_=it(()=>e("h1",null,"Martian Open Source",-1)),T_={class:"grid grid-cols-4 grid-rows-2 gap-4"},L_=it(()=>e("a",{href:"https://github.com/yabeda-rb/yabeda"},[e("figure",null,[e("img",{alt:"Yabeda",src:v_,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"Yabeda: Ruby application instrumentation framework")])],-1)),R_=it(()=>e("a",{href:"https://github.com/evilmartians/lefthook"},[e("figure",null,[e("img",{alt:"LeftHook",src:b_,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"Lefthook: git hooks manager")])],-1)),P_=it(()=>e("a",{href:"https://anycable.io/"},[e("figure",null,[e("img",{alt:"AnyCable",src:D_,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"AnyCable: Polyglot replacement for ActionCable server")])],-1)),O_=it(()=>e("a",{href:"https://postcss.org/"},[e("figure",null,[e("img",{alt:"PostCSS",src:B_,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"PostCSS: A tool for transforming CSS with JavaScript")])],-1)),$_=it(()=>e("a",{href:"https://imgproxy.net/"},[e("figure",null,[e("img",{alt:"Imgproxy",src:C_,class:"scaled-image h-40 mx-auto block dark:hidden"}),e("img",{alt:"Imgproxy",src:E_,class:"scaled-image h-40 mx-auto hidden dark:block"}),e("figcaption",null,"Imgproxy: Fast and secure standalone server for resizing and converting remote images")])],-1)),F_=it(()=>e("a",{href:"https://logux.io/"},[e("figure",null,[e("img",{alt:"Logux",src:w_,class:"scaled-image h-40 mx-auto block dark:hidden"}),e("img",{alt:"Logux",src:k_,class:"scaled-image h-40 mx-auto hidden dark:block"}),e("figcaption",null,"Logux: Client-server communication framework based on Optimistic UI, CRDT, and log")])],-1)),N_=it(()=>e("a",{href:"https://github.com/DarthSim/overmind"},[e("figure",null,[e("img",{alt:"Overmind",src:S_,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"Overmind: Process manager for Procfile-based applications and tmux ")])],-1)),I_={href:"https://evilmartians.com/oss"},M_={class:"h-40 text-2xl flex items-center justify-center"},U_=it(()=>e("figcaption",{style:{"font-size":"1rem","margin-top":"0","line-height":"1.25rem"}},"Even more at evilmartians.com/oss",-1)),q_={__name:"4",setup(s){const t={};return O(I),(n,o)=>{const l=An("qr-code-vue");return D(),q(Ue,ee(Z(t)),{default:_(()=>[x_,e("div",T_,[L_,R_,P_,O_,$_,F_,N_,e("a",I_,[e("figure",null,[e("div",M_,[S(l,{value:"https://evilmartians.com/oss",class:"scaled-image w-full h-full mx-auto p-4","render-as":"svg",margin:"1"})]),U_])])])]),_:1},16)}}},z_=kn(q_,[["__scopeId","data-v-c2ab992a"]]),j_=e("p",null,"This talk is about\u2026",-1),H_=e("h1",null,"Subtle differences",-1),Q_={__name:"5",setup(s){const t={layout:"cover"};return O(I),(n,o)=>(D(),q(Ao,ee(Z(t)),{default:_(()=>[j_,H_]),_:1},16))}};function Bc(s){return s.startsWith("/")?"/kaigionrails-postgresql-as-seen-by-rubyists/"+s.slice(1):s}function V_(s,t=!1){const n=s&&s[0]==="#"&&s.startsWith("rgb"),o={background:n?s:void 0,color:s&&!n?"white":void 0,backgroundImage:n?void 0:s?t?`linear-gradient(#0005, #0008), url(${Bc(s)})`:`url("${Bc(s)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const J_=ye({__name:"image",props:{image:{type:String}},setup(s){const t=s;O(I);const n=T(()=>V_(t.image));return(o,l)=>(D(),U("div",{class:"slidev-layout w-full h-full",style:Ke(E(n))},[Me(o.$slots,"default")],4))}}),W_={__name:"6",setup(s){const t={layout:"image",image:"/images/roads-in-different-countries.jpg"};return O(I),(n,o)=>(D(),q(J_,ee(Z(t)),null,16))}},zu="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/RU_road_sign_2.4.svg",ju="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/Japan_road_sign_330-B.svg",G_={class:"slidev-layout footnote-container w-full h-full grid gap-2 pb-0",style:{"grid-template-rows":"11fr 1fr"}},Y_={class:"place-self-stretch overflow-hidden"},wt=ye({__name:"footnote",props:{footnoteClass:{type:String}},setup(s){const t=s;return O(I),(n,o)=>(D(),U("div",G_,[e("div",Y_,[Me(n.$slots,"default")]),e("div",{class:Oe(["self-end footnote",t.footnoteClass])},[Me(n.$slots,"footnote")],2)]))}});const K_=e("div",{class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},[e("h2",{class:"col-span-3"}," Example of subtle yet important difference "),e("p",null,[e("img",{src:zu,alt:"Russian \u201CYield\u201D sign"})]),e("div",{class:"text-center"},[e("p",null,"Are they same?"),e("p",null,[e("strong",{class:"text-2xl text-center"},"\u2026")])]),e("p",null,[e("img",{src:ju,alt:"Japanese \u201CStop\u201D sign"})])],-1),Z_=e("p",null,[i("Left: road sign conforming "),e("a",{href:"https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals",target:"_blank",rel:"noopener"},"Vienna Convention on Road Signs and Signals")],-1),X_=e("p",null,"Right: Japanese road sign per \u201COrder on Road Sign, Road Line, and Road Surface Marking\u201D",-1),e5={__name:"7",setup(s){const t={layout:"footnote","footnote-class":"text-sm"};return O(I),(n,o)=>(D(),q(wt,ee(Z(t)),{footnote:_(l=>[Z_,X_]),default:_(()=>[K_]),_:1},16))}},s5=e("div",{class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},[e("h2",{class:"col-span-3"}," Example of subtle yet important difference "),e("p",null,[e("img",{src:zu,alt:"Russian \u201CYield\u201D sign"})]),e("div",{class:"text-center"},[e("p",null,"Are they same?"),e("p",null,[e("strong",{class:"text-3xl text-center"},"NO!")])]),e("p",null,[e("img",{src:ju,alt:"Japanese \u201CStop\u201D sign"})])],-1),t5=e("p",null,"Both require drivers to give a way\u2026",-1),n5=e("p",null,"European sign doesn\u2019t have a requirement to stop or even slow down!",-1),o5={__name:"8",setup(s){const t={layout:"footnote"};return O(I),(n,o)=>(D(),q(wt,ee(Z(t)),{footnote:_(l=>[t5,n5]),default:_(()=>[s5]),_:1},16))}},l5="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/RU_road_sign_2.5.svg",r5="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/Japan_road_sign_330-A.svg",a5=e("div",{class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},[e("h2",{class:"col-span-3"}," Example of subtle yet important difference "),e("div",{class:"p-4 pt-8 pr-8"},[e("p",null,[e("img",{src:l5,alt:"Russian \u201CYield\u201D sign"})])]),e("div",{class:"text-center"},[e("p",null,"Are they same?"),e("p",null,[e("strong",{class:"text-3xl text-center"},"YES!")])]),e("p",null,[e("img",{src:r5,alt:"Japanese \u201CStop\u201D sign"})])],-1),i5=e("p",null,[i("Stop signs around the world are "),e("em",null,"mostly"),i(" octagonal.")],-1),c5=e("p",null,"Japanese signs have \u201CSTOP\u201D word in English after 2017, but are still pretty rare.",-1),p5={__name:"9",setup(s){const t={layout:"footnote"};return O(I),(n,o)=>(D(),q(wt,ee(Z(t)),{footnote:_(l=>[i5,c5]),default:_(()=>[a5]),_:1},16))}},u5={class:"slidev-icon",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},y5=Gf('<circle cx="18" cy="17.018" r="17" fill="#FFCB4C"></circle><path fill="#65471B" d="M14.524 21.036a.914.914 0 0 1-.312-.464a.799.799 0 0 1 .59-1.021c4.528-1.021 7.577 1.363 7.706 1.465c.384.306.459.845.173 1.205c-.286.358-.828.401-1.211.097c-.11-.084-2.523-1.923-6.182-1.098a.91.91 0 0 1-.764-.184z"></path><ellipse cx="13.119" cy="11.174" fill="#65471B" rx="2.125" ry="2.656"></ellipse><ellipse cx="24.375" cy="12.236" fill="#65471B" rx="2.125" ry="2.656"></ellipse><path fill="#F19020" d="M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694c-.249-1.08-1.204-1.118-1.697-1.003c-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512c.508-.536.833-1.129.946-2.113c.119-1.035-.232-2.313-.433-2.809c-.374-.921-1.005-1.649-1.734-1.899c-1.137-.39-1.945.321-1.542 1.561c.604 1.854.208 3.375-.833 4.293c-2.449 2.157-3.588 3.695-2.83 6.973c.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z"></path><path fill="#65471B" d="M9.296 6.351a.925.925 0 0 1-.391-.399a.8.8 0 0 1 .393-1.112c4.266-1.831 7.699-.043 7.843.034c.433.231.608.747.391 1.154c-.216.405-.74.546-1.173.318c-.123-.063-2.832-1.432-6.278.047a.915.915 0 0 1-.785-.042zm12.135 3.75a.924.924 0 0 1-.362-.424a.8.8 0 0 1 .468-1.084c4.381-1.536 7.685.48 7.823.567c.415.26.555.787.312 1.178c-.242.39-.776.495-1.191.238c-.12-.072-2.727-1.621-6.267-.379a.924.924 0 0 1-.783-.096z"></path>',6),d5=[y5];function f5(s,t){return D(),U("svg",u5,d5)}const h5={name:"twemoji-thinking-face",render:f5},Hu="/kaigionrails-postgresql-as-seen-by-rubyists/images/Ruby_logo.svg",Ca="/kaigionrails-postgresql-as-seen-by-rubyists/images/Postgresql_elephant.svg",m5={class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},g5=e("h2",{class:"col-span-3"}," And how it relates to Ruby and PostgreSQL? ",-1),_5=e("img",{alt:"Ruby logo",src:Hu,class:"w-full h-full scaled-image p-4"},null,-1),A5=e("img",{alt:"PostgreSQL logo",src:Ca},null,-1),v5={__name:"10",setup(s){const t={};return O(I),(n,o)=>{const l=h5;return D(),q(Ue,ee(Z(t)),{default:_(()=>[e("div",m5,[g5,_5,S(l,{class:"self-end w-full h-32"}),A5])]),_:1},16)}}},b5={class:"slidev-icon",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},D5=e("path",{fill:"#3B88C3",d:"M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"},null,-1),B5=e("path",{fill:"#FFF",d:"M30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 1.414.297 2.758.827 3.978l3.3-2.75A6 6 0 0 1 15 12h8v4l7.2-6zm-.026 4.023l-3.301 2.75A6 6 0 0 1 21 24h-8v-4l-7.2 6l7.2 6v-4h8c5.522 0 10-4.478 10-10a9.965 9.965 0 0 0-.826-3.977z"},null,-1),C5=[D5,B5];function E5(s,t){return D(),U("svg",b5,C5)}const w5={name:"twemoji-repeat-button",render:E5},k5={class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},S5=e("h2",{class:"col-span-3"}," And how it relates to Ruby and PostgreSQL? ",-1),x5=e("img",{alt:"Ruby logo",src:Hu,class:"w-full h-full scaled-image p-4"},null,-1),T5={class:"text-center"},L5=e("img",{alt:"PostgreSQL logo",src:Ca},null,-1),R5={__name:"11",setup(s){const t={};return O(I),(n,o)=>{const l=w5;return D(),q(Ue,ee(Z(t)),{default:_(()=>[e("div",k5,[S5,x5,e("p",T5,[i(" Application data "),S(l,{class:"w-full h-32"}),i(" Data in the database ")]),L5])]),_:1},16)}}},P5={class:"slidev-layout center h-full grid place-content-center"},O5={class:"my-auto"},vo={__name:"center",setup(s){return O(I),(t,n)=>(D(),U("div",P5,[e("div",O5,[Me(t.$slots,"default")])]))}},$5=e("h1",null,"Ruby vs PostgreSQL data types",-1),F5=e("p",null,"Are they same?",-1),N5={__name:"12",setup(s){const t={layout:"center"};return O(I),(n,o)=>(D(),q(vo,ee(Z(t)),{default:_(()=>[$5,F5]),_:1},16))}},I5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},M5=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),U5=[M5];function q5(s,t){return D(),U("svg",I5,U5)}const z5={name:"ph-clipboard",render:q5},j5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},H5=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Q5=[H5];function V5(s,t){return D(),U("svg",j5,Q5)}const J5={name:"ph-check-circle",render:V5};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Qu(s){return typeof s>"u"||s===null}function W5(s){return typeof s=="object"&&s!==null}function G5(s){return Array.isArray(s)?s:Qu(s)?[]:[s]}function Y5(s,t){var n,o,l,r;if(t)for(r=Object.keys(t),n=0,o=r.length;n<o;n+=1)l=r[n],s[l]=t[l];return s}function K5(s,t){var n="",o;for(o=0;o<t;o+=1)n+=s;return n}function Z5(s){return s===0&&Number.NEGATIVE_INFINITY===1/s}var X5=Qu,e4=W5,s4=G5,t4=K5,n4=Z5,o4=Y5,Ea={isNothing:X5,isObject:e4,toArray:s4,repeat:t4,isNegativeZero:n4,extend:o4};function Vu(s,t){var n="",o=s.reason||"(unknown reason)";return s.mark?(s.mark.name&&(n+='in "'+s.mark.name+'" '),n+="("+(s.mark.line+1)+":"+(s.mark.column+1)+")",!t&&s.mark.snippet&&(n+=`

`+s.mark.snippet),o+" "+n):o}function po(s,t){Error.call(this),this.name="YAMLException",this.reason=s,this.mark=t,this.message=Vu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}po.prototype=Object.create(Error.prototype);po.prototype.constructor=po;po.prototype.toString=function(t){return this.name+": "+Vu(this,t)};var It=po,l4=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],r4=["scalar","sequence","mapping"];function a4(s){var t={};return s!==null&&Object.keys(s).forEach(function(n){s[n].forEach(function(o){t[String(o)]=n})}),t}function i4(s,t){if(t=t||{},Object.keys(t).forEach(function(n){if(l4.indexOf(n)===-1)throw new It('Unknown option "'+n+'" is met in definition of "'+s+'" YAML type.')}),this.options=t,this.tag=s,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=a4(t.styleAliases||null),r4.indexOf(this.kind)===-1)throw new It('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}var os=i4;function Cc(s,t){var n=[];return s[t].forEach(function(o){var l=n.length;n.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),n[l]=o}),n}function c4(){var s={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function o(l){l.multi?(s.multi[l.kind].push(l),s.multi.fallback.push(l)):s[l.kind][l.tag]=s.fallback[l.tag]=l}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(o);return s}function xr(s){return this.extend(s)}xr.prototype.extend=function(t){var n=[],o=[];if(t instanceof os)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new It("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof os))throw new It("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new It("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new It("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof os))throw new It("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(xr.prototype);return l.implicit=(this.implicit||[]).concat(n),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Cc(l,"implicit"),l.compiledExplicit=Cc(l,"explicit"),l.compiledTypeMap=c4(l.compiledImplicit,l.compiledExplicit),l};var p4=xr,u4=new os("tag:yaml.org,2002:str",{kind:"scalar",construct:function(s){return s!==null?s:""}}),y4=new os("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(s){return s!==null?s:[]}}),d4=new os("tag:yaml.org,2002:map",{kind:"mapping",construct:function(s){return s!==null?s:{}}}),f4=new p4({explicit:[u4,y4,d4]});function h4(s){if(s===null)return!0;var t=s.length;return t===1&&s==="~"||t===4&&(s==="null"||s==="Null"||s==="NULL")}function m4(){return null}function g4(s){return s===null}var _4=new os("tag:yaml.org,2002:null",{kind:"scalar",resolve:h4,construct:m4,predicate:g4,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function A4(s){if(s===null)return!1;var t=s.length;return t===4&&(s==="true"||s==="True"||s==="TRUE")||t===5&&(s==="false"||s==="False"||s==="FALSE")}function v4(s){return s==="true"||s==="True"||s==="TRUE"}function b4(s){return Object.prototype.toString.call(s)==="[object Boolean]"}var D4=new os("tag:yaml.org,2002:bool",{kind:"scalar",resolve:A4,construct:v4,predicate:b4,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"});function B4(s){return 48<=s&&s<=57||65<=s&&s<=70||97<=s&&s<=102}function C4(s){return 48<=s&&s<=55}function E4(s){return 48<=s&&s<=57}function w4(s){if(s===null)return!1;var t=s.length,n=0,o=!1,l;if(!t)return!1;if(l=s[n],(l==="-"||l==="+")&&(l=s[++n]),l==="0"){if(n+1===t)return!0;if(l=s[++n],l==="b"){for(n++;n<t;n++)if(l=s[n],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(n++;n<t;n++)if(l=s[n],l!=="_"){if(!B4(s.charCodeAt(n)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(n++;n<t;n++)if(l=s[n],l!=="_"){if(!C4(s.charCodeAt(n)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;n<t;n++)if(l=s[n],l!=="_"){if(!E4(s.charCodeAt(n)))return!1;o=!0}return!(!o||l==="_")}function k4(s){var t=s,n=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function S4(s){return Object.prototype.toString.call(s)==="[object Number]"&&s%1===0&&!Ea.isNegativeZero(s)}var x4=new os("tag:yaml.org,2002:int",{kind:"scalar",resolve:w4,construct:k4,predicate:S4,represent:{binary:function(s){return s>=0?"0b"+s.toString(2):"-0b"+s.toString(2).slice(1)},octal:function(s){return s>=0?"0o"+s.toString(8):"-0o"+s.toString(8).slice(1)},decimal:function(s){return s.toString(10)},hexadecimal:function(s){return s>=0?"0x"+s.toString(16).toUpperCase():"-0x"+s.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),T4=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function L4(s){return!(s===null||!T4.test(s)||s[s.length-1]==="_")}function R4(s){var t,n;return t=s.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var P4=/^[-+]?[0-9]+e/;function O4(s,t){var n;if(isNaN(s))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===s)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===s)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ea.isNegativeZero(s))return"-0.0";return n=s.toString(10),P4.test(n)?n.replace("e",".e"):n}function $4(s){return Object.prototype.toString.call(s)==="[object Number]"&&(s%1!==0||Ea.isNegativeZero(s))}var F4=new os("tag:yaml.org,2002:float",{kind:"scalar",resolve:L4,construct:R4,predicate:$4,represent:O4,defaultStyle:"lowercase"}),N4=f4.extend({implicit:[_4,D4,x4,F4]}),I4=N4,Ju=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Wu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function M4(s){return s===null?!1:Ju.exec(s)!==null||Wu.exec(s)!==null}function U4(s){var t,n,o,l,r,a,c,p=0,u=null,y,d,f;if(t=Ju.exec(s),t===null&&(t=Wu.exec(s)),t===null)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(n,o,l));if(r=+t[4],a=+t[5],c=+t[6],t[7]){for(p=t[7].slice(0,3);p.length<3;)p+="0";p=+p}return t[9]&&(y=+t[10],d=+(t[11]||0),u=(y*60+d)*6e4,t[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,o,l,r,a,c,p)),u&&f.setTime(f.getTime()-u),f}function q4(s){return s.toISOString()}var z4=new os("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:M4,construct:U4,instanceOf:Date,represent:q4});function j4(s){return s==="<<"||s===null}var H4=new os("tag:yaml.org,2002:merge",{kind:"scalar",resolve:j4}),wa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Q4(s){if(s===null)return!1;var t,n,o=0,l=s.length,r=wa;for(n=0;n<l;n++)if(t=r.indexOf(s.charAt(n)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function V4(s){var t,n,o=s.replace(/[\r\n=]/g,""),l=o.length,r=wa,a=0,c=[];for(t=0;t<l;t++)t%4===0&&t&&(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)),a=a<<6|r.indexOf(o.charAt(t));return n=l%4*6,n===0?(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)):n===18?(c.push(a>>10&255),c.push(a>>2&255)):n===12&&c.push(a>>4&255),new Uint8Array(c)}function J4(s){var t="",n=0,o,l,r=s.length,a=wa;for(o=0;o<r;o++)o%3===0&&o&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+s[o];return l=r%3,l===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):l===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):l===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function W4(s){return Object.prototype.toString.call(s)==="[object Uint8Array]"}var G4=new os("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Q4,construct:V4,predicate:W4,represent:J4}),Y4=Object.prototype.hasOwnProperty,K4=Object.prototype.toString;function Z4(s){if(s===null)return!0;var t=[],n,o,l,r,a,c=s;for(n=0,o=c.length;n<o;n+=1){if(l=c[n],a=!1,K4.call(l)!=="[object Object]")return!1;for(r in l)if(Y4.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function X4(s){return s!==null?s:[]}var eA=new os("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Z4,construct:X4}),sA=Object.prototype.toString;function tA(s){if(s===null)return!0;var t,n,o,l,r,a=s;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(o=a[t],sA.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function nA(s){if(s===null)return[];var t,n,o,l,r,a=s;for(r=new Array(a.length),t=0,n=a.length;t<n;t+=1)o=a[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var oA=new os("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:tA,construct:nA}),lA=Object.prototype.hasOwnProperty;function rA(s){if(s===null)return!0;var t,n=s;for(t in n)if(lA.call(n,t)&&n[t]!==null)return!1;return!0}function aA(s){return s!==null?s:{}}var iA=new os("tag:yaml.org,2002:set",{kind:"mapping",resolve:rA,construct:aA});I4.extend({implicit:[z4,H4],explicit:[G4,eA,oA,iA]});function Ec(s){return s===48?"\0":s===97?"\x07":s===98?"\b":s===116||s===9?"	":s===110?`
`:s===118?"\v":s===102?"\f":s===114?"\r":s===101?"\x1B":s===32?" ":s===34?'"':s===47?"/":s===92?"\\":s===78?"\x85":s===95?"\xA0":s===76?"\u2028":s===80?"\u2029":""}var cA=new Array(256),pA=new Array(256);for(var nn=0;nn<256;nn++)cA[nn]=Ec(nn)?1:0,pA[nn]=Ec(nn);function uA(s){return Array.from(new Set(s))}function wc(...s){let t,n,o;s.length===1?(t=0,o=1,[n]=s):[t,n,o=1]=s;const l=[];let r=t;for(;r<n;)l.push(r),r+=o||1;return l}function yA(s,t){if(!t||t==="all"||t==="*")return wc(1,s+1);const n=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[l,r]=o.split("-",2);n.push(...wc(+l,r?+r+1:s+1))}return uA(n).filter(o=>o<=s).sort((o,l)=>o-l)}const dA=["title"],Te=ye({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(s){const t=s;O(I);const n=O(Qn),o=O(Nt),l=O(Vn);function r(d=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=m.length;for(let A=0;A<d;A++)f.push(m.charAt(Math.floor(Math.random()*h)));return f.join("")}const a=H(),c=Et();rt(()=>{const d=t.at==null?o==null?void 0:o.value.length:t.at,f=T(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(d||0)),t.ranges.length-1)),m=T(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const h=r(),A=wm(t.ranges.length-1).map(b=>h+b);o!=null&&o.value&&(o.value.push(...A),bl(()=>A.forEach(b=>_r(o.value,b)),c))}En(()=>{if(!a.value)return;const A=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const b of A){const B=Array.from(b.querySelectorAll(".line")),w=yA(B.length,m.value);if(B.forEach((C,x)=>{const N=w.includes(x+1);C.classList.toggle(Ot,!0),C.classList.toggle("highlighted",N),C.classList.toggle("dishonored",!N)}),t.maxHeight){const C=b.querySelector(".line.highlighted");C&&C.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=Ym();function y(){var f,m;const d=(m=(f=a.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;d&&u(d)}return(d,f)=>{const m=J5,h=z5;return D(),U("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Ke({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Me(d.$slots,"default"),E(Be).codeCopy?(D(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:E(p)?"Copied":"Copy",onClick:f[0]||(f[0]=A=>y())},[E(p)?(D(),q(m,{key:0,class:"p-2 w-8 h-8"})):(D(),q(h,{key:1,class:"p-2 w-8 h-8"}))],8,dA)):fe("v-if",!0)],4)}}}),fA={class:"slidev-layout comparison-container w-full h-full grid grid-cols-2 gap-2 pb-0"},hA={class:"self-start col-span-2"},mA={class:"place-self-stretch ruby-type"},gA={class:"self-start float-left"},_A=["src"],AA={class:"place-self-stretch pg-type"},vA=e("div",{class:"self-start float-left"},[e("img",{src:Ca,class:"min-w-28 w-28 p-4"})],-1),bA={class:"place-self-stretch ruby"},DA={class:"place-self-stretch postgresql"},us=ye({__name:"comparison",props:{rubyRails:{type:String,default:"ruby"},footnoteClass:{type:String,default:"text-xs"}},setup(s){const t=s;O(I);const n=T(()=>{switch(t.rubyRails){case"ruby":return"./images/Ruby_logo.svg";case"rails":return"./images/Ruby_on_Rails-logo.png";case"ruby-rails":return"./images/Ruby_and_Rails_logo.png";default:return"./images/Ruby_logo.svg"}});return(o,l)=>(D(),U("div",fA,[e("div",hA,[Me(o.$slots,"default")]),e("div",mA,[e("div",gA,[e("img",{src:E(n),class:"min-w-28 w-28 p-4"},null,8,_A)]),Me(o.$slots,"rubytype")]),e("div",AA,[vA,Me(o.$slots,"pgtype")]),e("div",bA,[Me(o.$slots,"ruby")]),e("div",DA,[Me(o.$slots,"postgresql")]),e("div",{class:Oe(["self-end footnote",t.footnoteClass])},[Me(o.$slots,"footnote_ruby")],2),e("div",{class:Oe(["self-end footnote",t.footnoteClass])},[Me(o.$slots,"footnote_pg")],2)]))}});const BA=e("h2",null,"Integers",-1),CA=e("p",null,[e("code",null,"Integer")],-1),EA=e("p",null,"Variable length",-1),wA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"size             "),e("span",{style:{color:"#758575"}},"# =>  8 (bytes)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"256"),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"size  "),e("span",{style:{color:"#758575"}},"# =>  8 (bytes)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"256"),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"size      "),e("span",{style:{color:"#758575"}},"# =>  9 (bytes)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"256"),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#6394BF"}},"40"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"size "),e("span",{style:{color:"#758575"}},"# => 40 (bytes)")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"size             "),e("span",{style:{color:"#A0ADA0"}},"# =>  8 (bytes)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"256"),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"size  "),e("span",{style:{color:"#A0ADA0"}},"# =>  8 (bytes)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"256"),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"size      "),e("span",{style:{color:"#A0ADA0"}},"# =>  9 (bytes)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"256"),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#296AA3"}},"40"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"size "),e("span",{style:{color:"#A0ADA0"}},"# => 40 (bytes)")])])])],-1),kA=e("p",null,"In ActiveModel there is validation for databases:",-1),SA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"value"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2147483648"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# ActiveModel::RangeError: 2147483648 is out of range")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# for ActiveModel::Type::Integer with limit 4 bytes")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"value"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2147483648"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# ActiveModel::RangeError: 2147483648 is out of range")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# for ActiveModel::Type::Integer with limit 4 bytes")])])])],-1),xA=e("p",null,[e("code",null,"integer")],-1),TA=e("p",null,"2, 4, 8 bytes signed",-1),LA=e("div",{class:"text-xs"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Size"),e("th",null,"Range")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"smallint")]),e("td",null,"2"),e("td",null,"-32768 to +32767")]),e("tr",null,[e("td",null,[e("code",null,"integer")]),e("td",null,"4"),e("td",null,"-2147483648 to +2147483647")]),e("tr",null,[e("td",null,[e("code",null,"bigint")]),e("td",null,"8"),e("td",null,"-9223372036854775808 to +9223372036854775807")])])])],-1),RA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"tests"'),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},'"value"'),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"2147483648"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- ERROR:  integer out of range")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"tests"'),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},'"value"'),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"2147483648"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- ERROR:  integer out of range")])])])],-1),PA=e("p",null,[i("See "),e("a",{href:"https://github.com/ruby/ruby/blob/ruby_3_1/bignum.c",target:"_blank",rel:"noopener"},"bignum.c"),i(" in Ruby sources.")],-1),OA=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-numeric.html",target:"_blank",rel:"noopener"},"Numeric types docs")],-1),$A={__name:"13",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[CA,EA]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[wA]),_:1},16),kA,S(l,ne({},{ranges:[""]}),{default:_(()=>[SA]),_:1},16)]),pgtype:_(r=>[xA,TA]),postgresql:_(r=>[LA,S(l,ne({},{ranges:[""]}),{default:_(()=>[RA]),_:1},16)]),footnote_ruby:_(r=>[PA]),footnote_pg:_(r=>[OA]),default:_(()=>[BA]),_:1},16)}}},FA={class:"slidev-icon",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},NA=e("path",{fill:"#FFDC5D",d:"M20.145 31s-2.436-.167-3.068-1.792c-.646-1.659.622-2.309.622-2.309s-1.914.059-2.622-1.941c-.668-1.885.958-2.75.958-2.75s-1.871-.307-2.417-2.292C13.158 18.245 14.784 17 14.784 17H2.576C1.617 17 .001 16.458 0 14.457C-.002 12.457 1.659 12 2.576 12h20.5c1 0 1-1 0-1H20.41c-3.792 0-6.143-2.038-6.792-2.751c-.65-.713-.98-1.667-.734-2.82c.415-1.956 1.92-1.529 3.197-.975c3.078 1.337 7.464 2.254 9.538 2.533c5.858.791 10.375 5.809 10.381 11.884c.004 6.626-5.298 12.124-11.924 12.129h-3.931z"},null,-1),IA=[NA];function MA(s,t){return D(),U("svg",FA,IA)}const UA={name:"twemoji-backhand-index-pointing-left",render:MA},qA="/kaigionrails-postgresql-as-seen-by-rubyists/images/rails-pull-request-26266-light.png",zA="/kaigionrails-postgresql-as-seen-by-rubyists/images/rails-pull-request-26266-dark.png",jA=e("a",{href:"https://github.com/rails/rails/pull/26266"},[e("img",{alt:"Ruby on Rails pull request \u2116 26266",src:qA,class:"block dark:hidden"}),e("img",{alt:"Evil Martians",src:zA,class:"hidden dark:block"})],-1),HA={__name:"14",setup(s){const t={layout:"none"};return O(I),(n,o)=>{const l=UA;return D(),q(qu,ee(Z(t)),{default:_(()=>[jA,S(l,{class:"absolute left-550px bottom-66px text-5xl animate-pulse"})]),_:1},16)}}},QA=["href"],VA={class:"text-center py-1"},JA=ye({__name:"QrCode",props:{url:{type:String},caption:{type:String},class:{type:String}},setup(s){const t=s;return O(I),(n,o)=>{const l=An("qr-code-vue");return D(),U("figure",{class:Oe(["qr-code-container px-2",t.class])},[e("a",{href:t.url},[S(l,{value:t.url,class:"scaled-image w-full h-full","render-as":"svg",margin:"1"},null,8,["value"]),e("figcaption",VA,ot(t.caption),1)],8,QA)],2)}}});const Us=kn(JA,[["__scopeId","data-v-a330ef0a"]]),WA=e("h2",null,"Oh no, I have integer primary keys! What to do?",-1),GA=e("div",{class:"my-12"},null,-1),YA=e("ol",{start:"0"},[e("li",null,[e("p",null,"Don\u2019t panic!")]),e("li",null,[e("p",null,[i("Use "),e("a",{href:"https://github.com/ankane/pghero",target:"_blank",rel:"noopener"},"pghero"),i(" or Heroku "),e("a",{href:"https://devcenter.heroku.com/articles/heroku-postgres-performance-analytics#pg-diagnose",target:"_blank",rel:"noopener"},"pg:diagnose"),i(" to detect problematic primary keys.")])]),e("li",null,[e("p",null,[i("Migrate to "),e("code",null,"bigint"),i(" or "),e("code",null,"uuid"),i(" if needed (use triggers, Luke!)")])]),e("li",null,[e("p",null,"In case of emergency, remember that all integers are signed!"),e("p",null,[e("small",null,[i("You always have 2 more billions of values on the "),e("s",null,"dark"),i(" negative side!")])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"ALTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SEQUENCE"),e("span",{style:{color:"#DBD7CA"}}," tablename_id_seq MINVALUE "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2147483647"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"RESTART"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"WITH"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2147483647"),e("span",{style:{color:"#DBD7CA"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"ALTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SEQUENCE"),e("span",{style:{color:"#393A34"}}," tablename_id_seq MINVALUE "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2147483647"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"RESTART"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"WITH"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2147483647"),e("span",{style:{color:"#393A34"}},";")])])])])])],-1),KA=e("p",null,[i("Example of pkey migration from int to bigint: "),e("a",{href:"https://engineering.silverfin.com/pg-zero-downtime-bigint-migration/",target:"_blank",rel:"noopener"},"engineering.silverfin.com/pg-zero-downtime-bigint-migration")],-1),ZA={__name:"15",setup(s){const t={layout:"footnote",footnoteClass:"text-xs"};return O(I),(n,o)=>{const l=Us;return D(),q(wt,ee(Z(t)),{footnote:_(r=>[KA]),default:_(()=>[WA,GA,YA,S(l,{url:"https://github.com/ankane/pghero",caption:"pghero",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},XA=e("h2",null,"Floating point numbers",-1),ev=e("p",{class:"text-3xl absolute top-20px left-400px rotate-340 animate-pulse text-red-500 p-2 border-3 border-red-500"},"IEEE 754",-1),sv=e("p",null,[e("code",null,"Float")],-1),tv=e("p",null,"8 bytes (double-precision)",-1),nv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"0.1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.2"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"# => 0.30000000000000004")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# => 1.7976931348623157e+308")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1e+308'"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_f "),e("span",{style:{color:"#758575"}},"# => Infinity")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# BUT!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.1'"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_f")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 1.7976931348623157e+308 \u{1F914}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.1'"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_f"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => true \u{1F92F}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"NAN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"NAN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# => false")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"0.1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.2"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# => 0.30000000000000004")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# => 1.7976931348623157e+308")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1e+308'"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_f "),e("span",{style:{color:"#A0ADA0"}},"# => Infinity")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# BUT!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.1'"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_f")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 1.7976931348623157e+308 \u{1F914}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.1'"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_f"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => true \u{1F92F}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"NAN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"NAN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# => false")])])])],-1),ov=e("p",null,[e("code",null,"real"),i(" \u2014 4 bytes")],-1),lv=e("p",null,[e("code",null,"double"),i(" \u2014 8 bytes")],-1),rv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- 0.30000000000000004")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- 0.3 (but it is NOT float!)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"--- ERROR:  value out of range: overflow")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'+inf'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"double precision"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- Infinity \u{1F937}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.1'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- true \xAF\\_(\u30C4)_/\xAF")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true \u{1F92F}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- 0.30000000000000004")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- 0.3 (but it is NOT float!)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"--- ERROR:  value out of range: overflow")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'+inf'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"double precision"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- Infinity \u{1F937}")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," ")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.1'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- true \xAF\\_(\u30C4)_/\xAF")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true \u{1F92F}")])])])],-1),av=e("p",null,[i("See Ruby docs for "),e("a",{href:"https://ruby-doc.org/core-3.1.0/Float.html",target:"_blank",rel:"noopener"},"Float")],-1),iv=e("p",null,[i("More fun at "),e("a",{href:"https://0.30000000000000004.com/",target:"_blank",rel:"noopener"},"0.30000000000000004.com"),i("!")],-1),cv={__name:"16",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te,r=Us;return D(),q(us,ee(Z(t)),{rubytype:_(a=>[sv,tv]),ruby:_(a=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[nv]),_:1},16)]),pgtype:_(a=>[ov,lv]),postgresql:_(a=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[rv]),_:1},16)]),footnote_ruby:_(a=>[av]),footnote_pg:_(a=>[iv,S(r,{url:"https://0.30000000000000004.com/",caption:"0.30000000000000004.com",class:"w-32 absolute bottom-10px right-10px"})]),default:_(()=>[XA,ev]),_:1},16)}}},pv=e("p",null,"Don\u2019t use floats for calculating money!",-1),uv=e("div",{class:"text-5xl my-12"}," \u{1F911}\u{1F4A5}\u{1F915} ",-1),yv=e("p",null,"Never ever!",-1),dv={__name:"17",setup(s){const t={layout:"center",class:"text-3xl text-center"};return O(I),(n,o)=>(D(),q(vo,ee(Z(t)),{default:_(()=>[pv,uv,yv]),_:1},16))}},fv=e("h2",null,"Arbitrary precision numbers",-1),hv=e("p",null,[e("code",null,"BigDecimal")],-1),mv=e("p",null,"Variable length",-1),gv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.1"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.2"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"# => 0.3e0")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"NaN"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"NaN"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# => false")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"1.0"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.0"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"#=> Infinity")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# To match PostgreSQL behavior:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"mode"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"EXCEPTION_OVERFLOW"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"1.0"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.0"'),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Computation results in 'Infinity' (FloatDomainError)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.1"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.2"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_d "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.30000000000000004")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# true \u{1F914}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.1"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.2"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# => 0.3e0")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"NaN"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"NaN"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# => false")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"1.0"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.0"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"#=> Infinity")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# To match PostgreSQL behavior:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"mode"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"EXCEPTION_OVERFLOW"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"1.0"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.0"'),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Computation results in 'Infinity' (FloatDomainError)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.1"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.2"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_d "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.30000000000000004")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# true \u{1F914}")])])])],-1),_v=e("p",null,[e("code",null,"numeric")],-1),Av=e("p",null,"Variable length",-1),vv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- 0.3 which is decimal")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"decimal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"decimal"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1.0'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"decimal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.0'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"decimal"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- ERROR:  division by zero")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- false")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- 0.3 which is decimal")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"decimal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"decimal"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1.0'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"decimal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.0'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"decimal"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- ERROR:  division by zero")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- false")])])])],-1),bv=e("p",null,[i("See Ruby docs for "),e("a",{href:"https://ruby-doc.org/stdlib-3.1.0/libdoc/bigdecimal/rdoc/BigDecimal.html",target:"_blank",rel:"noopener"},"BigDecimal")],-1),Dv=e("p",null,[e("strong",null,[i("Use "),e("code",null,"numeric"),i(" to store money!")])],-1),Bv={__name:"18",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[hv,mv]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[gv]),_:1},16)]),pgtype:_(r=>[_v,Av]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[vv]),_:1},16)]),footnote_ruby:_(r=>[bv]),footnote_pg:_(r=>[Dv]),default:_(()=>[fv]),_:1},16)}}},Cv=e("h2",null,"But there is money type, isn\u2019t it?",-1),Ev=e("p",null,[e("code",null,"BigDecimal")],-1),wv=e("p",null,"Variable size",-1),kv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# If the database locale setting isn't `en_US`:")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Creation may fail:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"create!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100500.42"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# ERROR: invalid input syntax for type money: "100500.42"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Or it can succeed, but won't be able to be parsed back:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"price "),e("span",{style:{color:"#758575"}},"# => 0.0")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# If the database locale setting isn't `en_US`:")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Creation may fail:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"create!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100500.42"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# ERROR: invalid input syntax for type money: "100500.42"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Or it can succeed, but won't be able to be parsed back:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"price "),e("span",{style:{color:"#A0ADA0"}},"# => 0.0")])])])],-1),Sv=e("p",null,[e("code",null,"money")],-1),xv=e("p",null,"8 byte fixed-precision number.",-1),Tv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- on production:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100500"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"money"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- $100,500.42")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- on dev machine:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100500"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"money"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- \xA5 100,500")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- \u{1F92F} But it should be dollars, and where are my cents?")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- on production:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100500"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"money"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- $100,500.42")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- on dev machine:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100500"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"money"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- \xA5 100,500")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- \u{1F92F} But it should be dollars, and where are my cents?")])])])],-1),Lv=e("p",null,[i("ActiveRecord has to parse textual representation, see "),e("a",{href:"https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36",target:"_blank",rel:"noopener"},"connection_adapters/postgresql/oid/money.rb")],-1),Rv=e("p",null,[i("Also see "),e("a",{href:"https://github.com/rails/rails/issues/31457",target:"_blank",rel:"noopener"},"issue \u2116 31457"),i(" for lots of pain.")],-1),Pv=e("p",null,[i("Both output and acceptable input format depends on session-level "),e("code",null,"lc_monetary"),i(" setting!")],-1),Ov=e("p",null,[i("Precision is defined by "),e("code",null,"lc_monetary"),i(" at database creation time and can\u2019t be changed!")],-1),$v={__name:"19",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[Ev,wv]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[kv]),_:1},16)]),pgtype:_(r=>[Sv,xv]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[Tv]),_:1},16)]),footnote_ruby:_(r=>[Lv,Rv]),footnote_pg:_(r=>[Pv,Ov]),default:_(()=>[Cv]),_:1},16)}}},Fv=e("h2",null,"Strings and texts, lyrics and prose",-1),Nv=e("p",null,[e("code",null,"String")],-1),Iv=e("p",null,"Variable size",-1),Mv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"encoding")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => #<Encoding:UTF-8>")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"encoding")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => #<Encoding:UTF-8>")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"valid_encoding?")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => false")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"\u3053\u308C'),e("span",{style:{color:"#D4976C"}},"\\x00"),e("span",{style:{color:"#C98A7D"}},'\u3084\u3070\u3044!"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"valid_encoding?")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => true")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"encoding")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => #<Encoding:UTF-8>")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"encoding")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => #<Encoding:UTF-8>")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"valid_encoding?")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => false")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"\u3053\u308C'),e("span",{style:{color:"#A65E2B"}},"\\x00"),e("span",{style:{color:"#B56959"}},'\u3084\u3070\u3044!"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"valid_encoding?")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => true")])])])],-1),Uv=e("p",null,[e("code",null,"varchar"),i(", "),e("code",null,"text")],-1),qv=e("p",null,"variable size, max 1 GB",-1),zv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- \u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," E"),e("span",{style:{color:"#C98A7D"}},"'\\xe3\\x2e\\x2e'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," E"),e("span",{style:{color:"#C98A7D"}},"'\u3053\u308C\\x00\u3084\u3070\u3044!'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- \u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," E"),e("span",{style:{color:"#B56959"}},"'\\xe3\\x2e\\x2e'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," E"),e("span",{style:{color:"#B56959"}},"'\u3053\u308C\\x00\u3084\u3070\u3044!'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00')])])])],-1),jv=e("p",null,[i("Read the docs: "),e("a",{href:"https://ruby-doc.org/core-3.1.2/String.html",target:"_blank",rel:"noopener"},"String")],-1),Hv=e("p",null,[i("Read the docs: "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-character.html",target:"_blank",rel:"noopener"},"8.3. Character Types")],-1),Qv={__name:"20",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[Nv,Iv]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[Mv]),_:1},16)]),pgtype:_(r=>[Uv,qv]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[zv]),_:1},16)]),footnote_ruby:_(r=>[jv]),footnote_pg:_(r=>[Hv]),default:_(()=>[Fv]),_:1},16)}}},Vv=e("h1",null,"So many string types!",-1),Jv=e("div",{class:"my-12"},null,-1),Wv=e("ol",null,[e("li",null,[e("p",null,[i("Don\u2019t use "),e("code",null,"char(n)")]),e("p",null,[i("It is always size of "),e("code",null,"n"),i(" and stores unnecessary spaces at right. Mostly for compatibility with older applications.")])]),e("li",null,[e("p",null,[e("code",null,"varchar"),i(" and "),e("code",null,"text"),i(" are effectively the same, choose whatever you like.")]),e("p",null,[e("code",null,"string"),i(" in migrations is "),e("code",null,"varchar"),i(" in PostgreSQL.")])])],-1),Gv=e("div",{class:"my-12"},null,-1),Yv=e("p",null,[i("\u{1F4A1} "),e("strong",null,"Did you know?")],-1),Kv=e("p",null,[i("SimpleForm gem will render multi-line HTML "),e("code",null,"<textarea>"),i(" tag for text type and single-line "),e("code",null,'<input type="text">'),i(" for character varying.")],-1),Zv=e("p",null,"Convention over configuration!",-1),Xv=e("p",null,[i("See SimpleForm gem README: "),e("a",{href:"https://github.com/heartcombo/simple_form#available-input-types-and-defaults-for-each-column-type",target:"_blank",rel:"noopener"},"github.com/heartcombo/simple_form")],-1),e2={__name:"21",setup(s){const t={layout:"footnote"};return O(I),(n,o)=>(D(),q(wt,ee(Z(t)),{footnote:_(l=>[Xv]),default:_(()=>[Vv,Jv,Wv,Gv,Yv,Kv,Zv]),_:1},16))}},s2=e("p",null,[i("Please, use "),e("a",{href:"https://utf8everywhere.org/"},"utf8everywhere.org"),i("!")],-1),t2={__name:"22",setup(s){const t={layout:"center",class:"text-2xl"};return O(I),(n,o)=>{const l=Us;return D(),q(vo,ee(Z(t)),{default:_(()=>[s2,S(l,{url:"https://utf8everywhere.org/",caption:"utf8everywhere.org",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},n2=e("h2",null,"Binary data",-1),o2=e("p",null,[e("code",null,"String")],-1),l2=e("p",null,"Variable size",-1),r2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"data "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"File"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"binread"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"\u201Cmeme"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"png\u201D"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "\\x89PNG\\r\\n\\x1A\u2026"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"data"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"encoding "),e("span",{style:{color:"#758575"}},"# => #<Encoding:ASCII-8BIT>")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"data"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"bytesize "),e("span",{style:{color:"#758575"}},"# => 46534")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "\\x89PNG\\r\\n\\x1A\u2026"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob_before_type_cast"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"bytesize")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 46534")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob_before_type_cast")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "\\\\x89504e470d0a1a0a"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob_before_type_cast"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"bytesize")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 93070")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"data "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"File"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"binread"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"\u201Cmeme"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"png\u201D"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "\\x89PNG\\r\\n\\x1A\u2026"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"data"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"encoding "),e("span",{style:{color:"#A0ADA0"}},"# => #<Encoding:ASCII-8BIT>")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"data"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"bytesize "),e("span",{style:{color:"#A0ADA0"}},"# => 46534")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "\\x89PNG\\r\\n\\x1A\u2026"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob_before_type_cast"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"bytesize")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 46534")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob_before_type_cast")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "\\\\x89504e470d0a1a0a"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob_before_type_cast"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"bytesize")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 93070")])])])],-1),a2=e("p",null,[e("code",null,"bytea")],-1),i2=e("p",null,"Variable size, max 1 GB",-1),c2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"SELECT '\\x89504e470d0a1a0a\u2026'::bytea;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}})]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"# Note hexadecimal format \u2191")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"SELECT '\\x89504e470d0a1a0a\u2026'::bytea;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}})]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"# Note hexadecimal format \u2191")])])])],-1),p2=e("p",null,"Memory and network traffic consumption: \u{1F4C8}",-1),u2=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-binary.html",target:"_blank",rel:"noopener"},"Binary Data Types"),i(" page in the docs.")],-1),y2={__name:"23",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[o2,l2]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[r2]),_:1},16)]),pgtype:_(r=>[a2,i2]),postgresql:_(r=>[c2]),footnote_ruby:_(r=>[p2]),footnote_pg:_(r=>[u2]),default:_(()=>[n2]),_:1},16)}}},Gu=ye({__name:"Transform",props:{scale:null,origin:null},setup(s){const t=s;O(I);const n=T(()=>{const o=[];return t.scale!=null&&o.push(`scale(${t.scale||1})`),{transform:o.join(" "),"transform-origin":t.origin||"top left"}});return(o,l)=>(D(),U("div",{style:Ke(E(n))},[Me(o.$slots,"default")],4))}}),d2={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f2=e("path",{fill:"currentColor",d:"M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71a4.56 4.56 0 0 0 2-2.5a8.89 8.89 0 0 1-2.86 1.1a4.52 4.52 0 0 0-7.7 4.11a12.79 12.79 0 0 1-9.3-4.71a4.51 4.51 0 0 0 1.4 6a4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45a4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2"},null,-1),h2=[f2];function m2(s,t){return D(),U("svg",d2,h2)}const g2={name:"carbon-logo-twitter",render:m2},_2=["data-waitfor"],A2={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},v2={class:"m-auto animate-pulse text-4xl"},b2={key:0},D2=ye({__name:"Tweet",props:{id:null,scale:null,conversation:null},setup(s){var c;const t=s;O(I);const n=H(),o=Et(),l=H(!1),r=H(!1);async function a(){const p=await window.twttr.widgets.createTweet(t.id.toString(),n.value,{theme:wl.value?"dark":"light",conversation:t.conversation||"none"});l.value=!0,p===void 0&&(r.value=!0)}return(c=window==null?void 0:window.twttr)!=null&&c.widgets?rt(a):C1("https://platform.twitter.com/widgets.js",()=>{o.isMounted?a():rt(a,o)},{async:!0}),(p,u)=>{const y=g2,d=Gu;return D(),q(d,{scale:s.scale||1},{default:_(()=>[e("div",{ref_key:"tweet",ref:n,class:"tweet","data-waitfor":r.value?"":"iframe"},[!l.value||r.value?(D(),U("div",A2,[e("div",v2,[S(y),r.value?(D(),U("span",b2,'Could not load tweet with id="'+ot(t.id)+'"',1)):fe("v-if",!0)])])):fe("v-if",!0)],8,_2)]),_:1},8,["scale"])}}}),B2=e("h2",null,"What if 1 GB isn\u2019t enough?",-1),C2=e("p",null,"You can\u2019t store more in a table column (hard limit)",-1),E2=e("p",null,"But you can store up 4 TB in large objects table!",-1),w2=e("p",null,"And there is a gem for that:",-1),k2=e("p",null,[e("a",{href:"https://github.com/lsylvester/active_storage-postgresql",target:"_blank",rel:"noopener"},"active_storage-postgresql")],-1),S2=e("div",{class:"absolute bottom-5"},[i(" Beware performance implications of TOAST \u2192 "),e("br"),e("small",null,[i("More about it in PG docs: "),e("a",{href:"https://www.postgresql.org/docs/14/storage-toast.html"},"70.2. TOAST")])],-1),x2={__name:"24",setup(s){const t={};return O(I),(n,o)=>{const l=D2,r=Gu,a=Us;return D(),q(Ue,ee(Z(t)),{default:_(()=>[B2,C2,E2,w2,k2,S2,S(r,{scale:"0.67",origin:"top right",class:"min-w-550px absolute top-5 right-5"},{default:_(()=>[S(l,{id:"1526922431780233218"})]),_:1}),S(a,{url:"https://twitter.com/Envek/status/1526922431780233218",class:"w-32 absolute bottom-8px right-12px"})]),_:1},16)}}},T2=e("h2",null,"Dates",-1),L2=e("p",null,[e("code",null,"Date")],-1),R2=e("p",null,"Internally stores number of days since year 4713 BC up to infinity.",-1),P2=e("blockquote",null,[e("p",null,"The Julian day number is in elapsed days since noon (Greenwich Mean Time) on January 1, 4713 BCE (in the Julian calendar)."),e("p",null,"The day count is virtually the astronomical Julian day number.")],-1),O2=e("p",null,[e("code",null,"date")],-1),$2=e("p",null,"4 bytes",-1),F2=e("p",null,"Internally stores number of days since year 4713 BC up to year 5874897 AD.",-1),N2=e("blockquote",null,[e("p",null,"In the Julian Date system, each day has a sequential number, starting from JD 0 (which is sometimes called the Julian Date). JD 0 corresponds to 1 January 4713 BC in the Julian calendar.")],-1),I2=e("p",null,[i("See the docs for "),e("a",{href:"https://ruby-doc.org/stdlib-3.1.2/libdoc/date/rdoc/Date.html#method-c-new",target:"_blank",rel:"noopener"},"Date"),i(" class.")],-1),M2=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/datetime-julian-dates.html",target:"_blank",rel:"noopener"},"B.7. Julian Dates"),i(" in PostgreSQL docs.")],-1),U2={__name:"25",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>(D(),q(us,ee(Z(t)),{rubytype:_(l=>[L2]),ruby:_(l=>[R2,P2]),pgtype:_(l=>[O2,$2]),postgresql:_(l=>[F2,N2]),footnote_ruby:_(l=>[I2]),footnote_pg:_(l=>[M2]),default:_(()=>[T2]),_:1},16))}},q2=e("h2",null,"Time and timezones",-1),z2=e("p",null,[e("code",null,"Time")],-1),j2=e("p",{class:"text-xs"},[e("code",null,"AS::TimeWithZone")],-1),H2=e("p",null,[e("small",{class:"text-xs"},"Two UNIX timestamps inside and tzdata also")],-1),Q2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"now "),e("span",{style:{color:"#758575"}},"# => 2022-10-22 13:42:42 +0900")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#758575"}},"# => Sat, 22 Oct 2022 04:42:42 UTC +00:00")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"time_zone")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"use_zone"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Asia/Tokyo"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => Sat, 22 Oct 2020 13:42:42 JST +09:00")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"now "),e("span",{style:{color:"#A0ADA0"}},"# => 2022-10-22 13:42:42 +0900")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#A0ADA0"}},"# => Sat, 22 Oct 2022 04:42:42 UTC +00:00")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"time_zone")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"use_zone"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Asia/Tokyo"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => Sat, 22 Oct 2020 13:42:42 JST +09:00")])])])],-1),V2=e("p",null,[e("code",null,"timestamp")],-1),J2=e("p",null,[e("code",null,"timestamptz")],-1),W2=e("p",null,[i("8 bytes, "),e("small",null,"microsecond precision")],-1),G2=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," tests (t1 "),e("span",{style:{color:"#4D9375"}},"timestamp"),e("span",{style:{color:"#DBD7CA"}},", t2 "),e("span",{style:{color:"#CB7676"}},"timestamptz"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Etc/UTC'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (t1, t2) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Asia/Tokyo'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (t1, t2) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Europe/Lisbon'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (t1, t2) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Asia/Tokyo'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," tests;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"             t1      |              t2")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"---------------------+--------------------------------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"04"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}}," \u2502 "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"02"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"09"),e("span",{style:{color:"#DBD7CA"}}," \u2502")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}}," \u2502 "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"02"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"09"),e("span",{style:{color:"#DBD7CA"}}," \u2502")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"05"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}}," \u2502 "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"02"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"09"),e("span",{style:{color:"#DBD7CA"}}," \u2502")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," tests (t1 "),e("span",{style:{color:"#1C6B48"}},"timestamp"),e("span",{style:{color:"#393A34"}},", t2 "),e("span",{style:{color:"#AB5959"}},"timestamptz"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Etc/UTC'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," tests (t1, t2) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Asia/Tokyo'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," tests (t1, t2) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Europe/Lisbon'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," tests (t1, t2) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Asia/Tokyo'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," tests;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"             t1      |              t2")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"---------------------+--------------------------------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"04"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}}," \u2502 "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"02"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"09"),e("span",{style:{color:"#393A34"}}," \u2502")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}}," \u2502 "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"02"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"09"),e("span",{style:{color:"#393A34"}}," \u2502")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"05"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}}," \u2502 "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"02"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"09"),e("span",{style:{color:"#393A34"}}," \u2502")])])])],-1),Y2=e("p",null,"Ruby on Rails uses UTC timezone internally.",-1),K2=e("p",null,[i("Use "),e("code",null,"timestamp with time zone"),i(" whenever possible!")],-1),Z2={__name:"26",setup(s){const t={layout:"comparison",rubyRails:"ruby-rails"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[z2,j2,H2]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[Q2]),_:1},16)]),pgtype:_(r=>[V2,J2,W2]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[G2]),_:1},16)]),footnote_ruby:_(r=>[Y2]),footnote_pg:_(r=>[K2]),default:_(()=>[q2]),_:1},16)}}},X2=e("h2",null,"How to not mess up with timezones",-1),eb=e("div",{class:"my-12"},null,-1),sb=e("ol",null,[e("li",null,[e("p",null,"Use timezone-aware methods"),e("p",null,[i("Use "),e("code",null,"Time.current"),i(" and "),e("code",null,"Date.current"),i(" instead of "),e("code",null,"Time.now"),i(" and "),e("code",null,"Date.today")])]),e("li",null,[e("p",null,"Convert timestamps to user time zone"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"use_zone"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"timezone"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"# Do SQL queries, render views, \u2026")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# or")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"in_time_zone"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"timezone"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"use_zone"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"timezone"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# Do SQL queries, render views, \u2026")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# or")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"in_time_zone"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"timezone"),e("span",{style:{color:"#8E8F8B"}},")")])])])])]),e("li",null,[e("p",null,"Don\u2019t use dates in SQL, use timestamps"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- Posts.where(published_at: Date.today...Date.tomorrow)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ Posts.where(published_at: Time.current.beginning_of_day..Time.current.end_of_day)")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- Posts.where(published_at: Date.today...Date.tomorrow)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ Posts.where(published_at: Time.current.beginning_of_day..Time.current.end_of_day)")])])])])])],-1),tb=e("p",null,[i("More tips here: "),e("a",{href:"https://thoughtbot.com/blog/its-about-time-zones",target:"_blank",rel:"noopener"},"thoughtbot.com/blog/its-about-time-zones")],-1),nb={__name:"27",setup(s){const t={layout:"footnote"};return O(I),(n,o)=>{const l=Us;return D(),q(wt,ee(Z(t)),{footnote:_(r=>[tb,S(l,{url:"https://thoughtbot.com/blog/its-about-time-zones",class:"w-32 absolute bottom-10px right-10px"})]),default:_(()=>[X2,eb,sb]),_:1},16)}}},ob=["width","height","src"],lb=ye({__name:"Youtube",props:{id:null,width:null,height:null},setup(s){return O(I),(t,n)=>(D(),U("iframe",{class:"youtube",width:s.width,height:s.height,src:`https://www.youtube.com/embed/${s.id}`,title:"YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ob))}}),rb=e("h2",null,"Time zones are hard",-1),ab={__name:"28",setup(s){const t={layout:"center"};return O(I),(n,o)=>{const l=lb,r=Us;return D(),q(vo,ee(Z(t)),{default:_(()=>[rb,S(l,{id:"-5wpm-gesOY",width:"640",height:"360",class:"pt-10"}),S(r,{url:"https://youtu.be/-5wpm-gesOY",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},ib=e("h2",null,"Void and uncertainity",-1),cb=e("p",null,[e("code",null,"NilClass")],-1),pb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => true \xAF\\_(\u30C4)_/\xAF")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => true \xAF\\_(\u30C4)_/\xAF")])])])],-1),ub=e("p",null,[e("code",null,"NULL")],-1),yb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- NULL \u{1F6A8}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DISTINCT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- false")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Ruby'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- NULL \u{1F6A8}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Ruby'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- false")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Ruby'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DISTINCT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- NULL \u{1F6A8}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DISTINCT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- false")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Ruby'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- NULL \u{1F6A8}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Ruby'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- false")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Ruby'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DISTINCT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true")])])])],-1),db={__name:"29",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[cb]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[pb]),_:1},16)]),pgtype:_(r=>[ub]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[yb]),_:1},16)]),default:_(()=>[ib]),_:1},16)}}},fb=e("h1",null,"PostgreSQL-specific datatypes",-1),hb={__name:"30",setup(s){const t={layout:"center"};return O(I),(n,o)=>(D(),q(vo,ee(Z(t)),{default:_(()=>[fb]),_:1},16))}},mb=e("h2",null,"JSON",-1),gb=e("p",null,[e("code",null,"Hash"),i(", "),e("code",null,"Array")],-1),_b=e("p",null,"Be careful with symbols as keys",-1),Ab=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"foo"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"bar"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"foo"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"baz"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}."),e("span",{style:{color:"#DBD7CA"}},"to_json")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# {"foo":"baz"}')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"foo"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"bar"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"foo"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"baz"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}."),e("span",{style:{color:"#393A34"}},"to_json")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# {"foo":"baz"}')])])])],-1),vb=e("p",null,[i("Define "),e("code",null,"as_json"),i(" method on your classes to serialize them to JSON automatically.")],-1),bb=e("p",null,[i("Behavior of "),e("code",null,"JSON.dump"),i(" and "),e("code",null,"to_json"),i(" in Rails is different!")],-1),Db=e("p",null,[i("See ActiveSupport\u2019s "),e("a",{href:"https://github.com/rails/rails/blob/1891a3ffcc123de89c47011f36c547354c669481/activesupport/lib/active_support/core_ext/object/json.rb",target:"_blank",rel:"noopener"},"core_ext/object/json.rb")],-1),Bb=e("p",null,[e("code",null,"json"),i(", "),e("code",null,"jsonb")],-1),Cb=e("p",null,"Variable length, up to 1GB",-1),Eb=e("p",null,[i("JSON saves value as is "),e("small",null,"(it is just a string)")],-1),wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"json"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- {"foo": "bar","foo":"baz"}')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"json"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- {"foo": "bar","foo":"baz"}')])])])],-1),kb=e("p",null,"JSONB is effective but strict: no duplicate keys, doesn\u2019t preserve whitespaces, etc\u2026",-1),Sb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#DBD7CA"}},"::jsonb;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- {"foo": "baz"}')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#393A34"}},"::jsonb;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- {"foo": "baz"}')])])])],-1),xb=e("p",null,[i("Inside: string "),e("small",null,"(no null-bytes!)"),i(", numeric, \u2026")],-1),Tb=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-json.html",target:"_blank",rel:"noopener"},"8.14 JSON Types"),i(" and "),e("a",{href:"https://www.postgresql.org/docs/14/functions-json.html",target:"_blank",rel:"noopener"},"9.16 JSON Functions and Operators")],-1),Lb={__name:"31",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[gb]),ruby:_(r=>[_b,S(l,ne({},{ranges:[""]}),{default:_(()=>[Ab]),_:1},16),vb,bb]),footnote_ruby:_(r=>[Db]),pgtype:_(r=>[Bb,Cb]),postgresql:_(r=>[Eb,S(l,ne({},{ranges:[""]}),{default:_(()=>[wb]),_:1},16),kb,S(l,ne({},{ranges:[""]}),{default:_(()=>[Sb]),_:1},16),xb]),footnote_pg:_(r=>[Tb]),default:_(()=>[mb]),_:1},16)}}},Rb=e("h2",null,"JSON on steroids",-1),Pb=e("a",{href:"https://github.com/DmitryTsepelev/store_model",class:"block my-10 text-center no-underline border-none hover:border-none"},[e("img",{alt:"store_model gem",src:"https://opengraph.githubassets.com/1a8dd076f9dc2fdca766c80094db91f36af4a302e4708ed0f3ad3d6b9535733d/DmitryTsepelev/store_model",class:"w-96 mx-auto"})],-1),Ob=e("p",null,[i("Use "),e("a",{href:"https://github.com/DmitryTsepelev/store_model",target:"_blank",rel:"noopener"},"store_model"),i(" gem to make powerful value objects from JSON fields.")],-1),$b=e("p",null,[e("strong",null,"But don\u2019t overuse!")],-1),Fb=e("p",null,"There is performance penalty for serialization and deserialization.",-1),Nb={__name:"32",setup(s){const t={};return O(I),(n,o)=>{const l=Us;return D(),q(Ue,ee(Z(t)),{default:_(()=>[Rb,Pb,Ob,$b,Fb,S(l,{url:"https://github.com/DmitryTsepelev/store_model",caption:"store_model gem repo",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},Ib=e("h2",null,"Ranges",-1),Mb=e("p",null,[e("code",null,"Range")],-1),Ub=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},".."),e("span",{style:{color:"#6394BF"}},"7"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"or"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"..."),e("span",{style:{color:"#6394BF"}},"8")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},".."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"day"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_now")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# endless or beginless ranges")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},"..")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#E0A569"}},"Date"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"yesterday")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#858585"}},".."),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"or"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Range"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Beginning is always included if possible :-(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"pluck"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},`"intrange(1, 5, '()')"`),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"first "),e("span",{style:{color:"#758575"}},"# 2...5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"pluck"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},`"tstzrange(now(), now() + '1 hour', '()')"`),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"first")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# ArgumentError: The Ruby Range object does not")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# support excluding the beginning of a Range.")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},".."),e("span",{style:{color:"#296AA3"}},"7"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"or"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"..."),e("span",{style:{color:"#296AA3"}},"8")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},".."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"day"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_now")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# endless or beginless ranges")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},"..")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#B58451"}},"Date"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"yesterday")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#8E8F8B"}},".."),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"or"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Range"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Beginning is always included if possible :-(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"pluck"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},`"intrange(1, 5, '()')"`),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"first "),e("span",{style:{color:"#A0ADA0"}},"# 2...5")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"pluck"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},`"tstzrange(now(), now() + '1 hour', '()')"`),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"first")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# ArgumentError: The Ruby Range object does not")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# support excluding the beginning of a Range.")])])])],-1),qb=e("p",null,[e("code",null,"intrange"),i(", "),e("code",null,"tsrange"),i(", \u2026")],-1),zb=e("p",null,[e("code",null,"intmultirange"),i(", \u2026")],-1),jb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," int8range("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"7"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'[]'"),e("span",{style:{color:"#DBD7CA"}},"); "),e("span",{style:{color:"#758575"}},"-- [5,8]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," int8range("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#DBD7CA"}},"); "),e("span",{style:{color:"#758575"}},"-- [5,8)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," tstzrange("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1 day'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'()'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- endless or beginless ranges")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," tstzrange("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," tstzrange("),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- PG 14: Multiranges and operators")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," nummultirange(numrange("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#DBD7CA"}},"))")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," nummultirange(numrange("),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#DBD7CA"}},"));")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- {[1,4),[6,20)}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- and many more\u2026 (exclusion constraints!)")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," int8range("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"7"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'[]'"),e("span",{style:{color:"#393A34"}},"); "),e("span",{style:{color:"#A0ADA0"}},"-- [5,8]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," int8range("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#393A34"}},"); "),e("span",{style:{color:"#A0ADA0"}},"-- [5,8)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," tstzrange("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1 day'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'()'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- endless or beginless ranges")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," tstzrange("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," tstzrange("),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- PG 14: Multiranges and operators")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," nummultirange(numrange("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#393A34"}},"))")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," nummultirange(numrange("),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#393A34"}},"));")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- {[1,4),[6,20)}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- and many more\u2026 (exclusion constraints!)")])])])],-1),Hb=e("p",null,[i("Additional methods in the "),e("a",{href:"https://github.com/rubyworks/facets",target:"_blank",rel:"noopener"},"facets"),i(" gem.")],-1),Qb=e("p",null,[e("a",{href:"https://www.postgresql.org/docs/14/rangetypes.html",target:"_blank",rel:"noopener"},"https://www.postgresql.org/docs/14/rangetypes.html")],-1),Vb={__name:"33",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[Mb]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[Ub]),_:1},16)]),pgtype:_(r=>[qb,zb]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[jb]),_:1},16)]),footnote_ruby:_(r=>[Hb]),footnote_pg:_(r=>[Qb]),default:_(()=>[Ib]),_:1},16)}}},Jb=e("h2",null,"UUID",-1),Wb=e("div",{class:"absolute bottom-75px left-180px rotate-355"},[e("p",null,[i("Also take a look at upcoming UUIDv6, "),e("strong",null,"v7"),i(", and v8!")]),e("p",{class:"text-xs"},[e("a",{href:"https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04"},"datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04")])],-1),Gb=e("p",null,[e("code",null,"String")],-1),Yb=e("p",null,"36 bytes",-1),Kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# All-random UUIDv4")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"SecureRandom"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"uuid")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => \u201C40f15398-4b38-4e16-8b3c-ff16fc960d38\u201D")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Determined UUIDv5 (hash-based)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Digest"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"UUID"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"uuid_v5"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Digest"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"UUID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"DNS_NAMESPACE"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"name"'),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "9b8edca0-90f2-5031-8e5d-3f708834696c"')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# All-random UUIDv4")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"SecureRandom"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"uuid")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => \u201C40f15398-4b38-4e16-8b3c-ff16fc960d38\u201D")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Determined UUIDv5 (hash-based)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Digest"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"UUID"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"uuid_v5"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Digest"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"UUID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"DNS_NAMESPACE"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"name"'),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "9b8edca0-90f2-5031-8e5d-3f708834696c"')])])])],-1),Zb=e("p",null,[e("code",null,"uuid")],-1),Xb=e("p",null,"16 bytes",-1),e7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," EXTENSION "),e("span",{style:{color:"#C98A7D"}},'"pgcrypto"'),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," gen_random_uuid"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," EXTENSION "),e("span",{style:{color:"#C98A7D"}},'"uuid-ossp"'),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," uuid_generate_v5(uuid_ns_dns"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 9b8edca0-90f2-5031-8e5d-3f708834696c")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," EXTENSION "),e("span",{style:{color:"#B56959"}},'"pgcrypto"'),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," gen_random_uuid"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," EXTENSION "),e("span",{style:{color:"#B56959"}},'"uuid-ossp"'),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," uuid_generate_v5(uuid_ns_dns"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 9b8edca0-90f2-5031-8e5d-3f708834696c")])])])],-1),s7=e("p",null,[i("See Rails docs for "),e("a",{href:"https://api.rubyonrails.org/v6.0.3/classes/Digest/UUID.html",target:"_blank",rel:"noopener"},"Digest::UUID")],-1),t7=e("p",null,[i("See docs for "),e("a",{href:"https://www.postgresql.org/docs/14/pgcrypto.html",target:"_blank",rel:"noopener"},"pgcrypto"),i(" and "),e("a",{href:"https://www.postgresql.org/docs/14/uuid-ossp.html",target:"_blank",rel:"noopener"},"uuid-ossp"),i(" extensions.")],-1),n7={__name:"34",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Us,r=Te;return D(),q(us,ee(Z(t)),{rubytype:_(a=>[Gb,Yb]),ruby:_(a=>[S(r,ne({},{ranges:[""]}),{default:_(()=>[Kb]),_:1},16)]),pgtype:_(a=>[Zb,Xb]),postgresql:_(a=>[S(r,ne({},{ranges:[""]}),{default:_(()=>[e7]),_:1},16)]),footnote_ruby:_(a=>[s7]),footnote_pg:_(a=>[t7]),default:_(()=>[Jb,Wb,S(l,{url:"https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04",class:"w-32 absolute bottom-50px right-150px"})]),_:1},16)}}},o7=e("h2",null,"IP addresses",-1),l7=e("p",null,[e("code",null,"IPAddr")],-1),r7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"ip6 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IPAddr"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"3ffe:505:2::1"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"ip4 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IPAddr"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"192.168.2.0/24"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"IPAddr"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"192.168.2.0/24"'),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"mask"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"16"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"#<IPAddr: IPv4:192.168.0.0/255.255.0.0>")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"ip6 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IPAddr"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"3ffe:505:2::1"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"ip4 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IPAddr"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"192.168.2.0/24"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"IPAddr"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"192.168.2.0/24"'),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"mask"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"16"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"#<IPAddr: IPv4:192.168.0.0/255.255.0.0>")])])])],-1),a7=e("p",null,[e("code",null,"inet"),i(", "),e("code",null,"cidr")],-1),i7=e("p",null,"7 or 19 bytes both",-1),c7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'::1'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'127.0.0.1/32'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," set_masklen("),e("span",{style:{color:"#CB7676"}},"cidr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'192.168.1.0/24'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"16"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 192.168.0.0/16")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," inet_merge("),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'192.168.1.5/24'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'192.168.2.5/24'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 192.168.0.0/22")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'::1'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'127.0.0.1/32'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," set_masklen("),e("span",{style:{color:"#AB5959"}},"cidr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'192.168.1.0/24'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"16"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 192.168.0.0/16")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," inet_merge("),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'192.168.1.5/24'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'192.168.2.5/24'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 192.168.0.0/22")])])])],-1),p7=e("small",null,[e("p",null,[e("code",null,"inet"),i(" works with both host and network addresses.")]),e("p",null,[e("code",null,"cidr"),i(" works with network addresses only.")])],-1),u7=e("p",null,[i("See "),e("a",{href:"https://ruby-doc.org/stdlib-3.1.0/libdoc/ipaddr/rdoc/IPAddr.html#method-i-mask",target:"_blank",rel:"noopener"},"IPAddr"),i(" docs.")],-1),y7=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-net-types.html",target:"_blank",rel:"noopener"},"Network address types"),i(" and "),e("a",{href:"https://www.postgresql.org/docs/14/functions-net.html",target:"_blank",rel:"noopener"},"functions and operators"),i(".")],-1),d7={__name:"35",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[l7]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[r7]),_:1},16)]),pgtype:_(r=>[a7,i7]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[c7]),_:1},16),p7]),footnote_ruby:_(r=>[u7]),footnote_pg:_(r=>[y7]),default:_(()=>[o7]),_:1},16)}}},f7=e("h2",null,"Durations",-1),h7=e("p",{class:"text-xs"},[e("code",null,"ActiveSupport::Duration")],-1),m7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"year")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => Thu, 18 Jun 2021 21:00:00 MSK +03:00")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"100500"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"weeks"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"iso8601")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "P100500W"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"month"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_i")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 2629746 (30.436875 days in seconds)")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"year")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => Thu, 18 Jun 2021 21:00:00 MSK +03:00")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"100500"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"weeks"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"iso8601")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "P100500W"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"month"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_i")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 2629746 (30.436875 days in seconds)")])])])],-1),g7=e("p",null,[e("code",null,"interval")],-1),_7=e("p",null,"16 bytes",-1),A7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," \u2018"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"year"),e("span",{style:{color:"#DBD7CA"}},"\u2019;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 2021-06-18 21:00:00+03")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'100500 weeks'"),e("span",{style:{color:"#DBD7CA"}},"::interval;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 703500 days")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," EXTRACT(epoch "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1 month'"),e("span",{style:{color:"#DBD7CA"}},"::interval);")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 2592000 (30.0 days in seconds)")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," \u2018"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"year"),e("span",{style:{color:"#393A34"}},"\u2019;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 2021-06-18 21:00:00+03")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'100500 weeks'"),e("span",{style:{color:"#393A34"}},"::interval;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 703500 days")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," EXTRACT(epoch "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1 month'"),e("span",{style:{color:"#393A34"}},"::interval);")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 2592000 (30.0 days in seconds)")])])])],-1),v7=e("p",null,[i("Disclaimer: I added it to Rails in "),e("a",{href:"https://github.com/rails/rails/pull/16919",target:"_blank",rel:"noopener"},"pull request \u2116 16919"),i(".")],-1),b7=e("p",null,"Supported out-of-the-box in Ruby on Rails 6.1+",-1),D7={__name:"36",setup(s){const t={layout:"comparison",rubyRails:"rails"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[h7]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[m7]),_:1},16)]),pgtype:_(r=>[g7,_7]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[A7]),_:1},16)]),footnote_ruby:_(r=>[v7]),footnote_pg:_(r=>[b7]),default:_(()=>[f7]),_:1},16)}}},B7=e("h2",null,"Enums",-1),C7=e("p",null,[e("code",null,"String")],-1),E7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# In migration (Rails 7+):")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"create_enum "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"status"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"draft"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"published"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"archived"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"trashed"'),e("span",{style:{color:"#858585"}},"]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"change_table "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"posts"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#B8A965"}},"t"),e("span",{style:{color:"#858585"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  t"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"enum "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"status"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"enum_type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"status"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"default"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"draft"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# In the application code:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Article"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ApplicationRecord")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  enum "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"status"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"draft"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"draft"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"published"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"published"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"archived"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"archived"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"trashed"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"trashed"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Article"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"status "),e("span",{style:{color:"#758575"}},'#=> "draft"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Article"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"draft? "),e("span",{style:{color:"#758575"}},"#=> true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Article"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"published!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# UPDATE articles SET status = 'published' WHERE id = \u2026")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# In migration (Rails 7+):")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"create_enum "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"status"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"draft"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"published"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"archived"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"trashed"'),e("span",{style:{color:"#8E8F8B"}},"]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"change_table "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"posts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#8C862B"}},"t"),e("span",{style:{color:"#8E8F8B"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  t"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"enum "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"status"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"enum_type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"status"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"default"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"draft"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# In the application code:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Article"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ApplicationRecord")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  enum "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"status"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"draft"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"draft"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"published"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"published"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"archived"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"archived"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"trashed"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"trashed"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Article"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"status "),e("span",{style:{color:"#A0ADA0"}},'#=> "draft"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Article"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"draft? "),e("span",{style:{color:"#A0ADA0"}},"#=> true")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Article"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"published!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# UPDATE articles SET status = 'published' WHERE id = \u2026")])])])],-1),w7=e("p",null,"Custom enum types",-1),k7=e("p",null,"4 bytes",-1),S7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," ENUM ("),e("span",{style:{color:"#C98A7D"}},"'draft'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'published'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'archived'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'trashed'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"ALTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," posts "),e("span",{style:{color:"#4D9375"}},"ADD"),e("span",{style:{color:"#DBD7CA"}}," COLUMN "),e("span",{style:{color:"#C98A7D"}},'"status"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NOT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"DEFAULT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'draft'"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," posts ("),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},"'published'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," posts ("),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},"'draft'"),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," id, "),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," posts;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," id |   "),e("span",{style:{color:"#4D9375"}},"status")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"----+------------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}}," | draft")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," | published")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," ENUM ("),e("span",{style:{color:"#B56959"}},"'draft'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'published'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'archived'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'trashed'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"ALTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," posts "),e("span",{style:{color:"#1C6B48"}},"ADD"),e("span",{style:{color:"#393A34"}}," COLUMN "),e("span",{style:{color:"#B56959"}},'"status"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NOT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"DEFAULT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'draft'"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," posts ("),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},"'published'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," posts ("),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},"'draft'"),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," id, "),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," posts;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," id |   "),e("span",{style:{color:"#1C6B48"}},"status")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"----+------------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}}," | draft")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," | published")])])])],-1),x7=e("p",null,"Values are human-readable in SQL",-1),T7=e("p",null,[i("On Rails < 7 you can use "),e("a",{href:"https://github.com/bibendi/activerecord-postgres_enum",target:"_blank",rel:"noopener"},"activerecord-postgres_enum"),i(" gem")],-1),L7=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-enum.html",target:"_blank",rel:"noopener"},"8.7 Enumerated Types"),i(" page in PostgreSQL docs")],-1),R7={__name:"37",setup(s){const t={layout:"comparison"};return O(I),(n,o)=>{const l=Te;return D(),q(us,ee(Z(t)),{rubytype:_(r=>[C7]),ruby:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[E7]),_:1},16)]),pgtype:_(r=>[w7,k7]),postgresql:_(r=>[S(l,ne({},{ranges:[""]}),{default:_(()=>[S7]),_:1},16),x7]),footnote_ruby:_(r=>[T7]),footnote_pg:_(r=>[L7]),default:_(()=>[B7]),_:1},16)}}},P7=e("h1",null,"Inside ActiveRecord",-1),O7=e("p",null,"How datatypes are working under the hood",-1),$7={__name:"38",setup(s){const t={layout:"cover"};return O(I),(n,o)=>(D(),q(Ao,ee(Z(t)),{default:_(()=>[P7,O7]),_:1},16))}},F7=e("h2",null,"Example of composite type use case",-1),N7=e("div",{class:"my-8"},null,-1),I7=e("p",null,"What if we want to:",-1),M7=e("ol",null,[e("li",null,[e("p",null,"Store products with prices in different currencies in one table")]),e("li",null,[e("p",null,"Work with price and currency as a whole"),e("p",null,[i("There is a great "),e("a",{href:"https://github.com/RubyMoney/money",target:"_blank",rel:"noopener"},"money"),i(" gem in Ruby, but how to do it in SQL?")])]),e("li",null,[e("p",null,"And do some calculations without having to write complex SQL queries with joins.")])],-1),U7={class:"grid grid-cols-2 gap-2"},q7=e("p",null,"Before:",-1),z7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"User"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"string currency"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"has many")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"Product"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"numeric price"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"User"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"string currency"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"has many")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"Product"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"numeric price"),e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),j7=e("p",null,"After:",-1),H7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"User"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"string currency"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# only as a setting!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"has many")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"Product"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"true_money price "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"string"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"numeric"),e("span",{style:{color:"#858585"}},"))")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"User"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"string currency"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# only as a setting!")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"has many")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"Product"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"true_money price "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"string"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"numeric"),e("span",{style:{color:"#8E8F8B"}},"))")])])])],-1),Q7={__name:"39",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[F7,N7,I7,M7,e("div",U7,[e("div",null,[q7,S(l,ne({},{ranges:[""]}),{default:_(()=>[z7]),_:1},16)]),e("div",null,[j7,S(l,ne({},{ranges:[""]}),{default:_(()=>[H7]),_:1},16)])])]),_:1},16)}}},V7=e("h2",null,"Create custom datatype",-1),J7=e("p",null,"Declare composite datatype in the database:",-1),W7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TYPE"),e("span",{style:{color:"#DBD7CA"}}," _true_money "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," (")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  currency "),e("span",{style:{color:"#4D9375"}},"varchar"),e("span",{style:{color:"#DBD7CA"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  amount "),e("span",{style:{color:"#4D9375"}},"numeric")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- type with constraints to allow:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- - either NULL value (no price, can be forbidden by NOT NULL)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- - or value with both currency and amount specified")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," DOMAIN true_money "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," _true_money "),e("span",{style:{color:"#CB7676"}},"CHECK"),e("span",{style:{color:"#DBD7CA"}}," (")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AND")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DISTINCT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}},")::_true_money "),e("span",{style:{color:"#4D9375"}},"OR")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  (("),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},").currency "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NOT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AND"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},").amount "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NOT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TYPE"),e("span",{style:{color:"#393A34"}}," _true_money "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," (")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  currency "),e("span",{style:{color:"#1C6B48"}},"varchar"),e("span",{style:{color:"#393A34"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  amount "),e("span",{style:{color:"#1C6B48"}},"numeric")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- type with constraints to allow:")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- - either NULL value (no price, can be forbidden by NOT NULL)")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- - or value with both currency and amount specified")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," DOMAIN true_money "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," _true_money "),e("span",{style:{color:"#AB5959"}},"CHECK"),e("span",{style:{color:"#393A34"}}," (")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AND")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DISTINCT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}},")::_true_money "),e("span",{style:{color:"#1C6B48"}},"OR")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  (("),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},").currency "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NOT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AND"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},").amount "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NOT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},");")])])])],-1),G7={__name:"40",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[V7,J7,S(l,ne({},{ranges:["all","1-4","6-13"]}),{default:_(()=>[W7]),_:1},16)]),_:1},16)}}},Y7=e("h2",null,"Fun fact about composite datatypes",-1),K7=e("p",null,"Every table defines own datatype which can be used elsewhere",-1),Z7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"inner"'),e("span",{style:{color:"#DBD7CA"}}," ( v1 "),e("span",{style:{color:"#4D9375"}},"integer"),e("span",{style:{color:"#DBD7CA"}},", v2 "),e("span",{style:{color:"#4D9375"}},"text"),e("span",{style:{color:"#DBD7CA"}}," );")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"outer"'),e("span",{style:{color:"#DBD7CA"}}," (v inner);")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"outer"'),e("span",{style:{color:"#DBD7CA"}}," (v) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," (("),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},","),e("span",{style:{color:"#C98A7D"}},"'Hello world!'"),e("span",{style:{color:"#DBD7CA"}},"));")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"outer"'),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         v")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-------------------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},","),e("span",{style:{color:"#C98A7D"}},'"Hello world!"'),e("span",{style:{color:"#DBD7CA"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"inner"'),e("span",{style:{color:"#393A34"}}," ( v1 "),e("span",{style:{color:"#1C6B48"}},"integer"),e("span",{style:{color:"#393A34"}},", v2 "),e("span",{style:{color:"#1C6B48"}},"text"),e("span",{style:{color:"#393A34"}}," );")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"outer"'),e("span",{style:{color:"#393A34"}}," (v inner);")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"outer"'),e("span",{style:{color:"#393A34"}}," (v) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," (("),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},","),e("span",{style:{color:"#B56959"}},"'Hello world!'"),e("span",{style:{color:"#393A34"}},"));")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"outer"'),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         v")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-------------------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},","),e("span",{style:{color:"#B56959"}},'"Hello world!"'),e("span",{style:{color:"#393A34"}},")")])])])],-1),X7=e("img",{src:"https://i.imgflip.com/6w9gip.jpg",alt:"Yo dawg I heard you like table composite types, so I put a table in your table so you can insert rows while you inserting rows",class:"w-330px float-right mt-4"},null,-1),e9=e("p",null,"But don\u2019t use it in reality, please!",-1),s9=e("p",null,"(There are limitations)",-1),t9={__name:"41",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[Y7,K7,S(l,ne({},{ranges:[""]}),{default:_(()=>[Z7]),_:1},16),X7,e9,s9]),_:1},16)}}},n9=e("h2",null,"Use composite datatype",-1),o9=e("div",{class:"my-14"},null,-1),l9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"ALTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," tests "),e("span",{style:{color:"#4D9375"}},"ADD"),e("span",{style:{color:"#DBD7CA"}}," COLUMN price true_money;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (price) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," (("),e("span",{style:{color:"#C98A7D"}},"'JPY'"),e("span",{style:{color:"#DBD7CA"}},","),e("span",{style:{color:"#6394BF"}},"10000"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"));")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (price) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},`'("JPY",100.0)'`),e("span",{style:{color:"#DBD7CA"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," price "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," tests; "),e("span",{style:{color:"#758575"}},"-- (JPY,10000.0),(JPY,100.0)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," (price).currency, (price).amount "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," tests;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," currency | amount")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"----------+---------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," JPY      | "),e("span",{style:{color:"#6394BF"}},"10000"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," JPY      |   "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"0")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"ALTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," tests "),e("span",{style:{color:"#1C6B48"}},"ADD"),e("span",{style:{color:"#393A34"}}," COLUMN price true_money;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," tests (price) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," (("),e("span",{style:{color:"#B56959"}},"'JPY'"),e("span",{style:{color:"#393A34"}},","),e("span",{style:{color:"#296AA3"}},"10000"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"));")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"INTO"),e("span",{style:{color:"#393A34"}}," tests (price) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},`'("JPY",100.0)'`),e("span",{style:{color:"#393A34"}},");")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," price "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," tests; "),e("span",{style:{color:"#A0ADA0"}},"-- (JPY,10000.0),(JPY,100.0)")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," (price).currency, (price).amount "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," tests;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," currency | amount")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"----------+---------")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," JPY      | "),e("span",{style:{color:"#296AA3"}},"10000"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," JPY      |   "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"0")])])])],-1),r9=e("p",null,[i("See "),e("a",{href:"https://www.postgresql.org/docs/14/rowtypes.html",target:"_blank",rel:"noopener"},"8.16. Composite Types"),i(" in PostgreSQL docs for more advices and caveats.")],-1),a9={__name:"42",setup(s){const t={layout:"footnote"};return O(I),(n,o)=>{const l=Te;return D(),q(wt,ee(Z(t)),{footnote:_(r=>[r9]),default:_(()=>[n9,o9,S(l,ne({},{ranges:["all","1","3-4","6","8-12"]}),{default:_(()=>[l9]),_:1},16)]),_:1},16)}}},i9=e("h2",null,"Declare it in ActiveRecord",-1),c9=e("div",{class:"my-14"},null,-1),p9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ActiveRecord")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ConnectionAdapters")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PostgreSQL")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OID")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TrueMoney"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Type::Value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"true_money")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"          "),e("span",{style:{color:"#758575"}},"# Here will be (de)serialization code")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ActiveRecord")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ConnectionAdapters")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PostgreSQL")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OID")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TrueMoney"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Type::Value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"true_money")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"          "),e("span",{style:{color:"#A0ADA0"}},"# Here will be (de)serialization code")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),u9={__name:"43",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[i9,c9,S(l,ne({},{ranges:[""]}),{default:_(()=>[p9]),_:1},16)]),_:1},16)}}},y9=e("h2",null,"Deserialization",-1),d9=e("div",{class:"my-14"},null,-1),f9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"deserialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"nil?")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  currency"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," amount "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"match"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#E6CC77"}},"\\A\\("),e("span",{style:{color:"#C4704F"}},'"?'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\w"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},'"?,'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C4704F"}},"?:"),e("span",{style:{color:"#E6CC77"}},"\\.\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},"?"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#E6CC77"}},"\\)\\z"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"captures")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Money"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_amount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"amount"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," currency"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"deserialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"nil?")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  currency"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," amount "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"match"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#BDA437"}},"\\A\\("),e("span",{style:{color:"#AB5E3F"}},'"?'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\w"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},'"?,'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5E3F"}},"?:"),e("span",{style:{color:"#BDA437"}},"\\.\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},"?"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#BDA437"}},"\\)\\z"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"captures")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Money"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_amount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"amount"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," currency"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),h9=e("p",null,[i("And "),e("code",null,'"(USD,4.2)"'),i(" becomes "),e("code",null,"#<Money fractional:420 currency:USD>"),i(" in Ruby \u2728")],-1),m9={__name:"44",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[y9,d9,S(l,ne({},{ranges:["all","2","4-5"]}),{default:_(()=>[f9]),_:1},16),h9]),_:1},16)}}},g9=e("h2",null,"Casting user input",-1),_9=e("p",null,"Add ability to assign ready object to attribute:",-1),A9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cast"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"nil?")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"Money"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," deserialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"raise"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"NotImplementedError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"Don't know how to cast `),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"class"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}}," "),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"inspect"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},' into Money"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cast"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"nil?")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"Money"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," deserialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"raise"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"NotImplementedError"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"Don't know how to cast `),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"class"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}}," "),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"inspect"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},' into Money"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),v9={__name:"45",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[g9,_9,S(l,ne({},{ranges:["all","5"]}),{default:_(()=>[A9]),_:1},16)]),_:1},16)}}},b9=e("h2",null,"Deserialization and input casting at once",-1),D9=e("div",{class:"my-14"},null,-1),B9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cast_value"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"Money"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"String")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      currency"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," amount "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"match"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#E6CC77"}},"\\A\\("),e("span",{style:{color:"#C4704F"}},'"?'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\w"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},'"?,'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C4704F"}},"?:"),e("span",{style:{color:"#E6CC77"}},"\\.\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},"?"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#E6CC77"}},"\\)\\z"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"captures")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Money"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_amount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"amount"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," currency"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"raise"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"NotImplementedError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"Don't know how to cast `),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"class"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}}," "),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"inspect"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},' into Money"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cast_value"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"Money"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," value")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"String")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      currency"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," amount "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"match"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#BDA437"}},"\\A\\("),e("span",{style:{color:"#AB5E3F"}},'"?'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\w"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},'"?,'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5E3F"}},"?:"),e("span",{style:{color:"#BDA437"}},"\\.\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},"?"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#BDA437"}},"\\)\\z"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"captures")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Money"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_amount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"amount"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," currency"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"raise"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"NotImplementedError"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"Don't know how to cast `),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"class"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}}," "),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"inspect"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},' into Money"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),C9=e("p",null,[i("Replaces both "),e("code",null,"deserialize"),i(" and "),e("code",null,"cast"),i(", also handles "),e("code",null,"nil"),i("s.")],-1),E9={__name:"46",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[b9,D9,S(l,ne({},{ranges:[""]}),{default:_(()=>[B9]),_:1},16),C9]),_:1},16)}}},w9=e("h2",null,"Serialization for the database",-1),k9=e("div",{class:"my-14"},null,-1),S9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"serialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"nil? "),e("span",{style:{color:"#758575"}},"# ActiveRecord will handle NULL for us")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  amount_t   "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"OID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Decimal"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  currency_t "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveModel"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Type"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"('),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"currency_t"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"serialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"currency"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"iso_code"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"inspect"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},","),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"amount_t"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"serialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},')"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"serialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"nil? "),e("span",{style:{color:"#A0ADA0"}},"# ActiveRecord will handle NULL for us")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  amount_t   "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"OID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Decimal"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  currency_t "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveModel"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Type"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"('),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"currency_t"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"serialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"currency"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"iso_code"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"inspect"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},","),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"amount_t"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"serialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},')"')]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),x9=e("p",null,"Reuse available serialization methods for subtypes.",-1),T9={__name:"47",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[w9,k9,S(l,ne({},{ranges:["all","4-5","6"]}),{default:_(()=>[S9]),_:1},16),x9]),_:1},16)}}},L9=e("h2",null,"Register datatype in ActiveRecord",-1),R9=e("div",{class:"my-14"},null,-1),P9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"initialize_type_map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"m "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," type_map"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    m"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"register_type "),e("span",{style:{color:"#C98A7D"}},'"true_money"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#B8A965"}},"_args"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_sql_type"),e("span",{style:{color:"#858585"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"OID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"TrueMoney"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    m"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"alias_type "),e("span",{style:{color:"#C98A7D"}},'"_true_money"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"true_money"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"super")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"prepend"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Type"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"register"),e("span",{style:{color:"#858585"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"true_money"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"OID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"TrueMoney"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#D4976C"}},"adapter"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"postgresql"),e("span",{style:{color:"#858585"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"initialize_type_map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"m "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," type_map"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    m"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"register_type "),e("span",{style:{color:"#B56959"}},'"true_money"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#8C862B"}},"_args"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_sql_type"),e("span",{style:{color:"#8E8F8B"}},"|")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"OID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"TrueMoney"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    m"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"alias_type "),e("span",{style:{color:"#B56959"}},'"_true_money"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"true_money"')]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"super")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"prepend"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Type"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"register"),e("span",{style:{color:"#8E8F8B"}},"(")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"true_money"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"OID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"TrueMoney"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A65E2B"}},"adapter"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"postgresql"),e("span",{style:{color:"#8E8F8B"}},",")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),O9={__name:"48",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[L9,R9,S(l,ne({},{ranges:[""]}),{default:_(()=>[P9]),_:1},16)]),_:1},16)}}},$9=e("h2",null,"Also add it for migrations\u2026",-1),F9=e("div",{class:"my-14"},null,-1),N9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SchemaStatementsWithTrueMoney")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type_to_sql"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"type, "),e("span",{style:{color:"#D4976C"}},"limit"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#D4976C"}},"precision"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#D4976C"}},"scale"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#D4976C"}},"array"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," type"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_s")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'true_money'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'true_money'")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"super")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQL"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"SchemaStatements"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"prepend"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"SchemaStatementsWithTrueMoney"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#A1B567"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#A1B567"}},"PostgreSQL"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#A1B567"}},"ColumnMethods")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"true_money"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"name, options "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{})")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    column"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"true_money"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," options"),e("span",{style:{color:"#858585"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SchemaStatementsWithTrueMoney")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type_to_sql"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"type, "),e("span",{style:{color:"#A65E2B"}},"limit"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#A65E2B"}},"precision"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#A65E2B"}},"scale"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#A65E2B"}},"array"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," type"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_s")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'true_money'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'true_money'")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"super")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQL"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"SchemaStatements"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"prepend"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"SchemaStatementsWithTrueMoney"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#6C7834"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#6C7834"}},"PostgreSQL"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#6C7834"}},"ColumnMethods")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"true_money"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"name, options "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{})")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    column"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"true_money"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," options"),e("span",{style:{color:"#8E8F8B"}},")")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),I9={__name:"49",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[$9,F9,S(l,ne({},{ranges:[""]}),{default:_(()=>[N9]),_:1},16)]),_:1},16)}}},M9=e("h2",null,"Ready to use!",-1),U9=e("div",{class:"my-14"},null,-1),q9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"rails g model Product title price:true_money")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"rails db:migrate")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"rails console")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"rails g model Product title price:true_money")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"rails db:migrate")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"rails console")])])])],-1),z9=e("div",{class:"my-14"},null,-1),j9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"create!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"title"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Something"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Money"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_amount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"100000"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," \u201C"),e("span",{style:{color:"#D4976C"}},"USD"),e("span",{style:{color:"#DBD7CA"}},"\u201D"),e("span",{style:{color:"#858585"}},"))")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => #<Product id: 1, title: "Something", price: 100000.00 USD>')])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"create!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"title"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Something"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Money"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_amount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"100000"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," \u201C"),e("span",{style:{color:"#A65E2B"}},"USD"),e("span",{style:{color:"#393A34"}},"\u201D"),e("span",{style:{color:"#8E8F8B"}},"))")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => #<Product id: 1, title: "Something", price: 100000.00 USD>')])])])],-1),H9={__name:"50",setup(s){const t={};return O(I),(n,o)=>{const l=Te;return D(),q(Ue,ee(Z(t)),{default:_(()=>[M9,U9,S(l,ne({},{ranges:[""]}),{default:_(()=>[q9]),_:1},16),z9,S(l,ne({},{ranges:[""]}),{default:_(()=>[j9]),_:1},16)]),_:1},16)}}},Q9=e("h2",null,"But it is not done yet!",-1),V9={class:"grid grid-cols-2 gap-2"},J9=e("p",null,"A lot of stuff has to be done to make a full-featured datatype in SQL\u2026",-1),W9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FUNCTION"),e("span",{style:{color:"#DBD7CA"}}," true_money_add(a true_money, b true_money) "),e("span",{style:{color:"#4D9375"}},"RETURNS"),e("span",{style:{color:"#DBD7CA"}}," true_money "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," $$")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"BEGIN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}}," (a).currency "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," (b).currency "),e("span",{style:{color:"#4D9375"}},"THEN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      RAISE EXCEPTION "),e("span",{style:{color:"#C98A7D"}},"'% can not be added to % - currencies does not match'"),e("span",{style:{color:"#DBD7CA"}},", b, a;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," ((a).currency, (a).amount "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," (b).amount);")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$$ IMMUTABLE "),e("span",{style:{color:"#4D9375"}},"RETURNS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"ON"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," INPUT "),e("span",{style:{color:"#4D9375"}},"LANGUAGE"),e("span",{style:{color:"#DBD7CA"}}," plpgsql;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," OPERATOR "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"(leftarg"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"true_money, rightarg"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"true_money, "),e("span",{style:{color:"#4D9375"}},"procedure"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"true_money_add);")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FUNCTION"),e("span",{style:{color:"#393A34"}}," true_money_add(a true_money, b true_money) "),e("span",{style:{color:"#1C6B48"}},"RETURNS"),e("span",{style:{color:"#393A34"}}," true_money "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," $$")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"BEGIN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}}," (a).currency "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," (b).currency "),e("span",{style:{color:"#1C6B48"}},"THEN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      RAISE EXCEPTION "),e("span",{style:{color:"#B56959"}},"'% can not be added to % - currencies does not match'"),e("span",{style:{color:"#393A34"}},", b, a;")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," ((a).currency, (a).amount "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," (b).amount);")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$$ IMMUTABLE "),e("span",{style:{color:"#1C6B48"}},"RETURNS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"ON"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," INPUT "),e("span",{style:{color:"#1C6B48"}},"LANGUAGE"),e("span",{style:{color:"#393A34"}}," plpgsql;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," OPERATOR "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"(leftarg"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"true_money, rightarg"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"true_money, "),e("span",{style:{color:"#1C6B48"}},"procedure"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"true_money_add);")])])])],-1),G9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FUNCTION"),e("span",{style:{color:"#DBD7CA"}}," true_money_sum("),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," true_money, "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," true_money) "),e("span",{style:{color:"#4D9375"}},"RETURNS"),e("span",{style:{color:"#DBD7CA"}}," true_money "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," $$")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"BEGIN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AND"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"THEN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"THEN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$$ IMMUTABLE "),e("span",{style:{color:"#4D9375"}},"LANGUAGE"),e("span",{style:{color:"#DBD7CA"}}," plpgsql;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AGGREGATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"sum"),e("span",{style:{color:"#DBD7CA"}}," (true_money) (sfunc "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," true_money_sum, stype "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," true_money);")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FUNCTION"),e("span",{style:{color:"#393A34"}}," true_money_sum("),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," true_money, "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," true_money) "),e("span",{style:{color:"#1C6B48"}},"RETURNS"),e("span",{style:{color:"#393A34"}}," true_money "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," $$")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"BEGIN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AND"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"THEN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"THEN")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}},";")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$$ IMMUTABLE "),e("span",{style:{color:"#1C6B48"}},"LANGUAGE"),e("span",{style:{color:"#393A34"}}," plpgsql;")]),i(`
`),e("span",{class:"line"}),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AGGREGATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"sum"),e("span",{style:{color:"#393A34"}}," (true_money) (sfunc "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," true_money_sum, stype "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," true_money);")])])])],-1),Y9=e("p",null,"But then you can do a lot in SQL:",-1),K9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," (price).currency "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," currency, "),e("span",{style:{color:"#E0A569"}},"sum"),e("span",{style:{color:"#DBD7CA"}},"(price) "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," total")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," products "),e("span",{style:{color:"#4D9375"}},"GROUP BY"),e("span",{style:{color:"#DBD7CA"}}," currency;")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," (price).currency "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," currency, "),e("span",{style:{color:"#B58451"}},"sum"),e("span",{style:{color:"#393A34"}},"(price) "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," total")]),i(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," products "),e("span",{style:{color:"#1C6B48"}},"GROUP BY"),e("span",{style:{color:"#393A34"}}," currency;")])])])],-1),Z9=e("p",null,[i("After all, one might re-invent abandoned "),e("a",{href:"https://github.com/samv/pg-currency",target:"_blank",rel:"noopener"},"pg-currency")],-1),X9={__name:"51",setup(s){const t={layout:"footnote"};return O(I),(n,o)=>{const l=Te;return D(),q(wt,ee(Z(t)),{footnote:_(r=>[Z9]),default:_(()=>[Q9,e("div",V9,[e("div",null,[J9,S(l,ne({},{ranges:[""]}),{default:_(()=>[W9]),_:1},16)]),S(l,ne({},{ranges:[""]}),{default:_(()=>[G9]),_:1},16)]),Y9,S(l,ne({},{ranges:[""]}),{default:_(()=>[K9]),_:1},16)]),_:1},16)}}},eD=e("h2",null,"Play with it yourself!",-1),sD={class:"text-center my-12"},tD=e("p",null,[e("a",{href:"https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986",target:"_blank",rel:"noopener"},"https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986")],-1),nD={__name:"52",setup(s){const t={};return O(I),(n,o)=>{const l=Us;return D(),q(Ue,ee(Z(t)),{default:_(()=>[eD,e("div",sD,[S(l,{url:"https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986",class:"max-w-80 mx-auto"})]),tD]),_:1},16)}}},oD=e("h1",null,"Gems, gems, gems!",-1),lD=e("p",null,"Everything That Can Be Invented Has Been Invented",-1),rD={__name:"53",setup(s){const t={layout:"cover"};return O(I),(n,o)=>(D(),q(Ao,ee(Z(t)),{default:_(()=>[oD,lD]),_:1},16))}},aD=e("h2",null,"Gems for datatypes",-1),iD=e("div",{class:"my-14"},null,-1),cD=e("ul",null,[e("li",null,[e("p",null,[e("a",{href:"https://github.com/crashtech/torque-postgresql",target:"_blank",rel:"noopener"},"torque-postgresql"),i(" \u2014 standard datatypes not (yet) supported by Rails.")])]),e("li",null,[e("p",null,[e("a",{href:"https://github.com/rgeo/activerecord-postgis-adapter",target:"_blank",rel:"noopener"},"activerecord-postgis-adapter"),i(" \u2014 all the power of PostGIS extension in Ruby.")])]),e("li",null,[e("p",null,[e("a",{href:"https://github.com/bibendi/activerecord-postgres_enum",target:"_blank",rel:"noopener"},"activerecord-postgres_enum"),i(" \u2014 support enum in migrations and schema (before Rails 7)")])])],-1),pD={__name:"54",setup(s){const t={};return O(I),(n,o)=>(D(),q(Ue,ee(Z(t)),{default:_(()=>[aD,iD,cD]),_:1},16))}},uD=e("h2",null,"Gems for other PostgreSQL features",-1),yD=e("p",null,"Because PostgreSQL is much more than datatypes.",-1),dD=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/GeorgeKaraszi/ActiveRecordExtended",target:"_blank",rel:"noopener"},"ActiveRecordExtended"),i(" \u2014 functions for datatypes and DSL for queries")]),e("li",null,[e("a",{href:"https://github.com/teoljungberg/fx",target:"_blank",rel:"noopener"},"fx"),i(" \u2014 make schema.rb great again with triggers")]),e("li",null,[e("a",{href:"https://github.com/scenic-views/scenic",target:"_blank",rel:"noopener"},"scenic"),i(" \u2014 add support for views")]),e("li",null,[e("a",{href:"https://github.com/glebm/order_query",target:"_blank",rel:"noopener"},"order_query"),i(" \u2014 keyset-pagination for your models")]),e("li",null,[e("a",{href:"https://github.com/afair/postgresql_cursor",target:"_blank",rel:"noopener"},"postgresql_cursor"),i(" \u2014 get more data from the database efficiently")])],-1),fD=e("p",null,[i("And also martian "),e("a",{href:"https://github.com/nepalez/pg_trunk/",target:"_blank",rel:"noopener"},"pg_trunk"),i(" gem to "),e("s",null,"rule them all"),i(" get "),e("code",null,"fx"),i(", "),e("code",null,"scenic"),i(", object dependency management and more within a single gem!")],-1),hD=e("div",{class:"absolute left-4 bottom-12 rotate-340 text-lg"},[e("p",null,[e("code",null,"structure.sql"),i(" no more!")]),e("p",null,[i("Make "),e("code",null,"schema.rb"),i(" great again!")])],-1),mD=e("a",{href:"https://github.com/nepalez/pg_trunk",class:"block my-4 text-center no-underline border-none hover:border-none"},[e("img",{alt:"store_model gem",src:"https://opengraph.githubassets.com/fac14e6e69972a6081f741222ea276d67c3df90c2ca2c7b8fedfd007e878e16b/nepalez/pg_trunk",class:"w-80 mx-auto"})],-1),gD={__name:"55",setup(s){const t={};return O(I),(n,o)=>{const l=Us;return D(),q(Ue,ee(Z(t)),{default:_(()=>[uD,yD,dD,fD,hD,mD,S(l,{url:"https://github.com/nepalez/pg_trunk",caption:"pg_trunk gem",class:"w-32 absolute bottom-15px right-20px"})]),_:1},16)}}},_D=e("h1",null,"That\u2019s it!",-1),AD=e("p",null,"Questions?",-1),vD={__name:"56",setup(s){const t={layout:"cover"};return O(I),(n,o)=>(D(),q(Ao,ee(Z(t)),{default:_(()=>[_D,AD]),_:1},16))}},bD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},DD=e("path",{fill:"#0A0A08",d:"M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575c4.48 4.479 7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723c0 34.178-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718c-4.479 4.479-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746c-34.18 0-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723c0-34.177.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672c7.116 7.116 14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763c7.116-7.116 11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27c-36.302 0-65.73 29.43-65.73 65.73c0 36.302 29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36c-8.483 0-15.36-6.876-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36c8.484 0 15.36 6.877 15.36 15.36Z"},null,-1),BD=[DD];function CD(s,t){return D(),U("svg",bD,BD)}const ED={name:"logos-instagram-icon",render:CD},wD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},kD=e("path",{fill:"#0A66C2",d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"},null,-1),SD=[kD];function xD(s,t){return D(),U("svg",wD,SD)}const TD={name:"logos-linkedin-icon",render:xD},LD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},RD=["id"],PD=e("stop",{offset:"0%","stop-color":"#2AABEE"},null,-1),OD=e("stop",{offset:"100%","stop-color":"#229ED9"},null,-1),$D=[PD,OD],FD=["fill"],ND=e("path",{fill:"#FFF",d:"M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"},null,-1);function ID(s,t){return D(),U("svg",LD,[e("defs",null,[e("linearGradient",{id:s.idMap.svgIDa,x1:"50%",x2:"50%",y1:"0%",y2:"100%"},$D,8,RD)]),e("path",{fill:"url(#"+s.idMap.svgIDa+")",d:"M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"},null,8,FD),ND])}const MD={name:"logos-telegram",render:ID,data(){return{idMap:{svgIDa:"uicons-"+(()=>Math.random().toString(36).substr(2,10))()}}}},UD={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qD=e("path",{fill:"#1877F2",d:"M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"},null,-1),zD=e("path",{fill:"#FFF",d:"m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"},null,-1),jD=[qD,zD];function HD(s,t){return D(),U("svg",UD,jD)}const QD={name:"logos-facebook",render:HD},VD={class:"slidev-icon",viewBox:"0 0 256 209",width:"1.2em",height:"1.2em"},JD=e("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"},null,-1),WD=[JD];function GD(s,t){return D(),U("svg",VD,WD)}const YD={name:"logos-twitter",render:GD},KD={class:"slidev-icon",viewBox:"0 0 256 250",width:"1.2em",height:"1.2em"},ZD=e("path",{fill:"#161614",d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"},null,-1),XD=[ZD];function e6(s,t){return D(),U("svg",KD,XD)}const s6={name:"logos-github-icon",render:e6};const ct=s=>(la("data-v-f1694751"),s=s(),ra(),s),t6=ct(()=>e("h1",null,"Thank you!",-1)),n6={class:"grid grid-cols-[8rem_2fr_5fr] mt-12 gap-2"},o6=ct(()=>e("div",{class:"justify-self-end"},[e("img",{alt:"Andrey Novikov",src:"https://secure.gravatar.com/avatar/d0e95abdd0aed671ebd0920c16d393d4?s=512",class:"w-32 h-32 scaled-image"})],-1)),l6={class:"list-none"},r6={href:"https://github.com/Envek"},a6={href:"https://twitter.com/Envek"},i6={href:"https://facebook.com/Envek"},c6={href:"https://t.me/envek"},p6=ct(()=>e("div",{class:"justify-self-end"},[e("a",{href:"https://evilmartians.com/"},[e("img",{alt:"Evil Martians",src:ba,class:"w-32 h-32 scaled-image block dark:hidden"}),e("img",{alt:"Evil Martians",src:Da,class:"w-32 h-32 scaled-image hidden dark:block"})])],-1)),u6=ct(()=>e("a",{href:"https://github.com/evilmartians?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evilmartians",-1)),y6=ct(()=>e("a",{href:"https://twitter.com/evilmartians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evilmartians",-1)),d6=ct(()=>e("a",{href:"https://www.linkedin.com/company/evil-martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evil-martians",-1)),f6=ct(()=>e("a",{href:"https://www.instagram.com/evil.martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evil.martians",-1)),h6={class:"col-span-3"},m6=ct(()=>e("p",null,[i("Our awesome blog: "),e("a",{href:"https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"evilmartians.com/chronicles"),i("!"),e("br"),e("small",{class:"text-xs"},[i("(Special thanks to "),e("a",{href:"https://twitter.com/hachi8833"},"@hachi8833"),i(" for translating \u224820 posts to Japanese!)")])],-1)),g6=ct(()=>e("p",{class:"text-sm"},[i("See these slides at "),e("a",{href:"https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/"},"envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists")],-1)),_6={__name:"57",setup(s){const t={};return O(I),(n,o)=>{const l=s6,r=YD,a=QD,c=MD,p=Us,u=TD,y=ED;return D(),q(Ue,ee(Z(t)),{default:_(()=>[t6,e("div",n6,[o6,e("ul",l6,[e("li",null,[e("a",r6,[S(l,{class:"dark:invert"}),i(" @Envek")])]),e("li",null,[e("a",a6,[S(r),i(" @Envek")])]),e("li",null,[e("a",i6,[S(a),i(" @Envek")])]),e("li",null,[e("a",c6,[S(c),i(" @Envek")])])]),e("div",null,[S(p,{url:"https://github.com/Envek",caption:"github.com/Envek",class:"w-32 mt-2"})]),p6,e("div",null,[e("ul",null,[e("li",null,[S(l,{class:"dark:invert"}),i(),u6]),e("li",null,[S(r),i(),y6]),e("li",null,[S(u),i(),d6]),e("li",null,[S(y,{class:"dark:invert"}),i(),f6])])]),e("div",null,[S(p,{url:"https://evilmartians.com/",caption:"evilmartians.com",class:"w-32 mt-2"})]),e("div",h6,[m6,g6,S(p,{url:"https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/",caption:"These slides",class:"w-64 absolute bottom-10px right-20px"})])])]),_:1},16)}}},A6=kn(_6,[["__scopeId","data-v-f1694751"]]),v6=[{path:"1",name:"page-1",component:c_,meta:{theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1,syncAll:!1},title:"PostgreSQL as seen by Rubyists",info:`## PostgreSQL as seen by Rubyists
`,css:"unocss",fonts:{provider:"none",fallback:!1,local:"Martian Grotesk, Martian Mono",sans:"Martian Grotesk",serif:"Martian Grotesk",mono:"Martian Mono"},slide:{raw:`---
theme: default
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  syncAll: false
title: PostgreSQL as seen by Rubyists
info: |
  ## PostgreSQL as seen by Rubyists
css: unocss
fonts:
  provider: none
  fallback: false
  local: Martian Grotesk, Martian Mono
  sans: Martian Grotesk
  serif: Martian Grotesk
  mono: Martian Mono
---

# <span class="postgresql">PostgreSQL</span><br>as seen by<br><span class="rubyists">Rubyists</span>

<div class="absolute bottom-0 my-2">
Andrey Novikov, Evil Martians<br />
<small><a href="https://kaigionrails.org/2022/">Kaigi on Rails 2022</a></small><br />
<small><time datetime="2022-10-22">22 October 2022</time></small>
</div>

<div class="absolute bottom-0 right-0 h-40 scaled-image flex items-end">
  <a href="https://evilmartians.com/" class="w-40 p-3"><img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden" /><img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block" /></a>
  <a href="https://kaigionrails.org/" class="w-40 p-4"><img alt="Kaigi on Rails" src="/images/kaigi-on-rails-2022-light.svg" class="block dark:hidden" /><img alt="Kaigi on Rails" src="/images/kaigi-on-rails-2022-dark.svg" class="hidden dark:block" /></a>
</div>

<style>
  a {
    border-bottom: none !important;
  }
  h1 {
    font-stretch: 105%;
  }
  .postgresql {
    font-stretch: 75%;
    font-weight: 900;
    color: #336791;
    text-shadow: navy 1px 1px;
  }
  .rubyists {
    font-stretch: 135%;
    font-weight: bold;
    color: #EB0064;
    text-shadow: maroon 1px 1px;
  }
</style>

<!--
\u7686\u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F\uFF01\u4ECA\u65E5\u3001Ruby on Rails\u3092\u4F7F\u3063\u3066\u3044\u308B\u958B\u767A\u8005\u306E\u76EE\u3067PostgreSQL\u306F\u3069\u306E\u3088\u3046\u306B\u898B\u3048\u308B\u304B\u3068\u8A71\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002
-->
`,title:"PostgreSQL as seen by Rubyists",level:1,content:`# <span class="postgresql">PostgreSQL</span><br>as seen by<br><span class="rubyists">Rubyists</span>

<div class="absolute bottom-0 my-2">
Andrey Novikov, Evil Martians<br />
<small><a href="https://kaigionrails.org/2022/">Kaigi on Rails 2022</a></small><br />
<small><time datetime="2022-10-22">22 October 2022</time></small>
</div>

<div class="absolute bottom-0 right-0 h-40 scaled-image flex items-end">
  <a href="https://evilmartians.com/" class="w-40 p-3"><img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden" /><img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block" /></a>
  <a href="https://kaigionrails.org/" class="w-40 p-4"><img alt="Kaigi on Rails" src="/images/kaigi-on-rails-2022-light.svg" class="block dark:hidden" /><img alt="Kaigi on Rails" src="/images/kaigi-on-rails-2022-dark.svg" class="hidden dark:block" /></a>
</div>

<style>
  a {
    border-bottom: none !important;
  }
  h1 {
    font-stretch: 105%;
  }
  .postgresql {
    font-stretch: 75%;
    font-weight: 900;
    color: #336791;
    text-shadow: navy 1px 1px;
  }
  .rubyists {
    font-stretch: 135%;
    font-weight: bold;
    color: #EB0064;
    text-shadow: maroon 1px 1px;
  }
</style>`,frontmatter:{theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1,syncAll:!1},title:"PostgreSQL as seen by Rubyists",info:`## PostgreSQL as seen by Rubyists
`,css:"unocss",fonts:{provider:"none",fallback:!1,local:"Martian Grotesk, Martian Mono",sans:"Martian Grotesk",serif:"Martian Grotesk",mono:"Martian Mono"}},note:"\u7686\u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F\uFF01\u4ECA\u65E5\u3001Ruby on Rails\u3092\u4F7F\u3063\u3066\u3044\u308B\u958B\u767A\u8005\u306E\u76EE\u3067PostgreSQL\u306F\u3069\u306E\u3088\u3046\u306B\u898B\u3048\u308B\u304B\u3068\u8A71\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002",index:0,start:0,end:58,notesHTML:`<p>\u7686\u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F\uFF01\u4ECA\u65E5\u3001Ruby on Rails\u3092\u4F7F\u3063\u3066\u3044\u308B\u958B\u767A\u8005\u306E\u76EE\u3067PostgreSQL\u306F\u3069\u306E\u3088\u3046\u306B\u898B\u3048\u308B\u304B\u3068\u8A71\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:f_,meta:{layout:"none",slide:{raw:`---
layout: none
---

<img alt="My GitHub" src="/images/github-envek-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/github-envek-dark.png" class="hidden dark:block" />

<!--
\u306F\u3058\u3081\u307E\u3057\u3066\u3001\u79C1\u306F\u30CE\u30F4\u30A3\u30B3\u30D5\u30FB\u30A2\u30F3\u30C9\u30EC\u30A4\u3068\u7533\u3057\u307E\u3059\u300210\u5E74\u3042\u307E\u308A\u30EB\u30D3\u30FC\u3082\u30DD\u30B9\u30C8\u30B0\u30EC\u30B9\u30AD\u30E5\u30FC\u30A8\u30EB\u3082\u4F7F\u3063\u3066\u69D8\u3005\u306A\u30A2\u30D7\u30EA\u3092\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002\u4ECA\u5E74\u3001\u65E5\u672C\u3078\u5F15\u8D8A\u3057\u3057\u3066\u3001\u5927\u962A\u306E\u8FD1\u304F\u306B\u4F4F\u3093\u3067\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002
-->
`,content:`<img alt="My GitHub" src="/images/github-envek-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/github-envek-dark.png" class="hidden dark:block" />`,frontmatter:{layout:"none"},note:"\u306F\u3058\u3081\u307E\u3057\u3066\u3001\u79C1\u306F\u30CE\u30F4\u30A3\u30B3\u30D5\u30FB\u30A2\u30F3\u30C9\u30EC\u30A4\u3068\u7533\u3057\u307E\u3059\u300210\u5E74\u3042\u307E\u308A\u30EB\u30D3\u30FC\u3082\u30DD\u30B9\u30C8\u30B0\u30EC\u30B9\u30AD\u30E5\u30FC\u30A8\u30EB\u3082\u4F7F\u3063\u3066\u69D8\u3005\u306A\u30A2\u30D7\u30EA\u3092\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002\u4ECA\u5E74\u3001\u65E5\u672C\u3078\u5F15\u8D8A\u3057\u3057\u3066\u3001\u5927\u962A\u306E\u8FD1\u304F\u306B\u4F4F\u3093\u3067\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002",index:1,start:58,end:69,notesHTML:`<p>\u306F\u3058\u3081\u307E\u3057\u3066\u3001\u79C1\u306F\u30CE\u30F4\u30A3\u30B3\u30D5\u30FB\u30A2\u30F3\u30C9\u30EC\u30A4\u3068\u7533\u3057\u307E\u3059\u300210\u5E74\u3042\u307E\u308A\u30EB\u30D3\u30FC\u3082\u30DD\u30B9\u30C8\u30B0\u30EC\u30B9\u30AD\u30E5\u30FC\u30A8\u30EB\u3082\u4F7F\u3063\u3066\u69D8\u3005\u306A\u30A2\u30D7\u30EA\u3092\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002\u4ECA\u5E74\u3001\u65E5\u672C\u3078\u5F15\u8D8A\u3057\u3057\u3066\u3001\u5927\u962A\u306E\u8FD1\u304F\u306B\u4F4F\u3093\u3067\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:A_,meta:{slide:{raw:`
<a href="https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists">
<img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden object-contain text-center m-auto max-h-112" />
<img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block object-contain text-center m-auto max-h-112" />
<p class="text-2xl text-center">evilmartians.com</p>
</a>
<div class="absolute bottom-32px left-32px rotate-10 text-2xl">\u90AA\u60AA\u306A\u706B\u661F\u4EBA\uFF1F</div>
<div class="absolute bottom-32px right-32px rotate-350 text-2xl">\u30A4\u30FC\u30D3\u30EB\u30DE\u30FC\u30B7\u30E3\u30F3\u30BA\uFF01</div>

<!--
\u3055\u3089\u306B\u81EA\u5206\u306F\u706B\u661F\u4EBA\u3067\u3059\u3002\u6211\u3005\u306F\u3001\u5E73\u548C\u76EE\u7684\u3067\u5730\u7403\u306B\u6765\u307E\u3057\u305F\u3002

\u771F\u9762\u76EE\u306B\u8A00\u3046\u3068\u3001\u300C\u30A4\u30FC\u30D3\u30EB\u30FB\u30DE\u30FC\u30B7\u30E3\u30F3\u30BA\u300D\u3068\u3044\u3046\u4F1A\u793E\u306B\u52E4\u3081\u3066\u3044\u307E\u3059\u3002

\u6211\u3005\u306F\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u3084\u5927\u4F01\u696D\u306E\u305F\u3081\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u767A\u3057\u305F\u308A\u3001\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3057\u305F\u308A\u3057\u3066\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u3082\u3061\u308D\u3093\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u3082\u542B\u3081\u3066\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u30BF\u30FC\u30F3\u30AD\u30FC\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002
-->
`,content:`<a href="https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists">
<img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden object-contain text-center m-auto max-h-112" />
<img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block object-contain text-center m-auto max-h-112" />
<p class="text-2xl text-center">evilmartians.com</p>
</a>
<div class="absolute bottom-32px left-32px rotate-10 text-2xl">\u90AA\u60AA\u306A\u706B\u661F\u4EBA\uFF1F</div>
<div class="absolute bottom-32px right-32px rotate-350 text-2xl">\u30A4\u30FC\u30D3\u30EB\u30DE\u30FC\u30B7\u30E3\u30F3\u30BA\uFF01</div>`,frontmatter:{},note:`\u3055\u3089\u306B\u81EA\u5206\u306F\u706B\u661F\u4EBA\u3067\u3059\u3002\u6211\u3005\u306F\u3001\u5E73\u548C\u76EE\u7684\u3067\u5730\u7403\u306B\u6765\u307E\u3057\u305F\u3002

\u771F\u9762\u76EE\u306B\u8A00\u3046\u3068\u3001\u300C\u30A4\u30FC\u30D3\u30EB\u30FB\u30DE\u30FC\u30B7\u30E3\u30F3\u30BA\u300D\u3068\u3044\u3046\u4F1A\u793E\u306B\u52E4\u3081\u3066\u3044\u307E\u3059\u3002

\u6211\u3005\u306F\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u3084\u5927\u4F01\u696D\u306E\u305F\u3081\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u767A\u3057\u305F\u308A\u3001\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3057\u305F\u308A\u3057\u3066\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u3082\u3061\u308D\u3093\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u3082\u542B\u3081\u3066\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u30BF\u30FC\u30F3\u30AD\u30FC\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002`,index:2,start:70,end:87,notesHTML:`<p>\u3055\u3089\u306B\u81EA\u5206\u306F\u706B\u661F\u4EBA\u3067\u3059\u3002\u6211\u3005\u306F\u3001\u5E73\u548C\u76EE\u7684\u3067\u5730\u7403\u306B\u6765\u307E\u3057\u305F\u3002</p>
<p>\u771F\u9762\u76EE\u306B\u8A00\u3046\u3068\u3001\u300C\u30A4\u30FC\u30D3\u30EB\u30FB\u30DE\u30FC\u30B7\u30E3\u30F3\u30BA\u300D\u3068\u3044\u3046\u4F1A\u793E\u306B\u52E4\u3081\u3066\u3044\u307E\u3059\u3002</p>
<p>\u6211\u3005\u306F\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u3084\u5927\u4F01\u696D\u306E\u305F\u3081\u306B\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u958B\u767A\u3057\u305F\u308A\u3001\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3057\u305F\u308A\u3057\u3066\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3092\u3082\u3061\u308D\u3093\u3001\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u3082\u542B\u3081\u3066\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u30BF\u30FC\u30F3\u30AD\u30FC\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:z_,meta:{slide:{raw:`
# Martian Open Source

<div class="grid grid-cols-4 grid-rows-2 gap-4">
  <a href="https://github.com/yabeda-rb/yabeda">
    <figure>
      <img alt="Yabeda" src="/images/martian-oss/yabeda.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Yabeda: Ruby application instrumentation framework</figcaption>
    </figure>
  </a>
  <a href="https://github.com/evilmartians/lefthook">
    <figure>
      <img alt="LeftHook" src="/images/martian-oss/lefthook.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Lefthook: git hooks manager</figcaption>
    </figure>
  </a>
  <a href="https://anycable.io/">
    <figure>
      <img alt="AnyCable" src="/images/martian-oss/anycable.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>AnyCable: Polyglot replacement for ActionCable server</figcaption>
    </figure>
  </a>
  <a href="https://postcss.org/">
    <figure>
      <img alt="PostCSS" src="/images/martian-oss/postcss.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>PostCSS: A tool for transforming CSS with JavaScript</figcaption>
    </figure>
  </a>
  <a href="https://imgproxy.net/">
    <figure>
      <img alt="Imgproxy" src="/images/martian-oss/imgproxy-light.svg" class="scaled-image h-40 mx-auto block dark:hidden" />
      <img alt="Imgproxy" src="/images/martian-oss/imgproxy-dark.svg" class="scaled-image h-40 mx-auto hidden dark:block" />
      <figcaption>Imgproxy: Fast and secure standalone server for resizing and converting remote images</figcaption>
    </figure>
  </a>
  <a href="https://logux.io/">
    <figure>
      <img alt="Logux" src="/images/martian-oss/logux-logo-light.svg" class="scaled-image h-40 mx-auto block dark:hidden" />
      <img alt="Logux" src="/images/martian-oss/logux-logo-dark.svg" class="scaled-image h-40 mx-auto hidden dark:block" />
      <figcaption>Logux: Client-server communication framework based on Optimistic UI, CRDT, and log</figcaption>
    </figure>
  </a>
  <a href="https://github.com/DarthSim/overmind">
    <figure>
      <img alt="Overmind" src="/images/martian-oss/overmind.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Overmind: Process manager for Procfile-based applications and tmux </figcaption>
    </figure>
  </a>
  <a href="https://evilmartians.com/oss">
    <figure>
      <div class="h-40 text-2xl flex items-center justify-center">
        <qr-code-vue value="https://evilmartians.com/oss" class="scaled-image w-full h-full mx-auto p-4" render-as="svg" margin="1" />
      </div>
      <figcaption style="font-size: 1rem; margin-top: 0; line-height: 1.25rem;">Even more at evilmartians.com/oss</figcaption>
    </figure>
  </a>
</div>

<style>
  a { border-bottom: none !important; }
  figcaption {
    margin-top: 0.5rem;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
  }
</style>

<!--
\u305D\u308C\u306B\u3001\u6211\u3005\u306F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E\u5927\u30D5\u30A1\u30F3\u306A\u306E\u3067\u3001\u3067\u304D\u308B\u9650\u308A\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u4F7F\u3063\u305F\u308A\u3001\u8CA2\u732E\u3057\u305F\u308A\u3001\u305D\u3057\u3066\u3088\u304F\u81EA\u5206\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u4F5C\u3063\u3066\u7DAD\u6301\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u4E00\u756A\u6709\u540D\u306A\u3082\u306E\u3067\u3059\u304C\u3001\u4ECA\u306F\u706B\u661F\u3067\u4F5C\u3063\u305F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u6570\u5341\u306E\u3082\u306E\u304C\u5B58\u5728\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u81EA\u7531\u306B\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002
-->
`,title:"Martian Open Source",level:1,content:`# Martian Open Source

<div class="grid grid-cols-4 grid-rows-2 gap-4">
  <a href="https://github.com/yabeda-rb/yabeda">
    <figure>
      <img alt="Yabeda" src="/images/martian-oss/yabeda.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Yabeda: Ruby application instrumentation framework</figcaption>
    </figure>
  </a>
  <a href="https://github.com/evilmartians/lefthook">
    <figure>
      <img alt="LeftHook" src="/images/martian-oss/lefthook.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Lefthook: git hooks manager</figcaption>
    </figure>
  </a>
  <a href="https://anycable.io/">
    <figure>
      <img alt="AnyCable" src="/images/martian-oss/anycable.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>AnyCable: Polyglot replacement for ActionCable server</figcaption>
    </figure>
  </a>
  <a href="https://postcss.org/">
    <figure>
      <img alt="PostCSS" src="/images/martian-oss/postcss.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>PostCSS: A tool for transforming CSS with JavaScript</figcaption>
    </figure>
  </a>
  <a href="https://imgproxy.net/">
    <figure>
      <img alt="Imgproxy" src="/images/martian-oss/imgproxy-light.svg" class="scaled-image h-40 mx-auto block dark:hidden" />
      <img alt="Imgproxy" src="/images/martian-oss/imgproxy-dark.svg" class="scaled-image h-40 mx-auto hidden dark:block" />
      <figcaption>Imgproxy: Fast and secure standalone server for resizing and converting remote images</figcaption>
    </figure>
  </a>
  <a href="https://logux.io/">
    <figure>
      <img alt="Logux" src="/images/martian-oss/logux-logo-light.svg" class="scaled-image h-40 mx-auto block dark:hidden" />
      <img alt="Logux" src="/images/martian-oss/logux-logo-dark.svg" class="scaled-image h-40 mx-auto hidden dark:block" />
      <figcaption>Logux: Client-server communication framework based on Optimistic UI, CRDT, and log</figcaption>
    </figure>
  </a>
  <a href="https://github.com/DarthSim/overmind">
    <figure>
      <img alt="Overmind" src="/images/martian-oss/overmind.svg" class="scaled-image h-40 mx-auto" />
      <figcaption>Overmind: Process manager for Procfile-based applications and tmux </figcaption>
    </figure>
  </a>
  <a href="https://evilmartians.com/oss">
    <figure>
      <div class="h-40 text-2xl flex items-center justify-center">
        <qr-code-vue value="https://evilmartians.com/oss" class="scaled-image w-full h-full mx-auto p-4" render-as="svg" margin="1" />
      </div>
      <figcaption style="font-size: 1rem; margin-top: 0; line-height: 1.25rem;">Even more at evilmartians.com/oss</figcaption>
    </figure>
  </a>
</div>

<style>
  a { border-bottom: none !important; }
  figcaption {
    margin-top: 0.5rem;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
  }
</style>`,frontmatter:{},note:"\u305D\u308C\u306B\u3001\u6211\u3005\u306F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E\u5927\u30D5\u30A1\u30F3\u306A\u306E\u3067\u3001\u3067\u304D\u308B\u9650\u308A\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u4F7F\u3063\u305F\u308A\u3001\u8CA2\u732E\u3057\u305F\u308A\u3001\u305D\u3057\u3066\u3088\u304F\u81EA\u5206\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u4F5C\u3063\u3066\u7DAD\u6301\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u4E00\u756A\u6709\u540D\u306A\u3082\u306E\u3067\u3059\u304C\u3001\u4ECA\u306F\u706B\u661F\u3067\u4F5C\u3063\u305F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u6570\u5341\u306E\u3082\u306E\u304C\u5B58\u5728\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u81EA\u7531\u306B\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002",index:3,start:88,end:160,notesHTML:`<p>\u305D\u308C\u306B\u3001\u6211\u3005\u306F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u306E\u5927\u30D5\u30A1\u30F3\u306A\u306E\u3067\u3001\u3067\u304D\u308B\u9650\u308A\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u4F7F\u3063\u305F\u308A\u3001\u8CA2\u732E\u3057\u305F\u308A\u3001\u305D\u3057\u3066\u3088\u304F\u81EA\u5206\u306E\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u4F5C\u3063\u3066\u7DAD\u6301\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u4E00\u756A\u6709\u540D\u306A\u3082\u306E\u3067\u3059\u304C\u3001\u4ECA\u306F\u706B\u661F\u3067\u4F5C\u3063\u305F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u6570\u5341\u306E\u3082\u306E\u304C\u5B58\u5728\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u3046\u305E\u81EA\u7531\u306B\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Q_,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

This talk is about\u2026

# Subtle differences

<!--
\u3067\u306F\u3001\u4ECA\u65E5\u3001\u5FAE\u5999\u306A\u9055\u3044\u306B\u3064\u3044\u3066\u8A71\u3092\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u3067\u3059\u304C\u3001\u5FAE\u5999\u306A\u9055\u3044\u3063\u3066\u4F55\u306E\u3053\u3068\u3067\u3057\u3087\u3046?
-->
`,title:"Subtle differences",level:1,content:`This talk is about\u2026

# Subtle differences`,frontmatter:{layout:"cover"},note:"\u3067\u306F\u3001\u4ECA\u65E5\u3001\u5FAE\u5999\u306A\u9055\u3044\u306B\u3064\u3044\u3066\u8A71\u3092\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u3067\u3059\u304C\u3001\u5FAE\u5999\u306A\u9055\u3044\u3063\u3066\u4F55\u306E\u3053\u3068\u3067\u3057\u3087\u3046?",index:4,start:160,end:172,notesHTML:`<p>\u3067\u306F\u3001\u4ECA\u65E5\u3001\u5FAE\u5999\u306A\u9055\u3044\u306B\u3064\u3044\u3066\u8A71\u3092\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u3067\u3059\u304C\u3001\u5FAE\u5999\u306A\u9055\u3044\u3063\u3066\u4F55\u306E\u3053\u3068\u3067\u3057\u3087\u3046?</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:W_,meta:{layout:"image",image:"/images/roads-in-different-countries.jpg",slide:{raw:`---
layout: image
image: /images/roads-in-different-countries.jpg
---

<!--
\u4F8B\u3068\u3057\u3066\u3001\u9053\u8DEF\u4EA4\u901A\u306B\u3064\u3044\u3066\u8A71\u305D\u3046\u3068\u601D\u3044\u307E\u3059\u3002\u8ECA\u306F\u3069\u3093\u306A\u56FD\u3067\u3082\u540C\u3058\u3067\u3059\u304C\u3001\u4EA4\u901A\u30EB\u30FC\u30EB\u306F\u4F3C\u3066\u3044\u3066\u3082\u540C\u3058\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002

\u9053\u8DEF\u4EA4\u901A\u3092\u6A19\u6E96\u5316\u3059\u308B\u8A66\u307F\u306F\u3001\u3053\u308C\u307E\u3067\u306B\u3082\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3057\u305F\u3002\u30B8\u30E5\u30CD\u30FC\u30F4\u4EA4\u901A\u6761\u7D04\u3084\u30A6\u30A3\u30FC\u30F3\u4EA4\u901A\u6761\u7D04\u304C\u3042\u3063\u3066\u3082\u3001\u5B8C\u5168\u306A\u6A19\u6E96\u5316\u306F\u5B9F\u73FE\u3055\u308C\u3066\u3044\u305B\u3093\u3002\u305D\u306E\u305F\u3081\u3001\u5FAE\u5999\u306A\u9055\u3044\u306F\u7121\u8996\u3067\u304D\u306A\u3044\u3053\u3068\u3067\u3059\u3002
-->
`,content:"",frontmatter:{layout:"image",image:"/images/roads-in-different-countries.jpg"},note:`\u4F8B\u3068\u3057\u3066\u3001\u9053\u8DEF\u4EA4\u901A\u306B\u3064\u3044\u3066\u8A71\u305D\u3046\u3068\u601D\u3044\u307E\u3059\u3002\u8ECA\u306F\u3069\u3093\u306A\u56FD\u3067\u3082\u540C\u3058\u3067\u3059\u304C\u3001\u4EA4\u901A\u30EB\u30FC\u30EB\u306F\u4F3C\u3066\u3044\u3066\u3082\u540C\u3058\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002

\u9053\u8DEF\u4EA4\u901A\u3092\u6A19\u6E96\u5316\u3059\u308B\u8A66\u307F\u306F\u3001\u3053\u308C\u307E\u3067\u306B\u3082\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3057\u305F\u3002\u30B8\u30E5\u30CD\u30FC\u30F4\u4EA4\u901A\u6761\u7D04\u3084\u30A6\u30A3\u30FC\u30F3\u4EA4\u901A\u6761\u7D04\u304C\u3042\u3063\u3066\u3082\u3001\u5B8C\u5168\u306A\u6A19\u6E96\u5316\u306F\u5B9F\u73FE\u3055\u308C\u3066\u3044\u305B\u3093\u3002\u305D\u306E\u305F\u3081\u3001\u5FAE\u5999\u306A\u9055\u3044\u306F\u7121\u8996\u3067\u304D\u306A\u3044\u3053\u3068\u3067\u3059\u3002`,index:5,start:172,end:183,notesHTML:`<p>\u4F8B\u3068\u3057\u3066\u3001\u9053\u8DEF\u4EA4\u901A\u306B\u3064\u3044\u3066\u8A71\u305D\u3046\u3068\u601D\u3044\u307E\u3059\u3002\u8ECA\u306F\u3069\u3093\u306A\u56FD\u3067\u3082\u540C\u3058\u3067\u3059\u304C\u3001\u4EA4\u901A\u30EB\u30FC\u30EB\u306F\u4F3C\u3066\u3044\u3066\u3082\u540C\u3058\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>
<p>\u9053\u8DEF\u4EA4\u901A\u3092\u6A19\u6E96\u5316\u3059\u308B\u8A66\u307F\u306F\u3001\u3053\u308C\u307E\u3067\u306B\u3082\u3044\u304F\u3064\u304B\u3042\u308A\u307E\u3057\u305F\u3002\u30B8\u30E5\u30CD\u30FC\u30F4\u4EA4\u901A\u6761\u7D04\u3084\u30A6\u30A3\u30FC\u30F3\u4EA4\u901A\u6761\u7D04\u304C\u3042\u3063\u3066\u3082\u3001\u5B8C\u5168\u306A\u6A19\u6E96\u5316\u306F\u5B9F\u73FE\u3055\u308C\u3066\u3044\u305B\u3093\u3002\u305D\u306E\u305F\u3081\u3001\u5FAE\u5999\u306A\u9055\u3044\u306F\u7121\u8996\u3067\u304D\u306A\u3044\u3053\u3068\u3067\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:e5,meta:{layout:"footnote","footnote-class":"text-sm",slide:{raw:`---
layout: footnote
footnote-class: text-sm
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian \u201CYield\u201D sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-2xl text-center">\u2026</strong>
</div>

![Japanese \u201CStop\u201D sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Left: road sign conforming [Vienna Convention on Road Signs and Signals](https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals)

Right: Japanese road sign per \u201COrder on Road Sign, Road Line, and Road Surface Marking\u201D

<!--
\u4F8B\u3048\u3070\u3001\u3075\u305F\u3064\u306E\u9053\u8DEF\u6A19\u8B58\u3092\u6BD4\u3079\u307E\u3057\u3087\u3046\u3002\u5DE6\u306E\u306F\u3001\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u4EA4\u5DEE\u70B9\u3067\u3088\u304F\u898B\u3089\u308C\u308B\u6A19\u8B58\u3067\u3059\u3002\u53F3\u306E\u306F\u3001\u65E5\u672C\u306E\u3082\u306E\u3067\u3059\u3002\u4E21\u65B9\u3068\u3082\u300C\u4EA4\u5DEE\u70B9\u3067\u9053\u3092\u8B72\u308B\u3079\u304D\u300D\u3068\u3044\u3046\u610F\u5473\u3082\u3042\u308A\u307E\u3059\u3002\u540C\u3058\u3088\u3046\u306B\u307F\u3048\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u30A4\u30B3\u30FC\u30EB\u304B\u3069\u3046\u304B\uFF1F
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian \u201CYield\u201D sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-2xl text-center">\u2026</strong>
</div>

![Japanese \u201CStop\u201D sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Left: road sign conforming [Vienna Convention on Road Signs and Signals](https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals)

Right: Japanese road sign per \u201COrder on Road Sign, Road Line, and Road Surface Marking\u201D`,frontmatter:{layout:"footnote","footnote-class":"text-sm"},note:"\u4F8B\u3048\u3070\u3001\u3075\u305F\u3064\u306E\u9053\u8DEF\u6A19\u8B58\u3092\u6BD4\u3079\u307E\u3057\u3087\u3046\u3002\u5DE6\u306E\u306F\u3001\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u4EA4\u5DEE\u70B9\u3067\u3088\u304F\u898B\u3089\u308C\u308B\u6A19\u8B58\u3067\u3059\u3002\u53F3\u306E\u306F\u3001\u65E5\u672C\u306E\u3082\u306E\u3067\u3059\u3002\u4E21\u65B9\u3068\u3082\u300C\u4EA4\u5DEE\u70B9\u3067\u9053\u3092\u8B72\u308B\u3079\u304D\u300D\u3068\u3044\u3046\u610F\u5473\u3082\u3042\u308A\u307E\u3059\u3002\u540C\u3058\u3088\u3046\u306B\u307F\u3048\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u30A4\u30B3\u30FC\u30EB\u304B\u3069\u3046\u304B\uFF1F",index:6,start:183,end:217,notesHTML:`<p>\u4F8B\u3048\u3070\u3001\u3075\u305F\u3064\u306E\u9053\u8DEF\u6A19\u8B58\u3092\u6BD4\u3079\u307E\u3057\u3087\u3046\u3002\u5DE6\u306E\u306F\u3001\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u4EA4\u5DEE\u70B9\u3067\u3088\u304F\u898B\u3089\u308C\u308B\u6A19\u8B58\u3067\u3059\u3002\u53F3\u306E\u306F\u3001\u65E5\u672C\u306E\u3082\u306E\u3067\u3059\u3002\u4E21\u65B9\u3068\u3082\u300C\u4EA4\u5DEE\u70B9\u3067\u9053\u3092\u8B72\u308B\u3079\u304D\u300D\u3068\u3044\u3046\u610F\u5473\u3082\u3042\u308A\u307E\u3059\u3002\u540C\u3058\u3088\u3046\u306B\u307F\u3048\u307E\u3059\u304C\u3001\u5B9F\u969B\u306B\u30A4\u30B3\u30FC\u30EB\u304B\u3069\u3046\u304B\uFF1F</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:o5,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian \u201CYield\u201D sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">NO!</strong>
</div>

![Japanese \u201CStop\u201D sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Both require drivers to give a way\u2026

European sign doesn't have a requirement to stop or even slow down!

<!--
\u3067\u3059\u304C\u3001\u4E00\u3064\u306E\u91CD\u8981\u306A\u9055\u3044\u304C\u3042\u308B\u3093\u3067\u3059\u3002\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u5834\u5408\u306F\u3001\u8ECA\u306F\u6B62\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4ED6\u306E\u8ECA\u3084\u81EA\u8EE2\u8ECA\u3084\u6B69\u884C\u8005\u304C\u306A\u3051\u308C\u3070\u3001\u901F\u5EA6\u3092\u843D\u3068\u3055\u306A\u304F\u3066\u3082\u901A\u884C\u3067\u304D\u307E\u3059\u3002\u65E5\u672C\u306E\u6A19\u8B58\u306F\u300C\u6B62\u307E\u308C\u300D\u3068\u3044\u3044\u3001\u5FC5\u305A\u4E00\u6642\u505C\u6B62\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u304F\u3066\u3001\u305D\u308C\u304B\u3089\u901A\u884C\u3059\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian \u201CYield\u201D sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">NO!</strong>
</div>

![Japanese \u201CStop\u201D sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Both require drivers to give a way\u2026

European sign doesn't have a requirement to stop or even slow down!`,frontmatter:{layout:"footnote"},note:"\u3067\u3059\u304C\u3001\u4E00\u3064\u306E\u91CD\u8981\u306A\u9055\u3044\u304C\u3042\u308B\u3093\u3067\u3059\u3002\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u5834\u5408\u306F\u3001\u8ECA\u306F\u6B62\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4ED6\u306E\u8ECA\u3084\u81EA\u8EE2\u8ECA\u3084\u6B69\u884C\u8005\u304C\u306A\u3051\u308C\u3070\u3001\u901F\u5EA6\u3092\u843D\u3068\u3055\u306A\u304F\u3066\u3082\u901A\u884C\u3067\u304D\u307E\u3059\u3002\u65E5\u672C\u306E\u6A19\u8B58\u306F\u300C\u6B62\u307E\u308C\u300D\u3068\u3044\u3044\u3001\u5FC5\u305A\u4E00\u6642\u505C\u6B62\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u304F\u3066\u3001\u305D\u308C\u304B\u3089\u901A\u884C\u3059\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",index:7,start:217,end:250,notesHTML:`<p>\u3067\u3059\u304C\u3001\u4E00\u3064\u306E\u91CD\u8981\u306A\u9055\u3044\u304C\u3042\u308B\u3093\u3067\u3059\u3002\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u5834\u5408\u306F\u3001\u8ECA\u306F\u6B62\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4ED6\u306E\u8ECA\u3084\u81EA\u8EE2\u8ECA\u3084\u6B69\u884C\u8005\u304C\u306A\u3051\u308C\u3070\u3001\u901F\u5EA6\u3092\u843D\u3068\u3055\u306A\u304F\u3066\u3082\u901A\u884C\u3067\u304D\u307E\u3059\u3002\u65E5\u672C\u306E\u6A19\u8B58\u306F\u300C\u6B62\u307E\u308C\u300D\u3068\u3044\u3044\u3001\u5FC5\u305A\u4E00\u6642\u505C\u6B62\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u304F\u3066\u3001\u305D\u308C\u304B\u3089\u901A\u884C\u3059\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:p5,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

<div class="p-4 pt-8 pr-8">

![Russian \u201CYield\u201D sign](/images/road-signs/RU_road_sign_2.5.svg)
</div>

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">YES!</strong>
</div>

![Japanese \u201CStop\u201D sign](/images/road-signs/Japan_road_sign_330-A.svg)

</div>

::footnote::

Stop signs around the world are _mostly_ octagonal.

Japanese signs have \u201CSTOP\u201D word in English after 2017, but are still pretty rare.

<!--
\u672C\u5F53\u306B\u540C\u4E00\u306E\u6A19\u8B58\u306F\u3053\u308C\u3067\u3059\u3002\u300CStop\u300D\u306E\u8D64\u3044\u516B\u89D2\u5F62\u306E\u3082\u306E\u3067\u3059\u3002\u305D\u3057\u3066\u30012017\u5E74\u304B\u3089\u3001\u65E5\u672C\u306E\u6A19\u8B58\u306B\u3082\u82F1\u8A9E\u306E\u300CStop\u300D\u304C\u66F8\u3044\u3066\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u306E\u69D8\u306A\u65B0\u3057\u3044\u6A19\u8B58\u306F\u307E\u3060\u3051\u3063\u3053\u3046\u73CD\u3057\u3044\u3067\u3059\u306D\u3002

\u3053\u306E\u69D8\u306A\u5FAE\u5999\u306A\u9055\u3044\u306F\u3068\u3066\u3082\u91CD\u8981\u3067\u3059\u3002\u3082\u3057\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u904B\u8EE2\u624B\u306F\u65E5\u672C\u306E\u300C\u6B62\u307E\u308C\u300D\u6A19\u8B58\u306F\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u300C\u8B72\u308C\u300D\u6A19\u8B58\u3068\u540C\u3058\u3060\u3068\u601D\u3063\u3066\u3057\u307E\u3063\u3066\u6B62\u3081\u306A\u3044\u3067\u901A\u884C\u3059\u308B\u3068\u3001\u7F70\u91D1\u3092\u53D7\u3051\u305F\u308A\u3001\u4E07\u304C\u4E00\u4EA4\u901A\u4E8B\u6545\u307E\u3067\u306B\u306A\u308B\u6050\u308C\u304C\u3042\u308A\u307E\u3059\u3002
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

<div class="p-4 pt-8 pr-8">

![Russian \u201CYield\u201D sign](/images/road-signs/RU_road_sign_2.5.svg)
</div>

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">YES!</strong>
</div>

![Japanese \u201CStop\u201D sign](/images/road-signs/Japan_road_sign_330-A.svg)

</div>

::footnote::

Stop signs around the world are _mostly_ octagonal.

Japanese signs have \u201CSTOP\u201D word in English after 2017, but are still pretty rare.`,frontmatter:{layout:"footnote"},note:`\u672C\u5F53\u306B\u540C\u4E00\u306E\u6A19\u8B58\u306F\u3053\u308C\u3067\u3059\u3002\u300CStop\u300D\u306E\u8D64\u3044\u516B\u89D2\u5F62\u306E\u3082\u306E\u3067\u3059\u3002\u305D\u3057\u3066\u30012017\u5E74\u304B\u3089\u3001\u65E5\u672C\u306E\u6A19\u8B58\u306B\u3082\u82F1\u8A9E\u306E\u300CStop\u300D\u304C\u66F8\u3044\u3066\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u306E\u69D8\u306A\u65B0\u3057\u3044\u6A19\u8B58\u306F\u307E\u3060\u3051\u3063\u3053\u3046\u73CD\u3057\u3044\u3067\u3059\u306D\u3002

\u3053\u306E\u69D8\u306A\u5FAE\u5999\u306A\u9055\u3044\u306F\u3068\u3066\u3082\u91CD\u8981\u3067\u3059\u3002\u3082\u3057\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u904B\u8EE2\u624B\u306F\u65E5\u672C\u306E\u300C\u6B62\u307E\u308C\u300D\u6A19\u8B58\u306F\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u300C\u8B72\u308C\u300D\u6A19\u8B58\u3068\u540C\u3058\u3060\u3068\u601D\u3063\u3066\u3057\u307E\u3063\u3066\u6B62\u3081\u306A\u3044\u3067\u901A\u884C\u3059\u308B\u3068\u3001\u7F70\u91D1\u3092\u53D7\u3051\u305F\u308A\u3001\u4E07\u304C\u4E00\u4EA4\u901A\u4E8B\u6545\u307E\u3067\u306B\u306A\u308B\u6050\u308C\u304C\u3042\u308A\u307E\u3059\u3002`,index:8,start:250,end:288,notesHTML:`<p>\u672C\u5F53\u306B\u540C\u4E00\u306E\u6A19\u8B58\u306F\u3053\u308C\u3067\u3059\u3002\u300CStop\u300D\u306E\u8D64\u3044\u516B\u89D2\u5F62\u306E\u3082\u306E\u3067\u3059\u3002\u305D\u3057\u3066\u30012017\u5E74\u304B\u3089\u3001\u65E5\u672C\u306E\u6A19\u8B58\u306B\u3082\u82F1\u8A9E\u306E\u300CStop\u300D\u304C\u66F8\u3044\u3066\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u306E\u69D8\u306A\u65B0\u3057\u3044\u6A19\u8B58\u306F\u307E\u3060\u3051\u3063\u3053\u3046\u73CD\u3057\u3044\u3067\u3059\u306D\u3002</p>
<p>\u3053\u306E\u69D8\u306A\u5FAE\u5999\u306A\u9055\u3044\u306F\u3068\u3066\u3082\u91CD\u8981\u3067\u3059\u3002\u3082\u3057\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u904B\u8EE2\u624B\u306F\u65E5\u672C\u306E\u300C\u6B62\u307E\u308C\u300D\u6A19\u8B58\u306F\u30E8\u30FC\u30ED\u30C3\u30D1\u306E\u300C\u8B72\u308C\u300D\u6A19\u8B58\u3068\u540C\u3058\u3060\u3068\u601D\u3063\u3066\u3057\u307E\u3063\u3066\u6B62\u3081\u306A\u3044\u3067\u901A\u884C\u3059\u308B\u3068\u3001\u7F70\u91D1\u3092\u53D7\u3051\u305F\u308A\u3001\u4E07\u304C\u4E00\u4EA4\u901A\u4E8B\u6545\u307E\u3067\u306B\u306A\u308B\u6050\u308C\u304C\u3042\u308A\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:v5,meta:{slide:{raw:`
<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<twemoji-thinking-face class="self-end w-full h-32" />

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>

<!--
\u3067\u306F\u3001\u300C\u3053\u306E\u8A71\u306F\u3001Ruby\u3068PostgreSQL\u306B\u3069\u3093\u306A\u95A2\u4FC2\u304C\u3042\u308B\u304B\u300D\u3068\u601D\u3063\u3066\u3044\u308B\u4EBA\u306F\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<twemoji-thinking-face class="self-end w-full h-32" />

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>`,frontmatter:{},note:"\u3067\u306F\u3001\u300C\u3053\u306E\u8A71\u306F\u3001Ruby\u3068PostgreSQL\u306B\u3069\u3093\u306A\u95A2\u4FC2\u304C\u3042\u308B\u304B\u300D\u3068\u601D\u3063\u3066\u3044\u308B\u4EBA\u306F\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002",index:9,start:289,end:308,notesHTML:`<p>\u3067\u306F\u3001\u300C\u3053\u306E\u8A71\u306F\u3001Ruby\u3068PostgreSQL\u306B\u3069\u3093\u306A\u95A2\u4FC2\u304C\u3042\u308B\u304B\u300D\u3068\u601D\u3063\u3066\u3044\u308B\u4EBA\u306F\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:R5,meta:{slide:{raw:`
<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<p class="text-center">
Application data
<twemoji-repeat-button class="w-full h-32" />
Data in the database
</p>

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>

<!--
\u540C\u3058\u3088\u3046\u306B\u3001Ruby\u3068Postgres\u306E\u30C7\u30FC\u30BF\u578B\u306F\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u540C\u4E00\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u591A\u6570\u306E\u30A2\u30D7\u30EA\u306F\u3001\u30C7\u30FC\u30BF\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3057\u307E\u3059\u3088\u306D\u3002\u3067\u3059\u304B\u3089\u3001\u30C7\u30FC\u30BF\u578B\u306E\u5FAE\u5999\u306A\u9055\u3044\u306E\u305B\u3044\u3067\u3044\u308D\u3044\u308D\u306A\u30D0\u30B0\u304C\u8D77\u3053\u308A\u5F97\u308B\u3053\u3068\u306B\u3001\u6C17\u3092\u3064\u3051\u305F\u65B9\u304C\u3044\u3044\u3068\u601D\u3044\u307E\u3059\u3002
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<p class="text-center">
Application data
<twemoji-repeat-button class="w-full h-32" />
Data in the database
</p>

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>`,frontmatter:{},note:"\u540C\u3058\u3088\u3046\u306B\u3001Ruby\u3068Postgres\u306E\u30C7\u30FC\u30BF\u578B\u306F\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u540C\u4E00\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u591A\u6570\u306E\u30A2\u30D7\u30EA\u306F\u3001\u30C7\u30FC\u30BF\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3057\u307E\u3059\u3088\u306D\u3002\u3067\u3059\u304B\u3089\u3001\u30C7\u30FC\u30BF\u578B\u306E\u5FAE\u5999\u306A\u9055\u3044\u306E\u305B\u3044\u3067\u3044\u308D\u3044\u308D\u306A\u30D0\u30B0\u304C\u8D77\u3053\u308A\u5F97\u308B\u3053\u3068\u306B\u3001\u6C17\u3092\u3064\u3051\u305F\u65B9\u304C\u3044\u3044\u3068\u601D\u3044\u307E\u3059\u3002",index:10,start:309,end:332,notesHTML:`<p>\u540C\u3058\u3088\u3046\u306B\u3001Ruby\u3068Postgres\u306E\u30C7\u30FC\u30BF\u578B\u306F\u4F3C\u3066\u3044\u307E\u3059\u304C\u3001\u540C\u4E00\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u591A\u6570\u306E\u30A2\u30D7\u30EA\u306F\u3001\u30C7\u30FC\u30BF\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3057\u307E\u3059\u3088\u306D\u3002\u3067\u3059\u304B\u3089\u3001\u30C7\u30FC\u30BF\u578B\u306E\u5FAE\u5999\u306A\u9055\u3044\u306E\u305B\u3044\u3067\u3044\u308D\u3044\u308D\u306A\u30D0\u30B0\u304C\u8D77\u3053\u308A\u5F97\u308B\u3053\u3068\u306B\u3001\u6C17\u3092\u3064\u3051\u305F\u65B9\u304C\u3044\u3044\u3068\u601D\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:N5,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Ruby vs PostgreSQL data types

Are they same?

<!--
\u3067\u306F\u3001Ruby\u3068PostgreSQL\u306E\u30C7\u30FC\u30BF\u578B\u3092\u4E00\u3064\u4E00\u3064\u691C\u8A0E\u3057\u3066\u6BD4\u3079\u307E\u3057\u3087\u3046\uFF01
-->
`,title:"Ruby vs PostgreSQL data types",level:1,content:`# Ruby vs PostgreSQL data types

Are they same?`,frontmatter:{layout:"center"},note:"\u3067\u306F\u3001Ruby\u3068PostgreSQL\u306E\u30C7\u30FC\u30BF\u578B\u3092\u4E00\u3064\u4E00\u3064\u691C\u8A0E\u3057\u3066\u6BD4\u3079\u307E\u3057\u3087\u3046\uFF01",index:11,start:332,end:344,notesHTML:`<p>\u3067\u306F\u3001Ruby\u3068PostgreSQL\u306E\u30C7\u30FC\u30BF\u578B\u3092\u4E00\u3064\u4E00\u3064\u691C\u8A0E\u3057\u3066\u6BD4\u3079\u307E\u3057\u3087\u3046\uFF01</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:$A,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Integers

::rubytype::

\`Integer\`

Variable length

::ruby::

\`\`\`ruby
1.size             # =>  8 (bytes)
(256**8 - 1).size  # =>  8 (bytes)
(256**8).size      # =>  9 (bytes)
(256**40 - 1).size # => 40 (bytes)
\`\`\`

In ActiveModel there is validation for databases:

\`\`\`ruby
Test.create(value: 2147483648)
# ActiveModel::RangeError: 2147483648 is out of range
# for ActiveModel::Type::Integer with limit 4 bytes
\`\`\`

::pgtype::

\`integer\`

2, 4, 8 bytes signed

::postgresql::

<div class="text-xs">

| Name     | Size | Range |
|----------| - | - |
| \`smallint\` | 2 | -32768 to +32767 |
| \`integer\`  | 4 | -2147483648 to +2147483647 |
| \`bigint\`   | 8 | -9223372036854775808 to +9223372036854775807 |

</div>

\`\`\`sql
INSERT INTO "tests" ("value") VALUES (2147483648);
-- ERROR:  integer out of range
\`\`\`

::footnote_ruby::

See [bignum.c](https://github.com/ruby/ruby/blob/ruby_3_1/bignum.c) in Ruby sources.

::footnote_pg::

See [Numeric types docs](https://www.postgresql.org/docs/14/datatype-numeric.html)

<!--
\u307E\u305A\u3001\u6574\u6570\u307E\u305F\u306Finteger\u304B\u3089\u59CB\u3081\u307E\u3057\u3087\u3046\u3002

Ruby\u306E\u6574\u6570\u306F\u52D5\u7684\u30B5\u30A4\u30BA\u306A\u306E\u3067\u3001\u5236\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002GMP\u3068\u3044\u3046\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u3001\u30AB\u30E9\u30C4\u30D0\u3068\u30C8\u30A5\u30FC\u30E0\u30AF\u30C3\u30AF\u4E57\u7B97\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3001Ruby\u306F\u5DE8\u5927\u6570\u3092\u6271\u3048\u307E\u3059\u3002\u30D7\u30ED\u30B0\u30E9\u30DE\u30FC\u306F\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306B\u3064\u3044\u3066\u5FC3\u914D\u3057\u306A\u304F\u3066\u3082\u3044\u3044\u3067\u3059\u3002

\u9006\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6574\u6570\u306F\u56FA\u5B9A\u30B5\u30A4\u30BA\u3067\u3059\u3002\uFF12\u30D0\u30A4\u30C8\u306Esmallint\u3001\uFF14\u30D0\u30A4\u30C8\u306Einteger\u3001\uFF18\u30D0\u30A4\u30C8\u306Ebigint\u304B\u3089\u9078\u3079\u307E\u3059\u3002

PostgreSQL\u3067\u306Finteger\u306E\u5217\u3092\u4F5C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F4\u30D0\u30A4\u30C8\u306E\u6574\u6570\u30C7\u30FC\u30BF\u578B\u306E\u5217\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u53EF\u80FD\u306A\u5024\u306F\u30DE\u30A4\u30CA\u30B9\u4E8C\u5341\u5104\u304B\u3089\u30D7\u30E9\u30B9\u4E8C\u5341\u5104\u3050\u3089\u3044\u307E\u3067\u3067\u3001\u3053\u308C\u306F\u666E\u6BB5\u5341\u5206\u3067\u3059\u304C\u2026
-->
`,title:"Integers",level:2,content:`## Integers

::rubytype::

\`Integer\`

Variable length

::ruby::

\`\`\`ruby
1.size             # =>  8 (bytes)
(256**8 - 1).size  # =>  8 (bytes)
(256**8).size      # =>  9 (bytes)
(256**40 - 1).size # => 40 (bytes)
\`\`\`

In ActiveModel there is validation for databases:

\`\`\`ruby
Test.create(value: 2147483648)
# ActiveModel::RangeError: 2147483648 is out of range
# for ActiveModel::Type::Integer with limit 4 bytes
\`\`\`

::pgtype::

\`integer\`

2, 4, 8 bytes signed

::postgresql::

<div class="text-xs">

| Name     | Size | Range |
|----------| - | - |
| \`smallint\` | 2 | -32768 to +32767 |
| \`integer\`  | 4 | -2147483648 to +2147483647 |
| \`bigint\`   | 8 | -9223372036854775808 to +9223372036854775807 |

</div>

\`\`\`sql
INSERT INTO "tests" ("value") VALUES (2147483648);
-- ERROR:  integer out of range
\`\`\`

::footnote_ruby::

See [bignum.c](https://github.com/ruby/ruby/blob/ruby_3_1/bignum.c) in Ruby sources.

::footnote_pg::

See [Numeric types docs](https://www.postgresql.org/docs/14/datatype-numeric.html)`,frontmatter:{layout:"comparison"},note:`\u307E\u305A\u3001\u6574\u6570\u307E\u305F\u306Finteger\u304B\u3089\u59CB\u3081\u307E\u3057\u3087\u3046\u3002

Ruby\u306E\u6574\u6570\u306F\u52D5\u7684\u30B5\u30A4\u30BA\u306A\u306E\u3067\u3001\u5236\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002GMP\u3068\u3044\u3046\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u3001\u30AB\u30E9\u30C4\u30D0\u3068\u30C8\u30A5\u30FC\u30E0\u30AF\u30C3\u30AF\u4E57\u7B97\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3001Ruby\u306F\u5DE8\u5927\u6570\u3092\u6271\u3048\u307E\u3059\u3002\u30D7\u30ED\u30B0\u30E9\u30DE\u30FC\u306F\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306B\u3064\u3044\u3066\u5FC3\u914D\u3057\u306A\u304F\u3066\u3082\u3044\u3044\u3067\u3059\u3002

\u9006\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6574\u6570\u306F\u56FA\u5B9A\u30B5\u30A4\u30BA\u3067\u3059\u3002\uFF12\u30D0\u30A4\u30C8\u306Esmallint\u3001\uFF14\u30D0\u30A4\u30C8\u306Einteger\u3001\uFF18\u30D0\u30A4\u30C8\u306Ebigint\u304B\u3089\u9078\u3079\u307E\u3059\u3002

PostgreSQL\u3067\u306Finteger\u306E\u5217\u3092\u4F5C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F4\u30D0\u30A4\u30C8\u306E\u6574\u6570\u30C7\u30FC\u30BF\u578B\u306E\u5217\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u53EF\u80FD\u306A\u5024\u306F\u30DE\u30A4\u30CA\u30B9\u4E8C\u5341\u5104\u304B\u3089\u30D7\u30E9\u30B9\u4E8C\u5341\u5104\u3050\u3089\u3044\u307E\u3067\u3067\u3001\u3053\u308C\u306F\u666E\u6BB5\u5341\u5206\u3067\u3059\u304C\u2026`,index:12,start:344,end:414,notesHTML:`<p>\u307E\u305A\u3001\u6574\u6570\u307E\u305F\u306Finteger\u304B\u3089\u59CB\u3081\u307E\u3057\u3087\u3046\u3002</p>
<p>Ruby\u306E\u6574\u6570\u306F\u52D5\u7684\u30B5\u30A4\u30BA\u306A\u306E\u3067\u3001\u5236\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002GMP\u3068\u3044\u3046\u30E9\u30A4\u30D6\u30E9\u30EA\u3084\u3001\u30AB\u30E9\u30C4\u30D0\u3068\u30C8\u30A5\u30FC\u30E0\u30AF\u30C3\u30AF\u4E57\u7B97\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u3092\u4F7F\u7528\u3057\u3066\u3001Ruby\u306F\u5DE8\u5927\u6570\u3092\u6271\u3048\u307E\u3059\u3002\u30D7\u30ED\u30B0\u30E9\u30DE\u30FC\u306F\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306B\u3064\u3044\u3066\u5FC3\u914D\u3057\u306A\u304F\u3066\u3082\u3044\u3044\u3067\u3059\u3002</p>
<p>\u9006\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6574\u6570\u306F\u56FA\u5B9A\u30B5\u30A4\u30BA\u3067\u3059\u3002\uFF12\u30D0\u30A4\u30C8\u306Esmallint\u3001\uFF14\u30D0\u30A4\u30C8\u306Einteger\u3001\uFF18\u30D0\u30A4\u30C8\u306Ebigint\u304B\u3089\u9078\u3079\u307E\u3059\u3002</p>
<p>PostgreSQL\u3067\u306Finteger\u306E\u5217\u3092\u4F5C\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F4\u30D0\u30A4\u30C8\u306E\u6574\u6570\u30C7\u30FC\u30BF\u578B\u306E\u5217\u304C\u4F5C\u6210\u3055\u308C\u307E\u3059\u3002\u53EF\u80FD\u306A\u5024\u306F\u30DE\u30A4\u30CA\u30B9\u4E8C\u5341\u5104\u304B\u3089\u30D7\u30E9\u30B9\u4E8C\u5341\u5104\u3050\u3089\u3044\u307E\u3067\u3067\u3001\u3053\u308C\u306F\u666E\u6BB5\u5341\u5206\u3067\u3059\u304C\u2026</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:HA,meta:{layout:"none",slide:{raw:`---
layout: none
---

<a href="https://github.com/rails/rails/pull/26266">
<img alt="Ruby on Rails pull request \u2116 26266" src="/images/rails-pull-request-26266-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/rails-pull-request-26266-dark.png" class="hidden dark:block" />
</a>
<twemoji-backhand-index-pointing-left class="absolute left-550px bottom-66px text-5xl animate-pulse" />

<!--
\u3067\u3082\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4E3B\u30AD\u30FC\u3082\u666E\u6BB5\u6574\u6570\u3067\u3059\u3002\u3053\u308C\u306F\u5225\u306E\u8A71\u3067\u3059\u3002\u5927\u4EBA\u6C17\u306E\u3042\u308B\u30A2\u30D7\u30EA\u306E\u5834\u5408\u3001\u305F\u304F\u3055\u3093\u306E\u884C\u3092\u633F\u5165\u3057\u305F\u308A\u524A\u9664\u3057\u305F\u308A\u3059\u308B\u3068\u3001\u4E8C\u5341\u5104\u306E\u30AD\u30FC\u306F\u65E9\u304F\u306A\u304F\u306A\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u3002

\u305D\u306E\u305F\u3081\u30012017\u5E74\u306E\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305FRuby on Rails\u30D0\u30FC\u30B8\u30E7\u30F35.1\u3067\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306E\u4E3B\u30AD\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30C7\u30FC\u30BF\u578B\u306F\u30014\u30D0\u30A4\u30C8\u306Einteger\u304B\u3089\uFF18\u30D0\u30A4\u30C8\u306Ebigint\u3078\u304B\u308F\u308A\u307E\u3057\u305F\u3002

\u9577\u3044\u6B74\u53F2\u306E\u3042\u308B\u30A2\u30D7\u30EA\u306A\u3089\u3067\u306F\u3001\u53E4\u3044Rails\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F5C\u3063\u305F\u30C6\u30FC\u30D6\u30EB\u3067\u306F\uFF14\u30D0\u30A4\u30C8\u306Einteger\u306E\u4E3B\u30AD\u30FC\u304C\u3042\u308B\u306E\u3067\u3001\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\uFF01
-->
`,content:`<a href="https://github.com/rails/rails/pull/26266">
<img alt="Ruby on Rails pull request \u2116 26266" src="/images/rails-pull-request-26266-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/rails-pull-request-26266-dark.png" class="hidden dark:block" />
</a>
<twemoji-backhand-index-pointing-left class="absolute left-550px bottom-66px text-5xl animate-pulse" />`,frontmatter:{layout:"none"},note:`\u3067\u3082\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4E3B\u30AD\u30FC\u3082\u666E\u6BB5\u6574\u6570\u3067\u3059\u3002\u3053\u308C\u306F\u5225\u306E\u8A71\u3067\u3059\u3002\u5927\u4EBA\u6C17\u306E\u3042\u308B\u30A2\u30D7\u30EA\u306E\u5834\u5408\u3001\u305F\u304F\u3055\u3093\u306E\u884C\u3092\u633F\u5165\u3057\u305F\u308A\u524A\u9664\u3057\u305F\u308A\u3059\u308B\u3068\u3001\u4E8C\u5341\u5104\u306E\u30AD\u30FC\u306F\u65E9\u304F\u306A\u304F\u306A\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u3002

\u305D\u306E\u305F\u3081\u30012017\u5E74\u306E\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305FRuby on Rails\u30D0\u30FC\u30B8\u30E7\u30F35.1\u3067\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306E\u4E3B\u30AD\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30C7\u30FC\u30BF\u578B\u306F\u30014\u30D0\u30A4\u30C8\u306Einteger\u304B\u3089\uFF18\u30D0\u30A4\u30C8\u306Ebigint\u3078\u304B\u308F\u308A\u307E\u3057\u305F\u3002

\u9577\u3044\u6B74\u53F2\u306E\u3042\u308B\u30A2\u30D7\u30EA\u306A\u3089\u3067\u306F\u3001\u53E4\u3044Rails\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F5C\u3063\u305F\u30C6\u30FC\u30D6\u30EB\u3067\u306F\uFF14\u30D0\u30A4\u30C8\u306Einteger\u306E\u4E3B\u30AD\u30FC\u304C\u3042\u308B\u306E\u3067\u3001\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\uFF01`,index:13,start:414,end:432,notesHTML:`<p>\u3067\u3082\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4E3B\u30AD\u30FC\u3082\u666E\u6BB5\u6574\u6570\u3067\u3059\u3002\u3053\u308C\u306F\u5225\u306E\u8A71\u3067\u3059\u3002\u5927\u4EBA\u6C17\u306E\u3042\u308B\u30A2\u30D7\u30EA\u306E\u5834\u5408\u3001\u305F\u304F\u3055\u3093\u306E\u884C\u3092\u633F\u5165\u3057\u305F\u308A\u524A\u9664\u3057\u305F\u308A\u3059\u308B\u3068\u3001\u4E8C\u5341\u5104\u306E\u30AD\u30FC\u306F\u65E9\u304F\u306A\u304F\u306A\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u3002</p>
<p>\u305D\u306E\u305F\u3081\u30012017\u5E74\u306E\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305FRuby on Rails\u30D0\u30FC\u30B8\u30E7\u30F35.1\u3067\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3068\u304D\u306E\u4E3B\u30AD\u30FC\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u30C7\u30FC\u30BF\u578B\u306F\u30014\u30D0\u30A4\u30C8\u306Einteger\u304B\u3089\uFF18\u30D0\u30A4\u30C8\u306Ebigint\u3078\u304B\u308F\u308A\u307E\u3057\u305F\u3002</p>
<p>\u9577\u3044\u6B74\u53F2\u306E\u3042\u308B\u30A2\u30D7\u30EA\u306A\u3089\u3067\u306F\u3001\u53E4\u3044Rails\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u4F5C\u3063\u305F\u30C6\u30FC\u30D6\u30EB\u3067\u306F\uFF14\u30D0\u30A4\u30C8\u306Einteger\u306E\u4E3B\u30AD\u30FC\u304C\u3042\u308B\u306E\u3067\u3001\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\uFF01</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:ZA,meta:{layout:"footnote",footnoteClass:"text-xs",slide:{raw:`---
layout: footnote
footnoteClass: text-xs
---

## Oh no, I have integer primary keys! What to do?

<div class="my-12"></div>

 0. Don't panic!

 1. Use [pghero](https://github.com/ankane/pghero) or Heroku [pg:diagnose](https://devcenter.heroku.com/articles/heroku-postgres-performance-analytics#pg-diagnose) to detect problematic primary keys.

 2. Migrate to \`bigint\` or \`uuid\` if needed (use triggers, Luke!)

 3. In case of emergency, remember that all integers are signed!
 
    <small>You always have 2 more billions of values on the ~~dark~~ negative side!</small>

    \`\`\`sql
    ALTER SEQUENCE tablename_id_seq MINVALUE -2147483647 RESTART WITH -2147483647;
    \`\`\`

<qr-code url="https://github.com/ankane/pghero" caption="pghero" class="w-32 absolute bottom-10px right-10px" />

::footnote::

Example of pkey migration from int to bigint: [engineering.silverfin.com/pg-zero-downtime-bigint-migration](https://engineering.silverfin.com/pg-zero-downtime-bigint-migration/)

<!--
\u5927\u4EBA\u6C17\u306E\u3042\u308B\u3001\u9577\u3044\u6B74\u53F2\u306E\u3042\u308B\u30A2\u30D7\u30EA\u3092\u7DAD\u6301\u3059\u308B\u65B9\u304C\u3044\u308C\u3070\u3001\u30D1\u30CB\u30C3\u30AF\u306B\u306A\u308B\u306E\u306F\u307E\u3060\u65E9\u3044\u3067\u3059\uFF01

\u307E\u305A\u3001pghero\u306E\u3088\u3046\u306A\u30C4\u30FC\u30EB\u3092\u4F7F\u3063\u3066\u3001integer\u306E\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306B\u8FD1\u3065\u3044\u3066\u304F\u308B\u30B7\u30FC\u30B1\u30F3\u30B9\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u8ABF\u3079\u308B\u624B\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u3093\u306A\u30C6\u30FC\u30D6\u30EB\u304C\u3042\u308C\u3070\u3001\u30C8\u30EA\u30AC\u3092\u4F7F\u3063\u3066\u3001\u4E3B\u30AD\u30FC\u3092bigint\u3084uuid\u3078\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u3066\u554F\u984C\u304C\u89E3\u6C7A\u3067\u304D\u307E\u3059\u3002

\u4E07\u304C\u4E00\u3001\u4E3B\u30AD\u30FC\u3092\u65E2\u306B\u4F7F\u3044\u5C3D\u304F\u3057\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u3067\u3082\u3001\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u306F\u306A\u3044\u3093\u3067\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6574\u6570\u306F\u7B26\u53F7\u4ED8\u306A\u306E\u3067\u3001\u30AD\u30FC\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u3092\u30DE\u30A4\u30CA\u30B9\u4E8C\u5341\u5104\u306B\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3067bigint\u3084uuid\u3078\u306E\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u6642\u9593\u304C\u7A3C\u3052\u307E\u3059\u3002
-->
`,title:"Oh no, I have integer primary keys! What to do?",level:2,content:`## Oh no, I have integer primary keys! What to do?

<div class="my-12"></div>

 0. Don't panic!

 1. Use [pghero](https://github.com/ankane/pghero) or Heroku [pg:diagnose](https://devcenter.heroku.com/articles/heroku-postgres-performance-analytics#pg-diagnose) to detect problematic primary keys.

 2. Migrate to \`bigint\` or \`uuid\` if needed (use triggers, Luke!)

 3. In case of emergency, remember that all integers are signed!
 
    <small>You always have 2 more billions of values on the ~~dark~~ negative side!</small>

    \`\`\`sql
    ALTER SEQUENCE tablename_id_seq MINVALUE -2147483647 RESTART WITH -2147483647;
    \`\`\`

<qr-code url="https://github.com/ankane/pghero" caption="pghero" class="w-32 absolute bottom-10px right-10px" />

::footnote::

Example of pkey migration from int to bigint: [engineering.silverfin.com/pg-zero-downtime-bigint-migration](https://engineering.silverfin.com/pg-zero-downtime-bigint-migration/)`,frontmatter:{layout:"footnote",footnoteClass:"text-xs"},note:`\u5927\u4EBA\u6C17\u306E\u3042\u308B\u3001\u9577\u3044\u6B74\u53F2\u306E\u3042\u308B\u30A2\u30D7\u30EA\u3092\u7DAD\u6301\u3059\u308B\u65B9\u304C\u3044\u308C\u3070\u3001\u30D1\u30CB\u30C3\u30AF\u306B\u306A\u308B\u306E\u306F\u307E\u3060\u65E9\u3044\u3067\u3059\uFF01

\u307E\u305A\u3001pghero\u306E\u3088\u3046\u306A\u30C4\u30FC\u30EB\u3092\u4F7F\u3063\u3066\u3001integer\u306E\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306B\u8FD1\u3065\u3044\u3066\u304F\u308B\u30B7\u30FC\u30B1\u30F3\u30B9\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u8ABF\u3079\u308B\u624B\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u3093\u306A\u30C6\u30FC\u30D6\u30EB\u304C\u3042\u308C\u3070\u3001\u30C8\u30EA\u30AC\u3092\u4F7F\u3063\u3066\u3001\u4E3B\u30AD\u30FC\u3092bigint\u3084uuid\u3078\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u3066\u554F\u984C\u304C\u89E3\u6C7A\u3067\u304D\u307E\u3059\u3002

\u4E07\u304C\u4E00\u3001\u4E3B\u30AD\u30FC\u3092\u65E2\u306B\u4F7F\u3044\u5C3D\u304F\u3057\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u3067\u3082\u3001\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u306F\u306A\u3044\u3093\u3067\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6574\u6570\u306F\u7B26\u53F7\u4ED8\u306A\u306E\u3067\u3001\u30AD\u30FC\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u3092\u30DE\u30A4\u30CA\u30B9\u4E8C\u5341\u5104\u306B\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3067bigint\u3084uuid\u3078\u306E\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u6642\u9593\u304C\u7A3C\u3052\u307E\u3059\u3002`,index:14,start:432,end:469,notesHTML:`<p>\u5927\u4EBA\u6C17\u306E\u3042\u308B\u3001\u9577\u3044\u6B74\u53F2\u306E\u3042\u308B\u30A2\u30D7\u30EA\u3092\u7DAD\u6301\u3059\u308B\u65B9\u304C\u3044\u308C\u3070\u3001\u30D1\u30CB\u30C3\u30AF\u306B\u306A\u308B\u306E\u306F\u307E\u3060\u65E9\u3044\u3067\u3059\uFF01</p>
<p>\u307E\u305A\u3001pghero\u306E\u3088\u3046\u306A\u30C4\u30FC\u30EB\u3092\u4F7F\u3063\u3066\u3001integer\u306E\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306B\u8FD1\u3065\u3044\u3066\u304F\u308B\u30B7\u30FC\u30B1\u30F3\u30B9\u304C\u3042\u308B\u304B\u3069\u3046\u304B\u8ABF\u3079\u308B\u624B\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u3093\u306A\u30C6\u30FC\u30D6\u30EB\u304C\u3042\u308C\u3070\u3001\u30C8\u30EA\u30AC\u3092\u4F7F\u3063\u3066\u3001\u4E3B\u30AD\u30FC\u3092bigint\u3084uuid\u3078\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3057\u3066\u554F\u984C\u304C\u89E3\u6C7A\u3067\u304D\u307E\u3059\u3002</p>
<p>\u4E07\u304C\u4E00\u3001\u4E3B\u30AD\u30FC\u3092\u65E2\u306B\u4F7F\u3044\u5C3D\u304F\u3057\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u3067\u3082\u3001\u3053\u306E\u4E16\u306E\u7D42\u308F\u308A\u3067\u306F\u306A\u3044\u3093\u3067\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u6574\u6570\u306F\u7B26\u53F7\u4ED8\u306A\u306E\u3067\u3001\u30AD\u30FC\u306E\u30B7\u30FC\u30B1\u30F3\u30B9\u3092\u30DE\u30A4\u30CA\u30B9\u4E8C\u5341\u5104\u306B\u30EA\u30BB\u30C3\u30C8\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3067bigint\u3084uuid\u3078\u306E\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u306E\u6642\u9593\u304C\u7A3C\u3052\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:cv,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Floating point numbers

<p class="text-3xl absolute top-20px left-400px rotate-340 animate-pulse text-red-500 p-2 border-3 border-red-500">IEEE 754</p>

::rubytype::

\`Float\`

8 bytes (double-precision)

::ruby::

\`\`\`ruby
0.1 + 0.2  # => 0.30000000000000004


Float::MAX # => 1.7976931348623157e+308
Float::MAX + '1e+308'.to_f # => Infinity
# BUT!
Float::MAX + '0.1'.to_f
# => 1.7976931348623157e+308 \u{1F914}
Float::MAX == (Float::MAX + '0.1'.to_f)
# => true \u{1F92F}

Float::NAN == Float::NAN # => false
\`\`\`


::pgtype::

\`real\` \u2014 4 bytes

\`double\` \u2014 8 bytes

::postgresql::

\`\`\`sql
SELECT 0.1::float + 0.2::float; -- 0.30000000000000004
SELECT 0.1 + 0.2; -- 0.3 (but it is NOT float!)

SELECT '1.7976931348623157e+308'::float + '1e+308'::float;
--- ERROR:  value out of range: overflow
SELECT '+inf'::double precision; -- Infinity \u{1F937}

SELECT '1.7976931348623157e+308'::float = 
('1.7976931348623157e+308'::float + '0.1'::float);
-- true \xAF\\_(\u30C4)_/\xAF

SELECT 'NaN'::float = 'NaN'::float; -- true \u{1F92F}
\`\`\`

::footnote_ruby::

See Ruby docs for [Float](https://ruby-doc.org/core-3.1.0/Float.html)

::footnote_pg::

More fun at [0.30000000000000004.com](https://0.30000000000000004.com/)!

<qr-code url="https://0.30000000000000004.com/" caption="0.30000000000000004.com" class="w-32 absolute bottom-10px right-10px" />

<!--
\u6B21\u306E\u30C7\u30FC\u30BF\u578B\u306F\u53EF\u5909\u7CBE\u5EA6\u306E\u3042\u308A\u3001\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\uFF08\u3075\u3069\u3046\u3057\u3087\u3046\u3059\u3046\u3066\u3093\u3059\u3046\uFF09\u3067\u3059\u3002\u666E\u6BB5float\u3068double\u3068\u3044\u3044\u307E\u3059\u3002Ruby\u3068PostgreSQL\u306F\u4E21\u65B9\u3068\u3082IEEE754\u3068\u3044\u3046\u6A19\u6E96\u3092\u4F7F\u3063\u3066\u3044\u3066\u3082\u3001\u3044\u304F\u3064\u304B\u306E\u5FAE\u5999\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002

Ruby\u306E\u30AF\u30E9\u30B9\u306FFloat\u3068\u3044\u3063\u3066\u3082\u3001\u672C\u5F53\u306F\uFF18\u30D0\u30A4\u30C8\u306Edouble precision\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001PostgreSQL\u306E\u5BFE\u5FDC\u306F\uFF18\u30D0\u30A4\u30C8\u306Edouble\u306B\u306A\u308A\u307E\u3059\u3002

\u53C8\u3001Ruby\u306EFloat\u306F\u3001\u8A08\u7B97\u306E\u7D50\u679C\u3068\u3057\u3066\u7121\u9650\u5927\u3068\u3044\u3046\u5024\u306F\u53EF\u80FD\u3067\u3059\u3002PostgreSQL\u306E\u5834\u5408\u306F\u3001\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306E\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u300C\u5C11\u3057\u5909\u3060\u306A\u300D\u3068\u304A\u3082\u3044\u307E\u3059\u3002

\u3082\u3046\u4E00\u3064\u306E\u4F8B\u3068\u3057\u3066\u3001\u4E8C\u3064\u306E\u300C\u6570\u3067\u306F\u306A\u3044\u300D\u3068\u3044\u3046\u975E\u6570\u3001NaN\u306E\u5024\u3092\u6BD4\u8F03\u3059\u308B\u3068\u3001Ruby\u3067\u306F\u300C\u975E\u6570\u306F\u975E\u6570\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u306F\u306A\u3044\u300D\u3068\u3044\u3046\u7D50\u679C\u304C\u51FA\u307E\u3059\u3002\u3053\u308C\u306FIEEE754\u6A19\u6E96\u306B\u5408\u3063\u3066\u3044\u307E\u3059\u3002\u3051\u308C\u3069\u3082\u3001PostgreSQL\u3067\u306F\u975E\u6570\u306F\u975E\u6570\u306B\u30A4\u30B3\u30FC\u30EB\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u30D0\u30B0\u3067\u306F\u306A\u304F\u3066\u3001\u610F\u8B58\u7684\u306B\u6C7A\u3081\u305F\u3053\u3068\u3067\u3059\u3002\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002
-->
`,title:"Floating point numbers",level:2,content:`## Floating point numbers

<p class="text-3xl absolute top-20px left-400px rotate-340 animate-pulse text-red-500 p-2 border-3 border-red-500">IEEE 754</p>

::rubytype::

\`Float\`

8 bytes (double-precision)

::ruby::

\`\`\`ruby
0.1 + 0.2  # => 0.30000000000000004


Float::MAX # => 1.7976931348623157e+308
Float::MAX + '1e+308'.to_f # => Infinity
# BUT!
Float::MAX + '0.1'.to_f
# => 1.7976931348623157e+308 \u{1F914}
Float::MAX == (Float::MAX + '0.1'.to_f)
# => true \u{1F92F}

Float::NAN == Float::NAN # => false
\`\`\`


::pgtype::

\`real\` \u2014 4 bytes

\`double\` \u2014 8 bytes

::postgresql::

\`\`\`sql
SELECT 0.1::float + 0.2::float; -- 0.30000000000000004
SELECT 0.1 + 0.2; -- 0.3 (but it is NOT float!)

SELECT '1.7976931348623157e+308'::float + '1e+308'::float;
--- ERROR:  value out of range: overflow
SELECT '+inf'::double precision; -- Infinity \u{1F937}

SELECT '1.7976931348623157e+308'::float = 
('1.7976931348623157e+308'::float + '0.1'::float);
-- true \xAF\\_(\u30C4)_/\xAF

SELECT 'NaN'::float = 'NaN'::float; -- true \u{1F92F}
\`\`\`

::footnote_ruby::

See Ruby docs for [Float](https://ruby-doc.org/core-3.1.0/Float.html)

::footnote_pg::

More fun at [0.30000000000000004.com](https://0.30000000000000004.com/)!

<qr-code url="https://0.30000000000000004.com/" caption="0.30000000000000004.com" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"comparison"},note:`\u6B21\u306E\u30C7\u30FC\u30BF\u578B\u306F\u53EF\u5909\u7CBE\u5EA6\u306E\u3042\u308A\u3001\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\uFF08\u3075\u3069\u3046\u3057\u3087\u3046\u3059\u3046\u3066\u3093\u3059\u3046\uFF09\u3067\u3059\u3002\u666E\u6BB5float\u3068double\u3068\u3044\u3044\u307E\u3059\u3002Ruby\u3068PostgreSQL\u306F\u4E21\u65B9\u3068\u3082IEEE754\u3068\u3044\u3046\u6A19\u6E96\u3092\u4F7F\u3063\u3066\u3044\u3066\u3082\u3001\u3044\u304F\u3064\u304B\u306E\u5FAE\u5999\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002

Ruby\u306E\u30AF\u30E9\u30B9\u306FFloat\u3068\u3044\u3063\u3066\u3082\u3001\u672C\u5F53\u306F\uFF18\u30D0\u30A4\u30C8\u306Edouble precision\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001PostgreSQL\u306E\u5BFE\u5FDC\u306F\uFF18\u30D0\u30A4\u30C8\u306Edouble\u306B\u306A\u308A\u307E\u3059\u3002

\u53C8\u3001Ruby\u306EFloat\u306F\u3001\u8A08\u7B97\u306E\u7D50\u679C\u3068\u3057\u3066\u7121\u9650\u5927\u3068\u3044\u3046\u5024\u306F\u53EF\u80FD\u3067\u3059\u3002PostgreSQL\u306E\u5834\u5408\u306F\u3001\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306E\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u300C\u5C11\u3057\u5909\u3060\u306A\u300D\u3068\u304A\u3082\u3044\u307E\u3059\u3002

\u3082\u3046\u4E00\u3064\u306E\u4F8B\u3068\u3057\u3066\u3001\u4E8C\u3064\u306E\u300C\u6570\u3067\u306F\u306A\u3044\u300D\u3068\u3044\u3046\u975E\u6570\u3001NaN\u306E\u5024\u3092\u6BD4\u8F03\u3059\u308B\u3068\u3001Ruby\u3067\u306F\u300C\u975E\u6570\u306F\u975E\u6570\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u306F\u306A\u3044\u300D\u3068\u3044\u3046\u7D50\u679C\u304C\u51FA\u307E\u3059\u3002\u3053\u308C\u306FIEEE754\u6A19\u6E96\u306B\u5408\u3063\u3066\u3044\u307E\u3059\u3002\u3051\u308C\u3069\u3082\u3001PostgreSQL\u3067\u306F\u975E\u6570\u306F\u975E\u6570\u306B\u30A4\u30B3\u30FC\u30EB\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u30D0\u30B0\u3067\u306F\u306A\u304F\u3066\u3001\u610F\u8B58\u7684\u306B\u6C7A\u3081\u305F\u3053\u3068\u3067\u3059\u3002\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002`,index:15,start:469,end:544,notesHTML:`<p>\u6B21\u306E\u30C7\u30FC\u30BF\u578B\u306F\u53EF\u5909\u7CBE\u5EA6\u306E\u3042\u308A\u3001\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\uFF08\u3075\u3069\u3046\u3057\u3087\u3046\u3059\u3046\u3066\u3093\u3059\u3046\uFF09\u3067\u3059\u3002\u666E\u6BB5float\u3068double\u3068\u3044\u3044\u307E\u3059\u3002Ruby\u3068PostgreSQL\u306F\u4E21\u65B9\u3068\u3082IEEE754\u3068\u3044\u3046\u6A19\u6E96\u3092\u4F7F\u3063\u3066\u3044\u3066\u3082\u3001\u3044\u304F\u3064\u304B\u306E\u5FAE\u5999\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002</p>
<p>Ruby\u306E\u30AF\u30E9\u30B9\u306FFloat\u3068\u3044\u3063\u3066\u3082\u3001\u672C\u5F53\u306F\uFF18\u30D0\u30A4\u30C8\u306Edouble precision\u3092\u4F7F\u7528\u3059\u308B\u306E\u3067\u3001PostgreSQL\u306E\u5BFE\u5FDC\u306F\uFF18\u30D0\u30A4\u30C8\u306Edouble\u306B\u306A\u308A\u307E\u3059\u3002</p>
<p>\u53C8\u3001Ruby\u306EFloat\u306F\u3001\u8A08\u7B97\u306E\u7D50\u679C\u3068\u3057\u3066\u7121\u9650\u5927\u3068\u3044\u3046\u5024\u306F\u53EF\u80FD\u3067\u3059\u3002PostgreSQL\u306E\u5834\u5408\u306F\u3001\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC\u306E\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u300C\u5C11\u3057\u5909\u3060\u306A\u300D\u3068\u304A\u3082\u3044\u307E\u3059\u3002</p>
<p>\u3082\u3046\u4E00\u3064\u306E\u4F8B\u3068\u3057\u3066\u3001\u4E8C\u3064\u306E\u300C\u6570\u3067\u306F\u306A\u3044\u300D\u3068\u3044\u3046\u975E\u6570\u3001NaN\u306E\u5024\u3092\u6BD4\u8F03\u3059\u308B\u3068\u3001Ruby\u3067\u306F\u300C\u975E\u6570\u306F\u975E\u6570\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u306F\u306A\u3044\u300D\u3068\u3044\u3046\u7D50\u679C\u304C\u51FA\u307E\u3059\u3002\u3053\u308C\u306FIEEE754\u6A19\u6E96\u306B\u5408\u3063\u3066\u3044\u307E\u3059\u3002\u3051\u308C\u3069\u3082\u3001PostgreSQL\u3067\u306F\u975E\u6570\u306F\u975E\u6570\u306B\u30A4\u30B3\u30FC\u30EB\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u30D0\u30B0\u3067\u306F\u306A\u304F\u3066\u3001\u610F\u8B58\u7684\u306B\u6C7A\u3081\u305F\u3053\u3068\u3067\u3059\u3002\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:dv,meta:{layout:"center",class:"text-3xl text-center",slide:{raw:`---
layout: center
class: text-3xl text-center
---

Don't use floats for calculating money!

<div class="text-5xl my-12">
\u{1F911}\u{1F4A5}\u{1F915}
</div>

Never ever!

<!--
\u5171\u901A\u306E\u771F\u5B9F\u3067\u3059\u3051\u308C\u3069\u3082\u3001\u304A\u91D1\u306A\u3069\u3092\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u3067\u7D76\u5BFE\u306B\u8A08\u7B97\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF01\u8A08\u7B97\u8AA4\u5DEE\u304C\u7D2F\u7A4D\u3057\u307E\u3059\u304B\u3089\u3002
-->
`,content:`Don't use floats for calculating money!

<div class="text-5xl my-12">
\u{1F911}\u{1F4A5}\u{1F915}
</div>

Never ever!`,frontmatter:{layout:"center",class:"text-3xl text-center"},note:"\u5171\u901A\u306E\u771F\u5B9F\u3067\u3059\u3051\u308C\u3069\u3082\u3001\u304A\u91D1\u306A\u3069\u3092\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u3067\u7D76\u5BFE\u306B\u8A08\u7B97\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF01\u8A08\u7B97\u8AA4\u5DEE\u304C\u7D2F\u7A4D\u3057\u307E\u3059\u304B\u3089\u3002",index:16,start:544,end:561,notesHTML:`<p>\u5171\u901A\u306E\u771F\u5B9F\u3067\u3059\u3051\u308C\u3069\u3082\u3001\u304A\u91D1\u306A\u3069\u3092\u6D6E\u52D5\u5C0F\u6570\u70B9\u6570\u3067\u7D76\u5BFE\u306B\u8A08\u7B97\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF01\u8A08\u7B97\u8AA4\u5DEE\u304C\u7D2F\u7A4D\u3057\u307E\u3059\u304B\u3089\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Bv,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Arbitrary precision numbers

::rubytype::

\`BigDecimal\`

Variable length

::ruby::

\`\`\`ruby
BigDecimal("0.1") + BigDecimal("0.2")  # => 0.3e0

BigDecimal("NaN") == BigDecimal("NaN") # => false
BigDecimal("1.0") / BigDecimal("0.0")  #=> Infinity

# To match PostgreSQL behavior:
BigDecimal.mode(BigDecimal::EXCEPTION_OVERFLOW, true)
BigDecimal("1.0") / BigDecimal("0.0")
# Computation results in 'Infinity' (FloatDomainError)

BigDecimal("0.1") + 0.2.to_d == 0.30000000000000004
# true \u{1F914}
\`\`\`

::pgtype::

\`numeric\`

Variable length

::postgresql::

\`\`\`sql
SELECT 0.1 + 0.2; -- 0.3 which is decimal

SELECT 'NaN'::decimal = 'NaN'::decimal; -- true
SELECT '1.0'::decimal / '0.0'::decimal;
-- ERROR:  division by zero





SELECT (0.1 + 0.2) = (0.1::float + 0.2::float);
-- false
\`\`\`

::footnote_ruby::

See Ruby docs for [BigDecimal](https://ruby-doc.org/stdlib-3.1.0/libdoc/bigdecimal/rdoc/BigDecimal.html)

::footnote_pg::

**Use \`numeric\` to store money!**

<!--
\u3067\u306F\u3001\u304A\u91D1\u3092\u6570\u3048\u308B\u306B\u306F\u3069\u3093\u306A\u30C7\u30FC\u30BF\u578B\u3092\u4F7F\u3063\u305F\u65B9\u304C\u3044\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F

PostgreSQL\u306F\u3001numeric\u307E\u305F\u306Fdecimal\u3068\u3044\u3046\u4EFB\u610F\u7CBE\u5EA6\u6570\u306E\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002\u975E\u5E38\u306B\u5927\u304D\u3044\u6841\u6570\u306E\u6570\u5024\u3092\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u306B\u3001\u8A08\u7B97\u8AA4\u5DEE\u306F\u307B\u3068\u3093\u3069\u767A\u751F\u3057\u306A\u3044\u306E\u3067\u3001\u91D1\u984D\u3084\u6B63\u78BA\u6027\u304C\u5FC5\u8981\u306A\u6570\u91CF\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002\u3060\u304C\u3001Float\u3088\u308A\u30B5\u30A4\u30BA\u304C\u5927\u304D\u304F\u3066\u3001\u6027\u80FD\u3082\u9AD8\u304F\u306A\u3044\u3067\u3059\u3002

Ruby\u306F\u3001\u76F8\u5F53\u306E\u30C7\u30FC\u30BF\u578B\u306FBigDecimal\u3068\u3044\u3044\u307E\u3059\u3002\u4E3B\u306A\u9055\u3044\u306F\u3001Ruby\u3067\u306F\u30BC\u30ED\u306E\u5272\u308A\u7B97\u304C\u53EF\u80FD\u3067\u3059\u3002\u7D50\u679C\u306F\u3082\u3061\u308D\u3093\u7121\u9650\u5927\u306B\u306A\u308A\u307E\u3059\u3002PostgreSQL\u306E\u65B9\u3067\u306F\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u3001BigDecimal\u306F\u69D8\u3005\u306A\u8A2D\u5B9A\u304C\u3042\u3063\u3066\u3001PostgreSQL\u306B\u5408\u308F\u305B\u3066\u52D5\u4F5C\u306E\u5909\u66F4\u304C\u3067\u304D\u307E\u3059\u3002
-->
`,title:"Arbitrary precision numbers",level:2,content:`## Arbitrary precision numbers

::rubytype::

\`BigDecimal\`

Variable length

::ruby::

\`\`\`ruby
BigDecimal("0.1") + BigDecimal("0.2")  # => 0.3e0

BigDecimal("NaN") == BigDecimal("NaN") # => false
BigDecimal("1.0") / BigDecimal("0.0")  #=> Infinity

# To match PostgreSQL behavior:
BigDecimal.mode(BigDecimal::EXCEPTION_OVERFLOW, true)
BigDecimal("1.0") / BigDecimal("0.0")
# Computation results in 'Infinity' (FloatDomainError)

BigDecimal("0.1") + 0.2.to_d == 0.30000000000000004
# true \u{1F914}
\`\`\`

::pgtype::

\`numeric\`

Variable length

::postgresql::

\`\`\`sql
SELECT 0.1 + 0.2; -- 0.3 which is decimal

SELECT 'NaN'::decimal = 'NaN'::decimal; -- true
SELECT '1.0'::decimal / '0.0'::decimal;
-- ERROR:  division by zero





SELECT (0.1 + 0.2) = (0.1::float + 0.2::float);
-- false
\`\`\`

::footnote_ruby::

See Ruby docs for [BigDecimal](https://ruby-doc.org/stdlib-3.1.0/libdoc/bigdecimal/rdoc/BigDecimal.html)

::footnote_pg::

**Use \`numeric\` to store money!**`,frontmatter:{layout:"comparison"},note:`\u3067\u306F\u3001\u304A\u91D1\u3092\u6570\u3048\u308B\u306B\u306F\u3069\u3093\u306A\u30C7\u30FC\u30BF\u578B\u3092\u4F7F\u3063\u305F\u65B9\u304C\u3044\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F

PostgreSQL\u306F\u3001numeric\u307E\u305F\u306Fdecimal\u3068\u3044\u3046\u4EFB\u610F\u7CBE\u5EA6\u6570\u306E\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002\u975E\u5E38\u306B\u5927\u304D\u3044\u6841\u6570\u306E\u6570\u5024\u3092\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u306B\u3001\u8A08\u7B97\u8AA4\u5DEE\u306F\u307B\u3068\u3093\u3069\u767A\u751F\u3057\u306A\u3044\u306E\u3067\u3001\u91D1\u984D\u3084\u6B63\u78BA\u6027\u304C\u5FC5\u8981\u306A\u6570\u91CF\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002\u3060\u304C\u3001Float\u3088\u308A\u30B5\u30A4\u30BA\u304C\u5927\u304D\u304F\u3066\u3001\u6027\u80FD\u3082\u9AD8\u304F\u306A\u3044\u3067\u3059\u3002

Ruby\u306F\u3001\u76F8\u5F53\u306E\u30C7\u30FC\u30BF\u578B\u306FBigDecimal\u3068\u3044\u3044\u307E\u3059\u3002\u4E3B\u306A\u9055\u3044\u306F\u3001Ruby\u3067\u306F\u30BC\u30ED\u306E\u5272\u308A\u7B97\u304C\u53EF\u80FD\u3067\u3059\u3002\u7D50\u679C\u306F\u3082\u3061\u308D\u3093\u7121\u9650\u5927\u306B\u306A\u308A\u307E\u3059\u3002PostgreSQL\u306E\u65B9\u3067\u306F\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u3001BigDecimal\u306F\u69D8\u3005\u306A\u8A2D\u5B9A\u304C\u3042\u3063\u3066\u3001PostgreSQL\u306B\u5408\u308F\u305B\u3066\u52D5\u4F5C\u306E\u5909\u66F4\u304C\u3067\u304D\u307E\u3059\u3002`,index:17,start:561,end:629,notesHTML:`<p>\u3067\u306F\u3001\u304A\u91D1\u3092\u6570\u3048\u308B\u306B\u306F\u3069\u3093\u306A\u30C7\u30FC\u30BF\u578B\u3092\u4F7F\u3063\u305F\u65B9\u304C\u3044\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F</p>
<p>PostgreSQL\u306F\u3001numeric\u307E\u305F\u306Fdecimal\u3068\u3044\u3046\u4EFB\u610F\u7CBE\u5EA6\u6570\u306E\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002\u975E\u5E38\u306B\u5927\u304D\u3044\u6841\u6570\u306E\u6570\u5024\u3092\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002\u305D\u308C\u306B\u3001\u8A08\u7B97\u8AA4\u5DEE\u306F\u307B\u3068\u3093\u3069\u767A\u751F\u3057\u306A\u3044\u306E\u3067\u3001\u91D1\u984D\u3084\u6B63\u78BA\u6027\u304C\u5FC5\u8981\u306A\u6570\u91CF\u306B\u304A\u3059\u3059\u3081\u3067\u3059\u3002\u3060\u304C\u3001Float\u3088\u308A\u30B5\u30A4\u30BA\u304C\u5927\u304D\u304F\u3066\u3001\u6027\u80FD\u3082\u9AD8\u304F\u306A\u3044\u3067\u3059\u3002</p>
<p>Ruby\u306F\u3001\u76F8\u5F53\u306E\u30C7\u30FC\u30BF\u578B\u306FBigDecimal\u3068\u3044\u3044\u307E\u3059\u3002\u4E3B\u306A\u9055\u3044\u306F\u3001Ruby\u3067\u306F\u30BC\u30ED\u306E\u5272\u308A\u7B97\u304C\u53EF\u80FD\u3067\u3059\u3002\u7D50\u679C\u306F\u3082\u3061\u308D\u3093\u7121\u9650\u5927\u306B\u306A\u308A\u307E\u3059\u3002PostgreSQL\u306E\u65B9\u3067\u306F\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u3057\u304B\u3057\u3001BigDecimal\u306F\u69D8\u3005\u306A\u8A2D\u5B9A\u304C\u3042\u3063\u3066\u3001PostgreSQL\u306B\u5408\u308F\u305B\u3066\u52D5\u4F5C\u306E\u5909\u66F4\u304C\u3067\u304D\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:$v,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## But there is money type, isn't it?

::rubytype::

\`BigDecimal\`

Variable size

::ruby::

\`\`\`ruby
# If the database locale setting isn't \`en_US\`:

# Creation may fail:
Product.create!(price: 100500.42)
# ERROR: invalid input syntax for type money: "100500.42"

# Or it can succeed, but won't be able to be parsed back:
Product.last.price # => 0.0
\`\`\`

::pgtype::

\`money\`

8 byte fixed-precision number.

::postgresql::

\`\`\`sql
-- on production:
SELECT 100500.42::money;
-- $100,500.42

-- on dev machine:
SELECT 100500.42::money;
-- \xA5 100,500
-- \u{1F92F} But it should be dollars, and where are my cents?
\`\`\`

::footnote_ruby::

ActiveRecord has to parse textual representation, see [connection_adapters/postgresql/oid/money.rb](https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36)

Also see [issue \u2116 31457](https://github.com/rails/rails/issues/31457) for lots of pain.

::footnote_pg::

Both output and acceptable input format depends on session-level \`lc_monetary\` setting!

Precision is defined by \`lc_monetary\` at database creation time and can't be changed!

<!--
\u300CPostgreSQL\u3067\u306F\u7279\u5225\u306A\u901A\u8CA8\u578B\u304C\u3042\u308A\u307E\u3059\u3088\u300D\u3068\u8A00\u3046\u65B9\u304C\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002

\u672C\u5F53\u3067\u3059\u306D\u3001\u3042\u308A\u307E\u3059\u306D\u3001\u91D1\u984D\u306E\u305F\u3081\u306B\u7279\u5225\u306B\u4F5C\u3089\u308C\u305F\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002

money\u306F\u3001\u56FA\u5B9A\u5C0F\u6570\u70B9\u6570\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u308B\u305F\u3081\u3001\u8A08\u7B97\u8AA4\u5DEE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u3044\u3044\u3053\u3068\u3067\u3059\u306D\u3002

\u3067\u3082\u3001\u5225\u306E\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002\u5165\u51FA\u529B\u5F62\u5F0F\u3082\u3001\u5C0F\u6570\u70B9\u306E\u4F4D\u7F6E\u3082lc_monetary\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u5909\u308F\u308B\u306E\u3067\u3001production\u3068\u958B\u767A\u74B0\u5883\u306E\u9593\u3001\u76F8\u4E92\u904B\u7528\u6027\u306E\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u901A\u8CA8\u578B\u3092\u4F7F\u308F\u306A\u3044\u65B9\u304C\u826F\u3044\u3068\u304A\u3082\u3044\u307E\u3059\u3002
-->
`,title:"But there is money type, isn't it?",level:2,content:`## But there is money type, isn't it?

::rubytype::

\`BigDecimal\`

Variable size

::ruby::

\`\`\`ruby
# If the database locale setting isn't \`en_US\`:

# Creation may fail:
Product.create!(price: 100500.42)
# ERROR: invalid input syntax for type money: "100500.42"

# Or it can succeed, but won't be able to be parsed back:
Product.last.price # => 0.0
\`\`\`

::pgtype::

\`money\`

8 byte fixed-precision number.

::postgresql::

\`\`\`sql
-- on production:
SELECT 100500.42::money;
-- $100,500.42

-- on dev machine:
SELECT 100500.42::money;
-- \xA5 100,500
-- \u{1F92F} But it should be dollars, and where are my cents?
\`\`\`

::footnote_ruby::

ActiveRecord has to parse textual representation, see [connection_adapters/postgresql/oid/money.rb](https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36)

Also see [issue \u2116 31457](https://github.com/rails/rails/issues/31457) for lots of pain.

::footnote_pg::

Both output and acceptable input format depends on session-level \`lc_monetary\` setting!

Precision is defined by \`lc_monetary\` at database creation time and can't be changed!`,frontmatter:{layout:"comparison"},note:`\u300CPostgreSQL\u3067\u306F\u7279\u5225\u306A\u901A\u8CA8\u578B\u304C\u3042\u308A\u307E\u3059\u3088\u300D\u3068\u8A00\u3046\u65B9\u304C\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002

\u672C\u5F53\u3067\u3059\u306D\u3001\u3042\u308A\u307E\u3059\u306D\u3001\u91D1\u984D\u306E\u305F\u3081\u306B\u7279\u5225\u306B\u4F5C\u3089\u308C\u305F\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002

money\u306F\u3001\u56FA\u5B9A\u5C0F\u6570\u70B9\u6570\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u308B\u305F\u3081\u3001\u8A08\u7B97\u8AA4\u5DEE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u3044\u3044\u3053\u3068\u3067\u3059\u306D\u3002

\u3067\u3082\u3001\u5225\u306E\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002\u5165\u51FA\u529B\u5F62\u5F0F\u3082\u3001\u5C0F\u6570\u70B9\u306E\u4F4D\u7F6E\u3082lc_monetary\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u5909\u308F\u308B\u306E\u3067\u3001production\u3068\u958B\u767A\u74B0\u5883\u306E\u9593\u3001\u76F8\u4E92\u904B\u7528\u6027\u306E\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u901A\u8CA8\u578B\u3092\u4F7F\u308F\u306A\u3044\u65B9\u304C\u826F\u3044\u3068\u304A\u3082\u3044\u307E\u3059\u3002`,index:18,start:629,end:695,notesHTML:`<p>\u300CPostgreSQL\u3067\u306F\u7279\u5225\u306A\u901A\u8CA8\u578B\u304C\u3042\u308A\u307E\u3059\u3088\u300D\u3068\u8A00\u3046\u65B9\u304C\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002</p>
<p>\u672C\u5F53\u3067\u3059\u306D\u3001\u3042\u308A\u307E\u3059\u306D\u3001\u91D1\u984D\u306E\u305F\u3081\u306B\u7279\u5225\u306B\u4F5C\u3089\u308C\u305F\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002</p>
<p>money\u306F\u3001\u56FA\u5B9A\u5C0F\u6570\u70B9\u6570\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u308B\u305F\u3081\u3001\u8A08\u7B97\u8AA4\u5DEE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u3044\u3044\u3053\u3068\u3067\u3059\u306D\u3002</p>
<p>\u3067\u3082\u3001\u5225\u306E\u554F\u984C\u304C\u3042\u308A\u307E\u3059\u3002\u5165\u51FA\u529B\u5F62\u5F0F\u3082\u3001\u5C0F\u6570\u70B9\u306E\u4F4D\u7F6E\u3082lc_monetary\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u5909\u308F\u308B\u306E\u3067\u3001production\u3068\u958B\u767A\u74B0\u5883\u306E\u9593\u3001\u76F8\u4E92\u904B\u7528\u6027\u306E\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u901A\u8CA8\u578B\u3092\u4F7F\u308F\u306A\u3044\u65B9\u304C\u826F\u3044\u3068\u304A\u3082\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Qv,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Strings and texts, lyrics and prose

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
"\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01".encoding
# => #<Encoding:UTF-8>

"\\xe3\\x2e\\x2e".encoding
# => #<Encoding:UTF-8>
"\\xe3\\x2e\\x2e".valid_encoding?
# => false

"\u3053\u308C\\x00\u3084\u3070\u3044!".valid_encoding?
# => true
\`\`\`

::pgtype::

\`varchar\`, \`text\`

variable size, max 1 GB

::postgresql::

\`\`\`sql
SELECT '\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01';
-- \u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01

SELECT E'\\xe3\\x2e\\x2e');
-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e



SELECT E'\u3053\u308C\\x00\u3084\u3070\u3044!';
-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00
\`\`\`

::footnote_ruby::

Read the docs: [String](https://ruby-doc.org/core-3.1.2/String.html)

::footnote_pg::

Read the docs: [8.3. Character Types](https://www.postgresql.org/docs/14/datatype-character.html)

<!--
\u6B21\u306F\u6587\u5B57\u5217\u3067\u3059\uFF01Ruby\u3068PostgreSQL\u306E\u9593\u306E\u4E00\u756A\u5927\u4E8B\u306A\u9055\u3044\u306F\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u3053\u3068\u3067\u3059\u3002

Ruby\u306E\u6587\u5B57\u5217\u306F\u5B9F\u306B\u591A\u76EE\u7684\u306A\u3082\u306E\u3067\u3059\u3002\u30B5\u30A4\u30BA\u3082\u5236\u9650\u3055\u308C\u306A\u3044\u3057\u3001\u4E2D\u8EAB\u3082\u3069\u3093\u306A\u30C7\u30FC\u30BF\u3067\u3082\u3044\u3044\u3067\u3059\u3002\u5404\u6587\u5B57\u5217\u306F\u7570\u306A\u308B\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u6301\u3066\u308B\u3057\u3001\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u5909\u66F4\u3082\u3067\u304D\u307E\u3059\u3002\u3055\u3089\u306B\u6587\u5B57\u30B3\u30FC\u30C9\u7684\u306B\u6B63\u3057\u304F\u306A\u3044\u30C7\u30FC\u30BF\u304C\u5165\u3063\u3066\u3082\u554F\u984C\u306F\u3042\u308A\u307E\u305B\u3093\u3002

\u9006\u306B\u3001PostgreSQL\u306B\u306F\u3001\u5168\u3066\u306E\u6587\u5B57\u5217\u306F\u540C\u3058\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u6301\u3064\u3079\u304D\u3067\u3059\u3002\u3053\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4F5C\u6210\u6642\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3001\u5F8C\u3067\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002\u6587\u5B57\u5217\u306F\u3001\u4E0D\u6B63\u306A\u30C7\u30FC\u30BF\u3084\u30B3\u30FC\u30C9\u30BC\u30ED\u3092\u5165\u308C\u308B\u3068\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u30B5\u30A4\u30BA\u306E\u5236\u9650\u306F\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u3067\u3059\u3002
-->
`,title:"Strings and texts, lyrics and prose",level:2,content:`## Strings and texts, lyrics and prose

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
"\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01".encoding
# => #<Encoding:UTF-8>

"\\xe3\\x2e\\x2e".encoding
# => #<Encoding:UTF-8>
"\\xe3\\x2e\\x2e".valid_encoding?
# => false

"\u3053\u308C\\x00\u3084\u3070\u3044!".valid_encoding?
# => true
\`\`\`

::pgtype::

\`varchar\`, \`text\`

variable size, max 1 GB

::postgresql::

\`\`\`sql
SELECT '\u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01';
-- \u3053\u3093\u306B\u3061\u306F\u5730\u7403\u4EBA\uFF01

SELECT E'\\xe3\\x2e\\x2e');
-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e



SELECT E'\u3053\u308C\\x00\u3084\u3070\u3044!';
-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00
\`\`\`

::footnote_ruby::

Read the docs: [String](https://ruby-doc.org/core-3.1.2/String.html)

::footnote_pg::

Read the docs: [8.3. Character Types](https://www.postgresql.org/docs/14/datatype-character.html)`,frontmatter:{layout:"comparison"},note:`\u6B21\u306F\u6587\u5B57\u5217\u3067\u3059\uFF01Ruby\u3068PostgreSQL\u306E\u9593\u306E\u4E00\u756A\u5927\u4E8B\u306A\u9055\u3044\u306F\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u3053\u3068\u3067\u3059\u3002

Ruby\u306E\u6587\u5B57\u5217\u306F\u5B9F\u306B\u591A\u76EE\u7684\u306A\u3082\u306E\u3067\u3059\u3002\u30B5\u30A4\u30BA\u3082\u5236\u9650\u3055\u308C\u306A\u3044\u3057\u3001\u4E2D\u8EAB\u3082\u3069\u3093\u306A\u30C7\u30FC\u30BF\u3067\u3082\u3044\u3044\u3067\u3059\u3002\u5404\u6587\u5B57\u5217\u306F\u7570\u306A\u308B\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u6301\u3066\u308B\u3057\u3001\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u5909\u66F4\u3082\u3067\u304D\u307E\u3059\u3002\u3055\u3089\u306B\u6587\u5B57\u30B3\u30FC\u30C9\u7684\u306B\u6B63\u3057\u304F\u306A\u3044\u30C7\u30FC\u30BF\u304C\u5165\u3063\u3066\u3082\u554F\u984C\u306F\u3042\u308A\u307E\u305B\u3093\u3002

\u9006\u306B\u3001PostgreSQL\u306B\u306F\u3001\u5168\u3066\u306E\u6587\u5B57\u5217\u306F\u540C\u3058\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u6301\u3064\u3079\u304D\u3067\u3059\u3002\u3053\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4F5C\u6210\u6642\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3001\u5F8C\u3067\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002\u6587\u5B57\u5217\u306F\u3001\u4E0D\u6B63\u306A\u30C7\u30FC\u30BF\u3084\u30B3\u30FC\u30C9\u30BC\u30ED\u3092\u5165\u308C\u308B\u3068\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u30B5\u30A4\u30BA\u306E\u5236\u9650\u306F\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u3067\u3059\u3002`,index:19,start:695,end:759,notesHTML:`<p>\u6B21\u306F\u6587\u5B57\u5217\u3067\u3059\uFF01Ruby\u3068PostgreSQL\u306E\u9593\u306E\u4E00\u756A\u5927\u4E8B\u306A\u9055\u3044\u306F\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u3053\u3068\u3067\u3059\u3002</p>
<p>Ruby\u306E\u6587\u5B57\u5217\u306F\u5B9F\u306B\u591A\u76EE\u7684\u306A\u3082\u306E\u3067\u3059\u3002\u30B5\u30A4\u30BA\u3082\u5236\u9650\u3055\u308C\u306A\u3044\u3057\u3001\u4E2D\u8EAB\u3082\u3069\u3093\u306A\u30C7\u30FC\u30BF\u3067\u3082\u3044\u3044\u3067\u3059\u3002\u5404\u6587\u5B57\u5217\u306F\u7570\u306A\u308B\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3092\u6301\u3066\u308B\u3057\u3001\u30A8\u30F3\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u5909\u66F4\u3082\u3067\u304D\u307E\u3059\u3002\u3055\u3089\u306B\u6587\u5B57\u30B3\u30FC\u30C9\u7684\u306B\u6B63\u3057\u304F\u306A\u3044\u30C7\u30FC\u30BF\u304C\u5165\u3063\u3066\u3082\u554F\u984C\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>
<p>\u9006\u306B\u3001PostgreSQL\u306B\u306F\u3001\u5168\u3066\u306E\u6587\u5B57\u5217\u306F\u540C\u3058\u6587\u5B57\u30B3\u30FC\u30C9\u3092\u6301\u3064\u3079\u304D\u3067\u3059\u3002\u3053\u306E\u6587\u5B57\u30B3\u30FC\u30C9\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u4F5C\u6210\u6642\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3001\u5F8C\u3067\u5909\u66F4\u3067\u304D\u307E\u305B\u3093\u3002\u6587\u5B57\u5217\u306F\u3001\u4E0D\u6B63\u306A\u30C7\u30FC\u30BF\u3084\u30B3\u30FC\u30C9\u30BC\u30ED\u3092\u5165\u308C\u308B\u3068\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3059\u3002\u305D\u3057\u3066\u3001\u30B5\u30A4\u30BA\u306E\u5236\u9650\u306F\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u3067\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:e2,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

# So many string types!

<div class="my-12"></div>

 1. Don't use \`char(n)\`

    It is always size of \`n\` and stores unnecessary spaces at right. Mostly for compatibility with older applications.

 2. \`varchar\` and \`text\` are effectively the same, choose whatever you like.

    \`string\` in migrations is \`varchar\` in PostgreSQL.

<div class="my-12"></div>

\u{1F4A1} **Did you know?**

SimpleForm gem will render multi-line HTML \`<textarea>\` tag for text type and
single-line \`<input type="text">\` for character varying.

Convention over configuration!

::footnote::

See SimpleForm gem README: [github.com/heartcombo/simple_form](https://github.com/heartcombo/simple_form#available-input-types-and-defaults-for-each-column-type)

<!--
PostgreSQL\u3067\u306F\u3001\u6587\u5B57\u5217\u306E\u5C02\u7528\u30C7\u30FC\u30BF\u578B\u306F\u4E09\u3064\u304C\u3042\u308A\u307E\u3059\u3002char, varchar\u3068text\u3067\u3059\u3002char\u3092\u4F7F\u308F\u306A\u3044\u307B\u3046\u304C\u3044\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u5197\u9577\u306A\u7A7A\u767D\u3082\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u5165\u529B\u30B9\u30D4\u30FC\u30C9\u306F\u4F4E\u3044\u3067\u3059\u3002\u8A73\u3057\u304F\u306F\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002

varchar\u3068text\u306F\u672C\u5F53\u306B\u540C\u3058\u30C7\u30FC\u30BF\u578B\u3067\u3001\u3069\u3061\u3089\u3082\u826F\u3044\u3067\u3059\u3002\u3067\u3082\u3001\u3053\u306E\u30C7\u30FC\u30BF\u578B\u306E\u540D\u524D\u306E\u9055\u3044\u306B\u610F\u5473\u3092\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002

\u305F\u3068\u3048\u3070\u3001SimpleForm\u3068\u3044\u3046\u30B8\u30A7\u30E0\u306Fvarchar\u306E\u5217\u306E\u5834\u5408\u3001HTML\u306Einput\u30BF\u30B0\u3092\u751F\u6210\u3057\u3066\u3001text\u306E\u5217\u306E\u5834\u5408\u306F\u8907\u6570\u306E\u884C\u304C\u5165\u529B\u3067\u304D\u308Btextarea\u30BF\u30B0\u3092\u751F\u6210\u3057\u307E\u3059\u3002

\u8A2D\u5B9A\u3088\u308A\u898F\u7D04\u304C\u512A\u5148\u3067\u3059\u306D\u3002
-->
`,title:"So many string types!",level:1,content:`# So many string types!

<div class="my-12"></div>

 1. Don't use \`char(n)\`

    It is always size of \`n\` and stores unnecessary spaces at right. Mostly for compatibility with older applications.

 2. \`varchar\` and \`text\` are effectively the same, choose whatever you like.

    \`string\` in migrations is \`varchar\` in PostgreSQL.

<div class="my-12"></div>

\u{1F4A1} **Did you know?**

SimpleForm gem will render multi-line HTML \`<textarea>\` tag for text type and
single-line \`<input type="text">\` for character varying.

Convention over configuration!

::footnote::

See SimpleForm gem README: [github.com/heartcombo/simple_form](https://github.com/heartcombo/simple_form#available-input-types-and-defaults-for-each-column-type)`,frontmatter:{layout:"footnote"},note:`PostgreSQL\u3067\u306F\u3001\u6587\u5B57\u5217\u306E\u5C02\u7528\u30C7\u30FC\u30BF\u578B\u306F\u4E09\u3064\u304C\u3042\u308A\u307E\u3059\u3002char, varchar\u3068text\u3067\u3059\u3002char\u3092\u4F7F\u308F\u306A\u3044\u307B\u3046\u304C\u3044\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u5197\u9577\u306A\u7A7A\u767D\u3082\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u5165\u529B\u30B9\u30D4\u30FC\u30C9\u306F\u4F4E\u3044\u3067\u3059\u3002\u8A73\u3057\u304F\u306F\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002

varchar\u3068text\u306F\u672C\u5F53\u306B\u540C\u3058\u30C7\u30FC\u30BF\u578B\u3067\u3001\u3069\u3061\u3089\u3082\u826F\u3044\u3067\u3059\u3002\u3067\u3082\u3001\u3053\u306E\u30C7\u30FC\u30BF\u578B\u306E\u540D\u524D\u306E\u9055\u3044\u306B\u610F\u5473\u3092\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002

\u305F\u3068\u3048\u3070\u3001SimpleForm\u3068\u3044\u3046\u30B8\u30A7\u30E0\u306Fvarchar\u306E\u5217\u306E\u5834\u5408\u3001HTML\u306Einput\u30BF\u30B0\u3092\u751F\u6210\u3057\u3066\u3001text\u306E\u5217\u306E\u5834\u5408\u306F\u8907\u6570\u306E\u884C\u304C\u5165\u529B\u3067\u304D\u308Btextarea\u30BF\u30B0\u3092\u751F\u6210\u3057\u307E\u3059\u3002

\u8A2D\u5B9A\u3088\u308A\u898F\u7D04\u304C\u512A\u5148\u3067\u3059\u306D\u3002`,index:20,start:759,end:798,notesHTML:`<p>PostgreSQL\u3067\u306F\u3001\u6587\u5B57\u5217\u306E\u5C02\u7528\u30C7\u30FC\u30BF\u578B\u306F\u4E09\u3064\u304C\u3042\u308A\u307E\u3059\u3002char, varchar\u3068text\u3067\u3059\u3002char\u3092\u4F7F\u308F\u306A\u3044\u307B\u3046\u304C\u3044\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u5197\u9577\u306A\u7A7A\u767D\u3082\u4FDD\u5B58\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u5165\u529B\u30B9\u30D4\u30FC\u30C9\u306F\u4F4E\u3044\u3067\u3059\u3002\u8A73\u3057\u304F\u306F\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002</p>
<p>varchar\u3068text\u306F\u672C\u5F53\u306B\u540C\u3058\u30C7\u30FC\u30BF\u578B\u3067\u3001\u3069\u3061\u3089\u3082\u826F\u3044\u3067\u3059\u3002\u3067\u3082\u3001\u3053\u306E\u30C7\u30FC\u30BF\u578B\u306E\u540D\u524D\u306E\u9055\u3044\u306B\u610F\u5473\u3092\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p>
<p>\u305F\u3068\u3048\u3070\u3001SimpleForm\u3068\u3044\u3046\u30B8\u30A7\u30E0\u306Fvarchar\u306E\u5217\u306E\u5834\u5408\u3001HTML\u306Einput\u30BF\u30B0\u3092\u751F\u6210\u3057\u3066\u3001text\u306E\u5217\u306E\u5834\u5408\u306F\u8907\u6570\u306E\u884C\u304C\u5165\u529B\u3067\u304D\u308Btextarea\u30BF\u30B0\u3092\u751F\u6210\u3057\u307E\u3059\u3002</p>
<p>\u8A2D\u5B9A\u3088\u308A\u898F\u7D04\u304C\u512A\u5148\u3067\u3059\u306D\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:t2,meta:{layout:"center",class:"text-2xl",slide:{raw:`---
layout: center
class: text-2xl
---

Please, use <a href="https://utf8everywhere.org/">utf8everywhere.org</a>!

<qr-code url="https://utf8everywhere.org/"  caption="utf8everywhere.org" class="w-32 absolute bottom-10px right-10px" />

<!--
\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u8A71\u306A\u306E\u3067\u3001\u73FE\u5728\u3001\u30E6\u30CB\u30B3\u30FC\u30C9\u306EUTF-8\u306F\u3001\u4E00\u756A\u591A\u76EE\u7684\u3067\u76F8\u4E92\u904B\u7528\u6027\u306E\u3042\u308B\u6587\u5B57\u30B3\u30FC\u30C9\u3067\u3059\u3002Ruby\u306B\u3082\u3001PostgreSQL\u306B\u3082\u3001\u30C7\u30FC\u30BF\u901A\u4FE1\u306B\u3082\u3001\u3069\u3053\u306B\u3082\u305D\u308C\u3092\u4F7F\u3063\u3066\u304A\u9858\u3044\u3057\u307E\u3059\u3002
-->
`,content:`Please, use <a href="https://utf8everywhere.org/">utf8everywhere.org</a>!

<qr-code url="https://utf8everywhere.org/"  caption="utf8everywhere.org" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"center",class:"text-2xl"},note:"\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u8A71\u306A\u306E\u3067\u3001\u73FE\u5728\u3001\u30E6\u30CB\u30B3\u30FC\u30C9\u306EUTF-8\u306F\u3001\u4E00\u756A\u591A\u76EE\u7684\u3067\u76F8\u4E92\u904B\u7528\u6027\u306E\u3042\u308B\u6587\u5B57\u30B3\u30FC\u30C9\u3067\u3059\u3002Ruby\u306B\u3082\u3001PostgreSQL\u306B\u3082\u3001\u30C7\u30FC\u30BF\u901A\u4FE1\u306B\u3082\u3001\u3069\u3053\u306B\u3082\u305D\u308C\u3092\u4F7F\u3063\u3066\u304A\u9858\u3044\u3057\u307E\u3059\u3002",index:21,start:798,end:811,notesHTML:`<p>\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u8A71\u306A\u306E\u3067\u3001\u73FE\u5728\u3001\u30E6\u30CB\u30B3\u30FC\u30C9\u306EUTF-8\u306F\u3001\u4E00\u756A\u591A\u76EE\u7684\u3067\u76F8\u4E92\u904B\u7528\u6027\u306E\u3042\u308B\u6587\u5B57\u30B3\u30FC\u30C9\u3067\u3059\u3002Ruby\u306B\u3082\u3001PostgreSQL\u306B\u3082\u3001\u30C7\u30FC\u30BF\u901A\u4FE1\u306B\u3082\u3001\u3069\u3053\u306B\u3082\u305D\u308C\u3092\u4F7F\u3063\u3066\u304A\u9858\u3044\u3057\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:y2,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Binary data

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
data = File.binread(\u201Cmeme.png\u201D)
# => "\\x89PNG\\r\\n\\x1A\u2026"
data.encoding # => #<Encoding:ASCII-8BIT>
data.bytesize # => 46534

Test.last.blob
# => "\\x89PNG\\r\\n\\x1A\u2026"
Test.last.blob_before_type_cast.bytesize
# => 46534
Test.last.blob_before_type_cast
# => "\\\\x89504e470d0a1a0a"
Test.last.blob_before_type_cast.bytesize
# => 93070
\`\`\`

::pgtype::

\`bytea\`

Variable size, max 1 GB

::postgresql::

\`\`\`
SELECT '\\x89504e470d0a1a0a\u2026'::bytea;

# Note hexadecimal format \u2191
\`\`\`

::footnote_ruby::

Memory and network traffic consumption: \u{1F4C8}

::footnote_pg::

See [Binary Data Types](https://www.postgresql.org/docs/14/datatype-binary.html) page in the docs.

<!--
\u30BC\u30ED\u30D0\u30A4\u30C8\u3084\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u30DF\u30B9\u304C\u3042\u308B\u6587\u5B57\u5217\u3001\u3082\u3057\u304F\u306F\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u3001PostgreSQL\u306B\u306F\u7279\u5225\u306Abytea\u3068\u3044\u3046\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002

Ruby\u3067\u306F\u3001\u5BFE\u5FDC\u306E\u30C7\u30FC\u30BF\u578B\u306FASCII-8BIT\u3068\u3044\u3046\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u6587\u5B57\u5217\u3067\u3059\u3002Ruby\u3068Postgres\u306E\u30C7\u30FC\u30BF\u578B\u306B\u306F\u3001\u9055\u3044\u304C\u4E00\u5207\u3042\u308A\u307E\u305B\u3093\u306E\u3067\u3001\u3069\u3061\u3089\u3082\u4F55\u3067\u3082\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002

\u3067\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8EE2\u9001\u91CF\u3068\u30E1\u30E2\u30EA\u30FC\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u306B\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002PostgreSQL\u306F\u3001\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u309216\u9032\u66F8\u5F0F\u3067\u5165\u51FA\u529B\u3059\u308B\u306E\u3067\u3001\u30C7\u30FC\u30BF\u91CF\u304C\uFF12\u500D\u306B\u306A\u308A\u307E\u3059\u3002

\u305D\u308C\u306B\u3001ActiveRecord\u306F\u5404\u5217\u306B\u578B\u30AD\u30E3\u30B9\u30C8\u524D\u306E\u5024\u3082\u30E1\u30E2\u30EA\u306B\u7F6E\u3044\u3066\u3044\u307E\u3059\u306E\u3067\u3001Ruby\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306F\uFF13\u500D\u306B\u306A\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u306E\u30D0\u30A4\u30CA\u30EA\u5024\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u3001\u30CD\u30C3\u30C8\u4E0A\u3067\uFF12\u30AE\u30AC\u30D0\u30A4\u30C8\u304C\u8EE2\u9001\u3055\u308C\u3066\u3001Ruby\u306E\u30D7\u30ED\u30BB\u30B9\u30E1\u30E2\u30EA\u306F\uFF13\u30AE\u30AC\u30D0\u30A4\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002
-->
`,title:"Binary data",level:2,content:`## Binary data

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
data = File.binread(\u201Cmeme.png\u201D)
# => "\\x89PNG\\r\\n\\x1A\u2026"
data.encoding # => #<Encoding:ASCII-8BIT>
data.bytesize # => 46534

Test.last.blob
# => "\\x89PNG\\r\\n\\x1A\u2026"
Test.last.blob_before_type_cast.bytesize
# => 46534
Test.last.blob_before_type_cast
# => "\\\\x89504e470d0a1a0a"
Test.last.blob_before_type_cast.bytesize
# => 93070
\`\`\`

::pgtype::

\`bytea\`

Variable size, max 1 GB

::postgresql::

\`\`\`
SELECT '\\x89504e470d0a1a0a\u2026'::bytea;

# Note hexadecimal format \u2191
\`\`\`

::footnote_ruby::

Memory and network traffic consumption: \u{1F4C8}

::footnote_pg::

See [Binary Data Types](https://www.postgresql.org/docs/14/datatype-binary.html) page in the docs.`,frontmatter:{layout:"comparison"},note:`\u30BC\u30ED\u30D0\u30A4\u30C8\u3084\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u30DF\u30B9\u304C\u3042\u308B\u6587\u5B57\u5217\u3001\u3082\u3057\u304F\u306F\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u3001PostgreSQL\u306B\u306F\u7279\u5225\u306Abytea\u3068\u3044\u3046\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002

Ruby\u3067\u306F\u3001\u5BFE\u5FDC\u306E\u30C7\u30FC\u30BF\u578B\u306FASCII-8BIT\u3068\u3044\u3046\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u6587\u5B57\u5217\u3067\u3059\u3002Ruby\u3068Postgres\u306E\u30C7\u30FC\u30BF\u578B\u306B\u306F\u3001\u9055\u3044\u304C\u4E00\u5207\u3042\u308A\u307E\u305B\u3093\u306E\u3067\u3001\u3069\u3061\u3089\u3082\u4F55\u3067\u3082\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002

\u3067\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8EE2\u9001\u91CF\u3068\u30E1\u30E2\u30EA\u30FC\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u306B\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002PostgreSQL\u306F\u3001\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u309216\u9032\u66F8\u5F0F\u3067\u5165\u51FA\u529B\u3059\u308B\u306E\u3067\u3001\u30C7\u30FC\u30BF\u91CF\u304C\uFF12\u500D\u306B\u306A\u308A\u307E\u3059\u3002

\u305D\u308C\u306B\u3001ActiveRecord\u306F\u5404\u5217\u306B\u578B\u30AD\u30E3\u30B9\u30C8\u524D\u306E\u5024\u3082\u30E1\u30E2\u30EA\u306B\u7F6E\u3044\u3066\u3044\u307E\u3059\u306E\u3067\u3001Ruby\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306F\uFF13\u500D\u306B\u306A\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u306E\u30D0\u30A4\u30CA\u30EA\u5024\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u3001\u30CD\u30C3\u30C8\u4E0A\u3067\uFF12\u30AE\u30AC\u30D0\u30A4\u30C8\u304C\u8EE2\u9001\u3055\u308C\u3066\u3001Ruby\u306E\u30D7\u30ED\u30BB\u30B9\u30E1\u30E2\u30EA\u306F\uFF13\u30AE\u30AC\u30D0\u30A4\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`,index:22,start:811,end:873,notesHTML:`<p>\u30BC\u30ED\u30D0\u30A4\u30C8\u3084\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u30DF\u30B9\u304C\u3042\u308B\u6587\u5B57\u5217\u3001\u3082\u3057\u304F\u306F\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u305F\u3081\u3001PostgreSQL\u306B\u306F\u7279\u5225\u306Abytea\u3068\u3044\u3046\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002</p>
<p>Ruby\u3067\u306F\u3001\u5BFE\u5FDC\u306E\u30C7\u30FC\u30BF\u578B\u306FASCII-8BIT\u3068\u3044\u3046\u6587\u5B57\u30B3\u30FC\u30C9\u306E\u6587\u5B57\u5217\u3067\u3059\u3002Ruby\u3068Postgres\u306E\u30C7\u30FC\u30BF\u578B\u306B\u306F\u3001\u9055\u3044\u304C\u4E00\u5207\u3042\u308A\u307E\u305B\u3093\u306E\u3067\u3001\u3069\u3061\u3089\u3082\u4F55\u3067\u3082\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002</p>
<p>\u3067\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u8EE2\u9001\u91CF\u3068\u30E1\u30E2\u30EA\u30FC\u306E\u30AA\u30FC\u30D0\u30FC\u30D8\u30C3\u30C9\u306B\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\u3002PostgreSQL\u306F\u3001\u30D0\u30A4\u30CA\u30EA\u30C7\u30FC\u30BF\u309216\u9032\u66F8\u5F0F\u3067\u5165\u51FA\u529B\u3059\u308B\u306E\u3067\u3001\u30C7\u30FC\u30BF\u91CF\u304C\uFF12\u500D\u306B\u306A\u308A\u307E\u3059\u3002</p>
<p>\u305D\u308C\u306B\u3001ActiveRecord\u306F\u5404\u5217\u306B\u578B\u30AD\u30E3\u30B9\u30C8\u524D\u306E\u5024\u3082\u30E1\u30E2\u30EA\u306B\u7F6E\u3044\u3066\u3044\u307E\u3059\u306E\u3067\u3001Ruby\u30D7\u30ED\u30BB\u30B9\u306E\u30E1\u30E2\u30EA\u6D88\u8CBB\u91CF\u306F\uFF13\u500D\u306B\u306A\u308A\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u306E\u30D0\u30A4\u30CA\u30EA\u5024\u3092\u8AAD\u307F\u8FBC\u3080\u3068\u3001\u30CD\u30C3\u30C8\u4E0A\u3067\uFF12\u30AE\u30AC\u30D0\u30A4\u30C8\u304C\u8EE2\u9001\u3055\u308C\u3066\u3001Ruby\u306E\u30D7\u30ED\u30BB\u30B9\u30E1\u30E2\u30EA\u306F\uFF13\u30AE\u30AC\u30D0\u30A4\u30C8\u304C\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:x2,meta:{slide:{raw:`
## What if 1 GB isn't enough?

You can't store more in a table column (hard limit)

But you can store up 4 TB in large objects table!

And there is a gem for that:

[active_storage-postgresql](https://github.com/lsylvester/active_storage-postgresql)

<div class="absolute bottom-5">
Beware performance implications of TOAST \u2192
<br><small>More about it in PG docs: <a href="https://www.postgresql.org/docs/14/storage-toast.html">70.2. TOAST</a></small>
</div>

<Transform scale="0.67" origin="top right" class="min-w-550px absolute top-5 right-5">
  <Tweet id="1526922431780233218" />
</Transform>

<qr-code url="https://twitter.com/Envek/status/1526922431780233218" class="w-32 absolute bottom-8px right-12px" />

<!--
\u307E\u3041\u3001\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u4EE5\u4E0A\u683C\u7D0D\u3057\u305F\u3044\u5834\u5408\u306F\u3069\u3046\u3059\u308C\u3070\u3044\u3044\u304B\uFF1F

\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u3053\u3068\u306F\u7D76\u5BFE\u306B\u3067\u304D\u307E\u305B\u3093\u3002PostgreSQL\u306E\u30CF\u30FC\u30C9\u30EA\u30DF\u30C3\u30C8\u3067\u3059\u3002

\u305D\u308C\u306B\u3057\u3066\u3082\u3001\u30E9\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3044\u3046\u7279\u5225\u306A\u6A5F\u80FD\u306E\u304A\u304B\u3052\u3067\u30014\u30C6\u30E9\u30D0\u30A4\u30C8\u307E\u3067\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u3001ActiveStorage\u306E\u6DFB\u4ED8\u3068\u3057\u3066\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002

\u4E00\u3064\u306E\u6CE8\u610F\u70B9\u304C\u3042\u308A\u307E\u3059\u3002\u30E9\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u6587\u5B57\u5217\u3001\u30D0\u30A4\u30CA\u30EA\u5217\u3001JSON\u306A\u3069\u306E\u5927\u304D\u3044\u5024\u306F\u3001\u5168\u3066TOAST\u3068\u3044\u3046\u6280\u6CD5\u3092\u4F7F\u3063\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u306E\u3067\u3001\u30D1\u30FC\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u904E\u5927\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002\u3067\u304D\u308B\u3060\u3051\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5DE8\u5927\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u5B58\u3057\u306A\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u3057\u304F\u306FPostgres\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u3068\u3053\u306E\u79C1\u304C\u66F8\u3044\u305F\u30C4\u30A4\u30C3\u30BF\u30FC\u30FB\u30B9\u30EC\u30C3\u30C9\u3067\u304A\u3088\u307F\u304F\u3060\u3055\u3044\u3002
-->
`,title:"What if 1 GB isn't enough?",level:2,content:`## What if 1 GB isn't enough?

You can't store more in a table column (hard limit)

But you can store up 4 TB in large objects table!

And there is a gem for that:

[active_storage-postgresql](https://github.com/lsylvester/active_storage-postgresql)

<div class="absolute bottom-5">
Beware performance implications of TOAST \u2192
<br><small>More about it in PG docs: <a href="https://www.postgresql.org/docs/14/storage-toast.html">70.2. TOAST</a></small>
</div>

<Transform scale="0.67" origin="top right" class="min-w-550px absolute top-5 right-5">
  <Tweet id="1526922431780233218" />
</Transform>

<qr-code url="https://twitter.com/Envek/status/1526922431780233218" class="w-32 absolute bottom-8px right-12px" />`,frontmatter:{},note:`\u307E\u3041\u3001\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u4EE5\u4E0A\u683C\u7D0D\u3057\u305F\u3044\u5834\u5408\u306F\u3069\u3046\u3059\u308C\u3070\u3044\u3044\u304B\uFF1F

\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u3053\u3068\u306F\u7D76\u5BFE\u306B\u3067\u304D\u307E\u305B\u3093\u3002PostgreSQL\u306E\u30CF\u30FC\u30C9\u30EA\u30DF\u30C3\u30C8\u3067\u3059\u3002

\u305D\u308C\u306B\u3057\u3066\u3082\u3001\u30E9\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3044\u3046\u7279\u5225\u306A\u6A5F\u80FD\u306E\u304A\u304B\u3052\u3067\u30014\u30C6\u30E9\u30D0\u30A4\u30C8\u307E\u3067\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u3001ActiveStorage\u306E\u6DFB\u4ED8\u3068\u3057\u3066\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002

\u4E00\u3064\u306E\u6CE8\u610F\u70B9\u304C\u3042\u308A\u307E\u3059\u3002\u30E9\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u6587\u5B57\u5217\u3001\u30D0\u30A4\u30CA\u30EA\u5217\u3001JSON\u306A\u3069\u306E\u5927\u304D\u3044\u5024\u306F\u3001\u5168\u3066TOAST\u3068\u3044\u3046\u6280\u6CD5\u3092\u4F7F\u3063\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u306E\u3067\u3001\u30D1\u30FC\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u904E\u5927\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002\u3067\u304D\u308B\u3060\u3051\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5DE8\u5927\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u5B58\u3057\u306A\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u3057\u304F\u306FPostgres\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u3068\u3053\u306E\u79C1\u304C\u66F8\u3044\u305F\u30C4\u30A4\u30C3\u30BF\u30FC\u30FB\u30B9\u30EC\u30C3\u30C9\u3067\u304A\u3088\u307F\u304F\u3060\u3055\u3044\u3002`,index:23,start:874,end:906,notesHTML:`<p>\u307E\u3041\u3001\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u4EE5\u4E0A\u683C\u7D0D\u3057\u305F\u3044\u5834\u5408\u306F\u3069\u3046\u3059\u308C\u3070\u3044\u3044\u304B\uFF1F</p>
<p>\u30C6\u30FC\u30D6\u30EB\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u306F\uFF11\u30AE\u30AC\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3059\u308B\u3053\u3068\u306F\u7D76\u5BFE\u306B\u3067\u304D\u307E\u305B\u3093\u3002PostgreSQL\u306E\u30CF\u30FC\u30C9\u30EA\u30DF\u30C3\u30C8\u3067\u3059\u3002</p>
<p>\u305D\u308C\u306B\u3057\u3066\u3082\u3001\u30E9\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3068\u3044\u3046\u7279\u5225\u306A\u6A5F\u80FD\u306E\u304A\u304B\u3052\u3067\u30014\u30C6\u30E9\u30D0\u30A4\u30C8\u307E\u3067\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u3001ActiveStorage\u306E\u6DFB\u4ED8\u3068\u3057\u3066\u683C\u7D0D\u3067\u304D\u307E\u3059\u3002</p>
<p>\u4E00\u3064\u306E\u6CE8\u610F\u70B9\u304C\u3042\u308A\u307E\u3059\u3002\u30E9\u30FC\u30B8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3084\u6587\u5B57\u5217\u3001\u30D0\u30A4\u30CA\u30EA\u5217\u3001JSON\u306A\u3069\u306E\u5927\u304D\u3044\u5024\u306F\u3001\u5168\u3066TOAST\u3068\u3044\u3046\u6280\u6CD5\u3092\u4F7F\u3063\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u306E\u3067\u3001\u30D1\u30FC\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u904E\u5927\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u307E\u3059\u3002\u3067\u304D\u308B\u3060\u3051\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u5DE8\u5927\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4FDD\u5B58\u3057\u306A\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A73\u3057\u304F\u306FPostgres\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u3068\u3053\u306E\u79C1\u304C\u66F8\u3044\u305F\u30C4\u30A4\u30C3\u30BF\u30FC\u30FB\u30B9\u30EC\u30C3\u30C9\u3067\u304A\u3088\u307F\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:U2,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Dates

::rubytype::

\`Date\`

::ruby::

Internally stores number of days since year 4713 BC up to infinity.

> The Julian day number is in elapsed days since noon (Greenwich Mean Time) on January 1, 4713 BCE (in the Julian calendar).
>
> The day count is virtually the astronomical Julian day number.

::pgtype::

\`date\`

4 bytes

::postgresql::

Internally stores number of days since year 4713 BC up to year 5874897 AD.

> In the Julian Date system, each day has a sequential number, starting from JD 0 (which is sometimes called the Julian Date). JD 0 corresponds to 1 January 4713 BC in the Julian calendar.

::footnote_ruby::

See the docs for [Date](https://ruby-doc.org/stdlib-3.1.2/libdoc/date/rdoc/Date.html#method-c-new) class.

::footnote_pg::

See [B.7. Julian Dates](https://www.postgresql.org/docs/14/datetime-julian-dates.html) in PostgreSQL docs.

<!--
PostgreSQL\u3068Ruby\u306E\u65E5\u4ED8\u306E\u30C7\u30FC\u30BF\u578B\u306F\u975E\u5E38\u306B\u4F3C\u3066\u3044\u307E\u3059\u3001\u5F97\u306A\u9055\u3044\u304C\u306A\u3044\u3068\u304A\u3082\u3044\u307E\u3059\u3002\u9762\u767D\u3044\u306E\u306F\u3001\u3069\u3061\u3089\u3082\u3044\u308F\u3086\u308B\u30E6\u30EA\u30A6\u30B9\u901A\u65E5\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

\u30E6\u30EA\u30A6\u30B9\u901A\u65E5\u306F\u3001\u65E5\u306B\u756A\u53F7\u3092\u4ED8\u3051\u308B\u65B9\u6CD5\u3067\u3059\u3002 \u540D\u524D\u304C\u4F3C\u3066\u3044\u3066\u3082\u3001\u30E6\u30EA\u30A6\u30B9\u66A6\u306B\u95A2\u4FC2\u306F\u3042\u308A\u307E\u305B\u3093\u3002
-->
`,title:"Dates",level:2,content:`## Dates

::rubytype::

\`Date\`

::ruby::

Internally stores number of days since year 4713 BC up to infinity.

> The Julian day number is in elapsed days since noon (Greenwich Mean Time) on January 1, 4713 BCE (in the Julian calendar).
>
> The day count is virtually the astronomical Julian day number.

::pgtype::

\`date\`

4 bytes

::postgresql::

Internally stores number of days since year 4713 BC up to year 5874897 AD.

> In the Julian Date system, each day has a sequential number, starting from JD 0 (which is sometimes called the Julian Date). JD 0 corresponds to 1 January 4713 BC in the Julian calendar.

::footnote_ruby::

See the docs for [Date](https://ruby-doc.org/stdlib-3.1.2/libdoc/date/rdoc/Date.html#method-c-new) class.

::footnote_pg::

See [B.7. Julian Dates](https://www.postgresql.org/docs/14/datetime-julian-dates.html) in PostgreSQL docs.`,frontmatter:{layout:"comparison"},note:`PostgreSQL\u3068Ruby\u306E\u65E5\u4ED8\u306E\u30C7\u30FC\u30BF\u578B\u306F\u975E\u5E38\u306B\u4F3C\u3066\u3044\u307E\u3059\u3001\u5F97\u306A\u9055\u3044\u304C\u306A\u3044\u3068\u304A\u3082\u3044\u307E\u3059\u3002\u9762\u767D\u3044\u306E\u306F\u3001\u3069\u3061\u3089\u3082\u3044\u308F\u3086\u308B\u30E6\u30EA\u30A6\u30B9\u901A\u65E5\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002

\u30E6\u30EA\u30A6\u30B9\u901A\u65E5\u306F\u3001\u65E5\u306B\u756A\u53F7\u3092\u4ED8\u3051\u308B\u65B9\u6CD5\u3067\u3059\u3002 \u540D\u524D\u304C\u4F3C\u3066\u3044\u3066\u3082\u3001\u30E6\u30EA\u30A6\u30B9\u66A6\u306B\u95A2\u4FC2\u306F\u3042\u308A\u307E\u305B\u3093\u3002`,index:24,start:906,end:950,notesHTML:`<p>PostgreSQL\u3068Ruby\u306E\u65E5\u4ED8\u306E\u30C7\u30FC\u30BF\u578B\u306F\u975E\u5E38\u306B\u4F3C\u3066\u3044\u307E\u3059\u3001\u5F97\u306A\u9055\u3044\u304C\u306A\u3044\u3068\u304A\u3082\u3044\u307E\u3059\u3002\u9762\u767D\u3044\u306E\u306F\u3001\u3069\u3061\u3089\u3082\u3044\u308F\u3086\u308B\u30E6\u30EA\u30A6\u30B9\u901A\u65E5\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002</p>
<p>\u30E6\u30EA\u30A6\u30B9\u901A\u65E5\u306F\u3001\u65E5\u306B\u756A\u53F7\u3092\u4ED8\u3051\u308B\u65B9\u6CD5\u3067\u3059\u3002 \u540D\u524D\u304C\u4F3C\u3066\u3044\u3066\u3082\u3001\u30E6\u30EA\u30A6\u30B9\u66A6\u306B\u95A2\u4FC2\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Z2,meta:{layout:"comparison",rubyRails:"ruby-rails",slide:{raw:`---
layout: comparison
rubyRails: ruby-rails
---

## Time and timezones

::rubytype::

\`Time\`

<p class="text-xs"><code>AS::TimeWithZone</code></p>

<small class="text-xs">Two UNIX timestamps inside and tzdata also</small>

::ruby::

\`\`\`ruby
Time.now # => 2022-10-22 13:42:42 +0900
Time.current # => Sat, 22 Oct 2022 04:42:42 UTC +00:00

Time.current.time_zone
# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>

Time.use_zone("Asia/Tokyo") { Time.current }
# => Sat, 22 Oct 2020 13:42:42 JST +09:00
\`\`\`

::pgtype::

\`timestamp\`

\`timestamptz\`

8 bytes, <small>microsecond precision</small>

::postgresql::

\`\`\`sql
CREATE TABLE tests (t1 timestamp, t2 timestamptz);
SET SESSION timezone TO 'Etc/UTC';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Asia/Tokyo';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Europe/Lisbon';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Asia/Tokyo';
SELECT * FROM tests;
             t1      |              t2
---------------------+--------------------------------
 2022-10-22 04:42:42 \u2502 2022-10-02 13:42:42+09 \u2502
 2022-10-22 13:42:42 \u2502 2022-10-02 13:42:42+09 \u2502
 2022-10-22 05:42:42 \u2502 2022-10-02 13:42:42+09 \u2502

\`\`\`

::footnote_ruby::

Ruby on Rails uses UTC timezone internally.

::footnote_pg::

Use \`timestamp with time zone\` whenever possible!

<!--
\u65E5\u4ED8\u3068\u6642\u523B\u306E\u30C7\u30FC\u30BF\u578B\u306F\u4E00\u756A\u304A\u3082\u3057\u308D\u3044\u3067\u3059\u3002\u305D\u3057\u3066\u6B63\u3057\u304F\u4F7F\u3046\u306E\u304C\u6700\u3082\u96E3\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3060\u3068\u601D\u3044\u307E\u3059\u3002\u7406\u7531\u306F\u3082\u3061\u308D\u3093\u6642\u9593\u5E2F\u3001\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3067\u3059\u3002

Ruby\u306E\u6A19\u6E96\u30E9\u30A4\u30D6\u30E9\u30EA\u306ETime\u3068\u3044\u3046\u30AF\u30E9\u30B9\u306F\u30D1\u30BD\u30B3\u30F3\u306E\u73FE\u5730\u6642\u9593\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\u79C1\u306E\u30D1\u30BD\u30B3\u30F3\u3067Time.now\u3092\u547C\u3073\u51FA\u3059\u3068\u3001\u7D50\u679C\u306F\u65E5\u672C\u6642\u9593\u5E2F\u306E\u6642\u523B\u306B\u306A\u308A\u307E\u3059\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u547C\u3073\u51FA\u3059\u3068\u3001\u591A\u5206UTC\u306E\u6642\u523B\u306B\u306A\u308B\u3067\u3057\u3087\u3046\u3002Time\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306F\u5909\u63DB\u4E0D\u53EF\u80FD\u3067\u3001\u5C11\u3057\u4E0D\u4FBF\u3067\u3059\u3002\u305D\u306E\u7406\u7531\u3067\u3001ActiveRecord\u306FTime\u306E\u4EE3\u308F\u308A\u306BActiveSupport::TimeWithZone\u3068\u3044\u3046\u7279\u5225\u306A\u30AF\u30E9\u30B9\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u304C\u30D1\u30BD\u30B3\u30F3\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3067\u306F\u306A\u304F\u3066\u3001\u30A2\u30D7\u30EA\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u8A2D\u5B9A\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u305D\u308C\u306B\u3001\u3053\u306E\u30C7\u30FC\u30BF\u578B\u304C\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u60C5\u5831\u3082\u542B\u3081\u308B\u305F\u3081\u3001\u69D8\u3005\u306A\u6642\u523B\u8A08\u7B97\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u5909\u63DB\u304C\u3067\u304D\u307E\u3059\u3002

\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65B9\u3078\u884C\u304F\u3068\u3001ActiveRecord\u306F\u6642\u523B\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u524DUTC\u306B\u5909\u63DB\u3057\u3066\u3001\u8AAD\u307F\u8FBC\u3093\u3067\u304B\u3089\u30A2\u30D7\u30EA\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u3059\u3079\u3066\u306E\u6642\u523B\u306F\u3044\u3064\u3082UTC\u3067\u3059\u3002

PostgreSQL\u306F\u65E5\u4ED8\u3068\u6642\u523B\u306E\u30C7\u30FC\u30BF\u578B\u304C\u4E8C\u3064\u3042\u308A\u307E\u3059\u3002\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u306A\u3044\u578B\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u3042\u308B\u578B\u3067\u3059\u3002\u304A\u304B\u3057\u3044\u3067\u3059\u304C\u3001\u4E21\u65B9\u3068\u3082\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u60C5\u5831\u3092\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002
timestamp with time zone\u306E\u5834\u5408\u3001\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u5024\u306FUTC\u3067\u3059\u3002\u8AAD\u307F\u8FBC\u3080\u6642\u306Btimezone\u3068\u3044\u3046\u30BB\u30C3\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3069\u304A\u308A\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u666E\u901A\u306Etimestamp\u578B\u306F\u3001\u30C7\u30FC\u30BF\u3092\u5909\u63DB\u306A\u3057\u3067\u305D\u306E\u307E\u307E\u3067\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002

ActiveRecord\u306Ftimezone\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3092UTC\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u306E\u3067\u3001\u3053\u306E\u4E8C\u3064\u306E\u30C7\u30FC\u30BF\u578B\u306F\u306E\u9055\u3044\u306F\u7121\u304F\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u3067\u3059\u304C\u3001psql\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u76F4\u63A5\u63A5\u7D9A\u3059\u308B\u969B\u306B\u3001\u6642\u523B\u306E\u30C7\u30FC\u30BF\u3092\u53F0\u7121\u3057\u306B\u3059\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u6C17\u3092\u3064\u3051\u305F\u307B\u3046\u304C\u3044\u3044\u3067\u3059\u3002
-->
`,title:"Time and timezones",level:2,content:`## Time and timezones

::rubytype::

\`Time\`

<p class="text-xs"><code>AS::TimeWithZone</code></p>

<small class="text-xs">Two UNIX timestamps inside and tzdata also</small>

::ruby::

\`\`\`ruby
Time.now # => 2022-10-22 13:42:42 +0900
Time.current # => Sat, 22 Oct 2022 04:42:42 UTC +00:00

Time.current.time_zone
# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>

Time.use_zone("Asia/Tokyo") { Time.current }
# => Sat, 22 Oct 2020 13:42:42 JST +09:00
\`\`\`

::pgtype::

\`timestamp\`

\`timestamptz\`

8 bytes, <small>microsecond precision</small>

::postgresql::

\`\`\`sql
CREATE TABLE tests (t1 timestamp, t2 timestamptz);
SET SESSION timezone TO 'Etc/UTC';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Asia/Tokyo';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Europe/Lisbon';
INSERT INTO tests (t1, t2) VALUES (now(), now());
SET SESSION timezone TO 'Asia/Tokyo';
SELECT * FROM tests;
             t1      |              t2
---------------------+--------------------------------
 2022-10-22 04:42:42 \u2502 2022-10-02 13:42:42+09 \u2502
 2022-10-22 13:42:42 \u2502 2022-10-02 13:42:42+09 \u2502
 2022-10-22 05:42:42 \u2502 2022-10-02 13:42:42+09 \u2502

\`\`\`

::footnote_ruby::

Ruby on Rails uses UTC timezone internally.

::footnote_pg::

Use \`timestamp with time zone\` whenever possible!`,frontmatter:{layout:"comparison",rubyRails:"ruby-rails"},note:`\u65E5\u4ED8\u3068\u6642\u523B\u306E\u30C7\u30FC\u30BF\u578B\u306F\u4E00\u756A\u304A\u3082\u3057\u308D\u3044\u3067\u3059\u3002\u305D\u3057\u3066\u6B63\u3057\u304F\u4F7F\u3046\u306E\u304C\u6700\u3082\u96E3\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3060\u3068\u601D\u3044\u307E\u3059\u3002\u7406\u7531\u306F\u3082\u3061\u308D\u3093\u6642\u9593\u5E2F\u3001\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3067\u3059\u3002

Ruby\u306E\u6A19\u6E96\u30E9\u30A4\u30D6\u30E9\u30EA\u306ETime\u3068\u3044\u3046\u30AF\u30E9\u30B9\u306F\u30D1\u30BD\u30B3\u30F3\u306E\u73FE\u5730\u6642\u9593\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\u79C1\u306E\u30D1\u30BD\u30B3\u30F3\u3067Time.now\u3092\u547C\u3073\u51FA\u3059\u3068\u3001\u7D50\u679C\u306F\u65E5\u672C\u6642\u9593\u5E2F\u306E\u6642\u523B\u306B\u306A\u308A\u307E\u3059\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u547C\u3073\u51FA\u3059\u3068\u3001\u591A\u5206UTC\u306E\u6642\u523B\u306B\u306A\u308B\u3067\u3057\u3087\u3046\u3002Time\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306F\u5909\u63DB\u4E0D\u53EF\u80FD\u3067\u3001\u5C11\u3057\u4E0D\u4FBF\u3067\u3059\u3002\u305D\u306E\u7406\u7531\u3067\u3001ActiveRecord\u306FTime\u306E\u4EE3\u308F\u308A\u306BActiveSupport::TimeWithZone\u3068\u3044\u3046\u7279\u5225\u306A\u30AF\u30E9\u30B9\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u304C\u30D1\u30BD\u30B3\u30F3\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3067\u306F\u306A\u304F\u3066\u3001\u30A2\u30D7\u30EA\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u8A2D\u5B9A\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u305D\u308C\u306B\u3001\u3053\u306E\u30C7\u30FC\u30BF\u578B\u304C\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u60C5\u5831\u3082\u542B\u3081\u308B\u305F\u3081\u3001\u69D8\u3005\u306A\u6642\u523B\u8A08\u7B97\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u5909\u63DB\u304C\u3067\u304D\u307E\u3059\u3002

\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65B9\u3078\u884C\u304F\u3068\u3001ActiveRecord\u306F\u6642\u523B\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u524DUTC\u306B\u5909\u63DB\u3057\u3066\u3001\u8AAD\u307F\u8FBC\u3093\u3067\u304B\u3089\u30A2\u30D7\u30EA\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u3059\u3079\u3066\u306E\u6642\u523B\u306F\u3044\u3064\u3082UTC\u3067\u3059\u3002

PostgreSQL\u306F\u65E5\u4ED8\u3068\u6642\u523B\u306E\u30C7\u30FC\u30BF\u578B\u304C\u4E8C\u3064\u3042\u308A\u307E\u3059\u3002\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u306A\u3044\u578B\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u3042\u308B\u578B\u3067\u3059\u3002\u304A\u304B\u3057\u3044\u3067\u3059\u304C\u3001\u4E21\u65B9\u3068\u3082\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u60C5\u5831\u3092\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002
timestamp with time zone\u306E\u5834\u5408\u3001\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u5024\u306FUTC\u3067\u3059\u3002\u8AAD\u307F\u8FBC\u3080\u6642\u306Btimezone\u3068\u3044\u3046\u30BB\u30C3\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3069\u304A\u308A\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u666E\u901A\u306Etimestamp\u578B\u306F\u3001\u30C7\u30FC\u30BF\u3092\u5909\u63DB\u306A\u3057\u3067\u305D\u306E\u307E\u307E\u3067\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002

ActiveRecord\u306Ftimezone\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3092UTC\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u306E\u3067\u3001\u3053\u306E\u4E8C\u3064\u306E\u30C7\u30FC\u30BF\u578B\u306F\u306E\u9055\u3044\u306F\u7121\u304F\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u3067\u3059\u304C\u3001psql\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u76F4\u63A5\u63A5\u7D9A\u3059\u308B\u969B\u306B\u3001\u6642\u523B\u306E\u30C7\u30FC\u30BF\u3092\u53F0\u7121\u3057\u306B\u3059\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u6C17\u3092\u3064\u3051\u305F\u307B\u3046\u304C\u3044\u3044\u3067\u3059\u3002`,index:25,start:950,end:1027,notesHTML:`<p>\u65E5\u4ED8\u3068\u6642\u523B\u306E\u30C7\u30FC\u30BF\u578B\u306F\u4E00\u756A\u304A\u3082\u3057\u308D\u3044\u3067\u3059\u3002\u305D\u3057\u3066\u6B63\u3057\u304F\u4F7F\u3046\u306E\u304C\u6700\u3082\u96E3\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3060\u3068\u601D\u3044\u307E\u3059\u3002\u7406\u7531\u306F\u3082\u3061\u308D\u3093\u6642\u9593\u5E2F\u3001\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3067\u3059\u3002</p>
<p>Ruby\u306E\u6A19\u6E96\u30E9\u30A4\u30D6\u30E9\u30EA\u306ETime\u3068\u3044\u3046\u30AF\u30E9\u30B9\u306F\u30D1\u30BD\u30B3\u30F3\u306E\u73FE\u5730\u6642\u9593\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002\u79C1\u306E\u30D1\u30BD\u30B3\u30F3\u3067Time.now\u3092\u547C\u3073\u51FA\u3059\u3068\u3001\u7D50\u679C\u306F\u65E5\u672C\u6642\u9593\u5E2F\u306E\u6642\u523B\u306B\u306A\u308A\u307E\u3059\u3001\u30B5\u30FC\u30D0\u30FC\u3067\u547C\u3073\u51FA\u3059\u3068\u3001\u591A\u5206UTC\u306E\u6642\u523B\u306B\u306A\u308B\u3067\u3057\u3087\u3046\u3002Time\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306F\u5909\u63DB\u4E0D\u53EF\u80FD\u3067\u3001\u5C11\u3057\u4E0D\u4FBF\u3067\u3059\u3002\u305D\u306E\u7406\u7531\u3067\u3001ActiveRecord\u306FTime\u306E\u4EE3\u308F\u308A\u306BActiveSupport::TimeWithZone\u3068\u3044\u3046\u7279\u5225\u306A\u30AF\u30E9\u30B9\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u304C\u30D1\u30BD\u30B3\u30F3\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3067\u306F\u306A\u304F\u3066\u3001\u30A2\u30D7\u30EA\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u8A2D\u5B9A\u3092\u4F7F\u3063\u3066\u3044\u307E\u3059\u3002\u305D\u308C\u306B\u3001\u3053\u306E\u30C7\u30FC\u30BF\u578B\u304C\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u60C5\u5831\u3082\u542B\u3081\u308B\u305F\u3081\u3001\u69D8\u3005\u306A\u6642\u523B\u8A08\u7B97\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u5909\u63DB\u304C\u3067\u304D\u307E\u3059\u3002</p>
<p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65B9\u3078\u884C\u304F\u3068\u3001ActiveRecord\u306F\u6642\u523B\u3092\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u524DUTC\u306B\u5909\u63DB\u3057\u3066\u3001\u8AAD\u307F\u8FBC\u3093\u3067\u304B\u3089\u30A2\u30D7\u30EA\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3067\u306F\u3059\u3079\u3066\u306E\u6642\u523B\u306F\u3044\u3064\u3082UTC\u3067\u3059\u3002</p>
<p>PostgreSQL\u306F\u65E5\u4ED8\u3068\u6642\u523B\u306E\u30C7\u30FC\u30BF\u578B\u304C\u4E8C\u3064\u3042\u308A\u307E\u3059\u3002\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u306A\u3044\u578B\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u3042\u308B\u578B\u3067\u3059\u3002\u304A\u304B\u3057\u3044\u3067\u3059\u304C\u3001\u4E21\u65B9\u3068\u3082\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u60C5\u5831\u3092\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002
timestamp with time zone\u306E\u5834\u5408\u3001\u683C\u7D0D\u3055\u308C\u3066\u3044\u308B\u5024\u306FUTC\u3067\u3059\u3002\u8AAD\u307F\u8FBC\u3080\u6642\u306Btimezone\u3068\u3044\u3046\u30BB\u30C3\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3069\u304A\u308A\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u666E\u901A\u306Etimestamp\u578B\u306F\u3001\u30C7\u30FC\u30BF\u3092\u5909\u63DB\u306A\u3057\u3067\u305D\u306E\u307E\u307E\u3067\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p>
<p>ActiveRecord\u306Ftimezone\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u8A2D\u5B9A\u3092UTC\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u306E\u3067\u3001\u3053\u306E\u4E8C\u3064\u306E\u30C7\u30FC\u30BF\u578B\u306F\u306E\u9055\u3044\u306F\u7121\u304F\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u3067\u3059\u304C\u3001psql\u3092\u4F7F\u3063\u3066\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u76F4\u63A5\u63A5\u7D9A\u3059\u308B\u969B\u306B\u3001\u6642\u523B\u306E\u30C7\u30FC\u30BF\u3092\u53F0\u7121\u3057\u306B\u3059\u308B\u304A\u305D\u308C\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u6C17\u3092\u3064\u3051\u305F\u307B\u3046\u304C\u3044\u3044\u3067\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:nb,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

## How to not mess up with timezones

<div class="my-12"></div>

 1. Use timezone-aware methods

    Use \`Time.current\` and \`Date.current\` instead of \`Time.now\` and \`Date.today\`

 2. Convert timestamps to user time zone

    \`\`\`ruby
    Time.use_zone(user.timezone) do
      # Do SQL queries, render views, \u2026
    end
    # or
    Time.current.in_time_zone(user.timezone)
    \`\`\`

 3. Don't use dates in SQL, use timestamps

    \`\`\`diff
    - Posts.where(published_at: Date.today...Date.tomorrow)
    + Posts.where(published_at: Time.current.beginning_of_day..Time.current.end_of_day)
    \`\`\`

::footnote::

More tips here: [thoughtbot.com/blog/its-about-time-zones](https://thoughtbot.com/blog/its-about-time-zones)

<qr-code url="https://thoughtbot.com/blog/its-about-time-zones" class="w-32 absolute bottom-10px right-10px" />

<!--
\u6642\u523B\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3092\u6271\u3046\u6642\u306B\u306F\u3001\u5931\u6557\u304C\u8D77\u3053\u308A\u3084\u3059\u3044\u3067\u3059\u3002\u3053\u306E\u30EB\u30FC\u30EB\u3092\u5B88\u3063\u3066\u3001\u30D0\u30B0\u306E\u6570\u3092\u6E1B\u3089\u3057\u307E\u3057\u3087\u3046\u3002

\u4E00\u756A\u5927\u5207\u306A\u306E\u306F\u3001\u4E09\u756A\u3067\u3059\u3002\u65E5\u4ED8\u306E\u30C7\u30FC\u30BF\u578B\u3092SQL\u30AF\u30A8\u30EA\u306E\u6761\u4EF6\u3067\u306F\u7D76\u5BFE\u306B\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3082\u3001\u65E5\u4ED8\u304C\u5909\u308F\u308B\u6642\u70B9\u3082UTC\u306A\u306E\u3067\u3001\u7D50\u679C\u306FUTC\u30AA\u30D5\u30BB\u30C3\u30C8\u306B\u3088\u3063\u3066\u305A\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002

\u6CE8\u610F\u70B9\u304C\u305F\u304F\u3055\u3093\u3042\u308B\u306E\u3067\u3001\u8A73\u3057\u304F\u306F\u3053\u306E\u30EA\u30F3\u30AF\u3067\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002
-->
`,title:"How to not mess up with timezones",level:2,content:`## How to not mess up with timezones

<div class="my-12"></div>

 1. Use timezone-aware methods

    Use \`Time.current\` and \`Date.current\` instead of \`Time.now\` and \`Date.today\`

 2. Convert timestamps to user time zone

    \`\`\`ruby
    Time.use_zone(user.timezone) do
      # Do SQL queries, render views, \u2026
    end
    # or
    Time.current.in_time_zone(user.timezone)
    \`\`\`

 3. Don't use dates in SQL, use timestamps

    \`\`\`diff
    - Posts.where(published_at: Date.today...Date.tomorrow)
    + Posts.where(published_at: Time.current.beginning_of_day..Time.current.end_of_day)
    \`\`\`

::footnote::

More tips here: [thoughtbot.com/blog/its-about-time-zones](https://thoughtbot.com/blog/its-about-time-zones)

<qr-code url="https://thoughtbot.com/blog/its-about-time-zones" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"footnote"},note:`\u6642\u523B\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3092\u6271\u3046\u6642\u306B\u306F\u3001\u5931\u6557\u304C\u8D77\u3053\u308A\u3084\u3059\u3044\u3067\u3059\u3002\u3053\u306E\u30EB\u30FC\u30EB\u3092\u5B88\u3063\u3066\u3001\u30D0\u30B0\u306E\u6570\u3092\u6E1B\u3089\u3057\u307E\u3057\u3087\u3046\u3002

\u4E00\u756A\u5927\u5207\u306A\u306E\u306F\u3001\u4E09\u756A\u3067\u3059\u3002\u65E5\u4ED8\u306E\u30C7\u30FC\u30BF\u578B\u3092SQL\u30AF\u30A8\u30EA\u306E\u6761\u4EF6\u3067\u306F\u7D76\u5BFE\u306B\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3082\u3001\u65E5\u4ED8\u304C\u5909\u308F\u308B\u6642\u70B9\u3082UTC\u306A\u306E\u3067\u3001\u7D50\u679C\u306FUTC\u30AA\u30D5\u30BB\u30C3\u30C8\u306B\u3088\u3063\u3066\u305A\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002

\u6CE8\u610F\u70B9\u304C\u305F\u304F\u3055\u3093\u3042\u308B\u306E\u3067\u3001\u8A73\u3057\u304F\u306F\u3053\u306E\u30EA\u30F3\u30AF\u3067\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002`,index:26,start:1027,end:1070,notesHTML:`<p>\u6642\u523B\u3068\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3092\u6271\u3046\u6642\u306B\u306F\u3001\u5931\u6557\u304C\u8D77\u3053\u308A\u3084\u3059\u3044\u3067\u3059\u3002\u3053\u306E\u30EB\u30FC\u30EB\u3092\u5B88\u3063\u3066\u3001\u30D0\u30B0\u306E\u6570\u3092\u6E1B\u3089\u3057\u307E\u3057\u3087\u3046\u3002</p>
<p>\u4E00\u756A\u5927\u5207\u306A\u306E\u306F\u3001\u4E09\u756A\u3067\u3059\u3002\u65E5\u4ED8\u306E\u30C7\u30FC\u30BF\u578B\u3092SQL\u30AF\u30A8\u30EA\u306E\u6761\u4EF6\u3067\u306F\u7D76\u5BFE\u306B\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u3082\u3001\u65E5\u4ED8\u304C\u5909\u308F\u308B\u6642\u70B9\u3082UTC\u306A\u306E\u3067\u3001\u7D50\u679C\u306FUTC\u30AA\u30D5\u30BB\u30C3\u30C8\u306B\u3088\u3063\u3066\u305A\u308C\u3066\u3057\u307E\u3044\u307E\u3059\u3002</p>
<p>\u6CE8\u610F\u70B9\u304C\u305F\u304F\u3055\u3093\u3042\u308B\u306E\u3067\u3001\u8A73\u3057\u304F\u306F\u3053\u306E\u30EA\u30F3\u30AF\u3067\u30C1\u30A7\u30C3\u30AF\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:ab,meta:{layout:"center",slide:{raw:`---
layout: center
---

## Time zones are hard

<Youtube id="-5wpm-gesOY" width="640" height="360" class="pt-10" />

<qr-code url="https://youtu.be/-5wpm-gesOY" class="w-32 absolute bottom-10px right-10px" />

<!--
\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u6B63\u3057\u3044\u6271\u3044\u65B9\u306F\u3001\u5225\u306E30\u5206\u306E\u5C02\u7528\u767A\u8868\u304C\u3067\u304D\u308B\u3050\u3089\u3044\u3001\u975E\u5E38\u306B\u5E83\u3044\u8A71\u984C\u3067\u3059\u3051\u3069\u3001\u4ECA\u65E5\u306F\u6642\u9593\u304C\u306A\u3044\u3093\u3067\u3059\u3002

\u4EE3\u308F\u308A\u306B\u3001\u3053\u306E\u30D3\u30C7\u30AA\u306F\u304A\u52E7\u3081\u3067\u3059\u3002\u305C\u3072\u3054\u89A7\u304F\u3060\u3055\u3044\uFF01
-->
`,title:"Time zones are hard",level:2,content:`## Time zones are hard

<Youtube id="-5wpm-gesOY" width="640" height="360" class="pt-10" />

<qr-code url="https://youtu.be/-5wpm-gesOY" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"center"},note:`\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u6B63\u3057\u3044\u6271\u3044\u65B9\u306F\u3001\u5225\u306E30\u5206\u306E\u5C02\u7528\u767A\u8868\u304C\u3067\u304D\u308B\u3050\u3089\u3044\u3001\u975E\u5E38\u306B\u5E83\u3044\u8A71\u984C\u3067\u3059\u3051\u3069\u3001\u4ECA\u65E5\u306F\u6642\u9593\u304C\u306A\u3044\u3093\u3067\u3059\u3002

\u4EE3\u308F\u308A\u306B\u3001\u3053\u306E\u30D3\u30C7\u30AA\u306F\u304A\u52E7\u3081\u3067\u3059\u3002\u305C\u3072\u3054\u89A7\u304F\u3060\u3055\u3044\uFF01`,index:27,start:1070,end:1086,notesHTML:`<p>\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3\u306E\u6B63\u3057\u3044\u6271\u3044\u65B9\u306F\u3001\u5225\u306E30\u5206\u306E\u5C02\u7528\u767A\u8868\u304C\u3067\u304D\u308B\u3050\u3089\u3044\u3001\u975E\u5E38\u306B\u5E83\u3044\u8A71\u984C\u3067\u3059\u3051\u3069\u3001\u4ECA\u65E5\u306F\u6642\u9593\u304C\u306A\u3044\u3093\u3067\u3059\u3002</p>
<p>\u4EE3\u308F\u308A\u306B\u3001\u3053\u306E\u30D3\u30C7\u30AA\u306F\u304A\u52E7\u3081\u3067\u3059\u3002\u305C\u3072\u3054\u89A7\u304F\u3060\u3055\u3044\uFF01</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:db,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Void and uncertainity

::rubytype::

\`NilClass\`

::ruby::

\`\`\`ruby
nil == nil
# => true \xAF\\_(\u30C4)_/\xAF
\`\`\`

::pgtype::

\`NULL\`

::postgresql::

\`\`\`sql
SELECT NULL = NULL; -- NULL \u{1F6A8}
SELECT NULL IS NULL; -- true
SELECT NULL IS DISTINCT FROM NULL; -- false

SELECT 'Ruby' = NULL; -- NULL \u{1F6A8}
SELECT 'Ruby' IS NULL; -- false
SELECT 'Ruby' IS DISTINCT FROM NULL; -- true
\`\`\`

<!--
Ruby\u306Enil\u3068SQL\u306ENULL\u3082\u9055\u3044\u307E\u3059\u3002

Ruby\u306Enil\u306Fsingleton\u306A\u306E\u3067\u3001nil\u306F\u3044\u3064\u3082nil\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u3059\u3002\u9006\u306B\u3001SQL\u3067\u306F\u3001NULL\u306FNULL\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3055\u3089\u306B\u3001\u4F55\u304B\u3092NULL\u3068\u6BD4\u8F03\u3059\u308B\u3068\u7D50\u679C\u306FNULL\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u3082\u5171\u901A\u306E\u771F\u5B9F\u3067\u3059\u3051\u3069\u3001SQL\u3067\u306FNULL\u5024\u306E\u691C\u51FA\u3084\u6BD4\u8F03\u306E\u305F\u3081\u306B\u7279\u5225\u306A\u6F14\u7B97\u5B50\u3092\u4F7F\u3046\u3079\u304D\u3067\u3059\u3002
-->
`,title:"Void and uncertainity",level:2,content:`## Void and uncertainity

::rubytype::

\`NilClass\`

::ruby::

\`\`\`ruby
nil == nil
# => true \xAF\\_(\u30C4)_/\xAF
\`\`\`

::pgtype::

\`NULL\`

::postgresql::

\`\`\`sql
SELECT NULL = NULL; -- NULL \u{1F6A8}
SELECT NULL IS NULL; -- true
SELECT NULL IS DISTINCT FROM NULL; -- false

SELECT 'Ruby' = NULL; -- NULL \u{1F6A8}
SELECT 'Ruby' IS NULL; -- false
SELECT 'Ruby' IS DISTINCT FROM NULL; -- true
\`\`\``,frontmatter:{layout:"comparison"},note:`Ruby\u306Enil\u3068SQL\u306ENULL\u3082\u9055\u3044\u307E\u3059\u3002

Ruby\u306Enil\u306Fsingleton\u306A\u306E\u3067\u3001nil\u306F\u3044\u3064\u3082nil\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u3059\u3002\u9006\u306B\u3001SQL\u3067\u306F\u3001NULL\u306FNULL\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3055\u3089\u306B\u3001\u4F55\u304B\u3092NULL\u3068\u6BD4\u8F03\u3059\u308B\u3068\u7D50\u679C\u306FNULL\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u3082\u5171\u901A\u306E\u771F\u5B9F\u3067\u3059\u3051\u3069\u3001SQL\u3067\u306FNULL\u5024\u306E\u691C\u51FA\u3084\u6BD4\u8F03\u306E\u305F\u3081\u306B\u7279\u5225\u306A\u6F14\u7B97\u5B50\u3092\u4F7F\u3046\u3079\u304D\u3067\u3059\u3002`,index:28,start:1086,end:1125,notesHTML:`<p>Ruby\u306Enil\u3068SQL\u306ENULL\u3082\u9055\u3044\u307E\u3059\u3002</p>
<p>Ruby\u306Enil\u306Fsingleton\u306A\u306E\u3067\u3001nil\u306F\u3044\u3064\u3082nil\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u3059\u3002\u9006\u306B\u3001SQL\u3067\u306F\u3001NULL\u306FNULL\u306B\u30A4\u30B3\u30FC\u30EB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3055\u3089\u306B\u3001\u4F55\u304B\u3092NULL\u3068\u6BD4\u8F03\u3059\u308B\u3068\u7D50\u679C\u306FNULL\u306B\u306A\u308A\u307E\u3059\u3002\u3053\u308C\u3082\u5171\u901A\u306E\u771F\u5B9F\u3067\u3059\u3051\u3069\u3001SQL\u3067\u306FNULL\u5024\u306E\u691C\u51FA\u3084\u6BD4\u8F03\u306E\u305F\u3081\u306B\u7279\u5225\u306A\u6F14\u7B97\u5B50\u3092\u4F7F\u3046\u3079\u304D\u3067\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:hb,meta:{layout:"center",slide:{raw:`---
layout: center
---

# PostgreSQL-specific datatypes

<!--
\u4ECA\u307E\u3067\u306F\u3001\u591A\u304F\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u3042\u308B\u30C7\u30FC\u30BF\u578B\u3067\u3057\u305F\u3002

\u6B21\u306FPostgreSQL\u306E\u72EC\u81EA\u306E\u30C7\u30FC\u30BF\u578B\u306B\u79FB\u52D5\u3057\u307E\u3057\u3087\u3046\u3002
-->
`,title:"PostgreSQL-specific datatypes",level:1,content:"# PostgreSQL-specific datatypes",frontmatter:{layout:"center"},note:`\u4ECA\u307E\u3067\u306F\u3001\u591A\u304F\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u3042\u308B\u30C7\u30FC\u30BF\u578B\u3067\u3057\u305F\u3002

\u6B21\u306FPostgreSQL\u306E\u72EC\u81EA\u306E\u30C7\u30FC\u30BF\u578B\u306B\u79FB\u52D5\u3057\u307E\u3057\u3087\u3046\u3002`,index:29,start:1125,end:1137,notesHTML:`<p>\u4ECA\u307E\u3067\u306F\u3001\u591A\u304F\u306E\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u3042\u308B\u30C7\u30FC\u30BF\u578B\u3067\u3057\u305F\u3002</p>
<p>\u6B21\u306FPostgreSQL\u306E\u72EC\u81EA\u306E\u30C7\u30FC\u30BF\u578B\u306B\u79FB\u52D5\u3057\u307E\u3057\u3087\u3046\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Lb,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## JSON

::rubytype::

\`Hash\`, \`Array\`

::ruby::

Be careful with symbols as keys

\`\`\`ruby
{ "foo" => "bar", foo: "baz" }.to_json
# {"foo":"baz"}
\`\`\`

Define \`as_json\` method on your classes to serialize them to JSON automatically.

Behavior of \`JSON.dump\` and \`to_json\` in Rails is different!

::footnote_ruby::

See ActiveSupport's [core_ext/object/json.rb](https://github.com/rails/rails/blob/1891a3ffcc123de89c47011f36c547354c669481/activesupport/lib/active_support/core_ext/object/json.rb)

::pgtype::

\`json\`, \`jsonb\`

Variable length, up to 1GB

::postgresql::

JSON saves value as is <small>(it is just a string)</small>

\`\`\`sql
SELECT '{"foo": "bar","foo":"baz"}'::json;
-- {"foo": "bar","foo":"baz"}
\`\`\`

JSONB is effective but strict: no duplicate keys, doesn't preserve whitespaces, etc\u2026

\`\`\`sql
SELECT '{"foo": "bar","foo":"baz"}'::jsonb;
-- {"foo": "baz"}
\`\`\`

Inside: string <small>(no null-bytes!)</small>, numeric, \u2026

::footnote_pg::

See [8.14 JSON Types](https://www.postgresql.org/docs/14/datatype-json.html) and [9.16 JSON Functions and Operators](https://www.postgresql.org/docs/14/functions-json.html)

<!--
JSON\u2026 \u7686\u3055\u3093\u306FJSON\u304C\u597D\u304D\u3067\u3059\u304B\uFF1F\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\u3067\u4FBF\u5229\u306A\u30C7\u30FC\u30BF\u578B\u3067\u3059\u306D\u3002JSON\u81EA\u8EAB\u306F\u3051\u3063\u3053\u3046\u7C21\u5358\u306A\u3082\u306E\u3060\u3068\u898B\u3089\u308C\u307E\u3059\u304C\u3001\u3067\u3082\u5FAE\u5999\u306A\u3053\u3068\u306F\u305F\u304F\u3055\u3093\u3042\u308A\u307E\u3059\u3002

\u521D\u3081\u306B\u3001PostgreSQL\u306B\u306F\u4E8C\u3064\u306EJSON\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002JSON\u3068JSONB\u3002\u6700\u8FD1\u3001JSONB\u306E\u65B9\u304C\u3088\u304F\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u308C\u307E\u3059\u3057\u3001\u30AF\u30A8\u30EA\u30FC\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u3059\u306E\u65B9\u304C\u3044\u3044\u3057\u2026 \u3067\u3059\u304C\u3001\u53B3\u5BC6\u3067\u3059\u3002\u30C8\u30FC\u30AF\u30F3\u306E\u9593\u306E\u7A7A\u767D\u3092\u7121\u8996\u3057\u305F\u308A\u3001\u30C2\u30E5\u30FC\u30D7\u306E\u30AD\u30FC\u3082\u6368\u3066\u305F\u308A\u3057\u307E\u3059\u3002\u307E\u305F\u3001JSONB\u306E\u4E2D\u306B\u3042\u308B\u6587\u5B57\u5217\u306B\u30B3\u30FC\u30C9\u30BC\u30ED\u3092\u5165\u308C\u308B\u3053\u3068\u306F\u7D76\u5BFE\u3067\u304D\u307E\u305B\u3093\u3001\u30A8\u30B9\u30B1\u30FC\u30D7\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3002

\u9006\u306B\u3001JSON\u306F\u30EA\u30A2\u30EB\u30FB\u30EF\u30FC\u30EB\u30C9\u306E\u5909\u306AJSON\u3092\u307B\u3068\u3093\u3069\u5168\u90E8\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002\u3067\u3082\u3001JSON\u306E\u5168\u5024\u306F\u305F\u3060\u306E\u6587\u5B57\u5217\u3067\u3059\u3002
-->
`,title:"JSON",level:2,content:`## JSON

::rubytype::

\`Hash\`, \`Array\`

::ruby::

Be careful with symbols as keys

\`\`\`ruby
{ "foo" => "bar", foo: "baz" }.to_json
# {"foo":"baz"}
\`\`\`

Define \`as_json\` method on your classes to serialize them to JSON automatically.

Behavior of \`JSON.dump\` and \`to_json\` in Rails is different!

::footnote_ruby::

See ActiveSupport's [core_ext/object/json.rb](https://github.com/rails/rails/blob/1891a3ffcc123de89c47011f36c547354c669481/activesupport/lib/active_support/core_ext/object/json.rb)

::pgtype::

\`json\`, \`jsonb\`

Variable length, up to 1GB

::postgresql::

JSON saves value as is <small>(it is just a string)</small>

\`\`\`sql
SELECT '{"foo": "bar","foo":"baz"}'::json;
-- {"foo": "bar","foo":"baz"}
\`\`\`

JSONB is effective but strict: no duplicate keys, doesn't preserve whitespaces, etc\u2026

\`\`\`sql
SELECT '{"foo": "bar","foo":"baz"}'::jsonb;
-- {"foo": "baz"}
\`\`\`

Inside: string <small>(no null-bytes!)</small>, numeric, \u2026

::footnote_pg::

See [8.14 JSON Types](https://www.postgresql.org/docs/14/datatype-json.html) and [9.16 JSON Functions and Operators](https://www.postgresql.org/docs/14/functions-json.html)`,frontmatter:{layout:"comparison"},note:`JSON\u2026 \u7686\u3055\u3093\u306FJSON\u304C\u597D\u304D\u3067\u3059\u304B\uFF1F\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\u3067\u4FBF\u5229\u306A\u30C7\u30FC\u30BF\u578B\u3067\u3059\u306D\u3002JSON\u81EA\u8EAB\u306F\u3051\u3063\u3053\u3046\u7C21\u5358\u306A\u3082\u306E\u3060\u3068\u898B\u3089\u308C\u307E\u3059\u304C\u3001\u3067\u3082\u5FAE\u5999\u306A\u3053\u3068\u306F\u305F\u304F\u3055\u3093\u3042\u308A\u307E\u3059\u3002

\u521D\u3081\u306B\u3001PostgreSQL\u306B\u306F\u4E8C\u3064\u306EJSON\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002JSON\u3068JSONB\u3002\u6700\u8FD1\u3001JSONB\u306E\u65B9\u304C\u3088\u304F\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u308C\u307E\u3059\u3057\u3001\u30AF\u30A8\u30EA\u30FC\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u3059\u306E\u65B9\u304C\u3044\u3044\u3057\u2026 \u3067\u3059\u304C\u3001\u53B3\u5BC6\u3067\u3059\u3002\u30C8\u30FC\u30AF\u30F3\u306E\u9593\u306E\u7A7A\u767D\u3092\u7121\u8996\u3057\u305F\u308A\u3001\u30C2\u30E5\u30FC\u30D7\u306E\u30AD\u30FC\u3082\u6368\u3066\u305F\u308A\u3057\u307E\u3059\u3002\u307E\u305F\u3001JSONB\u306E\u4E2D\u306B\u3042\u308B\u6587\u5B57\u5217\u306B\u30B3\u30FC\u30C9\u30BC\u30ED\u3092\u5165\u308C\u308B\u3053\u3068\u306F\u7D76\u5BFE\u3067\u304D\u307E\u305B\u3093\u3001\u30A8\u30B9\u30B1\u30FC\u30D7\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3002

\u9006\u306B\u3001JSON\u306F\u30EA\u30A2\u30EB\u30FB\u30EF\u30FC\u30EB\u30C9\u306E\u5909\u306AJSON\u3092\u307B\u3068\u3093\u3069\u5168\u90E8\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002\u3067\u3082\u3001JSON\u306E\u5168\u5024\u306F\u305F\u3060\u306E\u6587\u5B57\u5217\u3067\u3059\u3002`,index:30,start:1137,end:1200,notesHTML:`<p>JSON\u2026 \u7686\u3055\u3093\u306FJSON\u304C\u597D\u304D\u3067\u3059\u304B\uFF1F\u30D5\u30EC\u30AD\u30B7\u30D6\u30EB\u3067\u4FBF\u5229\u306A\u30C7\u30FC\u30BF\u578B\u3067\u3059\u306D\u3002JSON\u81EA\u8EAB\u306F\u3051\u3063\u3053\u3046\u7C21\u5358\u306A\u3082\u306E\u3060\u3068\u898B\u3089\u308C\u307E\u3059\u304C\u3001\u3067\u3082\u5FAE\u5999\u306A\u3053\u3068\u306F\u305F\u304F\u3055\u3093\u3042\u308A\u307E\u3059\u3002</p>
<p>\u521D\u3081\u306B\u3001PostgreSQL\u306B\u306F\u4E8C\u3064\u306EJSON\u30C7\u30FC\u30BF\u578B\u304C\u3042\u308A\u307E\u3059\u3002JSON\u3068JSONB\u3002\u6700\u8FD1\u3001JSONB\u306E\u65B9\u304C\u3088\u304F\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3092\u4F5C\u308C\u307E\u3059\u3057\u3001\u30AF\u30A8\u30EA\u30FC\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u3059\u306E\u65B9\u304C\u3044\u3044\u3057\u2026 \u3067\u3059\u304C\u3001\u53B3\u5BC6\u3067\u3059\u3002\u30C8\u30FC\u30AF\u30F3\u306E\u9593\u306E\u7A7A\u767D\u3092\u7121\u8996\u3057\u305F\u308A\u3001\u30C2\u30E5\u30FC\u30D7\u306E\u30AD\u30FC\u3082\u6368\u3066\u305F\u308A\u3057\u307E\u3059\u3002\u307E\u305F\u3001JSONB\u306E\u4E2D\u306B\u3042\u308B\u6587\u5B57\u5217\u306B\u30B3\u30FC\u30C9\u30BC\u30ED\u3092\u5165\u308C\u308B\u3053\u3068\u306F\u7D76\u5BFE\u3067\u304D\u307E\u305B\u3093\u3001\u30A8\u30B9\u30B1\u30FC\u30D7\u3055\u308C\u305F\u5834\u5408\u3067\u3082\u3002</p>
<p>\u9006\u306B\u3001JSON\u306F\u30EA\u30A2\u30EB\u30FB\u30EF\u30FC\u30EB\u30C9\u306E\u5909\u306AJSON\u3092\u307B\u3068\u3093\u3069\u5168\u90E8\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002\u3067\u3082\u3001JSON\u306E\u5168\u5024\u306F\u305F\u3060\u306E\u6587\u5B57\u5217\u3067\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:Nb,meta:{slide:{raw:`
## JSON on steroids

<a href="https://github.com/DmitryTsepelev/store_model" class="block my-10 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/1a8dd076f9dc2fdca766c80094db91f36af4a302e4708ed0f3ad3d6b9535733d/DmitryTsepelev/store_model" class="w-96 mx-auto" />
</a>

Use [store_model](https://github.com/DmitryTsepelev/store_model) gem to make powerful value objects from JSON fields.

**But don't overuse!**

There is performance penalty for serialization and deserialization.

<qr-code url="https://github.com/DmitryTsepelev/store_model" caption="store_model gem repo" class="w-32 absolute bottom-10px right-10px" />

<!--
JSON\u306F\u3044\u3044\u3067\u3059\u3051\u3069\u3001Ruby\u3067\u306F\u666E\u901A\u306EHash\u306B\u306A\u308B\u306E\u3067\u3001\u4F7F\u3046\u306E\u306F\u305D\u3093\u306A\u306B\u4FBF\u5229\u3067\u306F\u306A\u3044\u3067\u3059\u306D\u3002JSON\u306F\u3044\u308D\u3044\u308D\u306A\u30E1\u30BD\u30C3\u30C9\u306E\u3042\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3060\u3063\u305F\u3089\u3044\u3044\u306A\u3068\u601D\u3046\u4EBA\u304C\u3044\u308B\u3067\u3057\u3087\u3046\u3002

\u305D\u308C\u306FValue object\u3068\u3044\u3046\u30D1\u30BF\u30FC\u30F3\u3092\u4F7F\u3063\u3066\u5B9F\u73FE\u51FA\u6765\u307E\u3059\u3002\u305D\u3057\u3066store_model\u3068\u3044\u3046\u30B8\u30A7\u30E0\u3082\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u4F7F\u3063\u3066JSON\u306E\u5024\u3092\u3001\u30E2\u30C7\u30EB\u306E\u3088\u3046\u306A\u4FBF\u5229\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5909\u3048\u3089\u308C\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4F4E\u4E0B\u306B\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002
-->
`,title:"JSON on steroids",level:2,content:`## JSON on steroids

<a href="https://github.com/DmitryTsepelev/store_model" class="block my-10 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/1a8dd076f9dc2fdca766c80094db91f36af4a302e4708ed0f3ad3d6b9535733d/DmitryTsepelev/store_model" class="w-96 mx-auto" />
</a>

Use [store_model](https://github.com/DmitryTsepelev/store_model) gem to make powerful value objects from JSON fields.

**But don't overuse!**

There is performance penalty for serialization and deserialization.

<qr-code url="https://github.com/DmitryTsepelev/store_model" caption="store_model gem repo" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{},note:`JSON\u306F\u3044\u3044\u3067\u3059\u3051\u3069\u3001Ruby\u3067\u306F\u666E\u901A\u306EHash\u306B\u306A\u308B\u306E\u3067\u3001\u4F7F\u3046\u306E\u306F\u305D\u3093\u306A\u306B\u4FBF\u5229\u3067\u306F\u306A\u3044\u3067\u3059\u306D\u3002JSON\u306F\u3044\u308D\u3044\u308D\u306A\u30E1\u30BD\u30C3\u30C9\u306E\u3042\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3060\u3063\u305F\u3089\u3044\u3044\u306A\u3068\u601D\u3046\u4EBA\u304C\u3044\u308B\u3067\u3057\u3087\u3046\u3002

\u305D\u308C\u306FValue object\u3068\u3044\u3046\u30D1\u30BF\u30FC\u30F3\u3092\u4F7F\u3063\u3066\u5B9F\u73FE\u51FA\u6765\u307E\u3059\u3002\u305D\u3057\u3066store_model\u3068\u3044\u3046\u30B8\u30A7\u30E0\u3082\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u4F7F\u3063\u3066JSON\u306E\u5024\u3092\u3001\u30E2\u30C7\u30EB\u306E\u3088\u3046\u306A\u4FBF\u5229\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5909\u3048\u3089\u308C\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4F4E\u4E0B\u306B\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002`,index:31,start:1201,end:1222,notesHTML:`<p>JSON\u306F\u3044\u3044\u3067\u3059\u3051\u3069\u3001Ruby\u3067\u306F\u666E\u901A\u306EHash\u306B\u306A\u308B\u306E\u3067\u3001\u4F7F\u3046\u306E\u306F\u305D\u3093\u306A\u306B\u4FBF\u5229\u3067\u306F\u306A\u3044\u3067\u3059\u306D\u3002JSON\u306F\u3044\u308D\u3044\u308D\u306A\u30E1\u30BD\u30C3\u30C9\u306E\u3042\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3060\u3063\u305F\u3089\u3044\u3044\u306A\u3068\u601D\u3046\u4EBA\u304C\u3044\u308B\u3067\u3057\u3087\u3046\u3002</p>
<p>\u305D\u308C\u306FValue object\u3068\u3044\u3046\u30D1\u30BF\u30FC\u30F3\u3092\u4F7F\u3063\u3066\u5B9F\u73FE\u51FA\u6765\u307E\u3059\u3002\u305D\u3057\u3066store_model\u3068\u3044\u3046\u30B8\u30A7\u30E0\u3082\u304A\u52E7\u3081\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u4F7F\u3063\u3066JSON\u306E\u5024\u3092\u3001\u30E2\u30C7\u30EB\u306E\u3088\u3046\u306A\u4FBF\u5229\u306A\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u5909\u3048\u3089\u308C\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u4F4E\u4E0B\u306B\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Vb,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Ranges

::rubytype::

\`Range\`

::ruby::

\`\`\`ruby
5..7 or 5...8
Time.current..1.day.from_now


# endless or beginless ranges
Time.current..
..Date.yesterday
nil.. or Range.new(nil, nil)

# Beginning is always included if possible :-(
Test.pluck("intrange(1, 5, '()')").first # 2...5
Test.pluck("tstzrange(now(), now() + '1 hour', '()')").first
# ArgumentError: The Ruby Range object does not
# support excluding the beginning of a Range.
\`\`\`

::pgtype::

\`intrange\`, \`tsrange\`, \u2026

\`intmultirange\`, \u2026

::postgresql::

\`\`\`sql
SELECT int8range(5, 7, '[]'); -- [5,8]
SELECT int8range(5, 8); -- [5,8)
SELECT tstzrange(now(), now() + '1 day', '()');
-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")

-- endless or beginless ranges
SELECT tstzrange(now(), NULL);
SELECT tstzrange(NULL, NULL);

-- PG 14: Multiranges and operators
SELECT nummultirange(numrange(1, 20))
     - nummultirange(numrange(4, 6));
-- {[1,4),[6,20)}
-- and many more\u2026 (exclusion constraints!)
\`\`\`

::footnote_ruby::

Additional methods in the [facets](https://github.com/rubyworks/facets) gem.

::footnote_pg::

https://www.postgresql.org/docs/14/rangetypes.html

<!--
\u6B21\u306FRange\u3001\u7BC4\u56F2\u578B\u3067\u3059\u3002\u4E8C\u3064\u306E\u5024\u306E\u9593\u306E\u7BC4\u56F2\u3092\u8868\u3059\u30C7\u30FC\u30BF\u578B\u3067\u3059\u306D\u3002\u7C21\u5358\u306B\u3044\u304F\u3089\u304B\u306E\u7BC4\u56F2\u5024\u3092\u6BD4\u8F03\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304B\u3089\u3001\u3059\u3054\u304F\u4FBF\u5229\u306A\u3082\u306E\u3067\u3059\u3002

\u3055\u3089\u306B\u3001PostgreSQL\u306E\u7BC4\u56F2\u578B\u3092\u4F7F\u3063\u3066\u6392\u4ED6\u5236\u7D04(exclusion constraint)\u304C\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u4E88\u7D04\u30A2\u30D7\u30EA\u3067\u306F\u6392\u4ED6\u5236\u7D04\u3092\u4F7F\u3063\u3066\u4F1A\u8B70\u5BA4\u3084\u30DB\u30C6\u30EB\u306E\u90E8\u5C4B\u306E\u30C0\u30D6\u30EB\u30D6\u30C3\u30AD\u30F3\u30B0\u3092\u9632\u3050\u5236\u7D04\u304C\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002

\u3067\u3059\u304C\u3001Ruby\u3068PostgreSQL\u306E\u7BC4\u56F2\u578B\u3067\u306F\u3001\u91CD\u5927\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u308C\u306F\u4E0B\u9650\u5024\u3067\u3059\u3002Ruby\u3067\u306F\u3001\u7BC4\u56F2\u306E\u5DE6\u306E\u5883\u754C\u306F\u9589\u3058\u305F\u3082\u306E\u306A\u306E\u3067\u3001\u6700\u5C0F\u306E\u5024\u306F\u3044\u3064\u3082\u7BC4\u56F2\u306B\u542B\u307E\u308C\u307E\u3059\u3002PostgreSQL\u306F\u3001\u542B\u3080\u3053\u3068\u3082\u542B\u307E\u306A\u3044\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002

\u96E2\u6563\u7684\u306A\u7BC4\u56F2\u578B\u3060\u3063\u305F\u3089\u3001\u4F8B\u3048\u3070integer\u53C8\u306F\u65E5\u4ED8\u306E\u5834\u5408\u3001ActiveRecord\u306F\u8CE2\u3044\u30AE\u30DF\u30C3\u30AF\u3092\u3057\u307E\u3059\u3002Ruby\u306B\u306F\u3042\u308A\u3048\u306A\u3044\u958B\u3044\u305F\u4E0B\u9650\u5024\u306B\uFF11\u3092\u8DB3\u3057\u3066\u3001\u9589\u3058\u305F\u5883\u754C\u306B\u5909\u66F4\u3057\u307E\u3059\u3002\u3067\u3082\u3001\u9023\u7D9A\u7684\u306A\u7BC4\u56F2\u578B\u306E\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u306E\u3067\u4ED5\u65B9\u304C\u3042\u308A\u307E\u305B\u3093\u3002
-->
`,title:"Ranges",level:2,content:`## Ranges

::rubytype::

\`Range\`

::ruby::

\`\`\`ruby
5..7 or 5...8
Time.current..1.day.from_now


# endless or beginless ranges
Time.current..
..Date.yesterday
nil.. or Range.new(nil, nil)

# Beginning is always included if possible :-(
Test.pluck("intrange(1, 5, '()')").first # 2...5
Test.pluck("tstzrange(now(), now() + '1 hour', '()')").first
# ArgumentError: The Ruby Range object does not
# support excluding the beginning of a Range.
\`\`\`

::pgtype::

\`intrange\`, \`tsrange\`, \u2026

\`intmultirange\`, \u2026

::postgresql::

\`\`\`sql
SELECT int8range(5, 7, '[]'); -- [5,8]
SELECT int8range(5, 8); -- [5,8)
SELECT tstzrange(now(), now() + '1 day', '()');
-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")

-- endless or beginless ranges
SELECT tstzrange(now(), NULL);
SELECT tstzrange(NULL, NULL);

-- PG 14: Multiranges and operators
SELECT nummultirange(numrange(1, 20))
     - nummultirange(numrange(4, 6));
-- {[1,4),[6,20)}
-- and many more\u2026 (exclusion constraints!)
\`\`\`

::footnote_ruby::

Additional methods in the [facets](https://github.com/rubyworks/facets) gem.

::footnote_pg::

https://www.postgresql.org/docs/14/rangetypes.html`,frontmatter:{layout:"comparison"},note:`\u6B21\u306FRange\u3001\u7BC4\u56F2\u578B\u3067\u3059\u3002\u4E8C\u3064\u306E\u5024\u306E\u9593\u306E\u7BC4\u56F2\u3092\u8868\u3059\u30C7\u30FC\u30BF\u578B\u3067\u3059\u306D\u3002\u7C21\u5358\u306B\u3044\u304F\u3089\u304B\u306E\u7BC4\u56F2\u5024\u3092\u6BD4\u8F03\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304B\u3089\u3001\u3059\u3054\u304F\u4FBF\u5229\u306A\u3082\u306E\u3067\u3059\u3002

\u3055\u3089\u306B\u3001PostgreSQL\u306E\u7BC4\u56F2\u578B\u3092\u4F7F\u3063\u3066\u6392\u4ED6\u5236\u7D04(exclusion constraint)\u304C\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u4E88\u7D04\u30A2\u30D7\u30EA\u3067\u306F\u6392\u4ED6\u5236\u7D04\u3092\u4F7F\u3063\u3066\u4F1A\u8B70\u5BA4\u3084\u30DB\u30C6\u30EB\u306E\u90E8\u5C4B\u306E\u30C0\u30D6\u30EB\u30D6\u30C3\u30AD\u30F3\u30B0\u3092\u9632\u3050\u5236\u7D04\u304C\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002

\u3067\u3059\u304C\u3001Ruby\u3068PostgreSQL\u306E\u7BC4\u56F2\u578B\u3067\u306F\u3001\u91CD\u5927\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u308C\u306F\u4E0B\u9650\u5024\u3067\u3059\u3002Ruby\u3067\u306F\u3001\u7BC4\u56F2\u306E\u5DE6\u306E\u5883\u754C\u306F\u9589\u3058\u305F\u3082\u306E\u306A\u306E\u3067\u3001\u6700\u5C0F\u306E\u5024\u306F\u3044\u3064\u3082\u7BC4\u56F2\u306B\u542B\u307E\u308C\u307E\u3059\u3002PostgreSQL\u306F\u3001\u542B\u3080\u3053\u3068\u3082\u542B\u307E\u306A\u3044\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002

\u96E2\u6563\u7684\u306A\u7BC4\u56F2\u578B\u3060\u3063\u305F\u3089\u3001\u4F8B\u3048\u3070integer\u53C8\u306F\u65E5\u4ED8\u306E\u5834\u5408\u3001ActiveRecord\u306F\u8CE2\u3044\u30AE\u30DF\u30C3\u30AF\u3092\u3057\u307E\u3059\u3002Ruby\u306B\u306F\u3042\u308A\u3048\u306A\u3044\u958B\u3044\u305F\u4E0B\u9650\u5024\u306B\uFF11\u3092\u8DB3\u3057\u3066\u3001\u9589\u3058\u305F\u5883\u754C\u306B\u5909\u66F4\u3057\u307E\u3059\u3002\u3067\u3082\u3001\u9023\u7D9A\u7684\u306A\u7BC4\u56F2\u578B\u306E\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u306E\u3067\u4ED5\u65B9\u304C\u3042\u308A\u307E\u305B\u3093\u3002`,index:32,start:1222,end:1294,notesHTML:`<p>\u6B21\u306FRange\u3001\u7BC4\u56F2\u578B\u3067\u3059\u3002\u4E8C\u3064\u306E\u5024\u306E\u9593\u306E\u7BC4\u56F2\u3092\u8868\u3059\u30C7\u30FC\u30BF\u578B\u3067\u3059\u306D\u3002\u7C21\u5358\u306B\u3044\u304F\u3089\u304B\u306E\u7BC4\u56F2\u5024\u3092\u6BD4\u8F03\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304B\u3089\u3001\u3059\u3054\u304F\u4FBF\u5229\u306A\u3082\u306E\u3067\u3059\u3002</p>
<p>\u3055\u3089\u306B\u3001PostgreSQL\u306E\u7BC4\u56F2\u578B\u3092\u4F7F\u3063\u3066\u6392\u4ED6\u5236\u7D04(exclusion constraint)\u304C\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001\u4E88\u7D04\u30A2\u30D7\u30EA\u3067\u306F\u6392\u4ED6\u5236\u7D04\u3092\u4F7F\u3063\u3066\u4F1A\u8B70\u5BA4\u3084\u30DB\u30C6\u30EB\u306E\u90E8\u5C4B\u306E\u30C0\u30D6\u30EB\u30D6\u30C3\u30AD\u30F3\u30B0\u3092\u9632\u3050\u5236\u7D04\u304C\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p>
<p>\u3067\u3059\u304C\u3001Ruby\u3068PostgreSQL\u306E\u7BC4\u56F2\u578B\u3067\u306F\u3001\u91CD\u5927\u306A\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u308C\u306F\u4E0B\u9650\u5024\u3067\u3059\u3002Ruby\u3067\u306F\u3001\u7BC4\u56F2\u306E\u5DE6\u306E\u5883\u754C\u306F\u9589\u3058\u305F\u3082\u306E\u306A\u306E\u3067\u3001\u6700\u5C0F\u306E\u5024\u306F\u3044\u3064\u3082\u7BC4\u56F2\u306B\u542B\u307E\u308C\u307E\u3059\u3002PostgreSQL\u306F\u3001\u542B\u3080\u3053\u3068\u3082\u542B\u307E\u306A\u3044\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p>
<p>\u96E2\u6563\u7684\u306A\u7BC4\u56F2\u578B\u3060\u3063\u305F\u3089\u3001\u4F8B\u3048\u3070integer\u53C8\u306F\u65E5\u4ED8\u306E\u5834\u5408\u3001ActiveRecord\u306F\u8CE2\u3044\u30AE\u30DF\u30C3\u30AF\u3092\u3057\u307E\u3059\u3002Ruby\u306B\u306F\u3042\u308A\u3048\u306A\u3044\u958B\u3044\u305F\u4E0B\u9650\u5024\u306B\uFF11\u3092\u8DB3\u3057\u3066\u3001\u9589\u3058\u305F\u5883\u754C\u306B\u5909\u66F4\u3057\u307E\u3059\u3002\u3067\u3082\u3001\u9023\u7D9A\u7684\u306A\u7BC4\u56F2\u578B\u306E\u5834\u5408\u3001\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u306E\u3067\u4ED5\u65B9\u304C\u3042\u308A\u307E\u305B\u3093\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:n7,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## UUID

<div class="absolute bottom-75px left-180px rotate-355">

Also take a look at upcoming UUIDv6, **v7**, and v8!

<p class="text-xs"><a href="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04">datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04</a></p>
</div>
<qr-code url="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04" class="w-32 absolute bottom-50px right-150px" />

::rubytype::

\`String\`

36 bytes

::ruby::

\`\`\`ruby
# All-random UUIDv4
SecureRandom.uuid
# => \u201C40f15398-4b38-4e16-8b3c-ff16fc960d38\u201D

# Determined UUIDv5 (hash-based)
Digest::UUID.uuid_v5(Digest::UUID::DNS_NAMESPACE, "name")
# => "9b8edca0-90f2-5031-8e5d-3f708834696c"
\`\`\`

::pgtype::

\`uuid\`

16 bytes

::postgresql::

\`\`\`sql
CREATE EXTENSION "pgcrypto";
SELECT gen_random_uuid();
-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63

CREATE EXTENSION "uuid-ossp";
SELECT uuid_generate_v5(uuid_ns_dns(), 'name');
-- 9b8edca0-90f2-5031-8e5d-3f708834696c
\`\`\`

::footnote_ruby::

See Rails docs for [Digest::UUID](https://api.rubyonrails.org/v6.0.3/classes/Digest/UUID.html)

::footnote_pg::

See docs for [pgcrypto](https://www.postgresql.org/docs/14/pgcrypto.html) and [uuid-ossp](https://www.postgresql.org/docs/14/uuid-ossp.html) extensions.

<!--
UUID\u3002\u79C1\u306FUUID\u304C\u5927\u597D\u304D\u3067\u3059\u3002bigint\u3088\u308A\uFF12\u500D\u5927\u304D\u3044\u3067\u3059\u304C\u3001\u591A\u76EE\u7684\u306E\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002UUID\u306E\u7A2E\u985E\u306F\u69D8\u3005\u304C\u3042\u308A\u307E\u3059\u3002\u30E9\u30F3\u30C0\u30E0\u3084\u30CF\u30C3\u30B7\u30E5\u65B9\u5F0F\u3084\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u65B9\u5F0F\u306E\u610F\u8B58\u5225\u5B50\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002

Ruby\u3068Rails\u306B\u306F\u76F8\u5F53\u306E\u30C7\u30FC\u30BF\u578B\u304C\u306A\u304F\u3066\u3001\u30C7\u30FC\u30BF\u306F\u6A19\u6E96\u5F62\u5F0F\u3067\u6587\u5B57\u5217\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002PostgreSQL\u306B\u306F\u300116\u30D0\u30A4\u30C8\u306E\u6574\u6570\u3001integer\u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5165\u51FA\u529B\u306F\u6587\u5B57\u5217\u306E\u5F62\u5F0F\u3067\u3059\u3002

\u307F\u3093\u306A\u306F\u5168\u30E9\u30F3\u30C0\u30E0\u306EUUID\u30D0\u30FC\u30B8\u30E7\u30F3\uFF14\u3092\u4F7F\u3063\u3066\u3044\u308B\u307F\u305F\u3044\u3067\u3059\u3002\u30CF\u30C3\u30B7\u30E5\u306B\u57FA\u3065\u3044\u305FUUID\u30D0\u30FC\u30B8\u30E7\u30F3\uFF15\u306F\u9006\u306B\u30E9\u30F3\u30C0\u30E0\u3067\u306F\u306A\u304F\u3066\u3001\u5B8C\u5168\u306B\u6C7A\u5B9A\u8AD6\u7684\u3067\u3059\u3002\u6642\u306B\u306F\u3053\u308C\u304C\u5F79\u306B\u7ACB\u3064\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002

\u53C8\u3001\u65B0\u3057\u304F\u3066\u3001\u307E\u3060\u6A19\u6E96\u5316\u3055\u308C\u3066\u3044\u306A\u3044UUID\u30D0\u30FC\u30B8\u30E7\u30F3 6\u30017\u30018\u304C\u3042\u308A\u307E\u3059\u3002\u5168\u90E8\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u57FA\u3065\u3044\u3066\u3001\u6642\u9593\u306E\u7D4C\u904E\u3068\u3068\u3082\u306B\u5358\u8ABF\u5897\u52A0\u3059\u308B\u3068\u3044\u3046\u304B\u306A\u308A\u6709\u7528\u306A\u7279\u6027\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u30D7\u30E9\u30B9\u3001\u3044\u304F\u3064\u304B\u306E\u30D0\u30A4\u30C8\u306F\u30E9\u30F3\u30C0\u30E0\u3067\u3059\u304C\u3001\u4EFB\u610F\u306E\u30C7\u30FC\u30BF\u3082\u5165\u308C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u3053\u306E\u30EA\u30F3\u30AF\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002
-->
`,title:"UUID",level:2,content:`## UUID

<div class="absolute bottom-75px left-180px rotate-355">

Also take a look at upcoming UUIDv6, **v7**, and v8!

<p class="text-xs"><a href="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04">datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04</a></p>
</div>
<qr-code url="https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04" class="w-32 absolute bottom-50px right-150px" />

::rubytype::

\`String\`

36 bytes

::ruby::

\`\`\`ruby
# All-random UUIDv4
SecureRandom.uuid
# => \u201C40f15398-4b38-4e16-8b3c-ff16fc960d38\u201D

# Determined UUIDv5 (hash-based)
Digest::UUID.uuid_v5(Digest::UUID::DNS_NAMESPACE, "name")
# => "9b8edca0-90f2-5031-8e5d-3f708834696c"
\`\`\`

::pgtype::

\`uuid\`

16 bytes

::postgresql::

\`\`\`sql
CREATE EXTENSION "pgcrypto";
SELECT gen_random_uuid();
-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63

CREATE EXTENSION "uuid-ossp";
SELECT uuid_generate_v5(uuid_ns_dns(), 'name');
-- 9b8edca0-90f2-5031-8e5d-3f708834696c
\`\`\`

::footnote_ruby::

See Rails docs for [Digest::UUID](https://api.rubyonrails.org/v6.0.3/classes/Digest/UUID.html)

::footnote_pg::

See docs for [pgcrypto](https://www.postgresql.org/docs/14/pgcrypto.html) and [uuid-ossp](https://www.postgresql.org/docs/14/uuid-ossp.html) extensions.`,frontmatter:{layout:"comparison"},note:`UUID\u3002\u79C1\u306FUUID\u304C\u5927\u597D\u304D\u3067\u3059\u3002bigint\u3088\u308A\uFF12\u500D\u5927\u304D\u3044\u3067\u3059\u304C\u3001\u591A\u76EE\u7684\u306E\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002UUID\u306E\u7A2E\u985E\u306F\u69D8\u3005\u304C\u3042\u308A\u307E\u3059\u3002\u30E9\u30F3\u30C0\u30E0\u3084\u30CF\u30C3\u30B7\u30E5\u65B9\u5F0F\u3084\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u65B9\u5F0F\u306E\u610F\u8B58\u5225\u5B50\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002

Ruby\u3068Rails\u306B\u306F\u76F8\u5F53\u306E\u30C7\u30FC\u30BF\u578B\u304C\u306A\u304F\u3066\u3001\u30C7\u30FC\u30BF\u306F\u6A19\u6E96\u5F62\u5F0F\u3067\u6587\u5B57\u5217\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002PostgreSQL\u306B\u306F\u300116\u30D0\u30A4\u30C8\u306E\u6574\u6570\u3001integer\u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5165\u51FA\u529B\u306F\u6587\u5B57\u5217\u306E\u5F62\u5F0F\u3067\u3059\u3002

\u307F\u3093\u306A\u306F\u5168\u30E9\u30F3\u30C0\u30E0\u306EUUID\u30D0\u30FC\u30B8\u30E7\u30F3\uFF14\u3092\u4F7F\u3063\u3066\u3044\u308B\u307F\u305F\u3044\u3067\u3059\u3002\u30CF\u30C3\u30B7\u30E5\u306B\u57FA\u3065\u3044\u305FUUID\u30D0\u30FC\u30B8\u30E7\u30F3\uFF15\u306F\u9006\u306B\u30E9\u30F3\u30C0\u30E0\u3067\u306F\u306A\u304F\u3066\u3001\u5B8C\u5168\u306B\u6C7A\u5B9A\u8AD6\u7684\u3067\u3059\u3002\u6642\u306B\u306F\u3053\u308C\u304C\u5F79\u306B\u7ACB\u3064\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002

\u53C8\u3001\u65B0\u3057\u304F\u3066\u3001\u307E\u3060\u6A19\u6E96\u5316\u3055\u308C\u3066\u3044\u306A\u3044UUID\u30D0\u30FC\u30B8\u30E7\u30F3 6\u30017\u30018\u304C\u3042\u308A\u307E\u3059\u3002\u5168\u90E8\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u57FA\u3065\u3044\u3066\u3001\u6642\u9593\u306E\u7D4C\u904E\u3068\u3068\u3082\u306B\u5358\u8ABF\u5897\u52A0\u3059\u308B\u3068\u3044\u3046\u304B\u306A\u308A\u6709\u7528\u306A\u7279\u6027\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u30D7\u30E9\u30B9\u3001\u3044\u304F\u3064\u304B\u306E\u30D0\u30A4\u30C8\u306F\u30E9\u30F3\u30C0\u30E0\u3067\u3059\u304C\u3001\u4EFB\u610F\u306E\u30C7\u30FC\u30BF\u3082\u5165\u308C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u3053\u306E\u30EA\u30F3\u30AF\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,index:33,start:1294,end:1362,notesHTML:`<p>UUID\u3002\u79C1\u306FUUID\u304C\u5927\u597D\u304D\u3067\u3059\u3002bigint\u3088\u308A\uFF12\u500D\u5927\u304D\u3044\u3067\u3059\u304C\u3001\u591A\u76EE\u7684\u306E\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002UUID\u306E\u7A2E\u985E\u306F\u69D8\u3005\u304C\u3042\u308A\u307E\u3059\u3002\u30E9\u30F3\u30C0\u30E0\u3084\u30CF\u30C3\u30B7\u30E5\u65B9\u5F0F\u3084\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u65B9\u5F0F\u306E\u610F\u8B58\u5225\u5B50\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002</p>
<p>Ruby\u3068Rails\u306B\u306F\u76F8\u5F53\u306E\u30C7\u30FC\u30BF\u578B\u304C\u306A\u304F\u3066\u3001\u30C7\u30FC\u30BF\u306F\u6A19\u6E96\u5F62\u5F0F\u3067\u6587\u5B57\u5217\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002PostgreSQL\u306B\u306F\u300116\u30D0\u30A4\u30C8\u306E\u6574\u6570\u3001integer\u3068\u3057\u3066\u683C\u7D0D\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u5165\u51FA\u529B\u306F\u6587\u5B57\u5217\u306E\u5F62\u5F0F\u3067\u3059\u3002</p>
<p>\u307F\u3093\u306A\u306F\u5168\u30E9\u30F3\u30C0\u30E0\u306EUUID\u30D0\u30FC\u30B8\u30E7\u30F3\uFF14\u3092\u4F7F\u3063\u3066\u3044\u308B\u307F\u305F\u3044\u3067\u3059\u3002\u30CF\u30C3\u30B7\u30E5\u306B\u57FA\u3065\u3044\u305FUUID\u30D0\u30FC\u30B8\u30E7\u30F3\uFF15\u306F\u9006\u306B\u30E9\u30F3\u30C0\u30E0\u3067\u306F\u306A\u304F\u3066\u3001\u5B8C\u5168\u306B\u6C7A\u5B9A\u8AD6\u7684\u3067\u3059\u3002\u6642\u306B\u306F\u3053\u308C\u304C\u5F79\u306B\u7ACB\u3064\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002</p>
<p>\u53C8\u3001\u65B0\u3057\u304F\u3066\u3001\u307E\u3060\u6A19\u6E96\u5316\u3055\u308C\u3066\u3044\u306A\u3044UUID\u30D0\u30FC\u30B8\u30E7\u30F3 6\u30017\u30018\u304C\u3042\u308A\u307E\u3059\u3002\u5168\u90E8\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u306B\u57FA\u3065\u3044\u3066\u3001\u6642\u9593\u306E\u7D4C\u904E\u3068\u3068\u3082\u306B\u5358\u8ABF\u5897\u52A0\u3059\u308B\u3068\u3044\u3046\u304B\u306A\u308A\u6709\u7528\u306A\u7279\u6027\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u30D7\u30E9\u30B9\u3001\u3044\u304F\u3064\u304B\u306E\u30D0\u30A4\u30C8\u306F\u30E9\u30F3\u30C0\u30E0\u3067\u3059\u304C\u3001\u4EFB\u610F\u306E\u30C7\u30FC\u30BF\u3082\u5165\u308C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u3053\u306E\u30EA\u30F3\u30AF\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:d7,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## IP addresses

::rubytype::

\`IPAddr\`

::ruby::

\`\`\`ruby
ip6 = IPAddr.new "3ffe:505:2::1"
ip4 = IPAddr.new "192.168.2.0/24"

IPAddr.new("192.168.2.0/24").mask(16)
#<IPAddr: IPv4:192.168.0.0/255.255.0.0>


\`\`\`

::pgtype::

\`inet\`, \`cidr\`

7 or 19 bytes both

::postgresql::

\`\`\`sql
SELECT '::1'::inet;
SELECT '127.0.0.1/32'::inet;

SELECT set_masklen(cidr '192.168.1.0/24', 16);
-- 192.168.0.0/16

SELECT inet_merge(inet '192.168.1.5/24', inet '192.168.2.5/24');
-- 192.168.0.0/22
\`\`\`

<small>

\`inet\` works with both host and network addresses.

\`cidr\` works with network addresses only.

</small>

::footnote_ruby::

See [IPAddr](https://ruby-doc.org/stdlib-3.1.0/libdoc/ipaddr/rdoc/IPAddr.html#method-i-mask) docs.

::footnote_pg::

See [Network address types](https://www.postgresql.org/docs/14/datatype-net-types.html) and [functions and operators](https://www.postgresql.org/docs/14/functions-net.html).

<!--
IP\u30A2\u30C9\u30EC\u30B9\u3002\u307B\u3068\u3093\u3069\u5404\u30A2\u30D7\u30EA\u304C\u3053\u306E\u30C7\u30FC\u30BF\u578B\u3092\u4F7F\u3044\u307E\u3059\u3002\u30A2\u30AF\u30BB\u30B9\u30ED\u30B0\u3001\u76E3\u67FB\u30ED\u30B0\u3001\u30ED\u30B0\u30A4\u30F3\u5C65\u6B74\u306A\u3069\u306F\u666E\u6BB5\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306EIP\u30A2\u30C9\u30EC\u30B9\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002IP\u30D0\u30FC\u30B8\u30E7\u30F3\uFF14\u306E\u6587\u5B57\u5217\u5F62\u5F0F\u306F16\u30D0\u30A4\u30C8\u4EE5\u4E0A\u3067\u3059\u304C\u3001PostgreSQL\u306E\u30C7\u30FC\u30BF\u578B\u306F\uFF17\u30D0\u30A4\u30C8\u3067\u3059\u3002\u305D\u308C\u306B\u5C02\u7528\u306E\u6F14\u7B97\u5B50\u3068\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u89E3\u6790\u306B\u5F79\u306B\u7ACB\u3066\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u7121\u8996\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002
-->
`,title:"IP addresses",level:2,content:`## IP addresses

::rubytype::

\`IPAddr\`

::ruby::

\`\`\`ruby
ip6 = IPAddr.new "3ffe:505:2::1"
ip4 = IPAddr.new "192.168.2.0/24"

IPAddr.new("192.168.2.0/24").mask(16)
#<IPAddr: IPv4:192.168.0.0/255.255.0.0>


\`\`\`

::pgtype::

\`inet\`, \`cidr\`

7 or 19 bytes both

::postgresql::

\`\`\`sql
SELECT '::1'::inet;
SELECT '127.0.0.1/32'::inet;

SELECT set_masklen(cidr '192.168.1.0/24', 16);
-- 192.168.0.0/16

SELECT inet_merge(inet '192.168.1.5/24', inet '192.168.2.5/24');
-- 192.168.0.0/22
\`\`\`

<small>

\`inet\` works with both host and network addresses.

\`cidr\` works with network addresses only.

</small>

::footnote_ruby::

See [IPAddr](https://ruby-doc.org/stdlib-3.1.0/libdoc/ipaddr/rdoc/IPAddr.html#method-i-mask) docs.

::footnote_pg::

See [Network address types](https://www.postgresql.org/docs/14/datatype-net-types.html) and [functions and operators](https://www.postgresql.org/docs/14/functions-net.html).`,frontmatter:{layout:"comparison"},note:"IP\u30A2\u30C9\u30EC\u30B9\u3002\u307B\u3068\u3093\u3069\u5404\u30A2\u30D7\u30EA\u304C\u3053\u306E\u30C7\u30FC\u30BF\u578B\u3092\u4F7F\u3044\u307E\u3059\u3002\u30A2\u30AF\u30BB\u30B9\u30ED\u30B0\u3001\u76E3\u67FB\u30ED\u30B0\u3001\u30ED\u30B0\u30A4\u30F3\u5C65\u6B74\u306A\u3069\u306F\u666E\u6BB5\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306EIP\u30A2\u30C9\u30EC\u30B9\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002IP\u30D0\u30FC\u30B8\u30E7\u30F3\uFF14\u306E\u6587\u5B57\u5217\u5F62\u5F0F\u306F16\u30D0\u30A4\u30C8\u4EE5\u4E0A\u3067\u3059\u304C\u3001PostgreSQL\u306E\u30C7\u30FC\u30BF\u578B\u306F\uFF17\u30D0\u30A4\u30C8\u3067\u3059\u3002\u305D\u308C\u306B\u5C02\u7528\u306E\u6F14\u7B97\u5B50\u3068\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u89E3\u6790\u306B\u5F79\u306B\u7ACB\u3066\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u7121\u8996\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002",index:34,start:1362,end:1423,notesHTML:`<p>IP\u30A2\u30C9\u30EC\u30B9\u3002\u307B\u3068\u3093\u3069\u5404\u30A2\u30D7\u30EA\u304C\u3053\u306E\u30C7\u30FC\u30BF\u578B\u3092\u4F7F\u3044\u307E\u3059\u3002\u30A2\u30AF\u30BB\u30B9\u30ED\u30B0\u3001\u76E3\u67FB\u30ED\u30B0\u3001\u30ED\u30B0\u30A4\u30F3\u5C65\u6B74\u306A\u3069\u306F\u666E\u6BB5\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306EIP\u30A2\u30C9\u30EC\u30B9\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002IP\u30D0\u30FC\u30B8\u30E7\u30F3\uFF14\u306E\u6587\u5B57\u5217\u5F62\u5F0F\u306F16\u30D0\u30A4\u30C8\u4EE5\u4E0A\u3067\u3059\u304C\u3001PostgreSQL\u306E\u30C7\u30FC\u30BF\u578B\u306F\uFF17\u30D0\u30A4\u30C8\u3067\u3059\u3002\u305D\u308C\u306B\u5C02\u7528\u306E\u6F14\u7B97\u5B50\u3068\u95A2\u6570\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u89E3\u6790\u306B\u5F79\u306B\u7ACB\u3066\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u7121\u8996\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:D7,meta:{layout:"comparison",rubyRails:"rails",slide:{raw:`---
layout: comparison
rubyRails: rails
---

## Durations

::rubytype::

<p class="text-xs"><code>ActiveSupport::Duration</code></p>

::ruby::

\`\`\`ruby
Time.current + 1.year
# => Thu, 18 Jun 2021 21:00:00 MSK +03:00

100500.weeks.iso8601
# => "P100500W"

1.month.to_i
# => 2629746 (30.436875 days in seconds)
\`\`\`

::pgtype::

\`interval\`

16 bytes

::postgresql::

\`\`\`sql
SELECT now() + \u20181 year\u2019;
-- 2021-06-18 21:00:00+03

SELECT '100500 weeks'::interval;
-- 703500 days

SELECT EXTRACT(epoch FROM '1 month'::interval);
-- 2592000 (30.0 days in seconds)
\`\`\`

::footnote_ruby::

Disclaimer: I added it to Rails in [pull request \u2116 16919](https://github.com/rails/rails/pull/16919).

::footnote_pg::

Supported out-of-the-box in Ruby on Rails 6.1+

<!--
\u6642\u9593\u9593\u9694\u307E\u305F\u306F\u30C7\u30E5\u30EC\u30A4\u30B7\u30E7\u30F3\u307E\u305F\u306Finterval\u3002Rails\u3067\u306E\u958B\u767A\u8005\u306F\u307F\u3093\u306A\u3054\u5B58\u77E5\u3067\u3057\u3087\u3046\u3001\u3053\u306E\u9B54\u6CD5\u7684\u306A1.year\u306E\u3082\u306E\u3067\u3059\u3002

\u6642\u9593\u9593\u9694\u306F\u5B9F\u306B\u5F53\u3066\u306B\u306A\u308B\u3082\u306E\u3067\u3059\u3002\u6642\u9593\u9593\u9694\u306E\u304A\u304B\u3052\u3067\u3001\u65E5\u4ED8\u307E\u308F\u308A\u306E\u7D30\u304B\u3044\u3053\u3068\u306B\u6C17\u306B\u3057\u306A\u304F\u3066\u3001\u6642\u523B\u3084\u65E5\u4ED8\u306E\u7B97\u6570\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u65E5\u4ED8\u306B\u6642\u9593\u9593\u9694\u3092\u8DB3\u3059\u3068\u3001\u6765\u6708\u3068\u304B\u6765\u5E74\u306E\u540C\u3058\u65E5\u306E\u540C\u3058\u6642\u9593\u306B\u306A\u308A\u307E\u3059\u3002\u3069\u3093\u306A\u6708\u3067\u3082\u3001\u3046\u308B\u3046\u5E74\u3067\u3082\u3002\u672C\u5F53\u306B\u7D20\u6674\u3089\u3057\u3044\u3067\u3059\u3002

\u6642\u9593\u9593\u9694\u3092\u79D2\u6570\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u304C\u3001\u3042\u307E\u308A\u610F\u5473\u304C\u306A\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u305D\u308C\u306BRails\u3068PostgreSQL\u306E\u7D50\u679C\u304C\u9055\u3044\u307E\u3059\u306D\u3002\u305F\u3068\u3048\u3070\u3001Rails\u306E\uFF11\u30F6\u6708\u306F\uFF11\u5E74\u306E\u5E73\u5747\u7684\u306730.4\u65E5\u3067\u3059\u304C\u3001PostgreSQL\u306E\uFF11\u30F6\u6708\u306E\u9593\u9694\u306F\u3044\u3064\u3082\u3061\u3087\u3046\u306930\u65E5\u3067\u3059\u3002\u306A\u306E\u3067\u3001\u6642\u523B\u3068\u65E5\u4ED8\u306E\u7B97\u6570\u306E\u305F\u3081\u306E\u307F\u306B\u4F7F\u308F\u308C\u3066\u307B\u3057\u3044\u3067\u3059\u3002

\u4E8C\u5E74\u524D\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305FRuby on Rails\u30D0\u30FC\u30B8\u30E7\u30F36.1\u306FPostgreSQL\u306Einterval\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u5C11\u3057\u81EA\u6162\u8A71\u3067\u3059\u304C\u3001\u79C1\u304C\u4F5C\u3063\u305F\u3082\u306E\u3067\u3059\u3002\u3069\u3046\u305E\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\uFF01
-->
`,title:"Durations",level:2,content:`## Durations

::rubytype::

<p class="text-xs"><code>ActiveSupport::Duration</code></p>

::ruby::

\`\`\`ruby
Time.current + 1.year
# => Thu, 18 Jun 2021 21:00:00 MSK +03:00

100500.weeks.iso8601
# => "P100500W"

1.month.to_i
# => 2629746 (30.436875 days in seconds)
\`\`\`

::pgtype::

\`interval\`

16 bytes

::postgresql::

\`\`\`sql
SELECT now() + \u20181 year\u2019;
-- 2021-06-18 21:00:00+03

SELECT '100500 weeks'::interval;
-- 703500 days

SELECT EXTRACT(epoch FROM '1 month'::interval);
-- 2592000 (30.0 days in seconds)
\`\`\`

::footnote_ruby::

Disclaimer: I added it to Rails in [pull request \u2116 16919](https://github.com/rails/rails/pull/16919).

::footnote_pg::

Supported out-of-the-box in Ruby on Rails 6.1+`,frontmatter:{layout:"comparison",rubyRails:"rails"},note:`\u6642\u9593\u9593\u9694\u307E\u305F\u306F\u30C7\u30E5\u30EC\u30A4\u30B7\u30E7\u30F3\u307E\u305F\u306Finterval\u3002Rails\u3067\u306E\u958B\u767A\u8005\u306F\u307F\u3093\u306A\u3054\u5B58\u77E5\u3067\u3057\u3087\u3046\u3001\u3053\u306E\u9B54\u6CD5\u7684\u306A1.year\u306E\u3082\u306E\u3067\u3059\u3002

\u6642\u9593\u9593\u9694\u306F\u5B9F\u306B\u5F53\u3066\u306B\u306A\u308B\u3082\u306E\u3067\u3059\u3002\u6642\u9593\u9593\u9694\u306E\u304A\u304B\u3052\u3067\u3001\u65E5\u4ED8\u307E\u308F\u308A\u306E\u7D30\u304B\u3044\u3053\u3068\u306B\u6C17\u306B\u3057\u306A\u304F\u3066\u3001\u6642\u523B\u3084\u65E5\u4ED8\u306E\u7B97\u6570\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u65E5\u4ED8\u306B\u6642\u9593\u9593\u9694\u3092\u8DB3\u3059\u3068\u3001\u6765\u6708\u3068\u304B\u6765\u5E74\u306E\u540C\u3058\u65E5\u306E\u540C\u3058\u6642\u9593\u306B\u306A\u308A\u307E\u3059\u3002\u3069\u3093\u306A\u6708\u3067\u3082\u3001\u3046\u308B\u3046\u5E74\u3067\u3082\u3002\u672C\u5F53\u306B\u7D20\u6674\u3089\u3057\u3044\u3067\u3059\u3002

\u6642\u9593\u9593\u9694\u3092\u79D2\u6570\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u304C\u3001\u3042\u307E\u308A\u610F\u5473\u304C\u306A\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u305D\u308C\u306BRails\u3068PostgreSQL\u306E\u7D50\u679C\u304C\u9055\u3044\u307E\u3059\u306D\u3002\u305F\u3068\u3048\u3070\u3001Rails\u306E\uFF11\u30F6\u6708\u306F\uFF11\u5E74\u306E\u5E73\u5747\u7684\u306730.4\u65E5\u3067\u3059\u304C\u3001PostgreSQL\u306E\uFF11\u30F6\u6708\u306E\u9593\u9694\u306F\u3044\u3064\u3082\u3061\u3087\u3046\u306930\u65E5\u3067\u3059\u3002\u306A\u306E\u3067\u3001\u6642\u523B\u3068\u65E5\u4ED8\u306E\u7B97\u6570\u306E\u305F\u3081\u306E\u307F\u306B\u4F7F\u308F\u308C\u3066\u307B\u3057\u3044\u3067\u3059\u3002

\u4E8C\u5E74\u524D\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305FRuby on Rails\u30D0\u30FC\u30B8\u30E7\u30F36.1\u306FPostgreSQL\u306Einterval\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u5C11\u3057\u81EA\u6162\u8A71\u3067\u3059\u304C\u3001\u79C1\u304C\u4F5C\u3063\u305F\u3082\u306E\u3067\u3059\u3002\u3069\u3046\u305E\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\uFF01`,index:35,start:1423,end:1484,notesHTML:`<p>\u6642\u9593\u9593\u9694\u307E\u305F\u306F\u30C7\u30E5\u30EC\u30A4\u30B7\u30E7\u30F3\u307E\u305F\u306Finterval\u3002Rails\u3067\u306E\u958B\u767A\u8005\u306F\u307F\u3093\u306A\u3054\u5B58\u77E5\u3067\u3057\u3087\u3046\u3001\u3053\u306E\u9B54\u6CD5\u7684\u306A1.year\u306E\u3082\u306E\u3067\u3059\u3002</p>
<p>\u6642\u9593\u9593\u9694\u306F\u5B9F\u306B\u5F53\u3066\u306B\u306A\u308B\u3082\u306E\u3067\u3059\u3002\u6642\u9593\u9593\u9694\u306E\u304A\u304B\u3052\u3067\u3001\u65E5\u4ED8\u307E\u308F\u308A\u306E\u7D30\u304B\u3044\u3053\u3068\u306B\u6C17\u306B\u3057\u306A\u304F\u3066\u3001\u6642\u523B\u3084\u65E5\u4ED8\u306E\u7B97\u6570\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u65E5\u4ED8\u306B\u6642\u9593\u9593\u9694\u3092\u8DB3\u3059\u3068\u3001\u6765\u6708\u3068\u304B\u6765\u5E74\u306E\u540C\u3058\u65E5\u306E\u540C\u3058\u6642\u9593\u306B\u306A\u308A\u307E\u3059\u3002\u3069\u3093\u306A\u6708\u3067\u3082\u3001\u3046\u308B\u3046\u5E74\u3067\u3082\u3002\u672C\u5F53\u306B\u7D20\u6674\u3089\u3057\u3044\u3067\u3059\u3002</p>
<p>\u6642\u9593\u9593\u9694\u3092\u79D2\u6570\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u304C\u3001\u3042\u307E\u308A\u610F\u5473\u304C\u306A\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u305D\u308C\u306BRails\u3068PostgreSQL\u306E\u7D50\u679C\u304C\u9055\u3044\u307E\u3059\u306D\u3002\u305F\u3068\u3048\u3070\u3001Rails\u306E\uFF11\u30F6\u6708\u306F\uFF11\u5E74\u306E\u5E73\u5747\u7684\u306730.4\u65E5\u3067\u3059\u304C\u3001PostgreSQL\u306E\uFF11\u30F6\u6708\u306E\u9593\u9694\u306F\u3044\u3064\u3082\u3061\u3087\u3046\u306930\u65E5\u3067\u3059\u3002\u306A\u306E\u3067\u3001\u6642\u523B\u3068\u65E5\u4ED8\u306E\u7B97\u6570\u306E\u305F\u3081\u306E\u307F\u306B\u4F7F\u308F\u308C\u3066\u307B\u3057\u3044\u3067\u3059\u3002</p>
<p>\u4E8C\u5E74\u524D\u306B\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u305FRuby on Rails\u30D0\u30FC\u30B8\u30E7\u30F36.1\u306FPostgreSQL\u306Einterval\u306E\u30B5\u30DD\u30FC\u30C8\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u3059\u3002\u5C11\u3057\u81EA\u6162\u8A71\u3067\u3059\u304C\u3001\u79C1\u304C\u4F5C\u3063\u305F\u3082\u306E\u3067\u3059\u3002\u3069\u3046\u305E\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\uFF01</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:R7,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Enums

::rubytype::

\`String\`

::ruby::

\`\`\`ruby
# In migration (Rails 7+):
create_enum :status, ["draft", "published", "archived", "trashed"]
change_table :posts do |t|
  t.enum :status, enum_type: "status", default: "draft", null: false
end

# In the application code:
class Article < ApplicationRecord
  enum :status, { draft: "draft", published: "published", archived: "archived", trashed: "trashed" }
end

Article.last.status #=> "draft"
Article.last.draft? #=> true
Article.last.published!
# UPDATE articles SET status = 'published' WHERE id = \u2026
\`\`\`

::pgtype::

Custom enum types

4 bytes

::postgresql::

\`\`\`sql
CREATE TYPE status AS ENUM ('draft', 'published', 'archived', 'trashed');
ALTER TABLE posts ADD COLUMN "status" status NOT NULL DEFAULT 'draft';

INSERT INTO posts (status) VALUES ('published');
INSERT INTO posts (status) VALUES ('draft');

SELECT id, status FROM posts;

 id |   status
----+------------
  2 | draft
  1 | published
\`\`\`

Values are human-readable in SQL

::footnote_ruby::

On Rails < 7 you can use [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) gem

::footnote_pg::

See [8.7 Enumerated Types](https://www.postgresql.org/docs/14/datatype-enum.html) page in PostgreSQL docs

<!--
\u5217\u6319\u578B\u307E\u305F\u306Fenum\u306F\u3001\u4FDD\u5B58\u306B\u306F\u30B3\u30F3\u30D1\u30AF\u30C8\u3067\u3001\uFF14\u30D0\u30A4\u30C8\u3060\u3051\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u3057\u3066SQL\u3082Ruby\u3082\u4EBA\u9593\u304C\u8AAD\u3081\u308B\u30E9\u30D9\u30EB\u3092\u4F7F\u3063\u3066\u3044\u3066\u3001\u4FBF\u5229\u3067\u3059\u3002

\u666E\u6BB5\u3001\u591A\u304F\u306E\u30E2\u30C7\u30EB\u306F\u30B9\u30C6\u30FC\u30BF\u30B9\u3084\u30BF\u30A4\u30D7\u3084\u30BD\u30FC\u30B9\u306A\u3069\u306E\u5217\u304C\u3042\u3063\u3066\u3001\u3053\u306E\u69D8\u306A\u30B1\u30FC\u30B9\u3067\u306F\u5217\u6319\u578B\u3092\u4F7F\u3063\u305F\u4FA1\u5024\u304C\u3042\u308B\u3068\u601D\u3044\u307E\u3059\u3002Rails\u306F\u3001\u305D\u306E\u4E0A\u306B\u4FBF\u5229\u306A\u8FF0\u8A9E\u30E1\u30BD\u30C3\u30C9\u3084\u30BB\u30C3\u30BF\u30FC\u30E1\u30BD\u30C3\u30C9\u306E\u3042\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u8FFD\u52A0\u3057\u3066\u3044\u307E\u3059\u3002

\u4EE5\u524D\u3001enum\u3068\u3057\u3066integer\u3092\u4F7F\u3046\u6163\u884C\u304C\u3042\u308A\u307E\u3057\u305F\u3002\u3067\u3082\u305D\u306E\u5834\u5408\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65B9\u304B\u3089\u898B\u308C\u3070\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u306F\u305F\u3060\u306E\u6570\u5B57\u3067\u3059\u3002\u751F\u306ESQL\u30AF\u30A8\u30EA\u3092\u66F8\u304F\u3068\u3051\u3063\u3053\u3046\u4E0D\u4FBF\u306B\u306A\u308A\u307E\u3059\u3002
-->
`,title:"Enums",level:2,content:`## Enums

::rubytype::

\`String\`

::ruby::

\`\`\`ruby
# In migration (Rails 7+):
create_enum :status, ["draft", "published", "archived", "trashed"]
change_table :posts do |t|
  t.enum :status, enum_type: "status", default: "draft", null: false
end

# In the application code:
class Article < ApplicationRecord
  enum :status, { draft: "draft", published: "published", archived: "archived", trashed: "trashed" }
end

Article.last.status #=> "draft"
Article.last.draft? #=> true
Article.last.published!
# UPDATE articles SET status = 'published' WHERE id = \u2026
\`\`\`

::pgtype::

Custom enum types

4 bytes

::postgresql::

\`\`\`sql
CREATE TYPE status AS ENUM ('draft', 'published', 'archived', 'trashed');
ALTER TABLE posts ADD COLUMN "status" status NOT NULL DEFAULT 'draft';

INSERT INTO posts (status) VALUES ('published');
INSERT INTO posts (status) VALUES ('draft');

SELECT id, status FROM posts;

 id |   status
----+------------
  2 | draft
  1 | published
\`\`\`

Values are human-readable in SQL

::footnote_ruby::

On Rails < 7 you can use [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) gem

::footnote_pg::

See [8.7 Enumerated Types](https://www.postgresql.org/docs/14/datatype-enum.html) page in PostgreSQL docs`,frontmatter:{layout:"comparison"},note:`\u5217\u6319\u578B\u307E\u305F\u306Fenum\u306F\u3001\u4FDD\u5B58\u306B\u306F\u30B3\u30F3\u30D1\u30AF\u30C8\u3067\u3001\uFF14\u30D0\u30A4\u30C8\u3060\u3051\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u3057\u3066SQL\u3082Ruby\u3082\u4EBA\u9593\u304C\u8AAD\u3081\u308B\u30E9\u30D9\u30EB\u3092\u4F7F\u3063\u3066\u3044\u3066\u3001\u4FBF\u5229\u3067\u3059\u3002

\u666E\u6BB5\u3001\u591A\u304F\u306E\u30E2\u30C7\u30EB\u306F\u30B9\u30C6\u30FC\u30BF\u30B9\u3084\u30BF\u30A4\u30D7\u3084\u30BD\u30FC\u30B9\u306A\u3069\u306E\u5217\u304C\u3042\u3063\u3066\u3001\u3053\u306E\u69D8\u306A\u30B1\u30FC\u30B9\u3067\u306F\u5217\u6319\u578B\u3092\u4F7F\u3063\u305F\u4FA1\u5024\u304C\u3042\u308B\u3068\u601D\u3044\u307E\u3059\u3002Rails\u306F\u3001\u305D\u306E\u4E0A\u306B\u4FBF\u5229\u306A\u8FF0\u8A9E\u30E1\u30BD\u30C3\u30C9\u3084\u30BB\u30C3\u30BF\u30FC\u30E1\u30BD\u30C3\u30C9\u306E\u3042\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u8FFD\u52A0\u3057\u3066\u3044\u307E\u3059\u3002

\u4EE5\u524D\u3001enum\u3068\u3057\u3066integer\u3092\u4F7F\u3046\u6163\u884C\u304C\u3042\u308A\u307E\u3057\u305F\u3002\u3067\u3082\u305D\u306E\u5834\u5408\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65B9\u304B\u3089\u898B\u308C\u3070\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u306F\u305F\u3060\u306E\u6570\u5B57\u3067\u3059\u3002\u751F\u306ESQL\u30AF\u30A8\u30EA\u3092\u66F8\u304F\u3068\u3051\u3063\u3053\u3046\u4E0D\u4FBF\u306B\u306A\u308A\u307E\u3059\u3002`,index:36,start:1484,end:1555,notesHTML:`<p>\u5217\u6319\u578B\u307E\u305F\u306Fenum\u306F\u3001\u4FDD\u5B58\u306B\u306F\u30B3\u30F3\u30D1\u30AF\u30C8\u3067\u3001\uFF14\u30D0\u30A4\u30C8\u3060\u3051\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u3057\u3066SQL\u3082Ruby\u3082\u4EBA\u9593\u304C\u8AAD\u3081\u308B\u30E9\u30D9\u30EB\u3092\u4F7F\u3063\u3066\u3044\u3066\u3001\u4FBF\u5229\u3067\u3059\u3002</p>
<p>\u666E\u6BB5\u3001\u591A\u304F\u306E\u30E2\u30C7\u30EB\u306F\u30B9\u30C6\u30FC\u30BF\u30B9\u3084\u30BF\u30A4\u30D7\u3084\u30BD\u30FC\u30B9\u306A\u3069\u306E\u5217\u304C\u3042\u3063\u3066\u3001\u3053\u306E\u69D8\u306A\u30B1\u30FC\u30B9\u3067\u306F\u5217\u6319\u578B\u3092\u4F7F\u3063\u305F\u4FA1\u5024\u304C\u3042\u308B\u3068\u601D\u3044\u307E\u3059\u3002Rails\u306F\u3001\u305D\u306E\u4E0A\u306B\u4FBF\u5229\u306A\u8FF0\u8A9E\u30E1\u30BD\u30C3\u30C9\u3084\u30BB\u30C3\u30BF\u30FC\u30E1\u30BD\u30C3\u30C9\u306E\u3042\u308B\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9\u3092\u8FFD\u52A0\u3057\u3066\u3044\u307E\u3059\u3002</p>
<p>\u4EE5\u524D\u3001enum\u3068\u3057\u3066integer\u3092\u4F7F\u3046\u6163\u884C\u304C\u3042\u308A\u307E\u3057\u305F\u3002\u3067\u3082\u305D\u306E\u5834\u5408\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u65B9\u304B\u3089\u898B\u308C\u3070\u3001\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u5185\u5BB9\u306F\u305F\u3060\u306E\u6570\u5B57\u3067\u3059\u3002\u751F\u306ESQL\u30AF\u30A8\u30EA\u3092\u66F8\u304F\u3068\u3051\u3063\u3053\u3046\u4E0D\u4FBF\u306B\u306A\u308A\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:$7,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

# Inside ActiveRecord

How datatypes are working under the hood

<!--
\u3067\u3082\u3001\u5177\u4F53\u7684\u3001ActiveRecord\u306F\u3069\u3046\u3084\u3063\u3066\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u578B\u3092PostgreSQL\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3057\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\uFF1F
-->
`,title:"Inside ActiveRecord",level:1,content:`# Inside ActiveRecord

How datatypes are working under the hood`,frontmatter:{layout:"cover"},note:"\u3067\u3082\u3001\u5177\u4F53\u7684\u3001ActiveRecord\u306F\u3069\u3046\u3084\u3063\u3066\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u578B\u3092PostgreSQL\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3057\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\uFF1F",index:37,start:1555,end:1567,notesHTML:`<p>\u3067\u3082\u3001\u5177\u4F53\u7684\u3001ActiveRecord\u306F\u3069\u3046\u3084\u3063\u3066\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u578B\u3092PostgreSQL\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u308A\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3093\u3060\u308A\u3057\u3066\u3044\u308B\u306E\u3067\u3057\u3087\u3046\u304B\uFF1F</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Q7,meta:{slide:{raw:`
## Example of composite type use case

<div class="my-8"></div>

What if we want to:

 1. Store products with prices in different currencies in one table

 2. Work with price and currency as a whole

    There is a great [money](https://github.com/RubyMoney/money) gem in Ruby, but how to do it in SQL?

 3. And do some calculations without having to write complex SQL queries with joins.

<div class="grid grid-cols-2 gap-2">
<div>

Before:

\`\`\`ruby
User (string currency)
has many
Product (numeric price)
\`\`\`

</div>
<div>

After:

\`\`\`ruby
User (string currency) # only as a setting!
has many
Product (true_money price (string+numeric))
\`\`\`

</div>
</div>

<!--
PostgreSQL\u306B\u306F\u6CA2\u5C71\u306E\u3044\u308D\u3044\u308D\u306A\u30C7\u30FC\u30BF\u578B\u304C\u3042\u3063\u3066\u3082\u3001\u6642\u3005\u8DB3\u308A\u306A\u3044\u3093\u3067\u3059\u3002

\u4F8B\u3048\u3070\u3001\u524D\u306BPostgreSQL\u306B\u3042\u308B\u30DE\u30CD\u30FC\u306E\u30C7\u30FC\u30BF\u578B\u306B\u3064\u3044\u3066\u8A71\u3057\u305F\u3068\u304D\u3001\u3053\u308C\u304C\u4E0D\u4FBF\u3067\u3001\u3044\u308D\u3044\u308D\u306A\u901A\u8CA8\u3001\u30AB\u30EC\u30F3\u30B7\u30FC\u3092\u4F7F\u3048\u306A\u3044\u3068\u3044\u3044\u307E\u3057\u305F\u3002\u3053\u306E\u5834\u5408\u306B\u306F\u8907\u5408\u578B\u3092\u4F7F\u3063\u3066\u3001\u3042\u305F\u3089\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002

\u4F8B\u3092\u3042\u3052\u307E\u3059\u3002\u554F\u984C\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u591A\u304F\u306E\u901A\u8CA8\u304C\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u81EA\u5206\u306E\u30D7\u30ED\u30D5\u30A3\u30EB\u3067\u306F\u597D\u304D\u306A\u30AB\u30EC\u30F3\u30B7\u30FC\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u5546\u54C1\u306E\u4FA1\u683C\u3092\u3053\u306E\u30AB\u30EC\u30F3\u30B7\u30FC\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5546\u54C1\u306E\u5024\u6BB5\u3092\u5206\u304B\u308B\u305F\u3081\u306B\u30E6\u30FC\u30B6\u30FC\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u5546\u54C1\u306E\u30C6\u30FC\u30D6\u30EB\u3068JOIN\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3093\u3067\u3059\u3002\u4E0D\u4FBF\u3067\u3059\u304C\u3001\u305D\u3093\u306A\u306B\u554F\u984C\u306A\u3044\u3067\u3059\u306D\u3002

\u3067\u3082\u30E6\u30FC\u30B6\u30FC\u304C\u901A\u8CA8\u3092\u5909\u3048\u305F\u3044\u3068\u304D\u306B\u554F\u984C\u306B\u306A\u308A\u307E\u3059\u3002\u5168\u5546\u54C1\u306E\u5024\u6BB5\u3092\u63DB\u7B97\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3093\u3067\u3059\u3002\u305D\u3057\u3066\u3001\u30A2\u30D7\u30EA\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306B\u3088\u3063\u3066\u3001\u4E00\u3064\u306ESQL\u30AF\u30A8\u30EA\u30FC\u3092\u4F7F\u3063\u3066\u4E00\u5EA6\u3067\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3067\u304D\u306A\u3044\u30B1\u30FC\u30B9\u3082\u3042\u308A\u307E\u3059\u3002\u3058\u3083\u3041\u3001\u3053\u308C\u3092\u89E3\u6C7A\u305F\u3081\u306B\u30AB\u30EC\u30F3\u30B7\u30FC\u306E\u60C5\u5831\u3092\u5546\u54C1\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3001\u4E00\u3064\u305A\u3064\u63DB\u7B97\u3057\u307E\u3059\u3002

\u3053\u3046\u3044\u3046\u3068\u3001\u304A\u91D1\u306F\u3001\u5B9F\u969B\u3001\u6570\u5B57\u3060\u3051\u3067\u306F\u306A\u304F\u3066\u3001\u901A\u8CA8\u306E\u60C5\u5831\u3068\u3068\u3082\u306B\u4E00\u4F53\u306E\u3082\u306E\u3067\u3042\u308B\u306F\u305A\u3060\u3068\u601D\u3048\u307E\u305B\u3093\u304B\uFF1F

\u3053\u306E\u69D8\u306A\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u3063\u3066\u307F\u307E\u3057\u3087\u3046\uFF01
-->
`,title:"Example of composite type use case",level:2,content:`## Example of composite type use case

<div class="my-8"></div>

What if we want to:

 1. Store products with prices in different currencies in one table

 2. Work with price and currency as a whole

    There is a great [money](https://github.com/RubyMoney/money) gem in Ruby, but how to do it in SQL?

 3. And do some calculations without having to write complex SQL queries with joins.

<div class="grid grid-cols-2 gap-2">
<div>

Before:

\`\`\`ruby
User (string currency)
has many
Product (numeric price)
\`\`\`

</div>
<div>

After:

\`\`\`ruby
User (string currency) # only as a setting!
has many
Product (true_money price (string+numeric))
\`\`\`

</div>
</div>`,frontmatter:{},note:`PostgreSQL\u306B\u306F\u6CA2\u5C71\u306E\u3044\u308D\u3044\u308D\u306A\u30C7\u30FC\u30BF\u578B\u304C\u3042\u3063\u3066\u3082\u3001\u6642\u3005\u8DB3\u308A\u306A\u3044\u3093\u3067\u3059\u3002

\u4F8B\u3048\u3070\u3001\u524D\u306BPostgreSQL\u306B\u3042\u308B\u30DE\u30CD\u30FC\u306E\u30C7\u30FC\u30BF\u578B\u306B\u3064\u3044\u3066\u8A71\u3057\u305F\u3068\u304D\u3001\u3053\u308C\u304C\u4E0D\u4FBF\u3067\u3001\u3044\u308D\u3044\u308D\u306A\u901A\u8CA8\u3001\u30AB\u30EC\u30F3\u30B7\u30FC\u3092\u4F7F\u3048\u306A\u3044\u3068\u3044\u3044\u307E\u3057\u305F\u3002\u3053\u306E\u5834\u5408\u306B\u306F\u8907\u5408\u578B\u3092\u4F7F\u3063\u3066\u3001\u3042\u305F\u3089\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002

\u4F8B\u3092\u3042\u3052\u307E\u3059\u3002\u554F\u984C\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u591A\u304F\u306E\u901A\u8CA8\u304C\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u81EA\u5206\u306E\u30D7\u30ED\u30D5\u30A3\u30EB\u3067\u306F\u597D\u304D\u306A\u30AB\u30EC\u30F3\u30B7\u30FC\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u5546\u54C1\u306E\u4FA1\u683C\u3092\u3053\u306E\u30AB\u30EC\u30F3\u30B7\u30FC\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5546\u54C1\u306E\u5024\u6BB5\u3092\u5206\u304B\u308B\u305F\u3081\u306B\u30E6\u30FC\u30B6\u30FC\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u5546\u54C1\u306E\u30C6\u30FC\u30D6\u30EB\u3068JOIN\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3093\u3067\u3059\u3002\u4E0D\u4FBF\u3067\u3059\u304C\u3001\u305D\u3093\u306A\u306B\u554F\u984C\u306A\u3044\u3067\u3059\u306D\u3002

\u3067\u3082\u30E6\u30FC\u30B6\u30FC\u304C\u901A\u8CA8\u3092\u5909\u3048\u305F\u3044\u3068\u304D\u306B\u554F\u984C\u306B\u306A\u308A\u307E\u3059\u3002\u5168\u5546\u54C1\u306E\u5024\u6BB5\u3092\u63DB\u7B97\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3093\u3067\u3059\u3002\u305D\u3057\u3066\u3001\u30A2\u30D7\u30EA\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306B\u3088\u3063\u3066\u3001\u4E00\u3064\u306ESQL\u30AF\u30A8\u30EA\u30FC\u3092\u4F7F\u3063\u3066\u4E00\u5EA6\u3067\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3067\u304D\u306A\u3044\u30B1\u30FC\u30B9\u3082\u3042\u308A\u307E\u3059\u3002\u3058\u3083\u3041\u3001\u3053\u308C\u3092\u89E3\u6C7A\u305F\u3081\u306B\u30AB\u30EC\u30F3\u30B7\u30FC\u306E\u60C5\u5831\u3092\u5546\u54C1\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3001\u4E00\u3064\u305A\u3064\u63DB\u7B97\u3057\u307E\u3059\u3002

\u3053\u3046\u3044\u3046\u3068\u3001\u304A\u91D1\u306F\u3001\u5B9F\u969B\u3001\u6570\u5B57\u3060\u3051\u3067\u306F\u306A\u304F\u3066\u3001\u901A\u8CA8\u306E\u60C5\u5831\u3068\u3068\u3082\u306B\u4E00\u4F53\u306E\u3082\u306E\u3067\u3042\u308B\u306F\u305A\u3060\u3068\u601D\u3048\u307E\u305B\u3093\u304B\uFF1F

\u3053\u306E\u69D8\u306A\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u3063\u3066\u307F\u307E\u3057\u3087\u3046\uFF01`,index:38,start:1568,end:1622,notesHTML:`<p>PostgreSQL\u306B\u306F\u6CA2\u5C71\u306E\u3044\u308D\u3044\u308D\u306A\u30C7\u30FC\u30BF\u578B\u304C\u3042\u3063\u3066\u3082\u3001\u6642\u3005\u8DB3\u308A\u306A\u3044\u3093\u3067\u3059\u3002</p>
<p>\u4F8B\u3048\u3070\u3001\u524D\u306BPostgreSQL\u306B\u3042\u308B\u30DE\u30CD\u30FC\u306E\u30C7\u30FC\u30BF\u578B\u306B\u3064\u3044\u3066\u8A71\u3057\u305F\u3068\u304D\u3001\u3053\u308C\u304C\u4E0D\u4FBF\u3067\u3001\u3044\u308D\u3044\u308D\u306A\u901A\u8CA8\u3001\u30AB\u30EC\u30F3\u30B7\u30FC\u3092\u4F7F\u3048\u306A\u3044\u3068\u3044\u3044\u307E\u3057\u305F\u3002\u3053\u306E\u5834\u5408\u306B\u306F\u8907\u5408\u578B\u3092\u4F7F\u3063\u3066\u3001\u3042\u305F\u3089\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p>
<p>\u4F8B\u3092\u3042\u3052\u307E\u3059\u3002\u554F\u984C\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306B\u591A\u304F\u306E\u901A\u8CA8\u304C\u3042\u308A\u3001\u30E6\u30FC\u30B6\u30FC\u304C\u81EA\u5206\u306E\u30D7\u30ED\u30D5\u30A3\u30EB\u3067\u306F\u597D\u304D\u306A\u30AB\u30EC\u30F3\u30B7\u30FC\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u5546\u54C1\u306E\u4FA1\u683C\u3092\u3053\u306E\u30AB\u30EC\u30F3\u30B7\u30FC\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5546\u54C1\u306E\u5024\u6BB5\u3092\u5206\u304B\u308B\u305F\u3081\u306B\u30E6\u30FC\u30B6\u30FC\u306E\u30C6\u30FC\u30D6\u30EB\u3092\u5546\u54C1\u306E\u30C6\u30FC\u30D6\u30EB\u3068JOIN\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3093\u3067\u3059\u3002\u4E0D\u4FBF\u3067\u3059\u304C\u3001\u305D\u3093\u306A\u306B\u554F\u984C\u306A\u3044\u3067\u3059\u306D\u3002</p>
<p>\u3067\u3082\u30E6\u30FC\u30B6\u30FC\u304C\u901A\u8CA8\u3092\u5909\u3048\u305F\u3044\u3068\u304D\u306B\u554F\u984C\u306B\u306A\u308A\u307E\u3059\u3002\u5168\u5546\u54C1\u306E\u5024\u6BB5\u3092\u63DB\u7B97\u3057\u306A\u3051\u308C\u3070\u306A\u3089\u306A\u3044\u3093\u3067\u3059\u3002\u305D\u3057\u3066\u3001\u30A2\u30D7\u30EA\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306B\u3088\u3063\u3066\u3001\u4E00\u3064\u306ESQL\u30AF\u30A8\u30EA\u30FC\u3092\u4F7F\u3063\u3066\u4E00\u5EA6\u3067\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3067\u304D\u306A\u3044\u30B1\u30FC\u30B9\u3082\u3042\u308A\u307E\u3059\u3002\u3058\u3083\u3041\u3001\u3053\u308C\u3092\u89E3\u6C7A\u305F\u3081\u306B\u30AB\u30EC\u30F3\u30B7\u30FC\u306E\u60C5\u5831\u3092\u5546\u54C1\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u30B3\u30D4\u30FC\u3057\u3066\u3001\u4E00\u3064\u305A\u3064\u63DB\u7B97\u3057\u307E\u3059\u3002</p>
<p>\u3053\u3046\u3044\u3046\u3068\u3001\u304A\u91D1\u306F\u3001\u5B9F\u969B\u3001\u6570\u5B57\u3060\u3051\u3067\u306F\u306A\u304F\u3066\u3001\u901A\u8CA8\u306E\u60C5\u5831\u3068\u3068\u3082\u306B\u4E00\u4F53\u306E\u3082\u306E\u3067\u3042\u308B\u306F\u305A\u3060\u3068\u601D\u3048\u307E\u305B\u3093\u304B\uFF1F</p>
<p>\u3053\u306E\u69D8\u306A\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u3063\u3066\u307F\u307E\u3057\u3087\u3046\uFF01</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:G7,meta:{slide:{raw:`
## Create custom datatype

Declare composite datatype in the database:

\`\`\`sql {all|1-4|6-13}
CREATE TYPE _true_money AS (
  currency varchar,
  amount numeric
);

-- type with constraints to allow:
-- - either NULL value (no price, can be forbidden by NOT NULL)
-- - or value with both currency and amount specified
CREATE DOMAIN true_money AS _true_money CHECK (
  value IS NULL AND
  value IS DISTINCT FROM (null, null)::_true_money OR
  ((value).currency IS NOT NULL AND (value).amount IS NOT NULL)
);
\`\`\`

<!--
\u8907\u5408\u578B\u3092\u4F5C\u308B\u305F\u3081\u306B\u300CCREATE TYPE\u300D\u3068\u3044\u3046\u30B3\u30DE\u30F3\u30C9\u304C\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002

\u6700\u521D\u306B\u901A\u8CA8\u306E\u60C5\u5831\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u91CD\u8981\u3067\u3059\u3002\u30B0\u30EB\u30FC\u30D7\u5316\u3068\u4E26\u3079\u66FF\u3048\u3067\u306F\u3001\u30B3\u30E9\u30E0\u306E\u9806\u5E8F\u3067\u5024\u304C\u4E26\u3079\u66FF\u3048\u3089\u308C\u308B\u305F\u3081\u3067\u3059\u3002\u7570\u306A\u308B\u901A\u8CA8\u306E\u4FA1\u683C\u3092\u4E92\u3044\u306B\u6BD4\u8F03\u3059\u308B\u3053\u3068\u306F\u5B9F\u969B\u306B\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u4FA1\u683C\u3092\u901A\u8CA8\u3067\u30B0\u30EB\u30FC\u30D7\u5316\u3057\u3066\u304B\u3089\u3001\u5404\u901A\u8CA8\u4EE5\u5185\u306B\u4FA1\u683C\u3092\u4E26\u3079\u66FF\u3048\u308B\u306E\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u4F5C\u6210\u306E\u305F\u3081\u306B\u91CD\u8981\u3067\u3059\u3002

\u305D\u308C\u304B\u3089\u8907\u5408\u578B\u306B\u5236\u7D04\u306F\u8FFD\u52A0\u3067\u304D\u306A\u3044\u306E\u3067\u3001\u30BF\u30A4\u30D7\u81EA\u8EAB\u306F\u305D\u3093\u306A\u306B\u5F79\u306B\u7ACB\u305F\u306A\u3044\u3082\u306E\u3067\u3059\u3002\u3053\u306E\u8907\u5408\u578B\u3092\u542B\u3080\u30C9\u30E1\u30A4\u30F3\u3092\u4F5C\u6210\u3057\u3066\u3001\u3053\u308C\u306BCHECK\u3092\u8FFD\u52A0\u3059\u308B\u3068\u5F79\u306B\u7ACB\u3061\u307E\u3059\u3002
-->
`,title:"Create custom datatype",level:2,content:`## Create custom datatype

Declare composite datatype in the database:

\`\`\`sql {all|1-4|6-13}
CREATE TYPE _true_money AS (
  currency varchar,
  amount numeric
);

-- type with constraints to allow:
-- - either NULL value (no price, can be forbidden by NOT NULL)
-- - or value with both currency and amount specified
CREATE DOMAIN true_money AS _true_money CHECK (
  value IS NULL AND
  value IS DISTINCT FROM (null, null)::_true_money OR
  ((value).currency IS NOT NULL AND (value).amount IS NOT NULL)
);
\`\`\``,frontmatter:{},note:`\u8907\u5408\u578B\u3092\u4F5C\u308B\u305F\u3081\u306B\u300CCREATE TYPE\u300D\u3068\u3044\u3046\u30B3\u30DE\u30F3\u30C9\u304C\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002

\u6700\u521D\u306B\u901A\u8CA8\u306E\u60C5\u5831\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u91CD\u8981\u3067\u3059\u3002\u30B0\u30EB\u30FC\u30D7\u5316\u3068\u4E26\u3079\u66FF\u3048\u3067\u306F\u3001\u30B3\u30E9\u30E0\u306E\u9806\u5E8F\u3067\u5024\u304C\u4E26\u3079\u66FF\u3048\u3089\u308C\u308B\u305F\u3081\u3067\u3059\u3002\u7570\u306A\u308B\u901A\u8CA8\u306E\u4FA1\u683C\u3092\u4E92\u3044\u306B\u6BD4\u8F03\u3059\u308B\u3053\u3068\u306F\u5B9F\u969B\u306B\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u4FA1\u683C\u3092\u901A\u8CA8\u3067\u30B0\u30EB\u30FC\u30D7\u5316\u3057\u3066\u304B\u3089\u3001\u5404\u901A\u8CA8\u4EE5\u5185\u306B\u4FA1\u683C\u3092\u4E26\u3079\u66FF\u3048\u308B\u306E\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u4F5C\u6210\u306E\u305F\u3081\u306B\u91CD\u8981\u3067\u3059\u3002

\u305D\u308C\u304B\u3089\u8907\u5408\u578B\u306B\u5236\u7D04\u306F\u8FFD\u52A0\u3067\u304D\u306A\u3044\u306E\u3067\u3001\u30BF\u30A4\u30D7\u81EA\u8EAB\u306F\u305D\u3093\u306A\u306B\u5F79\u306B\u7ACB\u305F\u306A\u3044\u3082\u306E\u3067\u3059\u3002\u3053\u306E\u8907\u5408\u578B\u3092\u542B\u3080\u30C9\u30E1\u30A4\u30F3\u3092\u4F5C\u6210\u3057\u3066\u3001\u3053\u308C\u306BCHECK\u3092\u8FFD\u52A0\u3059\u308B\u3068\u5F79\u306B\u7ACB\u3061\u307E\u3059\u3002`,index:39,start:1623,end:1652,notesHTML:`<p>\u8907\u5408\u578B\u3092\u4F5C\u308B\u305F\u3081\u306B\u300CCREATE TYPE\u300D\u3068\u3044\u3046\u30B3\u30DE\u30F3\u30C9\u304C\u4F7F\u308F\u308C\u3066\u3044\u307E\u3059\u3002</p>
<p>\u6700\u521D\u306B\u901A\u8CA8\u306E\u60C5\u5831\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u91CD\u8981\u3067\u3059\u3002\u30B0\u30EB\u30FC\u30D7\u5316\u3068\u4E26\u3079\u66FF\u3048\u3067\u306F\u3001\u30B3\u30E9\u30E0\u306E\u9806\u5E8F\u3067\u5024\u304C\u4E26\u3079\u66FF\u3048\u3089\u308C\u308B\u305F\u3081\u3067\u3059\u3002\u7570\u306A\u308B\u901A\u8CA8\u306E\u4FA1\u683C\u3092\u4E92\u3044\u306B\u6BD4\u8F03\u3059\u308B\u3053\u3068\u306F\u5B9F\u969B\u306B\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u4FA1\u683C\u3092\u901A\u8CA8\u3067\u30B0\u30EB\u30FC\u30D7\u5316\u3057\u3066\u304B\u3089\u3001\u5404\u901A\u8CA8\u4EE5\u5185\u306B\u4FA1\u683C\u3092\u4E26\u3079\u66FF\u3048\u308B\u306E\u306F\u610F\u5473\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u306E\u4F5C\u6210\u306E\u305F\u3081\u306B\u91CD\u8981\u3067\u3059\u3002</p>
<p>\u305D\u308C\u304B\u3089\u8907\u5408\u578B\u306B\u5236\u7D04\u306F\u8FFD\u52A0\u3067\u304D\u306A\u3044\u306E\u3067\u3001\u30BF\u30A4\u30D7\u81EA\u8EAB\u306F\u305D\u3093\u306A\u306B\u5F79\u306B\u7ACB\u305F\u306A\u3044\u3082\u306E\u3067\u3059\u3002\u3053\u306E\u8907\u5408\u578B\u3092\u542B\u3080\u30C9\u30E1\u30A4\u30F3\u3092\u4F5C\u6210\u3057\u3066\u3001\u3053\u308C\u306BCHECK\u3092\u8FFD\u52A0\u3059\u308B\u3068\u5F79\u306B\u7ACB\u3061\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:t9,meta:{slide:{raw:`
## Fun fact about composite datatypes

Every table defines own datatype which can be used elsewhere

\`\`\`sql
CREATE TABLE "inner" ( v1 integer, v2 text );
CREATE TABLE "outer" (v inner);

INSERT INTO "outer" (v) VALUES ((42,'Hello world!'));
SELECT * FROM "outer";
         v
-------------------
(42,"Hello world!")
\`\`\`

<img src="https://i.imgflip.com/6w9gip.jpg" alt="Yo dawg I heard you like table composite types, so I put a table in your table so you can insert rows while you inserting rows" class="w-330px float-right mt-4" />

But don't use it in reality, please!

(There are limitations)

<!--
\u8907\u5408\u578B\u3092\u4F5C\u308B\u305F\u3081\u306B\u300CCREATE TYPE\u300D\u3068\u3044\u3046\u30B3\u30DE\u30F3\u30C9\u306F\u300CCREATE TABLE\u300D\u306B\u3059\u3054\u304F\u4F3C\u3066\u3044\u307E\u3059\u3002\u5B9F\u306F\u3001\u5404\u30C6\u30FC\u30D6\u30EB\u306F\u5225\u306A\u8907\u5408\u578B\u304C\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u3068\u3044\u3046\u3053\u3068\u3067\u3001\u4E00\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u4ED6\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u8907\u5408\u578B\u306E\u5217\u3092\u8FFD\u52A0\u3067\u304D\u3001\u4E2D\u306B\u884C\u5168\u4F53\u3092\u633F\u5165\u3067\u304D\u307E\u3059\u3002

\u3067\u3082\u3001production\u3067\u306F\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002
-->
`,title:"Fun fact about composite datatypes",level:2,content:`## Fun fact about composite datatypes

Every table defines own datatype which can be used elsewhere

\`\`\`sql
CREATE TABLE "inner" ( v1 integer, v2 text );
CREATE TABLE "outer" (v inner);

INSERT INTO "outer" (v) VALUES ((42,'Hello world!'));
SELECT * FROM "outer";
         v
-------------------
(42,"Hello world!")
\`\`\`

<img src="https://i.imgflip.com/6w9gip.jpg" alt="Yo dawg I heard you like table composite types, so I put a table in your table so you can insert rows while you inserting rows" class="w-330px float-right mt-4" />

But don't use it in reality, please!

(There are limitations)`,frontmatter:{},note:`\u8907\u5408\u578B\u3092\u4F5C\u308B\u305F\u3081\u306B\u300CCREATE TYPE\u300D\u3068\u3044\u3046\u30B3\u30DE\u30F3\u30C9\u306F\u300CCREATE TABLE\u300D\u306B\u3059\u3054\u304F\u4F3C\u3066\u3044\u307E\u3059\u3002\u5B9F\u306F\u3001\u5404\u30C6\u30FC\u30D6\u30EB\u306F\u5225\u306A\u8907\u5408\u578B\u304C\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u3068\u3044\u3046\u3053\u3068\u3067\u3001\u4E00\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u4ED6\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u8907\u5408\u578B\u306E\u5217\u3092\u8FFD\u52A0\u3067\u304D\u3001\u4E2D\u306B\u884C\u5168\u4F53\u3092\u633F\u5165\u3067\u304D\u307E\u3059\u3002

\u3067\u3082\u3001production\u3067\u306F\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002`,index:40,start:1653,end:1681,notesHTML:`<p>\u8907\u5408\u578B\u3092\u4F5C\u308B\u305F\u3081\u306B\u300CCREATE TYPE\u300D\u3068\u3044\u3046\u30B3\u30DE\u30F3\u30C9\u306F\u300CCREATE TABLE\u300D\u306B\u3059\u3054\u304F\u4F3C\u3066\u3044\u307E\u3059\u3002\u5B9F\u306F\u3001\u5404\u30C6\u30FC\u30D6\u30EB\u306F\u5225\u306A\u8907\u5408\u578B\u304C\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u3068\u3044\u3046\u3053\u3068\u3067\u3001\u4E00\u3064\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u4ED6\u306E\u30C6\u30FC\u30D6\u30EB\u306E\u8907\u5408\u578B\u306E\u5217\u3092\u8FFD\u52A0\u3067\u304D\u3001\u4E2D\u306B\u884C\u5168\u4F53\u3092\u633F\u5165\u3067\u304D\u307E\u3059\u3002</p>
<p>\u3067\u3082\u3001production\u3067\u306F\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:a9,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

## Use composite datatype

<div class="my-14"></div>

\`\`\`sql{all|1|3-4|6|8-12}
ALTER TABLE tests ADD COLUMN price true_money;

INSERT INTO tests (price) VALUES (('JPY',10000.0));
INSERT INTO tests (price) VALUES ('("JPY",100.0)');

SELECT price FROM tests; -- (JPY,10000.0),(JPY,100.0)

SELECT (price).currency, (price).amount FROM tests;
 currency | amount
----------+---------
 JPY      | 10000.0
 JPY      |   100.0

\`\`\`

::footnote::

See [8.16. Composite Types](https://www.postgresql.org/docs/14/rowtypes.html) in PostgreSQL docs for more advices and caveats.

<!--
\u8907\u5408\u578B\u3092\u4F5C\u3063\u305F\u5F8C\u3067\u3001\u666E\u901A\u306E\u30C7\u30FC\u30BF\u578B\u306E\u3088\u3046\u306B\u30C6\u30FC\u30D6\u30EB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002

\u8907\u5408\u578B\u3092\u66F8\u304D\u8FBC\u3080\u3068\u304D\u62EC\u5F27\u304C\u5FC5\u8981\u3067\u3001\u6587\u5B57\u5217\u3092\u5F15\u7528\u7B26\u3067\u56F2\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002

\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306F\u5024\u304C\u62EC\u5F27\u3067\u56F2\u307E\u308C\u3066\u8FD4\u5374\u3057\u307E\u3059\u3002

\u5FC5\u8981\u304C\u3042\u308C\u3070\u3001\u30C7\u30FC\u30BF\u578B\u5185\u306E\u5404\u5217\u3092\u30A2\u30AF\u30BB\u30B9\u3082\u3067\u304D\u307E\u3059\u306D\u3002
-->
`,title:"Use composite datatype",level:2,content:`## Use composite datatype

<div class="my-14"></div>

\`\`\`sql{all|1|3-4|6|8-12}
ALTER TABLE tests ADD COLUMN price true_money;

INSERT INTO tests (price) VALUES (('JPY',10000.0));
INSERT INTO tests (price) VALUES ('("JPY",100.0)');

SELECT price FROM tests; -- (JPY,10000.0),(JPY,100.0)

SELECT (price).currency, (price).amount FROM tests;
 currency | amount
----------+---------
 JPY      | 10000.0
 JPY      |   100.0

\`\`\`

::footnote::

See [8.16. Composite Types](https://www.postgresql.org/docs/14/rowtypes.html) in PostgreSQL docs for more advices and caveats.`,frontmatter:{layout:"footnote"},note:`\u8907\u5408\u578B\u3092\u4F5C\u3063\u305F\u5F8C\u3067\u3001\u666E\u901A\u306E\u30C7\u30FC\u30BF\u578B\u306E\u3088\u3046\u306B\u30C6\u30FC\u30D6\u30EB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002

\u8907\u5408\u578B\u3092\u66F8\u304D\u8FBC\u3080\u3068\u304D\u62EC\u5F27\u304C\u5FC5\u8981\u3067\u3001\u6587\u5B57\u5217\u3092\u5F15\u7528\u7B26\u3067\u56F2\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002

\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306F\u5024\u304C\u62EC\u5F27\u3067\u56F2\u307E\u308C\u3066\u8FD4\u5374\u3057\u307E\u3059\u3002

\u5FC5\u8981\u304C\u3042\u308C\u3070\u3001\u30C7\u30FC\u30BF\u578B\u5185\u306E\u5404\u5217\u3092\u30A2\u30AF\u30BB\u30B9\u3082\u3067\u304D\u307E\u3059\u306D\u3002`,index:41,start:1681,end:1719,notesHTML:`<p>\u8907\u5408\u578B\u3092\u4F5C\u3063\u305F\u5F8C\u3067\u3001\u666E\u901A\u306E\u30C7\u30FC\u30BF\u578B\u306E\u3088\u3046\u306B\u30C6\u30FC\u30D6\u30EB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002</p>
<p>\u8907\u5408\u578B\u3092\u66F8\u304D\u8FBC\u3080\u3068\u304D\u62EC\u5F27\u304C\u5FC5\u8981\u3067\u3001\u6587\u5B57\u5217\u3092\u5F15\u7528\u7B26\u3067\u56F2\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p>
<p>\u8AAD\u307F\u8FBC\u3080\u3068\u304D\u306F\u5024\u304C\u62EC\u5F27\u3067\u56F2\u307E\u308C\u3066\u8FD4\u5374\u3057\u307E\u3059\u3002</p>
<p>\u5FC5\u8981\u304C\u3042\u308C\u3070\u3001\u30C7\u30FC\u30BF\u578B\u5185\u306E\u5404\u5217\u3092\u30A2\u30AF\u30BB\u30B9\u3082\u3067\u304D\u307E\u3059\u306D\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:u9,meta:{slide:{raw:`
## Declare it in ActiveRecord

<div class="my-14"></div>

\`\`\`ruby
module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID
        class TrueMoney < Type::Value
          def type
            :true_money
          end

          # Here will be (de)serialization code
        end
      end
    end
  end
end
\`\`\`

<!--
\u3088\u3057\u3001SQL\u306E\u65B9\u306F\u4EE5\u4E0A\u3067\u3059\u3002ActiveRecord\u306E\u65B9\u304B\u3089\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002

\u307E\u305A\u3001PostgreSQL\u306E\u30B3\u30CD\u30AF\u30B7\u30E7\u30F3\u30FB\u30A2\u30C0\u30D7\u30BF\u30FC\u3067\u30C7\u30FC\u30BF\u578B\u3092\u5BA3\u8A00\u3057\u307E\u3057\u3087\u3046\u3002
-->
`,title:"Declare it in ActiveRecord",level:2,content:`## Declare it in ActiveRecord

<div class="my-14"></div>

\`\`\`ruby
module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID
        class TrueMoney < Type::Value
          def type
            :true_money
          end

          # Here will be (de)serialization code
        end
      end
    end
  end
end
\`\`\``,frontmatter:{},note:`\u3088\u3057\u3001SQL\u306E\u65B9\u306F\u4EE5\u4E0A\u3067\u3059\u3002ActiveRecord\u306E\u65B9\u304B\u3089\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002

\u307E\u305A\u3001PostgreSQL\u306E\u30B3\u30CD\u30AF\u30B7\u30E7\u30F3\u30FB\u30A2\u30C0\u30D7\u30BF\u30FC\u3067\u30C7\u30FC\u30BF\u578B\u3092\u5BA3\u8A00\u3057\u307E\u3057\u3087\u3046\u3002`,index:42,start:1720,end:1749,notesHTML:`<p>\u3088\u3057\u3001SQL\u306E\u65B9\u306F\u4EE5\u4E0A\u3067\u3059\u3002ActiveRecord\u306E\u65B9\u304B\u3089\u898B\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p>
<p>\u307E\u305A\u3001PostgreSQL\u306E\u30B3\u30CD\u30AF\u30B7\u30E7\u30F3\u30FB\u30A2\u30C0\u30D7\u30BF\u30FC\u3067\u30C7\u30FC\u30BF\u578B\u3092\u5BA3\u8A00\u3057\u307E\u3057\u3087\u3046\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:m9,meta:{slide:{raw:`
## Deserialization

<div class="my-14"></div>

\`\`\`ruby{all|2|4-5}
def deserialize(value)
  return nil if value.nil?

  currency, amount = value.match(/\\A\\("?(\\w+)"?,(\\d+(?:\\.\\d+)?)\\)\\z/).captures
  ::Money.from_amount(BigDecimal(amount), currency)
end
\`\`\`

And \`"(USD,4.2)"\` becomes \`#<Money fractional:420 currency:USD>\` in Ruby \u2728

<!--
\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u5024\u306FRuby\u306E\u5024\u306B\u306A\u308B\u305F\u3081\u306Bdeserialize\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002

NULL\u304C\u6765\u305F\u3089\u3001ActiveRecord\u306F\u4E88\u3081Ruby\u306Enil\u306B\u3057\u307E\u3059\u306E\u3067\u3001\u305F\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u3044\u3044\u3067\u3059\u3002

\u901A\u8CA8\u3068\u6570\u5B57\u3092\u3053\u306E\u3088\u3046\u306A\u5C0F\u3055\u304F\u3066\u8AAD\u3081\u306A\u3044RegExp\u3092\u4F7F\u3063\u3066\u3001\u62EC\u5F27\u304B\u3089\u53D6\u308A\u51FA\u3057\u3066\u3001\u30DE\u30CD\u30FC\u3068\u3044\u3046\u30B8\u30A7\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002

\u7C21\u5358\u3067\u3057\u3087\uFF1F
-->
`,title:"Deserialization",level:2,content:`## Deserialization

<div class="my-14"></div>

\`\`\`ruby{all|2|4-5}
def deserialize(value)
  return nil if value.nil?

  currency, amount = value.match(/\\A\\("?(\\w+)"?,(\\d+(?:\\.\\d+)?)\\)\\z/).captures
  ::Money.from_amount(BigDecimal(amount), currency)
end
\`\`\`

And \`"(USD,4.2)"\` becomes \`#<Money fractional:420 currency:USD>\` in Ruby \u2728`,frontmatter:{},note:`\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u5024\u306FRuby\u306E\u5024\u306B\u306A\u308B\u305F\u3081\u306Bdeserialize\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002

NULL\u304C\u6765\u305F\u3089\u3001ActiveRecord\u306F\u4E88\u3081Ruby\u306Enil\u306B\u3057\u307E\u3059\u306E\u3067\u3001\u305F\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u3044\u3044\u3067\u3059\u3002

\u901A\u8CA8\u3068\u6570\u5B57\u3092\u3053\u306E\u3088\u3046\u306A\u5C0F\u3055\u304F\u3066\u8AAD\u3081\u306A\u3044RegExp\u3092\u4F7F\u3063\u3066\u3001\u62EC\u5F27\u304B\u3089\u53D6\u308A\u51FA\u3057\u3066\u3001\u30DE\u30CD\u30FC\u3068\u3044\u3046\u30B8\u30A7\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002

\u7C21\u5358\u3067\u3057\u3087\uFF1F`,index:43,start:1750,end:1776,notesHTML:`<p>\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u8AAD\u307F\u8FBC\u3093\u3060\u5024\u306FRuby\u306E\u5024\u306B\u306A\u308B\u305F\u3081\u306Bdeserialize\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002</p>
<p>NULL\u304C\u6765\u305F\u3089\u3001ActiveRecord\u306F\u4E88\u3081Ruby\u306Enil\u306B\u3057\u307E\u3059\u306E\u3067\u3001\u305F\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u3044\u3044\u3067\u3059\u3002</p>
<p>\u901A\u8CA8\u3068\u6570\u5B57\u3092\u3053\u306E\u3088\u3046\u306A\u5C0F\u3055\u304F\u3066\u8AAD\u3081\u306A\u3044RegExp\u3092\u4F7F\u3063\u3066\u3001\u62EC\u5F27\u304B\u3089\u53D6\u308A\u51FA\u3057\u3066\u3001\u30DE\u30CD\u30FC\u3068\u3044\u3046\u30B8\u30A7\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002</p>
<p>\u7C21\u5358\u3067\u3057\u3087\uFF1F</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:v9,meta:{slide:{raw:`
## Casting user input

Add ability to assign ready object to attribute:

\`\`\`ruby{all|5}
def cast(value)
  return nil if value.nil?

  case value
    when ::Money then value
    when String then deserialize(value)
    else
      raise NotImplementedError, "Don't know how to cast #{value.class} #{value.inspect} into Money"
  end
end
\`\`\`

<!--
\u540C\u3058\u69D8\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u3067\u306F\u306A\u304F\u3066\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u5165\u529B\u3084\u30B3\u30FC\u30C9\u3067\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u3042\u305F\u3044\u3092\u89E3\u6790\u3059\u308B\u306B\u306Fcast\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u304D\u307E\u3057\u3087\u3046\u3002

\u30A2\u30D7\u30EA\u306E\u30B3\u30FC\u30C9\u3084rails console\u3067\u4E88\u3081\u306B\u4F5C\u3063\u305F\u30DE\u30CD\u30FC\u306E\u30B8\u30A7\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u304B\u3089\u3001\u3053\u308C\u3092\u3053\u306E\u307E\u307E\u3067\u4F7F\u3044\u307E\u3057\u3087\u3046\u3002
-->
`,title:"Casting user input",level:2,content:`## Casting user input

Add ability to assign ready object to attribute:

\`\`\`ruby{all|5}
def cast(value)
  return nil if value.nil?

  case value
    when ::Money then value
    when String then deserialize(value)
    else
      raise NotImplementedError, "Don't know how to cast #{value.class} #{value.inspect} into Money"
  end
end
\`\`\``,frontmatter:{},note:`\u540C\u3058\u69D8\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u3067\u306F\u306A\u304F\u3066\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u5165\u529B\u3084\u30B3\u30FC\u30C9\u3067\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u3042\u305F\u3044\u3092\u89E3\u6790\u3059\u308B\u306B\u306Fcast\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u304D\u307E\u3057\u3087\u3046\u3002

\u30A2\u30D7\u30EA\u306E\u30B3\u30FC\u30C9\u3084rails console\u3067\u4E88\u3081\u306B\u4F5C\u3063\u305F\u30DE\u30CD\u30FC\u306E\u30B8\u30A7\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u304B\u3089\u3001\u3053\u308C\u3092\u3053\u306E\u307E\u307E\u3067\u4F7F\u3044\u307E\u3057\u3087\u3046\u3002`,index:44,start:1777,end:1801,notesHTML:`<p>\u540C\u3058\u69D8\u306B\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304B\u3089\u3067\u306F\u306A\u304F\u3066\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u5165\u529B\u3084\u30B3\u30FC\u30C9\u3067\u5272\u308A\u5F53\u3066\u3089\u308C\u305F\u3042\u305F\u3044\u3092\u89E3\u6790\u3059\u308B\u306B\u306Fcast\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u304D\u307E\u3057\u3087\u3046\u3002</p>
<p>\u30A2\u30D7\u30EA\u306E\u30B3\u30FC\u30C9\u3084rails console\u3067\u4E88\u3081\u306B\u4F5C\u3063\u305F\u30DE\u30CD\u30FC\u306E\u30B8\u30A7\u30E0\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5272\u308A\u5F53\u3066\u3089\u308C\u307E\u3059\u304B\u3089\u3001\u3053\u308C\u3092\u3053\u306E\u307E\u307E\u3067\u4F7F\u3044\u307E\u3057\u3087\u3046\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:E9,meta:{slide:{raw:`
## Deserialization and input casting at once

<div class="my-14"></div>

\`\`\`ruby
def cast_value(value)
  case value
    when ::Money then value
    when String
      currency, amount = value.match(/\\A\\("?(\\w+)"?,(\\d+(?:\\.\\d+)?)\\)\\z/).captures
      ::Money.from_amount(BigDecimal(amount), currency)
    else
      raise NotImplementedError, "Don't know how to cast #{value.class} #{value.inspect} into Money"
    end
  end
end
\`\`\`

Replaces both \`deserialize\` and \`cast\`, also handles \`nil\`s.

<!--
\u524D\u306E\u4E8C\u3064\u306Edeserialize\u3068cast\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u4E00\u3064\u306Ecast_value\u306B\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
-->
`,title:"Deserialization and input casting at once",level:2,content:`## Deserialization and input casting at once

<div class="my-14"></div>

\`\`\`ruby
def cast_value(value)
  case value
    when ::Money then value
    when String
      currency, amount = value.match(/\\A\\("?(\\w+)"?,(\\d+(?:\\.\\d+)?)\\)\\z/).captures
      ::Money.from_amount(BigDecimal(amount), currency)
    else
      raise NotImplementedError, "Don't know how to cast #{value.class} #{value.inspect} into Money"
    end
  end
end
\`\`\`

Replaces both \`deserialize\` and \`cast\`, also handles \`nil\`s.`,frontmatter:{},note:"\u524D\u306E\u4E8C\u3064\u306Edeserialize\u3068cast\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u4E00\u3064\u306Ecast_value\u306B\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",index:45,start:1802,end:1827,notesHTML:`<p>\u524D\u306E\u4E8C\u3064\u306Edeserialize\u3068cast\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u4E00\u3064\u306Ecast_value\u306B\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:T9,meta:{slide:{raw:`
## Serialization for the database

<div class="my-14"></div>

\`\`\`ruby{all|4-5|6}
def serialize(value)
  return nil if value.nil? # ActiveRecord will handle NULL for us

  amount_t   = ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::Decimal.new
  currency_t = ::ActiveModel::Type::String.new
  "(#{currency_t.serialize(value.currency.iso_code).inspect},#{amount_t.serialize(value.amount)})"
end
\`\`\`

Reuse available serialization methods for subtypes.

<!--
\u9006\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u307E\u3048\u306B\u3001ActiveRecord\u306Fserialize\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002

\u3053\u3053\u3067true_money\u306E\u4E2D\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u5358\u7D14\u306E\u30C7\u30FC\u30BF\u578B\u306Eserialize\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u7D50\u679C\u3092\u305F\u3060\u62EC\u5F27\u306B\u56F2\u3080\u3068\u4EE5\u4E0A\u306B\u306A\u308A\u307E\u3059\u3002\u305D\u3093\u306A\u306B\u96E3\u3057\u304F\u306A\u3044\u3067\u3057\u3087\u3046\u3002
-->
`,title:"Serialization for the database",level:2,content:`## Serialization for the database

<div class="my-14"></div>

\`\`\`ruby{all|4-5|6}
def serialize(value)
  return nil if value.nil? # ActiveRecord will handle NULL for us

  amount_t   = ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::Decimal.new
  currency_t = ::ActiveModel::Type::String.new
  "(#{currency_t.serialize(value.currency.iso_code).inspect},#{amount_t.serialize(value.amount)})"
end
\`\`\`

Reuse available serialization methods for subtypes.`,frontmatter:{},note:`\u9006\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u307E\u3048\u306B\u3001ActiveRecord\u306Fserialize\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002

\u3053\u3053\u3067true_money\u306E\u4E2D\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u5358\u7D14\u306E\u30C7\u30FC\u30BF\u578B\u306Eserialize\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u7D50\u679C\u3092\u305F\u3060\u62EC\u5F27\u306B\u56F2\u3080\u3068\u4EE5\u4E0A\u306B\u306A\u308A\u307E\u3059\u3002\u305D\u3093\u306A\u306B\u96E3\u3057\u304F\u306A\u3044\u3067\u3057\u3087\u3046\u3002`,index:46,start:1828,end:1851,notesHTML:`<p>\u9006\u306B\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306B\u66F8\u304D\u8FBC\u3080\u307E\u3048\u306B\u3001ActiveRecord\u306Fserialize\u3068\u3044\u3046\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002</p>
<p>\u3053\u3053\u3067true_money\u306E\u4E2D\u3067\u4F7F\u308F\u308C\u3066\u3044\u308B\u5358\u7D14\u306E\u30C7\u30FC\u30BF\u578B\u306Eserialize\u30E1\u30BD\u30C3\u30C9\u3092\u547C\u3073\u51FA\u3057\u3066\u3001\u7D50\u679C\u3092\u305F\u3060\u62EC\u5F27\u306B\u56F2\u3080\u3068\u4EE5\u4E0A\u306B\u306A\u308A\u307E\u3059\u3002\u305D\u3093\u306A\u306B\u96E3\u3057\u304F\u306A\u3044\u3067\u3057\u3087\u3046\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:O9,meta:{slide:{raw:`
## Register datatype in ActiveRecord

<div class="my-14"></div>

\`\`\`ruby
PostgreSQLAdapterWithTrueMoney = Module.new do
  def initialize_type_map(m = type_map)
    m.register_type "true_money" do |*_args, _sql_type|
      ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::TrueMoney.new
    end
    m.alias_type "_true_money", "true_money"

    super
  end
end

ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.prepend(PostgreSQLAdapterWithTrueMoney)

ActiveRecord::Type.register(
  :true_money,
  ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::TrueMoney,
  adapter: :postgresql,
)
\`\`\`

<!--
\u7D50\u5C40\u3001\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3092ActiveRecord\u306B\u767B\u9332\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u69D8\u306B\u3067\u304D\u307E\u3059\u3001\u304A\u3082\u3057\u308D\u3044\u3068\u3053\u308D\u304C\u307B\u3068\u3093\u3069\u3042\u308A\u307E\u305B\u3093\u3002
-->
`,title:"Register datatype in ActiveRecord",level:2,content:`## Register datatype in ActiveRecord

<div class="my-14"></div>

\`\`\`ruby
PostgreSQLAdapterWithTrueMoney = Module.new do
  def initialize_type_map(m = type_map)
    m.register_type "true_money" do |*_args, _sql_type|
      ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::TrueMoney.new
    end
    m.alias_type "_true_money", "true_money"

    super
  end
end

ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.prepend(PostgreSQLAdapterWithTrueMoney)

ActiveRecord::Type.register(
  :true_money,
  ::ActiveRecord::ConnectionAdapters::PostgreSQLAdapter::OID::TrueMoney,
  adapter: :postgresql,
)
\`\`\``,frontmatter:{},note:"\u7D50\u5C40\u3001\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3092ActiveRecord\u306B\u767B\u9332\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u69D8\u306B\u3067\u304D\u307E\u3059\u3001\u304A\u3082\u3057\u308D\u3044\u3068\u3053\u308D\u304C\u307B\u3068\u3093\u3069\u3042\u308A\u307E\u305B\u3093\u3002",index:47,start:1852,end:1882,notesHTML:`<p>\u7D50\u5C40\u3001\u65B0\u3057\u3044\u30C7\u30FC\u30BF\u578B\u3092ActiveRecord\u306B\u767B\u9332\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u3053\u306E\u69D8\u306B\u3067\u304D\u307E\u3059\u3001\u304A\u3082\u3057\u308D\u3044\u3068\u3053\u308D\u304C\u307B\u3068\u3093\u3069\u3042\u308A\u307E\u305B\u3093\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:I9,meta:{slide:{raw:`
## Also add it for migrations\u2026

<div class="my-14"></div>

\`\`\`ruby
module SchemaStatementsWithTrueMoney
  def type_to_sql(type, limit: nil, precision: nil, scale: nil, array: nil, **)
    case type.to_s
    when 'true_money' then 'true_money'
    else super
    end
  end
end
ActiveRecord::ConnectionAdapters::PostgreSQL::SchemaStatements.prepend(SchemaStatementsWithTrueMoney)

module ActiveRecord::ConnectionAdapters::PostgreSQL::ColumnMethods
  def true_money(name, options = {})
    column(name, :true_money, options)
  end
end
\`\`\`

<!--
\u6700\u5F8C\u306B\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u3048\u308B\u305F\u3081\u306B\u3001\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u3044\u3066\u3001\u30C7\u30FC\u30BF\u578B\u3092\u30B9\u30AD\u30FC\u30DE\u306B\u767B\u9332\u3057\u307E\u3057\u3087\u3046\u3002
-->
`,title:"Also add it for migrations\u2026",level:2,content:`## Also add it for migrations\u2026

<div class="my-14"></div>

\`\`\`ruby
module SchemaStatementsWithTrueMoney
  def type_to_sql(type, limit: nil, precision: nil, scale: nil, array: nil, **)
    case type.to_s
    when 'true_money' then 'true_money'
    else super
    end
  end
end
ActiveRecord::ConnectionAdapters::PostgreSQL::SchemaStatements.prepend(SchemaStatementsWithTrueMoney)

module ActiveRecord::ConnectionAdapters::PostgreSQL::ColumnMethods
  def true_money(name, options = {})
    column(name, :true_money, options)
  end
end
\`\`\``,frontmatter:{},note:"\u6700\u5F8C\u306B\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u3048\u308B\u305F\u3081\u306B\u3001\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u3044\u3066\u3001\u30C7\u30FC\u30BF\u578B\u3092\u30B9\u30AD\u30FC\u30DE\u306B\u767B\u9332\u3057\u307E\u3057\u3087\u3046\u3002",index:48,start:1883,end:1910,notesHTML:`<p>\u6700\u5F8C\u306B\u3001\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u3048\u308B\u305F\u3081\u306B\u3001\u30E1\u30BD\u30C3\u30C9\u3092\u66F8\u3044\u3066\u3001\u30C7\u30FC\u30BF\u578B\u3092\u30B9\u30AD\u30FC\u30DE\u306B\u767B\u9332\u3057\u307E\u3057\u3087\u3046\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:H9,meta:{slide:{raw:`
## Ready to use!

<div class="my-14"></div>

\`\`\`sh
rails g model Product title price:true_money
rails db:migrate
rails console
\`\`\`

<div class="my-14"></div>

\`\`\`ruby
Product.create!(title: "Something", price: Money.from_amount(100000, \u201CUSD\u201D))
Product.last
# => #<Product id: 1, title: "Something", price: 100000.00 USD>
\`\`\`

<!--
\u3067\u306F\u3001\u4EE5\u4E0A\u3067\u3059\uFF01

\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u5217\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3057\u3001\u30B3\u30FC\u30C9\u306E\u4E2D\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002\u3059\u3054\u3044\u3058\u3083\u306A\u3044\u3067\u3057\u3087\u3046\uFF1F
-->
`,title:"Ready to use!",level:2,content:`## Ready to use!

<div class="my-14"></div>

\`\`\`sh
rails g model Product title price:true_money
rails db:migrate
rails console
\`\`\`

<div class="my-14"></div>

\`\`\`ruby
Product.create!(title: "Something", price: Money.from_amount(100000, \u201CUSD\u201D))
Product.last
# => #<Product id: 1, title: "Something", price: 100000.00 USD>
\`\`\``,frontmatter:{},note:`\u3067\u306F\u3001\u4EE5\u4E0A\u3067\u3059\uFF01

\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u5217\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3057\u3001\u30B3\u30FC\u30C9\u306E\u4E2D\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002\u3059\u3054\u3044\u3058\u3083\u306A\u3044\u3067\u3057\u3087\u3046\uFF1F`,index:49,start:1911,end:1936,notesHTML:`<p>\u3067\u306F\u3001\u4EE5\u4E0A\u3067\u3059\uFF01</p>
<p>\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u5217\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3057\u3001\u30B3\u30FC\u30C9\u306E\u4E2D\u3067\u3082\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002\u3059\u3054\u3044\u3058\u3083\u306A\u3044\u3067\u3057\u3087\u3046\uFF1F</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:X9,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

## But it is not done yet!

<div class="grid grid-cols-2 gap-2">

<div>

A lot of stuff has to be done to make a full-featured datatype in SQL\u2026

\`\`\`sql
CREATE FUNCTION true_money_add(a true_money, b true_money) RETURNS true_money AS $$
  BEGIN
    IF (a).currency != (b).currency THEN
      RAISE EXCEPTION '% can not be added to % - currencies does not match', b, a;
    END IF;
    RETURN ((a).currency, (a).amount + (b).amount);
  END;
$$ IMMUTABLE RETURNS NULL ON NULL INPUT LANGUAGE plpgsql;

CREATE OPERATOR +(leftarg=true_money, rightarg=true_money, procedure=true_money_add);
\`\`\`

</div>

\`\`\`sql

CREATE FUNCTION true_money_sum(state true_money, value true_money) RETURNS true_money AS $$
  BEGIN
    IF value IS NULL AND state IS NULL THEN
      RETURN NULL;
    END IF;
    IF state IS NULL THEN
      RETURN value;
    END IF;
    RETURN state + value;
  END;
$$ IMMUTABLE LANGUAGE plpgsql;

CREATE AGGREGATE sum (true_money) (sfunc = true_money_sum, stype = true_money);
\`\`\`
</div>

But then you can do a lot in SQL:

\`\`\`sql
SELECT (price).currency AS currency, sum(price) AS total
FROM products GROUP BY currency;
\`\`\`

::footnote::

After all, one might re-invent abandoned [pg-currency](https://github.com/samv/pg-currency)

<!--
\u3067\u3059\u304C\u3001\u30D5\u30EB\u6A5F\u80FD\u306E\u30C7\u30FC\u30BF\u578B\u307E\u3067\u9053\u304C\u9060\u3044\u3067\u3059\u306D\u3002\u30C7\u30FC\u30BF\u578B\u3092\u52B9\u7387\u826F\u304F\u4F7F\u3046\u305F\u3081\u306B\u6570\u5B66\u5F0F\u3084\u96C6\u7D04\u306E\u95A2\u6570\u306A\u3069\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u308C\u306F\u624B\u9593\u304C\u304B\u304B\u308B\u3067\u3057\u3087\u3046\u3002\u4F8B\u3048\u3070\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u5BC4\u305B\u7B97\u3068\u5408\u7B97\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3060\u3051\u3092\u30B5\u30DD\u30FC\u30C8\u306B\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u304C\u3042\u308A\u307E\u3059\u3002\u3061\u3087\u3063\u3068\u591A\u3044\u3067\u3059\u3088\u306D\u3002
-->
`,title:"But it is not done yet!",level:2,content:`## But it is not done yet!

<div class="grid grid-cols-2 gap-2">

<div>

A lot of stuff has to be done to make a full-featured datatype in SQL\u2026

\`\`\`sql
CREATE FUNCTION true_money_add(a true_money, b true_money) RETURNS true_money AS $$
  BEGIN
    IF (a).currency != (b).currency THEN
      RAISE EXCEPTION '% can not be added to % - currencies does not match', b, a;
    END IF;
    RETURN ((a).currency, (a).amount + (b).amount);
  END;
$$ IMMUTABLE RETURNS NULL ON NULL INPUT LANGUAGE plpgsql;

CREATE OPERATOR +(leftarg=true_money, rightarg=true_money, procedure=true_money_add);
\`\`\`

</div>

\`\`\`sql

CREATE FUNCTION true_money_sum(state true_money, value true_money) RETURNS true_money AS $$
  BEGIN
    IF value IS NULL AND state IS NULL THEN
      RETURN NULL;
    END IF;
    IF state IS NULL THEN
      RETURN value;
    END IF;
    RETURN state + value;
  END;
$$ IMMUTABLE LANGUAGE plpgsql;

CREATE AGGREGATE sum (true_money) (sfunc = true_money_sum, stype = true_money);
\`\`\`
</div>

But then you can do a lot in SQL:

\`\`\`sql
SELECT (price).currency AS currency, sum(price) AS total
FROM products GROUP BY currency;
\`\`\`

::footnote::

After all, one might re-invent abandoned [pg-currency](https://github.com/samv/pg-currency)`,frontmatter:{layout:"footnote"},note:"\u3067\u3059\u304C\u3001\u30D5\u30EB\u6A5F\u80FD\u306E\u30C7\u30FC\u30BF\u578B\u307E\u3067\u9053\u304C\u9060\u3044\u3067\u3059\u306D\u3002\u30C7\u30FC\u30BF\u578B\u3092\u52B9\u7387\u826F\u304F\u4F7F\u3046\u305F\u3081\u306B\u6570\u5B66\u5F0F\u3084\u96C6\u7D04\u306E\u95A2\u6570\u306A\u3069\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u308C\u306F\u624B\u9593\u304C\u304B\u304B\u308B\u3067\u3057\u3087\u3046\u3002\u4F8B\u3048\u3070\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u5BC4\u305B\u7B97\u3068\u5408\u7B97\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3060\u3051\u3092\u30B5\u30DD\u30FC\u30C8\u306B\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u304C\u3042\u308A\u307E\u3059\u3002\u3061\u3087\u3063\u3068\u591A\u3044\u3067\u3059\u3088\u306D\u3002",index:50,start:1936,end:1996,notesHTML:`<p>\u3067\u3059\u304C\u3001\u30D5\u30EB\u6A5F\u80FD\u306E\u30C7\u30FC\u30BF\u578B\u307E\u3067\u9053\u304C\u9060\u3044\u3067\u3059\u306D\u3002\u30C7\u30FC\u30BF\u578B\u3092\u52B9\u7387\u826F\u304F\u4F7F\u3046\u305F\u3081\u306B\u6570\u5B66\u5F0F\u3084\u96C6\u7D04\u306E\u95A2\u6570\u306A\u3069\u304C\u5FC5\u8981\u3067\u3059\u3002\u305D\u308C\u306F\u624B\u9593\u304C\u304B\u304B\u308B\u3067\u3057\u3087\u3046\u3002\u4F8B\u3048\u3070\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3067\u306F\u5BC4\u305B\u7B97\u3068\u5408\u7B97\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3060\u3051\u3092\u30B5\u30DD\u30FC\u30C8\u306B\u5FC5\u8981\u306A\u30B3\u30FC\u30C9\u304C\u3042\u308A\u307E\u3059\u3002\u3061\u3087\u3063\u3068\u591A\u3044\u3067\u3059\u3088\u306D\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:nD,meta:{slide:{raw:`
## Play with it yourself!


<div class="text-center my-12">
<qr-code url="https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986" class="max-w-80 mx-auto" />
</div>

https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986

<!--
\u3082\u3057\u304B\u3057\u305F\u3089\u3001\u3053\u306E\u30A2\u30A4\u30C7\u30A3\u30A2\u304C\u5927\u597D\u304D\u306B\u306A\u3063\u305F\u304B\u305F\u306F\u3044\u3089\u3063\u3057\u3083\u3044\u307E\u3057\u305F\u3089\u3001\u3053\u306EGist\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3001\u904A\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u826F\u3044\u52C9\u5F37\u306B\u306A\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
-->
`,title:"Play with it yourself!",level:2,content:`## Play with it yourself!


<div class="text-center my-12">
<qr-code url="https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986" class="max-w-80 mx-auto" />
</div>

https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986`,frontmatter:{},note:"\u3082\u3057\u304B\u3057\u305F\u3089\u3001\u3053\u306E\u30A2\u30A4\u30C7\u30A3\u30A2\u304C\u5927\u597D\u304D\u306B\u306A\u3063\u305F\u304B\u305F\u306F\u3044\u3089\u3063\u3057\u3083\u3044\u307E\u3057\u305F\u3089\u3001\u3053\u306EGist\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3001\u904A\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u826F\u3044\u52C9\u5F37\u306B\u306A\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002",index:51,start:1997,end:2011,notesHTML:`<p>\u3082\u3057\u304B\u3057\u305F\u3089\u3001\u3053\u306E\u30A2\u30A4\u30C7\u30A3\u30A2\u304C\u5927\u597D\u304D\u306B\u306A\u3063\u305F\u304B\u305F\u306F\u3044\u3089\u3063\u3057\u3083\u3044\u307E\u3057\u305F\u3089\u3001\u3053\u306EGist\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3001\u904A\u3093\u3067\u307F\u3066\u304F\u3060\u3055\u3044\u3002\u826F\u3044\u52C9\u5F37\u306B\u306A\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:rD,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

# Gems, gems, gems!

Everything That Can Be Invented Has Been Invented

<!--
\u3082\u3061\u308D\u3093\u3001\u5B9F\u969B\u3001\u81EA\u5206\u3067\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u308B\u6A5F\u4F1A\u304C\u306A\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u7406\u7531\u306F\u7C21\u5358\uFF1A\u3082\u3046\u305F\u304F\u3055\u3093\u306E\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u30B8\u30A7\u30E0\u304C\u3042\u308A\u307E\u3059\u304B\u3089\u3002
-->
`,title:"Gems, gems, gems!",level:1,content:`# Gems, gems, gems!

Everything That Can Be Invented Has Been Invented`,frontmatter:{layout:"cover"},note:"\u3082\u3061\u308D\u3093\u3001\u5B9F\u969B\u3001\u81EA\u5206\u3067\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u308B\u6A5F\u4F1A\u304C\u306A\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u7406\u7531\u306F\u7C21\u5358\uFF1A\u3082\u3046\u305F\u304F\u3055\u3093\u306E\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u30B8\u30A7\u30E0\u304C\u3042\u308A\u307E\u3059\u304B\u3089\u3002",index:52,start:2011,end:2023,notesHTML:`<p>\u3082\u3061\u308D\u3093\u3001\u5B9F\u969B\u3001\u81EA\u5206\u3067\u30C7\u30FC\u30BF\u578B\u3092\u4F5C\u308B\u6A5F\u4F1A\u304C\u306A\u3044\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u7406\u7531\u306F\u7C21\u5358\uFF1A\u3082\u3046\u305F\u304F\u3055\u3093\u306E\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u30B8\u30A7\u30E0\u304C\u3042\u308A\u307E\u3059\u304B\u3089\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:pD,meta:{slide:{raw:`
## Gems for datatypes

<div class="my-14"></div>

- [torque-postgresql](https://github.com/crashtech/torque-postgresql) \u2014 standard datatypes not (yet) supported by Rails.

- [activerecord-postgis-adapter](https://github.com/rgeo/activerecord-postgis-adapter) \u2014 all the power of PostGIS extension in Ruby.

- [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) \u2014 support enum in migrations and schema (before Rails 7)

<!--
\u305F\u3068\u3048\u3070\u3001torque-postgresql\u306FRails\u306B\u306F\u307E\u3060\u306A\u3044\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3001\u305D\u308C\u306BActiveRecord\u81EA\u8EAB\u306B\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u3082\u8FFD\u52A0\u3057\u307E\u3059\u3002

\u6B21\u3001\u5927\u4EBA\u6C17\u306EPostGIS\u3068\u3044\u3046PostgreSQL\u306E\u62E1\u5F35\u3092\u4F7F\u3046\u3068activerecord-postgis-adapter\u3068\u3044\u3046\u30B8\u30A7\u30E0\u304C\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002

\u305D\u308C\u304B\u3089\u3001activerecord-postgres_enum\u306FRails v7\u306E\u524D\u306E\u30A2\u30D7\u30EA\u306B\u5217\u6319\u578B\u306E\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002
-->
`,title:"Gems for datatypes",level:2,content:`## Gems for datatypes

<div class="my-14"></div>

- [torque-postgresql](https://github.com/crashtech/torque-postgresql) \u2014 standard datatypes not (yet) supported by Rails.

- [activerecord-postgis-adapter](https://github.com/rgeo/activerecord-postgis-adapter) \u2014 all the power of PostGIS extension in Ruby.

- [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) \u2014 support enum in migrations and schema (before Rails 7)`,frontmatter:{},note:`\u305F\u3068\u3048\u3070\u3001torque-postgresql\u306FRails\u306B\u306F\u307E\u3060\u306A\u3044\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3001\u305D\u308C\u306BActiveRecord\u81EA\u8EAB\u306B\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u3082\u8FFD\u52A0\u3057\u307E\u3059\u3002

\u6B21\u3001\u5927\u4EBA\u6C17\u306EPostGIS\u3068\u3044\u3046PostgreSQL\u306E\u62E1\u5F35\u3092\u4F7F\u3046\u3068activerecord-postgis-adapter\u3068\u3044\u3046\u30B8\u30A7\u30E0\u304C\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002

\u305D\u308C\u304B\u3089\u3001activerecord-postgres_enum\u306FRails v7\u306E\u524D\u306E\u30A2\u30D7\u30EA\u306B\u5217\u6319\u578B\u306E\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002`,index:53,start:2024,end:2043,notesHTML:`<p>\u305F\u3068\u3048\u3070\u3001torque-postgresql\u306FRails\u306B\u306F\u307E\u3060\u306A\u3044\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3001\u305D\u308C\u306BActiveRecord\u81EA\u8EAB\u306B\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u3082\u8FFD\u52A0\u3057\u307E\u3059\u3002</p>
<p>\u6B21\u3001\u5927\u4EBA\u6C17\u306EPostGIS\u3068\u3044\u3046PostgreSQL\u306E\u62E1\u5F35\u3092\u4F7F\u3046\u3068activerecord-postgis-adapter\u3068\u3044\u3046\u30B8\u30A7\u30E0\u304C\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF\u578B\u306E\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002</p>
<p>\u305D\u308C\u304B\u3089\u3001activerecord-postgres_enum\u306FRails v7\u306E\u524D\u306E\u30A2\u30D7\u30EA\u306B\u5217\u6319\u578B\u306E\u30DE\u30A4\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\u30B5\u30DD\u30FC\u30C8\u3092\u542B\u3081\u3066\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:gD,meta:{slide:{raw:`
## Gems for other PostgreSQL features

Because PostgreSQL is much more than datatypes.

- [ActiveRecordExtended](https://github.com/GeorgeKaraszi/ActiveRecordExtended) \u2014 functions for datatypes and DSL for queries
- [fx](https://github.com/teoljungberg/fx) \u2014 make schema.rb great again with triggers
- [scenic](https://github.com/scenic-views/scenic) \u2014 add support for views
- [order_query](https://github.com/glebm/order_query) \u2014 keyset-pagination for your models
- [postgresql_cursor](https://github.com/afair/postgresql_cursor) \u2014 get more data from the database efficiently

And also martian [pg_trunk](https://github.com/nepalez/pg_trunk/) gem to ~~rule them all~~ get \`fx\`, \`scenic\`, object dependency management and more within a single gem!

<div class="absolute left-4 bottom-12 rotate-340 text-lg">

\`structure.sql\` no more!

Make \`schema.rb\` great again!
</div>

<a href="https://github.com/nepalez/pg_trunk" class="block my-4 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/fac14e6e69972a6081f741222ea276d67c3df90c2ca2c7b8fedfd007e878e16b/nepalez/pg_trunk" class="w-80 mx-auto" />
</a>

<qr-code url="https://github.com/nepalez/pg_trunk" caption="pg_trunk gem" class="w-32 absolute bottom-15px right-20px" />

<!--
\u7686\u306FPostgreSQL\u304C\u597D\u304D\u306E\u7406\u7531\u306F\u30C7\u30FC\u30BF\u578B\u3060\u3051\u3067\u306F\u306A\u304F\u3066\u3001\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u304B\u3089\u3002\u30A6\u30A3\u30F3\u30C9\u30FC\u95A2\u6570\u3001\u30C8\u30EA\u30AC\u3001\u30D3\u30E5\u30FC\u3001\u30AB\u30FC\u30BD\u30EB\u3001\u306A\u3069\u306A\u3069\u3002\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u3046\u3068\u305F\u304F\u3055\u3093\u306E\u554F\u984C\u3092\u52B9\u7387\u3088\u304F\u89E3\u6C7A\u3067\u304D\u307E\u3059\u3002

\u3067\u3059\u304C\u3001\u3053\u306E\u69D8\u306A\u6A5F\u80FD\u3092\u4F7F\u3046\u305F\u3081\u306B\u8AAD\u307F\u3084\u3059\u3044schema.rb\u3092\u8AAD\u307F\u305A\u3089\u3044structure.sql\u306B\u5909\u3048\u308B\u30A2\u30D7\u30EA\u304C\u591A\u3044\u3067\u3059\u3002\u3067\u3082\u3001fx\u3084scenic\u306E\u3088\u3046\u306A\u30B8\u30A7\u30E0\u306F\u30C8\u30EA\u30AC\u3084\u30D3\u30E5\u30FC\u306E\u30B5\u30DD\u30FC\u30C8\u3092schema.rb\u306B\u8FFD\u52A0\u3057\u307E\u3059\u306E\u3067\u3001\u8AAD\u307F\u3084\u3059\u3044schema.rb\u3092\u4F7F\u3044\u3064\u3065\u3051\u3066\u3082\u3044\u3044\u3067\u3059\u3088\u3002

\u3067\u3059\u304B\u3089\u3001\u706B\u661F\u4EBA\u304C\u4F5C\u3063\u305Fpg_trunk\u3068\u3044\u3046\u30B8\u30A7\u30E0\u3092\u304A\u52E7\u3081\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002fx\u3068scenic\u306B\u57FA\u3065\u3044\u3066\u3001\u3044\u308D\u3044\u308D\u306APostgreSQL\u306E\u6A5F\u80FD\u306E\u30B5\u30DD\u30FC\u30C8\u3092schema.rb\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002
-->
`,title:"Gems for other PostgreSQL features",level:2,content:`## Gems for other PostgreSQL features

Because PostgreSQL is much more than datatypes.

- [ActiveRecordExtended](https://github.com/GeorgeKaraszi/ActiveRecordExtended) \u2014 functions for datatypes and DSL for queries
- [fx](https://github.com/teoljungberg/fx) \u2014 make schema.rb great again with triggers
- [scenic](https://github.com/scenic-views/scenic) \u2014 add support for views
- [order_query](https://github.com/glebm/order_query) \u2014 keyset-pagination for your models
- [postgresql_cursor](https://github.com/afair/postgresql_cursor) \u2014 get more data from the database efficiently

And also martian [pg_trunk](https://github.com/nepalez/pg_trunk/) gem to ~~rule them all~~ get \`fx\`, \`scenic\`, object dependency management and more within a single gem!

<div class="absolute left-4 bottom-12 rotate-340 text-lg">

\`structure.sql\` no more!

Make \`schema.rb\` great again!
</div>

<a href="https://github.com/nepalez/pg_trunk" class="block my-4 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/fac14e6e69972a6081f741222ea276d67c3df90c2ca2c7b8fedfd007e878e16b/nepalez/pg_trunk" class="w-80 mx-auto" />
</a>

<qr-code url="https://github.com/nepalez/pg_trunk" caption="pg_trunk gem" class="w-32 absolute bottom-15px right-20px" />`,frontmatter:{},note:`\u7686\u306FPostgreSQL\u304C\u597D\u304D\u306E\u7406\u7531\u306F\u30C7\u30FC\u30BF\u578B\u3060\u3051\u3067\u306F\u306A\u304F\u3066\u3001\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u304B\u3089\u3002\u30A6\u30A3\u30F3\u30C9\u30FC\u95A2\u6570\u3001\u30C8\u30EA\u30AC\u3001\u30D3\u30E5\u30FC\u3001\u30AB\u30FC\u30BD\u30EB\u3001\u306A\u3069\u306A\u3069\u3002\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u3046\u3068\u305F\u304F\u3055\u3093\u306E\u554F\u984C\u3092\u52B9\u7387\u3088\u304F\u89E3\u6C7A\u3067\u304D\u307E\u3059\u3002

\u3067\u3059\u304C\u3001\u3053\u306E\u69D8\u306A\u6A5F\u80FD\u3092\u4F7F\u3046\u305F\u3081\u306B\u8AAD\u307F\u3084\u3059\u3044schema.rb\u3092\u8AAD\u307F\u305A\u3089\u3044structure.sql\u306B\u5909\u3048\u308B\u30A2\u30D7\u30EA\u304C\u591A\u3044\u3067\u3059\u3002\u3067\u3082\u3001fx\u3084scenic\u306E\u3088\u3046\u306A\u30B8\u30A7\u30E0\u306F\u30C8\u30EA\u30AC\u3084\u30D3\u30E5\u30FC\u306E\u30B5\u30DD\u30FC\u30C8\u3092schema.rb\u306B\u8FFD\u52A0\u3057\u307E\u3059\u306E\u3067\u3001\u8AAD\u307F\u3084\u3059\u3044schema.rb\u3092\u4F7F\u3044\u3064\u3065\u3051\u3066\u3082\u3044\u3044\u3067\u3059\u3088\u3002

\u3067\u3059\u304B\u3089\u3001\u706B\u661F\u4EBA\u304C\u4F5C\u3063\u305Fpg_trunk\u3068\u3044\u3046\u30B8\u30A7\u30E0\u3092\u304A\u52E7\u3081\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002fx\u3068scenic\u306B\u57FA\u3065\u3044\u3066\u3001\u3044\u308D\u3044\u308D\u306APostgreSQL\u306E\u6A5F\u80FD\u306E\u30B5\u30DD\u30FC\u30C8\u3092schema.rb\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`,index:54,start:2044,end:2078,notesHTML:`<p>\u7686\u306FPostgreSQL\u304C\u597D\u304D\u306E\u7406\u7531\u306F\u30C7\u30FC\u30BF\u578B\u3060\u3051\u3067\u306F\u306A\u304F\u3066\u3001\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u304C\u3042\u308A\u307E\u3059\u304B\u3089\u3002\u30A6\u30A3\u30F3\u30C9\u30FC\u95A2\u6570\u3001\u30C8\u30EA\u30AC\u3001\u30D3\u30E5\u30FC\u3001\u30AB\u30FC\u30BD\u30EB\u3001\u306A\u3069\u306A\u3069\u3002\u3053\u306E\u6A5F\u80FD\u3092\u4F7F\u3046\u3068\u305F\u304F\u3055\u3093\u306E\u554F\u984C\u3092\u52B9\u7387\u3088\u304F\u89E3\u6C7A\u3067\u304D\u307E\u3059\u3002</p>
<p>\u3067\u3059\u304C\u3001\u3053\u306E\u69D8\u306A\u6A5F\u80FD\u3092\u4F7F\u3046\u305F\u3081\u306B\u8AAD\u307F\u3084\u3059\u3044schema.rb\u3092\u8AAD\u307F\u305A\u3089\u3044structure.sql\u306B\u5909\u3048\u308B\u30A2\u30D7\u30EA\u304C\u591A\u3044\u3067\u3059\u3002\u3067\u3082\u3001fx\u3084scenic\u306E\u3088\u3046\u306A\u30B8\u30A7\u30E0\u306F\u30C8\u30EA\u30AC\u3084\u30D3\u30E5\u30FC\u306E\u30B5\u30DD\u30FC\u30C8\u3092schema.rb\u306B\u8FFD\u52A0\u3057\u307E\u3059\u306E\u3067\u3001\u8AAD\u307F\u3084\u3059\u3044schema.rb\u3092\u4F7F\u3044\u3064\u3065\u3051\u3066\u3082\u3044\u3044\u3067\u3059\u3088\u3002</p>
<p>\u3067\u3059\u304B\u3089\u3001\u706B\u661F\u4EBA\u304C\u4F5C\u3063\u305Fpg_trunk\u3068\u3044\u3046\u30B8\u30A7\u30E0\u3092\u304A\u52E7\u3081\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002fx\u3068scenic\u306B\u57FA\u3065\u3044\u3066\u3001\u3044\u308D\u3044\u308D\u306APostgreSQL\u306E\u6A5F\u80FD\u306E\u30B5\u30DD\u30FC\u30C8\u3092schema.rb\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:vD,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

# That's it!

Questions?

<!--
\u4ECA\u65E5\u306F\u3053\u308C\u3067\u4EE5\u4E0A\u3067\u3059\u3002\u6700\u5F8C\u307E\u3067\u805E\u3044\u3066\u304F\u3060\u3055\u3063\u3066\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002
-->
`,title:"That's it!",level:1,content:`# That's it!

Questions?`,frontmatter:{layout:"cover"},note:"\u4ECA\u65E5\u306F\u3053\u308C\u3067\u4EE5\u4E0A\u3067\u3059\u3002\u6700\u5F8C\u307E\u3067\u805E\u3044\u3066\u304F\u3060\u3055\u3063\u3066\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002",index:55,start:2078,end:2090,notesHTML:`<p>\u4ECA\u65E5\u306F\u3053\u308C\u3067\u4EE5\u4E0A\u3067\u3059\u3002\u6700\u5F8C\u307E\u3067\u805E\u3044\u3066\u304F\u3060\u3055\u3063\u3066\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:A6,meta:{slide:{raw:`
# Thank you!

<div class="grid grid-cols-[8rem_2fr_5fr] mt-12 gap-2">

<div class="justify-self-end">
<img alt="Andrey Novikov" src="https://secure.gravatar.com/avatar/d0e95abdd0aed671ebd0920c16d393d4?s=512" class="w-32 h-32 scaled-image" />
</div>

<ul class="list-none">
<li><a href="https://github.com/Envek"><logos-github-icon class="dark:invert" /> @Envek</a></li>
<li><a href="https://twitter.com/Envek"><logos-twitter /> @Envek</a></li>
<li><a href="https://facebook.com/Envek"><logos-facebook /> @Envek</a></li>
<li><a href="https://t.me/envek"><logos-telegram /> @Envek</a></li>
</ul>

<div>
<qr-code url="https://github.com/Envek" caption="github.com/Envek" class="w-32 mt-2" />
</div>

<div class="justify-self-end">
<a href="https://evilmartians.com/"><img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="w-32 h-32 scaled-image block dark:hidden" /><img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="w-32 h-32 scaled-image hidden dark:block" /></a>
</div>

<div>

- <logos-github-icon class="dark:invert" /> [@evilmartians](https://github.com/evilmartians?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-twitter /> [@evilmartians](https://twitter.com/evilmartians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-linkedin-icon /> [@evil-martians](https://www.linkedin.com/company/evil-martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-instagram-icon class="dark:invert" /> [@evil.martians](https://www.instagram.com/evil.martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
</div>

<div>
<qr-code url="https://evilmartians.com/" caption="evilmartians.com" class="w-32 mt-2" />
</div>

<div class="col-span-3">

Our awesome blog: [evilmartians.com/chronicles](https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)!<br/><small class="text-xs">(Special thanks to <a href="https://twitter.com/hachi8833">@hachi8833</a> for translating \u224820 posts to Japanese!)</small>

<p class="text-sm">See these slides at <a href="https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/">envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists</a></p>

<qr-code url="https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/" caption="These slides" class="w-64 absolute bottom-10px right-20px" />

</div>
</div>

<style>
  ul a { border-bottom: none !important; }
  ul { list-style-type: none !important; }
  ul li { margin-left: 0; padding-left: 0; }
</style>

<!--
\u3054\u8CEA\u554F\u304C\u3042\u3063\u305F\u3089\u3001\u79C1\u306E\u30C4\u30A4\u30C3\u30BF\u30FC\u7B49\u3067\u3054\u9060\u616E\u306A\u304F\u805E\u3044\u3066\u304F\u3060\u3055\u3044\u3002

\u4E0B\u306E\u53F3\u306EQR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u53D6\u3063\u3066\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3092\u3082\u3046\u4E00\u5EA6\u8AAD\u3081\u307E\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3068\u30B8\u30A7\u30E0\u306E\u30EA\u30F3\u30AF\u304C\u3044\u3063\u3071\u3044\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u5F79\u306B\u7ACB\u3064\u3068\u601D\u3044\u307E\u3059\u3002\u5F8C\u3067\u305C\u3072\u53C2\u7167\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002

\u3055\u3044\u3054\u306B\u3001\u6211\u3005\u306E\u30D6\u30ED\u30B0\u3092\u304A\u52E7\u3081\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3084\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u306A\u3069\u306E\u3044\u308D\u3044\u308D\u306A\u8A18\u4E8B\u304C\u3042\u308B\u306E\u3067\u3001Ruby on Rails\u3068PostgreSQL\u306B\u8208\u5473\u304C\u3042\u308B\u65B9\u304C\u305F\u304F\u3055\u3093\u306E\u5F79\u306B\u7ACB\u3066\u308B\u8A18\u4E8B\u304C\u3042\u3063\u3066\u3001\u305C\u3072\u8AAD\u3093\u3067\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u306B20\u30F6\u6761\u3050\u3089\u3044\u306E\u8A18\u4E8B\u304C\u65E5\u672C\u8A9E\u306B\u7FFB\u8A33\u3055\u308C\u3066\u3044\u307E\u3059\u3001\u7FFB\u8A33\u3057\u3066\u304F\u3060\u3055\u3063\u305F@hachi8833\u3055\u3093\u306B\u611F\u8B1D\u3044\u305F\u3057\u307E\u3059\u3002

\u4ECA\u65E5\u306F\u3069\u3046\u3082\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002
-->
`,title:"Thank you!",level:1,content:`# Thank you!

<div class="grid grid-cols-[8rem_2fr_5fr] mt-12 gap-2">

<div class="justify-self-end">
<img alt="Andrey Novikov" src="https://secure.gravatar.com/avatar/d0e95abdd0aed671ebd0920c16d393d4?s=512" class="w-32 h-32 scaled-image" />
</div>

<ul class="list-none">
<li><a href="https://github.com/Envek"><logos-github-icon class="dark:invert" /> @Envek</a></li>
<li><a href="https://twitter.com/Envek"><logos-twitter /> @Envek</a></li>
<li><a href="https://facebook.com/Envek"><logos-facebook /> @Envek</a></li>
<li><a href="https://t.me/envek"><logos-telegram /> @Envek</a></li>
</ul>

<div>
<qr-code url="https://github.com/Envek" caption="github.com/Envek" class="w-32 mt-2" />
</div>

<div class="justify-self-end">
<a href="https://evilmartians.com/"><img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="w-32 h-32 scaled-image block dark:hidden" /><img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="w-32 h-32 scaled-image hidden dark:block" /></a>
</div>

<div>

- <logos-github-icon class="dark:invert" /> [@evilmartians](https://github.com/evilmartians?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-twitter /> [@evilmartians](https://twitter.com/evilmartians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-linkedin-icon /> [@evil-martians](https://www.linkedin.com/company/evil-martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
- <logos-instagram-icon class="dark:invert" /> [@evil.martians](https://www.instagram.com/evil.martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)
</div>

<div>
<qr-code url="https://evilmartians.com/" caption="evilmartians.com" class="w-32 mt-2" />
</div>

<div class="col-span-3">

Our awesome blog: [evilmartians.com/chronicles](https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)!<br/><small class="text-xs">(Special thanks to <a href="https://twitter.com/hachi8833">@hachi8833</a> for translating \u224820 posts to Japanese!)</small>

<p class="text-sm">See these slides at <a href="https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/">envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists</a></p>

<qr-code url="https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/" caption="These slides" class="w-64 absolute bottom-10px right-20px" />

</div>
</div>

<style>
  ul a { border-bottom: none !important; }
  ul { list-style-type: none !important; }
  ul li { margin-left: 0; padding-left: 0; }
</style>`,frontmatter:{},note:`\u3054\u8CEA\u554F\u304C\u3042\u3063\u305F\u3089\u3001\u79C1\u306E\u30C4\u30A4\u30C3\u30BF\u30FC\u7B49\u3067\u3054\u9060\u616E\u306A\u304F\u805E\u3044\u3066\u304F\u3060\u3055\u3044\u3002

\u4E0B\u306E\u53F3\u306EQR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u53D6\u3063\u3066\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3092\u3082\u3046\u4E00\u5EA6\u8AAD\u3081\u307E\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3068\u30B8\u30A7\u30E0\u306E\u30EA\u30F3\u30AF\u304C\u3044\u3063\u3071\u3044\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u5F79\u306B\u7ACB\u3064\u3068\u601D\u3044\u307E\u3059\u3002\u5F8C\u3067\u305C\u3072\u53C2\u7167\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002

\u3055\u3044\u3054\u306B\u3001\u6211\u3005\u306E\u30D6\u30ED\u30B0\u3092\u304A\u52E7\u3081\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3084\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u306A\u3069\u306E\u3044\u308D\u3044\u308D\u306A\u8A18\u4E8B\u304C\u3042\u308B\u306E\u3067\u3001Ruby on Rails\u3068PostgreSQL\u306B\u8208\u5473\u304C\u3042\u308B\u65B9\u304C\u305F\u304F\u3055\u3093\u306E\u5F79\u306B\u7ACB\u3066\u308B\u8A18\u4E8B\u304C\u3042\u3063\u3066\u3001\u305C\u3072\u8AAD\u3093\u3067\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u306B20\u30F6\u6761\u3050\u3089\u3044\u306E\u8A18\u4E8B\u304C\u65E5\u672C\u8A9E\u306B\u7FFB\u8A33\u3055\u308C\u3066\u3044\u307E\u3059\u3001\u7FFB\u8A33\u3057\u3066\u304F\u3060\u3055\u3063\u305F@hachi8833\u3055\u3093\u306B\u611F\u8B1D\u3044\u305F\u3057\u307E\u3059\u3002

\u4ECA\u65E5\u306F\u3069\u3046\u3082\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002`,index:56,start:2091,end:2154,notesHTML:`<p>\u3054\u8CEA\u554F\u304C\u3042\u3063\u305F\u3089\u3001\u79C1\u306E\u30C4\u30A4\u30C3\u30BF\u30FC\u7B49\u3067\u3054\u9060\u616E\u306A\u304F\u805E\u3044\u3066\u304F\u3060\u3055\u3044\u3002</p>
<p>\u4E0B\u306E\u53F3\u306EQR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u53D6\u3063\u3066\u3001\u3053\u306E\u30B9\u30E9\u30A4\u30C9\u3092\u3082\u3046\u4E00\u5EA6\u8AAD\u3081\u307E\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3068\u30B8\u30A7\u30E0\u306E\u30EA\u30F3\u30AF\u304C\u3044\u3063\u3071\u3044\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u5F79\u306B\u7ACB\u3064\u3068\u601D\u3044\u307E\u3059\u3002\u5F8C\u3067\u305C\u3072\u53C2\u7167\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p>
<p>\u3055\u3044\u3054\u306B\u3001\u6211\u3005\u306E\u30D6\u30ED\u30B0\u3092\u304A\u52E7\u3081\u3057\u305F\u3044\u3068\u601D\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u3084\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u3084\u30C7\u30B6\u30A4\u30F3\u306A\u3069\u306E\u3044\u308D\u3044\u308D\u306A\u8A18\u4E8B\u304C\u3042\u308B\u306E\u3067\u3001Ruby on Rails\u3068PostgreSQL\u306B\u8208\u5473\u304C\u3042\u308B\u65B9\u304C\u305F\u304F\u3055\u3093\u306E\u5F79\u306B\u7ACB\u3066\u308B\u8A18\u4E8B\u304C\u3042\u3063\u3066\u3001\u305C\u3072\u8AAD\u3093\u3067\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u306B20\u30F6\u6761\u3050\u3089\u3044\u306E\u8A18\u4E8B\u304C\u65E5\u672C\u8A9E\u306B\u7FFB\u8A33\u3055\u308C\u3066\u3044\u307E\u3059\u3001\u7FFB\u8A33\u3057\u3066\u304F\u3060\u3055\u3063\u305F@hachi8833\u3055\u3093\u306B\u611F\u8B1D\u3044\u305F\u3057\u307E\u3059\u3002</p>
<p>\u4ECA\u65E5\u306F\u3069\u3046\u3082\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",component:e_,meta:{layout:"end"}}],Je=v6,b6=[{name:"play",path:"/",component:V8,children:[...Je]},{name:"print",path:"/print",component:K8},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Jt(()=>import("./PresenterPrint.e58a2152.js"),["assets/PresenterPrint.e58a2152.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.dfa5dbb5.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Jt(()=>import("./Presenter.9ce7cdf2.js"),["assets/Presenter.9ce7cdf2.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.dfa5dbb5.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.12e03e6d.js","assets/Presenter.e29290d2.css"]),beforeEnter:s=>{if(!Un.remote||Un.remote===s.query.password)return!0;if(Un.remote&&s.query.password===void 0){const t=prompt("Enter password");if(Un.remote===t)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vs=Ng({history:X1("/kaigionrails-postgresql-as-seen-by-rubyists/"),routes:b6});function D6(s,t,{mode:n="replace"}={}){return T({get(){const o=vs.currentRoute.value.query[s];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){ts(()=>{vs[E(n)]({query:{...vs.currentRoute.value.query,[s]:o}})})}})}const Yu=H(0);ts(()=>{vs.afterEach(async()=>{await ts(),Yu.value+=1})});const pt=T(()=>vs.currentRoute.value),ka=T(()=>pt.value.query.print!==void 0),B6=T(()=>pt.value.query.print==="clicks"),Xs=T(()=>pt.value.query.embedded!==void 0),Hs=T(()=>pt.value.path.startsWith("/presenter")),Yn=T(()=>ka.value&&!B6.value),Tr=T(()=>pt.value.query.password),C6=T(()=>!Hs.value&&(!Be.remote||Tr.value===Be.remote)),kc=D6("clicks","0"),Ku=T(()=>Je.length-1),E6=T(()=>pt.value.path),je=T(()=>parseInt(E6.value.split(/\//g).slice(-1)[0])||1);T(()=>kl(je.value));const gs=T(()=>Je.find(s=>s.path===`${je.value}`));T(()=>{var s,t,n;return(n=(t=(s=gs.value)==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:n.id});T(()=>{var s,t;return((t=(s=gs.value)==null?void 0:s.meta)==null?void 0:t.layout)||(je.value===1?"cover":"default")});const Vl=T(()=>Je.find(s=>s.path===`${Math.min(Je.length,je.value+1)}`)),w6=T(()=>{var s,t;return Yu.value,((t=(s=gs.value)==null?void 0:s.meta)==null?void 0:t.__clicksElements)||[]}),Fs=T({get(){if(Yn.value)return 99999;let s=+(kc.value||0);return isNaN(s)&&(s=0),s},set(s){kc.value=s.toString()}}),ol=T(()=>{var s,t,n;return+((n=(t=(s=gs.value)==null?void 0:s.meta)==null?void 0:t.clicks)!=null?n:w6.value.length)}),k6=T(()=>je.value<Je.length-1||Fs.value<ol.value),S6=T(()=>je.value>1||Fs.value>0),x6=T(()=>Je.filter(s=>{var t,n;return(n=(t=s.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((s,t)=>(Sa(s,t),s),[])),T6=T(()=>xa(x6.value,gs.value));T(()=>Ta(T6.value));function bt(){ol.value<=Fs.value?uo():Fs.value+=1}async function Dt(){Fs.value<=0?await yo():Fs.value-=1}function kl(s){return Hs.value?`/presenter/${s}`:`/${s}`}function uo(){const s=Math.min(Je.length,je.value+1);return Cn(s)}async function yo(s=!0){const t=Math.max(1,je.value-1);await Cn(t),s&&ol.value&&vs.replace({query:{...pt.value.query,clicks:ol.value}})}function Cn(s,t){return vs.push({path:kl(s),query:{...pt.value.query,clicks:t}})}function L6(s){const t=H(0),{direction:n,distanceX:o,distanceY:l}=B1(s,{onSwipeStart(r){r.pointerType==="touch"&&(io.value||(t.value=hr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||io.value)return;const a=Math.abs(o.value),c=Math.abs(l.value);a/window.innerWidth>.3||a>100?n.value===tt.LEFT?bt():Dt():(c/window.innerHeight>.4||c>200)&&(n.value===tt.DOWN?yo():uo())}})}async function Lr(){const{saveAs:s}=await Jt(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);s(su(Be.download)?Be.download:Be.exportFilename?`${Be.exportFilename}.pdf`:"/kaigionrails-postgresql-as-seen-by-rubyists/slidev-exported.pdf",`${Be.title}.pdf`)}async function R6(s){var t,n;if(s==null){const o=(n=(t=gs.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;s=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(s)}`),!0}function Sa(s,t,n=1){var l,r,a,c,p;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>n&&s.length>0?Sa(s[s.length-1].children,t,n+1):s.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(p=(c=t.meta)==null?void 0:c.slide)==null?void 0:p.title})}function xa(s,t,n=!1,o){return s.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:n};return r.children.length>0&&(r.children=xa(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Ta(s,t=1){return s.filter(n=>!n.hideInToc).map(n=>({...n,children:Ta(n.children,t+1)}))}function P6(){const s=Be.titleTemplate.replace("%s",Be.title||"Slidev");Dm({title:s}),Lm(`${s} - shared`),$m(`${s} - drawings`);function t(){Hs.value&&(Pi("page",+je.value),Pi("clicks",Fs.value))}vs.afterEach(t),he(Fs,t),Rm(n=>{(+n.page!=+je.value||Fs.value!==n.clicks)&&vs.replace({path:kl(n.page),query:{...vs.currentRoute.value.query,clicks:n.clicks||0}})})}const O6=ye({__name:"App",setup(s){return O(I),P6(),(t,n)=>{const o=An("RouterView"),l=An("StarportCarrier");return D(),U(ke,null,[S(o),S(l)],64)}}});/*!
 * qrcode.vue v3.3.3
 * A Vue.js component to generate QRCode.
 * © 2017-2021 @scopewu(https://github.com/scopewu)
 * MIT License.
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ll=function(){return ll=Object.assign||function(t){for(var n,o=1,l=arguments.length;o<l;o++){n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ll.apply(this,arguments)},Zu={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},$6=Zu;function Xu(s){this.mode=$6.MODE_8BIT_BYTE,this.data=s}Xu.prototype={getLength:function(s){return this.data.length},write:function(s){for(var t=0;t<this.data.length;t++)s.put(this.data.charCodeAt(t),8)}};var F6=Xu,La={L:1,M:0,Q:3,H:2},Oo=La;function Qs(s,t){this.totalCount=s,this.dataCount=t}Qs.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];Qs.getRSBlocks=function(s,t){var n=Qs.getRsBlockTable(s,t);if(n==null)throw new Error("bad rs block @ typeNumber:"+s+"/errorCorrectLevel:"+t);for(var o=n.length/3,l=new Array,r=0;r<o;r++)for(var a=n[r*3+0],c=n[r*3+1],p=n[r*3+2],u=0;u<a;u++)l.push(new Qs(c,p));return l};Qs.getRsBlockTable=function(s,t){switch(t){case Oo.L:return Qs.RS_BLOCK_TABLE[(s-1)*4+0];case Oo.M:return Qs.RS_BLOCK_TABLE[(s-1)*4+1];case Oo.Q:return Qs.RS_BLOCK_TABLE[(s-1)*4+2];case Oo.H:return Qs.RS_BLOCK_TABLE[(s-1)*4+3];default:return}};var N6=Qs;function ey(){this.buffer=new Array,this.length=0}ey.prototype={get:function(s){var t=Math.floor(s/8);return(this.buffer[t]>>>7-s%8&1)==1},put:function(s,t){for(var n=0;n<t;n++)this.putBit((s>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(s){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),s&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var I6=ey,Ls={glog:function(s){if(s<1)throw new Error("glog("+s+")");return Ls.LOG_TABLE[s]},gexp:function(s){for(;s<0;)s+=255;for(;s>=256;)s-=255;return Ls.EXP_TABLE[s]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var es=0;es<8;es++)Ls.EXP_TABLE[es]=1<<es;for(var es=8;es<256;es++)Ls.EXP_TABLE[es]=Ls.EXP_TABLE[es-4]^Ls.EXP_TABLE[es-5]^Ls.EXP_TABLE[es-6]^Ls.EXP_TABLE[es-8];for(var es=0;es<255;es++)Ls.LOG_TABLE[Ls.EXP_TABLE[es]]=es;var sy=Ls,Tt=sy;function jo(s,t){if(s.length==null)throw new Error(s.length+"/"+t);for(var n=0;n<s.length&&s[n]==0;)n++;this.num=new Array(s.length-n+t);for(var o=0;o<s.length-n;o++)this.num[o]=s[o+n]}jo.prototype={get:function(s){return this.num[s]},getLength:function(){return this.num.length},multiply:function(s){for(var t=new Array(this.getLength()+s.getLength()-1),n=0;n<this.getLength();n++)for(var o=0;o<s.getLength();o++)t[n+o]^=Tt.gexp(Tt.glog(this.get(n))+Tt.glog(s.get(o)));return new jo(t,0)},mod:function(s){if(this.getLength()-s.getLength()<0)return this;for(var t=Tt.glog(this.get(0))-Tt.glog(s.get(0)),n=new Array(this.getLength()),o=0;o<this.getLength();o++)n[o]=this.get(o);for(var o=0;o<s.getLength();o++)n[o]^=Tt.gexp(Tt.glog(s.get(o))+t);return new jo(n,0).mod(s)}};var ty=jo,Bs=Zu,Sc=ty,M6=sy,ft={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Ze={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(s){for(var t=s<<10;Ze.getBCHDigit(t)-Ze.getBCHDigit(Ze.G15)>=0;)t^=Ze.G15<<Ze.getBCHDigit(t)-Ze.getBCHDigit(Ze.G15);return(s<<10|t)^Ze.G15_MASK},getBCHTypeNumber:function(s){for(var t=s<<12;Ze.getBCHDigit(t)-Ze.getBCHDigit(Ze.G18)>=0;)t^=Ze.G18<<Ze.getBCHDigit(t)-Ze.getBCHDigit(Ze.G18);return s<<12|t},getBCHDigit:function(s){for(var t=0;s!=0;)t++,s>>>=1;return t},getPatternPosition:function(s){return Ze.PATTERN_POSITION_TABLE[s-1]},getMask:function(s,t,n){switch(s){case ft.PATTERN000:return(t+n)%2==0;case ft.PATTERN001:return t%2==0;case ft.PATTERN010:return n%3==0;case ft.PATTERN011:return(t+n)%3==0;case ft.PATTERN100:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case ft.PATTERN101:return t*n%2+t*n%3==0;case ft.PATTERN110:return(t*n%2+t*n%3)%2==0;case ft.PATTERN111:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+s)}},getErrorCorrectPolynomial:function(s){for(var t=new Sc([1],0),n=0;n<s;n++)t=t.multiply(new Sc([1,M6.gexp(n)],0));return t},getLengthInBits:function(s,t){if(1<=t&&t<10)switch(s){case Bs.MODE_NUMBER:return 10;case Bs.MODE_ALPHA_NUM:return 9;case Bs.MODE_8BIT_BYTE:return 8;case Bs.MODE_KANJI:return 8;default:throw new Error("mode:"+s)}else if(t<27)switch(s){case Bs.MODE_NUMBER:return 12;case Bs.MODE_ALPHA_NUM:return 11;case Bs.MODE_8BIT_BYTE:return 16;case Bs.MODE_KANJI:return 10;default:throw new Error("mode:"+s)}else if(t<41)switch(s){case Bs.MODE_NUMBER:return 14;case Bs.MODE_ALPHA_NUM:return 13;case Bs.MODE_8BIT_BYTE:return 16;case Bs.MODE_KANJI:return 12;default:throw new Error("mode:"+s)}else throw new Error("type:"+t)},getLostPoint:function(s){for(var t=s.getModuleCount(),n=0,o=0;o<t;o++)for(var l=0;l<t;l++){for(var r=0,a=s.isDark(o,l),c=-1;c<=1;c++)if(!(o+c<0||t<=o+c))for(var p=-1;p<=1;p++)l+p<0||t<=l+p||c==0&&p==0||a==s.isDark(o+c,l+p)&&r++;r>5&&(n+=3+r-5)}for(var o=0;o<t-1;o++)for(var l=0;l<t-1;l++){var u=0;s.isDark(o,l)&&u++,s.isDark(o+1,l)&&u++,s.isDark(o,l+1)&&u++,s.isDark(o+1,l+1)&&u++,(u==0||u==4)&&(n+=3)}for(var o=0;o<t;o++)for(var l=0;l<t-6;l++)s.isDark(o,l)&&!s.isDark(o,l+1)&&s.isDark(o,l+2)&&s.isDark(o,l+3)&&s.isDark(o,l+4)&&!s.isDark(o,l+5)&&s.isDark(o,l+6)&&(n+=40);for(var l=0;l<t;l++)for(var o=0;o<t-6;o++)s.isDark(o,l)&&!s.isDark(o+1,l)&&s.isDark(o+2,l)&&s.isDark(o+3,l)&&s.isDark(o+4,l)&&!s.isDark(o+5,l)&&s.isDark(o+6,l)&&(n+=40);for(var y=0,l=0;l<t;l++)for(var o=0;o<t;o++)s.isDark(o,l)&&y++;var d=Math.abs(100*y/t/t-50)/5;return n+=d*10,n}},U6=Ze,q6=F6,ny=N6,oy=I6,kt=U6,z6=ty;function Ws(s,t){this.typeNumber=s,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var Ds=Ws.prototype;Ds.addData=function(s){var t=new q6(s);this.dataList.push(t),this.dataCache=null};Ds.isDark=function(s,t){if(s<0||this.moduleCount<=s||t<0||this.moduleCount<=t)throw new Error(s+","+t);return this.modules[s][t]};Ds.getModuleCount=function(){return this.moduleCount};Ds.make=function(){if(this.typeNumber<1){var s=1;for(s=1;s<40;s++){for(var t=ny.getRSBlocks(s,this.errorCorrectLevel),n=new oy,o=0,l=0;l<t.length;l++)o+=t[l].dataCount;for(var l=0;l<this.dataList.length;l++){var r=this.dataList[l];n.put(r.mode,4),n.put(r.getLength(),kt.getLengthInBits(r.mode,s)),r.write(n)}if(n.getLengthInBits()<=o*8)break}this.typeNumber=s}this.makeImpl(!1,this.getBestMaskPattern())};Ds.makeImpl=function(s,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(s,t),this.typeNumber>=7&&this.setupTypeNumber(s),this.dataCache==null&&(this.dataCache=Ws.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)};Ds.setupPositionProbePattern=function(s,t){for(var n=-1;n<=7;n++)if(!(s+n<=-1||this.moduleCount<=s+n))for(var o=-1;o<=7;o++)t+o<=-1||this.moduleCount<=t+o||(0<=n&&n<=6&&(o==0||o==6)||0<=o&&o<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=o&&o<=4?this.modules[s+n][t+o]=!0:this.modules[s+n][t+o]=!1)};Ds.getBestMaskPattern=function(){for(var s=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var o=kt.getLostPoint(this);(n==0||s>o)&&(s=o,t=n)}return t};Ds.createMovieClip=function(s,t,n){var o=s.createEmptyMovieClip(t,n),l=1;this.make();for(var r=0;r<this.modules.length;r++)for(var a=r*l,c=0;c<this.modules[r].length;c++){var p=c*l,u=this.modules[r][c];u&&(o.beginFill(0,100),o.moveTo(p,a),o.lineTo(p+l,a),o.lineTo(p+l,a+l),o.lineTo(p,a+l),o.endFill())}return o};Ds.setupTimingPattern=function(){for(var s=8;s<this.moduleCount-8;s++)this.modules[s][6]==null&&(this.modules[s][6]=s%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)};Ds.setupPositionAdjustPattern=function(){for(var s=kt.getPatternPosition(this.typeNumber),t=0;t<s.length;t++)for(var n=0;n<s.length;n++){var o=s[t],l=s[n];if(this.modules[o][l]==null)for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)r==-2||r==2||a==-2||a==2||r==0&&a==0?this.modules[o+r][l+a]=!0:this.modules[o+r][l+a]=!1}};Ds.setupTypeNumber=function(s){for(var t=kt.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var o=!s&&(t>>n&1)==1;this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=o}for(var n=0;n<18;n++){var o=!s&&(t>>n&1)==1;this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=o}};Ds.setupTypeInfo=function(s,t){for(var n=this.errorCorrectLevel<<3|t,o=kt.getBCHTypeInfo(n),l=0;l<15;l++){var r=!s&&(o>>l&1)==1;l<6?this.modules[l][8]=r:l<8?this.modules[l+1][8]=r:this.modules[this.moduleCount-15+l][8]=r}for(var l=0;l<15;l++){var r=!s&&(o>>l&1)==1;l<8?this.modules[8][this.moduleCount-l-1]=r:l<9?this.modules[8][15-l-1+1]=r:this.modules[8][15-l-1]=r}this.modules[this.moduleCount-8][8]=!s};Ds.mapData=function(s,t){for(var n=-1,o=this.moduleCount-1,l=7,r=0,a=this.moduleCount-1;a>0;a-=2)for(a==6&&a--;;){for(var c=0;c<2;c++)if(this.modules[o][a-c]==null){var p=!1;r<s.length&&(p=(s[r]>>>l&1)==1);var u=kt.getMask(t,o,a-c);u&&(p=!p),this.modules[o][a-c]=p,l--,l==-1&&(r++,l=7)}if(o+=n,o<0||this.moduleCount<=o){o-=n,n=-n;break}}};Ws.PAD0=236;Ws.PAD1=17;Ws.createData=function(s,t,n){for(var o=ny.getRSBlocks(s,t),l=new oy,r=0;r<n.length;r++){var a=n[r];l.put(a.mode,4),l.put(a.getLength(),kt.getLengthInBits(a.mode,s)),a.write(l)}for(var c=0,r=0;r<o.length;r++)c+=o[r].dataCount;if(l.getLengthInBits()>c*8)throw new Error("code length overflow. ("+l.getLengthInBits()+">"+c*8+")");for(l.getLengthInBits()+4<=c*8&&l.put(0,4);l.getLengthInBits()%8!=0;)l.putBit(!1);for(;!(l.getLengthInBits()>=c*8||(l.put(Ws.PAD0,8),l.getLengthInBits()>=c*8));)l.put(Ws.PAD1,8);return Ws.createBytes(l,o)};Ws.createBytes=function(s,t){for(var n=0,o=0,l=0,r=new Array(t.length),a=new Array(t.length),c=0;c<t.length;c++){var p=t[c].dataCount,u=t[c].totalCount-p;o=Math.max(o,p),l=Math.max(l,u),r[c]=new Array(p);for(var y=0;y<r[c].length;y++)r[c][y]=255&s.buffer[y+n];n+=p;var d=kt.getErrorCorrectPolynomial(u),f=new z6(r[c],d.getLength()-1),m=f.mod(d);a[c]=new Array(d.getLength()-1);for(var y=0;y<a[c].length;y++){var h=y+m.getLength()-a[c].length;a[c][y]=h>=0?m.get(h):0}}for(var A=0,y=0;y<t.length;y++)A+=t[y].totalCount;for(var b=new Array(A),B=0,y=0;y<o;y++)for(var c=0;c<t.length;c++)y<r[c].length&&(b[B++]=r[c][y]);for(var y=0;y<l;y++)for(var c=0;c<t.length;c++)y<a[c].length&&(b[B++]=a[c][y]);return b};var j6=Ws,ly="H",H6=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ry(s,t){var n=La[t],o=new j6(-1,n);return o.addData(Q6(s)),o.make(),o}function ay(s){return s in La}function Q6(s){for(var t="",n=0;n<s.length;n++){var o=s.charCodeAt(n);o<128?t+=String.fromCharCode(o):o<2048?(t+=String.fromCharCode(192|o>>6),t+=String.fromCharCode(128|o&63)):o<55296||o>=57344?(t+=String.fromCharCode(224|o>>12),t+=String.fromCharCode(128|o>>6&63),t+=String.fromCharCode(128|o&63)):(n++,o=65536+((o&1023)<<10|s.charCodeAt(n)&1023),t+=String.fromCharCode(240|o>>18),t+=String.fromCharCode(128|o>>12&63),t+=String.fromCharCode(128|o>>6&63),t+=String.fromCharCode(128|o&63))}return t}function iy(s,t){t===void 0&&(t=0);var n=[];return s.forEach(function(o,l){var r=null;o.forEach(function(a,c){if(!a&&r!==null){n.push("M"+(r+t)+" "+(l+t)+"h"+(c-r)+"v1H"+(r+t)+"z"),r=null;return}if(c===o.length-1){if(!a)return;r===null?n.push("M"+(c+t)+","+(l+t)+" h1v1H"+(c+t)+"z"):n.push("M"+(r+t)+","+(l+t)+" h"+(c+1-r)+"v1H"+(r+t)+"z");return}a&&r===null&&(r=c)})}),n.join("")}var Ra={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:ly,validator:function(s){return ay(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},V6=ll(ll({},Ra),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),J6=ye({name:"QRCodeSvg",props:Ra,setup:function(s){var t=H(0),n=H(""),o=function(){var l=s.value,r=s.level,a=s.margin,c=ry(l,r).modules;t.value=c.length+a*2,n.value=iy(c,a)};return o(),mo(o),function(){return Ye("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.value+" "+t.value},[Ye("path",{fill:s.background,d:"M0,0 h"+t.value+"v"+t.value+"H0z"}),Ye("path",{fill:s.foreground,d:n.value})])}}}),W6=ye({name:"QRCodeCanvas",props:Ra,setup:function(s){var t=H(null),n=function(){var o=s.value,l=s.level,r=s.size,a=s.margin,c=s.background,p=s.foreground,u=ry(o,l).modules,y=u.length+a*2,d=t.value;if(!!d){var f=d.getContext("2d");if(!!f){var m=window.devicePixelRatio||1,h=r/y*m;d.height=d.width=r*m,f.scale(h,h),f.fillStyle=c,f.fillRect(0,0,y,y),f.fillStyle=p,H6?f.fill(new Path2D(iy(u,a))):u.forEach(function(A,b){A.forEach(function(B,w){B&&f.fillRect(w+a,b+a,1,1)})})}}};return rt(n),mo(n),function(){return Ye("canvas",{ref:t,style:{width:s.size+"px",height:s.size+"px"}})}}}),G6=ye({name:"Qrcode",render:function(){var s=this.$props,t=s.renderAs,n=s.value,o=s.size,l=s.margin,r=s.level,a=s.background,c=s.foreground,p=o>>>0,u=l>>>0,y=ay(r)?r:ly;return Ye(t==="svg"?J6:W6,{value:n,size:p,margin:u,level:y,background:a,foreground:c})},props:V6});const Y6=({app:s,router:t})=>{s.component("qr-code-vue",G6)};function Jl(s){return s!==null&&typeof s=="object"}function Rr(s,t,n=".",o){if(!Jl(t))return Rr(s,{},n,o);const l=Object.assign({},t);for(const r in s){if(r==="__proto__"||r==="constructor")continue;const a=s[r];a!=null&&(o&&o(l,r,a,n)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=a.concat(l[r]):Jl(a)&&Jl(l[r])?l[r]=Rr(a,l[r],(n?`${n}.`:"")+r.toString(),o):l[r]=a))}return l}function K6(s){return(...t)=>t.reduce((n,o)=>Rr(n,o,"",s),{})}const Z6=K6(),cy=1/60*1e3,X6=typeof performance<"u"?()=>performance.now():()=>Date.now(),py=typeof window<"u"?s=>window.requestAnimationFrame(s):s=>setTimeout(()=>s(X6()),cy);function eB(s){let t=[],n=[],o=0,l=!1,r=!1;const a=new WeakSet,c={schedule:(p,u=!1,y=!1)=>{const d=y&&l,f=d?t:n;return u&&a.add(p),f.indexOf(p)===-1&&(f.push(p),d&&l&&(o=t.length)),p},cancel:p=>{const u=n.indexOf(p);u!==-1&&n.splice(u,1),a.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const y=t[u];y(p),a.has(y)&&(c.schedule(y),s())}l=!1,r&&(r=!1,c.process(p))}};return c}const sB=40;let Pr=!0,fo=!1,Or=!1;const gn={delta:0,timestamp:0},bo=["read","update","preRender","render","postRender"],Sl=bo.reduce((s,t)=>(s[t]=eB(()=>fo=!0),s),{}),$r=bo.reduce((s,t)=>{const n=Sl[t];return s[t]=(o,l=!1,r=!1)=>(fo||oB(),n.schedule(o,l,r)),s},{}),tB=bo.reduce((s,t)=>(s[t]=Sl[t].cancel,s),{});bo.reduce((s,t)=>(s[t]=()=>Sl[t].process(gn),s),{});const nB=s=>Sl[s].process(gn),uy=s=>{fo=!1,gn.delta=Pr?cy:Math.max(Math.min(s-gn.timestamp,sB),1),gn.timestamp=s,Or=!0,bo.forEach(nB),Or=!1,fo&&(Pr=!1,py(uy))},oB=()=>{fo=!0,Pr=!0,Or||py(uy)},yy=()=>gn;function dy(s,t){var n={};for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(s);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(s,o[l])&&(n[o[l]]=s[o[l]]);return n}var lB=function(){},xc=function(){};const Fr=(s,t,n)=>Math.min(Math.max(n,s),t),Wl=.001,rB=.01,Tc=10,aB=.05,iB=1;function cB({duration:s=800,bounce:t=.25,velocity:n=0,mass:o=1}){let l,r;lB(s<=Tc*1e3);let a=1-t;a=Fr(aB,iB,a),s=Fr(rB,Tc,s/1e3),a<1?(l=u=>{const y=u*a,d=y*s,f=y-n,m=Nr(u,a),h=Math.exp(-d);return Wl-f/m*h},r=u=>{const d=u*a*s,f=d*n+n,m=Math.pow(a,2)*Math.pow(u,2)*s,h=Math.exp(-d),A=Nr(Math.pow(u,2),a);return(-l(u)+Wl>0?-1:1)*((f-m)*h)/A}):(l=u=>{const y=Math.exp(-u*s),d=(u-n)*s+1;return-Wl+y*d},r=u=>{const y=Math.exp(-u*s),d=(n-u)*(s*s);return y*d});const c=5/s,p=uB(l,r,c);if(s=s*1e3,isNaN(p))return{stiffness:100,damping:10,duration:s};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:s}}}const pB=12;function uB(s,t,n){let o=n;for(let l=1;l<pB;l++)o=o-s(o)/t(o);return o}function Nr(s,t){return s*Math.sqrt(1-t*t)}const yB=["duration","bounce"],dB=["stiffness","damping","mass"];function Lc(s,t){return t.some(n=>s[n]!==void 0)}function fB(s){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},s);if(!Lc(s,dB)&&Lc(s,yB)){const n=cB(s);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Pa(s){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:l}=s,r=dy(s,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:c,damping:p,mass:u,velocity:y,duration:d,isResolvedFromDuration:f}=fB(r),m=Rc,h=Rc;function A(){const b=y?-(y/1e3):0,B=n-t,w=p/(2*Math.sqrt(c*u)),C=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-t)/100,.4)),w<1){const x=Nr(C,w);m=N=>{const M=Math.exp(-w*C*N);return n-M*((b+w*C*B)/x*Math.sin(x*N)+B*Math.cos(x*N))},h=N=>{const M=Math.exp(-w*C*N);return w*C*M*(Math.sin(x*N)*(b+w*C*B)/x+B*Math.cos(x*N))-M*(Math.cos(x*N)*(b+w*C*B)-x*B*Math.sin(x*N))}}else if(w===1)m=x=>n-Math.exp(-C*x)*(B+(b+C*B)*x);else{const x=C*Math.sqrt(w*w-1);m=N=>{const M=Math.exp(-w*C*N),P=Math.min(x*N,300);return n-M*((b+w*C*B)*Math.sinh(P)+x*B*Math.cosh(P))/x}}}return A(),{next:b=>{const B=m(b);if(f)a.done=b>=d;else{const w=h(b)*1e3,C=Math.abs(w)<=o,x=Math.abs(n-B)<=l;a.done=C&&x}return a.value=a.done?n:B,a},flipTarget:()=>{y=-y,[t,n]=[n,t],A()}}}Pa.needsInterpolation=(s,t)=>typeof s=="string"||typeof t=="string";const Rc=s=>0,fy=(s,t,n)=>{const o=t-s;return o===0?1:(n-s)/o},Oa=(s,t,n)=>-n*s+n*t+s,hy=(s,t)=>n=>Math.max(Math.min(n,t),s),Kn=s=>s%1?Number(s.toFixed(5)):s,ho=/(-)?([\d]*\.?[\d])+/g,Ir=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hB=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Do(s){return typeof s=="string"}const Bo={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},Zn=Object.assign(Object.assign({},Bo),{transform:hy(0,1)}),$o=Object.assign(Object.assign({},Bo),{default:1}),$a=s=>({test:t=>Do(t)&&t.endsWith(s)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${s}`}),Lt=$a("deg"),Xn=$a("%"),pe=$a("px"),Pc=Object.assign(Object.assign({},Xn),{parse:s=>Xn.parse(s)/100,transform:s=>Xn.transform(s*100)}),Fa=(s,t)=>n=>Boolean(Do(n)&&hB.test(n)&&n.startsWith(s)||t&&Object.prototype.hasOwnProperty.call(n,t)),my=(s,t,n)=>o=>{if(!Do(o))return o;const[l,r,a,c]=o.match(ho);return{[s]:parseFloat(l),[t]:parseFloat(r),[n]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},zt={test:Fa("hsl","hue"),parse:my("hue","saturation","lightness"),transform:({hue:s,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(s)+", "+Xn.transform(Kn(t))+", "+Xn.transform(Kn(n))+", "+Kn(Zn.transform(o))+")"},mB=hy(0,255),Gl=Object.assign(Object.assign({},Bo),{transform:s=>Math.round(mB(s))}),gt={test:Fa("rgb","red"),parse:my("red","green","blue"),transform:({red:s,green:t,blue:n,alpha:o=1})=>"rgba("+Gl.transform(s)+", "+Gl.transform(t)+", "+Gl.transform(n)+", "+Kn(Zn.transform(o))+")"};function gB(s){let t="",n="",o="",l="";return s.length>5?(t=s.substr(1,2),n=s.substr(3,2),o=s.substr(5,2),l=s.substr(7,2)):(t=s.substr(1,1),n=s.substr(2,1),o=s.substr(3,1),l=s.substr(4,1),t+=t,n+=n,o+=o,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Mr={test:Fa("#"),parse:gB,transform:gt.transform},ys={test:s=>gt.test(s)||Mr.test(s)||zt.test(s),parse:s=>gt.test(s)?gt.parse(s):zt.test(s)?zt.parse(s):Mr.parse(s),transform:s=>Do(s)?s:s.hasOwnProperty("red")?gt.transform(s):zt.transform(s)},gy="${c}",_y="${n}";function _B(s){var t,n,o,l;return isNaN(s)&&Do(s)&&((n=(t=s.match(ho))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((l=(o=s.match(Ir))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Ay(s){typeof s=="number"&&(s=`${s}`);const t=[];let n=0;const o=s.match(Ir);o&&(n=o.length,s=s.replace(Ir,gy),t.push(...o.map(ys.parse)));const l=s.match(ho);return l&&(s=s.replace(ho,_y),t.push(...l.map(Bo.parse))),{values:t,numColors:n,tokenised:s}}function vy(s){return Ay(s).values}function by(s){const{values:t,numColors:n,tokenised:o}=Ay(s),l=t.length;return r=>{let a=o;for(let c=0;c<l;c++)a=a.replace(c<n?gy:_y,c<n?ys.transform(r[c]):Kn(r[c]));return a}}const AB=s=>typeof s=="number"?0:s;function vB(s){const t=vy(s);return by(s)(t.map(AB))}const Co={test:_B,parse:vy,createTransformer:by,getAnimatableNone:vB},bB=new Set(["brightness","contrast","saturate","opacity"]);function DB(s){let[t,n]=s.slice(0,-1).split("(");if(t==="drop-shadow")return s;const[o]=n.match(ho)||[];if(!o)return s;const l=n.replace(o,"");let r=bB.has(t)?1:0;return o!==n&&(r*=100),t+"("+r+l+")"}const BB=/([a-z-]*)\(.*?\)/g,Ur=Object.assign(Object.assign({},Co),{getAnimatableNone:s=>{const t=s.match(BB);return t?t.map(DB).join(" "):s}});function Yl(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*(2/3-n)*6:s}function Oc({hue:s,saturation:t,lightness:n,alpha:o}){s/=360,t/=100,n/=100;let l=0,r=0,a=0;if(!t)l=r=a=n;else{const c=n<.5?n*(1+t):n+t-n*t,p=2*n-c;l=Yl(p,c,s+1/3),r=Yl(p,c,s),a=Yl(p,c,s-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const CB=(s,t,n)=>{const o=s*s,l=t*t;return Math.sqrt(Math.max(0,n*(l-o)+o))},EB=[Mr,gt,zt],$c=s=>EB.find(t=>t.test(s)),Dy=(s,t)=>{let n=$c(s),o=$c(t),l=n.parse(s),r=o.parse(t);n===zt&&(l=Oc(l),n=gt),o===zt&&(r=Oc(r),o=gt);const a=Object.assign({},l);return c=>{for(const p in a)p!=="alpha"&&(a[p]=CB(l[p],r[p],c));return a.alpha=Oa(l.alpha,r.alpha,c),n.transform(a)}},wB=s=>typeof s=="number",kB=(s,t)=>n=>t(s(n)),By=(...s)=>s.reduce(kB);function Cy(s,t){return wB(s)?n=>Oa(s,t,n):ys.test(s)?Dy(s,t):wy(s,t)}const Ey=(s,t)=>{const n=[...s],o=n.length,l=s.map((r,a)=>Cy(r,t[a]));return r=>{for(let a=0;a<o;a++)n[a]=l[a](r);return n}},SB=(s,t)=>{const n=Object.assign(Object.assign({},s),t),o={};for(const l in n)s[l]!==void 0&&t[l]!==void 0&&(o[l]=Cy(s[l],t[l]));return l=>{for(const r in o)n[r]=o[r](l);return n}};function Fc(s){const t=Co.parse(s),n=t.length;let o=0,l=0,r=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?r++:l++;return{parsed:t,numNumbers:o,numRGB:l,numHSL:r}}const wy=(s,t)=>{const n=Co.createTransformer(t),o=Fc(s),l=Fc(t);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?By(Ey(o.parsed,l.parsed),n):a=>`${a>0?t:s}`},xB=(s,t)=>n=>Oa(s,t,n);function TB(s){if(typeof s=="number")return xB;if(typeof s=="string")return ys.test(s)?Dy:wy;if(Array.isArray(s))return Ey;if(typeof s=="object")return SB}function LB(s,t,n){const o=[],l=n||TB(s[0]),r=s.length-1;for(let a=0;a<r;a++){let c=l(s[a],s[a+1]);if(t){const p=Array.isArray(t)?t[a]:t;c=By(p,c)}o.push(c)}return o}function RB([s,t],[n]){return o=>n(fy(s,t,o))}function PB(s,t){const n=s.length,o=n-1;return l=>{let r=0,a=!1;if(l<=s[0]?a=!0:l>=s[o]&&(r=o-1,a=!0),!a){let p=1;for(;p<n&&!(s[p]>l||p===o);p++);r=p-1}const c=fy(s[r],s[r+1],l);return t[r](c)}}function ky(s,t,{clamp:n=!0,ease:o,mixer:l}={}){const r=s.length;xc(r===t.length),xc(!o||!Array.isArray(o)||o.length===r-1),s[0]>s[r-1]&&(s=[].concat(s),t=[].concat(t),s.reverse(),t.reverse());const a=LB(t,o,l),c=r===2?RB(s,a):PB(s,a);return n?p=>c(Fr(s[0],s[r-1],p)):c}const xl=s=>t=>1-s(1-t),Na=s=>t=>t<=.5?s(2*t)/2:(2-s(2*(1-t)))/2,OB=s=>t=>Math.pow(t,s),Sy=s=>t=>t*t*((s+1)*t-s),$B=s=>{const t=Sy(s);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},xy=1.525,FB=4/11,NB=8/11,IB=9/10,Ty=s=>s,Ia=OB(2),MB=xl(Ia),Ly=Na(Ia),Ry=s=>1-Math.sin(Math.acos(s)),Py=xl(Ry),UB=Na(Py),Ma=Sy(xy),qB=xl(Ma),zB=Na(Ma),jB=$B(xy),HB=4356/361,QB=35442/1805,VB=16061/1805,rl=s=>{if(s===1||s===0)return s;const t=s*s;return s<FB?7.5625*t:s<NB?9.075*t-9.9*s+3.4:s<IB?HB*t-QB*s+VB:10.8*s*s-20.52*s+10.72},JB=xl(rl),WB=s=>s<.5?.5*(1-rl(1-s*2)):.5*rl(s*2-1)+.5;function GB(s,t){return s.map(()=>t||Ly).splice(0,s.length-1)}function YB(s){const t=s.length;return s.map((n,o)=>o!==0?o/(t-1):0)}function KB(s,t){return s.map(n=>n*t)}function Ho({from:s=0,to:t=1,ease:n,offset:o,duration:l=300}){const r={done:!1,value:s},a=Array.isArray(t)?t:[s,t],c=KB(o&&o.length===a.length?o:YB(a),l);function p(){return ky(c,a,{ease:Array.isArray(n)?n:GB(a,n)})}let u=p();return{next:y=>(r.value=u(y),r.done=y>=l,r),flipTarget:()=>{a.reverse(),u=p()}}}function ZB({velocity:s=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:t};let c=n*s;const p=t+c,u=r===void 0?p:r(p);return u!==p&&(c=u-t),{next:y=>{const d=-c*Math.exp(-y/o);return a.done=!(d>l||d<-l),a.value=a.done?u:u+d,a},flipTarget:()=>{}}}const Nc={keyframes:Ho,spring:Pa,decay:ZB};function XB(s){if(Array.isArray(s.to))return Ho;if(Nc[s.type])return Nc[s.type];const t=new Set(Object.keys(s));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Ho:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Pa:Ho}function Oy(s,t,n=0){return s-t-n}function eC(s,t,n=0,o=!0){return o?Oy(t+-s,t,n):t-(s-t)+n}function sC(s,t,n,o){return o?s>=t+n:s<=-n}const tC=s=>{const t=({delta:n})=>s(n);return{start:()=>$r.update(t,!0),stop:()=>tB.update(t)}};function $y(s){var t,n,{from:o,autoplay:l=!0,driver:r=tC,elapsed:a=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:y,onStop:d,onComplete:f,onRepeat:m,onUpdate:h}=s,A=dy(s,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=A,B,w=0,C=A.duration,x,N=!1,M=!0,P;const G=XB(A);!((n=(t=G).needsInterpolation)===null||n===void 0)&&n.call(t,o,b)&&(P=ky([0,100],[o,b],{clamp:!1}),o=0,b=100);const re=G(Object.assign(Object.assign({},A),{from:o,to:b}));function de(){w++,p==="reverse"?(M=w%2===0,a=eC(a,C,u,M)):(a=Oy(a,C,u),p==="mirror"&&re.flipTarget()),N=!1,m&&m()}function ve(){B.stop(),f&&f()}function We(Ie){if(M||(Ie=-Ie),a+=Ie,!N){const Re=re.next(Math.max(0,a));x=Re.value,P&&(x=P(x)),N=M?Re.done:a<=0}h==null||h(x),N&&(w===0&&(C!=null||(C=a)),w<c?sC(a,C,u,M)&&de():ve())}function He(){y==null||y(),B=r(We),B.start()}return l&&He(),{stop:()=>{d==null||d(),B.stop()}}}function Fy(s,t){return t?s*(1e3/t):0}function nC({from:s=0,velocity:t=0,min:n,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:y,onUpdate:d,onComplete:f,onStop:m}){let h;function A(C){return n!==void 0&&C<n||o!==void 0&&C>o}function b(C){return n===void 0?o:o===void 0||Math.abs(n-C)<Math.abs(o-C)?n:o}function B(C){h==null||h.stop(),h=$y(Object.assign(Object.assign({},C),{driver:y,onUpdate:x=>{var N;d==null||d(x),(N=C.onUpdate)===null||N===void 0||N.call(C,x)},onComplete:f,onStop:m}))}function w(C){B(Object.assign({type:"spring",stiffness:a,damping:c,restDelta:p},C))}if(A(s))w({from:s,velocity:t,to:b(s)});else{let C=l*t+s;typeof u<"u"&&(C=u(C));const x=b(C),N=x===n?-1:1;let M,P;const G=re=>{M=P,P=re,t=Fy(re-M,yy().delta),(N===1&&re>x||N===-1&&re<x)&&w({from:re,to:x,velocity:t})};B({type:"decay",from:s,velocity:t,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:A(C)?G:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const Ny=(s,t)=>1-3*t+3*s,Iy=(s,t)=>3*t-6*s,My=s=>3*s,al=(s,t,n)=>((Ny(t,n)*s+Iy(t,n))*s+My(t))*s,Uy=(s,t,n)=>3*Ny(t,n)*s*s+2*Iy(t,n)*s+My(t),oC=1e-7,lC=10;function rC(s,t,n,o,l){let r,a,c=0;do a=t+(n-t)/2,r=al(a,o,l)-s,r>0?n=a:t=a;while(Math.abs(r)>oC&&++c<lC);return a}const aC=8,iC=.001;function cC(s,t,n,o){for(let l=0;l<aC;++l){const r=Uy(t,n,o);if(r===0)return t;const a=al(t,n,o)-s;t-=a/r}return t}const Qo=11,Fo=1/(Qo-1);function pC(s,t,n,o){if(s===t&&n===o)return Ty;const l=new Float32Array(Qo);for(let a=0;a<Qo;++a)l[a]=al(a*Fo,s,n);function r(a){let c=0,p=1;const u=Qo-1;for(;p!==u&&l[p]<=a;++p)c+=Fo;--p;const y=(a-l[p])/(l[p+1]-l[p]),d=c+y*Fo,f=Uy(d,s,n);return f>=iC?cC(a,d,s,n):f===0?d:rC(a,c,c+Fo,s,n)}return a=>a===0||a===1?a:al(r(a),t,o)}const Kl={};class uC{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(t,n,o)}clear(){this.subscriptions.clear()}}const Ic=s=>!isNaN(parseFloat(s));class yC{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new uC,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:l}=yy();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),$r.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>$r.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Ic(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Ic(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Fy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function dC(s){return new yC(s)}const{isArray:fC}=Array;function hC(){const s=H({}),t=o=>{const l=r=>{!s.value[r]||(s.value[r].stop(),s.value[r].destroy(),delete s.value[r])};o?fC(o)?o.forEach(l):l(o):Object.keys(s.value).forEach(l)},n=(o,l,r)=>{if(s.value[o])return s.value[o];const a=dC(l);return a.onChange(c=>r[o]=c),s.value[o]=a,a};return ou(t),{motionValues:s,get:n,stop:t}}const mC=s=>Array.isArray(s),Rt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Zl=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),gC=s=>({type:"spring",stiffness:550,damping:s===0?100:30,restDelta:.01,restSpeed:10}),Xl=()=>({type:"keyframes",ease:"linear",duration:300}),_C=s=>({type:"keyframes",duration:800,values:s}),Mc={default:gC,x:Rt,y:Rt,z:Rt,rotate:Rt,rotateX:Rt,rotateY:Rt,rotateZ:Rt,scaleX:Zl,scaleY:Zl,scale:Zl,backgroundColor:Xl,color:Xl,opacity:Xl},qy=(s,t)=>{let n;return mC(t)?n=_C:n=Mc[s]||Mc.default,{to:t,...n(t)}},Uc={...Bo,transform:Math.round},zy={color:ys,backgroundColor:ys,outlineColor:ys,fill:ys,stroke:ys,borderColor:ys,borderTopColor:ys,borderRightColor:ys,borderBottomColor:ys,borderLeftColor:ys,borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,size:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,rotate:Lt,rotateX:Lt,rotateY:Lt,rotateZ:Lt,scale:$o,scaleX:$o,scaleY:$o,scaleZ:$o,skew:Lt,skewX:Lt,skewY:Lt,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:Zn,originX:Pc,originY:Pc,originZ:pe,zIndex:Uc,filter:Ur,WebkitFilter:Ur,fillOpacity:Zn,strokeOpacity:Zn,numOctaves:Uc},Ua=s=>zy[s],jy=(s,t)=>t&&typeof s=="number"&&t.transform?t.transform(s):s;function AC(s,t){let n=Ua(s);return n!==Ur&&(n=Co),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const vC={linear:Ty,easeIn:Ia,easeInOut:Ly,easeOut:MB,circIn:Ry,circInOut:UB,circOut:Py,backIn:Ma,backInOut:zB,backOut:qB,anticipate:jB,bounceIn:JB,bounceInOut:WB,bounceOut:rl},qc=s=>{if(Array.isArray(s)){const[t,n,o,l]=s;return pC(t,n,o,l)}else if(typeof s=="string")return vC[s];return s},bC=s=>Array.isArray(s)&&typeof s[0]!="number",zc=(s,t)=>s==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Co.test(t)&&!t.startsWith("url("));function DC(s){return Array.isArray(s.to)&&s.to[0]===null&&(s.to=[...s.to],s.to[0]=s.from),s}function BC({ease:s,times:t,delay:n,...o}){const l={...o};return t&&(l.offset=t),s&&(l.ease=bC(s)?s.map(qc):qc(s)),n&&(l.elapsed=-n),l}function CC(s,t,n){return Array.isArray(t.to)&&(s.duration||(s.duration=800)),DC(t),EC(s)||(s={...s,...qy(n,t.to)}),{...t,...BC(s)}}function EC({delay:s,repeat:t,repeatType:n,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function wC(s,t){return s[t]||s.default||s}function kC(s,t,n,o,l){const r=wC(o,s);let a=r.from===null||r.from===void 0?t.get():r.from;const c=zc(s,n);a==="none"&&c&&typeof n=="string"&&(a=AC(s,n));const p=zc(s,a);function u(d){const f={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return r.type==="inertia"||r.type==="decay"?nC({...f,...r}):$y({...CC(r,f,s),onUpdate:m=>{f.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),d&&d()}})}function y(d){return t.set(n),o.onComplete&&o.onComplete(),l&&l(),d&&d(),{stop:()=>{}}}return!p||!c||r.type===!1?y:u}function SC(){const{motionValues:s,stop:t,get:n}=hC();return{motionValues:s,stop:t,push:(l,r,a,c={},p)=>{const u=a[l],y=n(l,u,a);if(c&&c.immediate){y.set(r);return}const d=kC(l,y,r,c,p);y.start(d)}}}function xC(s,t={},{motionValues:n,push:o,stop:l}=SC()){const r=E(t),a=H(!1);he(n,d=>{a.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=d=>{if(!r||!r[d])throw new Error(`The variant ${d} does not exist.`);return r[d]},p=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([f,m])=>{if(f!=="transition")return new Promise(h=>o(f,m,s,d.transition||qy(f,d[f]),h))}).filter(Boolean)));return{isAnimating:a,apply:p,set:d=>{const f=fr(d)?d:c(d);Object.entries(f).forEach(([m,h])=>{m!=="transition"&&o(m,h,s,{immediate:!0})})},leave:async d=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){d();return}await p(f),d()},stop:l}}const qa=typeof window<"u",TC=()=>qa&&window.onpointerdown===null,LC=()=>qa&&window.ontouchstart===null,RC=()=>qa&&window.onmousedown===null;function PC({target:s,state:t,variants:n,apply:o}){const l=E(n),r=H(!1),a=H(!1),c=H(!1),p=T(()=>{let y=[];return l&&(l.hovered&&(y=[...y,...Object.keys(l.hovered)]),l.tapped&&(y=[...y,...Object.keys(l.tapped)]),l.focused&&(y=[...y,...Object.keys(l.focused)])),y}),u=T(()=>{const y={};Object.assign(y,t.value),r.value&&l.hovered&&Object.assign(y,l.hovered),a.value&&l.tapped&&Object.assign(y,l.tapped),c.value&&l.focused&&Object.assign(y,l.focused);for(const d in y)p.value.includes(d)||delete y[d];return y});l.hovered&&(ue(s,"mouseenter",()=>r.value=!0),ue(s,"mouseleave",()=>{r.value=!1,a.value=!1}),ue(s,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(RC()&&(ue(s,"mousedown",()=>a.value=!0),ue(s,"mouseup",()=>a.value=!1)),TC()&&(ue(s,"pointerdown",()=>a.value=!0),ue(s,"pointerup",()=>a.value=!1)),LC()&&(ue(s,"touchstart",()=>a.value=!0),ue(s,"touchend",()=>a.value=!1))),l.focused&&(ue(s,"focus",()=>c.value=!0),ue(s,"blur",()=>c.value=!1)),he(u,o)}function OC({set:s,target:t,apply:n,variants:o,variant:l}){const r=E(o);he(()=>t,()=>{!r||(r.initial&&s("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function $C({state:s,apply:t}){he(s,n=>{n&&t(n)},{immediate:!0})}function FC({target:s,variants:t,variant:n}){const o=E(t);o&&(o.visible||o.visibleOnce)&&v1(s,([{isIntersecting:l}])=>{o.visible?l?n.value="visible":n.value="initial":o.visibleOnce&&(l&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function NC(s,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&OC(s),t.syncVariants&&$C(s),t.visibilityHooks&&FC(s),t.eventListeners&&PC(s)}function Hy(s={}){const t=$e({...s}),n=H({});return he(t,()=>{const o={};for(const[l,r]of Object.entries(t)){const a=Ua(l),c=jy(r,a);o[l]=c}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function za(s,t){he(()=>Ps(s),n=>{!n||t(n)},{immediate:!0})}const IC={x:"translateX",y:"translateY",z:"translateZ"};function Qy(s={},t=!0){const n=$e({...s}),o=H("");return he(n,l=>{let r="",a=!1;if(t&&(l.x||l.y||l.z)){const c=[l.x||0,l.y||0,l.z||0].map(pe.transform).join(",");r+=`translate3d(${c}) `,a=!0}for(const[c,p]of Object.entries(l)){if(t&&(c==="x"||c==="y"||c==="z"))continue;const u=Ua(c),y=jy(p,u);r+=`${IC[c]||c}(${y}) `}t&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const MC=["","X","Y","Z"],UC=["perspective","translate","scale","rotate","skew"],Vy=["transformPerspective","x","y","z"];UC.forEach(s=>{MC.forEach(t=>{const n=s+t;Vy.push(n)})});const qC=new Set(Vy);function ja(s){return qC.has(s)}const zC=new Set(["originX","originY","originZ"]);function Jy(s){return zC.has(s)}function jC(s){const t={},n={};return Object.entries(s).forEach(([o,l])=>{ja(o)||Jy(o)?t[o]=l:n[o]=l}),{transform:t,style:n}}function Wy(s){const{transform:t,style:n}=jC(s),{transform:o}=Qy(t),{style:l}=Hy(n);return o.value&&(l.value.transform=o.value),l.value}function HC(s,t){let n,o;const{state:l,style:r}=Hy();return za(s,a=>{o=a;for(const c of Object.keys(zy))a.style[c]===null||a.style[c]===""||ja(c)||Jy(c)||(l[c]=a.style[c]);n&&Object.entries(n).forEach(([c,p])=>a.style[c]=p),t&&t(l)}),he(r,a=>{if(!o){n=a;return}for(const c in a)o.style[c]=a[c]},{immediate:!0}),{style:l}}function QC(s){const t=s.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),p=a.split(",").map(y=>n(y.endsWith(")")?y.replace(")",""):y.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function VC(s,t){Object.entries(QC(t)).forEach(([n,o])=>{const l=["x","y","z"];if(n==="translate3d"){if(o===0){l.forEach(r=>s[r]=0);return}o.forEach((r,a)=>s[l[a]]=r);return}if(o=parseFloat(o),n==="translateX"){s.x=o;return}if(n==="translateY"){s.y=o;return}if(n==="translateZ"){s.z=o;return}s[n]=o})}function JC(s,t){let n,o;const{state:l,transform:r}=Qy();return za(s,a=>{o=a,a.style.transform&&VC(l,a.style.transform),n&&(a.style.transform=n),t&&t(l)}),he(r,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function WC(s,t){const n=$e({}),o=a=>Object.entries(a).forEach(([c,p])=>n[c]=p),{style:l}=HC(s,o),{transform:r}=JC(s,o);return he(n,a=>{Object.entries(a).forEach(([c,p])=>{const u=ja(c)?r:l;u[c]&&u[c]===p||(u[c]=p)})},{immediate:!0,deep:!0}),za(s,()=>t&&o(t)),{motionProperties:n,style:l,transform:r}}function GC(s={}){const t=E(s),n=H();return{state:T(()=>{if(!!n.value)return t[n.value]}),variant:n}}function Gy(s,t={},n){const{motionProperties:o}=WC(s),{variant:l,state:r}=GC(t),a=xC(o,t),c={target:s,variant:l,variants:t,state:r,motionProperties:o,...a};return NC(c,n),c}const YC=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],KC=(s,t)=>{const n=s.props?s.props:s.data&&s.data.attrs?s.data.attrs:{};n&&(n.variants&&fr(n.variants)&&(t.value={...t.value,...n.variants}),YC.forEach(o=>{if(o==="delay"){if(n&&n[o]&&$h(n[o])){const l=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:l,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:l,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:l,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&fr(n[o])&&(t.value[o]=n[o])}))},er=s=>({created:(n,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Kl[r]&&Kl[r].stop();const a=H(s||{});typeof o.value=="object"&&(a.value=o.value),KC(l,a);const c=Gy(n,a);n.motionInstance=c,r&&(Kl[r]=c)},getSSRProps(n,o){let{initial:l}=n.value||o&&(o==null?void 0:o.props)||{};l=E(l);const r=Z6((s==null?void 0:s.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:Wy(r)}}}),ZC={initial:{opacity:0},enter:{opacity:1}},XC={initial:{opacity:0},visible:{opacity:1}},eE={initial:{opacity:0},visibleOnce:{opacity:1}},sE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},tE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},nE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},oE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},lE={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},rE={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},aE={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},iE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},cE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},pE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},uE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},yE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},dE={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},fE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},hE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},mE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},gE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},_E={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},AE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},vE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},bE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},DE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},BE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},CE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},EE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},wE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},kE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},qr={__proto__:null,fade:ZC,fadeVisible:XC,fadeVisibleOnce:eE,pop:sE,popVisible:tE,popVisibleOnce:nE,rollBottom:dE,rollLeft:oE,rollRight:aE,rollTop:pE,rollVisibleBottom:fE,rollVisibleLeft:lE,rollVisibleRight:iE,rollVisibleTop:uE,rollVisibleOnceBottom:hE,rollVisibleOnceLeft:rE,rollVisibleOnceRight:cE,rollVisibleOnceTop:yE,slideBottom:EE,slideLeft:mE,slideRight:AE,slideTop:DE,slideVisibleBottom:wE,slideVisibleLeft:gE,slideVisibleRight:vE,slideVisibleTop:BE,slideVisibleOnceBottom:kE,slideVisibleOnceLeft:_E,slideVisibleOnceRight:bE,slideVisibleOnceTop:CE},SE=ye({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(s){var c;const t=lh(),n=$e({});if(!s.is&&!t.default)return()=>Ye("div",{});const o=T(()=>{let p;return s.preset&&(p=qr[s.preset]),p}),l=T(()=>({initial:s.initial,enter:s.enter,leave:s.leave,visible:s.visible,visibleOnce:s.visibleOnce,hovered:s.hovered,tapped:s.tapped,focused:s.focused})),r=T(()=>{const p={...l.value,...o.value||{},...s.variants||{}};return s.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(s.delay)),p}),a=T(()=>{if(!s.is)return;let p=s.is;return typeof a.value=="string"&&!ld(p)&&(p=An(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const p=u=>{var y;(y=u.variants)!=null&&y.initial&&u.set("initial"),setTimeout(()=>{var d,f,m;(d=u.variants)!=null&&d.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};mo(()=>Object.entries(n).forEach(([u,y])=>p(y)))}return{slots:t,component:a,motionConfig:r,instances:n}},render({slots:s,motionConfig:t,instances:n,component:o}){var c;const l=Wy(t.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:y})=>{const d=Gy(y,t);n[u]=d},p);if(o){const p=Ye(o,void 0,s);return r(p,0),p}return(((c=s.default)==null?void 0:c.call(s))||[]).map((p,u)=>r(p,u))}});function xE(s){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return s.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>n.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const TE={install(s,t){if(s.directive("motion",er()),s.component("Motion",SE),!t||t&&!t.excludePresets)for(const n in qr){const o=qr[n];s.directive(`motion-${xE(n)}`,er(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,s.directive(`motion-${n}`,er(o))}}};var jc;const eo=typeof window<"u",LE=Object.prototype.toString,RE=s=>LE.call(s)==="[object Object]";eo&&((jc=window==null?void 0:window.navigator)==null?void 0:jc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function PE(s){return pp()?(up(s),!0):!1}function OE(s){var t;const n=E(s);return(t=n==null?void 0:n.$el)!=null?t:n}const $E=eo?window:void 0,zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jr="__vueuse_ssr_handlers__";zr[jr]=zr[jr]||{};zr[jr];function FE(s,t={}){const{immediate:n=!0,window:o=$E}=t,l=H(!1);let r=null;function a(){!l.value||!o||(s(),r=o.requestAnimationFrame(a))}function c(){!l.value&&o&&(l.value=!0,a())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return n&&c(),PE(p),{isActive:l,pause:p,resume:c}}var Hc;(function(s){s.UP="UP",s.RIGHT="RIGHT",s.DOWN="DOWN",s.LEFT="LEFT",s.NONE="NONE"})(Hc||(Hc={}));const Ha="vue-starport-injection",Yy="vue-starport-options",NE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Ky={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var IE=Object.defineProperty,il=Object.getOwnPropertySymbols,Zy=Object.prototype.hasOwnProperty,Xy=Object.prototype.propertyIsEnumerable,Qc=(s,t,n)=>t in s?IE(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,ME=(s,t)=>{for(var n in t||(t={}))Zy.call(t,n)&&Qc(s,n,t[n]);if(il)for(var n of il(t))Xy.call(t,n)&&Qc(s,n,t[n]);return s},Vc=(s,t)=>{var n={};for(var o in s)Zy.call(s,o)&&t.indexOf(o)<0&&(n[o]=s[o]);if(s!=null&&il)for(var o of il(s))t.indexOf(o)<0&&Xy.call(s,o)&&(n[o]=s[o]);return n};const UE=ye({name:"StarportProxy",props:ME({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Ky),setup(s,t){const n=O(Ha),o=T(()=>n.getInstance(s.port,s.component)),l=H(),r=o.value.generateId(),a=H(!1);return o.value.isVisible||(o.value.land(),a.value=!0),rt(async()=>{o.value.el||(o.value.el=l.value,await ts(),a.value=!0,o.value.rect.update())}),vl(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await ts(),await ts(),!o.value.el&&n.dispose(o.value.port))}),he(()=>s,async()=>{o.value.props&&await ts();const c=s,{props:p}=c,u=Vc(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=s,{initialProps:p,mountedProps:u}=c,y=Vc(c,["initialProps","mountedProps"]),d=ne(y,(a.value?u:p)||{});return Ye("div",ne(d,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?Ye(t.slots.default):void 0)}}});var qE=Object.defineProperty,zE=Object.defineProperties,jE=Object.getOwnPropertyDescriptors,Jc=Object.getOwnPropertySymbols,HE=Object.prototype.hasOwnProperty,QE=Object.prototype.propertyIsEnumerable,Wc=(s,t,n)=>t in s?qE(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,VE=(s,t)=>{for(var n in t||(t={}))HE.call(t,n)&&Wc(s,n,t[n]);if(Jc)for(var n of Jc(t))QE.call(t,n)&&Wc(s,n,t[n]);return s},JE=(s,t)=>zE(s,jE(t));const WE=ye({name:"Starport",inheritAttrs:!0,props:Ky,setup(s,t){const n=H(!1);return rt(()=>{n.value=!0}),()=>{var a,c;const o=(c=(a=t.slots).default)==null?void 0:c.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!RE(r)||vn(r))&&(r={render(){return o}}),Ye(UE,JE(VE({},s),{key:s.port,component:hl(r),props:l.props}))}}});function GE(s){const t=$e({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),n=eo?document.documentElement||document.body:void 0;function o(){if(!eo)return;const c=OE(s);if(!c)return;const{height:p,width:u,left:y,top:d}=c.getBoundingClientRect(),f=window.getComputedStyle(c),m=f.margin,h=f.padding;Object.assign(t,{height:p,width:u,left:y,top:n.scrollTop+d,margin:m,padding:h})}const l=FE(o,{immediate:!1});function r(){!eo||(o(),l.resume())}function a(){l.pause()}return t}let YE=(s,t=21)=>(n=t)=>{let o="",l=n;for(;l--;)o+=s[Math.random()*s.length|0];return o};const Gc=YE("abcdefghijklmnopqrstuvwxyz",5);function Yc(s){return s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function KE(s){var t;return s.name||((t=s.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var ZE=Object.defineProperty,Kc=Object.getOwnPropertySymbols,XE=Object.prototype.hasOwnProperty,ew=Object.prototype.propertyIsEnumerable,Zc=(s,t,n)=>t in s?ZE(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,sr=(s,t)=>{for(var n in t||(t={}))XE.call(t,n)&&Zc(s,n,t[n]);if(Kc)for(var n of Kc(t))ew.call(t,n)&&Zc(s,n,t[n]);return s};function sw(s,t,n={}){const o=KE(t),l=Yc(o)||Gc(),r=H(),a=H(null),c=H(!1),p=H(!1),u=hd(!0),y=H({}),d=T(()=>sr(sr(sr({},NE),n),y.value)),f=H(0);let m;u.run(()=>{m=GE(r),he(r,async B=>{B&&(p.value=!0),await ts(),r.value||(p.value=!1)})});const h=Yc(s);function A(){return`starport-${l}-${h}-${Gc()}`}const b=A();return $e({el:r,id:b,port:s,props:a,rect:m,scope:u,isLanded:c,isVisible:p,options:d,liftOffTime:f,component:t,componentName:o,componentId:l,generateId:A,setLocalOptions(B={}){y.value=JSON.parse(JSON.stringify(B))},elRef(){return r},liftOff(){!c.value||(c.value=!1,f.value=Date.now(),m.listen())},land(){c.value||(c.value=!0,m.pause())}})}function tw(s){const t=$e(new Map);function n(l,r){let a=t.get(l);return a||(a=sw(l,r,s),t.set(l,a)),a.component=r,a}function o(l){var r;(r=t.get(l))==null||r.scope.stop(),t.delete(l)}return{portMap:t,dispose:o,getInstance:n}}var nw=Object.defineProperty,ow=Object.defineProperties,lw=Object.getOwnPropertyDescriptors,Xc=Object.getOwnPropertySymbols,rw=Object.prototype.hasOwnProperty,aw=Object.prototype.propertyIsEnumerable,ep=(s,t,n)=>t in s?nw(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,iw=(s,t)=>{for(var n in t||(t={}))rw.call(t,n)&&ep(s,n,t[n]);if(Xc)for(var n of Xc(t))aw.call(t,n)&&ep(s,n,t[n]);return s},cw=(s,t)=>ow(s,lw(t));const pw=ye({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(s){const t=O(Ha);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=T(()=>t.getInstance(s.port,s.component)),o=T(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),l=T(()=>{const a=Date.now()-n.value.liftOffTime,c=Math.max(0,n.value.options.duration-a),p=n.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!n.value.isVisible||!n.value.el?cw(iw({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:n.value.options.easing}),u)}),r={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Ye("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Ye(Vf,{to:a?`#${o.value}`:"body",disabled:!a},Ye(n.value.component,ne(r,n.value.props))))}}}),uw=ye({name:"StarportCarrier",setup(s,{slots:t}){const n=tw(O(Yy,{}));return Et().appContext.app.provide(Ha,n),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(n.portMap.entries()).map(([r,{component:a}])=>Ye(pw,{key:r,port:r,component:a}))]}}});function yw(s={}){return{install(t){t.provide(Yy,s),t.component("Starport",WE),t.component("StarportCarrier",uw)}}}function dw(s){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),s.app.use(TE),s.app.use(yw({keepAlive:!0})),Y6(s)}function fs(s,t,n){var o,l;return(l=((o=s.instance)==null?void 0:o.$).provides[t])!=null?l:n}function fw(){return{install(s){s.directive("click",{name:"v-click",mounted(t,n){var y,d,f,m;if(Yn.value||((y=fs(n,Vn))==null?void 0:y.value))return;const o=fs(n,Nt),l=fs(n,Qn),r=fs(n,gr),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,c=n.modifiers.fade!==!1&&n.modifiers.fade!=null,p=((d=o==null?void 0:o.value)==null?void 0:d.length)||0,u=c?Em:Nl;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value==null&&(n.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[t]);else if(!((m=r==null?void 0:r.value.get(n.value))!=null&&m.includes(t))){const h=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[t].concat(h))}t==null||t.classList.toggle(Ot,!0),l&&he(l,()=>{var B;const h=(B=l==null?void 0:l.value)!=null?B:0,A=n.value!=null?h>=n.value:h>p;t.classList.contains(Il)||t.classList.toggle(u,!A),a!==!1&&a!==void 0&&t.classList.toggle(u,A),t.classList.toggle(Rn,!1);const b=r==null?void 0:r.value.get(h);b==null||b.forEach((w,C)=>{w.classList.toggle(Ro,!1),C===b.length-1?w.classList.toggle(Rn,!0):w.classList.toggle(Ro,!0)}),t.classList.contains(Rn)||t.classList.toggle(Ro,A)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Ot,!1);const o=fs(n,Nt);o!=null&&o.value&&_r(o.value,t)}}),s.directive("after",{name:"v-after",mounted(t,n){var c,p;if(Yn.value||((c=fs(n,Vn))==null?void 0:c.value))return;const o=fs(n,Nt),l=fs(n,Qn),r=fs(n,gr),a=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),r!=null&&r.value.has(n.value)?(p=r==null?void 0:r.value.get(n.value))==null||p.push(t):r==null||r.value.set(n.value,[t]),t==null||t.classList.toggle(Ot,!0),l&&he(l,()=>{var y,d,f;const u=((y=l.value)!=null?y:0)>=((f=(d=n.value)!=null?d:a)!=null?f:0);t.classList.contains(Il)||t.classList.toggle(Nl,!u),t.classList.toggle(Rn,!1),t.classList.contains(Rn)||t.classList.toggle(Ro,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Ot,!0)}}),s.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,c,p;if(Yn.value||((a=fs(n,Vn))==null?void 0:a.value))return;const o=fs(n,Nt),l=fs(n,Qn),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Ot,!0),l&&he(l,()=>{var d;const u=(d=l==null?void 0:l.value)!=null?d:0,y=n.value!=null?u>=n.value:u>r;t.classList.toggle(Nl,y),t.classList.toggle(Il,y)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Ot,!1);const o=fs(n,Nt);o!=null&&o.value&&_r(o.value,t)}})}}}function hw(s,t){const n=Mu(s),o=Uu(t,n.currentRoute,n.currentPage);return{nav:{...n,...o,downloadPDF:Lr,next:bt,nextSlide:uo,openInEditor:R6,prev:Dt,prevSlide:yo},configs:Be,themeConfigs:T(()=>Be.themeConfig)}}function mw(){return{install(s){const t=hw(pt,Fs);s.provide(I,$e(t))}}}const Sn=Lh(O6);Sn.use(vs);Sn.use(Am());Sn.use(fw());Sn.use(mw());dw({app:Sn,router:vs});Sn.mount("#app");export{G3 as $,T3 as A,L6 as B,rt as C,$e as D,_w as E,ke as F,bw as G,he as H,_ as I,Ce as J,is as K,U3 as L,la as M,ra as N,Fs as O,ol as P,k6 as Q,Vl as R,Ml as S,io as T,Hl as U,Q8 as V,Aa as W,va as X,z8 as Y,je as Z,$u as _,I as a,kn as a0,Ms as a1,gw as a2,Me as a3,Nn as a4,Po as a5,qt as a6,Js as a7,kr as a8,g3 as a9,_3 as aa,A3 as ab,b3 as ac,ia as ad,eu as ae,Dw as af,cs as ag,x0 as ah,pu as ai,D3 as aj,vl as ak,N3 as al,Dm as b,Be as c,ye as d,Yd as e,U as f,e as g,E as h,O as i,Je as j,Ku as k,i as l,S as m,Ke as n,D as o,fe as p,uu as q,go as r,Oe as s,ot as t,Aw as u,H as v,vw as w,T as x,gs as y,q as z};
