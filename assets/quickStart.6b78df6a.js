import{d as e}from"./vendor.38666b3a.js";import{R as s,E as i,a as p}from"./Editor.29f1f8ad.js";import"./tinymce-plugin.6010eeea.js";const a={};a.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;ReactRootID&quot;</span> &gt;</span>
   
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">//https://babeljs.io/repl/</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;

     <span class="hljs-keyword">class</span> <span class="hljs-title class_">reactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{
       <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {
         <span class="hljs-variable language_">super</span>(props);
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span> = {
                    <span class="hljs-attr">height</span>: <span class="hljs-number">500</span>,
                    <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                    <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,
                    <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">&#x27;advlist autolink lists link image charmap print preview anchor&#x27;</span>, <span class="hljs-string">&#x27;searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons&#x27;</span>, <span class="hljs-string">&#x27;insertdatetime media table paste code help wordcount&#x27;</span>],
                    <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image | &#x27;</span> + <span class="hljs-string">&#x27;bold italic backcolor | alignleft aligncenter &#x27;</span> + <span class="hljs-string">&#x27;alignright alignjustify | bullist numlist outdent indent | &#x27;</span> + <span class="hljs-string">&#x27;removeformat | help&#x27;</span>,
                    <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>
             };
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span> =<span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>
        }
      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;div&quot;</span>, <span class="hljs-literal">null</span>, <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;h1&quot;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;tinymce demo&quot;</span>), <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-title class_">Editor</span>, {
                  <span class="hljs-attr">initialValue</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span>,
                  <span class="hljs-attr">init</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span>
          }));
        }
    }

   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(reactDemo,<span class="hljs-literal">null</span>), <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(l){class n extends s.Component{constructor(t){super(t);this.reactDemoInit={height:500,base_url:"/tinymce",branding:!1,language:"zh_CN",menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons","insertdatetime media table paste code help wordcount"],toolbar:"undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},this.reactDemoInitialValue="<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>"}render(){return s.createElement("div",null,s.createElement("h1",null,"tinymce demo"),s.createElement(i,{initialValue:this.reactDemoInitialValue,init:this.reactDemoInit}))}}return p.render(s.createElement(n,null),l)}};a.template=`<PreviewReact class="demo-quickStart" idx="Demo0"  :source="source()">
                              <template v-slot:description><p>sdsd</p>
</template>
                            </PreviewReact>`;const m=e({components:{Demo0:a},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h2>
<p class="language-html"><Demo0  data-isComponent="react" /></p>
</div><div class="edit-page"><a href="https://github.com/tinymce-plugin/tinymce-plugin/edit/main/src/markdown/quickStart.md" target="_blank" ><span>\u5728Github\u4E0A\u7F16\u8F91\u6B64\u9875</span><svg class="icon outbound icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" data-v-1501f284=""><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></div></div><PagesRouter pagesName="quickStart" />`});export{m as default};
