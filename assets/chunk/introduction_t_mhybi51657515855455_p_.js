import"./pinia.js";import{M as s}from"./vue.js";const a=s({components:{},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="\u{1F680}tpImportword" tabindex="-1"><a class="header-anchor" href="#\u{1F680} tpImportword">#</a> \u{1F680} tpImportword</h1>
<p><a href="https://github.com/tinymce-plugin" target="_blank"><img src="https://tinymce-plugin.github.io/badge.svg" alt="tinymce-plugin"></a>\xA0
<a href="https://www.npmjs.com/package/@tinymce-plugin/tp-importword" target="_blank"><img src="https://img.shields.io/npm/v/@tinymce-plugin/tp-importword.svg" alt="release candidate"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/badge/tinymce-5.2.0~5.x.x-green.svg" alt="tinymce Version"></a>\xA0
<a href="https://github.com/tinymce-plugin/tp-indent2em/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg" alt="GitHub license"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/npm/dw/@tinymce-plugin/tp-importword" alt="tinymce Version"></a></p>
<p>tpImportword \u63D2\u4EF6\u7528\u4E8E <code class="fv-code_inline">tinymce</code> \u5BCC\u6587\u672C\u7F16\u8F91\u5668 \u5B9E\u73B0\u5BFC\u5165word\u529F\u80FD, \u5E76\u4E14\u6700\u5927\u53EF\u80FD\u4FDD\u5B58\u5E03\u5C40\u6837\u5F0F\u4E0E\u989C\u8272\u7B49</p>
<p>\u6B22\u8FCE\u63D0\u4F9B\u597D\u7684\u5EFA\u8BAE \u6216\u8005\u53CD\u9988bug</p>
<div class="warning fv-state-tip fv-warning"><p class="fv-state-title" ></p>
<h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F">#</a> \u6CE8\u610F</h3>
<p>\u76EE\u524D\u53CA\u652F\u6301 docx \u6587\u4EF6</p>
</div>
<div class="tip fv-state-tip fv-tip"><p class="fv-state-title" >\u63D0\u793A</p>
<p>\u5BFC\u5165word \u63D2\u4EF6\u5BFC\u5165\u7684\u56FE\u7247\u9ED8\u8BA4\u662Fbase64 \uFF0C\u9700\u8981\u914D\u7F6E <strong><code class="fv-code_inline">automatic_uploads</code></strong> \u5C5E\u6027,\u540C\u65F6\u9700\u8981\u4FDD\u8BC1\u914D\u7F6E\u4E86 <strong><code class="fv-code_inline">images_upload_handler</code></strong>, \u53EF\u5C06\u5BFC\u5165\u7684\u56FE\u7247\u81EA\u52A8\u4E0A\u4F20\u670D\u52A1\u5668\u8F6C\u6210url\u94FE\u63A5</p>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@tinymce-plugin/tp-importword&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">images_upload_handler</span>: <span class="hljs-function">(<span class="hljs-params">blobInfo, succFun, failFun</span>)=&gt;</span>{ ... }
   <span class="hljs-attr">automatic_uploads</span>: <span class="hljs-literal">true</span>
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })
</code><div class="language-text" >js</div></pre>
</div>
</div></div><PagesRouter  docPath="__docs__/introduction.md" mapType="docs" docRepo="tp-importword" pagesName="introduction_t_mhybi51657515855455_p_" />`});export{a as default};
