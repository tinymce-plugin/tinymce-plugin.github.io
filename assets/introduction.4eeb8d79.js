import{d as Q}from"./index.fbfb93fd.js";import"./tinymce.edafff27.js";import{T as _}from"./Tinymce-vue.c504b679.js";import{R as c,a as W,E as tt}from"./Editor.143d3919.js";/*! 
*  @plugin tinymce-plugin
*  @version 0.0.9 (2022-4-11)
*  @description tinymce-plugin
*  @copyright (2022) Five(Li Hailong) https://github.com/tinymce-plugintinymce-plugin
*/let d=tinymce,X=d.util.Tools,x=d.html.Node;d.html.Schema;let H=d.util.XHR,A=d.util.I18n,st=new d.html.Serializer().serialize,at=new d.html.DomParser().parse,j={};window.tp$State=j;let h=(t,s)=>{let e=s?s.match(new RegExp(t+':(.+?)"?[;}]')):"";return e?e[1]:!1};function V(t,s,e,a){t.tp$Style.mapping&&t.tp$Style.mapping[""+s.getAttribute("data-id")]&&(t.tp$Style.mapping[""+s.getAttribute("data-id")].specialStyle[""+e]=a)}let m={customTags:{}},E=Object.keys,b=function(){return b=Object.assign||function(s){for(var e,a=1,n=arguments.length;a<n;a++){e=arguments[a];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(s[l]=e[l])}return s},b.apply(this,arguments)},et=Object.hasOwnProperty;var nt=function(t){return t==null},lt=function(t){return!nt(t)};const S=t=>{if(typeof t=="object")return JSON.stringify(t).replace(/"([-A-Za-z]+?)":""[,}]/g,"").replace(/,/gi,";").replace(/{/gi,"").replace(/}/gi,"").replace(/"/gi,"")},z=t=>typeof t=="string"&&t!=="{}"?(t=JSON.stringify(t),JSON.parse(("{"+t.replace(/:/g,'": "').replace(/;\s*/g,'","')+"}").replace(/,\"\"\}$/,"}"))):t,C=(t,s)=>{const e=s.match(new RegExp(`.${t}\\s*\\{([\\s\\S]+)\\}`));return e&&e[1]?e[1].replace(/\}([\s\S]+)/,"").trim():""};var it=function(t,s){return et.call(t,s)},pt=function(t,s,e,a){a===void 0&&(a=null);var n=t.attr(e);return lt(n)?n:it(s,e)?null:a};const D=t=>t.replace(/[-|\_](\w)/g,function(s,e){return e.toUpperCase()}),ot=t=>t.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/\-/g,"_"),rt=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/\_/g,"-");var ct=function(t,s){let e="";if(!t)return"";for(s=D(s);t.nodeName!=="P"&&t.nodeName!=="LI"&&t.nodeName!=="DIV"&&t.nodeName!=="BODY";){if(t.style[s]){e=t.style[s];break}t=t.parentNode}return e};let T=(t,s)=>{let e="";return e+=t["tp-buttons"]?'.tp-buttons[data-tp-style="'+s+'"] {'+t["tp-buttons"]+`}
`:"",e+=t["tp-buttons:hover"]?'.tp-buttons[data-tp-style="'+s+'"]:hover {'+t["tp-buttons:hover"]+`}
`:"",e+=t["tp-buttons::before"]?'.tp-buttons[data-tp-style="'+s+'"]::before {'+t["tp-buttons::before"]+`}
`:"",e+=t["tp-buttons::after"]?'.tp-buttons[data-tp-style="'+s+'"]::after {'+t["tp-buttons::after"]+`}
`:"",e};const dt=(t,s,e)=>{!e&&(e=s*100);let a={id:null,outTime:e,outId:null};a.id=setInterval(n=>{t(()=>{clearTimeout(n.outId),clearInterval(n.id)})},s,a),a.outId=setTimeout(()=>{a.id&&clearInterval(a.id)},a.outTime)};let k=function(t,s){return typeof t[s]=="function"?t[s]:typeof m.customTags[t.name][s]=="function"?m.customTags[t.name][s]:function(){}};const ht=(t,s)=>s?typeof t=="string"&&!t.match(/\s/)&&t.length>0?parseInt(t)+"px":t:typeof t=="string"&&t.length>0&&t.match(/^[0-9]{1,8}$/)?t+"px":t,M=t=>{let s=t.split("_");return s.length>1?A.translate([s[0]+" {0}",s[1]]):A.translate(t)};tinymce.tp$HtmlPanelFn=window.tp$HtmlPanelFn=function(t,s,e){j.buttonsStyle&&(j.buttonsStyle[s]=e),document.querySelector("#"+s+"_StyleID").innerHTML=t.nextElementSibling.innerHTML};const ut={count:0},mt=t=>{let s=new Date().getTime()+"-"+ut.count++,e=`
  <div id="${s}" class="skt skt-loading" data-v-e3347e98=""><div class="skt-tox-tinymce" data-v-e3347e98="" style="height: 200px;"><div class="skt-tox-editor-container" data-v-e3347e98=""><div class="skt-tox-editor-header" data-v-e3347e98=""><div class="skt-tox-menubar" data-v-e3347e98=""><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">File</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Edit</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">View</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Format</span></button><button class="skt-tox-mbtn skt-tox-mbtn--select" data-v-e3347e98=""><span class="skt-tox-mbtn__select-label skeleton" data-v-e3347e98="">Tools</span></button></div><div class="skt-tox-toolbar-overlord" data-v-e3347e98=""><div class="skt-tox-toolbar" data-v-e3347e98=""><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-tbtn--select skt-tox-tbtn--bespoke" data-v-e3347e98=""><span class="skt-tox-tbtn__select-label skt-tox-tbtn--select skt-tox-tbtn--bespoke skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn skt-tox-split-button" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><div class="skt-tox-tbtn__select-chevron skeleton" data-v-e3347e98=""></div></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div><div class="skt-tox-toolbar__group" data-v-e3347e98=""><button class="skt-tox-tbtn" data-v-e3347e98=""><span class="skt-tox-icon tox-tbtn__icon-wrap skeleton" data-v-e3347e98="">4</span><!--v-if--></button></div></div></div><div class="skt-tox-anchorbar" data-v-e3347e98=""></div></div><div class="skt-tox-sidebar-wrap-box" data-v-e3347e98=""><p class="skeleton" data-v-e3347e98=""> &nbsp; </p><p class="skeleton" data-v-e3347e98="">&nbsp; </p><p class="skeleton" data-v-e3347e98=""></p></div></div><div class="skt-tox-statusbar" data-v-e3347e98=""><div class="skeleton" data-v-e3347e98=""> PP </div><span class="skeleton" data-v-e3347e98="" style="margin-left: calc(100% - 120px);">Powered by Five </span></div></div></div>
`;return document.querySelector(t.selector).outerHTML=e+document.querySelector(t.selector).outerHTML,s},gt=(t,s,e)=>{let a="";a=j.buttonsStyle&&j.buttonsStyle[s],e||(e=E(t.tp$CustomTags.buttons.styleSheetList)),a||(a=j.buttonsStyle&&(j.buttonsStyle[s]=e[0]));let n="",l="",i="";return e.forEach((p,o)=>{p===a&&(l=`<span class="tp-buttons" data-tp-style="${p}">${M(p)}</span>`),n+=`<li ><input id="${s+"_"+o}" type="radio" name="${s}" ${a===p?" checked ":""}  onclick="tinymce.tp$HtmlPanelFn(this,'${s}','${p}')"> <label for="${s+"_"+o}" > <span class="tp-buttons" data-tp-style="${p}">${M(p)}</span></label></li>
`,i+=T(t.tp$CustomTags.buttons.styleSheetList[p],p)}),`<div style="width: 100%; position: relative; " >
 
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
     <div class="showStyle" id="${s+"_StyleID"}">${l}</div>
     <h2 class="title_h2">${A.translate("Select tmplate")}:</h2>
     <ul>
      ${n}
     </ul>
     </div>
     `};let O=(t,s)=>{let e="";if(!t)return"";for(s=D(s);t.nodeName&&t.nodeName.toLowerCase()!=="#text";)e=t.style[s],t=t.firstChild;return e};const $=(t,s,e)=>{e=e||t.selection.getSelectedBlocks(),X.each(e,function(a){if(t.dom.getStyle(a,"text-indent")||s){let n="",l="";s==="remove"?(-parseInt(t.dom.getStyle(a,"text-indent"))==parseInt(t.dom.getStyle(a,"margin-left"))&&t.dom.setStyle(a,"margin-left",null),t.dom.setStyle(a,"text-indent",null)):(s=parseInt(s)||2,a&&a.firstChild&&(n=O(a,"font-size"),l=O(a,"letter-spacing"),n?n=(parseInt(n)+parseInt(l||0))*s+"px":n=(parseInt(l||0)+16)*s+"px"),s>0&&-parseInt(t.dom.getStyle(a,"text-indent"))==parseInt(t.dom.getStyle(a,"margin-left"))&&t.dom.setStyle(a,"margin-left",null),t.dom.setStyle(a,"text-indent",n||s+"em"),s<0&&t.dom.setStyle(a,"margin-left",n?n.replace(/^-/,""):-s+"em"))}})},bt=t=>{var s=function(e){return function(){return t.execCommand(e)}};t.addCommand("tpLetterspacing",function(e,a){t.formatter.apply("tpLetterspacing",{value:a}),$(t)}),t.addCommand("tpIndent",function(e,a){$(t,a||2)}),t.addCommand("mceTpAlignleft",function(e,a){let n=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(n,"float","left")}),t.addCommand("mceTpAlignright",function(e,a){let n=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(n,"float","right")}),t.addCommand("mceTpAligncenter",function(e,a){let n=t.dom.getParent(t.selection.getNode(),"tp-tabs,tp-buttons,tp-collapse");t.dom.setStyle(n,"float",null),t.dom.setStyle(n,"margin-left","auto"),t.dom.setStyle(n,"margin-right","auto")}),t.ui.registry.addButton("tpalignleft",{tooltip:"Align left",onAction:s("mceTpAlignleft"),icon:"align-left"}),t.ui.registry.addButton("tpalignright",{tooltip:"Align right",onAction:s("mceTpAlignright"),icon:"align-right"}),t.ui.registry.addButton("tpaligncenter",{tooltip:"Align center",onAction:s("mceTpAligncenter"),icon:"align-center"})},vt=t=>{t.formatter.register({alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table,tp-buttons,tp-tabs",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table,audio,video,tp-buttons,tp-tabs",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"}],afterParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-bottom":"%value"}},beforeParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"margin-top":"%value"}},borderParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{"border-width":"%valueW","border-style":"%valueS","border-color":"%valueC"}},paddingParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{padding:"%value"}},tpParagraph:{selector:"p,ul,ol,dl,li,table",defaultBlock:"p",deep:!1,styles:{background:"%background","text-indent":"%indent"}},tpLetterspacing:{inline:"span",remove_similar:!0,styles:{"letter-spacing":"%value"}}}),t.on("ExecCommand",function(s){s.command==="FontSize"&&$(t)})};let q=function(t,s,e,a){t.tp$Style.mapping||(t.tp$Style.mapping={}),t.tp$Style.mapping[""+s.getAttribute("data-id")]?b(t.tp$Style.mapping[""+s.getAttribute("data-id")],{styleTemplate:s.getAttribute("data-tp-style")||"default",quantity:s.children.length-1}):t.tp$Style.mapping[""+s.getAttribute("data-id")]={styleCustomTags:a.name,stylePath:a.name==="buttons"?"styleSheetList":"styleSheetLoadList",styleTemplate:s.getAttribute("data-style")||"default",quantity:s.children.length-1,specialStyle:{}}};const yt=(t,s,e,a,n)=>{const l=s.createElement("template"),i=document.createElement("style"),p=document.createElement("style");i.textContent=`body{
      padding: 0;
      margin: 0;
  }
  :host {
      overflow: hidden;
      display: block; 
  }`,l.innerHTML=a.template.innerHTML;class o extends t.HTMLElement{constructor(){super(),this.setAttribute("contenteditable",!1),this.setAttribute("data-mce-tp-component",n),this.attachShadow({mode:"open"}),this.tp$state=typeof a.state=="object"?JSON.parse(JSON.stringify(a.state)):{},q(e,this,"init",a),this.tpComponentDelete=typeof a.tpComponentDelete=="function"?a.tpComponentDelete.bind(this):()=>{this.remove()},this.tpComponentCmd=typeof a.tpComponentCmdFn=="object"?JSON.stringify(a.tpComponentCmdFn)!=="{}"?(u,f)=>{a.tpComponentCmdFn[u](this,f),q(e,this,u,a)}:(u,f)=>{m.customTags[n].tpComponentCmdFn[u](this,f),q(e,this,u,a)}:()=>{console.log("\u65E0\u53EF\u7528cmd")},p.id="tpComponentStyle_"+this.getAttribute("data-id"),n=="tabs"&&(p.textContent=a.styleSheetLoadList&&a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/.tp-tabs\s*\{/g,":host   {").replace(/.tp-tabs_label\b\s/g,"::slotted(.tp-tabs_label)   ").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),n=="collapse"&&(p.textContent=a.styleSheetLoadList&&a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"]?a.styleSheetLoadList[this.getAttribute("data-tp-style")||"default"].replace(/>/g," ").replace(/.tp-collapse\s*\{/g,":host   {").replace(/label.tp-collapse_label\b\s/g,"::slotted(.tp-collapse_label)   ").replace(/label.tp-collapse_label::/g,"::slotted(.tp-collapse_label)::").replace(/.tp-tabs_label:hover\b\s/g,"::slotted(.tp-tabs_label:hover)   ").replace(/.tp-tabs_label.checked\b\s/g,"::slotted(.tp-tabs_label.checked)   "):""),n=="buttons"&&(p.textContent=a.styleSheetList&&a.styleSheetList[this.getAttribute("data-tp-style")||"default"]?T(a.styleSheetList[this.getAttribute("data-tp-style")||"default"],this.getAttribute("data-tp-style")||"default").replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(.tp-buttons)::before   {").replace(/.tp-buttons::after\s*\{/g,":host(.tp-buttons)::after   {"):""),l.content.prepend(p),l.content.prepend(i),this.shadowRoot.appendChild(l.content.cloneNode(!0))}connectedCallback(){k(a,"headerEditableFn")(this,a.isHeaderEditable,n,e),k(a,"contentEditableFn")(this,a.isContentEditable,n,e),k(a,"connectedCallback")(this.shadowRoot,this)}static get observedAttributes(){return["data-top-bg","data-mce-tp-component","data-value"]}static tp$Delete(){console.log(this)}}try{t.customElements.define("tp-"+n,o)}catch{}},jt=t=>{const s=t.getWin(),e=t.getDoc();H.send({url:"/tinymce/plugins/tpIconlists/tpIconlists.css",async:!1,dataType:"text",success:function(l){t.dom.addStyle(l)}}),H.send({url:"/tinymce/css/iconfont.css",async:!1,dataType:"text",success:function(l){t.dom.addStyle(l)}}),vt(t),bt(t);const a=`.mce-content-body [data-mce-tp-component][contenteditable=false][data-mce-selected] {
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
  }`;t.dom.addStyle(a),t.tp$Style={},t.getTpStyle=l=>"<style>"+t.tp$OutputStyle+" </style>";let n=t.tp$CustomTags||m.customTags;X.each(n,function(l,i){yt(s,e,t,l,i)}),t.parser.addAttributeFilter("data-tp-component",l=>{l.forEach(i=>{let p=i.attr("data-tp-component");n[p]&&k(n[p],"parserFn")(i,p,t)})}),t.serializer.addAttributeFilter("data-mce-tp-component",l=>{l.forEach(i=>{let p=i.attr("data-mce-tp-component");n[p]&&k(n[p],"serializerFn")(i,p,t)})}),t.setContent(t.getContent({source_view:!0}))},K=(t,s,e,a,n)=>{a?(!a.tp$CustomTags&&(a.tp$CustomTags=JSON.parse(JSON.stringify(m.customTags))),n?b(a.tp$CustomTags[t][s],e):a.tp$CustomTags[t][s]=e):n?b(m.customTags[t][s],e):m.customTags[t][s]=e},ft=(t,s,e)=>{e?(!e.tp$CustomTags&&(e.tp$CustomTags=JSON.parse(JSON.stringify(m.customTags))),e.tp$CustomTags[t]=s):m.customTags[t]=s},xt=(t,s,e,a)=>{K("buttons","styleSheetList",{[s]:{"tp-buttons":C("tp-buttons",e),"tp-buttons:hover":C("tp-buttons:hover",e),"tp-buttons::before":C("tp-buttons::before",e),"tp-buttons::after":C("tp-buttons::after",e)}},a,!0)},G={custom_elements:"",setCustomTags:K,createCustomTags:ft,setStyleSheetList:xt,createHtmlPanel:gt};var P={name:"tabs",styleSheet:{selector:"default",styleSheetList:{default:{"tp-tabs":"","tp-tabs_top":"","tp-tabs_label.checked":" ","tp-tabs_main":" ","tp-tab_main.checked":" "}}},styleSheetLoadList:{},styleFn:()=>{},state:{count:0},tpComponentDeleteFn:function(){console.log(this)},tpComponentMonitorCmd:()=>{},tpComponentCmdFn:{tabAdd:(t,s)=>{let e=document.createElement("div");e.setAttribute("contenteditable",!1),e.setAttribute("class","tp-partition tp-tabs_label"),e.setAttribute("data-idx",t.tp$state.count);let a=document.createElement("p");a.setAttribute("class","tp-component_inline"),a.setAttribute("data-idx",t.tp$state.count),a.setAttribute("contenteditable",!0),a.innerHTML=s.title,e.appendChild(a),t.insertBefore(e,t.lastChild);let n=document.createElement("div");n.setAttribute("class","tp-tab_main"),n.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),n.innerHTML=s.content,t.lastChild.appendChild(n),t.tp$state.count++},tabDelete:(t,s)=>{t.children[--t.tp$state.count].remove(),t.lastChild.lastChild.remove()},delete:(t,s)=>{t.remove()},getStyle:(t,s)=>{},setStyle:(t,s)=>{console.log(t.querySelector(".tp-tabs_top")),t.setAttribute("data-top-style",s["tp-tabs_top"]),t.shadowRoot.querySelector(".tp-tabs_top").setAttribute("style",s["tp-tabs_top"])}},template:{innerHTML:`
<div class="tp-tabs">
  <div class="tp-tabs_top" id="headerID">
      <slot></slot>
  </div>
  <div class="tp-tabs_main">
      <slot name="content" ></slot>
  </div>
</div>
    `},connectedCallback:(t,s)=>{let e=a=>a.className&&a.className.indexOf("tp-partition tp-tabs_label")!==-1||a.parentNode&&(a.parentNode.className&&a.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1||a.parentNode.parentNode&&a.parentNode.parentNode.className&&a.parentNode.parentNode.className.indexOf("tp-partition tp-tabs_label")!==-1);t.getElementById("headerID").addEventListener("click",function(a){if(e(a.target)){let n=a.target.getAttribute("data-idx")||a.target.parentNode.getAttribute("data-idx")||"0",l=s.querySelectorAll("div.tp-partition.tp-tabs_label"),i=s.querySelector("div.tp-partition.tp-tabs_label.checked");i&&i.setAttribute("class","tp-partition tp-tabs_label");let p=l[n];p&&p.setAttribute("class","tp-partition tp-tabs_label checked");let o=s.querySelectorAll("div.tp-tab_main"),g=s.querySelector("div.tp-tab_main[contenteditable=true]");g&&(g.setAttribute("contenteditable",!1)||(g.style.maxHeight="0px"));let u=o[n];u&&(u.setAttribute("contenteditable",!0)||(u.style.maxHeight="10000px"))}})},isContentEditable:!0,contentEditableFn:(t,s,e)=>{if(t.lastChild&&t.lastChild.className==="tp-"+e+"_main"){const a=document.createElement("div");for(a.setAttribute("contenteditable",!1),a.setAttribute("class","tp-partition tp-tabs_main"),a.setAttribute("slot","content"),t.lastChild.firstChild&&(t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 10000px; transition: all 0s"),s&&t.lastChild.firstChild.setAttribute("contenteditable",!0),a.setAttribute("style",t.lastChild.getAttribute("style")),a.appendChild(t.lastChild.firstChild));t.lastChild.firstChild;)t.lastChild.firstChild.setAttribute("class","tp-tab_main"),t.lastChild.firstChild.setAttribute("style","overflow: hidden; max-height: 0; transition: all 0s"),a.appendChild(t.lastChild.firstChild);t.removeChild(t.lastChild),t.appendChild(a)}},isHeaderEditable:!0,headerEditableFn:(t,s,e)=>{let a=t.children.length;t.getAttribute("data-id"),t.shadowRoot.querySelector("#headerID.tp-tabs_top").setAttribute("style",t.getAttribute("data-top-style")?t.getAttribute("data-top-style"):"");for(let n=a-2;n>=0;n--)t.tp$state.count++,t.children[n].setAttribute("contenteditable",!1),t.children[n].setAttribute("class","tp-partition tp-"+e+"_label"+(n===0?" checked":"")),t.children[n].setAttribute("data-idx",n),t.children[n].firstChild.setAttribute("class","tp-component_inline"),t.children[n].firstChild.setAttribute("data-idx",n),s&&t.children[n].firstChild.setAttribute("contenteditable",!0)},parserFn:(t,s)=>{for(t.attr({"data-tp-component":null,"data-mce-tp-component":s,"data-top-style":t.firstChild.attr("style")});t.firstChild.name==="input";)t.firstChild.remove();let e=t.firstChild.firstChild;for(;e&&e.name==="label";){let a=e.next,n=new x("div",1);e.name="p",e.wrap(n),e=a}t.firstChild.unwrap(),t.type=1,t.name="tp-"+s},serializerFn:(t,s)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":s,contenteditable:null,class:"tp-"+s});let e=new x("div",1);e.attr("class","tp-tabs_top"),e.attr("style",t.attr("data-top-style")),t.attr("data-top-style",null);let a=t.firstChild,n=[];for(;a.attr("data-idx");){let p=a.next;a.firstChild.name="label",a.firstChild.attr({contenteditable:null,"data-idx":null,class:"tp-"+s+"_label",for:t.attr("data-id")+"tab"+a.attr("data-idx")}),n.push(st(a.firstChild)),e.append(a.firstChild),a.remove(),a=p}let l=t.lastChild.firstChild,i=0;for(;l&&l.attr("class")==="tp-tab_main";){let p=l.next,o=new x("input",1);o.shortEnded=!0,o.attr({id:t.attr("data-id")+"tab"+i,type:"radio",name:t.attr("data-id")}),i==0&&o.attr("checked",""),t.append(o),l.attr({contenteditable:null,style:null,class:"tp-tab_main tp-tab_main_"+i}),t.lastChild.insert(at(n[i]),l,!0),i++,l=p}t.append(e),t.firstChild.attr({contenteditable:null,class:"tp-tabs_main"}),t.append(t.firstChild),t.type=1,t.name="div"}},I={name:"buttons",template:{innerHTML:`
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
           `,"tp-buttons::before":" ","tp-buttons::after":" "}},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,s)=>{t.shadowRoot.children[1].textContent=T(s.editor.tp$CustomTags.buttons.styleSheetList[s.styleName],s.styleName).replace(/\[data-tp-style=(.*?)\]/g,"").replace(/>/g," ").replace(/.tp-buttons\s*\{/g,":host   {").replace(/.tp-buttons:hover\s*\{/g,":host(:hover)   {").replace(/.tp-buttons::before\s*\{/g,":host(::before)   {").replace(/.tp-buttons::after\s*\{/g,":host(::after)   {")}},contentEditableFn:(t,s,e,a)=>{if(t.firstChild&&t.firstChild.tagName==="A"){const n=document.createElement("p");n.setAttribute("contenteditable",!0),n.setAttribute("class","tp-component_inline"),t.firstChild.innerHTML="<span>"+t.firstChild.innerHTML+"</span>",t.firstChild.setAttribute("href","javascript:;"),n.appendChild(t.firstChild),t.appendChild(n)}},isHeaderEditable:!0,parserFn:(t,s,e)=>{t.attr({"data-tp-component":null});let a=t.attr("style"),n={},l="";l=h("margin",a),l&&(n.margin=l),l=h("padding",a),l&&(n.padding=l),l=h("border",a),l&&(n.border=l),l=h("background",a),l&&(n.background=l),l=h("border-radius",a),l&&(n["border-radius"]=l),l=h("border-width",a),l&&(n["border-width"]=l),l=h("border-style",a),l&&(n["border-style"]=l),l=h("border-color",a),l&&(n["border-color"]=l);let i=new x("div",1);i.type=1,i.attr({"data-mce-tp-component":s,"data-tp-style":t.attr("data-tp-style")||"default",style:S(n)||null,"data-id":t.attr("data-id")}),t.attr("class")&&i.attr("class",t.attr("class")),e.tp$Style.mapping||(e.tp$Style.mapping={}),e.tp$Style.mapping[""+t.attr("data-id")]?b(e.tp$Style.mapping[""+t.attr("data-id")],{styleTemplate:t.attr("data-tp-style")||"default"}):e.tp$Style.mapping[""+t.attr("data-id")]={styleCustomTags:"buttons",stylePath:"styleSheetList",styleTemplate:t.attr("data-tp-style")||"default",specialStyle:{}},t.attr("style",S(b(z(t.attr("style"))||{},{margin:"",padding:"",background:"","border-style":"","border-color":"","border-width":"","border-radius":"",border:""}))||null),t.attr("data-id",null),t.attr("data-mce-style",null),t.wrap(i),i.name="tp-"+s},serializerFn:(t,s)=>{let e=t;for(;e.name!=="a"&&e.firstChild.name!=="#text";)e=e.firstChild;t.attr({"data-mce-tp-component":null,"data-tp-component":s,contenteditable:null,"data-tp-style":t.attr("data-tp-style")||"default",href:e&&e.attr("href")?e.attr("href"):null,style:e&&e.attr("style")?S(b(z(t.attr("style"))||{},z(e.attr("style"))||{})):t.attr("style"),target:e&&e.attr("target")?e.attr("target"):null,rel:e&&e.attr("rel")?e.attr("rel"):null,title:e&&e.attr("title")?e.attr("title"):null}),t.firstChild.unwrap(),e&&e.unwrap(),t.name="a"}},N={name:"collapse",template:{innerHTML:`
<div class="tp-collapse">
<div class="header" id="headerID">
  <slot name="header"></slot>
</div>
<div class="tp-collapse_mainBox">
    <slot></slot>
</div>
</div>
    `},isContentEditable:!0,connectedCallback:()=>{},tpComponentCmdFn:{upData:(t,s)=>{let e=s.style,a=h("padding",e),n=h("border",e),l=h("border-width",e);V(s.editor,t,"tp-collapse_main",(a?"padding: "+a+"!important; ":"")+(n?"border: "+n+"!important;":"")+(l?"border-width: "+l+"!important;":""))}},contentEditableFn:(t,s,e,a)=>{const n=document.createElement("div");if(n.setAttribute("contenteditable",!1),n.setAttribute("class","tp-partition tp-collapse_main"),s&&t.lastChild.setAttribute("contenteditable",!0),t.lastChild.getAttribute("class")==="tp-collapse_main"){let l=t.lastChild.getAttribute("style"),i=h("padding",l),p=h("border",l),o=h("border-width",l);V(a,t,"tp-collapse_main",(i?"padding: "+i+"!important; ":"")+(p?"border: "+p+"!important;":"")+(o?"border-width: "+o+"!important;":""))}n.appendChild(t.lastChild),t.appendChild(n)},isHeaderEditable:!0,headerEditableFn:(t,s,e,a)=>{if(t.firstChild.contenteditable!=="true"){const n=document.createElement("div");for(s&&n.setAttribute("contenteditable",!0),n.setAttribute("slot","header"),n.setAttribute("class","tp-collapse_label"),n.setAttribute("style","min-height: 20px; "+t.getAttribute("data-top-style"));t.firstChild&&t.firstChild.className!=="tp-"+e+"_main";)n.appendChild(t.firstChild);t.insertBefore(n,t.firstChild)}},parserFn:(t,s)=>{t.attr({"data-tp-component":null,"data-mce-tp-component":s}),t.attr("data-id",t.firstChild.attr("id")),t.firstChild.remove(),t.lastChild.attr("class","tp-"+s+"_main"),t.type=1,t.name="tp-"+s},serializerFn:(t,s)=>{t.attr({"data-mce-tp-component":null,"data-tp-component":s,contenteditable:null,class:"tp-"+s}),t.firstChild.type=1,t.firstChild.name="label",t.firstChild.attr({contenteditable:null,for:t.attr("data-id")});let e=t.lastChild.attr("style");t.lastChild.unwrap(),t.lastChild.attr({contenteditable:null,class:"tp-"+s+"_main",style:e});let a=new x("input",1);a.shortEnded=!0,a.attr({id:t.attr("data-id"),type:"checkbox"}),t.insert(a,t.firstChild,!0),t.attr("data-id",null),t.type=1,t.name="div"}};const Y=t=>/select$/.test(t),R={forecolor:!0,backcolor:!0,tpLetterspacing:!0,tpIconlists:!0,tpColumns:!0,table:!0},L={title:{file:{zh_CN:"\u6587\u4EF6",en_US:"File"},edit:{zh_CN:"\u7F16\u8F91",en_US:"Edit"},view:{zh_CN:"\u89C6\u56FE",en_US:"View"},insert:{zh_CN:"\u63D2\u5165",en_US:"Insert"},format:{zh_CN:"\u683C\u5F0F",en_US:"Format"},table:{zh_CN:"\u8868\u683C",en_US:"Table"},tools:{zh_CN:"\u5DE5\u5177",en_US:"Tools"},help:{zh_CN:"\u5E2E\u52A9",en_US:"Help"}},items:{code:"tools",spellchecker:"tools",spellcheckerlanguage:"tools",wordcount:"tools",image:"insert",link:"insert",media:"insert",hr:"insert",template:"insert",codesample:"insert",charmap:"insert",inserttable:"table",emoticons:"insert",pagebreak:"insert",nonbreaking:"insert",anchor:"insert",toc:"insert",insertdatetime:"insert",bold:"format",italic:"format",underline:"format",strikethrough:"format",blockquote:"format",subscript:"format",superscript:"format",removeformat:"format",formatselect:"format",fontselect:"format",fontsizes:"format",forecolor:"format",backcolor:"format",fontformats:"format",blockformats:"format",codeformat:"format",align:"format",table:"table",lineheight:"format",help:"help"}},Z={file:!0,view:!0,edit:!0},J=t=>{let s=[];return t.split("|").forEach(a=>{let n=a.split(" "),l=[];n.forEach(i=>{i&&l.push({isSelect:Y(i),name:i}),i&&L.items[i]&&(Z[L.items[i]]=!0)}),l.length>0&&s.push(l)}),s},kt=t=>{let s=[];return t.split("|").forEach(a=>{let n=a.split(" "),l=[];n.forEach(i=>{i&&l.push({isSelect:Y(i),name:i})}),s.push(l)}),s},U=()=>`.skt-tox-tinymce{

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
  }`,wt=t=>{if(!document.querySelector("style#skt-tox-style")){let o=document.createElement("style");o.type="text/css",o.id="skt-tox-style";try{o.appendChild(document.createTextNode(U()))}catch{o.styleSheet.cssText=U()}document.getElementsByTagName("head")[0].appendChild(o)}let s=[];typeof t.toolbar=="string"?s=J(t.toolbar):Array.isArray(t.toolbar)&&t.toolbar.forEach(o=>{s.push(...J(o))});let e=[];if(t.menubar!==!1)if(typeof t.menubar=="string")e=kt(t.menubar);else for(let o in L.title)Z[o]&&e.push(L.title[o][t.language||"en_US"]);let a=t.min_height||t.height||200,n=[],l=a-150;for(let o=0;o<l;o+=50)n.push("1");let i=t.selector?document.querySelector(t.selector).parentNode:t.target.parentNode,p=document.createElement("div");return p.className="skt skt-loading",p.innerHTML=Lt({selector:t.selector,toolbar:s,menubar:e,branding:t.branding!==!1,placeholderList:n,height:a}),i.style.position="relative",i.style.minHeight=a+"px",i.append(p),p},_t=t=>{let s="";return t.forEach(e=>{s+='<button  class="skt-tox-mbtn skt-tox-mbtn--select"><span class="skt-tox-mbtn__select-label skeleton">'+e+`</span></button>
`}),s},Ct=t=>{let s="";return t.forEach(e=>{s+=`<div class="skt-tox-toolbar__group">
`,e.forEach(a=>{s+='<button class="skt-tox-tbtn '+(a.isSelect?" skt-tox-tbtn--select":"")+(R[a.name]?" skt-tox-split-button":"")+'"><span class="'+(a.isSelect?"skt-tox-tbtn__select-label skt-tox-tbtn--select":"skt-tox-icon tox-tbtn__icon-wrap")+' skeleton">'+a.name+"</span>"+(a.isSelect||R[a.name]?'<div class="skt-tox-tbtn__select-chevron skeleton"></div>':"")+`</button>
`}),s+=`</div>
`}),s},St=t=>{let s="";return t.forEach(e=>{s+=`<p class="skeleton"></p>
`}),s},Lt=t=>`
<div class="skt-tox-tinymce"  style="height: ${t.height}px" >
<div class="skt-tox-editor-container">
    <div class="skt-tox-editor-header">
<div  class="skt-tox-menubar">
     ${_t(t.menubar)} 
</div>
    <div class="skt-tox-toolbar-overlord">
    <div class="skt-tox-toolbar">
     ${Ct(t.toolbar)}
    </div>
    </div>
    <div class="skt-tox-anchorbar"></div>
</div>
<div class="skt-tox-sidebar-wrap-box">

    <p  class="skeleton"> &nbsp; </p>
      ${St(t.placeholderList)}
    <p class="skeleton"> </p>
</div>
</div> 
<div class="skt-tox-statusbar">
 <div class="skeleton">
      PP
  </div> 
  ${t.branding?'<span class="skeleton" style="margin-left: calc(100% - 120px)">Powered by Five </span>':""}
 </div>
</div>`;m.customTags[P.name]=P;m.customTags[I.name]=I;m.customTags[N.name]=N;let Tt=(t,s,e)=>{let a=`
`;for(let n=0;n<e;n++)a+=`.tp-${t} > input:nth-child(${n+1}):checked ~ .tp-${t}_top > .tp-${t}_label:nth-child(${n+1}){${s}}

               .tp-${t} > input:nth-child(${n+1}):checked ~ .tp-${t}_main  .tp-tab_main_${n}{ max-height: 10000px; }

            `;return a},zt=(t,s)=>{let e="";return E(t.specialStyle).forEach(a=>{e+=t.specialStyle[a]?`
 `+s[a]+" { "+t.specialStyle[a]+"} ":""}),e},qt=t=>{t.tp$OutputStyle="";let s=2,e="",a="",n="",l="",i={},p={},o={};t.tp$Style&&t.tp$Style.mapping&&(!t.tp$CustomTags&&(t.tp$CustomTags=JSON.parse(JSON.stringify(m.customTags))),E(t.tp$Style.mapping).forEach(f=>{let r=t.tp$Style.mapping[f];r.styleCustomTags==="tabs"&&(i[r.styleTemplate]||(e=t.tp$CustomTags[r.styleCustomTags][r.stylePath][r.styleTemplate],i[r.styleTemplate]=!0),s<r.quantity&&(s=r.quantity)),r.styleCustomTags==="collapse"&&(p[r.styleTemplate]||(n+=t.tp$CustomTags[r.styleCustomTags][r.stylePath][r.styleTemplate],p[r.styleTemplate]=!0),l+=r.specialStyle?zt(r,{"tp-collapse_main":'.tp-collapse > input[id="'+f+'"]:checked + .tp-collapse_label + .tp-collapse_main'}):""),r.styleCustomTags==="buttons"&&!o[r.styleTemplate]&&(a+=T(t.tp$CustomTags[r.styleCustomTags][r.stylePath][r.styleTemplate],r.styleTemplate),o[r.styleTemplate]=!0)}));let g="",u="";e&&(e=e.replace(/.tp-tabs\s*{/g,"div.tp-tabs[data-id] {").replace(/\n.tp-tabs\s/g,`
.tp-tabs[data-id] `)+`.tp-tabs[data-id] > input { display: none;} 
 .tp-tabs .tp-tabs_main .tp-tab_main { overflow: hidden;max-height: 0px;}`,g=e.match(/.tp-tabs_label.checked\s*{\n([\s\S]+)\n}/)[1],u=g?Tt("tabs",g,s):""),t.tp$OutputStyle=(a?`@font-face {
  font-family: "iconfont"; /* Project id 2627438 */
  src: url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff2?t=1630480852428') format('woff2'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.woff?t=1630480852428') format('woff'),
       url('//at.alicdn.com/t/font_2627438_tl87y8epxj.ttf?t=1630480852428') format('truetype');
}`:"")+a+n+l+e+u};const At={iframeLayout:`
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
  
  `},$t=t=>At[t];d.Editor.prototype.tp$={Components:G,Node:{getDimension:pt},Tools:{getFormatStyle:S,autoToPX:ht,getCurrentValue:ct,namingFormat:{toHump:D,toLine:ot,toHyphen:rt}},PanelComponents:{getComponents:$t}};d.init=function(t){return function(){let s="";arguments[0].skeletonScreen&&(s=wt(arguments[0])),arguments[0].custom_elements=(arguments[0].custom_elements?arguments[0].custom_elements+",":"")+"tp-collapse,tp-tabs,tp-buttons";const e=t.apply(this,arguments);return e.then(a=>{let n=()=>{s&&s.remove(),jt(a[0]),a[0].getTpContent=l=>a[0].getTpStyle(l)+a[0].getContent(l),a[0].on("BeforeGetContent",l=>{l.source_view||qt(l.target)})};a?n():dt(l=>{a[0]&&(l(),n())},50)}),e}}(d.init);let Et={default:{icons:{"tp-tab-add":'<svg t="1629385862141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7236" width="24" height="24"><path d="M714.27370623 141.21142578h67.41385716c27.91277775 0 51.74690871 9.88762917 71.49250467 29.66288824C872.91577659 190.6396849 882.78363013 214.42932121 882.78363013 242.33221152V309.79550667c0 9.2696528-3.26291773 17.20447542-9.88762917 23.78963631-6.56044191 6.59010498-14.51504016 9.88762917-23.81435532 9.88762989-9.29931517 0-17.27368832-3.29752417-23.83413096-9.88762989-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78963631V242.3371556c0-9.26470871-3.26291773-17.19458725-9.88762918-23.78469295-6.56538599-6.59010498-14.51504016-9.88762917-23.83907504-9.88762918H714.19954925c-9.29931517 0-17.24402596-3.29752417-23.82424278-9.88762915s-9.87774172-14.51998353-9.87774171-23.88851305c0-9.2696528 3.29752417-17.20447542 9.87774171-23.78963633 6.58021754-6.59010498 14.52492761-9.88762917 23.82918686-9.88762916h0.0692129zM444.60344607 141.21142578h134.80793941c9.31414671 0 17.23413778 3.29752417 23.8687374 9.98650588 6.55055444 6.49122901 9.87774172 14.52492761 9.87774171 23.78963633 0 9.2696528-3.32718727 17.20447542-9.87774171 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29752417-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78963632 0-9.26470871 3.28269263-17.30335141 9.89751734-23.78469297C427.35942084 144.50894996 435.30413091 141.21142578 444.60344607 141.21142578z m404.47819957 269.60599063c9.29931517 0 17.25391343 3.39640089 23.81435532 9.88762917 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.88851303v134.80793942c0 9.26470871-3.26291773 17.19458725-9.88762917 23.78469223-6.56044191 6.59504907-14.51504016 9.88762917-23.81435532 9.88762916-9.29931517 0-17.27368832-3.29258081-23.83413096-9.88762916-6.60493653-6.59010498-9.89751734-14.51998353-9.89751661-23.78469223V444.59355861c0-9.36852878 3.29258081-17.29840732 9.89751661-23.88851303 6.56044191-6.49122901 14.53481506-9.88762917 23.82918687-9.88762918z m0 269.60599063c9.29931517 0 17.25391343 3.29752417 23.81435532 9.88762989 6.62471144 6.59010498 9.88762917 14.51998353 9.88762917 23.8934564v67.34958763c0 27.90783367-9.86785426 51.79634669-29.60356207 71.57160502-19.74559598 19.6664949-43.5797262 29.55412407-71.49250466 29.55412407h-67.41385717c-9.32403415 0-17.25391343-3.29258081-23.85390586-9.88762916-6.56538599-6.59010498-9.86785426-14.51998353-9.86785426-23.78469223 0-9.37347288 3.30246827-17.30335141 9.86785426-23.89345641 6.59999243-6.59010498 14.53481506-9.88762917 23.85390586-9.8876299h67.41385717c9.29931517 0 17.25391343-3.29258081 23.80446786-9.88762916 6.63459962-6.59010498 9.89751734-14.51998353 9.89751734-23.78469223V714.10067325c0-9.2696528 3.30741236-17.19953134 9.89751663-23.78963632 6.59504907-6.59010498 14.53481506-9.88762917 23.8440184-9.88762989h-0.04943799zM242.37670615 141.21142578H309.79550667c9.30920334 0 17.21930624 3.29752417 23.82918686 9.98650588 6.58516089 6.49122901 9.8826858 14.52492761 9.8826858 23.78963633 0 9.2696528-3.29752417 17.20447542-9.87774172 23.78963632-6.61482398 6.59010498-14.52492761 9.88762917-23.83413094 9.88762916H242.38164951c-9.31414671 0-17.27368832 3.29752417-23.83413023 9.88762918-6.61482398 6.59010498-9.90246071 14.51998353-9.9024607 23.88851303V309.79550667c0 9.37347288-3.28269263 17.20447542-9.89751736 23.8934564-6.56044191 6.48628492-14.52492761 9.88762917-23.82424277 9.88762989-9.30920334 0-17.25391343-3.40134426-23.8242435-9.88762989-6.6098799-6.69392507-9.88762917-14.51998353-9.88762917-23.8934564V242.44097568C141.21142578 214.42932121 151.07928004 190.64957307 170.83476348 170.97319c19.74559598-19.77525907 43.56983876-29.66288824 71.48756058-29.66288823l0.05932545-0.09887599z m202.22673992 674.01497657h134.80793941c9.31414671 0 17.23413778 3.29752417 23.86873739 9.8876299 6.55055444 6.59010498 9.87774172 14.51998353 9.87774172 23.89345641 0 9.26470871-3.32718727 17.19458725-9.87774172 23.78469223-6.63459962 6.59504907-14.55459069 9.88762917-23.86873739 9.88762916H444.60344607c-9.29931517 0-17.24402596-3.29258081-23.82424277-9.88762916-6.61482398-6.59010498-9.89751734-14.51998353-9.89751734-23.78469223 0-9.37347288 3.28269263-17.30335141 9.89751734-23.89345641 6.58021754-6.59010498 14.52492761-9.88762917 23.82424277-9.8876299z m-269.61587808-404.40404185c9.29931517 0 17.23908188 3.3914568 23.79952377 9.88268508 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.88851304v134.8079394c0 9.26470871-3.26291773 17.19458725-9.90246072 23.78469224-6.56044191 6.59504907-14.50020861 9.88762917-23.79952377 9.88762916-9.31414671 0-17.27368832-3.29258081-23.83413096-9.88762916C144.53861305 596.59608526 141.25097633 588.66620673 141.25097633 579.40149802V444.59355861c0-9.36852878 3.28763673-17.29840732 9.9024607-23.88851303 6.56044191-6.49122901 14.51998353-9.88762917 23.82918686-9.88762918z m0 269.60104654c9.29931517 0 17.23908188 3.29752417 23.79952377 9.88762989 6.63459962 6.59010498 9.90246071 14.51998353 9.90246072 23.8934564v67.34958763c0 9.36852878 3.29258081 17.30335141 9.89751734 23.88851231 6.59010498 6.59010498 14.53481506 9.88762917 23.83413024 9.88762917h67.41385715c9.31414671 0 17.25391343 3.29752417 23.85390586 9.88762989 6.56538599 6.59010498 9.87774172 14.51998353 9.87774243 23.78963633 0 9.36852878-3.31235572 17.19458725-9.87774243 23.8885123-6.59999243 6.49122901-14.53975915 9.88762917-23.85390587 9.88762917H242.42120006c-27.91277775 0-51.72713307-9.88762917-71.49250396-29.66288823-19.75548343-19.77031497-29.63322515-43.55500721-29.63322515-71.46284086V714.19954925c0-9.2696528 3.28269263-17.20447542 9.89751662-23.78963633 6.59010498-6.59010498 14.53481506-9.88762917 23.83413095-9.88762916l-0.03955053-0.09887672z m337.02973524-336.95557825c9.31414671 0 17.23413778 3.29752417 23.8687374 9.88762917 6.55055444 6.59010498 9.86291017 14.51998353 9.86291017 23.78963632v101.12572983h101.13067391c9.29931517 0 17.22919442 3.29752417 23.82918687 9.88762917 6.56538599 6.59010498 9.87279762 14.51998353 9.87279762 23.78963632 0 9.36852878-3.30741236 17.30335141-9.86785427 23.88851304-6.60493653 6.59010498-14.53481506 9.88762917-23.83413022 9.88762916H545.7489508v101.12572983c0 9.2696528-3.31235572 17.20447542-9.86291017 23.78963632-6.63459962 6.59010498-14.55459069 9.88762917-23.8687374 9.88762917-9.29931517 0-17.22919442-3.29752417-23.82424278-9.88762917-6.59010498-6.59010498-9.87774172-14.51998353-9.87774171-23.78963632V545.72423181H377.18958892c-9.30425926 0-17.22425033-3.29752417-23.85390588-9.88762918-6.56538599-6.59010498-9.87774172-14.51998353-9.87774171-23.88851303 0-9.2696528 3.31235572-17.20447542 9.87774171-23.78963632 6.62965553-6.59010498 14.5496466-9.88762917 23.85390588-9.88762917h101.12572982V377.14509429c0-9.2696528 3.28763673-17.20447542 9.8777417-23.78963633 6.59504907-6.59010498 14.52492761-9.88762917 23.82918688-9.88762918z" p-id="7237"></path></svg>',"tp-tab-delete":'<svg t="1629436983964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="20" height="20"><path d="M950.857143 0H73.142857C31.695238 0 0 31.695238 0 73.142857v877.714286c0 41.447619 31.695238 73.142857 73.142857 73.142857h877.714286c41.447619 0 73.142857-31.695238 73.142857-73.142857V73.142857c0-41.447619-31.695238-73.142857-73.142857-73.142857z m-24.380953 926.47619H97.52381V97.52381h828.95238v828.95238z"  p-id="17121"></path><path d="M316.952381 560.761905h390.095238c26.819048 0 48.761905-21.942857 48.761905-48.761905s-21.942857-48.761905-48.761905-48.761905H316.952381c-26.819048 0-48.761905 21.942857-48.761905 48.761905s21.942857 48.761905 48.761905 48.761905z" p-id="17122"></path></svg>',tpButtons:'<svg t="1630068696978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21708" width="28" height="28"><path d="M800 256h-64a32 32 0 0 0-31.84-32H159.84C142.4 224 128 238.432 128 256.224v415.552A32 32 0 0 0 159.84 704H160v64H128c-35.328 0-64-28.48-64-63.904V223.904C64 188.608 92.864 160 128 160h608c35.328 0 64 28.48 64 63.904V256zM192 351.84A64 64 0 0 1 256.16 288h639.68A64 64 0 0 1 960 351.84v448.32A64 64 0 0 1 895.84 864H256.16A64 64 0 0 1 192 800.16v-448.32z m64 32.384v383.552A31.968 31.968 0 0 0 287.744 800h576.512c17.184 0 31.744-14.4 31.744-32.224V384.224A31.968 31.968 0 0 0 864.256 352H287.744C270.56 352 256 366.4 256 384.224z" p-id="21709"></path><path  transform="scale(0.45) translate(280, 780)" d="M393.944329 226.04293h185.769284c115.432212 0 203.353552 33.325024 203.353552 137.979782 0 51.618335-28.361723 104.796566-76.576651 121.388173v3.828832c60.694087 14.180861 105.3638 56.723446 105.3638 132.732863 0 113.446891-94.019111 165.348844-217.676222 165.348844H393.944329zM571.488713 453.787564c70.904307 0 102.385819-28.361723 102.38582-73.59867 0-49.349398-33.466833-69.060795-100.967733-69.060795h-66.650049V453.787564z m12.904584 246.463371c76.576651 0 118.268384-27.227254 118.268384-85.085168 0-54.596316-40.982689-77.427503-118.268384-77.427504H506.256751v163.079906zM908.284171 638.138762V450.525966h-59.985043v-82.674422l65.231962-5.246919 12.904584-113.446891h93.310068v113.446891h104.796565v87.921341h-104.796565V638.138762c0 48.498546 19.711397 70.904307 57.716105 70.904307a124.366154 124.366154 0 0 0 41.691733-9.21756l18.151502 81.256336a276.101371 276.101371 0 0 1-89.481235 15.882564c-100.825924 0.99266-139.539676-62.679407-139.539676-158.825647zM1210.903753 362.604625h91.04113l7.657665 56.014403h2.977981c37.153857-36.303005 80.405484-66.650048 138.12159-66.650049 91.750173 0 131.172968 63.672068 131.172968 170.170337v265.182108h-111.461571v-251.001247c0-65.231962-18.151503-88.772192-59.985043-88.772192-34.884919 0-56.723446 16.591608-88.772193 47.789503v291.983936h-110.752527z"></path></svg>',tpIconlists:'<svg t="1630921705647" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8438" width="20" height="20"><path d="M944.384 591.36 375.36 591.36c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 432.512 1024.064 468.096 1024.064 511.936 1024.064 555.776 988.416 591.36 944.384 591.36L944.384 591.36zM944.384 273.664 375.36 273.664c-43.968 0-79.68-35.584-79.68-79.424 0-43.84 35.648-79.424 79.68-79.424l569.088 0C988.416 114.816 1024.064 150.336 1024.064 194.24 1024.064 238.08 988.416 273.664 944.384 273.664L944.384 273.664zM166.464 861.376l12.032 60.416c0.064 0.576 0.128 1.344 0.128 2.432 0 1.728-0.384 3.136-1.28 4.288-0.896 1.152-2.176 1.792-3.968 1.792-1.664 0-3.392-0.448-5.248-1.408l-58.752-27.904-57.984 29.248c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.624-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672-47.936-42.304C1.216 818.24 0.064 816.384 0.064 814.656c-0.064-2.944 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424c1.6-3.328 3.712-4.992 6.272-5.056 2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.704 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 861.376 166.464 861.376zM166.464 532.352l12.032 60.416C178.56 593.28 178.624 594.112 178.624 595.2c0 1.728-0.384 3.136-1.28 4.288C176.448 600.64 175.104 601.28 173.376 601.28c-1.664 0-3.392-0.448-5.248-1.408L109.44 572.032 51.456 601.28C49.6 602.24 47.872 602.752 46.272 602.752c-1.856 0-3.2-0.512-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.448 0.064-1.28 0.256-2.432l10.368-60.672L3.392 491.392C1.216 489.216 0.064 487.296 0.064 485.632c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 411.584 104.576 409.92 107.136 409.856c2.624-0.064 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 532.352 166.464 532.352zM166.464 214.656l12.032 60.416C178.56 275.584 178.624 276.416 178.624 277.44c0 1.664-0.384 3.136-1.28 4.288C176.448 282.944 175.104 283.584 173.376 283.584c-1.664 0-3.392-0.448-5.248-1.408L109.44 254.336 51.456 283.584c-1.92 0.96-3.648 1.472-5.184 1.536-1.856 0-3.2-0.576-4.096-1.728-0.96-1.152-1.408-2.56-1.408-4.288 0-0.512 0.064-1.28 0.256-2.432l10.368-60.672L3.392 173.696C1.216 171.52 0.064 169.6 0.064 167.872c-0.064-3.008 2.368-4.864 7.232-5.632l65.088-9.6 28.48-55.424C102.464 93.888 104.576 92.224 107.136 92.16c2.624 0 4.736 1.6 6.464 4.864l30.016 54.72 65.344 8.064c4.864 0.64 7.296 2.496 7.36 5.504l0 0c0 1.792-1.088 3.712-3.328 5.824L166.464 214.656 166.464 214.656zM375.36 761.536l569.088 0c43.968 0 79.68 35.584 79.68 79.424 0 43.84-35.648 79.424-79.68 79.424L375.36 920.384c-43.968 0-79.68-35.584-79.68-79.424C295.68 797.12 331.328 761.536 375.36 761.536L375.36 761.536zM375.36 761.536" p-id="8439"></path></svg>',"list-bull-tp-iconlists_tick":'<div style="width: 45px"><p style="height: 20px"><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span><p  style="height: 20px" ><img style="width: 20px; height: 20px; display:inline-block; vertical-align: middle" src="/tinymce/icons/tp/tp-tick.png"/> <span style="display: inline-block;vertical-align: middle; width: 20px;background-color: #B9BCC1; height:5px" ></span></p></div>',tpParagraph:'<svg t="1631187903361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1637" width="24" height="24"><path d="M122.368 165.888h778.24c-9.216 0-16.384-7.168-16.384-16.384v713.728c0-9.216 7.168-16.384 16.384-16.384h-778.24c9.216 0 16.384 7.168 16.384 16.384V150.016c0 8.192-6.656 15.872-16.384 15.872z m-32.768 684.544c0 26.112 20.992 47.104 47.104 47.104h750.08c26.112 0 47.104-20.992 47.104-47.104V162.304c0-26.112-20.992-47.104-47.104-47.104H136.704c-26.112 0-47.104 20.992-47.104 47.104v688.128z" p-id="1638"></path><path d="M597.504 300.544h230.912v49.152h-230.912zM596.992 437.76h230.912v49.152h-230.912zM210.432 574.976h617.984v49.152H210.432zM210.432 712.192h617.984v49.152H210.432zM246.784 296.448h88.064V501.76h-29.184v29.184h117.248V501.76h-29.696V296.448H481.28v29.184h29.184V238.08H217.6v87.552h29.184z" p-id="1639"></path></svg>',tpColumns:'<svg t="1631064221790" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26578" width="20" height="20"><path d="M416 64H128c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704zM896 64H608c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h288c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z m0 800c0 19.2-12.8 32-32 32H640c-19.2 0-32-12.8-32-32V160c0-19.2 12.8-32 32-32h224c19.2 0 32 12.8 32 32v704z"></path></svg>',tpLetterspacing:'<svg t="1610616201691" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969" width="24" height="24"><path d="M682.666667 704l128 106.666667-128 106.666666v-85.333333H341.333333v85.333333L213.333333 810.666667l128-106.666667v85.333333h341.333334v-85.333333zM170.666667 170.666667v682.666666H85.333333V170.666667h85.333334z m768 0v682.666666h-85.333334V170.666667h85.333334z m-394.666667 0l202.666667 469.333333h-89.6l-38.4-93.866667h-213.333334L366.933333 640H277.333333l202.666667-469.333333h64zM512 255.146667L432.213333 469.333333h159.573334L512 255.146667z" p-id="970" fill="#222f3e"></path></svg>',tpIndent2em:'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M170.666667 563.2v-102.4H887.466667v102.4zM170.666667 836.266667v-102.4H887.466667v102.4zM512 290.133333v-102.4H887.466667v102.4zM238.933333 341.333333V136.533333l204.8 102.4z"  p-id="5210"></path></svg>',tpIconfont:'<svg t="1631797032825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16487" width="30" height="30"><path d="M805.096727 186.810182H218.903273c-17.687273 0-32.116364 14.405818-32.116364 32.116363v586.170182c0 17.687273 14.429091 32.116364 32.116364 32.116364h586.193454c17.687273 0 32.116364-14.429091 32.116364-32.116364V218.903273c0-17.687273-14.429091-32.116364-32.116364-32.116364z m0-46.545455a78.685091 78.685091 0 0 1 78.661818 78.661818v586.170182a78.685091 78.685091 0 0 1-78.661818 78.661818H218.903273a78.685091 78.685091 0 0 1-78.661818-78.661818V218.903273a78.685091 78.685091 0 0 1 78.661818-78.661818h586.193454z"  p-id="16488"></path><path d="M581.818182 465.454545h162.909091v-162.90909h-162.909091v162.90909z m-23.272727-186.181818h209.454545v209.454546h-209.454545v-209.454546zM372.363636 744.727273c51.386182 0 93.090909-41.751273 93.090909-93.090909 0-51.386182-41.751273-93.090909-93.090909-93.090909-51.386182 0-93.090909 41.751273-93.090909 93.090909 0 51.386182 41.751273 93.090909 93.090909 93.090909z m0 23.272727c-64.116364 0-116.363636-52.037818-116.363636-116.363636 0-64.116364 52.037818-116.363636 116.363636-116.363637 64.116364 0 116.363636 52.037818 116.363637 116.363637 0 64.116364-52.037818 116.363636-116.363637 116.363636zM736.907636 721.454545l-80.663272-139.636363-80.663273 139.636363h161.326545zM535.272727 744.727273l120.971637-209.454546 120.971636 209.454546H535.272727zM417.093818 393.774545l44.776727-43.52-61.812363-8.96L372.363636 285.253818l-27.694545 56.040727-61.905455 8.983273 44.683637 43.52-10.519273 61.672727 55.226182-29.090909 55.458909 29.137455-10.519273-61.742546z m24.994909 8.145455l16.384 96.116364-86.318545-45.381819-86.109091 45.381819 16.407273-96.116364L232.727273 334.010182l96.488727-13.963637L372.363636 232.727273l43.147637 87.296 96.488727 13.963636-69.911273 67.956364z"  ></path></svg>',"tp-columns-default":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-2":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="60" height="40"  style="transform: translateX(7px)"; ><path  d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path></svg>',"tp-columns-columns-3":'<svg t="1631071826197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27031" width="40" height="40"><path d="M213.333333 341.333333H85.333333v384h128V341.333333m85.333334 0v384a85.333333 85.333333 0 0 1-85.333334 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333334 85.333333z"  p-id="27032"></path><path d="M576 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z"  p-id="27033"></path><path d="M938.666667 341.333333h-128v384h128V341.333333m85.333333 0v384a85.333333 85.333333 0 0 1-85.333333 85.333334h-128a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h128a85.333333 85.333333 0 0 1 85.333333 85.333333z" p-id="27034"></path></svg>'}}},Dt={zh_CN:{Collapse:"\u6298\u53E0\u9762\u677F","Write here":"\u5728\u8FD9\u91CC\u5199\u5165\u5185\u5BB9",Tabs:"\u6807\u7B7E\u9762\u677F","Panel head":"\u677F\u5934","Panel main":"\u677F\u4F53",Padding:"\u5185\u8FB9\u8DDD",Margin:"\u5916\u8FB9\u8DDD","border Radius":"\u8FB9\u6846\u5706\u89D2","Templates Style":"\u6A21\u677F\u6837\u5F0F",Buttons:"\u6309\u94AE\u7EC4\u4EF6","Icon List":"\u56FE\u6807\u5217\u8868","Icon Library":"\u56FE\u6807\u5E93","Horizontal columns":"\u6C34\u5E73\u5206\u5217","Style {0}":"\u6837\u5F0F {0}","Select tmplate":"\u9009\u62E9\u6A21\u677F\u6837\u5F0F","Letter spacing":"\u5B57\u6BCD\u95F4\u8DDD","Picture background fill":"\u56FE\u7247\u80CC\u666F\u586B\u5145","Spacing before paragraph":"\u6BB5\u524D\u8DDD","Spacing after paragraph":"\u6BB5\u540E\u8DDD","First line indent":"\u9996\u884C\u7F29\u8FDB","Hanging Indent":"\u60AC\u6302\u7F29\u8FDB","Indent mode":"\u60AC\u6302\u65B9\u5F0F","Iconfont Size":"\u56FE\u6807\u5927\u5C0F","Iconfont Color":"\u56FE\u6807\u989C\u8272"}};d.addI18n=function(t){return function(){b(arguments[1],Dt[arguments[0]]),t.apply(this,arguments)}}(d.addI18n);d.IconManager.add=function(t){return function(){b(arguments[1].icons,Et[arguments[0]].icons),t.apply(this,arguments)}}(d.IconManager.add);let Ft=function(t){return new Promise((s,e)=>{let a=t.match(/<(style)\s*>([\s\S]+)<\/\1>/);s(a&&a[2]?a[2].trim():"")})};d.Editor.prototype.setTpContent=function(t,s){return Ft(t).then(e=>{}),this.setContent(t,s)};tinymce.util.Tools,tinymce.html.Node;const w={name:"domeVue3",components:{TinymceVue:_},data(){return{content:"dsdsdssfdddddddddddddddddddsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons  preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview |"]}}}};w.methods?w.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons  preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview |&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>

</code><div class="language-text" >vue</div></pre>`}:w.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons  preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview |&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>

</code><div class="language-text" >vue</div></pre>`}};w.template=`<Preview class="demo-introduction" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                <template v-slot:description><p>\u54C8\u5E02\u5927\u5BB6\u554A\u5B9E\u6253\u5B9E\u5927\u82CF\u6253\u597D\u770B\u5C31\u597D\u770B\u554A\u901F\u5EA6\u5F88\u5FEB\u6309\u65F6\u6253\u5361\u5B9E\u6253\u5B9E\u54C8\u5F00\u59CB\u5927\u5E08\u7684\u8BDD\u770B\u963F\u677E\u5927\u554A\u5927\u82CF\u6253</p>
</template> 
                              </Preview>`;const F={};F.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li><li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li><li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li><li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li><li>60</li><li>61</li><li>62</li><li>63</li><li>64</li><li>65</li><li>66</li><li>67</li><li>68</li><li>69</li><li>70</li><li>71</li><li>72</li><li>73</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">//https://babeljs.io/repl/</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;

  <span class="hljs-keyword">class</span> <span class="hljs-title class_">TodoApp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {
    <span class="hljs-variable language_">super</span>(props);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span> = { <span class="hljs-attr">items</span>: [], <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;&#x27;</span> };
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleSubmit</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleSubmit</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>);
  }

  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>TODO<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TodoList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{this.state.items}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{this.handleSubmit}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">htmlFor</span>=<span class="hljs-string">&quot;new-todo&quot;</span>&gt;</span>
            What needs to be done?
          <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
            <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;new-todo&quot;</span>
            <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange}</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{this.state.text}</span>
          /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>
            Add #{this.state.items.length + 1}
          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  }

  <span class="hljs-title function_">handleChange</span>(<span class="hljs-params">e</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>({ <span class="hljs-attr">text</span>: e.<span class="hljs-property">target</span>.<span class="hljs-property">value</span> });
  }

  <span class="hljs-title function_">handleSubmit</span>(<span class="hljs-params">e</span>) {
    e.<span class="hljs-title function_">preventDefault</span>();
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">text</span>.<span class="hljs-property">length</span> === <span class="hljs-number">0</span>) {
      <span class="hljs-keyword">return</span>;
    }
    <span class="hljs-keyword">const</span> newItem = {
      <span class="hljs-attr">text</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">text</span>,
      <span class="hljs-attr">id</span>: <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()
    };
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> ({
      <span class="hljs-attr">items</span>: state.<span class="hljs-property">items</span>.<span class="hljs-title function_">concat</span>(newItem),
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;&#x27;</span>
    }));
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">TodoList</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span> {
  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
        {this.props.items.map(item =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.id}</span>&gt;</span>{item.text}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
    );
  }
}

<span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TodoApp</span> /&gt;</span></span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;todosexample&#x27;</span>)
);

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(t){class s extends c.Component{constructor(n){super(n),this.state={items:[],text:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}render(){return c.createElement("div",null,c.createElement("h3",null,"TODO"),c.createElement(e,{items:this.state.items}),c.createElement("form",{onSubmit:this.handleSubmit},c.createElement("label",{htmlFor:"new-todo"},"What needs to be done?"),c.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),c.createElement("button",null,"Add #",this.state.items.length+1)))}handleChange(n){this.setState({text:n.target.value})}handleSubmit(n){if(n.preventDefault(),this.state.text.length===0)return;const l={text:this.state.text,id:Date.now()};this.setState(i=>({items:i.items.concat(l),text:""}))}}class e extends c.Component{render(){return c.createElement("ul",null,this.props.items.map(n=>c.createElement("li",{key:n.id},n.text)))}}return W.render(c.createElement(s,null),t)}};F.template=`<PreviewReact class="demo-introduction" idx="Demo1"  :source="source()">
                              <template v-slot:description><p>sdsdwewe</p>
</template>
                            </PreviewReact>`;const B={};B.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">//https://babeljs.io/repl/</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;

     <span class="hljs-keyword">class</span> <span class="hljs-title class_">ReactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{
       <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {
         <span class="hljs-variable language_">super</span>(props);
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span> = {
                    <span class="hljs-attr">height</span>: <span class="hljs-number">500</span>,
                    <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                    <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,
                    <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">&#x27;advlist autolink lists link image charmap print preview anchor&#x27;</span>, <span class="hljs-string">&#x27;searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons&#x27;</span>, <span class="hljs-string">&#x27;insertdatetime media table paste code help wordcount&#x27;</span>],
                    <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image | &#x27;</span> + <span class="hljs-string">&#x27;bold italic backcolor | alignleft aligncenter &#x27;</span> + <span class="hljs-string">&#x27;alignright alignjustify | bullist numlist outdent indent | &#x27;</span> + <span class="hljs-string">&#x27;removeformat | help&#x27;</span>,
                    <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>
             };
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span> = <span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>
        }
      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>){
        <span class="hljs-keyword">return</span> (
           <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>tinymce demo2<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Editor</span> <span class="hljs-attr">initialValue</span>=<span class="hljs-string">{this.reactDemoInitialValue}</span> <span class="hljs-attr">init</span>=<span class="hljs-string">{this.reactDemoInit}</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
          );
      }
    }

   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ReactDemo</span> /&gt;</span></span>, <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(t){class s extends c.Component{constructor(a){super(a),this.reactDemoInit={height:500,base_url:"/tinymce",branding:!1,language:"zh_CN",menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons","insertdatetime media table paste code help wordcount"],toolbar:"undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},this.reactDemoInitialValue="<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>"}render(){return c.createElement("div",null,c.createElement("h1",null,"tinymce demo2"),c.createElement(tt,{initialValue:this.reactDemoInitialValue,init:this.reactDemoInit}))}}return W.render(c.createElement(s,null),t)}};B.template=`<PreviewReact class="demo-introduction" idx="Demo2"  :source="source()">
                              <template v-slot:description><p>sdsdwewe</p>
</template>
                            </PreviewReact>`;const v={};v.methods?(v.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`},v.methods.template=function(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},v.methods.sourceCode=function(){return{name:"domeVue2",components:{TinymceVue:_},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}}):v.methods={template(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},sourceCode(){return{name:"domeVue2",components:{TinymceVue:_},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}},source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};v.template=`<PreviewVue2 class="demo-introduction"  :template="template()"  :source="source()">
                              <template v-slot:description><p>sdsVuwDFSDF AFAJSHDJKASHFJKHSAJKHFJAHFKJDAHFJKSDHFKJHSDJKFHDKSJHJKHXCHVUISADFHAUIDHFUIA</p>
</template>
                            </PreviewVue2>`;const y={};y.methods?(y.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`},y.methods.template=function(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},y.methods.sourceCode=function(){return{name:"domeVue2",components:{TinymceVue:_},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}}):y.methods={template(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},sourceCode(){return{name:"domeVue2",components:{TinymceVue:_},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}},source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};y.template=`<PreviewVue2 class="demo-introduction"  :template="template()"  :source="source()">
                              <template v-slot:description><p>sdsVuwDFSDF</p>
</template>
                            </PreviewVue2>`;const Ot=Q({components:{Demo0:w,Demo1:F,Demo2:B,Demo3:v,Demo4:y},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00">#</a> \u524D\u8A00</h1>
<p class="language-vue"><Demo0 data-isComponent="vue" /></p>
<p class="language-html"><Demo1  data-isComponent="react" /></p>
<p class="language-html"><Demo2  data-isComponent="react" /></p>
<p class="language-vue"><Demo3 data-isComponent="vue" /></p>
<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >js</div></pre>
<p class="language-vue"><Demo4 data-isComponent="vue" /></p>
</div></div><PagesRouter  docPath="undefined" mapType="" docRepo="src" pagesName="introduction" />`});export{Ot as default};
