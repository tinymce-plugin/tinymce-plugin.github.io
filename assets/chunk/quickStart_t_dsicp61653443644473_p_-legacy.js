System.register(["./pinia-legacy.js","./vue-legacy.js"],(function(s){"use strict";var n;return{setters:[function(){},function(s){n=s.J}],execute:function(){s("default",n({components:{},template:'<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手">#</a> 快速上手</h1>\n<fv-toc><nav class="table-of-contents"></nav></fv-toc><h2 id="方式1" tabindex="-1"><a class="header-anchor" href="#方式1">#</a> 方式1</h2>\n<hr>\n<blockquote>\n<p><strong>使用 tinymce-plugin 库</strong></p>\n</blockquote>\n<h3 id="CDN" tabindex="-1"><a class="header-anchor" href="#CDN">#</a> CDN</h3>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/plugins/tpImportword/plugin.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><span class="hljs-comment">&lt;!--引入--&gt;</span>\n\n<span class="hljs-comment">&lt;!-- 使用 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n   tinymce.<span class="hljs-title function_">init</span>({\n  ...\n   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>\n   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>\n  ...\n })\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</code><div class="language-text" >html</div></pre>\n<h3 id="NPM" tabindex="-1"><a class="header-anchor" href="#NPM">#</a> NPM</h3>\n<h4 id="下载tinymce-plugin" tabindex="-1"><a class="header-anchor" href="#下载 tinymce-plugin">#</a> 下载 tinymce-plugin</h4>\n<codeGroup>\n <codeGroupItem title="NPM" active>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i tinymce-plugin \n</code><div class="language-text" >sh</div></pre>\n</codeGroupItem>\n<codeGroupItem title="YARN">\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> tinymce-plugin -D \n</code><div class="language-text" >sh</div></pre>\n</codeGroupItem>\n</codeGroup>\n<h4 id="项目中使用" tabindex="-1"><a class="header-anchor" href="#项目中使用">#</a> 项目中使用</h4>\n<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;\n tinymce.<span class="hljs-title function_">init</span>({\n  ...\n   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>\n   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>\n  ...\n })\n\n</code><div class="language-text" >js</div></pre>\n<h2 id="方式2" tabindex="-1"><a class="header-anchor" href="#方式2">#</a> 方式2</h2>\n<hr>\n<blockquote>\n<p><strong>使用单独 <a href="https://www.npmjs.com/package/@tinymce-plugin/tp-importword" target="_blank"><em><em>@tinymce-plugin/tp-importword</em></em></a></strong></p>\n</blockquote>\n<h4 id="下载@tinymce-plugin/tp-importword" tabindex="-1"><a class="header-anchor" href="#下载 @tinymce-plugin/tp-importword">#</a> 下载 @tinymce-plugin/tp-importword</h4>\n<codeGroup>\n <codeGroupItem title="NPM" active>\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i @tinymce-plugin/tp-importword\n</code><div class="language-text" >sh</div></pre>\n</codeGroupItem>\n<codeGroupItem title="YARN">\n<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> @tinymce-plugin/tp-importword -D \n</code><div class="language-text" >sh</div></pre>\n</codeGroupItem>\n</codeGroup>\n<h4 id="项目中使用-1" tabindex="-1"><a class="header-anchor" href="#项目中使用-1">#</a> 项目中使用</h4>\n<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li class="line"><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@tinymce-plugin/tp-importword&quot;</span>;\n tinymce.<span class="hljs-title function_">init</span>({\n  ...\n   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>\n   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpImportword&quot;</span>\n  ...\n })\n</code><div class="language-text" >js</div></pre>\n<h2 id="方式3" tabindex="-1"><a class="header-anchor" href="#方式3">#</a> 方式3</h2>\n<hr>\n<blockquote>\n<p><strong>自行下载使用</strong>\n这些文件可以在 <a href="https://unpkg.com/browse/tinymce-plugin/" target="_blank"><em><em><strong>unpkg</strong></em></em></a> 或者<a href="https://cdn.jsdelivr.net/npm/tinymce-plugin/" target="_blank"><em><em><strong>jsDelivr</strong></em></em></a>  这些 CDN 上浏览和下载,自行存放与使用</p>\n</blockquote>\n</div></div><PagesRouter  docPath="__docs__/quickStart.md" mapType="docs" docRepo="tp-importword" pagesName="quickStart_t_dsicp61653443644473_p_" />'}))}}}));
