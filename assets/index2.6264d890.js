import"./index.79eb138f.js";import{T as M}from"./Tinymce-vue.1480c1d1.js";import"./tp-zh_CN.e06c06f3.js";import{_ as A,r as x,c as F,b as u,a as f,o as R}from"./index.c248884f.js";tinymce.PluginManager.add("tpCollapse",function(t,a){var i="collapse",n=tinymce.util.Tools.resolve("tinymce.util.I18n"),l=tinymce.util.Tools.resolve("tinymce.util.XHR");const o=t.tp$.Tools,r=t.tp$.Components;t.tp$.PanelComponents,l.send({url:"/tinymce/plugins/tpCollapse/collapse.css",async:!1,dataType:"text",success:function(e){r.setCustomTags("collapse","styleSheetLoadList",{default:e},t)},error:function(e){}});var d=function(){t.dom},s=function(e){return'style="'+o.getFormatStyle({width:o.autoToPX(e.width),"border-radius":o.autoToPX(e.borderRadius),margin:o.autoToPX(e.margin)||"0 auto",background:e.BackgroundColor})+'" '},c=function(e){return'style="'+o.getFormatStyle({padding:o.autoToPX(e.mainPadding),background:e.mainBackgroundColor,"border-width":o.autoToPX(e.mainBorderWidth),"border-style":e.mainBorderStyle,"border-color":e.mainBorderColor})+'" '},C=function(e){return'data-top-style="'+o.getFormatStyle({padding:o.autoToPX(e.topPadding)||"1px 40px",background:e.topBackgroundColor,"border-width":o.autoToPX(e.topBorderWidth),"border-style":e.topBorderStyle,"border-color":e.topBorderColor})+'" '+(e.styleTemplates&&'data-template="'+e.styleTemplates+'"')},v=function(e,p){t.undoManager.transact(function(){if(t.focus(),p){t.dom.setStyles(p,{width:o.autoToPX(e.width),margin:o.autoToPX(e.margin),"border-radius":o.autoToPX(e.borderRadius)}),t.dom.setStyles(p.firstChild,{padding:o.autoToPX(e.topPadding)||"1px 0",background:e.topBackgroundColor,"border-width":o.autoToPX(e.topBorderWidth),"border-style":e.topBorderStyle,"border-color":e.topBorderColor}),t.dom.setAttrib(p,"data-top-style",o.getFormatStyle({padding:o.autoToPX(e.topPadding)||"1px 0",background:e.topBackgroundColor,"border-width":o.autoToPX(e.topBorderWidth),"border-style":e.topBorderStyle,"border-color":e.topBorderColor}));let m={padding:o.autoToPX(e.mainPadding),background:e.mainBackgroundColor,"border-width":o.autoToPX(e.mainBorderWidth),"border-style":e.mainBorderStyle,"border-color":e.mainBorderColor};t.dom.setStyles(p.lastChild.firstChild,m),p.tpComponentCmd("upData",{editor:t,style:o.getFormatStyle(m)})}else{var h="tp$collapseID"+new Date().getTime();t.insertContent('<tp-collapse data-id="'+h+'" '+s(e)+" "+C(e)+" ><p>"+n.translate("Title")+' </p><div class="tp-collapse_main"  '+c(e)+" ><p>"+n.translate("Write here")+"</p></div></tp-collapse>")}})};t.ui.registry.getAll().icons.tpCollapse||t.ui.registry.addIcon("tpCollapse",'<svg t="1628739072141" class="icon" width="24px" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2771" width="200" height="200"><path d="M384 620.032c0 5.376-1.984 10.048-5.952 14.08C374.08 638.08 369.344 640 364.032 640L83.968 640c-5.376 0-10.112-1.92-14.08-5.952C65.92 630.08 64 625.344 64 620.032s1.92-10.048 5.952-14.08L209.92 465.984C213.888 462.016 218.624 460.032 224 460.032s10.048 1.984 14.08 6.016l140.032 139.968C382.016 609.92 384 614.656 384 620.032zM960 352C960 369.664 945.664 384 928 384l-448 0C462.336 384 448 369.664 448 352l0 0C448 334.336 462.336 320 480 320l448 0C945.664 320 960 334.336 960 352L960 352zM960 480C960 497.664 945.664 512 928 512l-448 0C462.336 512 448 497.664 448 480l0 0C448 462.336 462.336 448 480 448l448 0C945.664 448 960 462.336 960 480L960 480zM960 608c0 17.6-14.336 32-32 32l-448 0C462.336 640 448 625.6 448 608l0 0C448 590.272 462.336 576 480 576l448 0C945.664 576 960 590.272 960 608L960 608zM960 736c0 17.6-14.336 32-32 32l-448 0C462.336 768 448 753.6 448 736l0 0C448 718.272 462.336 704 480 704l448 0C945.664 704 960 718.272 960 736L960 736z" p-id="2772"></path></svg>');var _=function(){return t.dom.getParent(t.selection.getNode(),"tp-collapse")},w={type:"panel",title:"Panel head",items:[{type:"htmlpanel",html:'<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;"> '+n.translate("Collapse")+" "+n.translate("Panel head")+"</div>"},{type:"grid",columns:2,items:[{type:"input",name:"topPadding",label:"Padding"},{type:"colorinput",name:"topBackgroundColor",label:"Background Color"}]},{type:"grid",columns:2,items:[{type:"input",name:"topBorderWidth",label:"Border Width"},{name:"topBorderStyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]},{type:"grid",columns:2,items:[{type:"colorinput",name:"topBorderColor",label:"Border color"}]}]},S={type:"panel",title:"Panel main",items:[{type:"htmlpanel",html:'<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;"> '+n.translate("Collapse")+" "+n.translate("Panel main")+"</div>"},{type:"grid",columns:2,items:[{type:"input",name:"mainPadding",label:"Padding"},{type:"colorinput",name:"mainBackgroundColor",label:"Background Color"}]},{type:"grid",columns:2,items:[{type:"input",name:"mainBorderWidth",label:"Border Width"},{name:"mainBorderStyle",type:"listbox",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]},{type:"grid",columns:2,items:[{type:"colorinput",name:"mainBorderColor",label:"Border color"}]}]},T={type:"panel",title:"General",items:[{type:"grid",columns:2,items:[{type:"input",name:"width",label:"Width"},{type:"input",name:"margin",label:"Margin"}]},{type:"grid",columns:2,items:[{type:"input",name:"borderRadius",label:"border Radius"},{name:"styleTemplates",type:"listbox",label:"Templates Style",items:[{text:"Select...",value:"default"}]}]}]},B={type:"panel",title:"Advanced",items:[{type:"htmlpanel",html:'<div style="width: 100%; border-bottom: 1px solid #ccc; color: rgba(34,47,62,.7); padding: 4px 0; margin-bottom: 5px; margin-top: -5px;">'+n.translate("Please waiting...")+" </div>"}]},g=[];g.push(T),g.push(w),g.push(S),g.push(B),!window.tp$State&&(window.tp$State={hhh:0}),window.tp$State.iframeLayout={margin:"2px",padding:"2px"};var k=function(e){return e?{width:t.dom.getSize(e).w+"px",margin:t.dom.getStyle(e,"margin"),styleTemplates:"default",borderRadius:t.dom.getStyle(e,"border-radius"),topPadding:t.dom.getStyle(e.firstChild,"padding"),topBackgroundColor:t.dom.toHex(t.dom.getStyle(e.firstChild,"background-color")),topBorderColor:t.dom.toHex(t.dom.getStyle(e.firstChild,"border-color")),topBorderStyle:t.dom.getStyle(e.firstChild,"border-style"),topBorderWidth:t.dom.getStyle(e.firstChild,"border-width")+"",mainPadding:t.dom.getStyle(e.lastChild.firstChild,"padding"),mainBackgroundColor:t.dom.toHex(t.dom.getStyle(e.lastChild.firstChild,"background-color")),mainBorderColor:t.dom.toHex(t.dom.getStyle(e.lastChild.firstChild,"border-color")),mainBorderStyle:t.dom.getStyle(e.lastChild.firstChild,"border-style"),mainBorderWidth:t.dom.getStyle(e.lastChild.firstChild,"border-width")+""}:{width:((t.dom.doc.body.clientWidth-6)/t.dom.doc.body.clientWidth*100).toFixed(2)+"%",styleTemplates:"default"}},P=function(e){let p=_(),h=k(p);var m={title:i,body:{type:"tabpanel",tabs:g},buttons:[{type:"cancel",name:"closeButton",text:"Cancel"},{type:"submit",name:"Save",text:"Save",primary:!0}],initialData:h,onSubmit:function(b){var y=b.getData();console.log(y),v(y,p),b.close()}};t.windowManager.open(m)},D=function(e){},$=function(e,p,h){const m=function(b,y){h.setActive(b),D(y.node)};return e.selection.selectorChangedWithUnbind(p.join(","),m).unbind};return t.ui.registry.addToggleButton("tpCollapse",{icon:"tpCollapse",tooltip:i,onAction:function(){console.log(t.selection),P()},onSetup:function(e){d(),$(t,["tp-collapse"],e)}}),t.ui.registry.addMenuItem("tpCollapse",{text:i,icon:"tpCollapse",onSetup:function(){d()},onAction:function(){t.windowManager.open(dialogConfig)}}),t.addCommand("tpCollapse",v),{getMetadata:function(){return{name:i,url:"https://github.com/Five-great/tinymce-plugins"}}}});const X={components:{TinymceVue:M},name:"vueDemo",data(){return{content:"dsdsdsdsd",content2:"dsdsddddddddddddddsdsd",vueDemoOpt:"",vueDemoOpt2:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs",toolbar:["|code indent2em  tpCollapse tpTabs"],toolbar_sticky:!0}}},methods:{upfileFun(t){let a=this,i=new FormData;i.append("dirPath","public"),console.log(t.target.files);let n=t.target.files;for(let l=0;l<n.length;l++){n[l].orginalname=n[l].webkitRelativePath;let o=n[l].webkitRelativePath.split("/");o.pop(),i.append(o.join("/"),n[l])}a.$api({data:i}).then(l=>{console.log(l)})},upfileUp(){this.$proxyServer({fileUrl:"https://xwjywjb.obs.cn-southwest-2.myhuaweicloud.com/db/UploadFile/2021/8/25/5933e7aa-01dc-43dc-b99d-a2ad7e826921.docx",timeout:84e4}).then(a=>{console.log(a)})},init(){let t=this;t.vueDemoOpt={base_url:"/tinymce",toolbar_groups:{formatting:{text:"\u6587\u5B57\u683C\u5F0F",tooltip:"Formatting",items:"bold italic underline | superscript subscript"},alignment:{icon:"align-left",tooltip:"alignment",items:"alignleft aligncenter alignright alignjustify"}},extend_groups_addicon:{mygroupsicon:'<img  src="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" style="width:20px;" >'},toolbar_sticky:!0,extend_groups:{mygroups:{icon:"mygroupsicon",tooltip:"mygroupsicon",isSelect:!0,type:"togglemenuitem",items:[{type:"selectItem",text:"\u5B57\u4F53",value:"12px 14px 16px 18px 24px 36px 48px 56px 72px",default:"16px",styleSelector:"font-size",onAction:function(a,i){a.formatter.apply("fontsize",{value:i})}},{icon:"underline",text:"\u4E0B\u5212\u7EBF",value:"underline",styleSelector:"text-decoration"},{icon:"bold",text:"\u52A0\u7C97",value:"bold",selector:"strong"},{icon:"italic",text:"\u659C\u4F53",value:"italic",selector:"em"}]}},plugins:"print tp preview extendgroups clearhtml searchreplace  insertdatetime autolink layout fullscreen line-height image imagetools media upfile link   autosave code  table  advlist lists checklist hr emoticons autosave bdmap indent2em   axupimgs  letterspacing  quickbars attachment wordcount template  autoresize importword searchreplace pagebreak pageembed  tpCollapse tpTabs",toolbar:["|code formatselect fontselect  fontsizeselect   forecolor backcolor bold italic underline strikethrough link alignment alignmentdrop undo redo  restoredraft  | ","layout upfile importword hr lineheight letterspacing line-height indent2em table bdmap image media attachment emoticons mygroups  preview searchreplace pagebreak template pageembed bullist numlist checklist tpCollapse tpTabs removeformat"],branding:!1,menubar:!0,image_caption:!0,language:"zh_CN",schema:"html5",min_height:400,max_height:700,template_replace_values:{username:"Jack Black",staffid:"991234",inboth_username:"Famous Person",inboth_staffid:"2213"},template_preview_replace_values:{preview_username:"Jack Black",preview_staffid:"991234",inboth_username:"Famous Person",inboth_staffid:"2213"},templates:[{title:"Date modified example",description:"Adds a timestamp indicating the last time the document modified.",content:'<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>'},{title:"Replace values example",description:"These values will be replaced when the template is inserted into the editor content.",content:"<p>Name: {$username}, StaffID: {$staffid}</p>"},{title:"Replace values preview example",description:"These values are replaced in the preview, but not when inserted into the editor content.",content:"<p>Name: {$preview_username}, StaffID: {$preview_staffid}</p>"},{title:"Replace values preview and content example",description:"These values are replaced in the preview, and in the content.",content:"<p>Name: {$inboth_username}, StaffID: {$inboth_staffid}</p>"}],table_default_attributes:{border:"1"},table_default_styles:{"border-collapse":"collapse",width:"100%"},table_header_type:"sectionCells",table_responsive_width:!0,images_upload_handler:function(a,i,n,l){var o=a.blob(),r=new FileReader,d="";r.onload=function(c){d=c.target.result};var s=new FormData;s.append("file",o),t.$http({data:s,type:"GET",url:"/tinymce/api/file.json",header:{"Content-Type":"multipart/form-data"},onUploadProgress(c){l(c+"%")}}).then(function(c){c.code==200?i(d):n("\u4E0A\u4F20\u5931\u8D25:"+s.data)}).catch(function(c){n("\u4E0A\u4F20\u5931\u8D25:"+c.message)}),r.readAsDataURL(o)},file_picker_callback:function(a,i,n){var l=".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4",o=document.createElement("input");o.setAttribute("type","file"),o.setAttribute("accept",l),o.click(),o.onchange=function(){var r=this.files[0],d=new FormData;d.append("file",r),t.$http.get({data:d,url:"./api/file.json",header:{"Content-Type":"multipart/form-data"},xhr:t.xhrOnProgress(function(s){const c=(s.loaded/s.total*100|0)+"%";progressCallback(c)})}).then(s=>{a(s.data,{text:s.data})}).catch(function(s){failFun("\u4E0A\u4F20\u5931\u8D25:"+s.message)})}},file_callback:function(a,i){var n=new FormData;n.append("file",a),console.log(a),t.$http({data:n,method:"POST",url:"/tinymce/api/file.json",header:{"Content-Type":"multipart/form-data"}}).then(function(l){console.log(l),l.code==200&&i(l.data,{text:a.name})}).catch(function(l){})},tp_attachment_assets_path:"./plugins/attachment/icons",tp_attachment_icons_path:"https://unpkg.com/@npkg/tinymce-plugins/plugins/attachment/icons",tp_attachment_upload_handler:function(a,i,n,l){var o=new FormData;o.append("file",a),t.$http({data:o,type:"GET",url:"/tinymce/api/file.json",header:{"Content-Type":"multipart/form-data"},xhr:t.xhrOnProgress(function(r){const d=(r.loaded/r.total*100|0)+"%";l(d)})}).then(function(r){r.code==200?i(r.data):n("\u4E0A\u4F20\u5931\u8D25:"+r.data)}).catch(function(r){n("\u4E0A\u4F20\u5931\u8D25:"+r.message)})},attachment_max_size:5009715200}}},created(){this.init()}},L={class:"vueDemo2"},W=u("h1",null,"\u5C55\u793A\u663E\u793A2",-1),z=["innerHTML"],H=u("h1",null,"\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF",-1),I={class:"vueDemo"},N=u("h1",null,"\u5C55\u793A\u663E\u793A",-1),O=["innerHTML"];function V(t,a,i,n,l,o){const r=x("tinymce-vue"),d=x("PagesRouter");return R(),F("div",null,[u("div",L,[f(r,{modelValue:l.content2,"onUpdate:modelValue":a[0]||(a[0]=s=>l.content2=s),options:l.vueDemoOpt2},null,8,["modelValue","options"])]),W,u("div",{innerHTML:l.content2},null,8,z),H,u("div",I,[f(r,{modelValue:l.content,"onUpdate:modelValue":a[1]||(a[1]=s=>l.content=s),options:l.vueDemoOpt},null,8,["modelValue","options"])]),N,u("div",{innerHTML:l.content},null,8,O),f(d,{pagesName:"vuedemo"})])}var J=A(X,[["render",V]]);export{J as default};
