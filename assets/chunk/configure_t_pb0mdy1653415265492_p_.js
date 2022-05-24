import"./pinia.js";import{J as a}from"./vue.js";const s={};s.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li><li ><span>43</span></li><li ><span>44</span></li><li ><span>45</span></li><li ><span>46</span></li><li ><span>47</span></li><li ><span>48</span></li><li ><span>49</span></li><li ><span>50</span></li><li ><span>51</span></li><li ><span>52</span></li><li ><span>53</span></li><li ><span>54</span></li><li ><span>55</span></li><li ><span>56</span></li><li ><span>57</span></li><li ><span>58</span></li><li ><span>59</span></li><li ><span>60</span></li><li ><span>61</span></li><li ><span>62</span></li><li ><span>63</span></li><li ><span>64</span></li><li ><span>65</span></li><li ><span>66</span></li><li ><span>67</span></li><li ><span>68</span></li><li ><span>69</span></li><li ><span>70</span></li><li ><span>71</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-keyword">html</span>&gt;</span>
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
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&#x27;https://unpkg.com/tinymce@5/tinymce.min.js&#x27;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/langs/zh_CN.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/tinymce-plugin/plugins/tpImportword/plugin.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>    
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">tp-page-height</span>=<span class="hljs-string">&quot;298&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tinymce&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\u8FD9\u662F\u4E00\u4E2A\u5BFC\u5165word\u63D2\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
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
        <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;code tpImportword autoresize&#x27;</span>,
        <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;code tpImportword&#x27;</span>
        });

     <span class="hljs-keyword">var</span> <span class="hljs-title function_">openPlugin</span>=(<span class="hljs-params"></span>)=&gt;{
       tinymce.<span class="hljs-property">activeEditor</span>.<span class="hljs-title function_">execCommand</span>(<span class="hljs-string">&#x27;mceTpImportword&#x27;</span>);
     }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>

</code><div class="language-text" >html</div></pre>`},sourceCode(){return'<iframe scrolling="no" style="width:100%;margin:auto 0;border:0px; min-height: 319px"  onload="autoIframeHeight(this)"  src="/demo/demo-configure_t_pb0mdy1653415265492_p_1653415271757/index.html"></iframe>'}};s.template=`<PreviewIframe class="demo-configure_t_pb0mdy1653415265492_p_" idx="Demo0"  :source="source()" :sourceCode="sourceCode()">
                              
                            </PreviewIframe>`;const p=a({components:{Demo0:s},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="\u914D\u7F6E\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u8003">#</a> \u914D\u7F6E\u53C2\u8003</h1>
<h2 id="\u5982\u4F55\u901A\u8FC7\u5916\u90E8\u6309\u94AE\u89E6\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u901A\u8FC7\u5916\u90E8\u6309\u94AE\u89E6\u53D1">#</a> \u5982\u4F55\u901A\u8FC7\u5916\u90E8\u6309\u94AE\u89E6\u53D1</h2>
<p>\u53EF\u4EE5\u7528\u901A\u8FC7 <code class="fv-code_inline">execCommand('mceTpImportword')</code> \u8C03\u7528</p>
<p class="language-html"><Demo0  data-isComponent="iframe" /></p>
</div></div><PagesRouter  docPath="__docs__/configure.md" mapType="docs" docRepo="tp-importword" pagesName="configure_t_pb0mdy1653415265492_p_" />`});export{p as default};
