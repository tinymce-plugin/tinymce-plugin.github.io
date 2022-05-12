import { _ as _export_sfc, o as openBlock, c as createElementBlock, f as defineComponent } from "./index.d4f0d8aa.js";
import { R as React, E as Editor, a as ReactDOM } from "./Editor.698cd658.js";
import "./tpImportword.b64f5c97.js";
var TinymceVue2_vue_vue_type_style_index_0_scoped_true_lang = "";
const defaultOpt = JSON.stringify({
  base_url: "/tinymce",
  branding: false,
  language: "zh_CN",
  menubar: false,
  schema: "html5",
  plugins: "tp code hr",
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
const _sfc_main = {
  name: "TinymceVue2",
  props: {
    value: {
      type: [String, Number],
      default: "dsd"
    },
    show: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: {}
    }
  },
  emits: ["update:value"],
  data() {
    return {
      tinymceID: "tinymce-" + new Date().getTime() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
      tinymceTimerID: null,
      tinymce_width: "100%",
      tinymce_height: 400,
      tinymce_loading: "loading",
      editorFn: ""
    };
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
          setTimeout(() => {
            that.tinymce_loading = "";
          }, 200);
          editor.setTpContent(that.value);
          tinymce.activeEditor.setProgressState(false, 50);
        });
        editor.on("input NodeChange", () => {
          that.$emit("input", editor.getTpContent());
        });
      };
      Object.assign(defaultOptions, this.options || {});
      that.tinymce_height = defaultOptions.min_height;
      tinymce.init(defaultOptions);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, " five ");
}
var TinymceVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c5dacd42"]]);
const Demo0 = {};
Demo0.methods = {
  source() {
    return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li><li>36</li><li>37</li><li>38</li><li>39</li><li>40</li><li>41</li><li>42</li></ul><code class=" hljs hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;ReactRootID&quot;</span> &gt;</span>\n   \n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-comment">//https://babeljs.io/repl/</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;\n\n     <span class="hljs-keyword">class</span> <span class="hljs-title class_">reactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{\n       <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {\n         <span class="hljs-variable language_">super</span>(props);\n           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span> = {\n                    <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                    <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                    <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,\n                    <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,\n                    <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,\n                    <span class="hljs-attr">plugins</span>: [<span class="hljs-string">&#x27;advlist autolink lists link image charmap print tpImportword preview anchor&#x27;</span>, <span class="hljs-string">&#x27;searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons&#x27;</span>, <span class="hljs-string">&#x27;insertdatetime media table paste code help wordcount&#x27;</span>],\n                    <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image tpImportword | &#x27;</span> + <span class="hljs-string">&#x27;bold italic backcolor | alignleft aligncenter &#x27;</span> + <span class="hljs-string">&#x27;alignright alignjustify | bullist numlist outdent indent | &#x27;</span> + <span class="hljs-string">&#x27;removeformat | help&#x27;</span>,\n                    <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>,\n                    <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>\n             };\n           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span> =<span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>\n        }\n      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>) {\n        <span class="hljs-keyword">return</span> <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;div&quot;</span>, <span class="hljs-literal">null</span>, <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&quot;div&quot;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;&quot;</span>), <span class="hljs-comment">/*#__PURE__*/</span><span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-title class_">Editor</span>, {\n                  <span class="hljs-attr">initialValue</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInitialValue</span>,\n                  <span class="hljs-attr">init</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span>\n          }));\n        }\n    }\n\n   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="hljs-title class_">React</span>.<span class="hljs-title function_">createElement</span>(reactDemo,<span class="hljs-literal">null</span>), <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code><div class="language-text" >html</div></pre>';
  },
  sourceCode(DomeID) {
    class reactDemo extends React.Component {
      constructor(props) {
        super(props);
        this.reactDemoInit = {
          min_height: 200,
          base_url: "/tinymce",
          branding: false,
          language: "zh_CN",
          menubar: false,
          plugins: ["advlist autolink lists link image charmap print tpImportword preview anchor", "searchreplace visualblocks code fullscreen indent2em autoresize tpCollapse tpTabs tpButtons", "insertdatetime media table paste code help wordcount"],
          toolbar: "undo redo indent2em autoresize tpCollapse tpTabs tpButtons | formatselect image tpImportword | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          skeletonScreen: true
        };
        this.reactDemoInitialValue = "<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>";
      }
      render() {
        return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, ""), /* @__PURE__ */ React.createElement(Editor, {
          initialValue: this.reactDemoInitialValue,
          init: this.reactDemoInit
        }));
      }
    }
    return ReactDOM.render(React.createElement(reactDemo, null), DomeID);
  }
};
Demo0.template = '<PreviewReact class="demo-quickStart" idx="Demo0"  :source="source()">\n                              \n                            </PreviewReact>';
const Demo1 = {};
if (Demo1.methods) {
  Demo1.methods.source = function() {
    return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,\n<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },\n<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,\n        <span class="hljs-attr">tinymceOptions</span>:{\n                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,\n                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview&#x27;</span>,\n                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;code tpIndent2em tpCollapse tpTabs tpButtons Preview&#x27;</span>],\n                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,\n             \n        }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n</code><div class="language-text" >vue</div></pre>';
  };
  Demo1.methods.template = function() {
    return '<div>\n <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>\n  <div class="vueDemo">\n    <tinymce-vue v-model="content" :options="tinymceOptions" ></tinymce-vue>\n  </div>\n  <div v-html="content"></div>\n</div>';
  };
  Demo1.methods.sourceCode = function() {
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
            plugins: "tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview",
            toolbar: ["code tpIndent2em tpCollapse tpTabs tpButtons Preview"],
            skeletonScreen: true
          }
        };
      }
    };
  };
} else {
  Demo1.methods = {
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
              plugins: "tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview",
              toolbar: ["code tpIndent2em tpCollapse tpTabs tpButtons Preview"],
              skeletonScreen: true
            }
          };
        }
      };
    },
    source() {
      return '<pre class="hljs fv-hljs"><ul class="highlight-line-number" ><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li><li>32</li><li>33</li><li>34</li><li>35</li></ul><code class=" hljs hljs-js" @click.stop="()=>{}">&lt;template&gt;\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/assets/lib/tinymce-vue/tinymce&quot;</span>;\n<span class="hljs-keyword">import</span> tinymcePlugin <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpIndent2em&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@npkg/tinymce-plugin/tpImportword&quot;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;/@/example/vueDemo/Tinymce-vue2.vue&quot;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{\n<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,\n<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },\n<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){\n    <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,\n        <span class="hljs-attr">tinymceOptions</span>:{\n                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,\n                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,\n                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/tinymce&#x27;</span>,\n                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;tp code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview&#x27;</span>,\n                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;code tpIndent2em tpCollapse tpTabs tpButtons Preview&#x27;</span>],\n                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,\n             \n        }\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>\n</code><div class="language-text" >vue</div></pre>';
    }
  };
}
Demo1.template = '<PreviewVue2 class="demo-quickStart"  :template="template()"  :source="source()">\n                              \n                            </PreviewVue2>';
const __script = defineComponent({
  components: {
    Demo0,
    Demo1
  },
  template: '<div class="fv-mardown-html"><div class="fv-mardown-main"><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h2>\n<p class="language-html"><Demo0  data-isComponent="react" /></p>\n<p class="language-vue"><Demo1 data-isComponent="vue" /></p>\n</div></div><PagesRouter  docPath="guide/quickStart.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="quickStart" />'
});
export { __script as default };
