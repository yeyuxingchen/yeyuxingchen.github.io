
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-CpnwxH0O.js";import{d as C,a2 as b,p as k,v as $,ax as d,x as z,e as B,o as F,g as c,w as e,k as n,U as P,i as m,Y as S,X as w,H as t,S as s,a5 as M}from"./index-DEvcBNPV.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-Des25nH4.js";import{u as R}from"./useMainPage-Du1cnNiX.js";const V={class:"flex-col-center gap-2"},A=C({name:"PageReload",__name:"index",setup(I){const i=b(),l=R(),o=k(!1);$(()=>{d("f5",r=>{i.settings.toolbar.pageReload&&(r.preventDefault(),l.reload())})}),z(()=>{d.unbind("f5")});function f(){o.value=!0,l.reload()}function _(){location.reload()}return(r,a)=>{const u=N,p=S,g=P,x=v;return F(),B(x,{side:"bottom",disabled:c(i).os==="mac"},{content:e(()=>[t("div",V,[t("p",null,[a[2]||(a[2]=s("按住 ")),n(u,null,{default:e(()=>a[1]||(a[1]=[s("Ctrl")])),_:1,__:[1]}),a[3]||(a[3]=s(" 键并点击"))]),a[4]||(a[4]=t("p",null,"可切换为浏览器原生刷新",-1))])]),default:e(()=>[n(g,{variant:"ghost",size:"icon",class:"size-9",onClick:[m(f,["exact"]),m(_,["ctrl","exact"])],onAnimationend:a[0]||(a[0]=T=>o.value=!1)},{default:e(()=>[n(p,{name:"i-iconoir:refresh-double",class:w(["size-4",{animation:c(o)}])},null,8,["class"])]),_:1})]),_:1},8,["disabled"])}}}),K=M(A,[["__scopeId","data-v-a9032a02"]]);export{K as default};
