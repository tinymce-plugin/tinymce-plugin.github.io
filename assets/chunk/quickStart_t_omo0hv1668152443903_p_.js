import"./pinia.js";import{M as s}from"./vue.js";const l=s({components:{},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h1>
<fv-toc><nav class="table-of-contents"></nav></fv-toc><h2 id="\u65B9\u5F0F1" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1">#</a> \u65B9\u5F0F1</h2>
<hr>
<blockquote>
<p><strong>\u4F7F\u7528 tinymce-plugin \u5E93</strong></p>
</blockquote>
<h3 id="CDN" tabindex="-1"><a class="header-anchor" href="#CDN">#</a> CDN</h3>
<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/plugins/tpImportword/plugin.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><span class="hljs-comment">&lt;!--\u5F15\u5165--&gt;</span>

<span class="hljs-comment">&lt;!-- \u4F7F\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
   tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</code><div class="language-text" >html</div></pre>
<h3 id="NPM" tabindex="-1"><a class="header-anchor" href="#NPM">#</a> NPM</h3>
<h4 id="\u4E0B\u8F7Dtinymce-plugin" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D tinymce-plugin">#</a> \u4E0B\u8F7D tinymce-plugin</h4>
<codeGroup>
 <codeGroupItem title="NPM" active>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i tinymce-plugin 
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
<codeGroupItem title="YARN">
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> tinymce-plugin -D 
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
</codeGroup>
<h4 id="\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528</h4>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })

</code><div class="language-text" >js</div></pre>
<h2 id="\u65B9\u5F0F2" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F2">#</a> \u65B9\u5F0F2</h2>
<hr>
<blockquote>
<p><strong>\u4F7F\u7528\u5355\u72EC <a href="https://www.npmjs.com/package/@tinymce-plugin/tp-importword" target="_blank"><em><em>@tinymce-plugin/tp-importword</em></em></a></strong></p>
</blockquote>
<h4 id="\u4E0B\u8F7D@tinymce-plugin/tp-importword" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D @tinymce-plugin/tp-importword">#</a> \u4E0B\u8F7D @tinymce-plugin/tp-importword</h4>
<codeGroup>
 <codeGroupItem title="NPM" active>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i @tinymce-plugin/tp-importword
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
<codeGroupItem title="YARN">
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> @tinymce-plugin/tp-importword -D 
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
</codeGroup>
<h4 id="\u9879\u76EE\u4E2D\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528-1">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528</h4>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@tinymce-plugin/tp-importword&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>
  ...
 })
</code><div class="language-text" >js</div></pre>
<h2 id="\u65B9\u5F0F3" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F3">#</a> \u65B9\u5F0F3</h2>
<hr>
<blockquote>
<p><strong>\u81EA\u884C\u4E0B\u8F7D\u4F7F\u7528</strong>
\u8FD9\u4E9B\u6587\u4EF6\u53EF\u4EE5\u5728 <a href="https://unpkg.com/browse/tinymce-plugin/" target="_blank"><em><em><strong>unpkg</strong></em></em></a> \u6216\u8005<a href="https://cdn.jsdelivr.net/npm/tinymce-plugin/" target="_blank"><em><em><strong>jsDelivr</strong></em></em></a>  \u8FD9\u4E9B CDN \u4E0A\u6D4F\u89C8\u548C\u4E0B\u8F7D,\u81EA\u884C\u5B58\u653E\u4E0E\u4F7F\u7528</p>
</blockquote>
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
</div></div><PagesRouter  docPath="__docs__/quickStart.md" mapType="docs" docRepo="tp-importword" pagesName="quickStart_t_omo0hv1668152443903_p_" />`});export{l as default};
