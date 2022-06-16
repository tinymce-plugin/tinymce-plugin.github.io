import "./pinia.js";
import { _ as _export_sfc } from "../index.js";
import { Q as openBlock, R as createElementBlock, Y as createVNode, a6 as pushScopeId, a7 as popScopeId, ab as resolveComponent, S as createBaseVNode } from "./vue.js";
import "./tinymce.js";
import "./tinymce-plugin-routes.js";
var demoAll_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "DemoAllIframe"
};
const _withScopeId = (n) => (pushScopeId("data-v-60c935a7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("iframe", {
  id: "demoIframeID",
  class: "demoIframeBox",
  name: "demoIframeID",
  src: "/tinymce/indexall.html",
  frameborder: "0",
  scrolling: "no",
  width: "100%",
  onload: "autoIframeHeight(this)"
}, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PagesRouter = resolveComponent("PagesRouter");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PagesRouter, { pagesName: "demoall" })
  ]);
}
var demoAll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-60c935a7"]]);
export { demoAll as default };
