import"./pinia.js";import"./tinymce.js";import{E as l}from"./Editor.js";import"./plugin.js";import{R as s,E as r,a as o}from"./Editor2.js";import{M as j}from"./vue.js";const p={};p.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li><li ><span>43</span></li><li ><span>44</span></li><li ><span>45</span></li><li ><span>46</span></li><li ><span>47</span></li><li ><span>48</span></li><li ><span>49</span></li><li ><span>50</span></li><li ><span>51</span></li><li ><span>52</span></li><li ><span>53</span></li><li ><span>54</span></li><li ><span>55</span></li><li ><span>56</span></li><li ><span>57</span></li><li ><span>58</span></li><li ><span>59</span></li><li ><span>60</span></li><li ><span>61</span></li><li ><span>62</span></li><li ><span>63</span></li><li ><span>64</span></li><li ><span>65</span></li><li ><span>66</span></li><li ><span>67</span></li><li ><span>68</span></li><li ><span>69</span></li><li ><span>70</span></li><li ><span>71</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/favicon.ico&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;shortcut icon&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://avatars.githubusercontent.com/u/87648636?s=60&amp;v=4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;image/x-icon&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Tinymce-Plugin<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
      <span class="hljs-selector-class">.open-plugin</span>{
        <span class="hljs-attribute">width</span>:<span class="hljs-number">150px</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;
        <span class="hljs-attribute">display</span>: flex;
        <span class="hljs-attribute">padding</span>: <span class="hljs-number">0px</span> <span class="hljs-number">10px</span>;
        <span class="hljs-attribute">background-color</span>:<span class="hljs-built_in">rgb</span>(<span class="hljs-number">27</span>, <span class="hljs-number">158</span>, <span class="hljs-number">234</span>);
        <span class="hljs-attribute">border-radius</span>:<span class="hljs-number">5px</span>;
        <span class="hljs-attribute">color</span>:white;
        <span class="hljs-attribute">font-size</span>:<span class="hljs-number">0</span>;
        <span class="hljs-attribute">text-align</span>:center;
        <span class="hljs-attribute">cursor</span>:pointer;
        <span class="hljs-attribute">align-content</span>: space-around;
        <span class="hljs-attribute">flex-wrap</span>: nowrap;
        <span class="hljs-attribute">align-items</span>: center;
        justify-items: center;
      }
      <span class="hljs-selector-class">.open-plugin</span> <span class="hljs-selector-tag">img</span>{
        <span class="hljs-attribute">display</span>: block;
        <span class="hljs-attribute">width</span>: <span class="hljs-number">20px</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
      }
      <span class="hljs-selector-class">.open-plugin</span> <span class="hljs-selector-tag">span</span>{
        <span class="hljs-attribute">display</span>: inline-block;
        <span class="hljs-attribute">height</span>:<span class="hljs-number">20px</span>;
        <span class="hljs-attribute">line-height</span>:<span class="hljs-number">20px</span>;
        <span class="hljs-attribute">vertical-align</span>: middle;
        <span class="hljs-attribute">margin-left</span>:<span class="hljs-number">10px</span>;
        <span class="hljs-attribute">font-size</span>:<span class="hljs-number">14px</span>;
      }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&#x27;/tinymce/tinymce.js&#x27;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/tinymce/tinymce-plugin.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/langs/zh_CN.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/plugins/tpIndent2em/plugin.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>    
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">tp-page-height</span>=<span class="hljs-string">&quot;298&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tinymce&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">&quot;openPlugin()&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;open-plugin&quot;</span>  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u70B9\u51FB\u8C03\u7528\u89E6\u53D1\u63D2\u4EF6&quot;</span> &gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span>  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://avatars.githubusercontent.com/u/87648636?s=60&amp;v=4&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u70B9\u51FB\u8C03\u7528\u89E6\u53D1\u63D2\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">

     tinymce.<span class="hljs-title function_">init</span>({
        <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;textarea.tinymce&#x27;</span>,
        <span class="hljs-attr">language</span>: <span class="hljs-string">&#x27;zh_CN&#x27;</span>,
        <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpIndent2em autoresize&#x27;</span>,
        <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;code tpIndent2em&#x27;</span>
        });

     <span class="hljs-keyword">var</span> <span class="hljs-title function_">openPlugin</span>=(<span class="hljs-params"></span>)=&gt;{
       tinymce.<span class="hljs-property">activeEditor</span>.<span class="hljs-title function_">execCommand</span>(<span class="hljs-string">&#x27;mceTpIndent2em&#x27;</span>);
     }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>

</code><div class="language-text" >html</div></pre>`},sourceCode(){return'<iframe scrolling="no" width="100%" style="width:100%;margin:auto 0;border:0px; min-height: 319px"  onload="autoIframeHeight(this)"  src="/demo/demo-tpIndent2em_t_jaucoy1665394502088_p_1665394508707/index.html"></iframe>'}};p.template=`<PreviewIframe class="demo-tpIndent2em_t_jaucoy1665394502088_p_" idx="Demo0"  :source="source()" :sourceCode="sourceCode()">
                              
                            </PreviewIframe>`;const n={name:"domeVue3",components:{TinymceVue:l},data(){return{content:"\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6",tinymceOptions:{min_height:300,max_height:700,skeletonScreen:!0,base_url:"/tinymce",plugins:"code tpIndent2em preview autoresize",toolbar:"code tpIndent2em preview"}}}};n.methods?n.methods.source=function(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
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
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">300</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpIndent2em preview autoresize&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;code tpIndent2em preview&#x27;</span>,
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}:n.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
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
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">300</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpIndent2em preview autoresize&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;code tpIndent2em preview&#x27;</span>,
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};n.template=`<Preview class="demo-tpIndent2em_t_jaucoy1665394502088_p_" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                 
                              </Preview>`;const a={};a.methods?(a.methods.source=function(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">300</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpIndent2em preview autoresize&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;code tpIndent2em Preview&#x27;</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`},a.methods.template=function(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},a.methods.sourceCode=function(){return{name:"domeVue2",components:{TinymceVue:l},data:function(){return{content:"\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6",tinymceOptions:{min_height:300,max_height:700,base_url:"/tinymce",plugins:"code tpIndent2em preview autoresize",toolbar:"code tpIndent2em Preview",skeletonScreen:!0}}}}}):a.methods={template(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},sourceCode(){return{name:"domeVue2",components:{TinymceVue:l},data:function(){return{content:"\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6",tinymceOptions:{min_height:300,max_height:700,base_url:"/tinymce",plugins:"code tpIndent2em preview autoresize",toolbar:"code tpIndent2em Preview",skeletonScreen:!0}}}}},source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">300</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpIndent2em preview autoresize&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;code tpIndent2em Preview&#x27;</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};a.template=`<PreviewVue2 class="demo-tpIndent2em_t_jaucoy1665394502088_p_"  :template="template()"  :source="source()">
                              
                            </PreviewVue2>`;const t={};t.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;

     <span class="hljs-keyword">class</span> <span class="hljs-title class_">ReactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{
       <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {
           <span class="hljs-variable language_">super</span>(props);
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span> = { <span class="hljs-attr">reactDemoInitialValue</span>: <span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>};
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span> = {
                    <span class="hljs-attr">min_height</span>: <span class="hljs-number">220</span>,
                    <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                    <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,
                    <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                    <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpIndent2em autoresize&#x27;</span>,
                    <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo code tpIndent2em&#x27;</span>,
                    <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>
             };
       <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span> = <span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
              <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>({<span class="hljs-attr">reactDemoInitialValue</span>: data})
        }
      }
      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>){
        <span class="hljs-keyword">return</span> (
           <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Editor</span> <span class="hljs-attr">initialValue</span>=<span class="hljs-string">{this.state.reactDemoInitialValue}</span> <span class="hljs-attr">init</span>=<span class="hljs-string">{this.reactDemoInit}</span> <span class="hljs-attr">onEditorChange</span>=<span class="hljs-string">{this.handleChange}</span> /&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{__html:</span> <span class="hljs-attr">this.state.reactDemoInitialValue</span> }} &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
          );
      }
    }

   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ReactDemo</span> /&gt;</span></span>, <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(i){class e extends s.Component{constructor(c){super(c),this.state={reactDemoInitialValue:"<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>"},this.reactDemoInit={min_height:220,base_url:"/tinymce",branding:!1,language:"zh_CN",menubar:!1,skeletonScreen:!0,plugins:"code tpIndent2em autoresize",toolbar:"undo redo code tpIndent2em",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},this.handleChange=h=>{this.setState({reactDemoInitialValue:h})}}render(){return s.createElement("div",null,s.createElement("h1",null,"\u8FD9\u662F\u4E00\u4E2A\u9996\u884C\u7F29\u8FDB\u63D2\u4EF6"),s.createElement("div",null,s.createElement(r,{initialValue:this.state.reactDemoInitialValue,init:this.reactDemoInit,onEditorChange:this.handleChange})),s.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.reactDemoInitialValue}}))}}return o.render(s.createElement(e,null),i)}};t.template=`<PreviewReact class="demo-tpIndent2em_t_jaucoy1665394502088_p_" idx="Demo3"  :source="source()">
                              
                            </PreviewReact>`;const b=j({components:{Demo0:p,Demo1:n,Demo2:a,Demo3:t},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="\u{1F680}tpIndent2em" tabindex="-1"><a class="header-anchor" href="#\u{1F680} tpIndent2em">#</a> \u{1F680} tpIndent2em</h1>
<p><a href="https://github.com/tinymce-plugin" target="_blank"><img src="https://tinymce-plugin.github.io/badge.svg" alt="tinymce-plugin"></a>\xA0
<a href="https://www.npmjs.com/package/@tinymce-plugin/tp-indent2em" target="_blank"><img src="https://img.shields.io/npm/v/@tinymce-plugin/tp-indent2em.svg" alt="release candidate"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/badge/tinymce-5.2.0~5.x.x-green.svg" alt="tinymce Version"></a>\xA0
<a href="https://github.com/tinymce-plugin/tp-indent2em/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg" alt="GitHub license"></a>\xA0
<a href="https://github.com/tinymce-plugin/tp-indent2em" target="_blank"><img src="https://img.shields.io/npm/dw/@tinymce-plugin/tp-indent2em" alt="tinymce Version"></a></p>
<blockquote>
<p>\u5B9E\u73B0 tinymce \u5BCC\u6587\u672C\u6846\u9996\u884C\u7F29\u8FDB\u529F\u80FD \u80FD\u5F88\u597D\u914D\u5408 \u5B57\u4F53\u5927\u5C0F(fon-size)  \u5B57\u6BCD\u95F4\u8DDD(letter-spacing) \u5B9E\u73B0\u9996\u884C\u7F29\u8FDB</p>
</blockquote>
<h1 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F">#</a> \u4F7F\u7528\u65B9\u5F0F</h1>
<h3 id="CDN" tabindex="-1"><a class="header-anchor" href="#CDN">#</a> CDN</h3>
<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/plugins/tpIndent2em/plugin.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><span class="hljs-comment">&lt;!--\u5F15\u5165--&gt;</span>

<span class="hljs-comment">&lt;!-- \u4F7F\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
   tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpIndent2em&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpIndent2em&quot;</span>
  ...
 })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</code><div class="language-text" >html</div></pre>
<h3 id="NPM" tabindex="-1"><a class="header-anchor" href="#NPM">#</a> NPM</h3>
<blockquote>
<p><strong>\u4F7F\u7528 tinymce-plugin \u5E93</strong></p>
</blockquote>
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
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li class="line"><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li class="line"><span>5</span></li><li class="line"><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>
 <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpIndent2em&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpIndent2em&quot;</span>
  ...
 })

</code><div class="language-text" >js</div></pre>
<h2 id="\u4E0B\u8F7D\u65B9\u5F0F2" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u65B9\u5F0F2">#</a> \u4E0B\u8F7D\u65B9\u5F0F2</h2>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@tinymce/tp-indent2em&quot;</span>
</code><div class="language-text" >js</div></pre>
<codeGroup>
 <codeGroupItem title="NPM" active>
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">npm</span> i @tinymce-plugin/tp-indent2em
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
<codeGroupItem title="YARN">
<pre class="hljs fv-hljs "><ul class="highlight-line-number  nonumber"  ><li ><span>1</span></li></ul><code class=" hljs  hljs-sh" @click.stop="()=>{}"><span class="hljs-built_in">yarn</span> <span class="hljs-built_in">add</span> @tinymce-plugin/tp-indent2em -D 
</code><div class="language-text" >sh</div></pre>
</codeGroupItem>
</codeGroup>
<h4 id="\u9879\u76EE\u4E2D\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528-1">#</a> \u9879\u76EE\u4E2D\u4F7F\u7528</h4>
<pre class="hljs fv-hljs highlight-line"><ul class="highlight-line-number "  ><li class="line"><span>1</span></li><li class="line"><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li class="line"><span>5</span></li><li class="line"><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}"> <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>
 <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@tinymce-plugin/tp-indent2em&quot;</span>;
 tinymce.<span class="hljs-title function_">init</span>({
  ...
   <span class="hljs-attr">plugins</span>: <span class="hljs-string">&quot;tpIndent2em&quot;</span>
   <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&quot;tpIndent2em&quot;</span>
  ...
 })
</code><div class="language-text" >js</div></pre>
<div class="tip fv-state-tip fv-tip">
<p><code class="fv-code_inline">tpIndent2em</code> \u4F9D\u8D56 <code class="fv-code_inline">tinymce-plugin</code></p>
</div>
<h1 id="Demo" tabindex="-1"><a class="header-anchor" href="#Demo">#</a> Demo</h1>
<demoGroup>
 <demoGroupItem title="Javascript">
<Demo0  data-isComponent="iframe" />
 </demoGroupItem>
 <demoGroupItem title="Vue3" active>
<Demo1 data-isComponent="vue" class="demo-tpIndent2em_t_jaucoy1665394502088_p_" />
 </demoGroupItem>
 <demoGroupItem title="Vue2">
<Demo2 data-isComponent="vue" class="demo-tpIndent2em_t_jaucoy1665394502088_p_" />
 </demoGroupItem>
 <demoGroupItem title="React">
<Demo3  data-isComponent="react"  class="demo-tpIndent2em_t_jaucoy1665394502088_p_" />
 </demoGroupItem>
</demoGroup></div></div><PagesRouter  docPath="__docs__/tpIndent2em.md" mapType="docs" docRepo="tp-indent2em" pagesName="tpIndent2em_t_jaucoy1665394502088_p_" />`});export{b as default};
