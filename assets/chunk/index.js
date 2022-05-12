import"./zh_CN.js";import{T as Ht}from"./tpImportword.js";import{c as It}from"./pinia.js";import{_ as Dt}from"../index.js";import{a1 as Q,K as Bt,L as P,a2 as tt,R as Pt,S as Vt,T as Nt}from"./vue.js";import"./tinymce-plugin-routes.js";var et={exports:{}};/*! 
*  @plugin tinymce-plugin
*  @version 0.0.3-beta.10 (2022-5-5)
*  @description tinymce-plugin
*  @copyright (2022) Five(Li Hailong) . All rights reserved. https://github.com/tinymce-plugintinymce-plugin
*/(function(g,c){(function(y,p){p(c)})(It,function(y){let p=tinymce,u=p.util.Tools,m=p.html.Node;p.html.Schema;let b=p.util.XHR,v=p.util.I18n,f=new p.html.Serializer().serialize,_=new p.html.DomParser().parse,S={};window.tp$State=S;let x=(t,a)=>{let n=a?a.match(new RegExp(t+':(.+?)"?[;}]')):"";return n?n[1]:!1};function V(t,a,n,e){t.tp$Style.mapping&&t.tp$Style.mapping[""+a.getAttribute("data-id")]&&(t.tp$Style.mapping[""+a.getAttribute("data-id")].specialStyle[""+n]=e)}let k={customTags:{}},M=Object.keys,C=function(){return C=Object.assign||function(a){for(var n,e=1,l=arguments.length;e<l;e++){n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s])}return a},C.apply(this,arguments)},at=Object.hasOwnProperty;var nt=function(t){return t==null},lt=function(t){return!nt(t)};const $=t=>{if(typeof t=="object")return JSON.stringify(t).replace(/"([-A-Za-z]+?)":""[,}]/g,"").replace(/,/gi,";").replace(/{/gi,"").replace(/}/gi,"").replace(/"/gi,"")},H=t=>typeof t=="string"&&t!=="{}"?(t=JSON.stringify(t),JSON.parse(("{"+t.replace(/:/g,'": "').replace(/;\s*/g,'","')+"}").replace(/,\"\"\}$/,"}"))):t,A=(t,a)=>{const n=a.match(new RegExp(`.${t}\\s*\\{([\\s\\S]+)\\}`));return n&&n[1]?n[1].replace(/\}([\s\S]+)/,"").trim():""};var st=function(t,a){return at.call(t,a)},it=function(t,a,n,e){e===void 0&&(e=null);var l=t.attr(n);return lt(l)?l:st(a,n)?null:e};const I=t=>t.replace(/[-|\_](\w)/g,function(a,n){return n.toUpperCase()}),ot=t=>t.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/\-/g,"_"),rt=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/\_/g,"-");var pt=function(t,a){let n="";if(!t)return"";for(a=I(a);t.nodeName!=="P"&&t.nodeName!=="LI"&&t.nodeName!=="DIV"&&t.nodeName!=="BODY";){if(t.style[a]){n=t.style[a];break}t=t.parentNode}return n};let T=(t,a)=>{let n="";return n+=t["tp-buttons"]?'.tp-buttons[data-tp-style="'+a+'"] {'+t["tp-buttons"]+`}
`:"",n+=t["tp-buttons:hover"]?'.tp-buttons[data-tp-style="'+a+'"]:hover {'+t["tp-buttons:hover"]+`}
`:"",n+=t["tp-buttons::before"]?'.tp-buttons[data-tp-style="'+a+'"]::before {'+t["tp-buttons::before"]+`}
`:"",n+=t["tp-buttons::after"]?'.tp-buttons[data-tp-style="'+a+'"]::after {'+t["tp-buttons::after"]+`}
`:"",n};const dt=(t,a,n)=>{!n&&(n=a*100);let e={id:null,outTime:n,outId:null};e.id=setInterval(l=>{t(()=>{clearTimeout(l.outId),clearInterval(l.id)})},a,e),e.outId=setTimeout(()=>{e.id&&clearInterval(e.id)},e.outTime)};let z=function(t,a){return typeof t[a]=="function"?t[a]:typeof k.customTags[t.name][a]=="function"?k.customTags[t.name][a]:function(){}};const ct=(t,a)=>a?typeof t=="string"&&!t.match(/\s/)&&t.length>0?parseInt(t)+"px":t:typeof t=="string"&&t.length>0&&t.match(/^[0-9]{1,8}$/)?t+"px":t,N=t=>{let a=t.split("_");return a.length>1?v.translate([a[0]+" {0}",a[1]]):v.translate(t)};tinymce.tp$HtmlPanelFn=window.tp$HtmlPanelFn=function(t,a,n){S.buttonsStyle&&(S.buttonsStyle[a]=n),document.querySelector("#"+a+"_StyleID").innerHTML=t.nextElementSibling.innerHTML};const ut={count:0},ht=t=>{let a=new Date().getTime()+"-"+ut.count++,n=`
  <div id="${a}" class="skt skt-loading" data-v-e3347e98=""><div class="skt-tox-tinymce" data-v-e3347e98="" style="height: 200px;"><div class="skt-tox-editor-container" data-v-e3347e98=""><div class="skt-tox-editor-header" data-v-e3347e98=""><div class="skt-tox-menubar" data-v-e3347e98=""><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">File</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Edit</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">View</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Format</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Tools</span></button></div><div class="skt-tox-toolbar-overlord" data-v-e3347e98=""><div class="skt-tox-toolbar" data-v-e3347e98=""><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div></div></div><div class="skt-tox-anchorbar" data-v-e3347e98=""></div></div><div class="skt-tox-sidebar-wrap-box" data-v-e3347e98=""><p class="skeleton" data-v-e3347e98=""> &nbsp; </p><p class="skeleton" data-v-e3347e98="">&nbsp; </p><p class="skeleton" data-v-e3347e98=""></p></div></div><div class="skt-tox-statusbar" data-v-e3347e98=""><div class="skeleton" data-v-e3347e98=""> PP </div><span class="skeleton" data-v-e3347e98="" style="margin-left: calc(100% - 120px);">Powered by Five </span></div></div></div>
`;return document.querySelector(t.selector).outerHTML=n+document.querySelector(t.selector).outerHTML,a},mt=(t,a,n)=>{let e="";e=S.buttonsStyle&&S.buttonsStyle[a],n||(n=M(t.tp$CustomTags.buttons.styleSheetList)),e||(e=S.buttonsStyle&&(S.buttonsStyle[a]=n[0]));let l="",s="",i="";return n.forEach((o,r)=>{o===e&&(s=`<span class="tp-buttons" data-tp-style="${o}">${N(o)}</span>`),l+=`<li ><input id="${a+"_"+r}" type="radio" name="${a}" ${e===o?" checked ":""}  onclick="tinymce.tp$HtmlPanelFn(this,'${a}','${o}')"> <label for="${a+"_"+r}" > <span class="tp-buttons" data-tp-style="${o}">${N(o)}</span></label></li>
`,i+=T(t.tp$CustomTags.buttons.styleSheetList[o],o)}),`<div style="width: 100%; position: relative; " >
 
  <style>
  .tox .tox-dialog__body-content ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    max-height:160px;
    overflow: auto;
    border-top: 1px solid #ccc;

  }
  .tox .tox-dialog__body-content ul input{
    display: none;
  }
  .tox .tox-dialog__body-content ul label{
    border: 2px solid transparent;
    display: inline-block;
    position: relative;
    padding: 2px;
    cursor: pointer;
    
  }
  .tox .tox-dialog__body-content ul label::after{
    content:"\u2714";
    font-size: 20px;
    border-radius: 15px;
    width: 22px;
    height: 22px;
    display: none;
    color:  #fff;
    background:  #1C6CA1;
    border: 2px solid #1C6CA1;
    position: absolute;
    text-align: center;
    line-height: 20px;
    z-index: 9;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
  }
  .tox .tox-dialog__body-content ul input:checked + label::after{
    display: block;
  }
  .tox .tox-dialog__body-content ul input:checked + label{
  
    pointer-events: none;
   
  }
  .tox .tox-dialog__body-content ul input:checked + label>span{
    opacity: 0.5;
  }
  .tox .tox-dialog__body-content .showStyle{
    display: block;
    position: absolute;
    right: 20px;
    top: 30px;
    -webkit-transform: translatY(-50%);
    transform: translateY(-50%);

  }
  .tox .tox-dialog__body-content .tox-form__group h2.title_h2{
    margin: 0;
    padding: 0;
    margin-top: -20px;
    min-height: 60px;
    line-height:60px;
  }
  .tox .tox-dialog__body-content li{
    line-style:none;
    display: inline-block;
    margin: 0 4px;
    margin-top: 5px;
  }
    ${i.replace(/.tp-buttons/g,".tox .tox-dialog__body-content .tp-buttons")}
     </style>
     <div class="showStyle" id="${a+"_StyleID"}">${s}</div>
     <h2 class="title_h2">${v.translate("Select tmplate")}:</h2>
     <ul>
      ${l}
     </ul>
     </div>
     `};let O=(t,a)=>{let n="";if(!t)return"";for(a=I(a);t.nodeName&&t.nodeName.toLowerCase()!=="#text";)n=t.style[a],t=t.firstChild;return n};const D=(t,a,n)=>{n=n||t.selection.getSelectedBlocks(),u.each(n,function(e){if(t.dom.getStyle(e,"text-indent")||a){let l="",s="";a==="remove"?(-parseInt(t.dom.getStyle(e,"text-indent"))==parseInt(t.dom.getStyle(e,"margin-left"))&&t.dom.setStyle(e,"margin-left",null),t.dom.setStyle(e,"text-indent",null)):(a=parseInt(a)||2,e&&e.firstChild&&(l=O(e,"font-size"),s=O(e,"letter-spacing"),l?l=(parseInt(l)+parseInt(s||0))*a+"px":l=(parseInt(s||0)+16)*a+"px"),a>0&&-parseInt(t.dom.getStyle(e,"text-indent"))==parseInt(t.dom.getStyle(e,"margin-left"))&&t.dom.setStyle(e,"margin-left",null),t.dom.setStyle(e,"text-indent",l||a+"em"),a<0&&t.dom.setStyle(e,"margin-left",l?l.replace(/^-/,""):-a+"em"))}})},bt=t=>{var a=function(n){return function(){return t.execCommand(n)}};t.addCommand("tpLetterspacing",function(n,e){t.formatter.apply("tpLetterspacing",{value:e}),D(t)}),t.addCommand("tpLineheight",function(n,e){t.formatter.apply("tpLineheight",{value:e})}),t.addCommand("tpIndent",function(n,e){D(t,e||2)}),t.addCommand("mceTpAlignleft",function(n,e){let l=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(l,"float","left")}),t.addCommand("mceTpAlignright",function(n,e){let l=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(l,"float","right")}),t.addCommand("mceTpAligncenter",function(n,e){let l=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(l,"float",null),t.dom.setStyle(l,"margin-left","auto"),t.dom.setStyle(l,"margin-right","auto")}),t.ui.registry.addButton("tpalignleft",{tooltip:"Align left",onAction:a("mceTpAlignleft"),icon:"align-left"}),t.ui.registry.addButton("tpalignright",{tooltip:"Align right",onAction:a("mceTpAlignright"),icon:"align-right"}),t.ui.registry.addButton("tpaligncenter",{tooltip:"Align center",onAction:a("mceTpAligncenter"),icon:"align-center"})},gt=t=>{t.formatter.register({alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table,tp-buttons,tp-tabs",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],afterParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-bottom":"%value"}},beforeParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-top":"%value"}},borderParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"border-width":"%valueW","border-style":"%valueS","border-color":"%valueC"}},paddingParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{padding:"%value"}},tpParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{background:"%background","text-indent":"%indent"}},tpLetterspacing:{inline:"span",remove_similar:!0,styles:{"letter-spacing":"%value"}},tpLineheight:{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table",styles:{"line-height":"%value"}}}),t.on("ExecCommand",function(a){a.command==="FontSize"&&D(t)})};let B=function(t,a,n,e){t.tp$Style.mapping||(t.tp$Style.mapping={}),t.tp$Style.mapping[""+a.getAttribute("data-id")]?C(t.tp$Style.mapping[""+a.getAttribute("data-id")],{styleTemplate:a.getAttribute("data-tp-style")||"default",quantity:a.children.length-1}):t.tp$Style.mapping[""+a.getAttribute("data-id")]={styleCustomTags:e.name,stylePath:e.name==="buttons"?"styleSheetList":"styleSheetLoadList",styleTemplate:a.getAttribute("data-style")||"default",quantity:a.children.length-1,specialStyle:{}}};const ft=(t,a,n,e,l)=>{const s=a.createElement("template"),i=document.createElement("style"),o=document.createElement("style");i.textContent=`body{
      padding: 0;
      margin: 0;
  }
  :host {
      overflow: hidden;
      display: block; 
  }`,s.innerHTML=e.template.innerHTML;class r extends t.HTMLElement{constructor(){super(),this.setAttribute("contenteditable",!1),this.setAttribute("data-mce-tp-component",l),this.attachShadow({mode:"open"}),this.tp$state=typeof e.state=="object"?JSON.parse(JSON.stringify(e.state)):{},B(n,this,"init",e),this.tpComponentDelete=typeof e.tpComponentDelete=="function"?e.tpComponentDelete.bind(this):()=>{this.remove()},this.tpComponentCmd=typeof e.tpComponentCmdFn=="object"?JSON.stringify(e.tpComponentCmdFn)!=="{}"?(w,L)=>{e.tpComponentCmdFn[w](this,L),B(n,this,w,e)}:(w,L)=>{k.customTags[l].tpComponentCmdFn[w](this,L),B(n,this,w,e)}:()=>{console.log("\u65E0\u53EF\u7528cmd")},o.id="tpComponentStyle_"+this.getAttribute("data-id"),l=="tabs"&&(o.textContent=e.styleSheetLoadList&&e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/.tp-tabs\s*\{/g,":host   {").replace(/.tp-tabs_label\b\s/g,"::slotted(.tp-tabs_label)   ").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),l=="collapse"&&(o.textContent=e.styleSheetLoadList&&e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/>/g," ").replace(/.tp-collapse\s*\{/g,":host   {").replace(/label.tp-collapse_label\b\s/g,"::slotted(.tp-collapse_label)   ").replace(/label.tp-collapse_label::/g,"::slotted(.tp-collapse_label)::").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),l=="buttons"&&(o.textContent=e.styleSheetList&&e.styleSheetList[this.getAttribute("data-tp-style")||"default"]?T(e.styleSheetList[this.getAttribute("data-tp-style")||"default"],this.getAttribute("data-tp-style")||"default").replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(.tp-buttons)::before   {").replace(/.tp-buttons::after\s*\{/g,":host(.tp-buttons)::after   {"):""),s.content.prepend(o),s.content.prepend(i),this.shadowRoot.appendChild(s.content.cloneNode(!0))}connectedCallback(){z(e,"headerEditableFn")(this,e.isHeaderEditable,l,n),z(e,"contentEditableFn")(this,e.isContentEditable,l,n),z(e,"connectedCallback")(this.shadowRoot,this)}static get observedAttributes(){return["data-top-bg","data-mce-tp-component","data-value"]}static tp$Delete(){console.log(this)}}try{t.customElements.define("tp-"+l,r)}catch{}},yt=t=>{const a=t.getWin(),n=t.getDoc();let e=t.toolbar,l=t.baseURI.source;typeof e=="object"&&(e=e.jion(" ")),/tpIconlists/.test(e)&&b.send({url:l+"plugins/tpIconlists/tpIconlists.css",async:!1,dataType:"text",success:function(o){t.dom.addStyle(o)}}),gt(t),bt(t);const s=`.mce-content-body [data-mce-tp-component][contenteditable=false][data-mce-selected] {
      outline: none;
      cursor: default;
      box-shadow: 0 0 0 2px #b4d7ff;
      position: relative;
      z-index:999;
      border-color: #B4D7FF;
      border-style: solid;
  }
  .mce-content-body .tp-partition[contentEditable=false],
  .mce-content-body .tp-partition[contentEditable=false]:focus,
  .mce-content-body .tp-partition[contentEditable=false]:hover{
    outline: none!important;
    box-shadow: none!important;
  }
  .mce-content-body tp-buttons .tp-component_inline>a{
       color: inherit;
       font:inherit;
       text-decoration: none;
       
  }
  .mce-content-body .tp-collapse .tp-collapse_label>p:first-child{
      display: inline-block;
  }
  .mce-content-body .tp-component_inline{display: table-cell; margin: 0 }
  .mce-content-body *[contentEditable=false] *[contentEditable=true]:focus {
      outline: none!important;
  }
  .mce-content-body tp-buttons{
    display: inline-block;
    vertical-align: middle;
  }
  .mce-content-body img{
      max-width: 100%;
  }
  .mce-content-body [data-mce-tp-component]{
      border: 1px dashed #bbb;
  }
  .mce-content-body *[contentEditable=false] *[contentEditable=true]:hover {
      outline: none!important;
  }`;t.dom.addStyle(s),t.tp$Style={},t.getTpStyle=o=>"<style>"+t.tp$OutputStyle+" </style>";let i=t.tp$CustomTags||k.customTags;u.each(i,function(o,r){ft(a,n,t,o,r)}),t.parser.addAttributeFilter("data-tp-component",o=>{o&&o.forEach(r=>{let h=r.attr("data-tp-component");i[h]&&z(i[h],"parserFn")(r,h,t)})}),t.serializer.addAttributeFilter("data-mce-tp-component",o=>{o&&o.forEach(r=>{let h=r.attr("data-mce-tp-component");i[h]&&z(i[h],"serializerFn")(r,h,t)})}),t.setContent(t.getContent({source_view:!0}))},R=(t,a,n,e,l)=>{e?(!e.tp$CustomTags&&(e.tp$CustomTags=JSON.parse(JSON.stringify(k.customTags))),l?C(e.tp$CustomTags[t][a],n):e.tp$CustomTags[t][a]=n):l?C(k.customTags[t][a],n):k.customTags[t][a]=n},j={custom_elements:"",setCustomTags:R,createCustomTags:(t,a,n)=>{n?(!n.tp$CustomTags&&(n.tp$CustomTags=JSON.parse(JSON.stringify(k.customTags))),n.tp$CustomTags[t]=a):k.customTags[t]=a},setStyleSheetList:(t,a,n,e)=>{R("buttons","styleSheetList",{[a]:{"tp-buttons":A("tp-buttons",n),"tp-buttons:hover":A("tp-buttons:hover",n),"tp-buttons::before":A("tp-buttons::before",n),"tp-buttons::after":A("tp-buttons::after",n)}},e,!0)},createHtmlPanel:mt};var q={name:"tabs",styleSheet:{selector:"default",styleSheetList:{default:{"tp-tabs":"","tp-tabs_top":"","tp-tabs_label.checked":" ","tp-tabs_main":" ","tp-tab_main.checked":" "}}},styleSheetLoadList:{},styleFn:()=>{},state:{count:0},tpComponentDeleteFn:function(){console.log(this)},tpComponentMonitorCmd:()=>{},tpComponentCmdFn:{tabAdd:(t,a)=>{let n=document.createElement("div");n.setAttribute("contenteditable",!1),n.setAttribute("class","tp-partition tp-tabs_label"),n.setAttribute("data-idx",t.tp$state.count);let e=document.createElement("p");e.setAttribute("class","tp-component_inline"),e.setAttribute("data-idx",t.tp$state.count),e.setAttribute("contenteditable",!0),e.innerHTML=a.title,n.appendChild(e),t.insertBefore(n,t.lastChild);let l=document.createElement("div");l.setAttribute("class","tp-tab_main"),l.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),l.innerHTML=a.content,t.lastChild.appendChild(l),t.tp$state.count++},tabDelete:(t,a)=>{t.children[--t.tp$state.count].remove(),t.lastChild.lastChild.remove()},delete:(t,a)=>{t.remove()},getStyle:(t,a)=>{},setStyle:(t,a)=>{console.log(t.querySelector(".tp-tabs_top")),t.setAttribute("data-top-style",a["tp-tabs_top"]),t.shadowRoot.querySelector(".tp-tabs_top").setAttribute("style",a["tp-tabs_top"])}},template:{innerHTML:`
<div class="tp-tabs">
  <div class="tp-tabs_top" id="headerID">
      <slot></slot>
  </div>
  <div class="tp-tabs_main">
      <slot name="content" ></slot>
  </div>
</div>
    `},connectedCallback:(t,a)=>{let n=e=>e.className&&e.className.indexOf("tp-partition tp-tabs_label")!==-1||e.parentNode&&(e.parentNode.className&&e.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1||e.parentNode.parentNode&&e.parentNode.parentNode.className&&e.parentNode.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1);t.getElementById("headerID").addEventListener("click",function(e){if(n(e.target)){let l=e.target.getAttribute("data-idx")||e.target.parentNode.getAttribute("data-idx")||"0",s=a.querySelectorAll("div.tp-partition.tp-tabs_label"),i=a.querySelector("div.tp-partition.tp-tabs_label.checked");i&&i.setAttribute("class","tp-partition tp-tabs_label");let o=s[l];o&&o.setAttribute("class","tp-partition tp-tabs_label checked");let r=a.querySelectorAll("div.tp-tab_main"),h=a.querySelector("div.tp-tab_main[contenteditable=true]");h&&(h.setAttribute("contenteditable",!1)||(h.style.maxHeight="0px"));let w=r[l];w&&(w.setAttribute("contenteditable",!0)||(w.style.maxHeight="10000px"))}})},isContentEditable:!0,contentEditableFn:(t,a,n)=>{if(t.lastChild&&t.lastChild.className==="tp-"+n+"_main"){const e=document.createElement("div");for(e.setAttribute("contenteditable",!1),e.setAttribute("class","tp-partition tp-tabs_main"),e.setAttribute("slot","content"),t.lastChild.firstChild&&(t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 10000px; transition: all 0s"),a&&t.lastChild.firstChild.setAttribute("contenteditable",!0),e.setAttribute("style",t.lastChild.getAttribute("style")),e.appendChild(t.lastChild.firstChild));t.lastChild.firstChild;)t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),e.appendChild(t.lastChild.firstChild);t.removeChild(t.lastChild),t.appendChild(e)}},isHeaderEditable:!0,headerEditableFn:(t,a,n)=>{let e=t.children.length;t.getAttribute("data-id"),t.shadowRoot.querySelector("#headerID.tp-tabs_top").setAttribute("style",t.getAttribute("data-top-style")?t.getAttribute("data-top-style"):"");for(let l=e-2;l>=0;l--)t.tp$state.count++,t.children[l].setAttribute("contenteditable",!1),t.children[l].setAttribute("class","tp-partition tp-"+n+"_label"+(l===0?" checked":"")),t.children[l].setAttribute("data-idx",l),t.children[l].firstChild.setAttribute("class","tp-component_inline"),t.children[l].firstChild.setAttribute("data-idx",l),a&&t.children[l].firstChild.setAttribute("contenteditable",!0)},parserFn:(t,a)=>{for(t.attr({"data-tp-component":null,"data-mce-tp-component":a,"data-top-style":t.firstChild.attr("style")});t.firstChild.name==="input";)t.firstChild.remove();let n=t.firstChild.firstChild;for(;n&&n.name==="label";){let l=n.next,s=new m("div",1);n.name="p",n.wrap(s),n=l}let e=t.lastChild.firstChild;for(;e&&e.name==="label";){let l=e.next.next;e.remove(),e=l}t.firstChild.unwrap(),t.type=1,t.name="tp-"+a},serializerFn:(t,a)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":a,contenteditable:null,class:"tp-"+a});let n=new m("div",1);n.attr("class","tp-tabs_top"),n.attr("style",t.attr("data-top-style")),t.attr("data-top-style",null);let e=t.firstChild,l=[];for(;e.attr("data-idx");){let o=e.next;e.firstChild.name="label",e.firstChild.attr({contenteditable:null,"data-idx":null,class:"tp-"+a+"_label",for:t.attr("data-id")+"tab"+e.attr("data-idx")}),l.push(f(e.firstChild)),n.append(e.firstChild),e.remove(),e=o}let s=t.lastChild.firstChild,i=0;for(;s&&s.attr("class")==="tp-tab_main";){let o=s.next,r=new m("input",1);r.shortEnded=!0,r.attr({id:t.attr("data-id")+"tab"+i,type:"radio",name:t.attr("data-id")}),i==0&&r.attr("checked",""),t.append(r),s.attr({contenteditable:null,style:null,class:"tp-tab_main tp-tab_main_"+i}),l[i]&&(t.lastChild.insert(_(l[i]),s,!0),i++),s=o}t.append(n),t.firstChild.attr({contenteditable:null,class:"tp-tabs_main"}),t.append(t.firstChild),t.type=1,t.name="div"}},W={name:"buttons",template:{innerHTML:`
<div class="tp-buttons">
<div class="tp-buttons_main">
    <slot></slot>
</div>
</div>
    `},styleSheetList:{default:{"tp-buttons":`

          display: inline-block;
          background: rgb(179, 70, 70);
          padding: 14px 25px;
          color: #333;
          border-radius: 8px;
          -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
          border: 1px solid transparent;
          box-sizing: border-box;
          word-wrap: break-word;
          cursor: pointer;
          text-decoration: none;`,"tp-buttons:hover":`
           color: rgb(179, 70, 70) ;
           background: transparent;
           border-color: rgb(179, 70, 70) ;
           `,"tp-buttons::before":" ","tp-buttons::after":" "}},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,a)=>{t.shadowRoot.children[1].textContent=T(a.editor.tp$CustomTags.buttons.styleSheetList[a.styleName],a.styleName).replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(::before)   {").replace(/.tp-buttons::after\s*\{/g,":host(::after)   {")}},contentEditableFn:(t,a,n,e)=>{if(t.firstChild&&t.firstChild.tagName==="A"){const l=document.createElement("p");l.setAttribute("contenteditable",!0),l.setAttribute("class","tp-component_inline"),t.firstChild.innerHTML="<span>"+t.firstChild.innerHTML+"</span>",t.firstChild.setAttribute("href","javascript:;"),l.appendChild(t.firstChild),t.appendChild(l)}},isHeaderEditable:!0,parserFn:(t,a,n)=>{t.attr({"data-tp-component":null});let e=t.attr("style"),l={},s="";s=x("margin",e),s&&(l.margin=s),s=x("padding",e),s&&(l.padding=s),s=x("border",e),s&&(l.border=s),s=x("background",e),s&&(l.background=s),s=x("border-radius",e),s&&(l["border-radius"]=s),s=x("border-width",e),s&&(l["border-width"]=s),s=x("border-style",e),s&&(l["border-style"]=s),s=x("border-color",e),s&&(l["border-color"]=s);let i=new m("div",1);i.type=1,i.attr({"data-mce-tp-component":a,"data-tp-style":t.attr("data-tp-style")||"default",style:$(l)||null,"data-id":t.attr("data-id")}),t.attr("class")&&i.attr("class",t.attr("class")),n.tp$Style.mapping||(n.tp$Style.mapping={}),n.tp$Style.mapping[""+t.attr("data-id")]?C(n.tp$Style.mapping[""+t.attr("data-id")],{styleTemplate:t.attr("data-tp-style")||"default"}):n.tp$Style.mapping[""+t.attr("data-id")]={styleCustomTags:"buttons",stylePath:"styleSheetList",styleTemplate:t.attr("data-tp-style")||"default",specialStyle:{}},t.attr("style",$(C(H(t.attr("style"))||{},{margin:"",padding:"",background:"","border-style":"","border-color":"","border-width":"","border-radius":"",border:""}))||null),t.attr("data-id",null),t.attr("data-mce-style",null),t.wrap(i),i.name="tp-"+a},serializerFn:(t,a)=>{let n=t;for(;n.name!=="a"&&n.firstChild.name!=="#text";)n=n.firstChild;t.attr({"data-mce-tp-component":null,"data-tp-component":a,contenteditable:null,"data-tp-style":t.attr("data-tp-style")||"default",href:n&&n.attr("href")?n.attr("href"):null,style:n&&n.attr("style")?$(C(H(t.attr("style"))||{},H(n.attr("style"))||{})):t.attr("style"),target:n&&n.attr("target")?n.attr("target"):null,rel:n&&n.attr("rel")?n.attr("rel"):null,title:n&&n.attr("title")?n.attr("title"):null}),t.firstChild.unwrap(),n&&n.unwrap(),t.name="a"}},U={name:"collapse",template:{innerHTML:`
<div class="tp-collapse">
<div class="header" id="headerID">
  <slot name="header"></slot>
</div>
<div class="tp-collapse_mainBox">
    <slot></slot>
</div>
</div>
    `},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,a)=>{let n=a.style,e=x("padding",n),l=x("border",n),s=x("border-width",n);V(a.editor,t,"tp-collapse_main",(e?"padding: "+e+"!important; ":"")+(l?"border: "+l+"!important;":"")+(s?"border-width: "+s+"!important;":""))}},contentEditableFn:(t,a,n,e)=>{const l=document.createElement("div");if(l.setAttribute("contenteditable",!1),l.setAttribute("class","tp-partition tp-collapse_main"),a&&t.lastChild.setAttribute("contenteditable",!0),t.lastChild.getAttribute("class")==="tp-collapse_main"){let s=t.lastChild.getAttribute("style"),i=x("padding",s),o=x("border",s),r=x("border-width",s);V(e,t,"tp-collapse_main",(i?"padding: "+i+"!important; ":"")+(o?"border: "+o+"!important;":"")+(r?"border-width: "+r+"!important;":""))}l.appendChild(t.lastChild),t.appendChild(l)},isHeaderEditable:!0,headerEditableFn:(t,a,n,e)=>{if(t.firstChild.contenteditable!=="true"){const l=document.createElement("div");for(a&&l.setAttribute("contenteditable",!0),l.setAttribute("slot","header"),l.setAttribute("class","tp-collapse_label"),l.setAttribute("style","min-height: 20px; "+t.getAttribute("data-top-style"));t.firstChild&&t.firstChild.className!=="tp-"+n+"_main";)l.appendChild(t.firstChild);t.insertBefore(l,t.firstChild)}},parserFn:(t,a)=>{t.attr({"data-tp-component":null,"data-mce-tp-component":a}),t.attr("data-id",t.firstChild.attr("id")),t.firstChild.remove(),t.lastChild.attr("class","tp-"+a+"_main"),t.type=1,t.name="tp-"+a},serializerFn:(t,a)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":a,contenteditable:null,class:"tp-"+a}),t.firstChild.type=1,t.firstChild.name="label",t.firstChild.attr({contenteditable:null,for:t.attr("data-id")});let n=t.lastChild.attr("style");t.lastChild.unwrap(),t.lastChild.attr({contenteditable:null,class:"tp-"+a+"_main",style:n});let e=new m("input",1);e.shortEnded=!0,e.attr({id:t.attr("data-id"),type:"checkbox"}),t.insert(e,t.firstChild,!0),t.attr("data-id",null),t.type=1,t.name="div"}};const J=t=>/select$/.test(t),G={forecolor:!0,backcolor:!0,tpLetterspacing:!0,tpIconlists:!0,tpColumns:!0,table:!0},E={title:{file:{zh_CN:"\u6587\u4EF6",en_US:"File"},edit:{zh_CN:"\u7F16\u8F91",en_US:"Edit"},view:{zh_CN:"\u67E5\u770B",en_US:"View"},insert:{zh_CN:"\u63D2\u5165",en_US:"Insert"},format:{zh_CN:"\u683C\u5F0F",en_US:"Format"},table:{zh_CN:"\u8868\u683C",en_US:"Table"},tools:{zh_CN:"\u5DE5\u5177",en_US:"Tools"},help:{zh_CN:"\u5E2E\u52A9",en_US:"Help"}},items:{code:"tools",spellchecker:"tools",spellcheckerlanguage:"tools",wordcount:"tools",image:"insert",link:"insert",media:"insert",hr:"insert",template:"insert",codesample:"insert",charmap:"insert",inserttable:"table",emoticons:"insert",pagebreak:"insert",nonbreaking:"insert",anchor:"insert",toc:"insert",insertdatetime:"insert",bold:"format",italic:"format",underline:"format",strikethrough:"format",blockquote:"format",subscript:"format",superscript:"format",removeformat:"format",formatselect:"format",fontselect:"format",fontsizes:"format",forecolor:"format",backcolor:"format",fontformats:"format",blockformats:"format",codeformat:"format",align:"format",table:"table",lineheight:"format",help:"help"}},X={file:!0,view:!0,edit:!0},Y=t=>{let a=[];return t.split("|").forEach(e=>{let l=e.split(" "),s=[];l.forEach(i=>{i&&s.push({isSelect:J(i),name:i}),i&&E.items[i]&&(X[E.items[i]]=!0)}),s.length>0&&a.push(s)}),a},xt=t=>{let a=[];return t.split("|").forEach(e=>{let l=e.split(" "),s=[];l.forEach(i=>{i&&s.push({isSelect:J(i),name:i})}),a.push(s)}),a},Z=()=>`.skt-tox-tinymce{

    border: 1px solid #ccc;
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    overflow: hidden;
    position: relative;
    visibility: inherit!important;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    vertical-align: initial;
    white-space: normal;
        height: 200px;
  }
  
  .skt-tox-editor-container{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    overflow: hidden;
  }
  .skt-tox-editor-header{
     box-shadow: none;
     transition: box-shadow .5s;
         z-index: 1;
  }
  .skt-tox-anchorbar{
    display: flex;
    flex: 0 0 auto;
     border-top: 1px solid #ccc;
  }
  .skt-tox-tinymce .skt-tox-statusbar{
    align-items: center;
    background-color: #fff;
    border-top: 1px solid #ccc;
    color: rgba(34,47,62,.7);
    display: flex;
    flex: 0 0 auto;
    font-size: 12px;
    font-weight: 400;
    height: 18px;
    overflow: hidden;
    padding: 0 8px;
    position: relative;
    text-transform: uppercase;
  
  }
  .skt-tox-tinymce .skt-tox-toolbar,.skt-tox-tinymce .skt-tox-menubar{
   background:url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23cccccc'/%3E%3C/svg%3E") left 0 top 0 #fff;
     background-color: #fff;
    display: flex;
    flex: 0 0 auto;
    flex-shrink: 0;
    flex-wrap: wrap;
    padding: 0 0;
   
  }
  .skt-tox-mbtn{
   align-items: center;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    box-shadow: none;
    color: #222f3e;
    display: flex;
    flex: 0 0 auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 34px;
    justify-content: center;
    margin: 2px 0 3px 0;
    outline: 0;
    overflow: hidden;
    padding: 0 4px;
    text-transform: none;
    width: auto;
  }
  .skt-tox-mbtn__select-label {
    cursor: default;
    font-weight: 400;
    margin: 0 4px;
  }
  .skt-tox-tbtn.skt-tox-split-button{
    border: 0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    width: 50px;
    margin: 2px 0 3px 0;
    overflow: hidden;
  }
  .skt-tox-split-button .skt-tox-tbtn__select-chevron{
    margin-left: 5px;
  
  }
  .skt-tox-toolbar__group{
    border-right:1px solid #ccc;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0;
    padding: 0 4px 0 4px;
  }
  .skt-tox-toolbar__group:last-child {
  border-right: 0px;
  }
  .skt-tox-sidebar-wrap-box{
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .skt-tox-sidebar-wrap-box p{
     height: 16px;
     width: calc(100% - 40px);
     margin: 5px 20px;
  }
  .skt-tox-sidebar-wrap-box p:first-child{
    width: calc(100% - 74px)!important;
    margin-top: 20px;
    margin-left: 54px!important;
  }
  
  .skt-tox-sidebar-wrap-box p:nth-child(3n+2){
    width: 90%;
    margin-right:8%;
  }
  .skt-tox-sidebar-wrap-box p:nth-child(3n+3){
    width: calc(100% - 74px);
    margin-left: 54px
  }
  .skt-tox-sidebar-wrap-box p:nth-child(3n+1){
    width: 75%;
    margin-right:8%;
  }
  .skt-tox-sidebar-wrap-box p:last-child{
    width: 65%!important;
    margin-left: 20px;
  }
  .skt-tox-tbtn{
    align-items: center;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    box-shadow: none;
    color: #222f3e;
    display: flex;
    flex: 0 0 auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    height: 34px;
    justify-content: center;
    margin: 2px 0 3px 0;
    outline: 0;
    overflow: hidden;
    padding: 0;
    text-transform: none;
    width: 34px;
  }
  .skt-tox-tbtn--select{
    margin: 2px 0 3px 0;
    padding: 0 4px;
    padding-right: 3px;
    width: auto;
  }
  .skt-tox-tbtn__select-label{ 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7em;
    font-weight: 400;
    margin: 0 4px;
  }
  .skt-tox-tbtn__select-chevron{
    align-items: center;
    display: flex;
    justify-content: center;
    width: 10px;
    height: 14px;
  }
  .skt-tox-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
  
  @-webkit-keyframes skeleton-ani {
  0% {
    left: -90%
  }
  
  to {
    left: 120%
  }
  }
  
  @keyframes skeleton-ani {
  0% {
    left: -90%
  }
  
  to {
    left: 120%
  }
  }
  .skt{
    display: none;
    width: 100%;
    top:0;
    position: absolute;
    z-index: 99;
    background: #fff;
  }
  .skt.skt-loading{
   display: block;
  }
  .skt-loading .skeleton {
  position: relative;
  overflow: hidden;
  border: none !important;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0) !important;
  background-image: none !important;
  pointer-events: none;
  }
  
  .skt-loading .skeleton:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: #ebf1f8;
  display: block
  }
  
  .skt-loading .skeleton:not(.not-round):after {
  border-radius: 4px
  }
  .skt-loading .tox-tbtn__select-chevron{
  display: inline-block;
  width: 8px;
  height: 18px;
  }
  .skt-loading .tox-icon { display: inline-block; width: 24px; height: 24px;}
  .skt-loading .skeleton:not(.not-before):before {
  position: absolute;
  top: 0;
  width: 30%;
  height: 100%;
  content: "";
  background: -webkit-gradient(linear, left top, right top, color-stop(0, hsla(0, 0%, 100%, 0)), color-stop(50%, hsla(0, 0%, 100%, .3)), to(hsla(0, 0%, 100%, 0)));
  background: -o-linear-gradient(left, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .3) 50%, hsla(0, 0%, 100%, 0) 100%);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .3) 50%, hsla(0, 0%, 100%, 0));
  -webkit-transform: skewX(-45deg);
  -ms-transform: skewX(-45deg);
  transform: skewX(-45deg);
  z-index: 99;
  -webkit-animation: skeleton-ani 1s ease infinite;
  animation: skeleton-ani 1s ease infinite;
  display: block
  }
  .skt-loading .skeleton.badge:after {
  background-color: #f8fafc
  }`,vt=t=>{if(!document.querySelector("style#skt-tox-style")){let r=document.createElement("style");r.type="text/css",r.id="skt-tox-style";try{r.appendChild(document.createTextNode(Z()))}catch{r.styleSheet.cssText=Z()}document.getElementsByTagName("head")[0].appendChild(r)}let a=[];typeof t.toolbar=="string"?a=Y(t.toolbar):Array.isArray(t.toolbar)&&t.toolbar.forEach(r=>{a.push(...Y(r))});let n=[];if(t.menubar!==!1)if(typeof t.menubar=="string")n=xt(t.menubar);else for(let r in E.title)X[r]&&n.push(E.title[r][t.language||"en_US"]);let e=t.min_height||t.height||200,l=[],s=e-150;for(let r=0;r<s;r+=50)l.push("1");let i=t.selector?document.querySelector(t.selector).parentNode:t.target.parentNode,o=document.createElement("div");return o.className="skt skt-loading",o.innerHTML=Ct({selector:t.selector,toolbar:a,menubar:n,branding:t.branding!==!1,placeholderList:l,height:e}),i.style.position="relative",i.style.minHeight=e+"px",i.append(o),o},kt=t=>{let a="";return t.forEach(n=>{a+='<button  class="skt-tox-mbtn skt-tox-mbtn--select"><span class="skt-tox-mbtn__select-label skeleton">'+n+`</span></button>
`}),a},wt=t=>{let a="";return t.forEach(n=>{a+=`<div class="skt-tox-toolbar__group">
`,n.forEach(e=>{a+='<button class="skt-tox-tbtn '+(e.isSelect?" skt-tox-tbtn--select":"")+(G[e.name]?" skt-tox-split-button":"")+'"><span class="'+(e.isSelect?"skt-tox-tbtn__select-label skt-tox-tbtn--select":"skt-tox-icon tox-tbtn__icon-wrap")+' skeleton">'+e.name+"</span>"+(e.isSelect||G[e.name]?'<div class="skt-tox-tbtn__select-chevron skeleton"></div>':"")+`</button>
`}),a+=`</div>
`}),a},_t=t=>{let a="";return t.forEach(n=>{a+=`<p class="skeleton"></p>
`}),a},Ct=t=>`
<div class="skt-tox-tinymce"  style="height: ${t.height}px" >
<div class="skt-tox-editor-container">
    <div class="skt-tox-editor-header">
<div  class="skt-tox-menubar">
     ${kt(t.menubar)} 
</div>
    <div class="skt-tox-toolbar-overlord">
    <div class="skt-tox-toolbar">
     ${wt(t.toolbar)}
    </div>
    </div>
    <div class="skt-tox-anchorbar"></div>
</div>
<div class="skt-tox-sidebar-wrap-box">

    <p  class="skeleton"> &nbsp; </p>
      ${_t(t.placeholderList)}
    <p class="skeleton"> </p>
</div>
</div> 
<div class="skt-tox-statusbar">
 <div class="skeleton">
      PP
  </div> 
  ${t.branding?'<span class="skeleton" style="margin-left: calc(100% - 120px)">Powered by Five </span>':""}
 </div>
</div>`;k.customTags[q.name]=q,k.customTags[W.name]=W,k.customTags[U.name]=U;let St=(t,a,n)=>{let e=`
`;for(let l=0;l<n;l++)e+=`.tp-${t} > input:nth-child(${l+1}):checked ~ .tp-${t}_top > .tp-${t}_label:nth-child(${l+1}){${a}}

               .tp-${t} > input:nth-child(${l+1}):checked ~ .tp-${t}_main  .tp-tab_main_${l}{ max-height: 10000px; }

            `;return e},Lt=(t,a)=>{let n="";return M(t.specialStyle).forEach(e=>{n+=t.specialStyle[e]?`
 `+a[e]+" { "+t.specialStyle[e]+"} ":""}),n},zt=t=>{t.tp$OutputStyle="";let a=2,n="",e="",l="",s="",i={},o={},r={};t.tp$Style&&t.tp$Style.mapping&&(!t.tp$CustomTags&&(t.tp$CustomTags=JSON.parse(JSON.stringify(k.customTags))),M(t.tp$Style.mapping).forEach(L=>{let d=t.tp$Style.mapping[L];d.styleCustomTags==="tabs"&&(i[d.styleTemplate]||(n=t.tp$CustomTags[d.styleCustomTags][d.stylePath][d.styleTemplate],i[d.styleTemplate]=!0),a<d.quantity&&(a=d.quantity)),d.styleCustomTags==="collapse"&&(o[d.styleTemplate]||(l+=t.tp$CustomTags[d.styleCustomTags][d.stylePath][d.styleTemplate],o[d.styleTemplate]=!0),s+=d.specialStyle?Lt(d,{"tp-collapse_main":'.tp-collapse > input[id="'+L+'"]:checked + .tp-collapse_label + .tp-collapse_main'}):""),d.styleCustomTags==="buttons"&&!r[d.styleTemplate]&&(e+=T(t.tp$CustomTags[d.styleCustomTags][d.stylePath][d.styleTemplate],d.styleTemplate),r[d.styleTemplate]=!0)}));let h="",w="";n&&(n=n.replace(/.tp-tabs\s*{/g,"div.tp-tabs[data-id] {").replace(/\n.tp-tabs\s/g,`
.tp-tabs[data-id] `)+`.tp-tabs[data-id] > input { display: none;} 
 .tp-tabs .tp-tabs_main .tp-tab_main { overflow: hidden;max-height: 0px;}`,h=n.match(/.tp-tabs_label.checked\s*{\n([\s\S]+)\n}/)[1],w=h?St("tabs",h,a):""),t.tp$OutputStyle=(e?`@font-face {
  font-family: "iconfont"; /* Project id 2627438 */
  src: url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff2?t=1630480852428') format('woff2'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff?t=1630480852428') format('woff'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.ttf?t=1630480852428') format('truetype');
}`:"")+e+l+s+n+w};const $t={iframeLayout:`
   <style>
   .iframeLayout .iframeLayout_margin {
      border: 1px dashed #333;
      background: #F9CC9D;
      position: relative;
      margin: 0;
      padding: 0;
      font-size: 0;
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_border {
      margin: 39px;
      background: #FDDD9B;
      border: 1px solid #333;
      position: relative;
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding {
      margin: 39px;
      background: #c3d08b;
      border: 1px dashed #333;
      position: relative;
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding .iframeLayout_size{
      min-height: 40px;
      position: relative;
      text-align: center;
      line-height: 40px;
      margin: 39px;
      border: 1px solid #333;
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding .iframeLayout_size span {
      font-size: 20px;
      color: #666;
      display: inline-block;
      vertical-align: middle;
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_border .iframeLayout_padding .iframeLayout_size input {
      position: relative;
      display: inline-block;
      vertical-align: middle;
    }
    .iframeLayout .iframeLayout_margin label {
      font-size: 20px;
      color: #000;
      position: absolute;
      top: 2px;
      left: 2px;
    }
    .iframeLayout .iframeLayout_margin input {
      position: absolute;
      width: 31px;
      height: 31px;
      display: block;
      margin: 0 auto;
      text-align: center;
      line-height: 31px;
      font-size: 12px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 3px;
      overflow: hidden;
      padding: 1px;
    }
    .iframeLayout .iframeLayout_margin input:focus {
      outline: none;
      border-color: #1f81c3;
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_top {
      top: 2px;
      left: 50%;
      transform: translateX(-50%);
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_right {
      top: 50%;
      right: 2px;
      transform: translateY(-50%);
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_bottom {
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
    }
    .iframeLayout .iframeLayout_margin .iframeLayout_left {
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
    }
   
   </style>
  <div class="iframeLayout">
  <div class="iframeLayout_margin">
       <label for=""> margin </label>
          <input type="text" class="margin iframeLayout_top" placeholder="-" id="ifrLayoutMagrginTop" >
          <input type="text" class="margin iframeLayout_right" placeholder="-" id="ifrLayoutMagrginRight" >
          <input type="text" class="margin iframeLayout_bottom" placeholder="-" id="ifrLayoutMagrginBottom" >
          <input type="text" class="margin iframeLayout_left" placeholder="-" id="ifrLayoutMagrginLeft" >
       <div class="iframeLayout_border">
         <label for=""> border </label>
          <input type="text" class="border iframeLayout_top" placeholder="-" id="ifrLayoutBorderTop" >
          <input type="text" class="border iframeLayout_right" placeholder="-" id="ifrLayoutBorderRight" >
          <input type="text" class="border iframeLayout_bottom" placeholder="-" id="ifrLayoutBorderBottom" >
          <input type="text" class="border iframeLayout_left" placeholder="-" id="ifrLayoutBorderLeft" >
     
         <div class="iframeLayout_padding">
           <label for=""> padding </label>
              <input type="text" class="padding iframeLayout_top" placeholder="-" id="ifrLayoutPaddingTop" >
              <input type="text" class="padding iframeLayout_right" placeholder="-" id="ifrLayoutPaddingRight" >
              <input type="text" class="padding iframeLayout_bottom" placeholder="-" id="ifrLayoutPaddingBottom" >
              <input type="text" class="padding iframeLayout_left" placeholder="-" id="ifrLayoutPaddingLeft" >
              <div class="iframeLayout_size">
                  <input type="text" class="size"  id="ifrLayoutWidth" >
                  <span>X</span>
                  <input type="text" class="size"  id="ifrLayoutHeight" >
              </div>
         </div>
      </div>
  </div>
</div>
  <script>
   console.log(this)
  
  <\/script>
  
  `},At=t=>$t[t];p.Editor.prototype.tp$={Components:j,Node:{getDimension:it},Tools:{getFormatStyle:$,autoToPX:ct,getCurrentValue:pt,namingFormat:{toHump:I,toLine:ot,toHyphen:rt},selection:{cell:function(t){let a=t,n=t,e=function(){return a};var l=function(){return n};return{get:e,set:function(i,o){a=i,o&&(n=o)},getAction:l}}}},PanelComponents:{getComponents:At}},p.init=function(t){return function(){let a="";arguments[0].skeletonScreen&&(a=vt(arguments[0])),arguments[0].custom_elements=(arguments[0].custom_elements?arguments[0].custom_elements+",":"")+"tp-collapse,tp-tabs,tp-buttons";const n=t.apply(this,arguments);return n.then(e=>{let l=()=>{var s;if(a){let i=a.parentNode;a.remove(),(s=i.querySelector(".skt.skt-loading"))===null||s===void 0||s.remove()}yt(e[0]),e[0].getTpContent=i=>e[0].getTpStyle(i)+e[0].getContent(i),e[0].on("BeforeGetContent",i=>{i.source_view||zt(i.target)})};e[0]?l():dt(s=>{e[0]&&(s(),l())},20)}),n}}(p.init);let K={default:{icons:{"tp-tab-add":'<svg t="1629385862141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7236" width="24" height="24"><path d="M714.27370623 141.21142578h67.41385716c27.91277775 0 51.74690871 9.88762917 71.49250467 29.66288824C872.91577659 190.6396849 882.78363013 214.42932121 882.78363013 242.33221152V309.79550667c0 9.2696528-3.26291773 17.20447542-9.88762917 23.78963631-6.56044191 6.59010498-14.51504016 9.88762917-23.81435532 9.88762989-9.29931517 0-17.27368832-3.29752417-23.83413096-9.88762989-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78963631V242.3371556c0-9.26470871-3.26291773-17.19458725-9.88762918-23.78469295-6.56538599-6.59010498-14.51504016-9.88762917-23.83907504-9.88762918H714.19954925c-9.29931517 0-17.24402596-3.29752417-23.82424278-9.88762915s-9.87774172-14.51998353-9.87774171-23.88851305c0-9.2696528 3.29752417-17.20447542 9.87774171-23.78963633 6.58021754-6.59010498 14.52492761-9.88762917 23.82918686-9.88762916h0.0692129zM444.60344607 141.21142578h134.80793941c9.31414671 0 17.23413778 3.29752417 23.8687374 9.98650588 6.55055444 6.49122901 9.87774172 14.52492761 9.87774171 23.78963633 0 9.2696528-3.32718727 17.20447542-9.87774171 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29752417-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78963632 0-9.26470871 3.28269263-17.30335141 9.89751734-23.78469297C427.35942084 144.50894996 435.30413091 141.21142578 444.60344607 141.21142578z m404.47819957 269.60599063c9.29931517 0 17.25391343 3.39640089 23.81435532 9.88762917 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.88851303v134.80793942c0 9.26470871-3.26291773 17.19458725-9.88762917 23.78469223-6.56044191 6.59504907-14.51504016 9.88762917-23.81435532 9.88762916-9.29931517 0-17.27368832-3.29258081-23.83413096-9.88762916-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78469223V444.59355861c0-9.36852878 3.29258081-17.29840732 9.89751661-23.88851303 6.56044191-6.49122901 14.53481506-9.88762917 23.82918687-9.88762918z m0 269.60599063c9.29931517 0 17.25391343 3.29752417 23.81435532 9.88762989 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.8934564v67.34958763c0 27.90783367-9.86785426 51.79634669-29.60356207 71.57160502-19.74559598 19.6664949-43.5797262 29.55412407-71.49250466 29.55412407h-67.41385717c-9.32403415 0-17.25391343-3.29258081-23.85390586-9.88762916-6.56538599-6.59010498-9.86785426-14.51998353-9.86785426-23.78469223 0-9.37347288 3.30246827-17.30335141 9.86785426-23.89345641 6.59999243-6.59010498 14.53481506-9.88762917 23.85390586-9.8876299h67.41385717c9.29931517 0 17.25391343-3.29258081 23.80446786-9.88762916 6.63459962-6.59010498 9.89751734-14.51998353 9.89751734-23.78469223V714.10067325c0-9.2696528 3.30741236-17.19953134 9.89751663-23.78963632 6.59504907-6.59010498 14.53481506-9.88762917 23.8440184-9.88762989h-0.04943799zM242.37670615 141.21142578H309.79550667c9.30920334 0 17.21930624 3.29752417 23.82918686 9.98650588 6.58516089 6.49122901 9.8826858 14.52492761 9.8826858 23.78963633 0 9.2696528-3.29752417 17.20447542-9.87774172 23.78963632-6.61482398 6.59010498-14.52492761 9.88762917-23.83413094 9.88762916H242.38164951c-9.31414671 0-17.27368832 3.29752417-23.83413023 9.88762918-6.61482398 6.59010498-9.90246071 14.51998353-9.9024607 23.88851303V309.79550667c0 9.37347288-3.28269263 17.20447542-9.89751736 23.8934564-6.56044191 6.48628492-14.52492761 9.88762917-23.82424277 9.88762989-9.30920334 0-17.25391343-3.40134426-23.8242435-9.88762989-6.6098799-6.69392507-9.88762917-14.51998353-9.88762917-23.8934564V242.44097568C141.21142578 214.42932121 151.07928004 190.64957307 170.83476348 170.97319c19.74559598-19.77525907 43.56983876-29.66288824 71.48756058-29.66288823l0.05932545-0.09887599z m202.22673992 674.01497657h134.80793941c9.31414671 0 17.23413778 3.29752417 23.86873739 9.8876299 6.55055444 6.59010498 9.87774172 14.51998353 9.87774172 23.89345641 0 9.26470871-3.32718727 17.19458725-9.87774172 23.78469223-6.63459962 6.59504907-14.55459069 9.88762917-23.86873739 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29258081-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78469223 0-9.37347288 3.28269263-17.30335141 9.89751734-23.89345641 6.58021754-6.59010498 14.52492761-9.88762917 23.82424277-9.8876299z m-269.61587808-404.40404185c9.29931517 0 17.23908188 3.3914568 23.79952377 9.88268508 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.88851304v134.8079394c0 9.26470871-3.26291773 17.19458725-9.90246072 23.78469224-6.56044191 6.59504907-14.50020861 9.88762917-23.79952377 9.88762916-9.31414671 0-17.27368832-3.29258081-23.83413096-9.88762916C144.53861305 596.59608526 141.25097633 588.66620673 141.25097633 579.40149802V444.59355861c0-9.36852878 3.28763673-17.29840732 9.9024607-23.88851303 6.56044191-6.49122901 14.51998353-9.88762917 23.82918686-9.88762918z m0 269.60104654c9.29931517 0 17.23908188 3.29752417 23.79952377 9.88762989 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.8934564v67.34958763c0 9.36852878 3.29258081 17.30335141 9.89751734 23.88851231 6.59010498 6.59010498 14.53481506 9.88762917 23.83413024 9.88762917h67.41385715c9.31414671 0 17.25391343 3.29752417 23.85390586 9.88762989 6.56538599 6.59010498 9.87774172 14.51998353 9.87774243 23.78963633 0 9.36852878-3.31235572 17.19458725-9.87774243 23.8885123-6.59999243 6.49122901-14.53975915 9.88762917-23.85390587 9.88762917H242.42120006c-27.91277775 0-51.72713307-9.88762917-71.49250396-29.66288823-19.75548343-19.77031497-29.63322515-43.55500721-29.63322515-71.46284086V714.19954925c0-9.2696528 3.28269263-17.20447542 9.89751662-23.78963633 6.59010498-6.59010498 14.53481506-9.88762917 23.83413095-9.88762916l-0.03955053-0.09887672z m337.02973524-336.95557825c9.31414671 0 17.23413778 3.29752417 23.8687374 9.88762917 6.55055444 6.59010498 9.86291017 14.51998353 9.86291017 23.78963632v101.12572983h101.13067391c9.29931517 0 17.22919442 3.29752417 23.82918687 9.88762917 6.56538599 6.59010498 9.87279762 14.51998353 9.87279762 23.78963632 0 9.36852878-3.30741236 17.30335141-9.86785427 23.88851304-6.60493653 6.59010498-14.53481506 9.88762917-23.83413022 9.88762916H545.7489508v101.12572983c0 9.2696528-3.31235572 17.20447542-9.86291017 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762917-9.29931517 0-17.22919442-3.29752417-23.82424278-9.88762917-6.59010498-6.59010498-9.87774172-14.51998353-9.87774171-23.78963632V545.72423181H377.18958892c-9.30425926 0-17.22425033-3.29752417-23.85390588-9.88762918-6.56538599-6.59010498-9.87774172-14.51998353-9.87774171-23.88851303 0-9.2696528 3.31235572-17.20447542 9.87774171-23.78963632 6.62965553-6.59010498 14.5496466-9.88762917 23.85390588-9.88762917h101.12572982V377.14509429c0-9.2696528 3.28763673-17.20447542 9.8777417-23.78963633 6.59504907-6.59010498 14.52492761-9.88762917 23.82918688-9.88762918z" p-id="7237"></path></svg>',"tp-tab-delete":'<svg t="1629436983964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="20" height="20"><path d="M950.857143 0H73.142857C31.695238 0 0 31.695238 0 73.142857v877.714286c0 41.447619 31.695238 73.142857 73.142857 73.142857h877.714286c41.447619 0 73.142857-31.695238 73.142857-73.142857V73.142857c0-41.447619-31.695238-73.142857-73.142857-73.142857z m-24.380953 926.47619H97.52381V97.52381h828.95238v828.95238z"  p-id="17121"></path><path d="M316.952381 560.761905h390.095238c26.819048 0 48.761905-21.942857 48.761905-48.761905s-21.942857-48.761905-48.761905-48.761905H316.952381c-26.819048 0-48.761905 21.942857-48.761905 48.761905s21.942857 48.761905 48.761905 48.761905z" p-id="17122"></path></svg>',tpButtons:'<svg t="1630068696978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21708" width="28" height="28"><path d="M800 256h-64a32 32 0 0 0-31.84-32H159.84C142.4 224 128 238.432 128 256.224v415.552A32 32 0 0 0 159.84 704H160v64H128c-35.328 0-64-28.48-64-63.904V223.904C64 188.608 92.864 160 128 160h608c35.328 0 64 28.48 64 63.904V256zM192 351.84A64 64 0 0 1 256.16 288h639.68A64 64 0 0 1 960 351.84v448.32A64 64 0 0 1 895.84 864H256.16A64 64 0 0 1 192 800.16v-448.32z m64 32.384v383.552A31.968 31.968 0 0 0 287.744 800h576.512c17.184 0 31.744-14.4 31.744-32.224V384.224A31.968 31.968 0 0 0 864.256 352H287.744C270.56 352 256 366.4 256 384.224z" p-id="21709"></path><path  transform="scale(0.45) translate(280, 780)" d="M393.944329 226.04293h185.769284c115.432212 0 203.353552 33.325024 203.353552 137.979782 0 51.618335-28.361723 104.796566-76.576651 121.388173v3.828832c60.694087 14.180861 105.3638 56.723446 105.3638 132.732863 0 113.446891-94.019111 165.348844-217.676222 165.348844H393.944329zM571.488713 453.787564c70.904307 0 102.385819-28.361723 102.38582-73.59867 0-49.349398-33.466833-69.060795-100.967733-69.060795h-66.650049V453.787564z m12.904584 246.463371c76.576651 0 118.268384-27.227254 118.268384-85.085168 0-54.596316-40.982689-77.427503-118.268384-77.427504H506.256751v163.079906zM908.284171 638.138762V450.525966h-59.985043v-82.674422l65.231962-5.246919 12.904584-113.446891h93.310068v113.446891h104.796565v87.921341h-104.796565V638.138762c0 48.498546 19.711397 70.904307 57.716105 70.904307a124.366154 124.366154 0 0 0 41.691733-9.21756l18.151502 81.256336a276.101371 276.101371 0 0 1-89.481235 15.882564c-100.825924 0.99266-139.539676-62.679407-139.539676-158.825647zM1210.903753 362.604625h91.04113l7.657665 56.014403h2.977981c37.153857-36.303005 80.405484-66.650048 138.12159-66.650049 91.750173 0 131.172968 63.672068 131.172968 170.170337v265.182108h-111.461571v-251.001247c0-65.231962-18.151503-88.772192-59.985043-88.772192-34.884919 0-56.723446 16.591608-88.772193 47.789503v291.983936h-110.752527z"></path></svg>',tpIconlists:'<svg t="1630921705647" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8438" width="20" height="20"><path d="M944.384 591.36 375.36 591.36c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 432.512 1024.064 468.096 1024.064 511.936 1024.064 555.776 988.416 591.36 944.384 591.36L944.384 591.36zM944.384 273.664 375.36 273.664c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 114.816 1024.064 150.336 1024.064 194.24 1024.064 238.08 988.416 273.664 944.384 273.664L944.384 273.664zM166.464 861.376l12.032 60.416c0.064 0.576 0.128 1.344 0.128 2.432 0 1.728-0.384 3.136-1.28 4.288-0.896 1.152-2.176 1.792-3.968 1.792-1.664 0-3.392-0.448-5.248-1.408l-58.752-27.904-57.984 29.248c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.624-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672-47.936-42.304C1.216 818.24 0.064 816.384 0.064 814.656c-0.064-2.944 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424c1.6-3.328 3.712-4.992 6.272-5.056 2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.704 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 861.376 166.464 861.376zM166.464 532.352l12.032 60.416C178.56 593.28 178.624 594.112 178.624 595.2c0 1.728-0.384 3.136-1.28 4.288C176.448 600.64 175.104 601.28 173.376 601.28c-1.664 0-3.392-0.448-5.248-1.408L109.44 572.032 51.456 601.28C49.6 602.24 47.872 602.752 46.272 602.752c-1.856 0-3.2-0.512-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.448 0.064-1.28 0.256-2.432l10.368-60.672L3.392 491.392C1.216 489.216 0.064 487.296 0.064 485.632c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 411.584 104.576 409.92 107.136 409.856c2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 532.352 166.464 532.352zM166.464 214.656l12.032 60.416C178.56 275.584 178.624 276.416 178.624 277.44c0 1.664-0.384 3.136-1.28 4.288C176.448 282.944 175.104 283.584 173.376 283.584c-1.664 0-3.392-0.448-5.248-1.408L109.44 254.336 51.456 283.584c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672L3.392 173.696C1.216 171.52 0.064 169.6 0.064 167.872c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 93.888 104.576 92.224 107.136 92.16c2.624 0 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 214.656 166.464 214.656zM375.36 761.536l569.088 0c43.968 0 79.68 35.584 79.68 79.424 0 43.84-35.648 79.424-79.68 79.424L375.36 920.384c-43.968 0-79.68-35.584-79.68-79.424C295.68 797.12 331.328 761.536 375.36 761.536L375.36 761.536zM375.36 761.536" p-id="8439"></path></svg>',"list-bull-tp-iconlists_tick":'<div style="width: 45px"><p style="height: 20px"><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span><p  style="height: 20px" ><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span></p></div>',tpParagraph:'<svg t="1631187903361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1637" width="24" height="24"><path d="M122.368 165.888h778.24c-9.216 0-16.384-7.168-16.384-16.384v713.728c0-9.216 7.168-16.384 16.384-16.384h-778.24c9.216 0 16.384 7.168 16.384 16.384V150.016c0 8.192-6.656 15.872-16.384 15.872z m-32.768 684.544c0 26.112 20.992 47.104 47.104 47.104h750.08c26.112 0 47.104-20.992 47.104-47.104V162.304c0-26.112-20.992-47.104-47.104-47.104H136.704c-26.112 0-47.104 20.992-47.104 47.104v688.128z" p-id="1638"></path><path d="M597.504 300.544h230.912v49.152h-230.912zM596.992 437.76h230.912v49.152h-230.912zM210.432 574.976h617.984v49.152H210.432zM210.432 712.192h617.984v49.152H210.432zM246.784 296.448h88.064V501.76h-29.184v29.184h117.248V501.76h-29.696V296.448H481.28v29.184h29.184V238.08H217.6v87.552h29.184z" p-id="1639"></path></svg>',tpColumns:'<svg t="1631064221790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26578" width="20" height="20"><path d="M416 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704zM896 64H608c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H640c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704z"></path></svg>',tpLetterspacing:'<svg t="1610616201691" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969" width="24" height="24"><path d="M682.666667 704l128 106.666667-128 106.666666v-85.333333H341.333333v85.333333L213.333333 810.666667l128-106.666667v85.333333h341.333334v-85.333333zM170.666667 170.666667v682.666666H85.333333V170.666667h85.333334z m768 0v682.666666h-85.333334V170.666667h85.333334z m-394.666667 0l202.666667 469.333333h-89.6l-38.4-93.866667h-213.333334L366.933333 640H277.333333l202.666667-469.333333h64zM512 255.146667L432.213333 469.333333h159.573334L512 255.146667z" p-id="970" fill="#222f3e"></path></svg>',tpIndent2em:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>',tpIconfont:'<svg t="1631797032825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16487" width="30" height="30"><path d="M805.096727 186.810182H218.903273c-17.687273 0-32.116364 14.405818-32.116364 32.116363v586.170182c0 17.687273 14.429091 32.116364 32.116364 32.116364h586.193454c17.687273 0 32.116364-14.429091 32.116364-32.116364V218.903273c0-17.687273-14.429091-32.116364-32.116364-32.116364z m0-46.545455a78.685091 78.685091 0 0 1 78.661818 78.661818v586.170182a78.685091 78.685091 0 0 1-78.661818 78.661818H218.903273a78.685091 78.685091 0 0 1-78.661818-78.661818V218.903273a78.685091 78.685091 0 0 1 78.661818-78.661818h586.193454z"  p-id="16488"></path><path d="M581.818182 465.454545h162.909091v-162.90909h-162.909091v162.90909z m-23.272727-186.181818h209.454545v209.454546h-209.454545v-209.454546zM372.363636 744.727273c51.386182 0 93.090909-41.751273 93.090909-93.090909 0-51.386182-41.751273-93.090909-93.090909-93.090909-51.386182 0-93.090909 41.751273-93.090909 93.090909 0 51.386182 41.751273 93.090909 93.090909 93.090909z m0 23.272727c-64.116364 0-116.363636-52.037818-116.363636-116.363636 0-64.116364 52.037818-116.363636 116.363636-116.363637 64.116364 0 116.363636 52.037818 116.363637 116.363637 0 64.116364-52.037818 116.363636-116.363637 116.363636zM736.907636 721.454545l-80.663272-139.636363-80.663273 139.636363h161.326545zM535.272727 744.727273l120.971637-209.454546 120.971636 209.454546H535.272727zM417.093818 393.774545l44.776727-43.52-61.812363-8.96L372.363636 285.253818l-27.694545 56.040727-61.905455 8.983273 44.683637 43.52-10.519273 61.672727 55.226182-29.090909 55.458909 29.137455-10.519273-61.742546z m24.994909 8.145455l16.384 96.116364-86.318545-45.381819-86.109091 45.381819 16.407273-96.116364L232.727273 334.010182l96.488727-13.963637L372.363636 232.727273l43.147637 87.296 96.488727 13.963636-69.911273 67.956364z"  ></path></svg>',"tp-columns-default":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-2":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-3":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="40" height="40"><path d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path><path d="M938.666667 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z" p-id="27034"></path></svg>',tpLineHeight:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path></svg>'}}},Tt={zh_CN:{Collapse:"\u6298\u53E0\u9762\u677F","Write here":"\u5728\u8FD9\u91CC\u5199\u5165\u5185\u5BB9",Tabs:"\u6807\u7B7E\u9762\u677F","Panel head":"\u677F\u5934","Panel main":"\u677F\u4F53",Padding:"\u5185\u8FB9\u8DDD",Margin:"\u5916\u8FB9\u8DDD","border Radius":"\u8FB9\u6846\u5706\u89D2","Templates Style":"\u6A21\u677F\u6837\u5F0F",Buttons:"\u6309\u94AE\u7EC4\u4EF6","Icon List":"\u56FE\u6807\u5217\u8868","Icon Library":"\u56FE\u6807\u5E93","Horizontal columns":"\u6C34\u5E73\u5206\u5217","Style {0}":"\u6837\u5F0F {0}","Select tmplate":"\u9009\u62E9\u6A21\u677F\u6837\u5F0F","Letter spacing":"\u5B57\u6BCD\u95F4\u8DDD","Picture background fill":"\u56FE\u7247\u80CC\u666F\u586B\u5145","Spacing before paragraph":"\u6BB5\u524D\u8DDD","Spacing after paragraph":"\u6BB5\u540E\u8DDD","First line indent":"\u9996\u884C\u7F29\u8FDB","Hanging Indent":"\u60AC\u6302\u7F29\u8FDB","Indent mode":"\u60AC\u6302\u65B9\u5F0F","Iconfont Size":"\u56FE\u6807\u5927\u5C0F","Iconfont Color":"\u56FE\u6807\u989C\u8272","Line Height":"\u884C\u9AD8"}};p.addI18n=function(t){return function(){C(arguments[1],Tt[arguments[0]]),t.apply(this,arguments)}}(p.addI18n),p.IconManager.add=function(t){return function(){C(arguments[1].icons,K[arguments[0]]?K[arguments[0]].icons:{}),t.apply(this,arguments)}}(p.IconManager.add);let Et=function(t){return new Promise((a,n)=>{let e=t.match(/<(style)\s*>([\s\S]+)<\/\1>/);a(e&&e[2]?e[2].trim():"")})};p.Editor.prototype.setTpContent=function(t,a){return Et(t).then(n=>{}),this.setContent(t,a)};const F={global$1:tinymce.util.Tools,global$7:tinymce.html.Node,componentsApi:j,createSkt:ht};var Ft=function(t){try{g.exports=t}catch{}},Mt=function(t){window.tinymcePlugin=t,window.tinymce.tinymcePlugin=t,window.tinyMCE.tinymcePlugin=t};Mt(F),Ft(F),y.default=F,y.tinymcePlugin=F,Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(et,et.exports);const Ot={components:{TinymceVue:Ht},name:"vueDemo",data(){return{editor:"",content:"dsdsdsdsd",content2:`<div class="tp-tabs" style="width: 100%;" data-id="tp$tabsID1629518201020" data-tp-component="tabs"><input id="tp$tabsID1629518201020tab0" checked="" name="tp$tabsID1629518201020" type="radio" /><input id="tp$tabsID1629518201020tab1" name="tp$tabsID1629518201020" type="radio" />
<div class="tp-tabs_top"><label class="tp-tabs_label" for="tp$tabsID1629518201020tab0">Title {1}</label><label class="tp-tabs_label" for="tp$tabsID1629518201020tab1">Title {1}</label></div>
<div class="tp-tabs_main">
<div class="tp-tab_main">Write here 1</div>
<div class="tp-tab_main">Write here 2</div>
</div>
</div>
<p style="margin-top: 0px;">\u5076u\u90FD\u5F88\u7B26\u5408\u901F\u5EA6\u53D1\u8D27\u901F\u5EA6v\u73B0\u573Av\u73B0\u573A\u5C31\u4F1A\u53D1\u89C9\u5361\u6B7B\u7684\u56DE\u590D\u51E0\u4E4E\u90FD\u662F\u5F00\u53D1&nbsp;</p>
<p style="margin-top: 0px;">\u554A\u5B9E\u6253\u5B9E\u963F\u677E\u5927\u6328\u6253\u6328\u6253\u6328\u6253</p>
<a class="tp-buttons" style="margin: 0 auto;" href="http://127.0.0.1:3000/examples/" data-tp-style="style_2" data-id="tp-buttonsID1631194286931" data-tp-component="buttons">213dsfsdf132</a>
<ul class=" tp-iconlists tp-iconlists_tick" style="list-style-type: tp-iconlists_tick;">
<li><span style="font-size: 16px;">\u7684\u662F\u5426\u4F1A\u8212\u670D\u7B2C\u56DBu\u5BF9\u4ED8i\u6DD1\u5983\u4E3A\u66F4\u597D\u8BA4\u4E3A\u4EBAu\u7231\u4E0A\u5BF9\u554A\u56DE\u590D\u554A\u662F\u5426\u901F\u5EA6\u6CD5\u53CC\u65B9\u7684\u7684\u987A\u4E30\u5230\u4ED8\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5 \u7684\u62A4\u8EAB\u7B26i\u8FD8\u662F\u77ED\u53D1</span></li>
<li><span style="font-size: 16px;">\u58EB\u5927\u592B\u7CBE\u795E\u7684\u56DE\u590D\u54C8\u5E02\u5927\u5BB6\u53D1\u8D27\u7684\u5065\u8EAB\u623F</span></li>
</ul>
<p style="margin-top: 0px;">&rsquo;</p>
<table style="border-collapse: collapse; width: 99.8301%; height: 466px;" border="1">
<tbody>
<tr style="height: 22px;">
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">\u58EB\u5927\u592B\u6492\u65E6</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.0997%; height: 22px;">&nbsp;</td>
<td style="width: 13.1064%; height: 22px;">&nbsp;</td>
</tr>
<tr style="height: 422px;">
<td style="width: 13.0997%; height: 422px;">\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5</td>
<td style="width: 13.0997%; height: 422px;">\u5012\u662F\u53D1\u751F\u7684f</td>
<td style="width: 13.0997%; height: 422px;">\u901F\u5EA6\u6CD5\u7684\u6492\u6CD5</td>
<td style="width: 13.0997%; height: 422px;">\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u8212\u670D</td>
<td style="width: 13.0997%; height: 422px;">sd\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5</td>
<td style="width: 13.0997%; height: 422px;">\u5730\u65B9\u901F\u5EA6\u6CD5</td>
<td style="width: 13.1064%; height: 422px;">\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5</td>
</tr>
<tr style="height: 22px;">
<td style="width: 13.0997%; height: 22px;">\u5012\u662F\u8985\u7B2C\u4E09\u65B9\u901F\u5EA6\u6CD5</td>
<td style="width: 13.0997%; height: 22px;">\u7684\u6492\u6CD5\u7684\u6492\u6CD5</td>
<td style="width: 13.0997%; height: 22px;">\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5sd</td>
<td style="width: 13.0997%; height: 22px;">\u6492\u7684\u8985\u7B2C\u4E09\u65B9</td>
<td style="width: 13.0997%; height: 22px;">\u58EB\u5927\u592B\u6492\u65E6\u7684\u6492\u6CD5sdf</td>
<td style="width: 13.0997%; height: 22px;">\u7684\u6492\u6CD5\u901F\u5EA6\u6CD5</td>
<td style="width: 13.1064%; height: 22px;">\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5</td>
</tr>
</tbody>
</table>
<p style="margin-top: 0px;">\u7684\u53D1\u6325\u90B8</p>
<div class="tp-tabs" style="width: 99.50%; margin: 0 auto;" data-id="tp$tabsID1631194293489" data-tp-component="tabs"><input id="tp$tabsID1631194293489tab0" checked="" name="tp$tabsID1631194293489" type="radio" /><input id="tp$tabsID1631194293489tab1" name="tp$tabsID1631194293489" type="radio" />
<div class="tp-tabs_top"><label class="tp-tabs_label" for="tp$tabsID1631194293489tab0">\u6807\u9898 1</label><label class="tp-tabs_label" for="tp$tabsID1631194293489tab1">\u6807\u9898 2</label></div>
<div class="tp-tabs_main">
<div class="tp-tab_main">Write here 1</div>
<div class="tp-tab_main">Write here 2</div>
</div>
</div>
<p style="margin-top: 0px;">\u7684\u6492\u53D1\u5C04\u70B9\u6839\u6DF1\u8482\u56FA\u53D1\u58EB\u5927\u592B\u901F\u5EA6\u6CD5\u7684\u6492\u6CD5\u6492\u7684\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u901F\u5EA6\u6CD5\u7684\u6492\u6CD5</p>
<div class="tp-collapse" style="width: 99.50%; margin: 0 auto;" data-top-style="padding:1px 40px;" data-template="default" data-tp-component="collapse"><input id="tp$collapseID1631194297628" type="checkbox" /><label class="tp-collapse_label" style="min-height: 20px; padding: 1px 40px;" for="tp$collapseID1631194297628">
<p>\u6807\u9898</p>
</label>
<div class="tp-collapse_main">
<p>\u5728\u8FD9\u91CC\u5199\u5165\u5185\u5BB9</p>
</div>
</div>
<p style="margin-top: 0px;">\u554A\u58EB\u5927\u592B\u8270\u82E6\u54C8\u6570\u636E\u8FD4\u56DE\u7684\u662F\u4F0F\u864E\u7684\u723D\u80A4\u6C34u\u554A\u58EB\u5927\u592B\u5580\u4EC0\u80AF\u5FB7\u57FA\u54C8\u8428\u514B\u63A5\u7535\u8BDD\u770B\u6492\u53EF\u89C1\u5EA6\u8D3A\u5361\u6536\u5230\u5C3D\u5FEB\u54C8\u6492\u53EF\u89C1\u5EA6v\u5427\u554A\u5C31\u662F\u8D37\u8BB0\u5361\u548C\u6570\u636E\u5E93\u5927\u82CF\u6253 kjahscjkhaxjzcb\u963F\u65AF\u8482\u82AC\u62C9\u8428xcasdfdsfdsf</p>`,vueDemoOpt:"",vueDemoOpt2:{min_height:200,max_height:700,skeletonScreen:!0,extend_groups_addicon:{mygroupsicon:'<img  src="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" style="width:20px;" >'},extend_groups:{mygroups:{icon:"mygroupsicon",tooltip:"mygroupsicon",isSelect:!0,type:"togglemenuitem",items:[{type:"selectItem",text:"\u5B57\u4F53",value:"12px 14px 16px 18px 24px 36px 48px 56px 72px",default:"16px",styleSelector:"font-size",onAction:function(g,c){g.formatter.apply("fontsize",{value:c})}},{icon:"underline",text:"\u4E0B\u5212\u7EBF",value:"underline",styleSelector:"text-decoration"},{icon:"bold",text:"\u52A0\u7C97",value:"bold",selector:"strong"},{icon:"italic",text:"\u659C\u4F53",value:"italic",selector:"em"}]}},base_url:"/tinymce",plugins:"code  tpIndent2em tpLetterspacing autoresize  lists advlist tpImportword  tpCollapse tpTabs tpButtons tpIconlists  tpColumns tpParagraph tpIconfont preview",toolbar:["code formatselect fontselect  fontsizeselect  forecolor backcolor bold italic underline strikethrough tpIndent2em tpLetterspacing tpImportword  tpCollapse tpTabs tpButtons tpIconlists  tpColumns tpParagraph tpIconfont mygroups Preview"]}}},methods:{important(){tinyMCE.activeEditor.execCommand("mceImportword")},init(){let g=this;g.vueDemoOpt={toolbar_groups:{formatting:{text:"\u6587\u5B57\u683C\u5F0F",tooltip:"Formatting",items:"bold italic underline | superscript subscript"},alignment:{icon:"align-left",tooltip:"alignment",items:"alignleft aligncenter alignright alignjustify"}},extend_groups_addicon:{mygroupsicon:'<img  src="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" style="width:20px;" >'},extend_groups:{mygroups:{icon:"mygroupsicon",tooltip:"mygroupsicon",isSelect:!0,type:"togglemenuitem",items:[{type:"selectItem",text:"\u5B57\u4F53",value:"12px 14px 16px 18px 24px 36px 48px 56px 72px",default:"16px",styleSelector:"font-size",onAction:function(c,y){c.formatter.apply("fontsize",{value:y})}},{icon:"underline",text:"\u4E0B\u5212\u7EBF",value:"underline",styleSelector:"text-decoration"},{icon:"bold",text:"\u52A0\u7C97",value:"bold",selector:"strong"},{icon:"italic",text:"\u659C\u4F53",value:"italic",selector:"em"}]}},plugins:"print  preview extendgroups clearhtml searchreplace  insertdatetime autolink layout fullscreen line-height image imagetools media upfile link   autosave code  table  advlist lists checklist hr emoticons autosave bdmap indent2em   axupimgs  letterspacing  quickbars attachment wordcount template  autoresize importword searchreplace pagebreak pageembed  tpCollapse tpTabs tpButtons tpIconlists",toolbar:["code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough link alignment alignmentdrop undo redo  restoredraft layout upfile importword hr lineheight letterspacing line-height indent2em table bdmap image media attachment outdent indent blockquote subscript superscript  emoticons mygroups  preview searchreplace","pagebreak template pageembed bullist numlist checklist tpCollapse tpTabs tpButtons tpIconlists"],branding:!1,menubar:!1,language:"zh_CN",schema:"html5",min_height:400,max_height:700,template_replace_values:{username:"Jack Black",staffid:"991234",inboth_username:"Famous Person",inboth_staffid:"2213"},template_preview_replace_values:{preview_username:"Jack Black",preview_staffid:"991234",inboth_username:"Famous Person",inboth_staffid:"2213"},templates:[{title:"Date modified example",description:"Adds a timestamp indicating the last time the document modified.",content:'<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>'},{title:"Replace values example",description:"These values will be replaced when the template is inserted into the editor content.",content:"<p>Name: {$username}, StaffID: {$staffid}</p>"},{title:"Replace values preview example",description:"These values are replaced in the preview, but not when inserted into the editor content.",content:"<p>Name: {$preview_username}, StaffID: {$preview_staffid}</p>"},{title:"Replace values preview and content example",description:"These values are replaced in the preview, and in the content.",content:"<p>Name: {$inboth_username}, StaffID: {$inboth_staffid}</p>"}],table_default_attributes:{border:"1"},table_default_styles:{"border-collapse":"collapse",width:"100%"},table_header_type:"sectionCells",table_responsive_width:!0,skeletonScreen:!0,images_upload_handler:function(c,y,p,u){var m=c.blob(),b=new FileReader,v="";b.onload=function(_){v=_.target.result};var f=new FormData;f.append("file",m),g.$http({data:f,type:"GET",url:"/tinymce/api/file.json",header:{"Content-Type":"multipart/form-data"},onUploadProgress(_){u(_+"%")}}).then(function(_){_.code==200?y(v):p("\u4E0A\u4F20\u5931\u8D25:"+f.data)}).catch(function(_){p("\u4E0A\u4F20\u5931\u8D25:"+_.message)}),b.readAsDataURL(m)},file_picker_callback:function(c,y,p){var u=".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4",m=document.createElement("input");m.setAttribute("type","file"),m.setAttribute("accept",u),m.click(),m.onchange=function(){var b=this.files[0],v=new FormData;v.append("file",b),g.$http.get({data:v,url:"./api/file.json",header:{"Content-Type":"multipart/form-data"},xhr:g.xhrOnProgress(function(f){const _=(f.loaded/f.total*100|0)+"%";progressCallback(_)})}).then(f=>{c(f.data,{text:f.data})}).catch(function(f){failFun("\u4E0A\u4F20\u5931\u8D25:"+f.message)})}},file_callback:function(c,y){var p=new FormData;p.append("file",c),console.log(c),g.$http({data:p,type:"GET",url:"/tinymce/api/file.json",header:{"Content-Type":"multipart/form-data"}}).then(function(u){console.log(u),u.code==200&&y(u.data,{text:c.name})}).catch(function(u){})},tp_attachment_assets_path:"./plugins/attachment/icons",tp_attachment_icons_path:"https://unpkg.com/@npkg/tinymce-plugins/plugins/attachment/icons",tp_attachment_upload_handler:function(c,y,p,u){var m=new FormData;m.append("file",c),g.$http({data:m,type:"GET",url:"/tinymce/api/file.json",header:{"Content-Type":"multipart/form-data"},xhr:g.xhrOnProgress(function(b){const v=(b.loaded/b.total*100|0)+"%";u(v)})}).then(function(b){b.code==200?y(b.data):p("\u4E0A\u4F20\u5931\u8D25:"+b.data)}).catch(function(b){p("\u4E0A\u4F20\u5931\u8D25:"+b.message)})},attachment_max_size:5009715200}}},created(){this.init()}},Rt=g=>(Pt("data-v-d0fe8970"),g=g(),Vt(),g),jt={class:"vueDemo2"},qt=Rt(()=>P("h1",null,"\u5C55\u793A\u663E\u793A2",-1)),Wt=["innerHTML"];function Ut(g,c,y,p,u,m){const b=Q("tinymce-vue"),v=Q("PagesRouter");return Nt(),Bt("div",null,[P("div",jt,[tt(b,{modelValue:u.content2,"onUpdate:modelValue":c[0]||(c[0]=f=>u.content2=f),init:u.vueDemoOpt2},null,8,["modelValue","init"])]),qt,P("div",{innerHTML:u.content2},null,8,Wt),tt(v,{pagesName:"vuedemo"})])}var ee=Dt(Ot,[["render",Ut],["__scopeId","data-v-d0fe8970"]]);export{ee as default};
