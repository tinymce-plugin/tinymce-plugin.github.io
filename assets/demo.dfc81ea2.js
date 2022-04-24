import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createVNode, b as createBaseVNode, o as openBlock } from "./index.a292dab3.js";
const _sfc_main = {
  name: "DemoIframe"
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("iframe", {
  id: "demoIframeID",
  name: "demoIframeID",
  src: "/tinymce/index.html",
  frameborder: "0",
  scrolling: "no",
  width: "100%",
  onload: "autoIframeHeight(this)"
}, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PagesRouter = resolveComponent("PagesRouter");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_PagesRouter, { pagesName: "demo" })
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
