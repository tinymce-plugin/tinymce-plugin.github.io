import{r,c as n,i as m,a as s,o as c}from"./vendor.370c6722.js";import{_ as i}from"./index.fc45b76b.js";const l={name:"DemoAllIframe",data(){return{iframeHight:"300"}},created(){this.info()},methods:{info(){let t=this,o=setInterval(()=>{let e=document.getElementById("demoIframeID");e.contentWindow&&(t.iframeHight=e.contentWindow.document.body.scrollHeight,clearInterval(o))},1800)}}},d=s("iframe",{id:"demoIframeID",name:"demoIframeID",src:"/tinymce/indexall.html",frameborder:"0",scrolling:"no",width:"100%",height:"800"},null,-1);function f(t,o,e,h,_,p){const a=r("PagesRouter");return c(),n("div",null,[d,m(a,{pagesName:"demoall"})])}var g=i(l,[["render",f]]);export{g as default};
