var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import "./pinia.js";
import { I as defineAsyncComponent } from "./vue.js";
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const getModulesList = (router, resData, modulesList, LoadingComponent = { template: "<div>loading</div>" }, ErrorComponent = { template: "<div>err</div>" }) => {
  router.addRoute({ name: "404", path: "/:path(.*)", component: modulesList["/assets/chunk/test.js"] || { template: "<div>404</div>" } });
  resData.routes.map((ele) => {
    router.hasRoute(ele.name) && router.removeRoute(ele.name);
    if (ele.children && ele.children.length > 0) {
      router.addRoute(__spreadProps(__spreadValues({}, ele), { component: { template: '<div class="' + ele.name + ' w1300" ><router-view></router-view></div>' } }));
      ele.children.map((e) => {
        if (e.children && e.children.length > 0) {
          router.addRoute(ele.name, __spreadProps(__spreadValues({}, e), { component: { template: '<div class="' + e.name + ' w1300" ><router-view></router-view></div>' } }));
          e.children.map((e2) => {
            router.addRoute(e.name, __spreadProps(__spreadValues({}, e2), {
              component: defineAsyncComponent({
                loader: () => __vitePreload(() => import("/assets/chunk/" + e2.name + ".js"), true ? [] : void 0),
                loadingComponent: LoadingComponent,
                errorComponent: ErrorComponent,
                delay: 50,
                timeout: 36e4
              })
            }));
          });
        } else {
          router.addRoute(ele.name, __spreadProps(__spreadValues({}, e), { component: defineAsyncComponent({
            loader: () => __vitePreload(() => import("/assets/chunk/" + e.name + ".js"), true ? [] : void 0),
            loadingComponent: LoadingComponent,
            errorComponent: ErrorComponent,
            delay: 50,
            timeout: 36e4
          }) }));
        }
      });
    } else {
      router.addRoute(__spreadProps(__spreadValues({}, ele), {
        component: defineAsyncComponent({
          loader: () => __vitePreload(() => import("/assets/chunk/" + ele.name + ".js"), true ? [] : void 0),
          loadingComponent: LoadingComponent,
          errorComponent: ErrorComponent,
          delay: 50,
          timeout: 36e4
        })
      }));
    }
  });
};
export { __vitePreload as _, getModulesList as g };
