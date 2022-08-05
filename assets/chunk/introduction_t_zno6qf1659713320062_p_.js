import"./pinia.js";import"./tinymce.js";import"./tinymce-plugin.js";import{E as t}from"./Editor.js";import"./index2.js";import{M as i}from"./vue.js";module.exports=require("./plugin.min.js");module.exports=require("./plugin.min.js");module.exports=require("./plugin.min.js");const s={name:"domeVue3",components:{TinymceVue:t},data(){return{content:"\u6B22\u8FCE\u6765\u5230 Tinymce-plugin",tinymceOptions:{min_height:200,max_height:700,skeletonScreen:!0,menubar:!1,base_url:"/tinymce",plugins:"tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpLineheight tpLetterspacing tpImportword tpLogicflow preview",toolbar:["|code tpIndent2em tpCollapse tpTabs tpButtons  tpLayout tpLineheight tpLetterspacing tpImportword tpLogicflow | Preview"],images_upload_handler:function(n,l,e){var a=n.blob();a.name||(a.name="vue-"+Date.now()+Math.floor(Math.random()*1e3)+".png");var p=window.URL||window.webkitURL||window;l(p.createObjectURL(a))}}}}};s.methods?s.methods.source=function(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li><li ><span>43</span></li><li ><span>44</span></li><li ><span>45</span></li><li ><span>46</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLayout&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLineheight&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLetterspacing&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword&quot;</span>; 
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u6B22\u8FCE\u6765\u5230 Tinymce-plugin&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpLineheight tpLetterspacing tpImportword tpLogicflow preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons  tpLayout tpLineheight tpLetterspacing tpImportword tpLogicflow | Preview&#x27;</span>],
                <span class="hljs-attr">images_upload_handler</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">blobInfo, succFun, failFun</span>) {
                <span class="hljs-keyword">var</span> file = blobInfo.<span class="hljs-title function_">blob</span>();
                      <span class="hljs-keyword">if</span> (!file.<span class="hljs-property">name</span>) file.<span class="hljs-property">name</span> = <span class="hljs-string">&#x27;vue-&#x27;</span> + <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() + <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">1000</span>) + <span class="hljs-string">&#x27;.png&#x27;</span>;
                    <span class="hljs-keyword">var</span> <span class="hljs-variable constant_">DOMURL</span> = <span class="hljs-variable language_">window</span>.<span class="hljs-property">URL</span> || <span class="hljs-variable language_">window</span>.<span class="hljs-property">webkitURL</span> || <span class="hljs-variable language_">window</span>;
                    <span class="hljs-title function_">succFun</span>(<span class="hljs-variable constant_">DOMURL</span>.<span class="hljs-title function_">createObjectURL</span>(file))
                }
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}:s.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li><li ><span>43</span></li><li ><span>44</span></li><li ><span>45</span></li><li ><span>46</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLayout&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLineheight&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpLetterspacing&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword&quot;</span>; 
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u6B22\u8FCE\u6765\u5230 Tinymce-plugin&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpLineheight tpLetterspacing tpImportword tpLogicflow preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons  tpLayout tpLineheight tpLetterspacing tpImportword tpLogicflow | Preview&#x27;</span>],
                <span class="hljs-attr">images_upload_handler</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">blobInfo, succFun, failFun</span>) {
                <span class="hljs-keyword">var</span> file = blobInfo.<span class="hljs-title function_">blob</span>();
                      <span class="hljs-keyword">if</span> (!file.<span class="hljs-property">name</span>) file.<span class="hljs-property">name</span> = <span class="hljs-string">&#x27;vue-&#x27;</span> + <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() + <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">1000</span>) + <span class="hljs-string">&#x27;.png&#x27;</span>;
                    <span class="hljs-keyword">var</span> <span class="hljs-variable constant_">DOMURL</span> = <span class="hljs-variable language_">window</span>.<span class="hljs-property">URL</span> || <span class="hljs-variable language_">window</span>.<span class="hljs-property">webkitURL</span> || <span class="hljs-variable language_">window</span>;
                    <span class="hljs-title function_">succFun</span>(<span class="hljs-variable constant_">DOMURL</span>.<span class="hljs-title function_">createObjectURL</span>(file))
                }
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};s.template=`<Preview class="demo-introduction_t_zno6qf1659713320062_p_" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                 
                              </Preview>`;const m=i({components:{Demo0:s},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="Welcome!" tabindex="-1"><a class="header-anchor" href="#\u{1F44B} Welcome !">#</a> <strong>\u{1F44B} Welcome !</strong></h1>
<hr>
<blockquote>
<p>\u6B22\u8FCE\u6765\u5230 <a href="https://github.com/tinymce-plugin" target="_blank"><strong><code class="fv-code_inline">Tinymce-plugin</code></strong> </a></p>
<p>\u8FD9\u662F\u4E00\u4E2A\u4E13\u6CE8 \u63D0\u4F9B <strong>\u5F3A\u5927\u3001\u597D\u7528\u3001\u4E30\u5BCC</strong> \u7684 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> \u5BCC\u6587\u672C\u7F16\u8F91\u5668 <strong>\u63D2\u4EF6</strong>\u3001<strong>\u6269\u5C55</strong> \u548C <strong>\u6280\u672F</strong> \u7684\u6280\u672F\u793E\u533A\uFF0C\u65B9\u4FBF <strong>\u4EA4\u6D41\u8BA8\u8BBA</strong>\uFF0C<strong>\u5206\u4EAB\u7ECF\u9A8C</strong> \u3002</p>
<p>\u672C\u793E\u533A\u6709\u591A\u4E2A\u4E0D\u9519\u7684\u63D2\u4EF6\u6216\u8005\u9879\u76EE\uFF0C\u6B22\u8FCE Star \u2B50 \u5173\u6CE8~</p>
</blockquote>
<h1 id="\u2728Tinymce-plugin" tabindex="-1"><a class="header-anchor" href="#\u2728Tinymce-plugin">#</a> \u2728Tinymce-plugin</h1>
<hr>
<p><a href="https://github.com/tinymce-plugin" target="_blank"><img src="https://tinymce-plugin.github.io/badge.svg" alt="tinymce-plugin"></a>\xA0
<a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><img src="https://img.shields.io/npm/v/tinymce-plugin.svg" alt="release candidate"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/badge/tinymce-5.2.0~5.x.x-green.svg" alt="tinymce Version"></a>\xA0
<a href="https://github.com/tinymce-plugin/tp-indent2em/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg" alt="GitHub license"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/npm/dm/@npkg/tinymce-plugins" alt="tinymce Version"></a></p>
<div class="tip fv-state-tip fv-tip">
<p><strong>Tinymce-plugin \u793E\u533A \u6240\u6709\u7A33\u5B9A\u63D2\u4EF6 \u5C06\u6536\u5F55\u5728 <a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong>tinymce-plugin</strong></a> \u548C <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong>@npkg/tinymce-plugin</strong></a> \u4E2D\u3002\uFF08\u4E8C\u8005\u540C\u6B65\uFF09</strong></p>
</div>
<!--\u{1F680} \u8868\u793A\u5DF2\u7ECF\u5B9E\u73B0\u7684\u529F\u80FD

\u{1F477} \u8868\u793A\u8FDB\u884C\u4E2D\u7684\u529F\u80FD

\u23F3 \u8868\u793A\u89C4\u5212\u4E2D\u7684\u529F\u80FD

\u{1F4A1} \u60F3\u6CD5

\u{1F4DD} \u8BA1\u5212

 \u4F46\u662F\u{1F947}\u{1F948}\u{1F949}\u{1F3C5}\u{1F396}\u{1F3C6}\u{1F525}-->
<div class="warning fv-state-tip fv-warning"><p class="fv-state-title" ></p>
<h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F">#</a> \u6CE8\u610F</h3>
<p>\u65E7\u7248\u5305 <a href="https://www.npmjs.com/package/@npkg/tinymce-plugins" target="_blank"><s><strong><code class="fv-code_inline">@npkg/tinymce-plugins</code></strong></s></a> \u505C\u6B62\u7EF4\u62A4</p>
<p>\u7531<a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong><code class="fv-code_inline">tinymce-plugin</code></strong></a> \u548C <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong><code class="fv-code_inline">@npkg/tinymce-plugin</code></strong></a> \u66FF\u4EE3</p>
</div>
<h1 id="\u200D\u2642\uFE0F\u52A0\u5165\u793E\u533A" tabindex="-1"><a class="header-anchor" href="#\u{1F64B}\u200D\u2642\uFE0F \u52A0\u5165\u793E\u533A">#</a> \u{1F64B}\u200D\u2642\uFE0F \u52A0\u5165\u793E\u533A</h1>
<hr>
<p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528tinymce\uFF0C\u4E0D\u59A8\u52A0\u5165 Tinymce-plugin \u7EC4\u7EC7\uFF0C\u548C\u6211\u4EEC\u4E00\u8D77\u7EF4\u62A4\u53D1\u5C55\uFF0C\u5171\u540C\u6210\u957F\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u52A0\u5165\uFF1A</p>
<ul>
<li>\u76F4\u63A5\u5728\u8FD9\u4E2A <a href="https://github.com/tinymce-plugin/tinymce-plugin.github.io/issues/3" target="_blank"><em><em><strong>issue</strong></em></em></a> \u4E0A\u8BC4\u8BBA\uFF0C\u544A\u77E5\u6211\u4EEC\u4F60\u60F3\u52A0\u5165 tinymce-plugin\u3002</li>
<li>\u53D1\u9001\u90AE\u4EF6\u5230 <a href="mailto:fivecc@qq.com?Subject=%E5%8A%A0%E5%85%A5Tinymce-plugin%E7%A4%BE%E5%8C%BA%E7%BB%84%E7%BB%87" target="_blank"><strong>fivecc@qq.com</strong></a>\uFF0C\u5199\u660E\u4F60\u7684 GitHub ID\uFF0C\u5982 five-great\u3002
\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u4F60\u52A0\u5165\u6211\u4EEC\u4E4B\u540E\uFF0C\u4F60\u4F5C\u4E3A GitHub tinymce-plugin \u7EC4\u7EC7\u6210\u5458\u7684\u4FE1\u606F\u662F\u5904\u4E8E\u9690\u85CF\u72B6\u6001\u7684\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5728\u4F60\u7684\u4E2A\u4EBA GitHub \u8D44\u6599\u9875\u4E0A\u5C55\u793A tinymce-plugin \u7EC4\u7EC7\uFF0C\u4F60\u53EF\u4EE5\u5728 <a href="https://github.com/orgs/tinymce-plugin/people" target="_blank"><em><em><strong>Tinymce-plugin People</strong></em></em></a> \u5904\u5C06\u4F60\u7684\u4FE1\u606F\u4ECE private \u201C\u79C1\u6709\u201D\u6539\u4E3A public \u201C\u516C\u5F00\u201D\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u63A8\u8350\u8BBE\u7F6E\u4E3A\u516C\u5F00\u3002</li>
</ul>
<h1 id="\u4EA4\u6D41\u8BA8\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u{1F4AC} \u4EA4\u6D41\u8BA8\u8BBA">#</a> \u{1F4AC} \u4EA4\u6D41\u8BA8\u8BBA</h1>
<hr>
<ul>
<li>
<p>\u6B22\u8FCE\u524D\u5F80 <a href="https://github.com/tinymce-plugin/tinymce-plugin.github.io/discussions" target="_blank"><em><em><strong>Discussions</strong></em></em></a> \u4E0A\u53C2\u4E0E\u8BA8\u8BBA\u6216\u54A8\u8BE2\u95EE\u9898\u3002</p>
</li>
<li>
<p>\u6B22\u8FCE\u52A0\u5165 <a href="https://jq.qq.com/?_wv=1027&amp;k=JgsnIlUw" target="_blank"><em><em><strong><code class="fv-code_inline">qq\u4EA4\u6D41\u7FA4 143085779</code></strong></em></em></a>
<img src="https://tinymce-plugin.github.io/qq.png#pic_center" alt="qq\u7FA4\u4E8C\u7EF4\u7801"></p>
</li>
</ul>
<h1 id="\u8D21\u732E\u8005\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u{1F44D} \u8D21\u732E\u8005\u5217\u8868">#</a> \u{1F44D} \u8D21\u732E\u8005\u5217\u8868</h1>
<hr>
<p><a href="https://opencollective.com/tinymce-plugin/contributors.svg?width=890&button=false"><img src="https://opencollective.com/tinymce-plugin/contributors.svg?width=890&button=false" /></a></p>
<hr>
<codeBox><codeBoxItem title="HTML"><pre><pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&#x27;basic-example&#x27;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u{1F44B} Welcome !<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;display: block; margin-left: auto; margin-right: auto;&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tiny Logo&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/thinymce-pluginIcon.png&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;TinyMCE Logo&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;128&quot;</span>  /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u6B22\u8FCE\u6765\u5230 <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://github.com/tinymce-plugin&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">code</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fv-code_inline&quot;</span>&gt;</span>Tinymce-plugin<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u4E13\u6CE8 \u63D0\u4F9B <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u5F3A\u5927\u3001\u597D\u7528\u3001\u4E30\u5BCC<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> \u7684 <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.tiny.cloud&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">code</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fv-code_inline&quot;</span>&gt;</span>tinymce<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span> \u5BCC\u6587\u672C\u7F16\u8F91\u5668 <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u63D2\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\u3001<span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u6269\u5C55<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> \u548C <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u6280\u672F<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> \u7684\u6280\u672F\u793E\u533A\uFF0C\u65B9\u4FBF <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u4EA4\u6D41\u8BA8\u8BBA<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\uFF0C<span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>\u5206\u4EAB\u7ECF\u9A8C<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> \u3002<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u672C\u793E\u533A\u6709\u591A\u4E2A\u4E0D\u9519\u7684\u63D2\u4EF6\u6216\u8005\u9879\u76EE\uFF0C\u6B22\u8FCE Star \u2B50 \u5173\u6CE8~<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span> \u2728Tinymce-plugin<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://github.com/tinymce-plugin&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://tinymce-plugin.github.io/badge.svg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-symbol">&amp;nbsp;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.npmjs.com/package/tinymce-plugin&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.shields.io/npm/v/tinymce-plugin.svg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;release candidate&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-symbol">&amp;nbsp;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.tiny.cloud&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.shields.io/badge/tinymce-5.2.0~5.x.x-green.svg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;tinymce Version&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-symbol">&amp;nbsp;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://github.com/tinymce-plugin/tinymce-plugin/blob/main/LICENSE&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;GitHub license&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-symbol">&amp;nbsp;</span> <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.tiny.cloud&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.shields.io/npm/dm/tinymce-plugin&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;tinymce Version&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">contenteditable</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">data-tp-logicflow</span>=<span class="hljs-string">&quot;&quot;</span> <span class="hljs-attr">data-tp-no-img</span>=<span class="hljs-string">&quot;&quot;</span> <span class="hljs-attr">data-mce-selected</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">object</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 160px; height: 160px; transform: scale(1, 1);&quot;</span> <span class="hljs-attr">data</span>=<span class="hljs-string">&quot;/tpLogicFlow.svg&quot;</span> <span class="hljs-attr">data-mce-style</span>=<span class="hljs-string">&quot;width: 556px; height: 260px; transform: scale(1, 1);&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">object</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>

</code><div class="language-text" >html</div></pre></pre></codeBoxItem>
<codeBoxItem  title="JS"><pre><pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">tinymce.<span class="hljs-title function_">init</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;textarea#basic-example&#x27;</span>,
  <span class="hljs-attr">height</span>: <span class="hljs-number">790</span>,
  <span class="hljs-attr">max_height</span>:<span class="hljs-number">790</span>,
  <span class="hljs-attr">language</span>: <span class="hljs-string">&#x27;zh_CN&#x27;</span>,
  <span class="hljs-attr">tp_i18n_langs</span>:<span class="hljs-literal">true</span>,
  <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
  <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">menubar</span>: <span class="hljs-string">&#x27;file edit  insert view format table tools help mymenubar&#x27;</span>,
  <span class="hljs-attr">menu</span>: {
          <span class="hljs-attr">mymenubar</span>: {<span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;I18n&#x27;</span>, <span class="hljs-attr">items</span>: <span class="hljs-string">&#x27;tpI18n&#x27;</span> },
      },
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-string">&#x27;advlist autolink lists link image charmap print preview anchor&#x27;</span>,
    <span class="hljs-string">&#x27;searchreplace visualblocks code fullscreen&#x27;</span>,
    <span class="hljs-string">&#x27;insertdatetime media table paste code help tpIndent2em tpLetterspacing tpImportword tpLogicflow tpLayout tpLineheight  wordcount&#x27;</span>
  ],
   <span class="hljs-attr">images_upload_handler</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">blobInfo, succFun, failFun</span>) {
     <span class="hljs-keyword">var</span> file = blobInfo.<span class="hljs-title function_">blob</span>();
        <span class="hljs-keyword">if</span> (!file.<span class="hljs-property">name</span>) file.<span class="hljs-property">name</span> = <span class="hljs-string">&#x27;vue-&#x27;</span> + <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>() + <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">1000</span>) + <span class="hljs-string">&#x27;.png&#x27;</span>;
       <span class="hljs-keyword">var</span> <span class="hljs-variable constant_">DOMURL</span> = <span class="hljs-variable language_">window</span>.<span class="hljs-property">URL</span> || <span class="hljs-variable language_">window</span>.<span class="hljs-property">webkitURL</span> || <span class="hljs-variable language_">window</span>;
       <span class="hljs-title function_">succFun</span>(<span class="hljs-variable constant_">DOMURL</span>.<span class="hljs-title function_">createObjectURL</span>(file))
  },
  <span class="hljs-title function_">setup</span>(<span class="hljs-params">props</span>) {
   
  },
  <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo | formatselect | &#x27;</span> +
  <span class="hljs-string">&#x27;bold italic backcolor | alignleft aligncenter &#x27;</span> +
  <span class="hljs-string">&#x27;alignright alignjustify | bullist numlist outdent indent tpLayout tpIndent2em tpLineheight tpLetterspacing | tpImportword tpLogicflow | &#x27;</span> +
  <span class="hljs-string">&#x27;removeformat  image media | help&#x27;</span>,
  <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>
});
</code><div class="language-text" >js</div></pre></pre></codeBoxItem>
<codeBoxItem title="CSS"><pre><pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li></ul><code class=" hljs  hljs-css" @click.stop="()=>{}"><span class="hljs-selector-id">#basic-example</span>{
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
}
</code><div class="language-text" >css</div></pre></pre></codeBoxItem>
<codeBoxItem title="TinyMCE"><iframe scrolling="no" style="width:100%;margin:auto 0;border:0px; min-height: 220px"  onload="autoIframeHeight(this)"  src="/demo/codebox/demo-introduction_t_zno6qf1659713320062_p_1659713324255/index.html"></iframe></codeBoxItem></codeBox><Demo0 data-isComponent="vue" class="demo-introduction_t_zno6qf1659713320062_p_" />
<p>\u66F4\u591A\u4F8B\u5B50\u89C1<a href="/contributing/writing-guide/grammar-demo.html">\u53C2\u4E0E\u8D21\u732E</a></p>
</div></div><PagesRouter  docPath="guide/introduction.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="introduction_t_zno6qf1659713320062_p_" />`});export{m as default};
