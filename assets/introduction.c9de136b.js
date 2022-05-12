import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, f as defineComponent } from "./index.e00d873d.js";
import { R as React, a as ReactDOM, E as Editor } from "./Editor.698cd658.js";
import "./tpImportword.b64f5c97.js";
var TinymceVue_vue_vue_type_style_index_0_scoped_true_lang = "";
const defaultOpt = JSON.stringify({
  base_url: "/tinymce",
  schema: "html5",
  plugins: "code hr",
  table_default_attributes: {
    "border": "1"
  },
  table_default_styles: {
    "border-collapse": "collapse",
    "width": "100%"
  },
  skeletonScreen: true,
  table_header_type: "sectionCells",
  table_responsive_width: true,
  file_picker_types: "file img media",
  fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px"
});
const splitObj = {
  "forecolor": true,
  "backcolor": true,
  tpLetterspacing: true,
  tpIconlists: true,
  tpColumns: true,
  table: true
};
const _sfc_main = {
  name: "TinymceVue",
  props: {
    modelValue: {
      type: [String, Number],
      default: "dsd"
    },
    options: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      tinymceID: "tinymce-" + new Date().getTime() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
      tinymceTimerID: null,
      tinymce_width: "100%",
      tinymce_height: 400,
      tinymce_loading: "loading",
      editorFn: "",
      sktData: [],
      splitObj: {}
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  created() {
    this.splitObj = splitObj;
    setTimeout(() => {
      if (typeof tinymce === "undefined") {
        clearInterval(this.tinymceTimerID);
        throw new Error("tinymce undefined");
      }
    }, 3e3);
    this.tinymceTimerID = setInterval(() => {
      if (typeof tinymce !== "undefined") {
        this.init();
        clearInterval(this.tinymceTimerID);
      }
    }, 10);
  },
  methods: {
    importantFn() {
      this.editor.execCommand("mceImportword");
    },
    xhrOnProgress(fun) {
      this.xhrOnProgress.onprogress = fun;
      return function() {
        var xhr = this.createXHR();
        if (typeof xhrOnProgress.onprogress !== "function")
          return xhr;
        if (xhrOnProgress.onprogress && xhr.upload) {
          xhr.upload.onprogress = xhrOnProgress.onprogress;
        }
        return xhr;
      };
    },
    createXHR() {
      if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
      } else if (window.ActiveXobiect) {
        return new ActiveXobiect("Microsoft.XMLHTTP");
      }
      return "";
    },
    init() {
      let that = this;
      let defaultOptions = JSON.parse(defaultOpt);
      defaultOptions.selector = "#" + that.tinymceID;
      defaultOptions.setup = (editor) => {
        that.editorFn = editor;
        editor.on("init", () => {
          that.tinymce_loading = "";
          editor.setTpContent(that.value);
          tinymce.activeEditor.setProgressState(false, 50);
        });
        editor.on("setContent", (e) => {
          let _Interval = setInterval(() => {
            if (typeof editor.getTpContent === "function") {
              clearInterval(_Interval);
              that.$emit("update:modelValue", editor.getTpContent());
            }
          }, 200);
        });
        editor.on("input  focus focusin click focusout drop ObjectResized keydown paste ExecCommand ObjectSelected", () => {
          that.$emit("update:modelValue", editor.getTpContent());
        });
      };
      Object.assign(defaultOptions, this.options || {});
      that.tinymce_height = defaultOptions.min_height;
      tinymce.init(defaultOptions);
    }
  }
};
const _hoisted_1 = { class: "tinymceVue-Box" };
const _hoisted_2 = {
  class: "tinymceVue",
  style: { "min-height": "200px" }
};
const _hoisted_3 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", { id: $data.tinymceID }, null, 8, _hoisted_3)
      ])
    ])
  ]);
}
var TinymceVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-698aaaca"]]);
const Demo0 = {
  name: "domeVue3",
  components: { TinymceVue },
  data() {
    return {
      content: "dsdsdssfdddddddddddddddddddsd",
      tinymceOptions: {
        min_height: 200,
        max_height: 700,
        base_url: "/tinymce",
        plugins: "tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword preview",
        toolbar: ["|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview"]
      }
    };
  }
};
if (Demo0.methods) {
  Demo0.methods.source = function() {
    return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue.vue&quot;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,\n<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },\n<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,\n        <span class="hljs-attr">tinymceOptions</span>:{\n                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>\n                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,\n                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword preview&#x27;</span>,\n                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview&#x27;</span>],\n             \n        }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n\n</code><div class="language-text" >vue</div></pre>';
  };
} else {
  Demo0.methods = {
    source() {
      return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue.vue&quot;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,\n<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },\n<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,\n        <span class="hljs-attr">tinymceOptions</span>:{\n                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>\n                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,\n                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword preview&#x27;</span>,\n                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview&#x27;</span>],\n             \n        }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n\n</code><div class="language-text" >vue</div></pre>';
    }
  };
}
Demo0.template = `<Preview class="demo-introduction" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                 
                              </Preview>`;
const Demo1 = {};
Demo1.methods = {
  source() {
    return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li><li>42</li><li>43</li><li>44</li><li>45</li><li>46</li><li>47</li><li>48</li><li>49</li><li>50</li><li>51</li><li>52</li><li>53</li><li>54</li><li>55</li><li>56</li><li>57</li><li>58</li><li>59</li><li>60</li><li>61</li><li>62</li><li>63</li><li>64</li><li>65</li><li>66</li><li>67</li><li>68</li><li>69</li><li>70</li><li>71</li><li>72</li><li>73</li><li>74</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-comment">//https://babeljs.io/repl/</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;\n\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;\n\n  <span class="hljs-keyword">class</span> <span class="hljs-title class_">TodoApp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span> {\n  <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {\n    <span class="hljs-variable language_">super</span>(props);\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span> = { <span class="hljs-attr">items</span>: [], <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;&#x27;</span> };\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>);\n    <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleSubmit</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleSubmit</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">this</span>);\n  }\n\n  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>TODO<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">TodoList</span> <span class="hljs-attr">items</span>=<span class="hljs-string">{this.state.items}</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{this.handleSubmit}</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">htmlFor</span>=<span class="hljs-string">&quot;new-todo&quot;</span>&gt;</span>\n            What needs to be done?\n          <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n            <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;new-todo&quot;</span>\n            <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange}</span>\n            <span class="hljs-attr">value</span>=<span class="hljs-string">{this.state.text}</span>\n          /&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>\n            Add #{this.state.items.length + 1}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n\n  <span class="hljs-title function_">handleChange</span>(<span class="hljs-params">e</span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>({ <span class="hljs-attr">text</span>: e.<span class="hljs-property">target</span>.<span class="hljs-property">value</span> });\n  }\n\n  <span class="hljs-title function_">handleSubmit</span>(<span class="hljs-params">e</span>) {\n    e.<span class="hljs-title function_">preventDefault</span>();\n    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">text</span>.<span class="hljs-property">length</span> === <span class="hljs-number">0</span>) {\n      <span class="hljs-keyword">return</span>;\n    }\n    <span class="hljs-keyword">const</span> newItem = {\n      <span class="hljs-attr">text</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span>.<span class="hljs-property">text</span>,\n      <span class="hljs-attr">id</span>: <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>()\n    };\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> ({\n      <span class="hljs-attr">items</span>: state.<span class="hljs-property">items</span>.<span class="hljs-title function_">concat</span>(newItem),\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;&#x27;</span>\n    }));\n  }\n}\n\n<span class="hljs-keyword">class</span> <span class="hljs-title class_">TodoList</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span> {\n  <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> (\n      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n        {this.props.items.map(item =&gt; (\n          <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.id}</span>&gt;</span>{item.text}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        ))}\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>\n    );\n  }\n}\n\n<span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(\n  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">TodoApp</span> /&gt;</span></span>,\n  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;todosexample&#x27;</span>)\n);\n\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code><div class="language-text" >html</div></pre>';
  },
  sourceCode(DomeID) {
    class TodoApp extends React.Component {
      constructor(props) {
        super(props);
        this.state = { items: [], text: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      render() {
        return React.createElement("div", null, React.createElement("h3", null, "TODO"), React.createElement(TodoList, { items: this.state.items }), React.createElement("form", { onSubmit: this.handleSubmit }, React.createElement("label", { htmlFor: "new-todo" }, "What needs to be done?"), React.createElement("input", {
          id: "new-todo",
          onChange: this.handleChange,
          value: this.state.text
        }), React.createElement("button", null, "Add #", this.state.items.length + 1)));
      }
      handleChange(e) {
        this.setState({ text: e.target.value });
      }
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState((state) => ({
          items: state.items.concat(newItem),
          text: ""
        }));
      }
    }
    class TodoList extends React.Component {
      render() {
        return React.createElement("ul", null, this.props.items.map((item) => React.createElement("li", { key: item.id }, item.text)));
      }
    }
    return ReactDOM.render(React.createElement(TodoApp, null), DomeID);
  }
};
Demo1.template = '<PreviewReact class="demo-introduction" idx="Demo1"  :source="source()">\n                              \n                            </PreviewReact>';
const Demo2 = {};
Demo2.methods = {
  source() {
    return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-comment">//https://babeljs.io/repl/</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;\n\n     <span class="hljs-keyword">class</span> <span class="hljs-title class_">ReactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{\n       <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {\n         <span class="hljs-variable language_">super</span>(props);\n           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span> = {\n                    <span class="hljs-attr">height</span>: <span class="hljs-number">500</span>,\n                    <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                    <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,\n                    <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,\n                    <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,\n                    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">&#x27;advlist autolink lists link image charmap print preview anchor&#x27;</span>, <span class="hljs-string">&#x27;searchreplace visualblocks code fullscreen tpIndent2em autoresize tpCollapse tpTabs tpButtons&#x27;</span>, <span class="hljs-string">&#x27;insertdatetime media table paste code help wordcount tpImportword&#x27;</span>],\n                    <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword | formatselect image | &#x27;</span> + <span class="hljs-string">&#x27;bold italic backcolor | alignleft aligncenter &#x27;</span> + <span class="hljs-string">&#x27;alignright alignjustify | bullist numlist outdent indent | &#x27;</span> + <span class="hljs-string">&#x27;removeformat | help&#x27;</span>,\n                    <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>\n             };\n           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span> = <span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>\n        }\n      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>){\n        <span class="hljs-keyword">return</span> (\n           <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>tinymce demo2<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">Editor</span> <span class="hljs-attr">initialValue</span>=<span class="hljs-string">{this.reactDemoInitialValue}</span> <span class="hljs-attr">init</span>=<span class="hljs-string">{this.reactDemoInit}</span> /&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n          );\n      }\n    }\n\n   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ReactDemo</span> /&gt;</span></span>, <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code><div class="language-text" >html</div></pre>';
  },
  sourceCode(DomeID) {
    class ReactDemo extends React.Component {
      constructor(props) {
        super(props);
        this.reactDemoInit = {
          height: 500,
          base_url: "/tinymce",
          branding: false,
          language: "zh_CN",
          menubar: false,
          plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen tpIndent2em autoresize tpCollapse tpTabs tpButtons", "insertdatetime media table paste code help wordcount tpImportword"],
          toolbar: "undo redo tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword | formatselect image | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        };
        this.reactDemoInitialValue = "<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>";
      }
      render() {
        return React.createElement("div", null, React.createElement("h1", null, "tinymce demo2"), React.createElement("div", null, React.createElement(Editor, { initialValue: this.reactDemoInitialValue, init: this.reactDemoInit })));
      }
    }
    return ReactDOM.render(React.createElement(ReactDemo, null), DomeID);
  }
};
Demo2.template = '<PreviewReact class="demo-introduction" idx="Demo2"  :source="source()">\n                              \n                            </PreviewReact>';
const Demo3 = {};
if (Demo3.methods) {
  Demo3.methods.source = function() {
    return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,\n<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },\n<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,\n        <span class="hljs-attr">tinymceOptions</span>:{\n                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,\n                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image  tpImportword preview&#x27;</span>,\n                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview&#x27;</span>],\n             \n        }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n</code><div class="language-text" >vue</div></pre>';
  };
  Demo3.methods.template = function() {
    return '<div>\n <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>\n  <div class="vueDemo">\n    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>\n  </div>\n  <div v-html="content"></div>\n</div>';
  };
  Demo3.methods.sourceCode = function() {
    return {
      name: "domeVue2",
      components: { TinymceVue },
      data: function() {
        return {
          content: "fivesdsdsd",
          tinymceOptions: {
            min_height: 200,
            max_height: 700,
            base_url: "/tinymce",
            plugins: "tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image  tpImportword preview",
            toolbar: ["|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview"]
          }
        };
      }
    };
  };
} else {
  Demo3.methods = {
    template() {
      return '<div>\n <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>\n  <div class="vueDemo">\n    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>\n  </div>\n  <div v-html="content"></div>\n</div>';
    },
    sourceCode() {
      return {
        name: "domeVue2",
        components: { TinymceVue },
        data: function() {
          return {
            content: "fivesdsdsd",
            tinymceOptions: {
              min_height: 200,
              max_height: 700,
              base_url: "/tinymce",
              plugins: "tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image  tpImportword preview",
              toolbar: ["|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview"]
            }
          };
        }
      };
    },
    source() {
      return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,\n<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },\n<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,\n        <span class="hljs-attr">tinymceOptions</span>:{\n                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,\n                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image  tpImportword preview&#x27;</span>,\n                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview&#x27;</span>],\n             \n        }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n</code><div class="language-text" >vue</div></pre>';
    }
  };
}
Demo3.template = '<PreviewVue2 class="demo-introduction"  :template="template()"  :source="source()">\n                              \n                            </PreviewVue2>';
const __script = defineComponent({
  components: {
    Demo0,
    Demo1,
    Demo2,
    Demo3
  },
  template: '<div class="fv-mardown-html"><div class="fv-mardown-main"><h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00">#</a> \u524D\u8A00</h1>\n<p class="language-vue"><Demo0 data-isComponent="vue" /></p>\n<p class="language-html"><Demo1  data-isComponent="react" /></p>\n<p class="language-html"><Demo2  data-isComponent="react" /></p>\n<p class="language-vue"><Demo3 data-isComponent="vue" /></p>\n</div></div><PagesRouter  docPath="guide/introduction.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="introduction" />'
});
export { __script as default };
