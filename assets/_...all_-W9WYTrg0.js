
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,a2 as f,p as d,a7 as x,v as p,a4 as _,G as m,k as o,H as n,w as v,U as w,o as g,Y as k,S as B,L as N,g as y,a6 as s}from"./index-DEvcBNPV.js";const S={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},b={class:"flex flex-col gap-4"},h=u({__name:"[...all]",setup(I){const l=_(),r=f(),e=d({inter:Number.NaN,countdown:5});x(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),p(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),a())},1e3)});function a(){l.push(r.settings.home.fullPath)}return(C,t)=>{const c=k,i=w;return g(),m("div",S,[o(c,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",b,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[o(i,{onClick:a},{default:v(()=>[B(N(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof s=="function"&&s(h);export{h as default};
