
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as m}from"./logo-DuggxAT9.js";import{d as u,a2 as h,p as a,b as g,e as _,o,Z as d,g as e,X as f,w as k,G as r,f as l,L as w}from"./index-DEvcBNPV.js";const b=["src"],x={key:1,class:"block truncate font-bold"},S=u({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(L){const t=h(),s=a("Fantastic-admin 基础版"),i=a(m),c=g(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,y)=>{const p=d("RouterLink");return o(),_(p,{to:e(c),class:f(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(s)},{default:k(()=>[n.showLogo?(o(),r("img",{key:0,src:e(i),class:"logo h-[30px] w-[30px] object-contain"},null,8,b)):l("",!0),n.showTitle?(o(),r("span",x,w(e(s)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
