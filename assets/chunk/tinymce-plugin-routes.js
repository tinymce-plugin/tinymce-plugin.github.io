var v=Object.defineProperty,f=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var u=(t,n,s)=>n in t?v(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,r=(t,n)=>{for(var s in n||(n={}))g.call(n,s)&&u(t,s,n[s]);if(l)for(var s of l(n))E.call(n,s)&&u(t,s,n[s]);return t},i=(t,n)=>f(t,R(n));import"./pinia.js";import{I as m}from"./vue.js";const w="modulepreload",h={},y="/",d=function(n,s){return!s||s.length===0?n():Promise.all(s.map(e=>{if(e=`${y}${e}`,e in h)return;h[e]=!0;const o=e.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":w,o||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),o)return new Promise((p,_)=>{a.addEventListener("load",p),a.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},$=(t,n,s)=>{t.addRoute({name:"404",path:"/:path(.*)",component:s["/assets/chunk/test-legacy.js"]||{template:"<div>404</div>"}}),n.routes.map(e=>{t.hasRoute(e.name)&&t.removeRoute(e.name),e.children&&e.children.length>0?(t.addRoute(i(r({},e),{component:{template:'<div class="'+e.name+' w1300" ><router-view></router-view></div>'}})),e.children.map(o=>{o.children&&o.children.length>0?(t.addRoute(e.name,i(r({},o),{component:{template:'<div class="'+o.name+' w1300" ><router-view></router-view></div>'}})),o.children.map(c=>{t.addRoute(o.name,i(r({},c),{component:m(()=>d(()=>import("/assets/chunk/"+c.name+"-legacy.js"),[]))}))})):t.addRoute(e.name,i(r({},o),{component:m(()=>d(()=>import("/assets/chunk/"+o.name+"-legacy.js"),[]))}))})):t.addRoute(i(r({},e),{component:m(()=>d(()=>import("/assets/chunk/"+e.name+"-legacy.js"),[]))}))})};export{d as _,$ as g};
