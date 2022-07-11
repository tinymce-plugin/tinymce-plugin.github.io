import"./pinia.js";import{M as n}from"./vue.js";const t=n({components:{},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="\u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09">#</a> \u5F00\u542F\u9AA8\u67B6\u5C4F\uFF08skeletonScreen\uFF09</h1>
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
<img src="/assets/images/skt-demo.png?100%25" alt="skeletonScreen"></p>
</div></div><PagesRouter  docPath="guide/skill/skeleton.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="skeleton_t_9jh83z1657514254575_p_" />`});export{t as default};
