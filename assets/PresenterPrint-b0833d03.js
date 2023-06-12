import{d as _,i as d,a as p,u,b as h,c as m,e as g,f as n,g as t,t as o,h as a,F as f,r as v,n as y,j as b,o as r,k as x,l as k,m as N,p as w,q as P,_ as S}from"./index-013afe1c.js";import{N as V}from"./NoteDisplay-5a3fa06e.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},q={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const l=g(()=>b.map(s=>{var i;return(i=s.meta)==null?void 0:i.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,i)=>(r(),n("div",{id:"page-root",style:y(a(P))},[t("div",j,[t("div",L,[t("h1",T,o(a(m).title),1),t("div",q,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,v(a(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(a(x)),1),k(" "+o(e==null?void 0:e.title)+" ",1),H])]),N(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(r(),n("hr",z)):w("v-if",!0)]))),128))])],4))}}),R=S(F,[["__file","/home/runner/work/kaigionrails-postgresql-as-seen-by-rubyists/kaigionrails-postgresql-as-seen-by-rubyists/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
