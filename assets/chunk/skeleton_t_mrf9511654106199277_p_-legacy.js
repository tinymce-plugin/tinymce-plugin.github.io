System.register(["./pinia-legacy.js","./vue-legacy.js"],(function(n){"use strict";var s;return{setters:[function(){},function(n){s=n.J}],execute:function(){n("default",s({components:{},template:'<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="开启骨架屏（skeletonScreen）" tabindex="-1"><a class="header-anchor" href="#开启骨架屏（skeletonScreen）">#</a> 开启骨架屏（skeletonScreen）</h1>\n<p>通过配置参数 <strong><code class="fv-code_inline">skeletonScreen</code></strong> 来开启 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> 富文本框编辑器的骨架屏功能 ，改善 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> 富文本编辑器加载过长用户体验不佳</p>\n<div class="tip fv-state-tip fv-tip"><p class="fv-state-title" >提示</p>\n<p>要使用 <strong><code class="fv-code_inline">skeletonScreen</code></strong> 必须 引入  <a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong>tinymce-plugin</strong></a> 或 <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong>@npkg/tinymce-plugin</strong></a></p>\n</div>\n<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li class="line"><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>; \ntinymce.<span class="hljs-title function_">init</span>({\n  ...\n  <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,\n  ...\n})\n</code><div class="language-text" >js</div></pre>\n<p>使用效果\n<img src="/assets/images/skt-demo.png?100%25" alt="skeletonScreen"></p>\n</div></div><PagesRouter  docPath="guide/skill/skeleton.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="skeleton_t_mrf9511654106199277_p_" />'}))}}}));
