var _=Object.defineProperty,f=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&h(e,n,t[n]);if(u)for(var n of u(t))w.call(t,n)&&h(e,n,t[n]);return e},d=(e,t)=>f(e,R(t));import"./pinia.js";import{J as c}from"./vue.js";const E="modulepreload",p={},k="/",l=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${k}${i}`,i in p)return;p[i]=!0;const r=i.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":E,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((m,v)=>{o.addEventListener("load",m),o.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},$=(e,t,n,i={template:"<div>loading</div>"},r={template:"<div>err</div>"})=>{e.addRoute({name:"404",path:"/:path(.*)",component:n["/assets/chunk/test.js"]||{template:"<div>404</div>"}}),t.routes.map(a=>{e.hasRoute(a.name)&&e.removeRoute(a.name),a.children&&a.children.length>0?(e.addRoute(d(s({},a),{component:{template:'<div class="'+a.name+' w1300" ><router-view></router-view></div>'}})),a.children.map(o=>{o.children&&o.children.length>0?(e.addRoute(a.name,d(s({},o),{component:{template:'<div class="'+o.name+' w1300" ><router-view></router-view></div>'}})),o.children.map(m=>{e.addRoute(o.name,d(s({},m),{component:c({loader:()=>l(()=>import("/assets/chunk/"+m.name+".js"),[]),loadingComponent:i,errorComponent:r,delay:100,timeout:36e4})}))})):e.addRoute(a.name,d(s({},o),{component:c({loader:()=>l(()=>import("/assets/chunk/"+o.name+".js"),[]),loadingComponent:i,errorComponent:r,delay:100,timeout:36e4})}))})):e.addRoute(d(s({},a),{component:c({loader:()=>l(()=>import("/assets/chunk/"+a.name+".js"),[]),loadingComponent:i,errorComponent:r,delay:100,timeout:36e4})}))})};export{l as _,$ as g};
