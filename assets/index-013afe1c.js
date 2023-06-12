(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function Hs(t,s){const n=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)n[o[l]]=!0;return s?l=>!!n[l.toLowerCase()]:l=>!!n[l]}const Ie=Object.freeze({}),Nn=Object.freeze([]),At=()=>{},Pu=()=>!1,hh=/^on[^a-z]/,Jo=t=>hh.test(t),$l=t=>t.startsWith("onUpdate:"),qe=Object.assign,li=(t,s)=>{const n=t.indexOf(s);n>-1&&t.splice(n,1)},mh=Object.prototype.hasOwnProperty,we=(t,s)=>mh.call(t,s),ie=Array.isArray,yn=t=>Go(t)==="[object Map]",Ou=t=>Go(t)==="[object Set]",gh=t=>Go(t)==="[object RegExp]",ye=t=>typeof t=="function",ze=t=>typeof t=="string",ri=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",ai=t=>Re(t)&&ye(t.then)&&ye(t.catch),Nu=Object.prototype.toString,Go=t=>Nu.call(t),ii=t=>Go(t).slice(8,-1),Fu=t=>Go(t)==="[object Object]",ci=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bl=Hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_h=Hs("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),lr=t=>{const s=Object.create(null);return n=>s[n]||(s[n]=t(n))},vh=/-(\w)/g,ls=lr(t=>t.replace(vh,(s,n)=>n?n.toUpperCase():"")),bh=/\B([A-Z])/g,_s=lr(t=>t.replace(bh,"-$1").toLowerCase()),bn=lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),en=lr(t=>t?`on${bn(t)}`:""),Lo=(t,s)=>!Object.is(t,s),sn=(t,s)=>{for(let n=0;n<t.length;n++)t[n](s)},Pl=(t,s,n)=>{Object.defineProperty(t,s,{configurable:!0,enumerable:!1,value:n})},Ah=t=>{const s=parseFloat(t);return isNaN(s)?t:s},Dh=t=>{const s=ze(t)?Number(t):NaN;return isNaN(s)?t:s};let hc;const Ol=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function et(t){if(ie(t)){const s={};for(let n=0;n<t.length;n++){const o=t[n],l=ze(o)?wh(o):et(o);if(l)for(const r in l)s[r]=l[r]}return s}else{if(ze(t))return t;if(Re(t))return t}}const Ch=/;(?![^(]*\))/g,Bh=/:([^]+)/,Eh=/\/\*[^]*?\*\//g;function wh(t){const s={};return t.replace(Eh,"").split(Ch).forEach(n=>{if(n){const o=n.split(Bh);o.length>1&&(s[o[0].trim()]=o[1].trim())}}),s}function Ue(t){let s="";if(ze(t))s=t;else if(ie(t))for(let n=0;n<t.length;n++){const o=Ue(t[n]);o&&(s+=o+" ")}else if(Re(t))for(const n in t)t[n]&&(s+=n+" ");return s.trim()}function re(t){if(!t)return null;let{class:s,style:n}=t;return s&&!ze(s)&&(t.class=Ue(s)),n&&(t.style=et(n)),t}const kh="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Sh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Iu=Hs(kh),xh=Hs(Sh),Th="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lh=Hs(Th);function Mu(t){return!!t||t===""}const Qt=t=>ze(t)?t:t==null?"":ie(t)||Re(t)&&(t.toString===Nu||!ye(t.toString))?JSON.stringify(t,Uu,2):String(t),Uu=(t,s)=>s&&s.__v_isRef?Uu(t,s.value):yn(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((n,[o,l])=>(n[`${o} =>`]=l,n),{})}:Ou(s)?{[`Set(${s.size})`]:[...s.values()]}:Re(s)&&!ie(s)&&!Fu(s)?String(s):s;function Nl(t,...s){console.warn(`[Vue warn] ${t}`,...s)}let wt;class qu{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!s&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const n=wt;try{return wt=this,s()}finally{wt=n}}else Nl("cannot run an inactive effect scope.")}on(){wt=this}off(){wt=this.parent}stop(s){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!s){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Rh(t){return new qu(t)}function $h(t,s=wt){s&&s.active&&s.effects.push(t)}function pi(){return wt}function ju(t){wt?wt.cleanups.push(t):Nl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const ui=t=>{const s=new Set(t);return s.w=0,s.n=0,s},zu=t=>(t.w&qs)>0,Vu=t=>(t.n&qs)>0,Ph=({deps:t})=>{if(t.length)for(let s=0;s<t.length;s++)t[s].w|=qs},Oh=t=>{const{deps:s}=t;if(s.length){let n=0;for(let o=0;o<s.length;o++){const l=s[o];zu(l)&&!Vu(l)?l.delete(t):s[n++]=l,l.w&=~qs,l.n&=~qs}s.length=n}},Fl=new WeakMap;let po=0,qs=1;const oa=30;let ft;const fn=Symbol("iterate"),la=Symbol("Map key iterate");class di{constructor(s,n=null,o){this.fn=s,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$h(this,o)}run(){if(!this.active)return this.fn();let s=ft,n=Rs;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=ft,ft=this,Rs=!0,qs=1<<++po,po<=oa?Ph(this):mc(this),this.fn()}finally{po<=oa&&Oh(this),qs=1<<--po,ft=this.parent,Rs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(mc(this),this.onStop&&this.onStop(),this.active=!1)}}function mc(t){const{deps:s}=t;if(s.length){for(let n=0;n<s.length;n++)s[n].delete(t);s.length=0}}let Rs=!0;const Hu=[];function Cn(){Hu.push(Rs),Rs=!1}function Bn(){const t=Hu.pop();Rs=t===void 0?!0:t}function ct(t,s,n){if(Rs&&ft){let o=Fl.get(t);o||Fl.set(t,o=new Map);let l=o.get(n);l||o.set(n,l=ui()),Qu(l,{effect:ft,target:t,type:s,key:n})}}function Qu(t,s){let n=!1;po<=oa?Vu(t)||(t.n|=qs,n=!zu(t)):n=!t.has(ft),n&&(t.add(ft),ft.deps.push(t),ft.onTrack&&ft.onTrack(qe({effect:ft},s)))}function rs(t,s,n,o,l,r){const a=Fl.get(t);if(!a)return;let i=[];if(s==="clear")i=[...a.values()];else if(n==="length"&&ie(t)){const u=Number(o);a.forEach((d,y)=>{(y==="length"||y>=u)&&i.push(d)})}else switch(n!==void 0&&i.push(a.get(n)),s){case"add":ie(t)?ci(n)&&i.push(a.get("length")):(i.push(a.get(fn)),yn(t)&&i.push(a.get(la)));break;case"delete":ie(t)||(i.push(a.get(fn)),yn(t)&&i.push(a.get(la)));break;case"set":yn(t)&&i.push(a.get(fn));break}const c={target:t,type:s,key:n,newValue:o,oldValue:l,oldTarget:r};if(i.length===1)i[0]&&ra(i[0],c);else{const u=[];for(const d of i)d&&u.push(...d);ra(ui(u),c)}}function ra(t,s){const n=ie(t)?t:[...t];for(const o of n)o.computed&&gc(o,s);for(const o of n)o.computed||gc(o,s)}function gc(t,s){(t!==ft||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(qe({effect:t},s)),t.scheduler?t.scheduler():t.run())}function Nh(t,s){var n;return(n=Fl.get(t))==null?void 0:n.get(s)}const Fh=Hs("__proto__,__v_isRef,__isVue"),Wu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ri)),Ih=rr(),Mh=rr(!1,!0),Uh=rr(!0),qh=rr(!0,!0),_c=jh();function jh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(s=>{t[s]=function(...n){const o=me(this);for(let r=0,a=this.length;r<a;r++)ct(o,"get",r+"");const l=o[s](...n);return l===-1||l===!1?o[s](...n.map(me)):l}}),["push","pop","shift","unshift","splice"].forEach(s=>{t[s]=function(...n){Cn();const o=me(this)[s].apply(this,n);return Bn(),o}}),t}function zh(t){const s=me(this);return ct(s,"has",t),s.hasOwnProperty(t)}function rr(t=!1,s=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return s;if(l==="__v_raw"&&r===(t?s?td:ed:s?Xu:Zu).get(o))return o;const a=ie(o);if(!t){if(a&&we(_c,l))return Reflect.get(_c,l,r);if(l==="hasOwnProperty")return zh}const i=Reflect.get(o,l,r);return(ri(l)?Wu.has(l):Fh(l))||(t||ct(o,"get",l),s)?i:Te(i)?a&&ci(l)?i:i.value:Re(i)?t?Vt(i):Ve(i):i}}const Vh=Ju(),Hh=Ju(!0);function Ju(t=!1){return function(n,o,l,r){let a=n[o];if(js(a)&&Te(a)&&!Te(l))return!1;if(!t&&(!Il(l)&&!js(l)&&(a=me(a),l=me(l)),!ie(n)&&Te(a)&&!Te(l)))return a.value=l,!0;const i=ie(n)&&ci(o)?Number(o)<n.length:we(n,o),c=Reflect.set(n,o,l,r);return n===me(r)&&(i?Lo(l,a)&&rs(n,"set",o,l,a):rs(n,"add",o,l)),c}}function Qh(t,s){const n=we(t,s),o=t[s],l=Reflect.deleteProperty(t,s);return l&&n&&rs(t,"delete",s,void 0,o),l}function Wh(t,s){const n=Reflect.has(t,s);return(!ri(s)||!Wu.has(s))&&ct(t,"has",s),n}function Jh(t){return ct(t,"iterate",ie(t)?"length":fn),Reflect.ownKeys(t)}const Gu={get:Ih,set:Vh,deleteProperty:Qh,has:Wh,ownKeys:Jh},Ku={get:Uh,set(t,s){return Nl(`Set operation on key "${String(s)}" failed: target is readonly.`,t),!0},deleteProperty(t,s){return Nl(`Delete operation on key "${String(s)}" failed: target is readonly.`,t),!0}},Gh=qe({},Gu,{get:Mh,set:Hh}),Kh=qe({},Ku,{get:qh}),yi=t=>t,ar=t=>Reflect.getPrototypeOf(t);function rl(t,s,n=!1,o=!1){t=t.__v_raw;const l=me(t),r=me(s);n||(s!==r&&ct(l,"get",s),ct(l,"get",r));const{has:a}=ar(l),i=o?yi:n?fi:Ro;if(a.call(l,s))return i(t.get(s));if(a.call(l,r))return i(t.get(r));t!==l&&t.get(s)}function al(t,s=!1){const n=this.__v_raw,o=me(n),l=me(t);return s||(t!==l&&ct(o,"has",t),ct(o,"has",l)),t===l?n.has(t):n.has(t)||n.has(l)}function il(t,s=!1){return t=t.__v_raw,!s&&ct(me(t),"iterate",fn),Reflect.get(t,"size",t)}function vc(t){t=me(t);const s=me(this);return ar(s).has.call(s,t)||(s.add(t),rs(s,"add",t,t)),this}function bc(t,s){s=me(s);const n=me(this),{has:o,get:l}=ar(n);let r=o.call(n,t);r?Yu(n,o,t):(t=me(t),r=o.call(n,t));const a=l.call(n,t);return n.set(t,s),r?Lo(s,a)&&rs(n,"set",t,s,a):rs(n,"add",t,s),this}function Ac(t){const s=me(this),{has:n,get:o}=ar(s);let l=n.call(s,t);l?Yu(s,n,t):(t=me(t),l=n.call(s,t));const r=o?o.call(s,t):void 0,a=s.delete(t);return l&&rs(s,"delete",t,void 0,r),a}function Dc(){const t=me(this),s=t.size!==0,n=yn(t)?new Map(t):new Set(t),o=t.clear();return s&&rs(t,"clear",void 0,void 0,n),o}function cl(t,s){return function(o,l){const r=this,a=r.__v_raw,i=me(a),c=s?yi:t?fi:Ro;return!t&&ct(i,"iterate",fn),a.forEach((u,d)=>o.call(l,c(u),c(d),r))}}function pl(t,s,n){return function(...o){const l=this.__v_raw,r=me(l),a=yn(r),i=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=l[t](...o),d=n?yi:s?fi:Ro;return!s&&ct(r,"iterate",c?la:fn),{next(){const{value:y,done:f}=u.next();return f?{value:y,done:f}:{value:i?[d(y[0]),d(y[1])]:d(y),done:f}},[Symbol.iterator](){return this}}}}function Cs(t){return function(...s){{const n=s[0]?`on key "${s[0]}" `:"";console.warn(`${bn(t)} operation ${n}failed: target is readonly.`,me(this))}return t==="delete"?!1:this}}function Yh(){const t={get(r){return rl(this,r)},get size(){return il(this)},has:al,add:vc,set:bc,delete:Ac,clear:Dc,forEach:cl(!1,!1)},s={get(r){return rl(this,r,!1,!0)},get size(){return il(this)},has:al,add:vc,set:bc,delete:Ac,clear:Dc,forEach:cl(!1,!0)},n={get(r){return rl(this,r,!0)},get size(){return il(this,!0)},has(r){return al.call(this,r,!0)},add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear"),forEach:cl(!0,!1)},o={get(r){return rl(this,r,!0,!0)},get size(){return il(this,!0)},has(r){return al.call(this,r,!0)},add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear"),forEach:cl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=pl(r,!1,!1),n[r]=pl(r,!0,!1),s[r]=pl(r,!1,!0),o[r]=pl(r,!0,!0)}),[t,n,s,o]}const[Zh,Xh,em,tm]=Yh();function ir(t,s){const n=s?t?tm:em:t?Xh:Zh;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(we(n,l)&&l in o?n:o,l,r)}const sm={get:ir(!1,!1)},nm={get:ir(!1,!0)},om={get:ir(!0,!1)},lm={get:ir(!0,!0)};function Yu(t,s,n){const o=me(n);if(o!==n&&s.call(t,o)){const l=ii(t);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Zu=new WeakMap,Xu=new WeakMap,ed=new WeakMap,td=new WeakMap;function rm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function am(t){return t.__v_skip||!Object.isExtensible(t)?0:rm(ii(t))}function Ve(t){return js(t)?t:cr(t,!1,Gu,sm,Zu)}function im(t){return cr(t,!1,Gh,nm,Xu)}function Vt(t){return cr(t,!0,Ku,om,ed)}function uo(t){return cr(t,!0,Kh,lm,td)}function cr(t,s,n,o,l){if(!Re(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(s&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=am(t);if(a===0)return t;const i=new Proxy(t,a===2?o:n);return l.set(t,i),i}function hn(t){return js(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function Il(t){return!!(t&&t.__v_isShallow)}function Ml(t){return hn(t)||js(t)}function me(t){const s=t&&t.__v_raw;return s?me(s):t}function pr(t){return Pl(t,"__v_skip",!0),t}const Ro=t=>Re(t)?Ve(t):t,fi=t=>Re(t)?Vt(t):t;function hi(t){Rs&&ft&&(t=me(t),Qu(t.dep||(t.dep=ui()),{target:t,type:"get",key:"value"}))}function mi(t,s){t=me(t);const n=t.dep;n&&ra(n,{target:t,type:"set",key:"value",newValue:s})}function Te(t){return!!(t&&t.__v_isRef===!0)}function H(t){return sd(t,!1)}function as(t){return sd(t,!0)}function sd(t,s){return Te(t)?t:new cm(t,s)}class cm{constructor(s,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?s:me(s),this._value=n?s:Ro(s)}get value(){return hi(this),this._value}set value(s){const n=this.__v_isShallow||Il(s)||js(s);s=n?s:me(s),Lo(s,this._rawValue)&&(this._rawValue=s,this._value=n?s:Ro(s),mi(this,s))}}function O(t){return Te(t)?t.value:t}const pm={get:(t,s,n)=>O(Reflect.get(t,s,n)),set:(t,s,n,o)=>{const l=t[s];return Te(l)&&!Te(n)?(l.value=n,!0):Reflect.set(t,s,n,o)}};function nd(t){return hn(t)?t:new Proxy(t,pm)}class um{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=s(()=>hi(this),()=>mi(this));this._get=n,this._set=o}get value(){return this._get()}set value(s){this._set(s)}}function gi(t){return new um(t)}function dm(t){Ml(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ie(t)?new Array(t.length):{};for(const n in t)s[n]=od(t,n);return s}class ym{constructor(s,n,o){this._object=s,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Nh(me(this._object),this._key)}}class fm{constructor(s){this._getter=s,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function hm(t,s,n){return Te(t)?t:ye(t)?new fm(t):Re(t)&&arguments.length>1?od(t,s,n):H(t)}function od(t,s,n){const o=t[s];return Te(o)?o:new ym(t,s,n)}class mm{constructor(s,n,o,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new di(s,()=>{this._dirty||(this._dirty=!0,mi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const s=me(this);return hi(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function gm(t,s,n=!1){let o,l;const r=ye(t);r?(o=t,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=t.get,l=t.set);const a=new mm(o,l,r||!l,n);return s&&!n&&(a.effect.onTrack=s.onTrack,a.effect.onTrigger=s.onTrigger),a}const mn=[];function El(t){mn.push(t)}function wl(){mn.pop()}function U(t,...s){Cn();const n=mn.length?mn[mn.length-1].component:null,o=n&&n.appContext.config.warnHandler,l=_m();if(o)gs(o,n,11,[t+s.join(""),n&&n.proxy,l.map(({vnode:r})=>`at <${vr(n,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${t}`,...s];l.length&&r.push(`
`,...vm(l)),console.warn(...r)}Bn()}function _m(){let t=mn[mn.length-1];if(!t)return[];const s=[];for(;t;){const n=s[0];n&&n.vnode===t?n.recurseCount++:s.push({vnode:t,recurseCount:0});const o=t.component&&t.component.parent;t=o&&o.vnode}return s}function vm(t){const s=[];return t.forEach((n,o)=>{s.push(...o===0?[]:[`
`],...bm(n))}),s}function bm({vnode:t,recurseCount:s}){const n=s>0?`... (${s} recursive calls)`:"",o=t.component?t.component.parent==null:!1,l=` at <${vr(t.component,t.type,o)}`,r=">"+n;return t.props?[l,...Am(t.props),r]:[l+r]}function Am(t){const s=[],n=Object.keys(t);return n.slice(0,3).forEach(o=>{s.push(...ld(o,t[o]))}),n.length>3&&s.push(" ..."),s}function ld(t,s,n){return ze(s)?(s=JSON.stringify(s),n?s:[`${t}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?n?s:[`${t}=${s}`]:Te(s)?(s=ld(t,me(s.value),!0),n?s:[`${t}=Ref<`,s,">"]):ye(s)?[`${t}=fn${s.name?`<${s.name}>`:""}`]:(s=me(s),n?s:[`${t}=`,s])}function Dm(t,s){t!==void 0&&(typeof t!="number"?U(`${s} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&U(`${s} is NaN - the duration expression might be incorrect.`))}const _i={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function gs(t,s,n,o){let l;try{l=o?t(...o):t()}catch(r){ur(r,s,n)}return l}function Ft(t,s,n,o){if(ye(t)){const r=gs(t,s,n,o);return r&&ai(r)&&r.catch(a=>{ur(a,s,n)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Ft(t[r],s,n,o));return l}function ur(t,s,n,o=!0){const l=s?s.vnode:null;if(s){let r=s.parent;const a=s.proxy,i=_i[n];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,i)===!1)return}r=r.parent}const c=s.appContext.config.errorHandler;if(c){gs(c,null,10,[t,a,i]);return}}Cm(t,n,l,o)}function Cm(t,s,n,o=!0){{const l=_i[s];if(n&&El(n),U(`Unhandled error${l?` during execution of ${l}`:""}`),n&&wl(),o)throw t;console.error(t)}}let $o=!1,aa=!1;const lt=[];let es=0;const Fn=[];let Xt=null,ks=0;const rd=Promise.resolve();let vi=null;const Bm=100;function rt(t){const s=vi||rd;return t?s.then(this?t.bind(this):t):s}function Em(t){let s=es+1,n=lt.length;for(;s<n;){const o=s+n>>>1;Po(lt[o])<t?s=o+1:n=o}return s}function dr(t){(!lt.length||!lt.includes(t,$o&&t.allowRecurse?es+1:es))&&(t.id==null?lt.push(t):lt.splice(Em(t.id),0,t),ad())}function ad(){!$o&&!aa&&(aa=!0,vi=rd.then(pd))}function wm(t){const s=lt.indexOf(t);s>es&&lt.splice(s,1)}function id(t){ie(t)?Fn.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?ks+1:ks))&&Fn.push(t),ad()}function Cc(t,s=$o?es+1:0){for(t=t||new Map;s<lt.length;s++){const n=lt[s];if(n&&n.pre){if(bi(t,n))continue;lt.splice(s,1),s--,n()}}}function cd(t){if(Fn.length){const s=[...new Set(Fn)];if(Fn.length=0,Xt){Xt.push(...s);return}for(Xt=s,t=t||new Map,Xt.sort((n,o)=>Po(n)-Po(o)),ks=0;ks<Xt.length;ks++)bi(t,Xt[ks])||Xt[ks]();Xt=null,ks=0}}const Po=t=>t.id==null?1/0:t.id,km=(t,s)=>{const n=Po(t)-Po(s);if(n===0){if(t.pre&&!s.pre)return-1;if(s.pre&&!t.pre)return 1}return n};function pd(t){aa=!1,$o=!0,t=t||new Map,lt.sort(km);const s=n=>bi(t,n);try{for(es=0;es<lt.length;es++){const n=lt[es];if(n&&n.active!==!1){if(s(n))continue;gs(n,null,14)}}}finally{es=0,lt.length=0,cd(t),$o=!1,vi=null,(lt.length||Fn.length)&&pd(t)}}function bi(t,s){if(!t.has(s))t.set(s,1);else{const n=t.get(s);if(n>Bm){const o=s.ownerInstance,l=o&&Fo(o.type);return U(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(s,n+1)}}let $s=!1;const $n=new Set;Ol().__VUE_HMR_RUNTIME__={createRecord:wr(ud),rerender:wr(Tm),reload:wr(Lm)};const An=new Map;function Sm(t){const s=t.type.__hmrId;let n=An.get(s);n||(ud(s,t.type),n=An.get(s)),n.instances.add(t)}function xm(t){An.get(t.type.__hmrId).instances.delete(t)}function ud(t,s){return An.has(t)?!1:(An.set(t,{initialDef:_o(s),instances:new Set}),!0)}function _o(t){return zd(t)?t.__vccOpts:t}function Tm(t,s){const n=An.get(t);n&&(n.initialDef.render=s,[...n.instances].forEach(o=>{s&&(o.render=s,_o(o.type).render=s),o.renderCache=[],$s=!0,o.update(),$s=!1}))}function Lm(t,s){const n=An.get(t);if(!n)return;s=_o(s),Bc(n.initialDef,s);const o=[...n.instances];for(const l of o){const r=_o(l.type);$n.has(r)||(r!==n.initialDef&&Bc(r,s),$n.add(r)),l.appContext.propsCache.delete(l.type),l.appContext.emitsCache.delete(l.type),l.appContext.optionsCache.delete(l.type),l.ceReload?($n.add(r),l.ceReload(s.styles),$n.delete(r)):l.parent?dr(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}id(()=>{for(const l of o)$n.delete(_o(l.type))})}function Bc(t,s){qe(t,s);for(const n in t)n!=="__file"&&!(n in s)&&delete t[n]}function wr(t){return(s,n)=>{try{return t(s,n)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let ts,yo=[],ia=!1;function Ko(t,...s){ts?ts.emit(t,...s):ia||yo.push({event:t,args:s})}function dd(t,s){var n,o;ts=t,ts?(ts.enabled=!0,yo.forEach(({event:l,args:r})=>ts.emit(l,...r)),yo=[]):typeof window<"u"&&window.HTMLElement&&!((o=(n=window.navigator)==null?void 0:n.userAgent)!=null&&o.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{dd(r,s)}),setTimeout(()=>{ts||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ia=!0,yo=[])},3e3)):(ia=!0,yo=[])}function Rm(t,s){Ko("app:init",t,s,{Fragment:Le,Text:Zo,Comment:ht,Static:vo})}function $m(t){Ko("app:unmount",t)}const ca=Ai("component:added"),yd=Ai("component:updated"),Pm=Ai("component:removed"),Om=t=>{ts&&typeof ts.cleanupBuffer=="function"&&!ts.cleanupBuffer(t)&&Pm(t)};function Ai(t){return s=>{Ko(t,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const Nm=fd("perf:start"),Fm=fd("perf:end");function fd(t){return(s,n,o)=>{Ko(t,s.appContext.app,s.uid,s,n,o)}}function Im(t,s,n){Ko("component:emit",t.appContext.app,t,s,n)}function Mm(t,s,...n){if(t.isUnmounted)return;const o=t.vnode.props||Ie;{const{emitsOptions:d,propsOptions:[y]}=t;if(d)if(!(s in d))(!y||!(en(s)in y))&&U(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${en(s)}" prop.`);else{const f=d[s];ye(f)&&(f(...n)||U(`Invalid event arguments: event validation failed for event "${s}".`))}}let l=n;const r=s.startsWith("update:"),a=r&&s.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:y,trim:f}=o[d]||Ie;f&&(l=n.map(h=>ze(h)?h.trim():h)),y&&(l=n.map(Ah))}Im(t,s,l);{const d=s.toLowerCase();d!==s&&o[en(d)]&&U(`Event "${d}" is emitted in component ${vr(t,t.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${_s(s)}" instead of "${s}".`)}let i,c=o[i=en(s)]||o[i=en(ls(s))];!c&&r&&(c=o[i=en(_s(s))]),c&&Ft(c,t,6,l);const u=o[i+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Ft(u,t,6,l)}}function hd(t,s,n=!1){const o=s.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},i=!1;if(!ye(t)){const c=u=>{const d=hd(u,s,!0);d&&(i=!0,qe(a,d))};!n&&s.mixins.length&&s.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?(Re(t)&&o.set(t,null),null):(ie(r)?r.forEach(c=>a[c]=null):qe(a,r),Re(t)&&o.set(t,a),a)}function yr(t,s){return!t||!Jo(s)?!1:(s=s.slice(2).replace(/Once$/,""),we(t,s[0].toLowerCase()+s.slice(1))||we(t,_s(s))||we(t,s))}let Xe=null,fr=null;function Ul(t){const s=Xe;return Xe=t,fr=t&&t.type.__scopeId||null,s}function Di(t){fr=t}function Ci(){fr=null}function C(t,s=Xe,n){if(!s||t._n)return t;const o=(...l)=>{o._d&&Ic(-1);const r=Ul(s);let a;try{a=t(...l)}finally{Ul(r),o._d&&Ic(1)}return yd(s),a};return o._n=!0,o._c=!0,o._d=!0,o}let pa=!1;function ql(){pa=!0}function kr(t){const{type:s,vnode:n,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:i,attrs:c,emit:u,render:d,renderCache:y,data:f,setupState:h,ctx:m,inheritAttrs:_}=t;let D,b;const B=Ul(t);pa=!1;try{if(n.shapeFlag&4){const k=l||o;D=zt(d.call(k,k,y,r,h,f,m)),b=c}else{const k=s;c===r&&ql(),D=zt(k.length>1?k(r,{get attrs(){return ql(),c},slots:i,emit:u}):k(r,null)),b=s.props?c:qm(c)}}catch(k){bo.length=0,ur(k,t,1),D=P(ht)}let v=D,E;if(D.patchFlag>0&&D.patchFlag&2048&&([v,E]=Um(D)),b&&_!==!1){const k=Object.keys(b),{shapeFlag:x}=v;if(k.length){if(x&7)a&&k.some($l)&&(b=jm(b,a)),v=is(v,b);else if(!pa&&v.type!==ht){const L=Object.keys(c),T=[],M=[];for(let se=0,ae=L.length;se<ae;se++){const K=L[se];Jo(K)?$l(K)||T.push(K[2].toLowerCase()+K.slice(3)):M.push(K)}M.length&&U(`Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),T.length&&U(`Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Ec(v)||U("Runtime directive used on component with non-element root node. The directives will not function as intended."),v=is(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(Ec(v)||U("Component inside <Transition> renders non-element root node that cannot be animated."),v.transition=n.transition),E?E(v):D=v,Ul(B),D}const Um=t=>{const s=t.children,n=t.dynamicChildren,o=md(s);if(!o)return[t,void 0];const l=s.indexOf(o),r=n?n.indexOf(o):-1,a=i=>{s[l]=i,n&&(r>-1?n[r]=i:i.patchFlag>0&&(t.dynamicChildren=[...n,i]))};return[zt(o),a]};function md(t){let s;for(let n=0;n<t.length;n++){const o=t[n];if(zs(o)){if(o.type!==ht||o.children==="v-if"){if(s)return;s=o}}else return}return s}const qm=t=>{let s;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((s||(s={}))[n]=t[n]);return s},jm=(t,s)=>{const n={};for(const o in t)(!$l(o)||!(o.slice(9)in s))&&(n[o]=t[o]);return n},Ec=t=>t.shapeFlag&7||t.type===ht;function zm(t,s,n){const{props:o,children:l,component:r}=t,{props:a,children:i,patchFlag:c}=s,u=r.emitsOptions;if((l||i)&&$s||s.dirs||s.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?wc(o,a,u):!!a;if(c&8){const d=s.dynamicProps;for(let y=0;y<d.length;y++){const f=d[y];if(a[f]!==o[f]&&!yr(u,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===a?!1:o?a?wc(o,a,u):!0:!!a;return!1}function wc(t,s,n){const o=Object.keys(s);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(s[r]!==t[r]&&!yr(n,r))return!0}return!1}function Vm({vnode:t,parent:s},n){for(;s&&s.subTree===t;)(t=s.vnode).el=n,s=s.parent}const gd=t=>t.__isSuspense;function Hm(t,s){s&&s.pendingBranch?ie(t)?s.effects.push(...t):s.effects.push(t):id(t)}function En(t,s){return Bi(t,null,s)}const ul={};function ve(t,s,n){return ye(s)||U("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Bi(t,s,n)}function Bi(t,s,{immediate:n,deep:o,flush:l,onTrack:r,onTrigger:a}=Ie){var i;s||(n!==void 0&&U('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&U('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=k=>{U("Invalid watch source: ",k,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=pi()===((i=Ze)==null?void 0:i.scope)?Ze:null;let d,y=!1,f=!1;if(Te(t)?(d=()=>t.value,y=Il(t)):hn(t)?(d=()=>t,o=!0):ie(t)?(f=!0,y=t.some(k=>hn(k)||Il(k)),d=()=>t.map(k=>{if(Te(k))return k.value;if(hn(k))return pn(k);if(ye(k))return gs(k,u,2);c(k)})):ye(t)?s?d=()=>gs(t,u,2):d=()=>{if(!(u&&u.isUnmounted))return h&&h(),Ft(t,u,3,[m])}:(d=At,c(t)),s&&o){const k=d;d=()=>pn(k())}let h,m=k=>{h=v.onStop=()=>{gs(k,u,4)}},_;if(No)if(m=At,s?n&&Ft(s,u,3,[d(),f?[]:void 0,m]):d(),l==="sync"){const k=e1();_=k.__watcherHandles||(k.__watcherHandles=[])}else return At;let D=f?new Array(t.length).fill(ul):ul;const b=()=>{if(v.active)if(s){const k=v.run();(o||y||(f?k.some((x,L)=>Lo(x,D[L])):Lo(k,D)))&&(h&&h(),Ft(s,u,3,[k,D===ul?void 0:f&&D[0]===ul?[]:D,m]),D=k)}else v.run()};b.allowRecurse=!!s;let B;l==="sync"?B=b:l==="post"?B=()=>nt(b,u&&u.suspense):(b.pre=!0,u&&(b.id=u.uid),B=()=>dr(b));const v=new di(d,B);v.onTrack=r,v.onTrigger=a,s?n?b():D=v.run():l==="post"?nt(v.run.bind(v),u&&u.suspense):v.run();const E=()=>{v.stop(),u&&u.scope&&li(u.scope.effects,v)};return _&&_.push(E),E}function Qm(t,s,n){const o=this.proxy,l=ze(t)?t.includes(".")?_d(o,t):()=>o[t]:t.bind(o,o);let r;ye(s)?r=s:(r=s.handler,n=s);const a=Ze;jn(this);const i=Bi(l,r.bind(o),n);return a?jn(a):_n(),i}function _d(t,s){const n=s.split(".");return()=>{let o=t;for(let l=0;l<n.length&&o;l++)o=o[n[l]];return o}}function pn(t,s){if(!Re(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),Te(t))pn(t.value,s);else if(ie(t))for(let n=0;n<t.length;n++)pn(t[n],s);else if(Ou(t)||yn(t))t.forEach(n=>{pn(n,s)});else if(Fu(t))for(const n in t)pn(t[n],s);return t}function vd(t){_h(t)&&U("Do not use built-in directive ids as custom directive id: "+t)}function bd(t,s){const n=Xe;if(n===null)return U("withDirectives can only be used inside render functions."),t;const o=_r(n)||n.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<s.length;r++){let[a,i,c,u=Ie]=s[r];a&&(ye(a)&&(a={mounted:a,updated:a}),a.deep&&pn(i),l.push({dir:a,instance:o,value:i,oldValue:void 0,arg:c,modifiers:u}))}return t}function Gs(t,s,n,o){const l=t.dirs,r=s&&s.dirs;for(let a=0;a<l.length;a++){const i=l[a];r&&(i.oldValue=r[a].value);let c=i.dir[o];c&&(Cn(),Ft(c,n,8,[t.el,i,t,s]),Bn())}}function Wm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wt(()=>{t.isMounted=!0}),Yo(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],Jm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t};function Gm(t,s){const{leavingVNodes:n}=t;let o=n.get(s.type);return o||(o=Object.create(null),n.set(s.type,o)),o}function ua(t,s,n,o){const{appear:l,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:y,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:_,onAppear:D,onAfterAppear:b,onAppearCancelled:B}=s,v=String(t.key),E=Gm(n,t),k=(T,M)=>{T&&Ft(T,o,9,M)},x=(T,M)=>{const se=M[1];k(T,M),ie(T)?T.every(ae=>ae.length<=1)&&se():T.length<=1&&se()},L={mode:r,persisted:a,beforeEnter(T){let M=i;if(!n.isMounted)if(l)M=_||i;else return;T._leaveCb&&T._leaveCb(!0);const se=E[v];se&&nn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),k(M,[T])},enter(T){let M=c,se=u,ae=d;if(!n.isMounted)if(l)M=D||c,se=b||u,ae=B||d;else return;let K=!1;const de=T._enterCb=ge=>{K||(K=!0,ge?k(ae,[T]):k(se,[T]),L.delayedLeave&&L.delayedLeave(),T._enterCb=void 0)};M?x(M,[T,de]):de()},leave(T,M){const se=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return M();k(y,[T]);let ae=!1;const K=T._leaveCb=de=>{ae||(ae=!0,M(),de?k(m,[T]):k(h,[T]),T._leaveCb=void 0,E[se]===t&&delete E[se])};E[se]=t,f?x(f,[T,K]):K()},clone(T){return ua(T,s,n,o)}};return L}function jl(t,s){t.shapeFlag&6&&t.component?jl(t.component.subTree,s):t.shapeFlag&128?(t.ssContent.transition=s.clone(t.ssContent),t.ssFallback.transition=s.clone(t.ssFallback)):t.transition=s}function Ad(t,s=!1,n){let o=[],l=0;for(let r=0;r<t.length;r++){let a=t[r];const i=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===Le?(a.patchFlag&128&&l++,o=o.concat(Ad(a.children,s,i))):(s||a.type!==ht)&&o.push(i!=null?is(a,{key:i}):a)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Ce(t,s){return ye(t)?(()=>qe({name:t.name},s,{setup:t}))():t}const In=t=>!!t.type.__asyncLoader,Ei=t=>t.type.__isKeepAlive,Km={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:s}){const n=Ct(),o=n.ctx;if(!o.renderer)return()=>{const B=s.default&&s.default();return B&&B.length===1?B[0]:B};const l=new Map,r=new Set;let a=null;n.__v_cache=l;const i=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:y}}}=o,f=y("div");o.activate=(B,v,E,k,x)=>{const L=B.component;u(B,v,E,0,i),c(L.vnode,B,v,E,L,i,k,B.slotScopeIds,x),nt(()=>{L.isDeactivated=!1,L.a&&sn(L.a);const T=B.props&&B.props.onVnodeMounted;T&&Pt(T,L.parent,B)},i),ca(L)},o.deactivate=B=>{const v=B.component;u(B,f,null,1,i),nt(()=>{v.da&&sn(v.da);const E=B.props&&B.props.onVnodeUnmounted;E&&Pt(E,v.parent,B),v.isDeactivated=!0},i),ca(v)};function h(B){Sr(B),d(B,n,i,!0)}function m(B){l.forEach((v,E)=>{const k=Fo(v.type);k&&(!B||!B(k))&&_(E)})}function _(B){const v=l.get(B);!a||!nn(v,a)?h(v):a&&Sr(a),l.delete(B),r.delete(B)}ve(()=>[t.include,t.exclude],([B,v])=>{B&&m(E=>fo(B,E)),v&&m(E=>!fo(v,E))},{flush:"post",deep:!0});let D=null;const b=()=>{D!=null&&l.set(D,xr(n.subTree))};return Wt(b),Qn(b),Yo(()=>{l.forEach(B=>{const{subTree:v,suspense:E}=n,k=xr(v);if(B.type===k.type&&B.key===k.key){Sr(k);const x=k.component.da;x&&nt(x,E);return}h(B)})}),()=>{if(D=null,!s.default)return null;const B=s.default(),v=B[0];if(B.length>1)return U("KeepAlive should contain exactly one component child."),a=null,B;if(!zs(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return a=null,v;let E=xr(v);const k=E.type,x=Fo(In(E)?E.type.__asyncResolved||{}:k),{include:L,exclude:T,max:M}=t;if(L&&(!x||!fo(L,x))||T&&x&&fo(T,x))return a=E,v;const se=E.key==null?k:E.key,ae=l.get(se);return E.el&&(E=is(E),v.shapeFlag&128&&(v.ssContent=E)),D=se,ae?(E.el=ae.el,E.component=ae.component,E.transition&&jl(E,E.transition),E.shapeFlag|=512,r.delete(se),r.add(se)):(r.add(se),M&&r.size>parseInt(M,10)&&_(r.values().next().value)),E.shapeFlag|=256,a=E,gd(v.type)?v:E}}},Dd=Km;function fo(t,s){return ie(t)?t.some(n=>fo(n,s)):ze(t)?t.split(",").includes(s):gh(t)?t.test(s):!1}function Cd(t,s){Ed(t,"a",s)}function Bd(t,s){Ed(t,"da",s)}function Ed(t,s,n=Ze){const o=t.__wdc||(t.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(hr(s,o,n),n){let l=n.parent;for(;l&&l.parent;)Ei(l.parent.vnode)&&Ym(o,s,n,l),l=l.parent}}function Ym(t,s,n,o){const l=hr(s,t,o,!0);mr(()=>{li(o[s],l)},n)}function Sr(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function xr(t){return t.shapeFlag&128?t.ssContent:t}function hr(t,s,n=Ze,o=!1){if(n){const l=n[t]||(n[t]=[]),r=s.__weh||(s.__weh=(...a)=>{if(n.isUnmounted)return;Cn(),jn(n);const i=Ft(s,n,t,a);return _n(),Bn(),i});return o?l.unshift(r):l.push(r),r}else{const l=en(_i[t].replace(/ hook$/,""));U(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const bs=t=>(s,n=Ze)=>(!No||t==="sp")&&hr(t,(...o)=>s(...o),n),Zm=bs("bm"),Wt=bs("m"),Xm=bs("bu"),Qn=bs("u"),Yo=bs("bum"),mr=bs("um"),eg=bs("sp"),tg=bs("rtg"),sg=bs("rtc");function ng(t,s=Ze){hr("ec",t,s)}const da="components";function qn(t,s){return lg(da,t,!0,s)||t}const og=Symbol.for("v-ndc");function lg(t,s,n=!0,o=!1){const l=Xe||Ze;if(l){const r=l.type;if(t===da){const i=Fo(r,!1);if(i&&(i===s||i===ls(s)||i===bn(ls(s))))return r}const a=kc(l[t]||r[t],s)||kc(l.appContext[t],s);if(!a&&o)return r;if(n&&!a){const i=t===da?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";U(`Failed to resolve ${t.slice(0,-1)}: ${s}${i}`)}return a}else U(`resolve${bn(t.slice(0,-1))} can only be used in render() or setup().`)}function kc(t,s){return t&&(t[s]||t[ls(s)]||t[bn(ls(s))])}function Wn(t,s,n,o){let l;const r=n&&n[o];if(ie(t)||ze(t)){l=new Array(t.length);for(let a=0,i=t.length;a<i;a++)l[a]=s(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){Number.isInteger(t)||U(`The v-for range expect an integer value but got ${t}.`),l=new Array(t);for(let a=0;a<t;a++)l[a]=s(a+1,a,void 0,r&&r[a])}else if(Re(t))if(t[Symbol.iterator])l=Array.from(t,(a,i)=>s(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=s(t[u],u,i,r&&r[i])}}else l=[];return n&&(n[o]=l),l}function Qe(t,s,n={},o,l){if(Xe.isCE||Xe.parent&&In(Xe.parent)&&Xe.parent.isCE)return s!=="default"&&(n.name=s),P("slot",n,o&&o());let r=t[s];r&&r.length>1&&(U("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),w();const a=r&&wd(r(n)),i=V(Le,{key:n.key||a&&a.key||`_${s}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function wd(t){return t.some(s=>zs(s)?!(s.type===ht||s.type===Le&&!wd(s.children)):!0)?t:null}const ya=t=>t?Ud(t)?_r(t)||t.proxy:ya(t.parent):null,gn=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>uo(t.props),$attrs:t=>uo(t.attrs),$slots:t=>uo(t.slots),$refs:t=>uo(t.refs),$parent:t=>ya(t.parent),$root:t=>ya(t.root),$emit:t=>t.emit,$options:t=>ki(t),$forceUpdate:t=>t.f||(t.f=()=>dr(t.update)),$nextTick:t=>t.n||(t.n=rt.bind(t.proxy)),$watch:t=>Qm.bind(t)}),wi=t=>t==="_"||t==="$",Tr=(t,s)=>t!==Ie&&!t.__isScriptSetup&&we(t,s),kd={get({_:t},s){const{ctx:n,setupState:o,data:l,props:r,accessCache:a,type:i,appContext:c}=t;if(s==="__isVue")return!0;let u;if(s[0]!=="$"){const h=a[s];if(h!==void 0)switch(h){case 1:return o[s];case 2:return l[s];case 4:return n[s];case 3:return r[s]}else{if(Tr(o,s))return a[s]=1,o[s];if(l!==Ie&&we(l,s))return a[s]=2,l[s];if((u=t.propsOptions[0])&&we(u,s))return a[s]=3,r[s];if(n!==Ie&&we(n,s))return a[s]=4,n[s];fa&&(a[s]=0)}}const d=gn[s];let y,f;if(d)return s==="$attrs"?(ct(t,"get",s),ql()):s==="$slots"&&ct(t,"get",s),d(t);if((y=i.__cssModules)&&(y=y[s]))return y;if(n!==Ie&&we(n,s))return a[s]=4,n[s];if(f=c.config.globalProperties,we(f,s))return f[s];Xe&&(!ze(s)||s.indexOf("__v")!==0)&&(l!==Ie&&wi(s[0])&&we(l,s)?U(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Xe&&U(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:t},s,n){const{data:o,setupState:l,ctx:r}=t;return Tr(l,s)?(l[s]=n,!0):l.__isScriptSetup&&we(l,s)?(U(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):o!==Ie&&we(o,s)?(o[s]=n,!0):we(t.props,s)?(U(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in t?(U(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in t.appContext.config.globalProperties?Object.defineProperty(r,s,{enumerable:!0,configurable:!0,value:n}):r[s]=n,!0)},has({_:{data:t,setupState:s,accessCache:n,ctx:o,appContext:l,propsOptions:r}},a){let i;return!!n[a]||t!==Ie&&we(t,a)||Tr(s,a)||(i=r[0])&&we(i,a)||we(o,a)||we(gn,a)||we(l.config.globalProperties,a)},defineProperty(t,s,n){return n.get!=null?t._.accessCache[s]=0:we(n,"value")&&this.set(t,s,n.value,null),Reflect.defineProperty(t,s,n)}};kd.ownKeys=t=>(U("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function rg(t){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(gn).forEach(n=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,get:()=>gn[n](t),set:At})}),s}function ag(t){const{ctx:s,propsOptions:[n]}=t;n&&Object.keys(n).forEach(o=>{Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>t.props[o],set:At})})}function ig(t){const{ctx:s,setupState:n}=t;Object.keys(me(n)).forEach(o=>{if(!n.__isScriptSetup){if(wi(o[0])){U(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>n[o],set:At})}})}function cg(){return pg().slots}function pg(){const t=Ct();return t||U("useContext() called without active instance."),t.setupContext||(t.setupContext=jd(t))}function Sc(t){return ie(t)?t.reduce((s,n)=>(s[n]=null,s),{}):t}function ug(){const t=Object.create(null);return(s,n)=>{t[n]?U(`${s} property "${n}" is already defined in ${t[n]}.`):t[n]=s}}let fa=!0;function dg(t){const s=ki(t),n=t.proxy,o=t.ctx;fa=!1,s.beforeCreate&&xc(s.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:i,provide:c,inject:u,created:d,beforeMount:y,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:D,beforeDestroy:b,beforeUnmount:B,destroyed:v,unmounted:E,render:k,renderTracked:x,renderTriggered:L,errorCaptured:T,serverPrefetch:M,expose:se,inheritAttrs:ae,components:K,directives:de,filters:ge}=s,_e=ug();{const[ee]=t.propsOptions;if(ee)for(const ce in ee)_e("Props",ce)}if(u&&yg(u,o,_e),a)for(const ee in a){const ce=a[ee];ye(ce)?(Object.defineProperty(o,ee,{value:ce.bind(n),configurable:!0,enumerable:!0,writable:!0}),_e("Methods",ee)):U(`Method "${ee}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(l){ye(l)||U("The data option must be a function. Plain object usage is no longer supported.");const ee=l.call(n,n);if(ai(ee)&&U("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Re(ee))U("data() should return an object.");else{t.data=Ve(ee);for(const ce in ee)_e("Data",ce),wi(ce[0])||Object.defineProperty(o,ce,{configurable:!0,enumerable:!0,get:()=>ee[ce],set:At})}}if(fa=!0,r)for(const ee in r){const ce=r[ee],Ee=ye(ce)?ce.bind(n,n):ye(ce.get)?ce.get.bind(n,n):At;Ee===At&&U(`Computed property "${ee}" has no getter.`);const Pe=!ye(ce)&&ye(ce.set)?ce.set.bind(n):()=>{U(`Write operation failed: computed property "${ee}" is readonly.`)},Lt=R({get:Ee,set:Pe});Object.defineProperty(o,ee,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:ot=>Lt.value=ot}),_e("Computed",ee)}if(i)for(const ee in i)Sd(i[ee],o,n,ee);if(c){const ee=ye(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(ce=>{kt(ce,ee[ce])})}d&&xc(d,t,"c");function Oe(ee,ce){ie(ce)?ce.forEach(Ee=>ee(Ee.bind(n))):ce&&ee(ce.bind(n))}if(Oe(Zm,y),Oe(Wt,f),Oe(Xm,h),Oe(Qn,m),Oe(Cd,_),Oe(Bd,D),Oe(ng,T),Oe(sg,x),Oe(tg,L),Oe(Yo,B),Oe(mr,E),Oe(eg,M),ie(se))if(se.length){const ee=t.exposed||(t.exposed={});se.forEach(ce=>{Object.defineProperty(ee,ce,{get:()=>n[ce],set:Ee=>n[ce]=Ee})})}else t.exposed||(t.exposed={});k&&t.render===At&&(t.render=k),ae!=null&&(t.inheritAttrs=ae),K&&(t.components=K),de&&(t.directives=de)}function yg(t,s,n=At){ie(t)&&(t=ha(t));for(const o in t){const l=t[o];let r;Re(l)?"default"in l?r=I(l.from||o,l.default,!0):r=I(l.from||o):r=I(l),Te(r)?Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):s[o]=r,n("Inject",o)}}function xc(t,s,n){Ft(ie(t)?t.map(o=>o.bind(s.proxy)):t.bind(s.proxy),s,n)}function Sd(t,s,n,o){const l=o.includes(".")?_d(n,o):()=>n[o];if(ze(t)){const r=s[t];ye(r)?ve(l,r):U(`Invalid watch handler specified by key "${t}"`,r)}else if(ye(t))ve(l,t.bind(n));else if(Re(t))if(ie(t))t.forEach(r=>Sd(r,s,n,o));else{const r=ye(t.handler)?t.handler.bind(n):s[t.handler];ye(r)?ve(l,r,t):U(`Invalid watch handler specified by key "${t.handler}"`,r)}else U(`Invalid watch option: "${o}"`,t)}function ki(t){const s=t.type,{mixins:n,extends:o}=s,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(s);let c;return i?c=i:!l.length&&!n&&!o?c=s:(c={},l.length&&l.forEach(u=>zl(c,u,a,!0)),zl(c,s,a)),Re(s)&&r.set(s,c),c}function zl(t,s,n,o=!1){const{mixins:l,extends:r}=s;r&&zl(t,r,n,!0),l&&l.forEach(a=>zl(t,a,n,!0));for(const a in s)if(o&&a==="expose")U('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=fg[a]||n&&n[a];t[a]=i?i(t[a],s[a]):s[a]}return t}const fg={data:Tc,props:Lc,emits:Lc,methods:ho,computed:ho,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:ho,directives:ho,watch:mg,provide:Tc,inject:hg};function Tc(t,s){return s?t?function(){return qe(ye(t)?t.call(this,this):t,ye(s)?s.call(this,this):s)}:s:t}function hg(t,s){return ho(ha(t),ha(s))}function ha(t){if(ie(t)){const s={};for(let n=0;n<t.length;n++)s[t[n]]=t[n];return s}return t}function ut(t,s){return t?[...new Set([].concat(t,s))]:s}function ho(t,s){return t?qe(Object.create(null),t,s):s}function Lc(t,s){return t?ie(t)&&ie(s)?[...new Set([...t,...s])]:qe(Object.create(null),Sc(t),Sc(s??{})):s}function mg(t,s){if(!t)return s;if(!s)return t;const n=qe(Object.create(null),t);for(const o in s)n[o]=ut(t[o],s[o]);return n}function xd(){return{app:null,config:{isNativeTag:Pu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gg=0;function _g(t,s){return function(o,l=null){ye(o)||(o=qe({},o)),l!=null&&!Re(l)&&(U("root props passed to app.mount() must be an object."),l=null);const r=xd();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){U("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const a=new Set;let i=!1;const c=r.app={_uid:gg++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Wl,get config(){return r.config},set config(u){U("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return a.has(u)?U("Plugin has already been applied to target app."):u&&ye(u.install)?(a.add(u),u.install(c,...d)):ye(u)?(a.add(u),u(c,...d)):U('A plugin must either be a function or an object with an "install" function.'),c},mixin(u){return r.mixins.includes(u)?U("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),c},component(u,d){return ba(u,r.config),d?(r.components[u]&&U(`Component "${u}" has already been registered in target app.`),r.components[u]=d,c):r.components[u]},directive(u,d){return vd(u),d?(r.directives[u]&&U(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,c):r.directives[u]},mount(u,d,y){if(i)U("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&U("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=P(o,l);return f.appContext=r,r.reload=()=>{t(is(f),u,y)},d&&s?s(f,u):t(f,u,y),i=!0,c._container=u,u.__vue_app__=c,c._instance=f.component,Rm(c,Wl),_r(f.component)||f.component.proxy}},unmount(){i?(t(null,c._container),c._instance=null,$m(c),delete c._container.__vue_app__):U("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&U(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,c},runWithContext(u){Vl=c;try{return u()}finally{Vl=null}}};return c}}let Vl=null;function kt(t,s){if(!Ze)U("provide() can only be used inside setup().");else{let n=Ze.provides;const o=Ze.parent&&Ze.parent.provides;o===n&&(n=Ze.provides=Object.create(o)),n[t]=s}}function I(t,s,n=!1){const o=Ze||Xe;if(o||Vl){const l=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Vl._context.provides;if(l&&t in l)return l[t];if(arguments.length>1)return n&&ye(s)?s.call(o&&o.proxy):s;U(`injection "${String(t)}" not found.`)}else U("inject() can only be used inside setup() or functional components.")}function vg(t,s,n,o=!1){const l={},r={};Pl(r,gr,1),t.propsDefaults=Object.create(null),Td(t,s,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);Rd(s||{},l,t),n?t.props=o?l:im(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function bg(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Ag(t,s,n,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,i=me(l),[c]=t.propsOptions;let u=!1;if(!bg(t)&&(o||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let y=0;y<d.length;y++){let f=d[y];if(yr(t.emitsOptions,f))continue;const h=s[f];if(c)if(we(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const m=ls(f);l[m]=ma(c,i,m,h,t,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{Td(t,s,l,r)&&(u=!0);let d;for(const y in i)(!s||!we(s,y)&&((d=_s(y))===y||!we(s,d)))&&(c?n&&(n[y]!==void 0||n[d]!==void 0)&&(l[y]=ma(c,i,y,void 0,t,!0)):delete l[y]);if(r!==i)for(const y in r)(!s||!we(s,y))&&(delete r[y],u=!0)}u&&rs(t,"set","$attrs"),Rd(s||{},l,t)}function Td(t,s,n,o){const[l,r]=t.propsOptions;let a=!1,i;if(s)for(let c in s){if(Bl(c))continue;const u=s[c];let d;l&&we(l,d=ls(c))?!r||!r.includes(d)?n[d]=u:(i||(i={}))[d]=u:yr(t.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(r){const c=me(n),u=i||Ie;for(let d=0;d<r.length;d++){const y=r[d];n[y]=ma(l,c,y,u[y],t,!we(u,y))}}return a}function ma(t,s,n,o,l,r){const a=t[n];if(a!=null){const i=we(a,"default");if(i&&o===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ye(c)){const{propsDefaults:u}=l;n in u?o=u[n]:(jn(l),o=u[n]=c.call(null,s),_n())}else o=c}a[0]&&(r&&!i?o=!1:a[1]&&(o===""||o===_s(n))&&(o=!0))}return o}function Ld(t,s,n=!1){const o=s.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},i=[];let c=!1;if(!ye(t)){const d=y=>{c=!0;const[f,h]=Ld(y,s,!0);qe(a,f),h&&i.push(...h)};!n&&s.mixins.length&&s.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!c)return Re(t)&&o.set(t,Nn),Nn;if(ie(r))for(let d=0;d<r.length;d++){ze(r[d])||U("props must be strings when using array syntax.",r[d]);const y=ls(r[d]);Rc(y)&&(a[y]=Ie)}else if(r){Re(r)||U("invalid props options",r);for(const d in r){const y=ls(d);if(Rc(y)){const f=r[d],h=a[y]=ie(f)||ye(f)?{type:f}:qe({},f);if(h){const m=Pc(Boolean,h.type),_=Pc(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||we(h,"default"))&&i.push(y)}}}}const u=[a,i];return Re(t)&&o.set(t,u),u}function Rc(t){return t[0]!=="$"?!0:(U(`Invalid prop name: "${t}" is a reserved property.`),!1)}function ga(t){const s=t&&t.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:t===null?"null":""}function $c(t,s){return ga(t)===ga(s)}function Pc(t,s){return ie(s)?s.findIndex(n=>$c(n,t)):ye(s)&&$c(s,t)?0:-1}function Rd(t,s,n){const o=me(s),l=n.propsOptions[0];for(const r in l){let a=l[r];a!=null&&Dg(r,o[r],a,!we(t,r)&&!we(t,_s(r)))}}function Dg(t,s,n,o){const{type:l,required:r,validator:a,skipCheck:i}=n;if(r&&o){U('Missing required prop: "'+t+'"');return}if(!(s==null&&!r)){if(l!=null&&l!==!0&&!i){let c=!1;const u=ie(l)?l:[l],d=[];for(let y=0;y<u.length&&!c;y++){const{valid:f,expectedType:h}=Bg(s,u[y]);d.push(h||""),c=f}if(!c){U(Eg(t,s,d));return}}a&&!a(s)&&U('Invalid prop: custom validator check failed for prop "'+t+'".')}}const Cg=Hs("String,Number,Boolean,Function,Symbol,BigInt");function Bg(t,s){let n;const o=ga(s);if(Cg(o)){const l=typeof t;n=l===o.toLowerCase(),!n&&l==="object"&&(n=t instanceof s)}else o==="Object"?n=Re(t):o==="Array"?n=ie(t):o==="null"?n=t===null:n=t instanceof s;return{valid:n,expectedType:o}}function Eg(t,s,n){let o=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(bn).join(" | ")}`;const l=n[0],r=ii(s),a=Oc(s,l),i=Oc(s,r);return n.length===1&&Nc(l)&&!wg(l,r)&&(o+=` with value ${a}`),o+=`, got ${r} `,Nc(r)&&(o+=`with value ${i}.`),o}function Oc(t,s){return s==="String"?`"${t}"`:s==="Number"?`${Number(t)}`:`${t}`}function Nc(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function wg(...t){return t.some(s=>s.toLowerCase()==="boolean")}const $d=t=>t[0]==="_"||t==="$stable",Si=t=>ie(t)?t.map(zt):[zt(t)],kg=(t,s,n)=>{if(s._n)return s;const o=C((...l)=>(Ze&&U(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Si(s(...l))),n);return o._c=!1,o},Pd=(t,s,n)=>{const o=t._ctx;for(const l in t){if($d(l))continue;const r=t[l];if(ye(r))s[l]=kg(l,r,o);else if(r!=null){U(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const a=Si(r);s[l]=()=>a}}},Od=(t,s)=>{Ei(t.vnode)||U("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Si(s);t.slots.default=()=>n},Sg=(t,s)=>{if(t.vnode.shapeFlag&32){const n=s._;n?(t.slots=me(s),Pl(s,"_",n)):Pd(s,t.slots={})}else t.slots={},s&&Od(t,s);Pl(t.slots,gr,1)},xg=(t,s,n)=>{const{vnode:o,slots:l}=t;let r=!0,a=Ie;if(o.shapeFlag&32){const i=s._;i?$s?(qe(l,s),rs(t,"set","$slots")):n&&i===1?r=!1:(qe(l,s),!n&&i===1&&delete l._):(r=!s.$stable,Pd(s,l)),a=s}else s&&(Od(t,s),a={default:1});if(r)for(const i in l)!$d(i)&&!(i in a)&&delete l[i]};function _a(t,s,n,o,l=!1){if(ie(t)){t.forEach((f,h)=>_a(f,s&&(ie(s)?s[h]:s),n,o,l));return}if(In(o)&&!l)return;const r=o.shapeFlag&4?_r(o.component)||o.component.proxy:o.el,a=l?null:r,{i,r:c}=t;if(!i){U("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=s&&s.r,d=i.refs===Ie?i.refs={}:i.refs,y=i.setupState;if(u!=null&&u!==c&&(ze(u)?(d[u]=null,we(y,u)&&(y[u]=null)):Te(u)&&(u.value=null)),ye(c))gs(c,i,12,[a,d]);else{const f=ze(c),h=Te(c);if(f||h){const m=()=>{if(t.f){const _=f?we(y,c)?y[c]:d[c]:c.value;l?ie(_)&&li(_,r):ie(_)?_.includes(r)||_.push(r):f?(d[c]=[r],we(y,c)&&(y[c]=d[c])):(c.value=[r],t.k&&(d[t.k]=c.value))}else f?(d[c]=a,we(y,c)&&(y[c]=a)):h?(c.value=a,t.k&&(d[t.k]=a)):U("Invalid template ref type:",c,`(${typeof c})`)};a?(m.id=-1,nt(m,n)):m()}else U("Invalid template ref type:",c,`(${typeof c})`)}}let Zn,Ts;function us(t,s){t.appContext.config.performance&&Hl()&&Ts.mark(`vue-${s}-${t.uid}`),Nm(t,s,Hl()?Ts.now():Date.now())}function ds(t,s){if(t.appContext.config.performance&&Hl()){const n=`vue-${s}-${t.uid}`,o=n+":end";Ts.mark(o),Ts.measure(`<${vr(t,t.type)}> ${s}`,n,o),Ts.clearMarks(n),Ts.clearMarks(o)}Fm(t,s,Hl()?Ts.now():Date.now())}function Hl(){return Zn!==void 0||(typeof window<"u"&&window.performance?(Zn=!0,Ts=window.performance):Zn=!1),Zn}function Tg(){const t=[];if(t.length){const s=t.length>1;console.warn(`Feature flag${s?"s":""} ${t.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nt=Hm;function Lg(t){return Rg(t)}function Rg(t,s){Tg();const n=Ol();n.__VUE__=!0,dd(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:o,remove:l,patchProp:r,createElement:a,createText:i,createComment:c,setText:u,setElementText:d,parentNode:y,nextSibling:f,setScopeId:h=At,insertStaticContent:m}=t,_=(g,A,S,F=null,N=null,W=null,Z=!1,z=null,G=$s?!1:!!A.dynamicChildren)=>{if(g===A)return;g&&!nn(g,A)&&(F=Y(g),_t(g,N,W,!0),g=null),A.patchFlag===-2&&(G=!1,A.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:ne}=A;switch(q){case Zo:D(g,A,S,F);break;case ht:b(g,A,S,F);break;case vo:g==null?B(A,S,F,Z):v(g,A,S,Z);break;case Le:de(g,A,S,F,N,W,Z,z,G);break;default:ne&1?x(g,A,S,F,N,W,Z,z,G):ne&6?ge(g,A,S,F,N,W,Z,z,G):ne&64||ne&128?q.process(g,A,S,F,N,W,Z,z,G,te):U("Invalid VNode type:",q,`(${typeof q})`)}oe!=null&&N&&_a(oe,g&&g.ref,W,A||g,!A)},D=(g,A,S,F)=>{if(g==null)o(A.el=i(A.children),S,F);else{const N=A.el=g.el;A.children!==g.children&&u(N,A.children)}},b=(g,A,S,F)=>{g==null?o(A.el=c(A.children||""),S,F):A.el=g.el},B=(g,A,S,F)=>{[g.el,g.anchor]=m(g.children,A,S,F,g.el,g.anchor)},v=(g,A,S,F)=>{if(A.children!==g.children){const N=f(g.anchor);k(g),[A.el,A.anchor]=m(A.children,S,N,F)}else A.el=g.el,A.anchor=g.anchor},E=({el:g,anchor:A},S,F)=>{let N;for(;g&&g!==A;)N=f(g),o(g,S,F),g=N;o(A,S,F)},k=({el:g,anchor:A})=>{let S;for(;g&&g!==A;)S=f(g),l(g),g=S;l(A)},x=(g,A,S,F,N,W,Z,z,G)=>{Z=Z||A.type==="svg",g==null?L(A,S,F,N,W,Z,z,G):se(g,A,N,W,Z,z,G)},L=(g,A,S,F,N,W,Z,z)=>{let G,q;const{type:oe,props:ne,shapeFlag:pe,transition:he,dirs:ke}=g;if(G=g.el=a(g.type,W,ne&&ne.is,ne),pe&8?d(G,g.children):pe&16&&M(g.children,G,null,F,N,W&&oe!=="foreignObject",Z,z),ke&&Gs(g,null,F,"created"),T(G,g,g.scopeId,Z,F),ne){for(const Fe in ne)Fe!=="value"&&!Bl(Fe)&&r(G,Fe,null,ne[Fe],W,g.children,F,N,$);"value"in ne&&r(G,"value",null,ne.value),(q=ne.onVnodeBeforeMount)&&Pt(q,F,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:F,enumerable:!1}),ke&&Gs(g,null,F,"beforeMount");const Me=(!N||N&&!N.pendingBranch)&&he&&!he.persisted;Me&&he.beforeEnter(G),o(G,A,S),((q=ne&&ne.onVnodeMounted)||Me||ke)&&nt(()=>{q&&Pt(q,F,g),Me&&he.enter(G),ke&&Gs(g,null,F,"mounted")},N)},T=(g,A,S,F,N)=>{if(S&&h(g,S),F)for(let W=0;W<F.length;W++)h(g,F[W]);if(N){let W=N.subTree;if(W.patchFlag>0&&W.patchFlag&2048&&(W=md(W.children)||W),A===W){const Z=N.vnode;T(g,Z,Z.scopeId,Z.slotScopeIds,N.parent)}}},M=(g,A,S,F,N,W,Z,z,G=0)=>{for(let q=G;q<g.length;q++){const oe=g[q]=z?Ss(g[q]):zt(g[q]);_(null,oe,A,S,F,N,W,Z,z)}},se=(g,A,S,F,N,W,Z)=>{const z=A.el=g.el;let{patchFlag:G,dynamicChildren:q,dirs:oe}=A;G|=g.patchFlag&16;const ne=g.props||Ie,pe=A.props||Ie;let he;S&&Ks(S,!1),(he=pe.onVnodeBeforeUpdate)&&Pt(he,S,A,g),oe&&Gs(A,g,S,"beforeUpdate"),S&&Ks(S,!0),$s&&(G=0,Z=!1,q=null);const ke=N&&A.type!=="foreignObject";if(q?(ae(g.dynamicChildren,q,z,S,F,ke,W),Ql(g,A)):Z||Ee(g,A,z,null,S,F,ke,W,!1),G>0){if(G&16)K(z,A,ne,pe,S,F,N);else if(G&2&&ne.class!==pe.class&&r(z,"class",null,pe.class,N),G&4&&r(z,"style",ne.style,pe.style,N),G&8){const Me=A.dynamicProps;for(let Fe=0;Fe<Me.length;Fe++){const Ge=Me[Fe],Ut=ne[Ge],Sn=pe[Ge];(Sn!==Ut||Ge==="value")&&r(z,Ge,Ut,Sn,N,g.children,S,F,$)}}G&1&&g.children!==A.children&&d(z,A.children)}else!Z&&q==null&&K(z,A,ne,pe,S,F,N);((he=pe.onVnodeUpdated)||oe)&&nt(()=>{he&&Pt(he,S,A,g),oe&&Gs(A,g,S,"updated")},F)},ae=(g,A,S,F,N,W,Z)=>{for(let z=0;z<A.length;z++){const G=g[z],q=A[z],oe=G.el&&(G.type===Le||!nn(G,q)||G.shapeFlag&70)?y(G.el):S;_(G,q,oe,null,F,N,W,Z,!0)}},K=(g,A,S,F,N,W,Z)=>{if(S!==F){if(S!==Ie)for(const z in S)!Bl(z)&&!(z in F)&&r(g,z,S[z],null,Z,A.children,N,W,$);for(const z in F){if(Bl(z))continue;const G=F[z],q=S[z];G!==q&&z!=="value"&&r(g,z,q,G,Z,A.children,N,W,$)}"value"in F&&r(g,"value",S.value,F.value)}},de=(g,A,S,F,N,W,Z,z,G)=>{const q=A.el=g?g.el:i(""),oe=A.anchor=g?g.anchor:i("");let{patchFlag:ne,dynamicChildren:pe,slotScopeIds:he}=A;($s||ne&2048)&&(ne=0,G=!1,pe=null),he&&(z=z?z.concat(he):he),g==null?(o(q,S,F),o(oe,S,F),M(A.children,S,oe,N,W,Z,z,G)):ne>0&&ne&64&&pe&&g.dynamicChildren?(ae(g.dynamicChildren,pe,S,N,W,Z,z),Ql(g,A)):Ee(g,A,S,oe,N,W,Z,z,G)},ge=(g,A,S,F,N,W,Z,z,G)=>{A.slotScopeIds=z,g==null?A.shapeFlag&512?N.ctx.activate(A,S,F,Z,G):_e(A,S,F,N,W,Z,G):Oe(g,A,G)},_e=(g,A,S,F,N,W,Z)=>{const z=g.component=Vg(g,F,N);if(z.type.__hmrId&&Sm(z),El(g),us(z,"mount"),Ei(g)&&(z.ctx.renderer=te),us(z,"init"),Qg(z),ds(z,"init"),z.asyncDep){if(N&&N.registerDep(z,ee),!g.el){const G=z.subTree=P(ht);b(null,G,A,S)}return}ee(z,g,A,S,N,W,Z),wl(),ds(z,"mount")},Oe=(g,A,S)=>{const F=A.component=g.component;if(zm(g,A,S))if(F.asyncDep&&!F.asyncResolved){El(A),ce(F,A,S),wl();return}else F.next=A,wm(F.update),F.update();else A.el=g.el,F.vnode=A},ee=(g,A,S,F,N,W,Z)=>{const z=()=>{if(g.isMounted){let{next:oe,bu:ne,u:pe,parent:he,vnode:ke}=g,Me=oe,Fe;El(oe||g.vnode),Ks(g,!1),oe?(oe.el=ke.el,ce(g,oe,Z)):oe=ke,ne&&sn(ne),(Fe=oe.props&&oe.props.onVnodeBeforeUpdate)&&Pt(Fe,he,oe,ke),Ks(g,!0),us(g,"render");const Ge=kr(g);ds(g,"render");const Ut=g.subTree;g.subTree=Ge,us(g,"patch"),_(Ut,Ge,y(Ut.el),Y(Ut),g,N,W),ds(g,"patch"),oe.el=Ge.el,Me===null&&Vm(g,Ge.el),pe&&nt(pe,N),(Fe=oe.props&&oe.props.onVnodeUpdated)&&nt(()=>Pt(Fe,he,oe,ke),N),yd(g),wl()}else{let oe;const{el:ne,props:pe}=A,{bm:he,m:ke,parent:Me}=g,Fe=In(A);if(Ks(g,!1),he&&sn(he),!Fe&&(oe=pe&&pe.onVnodeBeforeMount)&&Pt(oe,Me,A),Ks(g,!0),ne&&Ne){const Ge=()=>{us(g,"render"),g.subTree=kr(g),ds(g,"render"),us(g,"hydrate"),Ne(ne,g.subTree,g,N,null),ds(g,"hydrate")};Fe?A.type.__asyncLoader().then(()=>!g.isUnmounted&&Ge()):Ge()}else{us(g,"render");const Ge=g.subTree=kr(g);ds(g,"render"),us(g,"patch"),_(null,Ge,S,F,g,N,W),ds(g,"patch"),A.el=Ge.el}if(ke&&nt(ke,N),!Fe&&(oe=pe&&pe.onVnodeMounted)){const Ge=A;nt(()=>Pt(oe,Me,Ge),N)}(A.shapeFlag&256||Me&&In(Me.vnode)&&Me.vnode.shapeFlag&256)&&g.a&&nt(g.a,N),g.isMounted=!0,ca(g),A=S=F=null}},G=g.effect=new di(z,()=>dr(q),g.scope),q=g.update=()=>G.run();q.id=g.uid,Ks(g,!0),G.onTrack=g.rtc?oe=>sn(g.rtc,oe):void 0,G.onTrigger=g.rtg?oe=>sn(g.rtg,oe):void 0,q.ownerInstance=g,q()},ce=(g,A,S)=>{A.component=g;const F=g.vnode.props;g.vnode=A,g.next=null,Ag(g,A.props,F,S),xg(g,A.children,S),Cn(),Cc(),Bn()},Ee=(g,A,S,F,N,W,Z,z,G=!1)=>{const q=g&&g.children,oe=g?g.shapeFlag:0,ne=A.children,{patchFlag:pe,shapeFlag:he}=A;if(pe>0){if(pe&128){Lt(q,ne,S,F,N,W,Z,z,G);return}else if(pe&256){Pe(q,ne,S,F,N,W,Z,z,G);return}}he&8?(oe&16&&$(q,N,W),ne!==q&&d(S,ne)):oe&16?he&16?Lt(q,ne,S,F,N,W,Z,z,G):$(q,N,W,!0):(oe&8&&d(S,""),he&16&&M(ne,S,F,N,W,Z,z,G))},Pe=(g,A,S,F,N,W,Z,z,G)=>{g=g||Nn,A=A||Nn;const q=g.length,oe=A.length,ne=Math.min(q,oe);let pe;for(pe=0;pe<ne;pe++){const he=A[pe]=G?Ss(A[pe]):zt(A[pe]);_(g[pe],he,S,null,N,W,Z,z,G)}q>oe?$(g,N,W,!0,!1,ne):M(A,S,F,N,W,Z,z,G,ne)},Lt=(g,A,S,F,N,W,Z,z,G)=>{let q=0;const oe=A.length;let ne=g.length-1,pe=oe-1;for(;q<=ne&&q<=pe;){const he=g[q],ke=A[q]=G?Ss(A[q]):zt(A[q]);if(nn(he,ke))_(he,ke,S,null,N,W,Z,z,G);else break;q++}for(;q<=ne&&q<=pe;){const he=g[ne],ke=A[pe]=G?Ss(A[pe]):zt(A[pe]);if(nn(he,ke))_(he,ke,S,null,N,W,Z,z,G);else break;ne--,pe--}if(q>ne){if(q<=pe){const he=pe+1,ke=he<oe?A[he].el:F;for(;q<=pe;)_(null,A[q]=G?Ss(A[q]):zt(A[q]),S,ke,N,W,Z,z,G),q++}}else if(q>pe)for(;q<=ne;)_t(g[q],N,W,!0),q++;else{const he=q,ke=q,Me=new Map;for(q=ke;q<=pe;q++){const pt=A[q]=G?Ss(A[q]):zt(A[q]);pt.key!=null&&(Me.has(pt.key)&&U("Duplicate keys found during update:",JSON.stringify(pt.key),"Make sure keys are unique."),Me.set(pt.key,q))}let Fe,Ge=0;const Ut=pe-ke+1;let Sn=!1,dc=0;const Yn=new Array(Ut);for(q=0;q<Ut;q++)Yn[q]=0;for(q=he;q<=ne;q++){const pt=g[q];if(Ge>=Ut){_t(pt,N,W,!0);continue}let Zt;if(pt.key!=null)Zt=Me.get(pt.key);else for(Fe=ke;Fe<=pe;Fe++)if(Yn[Fe-ke]===0&&nn(pt,A[Fe])){Zt=Fe;break}Zt===void 0?_t(pt,N,W,!0):(Yn[Zt-ke]=q+1,Zt>=dc?dc=Zt:Sn=!0,_(pt,A[Zt],S,null,N,W,Z,z,G),Ge++)}const yc=Sn?$g(Yn):Nn;for(Fe=yc.length-1,q=Ut-1;q>=0;q--){const pt=ke+q,Zt=A[pt],fc=pt+1<oe?A[pt+1].el:F;Yn[q]===0?_(null,Zt,S,fc,N,W,Z,z,G):Sn&&(Fe<0||q!==yc[Fe]?ot(Zt,S,fc,2):Fe--)}}},ot=(g,A,S,F,N=null)=>{const{el:W,type:Z,transition:z,children:G,shapeFlag:q}=g;if(q&6){ot(g.component.subTree,A,S,F);return}if(q&128){g.suspense.move(A,S,F);return}if(q&64){Z.move(g,A,S,te);return}if(Z===Le){o(W,A,S);for(let ne=0;ne<G.length;ne++)ot(G[ne],A,S,F);o(g.anchor,A,S);return}if(Z===vo){E(g,A,S);return}if(F!==2&&q&1&&z)if(F===0)z.beforeEnter(W),o(W,A,S),nt(()=>z.enter(W),N);else{const{leave:ne,delayLeave:pe,afterLeave:he}=z,ke=()=>o(W,A,S),Me=()=>{ne(W,()=>{ke(),he&&he()})};pe?pe(W,ke,Me):Me()}else o(W,A,S)},_t=(g,A,S,F=!1,N=!1)=>{const{type:W,props:Z,ref:z,children:G,dynamicChildren:q,shapeFlag:oe,patchFlag:ne,dirs:pe}=g;if(z!=null&&_a(z,null,S,g,!0),oe&256){A.ctx.deactivate(g);return}const he=oe&1&&pe,ke=!In(g);let Me;if(ke&&(Me=Z&&Z.onVnodeBeforeUnmount)&&Pt(Me,A,g),oe&6)Rt(g.component,S,F);else{if(oe&128){g.suspense.unmount(S,F);return}he&&Gs(g,null,A,"beforeUnmount"),oe&64?g.type.remove(g,A,S,N,te,F):q&&(W!==Le||ne>0&&ne&64)?$(q,A,S,!1,!0):(W===Le&&ne&384||!N&&oe&16)&&$(G,A,S),F&&Yt(g)}(ke&&(Me=Z&&Z.onVnodeUnmounted)||he)&&nt(()=>{Me&&Pt(Me,A,g),he&&Gs(g,null,A,"unmounted")},S)},Yt=g=>{const{type:A,el:S,anchor:F,transition:N}=g;if(A===Le){g.patchFlag>0&&g.patchFlag&2048&&N&&!N.persisted?g.children.forEach(Z=>{Z.type===ht?l(Z.el):Yt(Z)}):Js(S,F);return}if(A===vo){k(g);return}const W=()=>{l(S),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:Z,delayLeave:z}=N,G=()=>Z(S,W);z?z(g.el,W,G):G()}else W()},Js=(g,A)=>{let S;for(;g!==A;)S=f(g),l(g),g=S;l(A)},Rt=(g,A,S)=>{g.type.__hmrId&&xm(g);const{bum:F,scope:N,update:W,subTree:Z,um:z}=g;F&&sn(F),N.stop(),W&&(W.active=!1,_t(Z,g,A,S)),z&&nt(z,A),nt(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve()),Om(g)},$=(g,A,S,F=!1,N=!1,W=0)=>{for(let Z=W;Z<g.length;Z++)_t(g[Z],A,S,F,N)},Y=g=>g.shapeFlag&6?Y(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),X=(g,A,S)=>{g==null?A._vnode&&_t(A._vnode,null,null,!0):_(A._vnode||null,g,A,null,null,null,S),Cc(),cd(),A._vnode=g},te={p:_,um:_t,m:ot,r:Yt,mt:_e,mc:M,pc:Ee,pbc:ae,n:Y,o:t};let Be,Ne;return s&&([Be,Ne]=s(te)),{render:X,hydrate:Be,createApp:_g(X,Be)}}function Ks({effect:t,update:s},n){t.allowRecurse=s.allowRecurse=n}function Ql(t,s,n=!1){const o=t.children,l=s.children;if(ie(o)&&ie(l))for(let r=0;r<o.length;r++){const a=o[r];let i=l[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[r]=Ss(l[r]),i.el=a.el),n||Ql(a,i)),i.type===Zo&&(i.el=a.el),i.type===ht&&!i.el&&(i.el=a.el)}}function $g(t){const s=t.slice(),n=[0];let o,l,r,a,i;const c=t.length;for(o=0;o<c;o++){const u=t[o];if(u!==0){if(l=n[n.length-1],t[l]<u){s[o]=l,n.push(o);continue}for(r=0,a=n.length-1;r<a;)i=r+a>>1,t[n[i]]<u?r=i+1:a=i;u<t[n[r]]&&(r>0&&(s[o]=n[r-1]),n[r]=o)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=s[a];return n}const Pg=t=>t.__isTeleport,Mn=t=>t&&(t.disabled||t.disabled===""),Fc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,va=(t,s)=>{const n=t&&t.to;if(ze(n))if(s){const o=s(n);return o||U(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return U("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!n&&!Mn(t)&&U(`Invalid Teleport target: ${n}`),n},Og={__isTeleport:!0,process(t,s,n,o,l,r,a,i,c,u){const{mc:d,pc:y,pbc:f,o:{insert:h,querySelector:m,createText:_,createComment:D}}=u,b=Mn(s.props);let{shapeFlag:B,children:v,dynamicChildren:E}=s;if($s&&(c=!1,E=null),t==null){const k=s.el=D("teleport start"),x=s.anchor=D("teleport end");h(k,n,o),h(x,n,o);const L=s.target=va(s.props,m),T=s.targetAnchor=_("");L?(h(T,L),a=a||Fc(L)):b||U("Invalid Teleport target on mount:",L,`(${typeof L})`);const M=(se,ae)=>{B&16&&d(v,se,ae,l,r,a,i,c)};b?M(n,x):L&&M(L,T)}else{s.el=t.el;const k=s.anchor=t.anchor,x=s.target=t.target,L=s.targetAnchor=t.targetAnchor,T=Mn(t.props),M=T?n:x,se=T?k:L;if(a=a||Fc(x),E?(f(t.dynamicChildren,E,M,l,r,a,i),Ql(t,s,!0)):c||y(t,s,M,se,l,r,a,i,!1),b)T||dl(s,n,k,u,1);else if((s.props&&s.props.to)!==(t.props&&t.props.to)){const ae=s.target=va(s.props,m);ae?dl(s,ae,null,u,0):U("Invalid Teleport target on update:",x,`(${typeof x})`)}else T&&dl(s,x,L,u,1)}Nd(s)},remove(t,s,n,o,{um:l,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:u,targetAnchor:d,target:y,props:f}=t;if(y&&r(d),(a||!Mn(f))&&(r(u),i&16))for(let h=0;h<c.length;h++){const m=c[h];l(m,s,n,!0,!!m.dynamicChildren)}},move:dl,hydrate:Ng};function dl(t,s,n,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,s,n);const{el:a,anchor:i,shapeFlag:c,children:u,props:d}=t,y=r===2;if(y&&o(a,s,n),(!y||Mn(d))&&c&16)for(let f=0;f<u.length;f++)l(u[f],s,n,2);y&&o(i,s,n)}function Ng(t,s,n,o,l,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},u){const d=s.target=va(s.props,c);if(d){const y=d._lpa||d.firstChild;if(s.shapeFlag&16)if(Mn(s.props))s.anchor=u(a(t),s,i(t),n,o,l,r),s.targetAnchor=y;else{s.anchor=a(t);let f=y;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&a(s.targetAnchor);break}u(y,s,d,n,o,l,r)}Nd(s)}return s.anchor&&a(s.anchor)}const Fg=Og;function Nd(t){const s=t.ctx;if(s&&s.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",s.uid),n=n.nextSibling;s.ut()}}const Le=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),bo=[];let Ht=null;function w(t=!1){bo.push(Ht=t?null:[])}function Ig(){bo.pop(),Ht=bo[bo.length-1]||null}let Oo=1;function Ic(t){Oo+=t}function Fd(t){return t.dynamicChildren=Oo>0?Ht||Nn:null,Ig(),Oo>0&&Ht&&Ht.push(t),t}function J(t,s,n,o,l,r){return Fd(e(t,s,n,o,l,r,!0))}function V(t,s,n,o,l){return Fd(P(t,s,n,o,l,!0))}function zs(t){return t?t.__v_isVNode===!0:!1}function nn(t,s){return s.shapeFlag&6&&$n.has(s.type)?(t.shapeFlag&=-257,s.shapeFlag&=-513,!1):t.type===s.type&&t.key===s.key}const Mg=(...t)=>Ug(...t),gr="__vInternal",Id=({key:t})=>t??null,kl=({ref:t,ref_key:s,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||Te(t)||ye(t)?{i:Xe,r:t,k:s,f:!!n}:t:null);function e(t,s=null,n=null,o=0,l=null,r=t===Le?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:s,key:s&&Id(s),ref:s&&kl(s),scopeId:fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Xe};return i?(xi(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),c.key!==c.key&&U("VNode created with invalid key (NaN). VNode type:",c.type),Oo>0&&!a&&Ht&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ht.push(c),c}const P=Mg;function Ug(t,s=null,n=null,o=0,l=null,r=!1){if((!t||t===og)&&(t||U(`Invalid vnode type when creating vnode: ${t}.`),t=ht),zs(t)){const i=is(t,s,!0);return n&&xi(i,n),Oo>0&&!r&&Ht&&(i.shapeFlag&6?Ht[Ht.indexOf(t)]=i:Ht.push(i)),i.patchFlag|=-2,i}if(zd(t)&&(t=t.__vccOpts),s){s=le(s);let{class:i,style:c}=s;i&&!ze(i)&&(s.class=Ue(i)),Re(c)&&(Ml(c)&&!ie(c)&&(c=qe({},c)),s.style=et(c))}const a=ze(t)?1:gd(t)?128:Pg(t)?64:Re(t)?4:ye(t)?2:0;return a&4&&Ml(t)&&(t=me(t),U("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,s,n,o,l,a,r,!0)}function le(t){return t?Ml(t)||gr in t?qe({},t):t:null}function is(t,s,n=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,i=s?ue(o||{},s):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Id(i),ref:s&&s.ref?n&&l?ie(l)?l.concat(kl(s)):[l,kl(s)]:kl(s):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&ie(a)?a.map(Md):a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:s&&t.type!==Le?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Md(t){const s=is(t);return ie(t.children)&&(s.children=t.children.map(Md)),s}function p(t=" ",s=0){return P(Zo,null,t,s)}function qg(t,s){const n=P(vo,null,t);return n.staticCount=s,n}function Ae(t="",s=!1){return s?(w(),V(ht,null,t)):P(ht,null,t)}function zt(t){return t==null||typeof t=="boolean"?P(ht):ie(t)?P(Le,null,t.slice()):typeof t=="object"?Ss(t):P(Zo,null,String(t))}function Ss(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function xi(t,s){let n=0;const{shapeFlag:o}=t;if(s==null)s=null;else if(ie(s))n=16;else if(typeof s=="object")if(o&65){const l=s.default;l&&(l._c&&(l._d=!1),xi(t,l()),l._c&&(l._d=!0));return}else{n=32;const l=s._;!l&&!(gr in s)?s._ctx=Xe:l===3&&Xe&&(Xe.slots._===1?s._=1:(s._=2,t.patchFlag|=1024))}else ye(s)?(s={default:s,_ctx:Xe},n=32):(s=String(s),o&64?(n=16,s=[p(s)]):n=8);t.children=s,t.shapeFlag|=n}function ue(...t){const s={};for(let n=0;n<t.length;n++){const o=t[n];for(const l in o)if(l==="class")s.class!==o.class&&(s.class=Ue([s.class,o.class]));else if(l==="style")s.style=et([s.style,o.style]);else if(Jo(l)){const r=s[l],a=o[l];a&&r!==a&&!(ie(r)&&r.includes(a))&&(s[l]=r?[].concat(r,a):a)}else l!==""&&(s[l]=o[l])}return s}function Pt(t,s,n,o=null){Ft(t,s,7,[n,o])}const jg=xd();let zg=0;function Vg(t,s,n){const o=t.type,l=(s?s.appContext:t.appContext)||jg,r={uid:zg++,vnode:t,type:o,parent:s,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new qu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ld(o,l),emitsOptions:hd(o,l),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:o.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=rg(r),r.root=s?s.root:r,r.emit=Mm.bind(null,r),t.ce&&t.ce(r),r}let Ze=null;const Ct=()=>Ze||Xe;let Ti,xn,Mc="__VUE_INSTANCE_SETTERS__";(xn=Ol()[Mc])||(xn=Ol()[Mc]=[]),xn.push(t=>Ze=t),Ti=t=>{xn.length>1?xn.forEach(s=>s(t)):xn[0](t)};const jn=t=>{Ti(t),t.scope.on()},_n=()=>{Ze&&Ze.scope.off(),Ti(null)},Hg=Hs("slot,component");function ba(t,s){const n=s.isNativeTag||Pu;(Hg(t)||n(t))&&U("Do not use built-in or reserved HTML elements as component id: "+t)}function Ud(t){return t.vnode.shapeFlag&4}let No=!1;function Qg(t,s=!1){No=s;const{props:n,children:o}=t.vnode,l=Ud(t);vg(t,n,l,s),Sg(t,o);const r=l?Wg(t,s):void 0;return No=!1,r}function Wg(t,s){var n;const o=t.type;{if(o.name&&ba(o.name,t.appContext.config),o.components){const r=Object.keys(o.components);for(let a=0;a<r.length;a++)ba(r[a],t.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let a=0;a<r.length;a++)vd(r[a])}o.compilerOptions&&Jg()&&U('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=pr(new Proxy(t.ctx,kd)),ag(t);const{setup:l}=o;if(l){const r=t.setupContext=l.length>1?jd(t):null;jn(t),Cn();const a=gs(l,t,0,[uo(t.props),r]);if(Bn(),_n(),ai(a)){if(a.then(_n,_n),s)return a.then(i=>{Uc(t,i,s)}).catch(i=>{ur(i,t,0)});if(t.asyncDep=a,!t.suspense){const i=(n=o.name)!=null?n:"Anonymous";U(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Uc(t,a,s)}else qd(t,s)}function Uc(t,s,n){ye(s)?t.type.__ssrInlineRender?t.ssrRender=s:t.render=s:Re(s)?(zs(s)&&U("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=s,t.setupState=nd(s),ig(t)):s!==void 0&&U(`setup() should return an object. Received: ${s===null?"null":typeof s}`),qd(t,n)}let Aa;const Jg=()=>!Aa;function qd(t,s,n){const o=t.type;if(!t.render){if(!s&&Aa&&!o.render){const l=o.template||ki(t).template;if(l){us(t,"compile");const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:c}=o,u=qe(qe({isCustomElement:r,delimiters:i},a),c);o.render=Aa(l,u),ds(t,"compile")}}t.render=o.render||At}jn(t),Cn(),dg(t),Bn(),_n(),!o.render&&t.render===At&&!s&&(o.template?U('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):U("Component is missing template or render function."))}function Gg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(s,n){return ql(),ct(t,"get","$attrs"),s[n]},set(){return U("setupContext.attrs is readonly."),!1},deleteProperty(){return U("setupContext.attrs is readonly."),!1}}))}function Kg(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(s,n){return ct(t,"get","$slots"),s[n]}}))}function jd(t){return Object.freeze({get attrs(){return Gg(t)},get slots(){return Kg(t)},get emit(){return(n,...o)=>t.emit(n,...o)},expose:n=>{if(t.exposed&&U("expose() should be called only once per setup()."),n!=null){let o=typeof n;o==="object"&&(ie(n)?o="array":Te(n)&&(o="ref")),o!=="object"&&U(`expose() should be passed a plain object, received ${o}.`)}t.exposed=n||{}}})}function _r(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nd(pr(t.exposed)),{get(s,n){if(n in s)return s[n];if(n in gn)return gn[n](t)},has(s,n){return n in s||n in gn}}))}const Yg=/(?:^|[-_])(\w)/g,Zg=t=>t.replace(Yg,s=>s.toUpperCase()).replace(/[-_]/g,"");function Fo(t,s=!0){return ye(t)?t.displayName||t.name:t.name||s&&t.__name}function vr(t,s,n=!1){let o=Fo(s);if(!o&&s.__file){const l=s.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&t&&t.parent){const l=r=>{for(const a in r)if(r[a]===s)return a};o=l(t.components||t.parent.type.components)||l(t.appContext.components)}return o?Zg(o):n?"App":"Anonymous"}function zd(t){return ye(t)&&"__vccOpts"in t}const R=(t,s)=>gm(t,s,No);function tt(t,s,n){const o=arguments.length;return o===2?Re(s)&&!ie(s)?zs(s)?P(t,null,[s]):P(t,s):P(t,null,s):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&zs(n)&&(n=[n]),P(t,s,n))}const Xg=Symbol.for("v-scx"),e1=()=>{{const t=I(Xg);return t||U("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Lr(t){return!!(t&&t.__v_isShallow)}function t1(){if(typeof window>"u")return;const t={style:"color:#3ba776"},s={style:"color:#0b1bc9"},n={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(y){return Re(y)?y.__isVue?["div",t,"VueInstance"]:Te(y)?["div",{},["span",t,d(y)],"<",i(y.value),">"]:hn(y)?["div",{},["span",t,Lr(y)?"ShallowReactive":"Reactive"],"<",i(y),`>${js(y)?" (readonly)":""}`]:js(y)?["div",{},["span",t,Lr(y)?"ShallowReadonly":"Readonly"],"<",i(y),">"]:null:null},hasBody(y){return y&&y.__isVue},body(y){if(y&&y.__isVue)return["div",{},...r(y.$)]}};function r(y){const f=[];y.type.props&&y.props&&f.push(a("props",me(y.props))),y.setupState!==Ie&&f.push(a("setup",y.setupState)),y.data!==Ie&&f.push(a("data",me(y.data)));const h=c(y,"computed");h&&f.push(a("computed",h));const m=c(y,"inject");return m&&f.push(a("injected",m)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:y}]]),f}function a(y,f){return f=qe({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},y],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(h=>["div",{},["span",o,h+": "],i(f[h],!1)])]]:["span",{}]}function i(y,f=!0){return typeof y=="number"?["span",s,y]:typeof y=="string"?["span",n,JSON.stringify(y)]:typeof y=="boolean"?["span",o,y]:Re(y)?["object",{object:f?me(y):y}]:["span",n,String(y)]}function c(y,f){const h=y.type;if(ye(h))return;const m={};for(const _ in y.ctx)u(h,_,f)&&(m[_]=y.ctx[_]);return m}function u(y,f,h){const m=y[h];if(ie(m)&&m.includes(f)||Re(m)&&f in m||y.extends&&u(y.extends,f,h)||y.mixins&&y.mixins.some(_=>u(_,f,h)))return!0}function d(y){return Lr(y)?"ShallowRef":y.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Wl="3.3.4",s1="http://www.w3.org/2000/svg",on=typeof document<"u"?document:null,qc=on&&on.createElement("template"),n1={insert:(t,s,n)=>{s.insertBefore(t,n||null)},remove:t=>{const s=t.parentNode;s&&s.removeChild(t)},createElement:(t,s,n,o)=>{const l=s?on.createElementNS(s1,t):on.createElement(t,n?{is:n}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,s)=>{t.nodeValue=s},setElementText:(t,s)=>{t.textContent=s},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,s){t.setAttribute(s,"")},insertStaticContent(t,s,n,o,l,r){const a=n?n.previousSibling:s.lastChild;if(l&&(l===r||l.nextSibling))for(;s.insertBefore(l.cloneNode(!0),n),!(l===r||!(l=l.nextSibling)););else{qc.innerHTML=o?`<svg>${t}</svg>`:t;const i=qc.content;if(o){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}s.insertBefore(i,n)}return[a?a.nextSibling:s.firstChild,n?n.previousSibling:s.lastChild]}};function o1(t,s,n){const o=t._vtc;o&&(s=(s?[s,...o]:[...o]).join(" ")),s==null?t.removeAttribute("class"):n?t.setAttribute("class",s):t.className=s}function l1(t,s,n){const o=t.style,l=ze(n);if(n&&!l){if(s&&!ze(s))for(const r in s)n[r]==null&&Da(o,r,"");for(const r in n)Da(o,r,n[r])}else{const r=o.display;l?s!==n&&(o.cssText=n):s&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const r1=/[^\\];\s*$/,jc=/\s*!important$/;function Da(t,s,n){if(ie(n))n.forEach(o=>Da(t,s,o));else if(n==null&&(n=""),r1.test(n)&&U(`Unexpected semicolon at the end of '${s}' style value: '${n}'`),s.startsWith("--"))t.setProperty(s,n);else{const o=a1(t,s);jc.test(n)?t.setProperty(_s(o),n.replace(jc,""),"important"):t[o]=n}}const zc=["Webkit","Moz","ms"],Rr={};function a1(t,s){const n=Rr[s];if(n)return n;let o=ls(s);if(o!=="filter"&&o in t)return Rr[s]=o;o=bn(o);for(let l=0;l<zc.length;l++){const r=zc[l]+o;if(r in t)return Rr[s]=r}return s}const Vc="http://www.w3.org/1999/xlink";function i1(t,s,n,o,l){if(o&&s.startsWith("xlink:"))n==null?t.removeAttributeNS(Vc,s.slice(6,s.length)):t.setAttributeNS(Vc,s,n);else{const r=Lh(s);n==null||r&&!Mu(n)?t.removeAttribute(s):t.setAttribute(s,r?"":n)}}function c1(t,s,n,o,l,r,a){if(s==="innerHTML"||s==="textContent"){o&&a(o,l,r),t[s]=n??"";return}const i=t.tagName;if(s==="value"&&i!=="PROGRESS"&&!i.includes("-")){t._value=n;const u=i==="OPTION"?t.getAttribute("value"):t.value,d=n??"";u!==d&&(t.value=d),n==null&&t.removeAttribute(s);return}let c=!1;if(n===""||n==null){const u=typeof t[s];u==="boolean"?n=Mu(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[s]=n}catch(u){c||U(`Failed setting prop "${s}" on <${i.toLowerCase()}>: value ${n} is invalid.`,u)}c&&t.removeAttribute(s)}function p1(t,s,n,o){t.addEventListener(s,n,o)}function u1(t,s,n,o){t.removeEventListener(s,n,o)}function d1(t,s,n,o,l=null){const r=t._vei||(t._vei={}),a=r[s];if(o&&a)a.value=o;else{const[i,c]=y1(s);if(o){const u=r[s]=m1(o,l);p1(t,i,u,c)}else a&&(u1(t,i,a,c),r[s]=void 0)}}const Hc=/(?:Once|Passive|Capture)$/;function y1(t){let s;if(Hc.test(t)){s={};let o;for(;o=t.match(Hc);)t=t.slice(0,t.length-o[0].length),s[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_s(t.slice(2)),s]}let $r=0;const f1=Promise.resolve(),h1=()=>$r||(f1.then(()=>$r=0),$r=Date.now());function m1(t,s){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Ft(g1(o,n.value),s,5,[o])};return n.value=t,n.attached=h1(),n}function g1(t,s){if(ie(s)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},s.map(o=>l=>!l._stopped&&o&&o(l))}else return s}const Qc=/^on[a-z]/,_1=(t,s,n,o,l=!1,r,a,i,c)=>{s==="class"?o1(t,o,l):s==="style"?l1(t,n,o):Jo(s)?$l(s)||d1(t,s,n,o,a):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):v1(t,s,o,l))?c1(t,s,o,r,a,i,c):(s==="true-value"?t._trueValue=o:s==="false-value"&&(t._falseValue=o),i1(t,s,o,l))};function v1(t,s,n,o){return o?!!(s==="innerHTML"||s==="textContent"||s in t&&Qc.test(s)&&ye(n)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&t.tagName==="INPUT"||s==="type"&&t.tagName==="TEXTAREA"||Qc.test(s)&&ze(n)?!1:s in t}const Bs="transition",Xn="animation",Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},b1=qe({},Jm,Vd),Ys=(t,s=[])=>{ie(t)?t.forEach(n=>n(...s)):t&&t(...s)},Wc=t=>t?ie(t)?t.some(s=>s.length>1):t.length>1:!1;function A1(t){const s={};for(const K in t)K in Vd||(s[K]=t[K]);if(t.css===!1)return s;const{name:n="v",type:o,duration:l,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=a,appearToClass:d=i,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=D1(l),_=m&&m[0],D=m&&m[1],{onBeforeEnter:b,onEnter:B,onEnterCancelled:v,onLeave:E,onLeaveCancelled:k,onBeforeAppear:x=b,onAppear:L=B,onAppearCancelled:T=v}=s,M=(K,de,ge)=>{ws(K,de?d:i),ws(K,de?u:a),ge&&ge()},se=(K,de)=>{K._isLeaving=!1,ws(K,y),ws(K,h),ws(K,f),de&&de()},ae=K=>(de,ge)=>{const _e=K?L:B,Oe=()=>M(de,K,ge);Ys(_e,[de,Oe]),Jc(()=>{ws(de,K?c:r),ys(de,K?d:i),Wc(_e)||Gc(de,o,_,Oe)})};return qe(s,{onBeforeEnter(K){Ys(b,[K]),ys(K,r),ys(K,a)},onBeforeAppear(K){Ys(x,[K]),ys(K,c),ys(K,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(K,de){K._isLeaving=!0;const ge=()=>se(K,de);ys(K,y),Qd(),ys(K,f),Jc(()=>{K._isLeaving&&(ws(K,y),ys(K,h),Wc(E)||Gc(K,o,D,ge))}),Ys(E,[K,ge])},onEnterCancelled(K){M(K,!1),Ys(v,[K])},onAppearCancelled(K){M(K,!0),Ys(T,[K])},onLeaveCancelled(K){se(K),Ys(k,[K])}})}function D1(t){if(t==null)return null;if(Re(t))return[Pr(t.enter),Pr(t.leave)];{const s=Pr(t);return[s,s]}}function Pr(t){const s=Dh(t);return Dm(s,"<transition> explicit duration"),s}function ys(t,s){s.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(s)}function ws(t,s){s.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const{_vtc:n}=t;n&&(n.delete(s),n.size||(t._vtc=void 0))}function Jc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let C1=0;function Gc(t,s,n,o){const l=t._endId=++C1,r=()=>{l===t._endId&&o()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:c}=Hd(t,s);if(!a)return o();const u=a+"end";let d=0;const y=()=>{t.removeEventListener(u,f),r()},f=h=>{h.target===t&&++d>=c&&y()};setTimeout(()=>{d<c&&y()},i+1),t.addEventListener(u,f)}function Hd(t,s){const n=window.getComputedStyle(t),o=m=>(n[m]||"").split(", "),l=o(`${Bs}Delay`),r=o(`${Bs}Duration`),a=Kc(l,r),i=o(`${Xn}Delay`),c=o(`${Xn}Duration`),u=Kc(i,c);let d=null,y=0,f=0;s===Bs?a>0&&(d=Bs,y=a,f=r.length):s===Xn?u>0&&(d=Xn,y=u,f=c.length):(y=Math.max(a,u),d=y>0?a>u?Bs:Xn:null,f=d?d===Bs?r.length:c.length:0);const h=d===Bs&&/\b(transform|all)(,|$)/.test(o(`${Bs}Property`).toString());return{type:d,timeout:y,propCount:f,hasTransform:h}}function Kc(t,s){for(;t.length<s.length;)t=t.concat(t);return Math.max(...s.map((n,o)=>Yc(n)+Yc(t[o])))}function Yc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Qd(){return document.body.offsetHeight}const Wd=new WeakMap,Jd=new WeakMap,Gd={name:"TransitionGroup",props:qe({},b1,{tag:String,moveClass:String}),setup(t,{slots:s}){const n=Ct(),o=Wm();let l,r;return Qn(()=>{if(!l.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!x1(l[0].el,n.vnode.el,a))return;l.forEach(w1),l.forEach(k1);const i=l.filter(S1);Qd(),i.forEach(c=>{const u=c.el,d=u.style;ys(u,a),d.transform=d.webkitTransform=d.transitionDuration="";const y=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",y),u._moveCb=null,ws(u,a))};u.addEventListener("transitionend",y)})}),()=>{const a=me(t),i=A1(a);let c=a.tag||Le;l=r,r=s.default?Ad(s.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?jl(d,ua(d,i,o,n)):U("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];jl(d,ua(d,i,o,n)),Wd.set(d,d.el.getBoundingClientRect())}return P(c,null,r)}}},B1=t=>delete t.mode;Gd.props;const E1=Gd;function w1(t){const s=t.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function k1(t){Jd.set(t,t.el.getBoundingClientRect())}function S1(t){const s=Wd.get(t),n=Jd.get(t),o=s.left-n.left,l=s.top-n.top;if(o||l){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",t}}function x1(t,s,n){const o=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&o.classList.remove(i))}),n.split(/\s+/).forEach(a=>a&&o.classList.add(a)),o.style.display="none";const l=s.nodeType===1?s:s.parentNode;l.appendChild(o);const{hasTransform:r}=Hd(o);return l.removeChild(o),r}const T1=["ctrl","shift","alt","meta"],L1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,s)=>T1.some(n=>t[`${n}Key`]&&!s.includes(n))},R1=(t,s)=>(n,...o)=>{for(let l=0;l<s.length;l++){const r=L1[s[l]];if(r&&r(n,s))return}return t(n,...o)},$1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yl=(t,s)=>n=>{if(!("key"in n))return;const o=_s(n.key);if(s.some(l=>l===o||$1[l]===o))return t(n)},Kd={beforeMount(t,{value:s},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&s?n.beforeEnter(t):eo(t,s)},mounted(t,{value:s},{transition:n}){n&&s&&n.enter(t)},updated(t,{value:s,oldValue:n},{transition:o}){!s!=!n&&(o?s?(o.beforeEnter(t),eo(t,!0),o.enter(t)):o.leave(t,()=>{eo(t,!1)}):eo(t,s))},beforeUnmount(t,{value:s}){eo(t,s)}};function eo(t,s){t.style.display=s?t._vod:"none"}const P1=qe({patchProp:_1},n1);let Zc;function O1(){return Zc||(Zc=Lg(P1))}const N1=(...t)=>{const s=O1().createApp(...t);F1(s),I1(s);const{mount:n}=s;return s.mount=o=>{const l=M1(o);if(!l)return;const r=s._component;!ye(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},s};function F1(t){Object.defineProperty(t.config,"isNativeTag",{value:s=>Iu(s)||xh(s),writable:!1})}function I1(t){{const s=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return s},set(){U("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return U(o),n},set(){U(o)}})}}function M1(t){if(ze(t)){const s=document.querySelector(t);return s||U(`Failed to mount app: mount target selector "${t}" returned null.`),s}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&U('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function U1(){t1()}U1();function Ca(t,s={},n){for(const o in t){const l=t[o],r=n?`${n}:${o}`:o;typeof l=="object"&&l!==null?Ca(l,s,r):typeof l=="function"&&(s[r]=l)}return s}const q1={run:t=>t()},j1=()=>q1,Yd=typeof console.createTask<"u"?console.createTask:j1;function z1(t,s){const n=s.shift(),o=Yd(n);return t.reduce((l,r)=>l.then(()=>o.run(()=>r(...s))),Promise.resolve())}function V1(t,s){const n=s.shift(),o=Yd(n);return Promise.all(t.map(l=>o.run(()=>l(...s))))}function Or(t,s){for(const n of[...t])n(s)}class H1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,n,o={}){if(!s||typeof n!="function")return()=>{};const l=s;let r;for(;this._deprecatedHooks[s];)r=this._deprecatedHooks[s],s=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+s.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(n),()=>{n&&(this.removeHook(s,n),n=void 0)}}hookOnce(s,n){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,n(...r));return o=this.hook(s,l),o}removeHook(s,n){if(this._hooks[s]){const o=this._hooks[s].indexOf(n);o!==-1&&this._hooks[s].splice(o,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,n){this._deprecatedHooks[s]=typeof n=="string"?{to:n}:n;const o=this._hooks[s]||[];delete this._hooks[s];for(const l of o)this.hook(s,l)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const n in s)this.deprecateHook(n,s[n])}addHooks(s){const n=Ca(s),o=Object.keys(n).map(l=>this.hook(l,n[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(s){const n=Ca(s);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const s in this._hooks)delete this._hooks[s]}callHook(s,...n){return n.unshift(s),this.callHookWith(z1,s,...n)}callHookParallel(s,...n){return n.unshift(s),this.callHookWith(V1,s,...n)}callHookWith(s,n,...o){const l=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&Or(this._before,l);const r=s(n in this._hooks?[...this._hooks[n]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&Or(this._after,l)}):(this._after&&l&&Or(this._after,l),r)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{if(this._before!==void 0){const n=this._before.indexOf(s);n!==-1&&this._before.splice(n,1)}}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{if(this._after!==void 0){const n=this._after.indexOf(s);n!==-1&&this._after.splice(n,1)}}}}function Q1(){return new H1}function W1(t){return Array.isArray(t)?t:[t]}const Zd=["title","script","style","noscript"],Xd=["base","meta","link","style","script","noscript"],J1=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],G1=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],K1=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function ey(t){let s=9;for(let n=0;n<t.length;)s=Math.imul(s^t.charCodeAt(n++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ba(t){return ey(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([s,n])=>`${s}:${String(n)}`).join(",")}`)}function Y1(t){let s=9;for(const n of t)for(let o=0;o<n.length;)s=Math.imul(s^n.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ty(t,s){const{props:n,tag:o}=t;if(G1.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof n[r]<"u"){const a=String(n[r]);return s&&!s(a)?!1:`${o}:${r}:${a}`}return!1}function Xc(t,s){return t==null?s||null:typeof t=="function"?t(s):t}function fl(t,s=!1,n){const{tag:o,$el:l}=t;l&&(Object.entries(o.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const u=`${i}:${c}`;n&&n(t,u,()=>l.classList.remove(c)),l.classList.contains(c)||l.classList.add(c)}return}n&&!r.startsWith("data-h-")&&n(t,i,()=>l.removeAttribute(r)),(s||l.getAttribute(r)!==a)&&l.setAttribute(r,a)}),Zd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))}let to=!1;async function sy(t,s={}){var f,h;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const o=s.document||t.resolvedOptions.document||window.document,l=(await t.resolveTags()).map(i);if(t.resolvedOptions.experimentalHashHydration&&(to=to||t._hash||!1,to)){const m=Y1(l.map(_=>_.tag._h));if(to===m)return;to=m}const r=t._popSideEffectQueue();t.headEntries().map(m=>m._sde).forEach(m=>{Object.entries(m).forEach(([_,D])=>{r[_]=D})});const a=(m,_,D)=>{_=`${m.renderId}:${_}`,m.entry&&(m.entry._sde[_]=D),delete r[_]};function i(m){const _=t.headEntries().find(b=>b._i===m._e),D={renderId:m._d||Ba(m),$el:null,shouldRender:!0,tag:m,entry:_,markSideEffect:(b,B)=>a(D,b,B)};return D}const c=[],u={body:[],head:[]},d=m=>{t._elMap[m.renderId]=m.$el,c.push(m),a(m,"el",()=>{var _;(_=m.$el)==null||_.remove(),delete t._elMap[m.renderId]})};for(const m of l){if(await t.hooks.callHook("dom:beforeRenderTag",m),!m.shouldRender)continue;const{tag:_}=m;if(_.tag==="title"){o.title=_.textContent||"",c.push(m);continue}if(_.tag==="htmlAttrs"||_.tag==="bodyAttrs"){m.$el=o[_.tag==="htmlAttrs"?"documentElement":"body"],fl(m,!1,a),c.push(m);continue}if(m.$el=t._elMap[m.renderId],!m.$el&&_.key&&(m.$el=o.querySelector(`${(f=_.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${_.tag}[data-h-${_._h}]`)),m.$el){m.tag._d&&fl(m),d(m);continue}u[(h=_.tagPosition)!=null&&h.startsWith("body")?"body":"head"].push(m)}const y={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([m,_])=>{var b;if(!_.length)return;const D=(b=o==null?void 0:o[m])==null?void 0:b.children;if(D){for(const B of[...D].reverse()){const v=B.tagName.toLowerCase();if(!Xd.includes(v))continue;const E=B.getAttributeNames().reduce((T,M)=>({...T,[M]:B.getAttribute(M)}),{}),k={tag:v,props:E};B.innerHTML&&(k.innerHTML=B.innerHTML);const x=Ba(k);let L=_.findIndex(T=>(T==null?void 0:T.renderId)===x);if(L===-1){const T=ty(k);L=_.findIndex(M=>(M==null?void 0:M.tag._d)&&M.tag._d===T)}if(L!==-1){const T=_[L];T.$el=B,fl(T),d(T),delete _[L]}}_.forEach(B=>{const v=B.tag.tagPosition||"head";y[v]=y[v]||o.createDocumentFragment(),B.$el||(B.$el=o.createElement(B.tag.tag),fl(B,!0)),y[v].appendChild(B.$el),d(B)})}}),y.head&&o.head.appendChild(y.head),y.bodyOpen&&o.body.insertBefore(y.bodyOpen,o.body.firstChild),y.bodyClose&&o.body.appendChild(y.bodyClose);for(const m of c)await t.hooks.callHook("dom:renderTag",m);Object.values(r).forEach(m=>m())}let Nr=null;async function ny(t,s={}){function n(){return Nr=null,sy(t,s)}const o=s.delayFn||(l=>setTimeout(l,10));return Nr=Nr||new Promise(l=>o(()=>l(n())))}function Z1(t){return{hooks:{"entries:updated":function(s){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),ny(s,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function X1(t){var s;return((s=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const ep={critical:2,high:9,low:12,base:-1,title:1,meta:10};function tp(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const s=t.tagPriority||t.tag;return s in ep?ep[s]:10}const e0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function t0(){return{hooks:{"tags:resolve":t=>{const s=n=>{var o;return(o=t.tags.find(l=>l._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of e0)for(const l of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=s(l.tagPriority.replace(n,""));typeof r<"u"&&(l._p=r+o)}t.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>tp(n)-tp(o))}}}}function s0(){return{hooks:{"tags:resolve":t=>{const{tags:s}=t;let n=s.findIndex(l=>l.tag==="titleTemplate");const o=s.findIndex(l=>l.tag==="title");if(o!==-1&&n!==-1){const l=Xc(s[n].textContent,s[o].textContent);l!==null?s[o].textContent=l||s[o].textContent:delete s[o]}else if(n!==-1){const l=Xc(s[n].textContent);l!==null&&(s[n].textContent=l,s[n].tag="title",n=-1)}n!==-1&&delete s[n],t.tags=s.filter(Boolean)}}}}function n0(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const o0=["link","style","script","noscript"];function l0(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:s})=>{s.experimentalHashHydration===!0&&(t._h=Ba(t)),t.key&&o0.includes(t.tag)&&(t._h=ey(t.key),t.props[`data-h-${t._h}`]="")}}}}const sp=["script","link","bodyAttrs"];function r0(){const t=(s,n)=>{const o={},l={};Object.entries(n.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?l[a]=i:o[a]=i});let r;return s==="dom"&&n.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(n=>(!sp.includes(n.tag)||!Object.entries(n.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(s){if(!sp.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:n,eventHandlers:o,delayedSrc:l}=t("dom",s.tag);Object.keys(o).length&&(s.tag.props=n,s.tag._eventHandlers=o,s.tag._delayedSrc=l)},"dom:renderTag":function(s){const n=s.$el;if(!s.tag._eventHandlers||!n)return;const o=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(s.tag._eventHandlers).forEach(([l,r])=>{const a=`${s.tag._d||s.tag._p}:${l}`,i=l.slice(2).toLowerCase(),c=`data-h-${i}`;if(s.markSideEffect(a,()=>{}),n.hasAttribute(c))return;const u=r;n.setAttribute(c,""),o.addEventListener(i,u),s.entry&&(s.entry._sde[a]=()=>{o.removeEventListener(i,u),n.removeAttribute(c)})}),s.tag._delayedSrc&&n.setAttribute("src",s.tag._delayedSrc)}}}}const a0=["templateParams","htmlAttrs","bodyAttrs"];function i0(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(o=>{t.props[o]&&(t.key=t.props[o],delete t.props[o])});const n=ty(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const s={};t.tags.forEach(o=>{const l=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=s[l];if(r){let i=o==null?void 0:o.tagDuplicateStrategy;if(!i&&a0.includes(o.tag)&&(i="merge"),i==="merge"){const c=r.props;["class","style"].forEach(u=>{o.props[u]&&c[u]&&(u==="style"&&!c[u].endsWith(";")&&(c[u]+=";"),o.props[u]=`${c[u]} ${o.props[u]}`)}),s[l].props={...c,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Xd.includes(o.tag)&&a===0){delete s[l];return}s[l]=o});const n=[];Object.values(s).forEach(o=>{const l=o._duped;delete o._duped,n.push(o),l&&n.push(...l)}),t.tags=n}}}}function hl(t,s){function n(r){if(["s","pageTitle"].includes(r))return s.pageTitle;let a;return r.includes(".")?a=r.split(".").reduce((i,c)=>i&&i[c]||void 0,s):a=s[r],typeof a<"u"?a||"":!1}let o=t;try{o=decodeURI(t)}catch{}return(o.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const a=n(r.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${a}$1`).trim())}),s.separator&&(t.endsWith(s.separator)&&(t=t.slice(0,-s.separator.length).trim()),t.startsWith(s.separator)&&(t=t.slice(s.separator.length).trim()),t=t.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),t}function c0(){return{hooks:{"tags:resolve":t=>{var r;const{tags:s}=t,n=(r=s.find(a=>a.tag==="title"))==null?void 0:r.textContent,o=s.findIndex(a=>a.tag==="templateParams"),l=o!==-1?s[o].props:{};l.pageTitle=l.pageTitle||n||"";for(const a of s)if(["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string")a.textContent=hl(a.textContent,l);else if(a.tag==="meta"&&typeof a.props.content=="string")a.props.content=hl(a.props.content,l);else if(a.tag==="link"&&typeof a.props.href=="string")a.props.href=hl(a.props.href,l);else if(a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string")try{a.innerHTML=JSON.stringify(JSON.parse(a.innerHTML),(i,c)=>typeof c=="string"?hl(c,l):c)}catch{}t.tags=s.filter(a=>a.tag!=="templateParams")}}}}const p0=typeof window<"u";let oy;function u0(t){return oy=t}function d0(){return oy}async function y0(t,s){const n={tag:t,props:{}};return t==="templateParams"?(n.props=s,n):["title","titleTemplate"].includes(t)?(n.textContent=s instanceof Promise?await s:s,n):typeof s=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?n.props.src=s:n.innerHTML=s,n):!1:(n.props=await h0(t,{...s}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(o=>K1.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||Zd.includes(n.tag))&&(n[o]=n.props[o]),delete n.props[o]}),["innerHTML","textContent"].forEach(o=>{if(n.tag==="script"&&typeof n[o]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[o]=JSON.parse(n[o])}catch{n[o]=""}typeof n[o]=="object"&&(n[o]=JSON.stringify(n[o]))}),n.props.class&&(n.props.class=f0(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(o=>({...n,props:{...n.props,content:o}})):n)}function f0(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(s=>t[s])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function h0(t,s){for(const n of Object.keys(s)){const o=n.startsWith("data-");s[n]instanceof Promise&&(s[n]=await s[n]),String(s[n])==="true"?s[n]=o?"true":"":String(s[n])==="false"&&(o?s[n]="false":delete s[n])}return s}const m0=10;async function g0(t){const s=[];return Object.entries(t.resolvedInput).filter(([n,o])=>typeof o<"u"&&J1.includes(n)).forEach(([n,o])=>{const l=W1(o);s.push(...l.map(r=>y0(n,r)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((n,o)=>(n._e=t._i,n._p=(t._i<<m0)+o,n))}function _0(){return[i0(),t0(),c0(),s0(),l0(),r0(),n0()]}function v0(t={}){return[Z1({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function b0(t={}){const s=A0({...t,plugins:[...v0(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=X1(s.resolvedOptions.document)),u0(s),s}function A0(t={}){let s=[],n={},o=0;const l=Q1();t!=null&&t.hooks&&l.addHooks(t.hooks),t.plugins=[..._0(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(i=>i.hooks&&l.addHooks(i.hooks)),t.document=t.document||(p0?document:void 0);const r=()=>l.callHook("entries:updated",a),a={resolvedOptions:t,headEntries(){return s},get hooks(){return l},use(i){i.hooks&&l.addHooks(i.hooks)},push(i,c){const u={_i:o++,input:i,_sde:{}};return c!=null&&c.mode&&(u._m=c==null?void 0:c.mode),c!=null&&c.transform&&(u._t=c==null?void 0:c.transform),s.push(u),r(),{dispose(){s=s.filter(d=>d._i!==u._i?!0:(n={...n,...d._sde||{}},d._sde={},r(),!1))},patch(d){s=s.map(y=>(y._i===u._i&&(u.input=y.input=d,r()),y))}}},async resolveTags(){const i={tags:[],entries:[...s]};await l.callHook("entries:resolve",i);for(const c of i.entries){const u=c._t||(d=>d);if(c.resolvedInput=u(c.resolvedInput||c.input),c.resolvedInput)for(const d of await g0(c)){const y={tag:d,entry:c,resolvedOptions:a.resolvedOptions};await l.callHook("tag:normalise",y),i.tags.push(y.tag)}}return await l.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...n};return n={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function D0(t){return typeof t=="function"?t():O(t)}function Jl(t,s=""){if(t instanceof Promise)return t;const n=D0(t);return!t||!n?n:Array.isArray(n)?n.map(o=>Jl(o,s)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,l])=>o==="titleTemplate"||o.startsWith("on")?[o,O(l)]:[o,Jl(l,o)])):n}const C0=Wl.startsWith("3"),B0=typeof window<"u",ly="usehead";function Li(){return Ct()&&I(ly)||d0()}function E0(t){return{install(n){C0&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(ly,t))}}.install}function w0(t={}){const s=b0({...t,domDelayFn:n=>setTimeout(()=>rt(()=>n()),10),plugins:[k0(),...(t==null?void 0:t.plugins)||[]]});return s.install=E0(s),s}function k0(){return{hooks:{"entries:resolve":function(t){for(const s of t.entries)s.resolvedInput=Jl(s.input)}}}}function S0(t,s={}){const n=Li(),o=H(!1),l=H({});En(()=>{l.value=o.value?{}:Jl(t)});const r=n.push(l.value,s);return ve(l,i=>{r.patch(i)}),Ct()&&(Yo(()=>{r.dispose()}),Bd(()=>{o.value=!0}),Cd(()=>{o.value=!1})),r}function x0(t,s={}){return Li().push(t,s)}function ry(t,s={}){var o;const n=Li();if(n){const l=B0||!!((o=n.resolvedOptions)!=null&&o.document);return s.mode==="server"&&l||s.mode==="client"&&!l?void 0:l?S0(t,s):x0(t,s)}}function T0(t,s){const n=w0(s||{}),o={unhead:n,install(l){Wl.startsWith("3")&&(l.config.globalProperties.$head=n,l.provide("usehead",n))},use(l){n.use(l)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(l,r){return n.push(l,r)},addEntry(l,r){return n.push(l,r)},addHeadObjs(l,r){return n.push(l,r)},addReactiveEntry(l,r){const a=ry(l,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?sy(n,{document:l}):ny(n,{delayFn:a=>setTimeout(()=>a(),50),document:l})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=o.addHeadObjs,n.updateDOM=o.updateDOM,n.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),t&&o.addHeadObjs(t),o}const Ao=Symbol("v-click-clicks"),ln=Symbol("v-click-clicks-elements"),Ea=Symbol("v-click-clicks-order-map"),Do=Symbol("v-click-clicks-disabled"),ay=Symbol("slidev-slide-scale"),j=Symbol("slidev-slidev-context"),L0=Symbol("slidev-route"),R0=Symbol("slidev-slide-context"),tn="slidev-vclick-target",Fr="slidev-vclick-hidden",$0="slidev-vclick-fade",Ir="slidev-vclick-hidden-explicitly",so="slidev-vclick-current",ml="slidev-vclick-prior",P0=["localhost","127.0.0.1"];let O0=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,n)=>(n&=63,n<36?s+=n.toString(36):n<62?s+=(n-26).toString(36).toUpperCase():n>62?s+="-":s+="_",s),"");function wa(t,s){if(!t)return!1;const n=t.indexOf(s);return n>=0?(t.splice(n,1),!0):!1}function N0(...t){let s,n,o;t.length===1?(s=0,o=1,[n]=t):[s,n,o=1]=t;const l=[];let r=s;for(;r<n;)l.push(r),r+=o||1;return l}function F0(t){return t!=null}function I0(t,s){return Object.fromEntries(Object.entries(t).map(([n,o])=>s(n,o)).filter(F0))}const mo={theme:"default",title:"PostgreSQL as seen by Rubyists",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>PostgreSQL as seen by Rubyists</h2>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Martian Grotesk"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Martian Grotesk"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Martian Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Martian Grotesk","Martian Mono"],provider:"none",local:["Martian Grotesk","Martian Mono"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!0,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{}},xe=mo,Ps=xe.aspectRatio??16/9,Os=xe.canvasWidth??980,Ri=Math.ceil(Os/Ps),$i=R(()=>I0(xe.themeConfig||{},(t,s)=>[`--slidev-theme-${t}`,s]));function iy(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function Mt(t,s,n){Object.defineProperty(t,s,{value:n,writable:!0,enumerable:!1})}const wn=Ve({page:0,clicks:0});let M0=[],U0=[];Mt(wn,"$syncUp",!0);Mt(wn,"$syncDown",!0);Mt(wn,"$paused",!1);Mt(wn,"$onSet",t=>M0.push(t));Mt(wn,"$onPatch",t=>U0.push(t));iy();Mt(wn,"$patch",async()=>!1);function cy(t,s,n=!1){const o=[];let l=!1,r=!1,a,i;const c=Ve(s);function u(h){o.push(h)}function d(h,m){c[h]!==m&&(clearTimeout(a),l=!0,c[h]=m,a=setTimeout(()=>l=!1,0))}function y(h){l||(clearTimeout(i),r=!0,Object.entries(h).forEach(([m,_])=>{c[m]=_}),i=setTimeout(()=>r=!1,0))}function f(h){let m;n?n&&window.addEventListener("storage",D=>{D&&D.key===h&&D.newValue&&y(JSON.parse(D.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",D=>y(D.data)));function _(){!n&&m&&!r?m.postMessage(me(c)):n&&!r&&window.localStorage.setItem(h,JSON.stringify(c)),l||o.forEach(D=>D(c))}if(ve(c,_,{deep:!0,flush:"sync"}),n){const D=window.localStorage.getItem(h);D&&y(JSON.parse(D))}}return{init:f,onPatch:u,patch:d,state:c}}const{init:q0,onPatch:j0,patch:no,state:Mr}=cy(wn,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),kn=Ve({});let z0=[],V0=[];Mt(kn,"$syncUp",!0);Mt(kn,"$syncDown",!0);Mt(kn,"$paused",!1);Mt(kn,"$onSet",t=>z0.push(t));Mt(kn,"$onPatch",t=>V0.push(t));iy();Mt(kn,"$patch",async()=>!1);const{init:H0,onPatch:Q0,patch:py,state:Gl}=cy(kn,{},!1),W0="modulepreload",J0=function(t){return"/kaigionrails-postgresql-as-seen-by-rubyists/"+t},np={},Ns=function(s,n,o){if(!n||n.length===0)return s();const l=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=J0(r),r in np)return;np[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const y=l[d];if(y.href===r&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":W0,a||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),a)return new Promise((d,y)=>{u.addEventListener("load",d),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};function G0(t,s){let n,o,l;const r=H(!0),a=()=>{r.value=!0,l()};ve(t,a,{flush:"sync"});const i=typeof s=="function"?s:s.get,c=typeof s=="function"?void 0:s.set,u=gi((d,y)=>(o=d,l=y,{get(){return r.value&&(n=i(),r.value=!1),o(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cs(t){return pi()?(ju(t),!0):!1}function He(t){return typeof t=="function"?t():O(t)}function K0(t){if(!Te(t))return Ve(t);const s=new Proxy({},{get(n,o,l){return O(Reflect.get(t.value,o,l))},set(n,o,l){return Te(t.value[o])&&!Te(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(n,o){return Reflect.deleteProperty(t.value,o)},has(n,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ve(s)}const Jt=typeof window<"u",Y0=t=>typeof t<"u",Z0=t=>t!=null,X0=Object.prototype.toString,ka=t=>X0.call(t)==="[object Object]",Sa=()=>+Date.now(),Fs=()=>{},e3=t3();function t3(){var t;return Jt&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function s3(t,s){function n(...o){return new Promise((l,r)=>{Promise.resolve(t(()=>s.apply(this,o),{fn:s,thisArg:this,args:o})).then(l).catch(r)})}return n}const uy=t=>t();function n3(t=uy){const s=H(!0);function n(){s.value=!1}function o(){s.value=!0}const l=(...r)=>{s.value&&t(...r)};return{isActive:Vt(s),pause:n,resume:o,eventFilter:l}}function o3(t,s){var n;if(typeof t=="number")return t+s;const o=((n=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=t.slice(o.length),r=parseFloat(o)+s;return Number.isNaN(r)?t:r+l}function dy(...t){if(t.length!==1)return hm(...t);const s=t[0];return typeof s=="function"?Vt(gi(()=>({get:s,set:Fs}))):H(s)}var l3=Object.defineProperty,r3=Object.defineProperties,a3=Object.getOwnPropertyDescriptors,op=Object.getOwnPropertySymbols,i3=Object.prototype.hasOwnProperty,c3=Object.prototype.propertyIsEnumerable,lp=(t,s,n)=>s in t?l3(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,p3=(t,s)=>{for(var n in s||(s={}))i3.call(s,n)&&lp(t,n,s[n]);if(op)for(var n of op(s))c3.call(s,n)&&lp(t,n,s[n]);return t},u3=(t,s)=>r3(t,a3(s));function d3(t){if(!Te(t))return dm(t);const s=Array.isArray(t.value)?new Array(t.value.length):{};for(const n in t.value)s[n]=gi(()=>({get(){return t.value[n]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[n]=o,t.value=l}else{const l=u3(p3({},t.value),{[n]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return s}function Pi(t,s=!0){Ct()?Wt(t):s?t():rt(t)}function yy(t){Ct()&&mr(t)}function y3(t,s=1e3,n={}){const{immediate:o=!0,immediateCallback:l=!1}=n;let r=null;const a=H(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function u(){const d=He(s);d<=0||(a.value=!0,l&&t(),i(),r=setInterval(t,d))}if(o&&Jt&&u(),Te(s)||typeof s=="function"){const d=ve(s,()=>{a.value&&Jt&&u()});cs(d)}return cs(c),{isActive:a,pause:c,resume:u}}function f3(t,s,n={}){const{immediate:o=!0}=n,l=H(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){l.value=!1,a()}function c(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,t(...u)},He(s))}return o&&(l.value=!0,Jt&&c()),cs(i),{isPending:Vt(l),start:c,stop:i}}function fy(t=!1,s={}){const{truthyValue:n=!0,falsyValue:o=!1}=s,l=Te(t),r=H(t);function a(i){if(arguments.length)return r.value=i,r.value;{const c=He(n);return r.value=r.value===c?He(o):c,r.value}}return l?a:[r,a]}var rp=Object.getOwnPropertySymbols,h3=Object.prototype.hasOwnProperty,m3=Object.prototype.propertyIsEnumerable,g3=(t,s)=>{var n={};for(var o in t)h3.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&rp)for(var o of rp(t))s.indexOf(o)<0&&m3.call(t,o)&&(n[o]=t[o]);return n};function _3(t,s,n={}){const o=n,{eventFilter:l=uy}=o,r=g3(o,["eventFilter"]);return ve(t,s3(l,s),r)}var v3=Object.defineProperty,b3=Object.defineProperties,A3=Object.getOwnPropertyDescriptors,Kl=Object.getOwnPropertySymbols,hy=Object.prototype.hasOwnProperty,my=Object.prototype.propertyIsEnumerable,ap=(t,s,n)=>s in t?v3(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,D3=(t,s)=>{for(var n in s||(s={}))hy.call(s,n)&&ap(t,n,s[n]);if(Kl)for(var n of Kl(s))my.call(s,n)&&ap(t,n,s[n]);return t},C3=(t,s)=>b3(t,A3(s)),B3=(t,s)=>{var n={};for(var o in t)hy.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Kl)for(var o of Kl(t))s.indexOf(o)<0&&my.call(t,o)&&(n[o]=t[o]);return n};function E3(t,s,n={}){const o=n,{eventFilter:l}=o,r=B3(o,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:u}=n3(l);return{stop:_3(t,s,C3(D3({},r),{eventFilter:a})),pause:i,resume:c,isActive:u}}function at(t){var s;const n=He(t);return(s=n==null?void 0:n.$el)!=null?s:n}const st=Jt?window:void 0,Oi=Jt?window.document:void 0,w3=Jt?window.navigator:void 0;function De(...t){let s,n,o,l;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,o,l]=t,s=st):[s,n,o,l]=t,!s)return Fs;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],a=()=>{r.forEach(d=>d()),r.length=0},i=(d,y,f,h)=>(d.addEventListener(y,f,h),()=>d.removeEventListener(y,f,h)),c=ve(()=>[at(s),He(l)],([d,y])=>{a(),d&&r.push(...n.flatMap(f=>o.map(h=>i(d,f,h,y))))},{immediate:!0,flush:"post"}),u=()=>{c(),a()};return cs(u),u}let ip=!1;function k3(t,s,n={}){const{window:o=st,ignore:l=[],capture:r=!0,detectIframe:a=!1}=n;if(!o)return;e3&&!ip&&(ip=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",Fs)));let i=!0;const c=f=>l.some(h=>{if(typeof h=="string")return Array.from(o.document.querySelectorAll(h)).some(m=>m===f.target||f.composedPath().includes(m));{const m=at(h);return m&&(f.target===m||f.composedPath().includes(m))}}),d=[De(o,"click",f=>{const h=at(t);if(!(!h||h===f.target||f.composedPath().includes(h))){if(f.detail===0&&(i=!c(f)),!i){i=!0;return}s(f)}},{passive:!0,capture:r}),De(o,"pointerdown",f=>{const h=at(t);h&&(i=!f.composedPath().includes(h)&&!c(f))},{passive:!0}),a&&De(o,"blur",f=>{var h;const m=at(t);((h=o.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(o.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function S3(t){return typeof t=="function"?t:typeof t=="string"?s=>s.key===t:Array.isArray(t)?s=>t.includes(s.key):()=>!0}function x3(...t){let s,n,o={};t.length===3?(s=t[0],n=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(s=!0,n=t[0],o=t[1]):(s=t[0],n=t[1]):(s=!0,n=t[0]);const{target:l=st,eventName:r="keydown",passive:a=!1,dedupe:i=!1}=o,c=S3(s);return De(l,r,d=>{d.repeat&&He(i)||c(d)&&n(d)},a)}function T3(t={}){var s;const{window:n=st}=t,o=(s=t.document)!=null?s:n==null?void 0:n.document,l=G0(()=>null,()=>o==null?void 0:o.activeElement);return n&&(De(n,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),De(n,"focus",l.trigger,!0)),l}function L3(){const t=H(!1);return Ct()&&Wt(()=>{t.value=!0}),t}function Xo(t){const s=L3();return R(()=>(s.value,!!t()))}function R3(t,s={}){const{immediate:n=!0,window:o=st}=s,l=H(!1);let r=0,a=null;function i(d){if(!l.value||!o)return;const y=d-r;t({delta:y,timestamp:d}),r=d,a=o.requestAnimationFrame(i)}function c(){!l.value&&o&&(l.value=!0,a=o.requestAnimationFrame(i))}function u(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return n&&c(),cs(u),{isActive:Vt(l),pause:u,resume:c}}function rn(t,s={}){const{window:n=st}=s,o=Xo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let l;const r=H(!1),a=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{o.value&&(a(),l=n.matchMedia(dy(t).value),r.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",i):l.addListener(i)))};return En(i),cs(()=>a()),r}const $3={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function P3(t,s={}){function n(i,c){let u=t[i];return c!=null&&(u=o3(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=st}=s;function l(i){return o?o.matchMedia(i).matches:!1}const r=i=>rn(`(min-width: ${n(i)})`,s),a=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return Object.assign(a,{greater(i){return rn(`(min-width: ${n(i,.1)})`,s)},greaterOrEqual:r,smaller(i){return rn(`(max-width: ${n(i,-.1)})`,s)},smallerOrEqual(i){return rn(`(max-width: ${n(i)})`,s)},between(i,c){return rn(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,s)},isGreater(i){return l(`(min-width: ${n(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${n(i)})`)},isSmaller(i){return l(`(max-width: ${n(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${n(i)})`)},isInBetween(i,c){return l(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)},current(){const i=Object.keys(t).map(c=>[c,r(c)]);return R(()=>i.filter(([,c])=>c.value).map(([c])=>c))}})}function O3(t={}){const{navigator:s=w3,read:n=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=t,a=["copy","cut"],i=Xo(()=>s&&"clipboard"in s),c=R(()=>i.value||r),u=H(""),d=H(!1),y=f3(()=>d.value=!1,l);function f(){i.value?s.clipboard.readText().then(D=>{u.value=D}):u.value=_()}if(c.value&&n)for(const D of a)De(D,f);async function h(D=He(o)){c.value&&D!=null&&(i.value?await s.clipboard.writeText(D):m(D),u.value=D,d.value=!0,y.start())}function m(D){const b=document.createElement("textarea");b.value=D??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function _(){var D,b,B;return(B=(b=(D=document==null?void 0:document.getSelection)==null?void 0:D.call(document))==null?void 0:b.toString())!=null?B:""}return{isSupported:c,text:u,copied:d,copy:h}}function N3(t){return JSON.parse(JSON.stringify(t))}const gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_l="__vueuse_ssr_handlers__",F3=I3();function I3(){return _l in gl||(gl[_l]=gl[_l]||{}),gl[_l]}function M3(t,s){return F3[t]||s}function U3(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var q3=Object.defineProperty,cp=Object.getOwnPropertySymbols,j3=Object.prototype.hasOwnProperty,z3=Object.prototype.propertyIsEnumerable,pp=(t,s,n)=>s in t?q3(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,up=(t,s)=>{for(var n in s||(s={}))j3.call(s,n)&&pp(t,n,s[n]);if(cp)for(var n of cp(s))z3.call(s,n)&&pp(t,n,s[n]);return t};const V3={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},dp="vueuse-storage";function H3(t,s,n,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:y=st,eventFilter:f,onError:h=T=>{console.error(T)}}=o,m=(d?as:H)(s);if(!n)try{n=M3("getDefaultStorage",()=>{var T;return(T=st)==null?void 0:T.localStorage})()}catch(T){h(T)}if(!n)return m;const _=He(s),D=U3(_),b=(l=o.serializer)!=null?l:V3[D],{pause:B,resume:v}=E3(m,()=>E(m.value),{flush:r,deep:a,eventFilter:f});return y&&i&&(De(y,"storage",L),De(y,dp,x)),L(),m;function E(T){try{if(T==null)n.removeItem(t);else{const M=b.write(T),se=n.getItem(t);se!==M&&(n.setItem(t,M),y&&y.dispatchEvent(new CustomEvent(dp,{detail:{key:t,oldValue:se,newValue:M,storageArea:n}})))}}catch(M){h(M)}}function k(T){const M=T?T.newValue:n.getItem(t);if(M==null)return c&&_!==null&&n.setItem(t,b.write(_)),_;if(!T&&u){const se=b.read(M);return typeof u=="function"?u(se,_):D==="object"&&!Array.isArray(se)?up(up({},_),se):se}else return typeof M!="string"?M:b.read(M)}function x(T){L(T.detail)}function L(T){if(!(T&&T.storageArea!==n)){if(T&&T.key==null){m.value=_;return}if(!(T&&T.key!==t)){B();try{m.value=k(T)}catch(M){h(M)}finally{T?rt(v):v()}}}}}function Q3(t){return rn("(prefers-color-scheme: dark)",t)}var W3=Object.defineProperty,J3=Object.defineProperties,G3=Object.getOwnPropertyDescriptors,yp=Object.getOwnPropertySymbols,K3=Object.prototype.hasOwnProperty,Y3=Object.prototype.propertyIsEnumerable,fp=(t,s,n)=>s in t?W3(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,Z3=(t,s)=>{for(var n in s||(s={}))K3.call(s,n)&&fp(t,n,s[n]);if(yp)for(var n of yp(s))Y3.call(s,n)&&fp(t,n,s[n]);return t},X3=(t,s)=>J3(t,G3(s));function RR(t,s={}){var n,o;const{pointerTypes:l,preventDefault:r,stopPropagation:a,exact:i,onMove:c,onEnd:u,onStart:d,initialValue:y,axis:f="both",draggingElement:h=st,handle:m=t}=s,_=H((n=He(y))!=null?n:{x:0,y:0}),D=H(),b=x=>l?l.includes(x.pointerType):!0,B=x=>{He(r)&&x.preventDefault(),He(a)&&x.stopPropagation()},v=x=>{if(!b(x)||He(i)&&x.target!==He(t))return;const L=He(t).getBoundingClientRect(),T={x:x.clientX-L.left,y:x.clientY-L.top};(d==null?void 0:d(T,x))!==!1&&(D.value=T,B(x))},E=x=>{if(!b(x)||!D.value)return;let{x:L,y:T}=_.value;(f==="x"||f==="both")&&(L=x.clientX-D.value.x),(f==="y"||f==="both")&&(T=x.clientY-D.value.y),_.value={x:L,y:T},c==null||c(_.value,x),B(x)},k=x=>{b(x)&&D.value&&(D.value=void 0,u==null||u(_.value,x),B(x))};if(Jt){const x={capture:(o=s.capture)!=null?o:!0};De(m,"pointerdown",v,x),De(h,"pointermove",E,x),De(h,"pointerup",k,x)}return X3(Z3({},d3(_)),{position:_,isDragging:R(()=>!!D.value),style:R(()=>`left:${_.value.x}px;top:${_.value.y}px;`)})}var hp=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,t_=Object.prototype.propertyIsEnumerable,s_=(t,s)=>{var n={};for(var o in t)e_.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&hp)for(var o of hp(t))s.indexOf(o)<0&&t_.call(t,o)&&(n[o]=t[o]);return n};function n_(t,s,n={}){const o=n,{window:l=st}=o,r=s_(o,["window"]);let a;const i=Xo(()=>l&&"ResizeObserver"in l),c=()=>{a&&(a.disconnect(),a=void 0)},u=R(()=>Array.isArray(t)?t.map(f=>at(f)):[at(t)]),d=ve(u,f=>{if(c(),i.value&&l){a=new ResizeObserver(s);for(const h of f)h&&a.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),y=()=>{c(),d()};return cs(y),{isSupported:i,stop:y}}function o_(t,s={width:0,height:0},n={}){const{window:o=st,box:l="content-box"}=n,r=R(()=>{var c,u;return(u=(c=at(t))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),a=H(s.width),i=H(s.height);return n_(t,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(o&&r.value){const d=at(t);if(d){const y=o.getComputedStyle(d);a.value=parseFloat(y.width),i.value=parseFloat(y.height)}}else if(u){const d=Array.isArray(u)?u:[u];a.value=d.reduce((y,{inlineSize:f})=>y+f,0),i.value=d.reduce((y,{blockSize:f})=>y+f,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},n),ve(()=>at(t),c=>{a.value=c?s.width:0,i.value=c?s.height:0}),{width:a,height:i}}function l_(t,s,n={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=st,immediate:i=!0}=n,c=Xo(()=>a&&"IntersectionObserver"in a),u=R(()=>{const m=He(t);return(Array.isArray(m)?m:[m]).map(at).filter(Z0)});let d=Fs;const y=H(i),f=c.value?ve(()=>[u.value,at(o),y.value],([m,_])=>{if(d(),!y.value||!m.length)return;const D=new IntersectionObserver(s,{root:at(_),rootMargin:l,threshold:r});m.forEach(b=>b&&D.observe(b)),d=()=>{D.disconnect(),d=Fs}},{immediate:i,flush:"post"}):Fs,h=()=>{d(),f(),y.value=!1};return cs(h),{isSupported:c,isActive:y,pause(){d(),y.value=!1},resume(){y.value=!0},stop:h}}const mp=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function r_(t,s={}){const{document:n=Oi,autoExit:o=!1}=s,l=R(()=>{var b;return(b=at(t))!=null?b:n==null?void 0:n.querySelector("html")}),r=H(!1),a=R(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>n&&b in n||l.value&&b in l.value)),i=R(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>n&&b in n||l.value&&b in l.value)),c=R(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>n&&b in n||l.value&&b in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>n&&b in n),d=Xo(()=>l.value&&n&&a.value!==void 0&&i.value!==void 0&&c.value!==void 0),y=()=>u?(n==null?void 0:n[u])===l.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const b=l.value;if((b==null?void 0:b[c.value])!=null)return!!b[c.value]}}return!1};async function h(){if(d.value){if(i.value)if((n==null?void 0:n[i.value])!=null)await n[i.value]();else{const b=l.value;(b==null?void 0:b[i.value])!=null&&await b[i.value]()}r.value=!1}}async function m(){if(!d.value)return;f()&&await h();const b=l.value;a.value&&(b==null?void 0:b[a.value])!=null&&(await b[a.value](),r.value=!0)}async function _(){await(r.value?h():m())}const D=()=>{const b=f();(!b||b&&y())&&(r.value=b)};return De(n,mp,D,!1),De(()=>at(l),mp,D,!1),o&&cs(h),{isSupported:d,isFullscreen:r,enter:m,exit:h,toggle:_}}function Gt(t,s,n={}){const{window:o=st}=n;return H3(t,s,o==null?void 0:o.localStorage,n)}const a_={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function i_(t={}){const{reactive:s=!1,target:n=st,aliasMap:o=a_,passive:l=!0,onEventFired:r=Fs}=t,a=Ve(new Set),i={toJSON(){return{}},current:a},c=s?Ve(i):i,u=new Set,d=new Set;function y(_,D){_ in c&&(s?c[_]=D:c[_].value=D)}function f(){a.clear();for(const _ of d)y(_,!1)}function h(_,D){var b,B;const v=(b=_.key)==null?void 0:b.toLowerCase(),k=[(B=_.code)==null?void 0:B.toLowerCase(),v].filter(Boolean);v&&(D?a.add(v):a.delete(v));for(const x of k)d.add(x),y(x,D);v==="meta"&&!D?(u.forEach(x=>{a.delete(x),y(x,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&D&&[...a,...k].forEach(x=>u.add(x))}De(n,"keydown",_=>(h(_,!0),r(_)),{passive:l}),De(n,"keyup",_=>(h(_,!1),r(_)),{passive:l}),De("blur",f,{passive:!0}),De("focus",f,{passive:!0});const m=new Proxy(c,{get(_,D,b){if(typeof D!="string")return Reflect.get(_,D,b);if(D=D.toLowerCase(),D in o&&(D=o[D]),!(D in c))if(/[+_-]/.test(D)){const v=D.split(/[+_-]/g).map(E=>E.trim());c[D]=R(()=>v.every(E=>He(m[E])))}else c[D]=H(!1);const B=Reflect.get(_,D,b);return s?He(B):B}});return m}const c_={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function $R(t={}){const{type:s="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=st,target:a=r,eventFilter:i}=t,c=H(l.x),u=H(l.y),d=H(null),y=typeof s=="function"?s:c_[s],f=b=>{const B=y(b);B&&([c.value,u.value]=B,d.value="mouse")},h=b=>{if(b.touches.length>0){const B=y(b.touches[0]);B&&([c.value,u.value]=B,d.value="touch")}},m=()=>{c.value=l.x,u.value=l.y},_=i?b=>i(()=>f(b),{}):b=>f(b),D=i?b=>i(()=>h(b),{}):b=>h(b);return a&&(De(a,"mousemove",_,{passive:!0}),De(a,"dragover",_,{passive:!0}),n&&s!=="movement"&&(De(a,"touchstart",D,{passive:!0}),De(a,"touchmove",D,{passive:!0}),o&&De(a,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:d}}function p_(t,s={}){const n=dy(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=s,i=Ve({x:0,y:0}),c=(x,L)=>{i.x=x,i.y=L},u=Ve({x:0,y:0}),d=(x,L)=>{u.x=x,u.y=L},y=R(()=>i.x-u.x),f=R(()=>i.y-u.y),{max:h,abs:m}=Math,_=R(()=>h(m(y.value),m(f.value))>=o),D=H(!1),b=H(!1),B=R(()=>_.value?m(y.value)>m(f.value)?y.value>0?"left":"right":f.value>0?"up":"down":"none"),v=x=>{var L,T,M;const se=x.buttons===0,ae=x.buttons===1;return(M=(T=(L=s.pointerTypes)==null?void 0:L.includes(x.pointerType))!=null?T:se||ae)!=null?M:!0},E=[De(t,"pointerdown",x=>{var L,T;if(!v(x))return;b.value=!0,(T=(L=n.value)==null?void 0:L.style)==null||T.setProperty("touch-action","none");const M=x.target;M==null||M.setPointerCapture(x.pointerId);const{clientX:se,clientY:ae}=x;c(se,ae),d(se,ae),a==null||a(x)}),De(t,"pointermove",x=>{if(!v(x)||!b.value)return;const{clientX:L,clientY:T}=x;d(L,T),!D.value&&_.value&&(D.value=!0),D.value&&(l==null||l(x))}),De(t,"pointerup",x=>{var L,T;v(x)&&(D.value&&(r==null||r(x,B.value)),b.value=!1,D.value=!1,(T=(L=n.value)==null?void 0:L.style)==null||T.setProperty("touch-action","initial"))})],k=()=>E.forEach(x=>x());return{isSwiping:Vt(D),direction:Vt(B),posStart:Vt(i),posEnd:Vt(u),distanceX:y,distanceY:f,stop:k}}function u_(t,s=Fs,n={}){const{immediate:o=!0,manual:l=!1,type:r="text/javascript",async:a=!0,crossOrigin:i,referrerPolicy:c,noModule:u,defer:d,document:y=Oi,attrs:f={}}=n,h=H(null);let m=null;const _=B=>new Promise((v,E)=>{const k=T=>(h.value=T,v(T),T);if(!y){v(!1);return}let x=!1,L=y.querySelector(`script[src="${He(t)}"]`);L?L.hasAttribute("data-loaded")&&k(L):(L=y.createElement("script"),L.type=r,L.async=a,L.src=He(t),d&&(L.defer=d),i&&(L.crossOrigin=i),u&&(L.noModule=u),c&&(L.referrerPolicy=c),Object.entries(f).forEach(([T,M])=>L==null?void 0:L.setAttribute(T,M)),x=!0),L.addEventListener("error",T=>E(T)),L.addEventListener("abort",T=>E(T)),L.addEventListener("load",()=>{L.setAttribute("data-loaded","true"),s(L),k(L)}),x&&(L=y.head.appendChild(L)),B||k(L)}),D=(B=!0)=>(m||(m=_(B)),m),b=()=>{if(!y)return;m=null,h.value&&(h.value=null);const B=y.querySelector(`script[src="${He(t)}"]`);B&&y.head.removeChild(B)};return o&&!l&&Pi(D),l||yy(b),{scriptTag:h,load:D,unload:b}}let d_=0;function PR(t,s={}){const n=H(!1),{document:o=Oi,immediate:l=!0,manual:r=!1,id:a=`vueuse_styletag_${++d_}`}=s,i=H(t);let c=()=>{};const u=()=>{if(!o)return;const y=o.getElementById(a)||o.createElement("style");y.isConnected||(y.type="text/css",y.id=a,s.media&&(y.media=s.media),o.head.appendChild(y)),!n.value&&(c=ve(i,f=>{y.textContent=f},{immediate:!0}),n.value=!0)},d=()=>{!o||!n.value||(c(),o.head.removeChild(o.getElementById(a)),n.value=!1)};return l&&!r&&Pi(u),r||cs(d),{id:a,css:i,unload:d,load:u,isLoaded:Vt(n)}}var y_=Object.defineProperty,gp=Object.getOwnPropertySymbols,f_=Object.prototype.hasOwnProperty,h_=Object.prototype.propertyIsEnumerable,_p=(t,s,n)=>s in t?y_(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,m_=(t,s)=>{for(var n in s||(s={}))f_.call(s,n)&&_p(t,n,s[n]);if(gp)for(var n of gp(s))h_.call(s,n)&&_p(t,n,s[n]);return t};function OR(t={}){const{controls:s=!1,offset:n=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=t,a=H(Sa()+n),i=()=>a.value=Sa()+n,c=r?()=>{i(),r(a.value)}:i,u=l==="requestAnimationFrame"?R3(c,{immediate:o}):y3(c,l,{immediate:o});return s?m_({timestamp:a},u):a}function ss(t,s,n,o={}){var l,r,a;const{clone:i=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:y,shouldEmit:f}=o,h=Ct(),m=n||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((a=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(h==null?void 0:h.proxy));let _=u;s||(s="modelValue"),_=u||_||`update:${s.toString()}`;const D=v=>i?typeof i=="function"?i(v):N3(v):v,b=()=>Y0(t[s])?D(t[s]):y,B=v=>{f?f(v)&&m(_,v):m(_,v)};if(c){const v=b(),E=H(v);return ve(()=>t[s],k=>E.value=D(k)),ve(E,k=>{(k!==t[s]||d)&&B(k)},{deep:d}),E}else return R({get(){return b()},set(v){B(v)}})}function NR({window:t=st}={}){if(!t)return H(!1);const s=H(t.document.hasFocus());return De(t,"blur",()=>{s.value=!1}),De(t,"focus",()=>{s.value=!0}),s}function g_(t={}){const{window:s=st,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,a=H(n),i=H(o),c=()=>{s&&(r?(a.value=s.innerWidth,i.value=s.innerHeight):(a.value=s.document.documentElement.clientWidth,i.value=s.document.documentElement.clientHeight))};if(c(),Pi(c),De("resize",c,{passive:!0}),l){const u=rn("(orientation: portrait)");ve(u,()=>c())}return{width:a,height:i}}function __(){return gy().__VUE_DEVTOOLS_GLOBAL_HOOK__}function gy(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const v_=typeof Proxy=="function",b_="devtools-plugin:setup",A_="plugin:settings:set";let Tn,xa;function D_(){var t;return Tn!==void 0||(typeof window<"u"&&window.performance?(Tn=!0,xa=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Tn=!0,xa=global.perf_hooks.performance):Tn=!1),Tn}function C_(){return D_()?xa.now():Date.now()}class B_{constructor(s,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=n;const o={};if(s.settings)for(const a in s.settings){const i=s.settings[a];o[a]=i.defaultValue}const l=`__vue-devtools-plugin-settings__${s.id}`;let r=Object.assign({},o);try{const a=localStorage.getItem(l),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(l,JSON.stringify(a))}catch{}r=a},now(){return C_()}},n&&n.on(A_,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:i,args:c,resolve:u})})})}async setRealTarget(s){this.target=s;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function E_(t,s){const n=t,o=gy(),l=__(),r=v_&&n.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(b_,t,s);else{const a=r?new B_(n,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:s,proxy:a}),a&&s(a.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof window<"u";function w_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Ur(t,s){const n={};for(const o in s){const l=s[o];n[o]=Tt(l)?l.map(t):t(l)}return n}const Co=()=>{},Tt=Array.isArray;function Se(t){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(s))}const k_=/\/$/,S_=t=>t.replace(k_,"");function qr(t,s,n="/"){let o,l={},r="",a="";const i=s.indexOf("#");let c=s.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(o=s.slice(0,c),r=s.slice(c+1,i>-1?i:s.length),l=t(r)),i>-1&&(o=o||s.slice(0,i),a=s.slice(i,s.length)),o=L_(o??s,n),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function x_(t,s){const n=s.query?t(s.query):"";return s.path+(n&&"?")+n+(s.hash||"")}function vp(t,s){return!s||!t.toLowerCase().startsWith(s.toLowerCase())?t:t.slice(s.length)||"/"}function bp(t,s,n){const o=s.matched.length-1,l=n.matched.length-1;return o>-1&&o===l&&Vs(s.matched[o],n.matched[l])&&_y(s.params,n.params)&&t(s.query)===t(n.query)&&s.hash===n.hash}function Vs(t,s){return(t.aliasOf||t)===(s.aliasOf||s)}function _y(t,s){if(Object.keys(t).length!==Object.keys(s).length)return!1;for(const n in t)if(!T_(t[n],s[n]))return!1;return!0}function T_(t,s){return Tt(t)?Ap(t,s):Tt(s)?Ap(s,t):t===s}function Ap(t,s){return Tt(s)?t.length===s.length&&t.every((n,o)=>n===s[o]):t.length===1&&t[0]===s}function L_(t,s){if(t.startsWith("/"))return t;if(!s.startsWith("/"))return Se(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${s}". It should look like "/${s}".`),t;if(!t)return s;const n=s.split("/"),o=t.split("/"),l=o[o.length-1];(l===".."||l===".")&&o.push("");let r=n.length-1,a,i;for(a=0;a<o.length;a++)if(i=o[a],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Io;(function(t){t.pop="pop",t.push="push"})(Io||(Io={}));var Bo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bo||(Bo={}));function R_(t){if(!t)if(hs){const s=document.querySelector("base");t=s&&s.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),S_(t)}const $_=/^[^#]+#/;function P_(t,s){return t.replace($_,"#")+s}function O_(t,s){const n=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:s.behavior,left:o.left-n.left-(s.left||0),top:o.top-n.top-(s.top||0)}}const br=()=>({left:window.pageXOffset,top:window.pageYOffset});function N_(t){let s;if("el"in t){const n=t.el,o=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!o||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(o&&r){Se(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Se(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l){Se(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}s=O_(l,t)}else s=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function Dp(t,s){return(history.state?history.state.position-s:-1)+t}const Ta=new Map;function F_(t,s){Ta.set(t,s)}function I_(t){const s=Ta.get(t);return Ta.delete(t),s}let M_=()=>location.protocol+"//"+location.host;function vy(t,s){const{pathname:n,search:o,hash:l}=s,r=t.indexOf("#");if(r>-1){let i=l.includes(t.slice(r))?t.slice(r).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),vp(c,"")}return vp(n,t)+o+l}function U_(t,s,n,o){let l=[],r=[],a=null;const i=({state:f})=>{const h=vy(t,location),m=n.value,_=s.value;let D=0;if(f){if(n.value=h,s.value=f,a&&a===m){a=null;return}D=_?f.position-_.position:0}else o(h);l.forEach(b=>{b(n.value,m,{delta:D,type:Io.pop,direction:D?D>0?Bo.forward:Bo.back:Bo.unknown})})};function c(){a=n.value}function u(f){l.push(f);const h=()=>{const m=l.indexOf(f);m>-1&&l.splice(m,1)};return r.push(h),h}function d(){const{history:f}=window;f.state&&f.replaceState($e({},f.state,{scroll:br()}),"")}function y(){for(const f of r)f();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:y}}function Cp(t,s,n,o=!1,l=!1){return{back:t,current:s,forward:n,replaced:o,position:window.history.length,scroll:l?br():null}}function q_(t){const{history:s,location:n}=window,o={value:vy(t,n)},l={value:s.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function r(c,u,d){const y=t.indexOf("#"),f=y>-1?(n.host&&document.querySelector("base")?t:t.slice(y))+c:M_()+t+c;try{s[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(h){Se("Error with push/replace State",h),n[d?"replace":"assign"](f)}}function a(c,u){const d=$e({},s.state,Cp(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});r(c,d,!0),o.value=c}function i(c,u){const d=$e({},l.value,s.state,{forward:c,scroll:br()});s.state||Se(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const y=$e({},Cp(o.value,c,null),{position:d.position+1},u);r(c,y,!1),o.value=c}return{location:o,state:l,push:i,replace:a}}function j_(t){t=R_(t);const s=q_(t),n=U_(t,s.state,s.location,s.replace);function o(r,a=!0){a||n.pauseListeners(),history.go(r)}const l=$e({location:"",base:t,go:o,createHref:P_.bind(null,t)},s,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>s.state.value}),l}function z_(t){return typeof t=="string"||t&&typeof t=="object"}function by(t){return typeof t=="string"||typeof t=="symbol"}const Es={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ay=Symbol("navigation failure");var Bp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bp||(Bp={}));const V_={[1]({location:t,currentLocation:s}){return`No match for
 ${JSON.stringify(t)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:t,to:s}){return`Redirected from "${t.fullPath}" to "${Q_(s)}" via a navigation guard.`},[4]({from:t,to:s}){return`Navigation aborted from "${t.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:t,to:s}){return`Navigation cancelled from "${t.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:t,to:s}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function zn(t,s){return $e(new Error(V_[t](s)),{type:t,[Ay]:!0},s)}function ps(t,s){return t instanceof Error&&Ay in t&&(s==null||!!(t.type&s))}const H_=["params","query","hash"];function Q_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const s={};for(const n of H_)n in t&&(s[n]=t[n]);return JSON.stringify(s,null,2)}const Ep="[^/]+?",W_={sensitive:!1,strict:!1,start:!0,end:!0},J_=/[.+*?^${}()[\]/\\]/g;function G_(t,s){const n=$e({},W_,s),o=[];let l=n.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(l+="/");for(let y=0;y<u.length;y++){const f=u[y];let h=40+(n.sensitive?.25:0);if(f.type===0)y||(l+="/"),l+=f.value.replace(J_,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:D,regexp:b}=f;r.push({name:m,repeatable:_,optional:D});const B=b||Ep;if(B!==Ep){h+=10;try{new RegExp(`(${B})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${B}): `+E.message)}}let v=_?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;y||(v=D&&u.length<2?`(?:/${v})`:"/"+v),D&&(v+="?"),l+=v,h+=20,D&&(h+=-8),_&&(h+=-20),B===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const a=new RegExp(l,n.sensitive?"":"i");function i(u){const d=u.match(a),y={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",m=r[f-1];y[m.name]=h&&m.repeatable?h.split("/"):h}return y}function c(u){let d="",y=!1;for(const f of t){(!y||!d.endsWith("/"))&&(d+="/"),y=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:D}=h,b=m in u?u[m]:"";if(Tt(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const B=Tt(b)?b.join("/"):b;if(!B)if(D)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):y=!0);else throw new Error(`Missing required param "${m}"`);d+=B}}return d||"/"}return{re:a,score:o,keys:r,parse:i,stringify:c}}function K_(t,s){let n=0;for(;n<t.length&&n<s.length;){const o=s[n]-t[n];if(o)return o;n++}return t.length<s.length?t.length===1&&t[0]===40+40?-1:1:t.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Y_(t,s){let n=0;const o=t.score,l=s.score;for(;n<o.length&&n<l.length;){const r=K_(o[n],l[n]);if(r)return r;n++}if(Math.abs(l.length-o.length)===1){if(wp(o))return 1;if(wp(l))return-1}return l.length-o.length}function wp(t){const s=t[t.length-1];return t.length>0&&s[s.length-1]<0}const Z_={type:0,value:""},X_=/[a-zA-Z0-9_]/;function ev(t){if(!t)return[[]];if(t==="/")return[[Z_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function s(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,o=n;const l=[];let r;function a(){r&&l.push(r),r=[]}let i=0,c,u="",d="";function y(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):s("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&y(),a()):c===":"?(y(),n=1):f();break;case 4:f(),n=o;break;case 1:c==="("?n=2:X_.test(c)?f():(y(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:y(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,d="";break;default:s("Unknown state");break}}return n===2&&s(`Unfinished custom RegExp for param "${u}"`),y(),a(),l}function tv(t,s,n){const o=G_(ev(t.path),n);{const r=new Set;for(const a of o.keys)r.has(a.name)&&Se(`Found duplicated params with name "${a.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const l=$e(o,{record:t,parent:s,children:[],alias:[]});return s&&!l.record.aliasOf==!s.record.aliasOf&&s.children.push(l),l}function sv(t,s){const n=[],o=new Map;s=xp({strict:!1,end:!0,sensitive:!1},s);function l(d){return o.get(d)}function r(d,y,f){const h=!f,m=nv(d);av(m,y),m.aliasOf=f&&f.record;const _=xp(s,d),D=[m];if("alias"in d){const v=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of v)D.push($e({},m,{components:f?f.record.components:m.components,path:E,aliasOf:f?f.record:m}))}let b,B;for(const v of D){const{path:E}=v;if(y&&E[0]!=="/"){const k=y.record.path,x=k[k.length-1]==="/"?"":"/";v.path=y.record.path+(E&&x+E)}if(v.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(b=tv(v,y,_),y&&E[0]==="/"&&iv(b,y),f?(f.alias.push(b),rv(f,b)):(B=B||b,B!==b&&B.alias.push(b),h&&d.name&&!Sp(b)&&a(d.name)),m.children){const k=m.children;for(let x=0;x<k.length;x++)r(k[x],b,f&&f.children[x])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return B?()=>{a(B)}:Co}function a(d){if(by(d)){const y=o.get(d);y&&(o.delete(d),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(d);y>-1&&(n.splice(y,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return n}function c(d){let y=0;for(;y<n.length&&Y_(d,n[y])>=0&&(d.record.path!==n[y].record.path||!Dy(d,n[y]));)y++;n.splice(y,0,d),d.record.name&&!Sp(d)&&o.set(d.record.name,d)}function u(d,y){let f,h={},m,_;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw zn(1,{location:d});{const B=Object.keys(d.params||{}).filter(v=>!f.keys.find(E=>E.name===v));B.length&&Se(`Discarded invalid param(s) "${B.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}_=f.record.name,h=$e(kp(y.params,f.keys.filter(B=>!B.optional).map(B=>B.name)),d.params&&kp(d.params,f.keys.map(B=>B.name))),m=f.stringify(h)}else if("path"in d)m=d.path,m.startsWith("/")||Se(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=n.find(B=>B.re.test(m)),f&&(h=f.parse(m),_=f.record.name);else{if(f=y.name?o.get(y.name):n.find(B=>B.re.test(y.path)),!f)throw zn(1,{location:d,currentLocation:y});_=f.record.name,h=$e({},y.params,d.params),m=f.stringify(h)}const D=[];let b=f;for(;b;)D.unshift(b.record),b=b.parent;return{name:_,path:m,params:h,matched:D,meta:lv(D)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function kp(t,s){const n={};for(const o of s)o in t&&(n[o]=t[o]);return n}function nv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ov(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ov(t){const s={},n=t.props||!1;if("component"in t)s.default=n;else for(const o in t.components)s[o]=typeof n=="boolean"?n:n[o];return s}function Sp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lv(t){return t.reduce((s,n)=>$e(s,n.meta),{})}function xp(t,s){const n={};for(const o in t)n[o]=o in s?s[o]:t[o];return n}function La(t,s){return t.name===s.name&&t.optional===s.optional&&t.repeatable===s.repeatable}function rv(t,s){for(const n of t.keys)if(!n.optional&&!s.keys.find(La.bind(null,n)))return Se(`Alias "${s.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of s.keys)if(!n.optional&&!t.keys.find(La.bind(null,n)))return Se(`Alias "${s.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function av(t,s){s&&s.record.name&&!t.name&&!t.path&&Se(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function iv(t,s){for(const n of s.keys)if(!t.keys.find(La.bind(null,n)))return Se(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${s.record.path}".`)}function Dy(t,s){return s.children.some(n=>n===t||Dy(t,n))}const Cy=/#/g,cv=/&/g,pv=/\//g,uv=/=/g,dv=/\?/g,By=/\+/g,yv=/%5B/g,fv=/%5D/g,Ey=/%5E/g,hv=/%60/g,wy=/%7B/g,mv=/%7C/g,ky=/%7D/g,gv=/%20/g;function Ni(t){return encodeURI(""+t).replace(mv,"|").replace(yv,"[").replace(fv,"]")}function _v(t){return Ni(t).replace(wy,"{").replace(ky,"}").replace(Ey,"^")}function Ra(t){return Ni(t).replace(By,"%2B").replace(gv,"+").replace(Cy,"%23").replace(cv,"%26").replace(hv,"`").replace(wy,"{").replace(ky,"}").replace(Ey,"^")}function vv(t){return Ra(t).replace(uv,"%3D")}function bv(t){return Ni(t).replace(Cy,"%23").replace(dv,"%3F")}function Av(t){return t==null?"":bv(t).replace(pv,"%2F")}function Mo(t){try{return decodeURIComponent(""+t)}catch{Se(`Error decoding "${t}". Using original value`)}return""+t}function Dv(t){const s={};if(t===""||t==="?")return s;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(By," "),a=r.indexOf("="),i=Mo(a<0?r:r.slice(0,a)),c=a<0?null:Mo(r.slice(a+1));if(i in s){let u=s[i];Tt(u)||(u=s[i]=[u]),u.push(c)}else s[i]=c}return s}function Tp(t){let s="";for(let n in t){const o=t[n];if(n=vv(n),o==null){o!==void 0&&(s+=(s.length?"&":"")+n);continue}(Tt(o)?o.map(r=>r&&Ra(r)):[o&&Ra(o)]).forEach(r=>{r!==void 0&&(s+=(s.length?"&":"")+n,r!=null&&(s+="="+r))})}return s}function Cv(t){const s={};for(const n in t){const o=t[n];o!==void 0&&(s[n]=Tt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return s}const Bv=Symbol("router view location matched"),Lp=Symbol("router view depth"),Fi=Symbol("router"),Sy=Symbol("route location"),$a=Symbol("router view location");function oo(){let t=[];function s(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function n(){t=[]}return{add:s,list:()=>t,reset:n}}function xs(t,s,n,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=y=>{y===!1?i(zn(4,{from:n,to:s})):y instanceof Error?i(y):z_(y)?i(zn(2,{from:s,to:y})):(r&&o.enterCallbacks[l]===r&&typeof y=="function"&&r.push(y),a())},u=t.call(o&&o.instances[l],s,n,Ev(c,s,n));let d=Promise.resolve(u);if(t.length<3&&(d=d.then(c)),t.length>2){const y=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>c._called?f:(Se(y),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!c._called){Se(y),i(new Error("Invalid navigation guard"));return}}d.catch(y=>i(y))})}function Ev(t,s,n){let o=0;return function(){o++===1&&Se(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,o===1&&t.apply(null,arguments)}}function jr(t,s,n,o){const l=[];for(const r of t){!r.components&&!r.children.length&&Se(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Se(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Se(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Se(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!r.instances[a]))if(wv(i)){const u=(i.__vccOpts||i)[s];u&&l.push(xs(u,n,o,r,a))}else{let c=i();"catch"in c||(Se(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=w_(u)?u.default:u;r.components[a]=d;const f=(d.__vccOpts||d)[s];return f&&xs(f,n,o,r,a)()}))}}}return l}function wv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rp(t){const s=I(Fi),n=I(Sy),o=R(()=>s.resolve(O(t.to))),l=R(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],y=n.matched;if(!d||!y.length)return-1;const f=y.findIndex(Vs.bind(null,d));if(f>-1)return f;const h=$p(c[u-2]);return u>1&&$p(d)===h&&y[y.length-1].path!==h?y.findIndex(Vs.bind(null,c[u-2])):f}),r=R(()=>l.value>-1&&Tv(n.params,o.value.params)),a=R(()=>l.value>-1&&l.value===n.matched.length-1&&_y(n.params,o.value.params));function i(c={}){return xv(c)?s[O(t.replace)?"replace":"push"](O(t.to)).catch(Co):Promise.resolve()}if(hs){const c=Ct();if(c){const u={route:o.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(u),En(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=a.value},{flush:"post"})}}return{route:o,href:R(()=>o.value.href),isActive:r,isExactActive:a,navigate:i}}const kv=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rp,setup(t,{slots:s}){const n=Ve(Rp(t)),{options:o}=I(Fi),l=R(()=>({[Pp(t.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Pp(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=s.default&&s.default(n);return t.custom?r:tt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},r)}}}),Sv=kv;function xv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const s=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return t.preventDefault&&t.preventDefault(),!0}}function Tv(t,s){for(const n in s){const o=s[n],l=t[n];if(typeof o=="string"){if(o!==l)return!1}else if(!Tt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function $p(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pp=(t,s,n)=>t??s??n,Lv=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:s,slots:n}){$v();const o=I($a),l=R(()=>t.route||o.value),r=I(Lp,0),a=R(()=>{let u=O(r);const{matched:d}=l.value;let y;for(;(y=d[u])&&!y.components;)u++;return u}),i=R(()=>l.value.matched[a.value]);kt(Lp,R(()=>a.value+1)),kt(Bv,i),kt($a,l);const c=H();return ve(()=>[c.value,i.value,t.name],([u,d,y],[f,h,m])=>{d&&(d.instances[y]=u,h&&h!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!Vs(d,h)||!f)&&(d.enterCallbacks[y]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=l.value,d=t.name,y=i.value,f=y&&y.components[d];if(!f)return Op(n.default,{Component:f,route:u});const h=y.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,D=tt(f,$e({},m,s,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(y.instances[d]=null)},ref:c}));if(hs&&D.ref){const b={depth:a.value,name:y.name,path:y.path,meta:y.meta};(Tt(D.ref)?D.ref.map(v=>v.i):[D.ref.i]).forEach(v=>{v.__vrv_devtools=b})}return Op(n.default,{Component:D,route:u})||D}}});function Op(t,s){if(!t)return null;const n=t(s);return n.length===1?n[0]:n}const Rv=Lv;function $v(){const t=Ct(),s=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(s&&(s==="KeepAlive"||s.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const o=s==="KeepAlive"?"keep-alive":"transition";Se(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`)}}function lo(t,s){const n=$e({},t,{matched:t.matched.map(o=>jv(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:s,value:n}}}function vl(t){return{_custom:{display:t}}}let Pv=0;function Ov(t,s,n){if(s.__hasDevtools)return;s.__hasDevtools=!0;const o=Pv++;E_({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,y)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:lo(s.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:y})=>{if(y.__vrv_devtools){const f=y.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:xy})}Tt(y.__vrl_devtools)&&(y.__devtoolsApi=l,y.__vrl_devtools.forEach(f=>{let h=Ry,m="";f.isExactActive?(h=Ly,m="This is exactly active"):f.isActive&&(h=Ty,m="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:m,backgroundColor:h})}))}),ve(s.currentRoute,()=>{c(),l.notifyComponentUpdate(),l.sendInspectorTree(i),l.sendInspectorState(i)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),s.onError((d,y)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:y.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:y.meta.__navigationId}})});let a=0;s.beforeEach((d,y)=>{const f={guard:vl("beforeEach"),from:lo(y,"Current Location during this navigation"),to:lo(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:a++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,y,f)=>{const h={guard:vl("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=vl("❌")):h.status=vl("✅"),h.from=lo(y,"Current Location during this navigation"),h.to=lo(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:h,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const i="router-inspector:"+o;l.addInspector({id:i,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!u)return;const d=u;let y=n.getRoutes().filter(f=>!f.parent);y.forEach(Oy),d.filter&&(y=y.filter(f=>Pa(f,d.filter.toLowerCase()))),y.forEach(f=>Py(f,s.currentRoute.value)),d.rootNodes=y.map($y)}let u;l.on.getInspectorTree(d=>{u=d,d.app===t&&d.inspectorId===i&&c()}),l.on.getInspectorState(d=>{if(d.app===t&&d.inspectorId===i){const f=n.getRoutes().find(h=>h.record.__vd_id===d.nodeId);f&&(d.state={options:Fv(f)})}}),l.sendInspectorTree(i),l.sendInspectorState(i)})}function Nv(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Fv(t){const{record:s}=t,n=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&n.push({editable:!1,key:"name",value:s.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(o=>`${o.name}${Nv(o)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),s.redirect!=null&&n.push({editable:!1,key:"redirect",value:s.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(o=>o.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const xy=15485081,Ty=2450411,Ly=8702998,Iv=2282478,Ry=16486972,Mv=6710886;function $y(t){const s=[],{record:n}=t;n.name!=null&&s.push({label:String(n.name),textColor:0,backgroundColor:Iv}),n.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:Ry}),t.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:xy}),t.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:Ly}),t.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:Ty}),n.redirect&&s.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Mv});let o=n.__vd_id;return o==null&&(o=String(Uv++),n.__vd_id=o),{id:o,label:n.path,tags:s,children:t.children.map($y)}}let Uv=0;const qv=/^\/(.*)\/([a-z]*)$/;function Py(t,s){const n=s.matched.length&&Vs(s.matched[s.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=s.matched.some(o=>Vs(o,t.record))),t.children.forEach(o=>Py(o,s))}function Oy(t){t.__vd_match=!1,t.children.forEach(Oy)}function Pa(t,s){const n=String(t.re).match(qv);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(s))return t.children.forEach(a=>Pa(a,s)),t.record.path!=="/"||s==="/"?(t.__vd_match=t.re.test(s),!0):!1;const l=t.record.path.toLowerCase(),r=Mo(l);return!s.startsWith("/")&&(r.includes(s)||l.includes(s))||r.startsWith(s)||l.startsWith(s)||t.record.name&&String(t.record.name).includes(s)?!0:t.children.some(a=>Pa(a,s))}function jv(t,s){const n={};for(const o in t)s.includes(o)||(n[o]=t[o]);return n}function zv(t){const s=sv(t.routes,t),n=t.parseQuery||Dv,o=t.stringifyQuery||Tp,l=t.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=oo(),a=oo(),i=oo(),c=as(Es);let u=Es;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ur.bind(null,$=>""+$),y=Ur.bind(null,Av),f=Ur.bind(null,Mo);function h($,Y){let X,te;return by($)?(X=s.getRecordMatcher($),te=Y):te=$,s.addRoute(te,X)}function m($){const Y=s.getRecordMatcher($);Y?s.removeRoute(Y):Se(`Cannot remove non-existent route "${String($)}"`)}function _(){return s.getRoutes().map($=>$.record)}function D($){return!!s.getRecordMatcher($)}function b($,Y){if(Y=$e({},Y||c.value),typeof $=="string"){const A=qr(n,$,Y.path),S=s.resolve({path:A.path},Y),F=l.createHref(A.fullPath);return F.startsWith("//")?Se(`Location "${$}" resolved to "${F}". A resolved location cannot start with multiple slashes.`):S.matched.length||Se(`No match found for location with path "${$}"`),$e(A,S,{params:f(S.params),hash:Mo(A.hash),redirectedFrom:void 0,href:F})}let X;if("path"in $)"params"in $&&!("name"in $)&&Object.keys($.params).length&&Se(`Path "${$.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),X=$e({},$,{path:qr(n,$.path,Y.path).path});else{const A=$e({},$.params);for(const S in A)A[S]==null&&delete A[S];X=$e({},$,{params:y(A)}),Y.params=y(Y.params)}const te=s.resolve(X,Y),Be=$.hash||"";Be&&!Be.startsWith("#")&&Se(`A \`hash\` should always start with the character "#". Replace "${Be}" with "#${Be}".`),te.params=d(f(te.params));const Ne=x_(o,$e({},$,{hash:_v(Be),path:te.path})),g=l.createHref(Ne);return g.startsWith("//")?Se(`Location "${$}" resolved to "${g}". A resolved location cannot start with multiple slashes.`):te.matched.length||Se(`No match found for location with path "${"path"in $?$.path:$}"`),$e({fullPath:Ne,hash:Be,query:o===Tp?Cv($.query):$.query||{}},te,{redirectedFrom:void 0,href:g})}function B($){return typeof $=="string"?qr(n,$,c.value.path):$e({},$)}function v($,Y){if(u!==$)return zn(8,{from:Y,to:$})}function E($){return L($)}function k($){return E($e(B($),{replace:!0}))}function x($){const Y=$.matched[$.matched.length-1];if(Y&&Y.redirect){const{redirect:X}=Y;let te=typeof X=="function"?X($):X;if(typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),!("path"in te)&&!("name"in te))throw Se(`Invalid redirect found:
${JSON.stringify(te,null,2)}
 when navigating to "${$.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return $e({query:$.query,hash:$.hash,params:"path"in te?{}:$.params},te)}}function L($,Y){const X=u=b($),te=c.value,Be=$.state,Ne=$.force,g=$.replace===!0,A=x(X);if(A)return L($e(B(A),{state:typeof A=="object"?$e({},Be,A.state):Be,force:Ne,replace:g}),Y||X);const S=X;S.redirectedFrom=Y;let F;return!Ne&&bp(o,te,X)&&(F=zn(16,{to:S,from:te}),Lt(te,te,!0,!1)),(F?Promise.resolve(F):se(S,te)).catch(N=>ps(N)?ps(N,2)?N:Pe(N):ce(N,S,te)).then(N=>{if(N){if(ps(N,2))return bp(o,b(N.to),S)&&Y&&(Y._count=Y._count?Y._count+1:1)>30?(Se(`Detected a possibly infinite redirection in a navigation guard when going from "${te.fullPath}" to "${S.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):L($e({replace:g},B(N.to),{state:typeof N.to=="object"?$e({},Be,N.to.state):Be,force:Ne}),Y||S)}else N=K(S,te,!0,g,Be);return ae(S,te,N),N})}function T($,Y){const X=v($,Y);return X?Promise.reject(X):Promise.resolve()}function M($){const Y=Yt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext($):$()}function se($,Y){let X;const[te,Be,Ne]=Vv($,Y);X=jr(te.reverse(),"beforeRouteLeave",$,Y);for(const A of te)A.leaveGuards.forEach(S=>{X.push(xs(S,$,Y))});const g=T.bind(null,$,Y);return X.push(g),Rt(X).then(()=>{X=[];for(const A of r.list())X.push(xs(A,$,Y));return X.push(g),Rt(X)}).then(()=>{X=jr(Be,"beforeRouteUpdate",$,Y);for(const A of Be)A.updateGuards.forEach(S=>{X.push(xs(S,$,Y))});return X.push(g),Rt(X)}).then(()=>{X=[];for(const A of $.matched)if(A.beforeEnter&&!Y.matched.includes(A))if(Tt(A.beforeEnter))for(const S of A.beforeEnter)X.push(xs(S,$,Y));else X.push(xs(A.beforeEnter,$,Y));return X.push(g),Rt(X)}).then(()=>($.matched.forEach(A=>A.enterCallbacks={}),X=jr(Ne,"beforeRouteEnter",$,Y),X.push(g),Rt(X))).then(()=>{X=[];for(const A of a.list())X.push(xs(A,$,Y));return X.push(g),Rt(X)}).catch(A=>ps(A,8)?A:Promise.reject(A))}function ae($,Y,X){for(const te of i.list())M(()=>te($,Y,X))}function K($,Y,X,te,Be){const Ne=v($,Y);if(Ne)return Ne;const g=Y===Es,A=hs?history.state:{};X&&(te||g?l.replace($.fullPath,$e({scroll:g&&A&&A.scroll},Be)):l.push($.fullPath,Be)),c.value=$,Lt($,Y,X,g),Pe()}let de;function ge(){de||(de=l.listen(($,Y,X)=>{if(!Js.listening)return;const te=b($),Be=x(te);if(Be){L($e(Be,{replace:!0}),te).catch(Co);return}u=te;const Ne=c.value;hs&&F_(Dp(Ne.fullPath,X.delta),br()),se(te,Ne).catch(g=>ps(g,12)?g:ps(g,2)?(L(g.to,te).then(A=>{ps(A,20)&&!X.delta&&X.type===Io.pop&&l.go(-1,!1)}).catch(Co),Promise.reject()):(X.delta&&l.go(-X.delta,!1),ce(g,te,Ne))).then(g=>{g=g||K(te,Ne,!1),g&&(X.delta&&!ps(g,8)?l.go(-X.delta,!1):X.type===Io.pop&&ps(g,20)&&l.go(-1,!1)),ae(te,Ne,g)}).catch(Co)}))}let _e=oo(),Oe=oo(),ee;function ce($,Y,X){Pe($);const te=Oe.list();return te.length?te.forEach(Be=>Be($,Y,X)):(Se("uncaught error during route navigation:"),console.error($)),Promise.reject($)}function Ee(){return ee&&c.value!==Es?Promise.resolve():new Promise(($,Y)=>{_e.add([$,Y])})}function Pe($){return ee||(ee=!$,ge(),_e.list().forEach(([Y,X])=>$?X($):Y()),_e.reset()),$}function Lt($,Y,X,te){const{scrollBehavior:Be}=t;if(!hs||!Be)return Promise.resolve();const Ne=!X&&I_(Dp($.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return rt().then(()=>Be($,Y,Ne)).then(g=>g&&N_(g)).catch(g=>ce(g,$,Y))}const ot=$=>l.go($);let _t;const Yt=new Set,Js={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:D,getRoutes:_,resolve:b,options:t,push:E,replace:k,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Oe.add,isReady:Ee,install($){const Y=this;$.component("RouterLink",Sv),$.component("RouterView",Rv),$.config.globalProperties.$router=Y,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>O(c)}),hs&&!_t&&c.value===Es&&(_t=!0,E(l.location).catch(Be=>{Se("Unexpected error when starting the router:",Be)}));const X={};for(const Be in Es)X[Be]=R(()=>c.value[Be]);$.provide(Fi,Y),$.provide(Sy,Ve(X)),$.provide($a,c);const te=$.unmount;Yt.add($),$.unmount=function(){Yt.delete($),Yt.size<1&&(u=Es,de&&de(),de=null,c.value=Es,_t=!1,ee=!1),te()},hs&&Ov($,Y,s)}};function Rt($){return $.reduce((Y,X)=>Y.then(()=>M(X)),Promise.resolve())}return Js}function Vv(t,s){const n=[],o=[],l=[],r=Math.max(s.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=s.matched[a];i&&(t.matched.find(u=>Vs(u,i))?o.push(i):n.push(i));const c=t.matched[a];c&&(s.matched.find(u=>Vs(u,c))||l.push(c))}return[n,o,l]}const zr=H(!1),Eo=H(!1),Pn=H(!1),Hv=H(!0),Oa=P3({xs:460,...$3}),vn=g_(),Ny=i_(),Qv=R(()=>vn.height.value-vn.width.value/Ps>180),Fy=r_(Jt?document.body:null),Is=T3(),Wv=R(()=>{var t,s;return["INPUT","TEXTAREA"].includes(((t=Is.value)==null?void 0:t.tagName)||"")||((s=Is.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),Jv=R(()=>{var t;return["BUTTON","A"].includes(((t=Is.value)==null?void 0:t.tagName)||"")});Gt("slidev-camera","default");Gt("slidev-mic","default");const Sl=Gt("slidev-scale",0),dt=Gt("slidev-show-overview",!1),Vr=Gt("slidev-presenter-cursor",!0),Np=Gt("slidev-show-editor",!1);Gt("slidev-editor-width",Jt?window.innerWidth*.4:100);const Iy=fy(dt);function Fp(t,s,n,o=l=>l){return t*o(.5-s*(.5-n))}function Gv(t){return[-t[0],-t[1]]}function jt(t,s){return[t[0]+s[0],t[1]+s[1]]}function Ot(t,s){return[t[0]-s[0],t[1]-s[1]]}function qt(t,s){return[t[0]*s,t[1]*s]}function Kv(t,s){return[t[0]/s,t[1]/s]}function ro(t){return[t[1],-t[0]]}function Ip(t,s){return t[0]*s[0]+t[1]*s[1]}function Yv(t,s){return t[0]===s[0]&&t[1]===s[1]}function Zv(t){return Math.hypot(t[0],t[1])}function Xv(t){return t[0]*t[0]+t[1]*t[1]}function Mp(t,s){return Xv(Ot(t,s))}function My(t){return Kv(t,Zv(t))}function e8(t,s){return Math.hypot(t[1]-s[1],t[0]-s[0])}function ao(t,s,n){let o=Math.sin(n),l=Math.cos(n),r=t[0]-s[0],a=t[1]-s[1],i=r*l-a*o,c=r*o+a*l;return[i+s[0],c+s[1]]}function Na(t,s,n){return jt(t,qt(Ot(s,t),n))}function Up(t,s,n){return jt(t,qt(s,n))}var{min:Ln,PI:t8}=Math,qp=.275,io=t8+1e-4;function s8(t,s={}){let{size:n=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=ee=>ee,start:i={},end:c={},last:u=!1}=s,{cap:d=!0,easing:y=ee=>ee*(2-ee)}=i,{cap:f=!0,easing:h=ee=>--ee*ee*ee+1}=c;if(t.length===0||n<=0)return[];let m=t[t.length-1].runningLength,_=i.taper===!1?0:i.taper===!0?Math.max(n,m):i.taper,D=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,b=Math.pow(n*o,2),B=[],v=[],E=t.slice(0,10).reduce((ee,ce)=>{let Ee=ce.pressure;if(r){let Pe=Ln(1,ce.distance/n),Lt=Ln(1,1-Pe);Ee=Ln(1,ee+(Lt-ee)*(Pe*qp))}return(ee+Ee)/2},t[0].pressure),k=Fp(n,l,t[t.length-1].pressure,a),x,L=t[0].vector,T=t[0].point,M=T,se=T,ae=M,K=!1;for(let ee=0;ee<t.length;ee++){let{pressure:ce}=t[ee],{point:Ee,vector:Pe,distance:Lt,runningLength:ot}=t[ee];if(ee<t.length-1&&m-ot<3)continue;if(l){if(r){let te=Ln(1,Lt/n),Be=Ln(1,1-te);ce=Ln(1,E+(Be-E)*(te*qp))}k=Fp(n,l,ce,a)}else k=n/2;x===void 0&&(x=k);let _t=ot<_?y(ot/_):1,Yt=m-ot<D?h((m-ot)/D):1;k=Math.max(.01,k*Math.min(_t,Yt));let Js=(ee<t.length-1?t[ee+1]:t[ee]).vector,Rt=ee<t.length-1?Ip(Pe,Js):1,$=Ip(Pe,L)<0&&!K,Y=Rt!==null&&Rt<0;if($||Y){let te=qt(ro(L),k);for(let Be=1/13,Ne=0;Ne<=1;Ne+=Be)se=ao(Ot(Ee,te),Ee,io*Ne),B.push(se),ae=ao(jt(Ee,te),Ee,io*-Ne),v.push(ae);T=se,M=ae,Y&&(K=!0);continue}if(K=!1,ee===t.length-1){let te=qt(ro(Pe),k);B.push(Ot(Ee,te)),v.push(jt(Ee,te));continue}let X=qt(ro(Na(Js,Pe,Rt)),k);se=Ot(Ee,X),(ee<=1||Mp(T,se)>b)&&(B.push(se),T=se),ae=jt(Ee,X),(ee<=1||Mp(M,ae)>b)&&(v.push(ae),M=ae),E=ce,L=Pe}let de=t[0].point.slice(0,2),ge=t.length>1?t[t.length-1].point.slice(0,2):jt(t[0].point,[1,1]),_e=[],Oe=[];if(t.length===1){if(!(_||D)||u){let ee=Up(de,My(ro(Ot(de,ge))),-(x||k)),ce=[];for(let Ee=1/13,Pe=Ee;Pe<=1;Pe+=Ee)ce.push(ao(ee,de,io*2*Pe));return ce}}else{if(!(_||D&&t.length===1))if(d)for(let ce=1/13,Ee=ce;Ee<=1;Ee+=ce){let Pe=ao(v[0],de,io*Ee);_e.push(Pe)}else{let ce=Ot(B[0],v[0]),Ee=qt(ce,.5),Pe=qt(ce,.51);_e.push(Ot(de,Ee),Ot(de,Pe),jt(de,Pe),jt(de,Ee))}let ee=ro(Gv(t[t.length-1].vector));if(D||_&&t.length===1)Oe.push(ge);else if(f){let ce=Up(ge,ee,k);for(let Ee=1/29,Pe=Ee;Pe<1;Pe+=Ee)Oe.push(ao(ce,ge,io*3*Pe))}else Oe.push(jt(ge,qt(ee,k)),jt(ge,qt(ee,k*.99)),Ot(ge,qt(ee,k*.99)),Ot(ge,qt(ee,k)))}return B.concat(Oe,v.reverse(),_e)}function n8(t,s={}){var n;let{streamline:o=.5,size:l=16,last:r=!1}=s;if(t.length===0)return[];let a=.15+(1-o)*.85,i=Array.isArray(t[0])?t:t.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(i.length===2){let h=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(Na(i[0],h,m/4))}i.length===1&&(i=[...i,[...jt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,y=c[0],f=i.length-1;for(let h=1;h<i.length;h++){let m=r&&h===f?i[h].slice(0,2):Na(y.point,i[h],a);if(Yv(y.point,m))continue;let _=e8(m,y.point);if(d+=_,h<f&&!u){if(d<l)continue;u=!0}y={point:m,pressure:i[h][2]>=0?i[h][2]:.5,vector:My(Ot(y.point,m)),distance:_,runningLength:d},c.push(y)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function o8(t,s={}){return s8(n8(t,s),s)}var l8=()=>({events:{},emit(t,...s){let n=this.events[t]||[];for(let o=0,l=n.length;o<l;o++)n[o](...s)},on(t,s){var n;return(n=this.events[t])!=null&&n.push(s)||(this.events[t]=[s]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(l=>s!==l)}}});function Yl(t,s){return t-s}function r8(t){return t<0?-1:1}function Zl(t){return[Math.abs(t),r8(t)]}function Uy(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var a8=2,ms=a8,Jn=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var s;const n=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*o,y:(t.pageY-l.top)*o,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const r=l.matrixTransform((s=n.getScreenCTM())==null?void 0:s.inverse());return{x:r.x*o,y:r.y*o,pressure:t.pressure}}}createElement(t,s){const n=document.createElementNS("http://www.w3.org/2000/svg",t),o=s?{...this.brush,...s}:this.brush;return n.setAttribute("fill",o.fill??"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(t,s){this.el.setAttribute(t,typeof s=="string"?s:s.toFixed(ms))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},i8=class extends Jn{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const s=o8(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const n=s.reduce((o,[l,r],a,i)=>{const[c,u]=i[(a+1)%i.length];return o.push(l,r,(l+c)/2,(r+u)/2),o},["M",...s[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},c8=class extends Jn{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[s,n]=Zl(t.x-this.start.x),[o,l]=Zl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,o);s=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+s*n].sort(Yl),[i,c]=[this.start.y,this.start.y+o*l].sort(Yl);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function qy(t,s){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",s),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),n.appendChild(o),n}var p8=class extends Jn{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const s=Uy(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(qy(s,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${s})`),n}return this.el}onMove(t){if(!this.el)return!1;let{x:s,y:n}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(s=this.start.x+l*r,n=this.start.y+l):(s=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-n),this.attr("x2",s),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",n)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},u8=class extends Jn{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[s,n]=Zl(t.x-this.start.x),[o,l]=Zl(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,o);s=r,o=r}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-o),this.attr("width",s*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+s*n].sort(Yl),[i,c]=[this.start.y,this.start.y+o*l].sort(Yl);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function d8(t,s){const n=t.x-s.x,o=t.y-s.y;return n*n+o*o}function y8(t,s,n){let o=s.x,l=s.y,r=n.x-o,a=n.y-l;if(r!==0||a!==0){const i=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);i>1?(o=n.x,l=n.y):i>0&&(o+=r*i,l+=a*i)}return r=t.x-o,a=t.y-l,r*r+a*a}function f8(t,s){let n=t[0];const o=[n];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],d8(l,n)>s&&(o.push(l),n=l);return n!==l&&l&&o.push(l),o}function Fa(t,s,n,o,l){let r=o,a=0;for(let i=s+1;i<n;i++){const c=y8(t[i],t[s],t[n]);c>r&&(a=i,r=c)}r>o&&(a-s>1&&Fa(t,s,a,o,l),l.push(t[a]),n-a>1&&Fa(t,a,n,o,l))}function h8(t,s){const n=t.length-1,o=[t[0]];return Fa(t,0,n,s,o),o.push(t[n]),o}function jp(t,s,n=!1){if(t.length<=2)return t;const o=s!==void 0?s*s:1;return t=n?t:f8(t,o),t=h8(t,o),t}var m8=class extends Jn{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Uy();const s=qy(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=jp(this.points,1,!0),this.count=0),this.attr("d",Vp(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",Vp(jp(this.points,1,!0))),!t.getTotalLength()))}};function g8(t,s){const n=s.x-t.x,o=s.y-t.y;return{length:Math.sqrt(n**2+o**2),angle:Math.atan2(o,n)}}function zp(t,s,n,o){const l=s||t,r=n||t,a=.2,i=g8(l,r),c=i.angle+(o?Math.PI:0),u=i.length*a,d=t.x+Math.cos(c)*u,y=t.y+Math.sin(c)*u;return{x:d,y}}function _8(t,s,n){const o=zp(n[s-1],n[s-2],t),l=zp(t,n[s-1],n[s+1],!0);return`C ${o.x.toFixed(ms)},${o.y.toFixed(ms)} ${l.x.toFixed(ms)},${l.y.toFixed(ms)} ${t.x.toFixed(ms)},${t.y.toFixed(ms)}`}function Vp(t){return t.reduce((s,n,o,l)=>o===0?`M ${n.x.toFixed(ms)},${n.y.toFixed(ms)}`:`${s} ${_8(n,o,l)}`,"")}var v8=class extends Jn{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const s=(n,o)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const r=n[l];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),u=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:i,element:o||r})}}else r.children&&s(r.children,r)}};t&&s(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const n=this.pathFragments[s],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),t.push(s))}return t.length&&(this.pathFragments=this.pathFragments.filter((s,n)=>!t.includes(n))),t.length>0}lineLineIntersect(t,s){const n=t.x1,o=t.x2,l=s.x1,r=s.x2,a=t.y1,i=t.y2,c=s.y1,u=s.y2,d=(n-o)*(c-u)-(a-i)*(l-r),y=(n*i-a*o)*(l-r)-(n-o)*(l*u-c*r),f=(n*i-a*o)*(c-u)-(a-i)*(l*u-c*r),h=(m,_,D)=>m>=_&&m<=D?!0:m>=D&&m<=_;if(d===0)return!1;{const m={x:y/d,y:f/d};return h(m.x,n,o)&&h(m.y,a,i)&&h(m.x,l,r)&&h(m.y,c,u)}}};function b8(t){return{draw:new m8(t),stylus:new i8(t),line:new p8(t),rectangle:new u8(t),ellipse:new c8(t),eraseLine:new v8(t)}}var A8=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=l8(),this._models=b8(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(s)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,s){return this._emitter.on(t,s)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const s=this.model._eventUp(t);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function D8(t){return new A8(t)}const Ia=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],ns=Gt("slidev-drawing-enabled",!1),FR=Gt("slidev-drawing-pinned",!1),C8=H(!1),B8=H(!1),E8=H(!1),Uo=H(!1),un=K0(Gt("slidev-drawing-brush",{color:Ia[0],size:4,mode:"stylus"})),Hp=H("stylus"),jy=R(()=>xe.drawings.syncAll||bt.value);let qo=!1;const co=R({get(){return Hp.value},set(t){Hp.value=t,t==="arrow"?(un.mode="line",un.arrowEnd=!0):(un.mode=t,un.arrowEnd=!1)}}),w8=Ve({brush:un,acceptsInputTypes:R(()=>ns.value&&(!xe.drawings.presenterOnly||bt.value)?void 0:["pen"]),coordinateTransform:!1}),mt=pr(D8(w8));function k8(){mt.clear(),jy.value&&py(We.value,"")}function Ii(){var t;B8.value=mt.canRedo(),C8.value=mt.canUndo(),E8.value=!!((t=mt.el)!=null&&t.children.length)}function S8(t){qo=!0;const s=Gl[t||We.value];s!=null?mt.load(s):mt.clear(),Ii(),qo=!1}mt.on("changed",()=>{if(Ii(),!qo){const t=mt.dump(),s=We.value;(Gl[s]||"")!==t&&jy.value&&py(s,mt.dump())}});Q0(t=>{qo=!0,t[We.value]!=null&&mt.load(t[We.value]||""),qo=!1,Ii()});rt(()=>{ve(We,()=>{mt.mounted&&S8()},{immediate:!0})});mt.on("start",()=>Uo.value=!0);mt.on("end",()=>Uo.value=!1);window.addEventListener("keydown",t=>{if(!ns.value)return;const s=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let n=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?mt.redo():mt.undo():t.code==="Escape"?ns.value=!1:t.code==="KeyL"&&s?co.value="line":t.code==="KeyA"&&s?co.value="arrow":t.code==="KeyS"&&s?co.value="stylus":t.code==="KeyR"&&s?co.value="rectangle":t.code==="KeyE"&&s?co.value="ellipse":t.code==="KeyC"&&s?k8():t.code.startsWith("Digit")&&s&&+t.code[5]<=Ia.length?un.color=Ia[+t.code[5]-1]:n=!1,n&&(t.preventDefault(),t.stopPropagation())},!1);function Ye(...t){return R(()=>t.every(s=>He(s)))}function Et(t){return R(()=>!He(t))}const Qp=Q3(),Hr=Gt("slidev-color-schema","auto"),Ma=R(()=>xe.colorSchema!=="auto"),Ar=R({get(){return Ma.value?xe.colorSchema==="dark":Hr.value==="auto"?Qp.value:Hr.value==="dark"},set(t){Ma.value||(Hr.value=t===Qp.value?"auto":t?"dark":"light")}}),zy=fy(Ar);Jt&&ve(Ar,t=>{const s=document.querySelector("html");s.classList.toggle("dark",t),s.classList.toggle("light",!t)},{immediate:!0});const xl=H(1),Tl=R(()=>Ke.length),xt=H(0),Mi=H(0);function x8(){xt.value>xl.value&&(xt.value-=1)}function T8(){xt.value<Tl.value&&(xt.value+=1)}function L8(){if(xt.value>xl.value){let t=xt.value-Mi.value;t<xl.value&&(t=xl.value),xt.value=t}}function R8(){if(xt.value<Tl.value){let t=xt.value+Mi.value;t>Tl.value&&(t=Tl.value),xt.value=t}}function $8(){const{escape:t,space:s,shift:n,left:o,right:l,up:r,down:a,enter:i,d:c,g:u,o:d}=Ny;let y=[{name:"next_space",key:Ye(s,Et(n)),fn:Ms,autoRepeat:!0},{name:"prev_space",key:Ye(s,n),fn:Us,autoRepeat:!0},{name:"next_right",key:Ye(l,Et(n),Et(dt)),fn:Ms,autoRepeat:!0},{name:"prev_left",key:Ye(o,Et(n),Et(dt)),fn:Us,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ms,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Us,autoRepeat:!0},{name:"next_down",key:Ye(a,Et(dt)),fn:zo,autoRepeat:!0},{name:"prev_up",key:Ye(r,Et(dt)),fn:()=>Vo(!1),autoRepeat:!0},{name:"next_shift",key:Ye(l,n),fn:zo,autoRepeat:!0},{name:"prev_shift",key:Ye(o,n),fn:()=>Vo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ye(c,Et(ns)),fn:zy},{name:"toggle_overview",key:Ye(d,Et(ns)),fn:Iy},{name:"hide_overview",key:Ye(t,Et(ns)),fn:()=>dt.value=!1},{name:"goto",key:Ye(u,Et(ns)),fn:()=>Pn.value=!Pn.value},{name:"next_overview",key:Ye(l,dt),fn:T8},{name:"prev_overview",key:Ye(o,dt),fn:x8},{name:"up_overview",key:Ye(r,dt),fn:L8},{name:"down_overview",key:Ye(a,dt),fn:R8},{name:"goto_from_overview",key:Ye(i,dt),fn:()=>{Hn(xt.value),dt.value=!1}}];const f=new Set(y.map(m=>m.name));if(y.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return y}const Vy=Ye(Et(Wv),Et(Jv),Hv);function P8(t,s,n=!1){typeof t=="string"&&(t=Ny[t]);const o=Ye(t,Vy);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}n&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),s()};return ve(o,a,{flush:"sync"})}function O8(t,s){return x3(t,n=>{Vy.value&&(n.repeat||s())})}function N8(){const t=$8();new Map(t.map(n=>[n.key,n])).forEach(n=>{n.fn&&P8(n.key,n.fn,n.autoRepeat)}),O8("f",()=>Fy.toggle())}const F8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I8=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),M8=[I8];function U8(t,s){return w(),J("svg",F8,M8)}const q8={name:"carbon-close",render:U8};function Ui(t,s=""){var l,r;const n=["slidev-page",s],o=(r=(l=t==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&n.push(`slidev-page-${o}`),n.filter(Boolean).join(" ")}const j8=Ce({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const s=t;I(j);const n=H(),o=o_(n),l=R(()=>s.width?s.width:o.width.value),r=R(()=>s.width?s.width/Ps:o.height.value);s.width&&En(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${r.value}px`)});const a=R(()=>l.value/r.value),i=R(()=>s.scale&&!Vn.value?s.scale:a.value<Ps?l.value/Os:r.value*Ps/Os),c=R(()=>({height:`${Ri}px`,width:`${Os}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),u=R(()=>({"select-none":!xe.selectable}));return kt(ay,i),(d,y)=>(w(),J("div",{id:"slide-container",ref_key:"root",ref:n,class:Ue(u.value)},[e("div",{id:"slide-content",style:et(c.value)},[Qe(d.$slots,"default")],4),Qe(d.$slots,"controls")],2))}});const Q=(t,s)=>{const n=t.__vccOpts||t;for(const[o,l]of s)n[o]=l;return n},Hy=Q(j8,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/SlideContainer.vue"]]),qi=Ce({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:s}){const n=ss(t,"clicks",s),o=ss(t,"clicksElements",s),l=ss(t,"clicksDisabled",s),r=ss(t,"clicksOrderMap",s);o.value.length=0,kt(L0,t.route),kt(R0,t.context),kt(Ao,n),kt(Do,l),kt(ln,o),kt(Ea,r)},render(){var t,s;return this.$props.is?tt(this.$props.is):(s=(t=this.$slots)==null?void 0:t.default)==null?void 0:s.call(t)}}),z8=["innerHTML"],V8=Ce({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return I(j),(s,n)=>O(Gl)[s.page]?(w(),J("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:O(Gl)[s.page]},null,8,z8)):Ae("v-if",!0)}}),Qy=Q(V8,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),H8=Object.freeze(Object.defineProperty({__proto__:null,default:Qy},Symbol.toStringTag,{value:"Module"})),Q8={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},W8=["onClick"],Qr=4*16*2,Wp=2*16,J8=Ce({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:s}){const n=t;I(j);const o=ss(n,"modelValue",s);function l(){o.value=!1}function r(y){Hn(y),l()}function a(y){return y===xt.value}const i=Oa.smaller("xs"),c=Oa.smaller("sm"),u=R(()=>i.value?vn.width.value-Qr:c.value?(vn.width.value-Qr-Wp)/2:300),d=R(()=>Math.floor((vn.width.value-Qr)/(u.value+Wp)));return En(()=>{xt.value=We.value,Mi.value=d.value}),(y,f)=>{const h=q8;return w(),J(Le,null,[bd(e("div",Q8,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:et(`grid-template-columns: repeat(auto-fit,minmax(${u.value}px,1fr))`)},[(w(!0),J(Le,null,Wn(O(Ke),(m,_)=>(w(),J("div",{key:m.path,class:"relative"},[e("div",{class:Ue(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(_+1),"border-gray-400":!a(_+1)}]),style:et(O($i)),onClick:D=>r(+m.path)},[(w(),V(Hy,{key:m.path,width:u.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:C(()=>[m!=null&&m.component?(w(),V(O(qi),{key:0,is:m.component,"clicks-disabled":!0,class:Ue(O(Ui)(m)),route:m,context:"overview"},null,8,["is","class","route"])):Ae("v-if",!0),P(Qy,{page:+m.path},null,8,["page"])]),_:2},1032,["width"]))],14,W8),e("div",{class:"absolute top-0 opacity-50",style:et(`left: ${u.value+5}px`)},Qt(_+1),5)]))),128))],4)],512),[[Kd,O(o)]]),O(o)?(w(),J("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[P(h)])):Ae("v-if",!0)],64)}}});const G8=Q(J8,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),K8="/kaigionrails-postgresql-as-seen-by-rubyists/assets/logo-b72bde5d.png",Y8={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Z8=Ce({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:s}){const n=t;I(j);const o=ss(n,"modelValue",s);function l(){o.value=!1}return(r,a)=>(w(),V(Dd,null,[O(o)?(w(),J("div",Y8,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),e("div",{class:Ue(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ main"},[Qe(r.$slots,"default")],2)])):Ae("v-if",!0)],1024))}}),X8=Q(Z8,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/Modal.vue"]]),eb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},tb=["innerHTML"],sb=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:K8,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),p("dev ")])])],-1),nb=Ce({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:s}){const n=t;I(j);const o=ss(n,"modelValue",s),l=R(()=>typeof xe.info=="string");return(r,a)=>(w(),V(X8,{modelValue:O(o),"onUpdate:modelValue":a[0]||(a[0]=i=>Te(o)?o.value=i:null),class:"px-6 py-4"},{default:C(()=>[e("div",eb,[l.value?(w(),J("div",{key:0,class:"mb-4",innerHTML:O(xe).info},null,8,tb)):Ae("v-if",!0),sb])]),_:1},8,["modelValue"]))}});const ob=Q(nb,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function vs(t){return Array.isArray?Array.isArray(t):Gy(t)==="[object Array]"}const lb=1/0;function rb(t){if(typeof t=="string")return t;let s=t+"";return s=="0"&&1/t==-lb?"-0":s}function ab(t){return t==null?"":rb(t)}function os(t){return typeof t=="string"}function Wy(t){return typeof t=="number"}function ib(t){return t===!0||t===!1||cb(t)&&Gy(t)=="[object Boolean]"}function Jy(t){return typeof t=="object"}function cb(t){return Jy(t)&&t!==null}function St(t){return t!=null}function Wr(t){return!t.trim().length}function Gy(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const pb="Incorrect 'index' type",ub=t=>`Invalid value for key ${t}`,db=t=>`Pattern length exceeds max of ${t}.`,yb=t=>`Missing ${t} property in key`,fb=t=>`Property 'weight' in key '${t}' must be a positive integer`,Jp=Object.prototype.hasOwnProperty;class hb{constructor(s){this._keys=[],this._keyMap={};let n=0;s.forEach(o=>{let l=Ky(o);n+=l.weight,this._keys.push(l),this._keyMap[l.id]=l,n+=l.weight}),this._keys.forEach(o=>{o.weight/=n})}get(s){return this._keyMap[s]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ky(t){let s=null,n=null,o=null,l=1,r=null;if(os(t)||vs(t))o=t,s=Gp(t),n=Ua(t);else{if(!Jp.call(t,"name"))throw new Error(yb("name"));const a=t.name;if(o=a,Jp.call(t,"weight")&&(l=t.weight,l<=0))throw new Error(fb(a));s=Gp(a),n=Ua(a),r=t.getFn}return{path:s,id:n,weight:l,src:o,getFn:r}}function Gp(t){return vs(t)?t:t.split(".")}function Ua(t){return vs(t)?t.join("."):t}function mb(t,s){let n=[],o=!1;const l=(r,a,i)=>{if(St(r))if(!a[i])n.push(r);else{let c=a[i];const u=r[c];if(!St(u))return;if(i===a.length-1&&(os(u)||Wy(u)||ib(u)))n.push(ab(u));else if(vs(u)){o=!0;for(let d=0,y=u.length;d<y;d+=1)l(u[d],a,i+1)}else a.length&&l(u,a,i+1)}};return l(t,os(s)?s.split("."):s,0),o?n:n[0]}const gb={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_b={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,s)=>t.score===s.score?t.idx<s.idx?-1:1:t.score<s.score?-1:1},vb={location:0,threshold:.6,distance:100},bb={useExtendedSearch:!1,getFn:mb,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var fe={..._b,...gb,...vb,...bb};const Ab=/[^ ]+/g;function Db(t=1,s=3){const n=new Map,o=Math.pow(10,s);return{get(l){const r=l.match(Ab).length;if(n.has(r))return n.get(r);const a=1/Math.pow(r,.5*t),i=parseFloat(Math.round(a*o)/o);return n.set(r,i),i},clear(){n.clear()}}}class ji{constructor({getFn:s=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){this.norm=Db(n,3),this.getFn=s,this.isCreated=!1,this.setIndexRecords()}setSources(s=[]){this.docs=s}setIndexRecords(s=[]){this.records=s}setKeys(s=[]){this.keys=s,this._keysMap={},s.forEach((n,o)=>{this._keysMap[n.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,os(this.docs[0])?this.docs.forEach((s,n)=>{this._addString(s,n)}):this.docs.forEach((s,n)=>{this._addObject(s,n)}),this.norm.clear())}add(s){const n=this.size();os(s)?this._addString(s,n):this._addObject(s,n)}removeAt(s){this.records.splice(s,1);for(let n=s,o=this.size();n<o;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(s,n){return s[this._keysMap[n]]}size(){return this.records.length}_addString(s,n){if(!St(s)||Wr(s))return;let o={v:s,i:n,n:this.norm.get(s)};this.records.push(o)}_addObject(s,n){let o={i:n,$:{}};this.keys.forEach((l,r)=>{let a=l.getFn?l.getFn(s):this.getFn(s,l.path);if(St(a)){if(vs(a)){let i=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if(St(d))if(os(d)&&!Wr(d)){let y={v:d,i:u,n:this.norm.get(d)};i.push(y)}else vs(d)&&d.forEach((y,f)=>{c.push({nestedArrIndex:f,value:y})})}o.$[r]=i}else if(os(a)&&!Wr(a)){let i={v:a,n:this.norm.get(a)};o.$[r]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function Yy(t,s,{getFn:n=fe.getFn,fieldNormWeight:o=fe.fieldNormWeight}={}){const l=new ji({getFn:n,fieldNormWeight:o});return l.setKeys(t.map(Ky)),l.setSources(s),l.create(),l}function Cb(t,{getFn:s=fe.getFn,fieldNormWeight:n=fe.fieldNormWeight}={}){const{keys:o,records:l}=t,r=new ji({getFn:s,fieldNormWeight:n});return r.setKeys(o),r.setIndexRecords(l),r}function bl(t,{errors:s=0,currentLocation:n=0,expectedLocation:o=0,distance:l=fe.distance,ignoreLocation:r=fe.ignoreLocation}={}){const a=s/t.length;if(r)return a;const i=Math.abs(o-n);return l?a+i/l:i?1:a}function Bb(t=[],s=fe.minMatchCharLength){let n=[],o=-1,l=-1,r=0;for(let a=t.length;r<a;r+=1){let i=t[r];i&&o===-1?o=r:!i&&o!==-1&&(l=r-1,l-o+1>=s&&n.push([o,l]),o=-1)}return t[r-1]&&r-o>=s&&n.push([o,r-1]),n}const an=32;function Eb(t,s,n,{location:o=fe.location,distance:l=fe.distance,threshold:r=fe.threshold,findAllMatches:a=fe.findAllMatches,minMatchCharLength:i=fe.minMatchCharLength,includeMatches:c=fe.includeMatches,ignoreLocation:u=fe.ignoreLocation}={}){if(s.length>an)throw new Error(db(an));const d=s.length,y=t.length,f=Math.max(0,Math.min(o,y));let h=r,m=f;const _=i>1||c,D=_?Array(y):[];let b;for(;(b=t.indexOf(s,m))>-1;){let L=bl(s,{currentLocation:b,expectedLocation:f,distance:l,ignoreLocation:u});if(h=Math.min(L,h),m=b+d,_){let T=0;for(;T<d;)D[b+T]=1,T+=1}}m=-1;let B=[],v=1,E=d+y;const k=1<<d-1;for(let L=0;L<d;L+=1){let T=0,M=E;for(;T<M;)bl(s,{errors:L,currentLocation:f+M,expectedLocation:f,distance:l,ignoreLocation:u})<=h?T=M:E=M,M=Math.floor((E-T)/2+T);E=M;let se=Math.max(1,f-M+1),ae=a?y:Math.min(f+M,y)+d,K=Array(ae+2);K[ae+1]=(1<<L)-1;for(let ge=ae;ge>=se;ge-=1){let _e=ge-1,Oe=n[t.charAt(_e)];if(_&&(D[_e]=+!!Oe),K[ge]=(K[ge+1]<<1|1)&Oe,L&&(K[ge]|=(B[ge+1]|B[ge])<<1|1|B[ge+1]),K[ge]&k&&(v=bl(s,{errors:L,currentLocation:_e,expectedLocation:f,distance:l,ignoreLocation:u}),v<=h)){if(h=v,m=_e,m<=f)break;se=Math.max(1,2*f-m)}}if(bl(s,{errors:L+1,currentLocation:f,expectedLocation:f,distance:l,ignoreLocation:u})>h)break;B=K}const x={isMatch:m>=0,score:Math.max(.001,v)};if(_){const L=Bb(D,i);L.length?c&&(x.indices=L):x.isMatch=!1}return x}function wb(t){let s={};for(let n=0,o=t.length;n<o;n+=1){const l=t.charAt(n);s[l]=(s[l]||0)|1<<o-n-1}return s}class Zy{constructor(s,{location:n=fe.location,threshold:o=fe.threshold,distance:l=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:i=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){if(this.options={location:n,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?s:s.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(f,h)=>{this.chunks.push({pattern:f,alphabet:wb(f),startIndex:h})},y=this.pattern.length;if(y>an){let f=0;const h=y%an,m=y-h;for(;f<m;)d(this.pattern.substr(f,an),f),f+=an;if(h){const _=y-an;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(s){const{isCaseSensitive:n,includeMatches:o}=this.options;if(n||(s=s.toLowerCase()),this.pattern===s){let m={isMatch:!0,score:0};return o&&(m.indices=[[0,s.length-1]]),m}const{location:l,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],y=0,f=!1;this.chunks.forEach(({pattern:m,alphabet:_,startIndex:D})=>{const{isMatch:b,score:B,indices:v}=Eb(s,m,_,{location:l+D,distance:r,threshold:a,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});b&&(f=!0),y+=B,b&&v&&(d=[...d,...v])});let h={isMatch:f,score:f?y/this.chunks.length:1};return f&&o&&(h.indices=d),h}}class Qs{constructor(s){this.pattern=s}static isMultiMatch(s){return Kp(s,this.multiRegex)}static isSingleMatch(s){return Kp(s,this.singleRegex)}search(){}}function Kp(t,s){const n=t.match(s);return n?n[1]:null}class kb extends Qs{constructor(s){super(s)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(s){const n=s===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Sb extends Qs{constructor(s){super(s)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(s){const o=s.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,s.length-1]}}}class xb extends Qs{constructor(s){super(s)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(s){const n=s.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Tb extends Qs{constructor(s){super(s)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(s){const n=!s.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,s.length-1]}}}class Lb extends Qs{constructor(s){super(s)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(s){const n=s.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[s.length-this.pattern.length,s.length-1]}}}class Rb extends Qs{constructor(s){super(s)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(s){const n=!s.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,s.length-1]}}}class Xy extends Qs{constructor(s,{location:n=fe.location,threshold:o=fe.threshold,distance:l=fe.distance,includeMatches:r=fe.includeMatches,findAllMatches:a=fe.findAllMatches,minMatchCharLength:i=fe.minMatchCharLength,isCaseSensitive:c=fe.isCaseSensitive,ignoreLocation:u=fe.ignoreLocation}={}){super(s),this._bitapSearch=new Zy(s,{location:n,threshold:o,distance:l,includeMatches:r,findAllMatches:a,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(s){return this._bitapSearch.searchIn(s)}}class ef extends Qs{constructor(s){super(s)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(s){let n=0,o;const l=[],r=this.pattern.length;for(;(o=s.indexOf(this.pattern,n))>-1;)n=o+r,l.push([o,n-1]);const a=!!l.length;return{isMatch:a,score:a?0:1,indices:l}}}const qa=[kb,ef,xb,Tb,Rb,Lb,Sb,Xy],Yp=qa.length,$b=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Pb="|";function Ob(t,s={}){return t.split(Pb).map(n=>{let o=n.trim().split($b).filter(r=>r&&!!r.trim()),l=[];for(let r=0,a=o.length;r<a;r+=1){const i=o[r];let c=!1,u=-1;for(;!c&&++u<Yp;){const d=qa[u];let y=d.isMultiMatch(i);y&&(l.push(new d(y,s)),c=!0)}if(!c)for(u=-1;++u<Yp;){const d=qa[u];let y=d.isSingleMatch(i);if(y){l.push(new d(y,s));break}}}return l})}const Nb=new Set([Xy.type,ef.type]);class Fb{constructor(s,{isCaseSensitive:n=fe.isCaseSensitive,includeMatches:o=fe.includeMatches,minMatchCharLength:l=fe.minMatchCharLength,ignoreLocation:r=fe.ignoreLocation,findAllMatches:a=fe.findAllMatches,location:i=fe.location,threshold:c=fe.threshold,distance:u=fe.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:o,minMatchCharLength:l,findAllMatches:a,ignoreLocation:r,location:i,threshold:c,distance:u},this.pattern=n?s:s.toLowerCase(),this.query=Ob(this.pattern,this.options)}static condition(s,n){return n.useExtendedSearch}searchIn(s){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:l}=this.options;s=l?s:s.toLowerCase();let r=0,a=[],i=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];a.length=0,r=0;for(let y=0,f=d.length;y<f;y+=1){const h=d[y],{isMatch:m,indices:_,score:D}=h.search(s);if(m){if(r+=1,i+=D,o){const b=h.constructor.type;Nb.has(b)?a=[...a,..._]:a.push(_)}}else{i=0,r=0,a.length=0;break}}if(r){let y={isMatch:!0,score:i/r};return o&&(y.indices=a),y}}return{isMatch:!1,score:1}}}const ja=[];function Ib(...t){ja.push(...t)}function za(t,s){for(let n=0,o=ja.length;n<o;n+=1){let l=ja[n];if(l.condition(t,s))return new l(t,s)}return new Zy(t,s)}const Xl={AND:"$and",OR:"$or"},Va={PATH:"$path",PATTERN:"$val"},Ha=t=>!!(t[Xl.AND]||t[Xl.OR]),Mb=t=>!!t[Va.PATH],Ub=t=>!vs(t)&&Jy(t)&&!Ha(t),Zp=t=>({[Xl.AND]:Object.keys(t).map(s=>({[s]:t[s]}))});function tf(t,s,{auto:n=!0}={}){const o=l=>{let r=Object.keys(l);const a=Mb(l);if(!a&&r.length>1&&!Ha(l))return o(Zp(l));if(Ub(l)){const c=a?l[Va.PATH]:r[0],u=a?l[Va.PATTERN]:l[c];if(!os(u))throw new Error(ub(c));const d={keyId:Ua(c),pattern:u};return n&&(d.searcher=za(u,s)),d}let i={children:[],operator:r[0]};return r.forEach(c=>{const u=l[c];vs(u)&&u.forEach(d=>{i.children.push(o(d))})}),i};return Ha(t)||(t=Zp(t)),o(t)}function qb(t,{ignoreFieldNorm:s=fe.ignoreFieldNorm}){t.forEach(n=>{let o=1;n.matches.forEach(({key:l,norm:r,score:a})=>{const i=l?l.weight:null;o*=Math.pow(a===0&&i?Number.EPSILON:a,(i||1)*(s?1:r))}),n.score=o})}function jb(t,s){const n=t.matches;s.matches=[],St(n)&&n.forEach(o=>{if(!St(o.indices)||!o.indices.length)return;const{indices:l,value:r}=o;let a={indices:l,value:r};o.key&&(a.key=o.key.src),o.idx>-1&&(a.refIndex=o.idx),s.matches.push(a)})}function zb(t,s){s.score=t.score}function Vb(t,s,{includeMatches:n=fe.includeMatches,includeScore:o=fe.includeScore}={}){const l=[];return n&&l.push(jb),o&&l.push(zb),t.map(r=>{const{idx:a}=r,i={item:s[a],refIndex:a};return l.length&&l.forEach(c=>{c(r,i)}),i})}class Gn{constructor(s,n={},o){this.options={...fe,...n},this.options.useExtendedSearch,this._keyStore=new hb(this.options.keys),this.setCollection(s,o)}setCollection(s,n){if(this._docs=s,n&&!(n instanceof ji))throw new Error(pb);this._myIndex=n||Yy(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(s){St(s)&&(this._docs.push(s),this._myIndex.add(s))}remove(s=()=>!1){const n=[];for(let o=0,l=this._docs.length;o<l;o+=1){const r=this._docs[o];s(r,o)&&(this.removeAt(o),o-=1,l-=1,n.push(r))}return n}removeAt(s){this._docs.splice(s,1),this._myIndex.removeAt(s)}getIndex(){return this._myIndex}search(s,{limit:n=-1}={}){const{includeMatches:o,includeScore:l,shouldSort:r,sortFn:a,ignoreFieldNorm:i}=this.options;let c=os(s)?os(this._docs[0])?this._searchStringList(s):this._searchObjectList(s):this._searchLogical(s);return qb(c,{ignoreFieldNorm:i}),r&&c.sort(a),Wy(n)&&n>-1&&(c=c.slice(0,n)),Vb(c,this._docs,{includeMatches:o,includeScore:l})}_searchStringList(s){const n=za(s,this.options),{records:o}=this._myIndex,l=[];return o.forEach(({v:r,i:a,n:i})=>{if(!St(r))return;const{isMatch:c,score:u,indices:d}=n.searchIn(r);c&&l.push({item:r,idx:a,matches:[{score:u,value:r,norm:i,indices:d}]})}),l}_searchLogical(s){const n=tf(s,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:y,searcher:f}=i,h=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(c,y),searcher:f});return h&&h.length?[{idx:u,item:c,matches:h}]:[]}const d=[];for(let y=0,f=i.children.length;y<f;y+=1){const h=i.children[y],m=o(h,c,u);if(m.length)d.push(...m);else if(i.operator===Xl.AND)return[]}return d},l=this._myIndex.records,r={},a=[];return l.forEach(({$:i,i:c})=>{if(St(i)){let u=o(n,i,c);u.length&&(r[c]||(r[c]={idx:c,item:i,matches:[]},a.push(r[c])),u.forEach(({matches:d})=>{r[c].matches.push(...d)}))}}),a}_searchObjectList(s){const n=za(s,this.options),{keys:o,records:l}=this._myIndex,r=[];return l.forEach(({$:a,i})=>{if(!St(a))return;let c=[];o.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:n}))}),c.length&&r.push({idx:i,item:a,matches:c})}),r}_findMatches({key:s,value:n,searcher:o}){if(!St(n))return[];let l=[];if(vs(n))n.forEach(({v:r,i:a,n:i})=>{if(!St(r))return;const{isMatch:c,score:u,indices:d}=o.searchIn(r);c&&l.push({score:u,key:s,value:r,idx:a,norm:i,indices:d})});else{const{v:r,n:a}=n,{isMatch:i,score:c,indices:u}=o.searchIn(r);i&&l.push({score:c,key:s,value:r,norm:a,indices:u})}return l}}Gn.version="6.6.2";Gn.createIndex=Yy;Gn.parseIndex=Cb;Gn.config=fe;Gn.parseQuery=tf;Ib(Fb);const Hb={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Qb=["value","disabled","onKeydown"],Wb=["border","onClick"],Jb={"w-4":"","text-right":"",op50:"","text-sm":""},Gb=Ce({__name:"Goto",setup(t){I(j);const s=H(),n=H(),o=H(),l=H(),r=H(""),a=H(0);function i(v){return v!=null}const c=R(()=>new Gn(Ke.map(v=>{var E;return(E=v.meta)==null?void 0:E.slide}).filter(i),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),u=R(()=>r.value.startsWith("/")?r.value.substring(1):r.value),d=R(()=>c.value.search(u.value).map(v=>v.item)),y=R(()=>!!d.value.length);function f(){if(y.value){const v=d.value.at(a.value||0);v&&Hn(v.no)}h()}function h(){r.value="",Pn.value=!1}function m(v){v.preventDefault(),a.value++,a.value>=d.value.length&&(a.value=0),D()}function _(v){v.preventDefault(),a.value--,a.value<=-2&&(a.value=d.value.length-1),D()}function D(){var E;const v=(E=l.value)==null?void 0:E[a.value];v&&o.value&&(v.offsetTop+v.offsetHeight>o.value.offsetHeight+o.value.scrollTop?o.value.scrollTo({behavior:"smooth",top:v.offsetTop+v.offsetHeight-o.value.offsetHeight+1}):v.offsetTop<o.value.scrollTop&&o.value.scrollTo({behavior:"smooth",top:v.offsetTop}))}function b(v){a.value=0,r.value=v.target.value}function B(v){Hn(v),h()}return ve(Pn,async v=>{var E;v?(r.value="",a.value=0,setTimeout(()=>{var k;return(k=n.value)==null?void 0:k.focus()},0)):(E=n.value)==null||E.blur()}),ve(Is,()=>{var v;(v=s.value)!=null&&v.contains(Is.value)||h()}),(v,E)=>(w(),J("div",{id:"slidev-goto-dialog",ref_key:"container",ref:s,class:Ue(["fixed right-5 transition-all",O(Pn)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[e("div",Hb,[e("input",{id:"slidev-goto-input",ref_key:"input",ref:n,value:r.value,type:"text",disabled:!O(Pn),class:Ue(["outline-none bg-transparent",{"text-red-400":!y.value&&r.value}]),placeholder:"Goto...",onKeydown:[yl(f,["enter"]),yl(h,["escape"]),yl(m,["down"]),yl(_,["up"])],onInput:b},null,42,Qb)]),d.value.length>0?(w(),J("ul",{key:0,ref_key:"list",ref:o,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(w(!0),J(Le,null,Wn(d.value,(k,x)=>(w(),J("li",{ref_for:!0,ref_key:"items",ref:l,key:k.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:x===0?"":"t main",class:Ue(a.value===x?"bg-active op100":"op80"),onClick:R1(L=>B(k.no),["stop"])},[e("div",Jb,Qt(k.no),1),p(" "+Qt(k.title),1)],10,Wb))),128))],512)):Ae("v-if",!0)],2))}});const Kb=Q(Gb,[["__scopeId","data-v-f5ee02a7"],["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/Goto.vue"]]),Yb=Ce({__name:"Controls",setup(t){I(j);const s=as(),n=as();return(o,l)=>(w(),J(Le,null,[P(G8,{modelValue:O(dt),"onUpdate:modelValue":l[0]||(l[0]=r=>Te(dt)?dt.value=r:null)},null,8,["modelValue"]),P(Kb),s.value?(w(),V(O(s),{key:0})):Ae("v-if",!0),n.value?(w(),V(O(n),{key:1,modelValue:O(zr),"onUpdate:modelValue":l[1]||(l[1]=r=>Te(zr)?zr.value=r:null)},null,8,["modelValue"])):Ae("v-if",!0),O(xe).info?(w(),V(ob,{key:2,modelValue:O(Eo),"onUpdate:modelValue":l[2]||(l[2]=r=>Te(Eo)?Eo.value=r:null)},null,8,["modelValue"])):Ae("v-if",!0)],64))}}),Zb=Q(Yb,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/Controls.vue"]]),Xb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e5=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),t5=[e5];function s5(t,s){return w(),J("svg",Xb,t5)}const n5={name:"carbon-settings-adjust",render:s5},o5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l5=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),r5=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),a5=[l5,r5];function i5(t,s){return w(),J("svg",o5,a5)}const c5={name:"carbon-information",render:i5},p5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u5=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),d5=[u5];function y5(t,s){return w(),J("svg",p5,d5)}const f5={name:"carbon-download",render:y5},h5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m5=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),g5=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),_5=[m5,g5];function v5(t,s){return w(),J("svg",h5,_5)}const b5={name:"carbon-user-speaker",render:v5},A5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D5=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),C5=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),B5=[D5,C5];function E5(t,s){return w(),J("svg",A5,B5)}const w5={name:"carbon-presentation-file",render:E5},k5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S5=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),x5=[S5];function T5(t,s){return w(),J("svg",k5,x5)}const L5={name:"carbon-pen",render:T5},R5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},$5=e("g",{fill:"currentColor"},[e("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),e("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),P5=[$5];function O5(t,s){return w(),J("svg",R5,P5)}const N5={name:"ph-cursor-duotone",render:O5},F5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},I5=e("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),M5=[I5];function U5(t,s){return w(),J("svg",F5,M5)}const sf={name:"ph-cursor-fill",render:U5},q5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j5=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),z5=[j5];function V5(t,s){return w(),J("svg",q5,z5)}const H5={name:"carbon-sun",render:V5},Q5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W5=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),J5=[W5];function G5(t,s){return w(),J("svg",Q5,J5)}const K5={name:"carbon-moon",render:G5},Y5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z5=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),X5=[Z5];function eA(t,s){return w(),J("svg",Y5,X5)}const tA={name:"carbon-apps",render:eA},sA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nA=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),oA=[nA];function lA(t,s){return w(),J("svg",sA,oA)}const rA={name:"carbon-arrow-right",render:lA},aA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iA=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),cA=[iA];function pA(t,s){return w(),J("svg",aA,cA)}const uA={name:"carbon-arrow-left",render:pA},dA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yA=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),fA=[yA];function hA(t,s){return w(),J("svg",dA,fA)}const mA={name:"carbon-maximize",render:hA},gA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_A=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),vA=[_A];function bA(t,s){return w(),J("svg",gA,vA)}const AA={name:"carbon-minimize",render:bA},DA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CA=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),BA=[CA];function EA(t,s){return w(),J("svg",DA,BA)}const wA={name:"carbon-checkmark",render:EA},kA={class:"select-list"},SA={class:"title"},xA={class:"items"},TA=["onClick"],LA=Ce({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:s}){const n=t;I(j);const o=ss(n,"modelValue",s,{passive:!0});return(l,r)=>{const a=wA;return w(),J("div",kA,[e("div",SA,Qt(t.title),1),e("div",xA,[(w(!0),J(Le,null,Wn(t.items,i=>(w(),J("div",{key:i.value,class:Ue(["item",{active:O(o)===i.value}]),onClick:()=>{var c;o.value=i.value,(c=i.onClick)==null||c.call(i)}},[P(a,{class:Ue(["text-green-500",{"opacity-0":O(o)!==i.value}])},null,8,["class"]),p(" "+Qt(i.display||i.value),1)],10,TA))),128))])])}}});const RA=Q(LA,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/SelectList.vue"]]),$A={class:"text-sm"},PA=Ce({__name:"Settings",setup(t){I(j);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(w(),J("div",$A,[P(RA,{modelValue:O(Sl),"onUpdate:modelValue":o[0]||(o[0]=l=>Te(Sl)?Sl.value=l:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),OA=Q(PA,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/Settings.vue"]]),NA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},FA=Ce({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:s}){const n=t;I(j);const o=ss(n,"modelValue",s,{passive:!0}),l=H();return k3(l,()=>{o.value=!1}),(r,a)=>(w(),J("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:Ue({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>o.value=!O(o))},[Qe(r.$slots,"button",{class:Ue({disabled:t.disabled})})],2),(w(),V(Dd,null,[O(o)?(w(),J("div",NA,[Qe(r.$slots,"menu")])):Ae("v-if",!0)],1024))],512))}}),IA=Q(FA,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/MenuButton.vue"]]),MA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},UA={__name:"VerticalDivider",setup(t){return I(j),(s,n)=>(w(),J("div",MA))}},Al=Q(UA,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),qA={render(){return[]}},jA={class:"slidev-icon-btn"},zA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},VA={class:"my-auto"},HA={class:"opacity-50"},QA=Ce({__name:"NavControls",props:{persist:{default:!1}},setup(t){const s=t;I(j);const n=Oa.smaller("md"),{isFullscreen:o,toggle:l}=Fy,r=R(()=>Wa.value?`?password=${Wa.value}`:""),a=R(()=>`/presenter/${We.value}${r.value}`),i=R(()=>`/${We.value}${r.value}`),c=H();function u(){c.value&&Is.value&&c.value.contains(Is.value)&&Is.value.blur()}const d=R(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),y=as(),f=as();return Ns(()=>import("./DrawingControls-3684d4f3.js"),[]).then(h=>f.value=h.default),(h,m)=>{const _=AA,D=mA,b=uA,B=rA,v=tA,E=K5,k=H5,x=sf,L=N5,T=L5,M=w5,se=qn("RouterLink"),ae=b5,K=f5,de=c5,ge=n5;return w(),J("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Ue(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",d.value]),onMouseleave:u},[O(fs)?Ae("v-if",!0):(w(),J("button",{key:0,class:"slidev-icon-btn",onClick:m[0]||(m[0]=(..._e)=>O(l)&&O(l)(..._e))},[O(o)?(w(),V(_,{key:0})):(w(),V(D,{key:1}))])),e("button",{class:Ue(["slidev-icon-btn",{disabled:!O(GS)}]),onClick:m[1]||(m[1]=(..._e)=>O(Us)&&O(Us)(..._e))},[P(b)],2),e("button",{class:Ue(["slidev-icon-btn",{disabled:!O(JS)}]),title:"Next",onClick:m[2]||(m[2]=(..._e)=>O(Ms)&&O(Ms)(..._e))},[P(B)],2),O(fs)?Ae("v-if",!0):(w(),J("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=_e=>O(Iy)())},[P(v)])),O(Ma)?Ae("v-if",!0):(w(),J("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=_e=>O(zy)())},[O(Ar)?(w(),V(E,{key:0})):(w(),V(k,{key:1}))])),P(Al),O(fs)?Ae("v-if",!0):(w(),J(Le,{key:3},[!O(bt)&&!O(n)&&y.value?(w(),J(Le,{key:0},[P(O(y)),P(Al)],64)):Ae("v-if",!0),O(bt)?(w(),J("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=_e=>Vr.value=!O(Vr))},[O(Vr)?(w(),V(x,{key:0})):(w(),V(L,{key:1,class:"opacity-50"}))])):Ae("v-if",!0)],64)),(!O(xe).drawings.presenterOnly||O(bt))&&!O(fs)?(w(),J(Le,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=_e=>ns.value=!O(ns))},[P(T),O(ns)?(w(),J("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:et({background:O(un).color})},null,4)):Ae("v-if",!0)]),P(Al)],64)):Ae("v-if",!0),O(fs)?Ae("v-if",!0):(w(),J(Le,{key:5},[O(bt)?(w(),V(se,{key:0,to:i.value,class:"slidev-icon-btn",title:"Play Mode"},{default:C(()=>[P(M)]),_:1},8,["to"])):Ae("v-if",!0),O(zS)?(w(),V(se,{key:1,to:a.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:C(()=>[P(ae)]),_:1},8,["to"])):Ae("v-if",!0),Ae("v-if",!0)],64)),(w(),J(Le,{key:6},[O(xe).download?(w(),J("button",{key:0,class:"slidev-icon-btn",onClick:m[8]||(m[8]=(..._e)=>O(Ja)&&O(Ja)(..._e))},[P(K)])):Ae("v-if",!0)],64)),!O(bt)&&O(xe).info&&!O(fs)?(w(),J("button",{key:7,class:"slidev-icon-btn",onClick:m[9]||(m[9]=_e=>Eo.value=!O(Eo))},[P(de)])):Ae("v-if",!0),!O(bt)&&!O(fs)?(w(),V(IA,{key:8},{button:C(()=>[e("button",jA,[P(ge)])]),menu:C(()=>[P(OA)]),_:1})):Ae("v-if",!0),O(fs)?Ae("v-if",!0):(w(),V(Al,{key:9})),e("div",zA,[e("div",VA,[p(Qt(O(We))+" ",1),e("span",HA,"/ "+Qt(O(VS)),1)])]),P(O(qA))],34)],512)}}}),WA=Q(QA,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/NavControls.vue"]]),nf={render(){return[]}},of={render(){return[]}},JA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},GA=Ce({__name:"PresenterMouse",setup(t){return I(j),(s,n)=>{const o=sf;return O(Mr).cursor?(w(),J("div",JA,[P(o,{class:"absolute",style:et({left:`${O(Mr).cursor.x}%`,top:`${O(Mr).cursor.y}%`})},null,8,["style"])])):Ae("v-if",!0)}}}),KA=Q(GA,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),YA=Ce({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){I(j),ve(yt,()=>{var o,l;(o=yt.value)!=null&&o.meta&&yt.value.meta.preload!==!1&&(yt.value.meta.__preloaded=!0),(l=Jr.value)!=null&&l.meta&&Jr.value.meta.preload!==!1&&(Jr.value.meta.__preloaded=!0)},{immediate:!0});const s=as();Ns(()=>import("./DrawingLayer-f140c556.js"),[]).then(o=>s.value=o.default);const n=R(()=>Ke.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===yt.value}));return(o,l)=>(w(),J(Le,null,[Ae(" Global Bottom "),P(O(of)),Ae(" Slides "),P(E1,ue(O(ZS),{id:"slideshow",tag:"div"}),{default:C(()=>[(w(!0),J(Le,null,Wn(n.value,r=>{var a;return bd((w(),V(O(qi),{key:r.path,is:r==null?void 0:r.component,clicks:r===O(yt)?O(Nt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Ue(O(Ui)(r)),route:r,context:o.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Kd,r===O(yt)]])}),128))]),_:1},16),Ae(" Global Top "),P(O(nf)),s.value?(w(),V(O(s),{key:0})):Ae("v-if",!0),O(bt)?Ae("v-if",!0):(w(),V(KA,{key:1}))],64))}});const ZA=Q(YA,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/SlidesShow.vue"]]),XA=Ce({__name:"PrintStyle",setup(t){I(j);function s(n,{slots:o}){if(o.default)return tt("style",o.default())}return(n,o)=>(w(),V(s,null,{default:C(()=>[p(" @page { size: "+Qt(O(Os))+"px "+Qt(O(Ri))+"px; margin: 0px; } ",1)]),_:1}))}}),lf=Q(XA,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/PrintStyle.vue"]]),e4=Ce({__name:"Play",setup(t){I(j),N8();const s=H();function n(r){var a;Np.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ms():Us())}XS(s);const o=R(()=>Qv.value||Np.value);as();const l=as();return Ns(()=>import("./DrawingControls-3684d4f3.js"),[]).then(r=>l.value=r.default),(r,a)=>(w(),J(Le,null,[O(Vn)?(w(),V(lf,{key:0})):Ae("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:et(O($i))},[P(Hy,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:O(Vn)?O(vn).width.value:void 0,scale:O(Sl),onPointerdown:n},{default:C(()=>[P(ZA,{context:"slide"})]),controls:C(()=>[e("div",{class:Ue(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"opacity-100 right-0":"opacity-0 p-2",O(Uo)?"pointer-events-none":""]])},[P(WA,{class:"m-auto",persist:o.value},null,8,["persist"])],2),!O(xe).drawings.presenterOnly&&!O(fs)&&l.value?(w(),V(O(l),{key:0,class:"ml-0"})):Ae("v-if",!0)]),_:1},8,["style","width","scale"]),Ae("v-if",!0)],4),P(Zb)],64))}}),t4=Q(e4,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function rf(t){return typeof t>"u"||t===null}function s4(t){return typeof t=="object"&&t!==null}function n4(t){return Array.isArray(t)?t:rf(t)?[]:[t]}function o4(t,s){var n,o,l,r;if(s)for(r=Object.keys(s),n=0,o=r.length;n<o;n+=1)l=r[n],t[l]=s[l];return t}function l4(t,s){var n="",o;for(o=0;o<s;o+=1)n+=t;return n}function r4(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var a4=rf,i4=s4,c4=n4,p4=l4,u4=r4,d4=o4,zi={isNothing:a4,isObject:i4,toArray:c4,repeat:p4,isNegativeZero:u4,extend:d4};function af(t,s){var n="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(n+='in "'+t.mark.name+'" '),n+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!s&&t.mark.snippet&&(n+=`

`+t.mark.snippet),o+" "+n):o}function jo(t,s){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=s,this.message=af(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}jo.prototype=Object.create(Error.prototype);jo.prototype.constructor=jo;jo.prototype.toString=function(s){return this.name+": "+af(this,s)};var cn=jo,y4=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],f4=["scalar","sequence","mapping"];function h4(t){var s={};return t!==null&&Object.keys(t).forEach(function(n){t[n].forEach(function(o){s[String(o)]=n})}),s}function m4(t,s){if(s=s||{},Object.keys(s).forEach(function(n){if(y4.indexOf(n)===-1)throw new cn('Unknown option "'+n+'" is met in definition of "'+t+'" YAML type.')}),this.options=s,this.tag=t,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(n){return n},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=h4(s.styleAliases||null),f4.indexOf(this.kind)===-1)throw new cn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var it=m4;function Xp(t,s){var n=[];return t[s].forEach(function(o){var l=n.length;n.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),n[l]=o}),n}function g4(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,n;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(s=0,n=arguments.length;s<n;s+=1)arguments[s].forEach(o);return t}function Qa(t){return this.extend(t)}Qa.prototype.extend=function(s){var n=[],o=[];if(s instanceof it)o.push(s);else if(Array.isArray(s))o=o.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(n=n.concat(s.implicit)),s.explicit&&(o=o.concat(s.explicit));else throw new cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(r){if(!(r instanceof it))throw new cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof it))throw new cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Qa.prototype);return l.implicit=(this.implicit||[]).concat(n),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Xp(l,"implicit"),l.compiledExplicit=Xp(l,"explicit"),l.compiledTypeMap=g4(l.compiledImplicit,l.compiledExplicit),l};var _4=Qa,v4=new it("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),b4=new it("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),A4=new it("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),D4=new _4({explicit:[v4,b4,A4]});function C4(t){if(t===null)return!0;var s=t.length;return s===1&&t==="~"||s===4&&(t==="null"||t==="Null"||t==="NULL")}function B4(){return null}function E4(t){return t===null}var w4=new it("tag:yaml.org,2002:null",{kind:"scalar",resolve:C4,construct:B4,predicate:E4,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function k4(t){if(t===null)return!1;var s=t.length;return s===4&&(t==="true"||t==="True"||t==="TRUE")||s===5&&(t==="false"||t==="False"||t==="FALSE")}function S4(t){return t==="true"||t==="True"||t==="TRUE"}function x4(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var T4=new it("tag:yaml.org,2002:bool",{kind:"scalar",resolve:k4,construct:S4,predicate:x4,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function L4(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function R4(t){return 48<=t&&t<=55}function $4(t){return 48<=t&&t<=57}function P4(t){if(t===null)return!1;var s=t.length,n=0,o=!1,l;if(!s)return!1;if(l=t[n],(l==="-"||l==="+")&&(l=t[++n]),l==="0"){if(n+1===s)return!0;if(l=t[++n],l==="b"){for(n++;n<s;n++)if(l=t[n],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(n++;n<s;n++)if(l=t[n],l!=="_"){if(!L4(t.charCodeAt(n)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(n++;n<s;n++)if(l=t[n],l!=="_"){if(!R4(t.charCodeAt(n)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;n<s;n++)if(l=t[n],l!=="_"){if(!$4(t.charCodeAt(n)))return!1;o=!0}return!(!o||l==="_")}function O4(t){var s=t,n=1,o;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),o=s[0],(o==="-"||o==="+")&&(o==="-"&&(n=-1),s=s.slice(1),o=s[0]),s==="0")return 0;if(o==="0"){if(s[1]==="b")return n*parseInt(s.slice(2),2);if(s[1]==="x")return n*parseInt(s.slice(2),16);if(s[1]==="o")return n*parseInt(s.slice(2),8)}return n*parseInt(s,10)}function N4(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!zi.isNegativeZero(t)}var F4=new it("tag:yaml.org,2002:int",{kind:"scalar",resolve:P4,construct:O4,predicate:N4,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),I4=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function M4(t){return!(t===null||!I4.test(t)||t[t.length-1]==="_")}function U4(t){var s,n;return s=t.replace(/_/g,"").toLowerCase(),n=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:n*parseFloat(s,10)}var q4=/^[-+]?[0-9]+e/;function j4(t,s){var n;if(isNaN(t))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(zi.isNegativeZero(t))return"-0.0";return n=t.toString(10),q4.test(n)?n.replace("e",".e"):n}function z4(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||zi.isNegativeZero(t))}var V4=new it("tag:yaml.org,2002:float",{kind:"scalar",resolve:M4,construct:U4,predicate:z4,represent:j4,defaultStyle:"lowercase"}),H4=D4.extend({implicit:[w4,T4,F4,V4]}),Q4=H4,cf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),pf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function W4(t){return t===null?!1:cf.exec(t)!==null||pf.exec(t)!==null}function J4(t){var s,n,o,l,r,a,i,c=0,u=null,d,y,f;if(s=cf.exec(t),s===null&&(s=pf.exec(t)),s===null)throw new Error("Date resolve error");if(n=+s[1],o=+s[2]-1,l=+s[3],!s[4])return new Date(Date.UTC(n,o,l));if(r=+s[4],a=+s[5],i=+s[6],s[7]){for(c=s[7].slice(0,3);c.length<3;)c+="0";c=+c}return s[9]&&(d=+s[10],y=+(s[11]||0),u=(d*60+y)*6e4,s[9]==="-"&&(u=-u)),f=new Date(Date.UTC(n,o,l,r,a,i,c)),u&&f.setTime(f.getTime()-u),f}function G4(t){return t.toISOString()}var K4=new it("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:W4,construct:J4,instanceOf:Date,represent:G4});function Y4(t){return t==="<<"||t===null}var Z4=new it("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Y4}),Vi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function X4(t){if(t===null)return!1;var s,n,o=0,l=t.length,r=Vi;for(n=0;n<l;n++)if(s=r.indexOf(t.charAt(n)),!(s>64)){if(s<0)return!1;o+=6}return o%8===0}function e2(t){var s,n,o=t.replace(/[\r\n=]/g,""),l=o.length,r=Vi,a=0,i=[];for(s=0;s<l;s++)s%4===0&&s&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(o.charAt(s));return n=l%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function t2(t){var s="",n=0,o,l,r=t.length,a=Vi;for(o=0;o<r;o++)o%3===0&&o&&(s+=a[n>>18&63],s+=a[n>>12&63],s+=a[n>>6&63],s+=a[n&63]),n=(n<<8)+t[o];return l=r%3,l===0?(s+=a[n>>18&63],s+=a[n>>12&63],s+=a[n>>6&63],s+=a[n&63]):l===2?(s+=a[n>>10&63],s+=a[n>>4&63],s+=a[n<<2&63],s+=a[64]):l===1&&(s+=a[n>>2&63],s+=a[n<<4&63],s+=a[64],s+=a[64]),s}function s2(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var n2=new it("tag:yaml.org,2002:binary",{kind:"scalar",resolve:X4,construct:e2,predicate:s2,represent:t2}),o2=Object.prototype.hasOwnProperty,l2=Object.prototype.toString;function r2(t){if(t===null)return!0;var s=[],n,o,l,r,a,i=t;for(n=0,o=i.length;n<o;n+=1){if(l=i[n],a=!1,l2.call(l)!=="[object Object]")return!1;for(r in l)if(o2.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(s.indexOf(r)===-1)s.push(r);else return!1}return!0}function a2(t){return t!==null?t:[]}var i2=new it("tag:yaml.org,2002:omap",{kind:"sequence",resolve:r2,construct:a2}),c2=Object.prototype.toString;function p2(t){if(t===null)return!0;var s,n,o,l,r,a=t;for(r=new Array(a.length),s=0,n=a.length;s<n;s+=1){if(o=a[s],c2.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[s]=[l[0],o[l[0]]]}return!0}function u2(t){if(t===null)return[];var s,n,o,l,r,a=t;for(r=new Array(a.length),s=0,n=a.length;s<n;s+=1)o=a[s],l=Object.keys(o),r[s]=[l[0],o[l[0]]];return r}var d2=new it("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:p2,construct:u2}),y2=Object.prototype.hasOwnProperty;function f2(t){if(t===null)return!0;var s,n=t;for(s in n)if(y2.call(n,s)&&n[s]!==null)return!1;return!0}function h2(t){return t!==null?t:{}}var m2=new it("tag:yaml.org,2002:set",{kind:"mapping",resolve:f2,construct:h2});Q4.extend({implicit:[K4,Z4],explicit:[n2,i2,d2,m2]});function eu(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var g2=new Array(256),_2=new Array(256);for(var Rn=0;Rn<256;Rn++)g2[Rn]=eu(Rn)?1:0,_2[Rn]=eu(Rn);function v2(t){return Array.from(new Set(t))}function tu(...t){let s,n,o;t.length===1?(s=0,o=1,[n]=t):[s,n,o=1]=t;const l=[];let r=s;for(;r<n;)l.push(r),r+=o||1;return l}function uf(t,s){if(!s||s==="all"||s==="*")return tu(1,t+1);const n=[];for(const o of s.split(/[,;]/g))if(!o.includes("-"))n.push(+o);else{const[l,r]=o.split("-",2);n.push(...tu(+l,r?+r+1:t+1))}return v2(n).filter(o=>o<=t).sort((o,l)=>o-l)}function df(t){const s=R(()=>t.value.path),n=R(()=>Ke.length),o=R(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),l=R(()=>Dr(o.value)),r=R(()=>Ke.find(f=>f.path===`${o.value}`)),a=R(()=>{var f,h,m;return(m=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:m.id}),i=R(()=>{var f,h;return((h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout)||(o.value===1?"cover":"default")}),c=R(()=>Ke.find(f=>f.path===`${Math.min(Ke.length,o.value+1)}`)),u=R(()=>Ke.filter(f=>{var h,m;return(m=(h=f.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((f,h)=>(Gi(f,h),f),[])),d=R(()=>Ki(u.value,r.value)),y=R(()=>Yi(d.value));return{route:t,path:s,total:n,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:y,downloadPDF:Ja,next:Ms,nextSlide:zo,openInEditor:ex,prev:Us,prevSlide:Vo}}function yf(t,s,n){const o=H(0);rt(()=>{Dt.afterEach(async()=>{await rt(),o.value+=1})});const l=R(()=>{var c,u;return o.value,((u=(c=s.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),r=R(()=>{var c,u;return+(((u=(c=s.value)==null?void 0:c.meta)==null?void 0:u.clicks)??l.value.length)}),a=R(()=>n.value<Ke.length-1||t.value<r.value),i=R(()=>n.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:i}}const b2=["id"],A2=Ce({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:s}){const n=t,o=ss(n,"clicksElements",s),l=R(()=>({height:`${Ri}px`,width:`${Os}px`})),r=as();Ns(()=>Promise.resolve().then(()=>H8),void 0).then(u=>r.value=u.default);const a=R(()=>n.clicks),i=yf(a,n.nav.currentRoute,n.nav.currentPage),c=R(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return kt(j,Ve({nav:{...n.nav,...i},configs:xe,themeConfigs:R(()=>xe.themeConfig)})),(u,d)=>{var y;return w(),J("div",{id:c.value,class:"print-slide-container",style:et(l.value)},[P(O(of)),P(O(qi),{is:(y=u.route)==null?void 0:y.component,"clicks-elements":O(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Te(o)?o.value=f:null),clicks:a.value,"clicks-disabled":!1,class:Ue(O(Ui)(u.route)),route:u.route},null,8,["is","clicks-elements","clicks","class","route"]),r.value?(w(),V(O(r),{key:0,page:+u.route.path},null,8,["page"])):Ae("v-if",!0),P(O(nf))],12,b2)}}}),su=Q(A2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),D2=Ce({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var r;const s=t;I(j);const n=H(((r=s.route.meta)==null?void 0:r.__clicksElements)||[]),o=R(()=>s.route),l=df(o);return(a,i)=>(w(),J(Le,null,[P(su,{"clicks-elements":n.value,"onUpdate:clicksElements":i[0]||(i[0]=c=>n.value=c),clicks:0,nav:O(l),route:o.value},null,8,["clicks-elements","nav","route"]),O(wo)?Ae("v-if",!0):(w(!0),J(Le,{key:0},Wn(n.value.length,c=>(w(),V(su,{key:c,clicks:c,nav:O(l),route:o.value},null,8,["clicks","nav","route"]))),128))],64))}}),C2=Q(D2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/PrintSlide.vue"]]),B2={id:"print-content"},E2=Ce({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const s=t;I(j);const n=R(()=>s.width),o=R(()=>s.width/Ps),l=R(()=>n.value/o.value),r=R(()=>l.value<Ps?n.value/Os:o.value*Ps/Os);let a=Ke;It.value.query.range&&(a=uf(a.length,It.value.query.range).map(u=>a[u-1]));const i=R(()=>({"select-none":!xe.selectable}));return kt(ay,r),(c,u)=>(w(),J("div",{id:"print-container",class:Ue(i.value)},[e("div",B2,[(w(!0),J(Le,null,Wn(O(a),d=>(w(),V(C2,{key:d.path,route:d},null,8,["route"]))),128))]),Qe(c.$slots,"controls")],2))}});const w2=Q(E2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/PrintContainer.vue"]]),k2=Ce({__name:"Print",setup(t){return I(j),En(()=>{Vn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,n)=>(w(),J(Le,null,[O(Vn)?(w(),V(lf,{key:0})):Ae("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:et(O($i))},[P(w2,{class:"w-full h-full",style:et({background:"var(--slidev-slide-container-background, black)"}),width:O(vn).width.value},null,8,["style","width"])],4)],64))}});const S2=Q(k2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/Print.vue"]]);const Hi="/kaigionrails-postgresql-as-seen-by-rubyists/images/01_Evil-Martians_Logo_v2.1_RGB.svg",Qi="/kaigionrails-postgresql-as-seen-by-rubyists/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg",x2="/kaigionrails-postgresql-as-seen-by-rubyists/images/kaigi-on-rails-2022-light.svg",T2="/kaigionrails-postgresql-as-seen-by-rubyists/images/kaigi-on-rails-2022-dark.svg";function nu(t){return t.startsWith("/")?"/kaigionrails-postgresql-as-seen-by-rubyists"+t.slice(1):t}function L2(t,s=!1){const n=t&&["#","rgb","hsl"].some(l=>t.indexOf(l)===0),o={background:n?t:void 0,color:t&&!n?"white":void 0,backgroundImage:n?void 0:t?s?`linear-gradient(#0005, #0008), url(${nu(t)})`:`url("${nu(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const R2={class:"my-auto w-full"},$2=Ce({__name:"cover",props:{background:{default:""}},setup(t){const s=t;I(j);const n=R(()=>L2(s.background,!0));return(o,l)=>(w(),J("div",{class:"slidev-layout cover",style:et(n.value)},[e("div",R2,[Qe(o.$slots,"default")])],4))}}),el=Q($2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/theme-default/layouts/cover.vue"]]);const Wi=t=>(Di("data-v-42c5a5a3"),t=t(),Ci(),t),P2=Wi(()=>e("h1",null,[e("span",{class:"postgresql"},"PostgreSQL"),e("br"),p("as seen by"),e("br"),e("span",{class:"rubyists"},"Rubyists")],-1)),O2=Wi(()=>e("div",{class:"absolute bottom-0 my-2"},[p(" Andrey Novikov, Evil Martians"),e("br"),e("small",null,[e("a",{href:"https://kaigionrails.org/2022/"},"Kaigi on Rails 2022")]),e("br"),e("small",null,[e("time",{datetime:"2022-10-22"},"22 October 2022")])],-1)),N2=Wi(()=>e("div",{class:"absolute bottom-0 right-0 h-40 scaled-image flex items-end"},[e("a",{href:"https://evilmartians.com/",class:"w-40 p-3"},[e("img",{alt:"Evil Martians",src:Hi,class:"block dark:hidden"}),e("img",{alt:"Evil Martians",src:Qi,class:"hidden dark:block"})]),e("a",{href:"https://kaigionrails.org/",class:"w-40 p-4"},[e("img",{alt:"Kaigi on Rails",src:x2,class:"block dark:hidden"}),e("img",{alt:"Kaigi on Rails",src:T2,class:"hidden dark:block"})])],-1)),F2={__name:"1",setup(t){const s={theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1,presenterOnly:!0},info:`## PostgreSQL as seen by Rubyists
`,css:"unocss",fonts:{provider:"none",fallback:!1,local:"Martian Grotesk, Martian Mono",sans:"Martian Grotesk",serif:"Martian Grotesk",mono:"Martian Mono"}};return I(j),(n,o)=>(w(),V(el,re(le(s)),{default:C(()=>[P2,O2,N2]),_:1},16))}},I2=Q(F2,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]),M2="/kaigionrails-postgresql-as-seen-by-rubyists/images/github-envek-light.png",U2="/kaigionrails-postgresql-as-seen-by-rubyists/images/github-envek-dark.png",q2={__name:"none",setup(t){return I(j),(s,n)=>(w(),J("div",null,[Qe(s.$slots,"default")]))}},ff=Q(q2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/layouts/none.vue"]]),j2=e("img",{alt:"My GitHub",src:M2,class:"block dark:hidden"},null,-1),z2=e("img",{alt:"Evil Martians",src:U2,class:"hidden dark:block"},null,-1),V2={__name:"2",setup(t){const s={layout:"none"};return I(j),(n,o)=>(w(),V(ff,re(le(s)),{default:C(()=>[j2,z2]),_:1},16))}},H2=Q(V2,[["__file","/@slidev/slides/2.md"]]),Q2={class:"slidev-layout default"},W2={__name:"default",setup(t){return I(j),(s,n)=>(w(),J("div",Q2,[Qe(s.$slots,"default")]))}},Je=Q(W2,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/layouts/default.vue"]]),J2=e("a",{href:"https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists"},[e("img",{alt:"Evil Martians",src:Hi,class:"block dark:hidden object-contain text-center m-auto max-h-112"}),e("img",{alt:"Evil Martians",src:Qi,class:"hidden dark:block object-contain text-center m-auto max-h-112"}),e("p",{class:"text-2xl text-center"},"evilmartians.com")],-1),G2=e("div",{class:"absolute bottom-32px left-32px rotate-10 text-2xl"},"邪悪な火星人？",-1),K2=e("div",{class:"absolute bottom-32px right-32px rotate-350 text-2xl"},"イービルマーシャンズ！",-1),Y2={__name:"3",setup(t){const s={};return I(j),(n,o)=>(w(),V(Je,re(le(s)),{default:C(()=>[J2,G2,K2]),_:1},16))}},Z2=Q(Y2,[["__file","/@slidev/slides/3.md"]]),X2="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/yabeda.svg",e9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/lefthook.svg",t9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/anycable.svg",s9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/postcss.svg",n9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/imgproxy-light.svg",o9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/imgproxy-dark.svg",l9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/logux-logo-light.svg",r9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/logux-logo-dark.svg",a9="/kaigionrails-postgresql-as-seen-by-rubyists/images/martian-oss/overmind.svg";const As=t=>(Di("data-v-7c118cf2"),t=t(),Ci(),t),i9=As(()=>e("h1",null,"Martian Open Source",-1)),c9={class:"grid grid-cols-4 grid-rows-2 gap-4"},p9=As(()=>e("a",{href:"https://github.com/yabeda-rb/yabeda"},[e("figure",null,[e("img",{alt:"Yabeda",src:X2,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"Yabeda: Ruby application instrumentation framework")])],-1)),u9=As(()=>e("a",{href:"https://github.com/evilmartians/lefthook"},[e("figure",null,[e("img",{alt:"LeftHook",src:e9,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"Lefthook: git hooks manager")])],-1)),d9=As(()=>e("a",{href:"https://anycable.io/"},[e("figure",null,[e("img",{alt:"AnyCable",src:t9,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"AnyCable: Polyglot replacement for ActionCable server")])],-1)),y9=As(()=>e("a",{href:"https://postcss.org/"},[e("figure",null,[e("img",{alt:"PostCSS",src:s9,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"PostCSS: A tool for transforming CSS with JavaScript")])],-1)),f9=As(()=>e("a",{href:"https://imgproxy.net/"},[e("figure",null,[e("img",{alt:"Imgproxy",src:n9,class:"scaled-image h-40 mx-auto block dark:hidden"}),e("img",{alt:"Imgproxy",src:o9,class:"scaled-image h-40 mx-auto hidden dark:block"}),e("figcaption",null,"Imgproxy: Fast and secure standalone server for resizing and converting remote images")])],-1)),h9=As(()=>e("a",{href:"https://logux.io/"},[e("figure",null,[e("img",{alt:"Logux",src:l9,class:"scaled-image h-40 mx-auto block dark:hidden"}),e("img",{alt:"Logux",src:r9,class:"scaled-image h-40 mx-auto hidden dark:block"}),e("figcaption",null,"Logux: Client-server communication framework based on Optimistic UI, CRDT, and log")])],-1)),m9=As(()=>e("a",{href:"https://github.com/DarthSim/overmind"},[e("figure",null,[e("img",{alt:"Overmind",src:a9,class:"scaled-image h-40 mx-auto"}),e("figcaption",null,"Overmind: Process manager for Procfile-based applications and tmux ")])],-1)),g9={href:"https://evilmartians.com/oss"},_9={class:"h-40 text-2xl flex items-center justify-center"},v9=As(()=>e("figcaption",{style:{"font-size":"1rem","margin-top":"0","line-height":"1.25rem"}},"Even more at evilmartians.com/oss",-1)),b9={__name:"4",setup(t){const s={};return I(j),(n,o)=>{const l=qn("qr-code-vue");return w(),V(Je,re(le(s)),{default:C(()=>[i9,e("div",c9,[p9,u9,d9,y9,f9,h9,m9,e("a",g9,[e("figure",null,[e("div",_9,[P(l,{value:"https://evilmartians.com/oss",class:"scaled-image w-full h-full mx-auto p-4","render-as":"svg",margin:"1"})]),v9])])])]),_:1},16)}}},A9=Q(b9,[["__scopeId","data-v-7c118cf2"],["__file","/@slidev/slides/4.md"]]),D9=e("p",null,"This talk is about…",-1),C9=e("h1",null,"Subtle differences",-1),B9={__name:"5",setup(t){const s={layout:"cover"};return I(j),(n,o)=>(w(),V(el,re(le(s)),{default:C(()=>[D9,C9]),_:1},16))}},E9=Q(B9,[["__file","/@slidev/slides/5.md"]]);function ou(t){return t.startsWith("/")?"/kaigionrails-postgresql-as-seen-by-rubyists"+t.slice(1):t}function w9(t,s=!1){const n=t&&(t[0]==="#"||t.startsWith("rgb")),o={background:n?t:void 0,color:t&&!n?"white":void 0,backgroundImage:n?void 0:t?s?`linear-gradient(#0005, #0008), url(${ou(t)})`:`url("${ou(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const k9=Ce({__name:"image",props:{image:{type:String}},setup(t){const s=t;I(j);const n=R(()=>w9(s.image));return(o,l)=>(w(),J("div",{class:"slidev-layout w-full h-full",style:et(n.value)},[Qe(o.$slots,"default")],4))}}),S9=Q(k9,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/layouts/image.vue"]]),x9={__name:"6",setup(t){const s={layout:"image",image:"/images/roads-in-different-countries.jpg"};return I(j),(n,o)=>(w(),V(S9,re(le(s)),null,16))}},T9=Q(x9,[["__file","/@slidev/slides/6.md"]]),hf="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/RU_road_sign_2.4.svg",mf="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/Japan_road_sign_330-B.svg",L9={class:"slidev-layout footnote-container w-full h-full grid gap-2 pb-0",style:{"grid-template-rows":"11fr 1fr"}},R9={class:"place-self-stretch overflow-hidden"},$9=Ce({__name:"footnote",props:{footnoteClass:{type:String}},setup(t){const s=t;return I(j),(n,o)=>(w(),J("div",L9,[e("div",R9,[Qe(n.$slots,"default")]),e("div",{class:Ue(["self-end footnote",s.footnoteClass])},[Qe(n.$slots,"footnote")],2)]))}});const Ws=Q($9,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/layouts/footnote.vue"]]),P9=e("div",{class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},[e("h2",{class:"col-span-3"}," Example of subtle yet important difference "),e("p",null,[e("img",{src:hf,alt:"Russian “Yield” sign"})]),e("div",{class:"text-center"},[e("p",null,"Are they same?"),e("p",null,[e("strong",{class:"text-2xl text-center"},"…")])]),e("p",null,[e("img",{src:mf,alt:"Japanese “Stop” sign"})])],-1),O9=e("p",null,[p("Left: road sign conforming "),e("a",{href:"https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals",target:"_blank",rel:"noopener"},"Vienna Convention on Road Signs and Signals")],-1),N9=e("p",null,"Right: Japanese road sign per “Order on Road Sign, Road Line, and Road Surface Marking”",-1),F9={__name:"7",setup(t){const s={layout:"footnote","footnote-class":"text-sm"};return I(j),(n,o)=>(w(),V(Ws,re(le(s)),{footnote:C(l=>[O9,N9]),default:C(()=>[P9]),_:1},16))}},I9=Q(F9,[["__file","/@slidev/slides/7.md"]]),M9=e("div",{class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},[e("h2",{class:"col-span-3"}," Example of subtle yet important difference "),e("p",null,[e("img",{src:hf,alt:"Russian “Yield” sign"})]),e("div",{class:"text-center"},[e("p",null,"Are they same?"),e("p",null,[e("strong",{class:"text-3xl text-center"},"NO!")])]),e("p",null,[e("img",{src:mf,alt:"Japanese “Stop” sign"})])],-1),U9=e("p",null,"Both require drivers to give a way…",-1),q9=e("p",null,"European sign doesn’t have a requirement to stop or even slow down!",-1),j9={__name:"8",setup(t){const s={layout:"footnote"};return I(j),(n,o)=>(w(),V(Ws,re(le(s)),{footnote:C(l=>[U9,q9]),default:C(()=>[M9]),_:1},16))}},z9=Q(j9,[["__file","/@slidev/slides/8.md"]]),V9="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/RU_road_sign_2.5.svg",H9="/kaigionrails-postgresql-as-seen-by-rubyists/images/road-signs/Japan_road_sign_330-A.svg",Q9=e("div",{class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},[e("h2",{class:"col-span-3"}," Example of subtle yet important difference "),e("div",{class:"p-4 pt-8 pr-8"},[e("p",null,[e("img",{src:V9,alt:"Russian “Yield” sign"})])]),e("div",{class:"text-center"},[e("p",null,"Are they same?"),e("p",null,[e("strong",{class:"text-3xl text-center"},"YES!")])]),e("p",null,[e("img",{src:H9,alt:"Japanese “Stop” sign"})])],-1),W9=e("p",null,[p("Stop signs around the world are "),e("em",null,"mostly"),p(" octagonal.")],-1),J9=e("p",null,"Japanese signs have “STOP” word in English after 2017, but are still pretty rare.",-1),G9={__name:"9",setup(t){const s={layout:"footnote"};return I(j),(n,o)=>(w(),V(Ws,re(le(s)),{footnote:C(l=>[W9,J9]),default:C(()=>[Q9]),_:1},16))}},K9=Q(G9,[["__file","/@slidev/slides/9.md"]]),Y9={class:"slidev-icon",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},Z9=qg('<circle cx="18" cy="17.018" r="17" fill="#FFCB4C"></circle><path fill="#65471B" d="M14.524 21.036a.914.914 0 0 1-.312-.464a.799.799 0 0 1 .59-1.021c4.528-1.021 7.577 1.363 7.706 1.465c.384.306.459.845.173 1.205c-.286.358-.828.401-1.211.097c-.11-.084-2.523-1.923-6.182-1.098a.91.91 0 0 1-.764-.184z"></path><ellipse cx="13.119" cy="11.174" fill="#65471B" rx="2.125" ry="2.656"></ellipse><ellipse cx="24.375" cy="12.236" fill="#65471B" rx="2.125" ry="2.656"></ellipse><path fill="#F19020" d="M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694c-.249-1.08-1.204-1.118-1.697-1.003c-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512c.508-.536.833-1.129.946-2.113c.119-1.035-.232-2.313-.433-2.809c-.374-.921-1.005-1.649-1.734-1.899c-1.137-.39-1.945.321-1.542 1.561c.604 1.854.208 3.375-.833 4.293c-2.449 2.157-3.588 3.695-2.83 6.973c.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z"></path><path fill="#65471B" d="M9.296 6.351a.925.925 0 0 1-.391-.399a.8.8 0 0 1 .393-1.112c4.266-1.831 7.699-.043 7.843.034c.433.231.608.747.391 1.154c-.216.405-.74.546-1.173.318c-.123-.063-2.832-1.432-6.278.047a.915.915 0 0 1-.785-.042zm12.135 3.75a.924.924 0 0 1-.362-.424a.8.8 0 0 1 .468-1.084c4.381-1.536 7.685.48 7.823.567c.415.26.555.787.312 1.178c-.242.39-.776.495-1.191.238c-.12-.072-2.727-1.621-6.267-.379a.924.924 0 0 1-.783-.096z"></path>',6),X9=[Z9];function e7(t,s){return w(),J("svg",Y9,X9)}const t7={name:"twemoji-thinking-face",render:e7},gf="/kaigionrails-postgresql-as-seen-by-rubyists/images/Ruby_logo.svg",Ji="/kaigionrails-postgresql-as-seen-by-rubyists/images/Postgresql_elephant.svg",s7={class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},n7=e("h2",{class:"col-span-3"}," And how it relates to Ruby and PostgreSQL? ",-1),o7=e("img",{alt:"Ruby logo",src:gf,class:"w-full h-full scaled-image p-4"},null,-1),l7=e("img",{alt:"PostgreSQL logo",src:Ji},null,-1),r7={__name:"10",setup(t){const s={};return I(j),(n,o)=>{const l=t7;return w(),V(Je,re(le(s)),{default:C(()=>[e("div",s7,[n7,o7,P(l,{class:"self-end w-full h-32"}),l7])]),_:1},16)}}},a7=Q(r7,[["__file","/@slidev/slides/10.md"]]),i7={class:"slidev-icon",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},c7=e("path",{fill:"#3B88C3",d:"M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"},null,-1),p7=e("path",{fill:"#FFF",d:"M30.2 10L23 4v4h-8C9.477 8 5 12.477 5 18c0 1.414.297 2.758.827 3.978l3.3-2.75A6 6 0 0 1 15 12h8v4l7.2-6zm-.026 4.023l-3.301 2.75A6 6 0 0 1 21 24h-8v-4l-7.2 6l7.2 6v-4h8c5.522 0 10-4.478 10-10a9.965 9.965 0 0 0-.826-3.977z"},null,-1),u7=[c7,p7];function d7(t,s){return w(),J("svg",i7,u7)}const y7={name:"twemoji-repeat-button",render:d7},f7={class:"grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full"},h7=e("h2",{class:"col-span-3"}," And how it relates to Ruby and PostgreSQL? ",-1),m7=e("img",{alt:"Ruby logo",src:gf,class:"w-full h-full scaled-image p-4"},null,-1),g7={class:"text-center"},_7=e("img",{alt:"PostgreSQL logo",src:Ji},null,-1),v7={__name:"11",setup(t){const s={};return I(j),(n,o)=>{const l=y7;return w(),V(Je,re(le(s)),{default:C(()=>[e("div",f7,[h7,m7,e("p",g7,[p(" Application data "),P(l,{class:"w-full h-32"}),p(" Data in the database ")]),_7])]),_:1},16)}}},b7=Q(v7,[["__file","/@slidev/slides/11.md"]]),A7={class:"slidev-layout center h-full grid place-content-center"},D7={class:"my-auto"},C7={__name:"center",setup(t){return I(j),(s,n)=>(w(),J("div",A7,[e("div",D7,[Qe(s.$slots,"default")])]))}},tl=Q(C7,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/layouts/center.vue"]]),B7=e("h1",null,"Ruby vs PostgreSQL data types",-1),E7=e("p",null,"Are they same?",-1),w7={__name:"12",setup(t){const s={layout:"center"};return I(j),(n,o)=>(w(),V(tl,re(le(s)),{default:C(()=>[B7,E7]),_:1},16))}},k7=Q(w7,[["__file","/@slidev/slides/12.md"]]),S7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},x7=e("path",{fill:"currentColor",d:"M200 32h-36.26a47.92 47.92 0 0 0-71.48 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm72 184H56V48h26.75A47.93 47.93 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.93 47.93 0 0 0-2.75-16H200Z"},null,-1),T7=[x7];function L7(t,s){return w(),J("svg",S7,T7)}const R7={name:"ph-clipboard",render:L7},$7={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},P7=e("path",{fill:"currentColor",d:"M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),O7=[P7];function N7(t,s){return w(),J("svg",$7,O7)}const F7={name:"ph-check-circle",render:N7},I7=["title"],M7=Ce({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},startLine:{type:Number,default:1},lines:{type:Boolean,default:xe.lineNumbers},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const s=t;I(j);const n=I(Ao),o=I(ln),l=I(Do);function r(y=5){const f=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<y;_++)f.push(h.charAt(Math.floor(Math.random()*m)));return f.join("")}const a=H(),i=Ct();Wt(()=>{const y=s.at==null?o==null?void 0:o.value.length:s.at,f=R(()=>l!=null&&l.value?s.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(y||0)),s.ranges.length-1)),h=R(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),_=N0(s.ranges.length-1).map(D=>m+D);o!=null&&o.value&&(o.value.push(..._),mr(()=>_.forEach(D=>wa(o.value,D)),i))}En(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value],D=s.startLine;for(const b of _){const B=Array.from(b.querySelectorAll(".line")),v=uf(B.length+D-1,h.value);if(B.forEach((E,k)=>{const x=v.includes(k+D);E.classList.toggle(tn,!0),E.classList.toggle("highlighted",x),E.classList.toggle("dishonored",!x)}),s.maxHeight){const E=Array.from(b.querySelectorAll(".line.highlighted"));E.reduce((x,L)=>L.offsetHeight+x,0)>a.value.offsetHeight?E[0].scrollIntoView({behavior:"smooth",block:"start"}):E.length>0&&E[Math.round((E.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=O3();function d(){var f,h;const y=(h=(f=a.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:h.textContent;y&&u(y)}return(y,f)=>{const h=F7,m=R7;return w(),J("div",{ref_key:"el",ref:a,class:Ue(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":s.lines}]),style:et({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0,"--start":s.startLine})},[Qe(y.$slots,"default"),O(xe).codeCopy?(w(),J("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:O(c)?"Copied":"Copy",onClick:f[0]||(f[0]=_=>d())},[O(c)?(w(),V(h,{key:0,class:"p-2 w-8 h-8"})):(w(),V(m,{key:1,class:"p-2 w-8 h-8"}))],8,I7)):Ae("v-if",!0)],6)}}}),je=Q(M7,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),U7={class:"slidev-layout comparison-container w-full h-full grid grid-cols-2 gap-2 pb-0"},q7={class:"self-start col-span-2"},j7={class:"place-self-stretch ruby-type"},z7={class:"self-start float-left"},V7=["src"],H7={class:"place-self-stretch pg-type"},Q7=e("div",{class:"self-start float-left"},[e("img",{src:Ji,class:"min-w-28 w-28 p-4"})],-1),W7={class:"place-self-stretch ruby"},J7={class:"place-self-stretch postgresql"},G7=Ce({__name:"comparison",props:{rubyRails:{type:String,default:"ruby"},footnoteClass:{type:String,default:"text-xs"}},setup(t){const s=t;I(j);const n=R(()=>{switch(s.rubyRails){case"ruby":return"./images/Ruby_logo.svg";case"rails":return"./images/Ruby_on_Rails-logo.png";case"ruby-rails":return"./images/Ruby_and_Rails_logo.png";default:return"./images/Ruby_logo.svg"}});return(o,l)=>(w(),J("div",U7,[e("div",q7,[Qe(o.$slots,"default")]),e("div",j7,[e("div",z7,[e("img",{src:n.value,class:"min-w-28 w-28 p-4"},null,8,V7)]),Qe(o.$slots,"rubytype")]),e("div",H7,[Q7,Qe(o.$slots,"pgtype")]),e("div",W7,[Qe(o.$slots,"ruby")]),e("div",J7,[Qe(o.$slots,"postgresql")]),e("div",{class:Ue(["self-end footnote",s.footnoteClass])},[Qe(o.$slots,"footnote_ruby")],2),e("div",{class:Ue(["self-end footnote",s.footnoteClass])},[Qe(o.$slots,"footnote_pg")],2)]))}});const gt=Q(G7,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/layouts/comparison.vue"]]),K7=e("h2",null,"Integers",-1),Y7=e("p",null,[e("code",null,"Integer")],-1),Z7=e("p",null,"Variable length",-1),X7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"size             "),e("span",{style:{color:"#758575"}},"# =>  8 (bytes)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"256"),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"size  "),e("span",{style:{color:"#758575"}},"# =>  8 (bytes)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"256"),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"size      "),e("span",{style:{color:"#758575"}},"# =>  9 (bytes)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"256"),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#6394BF"}},"40"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"size "),e("span",{style:{color:"#758575"}},"# => 40 (bytes)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"size             "),e("span",{style:{color:"#A0ADA0"}},"# =>  8 (bytes)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"256"),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"size  "),e("span",{style:{color:"#A0ADA0"}},"# =>  8 (bytes)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"256"),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"size      "),e("span",{style:{color:"#A0ADA0"}},"# =>  9 (bytes)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"256"),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#296AA3"}},"40"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"size "),e("span",{style:{color:"#A0ADA0"}},"# => 40 (bytes)")])])])],-1),eD=e("p",null,"In ActiveModel there is validation for databases:",-1),tD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"create"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"value"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2147483648"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# ActiveModel::RangeError: 2147483648 is out of range")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# for ActiveModel::Type::Integer with limit 4 bytes")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"create"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"value"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2147483648"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# ActiveModel::RangeError: 2147483648 is out of range")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# for ActiveModel::Type::Integer with limit 4 bytes")])])])],-1),sD=e("p",null,[e("code",null,"integer")],-1),nD=e("p",null,"2, 4, 8 bytes signed",-1),oD=e("div",{class:"text-xs"},[e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Size"),e("th",null,"Range")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"smallint")]),e("td",null,"2"),e("td",null,"-32768 to +32767")]),e("tr",null,[e("td",null,[e("code",null,"integer")]),e("td",null,"4"),e("td",null,"-2147483648 to +2147483647")]),e("tr",null,[e("td",null,[e("code",null,"bigint")]),e("td",null,"8"),e("td",null,"-9223372036854775808 to +9223372036854775807")])])])],-1),lD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"tests"'),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},'"value"'),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"2147483648"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- ERROR:  integer out of range")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"tests"'),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},'"value"'),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"2147483648"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- ERROR:  integer out of range")])])])],-1),rD=e("p",null,[p("See "),e("a",{href:"https://github.com/ruby/ruby/blob/ruby_3_1/bignum.c",target:"_blank",rel:"noopener"},"bignum.c"),p(" in Ruby sources.")],-1),aD=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-numeric.html",target:"_blank",rel:"noopener"},"Numeric types docs")],-1),iD={__name:"13",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[Y7,Z7]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[X7]),_:1},16),eD,P(l,ue({},{ranges:[""]}),{default:C(()=>[tD]),_:1},16)]),pgtype:C(r=>[sD,nD]),postgresql:C(r=>[oD,P(l,ue({},{ranges:[""]}),{default:C(()=>[lD]),_:1},16)]),footnote_ruby:C(r=>[rD]),footnote_pg:C(r=>[aD]),default:C(()=>[K7]),_:1},16)}}},cD=Q(iD,[["__file","/@slidev/slides/13.md"]]),pD={class:"slidev-icon",viewBox:"0 0 36 36",width:"1.2em",height:"1.2em"},uD=e("path",{fill:"#FFDC5D",d:"M20.145 31s-2.436-.167-3.068-1.792c-.646-1.659.622-2.309.622-2.309s-1.914.059-2.622-1.941c-.668-1.885.958-2.75.958-2.75s-1.871-.307-2.417-2.292C13.158 18.245 14.784 17 14.784 17H2.576C1.617 17 .001 16.458 0 14.457C-.002 12.457 1.659 12 2.576 12h20.5c1 0 1-1 0-1H20.41c-3.792 0-6.143-2.038-6.792-2.751c-.65-.713-.98-1.667-.734-2.82c.415-1.956 1.92-1.529 3.197-.975c3.078 1.337 7.464 2.254 9.538 2.533c5.858.791 10.375 5.809 10.381 11.884c.004 6.626-5.298 12.124-11.924 12.129h-3.931z"},null,-1),dD=[uD];function yD(t,s){return w(),J("svg",pD,dD)}const fD={name:"twemoji-backhand-index-pointing-left",render:yD},hD="/kaigionrails-postgresql-as-seen-by-rubyists/images/rails-pull-request-26266-light.png",mD="/kaigionrails-postgresql-as-seen-by-rubyists/images/rails-pull-request-26266-dark.png",gD=e("a",{href:"https://github.com/rails/rails/pull/26266"},[e("img",{alt:"Ruby on Rails pull request № 26266",src:hD,class:"block dark:hidden"}),e("img",{alt:"Evil Martians",src:mD,class:"hidden dark:block"})],-1),_D={__name:"14",setup(t){const s={layout:"none"};return I(j),(n,o)=>{const l=fD;return w(),V(ff,re(le(s)),{default:C(()=>[gD,P(l,{class:"absolute left-550px bottom-66px text-5xl animate-pulse"})]),_:1},16)}}},vD=Q(_D,[["__file","/@slidev/slides/14.md"]]),bD=["href"],AD={class:"text-center py-1"},DD=Ce({__name:"QrCode",props:{url:{type:String},caption:{type:String},class:{type:String}},setup(t){const s=t;return I(j),(n,o)=>{const l=qn("qr-code-vue");return w(),J("figure",{class:Ue(["qr-code-container px-2",s.class])},[e("a",{href:s.url},[P(l,{value:s.url,class:"scaled-image w-full h-full","render-as":"svg",margin:"1"},null,8,["value"]),e("figcaption",AD,Qt(s.caption),1)],8,bD)],2)}}});const Kt=Q(DD,[["__scopeId","data-v-f88da750"],["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/components/QrCode.vue"]]),CD=e("h2",null,"Oh no, I have integer primary keys! What to do?",-1),BD=e("div",{class:"my-12"},null,-1),ED=e("ol",{start:"0"},[e("li",null,[e("p",null,"Don’t panic!")]),e("li",null,[e("p",null,[p("Use "),e("a",{href:"https://github.com/ankane/pghero",target:"_blank",rel:"noopener"},"pghero"),p(" or Heroku "),e("a",{href:"https://devcenter.heroku.com/articles/heroku-postgres-performance-analytics#pg-diagnose",target:"_blank",rel:"noopener"},"pg:diagnose"),p(" to detect problematic primary keys.")])]),e("li",null,[e("p",null,[p("Migrate to "),e("code",null,"bigint"),p(" or "),e("code",null,"uuid"),p(" if needed (use triggers, Luke!)")])]),e("li",null,[e("p",null,"In case of emergency, remember that all integers are signed!"),e("p",null,[e("small",null,[p("You always have 2 more billions of values on the "),e("s",null,"dark"),p(" negative side!")])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"ALTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SEQUENCE"),e("span",{style:{color:"#DBD7CA"}}," tablename_id_seq MINVALUE "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2147483647"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"RESTART"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"WITH"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"2147483647"),e("span",{style:{color:"#DBD7CA"}},";")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"ALTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SEQUENCE"),e("span",{style:{color:"#393A34"}}," tablename_id_seq MINVALUE "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2147483647"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"RESTART"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"WITH"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"2147483647"),e("span",{style:{color:"#393A34"}},";")])])])])])],-1),wD=e("p",null,[p("Example of pkey migration from int to bigint: "),e("a",{href:"https://engineering.silverfin.com/pg-zero-downtime-bigint-migration/",target:"_blank",rel:"noopener"},"engineering.silverfin.com/pg-zero-downtime-bigint-migration")],-1),kD={__name:"15",setup(t){const s={layout:"footnote",footnoteClass:"text-xs"};return I(j),(n,o)=>{const l=Kt;return w(),V(Ws,re(le(s)),{footnote:C(r=>[wD]),default:C(()=>[CD,BD,ED,P(l,{url:"https://github.com/ankane/pghero",caption:"pghero",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},SD=Q(kD,[["__file","/@slidev/slides/15.md"]]),xD=e("h2",null,"Floating point numbers",-1),TD=e("p",{class:"text-3xl absolute top-20px left-400px rotate-340 animate-pulse text-red-500 p-2 border-3 border-red-500"},"IEEE 754",-1),LD=e("p",null,[e("code",null,"Float")],-1),RD=e("p",null,"8 bytes (double-precision)",-1),$D=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"0.1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.2"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"# => 0.30000000000000004")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# => 1.7976931348623157e+308")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1e+308'"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_f "),e("span",{style:{color:"#758575"}},"# => Infinity")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# BUT!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.1'"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_f")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 1.7976931348623157e+308 🤔")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"MAX"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.1'"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_f"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => true 🤯")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"NAN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Float"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"NAN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# => false")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"0.1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.2"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# => 0.30000000000000004")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# => 1.7976931348623157e+308")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1e+308'"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_f "),e("span",{style:{color:"#A0ADA0"}},"# => Infinity")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# BUT!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.1'"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_f")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 1.7976931348623157e+308 🤔")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"MAX"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.1'"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_f"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => true 🤯")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"NAN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Float"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"NAN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# => false")])])])],-1),PD=e("p",null,[e("code",null,"real"),p(" — 4 bytes")],-1),OD=e("p",null,[e("code",null,"double"),p(" — 8 bytes")],-1),ND=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- 0.30000000000000004")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- 0.3 (but it is NOT float!)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"--- ERROR:  value out of range: overflow")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'+inf'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"double precision"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- Infinity 🤷")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#C98A7D"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.1'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- true ¯\\_(ツ)_/¯")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true 🤯")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- 0.30000000000000004")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- 0.3 (but it is NOT float!)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"--- ERROR:  value out of range: overflow")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'+inf'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"double precision"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- Infinity 🤷")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#B56959"}},"'1.7976931348623157e+308'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.1'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- true ¯\\_(ツ)_/¯")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true 🤯")])])])],-1),FD=e("p",null,[p("See Ruby docs for "),e("a",{href:"https://ruby-doc.org/core-3.1.0/Float.html",target:"_blank",rel:"noopener"},"Float")],-1),ID=e("p",null,[p("More fun at "),e("a",{href:"https://0.30000000000000004.com/",target:"_blank",rel:"noopener"},"0.30000000000000004.com"),p("!")],-1),MD={__name:"16",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je,r=Kt;return w(),V(gt,re(le(s)),{rubytype:C(a=>[LD,RD]),ruby:C(a=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[$D]),_:1},16)]),pgtype:C(a=>[PD,OD]),postgresql:C(a=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[ND]),_:1},16)]),footnote_ruby:C(a=>[FD]),footnote_pg:C(a=>[ID,P(r,{url:"https://0.30000000000000004.com/",caption:"0.30000000000000004.com",class:"w-32 absolute bottom-10px right-10px"})]),default:C(()=>[xD,TD]),_:1},16)}}},UD=Q(MD,[["__file","/@slidev/slides/16.md"]]),qD=e("p",null,"Don’t use floats for calculating money!",-1),jD=e("div",{class:"text-5xl my-12"}," 🤑💥🤕 ",-1),zD=e("p",null,"Never ever!",-1),VD={__name:"17",setup(t){const s={layout:"center",class:"text-3xl text-center"};return I(j),(n,o)=>(w(),V(tl,re(le(s)),{default:C(()=>[qD,jD,zD]),_:1},16))}},HD=Q(VD,[["__file","/@slidev/slides/17.md"]]),QD=e("h2",null,"Arbitrary precision numbers",-1),WD=e("p",null,[e("code",null,"BigDecimal")],-1),JD=e("p",null,"Variable length",-1),GD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.1"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.2"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"# => 0.3e0")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"NaN"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"NaN"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# => false")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"1.0"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.0"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"#=> Infinity")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# To match PostgreSQL behavior:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"mode"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"EXCEPTION_OVERFLOW"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"true"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"1.0"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.0"'),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Computation results in 'Infinity' (FloatDomainError)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"0.1"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.2"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_d "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.30000000000000004")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# true 🤔")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.1"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.2"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# => 0.3e0")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"NaN"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"NaN"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# => false")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"1.0"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.0"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"#=> Infinity")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# To match PostgreSQL behavior:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"mode"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"EXCEPTION_OVERFLOW"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"true"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"1.0"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.0"'),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Computation results in 'Infinity' (FloatDomainError)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"0.1"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.2"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_d "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.30000000000000004")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# true 🤔")])])])],-1),KD=e("p",null,[e("code",null,"numeric")],-1),YD=e("p",null,"Variable length",-1),ZD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- 0.3 which is decimal")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"decimal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'NaN'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"decimal"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1.0'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"decimal"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'0.0'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"decimal"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- ERROR:  division by zero")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"float"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- false")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- 0.3 which is decimal")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"decimal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'NaN'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"decimal"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1.0'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"decimal"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'0.0'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"decimal"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- ERROR:  division by zero")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"float"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- false")])])])],-1),XD=e("p",null,[p("See Ruby docs for "),e("a",{href:"https://ruby-doc.org/stdlib-3.1.0/libdoc/bigdecimal/rdoc/BigDecimal.html",target:"_blank",rel:"noopener"},"BigDecimal")],-1),eC=e("p",null,[e("strong",null,[p("Use "),e("code",null,"numeric"),p(" to store money!")])],-1),tC={__name:"18",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[WD,JD]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[GD]),_:1},16)]),pgtype:C(r=>[KD,YD]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[ZD]),_:1},16)]),footnote_ruby:C(r=>[XD]),footnote_pg:C(r=>[eC]),default:C(()=>[QD]),_:1},16)}}},sC=Q(tC,[["__file","/@slidev/slides/18.md"]]),nC=e("h2",null,"But there is money type, isn’t it?",-1),oC=e("p",null,[e("code",null,"BigDecimal")],-1),lC=e("p",null,"Variable size",-1),rC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# If the database locale setting isn't `en_US`:")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Creation may fail:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"create!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100500.42"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# ERROR: invalid input syntax for type money: "100500.42"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Or it can succeed, but won't be able to be parsed back:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"price "),e("span",{style:{color:"#758575"}},"# => 0.0")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# If the database locale setting isn't `en_US`:")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Creation may fail:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"create!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100500.42"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# ERROR: invalid input syntax for type money: "100500.42"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Or it can succeed, but won't be able to be parsed back:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"price "),e("span",{style:{color:"#A0ADA0"}},"# => 0.0")])])])],-1),aC=e("p",null,[e("code",null,"money")],-1),iC=e("p",null,"8 byte fixed-precision number.",-1),cC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- on production:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100500"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"money"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- $100,500.42")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- on dev machine:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100500"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"money"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- ¥ 100,500")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 🤯 But it should be dollars, and where are my cents?")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- on production:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100500"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"money"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- $100,500.42")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- on dev machine:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100500"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"money"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- ¥ 100,500")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 🤯 But it should be dollars, and where are my cents?")])])])],-1),pC=e("p",null,[p("ActiveRecord has to parse textual representation, see "),e("a",{href:"https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36",target:"_blank",rel:"noopener"},"connection_adapters/postgresql/oid/money.rb")],-1),uC=e("p",null,[p("Also see "),e("a",{href:"https://github.com/rails/rails/issues/31457",target:"_blank",rel:"noopener"},"issue № 31457"),p(" for lots of pain.")],-1),dC=e("p",null,[p("Both output and acceptable input format depends on session-level "),e("code",null,"lc_monetary"),p(" setting!")],-1),yC=e("p",null,[p("Precision is defined by "),e("code",null,"lc_monetary"),p(" at database creation time and can’t be changed!")],-1),fC={__name:"19",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[oC,lC]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[rC]),_:1},16)]),pgtype:C(r=>[aC,iC]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[cC]),_:1},16)]),footnote_ruby:C(r=>[pC,uC]),footnote_pg:C(r=>[dC,yC]),default:C(()=>[nC]),_:1},16)}}},hC=Q(fC,[["__file","/@slidev/slides/19.md"]]),mC=e("h2",null,"Strings and texts, lyrics and prose",-1),gC=e("p",null,[e("code",null,"String")],-1),_C=e("p",null,"Variable size",-1),vC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"こんにちは地球人！"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"encoding")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => #<Encoding:UTF-8>")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"encoding")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => #<Encoding:UTF-8>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"valid_encoding?")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => false")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#C98A7D"}},'"これ'),e("span",{style:{color:"#D4976C"}},"\\x00"),e("span",{style:{color:"#C98A7D"}},'やばい!"'),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"valid_encoding?")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => true")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"こんにちは地球人！"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"encoding")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => #<Encoding:UTF-8>")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"encoding")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => #<Encoding:UTF-8>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"\\xe3\\x2e\\x2e"),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"valid_encoding?")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => false")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B56959"}},'"これ'),e("span",{style:{color:"#A65E2B"}},"\\x00"),e("span",{style:{color:"#B56959"}},'やばい!"'),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"valid_encoding?")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => true")])])])],-1),bC=e("p",null,[e("code",null,"varchar"),p(", "),e("code",null,"text")],-1),AC=e("p",null,"variable size, max 1 GB",-1),DC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'こんにちは地球人！'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- こんにちは地球人！")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," E"),e("span",{style:{color:"#C98A7D"}},"'\\xe3\\x2e\\x2e'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," E"),e("span",{style:{color:"#C98A7D"}},"'これ\\x00やばい!'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'こんにちは地球人！'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- こんにちは地球人！")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," E"),e("span",{style:{color:"#B56959"}},"'\\xe3\\x2e\\x2e'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," E"),e("span",{style:{color:"#B56959"}},"'これ\\x00やばい!'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00')])])])],-1),CC=e("p",null,[p("Read the docs: "),e("a",{href:"https://ruby-doc.org/core-3.1.2/String.html",target:"_blank",rel:"noopener"},"String")],-1),BC=e("p",null,[p("Read the docs: "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-character.html",target:"_blank",rel:"noopener"},"8.3. Character Types")],-1),EC={__name:"20",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[gC,_C]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[vC]),_:1},16)]),pgtype:C(r=>[bC,AC]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[DC]),_:1},16)]),footnote_ruby:C(r=>[CC]),footnote_pg:C(r=>[BC]),default:C(()=>[mC]),_:1},16)}}},wC=Q(EC,[["__file","/@slidev/slides/20.md"]]),kC=e("h1",null,"So many string types!",-1),SC=e("div",{class:"my-12"},null,-1),xC=e("ol",null,[e("li",null,[e("p",null,[p("Don’t use "),e("code",null,"char(n)")]),e("p",null,[p("It is always size of "),e("code",null,"n"),p(" and stores unnecessary spaces at right. Mostly for compatibility with older applications.")])]),e("li",null,[e("p",null,[e("code",null,"varchar"),p(" and "),e("code",null,"text"),p(" are effectively the same, choose whatever you like.")]),e("p",null,[e("code",null,"string"),p(" in migrations is "),e("code",null,"varchar"),p(" in PostgreSQL.")])])],-1),TC=e("div",{class:"my-12"},null,-1),LC=e("p",null,[p("💡 "),e("strong",null,"Did you know?")],-1),RC=e("p",null,[p("SimpleForm gem will render multi-line HTML "),e("code",null,"<textarea>"),p(" tag for text type and single-line "),e("code",null,'<input type="text">'),p(" for character varying.")],-1),$C=e("p",null,"Convention over configuration!",-1),PC=e("p",null,[p("See SimpleForm gem README: "),e("a",{href:"https://github.com/heartcombo/simple_form#available-input-types-and-defaults-for-each-column-type",target:"_blank",rel:"noopener"},"github.com/heartcombo/simple_form")],-1),OC={__name:"21",setup(t){const s={layout:"footnote"};return I(j),(n,o)=>(w(),V(Ws,re(le(s)),{footnote:C(l=>[PC]),default:C(()=>[kC,SC,xC,TC,LC,RC,$C]),_:1},16))}},NC=Q(OC,[["__file","/@slidev/slides/21.md"]]),FC=e("p",null,[p("Please, use "),e("a",{href:"https://utf8everywhere.org/"},"utf8everywhere.org"),p("!")],-1),IC={__name:"22",setup(t){const s={layout:"center",class:"text-2xl"};return I(j),(n,o)=>{const l=Kt;return w(),V(tl,re(le(s)),{default:C(()=>[FC,P(l,{url:"https://utf8everywhere.org/",caption:"utf8everywhere.org",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},MC=Q(IC,[["__file","/@slidev/slides/22.md"]]),UC=e("h2",null,"Binary data",-1),qC=e("p",null,[e("code",null,"String")],-1),jC=e("p",null,"Variable size",-1),zC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"data "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"File"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"binread"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"“meme"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"png”"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "\\x89PNG\\r\\n\\x1A…"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"data"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"encoding "),e("span",{style:{color:"#758575"}},"# => #<Encoding:ASCII-8BIT>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"data"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"bytesize "),e("span",{style:{color:"#758575"}},"# => 46534")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "\\x89PNG\\r\\n\\x1A…"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob_before_type_cast"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"bytesize")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 46534")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob_before_type_cast")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "\\\\x89504e470d0a1a0a"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"blob_before_type_cast"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"bytesize")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 93070")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"data "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"File"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"binread"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"“meme"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"png”"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "\\x89PNG\\r\\n\\x1A…"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"data"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"encoding "),e("span",{style:{color:"#A0ADA0"}},"# => #<Encoding:ASCII-8BIT>")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"data"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"bytesize "),e("span",{style:{color:"#A0ADA0"}},"# => 46534")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "\\x89PNG\\r\\n\\x1A…"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob_before_type_cast"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"bytesize")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 46534")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob_before_type_cast")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "\\\\x89504e470d0a1a0a"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"blob_before_type_cast"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"bytesize")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 93070")])])])],-1),VC=e("p",null,[e("code",null,"bytea")],-1),HC=e("p",null,"Variable size, max 1 GB",-1),QC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"SELECT '\\x89504e470d0a1a0a…'::bytea;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}})]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#dbd7ca"}},"# Note hexadecimal format ↑")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"SELECT '\\x89504e470d0a1a0a…'::bytea;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}})]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393a34"}},"# Note hexadecimal format ↑")])])])],-1),WC=e("p",null,"Memory and network traffic consumption: 📈",-1),JC=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-binary.html",target:"_blank",rel:"noopener"},"Binary Data Types"),p(" page in the docs.")],-1),GC={__name:"23",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[qC,jC]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[zC]),_:1},16)]),pgtype:C(r=>[VC,HC]),postgresql:C(r=>[QC]),footnote_ruby:C(r=>[WC]),footnote_pg:C(r=>[JC]),default:C(()=>[UC]),_:1},16)}}},KC=Q(GC,[["__file","/@slidev/slides/23.md"]]),YC=Ce({__name:"Transform",props:{scale:{type:[Number,String],required:!1},origin:{type:String,required:!1}},setup(t){const s=t;I(j);const n=R(()=>{const o=[];return s.scale!=null&&o.push(`scale(${s.scale||1})`),{transform:o.join(" "),"transform-origin":s.origin||"top left"}});return(o,l)=>(w(),J("div",{style:et(n.value)},[Qe(o.$slots,"default")],4))}}),_f=Q(YC,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/builtin/Transform.vue"]]),ZC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},XC=e("path",{fill:"currentColor",d:"M11.547 25.752c9.057 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.014-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"},null,-1),e6=[XC];function t6(t,s){return w(),J("svg",ZC,e6)}const s6={name:"carbon-logo-twitter",render:t6},n6={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},o6={class:"m-auto animate-pulse text-4xl"},l6={key:0},r6=Ce({__name:"Tweet",props:{id:{type:[String,Number],required:!0},scale:{type:[String,Number],required:!1},conversation:{type:String,required:!1}},setup(t){var i;const s=t;I(j);const n=H(),o=Ct(),l=H(!1),r=H(!1);async function a(){const c=await window.twttr.widgets.createTweet(s.id.toString(),n.value,{theme:Ar.value?"dark":"light",conversation:s.conversation||"none"});l.value=!0,c===void 0&&(r.value=!0)}return(i=window==null?void 0:window.twttr)!=null&&i.widgets?Wt(a):u_("https://platform.twitter.com/widgets.js",()=>{o.isMounted?a():Wt(a,o)},{async:!0}),(c,u)=>{const d=s6,y=_f;return w(),V(y,{scale:c.scale||1},{default:C(()=>[e("div",{ref_key:"tweet",ref:n,class:"tweet slidev-tweet"},[!l.value||r.value?(w(),J("div",n6,[e("div",o6,[P(d),r.value?(w(),J("span",l6,'Could not load tweet with id="'+Qt(s.id)+'"',1)):Ae("v-if",!0)])])):Ae("v-if",!0)],512)]),_:1},8,["scale"])}}});const a6=Q(r6,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/builtin/Tweet.vue"]]),i6=e("h2",null,"What if 1 GB isn’t enough?",-1),c6=e("p",null,"You can’t store more in a table column (hard limit)",-1),p6=e("p",null,"But you can store up 4 TB in large objects table!",-1),u6=e("p",null,"And there is a gem for that:",-1),d6=e("p",null,[e("a",{href:"https://github.com/lsylvester/active_storage-postgresql",target:"_blank",rel:"noopener"},"active_storage-postgresql")],-1),y6=e("div",{class:"absolute bottom-5"},[p(" Beware performance implications of TOAST → "),e("br"),e("small",null,[p("More about it in PG docs: "),e("a",{href:"https://www.postgresql.org/docs/14/storage-toast.html"},"70.2. TOAST")])],-1),f6={__name:"24",setup(t){const s={};return I(j),(n,o)=>{const l=a6,r=_f,a=Kt;return w(),V(Je,re(le(s)),{default:C(()=>[i6,c6,p6,u6,d6,y6,P(r,{scale:"0.67",origin:"top right",class:"min-w-550px absolute top-5 right-5"},{default:C(()=>[P(l,{id:"1526922431780233218"})]),_:1}),P(a,{url:"https://twitter.com/Envek/status/1526922431780233218",class:"w-32 absolute bottom-8px right-12px"})]),_:1},16)}}},h6=Q(f6,[["__file","/@slidev/slides/24.md"]]),m6=e("h2",null,"Dates",-1),g6=e("p",null,[e("code",null,"Date")],-1),_6=e("p",null,"Internally stores number of days since year 4713 BC up to infinity.",-1),v6=e("blockquote",null,[e("p",null,"The Julian day number is in elapsed days since noon (Greenwich Mean Time) on January 1, 4713 BCE (in the Julian calendar)."),e("p",null,"The day count is virtually the astronomical Julian day number.")],-1),b6=e("p",null,[e("code",null,"date")],-1),A6=e("p",null,"4 bytes",-1),D6=e("p",null,"Internally stores number of days since year 4713 BC up to year 5874897 AD.",-1),C6=e("blockquote",null,[e("p",null,"In the Julian Date system, each day has a sequential number, starting from JD 0 (which is sometimes called the Julian Date). JD 0 corresponds to 1 January 4713 BC in the Julian calendar.")],-1),B6=e("p",null,[p("See the docs for "),e("a",{href:"https://ruby-doc.org/stdlib-3.1.2/libdoc/date/rdoc/Date.html#method-c-new",target:"_blank",rel:"noopener"},"Date"),p(" class.")],-1),E6=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/datetime-julian-dates.html",target:"_blank",rel:"noopener"},"B.7. Julian Dates"),p(" in PostgreSQL docs.")],-1),w6={__name:"25",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>(w(),V(gt,re(le(s)),{rubytype:C(l=>[g6]),ruby:C(l=>[_6,v6]),pgtype:C(l=>[b6,A6]),postgresql:C(l=>[D6,C6]),footnote_ruby:C(l=>[B6]),footnote_pg:C(l=>[E6]),default:C(()=>[m6]),_:1},16))}},k6=Q(w6,[["__file","/@slidev/slides/25.md"]]),S6=e("h2",null,"Time and timezones",-1),x6=e("p",null,[e("code",null,"Time")],-1),T6=e("p",{class:"text-xs"},[e("code",null,"AS::TimeWithZone")],-1),L6=e("p",null,[e("small",{class:"text-xs"},"Two UNIX timestamps inside and tzdata also")],-1),R6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"now "),e("span",{style:{color:"#758575"}},"# => 2022-10-22 13:42:42 +0900")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#758575"}},"# => Sat, 22 Oct 2022 04:42:42 UTC +00:00")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"time_zone")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"use_zone"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Asia/Tokyo"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => Sat, 22 Oct 2020 13:42:42 JST +09:00")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"now "),e("span",{style:{color:"#A0ADA0"}},"# => 2022-10-22 13:42:42 +0900")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#A0ADA0"}},"# => Sat, 22 Oct 2022 04:42:42 UTC +00:00")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"time_zone")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => #<ActiveSupport::TimeZone name="UTC", @tzinfo=#<TZInfo::DataTimezone: Etc/UTC>>')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"use_zone"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"Asia/Tokyo"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => Sat, 22 Oct 2020 13:42:42 JST +09:00")])])])],-1),$6=e("p",null,[e("code",null,"timestamp")],-1),P6=e("p",null,[e("code",null,"timestamptz")],-1),O6=e("p",null,[p("8 bytes, "),e("small",null,"microsecond precision")],-1),N6=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"tests"),e("span",{style:{color:"#DBD7CA"}}," (t1 "),e("span",{style:{color:"#CB7676"}},"timestamp"),e("span",{style:{color:"#DBD7CA"}},", t2 "),e("span",{style:{color:"#CB7676"}},"timestamptz"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Etc/UTC'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (t1, t2) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Asia/Tokyo'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (t1, t2) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Europe/Lisbon'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (t1, t2) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SET"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"SESSION"),e("span",{style:{color:"#DBD7CA"}}," timezone "),e("span",{style:{color:"#4D9375"}},"TO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Asia/Tokyo'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," tests;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"             t1      |              t2")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"---------------------+--------------------------------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"04"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}}," │ "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"02"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"09"),e("span",{style:{color:"#DBD7CA"}}," │")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}}," │ "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"02"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"09"),e("span",{style:{color:"#DBD7CA"}}," │")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"22"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"05"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}}," │ "),e("span",{style:{color:"#6394BF"}},"2022"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#6394BF"}},"02"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"13"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#6394BF"}},"09"),e("span",{style:{color:"#DBD7CA"}}," │")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"tests"),e("span",{style:{color:"#393A34"}}," (t1 "),e("span",{style:{color:"#AB5959"}},"timestamp"),e("span",{style:{color:"#393A34"}},", t2 "),e("span",{style:{color:"#AB5959"}},"timestamptz"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Etc/UTC'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," tests (t1, t2) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Asia/Tokyo'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," tests (t1, t2) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Europe/Lisbon'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," tests (t1, t2) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SET"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"SESSION"),e("span",{style:{color:"#393A34"}}," timezone "),e("span",{style:{color:"#1C6B48"}},"TO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Asia/Tokyo'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," tests;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"             t1      |              t2")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"---------------------+--------------------------------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"04"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}}," │ "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"02"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"09"),e("span",{style:{color:"#393A34"}}," │")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}}," │ "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"02"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"09"),e("span",{style:{color:"#393A34"}}," │")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"22"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"05"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}}," │ "),e("span",{style:{color:"#296AA3"}},"2022"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"10"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#296AA3"}},"02"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"13"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#296AA3"}},"09"),e("span",{style:{color:"#393A34"}}," │")])])])],-1),F6=e("p",null,"Ruby on Rails uses UTC timezone internally.",-1),I6=e("p",null,[p("Use "),e("code",null,"timestamp with time zone"),p(" whenever possible!")],-1),M6={__name:"26",setup(t){const s={layout:"comparison",rubyRails:"ruby-rails"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[x6,T6,L6]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[R6]),_:1},16)]),pgtype:C(r=>[$6,P6,O6]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[N6]),_:1},16)]),footnote_ruby:C(r=>[F6]),footnote_pg:C(r=>[I6]),default:C(()=>[S6]),_:1},16)}}},U6=Q(M6,[["__file","/@slidev/slides/26.md"]]),q6=e("h2",null,"How to not mess up with timezones",-1),j6=e("div",{class:"my-12"},null,-1),z6=e("ol",null,[e("li",null,[e("p",null,"Use timezone-aware methods"),e("p",null,[p("Use "),e("code",null,"Time.current"),p(" and "),e("code",null,"Date.current"),p(" instead of "),e("code",null,"Time.now"),p(" and "),e("code",null,"Date.today")])]),e("li",null,[e("p",null,"Convert timestamps to user time zone"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"use_zone"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"timezone"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"# Do SQL queries, render views, …")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# or")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"in_time_zone"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"user"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"timezone"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"use_zone"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"timezone"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# Do SQL queries, render views, …")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# or")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"in_time_zone"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"user"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"timezone"),e("span",{style:{color:"#8E8F8B"}},")")])])])])]),e("li",null,[e("p",null,"Don’t use dates in SQL, use timestamps"),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- Posts.where(published_at: Date.today...Date.tomorrow)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ Posts.where(published_at: Time.current.beginning_of_day..Time.current.end_of_day)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- Posts.where(published_at: Date.today...Date.tomorrow)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ Posts.where(published_at: Time.current.beginning_of_day..Time.current.end_of_day)")])])])])])],-1),V6=e("p",null,[p("More tips here: "),e("a",{href:"https://thoughtbot.com/blog/its-about-time-zones",target:"_blank",rel:"noopener"},"thoughtbot.com/blog/its-about-time-zones")],-1),H6={__name:"27",setup(t){const s={layout:"footnote"};return I(j),(n,o)=>{const l=Kt;return w(),V(Ws,re(le(s)),{footnote:C(r=>[V6,P(l,{url:"https://thoughtbot.com/blog/its-about-time-zones",class:"w-32 absolute bottom-10px right-10px"})]),default:C(()=>[q6,j6,z6]),_:1},16)}}},Q6=Q(H6,[["__file","/@slidev/slides/27.md"]]),W6=["width","height","src"],J6=Ce({__name:"Youtube",props:{id:{type:String,required:!0},width:{type:Number,required:!1},height:{type:Number,required:!1}},setup(t){return I(j),(s,n)=>(w(),J("iframe",{class:"youtube",width:s.width,height:s.height,src:`https://www.youtube.com/embed/${s.id}`,title:"YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,W6))}}),G6=Q(J6,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/builtin/Youtube.vue"]]),K6=e("h2",null,"Time zones are hard",-1),Y6={__name:"28",setup(t){const s={layout:"center"};return I(j),(n,o)=>{const l=G6,r=Kt;return w(),V(tl,re(le(s)),{default:C(()=>[K6,P(l,{id:"-5wpm-gesOY",width:"640",height:"360",class:"pt-10"}),P(r,{url:"https://youtu.be/-5wpm-gesOY",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},Z6=Q(Y6,[["__file","/@slidev/slides/28.md"]]),X6=e("h2",null,"Void and uncertainity",-1),eB=e("p",null,[e("code",null,"NilClass")],-1),tB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => true ¯\\_(ツ)_/¯")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => true ¯\\_(ツ)_/¯")])])])],-1),sB=e("p",null,[e("code",null,"NULL")],-1),nB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- NULL 🚨")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DISTINCT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- false")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Ruby'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- NULL 🚨")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Ruby'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- false")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Ruby'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DISTINCT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},"; "),e("span",{style:{color:"#758575"}},"-- true")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- NULL 🚨")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DISTINCT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- false")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Ruby'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- NULL 🚨")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Ruby'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- false")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Ruby'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DISTINCT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},"; "),e("span",{style:{color:"#A0ADA0"}},"-- true")])])])],-1),oB={__name:"29",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[eB]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[tB]),_:1},16)]),pgtype:C(r=>[sB]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[nB]),_:1},16)]),default:C(()=>[X6]),_:1},16)}}},lB=Q(oB,[["__file","/@slidev/slides/29.md"]]),rB=e("h1",null,"PostgreSQL-specific datatypes",-1),aB={__name:"30",setup(t){const s={layout:"center"};return I(j),(n,o)=>(w(),V(tl,re(le(s)),{default:C(()=>[rB]),_:1},16))}},iB=Q(aB,[["__file","/@slidev/slides/30.md"]]),cB=e("h2",null,"JSON",-1),pB=e("p",null,[e("code",null,"Hash"),p(", "),e("code",null,"Array")],-1),uB=e("p",null,"Be careful with symbols as keys",-1),dB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"foo"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"bar"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"foo"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"baz"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}."),e("span",{style:{color:"#DBD7CA"}},"to_json")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# {"foo":"baz"}')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"foo"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"bar"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"foo"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"baz"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}."),e("span",{style:{color:"#393A34"}},"to_json")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# {"foo":"baz"}')])])])],-1),yB=e("p",null,[p("Define "),e("code",null,"as_json"),p(" method on your classes to serialize them to JSON automatically.")],-1),fB=e("p",null,[p("Behavior of "),e("code",null,"JSON.dump"),p(" and "),e("code",null,"to_json"),p(" in Rails is different!")],-1),hB=e("p",null,[p("See ActiveSupport’s "),e("a",{href:"https://github.com/rails/rails/blob/1891a3ffcc123de89c47011f36c547354c669481/activesupport/lib/active_support/core_ext/object/json.rb",target:"_blank",rel:"noopener"},"core_ext/object/json.rb")],-1),mB=e("p",null,[e("code",null,"json"),p(", "),e("code",null,"jsonb")],-1),gB=e("p",null,"Variable length, up to 1GB",-1),_B=e("p",null,[p("JSON saves value as is "),e("small",null,"(it is just a string)")],-1),vB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#4D9375"}},"json"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- {"foo": "bar","foo":"baz"}')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#1C6B48"}},"json"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- {"foo": "bar","foo":"baz"}')])])])],-1),bB=e("p",null,"JSONB is effective but strict: no duplicate keys, doesn’t preserve whitespaces, etc…",-1),AB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#DBD7CA"}},"::jsonb;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- {"foo": "baz"}')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`'{"foo": "bar","foo":"baz"}'`),e("span",{style:{color:"#393A34"}},"::jsonb;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- {"foo": "baz"}')])])])],-1),DB=e("p",null,[p("Inside: string "),e("small",null,"(no null-bytes!)"),p(", numeric, …")],-1),CB=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-json.html",target:"_blank",rel:"noopener"},"8.14 JSON Types"),p(" and "),e("a",{href:"https://www.postgresql.org/docs/14/functions-json.html",target:"_blank",rel:"noopener"},"9.16 JSON Functions and Operators")],-1),BB={__name:"31",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[pB]),ruby:C(r=>[uB,P(l,ue({},{ranges:[""]}),{default:C(()=>[dB]),_:1},16),yB,fB]),footnote_ruby:C(r=>[hB]),pgtype:C(r=>[mB,gB]),postgresql:C(r=>[_B,P(l,ue({},{ranges:[""]}),{default:C(()=>[vB]),_:1},16),bB,P(l,ue({},{ranges:[""]}),{default:C(()=>[AB]),_:1},16),DB]),footnote_pg:C(r=>[CB]),default:C(()=>[cB]),_:1},16)}}},EB=Q(BB,[["__file","/@slidev/slides/31.md"]]),wB=e("h2",null,"JSON on steroids",-1),kB=e("a",{href:"https://github.com/DmitryTsepelev/store_model",class:"block my-10 text-center no-underline border-none hover:border-none"},[e("img",{alt:"store_model gem",src:"https://opengraph.githubassets.com/1a8dd076f9dc2fdca766c80094db91f36af4a302e4708ed0f3ad3d6b9535733d/DmitryTsepelev/store_model",class:"w-96 mx-auto"})],-1),SB=e("p",null,[p("Use "),e("a",{href:"https://github.com/DmitryTsepelev/store_model",target:"_blank",rel:"noopener"},"store_model"),p(" gem to make powerful value objects from JSON fields.")],-1),xB=e("p",null,[e("strong",null,"But don’t overuse!")],-1),TB=e("p",null,"There is performance penalty for serialization and deserialization.",-1),LB={__name:"32",setup(t){const s={};return I(j),(n,o)=>{const l=Kt;return w(),V(Je,re(le(s)),{default:C(()=>[wB,kB,SB,xB,TB,P(l,{url:"https://github.com/DmitryTsepelev/store_model",caption:"store_model gem repo",class:"w-32 absolute bottom-10px right-10px"})]),_:1},16)}}},RB=Q(LB,[["__file","/@slidev/slides/32.md"]]),$B=e("h2",null,"Ranges",-1),PB=e("p",null,[e("code",null,"Range")],-1),OB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},".."),e("span",{style:{color:"#6394BF"}},"7"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"or"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#858585"}},"..."),e("span",{style:{color:"#6394BF"}},"8")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},".."),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"day"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_now")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# endless or beginless ranges")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current"),e("span",{style:{color:"#858585"}},"..")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#E0A569"}},"Date"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"yesterday")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#858585"}},".."),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"or"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Range"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Beginning is always included if possible :-(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"pluck"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},`"intrange(1, 5, '()')"`),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"first "),e("span",{style:{color:"#758575"}},"# 2...5")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Test"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"pluck"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},`"tstzrange(now(), now() + '1 hour', '()')"`),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"first")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# ArgumentError: The Ruby Range object does not")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# support excluding the beginning of a Range.")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},".."),e("span",{style:{color:"#296AA3"}},"7"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"or"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#8E8F8B"}},"..."),e("span",{style:{color:"#296AA3"}},"8")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},".."),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"day"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_now")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# endless or beginless ranges")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current"),e("span",{style:{color:"#8E8F8B"}},"..")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#B58451"}},"Date"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"yesterday")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#8E8F8B"}},".."),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"or"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Range"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Beginning is always included if possible :-(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"pluck"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},`"intrange(1, 5, '()')"`),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"first "),e("span",{style:{color:"#A0ADA0"}},"# 2...5")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Test"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"pluck"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},`"tstzrange(now(), now() + '1 hour', '()')"`),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"first")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# ArgumentError: The Ruby Range object does not")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# support excluding the beginning of a Range.")])])])],-1),NB=e("p",null,[e("code",null,"intrange"),p(", "),e("code",null,"tsrange"),p(", …")],-1),FB=e("p",null,[e("code",null,"intmultirange"),p(", …")],-1),IB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," int8range("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"7"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'[]'"),e("span",{style:{color:"#DBD7CA"}},"); "),e("span",{style:{color:"#758575"}},"-- [5,8]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," int8range("),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"8"),e("span",{style:{color:"#DBD7CA"}},"); "),e("span",{style:{color:"#758575"}},"-- [5,8)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," tstzrange("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1 day'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'()'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- endless or beginless ranges")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," tstzrange("),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," tstzrange("),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- PG 14: Multiranges and operators")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," nummultirange(numrange("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"20"),e("span",{style:{color:"#DBD7CA"}},"))")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," nummultirange(numrange("),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"6"),e("span",{style:{color:"#DBD7CA"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- {[1,4),[6,20)}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- and many more… (exclusion constraints!)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," int8range("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"7"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'[]'"),e("span",{style:{color:"#393A34"}},"); "),e("span",{style:{color:"#A0ADA0"}},"-- [5,8]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," int8range("),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"8"),e("span",{style:{color:"#393A34"}},"); "),e("span",{style:{color:"#A0ADA0"}},"-- [5,8)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," tstzrange("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1 day'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'()'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'-- ["2022-10-22 14:42:42+09","2022-10-23 14:42:42+09")')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- endless or beginless ranges")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," tstzrange("),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," tstzrange("),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- PG 14: Multiranges and operators")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," nummultirange(numrange("),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"20"),e("span",{style:{color:"#393A34"}},"))")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," nummultirange(numrange("),e("span",{style:{color:"#296AA3"}},"4"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"6"),e("span",{style:{color:"#393A34"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- {[1,4),[6,20)}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- and many more… (exclusion constraints!)")])])])],-1),MB=e("p",null,[p("Additional methods in the "),e("a",{href:"https://github.com/rubyworks/facets",target:"_blank",rel:"noopener"},"facets"),p(" gem.")],-1),UB=e("p",null,[e("a",{href:"https://www.postgresql.org/docs/14/rangetypes.html",target:"_blank",rel:"noopener"},"https://www.postgresql.org/docs/14/rangetypes.html")],-1),qB={__name:"33",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[PB]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[OB]),_:1},16)]),pgtype:C(r=>[NB,FB]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[IB]),_:1},16)]),footnote_ruby:C(r=>[MB]),footnote_pg:C(r=>[UB]),default:C(()=>[$B]),_:1},16)}}},jB=Q(qB,[["__file","/@slidev/slides/33.md"]]),zB=e("h2",null,"UUID",-1),VB=e("div",{class:"absolute bottom-75px left-180px rotate-355"},[e("p",null,[p("Also take a look at upcoming UUIDv6, "),e("strong",null,"v7"),p(", and v8!")]),e("p",{class:"text-xs"},[e("a",{href:"https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04"},"datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04")])],-1),HB=e("p",null,[e("code",null,"String")],-1),QB=e("p",null,"36 bytes",-1),WB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# All-random UUIDv4")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"SecureRandom"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"uuid")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => “40f15398-4b38-4e16-8b3c-ff16fc960d38”")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# Determined UUIDv5 (hash-based)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Digest"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"UUID"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"uuid_v5"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Digest"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"UUID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"DNS_NAMESPACE"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"name"'),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "9b8edca0-90f2-5031-8e5d-3f708834696c"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# All-random UUIDv4")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"SecureRandom"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"uuid")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => “40f15398-4b38-4e16-8b3c-ff16fc960d38”")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# Determined UUIDv5 (hash-based)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Digest"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"UUID"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"uuid_v5"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Digest"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"UUID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"DNS_NAMESPACE"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"name"'),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "9b8edca0-90f2-5031-8e5d-3f708834696c"')])])])],-1),JB=e("p",null,[e("code",null,"uuid")],-1),GB=e("p",null,"16 bytes",-1),KB=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," EXTENSION "),e("span",{style:{color:"#C98A7D"}},'"pgcrypto"'),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," gen_random_uuid"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," EXTENSION "),e("span",{style:{color:"#C98A7D"}},'"uuid-ossp"'),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," uuid_generate_v5(uuid_ns_dns"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 9b8edca0-90f2-5031-8e5d-3f708834696c")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," EXTENSION "),e("span",{style:{color:"#B56959"}},'"pgcrypto"'),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," gen_random_uuid"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 2cfff962-4a24-4ef3-b2f8-35351b18bf63")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," EXTENSION "),e("span",{style:{color:"#B56959"}},'"uuid-ossp"'),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," uuid_generate_v5(uuid_ns_dns"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 9b8edca0-90f2-5031-8e5d-3f708834696c")])])])],-1),YB=e("p",null,[p("See Rails docs for "),e("a",{href:"https://api.rubyonrails.org/v6.0.3/classes/Digest/UUID.html",target:"_blank",rel:"noopener"},"Digest::UUID")],-1),ZB=e("p",null,[p("See docs for "),e("a",{href:"https://www.postgresql.org/docs/14/pgcrypto.html",target:"_blank",rel:"noopener"},"pgcrypto"),p(" and "),e("a",{href:"https://www.postgresql.org/docs/14/uuid-ossp.html",target:"_blank",rel:"noopener"},"uuid-ossp"),p(" extensions.")],-1),XB={__name:"34",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=Kt,r=je;return w(),V(gt,re(le(s)),{rubytype:C(a=>[HB,QB]),ruby:C(a=>[P(r,ue({},{ranges:[""]}),{default:C(()=>[WB]),_:1},16)]),pgtype:C(a=>[JB,GB]),postgresql:C(a=>[P(r,ue({},{ranges:[""]}),{default:C(()=>[KB]),_:1},16)]),footnote_ruby:C(a=>[YB]),footnote_pg:C(a=>[ZB]),default:C(()=>[zB,VB,P(l,{url:"https://datatracker.ietf.org/doc/html/draft-peabody-dispatch-new-uuid-format-04",class:"w-32 absolute bottom-50px right-150px"})]),_:1},16)}}},eE=Q(XB,[["__file","/@slidev/slides/34.md"]]),tE=e("h2",null,"IP addresses",-1),sE=e("p",null,[e("code",null,"IPAddr")],-1),nE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"ip6 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IPAddr"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"3ffe:505:2::1"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"ip4 "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"IPAddr"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"192.168.2.0/24"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"IPAddr"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"192.168.2.0/24"'),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"mask"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"16"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"#<IPAddr: IPv4:192.168.0.0/255.255.0.0>")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"ip6 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IPAddr"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"3ffe:505:2::1"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"ip4 "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"IPAddr"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"192.168.2.0/24"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"IPAddr"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"192.168.2.0/24"'),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"mask"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"16"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"#<IPAddr: IPv4:192.168.0.0/255.255.0.0>")])])])],-1),oE=e("p",null,[e("code",null,"inet"),p(", "),e("code",null,"cidr")],-1),lE=e("p",null,"7 or 19 bytes both",-1),rE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'::1'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'127.0.0.1/32'"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," set_masklen("),e("span",{style:{color:"#CB7676"}},"cidr"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'192.168.1.0/24'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#6394BF"}},"16"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 192.168.0.0/16")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," inet_merge("),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'192.168.1.5/24'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"inet"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'192.168.2.5/24'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 192.168.0.0/22")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'::1'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'127.0.0.1/32'"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," set_masklen("),e("span",{style:{color:"#AB5959"}},"cidr"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'192.168.1.0/24'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#296AA3"}},"16"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 192.168.0.0/16")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," inet_merge("),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'192.168.1.5/24'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"inet"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'192.168.2.5/24'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 192.168.0.0/22")])])])],-1),aE=e("small",null,[e("p",null,[e("code",null,"inet"),p(" works with both host and network addresses.")]),e("p",null,[e("code",null,"cidr"),p(" works with network addresses only.")])],-1),iE=e("p",null,[p("See "),e("a",{href:"https://ruby-doc.org/stdlib-3.1.0/libdoc/ipaddr/rdoc/IPAddr.html#method-i-mask",target:"_blank",rel:"noopener"},"IPAddr"),p(" docs.")],-1),cE=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-net-types.html",target:"_blank",rel:"noopener"},"Network address types"),p(" and "),e("a",{href:"https://www.postgresql.org/docs/14/functions-net.html",target:"_blank",rel:"noopener"},"functions and operators"),p(".")],-1),pE={__name:"35",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[sE]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[nE]),_:1},16)]),pgtype:C(r=>[oE,lE]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[rE]),_:1},16),aE]),footnote_ruby:C(r=>[iE]),footnote_pg:C(r=>[cE]),default:C(()=>[tE]),_:1},16)}}},uE=Q(pE,[["__file","/@slidev/slides/35.md"]]),dE=e("h2",null,"Durations",-1),yE=e("p",{class:"text-xs"},[e("code",null,"ActiveSupport::Duration")],-1),fE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Time"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"current "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"year")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => Thu, 18 Jun 2021 21:00:00 MSK +03:00")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"100500"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"weeks"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"iso8601")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => "P100500W"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"month"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_i")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# => 2629746 (30.436875 days in seconds)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Time"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"current "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"year")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => Thu, 18 Jun 2021 21:00:00 MSK +03:00")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"100500"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"weeks"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"iso8601")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => "P100500W"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"month"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_i")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# => 2629746 (30.436875 days in seconds)")])])])],-1),hE=e("p",null,[e("code",null,"interval")],-1),mE=e("p",null,"16 bytes",-1),gE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"now"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," ‘"),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"year"),e("span",{style:{color:"#DBD7CA"}},"’;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 2021-06-18 21:00:00+03")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'100500 weeks'"),e("span",{style:{color:"#DBD7CA"}},"::interval;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 703500 days")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," EXTRACT(epoch "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'1 month'"),e("span",{style:{color:"#DBD7CA"}},"::interval);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- 2592000 (30.0 days in seconds)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"now"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," ‘"),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"year"),e("span",{style:{color:"#393A34"}},"’;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 2021-06-18 21:00:00+03")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'100500 weeks'"),e("span",{style:{color:"#393A34"}},"::interval;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 703500 days")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," EXTRACT(epoch "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'1 month'"),e("span",{style:{color:"#393A34"}},"::interval);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- 2592000 (30.0 days in seconds)")])])])],-1),_E=e("p",null,[p("Disclaimer: I added it to Rails in "),e("a",{href:"https://github.com/rails/rails/pull/16919",target:"_blank",rel:"noopener"},"pull request № 16919"),p(".")],-1),vE=e("p",null,"Supported out-of-the-box in Ruby on Rails 6.1+",-1),bE={__name:"36",setup(t){const s={layout:"comparison",rubyRails:"rails"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[yE]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[fE]),_:1},16)]),pgtype:C(r=>[hE,mE]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[gE]),_:1},16)]),footnote_ruby:C(r=>[_E]),footnote_pg:C(r=>[vE]),default:C(()=>[dE]),_:1},16)}}},AE=Q(bE,[["__file","/@slidev/slides/36.md"]]),DE=e("h2",null,"Enums",-1),CE=e("p",null,[e("code",null,"String")],-1),BE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# In migration (Rails 7+):")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"create_enum "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"status"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},'"draft"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"published"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"archived"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"trashed"'),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"change_table "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"posts"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#B8A965"}},"t"),e("span",{style:{color:"#858585"}},"|")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  t"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"enum "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"status"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"enum_type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"status"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"default"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"draft"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"false")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# In the application code:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Article"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ApplicationRecord")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  enum "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"status"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"draft"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"draft"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"published"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"published"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"archived"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"archived"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"trashed"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"trashed"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Article"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"status "),e("span",{style:{color:"#758575"}},'#=> "draft"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Article"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"draft? "),e("span",{style:{color:"#758575"}},"#=> true")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Article"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"published!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# UPDATE articles SET status = 'published' WHERE id = …")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# In migration (Rails 7+):")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"create_enum "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"status"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},'"draft"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"published"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"archived"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"trashed"'),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"change_table "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"posts"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#8C862B"}},"t"),e("span",{style:{color:"#8E8F8B"}},"|")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  t"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"enum "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"status"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"enum_type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"status"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"default"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"draft"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"false")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# In the application code:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Article"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ApplicationRecord")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  enum "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"status"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"draft"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"draft"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"published"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"published"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"archived"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"archived"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"trashed"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"trashed"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Article"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"status "),e("span",{style:{color:"#A0ADA0"}},'#=> "draft"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Article"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"draft? "),e("span",{style:{color:"#A0ADA0"}},"#=> true")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Article"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"published!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# UPDATE articles SET status = 'published' WHERE id = …")])])])],-1),EE=e("p",null,"Custom enum types",-1),wE=e("p",null,"4 bytes",-1),kE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"status"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," ENUM ("),e("span",{style:{color:"#C98A7D"}},"'draft'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'published'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'archived'"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#C98A7D"}},"'trashed'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"ALTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," posts "),e("span",{style:{color:"#4D9375"}},"ADD"),e("span",{style:{color:"#DBD7CA"}}," COLUMN "),e("span",{style:{color:"#C98A7D"}},'"status"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NOT NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"DEFAULT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'draft'"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," posts ("),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},"'published'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," posts ("),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}},") "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},"'draft'"),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," id, "),e("span",{style:{color:"#4D9375"}},"status"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," posts;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," id |   "),e("span",{style:{color:"#4D9375"}},"status")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"----+------------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#DBD7CA"}}," | draft")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#DBD7CA"}}," | published")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"status"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," ENUM ("),e("span",{style:{color:"#B56959"}},"'draft'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'published'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'archived'"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B56959"}},"'trashed'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"ALTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," posts "),e("span",{style:{color:"#1C6B48"}},"ADD"),e("span",{style:{color:"#393A34"}}," COLUMN "),e("span",{style:{color:"#B56959"}},'"status"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NOT NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"DEFAULT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'draft'"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," posts ("),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},"'published'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," posts ("),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}},") "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},"'draft'"),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," id, "),e("span",{style:{color:"#1C6B48"}},"status"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," posts;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," id |   "),e("span",{style:{color:"#1C6B48"}},"status")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"----+------------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#393A34"}}," | draft")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#393A34"}}," | published")])])])],-1),SE=e("p",null,"Values are human-readable in SQL",-1),xE=e("p",null,[p("On Rails < 7 you can use "),e("a",{href:"https://github.com/bibendi/activerecord-postgres_enum",target:"_blank",rel:"noopener"},"activerecord-postgres_enum"),p(" gem")],-1),TE=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/datatype-enum.html",target:"_blank",rel:"noopener"},"8.7 Enumerated Types"),p(" page in PostgreSQL docs")],-1),LE={__name:"37",setup(t){const s={layout:"comparison"};return I(j),(n,o)=>{const l=je;return w(),V(gt,re(le(s)),{rubytype:C(r=>[CE]),ruby:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[BE]),_:1},16)]),pgtype:C(r=>[EE,wE]),postgresql:C(r=>[P(l,ue({},{ranges:[""]}),{default:C(()=>[kE]),_:1},16),SE]),footnote_ruby:C(r=>[xE]),footnote_pg:C(r=>[TE]),default:C(()=>[DE]),_:1},16)}}},RE=Q(LE,[["__file","/@slidev/slides/37.md"]]),$E=e("h1",null,"Inside ActiveRecord",-1),PE=e("p",null,"How datatypes are working under the hood",-1),OE={__name:"38",setup(t){const s={layout:"cover"};return I(j),(n,o)=>(w(),V(el,re(le(s)),{default:C(()=>[$E,PE]),_:1},16))}},NE=Q(OE,[["__file","/@slidev/slides/38.md"]]),FE=e("h2",null,"Example of composite type use case",-1),IE=e("div",{class:"my-8"},null,-1),ME=e("p",null,"What if we want to:",-1),UE=e("ol",null,[e("li",null,[e("p",null,"Store products with prices in different currencies in one table")]),e("li",null,[e("p",null,"Work with price and currency as a whole"),e("p",null,[p("There is a great "),e("a",{href:"https://github.com/RubyMoney/money",target:"_blank",rel:"noopener"},"money"),p(" gem in Ruby, but how to do it in SQL?")])]),e("li",null,[e("p",null,"And do some calculations without having to write complex SQL queries with joins.")])],-1),qE={class:"grid grid-cols-2 gap-2"},jE=e("p",null,"Before:",-1),zE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"User"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"string currency"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"has many")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"Product"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"numeric price"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"User"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"string currency"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"has many")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"Product"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"numeric price"),e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),VE=e("p",null,"After:",-1),HE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"User"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"string currency"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"# only as a setting!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"has many")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"Product"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"true_money price "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"string"),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"numeric"),e("span",{style:{color:"#858585"}},"))")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"User"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"string currency"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"# only as a setting!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"has many")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"Product"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"true_money price "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"string"),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"numeric"),e("span",{style:{color:"#8E8F8B"}},"))")])])])],-1),QE={__name:"39",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[FE,IE,ME,UE,e("div",qE,[e("div",null,[jE,P(l,ue({},{ranges:[""]}),{default:C(()=>[zE]),_:1},16)]),e("div",null,[VE,P(l,ue({},{ranges:[""]}),{default:C(()=>[HE]),_:1},16)])])]),_:1},16)}}},WE=Q(QE,[["__file","/@slidev/slides/39.md"]]),JE=e("h2",null,"Create custom datatype",-1),GE=e("p",null,"Declare composite datatype in the database:",-1),KE=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TYPE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"_true_money"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," (")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  currency "),e("span",{style:{color:"#CB7676"}},"varchar"),e("span",{style:{color:"#DBD7CA"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  amount "),e("span",{style:{color:"#CB7676"}},"numeric")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- type with constraints to allow:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- - either NULL value (no price, can be forbidden by NOT NULL)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-- - or value with both currency and amount specified")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DOMAIN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"true_money"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," _true_money "),e("span",{style:{color:"#CB7676"}},"CHECK"),e("span",{style:{color:"#DBD7CA"}}," (")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AND")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"DISTINCT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#4D9375"}},"null"),e("span",{style:{color:"#DBD7CA"}},")::_true_money "),e("span",{style:{color:"#4D9375"}},"OR")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  (("),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},").currency "),e("span",{style:{color:"#4D9375"}},"IS NOT NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AND"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},").amount "),e("span",{style:{color:"#4D9375"}},"IS NOT NULL"),e("span",{style:{color:"#DBD7CA"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TYPE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"_true_money"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," (")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  currency "),e("span",{style:{color:"#AB5959"}},"varchar"),e("span",{style:{color:"#393A34"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  amount "),e("span",{style:{color:"#AB5959"}},"numeric")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- type with constraints to allow:")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- - either NULL value (no price, can be forbidden by NOT NULL)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-- - or value with both currency and amount specified")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DOMAIN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"true_money"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," _true_money "),e("span",{style:{color:"#AB5959"}},"CHECK"),e("span",{style:{color:"#393A34"}}," (")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AND")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"DISTINCT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#1C6B48"}},"null"),e("span",{style:{color:"#393A34"}},")::_true_money "),e("span",{style:{color:"#1C6B48"}},"OR")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  (("),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},").currency "),e("span",{style:{color:"#1C6B48"}},"IS NOT NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AND"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},").amount "),e("span",{style:{color:"#1C6B48"}},"IS NOT NULL"),e("span",{style:{color:"#393A34"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},");")])])])],-1),YE={__name:"40",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[JE,GE,P(l,ue({},{ranges:["all","1-4","6-13"]}),{default:C(()=>[KE]),_:1},16)]),_:1},16)}}},ZE=Q(YE,[["__file","/@slidev/slides/40.md"]]),XE=e("h2",null,"Fun fact about composite datatypes",-1),ew=e("p",null,"Every table defines own datatype which can be used elsewhere",-1),tw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}},' "'),e("span",{style:{color:"#A1B567"}},"inner"),e("span",{style:{color:"#DBD7CA"}},'" ( v1 '),e("span",{style:{color:"#CB7676"}},"integer"),e("span",{style:{color:"#DBD7CA"}},", v2 "),e("span",{style:{color:"#CB7676"}},"text"),e("span",{style:{color:"#DBD7CA"}}," );")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}},' "'),e("span",{style:{color:"#A1B567"}},"outer"),e("span",{style:{color:"#DBD7CA"}},'" (v inner);')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"outer"'),e("span",{style:{color:"#DBD7CA"}}," (v) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," (("),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},","),e("span",{style:{color:"#C98A7D"}},"'Hello world!'"),e("span",{style:{color:"#DBD7CA"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"outer"'),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         v")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"-------------------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#6394BF"}},"42"),e("span",{style:{color:"#DBD7CA"}},","),e("span",{style:{color:"#C98A7D"}},'"Hello world!"'),e("span",{style:{color:"#DBD7CA"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}},' "'),e("span",{style:{color:"#6C7834"}},"inner"),e("span",{style:{color:"#393A34"}},'" ( v1 '),e("span",{style:{color:"#AB5959"}},"integer"),e("span",{style:{color:"#393A34"}},", v2 "),e("span",{style:{color:"#AB5959"}},"text"),e("span",{style:{color:"#393A34"}}," );")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}},' "'),e("span",{style:{color:"#6C7834"}},"outer"),e("span",{style:{color:"#393A34"}},'" (v inner);')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"outer"'),e("span",{style:{color:"#393A34"}}," (v) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," (("),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},","),e("span",{style:{color:"#B56959"}},"'Hello world!'"),e("span",{style:{color:"#393A34"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"outer"'),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         v")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"-------------------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#296AA3"}},"42"),e("span",{style:{color:"#393A34"}},","),e("span",{style:{color:"#B56959"}},'"Hello world!"'),e("span",{style:{color:"#393A34"}},")")])])])],-1),sw=e("img",{src:"https://i.imgflip.com/6w9gip.jpg",alt:"Yo dawg I heard you like table composite types, so I put a table in your table so you can insert rows while you inserting rows",class:"w-330px float-right mt-4"},null,-1),nw=e("p",null,"But don’t use it in reality, please!",-1),ow=e("p",null,"(There are limitations)",-1),lw={__name:"41",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[XE,ew,P(l,ue({},{ranges:[""]}),{default:C(()=>[tw]),_:1},16),sw,nw,ow]),_:1},16)}}},rw=Q(lw,[["__file","/@slidev/slides/41.md"]]),aw=e("h2",null,"Use composite datatype",-1),iw=e("div",{class:"my-14"},null,-1),cw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"ALTER"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"TABLE"),e("span",{style:{color:"#DBD7CA"}}," tests "),e("span",{style:{color:"#4D9375"}},"ADD"),e("span",{style:{color:"#DBD7CA"}}," COLUMN price true_money;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (price) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," (("),e("span",{style:{color:"#C98A7D"}},"'JPY'"),e("span",{style:{color:"#DBD7CA"}},","),e("span",{style:{color:"#6394BF"}},"10000"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"INSERT INTO"),e("span",{style:{color:"#DBD7CA"}}," tests (price) "),e("span",{style:{color:"#4D9375"}},"VALUES"),e("span",{style:{color:"#DBD7CA"}}," ("),e("span",{style:{color:"#C98A7D"}},`'("JPY",100.0)'`),e("span",{style:{color:"#DBD7CA"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," price "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," tests; "),e("span",{style:{color:"#758575"}},"-- (JPY,10000.0),(JPY,100.0)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," (price).currency, (price).amount "),e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," tests;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," currency | amount")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"----------+---------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," JPY      | "),e("span",{style:{color:"#6394BF"}},"10000"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"0")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," JPY      |   "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#DBD7CA"}},"."),e("span",{style:{color:"#6394BF"}},"0")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"ALTER"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"TABLE"),e("span",{style:{color:"#393A34"}}," tests "),e("span",{style:{color:"#1C6B48"}},"ADD"),e("span",{style:{color:"#393A34"}}," COLUMN price true_money;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," tests (price) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," (("),e("span",{style:{color:"#B56959"}},"'JPY'"),e("span",{style:{color:"#393A34"}},","),e("span",{style:{color:"#296AA3"}},"10000"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}},"));")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"INSERT INTO"),e("span",{style:{color:"#393A34"}}," tests (price) "),e("span",{style:{color:"#1C6B48"}},"VALUES"),e("span",{style:{color:"#393A34"}}," ("),e("span",{style:{color:"#B56959"}},`'("JPY",100.0)'`),e("span",{style:{color:"#393A34"}},");")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," price "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," tests; "),e("span",{style:{color:"#A0ADA0"}},"-- (JPY,10000.0),(JPY,100.0)")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," (price).currency, (price).amount "),e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," tests;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," currency | amount")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"----------+---------")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," JPY      | "),e("span",{style:{color:"#296AA3"}},"10000"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"0")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," JPY      |   "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#393A34"}},"."),e("span",{style:{color:"#296AA3"}},"0")])])])],-1),pw=e("p",null,[p("See "),e("a",{href:"https://www.postgresql.org/docs/14/rowtypes.html",target:"_blank",rel:"noopener"},"8.16. Composite Types"),p(" in PostgreSQL docs for more advices and caveats.")],-1),uw={__name:"42",setup(t){const s={layout:"footnote"};return I(j),(n,o)=>{const l=je;return w(),V(Ws,re(le(s)),{footnote:C(r=>[pw]),default:C(()=>[aw,iw,P(l,ue({},{ranges:["all","1","3-4","6","8-12"]}),{default:C(()=>[cw]),_:1},16)]),_:1},16)}}},dw=Q(uw,[["__file","/@slidev/slides/42.md"]]),yw=e("h2",null,"Declare it in ActiveRecord",-1),fw=e("div",{class:"my-14"},null,-1),hw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ActiveRecord")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ConnectionAdapters")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PostgreSQL")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OID")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"TrueMoney"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Type::Value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"true_money")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"          "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"          "),e("span",{style:{color:"#758575"}},"# Here will be (de)serialization code")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ActiveRecord")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ConnectionAdapters")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PostgreSQL")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OID")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"TrueMoney"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Type::Value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"true_money")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"          "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"          "),e("span",{style:{color:"#A0ADA0"}},"# Here will be (de)serialization code")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),mw={__name:"43",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[yw,fw,P(l,ue({},{ranges:[""]}),{default:C(()=>[hw]),_:1},16)]),_:1},16)}}},gw=Q(mw,[["__file","/@slidev/slides/43.md"]]),_w=e("h2",null,"Deserialization",-1),vw=e("div",{class:"my-14"},null,-1),bw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"deserialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"nil?")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  currency"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," amount "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"match"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#E6CC77"}},"\\A\\("),e("span",{style:{color:"#C4704F"}},'"?'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\w"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},'"?,'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C4704F"}},"?:"),e("span",{style:{color:"#E6CC77"}},"\\.\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},"?"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#E6CC77"}},"\\)\\z"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"captures")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Money"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_amount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"amount"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," currency"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"deserialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"nil?")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  currency"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," amount "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"match"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#BDA437"}},"\\A\\("),e("span",{style:{color:"#AB5E3F"}},'"?'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\w"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},'"?,'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5E3F"}},"?:"),e("span",{style:{color:"#BDA437"}},"\\.\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},"?"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#BDA437"}},"\\)\\z"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"captures")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Money"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_amount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"amount"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," currency"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),Aw=e("p",null,[p("And "),e("code",null,'"(USD,4.2)"'),p(" becomes "),e("code",null,"#<Money fractional:420 currency:USD>"),p(" in Ruby ✨")],-1),Dw={__name:"44",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[_w,vw,P(l,ue({},{ranges:["all","2","4-5"]}),{default:C(()=>[bw]),_:1},16),Aw]),_:1},16)}}},Cw=Q(Dw,[["__file","/@slidev/slides/44.md"]]),Bw=e("h2",null,"Casting user input",-1),Ew=e("p",null,"Add ability to assign ready object to attribute:",-1),ww=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cast"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"nil?")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"Money"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"String"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," deserialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"raise"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"NotImplementedError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"Don't know how to cast `),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"class"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}}," "),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"inspect"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},' into Money"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cast"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"nil?")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"Money"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"String"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," deserialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"raise"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"NotImplementedError"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"Don't know how to cast `),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"class"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}}," "),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"inspect"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},' into Money"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),kw={__name:"45",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[Bw,Ew,P(l,ue({},{ranges:["all","5"]}),{default:C(()=>[ww]),_:1},16)]),_:1},16)}}},Sw=Q(kw,[["__file","/@slidev/slides/45.md"]]),xw=e("h2",null,"Deserialization and input casting at once",-1),Tw=e("div",{class:"my-14"},null,-1),Lw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"cast_value"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"Money"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"String")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      currency"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," amount "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"match"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#E6CC77"}},"\\A\\("),e("span",{style:{color:"#C4704F"}},'"?'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\w"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},'"?,'),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E6CC77"}},"\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C4704F"}},"?:"),e("span",{style:{color:"#E6CC77"}},"\\.\\d"),e("span",{style:{color:"#C4704F"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C4704F"}},"?"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#E6CC77"}},"\\)\\z"),e("span",{style:{color:"#C98A7D"}},"/"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"captures")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Money"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_amount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"BigDecimal"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"amount"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," currency"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"raise"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"NotImplementedError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"Don't know how to cast `),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"class"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}}," "),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"inspect"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},' into Money"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"cast_value"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"Money"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," value")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"String")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      currency"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," amount "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"match"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#BDA437"}},"\\A\\("),e("span",{style:{color:"#AB5E3F"}},'"?'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\w"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},'"?,'),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#BDA437"}},"\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5E3F"}},"?:"),e("span",{style:{color:"#BDA437"}},"\\.\\d"),e("span",{style:{color:"#AB5E3F"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5E3F"}},"?"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#BDA437"}},"\\)\\z"),e("span",{style:{color:"#B56959"}},"/"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"captures")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Money"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_amount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"BigDecimal"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"amount"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," currency"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"raise"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"NotImplementedError"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"Don't know how to cast `),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"class"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}}," "),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"inspect"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},' into Money"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),Rw=e("p",null,[p("Replaces both "),e("code",null,"deserialize"),p(" and "),e("code",null,"cast"),p(", also handles "),e("code",null,"nil"),p("s.")],-1),$w={__name:"46",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[xw,Tw,P(l,ue({},{ranges:[""]}),{default:C(()=>[Lw]),_:1},16),Rw]),_:1},16)}}},Pw=Q($w,[["__file","/@slidev/slides/46.md"]]),Ow=e("h2",null,"Serialization for the database",-1),Nw=e("div",{class:"my-14"},null,-1),Fw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"serialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"nil? "),e("span",{style:{color:"#758575"}},"# ActiveRecord will handle NULL for us")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  amount_t   "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"OID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Decimal"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  currency_t "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveModel"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Type"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#C98A7D"}},'"('),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"currency_t"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"serialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"currency"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"iso_code"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#DBD7CA"}},"inspect"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},","),e("span",{style:{color:"#858585"}},"#{"),e("span",{style:{color:"#DBD7CA"}},"amount_t"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"serialize"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"value"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#C98A7D"}},"}"),e("span",{style:{color:"#C98A7D"}},')"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"serialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"nil? "),e("span",{style:{color:"#A0ADA0"}},"# ActiveRecord will handle NULL for us")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  amount_t   "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"OID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Decimal"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  currency_t "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveModel"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Type"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B56959"}},'"('),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"currency_t"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"serialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"currency"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"iso_code"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#393A34"}},"inspect"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},","),e("span",{style:{color:"#8E8F8B"}},"#{"),e("span",{style:{color:"#393A34"}},"amount_t"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"serialize"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"value"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#B56959"}},"}"),e("span",{style:{color:"#B56959"}},')"')]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),Iw=e("p",null,"Reuse available serialization methods for subtypes.",-1),Mw={__name:"47",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[Ow,Nw,P(l,ue({},{ranges:["all","4-5","6"]}),{default:C(()=>[Fw]),_:1},16),Iw]),_:1},16)}}},Uw=Q(Mw,[["__file","/@slidev/slides/47.md"]]),qw=e("h2",null,"Register datatype in ActiveRecord",-1),jw=e("div",{class:"my-14"},null,-1),zw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4976C"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"initialize_type_map"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"m "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," type_map"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    m"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"register_type "),e("span",{style:{color:"#C98A7D"}},'"true_money"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"do"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"|"),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#B8A965"}},"_args"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"_sql_type"),e("span",{style:{color:"#858585"}},"|")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"OID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"TrueMoney"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"new")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    m"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"alias_type "),e("span",{style:{color:"#C98A7D"}},'"_true_money"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"true_money"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"super")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"prepend"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"Type"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"register"),e("span",{style:{color:"#858585"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"true_money"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQLAdapter"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"OID"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#D4976C"}},"TrueMoney"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#D4976C"}},"adapter"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"postgresql"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A65E2B"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"initialize_type_map"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"m "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," type_map"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    m"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"register_type "),e("span",{style:{color:"#B56959"}},'"true_money"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"do"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"|"),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#8C862B"}},"_args"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"_sql_type"),e("span",{style:{color:"#8E8F8B"}},"|")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"OID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"TrueMoney"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"new")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    m"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"alias_type "),e("span",{style:{color:"#B56959"}},'"_true_money"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"true_money"')]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"super")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"prepend"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"PostgreSQLAdapterWithTrueMoney"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"Type"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"register"),e("span",{style:{color:"#8E8F8B"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"true_money"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQLAdapter"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"OID"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#A65E2B"}},"TrueMoney"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A65E2B"}},"adapter"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"postgresql"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Vw={__name:"48",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[qw,jw,P(l,ue({},{ranges:[""]}),{default:C(()=>[zw]),_:1},16)]),_:1},16)}}},Hw=Q(Vw,[["__file","/@slidev/slides/48.md"]]),Qw=e("h2",null,"Also add it for migrations…",-1),Ww=e("div",{class:"my-14"},null,-1),Jw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"SchemaStatementsWithTrueMoney")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"type_to_sql"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"type, "),e("span",{style:{color:"#D4976C"}},"limit"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#D4976C"}},"precision"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#D4976C"}},"scale"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#D4976C"}},"array"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"nil"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#CB7676"}},"**"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," type"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"to_s")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"when"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'true_money'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"then"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'true_money'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"super")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"PostgreSQL"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#E0A569"}},"SchemaStatements"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#4D9375"}},"prepend"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"SchemaStatementsWithTrueMoney"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ActiveRecord"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#A1B567"}},"ConnectionAdapters"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#A1B567"}},"PostgreSQL"),e("span",{style:{color:"#858585"}},"::"),e("span",{style:{color:"#A1B567"}},"ColumnMethods")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"def"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"true_money"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"name, options "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    column"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#D4976C"}},"true_money"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," options"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"end")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"SchemaStatementsWithTrueMoney")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"type_to_sql"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"type, "),e("span",{style:{color:"#A65E2B"}},"limit"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#A65E2B"}},"precision"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#A65E2B"}},"scale"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#A65E2B"}},"array"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"nil"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#AB5959"}},"**"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"case"),e("span",{style:{color:"#393A34"}}," type"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"to_s")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"when"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'true_money'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"then"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'true_money'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"super")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"PostgreSQL"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#B58451"}},"SchemaStatements"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#1C6B48"}},"prepend"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"SchemaStatementsWithTrueMoney"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ActiveRecord"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#6C7834"}},"ConnectionAdapters"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#6C7834"}},"PostgreSQL"),e("span",{style:{color:"#8E8F8B"}},"::"),e("span",{style:{color:"#6C7834"}},"ColumnMethods")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"def"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"true_money"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"name, options "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    column"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#A65E2B"}},"true_money"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," options"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"end")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"end")])])])],-1),Gw={__name:"49",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[Qw,Ww,P(l,ue({},{ranges:[""]}),{default:C(()=>[Jw]),_:1},16)]),_:1},16)}}},Kw=Q(Gw,[["__file","/@slidev/slides/49.md"]]),Yw=e("h2",null,"Ready to use!",-1),Zw=e("div",{class:"my-14"},null,-1),Xw=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"rails"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"g"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"model"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"Product"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"title"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"price:true_money")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"rails"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"db:migrate")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"rails"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"console")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"rails"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"g"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"model"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"Product"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"title"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"price:true_money")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"rails"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"db:migrate")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"rails"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"console")])])])],-1),ek=e("div",{class:"my-14"},null,-1),tk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"create!"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"title"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Something"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"price"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Money"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"from_amount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"100000"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," “"),e("span",{style:{color:"#D4976C"}},"USD"),e("span",{style:{color:"#DBD7CA"}},"”"),e("span",{style:{color:"#858585"}},"))")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E0A569"}},"Product"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#DBD7CA"}},"last")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},'# => #<Product id: 1, title: "Something", price: 100000.00 USD>')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"create!"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"title"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"Something"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"price"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Money"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"from_amount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"100000"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," “"),e("span",{style:{color:"#A65E2B"}},"USD"),e("span",{style:{color:"#393A34"}},"”"),e("span",{style:{color:"#8E8F8B"}},"))")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B58451"}},"Product"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#393A34"}},"last")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},'# => #<Product id: 1, title: "Something", price: 100000.00 USD>')])])])],-1),sk={__name:"50",setup(t){const s={};return I(j),(n,o)=>{const l=je;return w(),V(Je,re(le(s)),{default:C(()=>[Yw,Zw,P(l,ue({},{ranges:[""]}),{default:C(()=>[Xw]),_:1},16),ek,P(l,ue({},{ranges:[""]}),{default:C(()=>[tk]),_:1},16)]),_:1},16)}}},nk=Q(sk,[["__file","/@slidev/slides/50.md"]]),ok=e("h2",null,"But it is not done yet!",-1),lk={class:"grid grid-cols-2 gap-2"},rk=e("p",null,"A lot of stuff has to be done to make a full-featured datatype in SQL…",-1),ak=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FUNCTION"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"true_money_add"),e("span",{style:{color:"#DBD7CA"}},"(a true_money, b true_money) "),e("span",{style:{color:"#4D9375"}},"RETURNS"),e("span",{style:{color:"#DBD7CA"}}," true_money "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," $$")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"BEGIN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}}," (a).currency "),e("span",{style:{color:"#CB7676"}},"!="),e("span",{style:{color:"#DBD7CA"}}," (b).currency "),e("span",{style:{color:"#4D9375"}},"THEN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      RAISE EXCEPTION "),e("span",{style:{color:"#C98A7D"}},"'% can not be added to % - currencies does not match'"),e("span",{style:{color:"#DBD7CA"}},", b, a;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," ((a).currency, (a).amount "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," (b).amount);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$$ IMMUTABLE "),e("span",{style:{color:"#4D9375"}},"RETURNS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"ON"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," INPUT "),e("span",{style:{color:"#4D9375"}},"LANGUAGE"),e("span",{style:{color:"#DBD7CA"}}," plpgsql;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," OPERATOR "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}},"(leftarg"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"true_money, rightarg"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"true_money, "),e("span",{style:{color:"#4D9375"}},"procedure"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}},"true_money_add);")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FUNCTION"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"true_money_add"),e("span",{style:{color:"#393A34"}},"(a true_money, b true_money) "),e("span",{style:{color:"#1C6B48"}},"RETURNS"),e("span",{style:{color:"#393A34"}}," true_money "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," $$")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"BEGIN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}}," (a).currency "),e("span",{style:{color:"#AB5959"}},"!="),e("span",{style:{color:"#393A34"}}," (b).currency "),e("span",{style:{color:"#1C6B48"}},"THEN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      RAISE EXCEPTION "),e("span",{style:{color:"#B56959"}},"'% can not be added to % - currencies does not match'"),e("span",{style:{color:"#393A34"}},", b, a;")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," ((a).currency, (a).amount "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," (b).amount);")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$$ IMMUTABLE "),e("span",{style:{color:"#1C6B48"}},"RETURNS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"ON"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," INPUT "),e("span",{style:{color:"#1C6B48"}},"LANGUAGE"),e("span",{style:{color:"#393A34"}}," plpgsql;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," OPERATOR "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}},"(leftarg"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"true_money, rightarg"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"true_money, "),e("span",{style:{color:"#1C6B48"}},"procedure"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}},"true_money_add);")])])])],-1),ik=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"FUNCTION"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"true_money_sum"),e("span",{style:{color:"#DBD7CA"}},"("),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," true_money, "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," true_money) "),e("span",{style:{color:"#4D9375"}},"RETURNS"),e("span",{style:{color:"#DBD7CA"}}," true_money "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," $$")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"BEGIN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AND"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"THEN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"NULL"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"THEN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"IF"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"RETURN"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"state"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"value"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"END"),e("span",{style:{color:"#DBD7CA"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$$ IMMUTABLE "),e("span",{style:{color:"#4D9375"}},"LANGUAGE"),e("span",{style:{color:"#DBD7CA"}}," plpgsql;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"CREATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"AGGREGATE"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sum"),e("span",{style:{color:"#DBD7CA"}}," (true_money) (sfunc "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," true_money_sum, stype "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," true_money);")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"FUNCTION"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"true_money_sum"),e("span",{style:{color:"#393A34"}},"("),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," true_money, "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," true_money) "),e("span",{style:{color:"#1C6B48"}},"RETURNS"),e("span",{style:{color:"#393A34"}}," true_money "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," $$")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"BEGIN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AND"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"THEN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"NULL"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"THEN")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"IF"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"RETURN"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"state"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"value"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"END"),e("span",{style:{color:"#393A34"}},";")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$$ IMMUTABLE "),e("span",{style:{color:"#1C6B48"}},"LANGUAGE"),e("span",{style:{color:"#393A34"}}," plpgsql;")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"CREATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"AGGREGATE"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"sum"),e("span",{style:{color:"#393A34"}}," (true_money) (sfunc "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," true_money_sum, stype "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," true_money);")])])])],-1),ck=e("p",null,"But then you can do a lot in SQL:",-1),pk=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"SELECT"),e("span",{style:{color:"#DBD7CA"}}," (price).currency "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," currency, "),e("span",{style:{color:"#E0A569"}},"sum"),e("span",{style:{color:"#DBD7CA"}},"(price) "),e("span",{style:{color:"#4D9375"}},"AS"),e("span",{style:{color:"#DBD7CA"}}," total")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"FROM"),e("span",{style:{color:"#DBD7CA"}}," products "),e("span",{style:{color:"#4D9375"}},"GROUP BY"),e("span",{style:{color:"#DBD7CA"}}," currency;")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"SELECT"),e("span",{style:{color:"#393A34"}}," (price).currency "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," currency, "),e("span",{style:{color:"#B58451"}},"sum"),e("span",{style:{color:"#393A34"}},"(price) "),e("span",{style:{color:"#1C6B48"}},"AS"),e("span",{style:{color:"#393A34"}}," total")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"FROM"),e("span",{style:{color:"#393A34"}}," products "),e("span",{style:{color:"#1C6B48"}},"GROUP BY"),e("span",{style:{color:"#393A34"}}," currency;")])])])],-1),uk=e("p",null,[p("After all, one might re-invent abandoned "),e("a",{href:"https://github.com/samv/pg-currency",target:"_blank",rel:"noopener"},"pg-currency")],-1),dk={__name:"51",setup(t){const s={layout:"footnote"};return I(j),(n,o)=>{const l=je;return w(),V(Ws,re(le(s)),{footnote:C(r=>[uk]),default:C(()=>[ok,e("div",lk,[e("div",null,[rk,P(l,ue({},{ranges:[""]}),{default:C(()=>[ak]),_:1},16)]),P(l,ue({},{ranges:[""]}),{default:C(()=>[ik]),_:1},16)]),ck,P(l,ue({},{ranges:[""]}),{default:C(()=>[pk]),_:1},16)]),_:1},16)}}},yk=Q(dk,[["__file","/@slidev/slides/51.md"]]),fk=e("h2",null,"Play with it yourself!",-1),hk={class:"text-center my-12"},mk=e("p",null,[e("a",{href:"https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986",target:"_blank",rel:"noopener"},"https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986")],-1),gk={__name:"52",setup(t){const s={};return I(j),(n,o)=>{const l=Kt;return w(),V(Je,re(le(s)),{default:C(()=>[fk,e("div",hk,[P(l,{url:"https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986",class:"max-w-80 mx-auto"})]),mk]),_:1},16)}}},_k=Q(gk,[["__file","/@slidev/slides/52.md"]]),vk=e("h1",null,"Gems, gems, gems!",-1),bk=e("p",null,"Everything That Can Be Invented Has Been Invented",-1),Ak={__name:"53",setup(t){const s={layout:"cover"};return I(j),(n,o)=>(w(),V(el,re(le(s)),{default:C(()=>[vk,bk]),_:1},16))}},Dk=Q(Ak,[["__file","/@slidev/slides/53.md"]]),Ck=e("h2",null,"Gems for datatypes",-1),Bk=e("div",{class:"my-14"},null,-1),Ek=e("ul",null,[e("li",null,[e("p",null,[e("a",{href:"https://github.com/crashtech/torque-postgresql",target:"_blank",rel:"noopener"},"torque-postgresql"),p(" — standard datatypes not (yet) supported by Rails.")])]),e("li",null,[e("p",null,[e("a",{href:"https://github.com/rgeo/activerecord-postgis-adapter",target:"_blank",rel:"noopener"},"activerecord-postgis-adapter"),p(" — all the power of PostGIS extension in Ruby.")])]),e("li",null,[e("p",null,[e("a",{href:"https://github.com/bibendi/activerecord-postgres_enum",target:"_blank",rel:"noopener"},"activerecord-postgres_enum"),p(" — support enum in migrations and schema (before Rails 7)")])])],-1),wk={__name:"54",setup(t){const s={};return I(j),(n,o)=>(w(),V(Je,re(le(s)),{default:C(()=>[Ck,Bk,Ek]),_:1},16))}},kk=Q(wk,[["__file","/@slidev/slides/54.md"]]),Sk=e("h2",null,"Gems for other PostgreSQL features",-1),xk=e("p",null,"Because PostgreSQL is much more than datatypes.",-1),Tk=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/GeorgeKaraszi/ActiveRecordExtended",target:"_blank",rel:"noopener"},"ActiveRecordExtended"),p(" — functions for datatypes and DSL for queries")]),e("li",null,[e("a",{href:"https://github.com/teoljungberg/fx",target:"_blank",rel:"noopener"},"fx"),p(" — make schema.rb great again with triggers")]),e("li",null,[e("a",{href:"https://github.com/scenic-views/scenic",target:"_blank",rel:"noopener"},"scenic"),p(" — add support for views")]),e("li",null,[e("a",{href:"https://github.com/glebm/order_query",target:"_blank",rel:"noopener"},"order_query"),p(" — keyset-pagination for your models")]),e("li",null,[e("a",{href:"https://github.com/afair/postgresql_cursor",target:"_blank",rel:"noopener"},"postgresql_cursor"),p(" — get more data from the database efficiently")])],-1),Lk=e("p",null,[p("And also martian "),e("a",{href:"https://github.com/nepalez/pg_trunk/",target:"_blank",rel:"noopener"},"pg_trunk"),p(" gem to "),e("s",null,"rule them all"),p(" get "),e("code",null,"fx"),p(", "),e("code",null,"scenic"),p(", object dependency management and more within a single gem!")],-1),Rk=e("div",{class:"absolute left-4 bottom-12 rotate-340 text-lg"},[e("p",null,[e("code",null,"structure.sql"),p(" no more!")]),e("p",null,[p("Make "),e("code",null,"schema.rb"),p(" great again!")])],-1),$k=e("a",{href:"https://github.com/nepalez/pg_trunk",class:"block my-4 text-center no-underline border-none hover:border-none"},[e("img",{alt:"store_model gem",src:"https://opengraph.githubassets.com/fac14e6e69972a6081f741222ea276d67c3df90c2ca2c7b8fedfd007e878e16b/nepalez/pg_trunk",class:"w-80 mx-auto"})],-1),Pk={__name:"55",setup(t){const s={};return I(j),(n,o)=>{const l=Kt;return w(),V(Je,re(le(s)),{default:C(()=>[Sk,xk,Tk,Lk,Rk,$k,P(l,{url:"https://github.com/nepalez/pg_trunk",caption:"pg_trunk gem",class:"w-32 absolute bottom-15px right-20px"})]),_:1},16)}}},Ok=Q(Pk,[["__file","/@slidev/slides/55.md"]]),Nk=e("h1",null,"That’s it!",-1),Fk=e("p",null,"Questions?",-1),Ik={__name:"56",setup(t){const s={layout:"cover"};return I(j),(n,o)=>(w(),V(el,re(le(s)),{default:C(()=>[Nk,Fk]),_:1},16))}},Mk=Q(Ik,[["__file","/@slidev/slides/56.md"]]),Uk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},qk=e("path",{fill:"#0A0A08",d:"M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575c4.48 4.479 7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723c0 34.178-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718c-4.479 4.479-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746c-34.18 0-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723c0-34.177.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672c7.116 7.116 14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763c7.116-7.116 11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27c-36.302 0-65.73 29.43-65.73 65.73c0 36.302 29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36c-8.483 0-15.36-6.876-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36c8.484 0 15.36 6.877 15.36 15.36Z"},null,-1),jk=[qk];function zk(t,s){return w(),J("svg",Uk,jk)}const Vk={name:"logos-instagram-icon",render:zk},Hk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Qk=e("path",{fill:"#0A66C2",d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"},null,-1),Wk=[Qk];function Jk(t,s){return w(),J("svg",Hk,Wk)}const Gk={name:"logos-linkedin-icon",render:Jk},Kk={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Yk=["id"],Zk=e("stop",{offset:"0%","stop-color":"#2AABEE"},null,-1),Xk=e("stop",{offset:"100%","stop-color":"#229ED9"},null,-1),eS=[Zk,Xk],tS=["fill"],sS=e("path",{fill:"#FFF",d:"M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"},null,-1);function nS(t,s){return w(),J("svg",Kk,[e("defs",null,[e("linearGradient",{id:t.idMap.logosTelegram0,x1:"50%",x2:"50%",y1:"0%",y2:"100%"},eS,8,Yk)]),e("path",{fill:"url(#"+t.idMap.logosTelegram0+")",d:"M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"},null,8,tS),sS])}const oS={name:"logos-telegram",render:nS,data(){return{idMap:{logosTelegram0:"uicons-"+(()=>Math.random().toString(36).substr(2,10))()}}}},lS={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},rS=e("path",{fill:"#1877F2",d:"M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"},null,-1),aS=e("path",{fill:"#FFF",d:"m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"},null,-1),iS=[rS,aS];function cS(t,s){return w(),J("svg",lS,iS)}const pS={name:"logos-facebook",render:cS},uS={class:"slidev-icon",viewBox:"0 0 256 209",width:"1.2em",height:"1.2em"},dS=e("path",{fill:"#55acee",d:"M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"},null,-1),yS=[dS];function fS(t,s){return w(),J("svg",uS,yS)}const hS={name:"logos-twitter",render:fS},mS={class:"slidev-icon",viewBox:"0 0 256 250",width:"1.2em",height:"1.2em"},gS=e("path",{fill:"#161614",d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"},null,-1),_S=[gS];function vS(t,s){return w(),J("svg",mS,_S)}const bS={name:"logos-github-icon",render:vS};const Ds=t=>(Di("data-v-95b499f4"),t=t(),Ci(),t),AS=Ds(()=>e("h1",null,"Thank you!",-1)),DS={class:"grid grid-cols-[8rem_2fr_5fr] mt-12 gap-2"},CS=Ds(()=>e("div",{class:"justify-self-end"},[e("img",{alt:"Andrey Novikov",src:"https://secure.gravatar.com/avatar/d0e95abdd0aed671ebd0920c16d393d4?s=512",class:"w-32 h-32 scaled-image"})],-1)),BS={class:"list-none"},ES={href:"https://github.com/Envek"},wS={href:"https://twitter.com/Envek"},kS={href:"https://facebook.com/Envek"},SS={href:"https://t.me/envek"},xS=Ds(()=>e("div",{class:"justify-self-end"},[e("a",{href:"https://evilmartians.com/"},[e("img",{alt:"Evil Martians",src:Hi,class:"w-32 h-32 scaled-image block dark:hidden"}),e("img",{alt:"Evil Martians",src:Qi,class:"w-32 h-32 scaled-image hidden dark:block"})])],-1)),TS=Ds(()=>e("a",{href:"https://github.com/evilmartians?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evilmartians",-1)),LS=Ds(()=>e("a",{href:"https://twitter.com/evilmartians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evilmartians",-1)),RS=Ds(()=>e("a",{href:"https://www.linkedin.com/company/evil-martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evil-martians",-1)),$S=Ds(()=>e("a",{href:"https://www.instagram.com/evil.martians/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"@evil.martians",-1)),PS={class:"col-span-3"},OS=Ds(()=>e("p",null,[p("Our awesome blog: "),e("a",{href:"https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists",target:"_blank",rel:"noopener"},"evilmartians.com/chronicles"),p("!"),e("br"),e("small",{class:"text-xs"},[p("(Special thanks to "),e("a",{href:"https://twitter.com/hachi8833"},"@hachi8833"),p(" for translating ≈20 posts to Japanese!)")])],-1)),NS=Ds(()=>e("p",{class:"text-sm"},[p("See these slides at "),e("a",{href:"https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/"},"envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists")],-1)),FS={__name:"57",setup(t){const s={};return I(j),(n,o)=>{const l=bS,r=hS,a=pS,i=oS,c=Kt,u=Gk,d=Vk;return w(),V(Je,re(le(s)),{default:C(()=>[AS,e("div",DS,[CS,e("ul",BS,[e("li",null,[e("a",ES,[P(l,{class:"dark:invert"}),p(" @Envek")])]),e("li",null,[e("a",wS,[P(r),p(" @Envek")])]),e("li",null,[e("a",kS,[P(a),p(" @Envek")])]),e("li",null,[e("a",SS,[P(i),p(" @Envek")])])]),e("div",null,[P(c,{url:"https://github.com/Envek",caption:"github.com/Envek",class:"w-32 mt-2"})]),xS,e("div",null,[e("ul",null,[e("li",null,[P(l,{class:"dark:invert"}),p(),TS]),e("li",null,[P(r),p(),LS]),e("li",null,[P(u),p(),RS]),e("li",null,[P(d,{class:"dark:invert"}),p(),$S])])]),e("div",null,[P(c,{url:"https://evilmartians.com/",caption:"evilmartians.com",class:"w-32 mt-2"})]),e("div",PS,[OS,NS,P(c,{url:"https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/",caption:"These slides",class:"w-64 absolute bottom-10px right-20px"})])])]),_:1},16)}}},IS=Q(FS,[["__scopeId","data-v-95b499f4"],["__file","/@slidev/slides/57.md"]]),MS=[{path:"1",name:"page-1",component:I2,meta:{theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1,presenterOnly:!0},title:"PostgreSQL as seen by Rubyists",info:`## PostgreSQL as seen by Rubyists
`,css:"unocss",fonts:{provider:"none",fallback:!1,local:"Martian Grotesk, Martian Mono",sans:"Martian Grotesk",serif:"Martian Grotesk",mono:"Martian Mono"},slide:{raw:`---
theme: default
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
  presenterOnly: true
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
皆さん、こんにちは！今日、Ruby on Railsを使っている開発者の目でPostgreSQLはどのように見えるかと話したいと思います。
-->
`,title:"PostgreSQL as seen by Rubyists",content:`# <span class="postgresql">PostgreSQL</span><br>as seen by<br><span class="rubyists">Rubyists</span>

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
</style>`,frontmatter:{theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1,presenterOnly:!0},title:"PostgreSQL as seen by Rubyists",info:`## PostgreSQL as seen by Rubyists
`,css:"unocss",fonts:{provider:"none",fallback:!1,local:"Martian Grotesk, Martian Mono",sans:"Martian Grotesk",serif:"Martian Grotesk",mono:"Martian Mono"}},note:"皆さん、こんにちは！今日、Ruby on Railsを使っている開発者の目でPostgreSQLはどのように見えるかと話したいと思います。",index:0,start:0,end:58,noteHTML:`<p>皆さん、こんにちは！今日、Ruby on Railsを使っている開発者の目でPostgreSQLはどのように見えるかと話したいと思います。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:H2,meta:{layout:"none",slide:{raw:`---
layout: none
---

<img alt="My GitHub" src="/images/github-envek-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/github-envek-dark.png" class="hidden dark:block" />

<!--
はじめまして、私はノヴィコフ・アンドレイと申します。10年あまりルビーもポストグレスキューエルも使って様々なアプリを開発しています。今年、日本へ引越しして、大阪の近くに住んでいます。どうぞよろしくお願いします。
-->
`,content:`<img alt="My GitHub" src="/images/github-envek-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/github-envek-dark.png" class="hidden dark:block" />`,frontmatter:{layout:"none"},note:"はじめまして、私はノヴィコフ・アンドレイと申します。10年あまりルビーもポストグレスキューエルも使って様々なアプリを開発しています。今年、日本へ引越しして、大阪の近くに住んでいます。どうぞよろしくお願いします。",index:1,start:58,end:69,noteHTML:`<p>はじめまして、私はノヴィコフ・アンドレイと申します。10年あまりルビーもポストグレスキューエルも使って様々なアプリを開発しています。今年、日本へ引越しして、大阪の近くに住んでいます。どうぞよろしくお願いします。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:Z2,meta:{slide:{raw:`
<a href="https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists">
<img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden object-contain text-center m-auto max-h-112" />
<img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block object-contain text-center m-auto max-h-112" />
<p class="text-2xl text-center">evilmartians.com</p>
</a>
<div class="absolute bottom-32px left-32px rotate-10 text-2xl">邪悪な火星人？</div>
<div class="absolute bottom-32px right-32px rotate-350 text-2xl">イービルマーシャンズ！</div>

<!--
さらに自分は火星人です。我々は、平和目的で地球に来ました。

真面目に言うと、「イービル・マーシャンズ」という会社に勤めています。

我々はスタートアップや大企業のためにプロジェクトを開発したり、コンサルティングしたりしています。バックエンドをもちろん、フロントエンドやデザインも含めてプロダクトをターンキー開発しています。
-->
`,content:`<a href="https://evilmartians.com/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists">
<img alt="Evil Martians" src="/images/01_Evil-Martians_Logo_v2.1_RGB.svg" class="block dark:hidden object-contain text-center m-auto max-h-112" />
<img alt="Evil Martians" src="/images/02_Evil-Martians_Logo_v2.1_RGB_for-Dark-BG.svg" class="hidden dark:block object-contain text-center m-auto max-h-112" />
<p class="text-2xl text-center">evilmartians.com</p>
</a>
<div class="absolute bottom-32px left-32px rotate-10 text-2xl">邪悪な火星人？</div>
<div class="absolute bottom-32px right-32px rotate-350 text-2xl">イービルマーシャンズ！</div>`,frontmatter:{},note:`さらに自分は火星人です。我々は、平和目的で地球に来ました。

真面目に言うと、「イービル・マーシャンズ」という会社に勤めています。

我々はスタートアップや大企業のためにプロジェクトを開発したり、コンサルティングしたりしています。バックエンドをもちろん、フロントエンドやデザインも含めてプロダクトをターンキー開発しています。`,index:2,start:70,end:87,noteHTML:`<p>さらに自分は火星人です。我々は、平和目的で地球に来ました。</p>
<p>真面目に言うと、「イービル・マーシャンズ」という会社に勤めています。</p>
<p>我々はスタートアップや大企業のためにプロジェクトを開発したり、コンサルティングしたりしています。バックエンドをもちろん、フロントエンドやデザインも含めてプロダクトをターンキー開発しています。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:A9,meta:{slide:{raw:`
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
それに、我々はオープンソースの大ファンなので、できる限りオープンソースソフトウェアを使ったり、貢献したり、そしてよく自分のライブラリやプロダクトを作って維持しています。このスライドでは一番有名なものですが、今は火星で作ったオープンソースプロジェクトが数十のものが存在しています。どうぞ自由に使ってください。
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
</style>`,frontmatter:{},note:"それに、我々はオープンソースの大ファンなので、できる限りオープンソースソフトウェアを使ったり、貢献したり、そしてよく自分のライブラリやプロダクトを作って維持しています。このスライドでは一番有名なものですが、今は火星で作ったオープンソースプロジェクトが数十のものが存在しています。どうぞ自由に使ってください。",index:3,start:88,end:160,noteHTML:`<p>それに、我々はオープンソースの大ファンなので、できる限りオープンソースソフトウェアを使ったり、貢献したり、そしてよく自分のライブラリやプロダクトを作って維持しています。このスライドでは一番有名なものですが、今は火星で作ったオープンソースプロジェクトが数十のものが存在しています。どうぞ自由に使ってください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:E9,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

This talk is about…

# Subtle differences

<!--
では、今日、微妙な違いについて話をしたいと思います。ですが、微妙な違いって何のことでしょう?
-->
`,title:"Subtle differences",level:1,content:`This talk is about…

# Subtle differences`,frontmatter:{layout:"cover"},note:"では、今日、微妙な違いについて話をしたいと思います。ですが、微妙な違いって何のことでしょう?",index:4,start:160,end:172,noteHTML:`<p>では、今日、微妙な違いについて話をしたいと思います。ですが、微妙な違いって何のことでしょう?</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:T9,meta:{layout:"image",image:"/images/roads-in-different-countries.jpg",slide:{raw:`---
layout: image
image: /images/roads-in-different-countries.jpg
---

<!--
例として、道路交通について話そうと思います。車はどんな国でも同じですが、交通ルールは似ていても同じではありません。

道路交通を標準化する試みは、これまでにもいくつかありました。ジュネーヴ交通条約やウィーン交通条約があっても、完全な標準化は実現されていせん。そのため、微妙な違いは無視できないことです。
-->
`,content:"",frontmatter:{layout:"image",image:"/images/roads-in-different-countries.jpg"},note:`例として、道路交通について話そうと思います。車はどんな国でも同じですが、交通ルールは似ていても同じではありません。

道路交通を標準化する試みは、これまでにもいくつかありました。ジュネーヴ交通条約やウィーン交通条約があっても、完全な標準化は実現されていせん。そのため、微妙な違いは無視できないことです。`,index:5,start:172,end:183,noteHTML:`<p>例として、道路交通について話そうと思います。車はどんな国でも同じですが、交通ルールは似ていても同じではありません。</p>
<p>道路交通を標準化する試みは、これまでにもいくつかありました。ジュネーヴ交通条約やウィーン交通条約があっても、完全な標準化は実現されていせん。そのため、微妙な違いは無視できないことです。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:I9,meta:{layout:"footnote","footnote-class":"text-sm",slide:{raw:`---
layout: footnote
footnote-class: text-sm
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-2xl text-center">…</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Left: road sign conforming [Vienna Convention on Road Signs and Signals](https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals)

Right: Japanese road sign per “Order on Road Sign, Road Line, and Road Surface Marking”

<!--
例えば、ふたつの道路標識を比べましょう。左のは、ヨーロッパの交差点でよく見られる標識です。右のは、日本のものです。両方とも「交差点で道を譲るべき」という意味もあります。同じようにみえますが、実際にイコールかどうか？
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-2xl text-center">…</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Left: road sign conforming [Vienna Convention on Road Signs and Signals](https://en.wikipedia.org/wiki/Vienna_Convention_on_Road_Signs_and_Signals)

Right: Japanese road sign per “Order on Road Sign, Road Line, and Road Surface Marking”`,frontmatter:{layout:"footnote","footnote-class":"text-sm"},note:"例えば、ふたつの道路標識を比べましょう。左のは、ヨーロッパの交差点でよく見られる標識です。右のは、日本のものです。両方とも「交差点で道を譲るべき」という意味もあります。同じようにみえますが、実際にイコールかどうか？",index:6,start:183,end:217,noteHTML:`<p>例えば、ふたつの道路標識を比べましょう。左のは、ヨーロッパの交差点でよく見られる標識です。右のは、日本のものです。両方とも「交差点で道を譲るべき」という意味もあります。同じようにみえますが、実際にイコールかどうか？</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:z9,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">NO!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Both require drivers to give a way…

European sign doesn't have a requirement to stop or even slow down!

<!--
ですが、一つの重要な違いがあるんです。ヨーロッパの場合は、車は止まる必要がありません。他の車や自転車や歩行者がなければ、速度を落とさなくても通行できます。日本の標識は「止まれ」といい、必ず一時停止しなければならなくて、それから通行するようになっています。
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.4.svg)

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">NO!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-B.svg)

</div>

::footnote::

Both require drivers to give a way…

European sign doesn't have a requirement to stop or even slow down!`,frontmatter:{layout:"footnote"},note:"ですが、一つの重要な違いがあるんです。ヨーロッパの場合は、車は止まる必要がありません。他の車や自転車や歩行者がなければ、速度を落とさなくても通行できます。日本の標識は「止まれ」といい、必ず一時停止しなければならなくて、それから通行するようになっています。",index:7,start:217,end:250,noteHTML:`<p>ですが、一つの重要な違いがあるんです。ヨーロッパの場合は、車は止まる必要がありません。他の車や自転車や歩行者がなければ、速度を落とさなくても通行できます。日本の標識は「止まれ」といい、必ず一時停止しなければならなくて、それから通行するようになっています。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:K9,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

<div class="p-4 pt-8 pr-8">

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.5.svg)
</div>

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">YES!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-A.svg)

</div>

::footnote::

Stop signs around the world are _mostly_ octagonal.

Japanese signs have “STOP” word in English after 2017, but are still pretty rare.

<!--
本当に同一の標識はこれです。「Stop」の赤い八角形のものです。そして、2017年から、日本の標識にも英語の「Stop」が書いてありますが、この様な新しい標識はまだけっこう珍しいですね。

この様な微妙な違いはとても重要です。もしヨーロッパの運転手は日本の「止まれ」標識はヨーロッパの「譲れ」標識と同じだと思ってしまって止めないで通行すると、罰金を受けたり、万が一交通事故までになる恐れがあります。
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
Example of subtle yet important difference
</h2>

<div class="p-4 pt-8 pr-8">

![Russian “Yield” sign](/images/road-signs/RU_road_sign_2.5.svg)
</div>

<div class="text-center">

Are they same?

<strong class="text-3xl text-center">YES!</strong>
</div>

![Japanese “Stop” sign](/images/road-signs/Japan_road_sign_330-A.svg)

</div>

::footnote::

Stop signs around the world are _mostly_ octagonal.

Japanese signs have “STOP” word in English after 2017, but are still pretty rare.`,frontmatter:{layout:"footnote"},note:`本当に同一の標識はこれです。「Stop」の赤い八角形のものです。そして、2017年から、日本の標識にも英語の「Stop」が書いてありますが、この様な新しい標識はまだけっこう珍しいですね。

この様な微妙な違いはとても重要です。もしヨーロッパの運転手は日本の「止まれ」標識はヨーロッパの「譲れ」標識と同じだと思ってしまって止めないで通行すると、罰金を受けたり、万が一交通事故までになる恐れがあります。`,index:8,start:250,end:288,noteHTML:`<p>本当に同一の標識はこれです。「Stop」の赤い八角形のものです。そして、2017年から、日本の標識にも英語の「Stop」が書いてありますが、この様な新しい標識はまだけっこう珍しいですね。</p>
<p>この様な微妙な違いはとても重要です。もしヨーロッパの運転手は日本の「止まれ」標識はヨーロッパの「譲れ」標識と同じだと思ってしまって止めないで通行すると、罰金を受けたり、万が一交通事故までになる恐れがあります。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:a7,meta:{slide:{raw:`
<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<twemoji-thinking-face class="self-end w-full h-32" />

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>

<!--
では、「この話は、RubyとPostgreSQLにどんな関係があるか」と思っている人はいるかもしれません。
-->
`,content:`<div class="grid grid-cols-[1fr_10rem_1fr] grid-rows-[min-content_auto] place-items-center h-full">

<h2 class="col-span-3">
And how it relates to Ruby and PostgreSQL?
</h2>

<img alt="Ruby logo" src="/images/Ruby_logo.svg" class="w-full h-full scaled-image p-4" />

<twemoji-thinking-face class="self-end w-full h-32" />

<img alt="PostgreSQL logo" src="/images/Postgresql_elephant.svg" />

</div>`,frontmatter:{},note:"では、「この話は、RubyとPostgreSQLにどんな関係があるか」と思っている人はいるかもしれません。",index:9,start:289,end:308,noteHTML:`<p>では、「この話は、RubyとPostgreSQLにどんな関係があるか」と思っている人はいるかもしれません。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:b7,meta:{slide:{raw:`
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
同じように、RubyとPostgresのデータ型は似ていますが、同一ではありません。多数のアプリは、データをデータベースから読み込んだり、書き込んだりしますよね。ですから、データ型の微妙な違いのせいでいろいろなバグが起こり得ることに、気をつけた方がいいと思います。
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

</div>`,frontmatter:{},note:"同じように、RubyとPostgresのデータ型は似ていますが、同一ではありません。多数のアプリは、データをデータベースから読み込んだり、書き込んだりしますよね。ですから、データ型の微妙な違いのせいでいろいろなバグが起こり得ることに、気をつけた方がいいと思います。",index:10,start:309,end:332,noteHTML:`<p>同じように、RubyとPostgresのデータ型は似ていますが、同一ではありません。多数のアプリは、データをデータベースから読み込んだり、書き込んだりしますよね。ですから、データ型の微妙な違いのせいでいろいろなバグが起こり得ることに、気をつけた方がいいと思います。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:k7,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Ruby vs PostgreSQL data types

Are they same?

<!--
では、RubyとPostgreSQLのデータ型を一つ一つ検討して比べましょう！
-->
`,title:"Ruby vs PostgreSQL data types",level:1,content:`# Ruby vs PostgreSQL data types

Are they same?`,frontmatter:{layout:"center"},note:"では、RubyとPostgreSQLのデータ型を一つ一つ検討して比べましょう！",index:11,start:332,end:344,noteHTML:`<p>では、RubyとPostgreSQLのデータ型を一つ一つ検討して比べましょう！</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:cD,meta:{layout:"comparison",slide:{raw:`---
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
まず、整数またはintegerから始めましょう。

Rubyの整数は動的サイズなので、制限がありません。GMPというライブラリや、カラツバとトゥームクック乗算アルゴリズムを使用して、Rubyは巨大数を扱えます。プログラマーはオーバーフローについて心配しなくてもいいです。

逆に、データベースの整数は固定サイズです。２バイトのsmallint、４バイトのinteger、８バイトのbigintから選べます。

PostgreSQLではintegerの列を作ると、デフォルトでは4バイトの整数データ型の列が作成されます。可能な値はマイナス二十億からプラス二十億ぐらいまでで、これは普段十分ですが…
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

See [Numeric types docs](https://www.postgresql.org/docs/14/datatype-numeric.html)`,frontmatter:{layout:"comparison"},note:`まず、整数またはintegerから始めましょう。

Rubyの整数は動的サイズなので、制限がありません。GMPというライブラリや、カラツバとトゥームクック乗算アルゴリズムを使用して、Rubyは巨大数を扱えます。プログラマーはオーバーフローについて心配しなくてもいいです。

逆に、データベースの整数は固定サイズです。２バイトのsmallint、４バイトのinteger、８バイトのbigintから選べます。

PostgreSQLではintegerの列を作ると、デフォルトでは4バイトの整数データ型の列が作成されます。可能な値はマイナス二十億からプラス二十億ぐらいまでで、これは普段十分ですが…`,index:12,start:344,end:414,noteHTML:`<p>まず、整数またはintegerから始めましょう。</p>
<p>Rubyの整数は動的サイズなので、制限がありません。GMPというライブラリや、カラツバとトゥームクック乗算アルゴリズムを使用して、Rubyは巨大数を扱えます。プログラマーはオーバーフローについて心配しなくてもいいです。</p>
<p>逆に、データベースの整数は固定サイズです。２バイトのsmallint、４バイトのinteger、８バイトのbigintから選べます。</p>
<p>PostgreSQLではintegerの列を作ると、デフォルトでは4バイトの整数データ型の列が作成されます。可能な値はマイナス二十億からプラス二十億ぐらいまでで、これは普段十分ですが…</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:vD,meta:{layout:"none",slide:{raw:`---
layout: none
---

<a href="https://github.com/rails/rails/pull/26266">
<img alt="Ruby on Rails pull request № 26266" src="/images/rails-pull-request-26266-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/rails-pull-request-26266-dark.png" class="hidden dark:block" />
</a>
<twemoji-backhand-index-pointing-left class="absolute left-550px bottom-66px text-5xl animate-pulse" />

<!--
でも、データベースの主キーも普段整数です。これは別の話です。大人気のあるアプリの場合、たくさんの行を挿入したり削除したりすると、二十億のキーは早くなくなるおそれがあります。

そのため、2017年のリリースされたRuby on Railsバージョン5.1で、マイグレーションでテーブルを作成するときの主キーのデフォルトデータ型は、4バイトのintegerから８バイトのbigintへかわりました。

長い歴史のあるアプリならでは、古いRailsのバージョンで作ったテーブルでは４バイトのintegerの主キーがあるので、気をつけてください！
-->
`,content:`<a href="https://github.com/rails/rails/pull/26266">
<img alt="Ruby on Rails pull request № 26266" src="/images/rails-pull-request-26266-light.png" class="block dark:hidden" />
<img alt="Evil Martians" src="/images/rails-pull-request-26266-dark.png" class="hidden dark:block" />
</a>
<twemoji-backhand-index-pointing-left class="absolute left-550px bottom-66px text-5xl animate-pulse" />`,frontmatter:{layout:"none"},note:`でも、データベースの主キーも普段整数です。これは別の話です。大人気のあるアプリの場合、たくさんの行を挿入したり削除したりすると、二十億のキーは早くなくなるおそれがあります。

そのため、2017年のリリースされたRuby on Railsバージョン5.1で、マイグレーションでテーブルを作成するときの主キーのデフォルトデータ型は、4バイトのintegerから８バイトのbigintへかわりました。

長い歴史のあるアプリならでは、古いRailsのバージョンで作ったテーブルでは４バイトのintegerの主キーがあるので、気をつけてください！`,index:13,start:414,end:432,noteHTML:`<p>でも、データベースの主キーも普段整数です。これは別の話です。大人気のあるアプリの場合、たくさんの行を挿入したり削除したりすると、二十億のキーは早くなくなるおそれがあります。</p>
<p>そのため、2017年のリリースされたRuby on Railsバージョン5.1で、マイグレーションでテーブルを作成するときの主キーのデフォルトデータ型は、4バイトのintegerから８バイトのbigintへかわりました。</p>
<p>長い歴史のあるアプリならでは、古いRailsのバージョンで作ったテーブルでは４バイトのintegerの主キーがあるので、気をつけてください！</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:SD,meta:{layout:"footnote",footnoteClass:"text-xs",slide:{raw:`---
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
大人気のある、長い歴史のあるアプリを維持する方がいれば、パニックになるのはまだ早いです！

まず、pgheroのようなツールを使って、integerのオーバーフローに近づいてくるシーケンスがあるかどうか調べる手があります。こんなテーブルがあれば、トリガを使って、主キーをbigintやuuidへマイグレーションして問題が解決できます。

万が一、主キーを既に使い尽くしてしまった場合でも、この世の終わりではないんです。データベースの整数は符号付なので、キーのシーケンスをマイナス二十億にリセットできます。これでbigintやuuidへのマイグレーションの時間が稼げます。
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

Example of pkey migration from int to bigint: [engineering.silverfin.com/pg-zero-downtime-bigint-migration](https://engineering.silverfin.com/pg-zero-downtime-bigint-migration/)`,frontmatter:{layout:"footnote",footnoteClass:"text-xs"},note:`大人気のある、長い歴史のあるアプリを維持する方がいれば、パニックになるのはまだ早いです！

まず、pgheroのようなツールを使って、integerのオーバーフローに近づいてくるシーケンスがあるかどうか調べる手があります。こんなテーブルがあれば、トリガを使って、主キーをbigintやuuidへマイグレーションして問題が解決できます。

万が一、主キーを既に使い尽くしてしまった場合でも、この世の終わりではないんです。データベースの整数は符号付なので、キーのシーケンスをマイナス二十億にリセットできます。これでbigintやuuidへのマイグレーションの時間が稼げます。`,index:14,start:432,end:469,noteHTML:`<p>大人気のある、長い歴史のあるアプリを維持する方がいれば、パニックになるのはまだ早いです！</p>
<p>まず、pgheroのようなツールを使って、integerのオーバーフローに近づいてくるシーケンスがあるかどうか調べる手があります。こんなテーブルがあれば、トリガを使って、主キーをbigintやuuidへマイグレーションして問題が解決できます。</p>
<p>万が一、主キーを既に使い尽くしてしまった場合でも、この世の終わりではないんです。データベースの整数は符号付なので、キーのシーケンスをマイナス二十億にリセットできます。これでbigintやuuidへのマイグレーションの時間が稼げます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:UD,meta:{layout:"comparison",slide:{raw:`---
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
# => 1.7976931348623157e+308 🤔
Float::MAX == (Float::MAX + '0.1'.to_f)
# => true 🤯

Float::NAN == Float::NAN # => false
\`\`\`


::pgtype::

\`real\` — 4 bytes

\`double\` — 8 bytes

::postgresql::

\`\`\`sql
SELECT 0.1::float + 0.2::float; -- 0.30000000000000004
SELECT 0.1 + 0.2; -- 0.3 (but it is NOT float!)

SELECT '1.7976931348623157e+308'::float + '1e+308'::float;
--- ERROR:  value out of range: overflow
SELECT '+inf'::double precision; -- Infinity 🤷

SELECT '1.7976931348623157e+308'::float = 
('1.7976931348623157e+308'::float + '0.1'::float);
-- true ¯\\_(ツ)_/¯

SELECT 'NaN'::float = 'NaN'::float; -- true 🤯
\`\`\`

::footnote_ruby::

See Ruby docs for [Float](https://ruby-doc.org/core-3.1.0/Float.html)

::footnote_pg::

More fun at [0.30000000000000004.com](https://0.30000000000000004.com/)!

<qr-code url="https://0.30000000000000004.com/" caption="0.30000000000000004.com" class="w-32 absolute bottom-10px right-10px" />

<!--
次のデータ型は可変精度のあり、浮動小数点数（ふどうしょうすうてんすう）です。普段floatとdoubleといいます。RubyとPostgreSQLは両方ともIEEE754という標準を使っていても、いくつかの微妙な違いがあります。

RubyのクラスはFloatといっても、本当は８バイトのdouble precisionを使用するので、PostgreSQLの対応は８バイトのdoubleになります。

又、RubyのFloatは、計算の結果として無限大という値は可能です。PostgreSQLの場合は、オーバーフローのエラーが発生します。「少し変だな」とおもいます。

もう一つの例として、二つの「数ではない」という非数、NaNの値を比較すると、Rubyでは「非数は非数にイコールではない」という結果が出ます。これはIEEE754標準に合っています。けれども、PostgreSQLでは非数は非数にイコールになります。これはバグではなくて、意識的に決めたことです。ご注意ください。
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
# => 1.7976931348623157e+308 🤔
Float::MAX == (Float::MAX + '0.1'.to_f)
# => true 🤯

Float::NAN == Float::NAN # => false
\`\`\`


::pgtype::

\`real\` — 4 bytes

\`double\` — 8 bytes

::postgresql::

\`\`\`sql
SELECT 0.1::float + 0.2::float; -- 0.30000000000000004
SELECT 0.1 + 0.2; -- 0.3 (but it is NOT float!)

SELECT '1.7976931348623157e+308'::float + '1e+308'::float;
--- ERROR:  value out of range: overflow
SELECT '+inf'::double precision; -- Infinity 🤷

SELECT '1.7976931348623157e+308'::float = 
('1.7976931348623157e+308'::float + '0.1'::float);
-- true ¯\\_(ツ)_/¯

SELECT 'NaN'::float = 'NaN'::float; -- true 🤯
\`\`\`

::footnote_ruby::

See Ruby docs for [Float](https://ruby-doc.org/core-3.1.0/Float.html)

::footnote_pg::

More fun at [0.30000000000000004.com](https://0.30000000000000004.com/)!

<qr-code url="https://0.30000000000000004.com/" caption="0.30000000000000004.com" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"comparison"},note:`次のデータ型は可変精度のあり、浮動小数点数（ふどうしょうすうてんすう）です。普段floatとdoubleといいます。RubyとPostgreSQLは両方ともIEEE754という標準を使っていても、いくつかの微妙な違いがあります。

RubyのクラスはFloatといっても、本当は８バイトのdouble precisionを使用するので、PostgreSQLの対応は８バイトのdoubleになります。

又、RubyのFloatは、計算の結果として無限大という値は可能です。PostgreSQLの場合は、オーバーフローのエラーが発生します。「少し変だな」とおもいます。

もう一つの例として、二つの「数ではない」という非数、NaNの値を比較すると、Rubyでは「非数は非数にイコールではない」という結果が出ます。これはIEEE754標準に合っています。けれども、PostgreSQLでは非数は非数にイコールになります。これはバグではなくて、意識的に決めたことです。ご注意ください。`,index:15,start:469,end:544,noteHTML:`<p>次のデータ型は可変精度のあり、浮動小数点数（ふどうしょうすうてんすう）です。普段floatとdoubleといいます。RubyとPostgreSQLは両方ともIEEE754という標準を使っていても、いくつかの微妙な違いがあります。</p>
<p>RubyのクラスはFloatといっても、本当は８バイトのdouble precisionを使用するので、PostgreSQLの対応は８バイトのdoubleになります。</p>
<p>又、RubyのFloatは、計算の結果として無限大という値は可能です。PostgreSQLの場合は、オーバーフローのエラーが発生します。「少し変だな」とおもいます。</p>
<p>もう一つの例として、二つの「数ではない」という非数、NaNの値を比較すると、Rubyでは「非数は非数にイコールではない」という結果が出ます。これはIEEE754標準に合っています。けれども、PostgreSQLでは非数は非数にイコールになります。これはバグではなくて、意識的に決めたことです。ご注意ください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:HD,meta:{layout:"center",class:"text-3xl text-center",slide:{raw:`---
layout: center
class: text-3xl text-center
---

Don't use floats for calculating money!

<div class="text-5xl my-12">
🤑💥🤕
</div>

Never ever!

<!--
共通の真実ですけれども、お金などを浮動小数点数で絶対に計算しないでください！計算誤差が累積しますから。
-->
`,content:`Don't use floats for calculating money!

<div class="text-5xl my-12">
🤑💥🤕
</div>

Never ever!`,frontmatter:{layout:"center",class:"text-3xl text-center"},note:"共通の真実ですけれども、お金などを浮動小数点数で絶対に計算しないでください！計算誤差が累積しますから。",index:16,start:544,end:561,noteHTML:`<p>共通の真実ですけれども、お金などを浮動小数点数で絶対に計算しないでください！計算誤差が累積しますから。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:sC,meta:{layout:"comparison",slide:{raw:`---
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
# true 🤔
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
では、お金を数えるにはどんなデータ型を使った方がいいでしょうか？

PostgreSQLは、numericまたはdecimalという任意精度数のデータ型があります。非常に大きい桁数の数値を格納できます。それに、計算誤差はほとんど発生しないので、金額や正確性が必要な数量におすすめです。だが、Floatよりサイズが大きくて、性能も高くないです。

Rubyは、相当のデータ型はBigDecimalといいます。主な違いは、Rubyではゼロの割り算が可能です。結果はもちろん無限大になります。PostgreSQLの方では、エラーが発生します。しかし、BigDecimalは様々な設定があって、PostgreSQLに合わせて動作の変更ができます。
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
# true 🤔
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

**Use \`numeric\` to store money!**`,frontmatter:{layout:"comparison"},note:`では、お金を数えるにはどんなデータ型を使った方がいいでしょうか？

PostgreSQLは、numericまたはdecimalという任意精度数のデータ型があります。非常に大きい桁数の数値を格納できます。それに、計算誤差はほとんど発生しないので、金額や正確性が必要な数量におすすめです。だが、Floatよりサイズが大きくて、性能も高くないです。

Rubyは、相当のデータ型はBigDecimalといいます。主な違いは、Rubyではゼロの割り算が可能です。結果はもちろん無限大になります。PostgreSQLの方では、エラーが発生します。しかし、BigDecimalは様々な設定があって、PostgreSQLに合わせて動作の変更ができます。`,index:17,start:561,end:629,noteHTML:`<p>では、お金を数えるにはどんなデータ型を使った方がいいでしょうか？</p>
<p>PostgreSQLは、numericまたはdecimalという任意精度数のデータ型があります。非常に大きい桁数の数値を格納できます。それに、計算誤差はほとんど発生しないので、金額や正確性が必要な数量におすすめです。だが、Floatよりサイズが大きくて、性能も高くないです。</p>
<p>Rubyは、相当のデータ型はBigDecimalといいます。主な違いは、Rubyではゼロの割り算が可能です。結果はもちろん無限大になります。PostgreSQLの方では、エラーが発生します。しかし、BigDecimalは様々な設定があって、PostgreSQLに合わせて動作の変更ができます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:hC,meta:{layout:"comparison",slide:{raw:`---
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
-- ¥ 100,500
-- 🤯 But it should be dollars, and where are my cents?
\`\`\`

::footnote_ruby::

ActiveRecord has to parse textual representation, see [connection_adapters/postgresql/oid/money.rb](https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36)

Also see [issue № 31457](https://github.com/rails/rails/issues/31457) for lots of pain.

::footnote_pg::

Both output and acceptable input format depends on session-level \`lc_monetary\` setting!

Precision is defined by \`lc_monetary\` at database creation time and can't be changed!

<!--
「PostgreSQLでは特別な通貨型がありますよ」と言う方がいるかもしれません。

本当ですね、ありますね、金額のために特別に作られたデータ型です。

moneyは、固定小数点数として保存されるため、計算誤差はありません。これはいいことですね。

でも、別の問題があります。入出力形式も、小数点の位置もlc_monetaryの設定により変わるので、productionと開発環境の間、相互運用性の問題が発生する可能性があります。そのため、通貨型を使わない方が良いとおもいます。
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
-- ¥ 100,500
-- 🤯 But it should be dollars, and where are my cents?
\`\`\`

::footnote_ruby::

ActiveRecord has to parse textual representation, see [connection_adapters/postgresql/oid/money.rb](https://github.com/rails/rails/blob/f8e97a1464e0ab7feabf87f9da7fd9a86af509a0/activerecord/lib/active_record/connection_adapters/postgresql/oid/money.rb#L16-L36)

Also see [issue № 31457](https://github.com/rails/rails/issues/31457) for lots of pain.

::footnote_pg::

Both output and acceptable input format depends on session-level \`lc_monetary\` setting!

Precision is defined by \`lc_monetary\` at database creation time and can't be changed!`,frontmatter:{layout:"comparison"},note:`「PostgreSQLでは特別な通貨型がありますよ」と言う方がいるかもしれません。

本当ですね、ありますね、金額のために特別に作られたデータ型です。

moneyは、固定小数点数として保存されるため、計算誤差はありません。これはいいことですね。

でも、別の問題があります。入出力形式も、小数点の位置もlc_monetaryの設定により変わるので、productionと開発環境の間、相互運用性の問題が発生する可能性があります。そのため、通貨型を使わない方が良いとおもいます。`,index:18,start:629,end:695,noteHTML:`<p>「PostgreSQLでは特別な通貨型がありますよ」と言う方がいるかもしれません。</p>
<p>本当ですね、ありますね、金額のために特別に作られたデータ型です。</p>
<p>moneyは、固定小数点数として保存されるため、計算誤差はありません。これはいいことですね。</p>
<p>でも、別の問題があります。入出力形式も、小数点の位置もlc_monetaryの設定により変わるので、productionと開発環境の間、相互運用性の問題が発生する可能性があります。そのため、通貨型を使わない方が良いとおもいます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:wC,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Strings and texts, lyrics and prose

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
"こんにちは地球人！".encoding
# => #<Encoding:UTF-8>

"\\xe3\\x2e\\x2e".encoding
# => #<Encoding:UTF-8>
"\\xe3\\x2e\\x2e".valid_encoding?
# => false

"これ\\x00やばい!".valid_encoding?
# => true
\`\`\`

::pgtype::

\`varchar\`, \`text\`

variable size, max 1 GB

::postgresql::

\`\`\`sql
SELECT 'こんにちは地球人！';
-- こんにちは地球人！

SELECT E'\\xe3\\x2e\\x2e');
-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e



SELECT E'これ\\x00やばい!';
-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00
\`\`\`

::footnote_ruby::

Read the docs: [String](https://ruby-doc.org/core-3.1.2/String.html)

::footnote_pg::

Read the docs: [8.3. Character Types](https://www.postgresql.org/docs/14/datatype-character.html)

<!--
次は文字列です！RubyとPostgreSQLの間の一番大事な違いはエンコーディングのことです。

Rubyの文字列は実に多目的なものです。サイズも制限されないし、中身もどんなデータでもいいです。各文字列は異なるエンコーディングを持てるし、エンコーディングの変更もできます。さらに文字コード的に正しくないデータが入っても問題はありません。

逆に、PostgreSQLには、全ての文字列は同じ文字コードを持つべきです。この文字コードは、データベースの作成時に設定されて、後で変更できません。文字列は、不正なデータやコードゼロを入れるとエラーが発生します。そして、サイズの制限は１ギガバイトです。
-->
`,title:"Strings and texts, lyrics and prose",level:2,content:`## Strings and texts, lyrics and prose

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
"こんにちは地球人！".encoding
# => #<Encoding:UTF-8>

"\\xe3\\x2e\\x2e".encoding
# => #<Encoding:UTF-8>
"\\xe3\\x2e\\x2e".valid_encoding?
# => false

"これ\\x00やばい!".valid_encoding?
# => true
\`\`\`

::pgtype::

\`varchar\`, \`text\`

variable size, max 1 GB

::postgresql::

\`\`\`sql
SELECT 'こんにちは地球人！';
-- こんにちは地球人！

SELECT E'\\xe3\\x2e\\x2e');
-- ERROR:  invalid byte sequence for encoding "UTF8": 0xe3 0x2e 0x2e



SELECT E'これ\\x00やばい!';
-- ERROR:  invalid byte sequence for encoding "UTF8": 0x00
\`\`\`

::footnote_ruby::

Read the docs: [String](https://ruby-doc.org/core-3.1.2/String.html)

::footnote_pg::

Read the docs: [8.3. Character Types](https://www.postgresql.org/docs/14/datatype-character.html)`,frontmatter:{layout:"comparison"},note:`次は文字列です！RubyとPostgreSQLの間の一番大事な違いはエンコーディングのことです。

Rubyの文字列は実に多目的なものです。サイズも制限されないし、中身もどんなデータでもいいです。各文字列は異なるエンコーディングを持てるし、エンコーディングの変更もできます。さらに文字コード的に正しくないデータが入っても問題はありません。

逆に、PostgreSQLには、全ての文字列は同じ文字コードを持つべきです。この文字コードは、データベースの作成時に設定されて、後で変更できません。文字列は、不正なデータやコードゼロを入れるとエラーが発生します。そして、サイズの制限は１ギガバイトです。`,index:19,start:695,end:759,noteHTML:`<p>次は文字列です！RubyとPostgreSQLの間の一番大事な違いはエンコーディングのことです。</p>
<p>Rubyの文字列は実に多目的なものです。サイズも制限されないし、中身もどんなデータでもいいです。各文字列は異なるエンコーディングを持てるし、エンコーディングの変更もできます。さらに文字コード的に正しくないデータが入っても問題はありません。</p>
<p>逆に、PostgreSQLには、全ての文字列は同じ文字コードを持つべきです。この文字コードは、データベースの作成時に設定されて、後で変更できません。文字列は、不正なデータやコードゼロを入れるとエラーが発生します。そして、サイズの制限は１ギガバイトです。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:NC,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

# So many string types!

<div class="my-12"></div>

 1. Don't use \`char(n)\`

    It is always size of \`n\` and stores unnecessary spaces at right. Mostly for compatibility with older applications.

 2. \`varchar\` and \`text\` are effectively the same, choose whatever you like.

    \`string\` in migrations is \`varchar\` in PostgreSQL.

<div class="my-12"></div>

💡 **Did you know?**

SimpleForm gem will render multi-line HTML \`<textarea>\` tag for text type and
single-line \`<input type="text">\` for character varying.

Convention over configuration!

::footnote::

See SimpleForm gem README: [github.com/heartcombo/simple_form](https://github.com/heartcombo/simple_form#available-input-types-and-defaults-for-each-column-type)

<!--
PostgreSQLでは、文字列の専用データ型は三つがあります。char, varcharとtextです。charを使わないほうがいいと思います。冗長な空白も保存されているため、入力スピードは低いです。詳しくはマニュアルをご覧ください。

varcharとtextは本当に同じデータ型で、どちらも良いです。でも、このデータ型の名前の違いに意味を付けることができます。

たとえば、SimpleFormというジェムはvarcharの列の場合、HTMLのinputタグを生成して、textの列の場合は複数の行が入力できるtextareaタグを生成します。

設定より規約が優先ですね。
-->
`,title:"So many string types!",level:1,content:`# So many string types!

<div class="my-12"></div>

 1. Don't use \`char(n)\`

    It is always size of \`n\` and stores unnecessary spaces at right. Mostly for compatibility with older applications.

 2. \`varchar\` and \`text\` are effectively the same, choose whatever you like.

    \`string\` in migrations is \`varchar\` in PostgreSQL.

<div class="my-12"></div>

💡 **Did you know?**

SimpleForm gem will render multi-line HTML \`<textarea>\` tag for text type and
single-line \`<input type="text">\` for character varying.

Convention over configuration!

::footnote::

See SimpleForm gem README: [github.com/heartcombo/simple_form](https://github.com/heartcombo/simple_form#available-input-types-and-defaults-for-each-column-type)`,frontmatter:{layout:"footnote"},note:`PostgreSQLでは、文字列の専用データ型は三つがあります。char, varcharとtextです。charを使わないほうがいいと思います。冗長な空白も保存されているため、入力スピードは低いです。詳しくはマニュアルをご覧ください。

varcharとtextは本当に同じデータ型で、どちらも良いです。でも、このデータ型の名前の違いに意味を付けることができます。

たとえば、SimpleFormというジェムはvarcharの列の場合、HTMLのinputタグを生成して、textの列の場合は複数の行が入力できるtextareaタグを生成します。

設定より規約が優先ですね。`,index:20,start:759,end:798,noteHTML:`<p>PostgreSQLでは、文字列の専用データ型は三つがあります。char, varcharとtextです。charを使わないほうがいいと思います。冗長な空白も保存されているため、入力スピードは低いです。詳しくはマニュアルをご覧ください。</p>
<p>varcharとtextは本当に同じデータ型で、どちらも良いです。でも、このデータ型の名前の違いに意味を付けることができます。</p>
<p>たとえば、SimpleFormというジェムはvarcharの列の場合、HTMLのinputタグを生成して、textの列の場合は複数の行が入力できるtextareaタグを生成します。</p>
<p>設定より規約が優先ですね。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:MC,meta:{layout:"center",class:"text-2xl",slide:{raw:`---
layout: center
class: text-2xl
---

Please, use <a href="https://utf8everywhere.org/">utf8everywhere.org</a>!

<qr-code url="https://utf8everywhere.org/"  caption="utf8everywhere.org" class="w-32 absolute bottom-10px right-10px" />

<!--
文字コードの話なので、現在、ユニコードのUTF-8は、一番多目的で相互運用性のある文字コードです。Rubyにも、PostgreSQLにも、データ通信にも、どこにもそれを使ってお願いします。
-->
`,content:`Please, use <a href="https://utf8everywhere.org/">utf8everywhere.org</a>!

<qr-code url="https://utf8everywhere.org/"  caption="utf8everywhere.org" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"center",class:"text-2xl"},note:"文字コードの話なので、現在、ユニコードのUTF-8は、一番多目的で相互運用性のある文字コードです。Rubyにも、PostgreSQLにも、データ通信にも、どこにもそれを使ってお願いします。",index:21,start:798,end:811,noteHTML:`<p>文字コードの話なので、現在、ユニコードのUTF-8は、一番多目的で相互運用性のある文字コードです。Rubyにも、PostgreSQLにも、データ通信にも、どこにもそれを使ってお願いします。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:KC,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Binary data

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
data = File.binread(“meme.png”)
# => "\\x89PNG\\r\\n\\x1A…"
data.encoding # => #<Encoding:ASCII-8BIT>
data.bytesize # => 46534

Test.last.blob
# => "\\x89PNG\\r\\n\\x1A…"
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
SELECT '\\x89504e470d0a1a0a…'::bytea;

# Note hexadecimal format ↑
\`\`\`

::footnote_ruby::

Memory and network traffic consumption: 📈

::footnote_pg::

See [Binary Data Types](https://www.postgresql.org/docs/14/datatype-binary.html) page in the docs.

<!--
ゼロバイトや文字コードのミスがある文字列、もしくはバイナリデータを保存するため、PostgreSQLには特別なbyteaというデータ型があります。

Rubyでは、対応のデータ型はASCII-8BITという文字コードの文字列です。RubyとPostgresのデータ型には、違いが一切ありませんので、どちらも何でも格納できます。

ですが、ネットワーク転送量とメモリーのオーバーヘッドに気をつけてください。PostgreSQLは、バイナリデータを16進書式で入出力するので、データ量が２倍になります。

それに、ActiveRecordは各列に型キャスト前の値もメモリに置いていますので、Rubyプロセスのメモリ消費量は３倍になります。例えば、１ギガバイトのバイナリ値を読み込むと、ネット上で２ギガバイトが転送されて、Rubyのプロセスメモリは３ギガバイトが使用されます。
-->
`,title:"Binary data",level:2,content:`## Binary data

::rubytype::

\`String\`

Variable size

::ruby::

\`\`\`ruby
data = File.binread(“meme.png”)
# => "\\x89PNG\\r\\n\\x1A…"
data.encoding # => #<Encoding:ASCII-8BIT>
data.bytesize # => 46534

Test.last.blob
# => "\\x89PNG\\r\\n\\x1A…"
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
SELECT '\\x89504e470d0a1a0a…'::bytea;

# Note hexadecimal format ↑
\`\`\`

::footnote_ruby::

Memory and network traffic consumption: 📈

::footnote_pg::

See [Binary Data Types](https://www.postgresql.org/docs/14/datatype-binary.html) page in the docs.`,frontmatter:{layout:"comparison"},note:`ゼロバイトや文字コードのミスがある文字列、もしくはバイナリデータを保存するため、PostgreSQLには特別なbyteaというデータ型があります。

Rubyでは、対応のデータ型はASCII-8BITという文字コードの文字列です。RubyとPostgresのデータ型には、違いが一切ありませんので、どちらも何でも格納できます。

ですが、ネットワーク転送量とメモリーのオーバーヘッドに気をつけてください。PostgreSQLは、バイナリデータを16進書式で入出力するので、データ量が２倍になります。

それに、ActiveRecordは各列に型キャスト前の値もメモリに置いていますので、Rubyプロセスのメモリ消費量は３倍になります。例えば、１ギガバイトのバイナリ値を読み込むと、ネット上で２ギガバイトが転送されて、Rubyのプロセスメモリは３ギガバイトが使用されます。`,index:22,start:811,end:873,noteHTML:`<p>ゼロバイトや文字コードのミスがある文字列、もしくはバイナリデータを保存するため、PostgreSQLには特別なbyteaというデータ型があります。</p>
<p>Rubyでは、対応のデータ型はASCII-8BITという文字コードの文字列です。RubyとPostgresのデータ型には、違いが一切ありませんので、どちらも何でも格納できます。</p>
<p>ですが、ネットワーク転送量とメモリーのオーバーヘッドに気をつけてください。PostgreSQLは、バイナリデータを16進書式で入出力するので、データ量が２倍になります。</p>
<p>それに、ActiveRecordは各列に型キャスト前の値もメモリに置いていますので、Rubyプロセスのメモリ消費量は３倍になります。例えば、１ギガバイトのバイナリ値を読み込むと、ネット上で２ギガバイトが転送されて、Rubyのプロセスメモリは３ギガバイトが使用されます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:h6,meta:{slide:{raw:`
## What if 1 GB isn't enough?

You can't store more in a table column (hard limit)

But you can store up 4 TB in large objects table!

And there is a gem for that:

[active_storage-postgresql](https://github.com/lsylvester/active_storage-postgresql)

<div class="absolute bottom-5">
Beware performance implications of TOAST →
<br><small>More about it in PG docs: <a href="https://www.postgresql.org/docs/14/storage-toast.html">70.2. TOAST</a></small>
</div>

<Transform scale="0.67" origin="top right" class="min-w-550px absolute top-5 right-5">
  <Tweet id="1526922431780233218" />
</Transform>

<qr-code url="https://twitter.com/Envek/status/1526922431780233218" class="w-32 absolute bottom-8px right-12px" />

<!--
まぁ、１ギガバイト以上格納したい場合はどうすればいいか？

テーブルのフィールドには１ギガバイト以上のデータを保存することは絶対にできません。PostgreSQLのハードリミットです。

それにしても、ラージオブジェクトという特別な機能のおかげで、4テラバイトまでのファイルを、ActiveStorageの添付として格納できます。

一つの注意点があります。ラージオブジェクトや文字列、バイナリ列、JSONなどの大きい値は、全てTOASTという技法を使って保存されていますので、パーフォーマンスに過大な影響を与えます。できるだけデータベースに巨大なオブジェクトを保存しないようにしてください。詳しくはPostgresのマニュアルとこの私が書いたツイッター・スレッドでおよみください。
-->
`,title:"What if 1 GB isn't enough?",level:2,content:`## What if 1 GB isn't enough?

You can't store more in a table column (hard limit)

But you can store up 4 TB in large objects table!

And there is a gem for that:

[active_storage-postgresql](https://github.com/lsylvester/active_storage-postgresql)

<div class="absolute bottom-5">
Beware performance implications of TOAST →
<br><small>More about it in PG docs: <a href="https://www.postgresql.org/docs/14/storage-toast.html">70.2. TOAST</a></small>
</div>

<Transform scale="0.67" origin="top right" class="min-w-550px absolute top-5 right-5">
  <Tweet id="1526922431780233218" />
</Transform>

<qr-code url="https://twitter.com/Envek/status/1526922431780233218" class="w-32 absolute bottom-8px right-12px" />`,frontmatter:{},note:`まぁ、１ギガバイト以上格納したい場合はどうすればいいか？

テーブルのフィールドには１ギガバイト以上のデータを保存することは絶対にできません。PostgreSQLのハードリミットです。

それにしても、ラージオブジェクトという特別な機能のおかげで、4テラバイトまでのファイルを、ActiveStorageの添付として格納できます。

一つの注意点があります。ラージオブジェクトや文字列、バイナリ列、JSONなどの大きい値は、全てTOASTという技法を使って保存されていますので、パーフォーマンスに過大な影響を与えます。できるだけデータベースに巨大なオブジェクトを保存しないようにしてください。詳しくはPostgresのマニュアルとこの私が書いたツイッター・スレッドでおよみください。`,index:23,start:874,end:906,noteHTML:`<p>まぁ、１ギガバイト以上格納したい場合はどうすればいいか？</p>
<p>テーブルのフィールドには１ギガバイト以上のデータを保存することは絶対にできません。PostgreSQLのハードリミットです。</p>
<p>それにしても、ラージオブジェクトという特別な機能のおかげで、4テラバイトまでのファイルを、ActiveStorageの添付として格納できます。</p>
<p>一つの注意点があります。ラージオブジェクトや文字列、バイナリ列、JSONなどの大きい値は、全てTOASTという技法を使って保存されていますので、パーフォーマンスに過大な影響を与えます。できるだけデータベースに巨大なオブジェクトを保存しないようにしてください。詳しくはPostgresのマニュアルとこの私が書いたツイッター・スレッドでおよみください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:k6,meta:{layout:"comparison",slide:{raw:`---
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
PostgreSQLとRubyの日付のデータ型は非常に似ています、得な違いがないとおもいます。面白いのは、どちらもいわゆるユリウス通日を使用します。

ユリウス通日は、日に番号を付ける方法です。 名前が似ていても、ユリウス暦に関係はありません。
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

See [B.7. Julian Dates](https://www.postgresql.org/docs/14/datetime-julian-dates.html) in PostgreSQL docs.`,frontmatter:{layout:"comparison"},note:`PostgreSQLとRubyの日付のデータ型は非常に似ています、得な違いがないとおもいます。面白いのは、どちらもいわゆるユリウス通日を使用します。

ユリウス通日は、日に番号を付ける方法です。 名前が似ていても、ユリウス暦に関係はありません。`,index:24,start:906,end:950,noteHTML:`<p>PostgreSQLとRubyの日付のデータ型は非常に似ています、得な違いがないとおもいます。面白いのは、どちらもいわゆるユリウス通日を使用します。</p>
<p>ユリウス通日は、日に番号を付ける方法です。 名前が似ていても、ユリウス暦に関係はありません。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:U6,meta:{layout:"comparison",rubyRails:"ruby-rails",slide:{raw:`---
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
 2022-10-22 04:42:42 │ 2022-10-02 13:42:42+09 │
 2022-10-22 13:42:42 │ 2022-10-02 13:42:42+09 │
 2022-10-22 05:42:42 │ 2022-10-02 13:42:42+09 │

\`\`\`

::footnote_ruby::

Ruby on Rails uses UTC timezone internally.

::footnote_pg::

Use \`timestamp with time zone\` whenever possible!

<!--
日付と時刻のデータ型は一番おもしろいです。そして正しく使うのが最も難しいデータ型だと思います。理由はもちろん時間帯、タイムゾーンです。

Rubyの標準ライブラリのTimeというクラスはパソコンの現地時間を使用しています。私のパソコンでTime.nowを呼び出すと、結果は日本時間帯の時刻になります、サーバーで呼び出すと、多分UTCの時刻になるでしょう。Timeのオブジェクトのタイムゾーンは変換不可能で、少し不便です。その理由で、ActiveRecordはTimeの代わりにActiveSupport::TimeWithZoneという特別なクラスを使っています。これがパソコンのタイムゾーンではなくて、アプリのタイムゾーン設定を使っています。それに、このデータ型がタイムゾーンの情報も含めるため、様々な時刻計算とタイムゾーン変換ができます。

データベースの方へ行くと、ActiveRecordは時刻をデータベースに書き込む前UTCに変換して、読み込んでからアプリのタイムゾーンに変換します。データベースではすべての時刻はいつもUTCです。

PostgreSQLは日付と時刻のデータ型が二つあります。タイムゾーンのない型とタイムゾーンのある型です。おかしいですが、両方ともタイムゾーンの情報を格納されていません。
timestamp with time zoneの場合、格納されている値はUTCです。読み込む時にtimezoneというセッション設定どおりに変換します。普通のtimestamp型は、データを変換なしでそのままで格納されています。

ActiveRecordはtimezoneのセッション設定をUTCに設定しますので、この二つのデータ型はの違いは無くなくなります。ですが、psqlを使って、データベースに直接接続する際に、時刻のデータを台無しにするおそれがありますので、気をつけたほうがいいです。
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
 2022-10-22 04:42:42 │ 2022-10-02 13:42:42+09 │
 2022-10-22 13:42:42 │ 2022-10-02 13:42:42+09 │
 2022-10-22 05:42:42 │ 2022-10-02 13:42:42+09 │

\`\`\`

::footnote_ruby::

Ruby on Rails uses UTC timezone internally.

::footnote_pg::

Use \`timestamp with time zone\` whenever possible!`,frontmatter:{layout:"comparison",rubyRails:"ruby-rails"},note:`日付と時刻のデータ型は一番おもしろいです。そして正しく使うのが最も難しいデータ型だと思います。理由はもちろん時間帯、タイムゾーンです。

Rubyの標準ライブラリのTimeというクラスはパソコンの現地時間を使用しています。私のパソコンでTime.nowを呼び出すと、結果は日本時間帯の時刻になります、サーバーで呼び出すと、多分UTCの時刻になるでしょう。Timeのオブジェクトのタイムゾーンは変換不可能で、少し不便です。その理由で、ActiveRecordはTimeの代わりにActiveSupport::TimeWithZoneという特別なクラスを使っています。これがパソコンのタイムゾーンではなくて、アプリのタイムゾーン設定を使っています。それに、このデータ型がタイムゾーンの情報も含めるため、様々な時刻計算とタイムゾーン変換ができます。

データベースの方へ行くと、ActiveRecordは時刻をデータベースに書き込む前UTCに変換して、読み込んでからアプリのタイムゾーンに変換します。データベースではすべての時刻はいつもUTCです。

PostgreSQLは日付と時刻のデータ型が二つあります。タイムゾーンのない型とタイムゾーンのある型です。おかしいですが、両方ともタイムゾーンの情報を格納されていません。
timestamp with time zoneの場合、格納されている値はUTCです。読み込む時にtimezoneというセッション設定どおりに変換します。普通のtimestamp型は、データを変換なしでそのままで格納されています。

ActiveRecordはtimezoneのセッション設定をUTCに設定しますので、この二つのデータ型はの違いは無くなくなります。ですが、psqlを使って、データベースに直接接続する際に、時刻のデータを台無しにするおそれがありますので、気をつけたほうがいいです。`,index:25,start:950,end:1027,noteHTML:`<p>日付と時刻のデータ型は一番おもしろいです。そして正しく使うのが最も難しいデータ型だと思います。理由はもちろん時間帯、タイムゾーンです。</p>
<p>Rubyの標準ライブラリのTimeというクラスはパソコンの現地時間を使用しています。私のパソコンでTime.nowを呼び出すと、結果は日本時間帯の時刻になります、サーバーで呼び出すと、多分UTCの時刻になるでしょう。Timeのオブジェクトのタイムゾーンは変換不可能で、少し不便です。その理由で、ActiveRecordはTimeの代わりにActiveSupport::TimeWithZoneという特別なクラスを使っています。これがパソコンのタイムゾーンではなくて、アプリのタイムゾーン設定を使っています。それに、このデータ型がタイムゾーンの情報も含めるため、様々な時刻計算とタイムゾーン変換ができます。</p>
<p>データベースの方へ行くと、ActiveRecordは時刻をデータベースに書き込む前UTCに変換して、読み込んでからアプリのタイムゾーンに変換します。データベースではすべての時刻はいつもUTCです。</p>
<p>PostgreSQLは日付と時刻のデータ型が二つあります。タイムゾーンのない型とタイムゾーンのある型です。おかしいですが、両方ともタイムゾーンの情報を格納されていません。
timestamp with time zoneの場合、格納されている値はUTCです。読み込む時にtimezoneというセッション設定どおりに変換します。普通のtimestamp型は、データを変換なしでそのままで格納されています。</p>
<p>ActiveRecordはtimezoneのセッション設定をUTCに設定しますので、この二つのデータ型はの違いは無くなくなります。ですが、psqlを使って、データベースに直接接続する際に、時刻のデータを台無しにするおそれがありますので、気をつけたほうがいいです。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Q6,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

## How to not mess up with timezones

<div class="my-12"></div>

 1. Use timezone-aware methods

    Use \`Time.current\` and \`Date.current\` instead of \`Time.now\` and \`Date.today\`

 2. Convert timestamps to user time zone

    \`\`\`ruby
    Time.use_zone(user.timezone) do
      # Do SQL queries, render views, …
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
時刻とタイムゾーンを扱う時には、失敗が起こりやすいです。このルールを守って、バグの数を減らしましょう。

一番大切なのは、三番です。日付のデータ型をSQLクエリの条件では絶対に使わないでください。データベースのタイムゾーンも、日付が変わる時点もUTCなので、結果はUTCオフセットによってずれてしまいます。

注意点がたくさんあるので、詳しくはこのリンクでチェックしてみてください。
-->
`,title:"How to not mess up with timezones",level:2,content:`## How to not mess up with timezones

<div class="my-12"></div>

 1. Use timezone-aware methods

    Use \`Time.current\` and \`Date.current\` instead of \`Time.now\` and \`Date.today\`

 2. Convert timestamps to user time zone

    \`\`\`ruby
    Time.use_zone(user.timezone) do
      # Do SQL queries, render views, …
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

<qr-code url="https://thoughtbot.com/blog/its-about-time-zones" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"footnote"},note:`時刻とタイムゾーンを扱う時には、失敗が起こりやすいです。このルールを守って、バグの数を減らしましょう。

一番大切なのは、三番です。日付のデータ型をSQLクエリの条件では絶対に使わないでください。データベースのタイムゾーンも、日付が変わる時点もUTCなので、結果はUTCオフセットによってずれてしまいます。

注意点がたくさんあるので、詳しくはこのリンクでチェックしてみてください。`,index:26,start:1027,end:1070,noteHTML:`<p>時刻とタイムゾーンを扱う時には、失敗が起こりやすいです。このルールを守って、バグの数を減らしましょう。</p>
<p>一番大切なのは、三番です。日付のデータ型をSQLクエリの条件では絶対に使わないでください。データベースのタイムゾーンも、日付が変わる時点もUTCなので、結果はUTCオフセットによってずれてしまいます。</p>
<p>注意点がたくさんあるので、詳しくはこのリンクでチェックしてみてください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Z6,meta:{layout:"center",slide:{raw:`---
layout: center
---

## Time zones are hard

<Youtube id="-5wpm-gesOY" width="640" height="360" class="pt-10" />

<qr-code url="https://youtu.be/-5wpm-gesOY" class="w-32 absolute bottom-10px right-10px" />

<!--
タイムゾーンの正しい扱い方は、別の30分の専用発表ができるぐらい、非常に広い話題ですけど、今日は時間がないんです。

代わりに、このビデオはお勧めです。ぜひご覧ください！
-->
`,title:"Time zones are hard",level:2,content:`## Time zones are hard

<Youtube id="-5wpm-gesOY" width="640" height="360" class="pt-10" />

<qr-code url="https://youtu.be/-5wpm-gesOY" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{layout:"center"},note:`タイムゾーンの正しい扱い方は、別の30分の専用発表ができるぐらい、非常に広い話題ですけど、今日は時間がないんです。

代わりに、このビデオはお勧めです。ぜひご覧ください！`,index:27,start:1070,end:1086,noteHTML:`<p>タイムゾーンの正しい扱い方は、別の30分の専用発表ができるぐらい、非常に広い話題ですけど、今日は時間がないんです。</p>
<p>代わりに、このビデオはお勧めです。ぜひご覧ください！</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:lB,meta:{layout:"comparison",slide:{raw:`---
layout: comparison
---

## Void and uncertainity

::rubytype::

\`NilClass\`

::ruby::

\`\`\`ruby
nil == nil
# => true ¯\\_(ツ)_/¯
\`\`\`

::pgtype::

\`NULL\`

::postgresql::

\`\`\`sql
SELECT NULL = NULL; -- NULL 🚨
SELECT NULL IS NULL; -- true
SELECT NULL IS DISTINCT FROM NULL; -- false

SELECT 'Ruby' = NULL; -- NULL 🚨
SELECT 'Ruby' IS NULL; -- false
SELECT 'Ruby' IS DISTINCT FROM NULL; -- true
\`\`\`

<!--
RubyのnilとSQLのNULLも違います。

Rubyのnilはsingletonなので、nilはいつもnilにイコールです。逆に、SQLでは、NULLはNULLにイコールではありません。さらに、何かをNULLと比較すると結果はNULLになります。これも共通の真実ですけど、SQLではNULL値の検出や比較のために特別な演算子を使うべきです。
-->
`,title:"Void and uncertainity",level:2,content:`## Void and uncertainity

::rubytype::

\`NilClass\`

::ruby::

\`\`\`ruby
nil == nil
# => true ¯\\_(ツ)_/¯
\`\`\`

::pgtype::

\`NULL\`

::postgresql::

\`\`\`sql
SELECT NULL = NULL; -- NULL 🚨
SELECT NULL IS NULL; -- true
SELECT NULL IS DISTINCT FROM NULL; -- false

SELECT 'Ruby' = NULL; -- NULL 🚨
SELECT 'Ruby' IS NULL; -- false
SELECT 'Ruby' IS DISTINCT FROM NULL; -- true
\`\`\``,frontmatter:{layout:"comparison"},note:`RubyのnilとSQLのNULLも違います。

Rubyのnilはsingletonなので、nilはいつもnilにイコールです。逆に、SQLでは、NULLはNULLにイコールではありません。さらに、何かをNULLと比較すると結果はNULLになります。これも共通の真実ですけど、SQLではNULL値の検出や比較のために特別な演算子を使うべきです。`,index:28,start:1086,end:1125,noteHTML:`<p>RubyのnilとSQLのNULLも違います。</p>
<p>Rubyのnilはsingletonなので、nilはいつもnilにイコールです。逆に、SQLでは、NULLはNULLにイコールではありません。さらに、何かをNULLと比較すると結果はNULLになります。これも共通の真実ですけど、SQLではNULL値の検出や比較のために特別な演算子を使うべきです。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:iB,meta:{layout:"center",slide:{raw:`---
layout: center
---

# PostgreSQL-specific datatypes

<!--
今までは、多くのデータベースにあるデータ型でした。

次はPostgreSQLの独自のデータ型に移動しましょう。
-->
`,title:"PostgreSQL-specific datatypes",level:1,content:"# PostgreSQL-specific datatypes",frontmatter:{layout:"center"},note:`今までは、多くのデータベースにあるデータ型でした。

次はPostgreSQLの独自のデータ型に移動しましょう。`,index:29,start:1125,end:1137,noteHTML:`<p>今までは、多くのデータベースにあるデータ型でした。</p>
<p>次はPostgreSQLの独自のデータ型に移動しましょう。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:EB,meta:{layout:"comparison",slide:{raw:`---
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

JSONB is effective but strict: no duplicate keys, doesn't preserve whitespaces, etc…

\`\`\`sql
SELECT '{"foo": "bar","foo":"baz"}'::jsonb;
-- {"foo": "baz"}
\`\`\`

Inside: string <small>(no null-bytes!)</small>, numeric, …

::footnote_pg::

See [8.14 JSON Types](https://www.postgresql.org/docs/14/datatype-json.html) and [9.16 JSON Functions and Operators](https://www.postgresql.org/docs/14/functions-json.html)

<!--
JSON… 皆さんはJSONが好きですか？フレキシブルで便利なデータ型ですね。JSON自身はけっこう簡単なものだと見られますが、でも微妙なことはたくさんあります。

初めに、PostgreSQLには二つのJSONデータ型があります。JSONとJSONB。最近、JSONBの方がよく使われています。インデックスを作れますし、クエリーのパフォーマンすの方がいいし… ですが、厳密です。トークンの間の空白を無視したり、ヂュープのキーも捨てたりします。また、JSONBの中にある文字列にコードゼロを入れることは絶対できません、エスケープされた場合でも。

逆に、JSONはリアル・ワールドの変なJSONをほとんど全部保存できます。でも、JSONの全値はただの文字列です。
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

JSONB is effective but strict: no duplicate keys, doesn't preserve whitespaces, etc…

\`\`\`sql
SELECT '{"foo": "bar","foo":"baz"}'::jsonb;
-- {"foo": "baz"}
\`\`\`

Inside: string <small>(no null-bytes!)</small>, numeric, …

::footnote_pg::

See [8.14 JSON Types](https://www.postgresql.org/docs/14/datatype-json.html) and [9.16 JSON Functions and Operators](https://www.postgresql.org/docs/14/functions-json.html)`,frontmatter:{layout:"comparison"},note:`JSON… 皆さんはJSONが好きですか？フレキシブルで便利なデータ型ですね。JSON自身はけっこう簡単なものだと見られますが、でも微妙なことはたくさんあります。

初めに、PostgreSQLには二つのJSONデータ型があります。JSONとJSONB。最近、JSONBの方がよく使われています。インデックスを作れますし、クエリーのパフォーマンすの方がいいし… ですが、厳密です。トークンの間の空白を無視したり、ヂュープのキーも捨てたりします。また、JSONBの中にある文字列にコードゼロを入れることは絶対できません、エスケープされた場合でも。

逆に、JSONはリアル・ワールドの変なJSONをほとんど全部保存できます。でも、JSONの全値はただの文字列です。`,index:30,start:1137,end:1200,noteHTML:`<p>JSON… 皆さんはJSONが好きですか？フレキシブルで便利なデータ型ですね。JSON自身はけっこう簡単なものだと見られますが、でも微妙なことはたくさんあります。</p>
<p>初めに、PostgreSQLには二つのJSONデータ型があります。JSONとJSONB。最近、JSONBの方がよく使われています。インデックスを作れますし、クエリーのパフォーマンすの方がいいし… ですが、厳密です。トークンの間の空白を無視したり、ヂュープのキーも捨てたりします。また、JSONBの中にある文字列にコードゼロを入れることは絶対できません、エスケープされた場合でも。</p>
<p>逆に、JSONはリアル・ワールドの変なJSONをほとんど全部保存できます。でも、JSONの全値はただの文字列です。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:RB,meta:{slide:{raw:`
## JSON on steroids

<a href="https://github.com/DmitryTsepelev/store_model" class="block my-10 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/1a8dd076f9dc2fdca766c80094db91f36af4a302e4708ed0f3ad3d6b9535733d/DmitryTsepelev/store_model" class="w-96 mx-auto" />
</a>

Use [store_model](https://github.com/DmitryTsepelev/store_model) gem to make powerful value objects from JSON fields.

**But don't overuse!**

There is performance penalty for serialization and deserialization.

<qr-code url="https://github.com/DmitryTsepelev/store_model" caption="store_model gem repo" class="w-32 absolute bottom-10px right-10px" />

<!--
JSONはいいですけど、Rubyでは普通のHashになるので、使うのはそんなに便利ではないですね。JSONはいろいろなメソッドのあるオブジェクトだったらいいなと思う人がいるでしょう。

それはValue objectというパターンを使って実現出来ます。そしてstore_modelというジェムもお勧めします。これを使ってJSONの値を、モデルのような便利なオブジェクトに変えられます。ただし、パフォーマンス低下にご注意ください。
-->
`,title:"JSON on steroids",level:2,content:`## JSON on steroids

<a href="https://github.com/DmitryTsepelev/store_model" class="block my-10 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/1a8dd076f9dc2fdca766c80094db91f36af4a302e4708ed0f3ad3d6b9535733d/DmitryTsepelev/store_model" class="w-96 mx-auto" />
</a>

Use [store_model](https://github.com/DmitryTsepelev/store_model) gem to make powerful value objects from JSON fields.

**But don't overuse!**

There is performance penalty for serialization and deserialization.

<qr-code url="https://github.com/DmitryTsepelev/store_model" caption="store_model gem repo" class="w-32 absolute bottom-10px right-10px" />`,frontmatter:{},note:`JSONはいいですけど、Rubyでは普通のHashになるので、使うのはそんなに便利ではないですね。JSONはいろいろなメソッドのあるオブジェクトだったらいいなと思う人がいるでしょう。

それはValue objectというパターンを使って実現出来ます。そしてstore_modelというジェムもお勧めします。これを使ってJSONの値を、モデルのような便利なオブジェクトに変えられます。ただし、パフォーマンス低下にご注意ください。`,index:31,start:1201,end:1222,noteHTML:`<p>JSONはいいですけど、Rubyでは普通のHashになるので、使うのはそんなに便利ではないですね。JSONはいろいろなメソッドのあるオブジェクトだったらいいなと思う人がいるでしょう。</p>
<p>それはValue objectというパターンを使って実現出来ます。そしてstore_modelというジェムもお勧めします。これを使ってJSONの値を、モデルのような便利なオブジェクトに変えられます。ただし、パフォーマンス低下にご注意ください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:jB,meta:{layout:"comparison",slide:{raw:`---
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

\`intrange\`, \`tsrange\`, …

\`intmultirange\`, …

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
-- and many more… (exclusion constraints!)
\`\`\`

::footnote_ruby::

Additional methods in the [facets](https://github.com/rubyworks/facets) gem.

::footnote_pg::

https://www.postgresql.org/docs/14/rangetypes.html

<!--
次はRange、範囲型です。二つの値の間の範囲を表すデータ型ですね。簡単にいくらかの範囲値を比較ことができますから、すごく便利なものです。

さらに、PostgreSQLの範囲型を使って排他制約(exclusion constraint)ができます。例えば、予約アプリでは排他制約を使って会議室やホテルの部屋のダブルブッキングを防ぐ制約が作ることができます。

ですが、RubyとPostgreSQLの範囲型では、重大な違いがあります。それは下限値です。Rubyでは、範囲の左の境界は閉じたものなので、最小の値はいつも範囲に含まれます。PostgreSQLは、含むことも含まないこともできます。

離散的な範囲型だったら、例えばinteger又は日付の場合、ActiveRecordは賢いギミックをします。Rubyにはありえない開いた下限値に１を足して、閉じた境界に変更します。でも、連続的な範囲型の場合、エラーが発生するので仕方がありません。
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

\`intrange\`, \`tsrange\`, …

\`intmultirange\`, …

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
-- and many more… (exclusion constraints!)
\`\`\`

::footnote_ruby::

Additional methods in the [facets](https://github.com/rubyworks/facets) gem.

::footnote_pg::

https://www.postgresql.org/docs/14/rangetypes.html`,frontmatter:{layout:"comparison"},note:`次はRange、範囲型です。二つの値の間の範囲を表すデータ型ですね。簡単にいくらかの範囲値を比較ことができますから、すごく便利なものです。

さらに、PostgreSQLの範囲型を使って排他制約(exclusion constraint)ができます。例えば、予約アプリでは排他制約を使って会議室やホテルの部屋のダブルブッキングを防ぐ制約が作ることができます。

ですが、RubyとPostgreSQLの範囲型では、重大な違いがあります。それは下限値です。Rubyでは、範囲の左の境界は閉じたものなので、最小の値はいつも範囲に含まれます。PostgreSQLは、含むことも含まないこともできます。

離散的な範囲型だったら、例えばinteger又は日付の場合、ActiveRecordは賢いギミックをします。Rubyにはありえない開いた下限値に１を足して、閉じた境界に変更します。でも、連続的な範囲型の場合、エラーが発生するので仕方がありません。`,index:32,start:1222,end:1294,noteHTML:`<p>次はRange、範囲型です。二つの値の間の範囲を表すデータ型ですね。簡単にいくらかの範囲値を比較ことができますから、すごく便利なものです。</p>
<p>さらに、PostgreSQLの範囲型を使って排他制約(exclusion constraint)ができます。例えば、予約アプリでは排他制約を使って会議室やホテルの部屋のダブルブッキングを防ぐ制約が作ることができます。</p>
<p>ですが、RubyとPostgreSQLの範囲型では、重大な違いがあります。それは下限値です。Rubyでは、範囲の左の境界は閉じたものなので、最小の値はいつも範囲に含まれます。PostgreSQLは、含むことも含まないこともできます。</p>
<p>離散的な範囲型だったら、例えばinteger又は日付の場合、ActiveRecordは賢いギミックをします。Rubyにはありえない開いた下限値に１を足して、閉じた境界に変更します。でも、連続的な範囲型の場合、エラーが発生するので仕方がありません。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:eE,meta:{layout:"comparison",slide:{raw:`---
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
# => “40f15398-4b38-4e16-8b3c-ff16fc960d38”

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
UUID。私はUUIDが大好きです。bigintより２倍大きいですが、多目的のデータ型です。UUIDの種類は様々があります。ランダムやハッシュ方式やタイムスタンプ方式の意識別子を生成できます。

RubyとRailsには相当のデータ型がなくて、データは標準形式で文字列として保存されています。PostgreSQLには、16バイトの整数、integerとして格納されていますが、入出力は文字列の形式です。

みんなは全ランダムのUUIDバージョン４を使っているみたいです。ハッシュに基づいたUUIDバージョン５は逆にランダムではなくて、完全に決定論的です。時にはこれが役に立つこともあります。

又、新しくて、まだ標準化されていないUUIDバージョン 6、7、8があります。全部タイムスタンプに基づいて、時間の経過とともに単調増加するというかなり有用な特性を持っています。プラス、いくつかのバイトはランダムですが、任意のデータも入れることができます。詳しくはこのリンクを確認してください。
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
# => “40f15398-4b38-4e16-8b3c-ff16fc960d38”

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

See docs for [pgcrypto](https://www.postgresql.org/docs/14/pgcrypto.html) and [uuid-ossp](https://www.postgresql.org/docs/14/uuid-ossp.html) extensions.`,frontmatter:{layout:"comparison"},note:`UUID。私はUUIDが大好きです。bigintより２倍大きいですが、多目的のデータ型です。UUIDの種類は様々があります。ランダムやハッシュ方式やタイムスタンプ方式の意識別子を生成できます。

RubyとRailsには相当のデータ型がなくて、データは標準形式で文字列として保存されています。PostgreSQLには、16バイトの整数、integerとして格納されていますが、入出力は文字列の形式です。

みんなは全ランダムのUUIDバージョン４を使っているみたいです。ハッシュに基づいたUUIDバージョン５は逆にランダムではなくて、完全に決定論的です。時にはこれが役に立つこともあります。

又、新しくて、まだ標準化されていないUUIDバージョン 6、7、8があります。全部タイムスタンプに基づいて、時間の経過とともに単調増加するというかなり有用な特性を持っています。プラス、いくつかのバイトはランダムですが、任意のデータも入れることができます。詳しくはこのリンクを確認してください。`,index:33,start:1294,end:1362,noteHTML:`<p>UUID。私はUUIDが大好きです。bigintより２倍大きいですが、多目的のデータ型です。UUIDの種類は様々があります。ランダムやハッシュ方式やタイムスタンプ方式の意識別子を生成できます。</p>
<p>RubyとRailsには相当のデータ型がなくて、データは標準形式で文字列として保存されています。PostgreSQLには、16バイトの整数、integerとして格納されていますが、入出力は文字列の形式です。</p>
<p>みんなは全ランダムのUUIDバージョン４を使っているみたいです。ハッシュに基づいたUUIDバージョン５は逆にランダムではなくて、完全に決定論的です。時にはこれが役に立つこともあります。</p>
<p>又、新しくて、まだ標準化されていないUUIDバージョン 6、7、8があります。全部タイムスタンプに基づいて、時間の経過とともに単調増加するというかなり有用な特性を持っています。プラス、いくつかのバイトはランダムですが、任意のデータも入れることができます。詳しくはこのリンクを確認してください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:uE,meta:{layout:"comparison",slide:{raw:`---
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
IPアドレス。ほとんど各アプリがこのデータ型を使います。アクセスログ、監査ログ、ログイン履歴などは普段クライアントのIPアドレスを含めています。IPバージョン４の文字列形式は16バイト以上ですが、PostgreSQLのデータ型は７バイトです。それに専用の演算子と関数がありますので、解析に役に立てるかもしれません。無視しないでください。
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

See [Network address types](https://www.postgresql.org/docs/14/datatype-net-types.html) and [functions and operators](https://www.postgresql.org/docs/14/functions-net.html).`,frontmatter:{layout:"comparison"},note:"IPアドレス。ほとんど各アプリがこのデータ型を使います。アクセスログ、監査ログ、ログイン履歴などは普段クライアントのIPアドレスを含めています。IPバージョン４の文字列形式は16バイト以上ですが、PostgreSQLのデータ型は７バイトです。それに専用の演算子と関数がありますので、解析に役に立てるかもしれません。無視しないでください。",index:34,start:1362,end:1423,noteHTML:`<p>IPアドレス。ほとんど各アプリがこのデータ型を使います。アクセスログ、監査ログ、ログイン履歴などは普段クライアントのIPアドレスを含めています。IPバージョン４の文字列形式は16バイト以上ですが、PostgreSQLのデータ型は７バイトです。それに専用の演算子と関数がありますので、解析に役に立てるかもしれません。無視しないでください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:AE,meta:{layout:"comparison",rubyRails:"rails",slide:{raw:`---
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
SELECT now() + ‘1 year’;
-- 2021-06-18 21:00:00+03

SELECT '100500 weeks'::interval;
-- 703500 days

SELECT EXTRACT(epoch FROM '1 month'::interval);
-- 2592000 (30.0 days in seconds)
\`\`\`

::footnote_ruby::

Disclaimer: I added it to Rails in [pull request № 16919](https://github.com/rails/rails/pull/16919).

::footnote_pg::

Supported out-of-the-box in Ruby on Rails 6.1+

<!--
時間間隔またはデュレイションまたはinterval。Railsでの開発者はみんなご存知でしょう、この魔法的な1.yearのものです。

時間間隔は実に当てになるものです。時間間隔のおかげで、日付まわりの細かいことに気にしなくて、時刻や日付の算数ができるようになりました。日付に時間間隔を足すと、来月とか来年の同じ日の同じ時間になります。どんな月でも、うるう年でも。本当に素晴らしいです。

時間間隔を秒数に変換できますが、あまり意味がないと思います。それにRailsとPostgreSQLの結果が違いますね。たとえば、Railsの１ヶ月は１年の平均的で30.4日ですが、PostgreSQLの１ヶ月の間隔はいつもちょうど30日です。なので、時刻と日付の算数のためのみに使われてほしいです。

二年前にリリースされたRuby on Railsバージョン6.1はPostgreSQLのintervalのサポートが含まれています。少し自慢話ですが、私が作ったものです。どうぞ使ってください！
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
SELECT now() + ‘1 year’;
-- 2021-06-18 21:00:00+03

SELECT '100500 weeks'::interval;
-- 703500 days

SELECT EXTRACT(epoch FROM '1 month'::interval);
-- 2592000 (30.0 days in seconds)
\`\`\`

::footnote_ruby::

Disclaimer: I added it to Rails in [pull request № 16919](https://github.com/rails/rails/pull/16919).

::footnote_pg::

Supported out-of-the-box in Ruby on Rails 6.1+`,frontmatter:{layout:"comparison",rubyRails:"rails"},note:`時間間隔またはデュレイションまたはinterval。Railsでの開発者はみんなご存知でしょう、この魔法的な1.yearのものです。

時間間隔は実に当てになるものです。時間間隔のおかげで、日付まわりの細かいことに気にしなくて、時刻や日付の算数ができるようになりました。日付に時間間隔を足すと、来月とか来年の同じ日の同じ時間になります。どんな月でも、うるう年でも。本当に素晴らしいです。

時間間隔を秒数に変換できますが、あまり意味がないと思います。それにRailsとPostgreSQLの結果が違いますね。たとえば、Railsの１ヶ月は１年の平均的で30.4日ですが、PostgreSQLの１ヶ月の間隔はいつもちょうど30日です。なので、時刻と日付の算数のためのみに使われてほしいです。

二年前にリリースされたRuby on Railsバージョン6.1はPostgreSQLのintervalのサポートが含まれています。少し自慢話ですが、私が作ったものです。どうぞ使ってください！`,index:35,start:1423,end:1484,noteHTML:`<p>時間間隔またはデュレイションまたはinterval。Railsでの開発者はみんなご存知でしょう、この魔法的な1.yearのものです。</p>
<p>時間間隔は実に当てになるものです。時間間隔のおかげで、日付まわりの細かいことに気にしなくて、時刻や日付の算数ができるようになりました。日付に時間間隔を足すと、来月とか来年の同じ日の同じ時間になります。どんな月でも、うるう年でも。本当に素晴らしいです。</p>
<p>時間間隔を秒数に変換できますが、あまり意味がないと思います。それにRailsとPostgreSQLの結果が違いますね。たとえば、Railsの１ヶ月は１年の平均的で30.4日ですが、PostgreSQLの１ヶ月の間隔はいつもちょうど30日です。なので、時刻と日付の算数のためのみに使われてほしいです。</p>
<p>二年前にリリースされたRuby on Railsバージョン6.1はPostgreSQLのintervalのサポートが含まれています。少し自慢話ですが、私が作ったものです。どうぞ使ってください！</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:RE,meta:{layout:"comparison",slide:{raw:`---
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
# UPDATE articles SET status = 'published' WHERE id = …
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
列挙型またはenumは、保存にはコンパクトで、４バイトだけが必要です。そしてSQLもRubyも人間が読めるラベルを使っていて、便利です。

普段、多くのモデルはステータスやタイプやソースなどの列があって、この様なケースでは列挙型を使った価値があると思います。Railsは、その上に便利な述語メソッドやセッターメソッドのあるインターフェースを追加しています。

以前、enumとしてintegerを使う慣行がありました。でもその場合は、データベースの方から見れば、フィールドの内容はただの数字です。生のSQLクエリを書くとけっこう不便になります。
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
# UPDATE articles SET status = 'published' WHERE id = …
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

See [8.7 Enumerated Types](https://www.postgresql.org/docs/14/datatype-enum.html) page in PostgreSQL docs`,frontmatter:{layout:"comparison"},note:`列挙型またはenumは、保存にはコンパクトで、４バイトだけが必要です。そしてSQLもRubyも人間が読めるラベルを使っていて、便利です。

普段、多くのモデルはステータスやタイプやソースなどの列があって、この様なケースでは列挙型を使った価値があると思います。Railsは、その上に便利な述語メソッドやセッターメソッドのあるインターフェースを追加しています。

以前、enumとしてintegerを使う慣行がありました。でもその場合は、データベースの方から見れば、フィールドの内容はただの数字です。生のSQLクエリを書くとけっこう不便になります。`,index:36,start:1484,end:1555,noteHTML:`<p>列挙型またはenumは、保存にはコンパクトで、４バイトだけが必要です。そしてSQLもRubyも人間が読めるラベルを使っていて、便利です。</p>
<p>普段、多くのモデルはステータスやタイプやソースなどの列があって、この様なケースでは列挙型を使った価値があると思います。Railsは、その上に便利な述語メソッドやセッターメソッドのあるインターフェースを追加しています。</p>
<p>以前、enumとしてintegerを使う慣行がありました。でもその場合は、データベースの方から見れば、フィールドの内容はただの数字です。生のSQLクエリを書くとけっこう不便になります。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:NE,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

# Inside ActiveRecord

How datatypes are working under the hood

<!--
でも、具体的、ActiveRecordはどうやってすべてのデータ型をPostgreSQLから読み込んだり、データベースに書き込んだりしているのでしょうか？
-->
`,title:"Inside ActiveRecord",level:1,content:`# Inside ActiveRecord

How datatypes are working under the hood`,frontmatter:{layout:"cover"},note:"でも、具体的、ActiveRecordはどうやってすべてのデータ型をPostgreSQLから読み込んだり、データベースに書き込んだりしているのでしょうか？",index:37,start:1555,end:1567,noteHTML:`<p>でも、具体的、ActiveRecordはどうやってすべてのデータ型をPostgreSQLから読み込んだり、データベースに書き込んだりしているのでしょうか？</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:WE,meta:{slide:{raw:`
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
PostgreSQLには沢山のいろいろなデータ型があっても、時々足りないんです。

例えば、前にPostgreSQLにあるマネーのデータ型について話したとき、これが不便で、いろいろな通貨、カレンシーを使えないといいました。この場合には複合型を使って、あたらしいデータ型を作ることができます。

例をあげます。問題は次のとおりです。あるアプリケーションに多くの通貨があり、ユーザーが自分のプロフィルでは好きなカレンシーを設定して、商品の価格をこのカレンシーで指定します。商品の値段を分かるためにユーザーのテーブルを商品のテーブルとJOINしなければならないんです。不便ですが、そんなに問題ないですね。

でもユーザーが通貨を変えたいときに問題になります。全商品の値段を換算しなければならないんです。そして、アプリのアーキテクチャによって、一つのSQLクエリーを使って一度でアップデートできないケースもあります。じゃぁ、これを解決ためにカレンシーの情報を商品のテーブルにコピーして、一つずつ換算します。

こういうと、お金は、実際、数字だけではなくて、通貨の情報とともに一体のものであるはずだと思えませんか？

この様なデータ型を作ってみましょう！
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
</div>`,frontmatter:{},note:`PostgreSQLには沢山のいろいろなデータ型があっても、時々足りないんです。

例えば、前にPostgreSQLにあるマネーのデータ型について話したとき、これが不便で、いろいろな通貨、カレンシーを使えないといいました。この場合には複合型を使って、あたらしいデータ型を作ることができます。

例をあげます。問題は次のとおりです。あるアプリケーションに多くの通貨があり、ユーザーが自分のプロフィルでは好きなカレンシーを設定して、商品の価格をこのカレンシーで指定します。商品の値段を分かるためにユーザーのテーブルを商品のテーブルとJOINしなければならないんです。不便ですが、そんなに問題ないですね。

でもユーザーが通貨を変えたいときに問題になります。全商品の値段を換算しなければならないんです。そして、アプリのアーキテクチャによって、一つのSQLクエリーを使って一度でアップデートできないケースもあります。じゃぁ、これを解決ためにカレンシーの情報を商品のテーブルにコピーして、一つずつ換算します。

こういうと、お金は、実際、数字だけではなくて、通貨の情報とともに一体のものであるはずだと思えませんか？

この様なデータ型を作ってみましょう！`,index:38,start:1568,end:1622,noteHTML:`<p>PostgreSQLには沢山のいろいろなデータ型があっても、時々足りないんです。</p>
<p>例えば、前にPostgreSQLにあるマネーのデータ型について話したとき、これが不便で、いろいろな通貨、カレンシーを使えないといいました。この場合には複合型を使って、あたらしいデータ型を作ることができます。</p>
<p>例をあげます。問題は次のとおりです。あるアプリケーションに多くの通貨があり、ユーザーが自分のプロフィルでは好きなカレンシーを設定して、商品の価格をこのカレンシーで指定します。商品の値段を分かるためにユーザーのテーブルを商品のテーブルとJOINしなければならないんです。不便ですが、そんなに問題ないですね。</p>
<p>でもユーザーが通貨を変えたいときに問題になります。全商品の値段を換算しなければならないんです。そして、アプリのアーキテクチャによって、一つのSQLクエリーを使って一度でアップデートできないケースもあります。じゃぁ、これを解決ためにカレンシーの情報を商品のテーブルにコピーして、一つずつ換算します。</p>
<p>こういうと、お金は、実際、数字だけではなくて、通貨の情報とともに一体のものであるはずだと思えませんか？</p>
<p>この様なデータ型を作ってみましょう！</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:ZE,meta:{slide:{raw:`
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
複合型を作るために「CREATE TYPE」というコマンドが使われています。

最初に通貨の情報があります。これは重要です。グループ化と並べ替えでは、コラムの順序で値が並べ替えられるためです。異なる通貨の価格を互いに比較することは実際には意味がありませんが、価格を通貨でグループ化してから、各通貨以内に価格を並べ替えるのは意味があります。これは、データベースインデックスの作成のために重要です。

それから複合型に制約は追加できないので、タイプ自身はそんなに役に立たないものです。この複合型を含むドメインを作成して、これにCHECKを追加すると役に立ちます。
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
\`\`\``,frontmatter:{},note:`複合型を作るために「CREATE TYPE」というコマンドが使われています。

最初に通貨の情報があります。これは重要です。グループ化と並べ替えでは、コラムの順序で値が並べ替えられるためです。異なる通貨の価格を互いに比較することは実際には意味がありませんが、価格を通貨でグループ化してから、各通貨以内に価格を並べ替えるのは意味があります。これは、データベースインデックスの作成のために重要です。

それから複合型に制約は追加できないので、タイプ自身はそんなに役に立たないものです。この複合型を含むドメインを作成して、これにCHECKを追加すると役に立ちます。`,index:39,start:1623,end:1652,noteHTML:`<p>複合型を作るために「CREATE TYPE」というコマンドが使われています。</p>
<p>最初に通貨の情報があります。これは重要です。グループ化と並べ替えでは、コラムの順序で値が並べ替えられるためです。異なる通貨の価格を互いに比較することは実際には意味がありませんが、価格を通貨でグループ化してから、各通貨以内に価格を並べ替えるのは意味があります。これは、データベースインデックスの作成のために重要です。</p>
<p>それから複合型に制約は追加できないので、タイプ自身はそんなに役に立たないものです。この複合型を含むドメインを作成して、これにCHECKを追加すると役に立ちます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:rw,meta:{slide:{raw:`
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
複合型を作るために「CREATE TYPE」というコマンドは「CREATE TABLE」にすごく似ています。実は、各テーブルは別な複合型が持っています。ということで、一つのテーブルには他のテーブルの複合型の列を追加でき、中に行全体を挿入できます。

でも、productionではこの機能を使わないでください。
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

(There are limitations)`,frontmatter:{},note:`複合型を作るために「CREATE TYPE」というコマンドは「CREATE TABLE」にすごく似ています。実は、各テーブルは別な複合型が持っています。ということで、一つのテーブルには他のテーブルの複合型の列を追加でき、中に行全体を挿入できます。

でも、productionではこの機能を使わないでください。`,index:40,start:1653,end:1681,noteHTML:`<p>複合型を作るために「CREATE TYPE」というコマンドは「CREATE TABLE」にすごく似ています。実は、各テーブルは別な複合型が持っています。ということで、一つのテーブルには他のテーブルの複合型の列を追加でき、中に行全体を挿入できます。</p>
<p>でも、productionではこの機能を使わないでください。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:dw,meta:{layout:"footnote",slide:{raw:`---
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
複合型を作った後で、普通のデータ型のようにテーブルに追加できます。

複合型を書き込むとき括弧が必要で、文字列を引用符で囲む必要があります。

読み込むときは値が括弧で囲まれて返却します。

必要があれば、データ型内の各列をアクセスもできますね。
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

See [8.16. Composite Types](https://www.postgresql.org/docs/14/rowtypes.html) in PostgreSQL docs for more advices and caveats.`,frontmatter:{layout:"footnote"},note:`複合型を作った後で、普通のデータ型のようにテーブルに追加できます。

複合型を書き込むとき括弧が必要で、文字列を引用符で囲む必要があります。

読み込むときは値が括弧で囲まれて返却します。

必要があれば、データ型内の各列をアクセスもできますね。`,index:41,start:1681,end:1719,noteHTML:`<p>複合型を作った後で、普通のデータ型のようにテーブルに追加できます。</p>
<p>複合型を書き込むとき括弧が必要で、文字列を引用符で囲む必要があります。</p>
<p>読み込むときは値が括弧で囲まれて返却します。</p>
<p>必要があれば、データ型内の各列をアクセスもできますね。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:gw,meta:{slide:{raw:`
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
よし、SQLの方は以上です。ActiveRecordの方から見てみましょう。

まず、PostgreSQLのコネクション・アダプターでデータ型を宣言しましょう。
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
\`\`\``,frontmatter:{},note:`よし、SQLの方は以上です。ActiveRecordの方から見てみましょう。

まず、PostgreSQLのコネクション・アダプターでデータ型を宣言しましょう。`,index:42,start:1720,end:1749,noteHTML:`<p>よし、SQLの方は以上です。ActiveRecordの方から見てみましょう。</p>
<p>まず、PostgreSQLのコネクション・アダプターでデータ型を宣言しましょう。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Cw,meta:{slide:{raw:`
## Deserialization

<div class="my-14"></div>

\`\`\`ruby{all|2|4-5}
def deserialize(value)
  return nil if value.nil?

  currency, amount = value.match(/\\A\\("?(\\w+)"?,(\\d+(?:\\.\\d+)?)\\)\\z/).captures
  ::Money.from_amount(BigDecimal(amount), currency)
end
\`\`\`

And \`"(USD,4.2)"\` becomes \`#<Money fractional:420 currency:USD>\` in Ruby ✨

<!--
データベースから読み込んだ値はRubyの値になるためにdeserializeというメソッドが呼び出されます。

NULLが来たら、ActiveRecordは予めRubyのnilにしますので、ただチェックでいいです。

通貨と数字をこのような小さくて読めないRegExpを使って、括弧から取り出して、マネーというジェムのオブジェクトを作成します。

簡単でしょ？
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

And \`"(USD,4.2)"\` becomes \`#<Money fractional:420 currency:USD>\` in Ruby ✨`,frontmatter:{},note:`データベースから読み込んだ値はRubyの値になるためにdeserializeというメソッドが呼び出されます。

NULLが来たら、ActiveRecordは予めRubyのnilにしますので、ただチェックでいいです。

通貨と数字をこのような小さくて読めないRegExpを使って、括弧から取り出して、マネーというジェムのオブジェクトを作成します。

簡単でしょ？`,index:43,start:1750,end:1776,noteHTML:`<p>データベースから読み込んだ値はRubyの値になるためにdeserializeというメソッドが呼び出されます。</p>
<p>NULLが来たら、ActiveRecordは予めRubyのnilにしますので、ただチェックでいいです。</p>
<p>通貨と数字をこのような小さくて読めないRegExpを使って、括弧から取り出して、マネーというジェムのオブジェクトを作成します。</p>
<p>簡単でしょ？</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:Sw,meta:{slide:{raw:`
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
同じ様に、データベースからではなくて、ユーザーの入力やコードで割り当てられたあたいを解析するにはcastというメソッドを書きましょう。

アプリのコードやrails consoleで予めに作ったマネーのジェムのオブジェクトを割り当てられますから、これをこのままで使いましょう。
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
\`\`\``,frontmatter:{},note:`同じ様に、データベースからではなくて、ユーザーの入力やコードで割り当てられたあたいを解析するにはcastというメソッドを書きましょう。

アプリのコードやrails consoleで予めに作ったマネーのジェムのオブジェクトを割り当てられますから、これをこのままで使いましょう。`,index:44,start:1777,end:1801,noteHTML:`<p>同じ様に、データベースからではなくて、ユーザーの入力やコードで割り当てられたあたいを解析するにはcastというメソッドを書きましょう。</p>
<p>アプリのコードやrails consoleで予めに作ったマネーのジェムのオブジェクトを割り当てられますから、これをこのままで使いましょう。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Pw,meta:{slide:{raw:`
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
前の二つのdeserializeとcastというメソッドを一つのcast_valueに置き換えることができます。
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

Replaces both \`deserialize\` and \`cast\`, also handles \`nil\`s.`,frontmatter:{},note:"前の二つのdeserializeとcastというメソッドを一つのcast_valueに置き換えることができます。",index:45,start:1802,end:1827,noteHTML:`<p>前の二つのdeserializeとcastというメソッドを一つのcast_valueに置き換えることができます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Uw,meta:{slide:{raw:`
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
逆にデータベースに書き込むまえに、ActiveRecordはserializeというメソッドを呼び出されます。

ここでtrue_moneyの中で使われている単純のデータ型のserializeメソッドを呼び出して、結果をただ括弧に囲むと以上になります。そんなに難しくないでしょう。
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

Reuse available serialization methods for subtypes.`,frontmatter:{},note:`逆にデータベースに書き込むまえに、ActiveRecordはserializeというメソッドを呼び出されます。

ここでtrue_moneyの中で使われている単純のデータ型のserializeメソッドを呼び出して、結果をただ括弧に囲むと以上になります。そんなに難しくないでしょう。`,index:46,start:1828,end:1851,noteHTML:`<p>逆にデータベースに書き込むまえに、ActiveRecordはserializeというメソッドを呼び出されます。</p>
<p>ここでtrue_moneyの中で使われている単純のデータ型のserializeメソッドを呼び出して、結果をただ括弧に囲むと以上になります。そんなに難しくないでしょう。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Hw,meta:{slide:{raw:`
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
結局、新しいデータ型をActiveRecordに登録しなければなりません。この様にできます、おもしろいところがほとんどありません。
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
\`\`\``,frontmatter:{},note:"結局、新しいデータ型をActiveRecordに登録しなければなりません。この様にできます、おもしろいところがほとんどありません。",index:47,start:1852,end:1882,noteHTML:`<p>結局、新しいデータ型をActiveRecordに登録しなければなりません。この様にできます、おもしろいところがほとんどありません。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Kw,meta:{slide:{raw:`
## Also add it for migrations…

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
最後に、マイグレーションで使えるために、メソッドを書いて、データ型をスキーマに登録しましょう。
-->
`,title:"Also add it for migrations…",level:2,content:`## Also add it for migrations…

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
\`\`\``,frontmatter:{},note:"最後に、マイグレーションで使えるために、メソッドを書いて、データ型をスキーマに登録しましょう。",index:48,start:1883,end:1910,noteHTML:`<p>最後に、マイグレーションで使えるために、メソッドを書いて、データ型をスキーマに登録しましょう。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:nk,meta:{slide:{raw:`
## Ready to use!

<div class="my-14"></div>

\`\`\`sh
rails g model Product title price:true_money
rails db:migrate
rails console
\`\`\`

<div class="my-14"></div>

\`\`\`ruby
Product.create!(title: "Something", price: Money.from_amount(100000, “USD”))
Product.last
# => #<Product id: 1, title: "Something", price: 100000.00 USD>
\`\`\`

<!--
では、以上です！

マイグレーションで列を追加できますし、コードの中でもアクセスできます。すごいじゃないでしょう？
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
Product.create!(title: "Something", price: Money.from_amount(100000, “USD”))
Product.last
# => #<Product id: 1, title: "Something", price: 100000.00 USD>
\`\`\``,frontmatter:{},note:`では、以上です！

マイグレーションで列を追加できますし、コードの中でもアクセスできます。すごいじゃないでしょう？`,index:49,start:1911,end:1936,noteHTML:`<p>では、以上です！</p>
<p>マイグレーションで列を追加できますし、コードの中でもアクセスできます。すごいじゃないでしょう？</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:yk,meta:{layout:"footnote",slide:{raw:`---
layout: footnote
---

## But it is not done yet!

<div class="grid grid-cols-2 gap-2">

<div>

A lot of stuff has to be done to make a full-featured datatype in SQL…

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
ですが、フル機能のデータ型まで道が遠いですね。データ型を効率良く使うために数学式や集約の関数などが必要です。それは手間がかかるでしょう。例えば、このスライドでは寄せ算と合算のオペレーションだけをサポートに必要なコードがあります。ちょっと多いですよね。
-->
`,title:"But it is not done yet!",level:2,content:`## But it is not done yet!

<div class="grid grid-cols-2 gap-2">

<div>

A lot of stuff has to be done to make a full-featured datatype in SQL…

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

After all, one might re-invent abandoned [pg-currency](https://github.com/samv/pg-currency)`,frontmatter:{layout:"footnote"},note:"ですが、フル機能のデータ型まで道が遠いですね。データ型を効率良く使うために数学式や集約の関数などが必要です。それは手間がかかるでしょう。例えば、このスライドでは寄せ算と合算のオペレーションだけをサポートに必要なコードがあります。ちょっと多いですよね。",index:50,start:1936,end:1996,noteHTML:`<p>ですが、フル機能のデータ型まで道が遠いですね。データ型を効率良く使うために数学式や集約の関数などが必要です。それは手間がかかるでしょう。例えば、このスライドでは寄せ算と合算のオペレーションだけをサポートに必要なコードがあります。ちょっと多いですよね。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:_k,meta:{slide:{raw:`
## Play with it yourself!


<div class="text-center my-12">
<qr-code url="https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986" class="max-w-80 mx-auto" />
</div>

https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986

<!--
もしかしたら、このアイディアが大好きになったかたはいらっしゃいましたら、このGistからダウンロードして、遊んでみてください。良い勉強になるかもしれません。
-->
`,title:"Play with it yourself!",level:2,content:`## Play with it yourself!


<div class="text-center my-12">
<qr-code url="https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986" class="max-w-80 mx-auto" />
</div>

https://gist.github.com/Envek/780b917e72a86c123776ee763b8dd986`,frontmatter:{},note:"もしかしたら、このアイディアが大好きになったかたはいらっしゃいましたら、このGistからダウンロードして、遊んでみてください。良い勉強になるかもしれません。",index:51,start:1997,end:2011,noteHTML:`<p>もしかしたら、このアイディアが大好きになったかたはいらっしゃいましたら、このGistからダウンロードして、遊んでみてください。良い勉強になるかもしれません。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:Dk,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

# Gems, gems, gems!

Everything That Can Be Invented Has Been Invented

<!--
もちろん、実際、自分でデータ型を作る機会がないかもしれません。理由は簡単：もうたくさんのデータ型のサポートを追加するジェムがありますから。
-->
`,title:"Gems, gems, gems!",level:1,content:`# Gems, gems, gems!

Everything That Can Be Invented Has Been Invented`,frontmatter:{layout:"cover"},note:"もちろん、実際、自分でデータ型を作る機会がないかもしれません。理由は簡単：もうたくさんのデータ型のサポートを追加するジェムがありますから。",index:52,start:2011,end:2023,noteHTML:`<p>もちろん、実際、自分でデータ型を作る機会がないかもしれません。理由は簡単：もうたくさんのデータ型のサポートを追加するジェムがありますから。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:kk,meta:{slide:{raw:`
## Gems for datatypes

<div class="my-14"></div>

- [torque-postgresql](https://github.com/crashtech/torque-postgresql) — standard datatypes not (yet) supported by Rails.

- [activerecord-postgis-adapter](https://github.com/rgeo/activerecord-postgis-adapter) — all the power of PostGIS extension in Ruby.

- [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) — support enum in migrations and schema (before Rails 7)

<!--
たとえば、torque-postgresqlはRailsにはまだないデータ型のサポートを含めて、それにActiveRecord自身にいろいろな機能も追加します。

次、大人気のPostGISというPostgreSQLの拡張を使うとactiverecord-postgis-adapterというジェムがすべてのデータ型のサポートを含めています。

それから、activerecord-postgres_enumはRails v7の前のアプリに列挙型のマイグレーションサポートを含めています。
-->
`,title:"Gems for datatypes",level:2,content:`## Gems for datatypes

<div class="my-14"></div>

- [torque-postgresql](https://github.com/crashtech/torque-postgresql) — standard datatypes not (yet) supported by Rails.

- [activerecord-postgis-adapter](https://github.com/rgeo/activerecord-postgis-adapter) — all the power of PostGIS extension in Ruby.

- [activerecord-postgres_enum](https://github.com/bibendi/activerecord-postgres_enum) — support enum in migrations and schema (before Rails 7)`,frontmatter:{},note:`たとえば、torque-postgresqlはRailsにはまだないデータ型のサポートを含めて、それにActiveRecord自身にいろいろな機能も追加します。

次、大人気のPostGISというPostgreSQLの拡張を使うとactiverecord-postgis-adapterというジェムがすべてのデータ型のサポートを含めています。

それから、activerecord-postgres_enumはRails v7の前のアプリに列挙型のマイグレーションサポートを含めています。`,index:53,start:2024,end:2043,noteHTML:`<p>たとえば、torque-postgresqlはRailsにはまだないデータ型のサポートを含めて、それにActiveRecord自身にいろいろな機能も追加します。</p>
<p>次、大人気のPostGISというPostgreSQLの拡張を使うとactiverecord-postgis-adapterというジェムがすべてのデータ型のサポートを含めています。</p>
<p>それから、activerecord-postgres_enumはRails v7の前のアプリに列挙型のマイグレーションサポートを含めています。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:Ok,meta:{slide:{raw:`
## Gems for other PostgreSQL features

Because PostgreSQL is much more than datatypes.

- [ActiveRecordExtended](https://github.com/GeorgeKaraszi/ActiveRecordExtended) — functions for datatypes and DSL for queries
- [fx](https://github.com/teoljungberg/fx) — make schema.rb great again with triggers
- [scenic](https://github.com/scenic-views/scenic) — add support for views
- [order_query](https://github.com/glebm/order_query) — keyset-pagination for your models
- [postgresql_cursor](https://github.com/afair/postgresql_cursor) — get more data from the database efficiently

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
皆はPostgreSQLが好きの理由はデータ型だけではなくて、いろいろな機能がありますから。ウィンドー関数、トリガ、ビュー、カーソル、などなど。この機能を使うとたくさんの問題を効率よく解決できます。

ですが、この様な機能を使うために読みやすいschema.rbを読みずらいstructure.sqlに変えるアプリが多いです。でも、fxやscenicのようなジェムはトリガやビューのサポートをschema.rbに追加しますので、読みやすいschema.rbを使いつづけてもいいですよ。

ですから、火星人が作ったpg_trunkというジェムをお勧めしたいと思います。fxとscenicに基づいて、いろいろなPostgreSQLの機能のサポートをschema.rbに追加します。
-->
`,title:"Gems for other PostgreSQL features",level:2,content:`## Gems for other PostgreSQL features

Because PostgreSQL is much more than datatypes.

- [ActiveRecordExtended](https://github.com/GeorgeKaraszi/ActiveRecordExtended) — functions for datatypes and DSL for queries
- [fx](https://github.com/teoljungberg/fx) — make schema.rb great again with triggers
- [scenic](https://github.com/scenic-views/scenic) — add support for views
- [order_query](https://github.com/glebm/order_query) — keyset-pagination for your models
- [postgresql_cursor](https://github.com/afair/postgresql_cursor) — get more data from the database efficiently

And also martian [pg_trunk](https://github.com/nepalez/pg_trunk/) gem to ~~rule them all~~ get \`fx\`, \`scenic\`, object dependency management and more within a single gem!

<div class="absolute left-4 bottom-12 rotate-340 text-lg">

\`structure.sql\` no more!

Make \`schema.rb\` great again!
</div>

<a href="https://github.com/nepalez/pg_trunk" class="block my-4 text-center no-underline border-none hover:border-none">
<img alt="store_model gem" src="https://opengraph.githubassets.com/fac14e6e69972a6081f741222ea276d67c3df90c2ca2c7b8fedfd007e878e16b/nepalez/pg_trunk" class="w-80 mx-auto" />
</a>

<qr-code url="https://github.com/nepalez/pg_trunk" caption="pg_trunk gem" class="w-32 absolute bottom-15px right-20px" />`,frontmatter:{},note:`皆はPostgreSQLが好きの理由はデータ型だけではなくて、いろいろな機能がありますから。ウィンドー関数、トリガ、ビュー、カーソル、などなど。この機能を使うとたくさんの問題を効率よく解決できます。

ですが、この様な機能を使うために読みやすいschema.rbを読みずらいstructure.sqlに変えるアプリが多いです。でも、fxやscenicのようなジェムはトリガやビューのサポートをschema.rbに追加しますので、読みやすいschema.rbを使いつづけてもいいですよ。

ですから、火星人が作ったpg_trunkというジェムをお勧めしたいと思います。fxとscenicに基づいて、いろいろなPostgreSQLの機能のサポートをschema.rbに追加します。`,index:54,start:2044,end:2078,noteHTML:`<p>皆はPostgreSQLが好きの理由はデータ型だけではなくて、いろいろな機能がありますから。ウィンドー関数、トリガ、ビュー、カーソル、などなど。この機能を使うとたくさんの問題を効率よく解決できます。</p>
<p>ですが、この様な機能を使うために読みやすいschema.rbを読みずらいstructure.sqlに変えるアプリが多いです。でも、fxやscenicのようなジェムはトリガやビューのサポートをschema.rbに追加しますので、読みやすいschema.rbを使いつづけてもいいですよ。</p>
<p>ですから、火星人が作ったpg_trunkというジェムをお勧めしたいと思います。fxとscenicに基づいて、いろいろなPostgreSQLの機能のサポートをschema.rbに追加します。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:Mk,meta:{layout:"cover",slide:{raw:`---
layout: cover
---

# That's it!

Questions?

<!--
今日はこれで以上です。最後まで聞いてくださってありがとうございます。
-->
`,title:"That's it!",level:1,content:`# That's it!

Questions?`,frontmatter:{layout:"cover"},note:"今日はこれで以上です。最後まで聞いてくださってありがとうございます。",index:55,start:2078,end:2090,noteHTML:`<p>今日はこれで以上です。最後まで聞いてくださってありがとうございます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:IS,meta:{slide:{raw:`
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

Our awesome blog: [evilmartians.com/chronicles](https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)!<br/><small class="text-xs">(Special thanks to <a href="https://twitter.com/hachi8833">@hachi8833</a> for translating ≈20 posts to Japanese!)</small>

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
ご質問があったら、私のツイッター等でご遠慮なく聞いてください。

下の右のQRコードを読み取って、このスライドをもう一度読めます。ドキュメントとジェムのリンクがいっぱいありますので、役に立つと思います。後でぜひ参照してみてください。

さいごに、我々のブログをお勧めしたいと思います。バックエンドやフロントエンドやデザインなどのいろいろな記事があるので、Ruby on RailsとPostgreSQLに興味がある方がたくさんの役に立てる記事があって、ぜひ読んでください。それに20ヶ条ぐらいの記事が日本語に翻訳されています、翻訳してくださった@hachi8833さんに感謝いたします。

今日はどうもありがとうございます。
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

Our awesome blog: [evilmartians.com/chronicles](https://evilmartians.com/chronicles/?utm_source=kaigionrails&utm_medium=slides&utm_campaign=postgresql-as-seen-by-rubyists)!<br/><small class="text-xs">(Special thanks to <a href="https://twitter.com/hachi8833">@hachi8833</a> for translating ≈20 posts to Japanese!)</small>

<p class="text-sm">See these slides at <a href="https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/">envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists</a></p>

<qr-code url="https://envek.github.io/kaigionrails-postgresql-as-seen-by-rubyists/" caption="These slides" class="w-64 absolute bottom-10px right-20px" />

</div>
</div>

<style>
  ul a { border-bottom: none !important; }
  ul { list-style-type: none !important; }
  ul li { margin-left: 0; padding-left: 0; }
</style>`,frontmatter:{},note:`ご質問があったら、私のツイッター等でご遠慮なく聞いてください。

下の右のQRコードを読み取って、このスライドをもう一度読めます。ドキュメントとジェムのリンクがいっぱいありますので、役に立つと思います。後でぜひ参照してみてください。

さいごに、我々のブログをお勧めしたいと思います。バックエンドやフロントエンドやデザインなどのいろいろな記事があるので、Ruby on RailsとPostgreSQLに興味がある方がたくさんの役に立てる記事があって、ぜひ読んでください。それに20ヶ条ぐらいの記事が日本語に翻訳されています、翻訳してくださった@hachi8833さんに感謝いたします。

今日はどうもありがとうございます。`,index:56,start:2091,end:2154,noteHTML:`<p>ご質問があったら、私のツイッター等でご遠慮なく聞いてください。</p>
<p>下の右のQRコードを読み取って、このスライドをもう一度読めます。ドキュメントとジェムのリンクがいっぱいありますので、役に立つと思います。後でぜひ参照してみてください。</p>
<p>さいごに、我々のブログをお勧めしたいと思います。バックエンドやフロントエンドやデザインなどのいろいろな記事があるので、Ruby on RailsとPostgreSQLに興味がある方がたくさんの役に立てる記事があって、ぜひ読んでください。それに20ヶ条ぐらいの記事が日本語に翻訳されています、翻訳してくださった@hachi8833さんに感謝いたします。</p>
<p>今日はどうもありがとうございます。</p>
`,filepath:"/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}}],Ke=MS,go=[{name:"play",path:"/",component:t4,children:[...Ke]},{name:"print",path:"/print",component:S2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(s){if(!mo.remote||mo.remote===s.query.password)return!0;if(mo.remote&&s.query.password===void 0){const n=prompt("Enter password");if(mo.remote===n)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};go.push({path:"/presenter/print",component:()=>Ns(()=>import("./PresenterPrint-b0833d03.js"),["assets/PresenterPrint-b0833d03.js","assets/NoteDisplay-5a3fa06e.js"])}),go.push({name:"notes",path:"/notes",component:()=>Ns(()=>import("./NotesView-0f33aaf0.js"),["assets/NotesView-0f33aaf0.js","assets/NoteDisplay-5a3fa06e.js"]),beforeEnter:t}),go.push({name:"presenter",path:"/presenter/:no",component:()=>Ns(()=>import("./Presenter-b103b0e0.js"),["assets/Presenter-b103b0e0.js","assets/NoteDisplay-5a3fa06e.js","assets/DrawingControls-3684d4f3.js","assets/Presenter-aa6741a8.css"]),beforeEnter:t}),go.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const Dt=zv({history:j_("/kaigionrails-postgresql-as-seen-by-rubyists"),routes:go});function US(t,s,{mode:n="replace"}={}){return R({get(){const o=Dt.currentRoute.value.query[t];return o==null?s??null:Array.isArray(o)?o.filter(Boolean):o},set(o){rt(()=>{Dt[O(n)]({query:{...Dt.currentRoute.value.query,[t]:o}})})}})}const vf=H(0);rt(()=>{Dt.afterEach(async()=>{await rt(),vf.value+=1})});const bf=H(0),It=R(()=>Dt.currentRoute.value),Vn=R(()=>It.value.query.print!==void 0),qS=R(()=>It.value.query.print==="clicks"),fs=R(()=>It.value.query.embedded!==void 0),bt=R(()=>It.value.path.startsWith("/presenter")),jS=R(()=>It.value.path.startsWith("/notes")),wo=R(()=>Vn.value&&!qS.value),Wa=R(()=>It.value.query.password),zS=R(()=>!bt.value&&(!xe.remote||Wa.value===xe.remote)),lu=US("clicks","0"),VS=R(()=>Ke.length),HS=R(()=>It.value.path),We=R(()=>parseInt(HS.value.split(/\//g).slice(-1)[0])||1);R(()=>Dr(We.value));const yt=R(()=>Ke.find(t=>t.path===`${We.value}`));R(()=>{var t,s,n;return(n=(s=(t=yt.value)==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:n.id});R(()=>{var t,s;return((s=(t=yt.value)==null?void 0:t.meta)==null?void 0:s.layout)||(We.value===1?"cover":"default")});const Jr=R(()=>Ke.find(t=>t.path===`${Math.min(Ke.length,We.value+1)}`)),QS=R(()=>Ke.find(t=>t.path===`${Math.max(1,We.value-1)}`)),WS=R(()=>{var t,s;return vf.value,((s=(t=yt.value)==null?void 0:t.meta)==null?void 0:s.__clicksElements)||[]}),Nt=R({get(){if(wo.value)return 99999;let t=+(lu.value||0);return isNaN(t)&&(t=0),t},set(t){lu.value=t.toString()}}),er=R(()=>{var t,s;return+(((s=(t=yt.value)==null?void 0:t.meta)==null?void 0:s.clicks)??WS.value.length)}),JS=R(()=>We.value<Ke.length-1||Nt.value<er.value),GS=R(()=>We.value>1||Nt.value>0),KS=R(()=>Ke.filter(t=>{var s,n;return(n=(s=t.meta)==null?void 0:s.slide)==null?void 0:n.title}).reduce((t,s)=>(Gi(t,s),t),[])),YS=R(()=>Ki(KS.value,yt.value));R(()=>Yi(YS.value));const ZS=R(()=>nx(bf.value,yt.value,QS.value));ve(yt,(t,s)=>{bf.value=Number(t==null?void 0:t.path)-Number(s==null?void 0:s.path)});function Ms(){er.value<=Nt.value?zo():Nt.value+=1}async function Us(){Nt.value<=0?await Vo():Nt.value-=1}function Dr(t){return bt.value?`/presenter/${t}`:`/${t}`}function zo(){const t=Math.min(Ke.length,We.value+1);return Hn(t)}async function Vo(t=!0){const s=Math.max(1,We.value-1);await Hn(s),t&&er.value&&Dt.replace({query:{...It.value.query,clicks:er.value}})}function Hn(t,s){return Dt.push({path:Dr(t),query:{...It.value.query,clicks:s}})}function XS(t){const s=H(0),{direction:n,distanceX:o,distanceY:l}=p_(t,{onSwipeStart(r){r.pointerType==="touch"&&(Uo.value||(s.value=Sa()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!s.value||Uo.value)return;const a=Math.abs(o.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?n.value==="left"?Ms():Us():(i/window.innerHeight>.4||i>200)&&(n.value==="down"?Vo():zo())}})}async function Ja(){const{saveAs:t}=await Ns(()=>import("./FileSaver.min-23a5d44b.js").then(s=>s.F),[]);t(typeof xe.download=="string"?xe.download:xe.exportFilename?`${xe.exportFilename}.pdf`:"/kaigionrails-postgresql-as-seen-by-rubyistsslidev-exported.pdf",`${xe.title}.pdf`)}async function ex(t){var s,n;if(t==null){const o=(n=(s=yt.value)==null?void 0:s.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Gi(t,s,n=1){var l,r,a,i,c;const o=(r=(l=s.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>n&&t.length>0?Gi(t[t.length-1].children,s,n+1):t.push({children:[],level:n,path:s.path,hideInToc:!!((a=s.meta)!=null&&a.hideInToc),title:(c=(i=s.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Ki(t,s,n=!1,o){return t.map(l=>{const r={...l,active:l.path===(s==null?void 0:s.path),hasActiveParent:n};return r.children.length>0&&(r.children=Ki(r.children,s,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function Yi(t,s=1){return t.filter(n=>!n.hideInToc).map(n=>({...n,children:Yi(n.children,s+1)}))}const tx={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function sx(t,s=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let n=t.name.includes("|")?t.name:tx[t.name]||t.name;if(n.includes("|")){const[o,l]=n.split("|").map(r=>r.trim());n=s?l:o}if(n)return{...t,name:n}}function nx(t,s,n){var l,r;let o=t>0?(l=n==null?void 0:n.meta)==null?void 0:l.transition:(r=s==null?void 0:s.meta)==null?void 0:r.transition;return o||(o=xe.transition),sx(o,t<0)}function ox(){const t=xe.titleTemplate.replace("%s",xe.title||"Slidev");ry({title:t,htmlAttrs:xe.htmlAttrs}),q0(`${t} - shared`),H0(`${t} - drawings`);const s=`${location.origin}_${O0()}`;function n(){jS.value||!bt.value&&!P0.includes(location.host.split(":")[0])||(bt.value?(no("page",+We.value),no("clicks",Nt.value)):(no("viewerPage",+We.value),no("viewerClicks",Nt.value)),no("lastUpdate",{id:s,type:bt.value?"presenter":"viewer",time:new Date().getTime()}))}Dt.afterEach(n),ve(Nt,n),j0(o=>{var r;Dt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+We.value||+Nt.value!=+o.clicks)&&Dt.replace({path:Dr(o.page),query:{...Dt.currentRoute.value.query,clicks:o.clicks||0}})})}const lx=Ce({__name:"App",setup(t){return I(j),ox(),(s,n)=>{const o=qn("RouterView"),l=qn("StarportCarrier");return w(),J(Le,null,[P(o),P(l)],64)}}}),rx=Q(lx,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/App.vue"]]);/*!
 * qrcode.vue v3.4.0
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var tr=function(){return tr=Object.assign||function(s){for(var n,o=1,l=arguments.length;o<l;o++){n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},tr.apply(this,arguments)},Dn;(function(t){var s=function(){function a(i,c,u,d){if(this.version=i,this.errorCorrectionLevel=c,this.modules=[],this.isFunction=[],i<a.MIN_VERSION||i>a.MAX_VERSION)throw new RangeError("Version value out of range");if(d<-1||d>7)throw new RangeError("Mask value out of range");this.size=i*4+17;for(var y=[],f=0;f<this.size;f++)y.push(!1);for(var f=0;f<this.size;f++)this.modules.push(y.slice()),this.isFunction.push(y.slice());this.drawFunctionPatterns();var h=this.addEccAndInterleave(u);if(this.drawCodewords(h),d==-1)for(var m=1e9,f=0;f<8;f++){this.applyMask(f),this.drawFormatBits(f);var _=this.getPenaltyScore();_<m&&(d=f,m=_),this.applyMask(f)}l(0<=d&&d<=7),this.mask=d,this.applyMask(d),this.drawFormatBits(d),this.isFunction=[]}return a.encodeText=function(i,c){var u=t.QrSegment.makeSegments(i);return a.encodeSegments(u,c)},a.encodeBinary=function(i,c){var u=t.QrSegment.makeBytes(i);return a.encodeSegments([u],c)},a.encodeSegments=function(i,c,u,d,y,f){if(u===void 0&&(u=1),d===void 0&&(d=40),y===void 0&&(y=-1),f===void 0&&(f=!0),!(a.MIN_VERSION<=u&&u<=d&&d<=a.MAX_VERSION)||y<-1||y>7)throw new RangeError("Invalid value");var h,m;for(h=u;;h++){var _=a.getNumDataCodewords(h,c)*8,D=r.getTotalBits(i,h);if(D<=_){m=D;break}if(h>=d)throw new RangeError("Data too long")}for(var b=0,B=[a.Ecc.MEDIUM,a.Ecc.QUARTILE,a.Ecc.HIGH];b<B.length;b++){var v=B[b];f&&m<=a.getNumDataCodewords(h,v)*8&&(c=v)}for(var E=[],k=0,x=i;k<x.length;k++){var L=x[k];n(L.mode.modeBits,4,E),n(L.numChars,L.mode.numCharCountBits(h),E);for(var T=0,M=L.getData();T<M.length;T++){var se=M[T];E.push(se)}}l(E.length==m);var ae=a.getNumDataCodewords(h,c)*8;l(E.length<=ae),n(0,Math.min(4,ae-E.length),E),n(0,(8-E.length%8)%8,E),l(E.length%8==0);for(var K=236;E.length<ae;K^=253)n(K,8,E);for(var de=[];de.length*8<E.length;)de.push(0);return E.forEach(function(ge,_e){return de[_e>>>3]|=ge<<7-(_e&7)}),new a(h,c,de,y)},a.prototype.getModule=function(i,c){return 0<=i&&i<this.size&&0<=c&&c<this.size&&this.modules[c][i]},a.prototype.getModules=function(){return this.modules},a.prototype.drawFunctionPatterns=function(){for(var i=0;i<this.size;i++)this.setFunctionModule(6,i,i%2==0),this.setFunctionModule(i,6,i%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var c=this.getAlignmentPatternPositions(),u=c.length,i=0;i<u;i++)for(var d=0;d<u;d++)i==0&&d==0||i==0&&d==u-1||i==u-1&&d==0||this.drawAlignmentPattern(c[i],c[d]);this.drawFormatBits(0),this.drawVersion()},a.prototype.drawFormatBits=function(i){for(var c=this.errorCorrectionLevel.formatBits<<3|i,u=c,d=0;d<10;d++)u=u<<1^(u>>>9)*1335;var y=(c<<10|u)^21522;l(y>>>15==0);for(var d=0;d<=5;d++)this.setFunctionModule(8,d,o(y,d));this.setFunctionModule(8,7,o(y,6)),this.setFunctionModule(8,8,o(y,7)),this.setFunctionModule(7,8,o(y,8));for(var d=9;d<15;d++)this.setFunctionModule(14-d,8,o(y,d));for(var d=0;d<8;d++)this.setFunctionModule(this.size-1-d,8,o(y,d));for(var d=8;d<15;d++)this.setFunctionModule(8,this.size-15+d,o(y,d));this.setFunctionModule(8,this.size-8,!0)},a.prototype.drawVersion=function(){if(!(this.version<7)){for(var i=this.version,c=0;c<12;c++)i=i<<1^(i>>>11)*7973;var u=this.version<<12|i;l(u>>>18==0);for(var c=0;c<18;c++){var d=o(u,c),y=this.size-11+c%3,f=Math.floor(c/3);this.setFunctionModule(y,f,d),this.setFunctionModule(f,y,d)}}},a.prototype.drawFinderPattern=function(i,c){for(var u=-4;u<=4;u++)for(var d=-4;d<=4;d++){var y=Math.max(Math.abs(d),Math.abs(u)),f=i+d,h=c+u;0<=f&&f<this.size&&0<=h&&h<this.size&&this.setFunctionModule(f,h,y!=2&&y!=4)}},a.prototype.drawAlignmentPattern=function(i,c){for(var u=-2;u<=2;u++)for(var d=-2;d<=2;d++)this.setFunctionModule(i+d,c+u,Math.max(Math.abs(d),Math.abs(u))!=1)},a.prototype.setFunctionModule=function(i,c,u){this.modules[c][i]=u,this.isFunction[c][i]=!0},a.prototype.addEccAndInterleave=function(i){var c=this.version,u=this.errorCorrectionLevel;if(i.length!=a.getNumDataCodewords(c,u))throw new RangeError("Invalid argument");for(var d=a.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c],y=a.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c],f=Math.floor(a.getNumRawDataModules(c)/8),h=d-f%d,m=Math.floor(f/d),_=[],D=a.reedSolomonComputeDivisor(y),b=0,B=0;b<d;b++){var v=i.slice(B,B+m-y+(b<h?0:1));B+=v.length;var E=a.reedSolomonComputeRemainder(v,D);b<h&&v.push(0),_.push(v.concat(E))}for(var k=[],x=function(L){_.forEach(function(T,M){(L!=m-y||M>=h)&&k.push(T[L])})},b=0;b<_[0].length;b++)x(b);return l(k.length==f),k},a.prototype.drawCodewords=function(i){if(i.length!=Math.floor(a.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var c=0,u=this.size-1;u>=1;u-=2){u==6&&(u=5);for(var d=0;d<this.size;d++)for(var y=0;y<2;y++){var f=u-y,h=(u+1&2)==0,m=h?this.size-1-d:d;!this.isFunction[m][f]&&c<i.length*8&&(this.modules[m][f]=o(i[c>>>3],7-(c&7)),c++)}}l(c==i.length*8)},a.prototype.applyMask=function(i){if(i<0||i>7)throw new RangeError("Mask value out of range");for(var c=0;c<this.size;c++)for(var u=0;u<this.size;u++){var d=void 0;switch(i){case 0:d=(u+c)%2==0;break;case 1:d=c%2==0;break;case 2:d=u%3==0;break;case 3:d=(u+c)%3==0;break;case 4:d=(Math.floor(u/3)+Math.floor(c/2))%2==0;break;case 5:d=u*c%2+u*c%3==0;break;case 6:d=(u*c%2+u*c%3)%2==0;break;case 7:d=((u+c)%2+u*c%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[c][u]&&d&&(this.modules[c][u]=!this.modules[c][u])}},a.prototype.getPenaltyScore=function(){for(var i=0,c=0;c<this.size;c++){for(var u=!1,d=0,y=[0,0,0,0,0,0,0],f=0;f<this.size;f++)this.modules[c][f]==u?(d++,d==5?i+=a.PENALTY_N1:d>5&&i++):(this.finderPenaltyAddHistory(d,y),u||(i+=this.finderPenaltyCountPatterns(y)*a.PENALTY_N3),u=this.modules[c][f],d=1);i+=this.finderPenaltyTerminateAndCount(u,d,y)*a.PENALTY_N3}for(var f=0;f<this.size;f++){for(var u=!1,h=0,y=[0,0,0,0,0,0,0],c=0;c<this.size;c++)this.modules[c][f]==u?(h++,h==5?i+=a.PENALTY_N1:h>5&&i++):(this.finderPenaltyAddHistory(h,y),u||(i+=this.finderPenaltyCountPatterns(y)*a.PENALTY_N3),u=this.modules[c][f],h=1);i+=this.finderPenaltyTerminateAndCount(u,h,y)*a.PENALTY_N3}for(var c=0;c<this.size-1;c++)for(var f=0;f<this.size-1;f++){var m=this.modules[c][f];m==this.modules[c][f+1]&&m==this.modules[c+1][f]&&m==this.modules[c+1][f+1]&&(i+=a.PENALTY_N2)}for(var _=0,D=0,b=this.modules;D<b.length;D++){var B=b[D];_=B.reduce(function(k,x){return k+(x?1:0)},_)}var v=this.size*this.size,E=Math.ceil(Math.abs(_*20-v*10)/v)-1;return l(0<=E&&E<=9),i+=E*a.PENALTY_N4,l(0<=i&&i<=2568888),i},a.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var i=Math.floor(this.version/7)+2,c=this.version==32?26:Math.ceil((this.version*4+4)/(i*2-2))*2,u=[6],d=this.size-7;u.length<i;d-=c)u.splice(1,0,d);return u},a.getNumRawDataModules=function(i){if(i<a.MIN_VERSION||i>a.MAX_VERSION)throw new RangeError("Version number out of range");var c=(16*i+128)*i+64;if(i>=2){var u=Math.floor(i/7)+2;c-=(25*u-10)*u-55,i>=7&&(c-=36)}return l(208<=c&&c<=29648),c},a.getNumDataCodewords=function(i,c){return Math.floor(a.getNumRawDataModules(i)/8)-a.ECC_CODEWORDS_PER_BLOCK[c.ordinal][i]*a.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][i]},a.reedSolomonComputeDivisor=function(i){if(i<1||i>255)throw new RangeError("Degree out of range");for(var c=[],u=0;u<i-1;u++)c.push(0);c.push(1);for(var d=1,u=0;u<i;u++){for(var y=0;y<c.length;y++)c[y]=a.reedSolomonMultiply(c[y],d),y+1<c.length&&(c[y]^=c[y+1]);d=a.reedSolomonMultiply(d,2)}return c},a.reedSolomonComputeRemainder=function(i,c){for(var u=c.map(function(m){return 0}),d=function(m){var _=m^u.shift();u.push(0),c.forEach(function(D,b){return u[b]^=a.reedSolomonMultiply(D,_)})},y=0,f=i;y<f.length;y++){var h=f[y];d(h)}return u},a.reedSolomonMultiply=function(i,c){if(i>>>8||c>>>8)throw new RangeError("Byte out of range");for(var u=0,d=7;d>=0;d--)u=u<<1^(u>>>7)*285,u^=(c>>>d&1)*i;return l(u>>>8==0),u},a.prototype.finderPenaltyCountPatterns=function(i){var c=i[1];l(c<=this.size*3);var u=c>0&&i[2]==c&&i[3]==c*3&&i[4]==c&&i[5]==c;return(u&&i[0]>=c*4&&i[6]>=c?1:0)+(u&&i[6]>=c*4&&i[0]>=c?1:0)},a.prototype.finderPenaltyTerminateAndCount=function(i,c,u){return i&&(this.finderPenaltyAddHistory(c,u),c=0),c+=this.size,this.finderPenaltyAddHistory(c,u),this.finderPenaltyCountPatterns(u)},a.prototype.finderPenaltyAddHistory=function(i,c){c[0]==0&&(i+=this.size),c.pop(),c.unshift(i)},a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a}();t.QrCode=s;function n(a,i,c){if(i<0||i>31||a>>>i)throw new RangeError("Value out of range");for(var u=i-1;u>=0;u--)c.push(a>>>u&1)}function o(a,i){return(a>>>i&1)!=0}function l(a){if(!a)throw new Error("Assertion error")}var r=function(){function a(i,c,u){if(this.mode=i,this.numChars=c,this.bitData=u,c<0)throw new RangeError("Invalid argument");this.bitData=u.slice()}return a.makeBytes=function(i){for(var c=[],u=0,d=i;u<d.length;u++){var y=d[u];n(y,8,c)}return new a(a.Mode.BYTE,i.length,c)},a.makeNumeric=function(i){if(!a.isNumeric(i))throw new RangeError("String contains non-numeric characters");for(var c=[],u=0;u<i.length;){var d=Math.min(i.length-u,3);n(parseInt(i.substring(u,u+d),10),d*3+1,c),u+=d}return new a(a.Mode.NUMERIC,i.length,c)},a.makeAlphanumeric=function(i){if(!a.isAlphanumeric(i))throw new RangeError("String contains unencodable characters in alphanumeric mode");var c=[],u;for(u=0;u+2<=i.length;u+=2){var d=a.ALPHANUMERIC_CHARSET.indexOf(i.charAt(u))*45;d+=a.ALPHANUMERIC_CHARSET.indexOf(i.charAt(u+1)),n(d,11,c)}return u<i.length&&n(a.ALPHANUMERIC_CHARSET.indexOf(i.charAt(u)),6,c),new a(a.Mode.ALPHANUMERIC,i.length,c)},a.makeSegments=function(i){return i==""?[]:a.isNumeric(i)?[a.makeNumeric(i)]:a.isAlphanumeric(i)?[a.makeAlphanumeric(i)]:[a.makeBytes(a.toUtf8ByteArray(i))]},a.makeEci=function(i){var c=[];if(i<0)throw new RangeError("ECI assignment value out of range");if(i<128)n(i,8,c);else if(i<16384)n(2,2,c),n(i,14,c);else if(i<1e6)n(6,3,c),n(i,21,c);else throw new RangeError("ECI assignment value out of range");return new a(a.Mode.ECI,0,c)},a.isNumeric=function(i){return a.NUMERIC_REGEX.test(i)},a.isAlphanumeric=function(i){return a.ALPHANUMERIC_REGEX.test(i)},a.prototype.getData=function(){return this.bitData.slice()},a.getTotalBits=function(i,c){for(var u=0,d=0,y=i;d<y.length;d++){var f=y[d],h=f.mode.numCharCountBits(c);if(f.numChars>=1<<h)return 1/0;u+=4+h+f.bitData.length}return u},a.toUtf8ByteArray=function(i){i=encodeURI(i);for(var c=[],u=0;u<i.length;u++)i.charAt(u)!="%"?c.push(i.charCodeAt(u)):(c.push(parseInt(i.substring(u+1,u+3),16)),u+=2);return c},a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",a}();t.QrSegment=r})(Dn||(Dn={}));(function(t){(function(s){var n=function(){function o(l,r){this.ordinal=l,this.formatBits=r}return o.LOW=new o(0,1),o.MEDIUM=new o(1,0),o.QUARTILE=new o(2,3),o.HIGH=new o(3,2),o}();s.Ecc=n})(t.QrCode||(t.QrCode={}))})(Dn||(Dn={}));(function(t){(function(s){var n=function(){function o(l,r){this.modeBits=l,this.numBitsCharCount=r}return o.prototype.numCharCountBits=function(l){return this.numBitsCharCount[Math.floor((l+7)/17)]},o.NUMERIC=new o(1,[10,12,14]),o.ALPHANUMERIC=new o(2,[9,11,13]),o.BYTE=new o(4,[8,16,16]),o.KANJI=new o(8,[8,10,12]),o.ECI=new o(7,[0,0,0]),o}();s.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Dn||(Dn={}));var On=Dn,Af="H",Zi={L:On.QrCode.Ecc.LOW,M:On.QrCode.Ecc.MEDIUM,Q:On.QrCode.Ecc.QUARTILE,H:On.QrCode.Ecc.HIGH},ax=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function Df(t){return t in Zi}function Cf(t,s){s===void 0&&(s=0);var n=[];return t.forEach(function(o,l){var r=null;o.forEach(function(a,i){if(!a&&r!==null){n.push("M".concat(r+s," ").concat(l+s,"h").concat(i-r,"v1H").concat(r+s,"z")),r=null;return}if(i===o.length-1){if(!a)return;r===null?n.push("M".concat(i+s,",").concat(l+s," h1v1H").concat(i+s,"z")):n.push("M".concat(r+s,",").concat(l+s," h").concat(i+1-r,"v1H").concat(r+s,"z"));return}a&&r===null&&(r=i)})}),n.join("")}var Xi={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Af,validator:function(t){return Df(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ix=tr(tr({},Xi),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),cx=Ce({name:"QRCodeSvg",props:Xi,setup:function(t){var s=H(0),n=H(""),o=function(){var l=t.value,r=t.level,a=t.margin,i=On.QrCode.encodeText(l,Zi[r]).getModules();s.value=i.length+a*2,n.value=Cf(i,a)};return o(),Qn(o),function(){return tt("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(s.value," ").concat(s.value)},[tt("path",{fill:t.background,d:"M0,0 h".concat(s.value,"v").concat(s.value,"H0z")}),tt("path",{fill:t.foreground,d:n.value})])}}}),px=Ce({name:"QRCodeCanvas",props:Xi,setup:function(t){var s=H(null),n=function(){var o=t.value,l=t.level,r=t.size,a=t.margin,i=t.background,c=t.foreground,u=s.value;if(u){var d=u.getContext("2d");if(d){var y=On.QrCode.encodeText(o,Zi[l]).getModules(),f=y.length+a*2,h=window.devicePixelRatio||1,m=r/f*h;u.height=u.width=r*h,d.scale(m,m),d.fillStyle=i,d.fillRect(0,0,f,f),d.fillStyle=c,ax?d.fill(new Path2D(Cf(y,a))):y.forEach(function(_,D){_.forEach(function(b,B){b&&d.fillRect(B+a,D+a,1,1)})})}}};return Wt(n),Qn(n),function(){return tt("canvas",{ref:s,style:{width:"".concat(t.size,"px"),height:"".concat(t.size,"px")}})}}}),ux=Ce({name:"Qrcode",render:function(){var t=this.$props,s=t.renderAs,n=t.value,o=t.size,l=t.margin,r=t.level,a=t.background,i=t.foreground,c=o>>>0,u=l>>>0,d=Df(r)?r:Af;return tt(s==="svg"?cx:px,{value:n,size:c,margin:u,level:d,background:a,foreground:i})},props:ix});const dx=({app:t,router:s})=>{t.component("qr-code-vue",ux)};function Gr(t){return t!==null&&typeof t=="object"}function Ga(t,s,n=".",o){if(!Gr(s))return Ga(t,{},n,o);const l=Object.assign({},s);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(o&&o(l,r,a,n)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=[...a,...l[r]]:Gr(a)&&Gr(l[r])?l[r]=Ga(a,l[r],(n?`${n}.`:"")+r.toString(),o):l[r]=a))}return l}function yx(t){return(...s)=>s.reduce((n,o)=>Ga(n,o,"",t),{})}const fx=yx(),Bf=1/60*1e3,hx=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ef=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(hx()),Bf);function mx(t){let s=[],n=[],o=0,l=!1,r=!1;const a=new WeakSet,i={schedule:(c,u=!1,d=!1)=>{const y=d&&l,f=y?s:n;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),y&&l&&(o=s.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(l){r=!0;return}if(l=!0,[s,n]=[n,s],n.length=0,o=s.length,o)for(let u=0;u<o;u++){const d=s[u];d(c),a.has(d)&&(i.schedule(d),t())}l=!1,r&&(r=!1,i.process(c))}};return i}const gx=40;let Ka=!0,Ho=!1,Ya=!1;const Un={delta:0,timestamp:0},sl=["read","update","preRender","render","postRender"],Cr=sl.reduce((t,s)=>(t[s]=mx(()=>Ho=!0),t),{}),Za=sl.reduce((t,s)=>{const n=Cr[s];return t[s]=(o,l=!1,r=!1)=>(Ho||bx(),n.schedule(o,l,r)),t},{}),_x=sl.reduce((t,s)=>(t[s]=Cr[s].cancel,t),{});sl.reduce((t,s)=>(t[s]=()=>Cr[s].process(Un),t),{});const vx=t=>Cr[t].process(Un),wf=t=>{Ho=!1,Un.delta=Ka?Bf:Math.max(Math.min(t-Un.timestamp,gx),1),Un.timestamp=t,Ya=!0,sl.forEach(vx),Ya=!1,Ho&&(Ka=!1,Ef(wf))},bx=()=>{Ho=!0,Ka=!0,Ya||Ef(wf)},kf=()=>Un;function Sf(t,s){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)s.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(n[o[l]]=t[o[l]]);return n}var ec=function(){},Qo=function(){};ec=function(t,s){!t&&typeof console<"u"&&console.warn(s)},Qo=function(t,s){if(!t)throw new Error(s)};const Xa=(t,s,n)=>Math.min(Math.max(n,t),s),Kr=.001,Ax=.01,ru=10,Dx=.05,Cx=1;function Bx({duration:t=800,bounce:s=.25,velocity:n=0,mass:o=1}){let l,r;ec(t<=ru*1e3,"Spring duration must be 10 seconds or less");let a=1-s;a=Xa(Dx,Cx,a),t=Xa(Ax,ru,t/1e3),a<1?(l=u=>{const d=u*a,y=d*t,f=d-n,h=ei(u,a),m=Math.exp(-y);return Kr-f/h*m},r=u=>{const y=u*a*t,f=y*n+n,h=Math.pow(a,2)*Math.pow(u,2)*t,m=Math.exp(-y),_=ei(Math.pow(u,2),a);return(-l(u)+Kr>0?-1:1)*((f-h)*m)/_}):(l=u=>{const d=Math.exp(-u*t),y=(u-n)*t+1;return-Kr+d*y},r=u=>{const d=Math.exp(-u*t),y=(n-u)*(t*t);return d*y});const i=5/t,c=wx(l,r,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:t}}}const Ex=12;function wx(t,s,n){let o=n;for(let l=1;l<Ex;l++)o=o-t(o)/s(o);return o}function ei(t,s){return t*Math.sqrt(1-s*s)}const kx=["duration","bounce"],Sx=["stiffness","damping","mass"];function au(t,s){return s.some(n=>t[n]!==void 0)}function xx(t){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!au(t,Sx)&&au(t,kx)){const n=Bx(t);s=Object.assign(Object.assign(Object.assign({},s),n),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function tc(t){var{from:s=0,to:n=1,restSpeed:o=2,restDelta:l}=t,r=Sf(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:s};let{stiffness:i,damping:c,mass:u,velocity:d,duration:y,isResolvedFromDuration:f}=xx(r),h=iu,m=iu;function _(){const D=d?-(d/1e3):0,b=n-s,B=c/(2*Math.sqrt(i*u)),v=Math.sqrt(i/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-s)/100,.4)),B<1){const E=ei(v,B);h=k=>{const x=Math.exp(-B*v*k);return n-x*((D+B*v*b)/E*Math.sin(E*k)+b*Math.cos(E*k))},m=k=>{const x=Math.exp(-B*v*k);return B*v*x*(Math.sin(E*k)*(D+B*v*b)/E+b*Math.cos(E*k))-x*(Math.cos(E*k)*(D+B*v*b)-E*b*Math.sin(E*k))}}else if(B===1)h=E=>n-Math.exp(-v*E)*(b+(D+v*b)*E);else{const E=v*Math.sqrt(B*B-1);h=k=>{const x=Math.exp(-B*v*k),L=Math.min(E*k,300);return n-x*((D+B*v*b)*Math.sinh(L)+E*b*Math.cosh(L))/E}}}return _(),{next:D=>{const b=h(D);if(f)a.done=D>=y;else{const B=m(D)*1e3,v=Math.abs(B)<=o,E=Math.abs(n-b)<=l;a.done=v&&E}return a.value=a.done?n:b,a},flipTarget:()=>{d=-d,[s,n]=[n,s],_()}}}tc.needsInterpolation=(t,s)=>typeof t=="string"||typeof s=="string";const iu=t=>0,xf=(t,s,n)=>{const o=s-t;return o===0?1:(n-t)/o},sc=(t,s,n)=>-n*t+n*s+t,Tf=(t,s)=>n=>Math.max(Math.min(n,s),t),ko=t=>t%1?Number(t.toFixed(5)):t,Wo=/(-)?([\d]*\.?[\d])+/g,ti=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Tx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function nl(t){return typeof t=="string"}const ol={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},So=Object.assign(Object.assign({},ol),{transform:Tf(0,1)}),Dl=Object.assign(Object.assign({},ol),{default:1}),nc=t=>({test:s=>nl(s)&&s.endsWith(t)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${t}`}),Zs=nc("deg"),xo=nc("%"),be=nc("px"),cu=Object.assign(Object.assign({},xo),{parse:t=>xo.parse(t)/100,transform:t=>xo.transform(t*100)}),oc=(t,s)=>n=>!!(nl(n)&&Tx.test(n)&&n.startsWith(t)||s&&Object.prototype.hasOwnProperty.call(n,s)),Lf=(t,s,n)=>o=>{if(!nl(o))return o;const[l,r,a,i]=o.match(Wo);return{[t]:parseFloat(l),[s]:parseFloat(r),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},dn={test:oc("hsl","hue"),parse:Lf("hue","saturation","lightness"),transform:({hue:t,saturation:s,lightness:n,alpha:o=1})=>"hsla("+Math.round(t)+", "+xo.transform(ko(s))+", "+xo.transform(ko(n))+", "+ko(So.transform(o))+")"},Lx=Tf(0,255),Yr=Object.assign(Object.assign({},ol),{transform:t=>Math.round(Lx(t))}),Ls={test:oc("rgb","red"),parse:Lf("red","green","blue"),transform:({red:t,green:s,blue:n,alpha:o=1})=>"rgba("+Yr.transform(t)+", "+Yr.transform(s)+", "+Yr.transform(n)+", "+ko(So.transform(o))+")"};function Rx(t){let s="",n="",o="",l="";return t.length>5?(s=t.substr(1,2),n=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(s=t.substr(1,1),n=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),s+=s,n+=n,o+=o,l+=l),{red:parseInt(s,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const si={test:oc("#"),parse:Rx,transform:Ls.transform},vt={test:t=>Ls.test(t)||si.test(t)||dn.test(t),parse:t=>Ls.test(t)?Ls.parse(t):dn.test(t)?dn.parse(t):si.parse(t),transform:t=>nl(t)?t:t.hasOwnProperty("red")?Ls.transform(t):dn.transform(t)},Rf="${c}",$f="${n}";function $x(t){var s,n,o,l;return isNaN(t)&&nl(t)&&((n=(s=t.match(Wo))===null||s===void 0?void 0:s.length)!==null&&n!==void 0?n:0)+((l=(o=t.match(ti))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Pf(t){typeof t=="number"&&(t=`${t}`);const s=[];let n=0;const o=t.match(ti);o&&(n=o.length,t=t.replace(ti,Rf),s.push(...o.map(vt.parse)));const l=t.match(Wo);return l&&(t=t.replace(Wo,$f),s.push(...l.map(ol.parse))),{values:s,numColors:n,tokenised:t}}function Of(t){return Pf(t).values}function Nf(t){const{values:s,numColors:n,tokenised:o}=Pf(t),l=s.length;return r=>{let a=o;for(let i=0;i<l;i++)a=a.replace(i<n?Rf:$f,i<n?vt.transform(r[i]):ko(r[i]));return a}}const Px=t=>typeof t=="number"?0:t;function Ox(t){const s=Of(t);return Nf(t)(s.map(Px))}const ll={test:$x,parse:Of,createTransformer:Nf,getAnimatableNone:Ox},Nx=new Set(["brightness","contrast","saturate","opacity"]);function Fx(t){let[s,n]=t.slice(0,-1).split("(");if(s==="drop-shadow")return t;const[o]=n.match(Wo)||[];if(!o)return t;const l=n.replace(o,"");let r=Nx.has(s)?1:0;return o!==n&&(r*=100),s+"("+r+l+")"}const Ix=/([a-z-]*)\(.*?\)/g,ni=Object.assign(Object.assign({},ll),{getAnimatableNone:t=>{const s=t.match(Ix);return s?s.map(Fx).join(" "):t}});function Zr(t,s,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(s-t)*6*n:n<1/2?s:n<2/3?t+(s-t)*(2/3-n)*6:t}function pu({hue:t,saturation:s,lightness:n,alpha:o}){t/=360,s/=100,n/=100;let l=0,r=0,a=0;if(!s)l=r=a=n;else{const i=n<.5?n*(1+s):n+s-n*s,c=2*n-i;l=Zr(c,i,t+1/3),r=Zr(c,i,t),a=Zr(c,i,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const Mx=(t,s,n)=>{const o=t*t,l=s*s;return Math.sqrt(Math.max(0,n*(l-o)+o))},Ux=[si,Ls,dn],uu=t=>Ux.find(s=>s.test(t)),du=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,Ff=(t,s)=>{let n=uu(t),o=uu(s);Qo(!!n,du(t)),Qo(!!o,du(s));let l=n.parse(t),r=o.parse(s);n===dn&&(l=pu(l),n=Ls),o===dn&&(r=pu(r),o=Ls);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=Mx(l[c],r[c],i));return a.alpha=sc(l.alpha,r.alpha,i),n.transform(a)}},qx=t=>typeof t=="number",jx=(t,s)=>n=>s(t(n)),If=(...t)=>t.reduce(jx);function Mf(t,s){return qx(t)?n=>sc(t,s,n):vt.test(t)?Ff(t,s):qf(t,s)}const Uf=(t,s)=>{const n=[...t],o=n.length,l=t.map((r,a)=>Mf(r,s[a]));return r=>{for(let a=0;a<o;a++)n[a]=l[a](r);return n}},zx=(t,s)=>{const n=Object.assign(Object.assign({},t),s),o={};for(const l in n)t[l]!==void 0&&s[l]!==void 0&&(o[l]=Mf(t[l],s[l]));return l=>{for(const r in o)n[r]=o[r](l);return n}};function yu(t){const s=ll.parse(t),n=s.length;let o=0,l=0,r=0;for(let a=0;a<n;a++)o||typeof s[a]=="number"?o++:s[a].hue!==void 0?r++:l++;return{parsed:s,numNumbers:o,numRGB:l,numHSL:r}}const qf=(t,s)=>{const n=ll.createTransformer(s),o=yu(t),l=yu(s);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?If(Uf(o.parsed,l.parsed),n):(ec(!0,`Complex values '${t}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?s:t}`)},Vx=(t,s)=>n=>sc(t,s,n);function Hx(t){if(typeof t=="number")return Vx;if(typeof t=="string")return vt.test(t)?Ff:qf;if(Array.isArray(t))return Uf;if(typeof t=="object")return zx}function Qx(t,s,n){const o=[],l=n||Hx(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=l(t[a],t[a+1]);if(s){const c=Array.isArray(s)?s[a]:s;i=If(c,i)}o.push(i)}return o}function Wx([t,s],[n]){return o=>n(xf(t,s,o))}function Jx(t,s){const n=t.length,o=n-1;return l=>{let r=0,a=!1;if(l<=t[0]?a=!0:l>=t[o]&&(r=o-1,a=!0),!a){let c=1;for(;c<n&&!(t[c]>l||c===o);c++);r=c-1}const i=xf(t[r],t[r+1],l);return s[r](i)}}function jf(t,s,{clamp:n=!0,ease:o,mixer:l}={}){const r=t.length;Qo(r===s.length,"Both input and output ranges must be the same length"),Qo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[r-1]&&(t=[].concat(t),s=[].concat(s),t.reverse(),s.reverse());const a=Qx(s,o,l),i=r===2?Wx(t,a):Jx(t,a);return n?c=>i(Xa(t[0],t[r-1],c)):i}const Br=t=>s=>1-t(1-s),lc=t=>s=>s<=.5?t(2*s)/2:(2-t(2*(1-s)))/2,Gx=t=>s=>Math.pow(s,t),zf=t=>s=>s*s*((t+1)*s-t),Kx=t=>{const s=zf(t);return n=>(n*=2)<1?.5*s(n):.5*(2-Math.pow(2,-10*(n-1)))},Vf=1.525,Yx=4/11,Zx=8/11,Xx=9/10,Hf=t=>t,rc=Gx(2),eT=Br(rc),Qf=lc(rc),Wf=t=>1-Math.sin(Math.acos(t)),Jf=Br(Wf),tT=lc(Jf),ac=zf(Vf),sT=Br(ac),nT=lc(ac),oT=Kx(Vf),lT=4356/361,rT=35442/1805,aT=16061/1805,sr=t=>{if(t===1||t===0)return t;const s=t*t;return t<Yx?7.5625*s:t<Zx?9.075*s-9.9*t+3.4:t<Xx?lT*s-rT*t+aT:10.8*t*t-20.52*t+10.72},iT=Br(sr),cT=t=>t<.5?.5*(1-sr(1-t*2)):.5*sr(t*2-1)+.5;function pT(t,s){return t.map(()=>s||Qf).splice(0,t.length-1)}function uT(t){const s=t.length;return t.map((n,o)=>o!==0?o/(s-1):0)}function dT(t,s){return t.map(n=>n*s)}function Ll({from:t=0,to:s=1,ease:n,offset:o,duration:l=300}){const r={done:!1,value:t},a=Array.isArray(s)?s:[t,s],i=dT(o&&o.length===a.length?o:uT(a),l);function c(){return jf(i,a,{ease:Array.isArray(n)?n:pT(a,n)})}let u=c();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=c()}}}function yT({velocity:t=0,from:s=0,power:n=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:s};let i=n*t;const c=s+i,u=r===void 0?c:r(c);return u!==c&&(i=u-s),{next:d=>{const y=-i*Math.exp(-d/o);return a.done=!(y>l||y<-l),a.value=a.done?u:u+y,a},flipTarget:()=>{}}}const fu={keyframes:Ll,spring:tc,decay:yT};function fT(t){if(Array.isArray(t.to))return Ll;if(fu[t.type])return fu[t.type];const s=new Set(Object.keys(t));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?Ll:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?tc:Ll}function Gf(t,s,n=0){return t-s-n}function hT(t,s,n=0,o=!0){return o?Gf(s+-t,s,n):s-(t-s)+n}function mT(t,s,n,o){return o?t>=s+n:t<=-n}const gT=t=>{const s=({delta:n})=>t(n);return{start:()=>Za.update(s,!0),stop:()=>_x.update(s)}};function Kf(t){var s,n,{from:o,autoplay:l=!0,driver:r=gT,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:y,onComplete:f,onRepeat:h,onUpdate:m}=t,_=Sf(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:D}=_,b,B=0,v=_.duration,E,k=!1,x=!0,L;const T=fT(_);!((n=(s=T).needsInterpolation)===null||n===void 0)&&n.call(s,o,D)&&(L=jf([0,100],[o,D],{clamp:!1}),o=0,D=100);const M=T(Object.assign(Object.assign({},_),{from:o,to:D}));function se(){B++,c==="reverse"?(x=B%2===0,a=hT(a,v,u,x)):(a=Gf(a,v,u),c==="mirror"&&M.flipTarget()),k=!1,h&&h()}function ae(){b.stop(),f&&f()}function K(ge){if(x||(ge=-ge),a+=ge,!k){const _e=M.next(Math.max(0,a));E=_e.value,L&&(E=L(E)),k=x?_e.done:a<=0}m==null||m(E),k&&(B===0&&(v??(v=a)),B<i?mT(a,v,u,x)&&se():ae())}function de(){d==null||d(),b=r(K),b.start()}return l&&de(),{stop:()=>{y==null||y(),b.stop()}}}function Yf(t,s){return s?t*(1e3/s):0}function _T({from:t=0,velocity:s=0,min:n,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:y,onComplete:f,onStop:h}){let m;function _(v){return n!==void 0&&v<n||o!==void 0&&v>o}function D(v){return n===void 0?o:o===void 0||Math.abs(n-v)<Math.abs(o-v)?n:o}function b(v){m==null||m.stop(),m=Kf(Object.assign(Object.assign({},v),{driver:d,onUpdate:E=>{var k;y==null||y(E),(k=v.onUpdate)===null||k===void 0||k.call(v,E)},onComplete:f,onStop:h}))}function B(v){b(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},v))}if(_(t))B({from:t,velocity:s,to:D(t)});else{let v=l*s+t;typeof u<"u"&&(v=u(v));const E=D(v),k=E===n?-1:1;let x,L;const T=M=>{x=L,L=M,s=Yf(M-x,kf().delta),(k===1&&M>E||k===-1&&M<E)&&B({from:M,to:E,velocity:s})};b({type:"decay",from:t,velocity:s,timeConstant:r,power:l,restDelta:c,modifyTarget:u,onUpdate:_(v)?T:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Zf=(t,s)=>1-3*s+3*t,Xf=(t,s)=>3*s-6*t,eh=t=>3*t,nr=(t,s,n)=>((Zf(s,n)*t+Xf(s,n))*t+eh(s))*t,th=(t,s,n)=>3*Zf(s,n)*t*t+2*Xf(s,n)*t+eh(s),vT=1e-7,bT=10;function AT(t,s,n,o,l){let r,a,i=0;do a=s+(n-s)/2,r=nr(a,o,l)-t,r>0?n=a:s=a;while(Math.abs(r)>vT&&++i<bT);return a}const DT=8,CT=.001;function BT(t,s,n,o){for(let l=0;l<DT;++l){const r=th(s,n,o);if(r===0)return s;const a=nr(s,n,o)-t;s-=a/r}return s}const Rl=11,Cl=1/(Rl-1);function ET(t,s,n,o){if(t===s&&n===o)return Hf;const l=new Float32Array(Rl);for(let a=0;a<Rl;++a)l[a]=nr(a*Cl,t,n);function r(a){let i=0,c=1;const u=Rl-1;for(;c!==u&&l[c]<=a;++c)i+=Cl;--c;const d=(a-l[c])/(l[c+1]-l[c]),y=i+d*Cl,f=th(y,t,n);return f>=CT?BT(a,y,t,n):f===0?y:AT(a,i,i+Cl,t,n)}return a=>a===0||a===1?a:nr(r(a),s,o)}const Xr={};class wT{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,n,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(s,n,o)}clear(){this.subscriptions.clear()}}function hu(t){return!isNaN(parseFloat(t))}class kT{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new wT,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:l}=kf();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),Za.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Za.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=hu(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=hu(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Yf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(n=>{const{stop:o}=s(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function ST(t){return new kT(t)}const{isArray:xT}=Array;function TT(){const t=H({}),s=o=>{const l=r=>{t.value[r]&&(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};o?xT(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},n=(o,l,r)=>{if(t.value[o])return t.value[o];const a=ST(l);return a.onChange(i=>r[o]=i),t.value[o]=a,a};return yy(s),{motionValues:t,get:n,stop:s}}function LT(t){return Array.isArray(t)}function Xs(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function ea(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function RT(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function ta(){return{type:"keyframes",ease:"linear",duration:300}}function $T(t){return{type:"keyframes",duration:800,values:t}}const mu={default:RT,x:Xs,y:Xs,z:Xs,rotate:Xs,rotateX:Xs,rotateY:Xs,rotateZ:Xs,scaleX:ea,scaleY:ea,scale:ea,backgroundColor:ta,color:ta,opacity:ta};function sh(t,s){let n;return LT(s)?n=$T:n=mu[t]||mu.default,{to:s,...n(s)}}const gu={...ol,transform:Math.round},nh={color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:Zs,rotateX:Zs,rotateY:Zs,rotateZ:Zs,scale:Dl,scaleX:Dl,scaleY:Dl,scaleZ:Dl,skew:Zs,skewX:Zs,skewY:Zs,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:So,originX:cu,originY:cu,originZ:be,zIndex:gu,filter:ni,WebkitFilter:ni,fillOpacity:So,strokeOpacity:So,numOctaves:gu},ic=t=>nh[t];function oh(t,s){return s&&typeof t=="number"&&s.transform?s.transform(t):t}function PT(t,s){let n=ic(t);return n!==ni&&(n=ll),n.getAnimatableNone?n.getAnimatableNone(s):void 0}const OT={linear:Hf,easeIn:rc,easeInOut:Qf,easeOut:eT,circIn:Wf,circInOut:tT,circOut:Jf,backIn:ac,backInOut:nT,backOut:sT,anticipate:oT,bounceIn:iT,bounceInOut:cT,bounceOut:sr};function _u(t){if(Array.isArray(t)){const[s,n,o,l]=t;return ET(s,n,o,l)}else if(typeof t=="string")return OT[t];return t}function NT(t){return Array.isArray(t)&&typeof t[0]!="number"}function vu(t,s){return t==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&ll.test(s)&&!s.startsWith("url("))}function FT(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function IT({ease:t,times:s,delay:n,...o}){const l={...o};return s&&(l.offset=s),t&&(l.ease=NT(t)?t.map(_u):_u(t)),n&&(l.elapsed=-n),l}function MT(t,s,n){return Array.isArray(s.to)&&(t.duration||(t.duration=800)),FT(s),UT(t)||(t={...t,...sh(n,s.to)}),{...s,...IT(t)}}function UT({delay:t,repeat:s,repeatType:n,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function qT(t,s){return t[s]||t.default||t}function jT(t,s,n,o,l){const r=qT(o,t);let a=r.from===null||r.from===void 0?s.get():r.from;const i=vu(t,n);a==="none"&&i&&typeof n=="string"&&(a=PT(t,n));const c=vu(t,a);function u(y){const f={from:a,to:n,velocity:o.velocity?o.velocity:s.getVelocity(),onUpdate:h=>s.set(h)};return r.type==="inertia"||r.type==="decay"?_T({...f,...r}):Kf({...MT(r,f,t),onUpdate:h=>{f.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),y&&y()}})}function d(y){return s.set(n),o.onComplete&&o.onComplete(),l&&l(),y&&y(),{stop:()=>{}}}return!c||!i||r.type===!1?d:u}function zT(){const{motionValues:t,stop:s,get:n}=TT();return{motionValues:t,stop:s,push:(l,r,a,i={},c)=>{const u=a[l],d=n(l,u,a);if(i&&i.immediate){d.set(r);return}const y=jT(l,d,r,i,c);d.start(y)}}}function VT(t,s={},{motionValues:n,push:o,stop:l}=zT()){const r=O(s),a=H(!1);ve(n,y=>{a.value=Object.values(y).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=y=>{if(!r||!r[y])throw new Error(`The variant ${y} does not exist.`);return r[y]},c=y=>(typeof y=="string"&&(y=i(y)),Promise.all(Object.entries(y).map(([f,h])=>{if(f!=="transition")return new Promise(m=>o(f,h,t,y.transition||sh(f,y[f]),m))}).filter(Boolean)));return{isAnimating:a,apply:c,set:y=>{const f=ka(y)?y:i(y);Object.entries(f).forEach(([h,m])=>{h!=="transition"&&o(h,m,t,{immediate:!0})})},leave:async y=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){y();return}await c(f),y()},stop:l}}const cc=typeof window<"u",HT=()=>cc&&window.onpointerdown===null,QT=()=>cc&&window.ontouchstart===null,WT=()=>cc&&window.onmousedown===null;function JT({target:t,state:s,variants:n,apply:o}){const l=O(n),r=H(!1),a=H(!1),i=H(!1),c=R(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=R(()=>{const d={};Object.assign(d,s.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),i.value&&l.focused&&Object.assign(d,l.focused);for(const y in d)c.value.includes(y)||delete d[y];return d});l.hovered&&(De(t,"mouseenter",()=>r.value=!0),De(t,"mouseleave",()=>{r.value=!1,a.value=!1}),De(t,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(WT()&&(De(t,"mousedown",()=>a.value=!0),De(t,"mouseup",()=>a.value=!1)),HT()&&(De(t,"pointerdown",()=>a.value=!0),De(t,"pointerup",()=>a.value=!1)),QT()&&(De(t,"touchstart",()=>a.value=!0),De(t,"touchend",()=>a.value=!1))),l.focused&&(De(t,"focus",()=>i.value=!0),De(t,"blur",()=>i.value=!1)),ve(u,o)}function GT({set:t,target:s,variants:n,variant:o}){const l=O(n);ve(()=>s,()=>{l&&(l.initial&&t("initial"),l.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function KT({state:t,apply:s}){ve(t,n=>{n&&s(n)},{immediate:!0})}function YT({target:t,variants:s,variant:n}){const o=O(s);o&&(o.visible||o.visibleOnce)&&l_(t,([{isIntersecting:l}])=>{o.visible?l?n.value="visible":n.value="initial":o.visibleOnce&&(l&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function ZT(t,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&GT(t),s.syncVariants&&KT(t),s.visibilityHooks&&YT(t),s.eventListeners&&JT(t)}function lh(t={}){const s=Ve({...t}),n=H({});return ve(s,()=>{const o={};for(const[l,r]of Object.entries(s)){const a=ic(l),i=oh(r,a);o[l]=i}n.value=o},{immediate:!0,deep:!0}),{state:s,style:n}}function pc(t,s){ve(()=>at(t),n=>{n&&s(n)},{immediate:!0})}const XT={x:"translateX",y:"translateY",z:"translateZ"};function rh(t={},s=!0){const n=Ve({...t}),o=H("");return ve(n,l=>{let r="",a=!1;if(s&&(l.x||l.y||l.z)){const i=[l.x||0,l.y||0,l.z||0].map(be.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(l)){if(s&&(i==="x"||i==="y"||i==="z"))continue;const u=ic(i),d=oh(c,u);r+=`${XT[i]||i}(${d}) `}s&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const eL=["","X","Y","Z"],tL=["perspective","translate","scale","rotate","skew"],ah=["transformPerspective","x","y","z"];tL.forEach(t=>{eL.forEach(s=>{const n=t+s;ah.push(n)})});const sL=new Set(ah);function uc(t){return sL.has(t)}const nL=new Set(["originX","originY","originZ"]);function ih(t){return nL.has(t)}function oL(t){const s={},n={};return Object.entries(t).forEach(([o,l])=>{uc(o)||ih(o)?s[o]=l:n[o]=l}),{transform:s,style:n}}function ch(t){const{transform:s,style:n}=oL(t),{transform:o}=rh(s),{style:l}=lh(n);return o.value&&(l.value.transform=o.value),l.value}function lL(t,s){let n,o;const{state:l,style:r}=lh();return pc(t,a=>{o=a;for(const i of Object.keys(nh))a.style[i]===null||a.style[i]===""||uc(i)||ih(i)||(l[i]=a.style[i]);n&&Object.entries(n).forEach(([i,c])=>a.style[i]=c),s&&s(l)}),ve(r,a=>{if(!o){n=a;return}for(const i in a)o.style[i]=a[i]},{immediate:!0}),{style:l}}function rL(t){const s=t.trim().split(/\) |\)/);if(s.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return s.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[r]:u}},{})}function aL(t,s){Object.entries(rL(s)).forEach(([n,o])=>{const l=["x","y","z"];if(n==="translate3d"){if(o===0){l.forEach(r=>t[r]=0);return}o.forEach((r,a)=>t[l[a]]=r);return}if(o=parseFloat(o),n==="translateX"){t.x=o;return}if(n==="translateY"){t.y=o;return}if(n==="translateZ"){t.z=o;return}t[n]=o})}function iL(t,s){let n,o;const{state:l,transform:r}=rh();return pc(t,a=>{o=a,a.style.transform&&aL(l,a.style.transform),n&&(a.style.transform=n),s&&s(l)}),ve(r,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function cL(t,s){const n=Ve({}),o=a=>Object.entries(a).forEach(([i,c])=>n[i]=c),{style:l}=lL(t,o),{transform:r}=iL(t,o);return ve(n,a=>{Object.entries(a).forEach(([i,c])=>{const u=uc(i)?r:l;u[i]&&u[i]===c||(u[i]=c)})},{immediate:!0,deep:!0}),pc(t,()=>s&&o(s)),{motionProperties:n,style:l,transform:r}}function pL(t={}){const s=O(t),n=H();return{state:R(()=>{if(n.value)return s[n.value]}),variant:n}}function ph(t,s={},n){const{motionProperties:o}=cL(t),{variant:l,state:r}=pL(s),a=VT(o,s),i={target:t,variant:l,variants:s,state:r,motionProperties:o,...a};return ZT(i,n),i}const uL=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function dL(t,s){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};n&&(n.variants&&ka(n.variants)&&(s.value={...s.value,...n.variants}),uL.forEach(o=>{if(o==="delay"){if(n&&n[o]&&typeof n[o]=="number"){const l=n[o];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:l,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:l,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:l,...s.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&ka(n[o])&&(s.value[o]=n[o])}))}function sa(t){return{created:(n,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Xr[r]&&Xr[r].stop();const a=H(t||{});typeof o.value=="object"&&(a.value=o.value),dL(l,a);const i=ph(n,a);n.motionInstance=i,r&&(Xr[r]=i)},getSSRProps(n,o){let{initial:l}=n.value||o&&(o==null?void 0:o.props)||{};l=O(l);const r=fx((t==null?void 0:t.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:ch(r)}}}}const yL={initial:{opacity:0},enter:{opacity:1}},fL={initial:{opacity:0},visible:{opacity:1}},hL={initial:{opacity:0},visibleOnce:{opacity:1}},mL={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},gL={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},_L={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},vL={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},bL={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},AL={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},DL={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},CL={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},BL={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},EL={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},wL={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},kL={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},SL={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},xL={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},TL={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},LL={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},RL={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},$L={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},PL={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},OL={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},NL={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},FL={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},IL={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},ML={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},UL={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},qL={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},jL={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},oi={__proto__:null,fade:yL,fadeVisible:fL,fadeVisibleOnce:hL,pop:mL,popVisible:gL,popVisibleOnce:_L,rollBottom:SL,rollLeft:vL,rollRight:DL,rollTop:EL,rollVisibleBottom:xL,rollVisibleLeft:bL,rollVisibleOnceBottom:TL,rollVisibleOnceLeft:AL,rollVisibleOnceRight:BL,rollVisibleOnceTop:kL,rollVisibleRight:CL,rollVisibleTop:wL,slideBottom:UL,slideLeft:LL,slideRight:PL,slideTop:FL,slideVisibleBottom:qL,slideVisibleLeft:RL,slideVisibleOnceBottom:jL,slideVisibleOnceLeft:$L,slideVisibleOnceRight:NL,slideVisibleOnceTop:ML,slideVisibleRight:OL,slideVisibleTop:IL},zL=Ce({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var i;const s=cg(),n=Ve({});if(!t.is&&!s.default)return()=>tt("div",{});const o=R(()=>{let c;return t.preset&&(c=oi[t.preset]),c}),l=R(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=R(()=>{const c={...l.value,...o.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),a=R(()=>{if(!t.is)return;let c=t.is;return typeof a.value=="string"&&!Iu(c)&&(c=qn(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var y,f,h;(y=u.variants)!=null&&y.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Qn(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:s,component:a,motionConfig:r,instances:n}},render({slots:t,motionConfig:s,instances:n,component:o}){var i;const l=ch(s.initial||{}),r=(c,u)=>(c.props||(c.props={}),c.props.style=l,c.props.onVnodeMounted=({el:d})=>{const y=ph(d,s);n[u]=y},c);if(o){const c=tt(o,void 0,t);return r(c,0),c}return(((i=t.default)==null?void 0:i.call(t))||[]).map((c,u)=>r(c,u))}});function VL(t){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(s.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>n.charAt(s.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const HL={install(t,s){if(t.directive("motion",sa()),t.component("Motion",zL),!s||s&&!s.excludePresets)for(const n in oi){const o=oi[n];t.directive(`motion-${VL(n)}`,sa(o))}if(s&&s.directives)for(const n in s.directives){const o=s.directives[n];o.initial,t.directive(`motion-${n}`,sa(o))}}};var bu;const To=typeof window<"u",QL=Object.prototype.toString,WL=t=>QL.call(t)==="[object Object]";To&&((bu=window==null?void 0:window.navigator)!=null&&bu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function JL(t){return pi()?(ju(t),!0):!1}function GL(t){var s;const n=O(t);return(s=n==null?void 0:n.$el)!=null?s:n}const KL=To?window:void 0,Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Du="__vueuse_ssr_handlers__";Au[Du]=Au[Du]||{};function YL(t,s={}){const{immediate:n=!0,window:o=KL}=s,l=H(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function i(){!l.value&&o&&(l.value=!0,a())}function c(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return n&&i(),JL(c),{isActive:l,pause:c,resume:i}}var Cu;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Cu||(Cu={}));const Er="vue-starport-injection",uh="vue-starport-options",ZL={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},dh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var XL=Object.defineProperty,or=Object.getOwnPropertySymbols,yh=Object.prototype.hasOwnProperty,fh=Object.prototype.propertyIsEnumerable,Bu=(t,s,n)=>s in t?XL(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,eR=(t,s)=>{for(var n in s||(s={}))yh.call(s,n)&&Bu(t,n,s[n]);if(or)for(var n of or(s))fh.call(s,n)&&Bu(t,n,s[n]);return t},Eu=(t,s)=>{var n={};for(var o in t)yh.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&or)for(var o of or(t))s.indexOf(o)<0&&fh.call(t,o)&&(n[o]=t[o]);return n};const tR=Ce({name:"StarportProxy",props:eR({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},dh),setup(t,s){const n=I(Er),o=R(()=>n.getInstance(t.port,t.component)),l=H(),r=o.value.generateId(),a=H(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Wt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await rt(),a.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const i=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${t.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Yo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await rt(),await rt(),!o.value.el&&n.dispose(o.value.port))}),ve(()=>t,async()=>{o.value.props&&await rt();const i=t,{props:c}=i,u=Eu(i,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:c,mountedProps:u}=i,d=Eu(i,["initialProps","mountedProps"]),y=ue(d,(a.value?u:c)||{});return tt("div",ue(y,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),s.slots.default?tt(s.slots.default):void 0)}}});var sR=Object.defineProperty,nR=Object.defineProperties,oR=Object.getOwnPropertyDescriptors,wu=Object.getOwnPropertySymbols,lR=Object.prototype.hasOwnProperty,rR=Object.prototype.propertyIsEnumerable,ku=(t,s,n)=>s in t?sR(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,aR=(t,s)=>{for(var n in s||(s={}))lR.call(s,n)&&ku(t,n,s[n]);if(wu)for(var n of wu(s))rR.call(s,n)&&ku(t,n,s[n]);return t},iR=(t,s)=>nR(t,oR(s));const cR=Ce({name:"Starport",inheritAttrs:!0,props:dh,setup(t,s){const n=H(!1);return Wt(()=>{if(n.value=!0,!I(Er))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const o=(i=(a=s.slots).default)==null?void 0:i.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!WL(r)||zs(r))&&(r={render(){return o}}),tt(tR,iR(aR({},t),{key:t.port,component:pr(r),props:l.props}))}}});function pR(t){const s=Ve({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),n=To?document.documentElement||document.body:void 0;function o(){if(!To)return;const i=GL(t);if(!i)return;const{height:c,width:u,left:d,top:y}=i.getBoundingClientRect(),f=window.getComputedStyle(i),h=f.margin,m=f.padding;Object.assign(s,{height:c,width:u,left:d,top:n.scrollTop+y,margin:h,padding:m})}const l=YL(o,{immediate:!1});function r(){To&&(o(),l.resume())}function a(){l.pause()}return s}let uR=(t,s=21)=>(n=s)=>{let o="",l=n;for(;l--;)o+=t[Math.random()*t.length|0];return o};const Su=uR("abcdefghijklmnopqrstuvwxyz",5);function xu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function dR(t){var s;return t.name||((s=t.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var yR=Object.defineProperty,Tu=Object.getOwnPropertySymbols,fR=Object.prototype.hasOwnProperty,hR=Object.prototype.propertyIsEnumerable,Lu=(t,s,n)=>s in t?yR(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,na=(t,s)=>{for(var n in s||(s={}))fR.call(s,n)&&Lu(t,n,s[n]);if(Tu)for(var n of Tu(s))hR.call(s,n)&&Lu(t,n,s[n]);return t};function mR(t,s,n={}){const o=dR(s),l=xu(o)||Su(),r=H(),a=H(null),i=H(!1),c=H(!1),u=Rh(!0),d=H({}),y=R(()=>na(na(na({},ZL),n),d.value)),f=H(0);let h;u.run(()=>{h=pR(r),ve(r,async b=>{b&&(c.value=!0),await rt(),r.value||(c.value=!1)})});const m=xu(t);function _(){return`starport-${l}-${m}-${Su()}`}const D=_();return Ve({el:r,id:D,port:t,props:a,rect:h,scope:u,isLanded:i,isVisible:c,options:y,liftOffTime:f,component:s,componentName:o,componentId:l,generateId:_,setLocalOptions(b={}){d.value=JSON.parse(JSON.stringify(b))},elRef(){return r},liftOff(){i.value&&(i.value=!1,f.value=Date.now(),h.listen())},land(){i.value||(i.value=!0,h.pause())}})}function gR(t){const s=Ve(new Map);function n(l,r){let a=s.get(l);return a||(a=mR(l,r,t),s.set(l,a)),a.component=r,a}function o(l){var r;(r=s.get(l))==null||r.scope.stop(),s.delete(l)}return{portMap:s,dispose:o,getInstance:n}}var _R=Object.defineProperty,vR=Object.defineProperties,bR=Object.getOwnPropertyDescriptors,Ru=Object.getOwnPropertySymbols,AR=Object.prototype.hasOwnProperty,DR=Object.prototype.propertyIsEnumerable,$u=(t,s,n)=>s in t?_R(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,CR=(t,s)=>{for(var n in s||(s={}))AR.call(s,n)&&$u(t,n,s[n]);if(Ru)for(var n of Ru(s))DR.call(s,n)&&$u(t,n,s[n]);return t},BR=(t,s)=>vR(t,bR(s));const ER=Ce({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const s=I(Er);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=R(()=>s.getInstance(t.port,t.component)),o=R(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),l=R(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?BR(CR({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),u)}),r={onTransitionend(a){n.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${n.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${n.value.options.duration/1e3}s).`)}};return()=>{const a=!!(n.value.isLanded&&n.value.el);return tt("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},tt(Fg,{to:a?`#${o.value}`:"body",disabled:!a},tt(n.value.component,ue(r,n.value.props))))}}}),wR=Ce({name:"StarportCarrier",setup(t,{slots:s}){const n=gR(I(uh,{}));return Ct().appContext.app.provide(Er,n),()=>{var l;return[(l=s.default)==null?void 0:l.call(s),Array.from(n.portMap.entries()).map(([r,{component:a}])=>tt(ER,{key:r,port:r,component:a}))]}}});function kR(t={}){return{install(s){s.provide(uh,t),s.component("Starport",cR),s.component("StarportCarrier",wR)}}}function SR(t){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),t.app.use(HL),t.app.use(kR({keepAlive:!0})),dx(t)}function Bt(t,s,n){var o;return((o=t.instance)==null?void 0:o.$).provides[s]??n}function xR(){return{install(t){t.directive("click",{name:"v-click",mounted(s,n){var d,y,f,h,m,_;if(wo.value||(d=Bt(n,Do))!=null&&d.value)return;const o=Bt(n,ln),l=Bt(n,Ao),r=Bt(n,Ea),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((y=o==null?void 0:o.value)==null?void 0:y.length)||0,u=i?$0:Fr;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(s))&&o.value.push(s),n.value==null&&(n.value=(h=o==null?void 0:o.value)==null?void 0:h.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((m=o==null?void 0:o.value)==null?void 0:m.length)||0)+Number(n.value)),!(r!=null&&r.value.has(n.value)))r==null||r.value.set(n.value,[s]);else if(!((_=r==null?void 0:r.value.get(n.value))!=null&&_.includes(s))){const D=(r==null?void 0:r.value.get(n.value))||[];r==null||r.value.set(n.value,[s].concat(D))}s==null||s.classList.toggle(tn,!0),l&&ve(l,()=>{const D=(l==null?void 0:l.value)??0,b=n.value!=null?D>=n.value:D>c;s.classList.contains(Ir)||s.classList.toggle(u,!b),a!==!1&&a!==void 0&&s.classList.toggle(u,b),s.classList.toggle(so,!1);const B=r==null?void 0:r.value.get(D);B==null||B.forEach((v,E)=>{v.classList.toggle(ml,!1),E===B.length-1?v.classList.toggle(so,!0):v.classList.toggle(ml,!0)}),s.classList.contains(so)||s.classList.toggle(ml,b)},{immediate:!0})},unmounted(s,n){s==null||s.classList.toggle(tn,!1);const o=Bt(n,ln);o!=null&&o.value&&wa(o.value,s)}}),t.directive("after",{name:"v-after",mounted(s,n){var i,c,u;if(wo.value||(i=Bt(n,Do))!=null&&i.value)return;const o=Bt(n,ln),l=Bt(n,Ao),r=Bt(n,Ea),a=o==null?void 0:o.value.length;n.value==null&&(n.value=o==null?void 0:o.value.length),typeof n.value=="string"&&(n.value.startsWith("+")||n.value.startsWith("-"))&&(n.value=(((c=o==null?void 0:o.value)==null?void 0:c.length)||0)+Number(n.value)),r!=null&&r.value.has(n.value)?(u=r==null?void 0:r.value.get(n.value))==null||u.push(s):r==null||r.value.set(n.value,[s]),s==null||s.classList.toggle(tn,!0),l&&ve(l,()=>{const d=(l.value??0)>=(n.value??a??0);s.classList.contains(Ir)||s.classList.toggle(Fr,!d),s.classList.toggle(so,!1),s.classList.contains(so)||s.classList.toggle(ml,d)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(tn,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(s,n){var a,i,c;if(wo.value||(a=Bt(n,Do))!=null&&a.value)return;const o=Bt(n,ln),l=Bt(n,Ao),r=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(s))&&o.value.push(s),s==null||s.classList.toggle(tn,!0),l&&ve(l,()=>{const u=(l==null?void 0:l.value)??0,d=n.value!=null?u>=n.value:u>r;s.classList.toggle(Fr,d),s.classList.toggle(Ir,d)},{immediate:!0})},unmounted(s,n){s==null||s.classList.toggle(tn,!1);const o=Bt(n,ln);o!=null&&o.value&&wa(o.value,s)}})}}}function TR(t,s){const n=df(t),o=yf(s,n.currentRoute,n.currentPage);return{nav:{...n,...o},configs:xe,themeConfigs:R(()=>xe.themeConfig)}}function LR(){return{install(t){const s=TR(It,Nt);t.provide(j,Ve(s))}}}const Kn=N1(rx);Kn.use(Dt);Kn.use(T0());Kn.use(xR());Kn.use(LR());SR({app:Kn,router:Dt});Kn.mount("#app");export{ZA as $,mA as A,H as B,OR as C,yt as D,Ue as E,Le as F,N8 as G,XS as H,Nt as I,er as J,JS as K,Jr as L,Wt as M,Ve as N,$R as O,NR as P,ve as Q,C as R,Hy as S,Te as T,dt as U,G8 as V,Di as W,Ci as X,Uo as Y,Vr as Z,Q as _,j as a,Ui as a0,qi as a1,We as a2,WA as a3,Kb as a4,RR as a5,Qe as a6,co as a7,un as a8,ns as a9,Ia as aa,C8 as ab,B8 as ac,E8 as ad,k8 as ae,bd as af,Kd as ag,FR as ah,mt as ai,Al as aj,L5 as ak,ay as al,S8 as am,Yo as an,ry as b,xe as c,Ce as d,gm as e,J as f,e as g,O as h,I as i,Ke as j,VS as k,p as l,P as m,et as n,w as o,Ae as p,$i as q,Wn as r,Gt as s,Qt as t,PR as u,R as v,Mr as w,V as x,Fy as y,AA as z};
