import"./pinia.js";import{M as $t,H as Vt,v as Nt,z as it,a4 as Ot,ah as Rt,ai as jt,aj as Ut,O as ot,G as lt}from"./vue.js";/*! 
*  @plugin tinymce-plugin
*  @version 0.0.3-beta.22 (2022-8-5)
*  @description tinymce-plugin
*  @copyright (2022) Five(Li Hailong) . All rights reserved. https://github.com/tinymce-plugintinymce-plugin
*/(function(s){let d=tinymce,p=d.util.Tools,c=d.html.Node;d.html.Schema;let m=d.util.XHR,f=d.util.I18n,S=new d.html.Serializer().serialize,E=new d.html.DomParser().parse,h={};window.tp$State=h;let x=(t,a)=>{let n=a?a.match(new RegExp(t+':(.+?)"?[;}]')):"";return n?n[1]:!1};function B(t,a,n,e){t.tp$Style.mapping&&t.tp$Style.mapping[""+a.getAttribute("data-id")]&&(t.tp$Style.mapping[""+a.getAttribute("data-id")].specialStyle[""+n]=e)}let C={customTags:{}},A=Object.keys,w=function(){return w=Object.assign||function(a){for(var n,e=1,i=arguments.length;e<i;e++){n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(a[o]=n[o])}return a},w.apply(this,arguments)},z=Object.hasOwnProperty;var $=function(t){return t==null},L=function(t){return!$(t)};const D=t=>{if(typeof t=="object")return JSON.stringify(t).replace(/"([-A-Za-z]+?)":""[,}]/g,"").replace(/,/gi,";").replace(/{/gi,"").replace(/}/gi,"").replace(/"/gi,"")},y=t=>typeof t=="string"&&t!=="{}"?(t=JSON.stringify(t),JSON.parse(("{"+t.replace(/:/g,'": "').replace(/;\s*/g,'","')+"}").replace(/,\"\"\}$/,"}"))):t,v=(t,a)=>{const n=a.match(new RegExp(`.${t}\\s*\\{([\\s\\S]+)\\}`));return n&&n[1]?n[1].replace(/\}([\s\S]+)/,"").trim():""};var _=function(t,a){return z.call(t,a)},V=function(t,a,n,e){e===void 0&&(e=null);var i=t.attr(n);return L(i)?i:_(a,n)?null:e};const N=t=>t.replace(/[-|\_](\w)/g,function(a,n){return n.toUpperCase()}),pt=t=>t.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/\-/g,"_"),ct=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/\_/g,"-");var ht=function(t,a){let n="";if(!t)return"";for(a=N(a);t.nodeName!=="P"&&t.nodeName!=="LI"&&t.nodeName!=="DIV"&&t.nodeName!=="BODY";){if(t.style[a]){n=t.style[a];break}t=t.parentNode}return n};let I=(t,a)=>{let n="";return n+=t["tp-buttons"]?'.tp-buttons[data-tp-style="'+a+'"] {'+t["tp-buttons"]+`}
`:"",n+=t["tp-buttons:hover"]?'.tp-buttons[data-tp-style="'+a+'"]:hover {'+t["tp-buttons:hover"]+`}
`:"",n+=t["tp-buttons::before"]?'.tp-buttons[data-tp-style="'+a+'"]::before {'+t["tp-buttons::before"]+`}
`:"",n+=t["tp-buttons::after"]?'.tp-buttons[data-tp-style="'+a+'"]::after {'+t["tp-buttons::after"]+`}
`:"",n};const gt=(t,a,n)=>{!n&&(n=a*100);let e={id:null,outTime:n,outId:null};e.id=setInterval(i=>{t(()=>{clearTimeout(i.outId),clearInterval(i.id)})},a,e),e.outId=setTimeout(()=>{e.id&&clearInterval(e.id)},e.outTime)};let P=function(t,a){return typeof t[a]=="function"?t[a]:typeof C.customTags[t.name][a]=="function"?C.customTags[t.name][a]:function(){}};const mt=(t,a)=>a?typeof t=="string"&&!t.match(/\s/)&&t.length>0?parseInt(t)+"px":t:typeof t=="string"&&t.length>0&&t.match(/^[0-9]{1,8}$/)?t+"px":t,j=t=>{let a=t.split("_");return a.length>1?f.translate([a[0]+" {0}",a[1]]):f.translate(t)};tinymce.tp$HtmlPanelFn=window.tp$HtmlPanelFn=function(t,a,n){h.buttonsStyle&&(h.buttonsStyle[a]=n),document.querySelector("#"+a+"_StyleID").innerHTML=t.nextElementSibling.innerHTML};const bt={count:0},ft=t=>{let a=new Date().getTime()+"-"+bt.count++,n=`
  <div id="${a}" class="skt skt-loading" data-v-e3347e98=""><div class="skt-tox-tinymce" data-v-e3347e98="" style="height: 200px;"><div class="skt-tox-editor-container" data-v-e3347e98=""><div class="skt-tox-editor-header" data-v-e3347e98=""><div class="skt-tox-menubar" data-v-e3347e98=""><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">File</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Edit</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">View</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Format</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Tools</span></button></div><div class="skt-tox-toolbar-overlord" data-v-e3347e98=""><div class="skt-tox-toolbar" data-v-e3347e98=""><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div></div></div><div class="skt-tox-anchorbar" data-v-e3347e98=""></div></div><div class="skt-tox-sidebar-wrap-box" data-v-e3347e98=""><p class="skeleton" data-v-e3347e98=""> &nbsp; </p><p class="skeleton" data-v-e3347e98="">&nbsp; </p><p class="skeleton" data-v-e3347e98=""></p></div></div><div class="skt-tox-statusbar" data-v-e3347e98=""><div class="skeleton" data-v-e3347e98=""> PP </div><span class="skeleton" data-v-e3347e98="" style="margin-left: calc(100% - 120px);">Powered by Five </span></div></div></div>
`;return document.querySelector(t.selector).outerHTML=n+document.querySelector(t.selector).outerHTML,a},xt=(t,a,n)=>{let e="";e=h.buttonsStyle&&h.buttonsStyle[a],n||(n=A(t.tp$CustomTags.buttons.styleSheetList)),e||(e=h.buttonsStyle&&(h.buttonsStyle[a]=n[0]));let i="",o="",u="";return n.forEach((l,r)=>{l===e&&(o=`<span class="tp-buttons" data-tp-style="${l}">${j(l)}</span>`),i+=`<li ><input id="${a+"_"+r}" type="radio" name="${a}" ${e===l?" checked ":""}  onclick="tinymce.tp$HtmlPanelFn(this,'${a}','${l}')"> <label for="${a+"_"+r}" > <span class="tp-buttons" data-tp-style="${l}">${j(l)}</span></label></li>
`,u+=I(t.tp$CustomTags.buttons.styleSheetList[l],l)}),`<div style="width: 100%; position: relative; " >
 
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
    ${u.replace(/.tp-buttons/g,".tox .tox-dialog__body-content .tp-buttons")}
     </style>
     <div class="showStyle" id="${a+"_StyleID"}">${o}</div>
     <h2 class="title_h2">${f.translate("Select tmplate")}:</h2>
     <ul>
      ${i}
     </ul>
     </div>
     `};let U=(t,a)=>{let n="";if(!t)return"";for(a=N(a);t.nodeName&&t.nodeName.toLowerCase()!=="#text";)n=t.style[a],t=t.firstChild;return n};const O=(t,a,n)=>{n=n||t.selection.getSelectedBlocks(),p.each(n,function(e){if(t.dom.getStyle(e,"text-indent")||a){let i="",o="";a==="remove"?(-parseInt(t.dom.getStyle(e,"text-indent"))==parseInt(t.dom.getStyle(e,"margin-left"))&&t.dom.setStyle(e,"margin-left",null),t.dom.setStyle(e,"text-indent",null)):(a=parseInt(a)||2,e&&e.firstChild&&(i=U(e,"font-size"),o=U(e,"letter-spacing"),i?i=(parseInt(i)+parseInt(o||0))*a+"px":i=(parseInt(o||0)+16)*a+"px"),a>0&&-parseInt(t.dom.getStyle(e,"text-indent"))==parseInt(t.dom.getStyle(e,"margin-left"))&&t.dom.setStyle(e,"margin-left",null),t.dom.setStyle(e,"text-indent",i||a+"em"),a<0&&t.dom.setStyle(e,"margin-left",i?i.replace(/^-/,""):-a+"em"))}})},vt=t=>{var a=function(n){return function(){return t.execCommand(n)}};t.addCommand("tpLetterspacing",function(n,e){t.formatter.apply("tpLetterspacing",{value:e}),O(t)}),t.addCommand("tpLineheight",function(n,e){t.formatter.apply("tpLineheight",{value:e})}),t.addCommand("tpIndent",function(n,e){O(t,e||2)}),t.addCommand("mceTpAlignleft",function(n,e){let i=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(i,"float","left")}),t.addCommand("mceTpAlignright",function(n,e){let i=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(i,"float","right")}),t.addCommand("mceTpAligncenter",function(n,e){let i=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(i,"float",null),t.dom.setStyle(i,"margin-left","auto"),t.dom.setStyle(i,"margin-right","auto")}),t.ui.registry.addButton("tpalignleft",{tooltip:"Align left",onAction:a("mceTpAlignleft"),icon:"align-left"}),t.ui.registry.addButton("tpalignright",{tooltip:"Align right",onAction:a("mceTpAlignright"),icon:"align-right"}),t.ui.registry.addButton("tpaligncenter",{tooltip:"Align center",onAction:a("mceTpAligncenter"),icon:"align-center"})},yt=t=>{t.formatter.register({alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table,tp-buttons,tp-tabs",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],afterParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-bottom":"%value"}},beforeParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-top":"%value"}},borderParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"border-width":"%valueW","border-style":"%valueS","border-color":"%valueC"}},paddingParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{padding:"%value"}},tpParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{background:"%background","text-indent":"%indent"}},tpLetterspacing:{inline:"span",remove_similar:!0,styles:{"letter-spacing":"%value"}},tpLineheight:{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table",styles:{"line-height":"%value"}}}),t.on("ExecCommand",function(a){a.command==="FontSize"&&O(t)})};let R=function(t,a,n,e){t.tp$Style.mapping||(t.tp$Style.mapping={}),t.tp$Style.mapping[""+a.getAttribute("data-id")]?w(t.tp$Style.mapping[""+a.getAttribute("data-id")],{styleTemplate:a.getAttribute("data-tp-style")||"default",quantity:a.children.length-1}):t.tp$Style.mapping[""+a.getAttribute("data-id")]={styleCustomTags:e.name,stylePath:e.name==="buttons"?"styleSheetList":"styleSheetLoadList",styleTemplate:a.getAttribute("data-style")||"default",quantity:a.children.length-1,specialStyle:{}}};const Ct=(t,a,n,e,i)=>{const o=a.createElement("template"),u=document.createElement("style"),l=document.createElement("style");u.textContent=`body{
      padding: 0;
      margin: 0;
  }
  :host {
      overflow: hidden;
      display: block; 
  }`,o.innerHTML=e.template.innerHTML;class r extends t.HTMLElement{constructor(){super(),this.setAttribute("contenteditable",!1),this.setAttribute("data-mce-tp-component",i),this.attachShadow({mode:"open"}),this.tp$state=typeof e.state=="object"?JSON.parse(JSON.stringify(e.state)):{},R(n,this,"init",e),this.tpComponentDelete=typeof e.tpComponentDelete=="function"?e.tpComponentDelete.bind(this):()=>{this.remove()},this.tpComponentCmd=typeof e.tpComponentCmdFn=="object"?JSON.stringify(e.tpComponentCmdFn)!=="{}"?(k,T)=>{e.tpComponentCmdFn[k](this,T),R(n,this,k,e)}:(k,T)=>{C.customTags[i].tpComponentCmdFn[k](this,T),R(n,this,k,e)}:()=>{console.log("\u65E0\u53EF\u7528cmd")},l.id="tpComponentStyle_"+this.getAttribute("data-id"),i=="tabs"&&(l.textContent=e.styleSheetLoadList&&e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/.tp-tabs\s*\{/g,":host   {").replace(/.tp-tabs_label\b\s/g,"::slotted(.tp-tabs_label)   ").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),i=="collapse"&&(l.textContent=e.styleSheetLoadList&&e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?e.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/>/g," ").replace(/.tp-collapse\s*\{/g,":host   {").replace(/label.tp-collapse_label\b\s/g,"::slotted(.tp-collapse_label)   ").replace(/label.tp-collapse_label::/g,"::slotted(.tp-collapse_label)::").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),i=="buttons"&&(l.textContent=e.styleSheetList&&e.styleSheetList[this.getAttribute("data-tp-style")||"default"]?I(e.styleSheetList[this.getAttribute("data-tp-style")||"default"],this.getAttribute("data-tp-style")||"default").replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(.tp-buttons)::before   {").replace(/.tp-buttons::after\s*\{/g,":host(.tp-buttons)::after   {"):""),o.content.prepend(l),o.content.prepend(u),this.shadowRoot.appendChild(o.content.cloneNode(!0))}connectedCallback(){P(e,"headerEditableFn")(this,e.isHeaderEditable,i,n),P(e,"contentEditableFn")(this,e.isContentEditable,i,n),P(e,"connectedCallback")(this.shadowRoot,this)}static get observedAttributes(){return["data-top-bg","data-mce-tp-component","data-value"]}static tp$Delete(){console.log(this)}}try{t.customElements.define("tp-"+i,r)}catch{}},kt=t=>{const a=t.getWin(),n=t.getDoc();let e=t.toolbar,i=t.baseURI.source;typeof e=="object"&&(e=e.jion(" ")),/tpIconlists/.test(e)&&m.send({url:i+"plugins/tpIconlists/tpIconlists.css",async:!1,dataType:"text",success:function(l){t.dom.addStyle(l)}}),yt(t),vt(t);const o=`.mce-content-body [data-mce-tp-component][contenteditable=false][data-mce-selected] {
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
  }`;t.dom.addStyle(o),t.tp$Style={},t.getTpStyle=l=>"<style>"+t.tp$OutputStyle+" </style>";let u=t.tp$CustomTags||C.customTags;p.each(u,function(l,r){Ct(a,n,t,l,r)}),t.parser.addAttributeFilter("data-tp-component",l=>{l&&l.forEach(r=>{let g=r.attr("data-tp-component");u[g]&&P(u[g],"parserFn")(r,g,t)})}),t.serializer.addAttributeFilter("data-mce-tp-component",l=>{l&&l.forEach(r=>{let g=r.attr("data-mce-tp-component");u[g]&&P(u[g],"serializerFn")(r,g,t)})}),t.setContent(t.getContent({source_view:!0}))},K=(t,a,n,e,i)=>{e?(!e.tp$CustomTags&&(e.tp$CustomTags=JSON.parse(JSON.stringify(C.customTags))),i?w(e.tp$CustomTags[t][a],n):e.tp$CustomTags[t][a]=n):i?w(C.customTags[t][a],n):C.customTags[t][a]=n},J={custom_elements:"",setCustomTags:K,createCustomTags:(t,a,n)=>{n?(!n.tp$CustomTags&&(n.tp$CustomTags=JSON.parse(JSON.stringify(C.customTags))),n.tp$CustomTags[t]=a):C.customTags[t]=a},setStyleSheetList:(t,a,n,e)=>{K("buttons","styleSheetList",{[a]:{"tp-buttons":v("tp-buttons",n),"tp-buttons:hover":v("tp-buttons:hover",n),"tp-buttons::before":v("tp-buttons::before",n),"tp-buttons::after":v("tp-buttons::after",n)}},e,!0)},createHtmlPanel:xt};var W={name:"tabs",styleSheet:{selector:"default",styleSheetList:{default:{"tp-tabs":"","tp-tabs_top":"","tp-tabs_label.checked":" ","tp-tabs_main":" ","tp-tab_main.checked":" "}}},styleSheetLoadList:{},styleFn:()=>{},state:{count:0},tpComponentDeleteFn:function(){console.log(this)},tpComponentMonitorCmd:()=>{},tpComponentCmdFn:{tabAdd:(t,a)=>{let n=document.createElement("div");n.setAttribute("contenteditable",!1),n.setAttribute("class","tp-partition tp-tabs_label"),n.setAttribute("data-idx",t.tp$state.count);let e=document.createElement("p");e.setAttribute("class","tp-component_inline"),e.setAttribute("data-idx",t.tp$state.count),e.setAttribute("contenteditable",!0),e.innerHTML=a.title,n.appendChild(e),t.insertBefore(n,t.lastChild);let i=document.createElement("div");i.setAttribute("class","tp-tab_main"),i.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),i.innerHTML=a.content,t.lastChild.appendChild(i),t.tp$state.count++},tabDelete:(t,a)=>{t.children[--t.tp$state.count].remove(),t.lastChild.lastChild.remove()},delete:(t,a)=>{t.remove()},getStyle:(t,a)=>{},setStyle:(t,a)=>{console.log(t.querySelector(".tp-tabs_top")),t.setAttribute("data-top-style",a["tp-tabs_top"]),t.shadowRoot.querySelector(".tp-tabs_top").setAttribute("style",a["tp-tabs_top"])}},template:{innerHTML:`
<div class="tp-tabs">
  <div class="tp-tabs_top" id="headerID">
      <slot></slot>
  </div>
  <div class="tp-tabs_main">
      <slot name="content" ></slot>
  </div>
</div>
    `},connectedCallback:(t,a)=>{let n=e=>e.className&&e.className.indexOf("tp-partition tp-tabs_label")!==-1||e.parentNode&&(e.parentNode.className&&e.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1||e.parentNode.parentNode&&e.parentNode.parentNode.className&&e.parentNode.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1);t.getElementById("headerID").addEventListener("click",function(e){if(n(e.target)){let i=e.target.getAttribute("data-idx")||e.target.parentNode.getAttribute("data-idx")||"0",o=a.querySelectorAll("div.tp-partition.tp-tabs_label"),u=a.querySelector("div.tp-partition.tp-tabs_label.checked");u&&u.setAttribute("class","tp-partition tp-tabs_label");let l=o[i];l&&l.setAttribute("class","tp-partition tp-tabs_label checked");let r=a.querySelectorAll("div.tp-tab_main"),g=a.querySelector("div.tp-tab_main[contenteditable=true]");g&&(g.setAttribute("contenteditable",!1)||(g.style.maxHeight="0px"));let k=r[i];k&&(k.setAttribute("contenteditable",!0)||(k.style.maxHeight="10000px"))}})},isContentEditable:!0,contentEditableFn:(t,a,n)=>{if(t.lastChild&&t.lastChild.className==="tp-"+n+"_main"){const e=document.createElement("div");for(e.setAttribute("contenteditable",!1),e.setAttribute("class","tp-partition tp-tabs_main"),e.setAttribute("slot","content"),t.lastChild.firstChild&&(t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 10000px; transition: all 0s"),a&&t.lastChild.firstChild.setAttribute("contenteditable",!0),e.setAttribute("style",t.lastChild.getAttribute("style")),e.appendChild(t.lastChild.firstChild));t.lastChild.firstChild;)t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),e.appendChild(t.lastChild.firstChild);t.removeChild(t.lastChild),t.appendChild(e)}},isHeaderEditable:!0,headerEditableFn:(t,a,n)=>{let e=t.children.length;t.getAttribute("data-id"),t.shadowRoot.querySelector("#headerID.tp-tabs_top").setAttribute("style",t.getAttribute("data-top-style")?t.getAttribute("data-top-style"):"");for(let i=e-2;i>=0;i--)t.tp$state.count++,t.children[i].setAttribute("contenteditable",!1),t.children[i].setAttribute("class","tp-partition tp-"+n+"_label"+(i===0?" checked":"")),t.children[i].setAttribute("data-idx",i),t.children[i].firstChild.setAttribute("class","tp-component_inline"),t.children[i].firstChild.setAttribute("data-idx",i),a&&t.children[i].firstChild.setAttribute("contenteditable",!0)},parserFn:(t,a)=>{for(t.attr({"data-tp-component":null,"data-mce-tp-component":a,"data-top-style":t.firstChild.attr("style")});t.firstChild.name==="input";)t.firstChild.remove();let n=t.firstChild.firstChild;for(;n&&n.name==="label";){let i=n.next,o=new c("div",1);n.name="p",n.wrap(o),n=i}let e=t.lastChild.firstChild;for(;e&&e.name==="label";){let i=e.next.next;e.remove(),e=i}t.firstChild.unwrap(),t.type=1,t.name="tp-"+a},serializerFn:(t,a)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":a,contenteditable:null,class:"tp-"+a});let n=new c("div",1);n.attr("class","tp-tabs_top"),n.attr("style",t.attr("data-top-style")),t.attr("data-top-style",null);let e=t.firstChild,i=[];for(;e.attr("data-idx");){let l=e.next;e.firstChild.name="label",e.firstChild.attr({contenteditable:null,"data-idx":null,class:"tp-"+a+"_label",for:t.attr("data-id")+"tab"+e.attr("data-idx")}),i.push(S(e.firstChild)),n.append(e.firstChild),e.remove(),e=l}let o=t.lastChild.firstChild,u=0;for(;o&&o.attr("class")==="tp-tab_main";){let l=o.next,r=new c("input",1);r.shortEnded=!0,r.attr({id:t.attr("data-id")+"tab"+u,type:"radio",name:t.attr("data-id")}),u==0&&r.attr("checked",""),t.append(r),o.attr({contenteditable:null,style:null,class:"tp-tab_main tp-tab_main_"+u}),i[u]&&(t.lastChild.insert(E(i[u]),o,!0),u++),o=l}t.append(n),t.firstChild.attr({contenteditable:null,class:"tp-tabs_main"}),t.append(t.firstChild),t.type=1,t.name="div"}},G={name:"buttons",template:{innerHTML:`
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
           `,"tp-buttons::before":" ","tp-buttons::after":" "}},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,a)=>{t.shadowRoot.children[1].textContent=I(a.editor.tp$CustomTags.buttons.styleSheetList[a.styleName],a.styleName).replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(::before)   {").replace(/.tp-buttons::after\s*\{/g,":host(::after)   {")}},contentEditableFn:(t,a,n,e)=>{if(t.firstChild&&t.firstChild.tagName==="A"){const i=document.createElement("p");i.setAttribute("contenteditable",!0),i.setAttribute("class","tp-component_inline"),t.firstChild.innerHTML="<span>"+t.firstChild.innerHTML+"</span>",t.firstChild.setAttribute("href","javascript:;"),i.appendChild(t.firstChild),t.appendChild(i)}},isHeaderEditable:!0,parserFn:(t,a,n)=>{t.attr({"data-tp-component":null});let e=t.attr("style"),i={},o="";o=x("margin",e),o&&(i.margin=o),o=x("padding",e),o&&(i.padding=o),o=x("border",e),o&&(i.border=o),o=x("background",e),o&&(i.background=o),o=x("border-radius",e),o&&(i["border-radius"]=o),o=x("border-width",e),o&&(i["border-width"]=o),o=x("border-style",e),o&&(i["border-style"]=o),o=x("border-color",e),o&&(i["border-color"]=o);let u=new c("div",1);u.type=1,u.attr({"data-mce-tp-component":a,"data-tp-style":t.attr("data-tp-style")||"default",style:D(i)||null,"data-id":t.attr("data-id")}),t.attr("class")&&u.attr("class",t.attr("class")),n.tp$Style.mapping||(n.tp$Style.mapping={}),n.tp$Style.mapping[""+t.attr("data-id")]?w(n.tp$Style.mapping[""+t.attr("data-id")],{styleTemplate:t.attr("data-tp-style")||"default"}):n.tp$Style.mapping[""+t.attr("data-id")]={styleCustomTags:"buttons",stylePath:"styleSheetList",styleTemplate:t.attr("data-tp-style")||"default",specialStyle:{}},t.attr("style",D(w(y(t.attr("style"))||{},{margin:"",padding:"",background:"","border-style":"","border-color":"","border-width":"","border-radius":"",border:""}))||null),t.attr("data-id",null),t.attr("data-mce-style",null),t.wrap(u),u.name="tp-"+a},serializerFn:(t,a)=>{let n=t;for(;n.name!=="a"&&n.firstChild.name!=="#text";)n=n.firstChild;t.attr({"data-mce-tp-component":null,"data-tp-component":a,contenteditable:null,"data-tp-style":t.attr("data-tp-style")||"default",href:n&&n.attr("href")?n.attr("href"):null,style:n&&n.attr("style")?D(w(y(t.attr("style"))||{},y(n.attr("style"))||{})):t.attr("style"),target:n&&n.attr("target")?n.attr("target"):null,rel:n&&n.attr("rel")?n.attr("rel"):null,title:n&&n.attr("title")?n.attr("title"):null}),t.firstChild.unwrap(),n&&n.unwrap(),t.name="a"}},q={name:"collapse",template:{innerHTML:`
<div class="tp-collapse">
<div class="header" id="headerID">
  <slot name="header"></slot>
</div>
<div class="tp-collapse_mainBox">
    <slot></slot>
</div>
</div>
    `},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,a)=>{let n=a.style,e=x("padding",n),i=x("border",n),o=x("border-width",n);B(a.editor,t,"tp-collapse_main",(e?"padding: "+e+"!important; ":"")+(i?"border: "+i+"!important;":"")+(o?"border-width: "+o+"!important;":""))}},contentEditableFn:(t,a,n,e)=>{const i=document.createElement("div");if(i.setAttribute("contenteditable",!1),i.setAttribute("class","tp-partition tp-collapse_main"),a&&t.lastChild.setAttribute("contenteditable",!0),t.lastChild.getAttribute("class")==="tp-collapse_main"){let o=t.lastChild.getAttribute("style"),u=x("padding",o),l=x("border",o),r=x("border-width",o);B(e,t,"tp-collapse_main",(u?"padding: "+u+"!important; ":"")+(l?"border: "+l+"!important;":"")+(r?"border-width: "+r+"!important;":""))}i.appendChild(t.lastChild),t.appendChild(i)},isHeaderEditable:!0,headerEditableFn:(t,a,n,e)=>{if(t.firstChild.contenteditable!=="true"){const i=document.createElement("div");for(a&&i.setAttribute("contenteditable",!0),i.setAttribute("slot","header"),i.setAttribute("class","tp-collapse_label"),i.setAttribute("style","min-height: 20px; "+t.getAttribute("data-top-style"));t.firstChild&&t.firstChild.className!=="tp-"+n+"_main";)i.appendChild(t.firstChild);t.insertBefore(i,t.firstChild)}},parserFn:(t,a)=>{t.attr({"data-tp-component":null,"data-mce-tp-component":a}),t.attr("data-id",t.firstChild.attr("id")),t.firstChild.remove(),t.lastChild.attr("class","tp-"+a+"_main"),t.type=1,t.name="tp-"+a},serializerFn:(t,a)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":a,contenteditable:null,class:"tp-"+a}),t.firstChild.type=1,t.firstChild.name="label",t.firstChild.attr({contenteditable:null,for:t.attr("data-id")});let n=t.lastChild.attr("style");t.lastChild.unwrap(),t.lastChild.attr({contenteditable:null,class:"tp-"+a+"_main",style:n});let e=new c("input",1);e.shortEnded=!0,e.attr({id:t.attr("data-id"),type:"checkbox"}),t.insert(e,t.firstChild,!0),t.attr("data-id",null),t.type=1,t.name="div"}};const X=t=>/select$/.test(t),Y={forecolor:!0,backcolor:!0,tpLetterspacing:!0,tpIconlists:!0,tpColumns:!0,table:!0},M={title:{file:{zh_CN:"\u6587\u4EF6",en_US:"File"},edit:{zh_CN:"\u7F16\u8F91",en_US:"Edit"},view:{zh_CN:"\u67E5\u770B",en_US:"View"},insert:{zh_CN:"\u63D2\u5165",en_US:"Insert"},format:{zh_CN:"\u683C\u5F0F",en_US:"Format"},table:{zh_CN:"\u8868\u683C",en_US:"Table"},tools:{zh_CN:"\u5DE5\u5177",en_US:"Tools"},help:{zh_CN:"\u5E2E\u52A9",en_US:"Help"}},items:{code:"tools",spellchecker:"tools",spellcheckerlanguage:"tools",wordcount:"tools",image:"insert",link:"insert",media:"insert",hr:"insert",template:"insert",codesample:"insert",charmap:"insert",inserttable:"table",emoticons:"insert",pagebreak:"insert",nonbreaking:"insert",anchor:"insert",toc:"insert",insertdatetime:"insert",bold:"format",italic:"format",underline:"format",strikethrough:"format",blockquote:"format",subscript:"format",superscript:"format",removeformat:"format",formatselect:"format",fontselect:"format",fontsizes:"format",forecolor:"format",backcolor:"format",fontformats:"format",blockformats:"format",codeformat:"format",align:"format",table:"table",lineheight:"format",help:"help"}},Z={file:!0,view:!0,edit:!0},Q=t=>{let a=[];return t.split("|").forEach(e=>{let i=e.split(" "),o=[];i.forEach(u=>{u&&o.push({isSelect:X(u),name:u}),u&&M.items[u]&&(Z[M.items[u]]=!0)}),o.length>0&&a.push(o)}),a},Et=t=>{let a=[];return t.split("|").forEach(e=>{let i=e.split(" "),o=[];i.forEach(u=>{u&&o.push({isSelect:X(u),name:u})}),a.push(o)}),a},tt=()=>`.skt-tox-tinymce{

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
  }`,et=()=>`[data-isdark] .skt-tox-tinymce{

    border: 1px solid #000;
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
  [data-isdark] .skt-tox-anchorbar{
    display: flex;
    flex: 0 0 auto;
     border-top: 1px solid #000;
  }
  [data-isdark] .skt-tox-tinymce .skt-tox-statusbar{
    align-items: center;
    background-color: #222f3e;
    border-top: 1px solid #000;
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
  [data-isdark] .skt-tox-tinymce  .skt-tox-toolbar,[data-isdark] .skt-tox-tinymce .skt-tox-menubar{
   background:url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23000000'/%3E%3C/svg%3E") left 0 top 0 #222f3e;
     background-color: #222f3e;
    display: flex;
    flex: 0 0 auto;
    flex-shrink: 0;
    flex-wrap: wrap;
    padding: 0 0;
   
  }
  [data-isdark] .skt-tox-tinymce .skt-tox-mbtn{
   align-items: center;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    box-shadow: none;
    color: #fff;
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
  [data-isdark] .skt-tox-tinymce .skt-tox-toolbar__group{
    border-right:1px solid #000;
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
  [data-isdark] .skt-tox-tinymce .skt-tox-tbtn{
    align-items: center;
    background: 0 0;
    border: 0;
    border-radius: 3px;
    box-shadow: none;
    color: #fff;
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
   .skt[data-isdark]{
    display: none;
    width: 100%;
    top:0;
    position: absolute;
    z-index: 99;
    background: #222f3e
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
  }`,wt=t=>{if(!document.querySelector("style#skt-tox-style")){let r=document.createElement("style");r.type="text/css",r.id="skt-tox-style";try{r.appendChild(document.createTextNode(tt()))}catch{r.styleSheet.cssText=tt()}document.getElementsByTagName("head")[0].appendChild(r)}if(!document.querySelector("style#skt-dark-tox-style")){let r=document.createElement("style");r.type="text/css",r.id="skt-dark-tox-style";try{r.appendChild(document.createTextNode(et()))}catch{r.styleSheet.cssText=et()}document.getElementsByTagName("head")[0].appendChild(r)}let a=[];typeof t.toolbar=="string"?a=Q(t.toolbar):Array.isArray(t.toolbar)&&t.toolbar.forEach(r=>{a.push(...Q(r))});let n=[];if(t.menubar!==!1)if(typeof t.menubar=="string")n=Et(t.menubar);else for(let r in M.title)Z[r]&&n.push(M.title[r][t.language||"en_US"]);let e=t.min_height||t.height||200,i=[],o=e-150;for(let r=0;r<o;r+=50)i.push("1");let u=t.selector?document.querySelector(t.selector).parentNode:t.target.parentNode,l=document.createElement("div");return l.className="skt skt-loading",/dark$/.test(t.skin)&&l.setAttribute("data-isdark","true"),l.innerHTML=Lt({selector:t.selector,toolbar:a,menubar:n,branding:t.branding!==!1,placeholderList:i,height:e}),u.style.position="relative",u.style.minHeight=e+"px",u.append(l),l},St=t=>{let a="";return t.forEach(n=>{typeof n=="object"?n.forEach(e=>{a+='<button  class="skt-tox-mbtn skt-tox-mbtn--select"><span class="skt-tox-mbtn__select-label skeleton">'+e+`</span></button>
`}):a+='<button  class="skt-tox-mbtn skt-tox-mbtn--select"><span class="skt-tox-mbtn__select-label skeleton">'+n+`</span></button>
`}),a},_t=t=>{let a="";return t.forEach(n=>{a+=`<div class="skt-tox-toolbar__group">
`,n.forEach(e=>{a+='<button class="skt-tox-tbtn '+(e.isSelect?" skt-tox-tbtn--select":"")+(Y[e.name]?" skt-tox-split-button":"")+'"><span class="'+(e.isSelect?"skt-tox-tbtn__select-label skt-tox-tbtn--select":"skt-tox-icon tox-tbtn__icon-wrap")+' skeleton">'+e.name+"</span>"+(e.isSelect||Y[e.name]?'<div class="skt-tox-tbtn__select-chevron skeleton"></div>':"")+`</button>
`}),a+=`</div>
`}),a},At=t=>{let a="";return t.forEach(n=>{a+=`<p class="skeleton"></p>
`}),a},Lt=t=>`
<div class="skt-tox-tinymce"    style="height: ${t.height}px" >
<div class="skt-tox-editor-container">
    <div class="skt-tox-editor-header">
<div  class="skt-tox-menubar">
     ${St(t.menubar)} 
</div>
    <div class="skt-tox-toolbar-overlord">
    <div class="skt-tox-toolbar">
     ${_t(t.toolbar)}
    </div>
    </div>
    <div class="skt-tox-anchorbar"></div>
</div>
<div class="skt-tox-sidebar-wrap-box">

    <p  class="skeleton"> &nbsp; </p>
      ${At(t.placeholderList)}
    <p class="skeleton"> </p>
</div>
</div> 
<div class="skt-tox-statusbar">
 <div class="skeleton">
      PP
  </div> 
  ${t.branding?'<span class="skeleton" style="margin-left: calc(100% - 120px)">Powered by Five </span>':""}
 </div>
</div>`;C.customTags[W.name]=W,C.customTags[G.name]=G,C.customTags[q.name]=q;let Ft=(t,a,n)=>{let e=`
`;for(let i=0;i<n;i++)e+=`.tp-${t} > input:nth-child(${i+1}):checked ~ .tp-${t}_top > .tp-${t}_label:nth-child(${i+1}){${a}}

               .tp-${t} > input:nth-child(${i+1}):checked ~ .tp-${t}_main  .tp-tab_main_${i}{ max-height: 10000px; }

            `;return e},Bt=(t,a)=>{let n="";return A(t.specialStyle).forEach(e=>{n+=t.specialStyle[e]?`
 `+a[e]+" { "+t.specialStyle[e]+"} ":""}),n},zt=t=>{t.tp$OutputStyle="";let a=2,n="",e="",i="",o="",u={},l={},r={};t.tp$Style&&t.tp$Style.mapping&&(!t.tp$CustomTags&&(t.tp$CustomTags=JSON.parse(JSON.stringify(C.customTags))),A(t.tp$Style.mapping).forEach(T=>{let b=t.tp$Style.mapping[T];b.styleCustomTags==="tabs"&&(u[b.styleTemplate]||(n=t.tp$CustomTags[b.styleCustomTags][b.stylePath][b.styleTemplate],u[b.styleTemplate]=!0),a<b.quantity&&(a=b.quantity)),b.styleCustomTags==="collapse"&&(l[b.styleTemplate]||(i+=t.tp$CustomTags[b.styleCustomTags][b.stylePath][b.styleTemplate],l[b.styleTemplate]=!0),o+=b.specialStyle?Bt(b,{"tp-collapse_main":'.tp-collapse > input[id="'+T+'"]:checked + .tp-collapse_label + .tp-collapse_main'}):""),b.styleCustomTags==="buttons"&&!r[b.styleTemplate]&&(e+=I(t.tp$CustomTags[b.styleCustomTags][b.stylePath][b.styleTemplate],b.styleTemplate),r[b.styleTemplate]=!0)}));let g="",k="";n&&(n=n.replace(/.tp-tabs\s*{/g,"div.tp-tabs[data-id] {").replace(/\n.tp-tabs\s/g,`
.tp-tabs[data-id] `)+`.tp-tabs[data-id] > input { display: none;} 
 .tp-tabs .tp-tabs_main .tp-tab_main { overflow: hidden;max-height: 0px;}`,g=n.match(/.tp-tabs_label.checked\s*{\n([\s\S]+)\n}/)[1],k=g?Ft("tabs",g,a):""),t.tp$OutputStyle=(e?`@font-face {
  font-family: "iconfont"; /* Project id 2627438 */
  src: url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff2?t=1630480852428') format('woff2'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff?t=1630480852428') format('woff'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.ttf?t=1630480852428') format('truetype');
}`:"")+e+i+o+n+k};const Dt={iframeLayout:`
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
  
  `},Tt=t=>Dt[t];d.Editor.prototype.tp$={Components:J,Node:{getDimension:V},I18n:{add:d.i18n.add},isDev:()=>window==null?void 0:window.__TP_DEV__,Tools:{getFormatStyle:D,autoToPX:mt,getCurrentValue:ht,namingFormat:{toHump:N,toLine:pt,toHyphen:ct},selection:{cell:function(t){let a=t,n=t,e=function(){return a};var i=function(){return n};return{get:e,set:function(u,l){a=u,l&&(n=l)},getAction:i}}}},PanelComponents:{getComponents:Tt}};let Ht={en:{"Spacing before paragraph":"Spacing before paragraph","Icon Library":"Icon Library","Write here":"Write here","Picture background fill":"Picture background fill","Templates Style":"Templates Style",Collapse:"Folding Panel","Style {0}":"Style {0}","Icon List":"Icon List",Buttons:"Buttons","Hanging Indent":"Hanging Indent","Spacing after paragraph":"Spacing after paragraph","Iconfont Size":"Iconfont Size","Line Height":"Line Height",Tabs:"Tabs","Select tmplate":"Select Tmplate",Padding:"Padding","Iconfont Color":"Iconfont Color","Letter spacing":"Letter spacing","border Radius":"Rounded Border","Panel head":"Panel head","Panel main":"Panel main","Indent mode":"Indent mode",Margin:"Margin","Horizontal columns":"Horizontal columns","First line indent":"First line indent"},es:{"Line Height":"Altura de la l\xEDnea","Indent mode":"Modo de sangr\xEDa","Write here":"Escriba aqui","Hanging Indent":"Sangr\xEDa","Spacing before paragraph":"Espacio antes del p\xE1rrafo",Margin:"Margen","Horizontal columns":"Columnas horizontales",Collapse:"panel plegable","border Radius":"borde redondeado","Panel main":"Panel principal","Picture background fill":"Relleno de fondo de la imagen","Select tmplate":"Seleccione TMPLATE","Panel head":"Cabezal","First line indent":"Incidente de primera linea","Icon List":"Lista de iconos",Tabs:"Pesta\xF1as","Style {0}":"Estilo {0}","Templates Style":"Estilo de plantillas","Iconfont Size":"Tama\xF1o de \xEDcono",Padding:"Relleno","Icon Library":"Biblioteca de iconos","Letter spacing":"Espaciado de letras","Spacing after paragraph":"Espacio despu\xE9s del p\xE1rrafo",Buttons:"Botones","Iconfont Color":"Color de icono"},fr:{"Hanging Indent":"Retrait","Spacing after paragraph":"Espacement apr\xE8s paragraphe","Style {0}":"Style {0}",Margin:"Marge","First line indent":"Retrait de premi\xE8re ligne",Padding:"Rembourrage","Templates Style":"Style de mod\xE8les","Icon Library":"Biblioth\xE8que d'ic\xF4nes","border Radius":"fronti\xE8re arrondie","Line Height":"Hauteur de la ligne","Write here":"Ecrire ici","Icon List":"Liste d'ic\xF4nes","Picture background fill":"Boullage de l'arri\xE8re-plan de l'image","Letter spacing":"L'espacement des lettres","Spacing before paragraph":"Espacement avant le paragraphe",Collapse:"panneau de pliage","Panel head":"T\xEAte de panneau",Tabs:"Onglets","Panel main":"Panneau principal",Buttons:"Boutons","Horizontal columns":"Colonnes horizontales","Select tmplate":"S\xE9lectionnez TMPlate","Indent mode":"Mode de retrait","Iconfont Size":"Taille de l'ic\xF4ne","Iconfont Color":"Couleur ic\xF4ne"},de:{"Picture background fill":"Bildhintergrund","First line indent":"Erster Zeileneinzug","Hanging Indent":"H\xE4ngender Einzug","Icon Library":"Icon Library",Buttons:"Tasten","Panel head":"Panelkopf","Templates Style":"Vorlagen Stil","Indent mode":"Einzugsmodus",Padding:"Polsterung","Spacing before paragraph":"Abstand vor Absatz","Select tmplate":"W\xE4hlen Sie TMplate",Margin:"Rand",Tabs:"Registerkarten","Icon List":"Symbolliste","Style {0}":"Stil {0}","Spacing after paragraph":"Abstand nach Absatz","Write here":"Hier schreiben","border Radius":"abgerundete Grenze","Letter spacing":"Buchstaben-Abstand","Line Height":"Zeilenh\xF6he","Horizontal columns":"Horizontale Spalten","Panel main":"Panel Main",Collapse:"Klappfeld","Iconfont Size":"Symbolgr\xF6\xDFe","Iconfont Color":"Symbolfarbe"},zh_CN:{Collapse:"\u6298\u53E0\u9762\u677F","Write here":"\u5728\u8FD9\u91CC\u5199\u5165\u5185\u5BB9",Tabs:"\u6807\u7B7E\u9762\u677F","Panel head":"\u677F\u5934","Panel main":"\u677F\u4F53",Padding:"\u5185\u8FB9\u8DDD",Margin:"\u5916\u8FB9\u8DDD","border Radius":"\u8FB9\u6846\u5706\u89D2","Templates Style":"\u6A21\u677F\u6837\u5F0F",Buttons:"\u6309\u94AE\u7EC4\u4EF6","Icon List":"\u56FE\u6807\u5217\u8868","Icon Library":"\u56FE\u6807\u5E93","Horizontal columns":"\u6C34\u5E73\u5206\u5217","Style {0}":"\u6837\u5F0F {0}","Select tmplate":"\u9009\u62E9\u6A21\u677F\u6837\u5F0F","Letter spacing":"\u5B57\u6BCD\u95F4\u8DDD","Picture background fill":"\u56FE\u7247\u80CC\u666F\u586B\u5145","Spacing before paragraph":"\u6BB5\u524D\u8DDD","Spacing after paragraph":"\u6BB5\u540E\u8DDD","First line indent":"\u9996\u884C\u7F29\u8FDB","Hanging Indent":"\u60AC\u6302\u7F29\u8FDB","Indent mode":"\u60AC\u6302\u65B9\u5F0F","Iconfont Size":"\u56FE\u6807\u5927\u5C0F","Iconfont Color":"\u56FE\u6807\u989C\u8272","Line Height":"\u884C\u9AD8"},ja:{"Line Height":"\u884C\u306E\u9AD8\u3055",Collapse:"\u6298\u308A\u305F\u305F\u307F\u30D1\u30CD\u30EB","Panel head":"\u30D1\u30CD\u30EB\u30D8\u30C3\u30C9","Picture background fill":"\u753B\u50CF\u306E\u80CC\u666F\u5857\u308A\u3064\u3076\u3057","First line indent":"\u30D5\u30A1\u30FC\u30B9\u30C8\u30E9\u30A4\u30F3\u30A4\u30F3\u30C7\u30F3\u30C8","Spacing after paragraph":"\u6BB5\u843D\u5F8C\u306E\u9593\u9694",Padding:"\u30D1\u30C7\u30A3\u30F3\u30B0","Letter spacing":"\u6587\u5B57\u9593\u9694","border Radius":"\u4E38\u3044\u5883\u754C","Hanging Indent":"\u30CF\u30F3\u30AE\u30F3\u30B0\u30A4\u30F3\u30C7\u30F3\u30C8",Tabs:"\u30BF\u30D6","Iconfont Size":"\u30A2\u30A4\u30B3\u30F3\u30B5\u30A4\u30BA","Spacing before paragraph":"\u6BB5\u843D\u306E\u524D\u306E\u9593\u9694","Templates Style":"\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u30B9\u30BF\u30A4\u30EB","Style {0}":"\u30B9\u30BF\u30A4\u30EB{0}","Horizontal columns":"\u6C34\u5E73\u5217",Margin:"\u30DE\u30FC\u30B8\u30F3","Select tmplate":"tmplate\u3092\u9078\u629E\u3057\u307E\u3059","Panel main":"\u30D1\u30CD\u30EB\u30E1\u30A4\u30F3","Icon Library":"\u30A2\u30A4\u30B3\u30F3\u30E9\u30A4\u30D6\u30E9\u30EA","Write here":"\u3053\u3053\u306B\u66F8\u3044\u3066\u304F\u3060\u3055\u3044",Buttons:"\u30DC\u30BF\u30F3","Icon List":"\u30A2\u30A4\u30B3\u30F3\u30EA\u30B9\u30C8","Indent mode":"\u30A4\u30F3\u30C7\u30F3\u30C8\u30E2\u30FC\u30C9","Iconfont Color":"\u30A2\u30A4\u30B3\u30F3\u306E\u8272"},ko:{Collapse:"\uC811\uB294 \uD328\uB110","Icon List":"\uC544\uC774\uCF58 \uBAA9\uB85D",Padding:"\uC2EC","Letter spacing":"\uBB38\uC790 \uAC04\uACA9","Templates Style":"\uD15C\uD50C\uB9BF \uC2A4\uD0C0\uC77C","Select tmplate":"tmplate\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624","Spacing after paragraph":"\uB2E8\uB77D \uD6C4 \uAC04\uACA9",Tabs:"\uD0ED",Buttons:"\uBC84\uD2BC","Write here":"\uC5EC\uAE30 \uC4F0\uC2DC \uC624",Margin:"\uC5EC\uC720","Horizontal columns":"\uC218\uD3C9 \uC5F4","Panel main":"\uD328\uB110 \uBA54\uC778","Picture background fill":"\uC0AC\uC9C4 \uBC30\uACBD \uCC44\uC6B0\uAE30","Style {0}":"\uC2A4\uD0C0\uC77C {0}","Icon Library":"\uC544\uC774\uCF58 \uB77C\uC774\uBE0C\uB7EC\uB9AC","First line indent":"\uCCAB \uBC88\uC9F8 \uC904\uC758 \uB4E4\uC5EC \uC4F0\uAE30","Spacing before paragraph":"\uB2E8\uB77D \uC804\uC5D0 \uAC04\uACA9","Hanging Indent":"\uB0B4\uC5B4 \uC4F0\uAE30","border Radius":"\uB465\uADFC \uD14C\uB450\uB9AC","Iconfont Color":"\uC544\uC774\uCF58 \uC0C9\uC0C1","Panel head":"\uD328\uB110 \uD5E4\uB4DC","Line Height":"\uB77C\uC778 \uB192\uC774","Indent mode":"\uB4E4\uC5EC \uC4F0\uAE30 \uBAA8\uB4DC","Iconfont Size":"\uC544\uC774\uCF58 \uD06C\uAE30"},nl:{"Indent mode":"Inspringende modus","Panel head":"Paneelhoofd","Write here":"Schrijf hier","Panel main":"Paneelhoofd",Padding:"Vulling","Templates Style":"Sjablonenstijl","Spacing before paragraph":"Afstand v\xF3\xF3r paragraaf","Icon List":"Pictogramlijst","First line indent":"Eerste regel inspring",Tabs:"Tabbladen","Horizontal columns":"Horizontale kolommen",Collapse:"vouwpaneel","Spacing after paragraph":"Afstand na paragraaf","Hanging Indent":"Hangend inspring","Picture background fill":"Foto achtergrond vulling","border Radius":"afgeronde grens","Icon Library":"Icon bibliotheek","Iconfont Color":"Pictogramkleur",Buttons:"Toetsen","Letter spacing":"Letterafstand","Line Height":"Lijnhoogte","Style {0}":"Stijl {0}",Margin:"Marge","Select tmplate":"Selecteer TMPLATE","Iconfont Size":"Pictogramformaat"},hu:{"Templates Style":"Sablonok st\xEDlusa",Padding:"P\xE1rn\xE1z\xE1s","Select tmplate":"V\xE1lassza a Tmplate lehet\u0151s\xE9get","Write here":"\xCDrj ide","Horizontal columns":"V\xEDzszintes oszlopok","Spacing before paragraph":"T\xE1vols\xE1g a bekezd\xE9s el\u0151tt","First line indent":"Els\u0151 sor beh\xFAz\xE1s",Margin:"\xC1rr\xE9s","Spacing after paragraph":"T\xE1vols\xE1g a bekezd\xE9s ut\xE1n","Panel main":"Panel","Indent mode":"Beh\xFAz\xE1si m\xF3d","Icon Library":"Ikonk\xF6nyvt\xE1r","Panel head":"Panelfej","Style {0}":"St\xEDlus {0}","Picture background fill":"K\xE9p h\xE1tt\xE9r t\xF6lt\xE9se","Hanging Indent":"F\xFCgg\u0151leges beh\xFAz\xE1s","Line Height":"Vonalmagass\xE1g","Iconfont Color":"Ikonsz\xEDn",Buttons:"Gombok",Collapse:"\xF6sszecsukhat\xF3 panel",Tabs:"Lapok","Icon List":"Ikonlista","Letter spacing":"Bet\u0171t\xE1vols\xE1gok","border Radius":"lekerek\xEDtett hat\xE1r","Iconfont Size":"Ikonm\xE9ret"},pt:{"Panel head":"Cabe\xE7a do painel",Collapse:"painel dobr\xE1vel",Tabs:"Guias","Picture background fill":"Foto preenchimento de fundo","Letter spacing":"Espa\xE7amento de carta","Write here":"Escreva aqui","Spacing after paragraph":"Espa\xE7amento ap\xF3s o par\xE1grafo",Buttons:"Bot\xF5es","Hanging Indent":"Pendurar recuo","Templates Style":"Estilo de modelos","Panel main":"Main do painel","Line Height":"Altura da linha","Indent mode":"Modo de recuo","Horizontal columns":"Colunas horizontais","Style {0}":"Estilo {0}","First line indent":"Recado de primeira linha","Icon Library":"Icon Library","Select tmplate":"Selecione tmplate","Icon List":"Lista de \xEDcones",Padding:"Preenchimento",Margin:"Margem","Spacing before paragraph":"Espa\xE7amento antes do par\xE1grafo","Iconfont Color":"Cor do \xEDcone","border Radius":"borda arredondada","Iconfont Size":"Tamanho do \xEDcone"},cs:{"Letter spacing":"Mezera dopisu","First line indent":"Prvn\xED \u0159\xE1dek","Picture background fill":"Napln\u011Bn\xED pozad\xED obr\xE1zku",Margin:"Okraj","Line Height":"V\xFD\u0161ka \u0159\xE1dku",Buttons:"Tla\u010D\xEDtka","Indent mode":"Re\u017Eim odsazen\xED",Padding:"Polstrov\xE1n\xED","Iconfont Size":"Velikost ikony","border Radius":"zaoblen\xE1 hranice","Horizontal columns":"Horizont\xE1ln\xED sloupce","Panel main":"Hlavn\xED panel",Tabs:"Karty","Hanging Indent":"Vis\xEDc\xED odsazen\xED","Templates Style":"Styl \u0161ablon","Select tmplate":"Vyberte TMplate","Spacing after paragraph":"Rozestupy po odstavci","Write here":"Pi\u0161te zde","Style {0}":"Style {0}",Collapse:"Skl\xE1dac\xED panel","Icon List":"Seznam ikon","Icon Library":"Knihovna ikon","Panel head":"Hlava panelu","Iconfont Color":"Barva ikon","Spacing before paragraph":"Mezery p\u0159ed odstavcem"},vi:{"Select tmplate":"Ch\u1ECDn TMPLATE",Collapse:"B\u1EA3ng g\u1EA5p","Spacing after paragraph":"Kho\u1EA3ng c\xE1ch sau \u0111o\u1EA1n v\u0103n","Panel main":"B\u1EA3ng ch\xEDnh","Templates Style":"Ki\u1EC3u m\u1EABu",Margin:"L\u1EC1","Write here":"Vi\u1EBFt \u1EDF \u0111\xE2y","Panel head":"\u0110\u1EA7u b\u1EA3ng","Spacing before paragraph":"Kho\u1EA3ng c\xE1ch tr\u01B0\u1EDBc \u0111o\u1EA1n v\u0103n","Iconfont Size":"K\xEDch c\u1EE1 bi\u1EC3u t\u01B0\u1EE3ng",Padding:"\u0110\u1EC7m","Line Height":"Chi\u1EC1u cao gi\u1EEFa c\xE1c d\xF2ng","Indent mode":"Ch\u1EBF \u0111\u1ED9 th\u1EE5t l\u1EC1","Horizontal columns":"C\u1ED9t ngang","border Radius":"Bi\xEAn gi\u1EDBi tr\xF2n","First line indent":"D\xF2ng \u0111\u1EA7u ti\xEAn th\u1EE5t l\u1EC1","Style {0}":"Ki\u1EC3u {0}","Hanging Indent":"Treo th\u1EE5t",Tabs:"Tab",Buttons:"n\xFAt","Icon Library":"Th\u01B0 vi\u1EC7n bi\u1EC3u t\u01B0\u1EE3ng","Icon List":"Danh s\xE1ch bi\u1EC3u t\u01B0\u1EE3ng","Letter spacing":"Kho\u1EA3ng c\xE1ch ch\u1EEF c\xE1i","Picture background fill":"H\xECnh \u1EA3nh n\u1EC1n l\u1EA5p \u0111\u1EA7y","Iconfont Color":"M\xE0u bi\u1EC3u t\u01B0\u1EE3ng"}};d.addI18n=function(t){return function(){w(arguments[1],Ht[arguments[0]]),t.apply(this,arguments)}}(d.addI18n);let at={default:{icons:{"tp-tab-add":'<svg t="1629385862141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7236" width="24" height="24"><path d="M714.27370623 141.21142578h67.41385716c27.91277775 0 51.74690871 9.88762917 71.49250467 29.66288824C872.91577659 190.6396849 882.78363013 214.42932121 882.78363013 242.33221152V309.79550667c0 9.2696528-3.26291773 17.20447542-9.88762917 23.78963631-6.56044191 6.59010498-14.51504016 9.88762917-23.81435532 9.88762989-9.29931517 0-17.27368832-3.29752417-23.83413096-9.88762989-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78963631V242.3371556c0-9.26470871-3.26291773-17.19458725-9.88762918-23.78469295-6.56538599-6.59010498-14.51504016-9.88762917-23.83907504-9.88762918H714.19954925c-9.29931517 0-17.24402596-3.29752417-23.82424278-9.88762915s-9.87774172-14.51998353-9.87774171-23.88851305c0-9.2696528 3.29752417-17.20447542 9.87774171-23.78963633 6.58021754-6.59010498 14.52492761-9.88762917 23.82918686-9.88762916h0.0692129zM444.60344607 141.21142578h134.80793941c9.31414671 0 17.23413778 3.29752417 23.8687374 9.98650588 6.55055444 6.49122901 9.87774172 14.52492761 9.87774171 23.78963633 0 9.2696528-3.32718727 17.20447542-9.87774171 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29752417-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78963632 0-9.26470871 3.28269263-17.30335141 9.89751734-23.78469297C427.35942084 144.50894996 435.30413091 141.21142578 444.60344607 141.21142578z m404.47819957 269.60599063c9.29931517 0 17.25391343 3.39640089 23.81435532 9.88762917 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.88851303v134.80793942c0 9.26470871-3.26291773 17.19458725-9.88762917 23.78469223-6.56044191 6.59504907-14.51504016 9.88762917-23.81435532 9.88762916-9.29931517 0-17.27368832-3.29258081-23.83413096-9.88762916-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78469223V444.59355861c0-9.36852878 3.29258081-17.29840732 9.89751661-23.88851303 6.56044191-6.49122901 14.53481506-9.88762917 23.82918687-9.88762918z m0 269.60599063c9.29931517 0 17.25391343 3.29752417 23.81435532 9.88762989 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.8934564v67.34958763c0 27.90783367-9.86785426 51.79634669-29.60356207 71.57160502-19.74559598 19.6664949-43.5797262 29.55412407-71.49250466 29.55412407h-67.41385717c-9.32403415 0-17.25391343-3.29258081-23.85390586-9.88762916-6.56538599-6.59010498-9.86785426-14.51998353-9.86785426-23.78469223 0-9.37347288 3.30246827-17.30335141 9.86785426-23.89345641 6.59999243-6.59010498 14.53481506-9.88762917 23.85390586-9.8876299h67.41385717c9.29931517 0 17.25391343-3.29258081 23.80446786-9.88762916 6.63459962-6.59010498 9.89751734-14.51998353 9.89751734-23.78469223V714.10067325c0-9.2696528 3.30741236-17.19953134 9.89751663-23.78963632 6.59504907-6.59010498 14.53481506-9.88762917 23.8440184-9.88762989h-0.04943799zM242.37670615 141.21142578H309.79550667c9.30920334 0 17.21930624 3.29752417 23.82918686 9.98650588 6.58516089 6.49122901 9.8826858 14.52492761 9.8826858 23.78963633 0 9.2696528-3.29752417 17.20447542-9.87774172 23.78963632-6.61482398 6.59010498-14.52492761 9.88762917-23.83413094 9.88762916H242.38164951c-9.31414671 0-17.27368832 3.29752417-23.83413023 9.88762918-6.61482398 6.59010498-9.90246071 14.51998353-9.9024607 23.88851303V309.79550667c0 9.37347288-3.28269263 17.20447542-9.89751736 23.8934564-6.56044191 6.48628492-14.52492761 9.88762917-23.82424277 9.88762989-9.30920334 0-17.25391343-3.40134426-23.8242435-9.88762989-6.6098799-6.69392507-9.88762917-14.51998353-9.88762917-23.8934564V242.44097568C141.21142578 214.42932121 151.07928004 190.64957307 170.83476348 170.97319c19.74559598-19.77525907 43.56983876-29.66288824 71.48756058-29.66288823l0.05932545-0.09887599z m202.22673992 674.01497657h134.80793941c9.31414671 0 17.23413778 3.29752417 23.86873739 9.8876299 6.55055444 6.59010498 9.87774172 14.51998353 9.87774172 23.89345641 0 9.26470871-3.32718727 17.19458725-9.87774172 23.78469223-6.63459962 6.59504907-14.55459069 9.88762917-23.86873739 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29258081-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78469223 0-9.37347288 3.28269263-17.30335141 9.89751734-23.89345641 6.58021754-6.59010498 14.52492761-9.88762917 23.82424277-9.8876299z m-269.61587808-404.40404185c9.29931517 0 17.23908188 3.3914568 23.79952377 9.88268508 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.88851304v134.8079394c0 9.26470871-3.26291773 17.19458725-9.90246072 23.78469224-6.56044191 6.59504907-14.50020861 9.88762917-23.79952377 9.88762916-9.31414671 0-17.27368832-3.29258081-23.83413096-9.88762916C144.53861305 596.59608526 141.25097633 588.66620673 141.25097633 579.40149802V444.59355861c0-9.36852878 3.28763673-17.29840732 9.9024607-23.88851303 6.56044191-6.49122901 14.51998353-9.88762917 23.82918686-9.88762918z m0 269.60104654c9.29931517 0 17.23908188 3.29752417 23.79952377 9.88762989 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.8934564v67.34958763c0 9.36852878 3.29258081 17.30335141 9.89751734 23.88851231 6.59010498 6.59010498 14.53481506 9.88762917 23.83413024 9.88762917h67.41385715c9.31414671 0 17.25391343 3.29752417 23.85390586 9.88762989 6.56538599 6.59010498 9.87774172 14.51998353 9.87774243 23.78963633 0 9.36852878-3.31235572 17.19458725-9.87774243 23.8885123-6.59999243 6.49122901-14.53975915 9.88762917-23.85390587 9.88762917H242.42120006c-27.91277775 0-51.72713307-9.88762917-71.49250396-29.66288823-19.75548343-19.77031497-29.63322515-43.55500721-29.63322515-71.46284086V714.19954925c0-9.2696528 3.28269263-17.20447542 9.89751662-23.78963633 6.59010498-6.59010498 14.53481506-9.88762917 23.83413095-9.88762916l-0.03955053-0.09887672z m337.02973524-336.95557825c9.31414671 0 17.23413778 3.29752417 23.8687374 9.88762917 6.55055444 6.59010498 9.86291017 14.51998353 9.86291017 23.78963632v101.12572983h101.13067391c9.29931517 0 17.22919442 3.29752417 23.82918687 9.88762917 6.56538599 6.59010498 9.87279762 14.51998353 9.87279762 23.78963632 0 9.36852878-3.30741236 17.30335141-9.86785427 23.88851304-6.60493653 6.59010498-14.53481506 9.88762917-23.83413022 9.88762916H545.7489508v101.12572983c0 9.2696528-3.31235572 17.20447542-9.86291017 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762917-9.29931517 0-17.22919442-3.29752417-23.82424278-9.88762917-6.59010498-6.59010498-9.87774172-14.51998353-9.87774171-23.78963632V545.72423181H377.18958892c-9.30425926 0-17.22425033-3.29752417-23.85390588-9.88762918-6.56538599-6.59010498-9.87774172-14.51998353-9.87774171-23.88851303 0-9.2696528 3.31235572-17.20447542 9.87774171-23.78963632 6.62965553-6.59010498 14.5496466-9.88762917 23.85390588-9.88762917h101.12572982V377.14509429c0-9.2696528 3.28763673-17.20447542 9.8777417-23.78963633 6.59504907-6.59010498 14.52492761-9.88762917 23.82918688-9.88762918z" p-id="7237"></path></svg>',"tp-tab-delete":'<svg t="1629436983964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="20" height="20"><path d="M950.857143 0H73.142857C31.695238 0 0 31.695238 0 73.142857v877.714286c0 41.447619 31.695238 73.142857 73.142857 73.142857h877.714286c41.447619 0 73.142857-31.695238 73.142857-73.142857V73.142857c0-41.447619-31.695238-73.142857-73.142857-73.142857z m-24.380953 926.47619H97.52381V97.52381h828.95238v828.95238z"  p-id="17121"></path><path d="M316.952381 560.761905h390.095238c26.819048 0 48.761905-21.942857 48.761905-48.761905s-21.942857-48.761905-48.761905-48.761905H316.952381c-26.819048 0-48.761905 21.942857-48.761905 48.761905s21.942857 48.761905 48.761905 48.761905z" p-id="17122"></path></svg>',tpButtons:'<svg t="1630068696978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21708" width="28" height="28"><path d="M800 256h-64a32 32 0 0 0-31.84-32H159.84C142.4 224 128 238.432 128 256.224v415.552A32 32 0 0 0 159.84 704H160v64H128c-35.328 0-64-28.48-64-63.904V223.904C64 188.608 92.864 160 128 160h608c35.328 0 64 28.48 64 63.904V256zM192 351.84A64 64 0 0 1 256.16 288h639.68A64 64 0 0 1 960 351.84v448.32A64 64 0 0 1 895.84 864H256.16A64 64 0 0 1 192 800.16v-448.32z m64 32.384v383.552A31.968 31.968 0 0 0 287.744 800h576.512c17.184 0 31.744-14.4 31.744-32.224V384.224A31.968 31.968 0 0 0 864.256 352H287.744C270.56 352 256 366.4 256 384.224z" p-id="21709"></path><path  transform="scale(0.45) translate(280, 780)" d="M393.944329 226.04293h185.769284c115.432212 0 203.353552 33.325024 203.353552 137.979782 0 51.618335-28.361723 104.796566-76.576651 121.388173v3.828832c60.694087 14.180861 105.3638 56.723446 105.3638 132.732863 0 113.446891-94.019111 165.348844-217.676222 165.348844H393.944329zM571.488713 453.787564c70.904307 0 102.385819-28.361723 102.38582-73.59867 0-49.349398-33.466833-69.060795-100.967733-69.060795h-66.650049V453.787564z m12.904584 246.463371c76.576651 0 118.268384-27.227254 118.268384-85.085168 0-54.596316-40.982689-77.427503-118.268384-77.427504H506.256751v163.079906zM908.284171 638.138762V450.525966h-59.985043v-82.674422l65.231962-5.246919 12.904584-113.446891h93.310068v113.446891h104.796565v87.921341h-104.796565V638.138762c0 48.498546 19.711397 70.904307 57.716105 70.904307a124.366154 124.366154 0 0 0 41.691733-9.21756l18.151502 81.256336a276.101371 276.101371 0 0 1-89.481235 15.882564c-100.825924 0.99266-139.539676-62.679407-139.539676-158.825647zM1210.903753 362.604625h91.04113l7.657665 56.014403h2.977981c37.153857-36.303005 80.405484-66.650048 138.12159-66.650049 91.750173 0 131.172968 63.672068 131.172968 170.170337v265.182108h-111.461571v-251.001247c0-65.231962-18.151503-88.772192-59.985043-88.772192-34.884919 0-56.723446 16.591608-88.772193 47.789503v291.983936h-110.752527z"></path></svg>',tpIconlists:'<svg t="1630921705647" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8438" width="20" height="20"><path d="M944.384 591.36 375.36 591.36c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 432.512 1024.064 468.096 1024.064 511.936 1024.064 555.776 988.416 591.36 944.384 591.36L944.384 591.36zM944.384 273.664 375.36 273.664c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 114.816 1024.064 150.336 1024.064 194.24 1024.064 238.08 988.416 273.664 944.384 273.664L944.384 273.664zM166.464 861.376l12.032 60.416c0.064 0.576 0.128 1.344 0.128 2.432 0 1.728-0.384 3.136-1.28 4.288-0.896 1.152-2.176 1.792-3.968 1.792-1.664 0-3.392-0.448-5.248-1.408l-58.752-27.904-57.984 29.248c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.624-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672-47.936-42.304C1.216 818.24 0.064 816.384 0.064 814.656c-0.064-2.944 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424c1.6-3.328 3.712-4.992 6.272-5.056 2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.704 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 861.376 166.464 861.376zM166.464 532.352l12.032 60.416C178.56 593.28 178.624 594.112 178.624 595.2c0 1.728-0.384 3.136-1.28 4.288C176.448 600.64 175.104 601.28 173.376 601.28c-1.664 0-3.392-0.448-5.248-1.408L109.44 572.032 51.456 601.28C49.6 602.24 47.872 602.752 46.272 602.752c-1.856 0-3.2-0.512-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.448 0.064-1.28 0.256-2.432l10.368-60.672L3.392 491.392C1.216 489.216 0.064 487.296 0.064 485.632c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 411.584 104.576 409.92 107.136 409.856c2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 532.352 166.464 532.352zM166.464 214.656l12.032 60.416C178.56 275.584 178.624 276.416 178.624 277.44c0 1.664-0.384 3.136-1.28 4.288C176.448 282.944 175.104 283.584 173.376 283.584c-1.664 0-3.392-0.448-5.248-1.408L109.44 254.336 51.456 283.584c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672L3.392 173.696C1.216 171.52 0.064 169.6 0.064 167.872c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 93.888 104.576 92.224 107.136 92.16c2.624 0 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 214.656 166.464 214.656zM375.36 761.536l569.088 0c43.968 0 79.68 35.584 79.68 79.424 0 43.84-35.648 79.424-79.68 79.424L375.36 920.384c-43.968 0-79.68-35.584-79.68-79.424C295.68 797.12 331.328 761.536 375.36 761.536L375.36 761.536zM375.36 761.536" p-id="8439"></path></svg>',"list-bull-tp-iconlists_tick":'<div style="width: 45px"><p style="height: 20px"><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span><p  style="height: 20px" ><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span></p></div>',tpParagraph:'<svg t="1631187903361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1637" width="24" height="24"><path d="M122.368 165.888h778.24c-9.216 0-16.384-7.168-16.384-16.384v713.728c0-9.216 7.168-16.384 16.384-16.384h-778.24c9.216 0 16.384 7.168 16.384 16.384V150.016c0 8.192-6.656 15.872-16.384 15.872z m-32.768 684.544c0 26.112 20.992 47.104 47.104 47.104h750.08c26.112 0 47.104-20.992 47.104-47.104V162.304c0-26.112-20.992-47.104-47.104-47.104H136.704c-26.112 0-47.104 20.992-47.104 47.104v688.128z" p-id="1638"></path><path d="M597.504 300.544h230.912v49.152h-230.912zM596.992 437.76h230.912v49.152h-230.912zM210.432 574.976h617.984v49.152H210.432zM210.432 712.192h617.984v49.152H210.432zM246.784 296.448h88.064V501.76h-29.184v29.184h117.248V501.76h-29.696V296.448H481.28v29.184h29.184V238.08H217.6v87.552h29.184z" p-id="1639"></path></svg>',tpColumns:'<svg t="1631064221790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26578" width="20" height="20"><path d="M416 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704zM896 64H608c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H640c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704z"></path></svg>',tpLetterspacing:'<svg t="1610616201691" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969" width="24" height="24"><path d="M682.666667 704l128 106.666667-128 106.666666v-85.333333H341.333333v85.333333L213.333333 810.666667l128-106.666667v85.333333h341.333334v-85.333333zM170.666667 170.666667v682.666666H85.333333V170.666667h85.333334z m768 0v682.666666h-85.333334V170.666667h85.333334z m-394.666667 0l202.666667 469.333333h-89.6l-38.4-93.866667h-213.333334L366.933333 640H277.333333l202.666667-469.333333h64zM512 255.146667L432.213333 469.333333h159.573334L512 255.146667z" p-id="970"></path></svg>',tpIndent2em:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>',tpIconfont:'<svg t="1631797032825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16487" width="30" height="30"><path d="M805.096727 186.810182H218.903273c-17.687273 0-32.116364 14.405818-32.116364 32.116363v586.170182c0 17.687273 14.429091 32.116364 32.116364 32.116364h586.193454c17.687273 0 32.116364-14.429091 32.116364-32.116364V218.903273c0-17.687273-14.429091-32.116364-32.116364-32.116364z m0-46.545455a78.685091 78.685091 0 0 1 78.661818 78.661818v586.170182a78.685091 78.685091 0 0 1-78.661818 78.661818H218.903273a78.685091 78.685091 0 0 1-78.661818-78.661818V218.903273a78.685091 78.685091 0 0 1 78.661818-78.661818h586.193454z"  p-id="16488"></path><path d="M581.818182 465.454545h162.909091v-162.90909h-162.909091v162.90909z m-23.272727-186.181818h209.454545v209.454546h-209.454545v-209.454546zM372.363636 744.727273c51.386182 0 93.090909-41.751273 93.090909-93.090909 0-51.386182-41.751273-93.090909-93.090909-93.090909-51.386182 0-93.090909 41.751273-93.090909 93.090909 0 51.386182 41.751273 93.090909 93.090909 93.090909z m0 23.272727c-64.116364 0-116.363636-52.037818-116.363636-116.363636 0-64.116364 52.037818-116.363636 116.363636-116.363637 64.116364 0 116.363636 52.037818 116.363637 116.363637 0 64.116364-52.037818 116.363636-116.363637 116.363636zM736.907636 721.454545l-80.663272-139.636363-80.663273 139.636363h161.326545zM535.272727 744.727273l120.971637-209.454546 120.971636 209.454546H535.272727zM417.093818 393.774545l44.776727-43.52-61.812363-8.96L372.363636 285.253818l-27.694545 56.040727-61.905455 8.983273 44.683637 43.52-10.519273 61.672727 55.226182-29.090909 55.458909 29.137455-10.519273-61.742546z m24.994909 8.145455l16.384 96.116364-86.318545-45.381819-86.109091 45.381819 16.407273-96.116364L232.727273 334.010182l96.488727-13.963637L372.363636 232.727273l43.147637 87.296 96.488727 13.963636-69.911273 67.956364z"  ></path></svg>',"tp-columns-default":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-2":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-3":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="40" height="40"><path d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path><path d="M938.666667 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z" p-id="27034"></path></svg>',tpLineHeight:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path></svg>'}}};d.IconManager.add=function(t){return function(){w(arguments[1].icons,at[arguments[0]]?at[arguments[0]].icons:{}),t.apply(this,arguments)}}(d.IconManager.add);function nt(t){var a;if(t.on("BeforeGetContent",e=>{e.source_view||zt(e.target)}),t.settings&&t.settings.tp_dark_light_mode&&t.addCommand("tpDarkLightMode",function(e,i){t.settings.skin=(i==null?void 0:i.skin)||"oxide",t.settings.content_css=(i==null?void 0:i.content_css)||"default",t.editorManager.execCommand("mceRemoveEditor",!1,t.id),t.editorManager.settings=t.settings,t.editorManager.execCommand("mceAddEditor",!1,t.id)}),t.settings&&(t.settings.tp_i18n||t.settings.tp_i18n_langs)){if(t.settings.tp_i18n_langs){const e={zh:{code:"zh_CN",title:"Chinese",name:"\u4E2D\u6587"},en:{code:"en",title:"Chinese",name:"English"},es:{code:"es",title:"Spanish",name:"Espa\xF1ol"},fr:{code:"fr",title:"French",name:"Fran\xE7ais"},de:{code:"de",title:"German",name:"Deutsch"},ko:{code:"ko",title:"Korean",name:"\uD55C\uAD6D \uC0AC\uB78C"},ja:{code:"ja",title:"Japanese",name:"\u65E5\u672C\u8A9E"},nl:{code:"nl",title:"Dutch",name:"Nederlands"},hu:{code:"hu",title:"Hungarian",name:"Magyar"},pt:{code:"pt",title:"Portuguese",name:"Portugu\xEAs"},cs:{code:"cs",title:"Czech",name:"\u010Ce\u0161tina"},vi:{code:"vi",title:"Vietnamese",name:"Vi\u1EC7tName"}};t.settings.tp_i18n_Locale=(l,r)=>{let g=t.settings.language;try{g=JSON.parse(l).locale}catch{}/^zh/.test(g)&&(g="zh_CN"),r(g)};let i=[{title:"English",code:"en"},{title:"Chinese",code:"zh_CN",items:{English:"\u82F1\u8BED",Spanish:"\u897F\u73ED\u7259\u8BED",French:"\u6CD5\u8BED",German:"\u5FB7\u8BED",Chinese:"\u4E2D\u6587",Japanese:"\u65E5\u6587",Korean:"\u97E9\u8BED",Dutch:"\u8377\u5170",Hungarian:"\u5308\u7259\u5229\u8BED",Portuguese:"\u8461\u8404\u7259\u8BED",Czech:"\u6377\u514B\u8BED",Uyghur:"\u7EF4\u543E\u5C14\u8BED",Vietnamese:"\u8D8A\u5357\u8BED"}},{title:"Spanish",code:"es",items:{English:"Ingl\xE9s",Spanish:"Espa\xF1ol",French:"Franc\xE9s",German:"Alem\xE1n",Chinese:"Chino",Japanese:"Japon\xE9s",Korean:"Coreano",Dutch:"Holand\xE9s",Hungarian:"H\xFAngaro",Portuguese:"Portugu\xE9s",Czech:"Checo",Uyghur:"Uigur",Vietnamese:"Vietnamita"}},{title:"French",code:"fr",items:{English:"Anglais",Spanish:"Espagnol",French:"Fran\xE7ais",German:"Allemagne",Chinese:"Chinois",Japanese:"Japonais",Korean:"Cor\xE9ens",Dutch:"N\xE9erlandais",Hungarian:"Hongrois",Portuguese:"Portugais",Czech:"Tch\xE8que",Uyghur:"Ou\xEFghour",Vietnamese:"Vietnamien"}},{title:"German",code:"de",items:{English:"Englisch",Spanish:"Spanisch",French:"Franz\xF6sisch",German:"Deutsch",Chinese:"Chinesisch",Japanese:"Japanisch",Korean:"Koreanisch",Dutch:"Niederl\xE4ndisch",Hungarian:"Ungarisch",Portuguese:"Portugiesisch",Czech:"Tschechisch",Uyghur:"Uigurisch",Vietnamese:"Vietnamesisch"}},{title:"Korean",code:"ko",items:{English:"\uC740\uB9AC\uC2DC",Spanish:"\uC2A4\uD398\uC778\uC758",French:"\uD504\uB791\uC2A4\uC5B4",German:"\uB3C5\uC77C\uC758",Chinese:"\uC911\uAD6D \uC0AC\uB78C",Japanese:"\uC77C\uBCF8 \uC0AC\uB78C",Korean:"\uD55C\uAD6D \uC0AC\uB78C",Dutch:"\uB124\uB35C\uB780\uB4DC\uC758",Hungarian:"\uD5DD\uAC00\uB9AC\uC5B4",Portuguese:"\uD3EC\uB974\uD22C\uAC08\uC5B4",Czech:"\uCCB4\uCF54\uC758",Uyghur:"\uC704\uAD6C\uB974\uC5B4",Vietnamese:"\uBCA0\uD2B8\uB0A8\uC5B4"}},{title:"Japanese",code:"ja",items:{English:"\u30A4\u30F3\u30B0\u30EA\u30C3\u30B7\u30E5",Spanish:"\u30B9\u30DA\u30A4\u30F3\u8A9E",French:"\u30D5\u30E9\u30F3\u30B9\u8A9E",German:"\u30C9\u30A4\u30C4\u8A9E",Chinese:"\u4E2D\u56FD\u8A9E",Japanese:"\u65E5\u672C\u8A9E",Korean:"\u97D3\u56FD\u8A9E",Dutch:"\u30AA\u30E9\u30F3\u30C0\u8A9E",Hungarian:"\u30CF\u30F3\u30AC\u30EA\u30FC\u8A9E",Portuguese:"\u30DD\u30EB\u30C8\u30AC\u30EB\u8A9E",Czech:"\u30C1\u30A7\u30B3\u8A9E",Uyghur:"\u30A6\u30A4\u30B0\u30EB",Vietnamese:"\u30D9\u30C8\u30CA\u30E0\u4EBA"}},{title:"Dutch",code:"nl",items:{English:"Engels",Spanish:"Spaans",French:"Frans",German:"Duits",Chinese:"Chinees",Japanese:"Japans",Korean:"Koreaans",Dutch:"Nederlands",Hungarian:"Hongaars",Portuguese:"Portugees",Czech:"Tsjechisch",Uyghur:"OeigoerName",Vietnamese:"Vietnamees"}},{title:"Hungarian",code:"hu",items:{English:"Angol",Spanish:"Spanyol",French:"Francia",German:"N\xE9met",Chinese:"K\xEDnai",Japanese:"Jap\xE1n",Korean:"Koreai",Dutch:"Hollandia",Hungarian:"Magyar",Portuguese:"Portug\xE1l",Czech:"Cseh",Uyghur:"Ujgur",Vietnamese:"Vietn\xE1mi"}},{title:"Portuguese",code:"pt",items:{English:"Ingl\xEAs",Spanish:"spanhol",French:"Franc\xEAs",German:"Alem\xE3o",Chinese:"Chin\xEAs",Japanese:"Japon\xEAs",Korean:"Coreano",Dutch:"Holand\xEAs",Hungarian:"H\xFAngaro",Portuguese:"Portugu\xEAs",Czech:"Checo",Uyghur:"Uygur",Vietnamese:"Vietnamita"}},{title:"Czech",code:"cs",items:{English:"angli\u010Dtina",Spanish:"\u0160pan\u011Bl\u0161tina",French:"Francouz\u0161tina",German:"N\u011Bm\u010Dina",Chinese:"\u010C\xEDn\u0161tina",Japanese:"Japon\u0161tina",Korean:"Korej\u0161tina",Dutch:"Nizozem\u0161tina",Hungarian:"Ma\u010Far\u0161tina",Portuguese:"Portugal\u0161tina",Czech:"\u010Ce\u0161tina",Uyghur:"Ujgursk\xE1",Vietnamese:"Vietnam\u0161tina"}},{title:"Vietnamese",code:"vi",items:{English:"Comment",Spanish:"T\xE2y Ban",French:"Ph\xE1p",German:"\u0110\u1EE9c",Chinese:"Hoa",Japanese:"Nh\u1EADt",Korean:"H\xE0n",Dutch:"H\xE0",Hungarian:"Hungary",Portuguese:"PortugueName",Czech:"S\xE9c",Uyghur:"ch\xE0o.",Vietnamese:"Vi\u1EC7tName"}}];var n=navigator.language||(navigator==null?void 0:navigator.userLanguage);if(n=n.substr(0,2),e[n]){let l={};l[""+e[n].title]=e[n].name,t.editorManager.i18n.add("en",l)}let o=t.settings.tp_i18n_url||(!((a=t.baseUri)===null||a===void 0)&&a.source.replace(/\/$/,"")?t.baseUri.source.replace(/\/$/,""):"")+"/langs/"||"";i.map(l=>{if(l.items&&t.editorManager.i18n.add(l.code,l.items),l.code!=="en"&&t.editorManager.ScriptLoader.add(l.url||(o==null?void 0:o.replace(/\/$/,""))+"/"+l.code+".js"),l.code&&e[n]){let r={};r[""+e[n].title]=e[n].name,t.editorManager.i18n.add(l.code,r)}}),[{title:"English",code:"en",items:{Extension:"Extension"}},{title:"Chinese",code:"zh_CN",items:{Extension:"\u6269\u5C55"}},{title:"Spanish",code:"es",items:{Extension:"Ampliaci\xF3n"}},{title:"French",code:"fr",items:{Extension:"\xC9largissement"}},{title:"German",code:"de",items:{Extension:"Erweiterung"}},{title:"Korean",code:"ko",items:{Extension:"\uD655\uB300"}},{title:"Japanese",code:"ja",items:{Extension:"\u62E1\u5F35"}},{title:"Dutch",code:"nl",items:{Extension:"Uitbreiding"}},{title:"Hungarian",code:"hu",items:{Extension:"Kiterjeszt\xE9s"}},{title:"Portuguese",code:"pt",items:{Extension:"Extens\xE3o"}},{title:"Czech",code:"cs",items:{Extension:"Roz\u0161\xED\u0159en\xED"}},{title:"Vietnamese",code:"vi",items:{Extension:"M\u1EDF"}}].map(l=>{l.items&&t.editorManager.i18n.add(l.code,l.items)}),t.addCommand("mceTpI18n",function(l,r){t.settings.tp_i18n=r,t.settings.language=r,t.editorManager.execCommand("mceRemoveEditor",!1,t.id),t.editorManager.settings=t.settings,t.editorManager.execCommand("mceAddEditor",!1,t.id)}),t.ui.registry.getAll().icons.i18n||t.ui.registry.addIcon("i18n",'<svg t="1656142365638" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2658" width="24" height="24"><path d="M864 64a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h704z m0 64H160a32 32 0 0 0-32 32v704a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32z m-322.4 256c0-31.456 40.64-44.032 58.4-18.08l133.6 195.168V384a32 32 0 0 1 64 0v280.48c0 31.456-40.64 44.032-58.4 18.08l-133.6-195.168v177.088a32 32 0 1 1-64 0z"  p-id="2659"></path><path d="M448 352a32 32 0 0 1 0 64H288v80h160a32 32 0 0 1 31.776 28.256L480 528a32 32 0 0 1-32 32H288v72.48h160a32 32 0 1 1 0 64H256a32 32 0 0 1-32-32V384a32 32 0 0 1 32-32z"  p-id="2660" data-spm-anchor-id="a313x.7781069.0.i5" class="selected"></path></svg>'),t.ui.registry.addNestedMenuItem("tpI18n",{text:"i18n",icon:"i18n",getSubmenuItems:function(){let l=t.settings.language||t.settings.tp_i18n||"en",r=t.settings.tp_i18n_langs&&t.settings.tp_i18n_langs.length>0?t.settings.tp_i18n_langs:i;return p.map(r,function(g){return{type:"togglemenuitem",text:g.title,active:l===g.code,onAction:function(){t.execCommand("mceTpI18n",!1,g.code)}}})}})}t.on("init",e=>{t.editorContainer.onmouseover=()=>{let i=t.settings.language||t.settings.tp_i18n||"en";t.editorManager.i18n.getCode()!=i&&t.editorManager.i18n.setCode(i)}})}t.on("init",e=>{kt(t),t.getTpContent=i=>t.getTpStyle(i)+t.getContent(i)})}d.init=function(t){return function(){let a="",n=window.localStorage.getItem("responsive-locale"),e=window.localStorage.getItem("APPEARANCE_KEY");n&&(n=JSON.parse(n)),!arguments[0].tp_i18n_setCode&&n.locale&&!arguments[0].language&&(/^zh/.test(n.locale)?arguments[0].language="zh_CN":arguments[0].language=n.locale),!arguments[0].tp_i18n&&(arguments[0].tp_i18n=!0),!arguments[0].tp_dark_light_mode&&(arguments[0].tp_dark_light_mode=!0),arguments[0].tp_dark_light_mode&&e&&(arguments[0].skin="oxide"+(e=="dark"?"-dark":""),arguments[0].content_css=e=="dark"?"dark":"default"),!arguments[0].language&&(arguments[0].language="en"),typeof arguments[0].setup=="function"?arguments[0].setup=function(o){return function(u){nt(u),o.apply(this,arguments)}}(arguments[0].setup):arguments[0].setup=function(o){nt(o)},arguments[0].skeletonScreen&&(a=wt(arguments[0])),arguments[0].custom_elements=(arguments[0].custom_elements?arguments[0].custom_elements+",":"")+"tp-collapse,tp-tabs,tp-buttons";const i=t.apply(this,arguments);return i.then(o=>{let u=()=>{var l;if(a){let r=a.parentNode;a.remove(),(l=r.querySelector(".skt.skt-loading"))===null||l===void 0||l.remove()}};o[0]?u():gt(l=>{o[0]&&(l(),u())},20)}),i}}(d.init);let Pt=function(t){return new Promise((a,n)=>{let e=t.match(/<(style)\s*>([\s\S]+)<\/\1>/);a(e&&e[2]?e[2].trim():"")})};d.Editor.prototype.setTpContent=function(t,a){return Pt(t).then(n=>{}),this.setContent(t,a)},window.localStorage.setItem=function(t){return function(a,n){/locale$/.test(a)&&d.editors.forEach(e=>{setTimeout(()=>{!e.settings.tp_i18n_setCode&&e.settings.tp_i18n_Locale&&e.settings.tp_i18n_Locale(n,i=>{e.execCommand("mceTpI18n",!1,i)})},50)}),/APPEARANCE_KEY/.test(a)&&d.editors.forEach(e=>{setTimeout(()=>{e.settings.tp_dark_light_mode&&e.execCommand("tpDarkLightMode",!1,{skin:"oxide"+(n=="dark"?"-dark":""),content_css:n=="dark"?"dark":""})},50)}),t.apply(this,arguments)}}(window.localStorage.__proto__.setItem);const It={global$1:tinymce.util.Tools,global$7:tinymce.html.Node,componentsApi:J,setDev:()=>{window==null||(window.__TP_DEV__=!0)},createSkt:ft};var Mt=function(t){window.tinymcePlugin=t,window.tinymce.tinymcePlugin=t,window.tinyMCE.tinymcePlugin=t};Mt(It)})();var Kt=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],Jt=function(s){return Kt.map(function(d){return d.toLowerCase()}).indexOf(s.toLowerCase())!==-1},Wt=function(s,d,p){Object.keys(d).filter(Jt).forEach(function(c){var m=d[c];typeof m=="function"&&(c==="onInit"?m(s,p):p.on(c.substring(2),function(f){return m(f,p)}))})},Gt=function(s,d,p,c){var m=s.modelEvents?s.modelEvents:null,f=Array.isArray(m)?m.join(" "):m;p.on(f||"input  focus focusin click focusout drop ObjectResized keydown paste ExecCommand ObjectSelected",function(){d.emit("update:modelValue",typeof p.getTpContent=="function"?p.getTpContent({format:s.outputFormat}):p.getContent({format:s.outputFormat}))}),tinymce.tinymcePlugin&&Qt(function(S){typeof p.getTpContent=="function"&&(S(),d.emit("update:modelValue",p.getTpContent({format:s.outputFormat})),d.emit("update:modelValue",p.getTpContent({format:s.outputFormat})))},50)},qt=function(s,d,p,c,m,f){c.setContent(f()),p.attrs["onUpdate:modelValue"]&&Gt(d,p,c),Wt(s,p.attrs,c)},st=0,dt=function(s){var d=Date.now(),p=Math.floor(Math.random()*1e9);return st++,s+"_"+p+st+String(d)},Xt=function(s){return s!==null&&s.tagName.toLowerCase()==="textarea"},rt=function(s){return typeof s=="undefined"||s===""?[]:Array.isArray(s)?s:s.split(" ")},Yt=function(s,d){return rt(s).concat(rt(d))},Zt=function(s){return s==null},Qt=function(s,d,p){!p&&(p=d*1e3);var c={id:null,outTime:p,outId:null};c.id=setInterval(function(m){s(function(){clearTimeout(m.outId),clearInterval(m.id)})},d,c),c.outId=setTimeout(function(){c.id&&clearInterval(c.id)},c.outTime)},ut=function(){return{listeners:[],scriptId:dt("tiny-script"),scriptLoaded:!1}},te=function(){var s=ut(),d=function(m,f,S,E){var h=f.createElement("script");h.referrerPolicy="origin",h.type="application/javascript",h.id=m,h.src=S;var x=function(){h.removeEventListener("load",x),E()};h.addEventListener("load",x),f.head&&f.head.appendChild(h)},p=function(m,f,S){s.scriptLoaded?S():(s.listeners.push(S),m.getElementById(s.scriptId)||d(s.scriptId,m,f,function(){s.listeners.forEach(function(E){return E()}),s.scriptLoaded=!0}))},c=function(){s=ut()};return{load:p,reinitialize:c}},ee=te(),ae=function(){return typeof window!="undefined"?window:global},F=function(){var s=ae();return s&&s.tinymce?s.tinymce:null},ne={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(s){return s==="html"||s==="text"}}},H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(s){for(var d,p=1,c=arguments.length;p<c;p++){d=arguments[p];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(s[m]=d[m])}return s},H.apply(this,arguments)},ie={min_height:300,plugins:["code hr"],toolbar:["code hr"],schema:"html5",table_default_attributes:{border:"1"},table_default_styles:{"border-collapse":"collapse",width:"100%"},table_header_type:"sectionCells",table_responsive_width:!0,file_picker_types:"file img media",fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px"},oe=function(s,d,p,c){return s(c||"div",{id:d,ref:p})},le=function(s,d,p){return s("textarea",{id:d,visibility:"hidden",ref:p})},pe=$t({props:ne,setup:function(s,d){var p=s.init?Object.assign(ie,s.init):{},c=Vt(s),m=c.disabled,f=c.modelValue,S=c.tagName,E=Nt(null),h=null,x=s.id||dt("tiny-vue"),B=s.init&&s.init.inline||s.inline,C=!!d.attrs["onUpdate:modelValue"],A=!0,w=s.initialValue?s.initialValue:"",z="",$=function(y){return C?function(){return f!=null&&f.value?f.value:""}:function(){return y?w:z}},L=function(){var y=$(A),v=H(H({},p),{readonly:s.disabled,selector:"#"+x,plugins:Yt(p.plugins,s.plugins),toolbar:s.toolbar||p.toolbar,inline:B,setup:function(_){h=_,_.on("init",function(V){return qt(V,s,d,_,f,y)}),typeof p.setup=="function"&&p.setup(_)}});Xt(E.value)&&(E.value.style.visibility=""),F().init(v),A=!1};it(m,function(y){var v;h!==null&&(typeof((v=h.mode)===null||v===void 0?void 0:v.set)=="function"?h.mode.set(y?"readonly":"design"):h.setMode(y?"readonly":"design"))}),it(S,function(y){var v;C||(z=h.getContent()),(v=F())===null||v===void 0||v.remove(h),lt(function(){return L()})}),Ot(function(){if(F()!==null)L();else if(E.value&&E.value.ownerDocument){var y=s.cloudChannel?s.cloudChannel:"6",v=s.apiKey?s.apiKey:"no-api-key",_=Zt(s.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+v+"/tinymce/"+y+"/tinymce.min.js":s.tinymceScriptSrc;ee.load(E.value.ownerDocument,_,L)}}),Rt(function(){F()!==null&&F().remove(h)}),B||(jt(function(){A||L()}),Ut(function(){var y;C||(z=h.getContent()),(y=F())===null||y===void 0||y.remove(h)}));var D=function(y){var v;z=h.getContent(),(v=F())===null||v===void 0||v.remove(h),p=H(H({},p),y),lt(function(){return L()})};return d.expose({rerender:D}),function(){return B?oe(ot,x,E,s.tagName):le(ot,x,E)}}});export{pe as E};
