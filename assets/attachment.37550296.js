import{d as a}from"./vendor.38666b3a.js";import"./tinymce-plugin.6010eeea.js";import{T as n}from"./Tinymce-vue.01a29064.js";import"./index.39ad8594.js";const s={name:"domeVue3",components:{TinymceVue:n},data(){return{content:"dsdsdssfdddddddddddddddddddsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons  preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview |"]}}}};s.methods?s.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
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

</code><div class="language-text" >vue</div></pre>`}:s.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">
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

</code><div class="language-text" >vue</div></pre>`}};s.template=`<Preview class="demo-attachment" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
</div></template>'
                                <template v-slot:description><p>\u54C8\u5E02\u5927\u5BB6\u554A\u5B9E\u6253\u5B9E\u5927\u82CF\u6253\u597D\u770B\u5C31\u597D\u770B\u554A\u901F\u5EA6\u5F88\u5FEB\u6309\u65F6\u6253\u5361\u5B9E\u6253\u5B9E\u54C8\u5F00\u59CB\u5927\u5E08\u7684\u8BDD\u770B\u963F\u677E\u5927\u554A\u5927\u82CF\u6253</p>
</template> 
                              </Preview>`;const e=a({components:{Demo0:s},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="attachment" tabindex="-1"><a class="header-anchor" href="#attachment">#</a> <code class="fv-code_inline">attachment</code></h1>
<pre class="hljs fv-hljs"><code class=" hljs hljs-bash" @click.stop="()=>{}"> <span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> -D tinymce-plugin
<span class="hljs-comment"># or</span>
 <span class="hljs-built_in">npm</span> i -D tinymce-plugin
</code><div class="language-text" >bash</div></pre>
<p class="language-vue"><Demo0 data-isComponent="react" /></p>
<p><a href="https://tinymce-plugin.github.io">tinymce-plugin</a></p>
<table>
<thead>
<tr>
<th style="text-align:left">Left-aligned</th>
<th style="text-align:center">Center-aligned</th>
<th style="text-align:right">Right-aligned</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">git status</td>
<td style="text-align:center">git status</td>
<td style="text-align:right">git status</td>
</tr>
<tr>
<td style="text-align:left">git diff</td>
<td style="text-align:center">git diff</td>
<td style="text-align:right">git diff</td>
</tr>
</tbody>
</table>
<div class="tip fv-state-tip fv-tip">
<h2 id="tip" tabindex="-1"><a class="header-anchor" href="#tip">#</a> tip</h2>
<p>ysdsd sldsld\u89D2\u5EA6\u8003\u8651\u662F\u5426\u52A0\u5FEB\u4E86\u901F\u5EA6\u653E\u7F13\u7684\u8BBE\u8BA1\u5F00\u53D1\u548C\u7684\u8BDD\u5341\u5206\u8270\u82E6\u574E\u5777\u7684\u8EAB\u4EFD\u51E0\u4E4E\u90FD\u662F\u5C3D\u5FEB\u53D1\u8D27\u4F1A\u8BA1\u5E08\u5927\u540E\u65B9\u5065\u5EB7\u548C\u901F\u5EA6\u52A0\u5FEB\u6062\u590D\u5065\u5EB7\u8BF4\u7684\u8BDD\u53D1\u4F1A\u8BA1\u6838\u7B97\u7684\u5C3D\u5FEB\u56DE\u590D\u5373\u53EF\u83B7\u80DC\u7684\u5C3D\u5FEB\u53D1\u8D27\u63A5\u53D7\u7535\u8BDD\u5206\u673A\u6263\u7A0E\u7684\u7A7A\u95F4\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u5E06\u8FD8\u662F\u96D5\u523B\u6280\u6CD5\u901F\u5EA6\u52A0\u5FEB\u6062\u590D\u8BF4\u7684\u798F\u514B\u65AF\u7684\u56DE\u8BBF\u5BA2\u6237\u5C3D\u5FEB\u6838\u5B9E\u7684\u63A5\u53E3\u8FD4\u56DE\u6DF1\u523B\u7684\u56DE\u590D\u5361\u6B7B\u7684\u56DE\u590D\u770B\u4F3C\u7B80\u5355\u53D1\u8D27\u53EF\u63A5\u53D7\u7684</p>
</div>
<div class="warning fv-state-tip fv-warning">
<h2 id="\u8B66\u544A" tabindex="-1"><a class="header-anchor" href="#\u8B66\u544A">#</a> \u8B66\u544A</h2>
<p>ysdsd sldsld</p>
</div>
<div class="info fv-state-tip fv-info">
<p>info</p>
</div>
<div class="danger fv-state-tip fv-danger">
<p>sdsd</p>
</div>
<h1 id="ddd" tabindex="-1"><a class="header-anchor" href="#ddd">#</a> ddd</h1>
<p>sdsddsdsd
<code class="fv-code_inline">sjdkas</code>
dfsafasd</p>
</div><div class="edit-page"><a href="https://github.com/tinymce-plugin/tinymce-plugin/edit/main/packages/attachment/__docs__/attachment.md" target="_blank" ><span>\u5728Github\u4E0A\u7F16\u8F91\u6B64\u9875</span><svg class="icon outbound icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" data-v-1501f284=""><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></div></div><PagesRouter pagesName="attachment" />`});export{e as default};
