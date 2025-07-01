
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as w,a5 as _,G as b,o as a,k as o,w as l,S as i,ad as k,Z as n,e as p,f as u,a6 as c}from"./index-DEvcBNPV.js";const r=w({data(){return{show:!1,showItem:!0,itemText:"Test item dynamic change label",optionsComponent:{x:500,y:200}}},methods:{onContextMenu(e){e.preventDefault(),this.optionsComponent.x=e.x,this.optionsComponent.y=e.y,this.show=!0},changeLabelText(){this.itemText=this.itemText==="My label CHANGED!"?"Test item dynamic change label":"My label CHANGED!"}}});function x(e,t,y,T,g,$){const d=k,h=n("el-button"),s=n("context-menu-item"),f=n("context-menu-separator"),C=n("context-menu");return a(),b("div",null,[o(d,null,{default:l(()=>t[2]||(t[2]=[i(" 多级导航2-1 ")])),_:1,__:[2]}),o(h,{onContextmenu:e.onContextMenu},{default:l(()=>t[3]||(t[3]=[i(" Click me to show menu ")])),_:1,__:[3]},8,["onContextmenu"]),o(C,{show:e.show,"onUpdate:show":t[1]||(t[1]=m=>e.show=m),options:e.optionsComponent},{default:l(()=>[o(s,{label:"Test item dynamic show and hide","click-close":!1,onClick:t[0]||(t[0]=m=>e.showItem=!e.showItem)}),e.showItem?(a(),p(s,{key:0,label:"Click the item above to show/hide me"})):u("",!0),e.showItem?(a(),p(f,{key:1})):u("",!0),o(s,{label:e.itemText,"click-close":!1,onClick:e.changeLabelText},null,8,["label","onClick"])]),_:1},8,["show","options"])])}typeof c=="function"&&c(r);const I=_(r,[["render",x]]);export{I as default};
