import"./pinia.js";import{M as s}from"./vue.js";const a=s({components:{},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><!-- [[toc]] -->
<h2 id="\u63D0\u793A\u3001\u6807\u6CE8\u3001\u8B66\u544A\u548C\u5371\u9669\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A\u3001\u6807\u6CE8\u3001\u8B66\u544A\u548C\u5371\u9669\u64CD\u4F5C">#</a> \u63D0\u793A\u3001\u6807\u6CE8\u3001\u8B66\u544A\u548C\u5371\u9669\u64CD\u4F5C</h2>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}">:::tip Tip
\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A
:::
</code><div class="language-text" >md</div></pre>
<div class="tip fv-state-tip fv-tip"><p class="fv-state-title" >Tip</p>
<p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p>
</div>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}">:::info Info
Info
:::
</code><div class="language-text" >md</div></pre>
<div class="info fv-state-tip fv-info"><p class="fv-state-title" >Info</p>
<p>Info</p>
</div>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}">:::warning Warning
\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A
:::
</code><div class="language-text" >md</div></pre>
<div class="warning fv-state-tip fv-warning"><p class="fv-state-title" >Warning</p>
<p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p>
</div>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}">:::danger Danger
\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u64CD\u4F5C
:::
</code><div class="language-text" >md</div></pre>
<div class="danger fv-state-tip fv-danger"><p class="fv-state-title" >Danger</p>
<p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u64CD\u4F5C</p>
</div>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}">:::details Details
 \u8FD9\u662F\u4E00\u4E2A\u8BE6\u60C5
:::
</code><div class="language-text" >md</div></pre>
<details class="fv-state-details"><summary>Details</summary>
<p>\u8FD9\u662F\u4E00\u4E2A\u8BE6\u60C5</p>
</details>
<h2 id="\u4EE3\u7801\u9AD8\u4EAE" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u9AD8\u4EAE">#</a> \u4EE3\u7801\u9AD8\u4EAE</h2>
<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}"><span class="hljs-code">\`\`\`js {4}
import &quot;tinymce-plugin&quot;; 
tinymce.init({
  ...
  skeletonScreen: true,
  ...
})
\`\`\`</span>
</code><div class="language-text" >md</div></pre>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; 
tinymce.<span class="hljs-title function_">init</span>({
  ...
  <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
  ...
})
</code><div class="language-text" >js</div></pre>
<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li></ul><code class=" hljs  hljs-md" @click.stop="()=>{}"><span class="hljs-code">\`\`\`js {1,3-4}
import &quot;tinymce-plugin&quot;; 
tinymce.init({
  ...
  skeletonScreen: true,
  ...
})
\`\`\`</span>
</code><div class="language-text" >md</div></pre>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li ><span>2</span></li><li class="line"><span>3</span></li><li class="line"><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; 
tinymce.<span class="hljs-title function_">init</span>({
  ...
  <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
  ...
})
</code><div class="language-text" >js</div></pre>
</div></div><PagesRouter  docPath="guide/contributing/syntax/tip-code.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="tip-code_t_d90gaz1657514254575_p_" />`});export{a as default};
