
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,G as c,o as i,H as s,L as p,X as l,r as m,a4 as u}from"./index-DEvcBNPV.js";const d={class:"breadcrumb-item flex items-center text-foreground"},f={class:"separator mx-2"},x=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=u();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(o,_)=>(i(),c("div",d,[s("span",f,p(o.separator),1),s("span",{class:l(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[m(o.$slots,"default")],2)]))}});export{x as _};
