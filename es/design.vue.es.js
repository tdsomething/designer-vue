import { defineComponent, openBlock, createElementBlock } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "DButton",
  setup() {
    return {};
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "\u6309\u94AE");
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
Button.install = (app) => {
  app.component(Button.name, Button);
};
const _sfc_main = defineComponent({
  name: "DInput",
  setup() {
    return {};
  }
});
const _hoisted_1 = { type: "text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", _hoisted_1);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Input.install = (app) => {
  app.component(Input.name, Input);
};
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Button,
  Input
});
const KdPlugin = {
  install(app) {
    Object.keys(components).map((key) => {
      var _a, _b;
      return (_b = (_a = components[key]).install) == null ? void 0 : _b.call(_a, app);
    });
  }
};
export { Button, Input, KdPlugin as default };
