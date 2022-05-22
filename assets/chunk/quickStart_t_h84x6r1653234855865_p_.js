import"./pinia.js";import{J as s}from"./vue.js";const a=s({components:{},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h1>
<hr>
<fv-toc><nav class="table-of-contents"><ul><li><a href="#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B"> \u5FEB\u901F\u4E0A\u624B</a><ul><li><a href="#cdn"> CDN</a></li><li><a href="#npm"> NPM</a></li><li><a href="#%E8%87%AA%E8%A1%8C%E4%B8%8B%E8%BD%BD"> \u81EA\u884C\u4E0B\u8F7D</a></li><li><a href="#%E4%BD%BF%E7%94%A8"> \u4F7F\u7528</a><ul><li><a href="#%E5%BC%95%E5%85%A5"> \u5F15\u5165</a></li><li><a href="#%E5%BC%80%E5%90%AF%E9%AA%A8%E6%9E%B6%E5%B1%8F%EF%BC%88skeletonscreen%EF%BC%89"> \u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09</a></li><li><a href="#%E5%BC%95%E5%85%A5%E4%BD%BF%E7%94%A8%E6%94%B6%E5%BD%95%E7%9A%84%E6%8F%92%E4%BB%B6%E6%88%96%E6%89%A9%E5%B1%95"> \u5F15\u5165\u4F7F\u7528\u6536\u5F55\u7684\u63D2\u4EF6\u6216\u6269\u5C55</a></li></ul></li></ul></li></ul></nav></fv-toc><h3 id="CDN" tabindex="-1"><a class="header-anchor" href="#CDN">#</a> CDN</h3>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>
<p>\u6216</p>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/@npkg/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>
<h3 id="NPM" tabindex="-1"><a class="header-anchor" href="#NPM">#</a> NPM</h3>
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
<p>\u6216</p>
<h3 id="\u81EA\u884C\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u81EA\u884C\u4E0B\u8F7D">#</a> \u81EA\u884C\u4E0B\u8F7D</h3>
<p>\u8FD9\u4E9B\u6587\u4EF6\u53EF\u4EE5\u5728 <a href="https://unpkg.com/browse/tinymce-plugin/" target="_blank"><em><em><strong>unpkg</strong></em></em></a> \u6216\u8005<a href="https://cdn.jsdelivr.net/npm/tinymce-plugin/" target="_blank"><em><em><strong>jsDelivr</strong></em></em></a>  \u8FD9\u4E9B CDN \u4E0A\u6D4F\u89C8\u548C\u4E0B\u8F7D,\u81EA\u884C\u5B58\u653E</p>
<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528">#</a> \u4F7F\u7528</h2>
<h3 id="\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165">#</a> \u5F15\u5165</h3>
<ul>
<li>\u6CA1\u6709\u6784\u5EFA\u5DE5\u5177</li>
</ul>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/@npkg/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>
<ul>
<li>\u4F7F\u7528\u6784\u5EFA\u5DE5\u5177</li>
</ul>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
</code><div class="language-text" >js</div></pre>
<h3 id="\u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09">#</a> \u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09</h3>
<p>\u901A\u8FC7\u914D\u7F6E\u53C2\u6570 <strong><code class="fv-code_inline">skeletonScreen</code></strong> \u6765\u5F00\u542F <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> \u5BCC\u6587\u672C\u6846\u7F16\u8F91\u5668\u7684\u9AA8\u67B6\u5C4F\u529F\u80FD \uFF0C\u6539\u5584 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> \u5BCC\u6587\u672C\u7F16\u8F91\u5668\u52A0\u8F7D\u8FC7\u957F\u7528\u6237\u4F53\u9A8C\u4E0D\u4F73</p>
<div class="tip fv-state-tip fv-tip"><p class="fv-state-title" >\u63D0\u793A</p>
<p>\u8981\u4F7F\u7528 <strong><code class="fv-code_inline">skeletonScreen</code></strong> \u5FC5\u987B \u5F15\u5165  <a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong>tinymce-plugin</strong></a> \u6216 <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong>@npkg/tinymce-plugin</strong></a></p>
</div>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; 
tinymce.<span class="hljs-title function_">init</span>({
  ...
  <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
  ...
})
</code><div class="language-text" >js</div></pre>
<p>\u4F7F\u7528\u6548\u679C
<img src="assets/images/skt-demo.png?100%25" alt="skeletonScreen"></p>
<h3 id="\u5F15\u5165\u4F7F\u7528\u6536\u5F55\u7684\u63D2\u4EF6\u6216\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u4F7F\u7528\u6536\u5F55\u7684\u63D2\u4EF6\u6216\u6269\u5C55">#</a> \u5F15\u5165\u4F7F\u7528\u6536\u5F55\u7684\u63D2\u4EF6\u6216\u6269\u5C55</h3>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; <span class="hljs-comment">//\u4F5C\u4E3A\u4E00\u4E9B\u63D2\u4EF6\u7684\u5FC5\u8981\u4F9D\u8D56</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLayout&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword&quot;</span>;
</code><div class="language-text" >js</div></pre>
<p>\u6216</p>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>; <span class="hljs-comment">//\u4F5C\u4E3A\u4E00\u4E9B\u63D2\u4EF6\u7684\u5FC5\u8981\u4F9D\u8D56</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/plugins/tpIndent2em&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/plugins/tpLayout&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/plugins/tpImportword&quot;</span>;
</code><div class="language-text" >js</div></pre>
</div></div><PagesRouter  docPath="__docs__/quickStart.md" mapType="docs" docRepo="tp-importword" pagesName="quickStart_t_h84x6r1653234855865_p_" />`});export{a as default};
