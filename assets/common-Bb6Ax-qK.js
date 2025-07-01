
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
function l(r,a){let n=r.length;const o=new Uint8Array(n);for(;n--;)o[n]=r.charCodeAt(n);const t=new Blob([o],{type:a}),e={url:"",name:""};return e.url=URL.createObjectURL(t),e.name=`${new Date().getTime()}.png`,e}function s(r,a=!0){return new Promise((n,o)=>{const t=new FileReader;t.onload=()=>{let e=t.result;a||(e=e.split(",")[1]),n(e)},t.onerror=e=>{o(e)},t.readAsDataURL(r)})}export{l as b,s as f};
