import{d as g}from"./vendor.38666b3a.js";import"./tinymce-plugin.6010eeea.js";import{T as t}from"./Tinymce-vue.01a29064.js";import{R as s,a as m,E as d}from"./Editor.29f1f8ad.js";import"./index.39ad8594.js";const p={name:"domeVue3",components:{TinymceVue:t},data(){return{content:"dsdsdssfdddddddddddddddddddsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons  preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview |"]}}}};p.methods?p.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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

</code><div class="language-text" >vue</div></pre>`}:p.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
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

</code><div class="language-text" >vue</div></pre>`}};p.template=`<Preview class="demo-introduction" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                <template v-slot:description><p>\u54C8\u5E02\u5927\u5BB6\u554A\u5B9E\u6253\u5B9E\u5927\u82CF\u6253\u597D\u770B\u5C31\u597D\u770B\u554A\u901F\u5EA6\u5F88\u5FEB\u6309\u65F6\u6253\u5361\u5B9E\u6253\u5B9E\u54C8\u5F00\u59CB\u5927\u5E08\u7684\u8BDD\u770B\u963F\u677E\u5927\u554A\u5927\u82CF\u6253</p>
</template> 
                              </Preview>`;const h={};h.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li><li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li><li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li><li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li><li>60</li><li>61</li><li>62</li><li>63</li><li>64</li><li>65</li><li>66</li><li>67</li><li>68</li><li>69</li><li>70</li><li>71</li><li>72</li><li>73</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">//https://babeljs.io/repl/</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;

  <span class="hljs-keyword">class</span> <span class="hljs-title class_">TodoApp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span> {
  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {
    <span class="hljs-variable language_">super</span>(props);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span> = { <span class="hljs-attr">items</span>: [], <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;&#x27;</span> };
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleSubmit</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleSubmit</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>);
  }

  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>TODO<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TodoList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{this.state.items}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{this.handleSubmit}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">htmlFor</span>=<span class="hljs-string">&quot;new-todo&quot;</span>&gt;</span>
            What needs to be done?
          <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
            <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;new-todo&quot;</span>
            <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange}</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{this.state.text}</span>
          /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>
            Add #{this.state.items.length + 1}
          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    );
  }

  <span class="hljs-title function_">handleChange</span>(<span class="hljs-params">e</span>) {
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>({ <span class="hljs-attr">text</span>: e.<span class="hljs-property">target</span>.<span class="hljs-property">value</span> });
  }

  <span class="hljs-title function_">handleSubmit</span>(<span class="hljs-params">e</span>) {
    e.<span class="hljs-title function_">preventDefault</span>();
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">text</span>.<span class="hljs-property">length</span> === <span class="hljs-number">0</span>) {
      <span class="hljs-keyword">return</span>;
    }
    <span class="hljs-keyword">const</span> newItem = {
      <span class="hljs-attr">text</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">text</span>,
      <span class="hljs-attr">id</span>: <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()
    };
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> ({
      <span class="hljs-attr">items</span>: state.<span class="hljs-property">items</span>.<span class="hljs-title function_">concat</span>(newItem),
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;&#x27;</span>
    }));
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">TodoList</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span> {
  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
        {this.props.items.map(item =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.id}</span>&gt;</span>{item.text}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
    );
  }
}

<span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TodoApp</span> /&gt;</span></span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;todosexample&#x27;</span>)
);

</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(e){class i extends s.Component{constructor(a){super(a);this.state={items:[],text:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}render(){return s.createElement("div",null,s.createElement("h3",null,"TODO"),s.createElement(r,{items:this.state.items}),s.createElement("form",{onSubmit:this.handleSubmit},s.createElement("label",{htmlFor:"new-todo"},"What needs to be done?"),s.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),s.createElement("button",null,"Add #",this.state.items.length+1)))}handleChange(a){this.setState({text:a.target.value})}handleSubmit(a){if(a.preventDefault(),this.state.text.length===0)return;const j={text:this.state.text,id:Date.now()};this.setState(u=>({items:u.items.concat(j),text:""}))}}class r extends s.Component{render(){return s.createElement("ul",null,this.props.items.map(a=>s.createElement("li",{key:a.id},a.text)))}}return m.render(s.createElement(i,null),e)}};h.template=`<PreviewReact class="demo-introduction" idx="Demo1"  :source="source()">
                              <template v-slot:description><p>sdsdwewe</p>
</template>
                            </PreviewReact>`;const o={};o.methods={source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-comment">//https://babeljs.io/repl/</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;

     <span class="hljs-keyword">class</span> <span class="hljs-title class_">ReactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{
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
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span> = <span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>
        }
      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>){
        <span class="hljs-keyword">return</span> (
           <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>tinymce demo2<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Editor</span> <span class="hljs-attr">initialValue</span>=<span class="hljs-string">{this.reactDemoInitialValue}</span> <span class="hljs-attr">init</span>=<span class="hljs-string">{this.reactDemoInit}</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
          );
      }
    }

   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ReactDemo</span> /&gt;</span></span>, <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(e){class i extends s.Component{constructor(c){super(c);this.reactDemoInit={height:500,base_url:"/tinymce",branding:!1,language:"zh_CN",menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons","insertdatetime media table paste code help wordcount"],toolbar:"undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},this.reactDemoInitialValue="<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>"}render(){return s.createElement("div",null,s.createElement("h1",null,"tinymce demo2"),s.createElement(d,{initialValue:this.reactDemoInitialValue,init:this.reactDemoInit}))}}return m.render(s.createElement(i,null),e)}};o.template=`<PreviewReact class="demo-introduction" idx="Demo2"  :source="source()">
                              <template v-slot:description><p>sdsdwewe</p>
</template>
                            </PreviewReact>`;const l={};l.methods?(l.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`},l.methods.template=function(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},l.methods.sourceCode=function(){return{name:"domeVue2",components:{TinymceVue:t},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}}):l.methods={template(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},sourceCode(){return{name:"domeVue2",components:{TinymceVue:t},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}},source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};l.template=`<PreviewVue2 class="demo-introduction"  :template="template()"  :source="source()">
                              <template v-slot:description><p>sdsVuwDFSDF AFAJSHDJKASHFJKHSAJKHFJAHFKJDAHFJKSDHFKJHSDJKFHDKSJHJKHXCHVUISADFHAUIDHFUIA</p>
</template>
                            </PreviewVue2>`;const n={};n.methods?(n.methods.source=function(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`},n.methods.template=function(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},n.methods.sourceCode=function(){return{name:"domeVue2",components:{TinymceVue:t},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}}):n.methods={template(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},sourceCode(){return{name:"domeVue2",components:{TinymceVue:t},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/tinymce",plugins:"tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview",toolbar:["|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w"]}}}}},source(){return`<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};n.template=`<PreviewVue2 class="demo-introduction"  :template="template()"  :source="source()">
                              <template v-slot:description><p>sdsVuwDFSDF</p>
</template>
                            </PreviewVue2>`;const f=g({components:{Demo0:p,Demo1:h,Demo2:o,Demo3:l,Demo4:n},template:`<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00">#</a> \u524D\u8A00</h1>
<p class="language-vue"><Demo0 data-isComponent="react" /></p>
<p class="language-html"><Demo1  data-isComponent="react" /></p>
<p class="language-html"><Demo2  data-isComponent="react" /></p>
<p class="language-vue"><Demo3 data-isComponent="react" /></p>
<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;
<span class="hljs-keyword">import</span> tp$ <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce-plugin/tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  indent2em autoresize tpCollapse tpTabs tpButtons image   preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code indent2em  tpCollapse tpTabs tpButtons   | Preview | w&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >js</div></pre>
<p class="language-vue"><Demo4 data-isComponent="react" /></p>
</div><div class="edit-page"><a href="https://github.com/tinymce-plugin/tinymce-plugin/edit/main/src/markdown/introduction.md" target="_blank" ><span>\u5728Github\u4E0A\u7F16\u8F91\u6B64\u9875</span><svg class="icon outbound icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" data-v-1501f284=""><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></div></div><PagesRouter pagesName="introduction" />`});export{f as default};
