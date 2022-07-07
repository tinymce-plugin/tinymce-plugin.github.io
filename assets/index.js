var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a, _b;
export function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
import { d as defineStore, c as createPinia } from "./chunk/pinia.js";
import { K as shallowRef, L as unref, I as computed, A as reactive, y as inject, G as nextTick, M as defineComponent, O as h$1, P as provide, v as ref, z as watch, Q as openBlock, R as createElementBlock, S as createBaseVNode, T as renderSlot, U as createCommentVNode, V as createStaticVNode, W as createBlock, X as withCtx, Y as createVNode, Z as readonly, F as onUnmounted, _ as normalizeClass, $ as resolveDynamicComponent, a0 as createTextVNode, a1 as toDisplayString$1, a2 as Fragment, a3 as renderList, B as isRef, x as getCurrentInstance, a4 as onMounted, a5 as Text, a6 as pushScopeId, a7 as popScopeId, a8 as Transition, a9 as withModifiers, aa as normalizeStyle, ab as resolveComponent, ac as toRef, ad as version, ae as Teleport, af as warn$1, ag as createApp } from "./chunk/vue.js";
import { c as commonjsGlobal } from "./chunk/tinymce.js";
import { g as getModulesList } from "./chunk/tinymce-plugin-routes.js";
const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
(function(window2, document2) {
  function Pathformer(element) {
    if (typeof element === "undefined") {
      throw new Error('Pathformer [constructor]: "element" parameter is required');
    }
    if (element.constructor === String) {
      element = document2.getElementById(element);
      if (!element) {
        throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
      }
    }
    if (element.constructor instanceof window2.SVGElement || /^svg$/i.test(element.nodeName)) {
      this.el = element;
    } else {
      throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
    }
    this.scan(element);
  }
  Pathformer.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"];
  Pathformer.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"];
  Pathformer.prototype.scan = function(svg) {
    var fn2, element, pathData, pathDom, elements = svg.querySelectorAll(this.TYPES.join(","));
    for (var i2 = 0; i2 < elements.length; i2++) {
      element = elements[i2];
      fn2 = this[element.tagName.toLowerCase() + "ToPath"];
      pathData = fn2(this.parseAttr(element.attributes));
      pathDom = this.pathMaker(element, pathData);
      element.parentNode.replaceChild(pathDom, element);
    }
  };
  Pathformer.prototype.lineToPath = function(element) {
    var newElement = {};
    newElement.d = "M" + element.x1 + "," + element.y1 + "L" + element.x2 + "," + element.y2;
    return newElement;
  };
  Pathformer.prototype.rectToPath = function(element) {
    var newElement = {}, x2 = parseFloat(element.x) || 0, y2 = parseFloat(element.y) || 0, width = parseFloat(element.width) || 0, height = parseFloat(element.height) || 0;
    newElement.d = "M" + x2 + " " + y2 + " ";
    newElement.d += "L" + (x2 + width) + " " + y2 + " ";
    newElement.d += "L" + (x2 + width) + " " + (y2 + height) + " ";
    newElement.d += "L" + x2 + " " + (y2 + height) + " Z";
    return newElement;
  };
  Pathformer.prototype.polylineToPath = function(element) {
    var i2, path;
    var newElement = {};
    var points = element.points.trim().split(" ");
    if (element.points.indexOf(",") === -1) {
      var formattedPoints = [];
      for (i2 = 0; i2 < points.length; i2 += 2) {
        formattedPoints.push(points[i2] + "," + points[i2 + 1]);
      }
      points = formattedPoints;
    }
    path = "M" + points[0];
    for (i2 = 1; i2 < points.length; i2++) {
      if (points[i2].indexOf(",") !== -1) {
        path += "L" + points[i2];
      }
    }
    newElement.d = path;
    return newElement;
  };
  Pathformer.prototype.polygonToPath = function(element) {
    var newElement = Pathformer.prototype.polylineToPath(element);
    newElement.d += "Z";
    return newElement;
  };
  Pathformer.prototype.ellipseToPath = function(element) {
    var startX = element.cx - element.rx, startY = element.cy;
    var endX = parseFloat(element.cx) + parseFloat(element.rx), endY = element.cy;
    var newElement = {};
    newElement.d = "M" + startX + "," + startY + "A" + element.rx + "," + element.ry + " 0,1,1 " + endX + "," + endY + "A" + element.rx + "," + element.ry + " 0,1,1 " + startX + "," + endY;
    return newElement;
  };
  Pathformer.prototype.circleToPath = function(element) {
    var newElement = {};
    var startX = element.cx - element.r, startY = element.cy;
    var endX = parseFloat(element.cx) + parseFloat(element.r), endY = element.cy;
    newElement.d = "M" + startX + "," + startY + "A" + element.r + "," + element.r + " 0,1,1 " + endX + "," + endY + "A" + element.r + "," + element.r + " 0,1,1 " + startX + "," + endY;
    return newElement;
  };
  Pathformer.prototype.pathMaker = function(element, pathData) {
    var i2, attr, pathTag = document2.createElementNS("http://www.w3.org/2000/svg", "path");
    for (i2 = 0; i2 < element.attributes.length; i2++) {
      attr = element.attributes[i2];
      if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
        pathTag.setAttribute(attr.name, attr.value);
      }
    }
    for (i2 in pathData) {
      pathTag.setAttribute(i2, pathData[i2]);
    }
    return pathTag;
  };
  Pathformer.prototype.parseAttr = function(element) {
    var attr, output = {};
    for (var i2 = 0; i2 < element.length; i2++) {
      attr = element[i2];
      if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf("%") !== -1) {
        throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
      }
      output[attr.name] = attr.value;
    }
    return output;
  };
  var requestAnimFrame, cancelAnimFrame, parsePositiveInt;
  function Vivus2(element, options, callback) {
    this.isReady = false;
    this.setElement(element, options);
    this.setOptions(options);
    this.setCallback(callback);
    if (this.isReady) {
      this.init();
    }
  }
  Vivus2.LINEAR = function(x2) {
    return x2;
  };
  Vivus2.EASE = function(x2) {
    return -Math.cos(x2 * Math.PI) / 2 + 0.5;
  };
  Vivus2.EASE_OUT = function(x2) {
    return 1 - Math.pow(1 - x2, 3);
  };
  Vivus2.EASE_IN = function(x2) {
    return Math.pow(x2, 3);
  };
  Vivus2.EASE_OUT_BOUNCE = function(x2) {
    var base2 = -Math.cos(x2 * (0.5 * Math.PI)) + 1, rate = Math.pow(base2, 1.5), rateR = Math.pow(1 - x2, 2), progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
    return 1 - rateR + progress * rateR;
  };
  Vivus2.prototype.setElement = function(element, options) {
    if (typeof element === "undefined") {
      throw new Error('Vivus [constructor]: "element" parameter is required');
    }
    if (element.constructor === String) {
      element = document2.getElementById(element);
      if (!element) {
        throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
      }
    }
    this.parentEl = element;
    if (options && options.file) {
      var objElm = document2.createElement("object");
      objElm.setAttribute("type", "image/svg+xml");
      objElm.setAttribute("data", options.file);
      objElm.setAttribute("built-by-vivus", "true");
      element.appendChild(objElm);
      element = objElm;
    }
    switch (element.constructor) {
      case window2.SVGSVGElement:
      case window2.SVGElement:
        this.el = element;
        this.isReady = true;
        break;
      case window2.HTMLObjectElement:
        var onLoad, self;
        self = this;
        onLoad = function(e2) {
          if (self.isReady) {
            return;
          }
          self.el = element.contentDocument && element.contentDocument.querySelector("svg");
          if (!self.el && e2) {
            throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
          } else if (self.el) {
            if (element.getAttribute("built-by-vivus")) {
              self.parentEl.insertBefore(self.el, element);
              self.parentEl.removeChild(element);
              self.el.setAttribute("width", "100%");
              self.el.setAttribute("height", "100%");
            }
            self.isReady = true;
            self.init();
            return true;
          }
        };
        if (!onLoad()) {
          element.addEventListener("load", onLoad);
        }
        break;
      default:
        throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
    }
  };
  Vivus2.prototype.setOptions = function(options) {
    var allowedTypes = ["delayed", "async", "oneByOne", "scenario", "scenario-sync"];
    var allowedStarts = ["inViewport", "manual", "autostart"];
    if (options !== void 0 && options.constructor !== Object) {
      throw new Error('Vivus [constructor]: "options" parameter must be an object');
    } else {
      options = options || {};
    }
    if (options.type && allowedTypes.indexOf(options.type) === -1) {
      throw new Error("Vivus [constructor]: " + options.type + " is not an existing animation `type`");
    } else {
      this.type = options.type || allowedTypes[0];
    }
    if (options.start && allowedStarts.indexOf(options.start) === -1) {
      throw new Error("Vivus [constructor]: " + options.start + " is not an existing `start` option");
    } else {
      this.start = options.start || allowedStarts[0];
    }
    this.isIE = window2.navigator.userAgent.indexOf("MSIE") !== -1 || window2.navigator.userAgent.indexOf("Trident/") !== -1 || window2.navigator.userAgent.indexOf("Edge/") !== -1;
    this.duration = parsePositiveInt(options.duration, 120);
    this.delay = parsePositiveInt(options.delay, null);
    this.dashGap = parsePositiveInt(options.dashGap, 1);
    this.forceRender = options.hasOwnProperty("forceRender") ? !!options.forceRender : this.isIE;
    this.selfDestroy = !!options.selfDestroy;
    this.onReady = options.onReady;
    this.frameLength = this.currentFrame = this.map = this.delayUnit = this.speed = this.handle = null;
    this.animatedTime = options.animatedTime ? options.animatedTime : -1;
    this.ignoreInvisible = options.hasOwnProperty("ignoreInvisible") ? !!options.ignoreInvisible : false;
    this.animTimingFunction = options.animTimingFunction || Vivus2.LINEAR;
    this.pathTimingFunction = options.pathTimingFunction || Vivus2.LINEAR;
    if (this.delay >= this.duration) {
      throw new Error("Vivus [constructor]: delay must be shorter than duration");
    }
  };
  Vivus2.prototype.setCallback = function(callback) {
    if (!!callback && callback.constructor !== Function) {
      throw new Error('Vivus [constructor]: "callback" parameter must be a function');
    }
    this.callback = callback || function() {
    };
  };
  Vivus2.prototype.mapping = function() {
    var i2, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
    timePoint = totalLength = lengthMeter = 0;
    paths = this.el.querySelectorAll("path");
    for (i2 = 0; i2 < paths.length; i2++) {
      path = paths[i2];
      if (this.isInvisible(path)) {
        continue;
      }
      pathObj = { el: path, length: Math.ceil(path.getTotalLength()) };
      if (isNaN(pathObj.length)) {
        if (window2.console && console.warn) {
          console.warn("Vivus [mapping]: cannot retrieve a path element length", path);
        }
        continue;
      }
      this.map.push(pathObj);
      path.style.strokeDasharray = pathObj.length + " " + (pathObj.length + this.dashGap * 2);
      path.style.strokeDashoffset = pathObj.length + this.dashGap;
      pathObj.length += this.dashGap;
      totalLength += pathObj.length;
      this.renderPath(i2);
    }
    totalLength = totalLength === 0 ? 1 : totalLength;
    this.delay = this.delay === null ? this.duration / 3 : this.delay;
    this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);
    for (i2 = 0; i2 < this.map.length; i2++) {
      pathObj = this.map[i2];
      switch (this.type) {
        case "delayed":
          pathObj.startAt = this.delayUnit * i2;
          pathObj.duration = this.duration - this.delay;
          break;
        case "oneByOne":
          pathObj.startAt = lengthMeter / totalLength * this.duration;
          pathObj.duration = pathObj.length / totalLength * this.duration;
          break;
        case "async":
          pathObj.startAt = 0;
          pathObj.duration = this.duration;
          break;
        case "scenario-sync":
          path = pathObj.el;
          pAttrs = this.parseAttr(path);
          pathObj.startAt = timePoint + (parsePositiveInt(pAttrs["data-delay"], this.delayUnit) || 0);
          pathObj.duration = parsePositiveInt(pAttrs["data-duration"], this.duration);
          timePoint = pAttrs["data-async"] !== void 0 ? pathObj.startAt : pathObj.startAt + pathObj.duration;
          this.frameLength = Math.max(this.frameLength, pathObj.startAt + pathObj.duration);
          break;
        case "scenario":
          path = pathObj.el;
          pAttrs = this.parseAttr(path);
          pathObj.startAt = parsePositiveInt(pAttrs["data-start"], this.delayUnit) || 0;
          pathObj.duration = parsePositiveInt(pAttrs["data-duration"], this.duration);
          this.frameLength = Math.max(this.frameLength, pathObj.startAt + pathObj.duration);
          break;
      }
      lengthMeter += pathObj.length;
      this.frameLength = this.frameLength || this.duration;
    }
  };
  Vivus2.prototype.drawer = function() {
    var self = this;
    this.currentFrame += this.speed;
    if (this.animatedTime == -1 && this.currentFrame + this.frameLength % 100 == this.frameLength || this.currentFrame == this.animatedTime && this.animatedTime > -1) {
      addClass(this.el.parentNode, "animated");
    }
    if (this.currentFrame <= 0) {
      this.stop();
      this.reset();
      this.callback(this);
    } else if (this.currentFrame >= this.frameLength) {
      this.stop();
      this.currentFrame = this.frameLength;
      this.trace();
      if (this.selfDestroy) {
        this.destroy();
      }
      this.callback(this);
    } else {
      this.trace();
      this.handle = requestAnimFrame(function() {
        self.drawer();
      });
    }
  };
  Vivus2.prototype.trace = function() {
    var i2, progress, path, currentFrame;
    currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
    for (i2 = 0; i2 < this.map.length; i2++) {
      path = this.map[i2];
      progress = (currentFrame - path.startAt) / path.duration;
      progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
      if (path.progress !== progress) {
        path.progress = progress;
        path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
        this.renderPath(i2);
      }
    }
  };
  Vivus2.prototype.renderPath = function(index) {
    if (this.forceRender && this.map && this.map[index]) {
      var pathObj = this.map[index], newPath = pathObj.el.cloneNode(true);
      pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
      pathObj.el = newPath;
    }
  };
  Vivus2.prototype.init = function() {
    this.frameLength = 0;
    this.currentFrame = 0;
    this.map = [];
    new Pathformer(this.el);
    this.mapping();
    this.starter();
    if (this.onReady) {
      this.onReady(this);
    }
  };
  Vivus2.prototype.starter = function() {
    switch (this.start) {
      case "manual":
        return;
      case "autostart":
        this.play();
        break;
      case "inViewport":
        var self = this, listener = function() {
          if (self.isInViewport(self.parentEl, 1)) {
            self.play();
            window2.removeEventListener("scroll", listener);
          }
        };
        window2.addEventListener("scroll", listener);
        listener();
        break;
    }
  };
  Vivus2.prototype.getStatus = function() {
    return this.currentFrame === 0 ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";
  };
  Vivus2.prototype.reset = function() {
    return this.setFrameProgress(0);
  };
  Vivus2.prototype.finish = function() {
    return this.setFrameProgress(1);
  };
  Vivus2.prototype.setFrameProgress = function(progress) {
    progress = Math.min(1, Math.max(0, progress));
    this.currentFrame = Math.round(this.frameLength * progress);
    this.trace();
    return this;
  };
  Vivus2.prototype.play = function(speed) {
    if (speed && typeof speed !== "number") {
      throw new Error("Vivus [play]: invalid speed");
    }
    this.speed = speed || 1;
    removeClass(this.el.parentNode, "animated");
    if (!this.handle) {
      this.drawer();
    }
    return this;
  };
  Vivus2.prototype.stop = function() {
    if (this.handle) {
      cancelAnimFrame(this.handle);
      this.handle = null;
    }
    return this;
  };
  Vivus2.prototype.destroy = function() {
    this.stop();
    var i2, path;
    for (i2 = 0; i2 < this.map.length; i2++) {
      path = this.map[i2];
      path.el.style.strokeDashoffset = null;
      path.el.style.strokeDasharray = null;
      this.renderPath(i2);
    }
  };
  Vivus2.prototype.isInvisible = function(el) {
    var rect, ignoreAttr = el.getAttribute("data-ignore");
    if (ignoreAttr !== null) {
      return ignoreAttr !== "false";
    }
    if (this.ignoreInvisible) {
      rect = el.getBoundingClientRect();
      return !rect.width && !rect.height;
    } else {
      return false;
    }
  };
  function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
  }
  function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
      elements.className = elements.className.replace(/(^\s*)|(\s*$)/g, "") + " " + cName;
    }
  }
  function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
      elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
  }
  Vivus2.prototype.parseAttr = function(element) {
    var attr, output = {};
    if (element && element.attributes) {
      for (var i2 = 0; i2 < element.attributes.length; i2++) {
        attr = element.attributes[i2];
        output[attr.name] = attr.value;
      }
    }
    return output;
  };
  Vivus2.prototype.isInViewport = function(el, h2) {
    var scrolled = this.scrollY(), viewed = scrolled + this.getViewportH(), elBCR = el.getBoundingClientRect(), elHeight = elBCR.height, elTop = scrolled + elBCR.top, elBottom = elTop + elHeight;
    h2 = h2 || 0;
    return elTop + elHeight * h2 <= viewed && elBottom >= scrolled;
  };
  Vivus2.prototype.docElem = window2.document.documentElement;
  Vivus2.prototype.getViewportH = function() {
    var client = this.docElem.clientHeight, inner = window2.innerHeight;
    if (client < inner) {
      return inner;
    } else {
      return client;
    }
  };
  Vivus2.prototype.scrollY = function() {
    return window2.pageYOffset || this.docElem.scrollTop;
  };
  requestAnimFrame = function() {
    return window2.requestAnimationFrame || window2.webkitRequestAnimationFrame || window2.mozRequestAnimationFrame || window2.oRequestAnimationFrame || window2.msRequestAnimationFrame || function(callback) {
      return window2.setTimeout(callback, 1e3 / 60);
    };
  }();
  cancelAnimFrame = function() {
    return window2.cancelAnimationFrame || window2.webkitCancelAnimationFrame || window2.mozCancelAnimationFrame || window2.oCancelAnimationFrame || window2.msCancelAnimationFrame || function(id) {
      return window2.clearTimeout(id);
    };
  }();
  parsePositiveInt = function(value, defaultValue) {
    var output = parseInt(value, 10);
    return output >= 0 ? output : defaultValue;
  };
  if (typeof define === "function" && define.amd) {
    define([], function() {
      return Vivus2;
    });
  } else if (typeof exports === "object") {
    module.exports = Vivus2;
  } else {
    window2.Vivus = Vivus2;
  }
})(window, document);
var Vivus$1 = Vivus;
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol$1 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol$1 ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol$1 && obj[Symbol.toStringTag] === "Module";
}
const assign$1 = Object.assign;
function applyToParams(fn2, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn2) : fn2(value);
  }
  return newParams;
}
const noop = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a2, b2) {
  const aLastIndex = a2.matched.length - 1;
  const bLastIndex = b2.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b2.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b2.params) && stringifyQuery2(a2.query) === stringifyQuery2(b2.query) && a2.hash === b2.hash;
}
function isSameRouteRecord(a2, b2) {
  return (a2.aliasOf || a2) === (b2.aliasOf || b2);
}
function isSameRouteLocationParams(a2, b2) {
  if (Object.keys(a2).length !== Object.keys(b2).length)
    return false;
  for (const key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b2[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b2) {
  return Array.isArray(a2) ? isEquivalentArray(a2, b2) : Array.isArray(b2) ? isEquivalentArray(b2, a2) : a2 === b2;
}
function isEquivalentArray(a2, b2) {
  return Array.isArray(b2) ? a2.length === b2.length && a2.every((value, i2) => value === b2[i2]) : a2.length === 1 && a2[0] === b2;
}
function resolveRelativePath(to2, from) {
  if (to2.startsWith("/"))
    return to2;
  if (!to2)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to2.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners2 = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to2 = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to2;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to2);
    }
    listeners2.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners2.push(callback);
    const teardown = () => {
      const index = listeners2.indexOf(callback);
      if (index > -1)
        listeners2.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign$1({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to2, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to2 : createBaseLocation() + base2 + to2;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to2, data2) {
    const state = assign$1({}, history2.state, buildState(historyState.value.back, to2, historyState.value.forward, true), data2, { position: historyState.value.position });
    changeLocation(to2, state, true);
    currentLocation.value = to2;
  }
  function push(to2, data2) {
    const currentState = assign$1({}, historyState.value, history2.state, {
      forward: to2,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state = assign$1({}, buildState(currentLocation.value, to2, null), { position: currentState.position + 1 }, data2);
    changeLocation(to2, state, false);
    currentLocation.value = to2;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go2(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign$1({
    location: "",
    base: base2,
    go: go2,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign$1(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re3 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re3 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re3})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re3}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re3})(?:/(?:${re3}))*)` : `(${re3})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re3 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re2 = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse2(path) {
    const match = path.match(re2);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re: re2,
    score,
    keys,
    parse: parse2,
    stringify
  };
}
function compareScoreArray(a2, b2) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b2.length) {
    const diff = b2[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b2.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b2.length) {
    return b2.length === 1 && b2[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b2) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b2.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign$1(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign$1({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        const children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0 && (matcher.record.path !== matchers[i2].record.path || !isRecordChildOf(matcher, matchers[i2])))
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign$1(paramsFromLocation(currentLocation.params, matcher.keys.filter((k2) => !k2.optional).map((k2) => k2.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m2) => m2.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m2) => m2.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign$1({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  const options = {};
  for (const key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE$1 = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE$1, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE$1, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = Array.isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i2 = handlers.indexOf(handler);
      if (i2 > -1)
        handlers.splice(i2, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers,
    reset
  };
}
function guardToPromiseFn(guard, to2, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to: to2
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to2,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to2, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to2, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to2, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to2, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router2.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive2 = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      return router2[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive: isActive2,
    isExactActive,
    navigate
  };
}
function queryToString(query) {
  return "?" + Object.keys(query).map((key) => {
    const value = query[key];
    if (value == null)
      return "";
    if (Array.isArray(value)) {
      return value.map((val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");
    }
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }).filter(Boolean).join("&");
}
function paramsToHref(to2) {
  const { path, params } = to2;
  const pathParams = Object.keys(params).reduce((acc, key) => {
    acc[key] = params[key];
    return acc;
  }, {});
  const pathWithParams = path.replace(/\:(\w+)/g, (_2, key) => {
    const value = pathParams[key];
    if (value == null)
      return ":" + key;
    if (Array.isArray(value)) {
      return value.map((val) => encodeURIComponent(val)).join("/");
    }
    return encodeURIComponent(value);
  });
  return `${pathWithParams}`;
}
function checkExternalLink(to2) {
  if (typeof to2 === "string" && to2.startsWith("http")) {
    return { isExternalLink: true, href: to2, isJavascript: false };
  } else if (typeof to2 === "string" && to2.startsWith("javascript:") || typeof to2.path === "string" && to2.path.startsWith("javascript:")) {
    return { isExternalLink: false, href: to2, isJavascript: true };
  } else if (typeof to2 === "object" && typeof to2.path === "string" && to2.path.startsWith("http")) {
    let path = typeof to2.params === "object" ? paramsToHref(to2) : to2.path;
    let queryString = typeof to2.query === "object" ? queryToString(to2.query) : "";
    return { isExternalLink: true, href: path + queryString + (to2.hash ? to2.hash : ""), isJavascript: false };
  }
  return { isExternalLink: false, href: "", isJavascript: false };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const { options } = inject(routerKey);
    const { isExternalLink, href, isJavascript } = checkExternalLink(props.to);
    const link = !isExternalLink && !isJavascript ? reactive(useLink(props)) : { href, isActive: false, isExactActive: false, route: "", navigate: () => Promise.resolve() };
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : !isExternalLink ? h$1("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children) : h$1("a", {
        href: link.href,
        target: !isJavascript ? "_blank" : null,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to2, name], [oldInstance, from, oldName]) => {
      if (to2) {
        to2.instances[name] = instance;
        if (from && from !== to2 && instance && instance === oldInstance) {
          if (!to2.leaveGuards.size) {
            to2.leaveGuards = from.leaveGuards;
          }
          if (!to2.updateGuards.size) {
            to2.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to2 && (!from || !isSameRouteRecord(to2, from) || !oldInstance)) {
        (to2.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h$1(ViewComponent, assign$1({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data2) {
  if (!slot)
    return null;
  const slotContent = slot(data2);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    currentLocation = assign$1({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign$1(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign$1({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign$1({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign$1({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign$1({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to2) {
    return typeof to2 === "string" ? parseURL(parseQuery$1, to2, currentRoute.value.path) : assign$1({}, to2);
  }
  function checkCanceledNavigation(to2, from) {
    if (pendingLocation !== to2) {
      return createRouterError(8, {
        from,
        to: to2
      });
    }
  }
  function push(to2) {
    return pushWithRedirect(to2);
  }
  function replace(to2) {
    return push(assign$1(locationAsObject(to2), { replace: true }));
  }
  function handleRedirectRecord(to2) {
    const lastMatched = to2.matched[to2.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to2) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign$1({
        query: to2.query,
        hash: to2.hash,
        params: to2.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to2, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to2);
    const from = currentRoute.value;
    const data2 = to2.state;
    const force = to2.force;
    const replace2 = to2.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign$1(locationAsObject(shouldRedirect), {
        state: data2,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll3(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign$1(locationAsObject(failure2.to), {
            state: data2,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data2);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to2, from) {
    const error = checkCanceledNavigation(to2, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to2, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to2, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to2, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to2, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to2, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to2, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to2, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to2, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to2.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to2, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to2, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to2.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to2, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to2, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to2, from, failure) {
    for (const guard of afterGuards.list())
      guard(to2, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data2) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign$1({
          scroll: isFirstNavigation && state && state.scroll
        }, data2));
      else
        routerHistory.push(toLocation.fullPath, data2);
    }
    currentRoute.value = toLocation;
    handleScroll3(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to2, _from, info) => {
      const toLocation = resolve(to2);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign$1(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to2, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to2, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve2, reject) => {
      readyHandlers.add([resolve2, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll3(to2, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to2.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to2, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to2, from));
  }
  const go2 = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go: go2,
    back: () => go2(-1),
    forward: () => go2(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app2) {
      const router3 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router3;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app2.provide(routerKey, router3);
      app2.provide(routeLocationKey, reactive(reactiveRoute));
      app2.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router2;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to2, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to2.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to2.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to2.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const useData = () => {
  return {
    theme: {
      footer: {
        message: "sdsd",
        copyright: "copyright"
      },
      value: {
        sidebar: {}
      },
      localeLinks: {
        items: [{
          link: "zh",
          text: "\u7B80\u4F53\u4E2D\u6587"
        }, {
          link: "en",
          text: "EingLish"
        }]
      },
      socialLinks: [{
        link: "https://github.com/tinymce-plugin",
        icon: "github"
      }]
    },
    site: {
      appearance: {}
    },
    page: {
      value: {
        relativePath: ""
      }
    },
    frontmatter: {
      value: {
        sidebar: true
      }
    }
  };
};
const inBrowser$1 = typeof window !== "undefined";
ref(inBrowser$1 ? location.hash : "");
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
var TPSwitch_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$E = {};
const _hoisted_1$A = {
  class: "TPSwitch",
  type: "button",
  role: "switch"
};
const _hoisted_2$t = { class: "check" };
const _hoisted_3$k = {
  key: 0,
  class: "icon"
};
function _sfc_render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$A, [
    createBaseVNode("span", _hoisted_2$t, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$k, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
var TPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$k], ["__scopeId", "data-v-4ce27f65"]]);
const _sfc_main$D = {};
const _hoisted_1$z = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$s = /* @__PURE__ */ createStaticVNode('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9);
const _hoisted_11$5 = [
  _hoisted_2$s
];
function _sfc_render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_11$5);
}
var TPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$j]]);
const _sfc_main$C = {};
const _hoisted_1$y = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1);
const _hoisted_3$j = [
  _hoisted_2$r
];
function _sfc_render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$j);
}
var TPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$i]]);
var TPSwitchAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "TPSwitchAppearance",
  setup(__props) {
    const APPEARANCE_KEY = "APPEARANCE_KEY";
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY) || "auto";
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      query.onchange = (e2) => {
        if (userPreference === "auto") {
          setClass(isDark = e2.matches);
        }
      };
      setClass(isDark);
      function toggle2() {
        setClass(isDark = !isDark);
        userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        classList[dark ? "add" : "remove"]("dark");
      }
      return toggle2;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TPSwitch, {
        class: "TPSwitchAppearance",
        "aria-label": "toggle dark mode",
        onClick: unref(toggle)
      }, {
        default: withCtx(() => [
          createVNode(TPIconSun, { class: "sun" }),
          createVNode(TPIconMoon, { class: "moon" })
        ]),
        _: 1
      }, 8, ["onClick"]);
    };
  }
});
var TPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-2f583cdc"]]);
var TPNavBarAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$x = { class: "TPNavBarAppearance" };
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "TPNavBarAppearance",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        createVNode(TPSwitchAppearance)
      ]);
    };
  }
});
var TPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-1597de3c"]]);
const _sfc_main$z = {};
const _hoisted_1$w = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$q = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$i = /* @__PURE__ */ createBaseVNode("path", {
  d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
  class: "css-c4d79v"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$q,
  _hoisted_3$i
];
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_4$a);
}
var TPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$h]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a2, _b2, _c;
      if (el === options.el.value || ((_a2 = options.el.value) == null ? void 0 : _a2.contains(el))) {
        focus.value = true;
        (_b2 = options.onFocus) == null ? void 0 : _b2.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$y = {};
const _hoisted_1$v = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$p = /* @__PURE__ */ createBaseVNode("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1);
const _hoisted_3$h = [
  _hoisted_2$p
];
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$h);
}
var TPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$g]]);
const _sfc_main$x = {};
const _hoisted_1$u = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "19",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "5",
  cy: "12",
  r: "2"
}, null, -1);
const _hoisted_5$8 = [
  _hoisted_2$o,
  _hoisted_3$g,
  _hoisted_4$9
];
function _sfc_render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_5$8);
}
var TPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$f]]);
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const OUTBOUND_RE = /^[a-z]+:/i;
const inBrowser = typeof window !== "undefined";
const hashRef = ref(inBrowser ? location.hash : "");
function isExternal(path) {
  return OUTBOUND_RE.test(path);
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return hashRef.value === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`;
  return normalizedPath;
}
const _sfc_main$w = {};
const _hoisted_1$t = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createBaseVNode("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$n,
  _hoisted_3$f
];
function _sfc_render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_4$8);
}
var TPIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$e]]);
var TPLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "TPLink",
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.href ? "a" : "a"), {
        class: normalizeClass(["TPLink", { link: __props.href }]),
        href: __props.href ? unref(normalizeLink)(__props.href) : void 0,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noopener noreferrer" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(TPIconExternalLink, {
            key: 0,
            class: "icon"
          })) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
var TPLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-7bc4271e"]]);
var TPMenuLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$s = { class: "TPMenuLink" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "TPMenuLink",
  props: {
    item: null,
    isLang: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        !__props.isLang ? (openBlock(), createBlock(TPLink, {
          key: 0,
          class: normalizeClass({ active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link) }),
          href: __props.item.link
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString$1(__props.item.text), 1)
          ]),
          _: 1
        }, 8, ["class", "href"])) : (openBlock(), createBlock(TPLink, {
          key: 1,
          class: normalizeClass({ active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link), link: true })
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString$1(__props.item.text), 1)
          ]),
          _: 1
        }, 8, ["class"]))
      ]);
    };
  }
});
var TPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-22c93d82"]]);
var TPMenuGroup_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$r = { class: "TPMenuGroup" };
const _hoisted_2$m = {
  key: 0,
  class: "title"
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "TPMenuGroup",
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$m, toDisplayString$1(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(TPMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
var TPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-ddd05356"]]);
var TPMenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$q = { class: "TPMenu" };
const _hoisted_2$l = {
  key: 0,
  class: "items"
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "TPMenu",
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$l, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.text
            }, [
              "link" in item ? (openBlock(), createBlock(TPMenuLink, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createBlock(TPMenuGroup, {
                key: 1,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var TPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-6df05e12"]]);
var TPFlyout_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$p = ["aria-expanded", "aria-label"];
const _hoisted_2$k = {
  key: 0,
  class: "text"
};
const _hoisted_3$e = { class: "menu" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "TPFlyout",
  props: {
    icon: null,
    button: null,
    label: null,
    items: null
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "TPFlyout",
        ref_key: "el",
        ref: el,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": __props.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          __props.button || __props.icon ? (openBlock(), createElementBlock("span", _hoisted_2$k, [
            __props.icon ? (openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
              key: 0,
              class: "option-icon"
            })) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString$1(__props.button) + " ", 1),
            createVNode(TPIconChevronDown, { class: "text-icon" })
          ])) : (openBlock(), createBlock(TPIconMoreHorizontal, {
            key: 1,
            class: "icon"
          }))
        ], 8, _hoisted_1$p),
        createBaseVNode("div", _hoisted_3$e, [
          createVNode(TPMenu, { items: __props.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
var TPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-5a64643a"]]);
/*!
  * @intlify/shared v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source2) => friendlyJSONstringify({ l: locale, k: key, s: source2 });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber$1 = (val) => typeof val === "number" && isFinite(val);
const isDate$1 = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject$1(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function hasOwn$1(obj, key) {
  return hasOwnProperty$1.call(obj, key);
}
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$2 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray$1(val) || isPlainObject$1(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * @intlify/message-resolver v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isObject$1 = (val) => val !== null && typeof val === "object";
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b2 = str.charCodeAt(str.length - 1);
  return a2 === b2 && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode2 = 0;
  let subPathDepth = 0;
  let c2;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode2 = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode2 === 5 && nextChar === "'" || mode2 === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode2 !== null) {
    index++;
    c2 = path[index];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode2];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode2 = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c2;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode2 === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveValue(obj, path) {
  if (!isObject$1(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
function handleFlatJson(obj) {
  if (!isObject$1(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$1(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = {};
        }
        currentObj = currentObj[subKeys[i2]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject$1(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
/*!
  * @intlify/runtime v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber$1(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber$1(options.named.count) || isNumber$1(options.named.n)) ? isNumber$1(options.named.count) ? options.named.count : isNumber$1(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$2(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject$2(options.pluralRules) && isString$1(locale) && isFunction$1(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber$1(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction$1(options.messages) ? options.messages(key) : isObject$2(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize2 = isPlainObject$1(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject$1(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject$1(options.processor) && isString$1(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: (key, modifier) => {
      const msg = message(key)(ctx);
      return isString$1(modifier) ? _modifier(modifier)(msg) : msg;
    },
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize2
  };
  return ctx;
}
/*!
  * @intlify/message-compiler v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
function createCompileError(code, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * @intlify/devtools-if v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * @intlify/core-base v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
let devtools = null;
/* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools;
}
const VERSION$2 = "9.1.10";
const NOT_REOSLVED = -1;
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString$1(val) ? val.toUpperCase() : val,
    lower: (val) => isString$1(val) ? val.toLowerCase() : val,
    capitalize: (val) => isString$1(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = isString$1(options.version) ? options.version : VERSION$2;
  const locale = isString$1(options.locale) ? options.locale : "en-US";
  const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || isString$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = isPlainObject$1(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject$1(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$1(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject$1(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
  const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject$2(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$2(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$2(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    datetimeFormats,
    numberFormats,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    onWarn,
    __datetimeFormatters,
    __numberFormatters,
    __meta
  };
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString$1(ret) ? ret : key;
  } else {
    return key;
  }
}
function getLocaleChain(ctx, fallback, start) {
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(start);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$1(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = isArray$1(fallback) ? fallback : isPlainObject$1(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
    block = isString$1(defaults2) ? [defaults2] : defaults2;
    if (isArray$1(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(start, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
    const locale = block[i2];
    if (isString$1(locale)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray$1(blocks) || isPlainObject$1(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  getLocaleChain(ctx, fallback, locale);
}
function createCoreError(code) {
  return createCompileError(code, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$1(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$1(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [format, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString$1(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  if (!resolvedMessage && (!(isString$1(format) || isMessageFunction(format)) || !isString$1(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
  if (occurred) {
    return format;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  return ret;
}
function escapeParams(options) {
  if (isArray$1(options.list)) {
    options.list = options.list.map((item) => isString$1(item) ? escapeHtml(item) : item);
  } else if (isObject$2(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString$1(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn } = context;
  const locales = getLocaleChain(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    message = messages[targetLocale] || {};
    if ((format = resolveValue(message, key)) === null) {
      format = message[key];
    }
    if (isString$1(format) || isFunction$1(format))
      break;
    const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
    if (missingRet !== key) {
      format = missingRet;
    }
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format)) {
    const msg2 = format;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$1(arg1) && !isNumber$1(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(14);
  }
  const key = isNumber$1(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber$1(arg2)) {
    options.plural = arg2;
  } else if (isString$1(arg2)) {
    options.default = arg2;
  } else if (isPlainObject$1(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$1(arg2)) {
    options.list = arg2;
  }
  if (isNumber$1(arg3)) {
    options.plural = arg3;
  } else if (isString$1(arg3)) {
    options.default = arg3;
  } else if (isPlainObject$1(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source2, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source3) => generateFormatCacheKey(locale, key, source3)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules } = context;
  const resolveMessage = (key) => {
    const val = resolveValue(message, key);
    if (isString$1(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber$1(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = getLocaleChain(context, fallbackLocale, locale);
  if (!isString$1(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if (isPlainObject$1(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString$1(arg1)) {
    if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
      throw createCoreError(16);
    }
    value = new Date(arg1);
    try {
      value.toISOString();
    } catch (e2) {
      throw createCoreError(16);
    }
  } else if (isDate$1(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(15);
    }
    value = arg1;
  } else if (isNumber$1(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(14);
  }
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$1(options.locale) ? options.locale : context.locale;
  const locales = getLocaleChain(context, fallbackLocale, locale);
  if (!isString$1(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if (isPlainObject$1(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format) || !isString$1(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber$1(arg1)) {
    throw createCoreError(14);
  }
  const value = arg1;
  if (isString$1(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$1(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
/*!
  * vue-i18n v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION$1 = "9.1.10";
function createI18nError(code, ...args) {
  return createCompileError(code, null, void 0);
}
const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
const DatetimePartsSymbol = makeSymbol("__datetimeParts");
const NumberPartsSymbol = makeSymbol("__numberParts");
makeSymbol("__enableEmitter");
makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
const InejctWithOption = makeSymbol("__injectWithOption");
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n } = options;
  const ret = isPlainObject$1(messages) ? messages : isArray$1(__i18n) ? {} : { [locale]: {} };
  if (isArray$1(__i18n)) {
    __i18n.forEach(({ locale: locale2, resource }) => {
      if (locale2) {
        ret[locale2] = ret[locale2] || {};
        deepCopy(resource, ret[locale2]);
      } else {
        deepCopy(resource, ret);
      }
    });
  }
  if (options.flatJson) {
    for (const key in ret) {
      if (hasOwn$1(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$2(val) || isArray$1(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(20);
  }
  for (const key in src) {
    if (hasOwn$1(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function createComposer(options = {}) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(__root && _inheritLocale ? __root.locale.value : isString$1(options.locale) ? options.locale : "en-US");
  const _fallbackLocale = ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString$1(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject$1(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$1(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$1(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject$1(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    return createCoreContext({
      version: VERSION$1,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      datetimeFormats: _datetimeFormats.value,
      numberFormats: _numberFormats.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      __datetimeFormatters: isPlainObject$1(_context) ? _context.__datetimeFormatters : void 0,
      __numberFormatters: isPlainObject$1(_context) ? _context.__numberFormatters : void 0,
      __v_emitter: isPlainObject$1(_context) ? _context.__v_emitter : void 0,
      __meta: { framework: "vue" }
    });
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$1(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn2, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    {
      ret = fn2(_context);
    }
    if (isNumber$1(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(14);
    }
  }
  function t2(...args) {
    return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString$1(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$2(arg3)) {
      throw createI18nError(15);
    }
    return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d2(...args) {
    return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString$1(val));
  }
  function normalize2(values) {
    return values.map((val) => isString$1(val) ? createVNode(Text, null, val, 0) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize: normalize2,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = translate(_context2, ...args);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TransrateVNodeSymbol](...args), (key) => [createVNode(Text, null, key, 0)], (val) => isArray$1(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), () => [], (val) => isString$1(val) || isArray$1(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), () => [], (val) => isString$1(val) || isArray$1(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te2(key, locale2) {
    const targetLocale = isString$1(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return resolveValue(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = resolveValue(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function mergeDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  function mergeNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  composerID++;
  if (__root) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    datetimeFormats,
    numberFormats,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    rt,
    d: d2,
    n: n2,
    te: te2,
    tm,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [TransrateVNodeSymbol]: transrateVNode,
    [NumberPartsSymbol]: numberParts,
    [DatetimePartsSymbol]: datetimeParts,
    [SetPluralRulesSymbol]: setPluralRules,
    [InejctWithOption]: options.__injectWithOption
  };
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
const Translation = {
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber$1(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n2 = props.i18n || useI18n$1({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$1(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      return isString$1(props.tag) ? h$1(props.tag, assignedAttrs, children) : isObject$2(props.tag) ? h$1(props.tag, assignedAttrs, children) : h$1(Fragment, assignedAttrs, children);
    };
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    return slots.default ? slots.default() : [];
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$1(props.format)) {
      options.key = props.format;
    } else if (isObject$2(props.format)) {
      if (isString$1(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$1(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
      });
    } else if (isString$1(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    return isString$1(props.tag) ? h$1(props.tag, assignedAttrs, children) : isObject$2(props.tag) ? h$1(props.tag, assignedAttrs, children) : h$1(Fragment, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = {
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n$1({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n2[NumberPartsSymbol](...args));
  }
};
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = {
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n$1({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n2[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n2, instance) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n2.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const bind3 = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(22);
    }
    const composer = getComposer$2(i18n2, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = composer.t(...makeParams(parsedValue));
  };
  return {
    beforeMount: bind3,
    beforeUpdate: bind3
  };
}
function parseValue(value) {
  if (isString$1(value)) {
    return { path: value };
  } else if (isPlainObject$1(value)) {
    if (!("path" in value)) {
      throw createI18nError(19, "path");
    }
    return value;
  } else {
    throw createI18nError(20);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$1(locale)) {
    options.locale = locale;
  }
  if (isNumber$1(choice)) {
    options.plural = choice;
  }
  if (isNumber$1(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app2, i18n2, ...options) {
  const pluginOptions = isPlainObject$1(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app2.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app2.component(NumberFormat.name, NumberFormat);
    app2.component(DatetimeFormat.name, DatetimeFormat);
  }
  app2.directive("t", vTDirective(i18n2));
}
function createI18n(options = {}) {
  const __globalInjection = !!options.globalInjection;
  const __instances = /* @__PURE__ */ new Map();
  const __global = createComposer(options);
  const symbol = makeSymbol("");
  const i18n2 = {
    get mode() {
      return "composition";
    },
    async install(app2, ...options2) {
      app2.__VUE_I18N_SYMBOL__ = symbol;
      app2.provide(app2.__VUE_I18N_SYMBOL__, i18n2);
      if (__globalInjection) {
        injectGlobalFields(app2, i18n2.global);
      }
      {
        apply(app2, i18n2, ...options2);
      }
    },
    get global() {
      return __global;
    },
    __instances,
    __getInstance(component) {
      return __instances.get(component) || null;
    },
    __setInstance(component, instance) {
      __instances.set(component, instance);
    },
    __deleteInstance(component) {
      __instances.delete(component);
    }
  };
  return i18n2;
}
function useI18n$1(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(16);
  }
  if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(17);
  }
  const i18n2 = inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
  if (!i18n2) {
    throw createI18nError(22);
  }
  const global = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
  const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
  if (scope === "global") {
    let messages = isObject$2(options.messages) ? options.messages : {};
    if ("__i18nGlobal" in instance.type) {
      messages = getLocaleMessages(global.locale.value, {
        messages,
        __i18n: instance.type.__i18nGlobal
      });
    }
    const locales = Object.keys(messages);
    if (locales.length) {
      locales.forEach((locale) => {
        global.mergeLocaleMessage(locale, messages[locale]);
      });
    }
    if (isObject$2(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$2(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
    return global;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global;
    }
    return composer2;
  }
  if (i18n2.mode === "legacy") {
    throw createI18nError(18);
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const type = instance.type;
    const composerOptions = assign({}, options);
    if (type.__i18n) {
      composerOptions.__i18n = type.__i18n;
    }
    if (global) {
      composerOptions.__root = global;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    } else {
      const vueI18n = i18nInternal.__getInstance(current);
      if (vueI18n != null) {
        composer = vueI18n.__composer;
      }
      if (useComponent && composer && !composer[InejctWithOption]) {
        composer = null;
      }
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n2, target, composer) {
  onMounted(() => {
  }, target);
  onUnmounted(() => {
    i18n2.__deleteInstance(target);
  }, target);
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app2, composer) {
  const i18n2 = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(22);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap);
  });
  app2.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(22);
    }
    Object.defineProperty(app2.config.globalProperties, `$${method}`, desc);
  });
}
var TPNavBarTranslations_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$o = { class: "items" };
const _hoisted_2$j = { class: "title" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "TPNavBarTranslations",
  setup(__props) {
    const { theme } = useData();
    const { locale } = useI18n$1();
    const instance = getCurrentInstance().appContext.config.globalProperties.$storage;
    function translationChange(lang) {
      instance.locale = { locale: lang };
      locale.value = lang;
    }
    return (_ctx, _cache) => {
      return unref(theme).localeLinks ? (openBlock(), createBlock(TPFlyout, {
        key: 0,
        class: "TPNavBarTranslations",
        icon: TPIconLanguages
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$o, [
            createBaseVNode("p", _hoisted_2$j, toDisplayString$1(unref(theme).localeLinks.text), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme).localeLinks.items, (locale2) => {
              return openBlock(), createBlock(TPMenuLink, {
                key: locale2.link,
                item: locale2,
                isLang: true,
                onClick: ($event) => translationChange(locale2.link)
              }, null, 8, ["item", "onClick"]);
            }), 128))
          ])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var TPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-01ac2adc"]]);
const _sfc_main$p = {};
const _hoisted_1$n = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, null, -1);
const _hoisted_3$d = [
  _hoisted_2$i
];
function _sfc_render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_3$d);
}
var TPIconGitHub = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$d]]);
var TPSocialLink_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$m = ["href", "title"];
const _hoisted_2$h = { class: "visually-hidden" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "TPSocialLink",
  props: {
    icon: null,
    link: null
  },
  setup(__props) {
    const icons = {
      github: TPIconGitHub
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: "TPSocialLink",
        href: __props.link,
        title: __props.icon,
        target: "_blank",
        rel: "noopener noreferrer"
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icons[__props.icon]), { class: "icon" })),
        createBaseVNode("span", _hoisted_2$h, toDisplayString$1(__props.icon), 1)
      ], 8, _hoisted_1$m);
    };
  }
});
var TPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-726b0561"]]);
var TPSocialLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$l = { class: "TPSocialLinks" };
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TPSocialLinks",
  props: {
    links: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$l, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, ({ link, icon }) => {
          return openBlock(), createBlock(TPSocialLink, {
            key: link,
            icon,
            link
          }, null, 8, ["icon", "link"]);
        }), 128))
      ]);
    };
  }
});
var TPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-0d39b266"]]);
var TPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "TPNavBarSocialLinks",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return unref(theme).socialLinks ? (openBlock(), createBlock(TPSocialLinks, {
        key: 0,
        class: "TPNavBarSocialLinks",
        links: unref(theme).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var TPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-20895bda"]]);
var TPNavBarExtra_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$8 = (n2) => (pushScopeId("data-v-31ad266a"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$k = {
  key: 0,
  class: "group"
};
const _hoisted_2$g = { class: "trans-title" };
const _hoisted_3$c = {
  key: 1,
  class: "group"
};
const _hoisted_4$7 = { class: "item appearance" };
const _hoisted_5$7 = /* @__PURE__ */ _withScopeId$8(() => /* @__PURE__ */ createBaseVNode("p", { class: "label" }, "Appearance", -1));
const _hoisted_6$7 = { class: "appearance-action" };
const _hoisted_7$7 = {
  key: 2,
  class: "group"
};
const _hoisted_8$6 = { class: "item social-links" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "TPNavBarExtra",
  setup(__props) {
    const { locale } = useI18n$1();
    const instance = getCurrentInstance().appContext.config.globalProperties.$storage;
    function translationChange(lang) {
      instance.locale = { locale: lang };
      locale.value = lang;
    }
    const { site, theme } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TPFlyout, {
        class: "TPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(theme).localeLinks ? (openBlock(), createElementBlock("div", _hoisted_1$k, [
            createBaseVNode("p", _hoisted_2$g, toDisplayString$1(unref(theme).localeLinks.text), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme).localeLinks.items, (locale2) => {
              return openBlock(), createBlock(TPMenuLink, {
                key: locale2.link,
                item: locale2,
                isLang: true,
                onClick: ($event) => translationChange(locale2.link)
              }, null, 8, ["item", "onClick"]);
            }), 128))
          ])) : createCommentVNode("", true),
          unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_3$c, [
            createBaseVNode("div", _hoisted_4$7, [
              _hoisted_5$7,
              createBaseVNode("div", _hoisted_6$7, [
                createVNode(TPSwitchAppearance)
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(theme).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_7$7, [
            createBaseVNode("div", _hoisted_8$6, [
              createVNode(TPNavBarSocialLinks, {
                class: "social-links-list",
                links: unref(theme).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var TPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-31ad266a"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i2 = 0, arr2 = Array(arr.length); i2 < arr.length; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e2 = rawEvent || window.event;
  if (allowTouchMove(e2.target)) {
    return true;
  }
  if (e2.touches.length > 1)
    return true;
  if (e2.preventDefault)
    e2.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var setPositionFixed = function setPositionFixed2() {
  return window.requestAnimationFrame(function() {
    if (previousBodyPosition === void 0) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var _window = window, scrollY = _window.scrollY, scrollX = _window.scrollX, innerHeight = _window.innerHeight;
      document.body.style.position = "fixed";
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;
      setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};
var restorePositionSetting = function restorePositionSetting2() {
  if (previousBodyPosition !== void 0) {
    var y2 = -parseInt(document.body.style.top, 10);
    var x2 = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    window.scrollTo(x2, y2);
    previousBodyPosition = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  }
  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
var TPNavScreenAppearance_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$7 = (n2) => (pushScopeId("data-v-4366e6fc"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$j = {
  key: 0,
  class: "TPNavScreenAppearance"
};
const _hoisted_2$f = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("p", { class: "text" }, "Appearance", -1));
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "TPNavScreenAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
        _hoisted_2$f,
        createVNode(TPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
var TPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-4366e6fc"]]);
var TPNavScreenTranslations_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$i = { class: "list" };
const _hoisted_2$e = ["onClick"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TPNavScreenTranslations",
  setup(__props) {
    const { locale } = useI18n$1();
    const instance = getCurrentInstance().appContext.config.globalProperties.$storage;
    function translationChange(lang) {
      instance.locale = { locale: lang };
      locale.value = lang;
    }
    const { theme } = useData();
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return unref(theme).localeLinks ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["TPNavScreenTranslations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          createVNode(TPIconLanguages, { class: "icon lang" }),
          createTextVNode(" " + toDisplayString$1(unref(theme).localeLinks.text) + " ", 1),
          createVNode(TPIconChevronDown, { class: "icon chevron" })
        ]),
        createBaseVNode("ul", _hoisted_1$i, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme).localeLinks.items, (locale2) => {
            return openBlock(), createElementBlock("li", {
              key: locale2.link,
              class: "item"
            }, [
              createBaseVNode("a", {
                class: "link",
                onClick: ($event) => translationChange(locale2.link)
              }, toDisplayString$1(locale2.text), 9, _hoisted_2$e)
            ]);
          }), 128))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
var TPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-7783c424"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TPNavScreenSocialLinks",
  setup(__props) {
    const { theme } = useData();
    return (_ctx, _cache) => {
      return unref(theme).socialLinks ? (openBlock(), createBlock(TPSocialLinks, {
        key: 0,
        class: "TPNavScreenSocialLinks",
        links: unref(theme).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
var TPNavScreen_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$h = { class: "container" };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "TPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(screen.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: lockBodyScroll,
        onAfterLeave: unlockBodyScroll
      }, {
        default: withCtx(() => [
          __props.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "TPNavScreen",
            ref_key: "screen",
            ref: screen
          }, [
            createBaseVNode("div", _hoisted_1$h, [
              createVNode(TPNavScreenTranslations, { class: "translations" }),
              createVNode(TPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$i, { class: "social-links" })
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var TPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-d978e206"]]);
var TPNavBarHamburger_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$6 = (n2) => (pushScopeId("data-v-5da7a721"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$g = ["aria-expanded"];
const _hoisted_2$d = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("span", { class: "container" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "top" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "middle" }),
  /* @__PURE__ */ createBaseVNode("span", { class: "bottom" })
], -1));
const _hoisted_3$b = [
  _hoisted_2$d
];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["TPNavBarHamburger", { active: __props.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "TPNavScreen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, _hoisted_3$b, 10, _hoisted_1$g);
    };
  }
});
var TPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-5da7a721"]]);
var style = "";
/*! @docsearch/js 3.1.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function t(t2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var o2 = arguments[n2] != null ? arguments[n2] : {};
    n2 % 2 ? e(Object(o2), true).forEach(function(e2) {
      r(t2, e2, o2[e2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
      Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
    });
  }
  return t2;
}
function n(e2) {
  return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, n(e2);
}
function r(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function o() {
  return o = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, o.apply(this, arguments);
}
function c(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function i(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n2 == null)
      return;
    var r2, o2, c2 = [], i2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i2 || n2.return == null || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t2) || u(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function a(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return l(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || u(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function u(e2, t2) {
  if (e2) {
    if (typeof e2 == "string")
      return l(e2, t2);
    var n2 = Object.prototype.toString.call(e2).slice(8, -1);
    return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l(e2, t2) : void 0;
  }
}
function l(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
var s, f, p, m, d, h = {}, v = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function _(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function b(e2) {
  var t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}
function g(e2, t2, n2) {
  var r2, o2, c2, i2 = arguments, a2 = {};
  for (c2 in t2)
    c2 == "key" ? r2 = t2[c2] : c2 == "ref" ? o2 = t2[c2] : a2[c2] = t2[c2];
  if (arguments.length > 3)
    for (n2 = [n2], c2 = 3; c2 < arguments.length; c2++)
      n2.push(i2[c2]);
  if (n2 != null && (a2.children = n2), typeof e2 == "function" && e2.defaultProps != null)
    for (c2 in e2.defaultProps)
      a2[c2] === void 0 && (a2[c2] = e2.defaultProps[c2]);
  return O(e2, a2, r2, o2, null);
}
function O(e2, t2, n2, r2, o2) {
  var c2 = { type: e2, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++s.__v : o2 };
  return s.vnode != null && s.vnode(c2), c2;
}
function S(e2) {
  return e2.children;
}
function E(e2, t2) {
  this.props = e2, this.context = t2;
}
function w(e2, t2) {
  if (t2 == null)
    return e2.__ ? w(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
  for (var n2; t2 < e2.__k.length; t2++)
    if ((n2 = e2.__k[t2]) != null && n2.__e != null)
      return n2.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function j(e2) {
  var t2, n2;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
      if ((n2 = e2.__k[t2]) != null && n2.__e != null) {
        e2.__e = e2.__c.base = n2.__e;
        break;
      }
    return j(e2);
  }
}
function P(e2) {
  (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I);
}
function I() {
  for (var e2; I.__r = f.length; )
    e2 = f.sort(function(e3, t2) {
      return e3.__v.__b - t2.__v.__b;
    }), f = [], e2.some(function(e3) {
      var t2, n2, r2, o2, c2, i2;
      e3.__d && (c2 = (o2 = (t2 = e3).__v).__e, (i2 = t2.__P) && (n2 = [], (r2 = _({}, o2)).__v = o2.__v + 1, L(i2, o2, r2, t2.__n, i2.ownerSVGElement !== void 0, o2.__h != null ? [c2] : null, n2, c2 == null ? w(o2) : c2, o2.__h), q(n2, o2), o2.__e != c2 && j(o2)));
    });
}
function k(e2, t2, n2, r2, o2, c2, i2, a2, u2, l2) {
  var s2, f2, p2, m2, d2, y2, _2, b2 = r2 && r2.__k || v, g2 = b2.length;
  for (n2.__k = [], s2 = 0; s2 < t2.length; s2++)
    if ((m2 = n2.__k[s2] = (m2 = t2[s2]) == null || typeof m2 == "boolean" ? null : typeof m2 == "string" || typeof m2 == "number" ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2) != null) {
      if (m2.__ = n2, m2.__b = n2.__b + 1, (p2 = b2[s2]) === null || p2 && m2.key == p2.key && m2.type === p2.type)
        b2[s2] = void 0;
      else
        for (f2 = 0; f2 < g2; f2++) {
          if ((p2 = b2[f2]) && m2.key == p2.key && m2.type === p2.type) {
            b2[f2] = void 0;
            break;
          }
          p2 = null;
        }
      L(e2, m2, p2 = p2 || h, o2, c2, i2, a2, u2, l2), d2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (_2 || (_2 = []), p2.ref && _2.push(p2.ref, null, m2), _2.push(f2, m2.__c || d2, m2)), d2 != null ? (y2 == null && (y2 = d2), typeof m2.type == "function" && m2.__k != null && m2.__k === p2.__k ? m2.__d = u2 = D(m2, u2, e2) : u2 = A(e2, m2, p2, b2, d2, u2), l2 || n2.type !== "option" ? typeof n2.type == "function" && (n2.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = w(p2));
    }
  for (n2.__e = y2, s2 = g2; s2--; )
    b2[s2] != null && (typeof n2.type == "function" && b2[s2].__e != null && b2[s2].__e == n2.__d && (n2.__d = w(r2, s2 + 1)), U(b2[s2], b2[s2]));
  if (_2)
    for (s2 = 0; s2 < _2.length; s2++)
      H(_2[s2], _2[++s2], _2[++s2]);
}
function D(e2, t2, n2) {
  var r2, o2;
  for (r2 = 0; r2 < e2.__k.length; r2++)
    (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = typeof o2.type == "function" ? D(o2, t2, n2) : A(n2, o2, o2, e2.__k, o2.__e, t2));
  return t2;
}
function C(e2, t2) {
  return t2 = t2 || [], e2 == null || typeof e2 == "boolean" || (Array.isArray(e2) ? e2.some(function(e3) {
    C(e3, t2);
  }) : t2.push(e2)), t2;
}
function A(e2, t2, n2, r2, o2, c2) {
  var i2, a2, u2;
  if (t2.__d !== void 0)
    i2 = t2.__d, t2.__d = void 0;
  else if (n2 == null || o2 != c2 || o2.parentNode == null)
    e:
      if (c2 == null || c2.parentNode !== e2)
        e2.appendChild(o2), i2 = null;
      else {
        for (a2 = c2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
          if (a2 == o2)
            break e;
        e2.insertBefore(o2, c2), i2 = c2;
      }
  return i2 !== void 0 ? i2 : o2.nextSibling;
}
function x(e2, t2, n2) {
  t2[0] === "-" ? e2.setProperty(t2, n2) : e2[t2] = n2 == null ? "" : typeof n2 != "number" || y.test(t2) ? n2 : n2 + "px";
}
function N(e2, t2, n2, r2, o2) {
  var c2;
  e:
    if (t2 === "style")
      if (typeof n2 == "string")
        e2.style.cssText = n2;
      else {
        if (typeof r2 == "string" && (e2.style.cssText = r2 = ""), r2)
          for (t2 in r2)
            n2 && t2 in n2 || x(e2.style, t2, "");
        if (n2)
          for (t2 in n2)
            r2 && n2[t2] === r2[t2] || x(e2.style, t2, n2[t2]);
      }
    else if (t2[0] === "o" && t2[1] === "n")
      c2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + c2] = n2, n2 ? r2 || e2.addEventListener(t2, c2 ? T : R, c2) : e2.removeEventListener(t2, c2 ? T : R, c2);
    else if (t2 !== "dangerouslySetInnerHTML") {
      if (o2)
        t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "download" && t2 in e2)
        try {
          e2[t2] = n2 == null ? "" : n2;
          break e;
        } catch (e3) {
        }
      typeof n2 == "function" || (n2 != null && (n2 !== false || t2[0] === "a" && t2[1] === "r") ? e2.setAttribute(t2, n2) : e2.removeAttribute(t2));
    }
}
function R(e2) {
  this.l[e2.type + false](s.event ? s.event(e2) : e2);
}
function T(e2) {
  this.l[e2.type + true](s.event ? s.event(e2) : e2);
}
function L(e2, t2, n2, r2, o2, c2, i2, a2, u2) {
  var l2, f2, p2, m2, d2, h2, v2, y2, b2, g2, O2, w2 = t2.type;
  if (t2.constructor !== void 0)
    return null;
  n2.__h != null && (u2 = n2.__h, a2 = t2.__e = n2.__e, t2.__h = null, c2 = [a2]), (l2 = s.__b) && l2(t2);
  try {
    e:
      if (typeof w2 == "function") {
        if (y2 = t2.props, b2 = (l2 = w2.contextType) && r2[l2.__c], g2 = l2 ? b2 ? b2.props.value : l2.__ : r2, n2.__c ? v2 = (f2 = t2.__c = n2.__c).__ = f2.__E : ("prototype" in w2 && w2.prototype.render ? t2.__c = f2 = new w2(y2, g2) : (t2.__c = f2 = new E(y2, g2), f2.constructor = w2, f2.render = F), b2 && b2.sub(f2), f2.props = y2, f2.state || (f2.state = {}), f2.context = g2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), f2.__s == null && (f2.__s = f2.state), w2.getDerivedStateFromProps != null && (f2.__s == f2.state && (f2.__s = _({}, f2.__s)), _(f2.__s, w2.getDerivedStateFromProps(y2, f2.__s))), m2 = f2.props, d2 = f2.state, p2)
          w2.getDerivedStateFromProps == null && f2.componentWillMount != null && f2.componentWillMount(), f2.componentDidMount != null && f2.__h.push(f2.componentDidMount);
        else {
          if (w2.getDerivedStateFromProps == null && y2 !== m2 && f2.componentWillReceiveProps != null && f2.componentWillReceiveProps(y2, g2), !f2.__e && f2.shouldComponentUpdate != null && f2.shouldComponentUpdate(y2, f2.__s, g2) === false || t2.__v === n2.__v) {
            f2.props = y2, f2.state = f2.__s, t2.__v !== n2.__v && (f2.__d = false), f2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, f2.__h.length && i2.push(f2);
            break e;
          }
          f2.componentWillUpdate != null && f2.componentWillUpdate(y2, f2.__s, g2), f2.componentDidUpdate != null && f2.__h.push(function() {
            f2.componentDidUpdate(m2, d2, h2);
          });
        }
        f2.context = g2, f2.props = y2, f2.state = f2.__s, (l2 = s.__r) && l2(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, f2.getChildContext != null && (r2 = _(_({}, r2), f2.getChildContext())), p2 || f2.getSnapshotBeforeUpdate == null || (h2 = f2.getSnapshotBeforeUpdate(m2, d2)), O2 = l2 != null && l2.type === S && l2.key == null ? l2.props.children : l2, k(e2, Array.isArray(O2) ? O2 : [O2], t2, n2, r2, o2, c2, i2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && i2.push(f2), v2 && (f2.__E = f2.__ = null), f2.__e = false;
      } else
        c2 == null && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = M(n2.__e, t2, n2, r2, o2, c2, i2, u2);
    (l2 = s.diffed) && l2(t2);
  } catch (e3) {
    t2.__v = null, (u2 || c2 != null) && (t2.__e = a2, t2.__h = !!u2, c2[c2.indexOf(a2)] = null), s.__e(e3, t2, n2);
  }
}
function q(e2, t2) {
  s.__c && s.__c(t2, e2), e2.some(function(t3) {
    try {
      e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
        e3.call(t3);
      });
    } catch (e3) {
      s.__e(e3, t3.__v);
    }
  });
}
function M(e2, t2, n2, r2, o2, c2, i2, a2) {
  var u2, l2, s2, f2, p2 = n2.props, m2 = t2.props, d2 = t2.type, y2 = 0;
  if (d2 === "svg" && (o2 = true), c2 != null) {
    for (; y2 < c2.length; y2++)
      if ((u2 = c2[y2]) && (u2 === e2 || (d2 ? u2.localName == d2 : u2.nodeType == 3))) {
        e2 = u2, c2[y2] = null;
        break;
      }
  }
  if (e2 == null) {
    if (d2 === null)
      return document.createTextNode(m2);
    e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, m2.is && m2), c2 = null, a2 = false;
  }
  if (d2 === null)
    p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
  else {
    if (c2 = c2 && v.slice.call(e2.childNodes), l2 = (p2 = n2.props || h).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
      if (c2 != null)
        for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
          p2[e2.attributes[f2].name] = e2.attributes[f2].value;
      (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
    }
    if (function(e3, t3, n3, r3, o3) {
      var c3;
      for (c3 in n3)
        c3 === "children" || c3 === "key" || c3 in t3 || N(e3, c3, null, n3[c3], r3);
      for (c3 in t3)
        o3 && typeof t3[c3] != "function" || c3 === "children" || c3 === "key" || c3 === "value" || c3 === "checked" || n3[c3] === t3[c3] || N(e3, c3, t3[c3], n3[c3], r3);
    }(e2, m2, p2, o2, a2), s2)
      t2.__k = [];
    else if (y2 = t2.props.children, k(e2, Array.isArray(y2) ? y2 : [y2], t2, n2, r2, o2 && d2 !== "foreignObject", c2, i2, e2.firstChild, a2), c2 != null)
      for (y2 = c2.length; y2--; )
        c2[y2] != null && b(c2[y2]);
    a2 || ("value" in m2 && (y2 = m2.value) !== void 0 && (y2 !== e2.value || d2 === "progress" && !y2) && N(e2, "value", y2, p2.value, false), "checked" in m2 && (y2 = m2.checked) !== void 0 && y2 !== e2.checked && N(e2, "checked", y2, p2.checked, false));
  }
  return e2;
}
function H(e2, t2, n2) {
  try {
    typeof e2 == "function" ? e2(t2) : e2.current = t2;
  } catch (e3) {
    s.__e(e3, n2);
  }
}
function U(e2, t2, n2) {
  var r2, o2, c2;
  if (s.unmount && s.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || H(r2, null, t2)), n2 || typeof e2.type == "function" || (n2 = (o2 = e2.__e) != null), e2.__e = e2.__d = void 0, (r2 = e2.__c) != null) {
    if (r2.componentWillUnmount)
      try {
        r2.componentWillUnmount();
      } catch (e3) {
        s.__e(e3, t2);
      }
    r2.base = r2.__P = null;
  }
  if (r2 = e2.__k)
    for (c2 = 0; c2 < r2.length; c2++)
      r2[c2] && U(r2[c2], t2, n2);
  o2 != null && b(o2);
}
function F(e2, t2, n2) {
  return this.constructor(e2, n2);
}
function B(e2, t2, n2) {
  var r2, o2, c2;
  s.__ && s.__(e2, t2), o2 = (r2 = typeof n2 == "function") ? null : n2 && n2.__k || t2.__k, c2 = [], L(t2, e2 = (!r2 && n2 || t2).__k = g(S, null, [e2]), o2 || h, h, t2.ownerSVGElement !== void 0, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? v.slice.call(t2.childNodes) : null, c2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2), q(c2, e2);
}
function V(e2, t2) {
  B(e2, t2, V);
}
function z(e2, t2, n2) {
  var r2, o2, c2, i2 = arguments, a2 = _({}, e2.props);
  for (c2 in t2)
    c2 == "key" ? r2 = t2[c2] : c2 == "ref" ? o2 = t2[c2] : a2[c2] = t2[c2];
  if (arguments.length > 3)
    for (n2 = [n2], c2 = 3; c2 < arguments.length; c2++)
      n2.push(i2[c2]);
  return n2 != null && (a2.children = n2), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
}
s = { __e: function(e2, t2) {
  for (var n2, r2, o2; t2 = t2.__; )
    if ((n2 = t2.__c) && !n2.__)
      try {
        if ((r2 = n2.constructor) && r2.getDerivedStateFromError != null && (n2.setState(r2.getDerivedStateFromError(e2)), o2 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e2), o2 = n2.__d), o2)
          return n2.__E = n2;
      } catch (t3) {
        e2 = t3;
      }
  throw e2;
}, __v: 0 }, E.prototype.setState = function(e2, t2) {
  var n2;
  n2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), typeof e2 == "function" && (e2 = e2(_({}, n2), this.props)), e2 && _(n2, e2), e2 != null && this.__v && (t2 && this.__h.push(t2), P(this));
}, E.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
}, E.prototype.render = S, f = [], p = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, d = 0;
var W, K, J, $ = 0, Q = [], Y = s.__b, G = s.__r, Z = s.diffed, X = s.__c, ee = s.unmount;
function te(e2, t2) {
  s.__h && s.__h(K, e2, $ || t2), $ = 0;
  var n2 = K.__H || (K.__H = { __: [], __h: [] });
  return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
}
function ne(e2, t2, n2) {
  var r2 = te(W++, 2);
  return r2.t = e2, r2.__c || (r2.__ = [n2 ? n2(t2) : se(void 0, t2), function(e3) {
    var t3 = r2.t(r2.__[0], e3);
    r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = K), r2.__;
}
function re(e2, t2) {
  var n2 = te(W++, 4);
  !s.__s && le(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, K.__h.push(n2));
}
function oe(e2, t2) {
  var n2 = te(W++, 7);
  return le(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
}
function ce() {
  Q.forEach(function(e2) {
    if (e2.__P)
      try {
        e2.__H.__h.forEach(ae), e2.__H.__h.forEach(ue), e2.__H.__h = [];
      } catch (t2) {
        e2.__H.__h = [], s.__e(t2, e2.__v);
      }
  }), Q = [];
}
s.__b = function(e2) {
  K = null, Y && Y(e2);
}, s.__r = function(e2) {
  G && G(e2), W = 0;
  var t2 = (K = e2.__c).__H;
  t2 && (t2.__h.forEach(ae), t2.__h.forEach(ue), t2.__h = []);
}, s.diffed = function(e2) {
  Z && Z(e2);
  var t2 = e2.__c;
  t2 && t2.__H && t2.__H.__h.length && (Q.push(t2) !== 1 && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e3) {
    var t3, n2 = function() {
      clearTimeout(r2), ie && cancelAnimationFrame(t3), setTimeout(e3);
    }, r2 = setTimeout(n2, 100);
    ie && (t3 = requestAnimationFrame(n2));
  })(ce)), K = void 0;
}, s.__c = function(e2, t2) {
  t2.some(function(e3) {
    try {
      e3.__h.forEach(ae), e3.__h = e3.__h.filter(function(e4) {
        return !e4.__ || ue(e4);
      });
    } catch (n2) {
      t2.some(function(e4) {
        e4.__h && (e4.__h = []);
      }), t2 = [], s.__e(n2, e3.__v);
    }
  }), X && X(e2, t2);
}, s.unmount = function(e2) {
  ee && ee(e2);
  var t2 = e2.__c;
  if (t2 && t2.__H)
    try {
      t2.__H.__.forEach(ae);
    } catch (e3) {
      s.__e(e3, t2.__v);
    }
};
var ie = typeof requestAnimationFrame == "function";
function ae(e2) {
  var t2 = K;
  typeof e2.__c == "function" && e2.__c(), K = t2;
}
function ue(e2) {
  var t2 = K;
  e2.__c = e2.__(), K = t2;
}
function le(e2, t2) {
  return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
    return t3 !== e2[n2];
  });
}
function se(e2, t2) {
  return typeof t2 == "function" ? t2(e2) : t2;
}
function fe(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function pe(e2, t2) {
  for (var n2 in e2)
    if (n2 !== "__source" && !(n2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && e2[r2] !== t2[r2])
      return true;
  return false;
}
function me(e2) {
  this.props = e2;
}
(me.prototype = new E()).isPureReactComponent = true, me.prototype.shouldComponentUpdate = function(e2, t2) {
  return pe(this.props, e2) || pe(this.state, t2);
};
var de = s.__b;
s.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), de && de(e2);
};
var he = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var ve = function(e2, t2) {
  return e2 == null ? null : C(C(e2).map(t2));
}, ye = { map: ve, forEach: ve, count: function(e2) {
  return e2 ? C(e2).length : 0;
}, only: function(e2) {
  var t2 = C(e2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: C }, _e = s.__e;
function be() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ge(e2) {
  var t2 = e2.__.__c;
  return t2 && t2.__e && t2.__e(e2);
}
function Oe() {
  this.u = null, this.o = null;
}
s.__e = function(e2, t2, n2) {
  if (e2.then) {
    for (var r2, o2 = t2; o2 = o2.__; )
      if ((r2 = o2.__c) && r2.__c)
        return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), r2.__c(e2, t2);
  }
  _e(e2, t2, n2);
}, (be.prototype = new E()).__c = function(e2, t2) {
  var n2 = t2.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(n2);
  var o2 = ge(r2.__v), c2 = false, i2 = function() {
    c2 || (c2 = true, n2.componentWillUnmount = n2.__c, o2 ? o2(a2) : a2());
  };
  n2.__c = n2.componentWillUnmount, n2.componentWillUnmount = function() {
    i2(), n2.__c && n2.__c();
  };
  var a2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var e3 = r2.state.__e;
        r2.__v.__k[0] = function e4(t4, n3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return e4(t5, n3, r3);
          }), t4.__c && t4.__c.__P === n3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(e3, e3.__c.__P, e3.__c.__O);
      }
      var t3;
      for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, u2 = t2.__h === true;
  r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(i2, i2);
}, be.prototype.componentWillUnmount = function() {
  this.t = [];
}, be.prototype.render = function(e2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function e3(t3, n3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
          typeof e4.__c == "function" && e4.__c();
        }), t3.__c.__H = null), (t3 = fe({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = n3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return e3(t4, n3, r3);
        })), t3;
      }(this.__b, n2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var o2 = t2.__e && g(S, null, e2.fallback);
  return o2 && (o2.__h = null), [g(S, null, t2.__e ? null : e2.children), o2];
};
var Se = function(e2, t2, n2) {
  if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
    for (n2 = e2.u; n2; ) {
      for (; n2.length > 3; )
        n2.pop()();
      if (n2[1] < n2[0])
        break;
      e2.u = n2 = n2[2];
    }
};
function Ee(e2) {
  return this.getChildContext = function() {
    return e2.context;
  }, e2.children;
}
function we(e2) {
  var t2 = this, n2 = e2.i;
  t2.componentWillUnmount = function() {
    B(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(e3) {
    this.childNodes.push(e3), t2.i.appendChild(e3);
  }, insertBefore: function(e3, n3) {
    this.childNodes.push(e3), t2.i.appendChild(e3);
  }, removeChild: function(e3) {
    this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
  } }), B(g(Ee, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function je(e2, t2) {
  return g(we, { __v: e2, i: t2 });
}
(Oe.prototype = new E()).__e = function(e2) {
  var t2 = this, n2 = ge(t2.__v), r2 = t2.o.get(e2);
  return r2[0]++, function(o2) {
    var c2 = function() {
      t2.props.revealOrder ? (r2.push(o2), Se(t2, e2, r2)) : o2();
    };
    n2 ? n2(c2) : c2();
  };
}, Oe.prototype.render = function(e2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = C(e2.children);
  e2.revealOrder && e2.revealOrder[0] === "b" && t2.reverse();
  for (var n2 = t2.length; n2--; )
    this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e2.children;
}, Oe.prototype.componentDidUpdate = Oe.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t2, n2) {
    Se(e2, n2, t2);
  });
};
var Pe = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, Ie = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ke = function(e2) {
  return (typeof Symbol != "undefined" && n(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
};
function De(e2, t2, n2) {
  return t2.__k == null && (t2.textContent = ""), B(e2, t2), typeof n2 == "function" && n2(), e2 ? e2.__c : null;
}
E.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
  Object.defineProperty(E.prototype, e2, { configurable: true, get: function() {
    return this["UNSAFE_" + e2];
  }, set: function(t2) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
  } });
});
var Ce = s.event;
function Ae() {
}
function xe() {
  return this.cancelBubble;
}
function Ne() {
  return this.defaultPrevented;
}
s.event = function(e2) {
  return Ce && (e2 = Ce(e2)), e2.persist = Ae, e2.isPropagationStopped = xe, e2.isDefaultPrevented = Ne, e2.nativeEvent = e2;
};
var Re, Te = { configurable: true, get: function() {
  return this.class;
} }, Le = s.vnode;
s.vnode = function(e2) {
  var t2 = e2.type, n2 = e2.props, r2 = n2;
  if (typeof t2 == "string") {
    for (var o2 in r2 = {}, n2) {
      var c2 = n2[o2];
      o2 === "value" && "defaultValue" in n2 && c2 == null || (o2 === "defaultValue" && "value" in n2 && n2.value == null ? o2 = "value" : o2 === "download" && c2 === true ? c2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !ke(n2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : Ie.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : c2 === null && (c2 = void 0), r2[o2] = c2);
    }
    t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = C(n2.children).forEach(function(e3) {
      e3.props.selected = r2.value.indexOf(e3.props.value) != -1;
    })), t2 == "select" && r2.defaultValue != null && (r2.value = C(n2.children).forEach(function(e3) {
      e3.props.selected = r2.multiple ? r2.defaultValue.indexOf(e3.props.value) != -1 : r2.defaultValue == e3.props.value;
    })), e2.props = r2;
  }
  t2 && n2.class != n2.className && (Te.enumerable = "className" in n2, n2.className != null && (r2.class = n2.className), Object.defineProperty(r2, "className", Te)), e2.$$typeof = Pe, Le && Le(e2);
};
var qe = s.__r;
s.__r = function(e2) {
  qe && qe(e2), Re = e2.__c;
};
var Me = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
  return Re.__n[e2.__c].props.value;
} } } };
(typeof performance == "undefined" ? "undefined" : n(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function He(e2) {
  return !!e2 && e2.$$typeof === Pe;
}
var Ue = { useState: function(e2) {
  return $ = 1, ne(se, e2);
}, useReducer: ne, useEffect: function(e2, t2) {
  var n2 = te(W++, 3);
  !s.__s && le(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, K.__H.__h.push(n2));
}, useLayoutEffect: re, useRef: function(e2) {
  return $ = 5, oe(function() {
    return { current: e2 };
  }, []);
}, useImperativeHandle: function(e2, t2, n2) {
  $ = 6, re(function() {
    typeof e2 == "function" ? e2(t2()) : e2 && (e2.current = t2());
  }, n2 == null ? n2 : n2.concat(e2));
}, useMemo: oe, useCallback: function(e2, t2) {
  return $ = 8, oe(function() {
    return e2;
  }, t2);
}, useContext: function(e2) {
  var t2 = K.context[e2.__c], n2 = te(W++, 9);
  return n2.__c = e2, t2 ? (n2.__ == null && (n2.__ = true, t2.sub(K)), t2.props.value) : e2.__;
}, useDebugValue: function(e2, t2) {
  s.useDebugValue && s.useDebugValue(t2 ? t2(e2) : e2);
}, version: "16.8.0", Children: ye, render: De, hydrate: function(e2, t2, n2) {
  return V(e2, t2), typeof n2 == "function" && n2(), e2 ? e2.__c : null;
}, unmountComponentAtNode: function(e2) {
  return !!e2.__k && (B(null, e2), true);
}, createPortal: je, createElement: g, createContext: function(e2, t2) {
  var n2 = { __c: t2 = "__cC" + d++, __: e2, Consumer: function(e3, t3) {
    return e3.children(t3);
  }, Provider: function(e3) {
    var n3, r2;
    return this.getChildContext || (n3 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
      return r2;
    }, this.shouldComponentUpdate = function(e4) {
      this.props.value !== e4.value && n3.some(P);
    }, this.sub = function(e4) {
      n3.push(e4);
      var t3 = e4.componentWillUnmount;
      e4.componentWillUnmount = function() {
        n3.splice(n3.indexOf(e4), 1), t3 && t3.call(e4);
      };
    }), e3.children;
  } };
  return n2.Provider.__ = n2.Consumer.contextType = n2;
}, createFactory: function(e2) {
  return g.bind(null, e2);
}, cloneElement: function(e2) {
  return He(e2) ? z.apply(null, arguments) : e2;
}, createRef: function() {
  return { current: null };
}, Fragment: S, isValidElement: He, findDOMNode: function(e2) {
  return e2 && (e2.base || e2.nodeType === 1 && e2) || null;
}, Component: E, PureComponent: me, memo: function(e2, t2) {
  function n2(e3) {
    var n3 = this.props.ref, r3 = n3 == e3.ref;
    return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : pe(this.props, e3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = n2, g(e2, t3);
  }
  return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}, forwardRef: function(e2) {
  function t2(t3, r2) {
    var o2 = fe({}, t3);
    return delete o2.ref, e2(o2, (r2 = t3.ref || r2) && (n(r2) != "object" || "current" in r2) ? r2 : null);
  }
  return t2.$$typeof = he, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
}, unstable_batchedUpdates: function(e2, t2) {
  return e2(t2);
}, StrictMode: S, Suspense: be, SuspenseList: Oe, lazy: function(e2) {
  var t2, n2, r2;
  function o2(o3) {
    if (t2 || (t2 = e2()).then(function(e3) {
      n2 = e3.default || e3;
    }, function(e3) {
      r2 = e3;
    }), r2)
      throw r2;
    if (!n2)
      throw t2;
    return g(n2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Me };
function Fe() {
  return Ue.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Ue.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function Be() {
  return Ue.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
var Ve = ["translations"];
function ze() {
  return ze = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, ze.apply(this, arguments);
}
function We(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var Ke = Ue.forwardRef(function(e2, t2) {
  var n2 = e2.translations, r2 = n2 === void 0 ? {} : n2, o2 = We(e2, Ve), c2 = r2.buttonText, i2 = c2 === void 0 ? "Search" : c2, a2 = r2.buttonAriaLabel, u2 = a2 === void 0 ? "Search" : a2, l2 = oe(function() {
    return typeof navigator != "undefined" ? /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl" : null;
  }, []);
  return Ue.createElement("button", ze({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Ue.createElement("span", { className: "DocSearch-Button-Container" }, Ue.createElement(Be, null), Ue.createElement("span", { className: "DocSearch-Button-Placeholder" }, i2)), Ue.createElement("span", { className: "DocSearch-Button-Keys" }, l2 !== null && Ue.createElement(Ue.Fragment, null, Ue.createElement("kbd", { className: "DocSearch-Button-Key" }, l2 === "Ctrl" ? Ue.createElement(Fe, null) : l2), Ue.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
});
function Ge(e2) {
  return e2.reduce(function(e3, t2) {
    return e3.concat(t2);
  }, []);
}
var Ze = 0;
function Xe(e2) {
  return e2.collections.length === 0 ? 0 : e2.collections.reduce(function(e3, t2) {
    return e3 + t2.items.length;
  }, 0);
}
function et(e2, t2) {
}
var tt = function() {
}, nt = [{ segment: "autocomplete-core", version: "1.6.3" }];
function ct(e2, t2) {
  var n2 = t2;
  return { then: function(t3, r2) {
    return ct(e2.then(at(t3, n2, e2), at(r2, n2, e2)), n2);
  }, catch: function(t3) {
    return ct(e2.catch(at(t3, n2, e2)), n2);
  }, finally: function(t3) {
    return t3 && n2.onCancelList.push(t3), ct(e2.finally(at(t3 && function() {
      return n2.onCancelList = [], t3();
    }, n2, e2)), n2);
  }, cancel: function() {
    n2.isCanceled = true;
    var e3 = n2.onCancelList;
    n2.onCancelList = [], e3.forEach(function(e4) {
      e4();
    });
  }, isCanceled: function() {
    return n2.isCanceled === true;
  } };
}
function it(e2) {
  return ct(e2, { isCanceled: false, onCancelList: [] });
}
function at(e2, t2, n2) {
  return e2 ? function(n3) {
    return t2.isCanceled ? n3 : e2(n3);
  } : n2;
}
function ut(e2, t2, n2, r2) {
  if (!n2)
    return null;
  if (e2 < 0 && (t2 === null || r2 !== null && t2 === 0))
    return n2 + e2;
  var o2 = (t2 === null ? -1 : t2) + e2;
  return o2 <= -1 || o2 >= n2 ? r2 === null ? null : 0 : o2;
}
function lt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function st(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function pt(e2, t2) {
  var n2 = [];
  return Promise.resolve(e2(t2)).then(function(e3) {
    return Promise.all(e3.filter(function(e4) {
      return Boolean(e4);
    }).map(function(e4) {
      if (et(typeof e4.sourceId == "string"), n2.includes(e4.sourceId))
        throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e4.sourceId), " is not unique."));
      n2.push(e4.sourceId);
      var t3 = function(e5) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var n3 = arguments[t4] != null ? arguments[t4] : {};
          t4 % 2 ? lt(Object(n3), true).forEach(function(t5) {
            st(e5, t5, n3[t5]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n3)) : lt(Object(n3)).forEach(function(t5) {
            Object.defineProperty(e5, t5, Object.getOwnPropertyDescriptor(n3, t5));
          });
        }
        return e5;
      }({ getItemInputValue: function(e5) {
        return e5.state.query;
      }, getItemUrl: function() {
      }, onSelect: function(e5) {
        (0, e5.setIsOpen)(false);
      }, onActive: tt }, e4);
      return Promise.resolve(t3);
    }));
  });
}
function mt(e2) {
  var t2 = function(e3) {
    var t3 = e3.collections.map(function(e4) {
      return e4.items.length;
    }).reduce(function(e4, t4, n3) {
      var r3 = (e4[n3 - 1] || 0) + t4;
      return e4.push(r3), e4;
    }, []).reduce(function(t4, n3) {
      return n3 <= e3.activeItemId ? t4 + 1 : t4;
    }, 0);
    return e3.collections[t3];
  }(e2);
  if (!t2)
    return null;
  var n2 = t2.items[function(e3) {
    for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, c2 = 0; r3 === false; ) {
      var i2 = t3.collections[o2];
      if (i2 === n3) {
        r3 = true;
        break;
      }
      c2 += i2.items.length, o2++;
    }
    return t3.activeItemId - c2;
  }({ state: e2, collection: t2 })], r2 = t2.source;
  return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
}
var dt = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function ht(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function vt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? ht(Object(n2), true).forEach(function(t3) {
      yt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ht(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function yt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function _t(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function bt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function gt(e2, t2, n2) {
  var r2, o2 = t2.initialState;
  return { getState: function() {
    return o2;
  }, dispatch: function(r3, c2) {
    var i2 = function(e3) {
      for (var t3 = 1; t3 < arguments.length; t3++) {
        var n3 = arguments[t3] != null ? arguments[t3] : {};
        t3 % 2 ? _t(Object(n3), true).forEach(function(t4) {
          bt(e3, t4, n3[t4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : _t(Object(n3)).forEach(function(t4) {
          Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
        });
      }
      return e3;
    }({}, o2);
    o2 = e2(o2, { type: r3, props: t2, payload: c2 }), n2({ state: o2, prevState: i2 });
  }, pendingRequests: (r2 = [], { add: function(e3) {
    return r2.push(e3), e3.finally(function() {
      r2 = r2.filter(function(t3) {
        return t3 !== e3;
      });
    });
  }, cancelAll: function() {
    r2.forEach(function(e3) {
      return e3.cancel();
    });
  }, isEmpty: function() {
    return r2.length === 0;
  } }) };
}
function Ot(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function St(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Ot(Object(n2), true).forEach(function(t3) {
      Et(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ot(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Et(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function wt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return jt(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return jt(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return jt(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function jt(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Pt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function It(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Pt(Object(n2), true).forEach(function(t3) {
      kt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Pt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function kt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Dt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ct(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Dt(Object(n2), true).forEach(function(t3) {
      At(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Dt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function At(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Nt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return Rt(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return Rt(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return Rt(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Rt(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Tt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Lt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Tt(Object(n2), true).forEach(function(t3) {
      qt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Tt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function qt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Mt(e2) {
  return Boolean(e2.execute);
}
function Ht(e2, t2) {
  return n2 = e2, Boolean(n2 == null ? void 0 : n2.execute) ? Lt(Lt({}, e2), {}, { requests: e2.queries.map(function(n3) {
    return { query: n3, sourceId: t2, transformResponse: e2.transformResponse };
  }) }) : { items: e2, sourceId: t2 };
  var n2;
}
function Ut(e2) {
  var t2 = e2.reduce(function(e3, t3) {
    if (!Mt(t3))
      return e3.push(t3), e3;
    var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, c2 = t3.requests, i2 = e3.find(function(e4) {
      return Mt(t3) && Mt(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
    });
    if (i2) {
      var a2;
      (a2 = i2.items).push.apply(a2, Nt(c2));
    } else {
      var u2 = { execute: r2, requesterId: o2, items: c2, searchClient: n2 };
      e3.push(u2);
    }
    return e3;
  }, []).map(function(e3) {
    if (!Mt(e3))
      return Promise.resolve(e3);
    var t3 = e3, n2 = t3.execute, r2 = t3.items;
    return n2({ searchClient: t3.searchClient, requests: r2 });
  });
  return Promise.all(t2).then(function(e3) {
    return Ge(e3);
  });
}
function Ft(e2, t2) {
  return t2.map(function(t3) {
    var n2 = e2.filter(function(e3) {
      return e3.sourceId === t3.sourceId;
    }), r2 = n2.map(function(e3) {
      return e3.items;
    }), o2 = n2[0].transformResponse, c2 = o2 ? o2(function(e3) {
      var t4 = e3.map(function(e4) {
        var t5;
        return vt(vt({}, e4), {}, { hits: (t5 = e4.hits) === null || t5 === void 0 ? void 0 : t5.map(function(t6) {
          return vt(vt({}, t6), {}, { __autocomplete_indexName: e4.index, __autocomplete_queryID: e4.queryID });
        }) });
      });
      return { results: t4, hits: t4.map(function(e4) {
        return e4.hits;
      }).filter(Boolean), facetHits: t4.map(function(e4) {
        var t5;
        return (t5 = e4.facetHits) === null || t5 === void 0 ? void 0 : t5.map(function(e5) {
          return { label: e5.value, count: e5.count, _highlightResult: { label: { value: e5.highlighted } } };
        });
      }).filter(Boolean) };
    }(r2)) : r2;
    return et(c2.every(Boolean), 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), { source: t3, items: c2 };
  });
}
var Bt = ["event", "nextState", "props", "query", "refresh", "store"];
function Vt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function zt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Vt(Object(n2), true).forEach(function(t3) {
      Wt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Vt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Wt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Kt(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var Jt, $t, Qt, Yt = null, Gt = (Jt = -1, $t = -1, Qt = void 0, function(e2) {
  var t2 = ++Jt;
  return Promise.resolve(e2).then(function(e3) {
    return Qt && t2 < $t ? Qt : ($t = t2, Qt = e3, e3);
  });
});
function Zt(e2) {
  var t2 = e2.event, n2 = e2.nextState, r2 = n2 === void 0 ? {} : n2, o2 = e2.props, c2 = e2.query, i2 = e2.refresh, a2 = e2.store, u2 = Kt(e2, Bt);
  Yt && o2.environment.clearTimeout(Yt);
  var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
  if (f2(c2), p2(o2.defaultActiveItemId), !c2 && o2.openOnFocus === false) {
    var d2, h2 = a2.getState().collections.map(function(e3) {
      return zt(zt({}, e3), {}, { items: [] });
    });
    m2("idle"), l2(h2), s2((d2 = r2.isOpen) !== null && d2 !== void 0 ? d2 : o2.shouldPanelOpen({ state: a2.getState() }));
    var v2 = it(Gt(h2).then(function() {
      return Promise.resolve();
    }));
    return a2.pendingRequests.add(v2);
  }
  m2("loading"), Yt = o2.environment.setTimeout(function() {
    m2("stalled");
  }, o2.stallThreshold);
  var y2 = it(Gt(o2.getSources(zt({ query: c2, refresh: i2, state: a2.getState() }, u2)).then(function(e3) {
    return Promise.all(e3.map(function(e4) {
      return Promise.resolve(e4.getItems(zt({ query: c2, refresh: i2, state: a2.getState() }, u2))).then(function(t3) {
        return Ht(t3, e4.sourceId);
      });
    })).then(Ut).then(function(t3) {
      return Ft(t3, e3);
    }).then(function(e4) {
      return function(e5) {
        var t3 = e5.collections, n3 = e5.props, r3 = e5.state, o3 = t3.reduce(function(e6, t4) {
          return Ct(Ct({}, e6), {}, At({}, t4.source.sourceId, Ct(Ct({}, t4.source), {}, { getItems: function() {
            return Ge(t4.items);
          } })));
        }, {});
        return Ge(n3.reshape({ sources: Object.values(o3), sourcesBySourceId: o3, state: r3 })).filter(Boolean).map(function(e6) {
          return { source: e6, items: e6.getItems() };
        });
      }({ collections: e4, props: o2, state: a2.getState() });
    });
  }))).then(function(e3) {
    var n3;
    m2("idle"), l2(e3);
    var f3 = o2.shouldPanelOpen({ state: a2.getState() });
    s2((n3 = r2.isOpen) !== null && n3 !== void 0 ? n3 : o2.openOnFocus && !c2 && f3 || f3);
    var p3 = mt(a2.getState());
    if (a2.getState().activeItemId !== null && p3) {
      var d3 = p3.item, h3 = p3.itemInputValue, v3 = p3.itemUrl, y3 = p3.source;
      y3.onActive(zt({ event: t2, item: d3, itemInputValue: h3, itemUrl: v3, refresh: i2, source: y3, state: a2.getState() }, u2));
    }
  }).finally(function() {
    m2("idle"), Yt && o2.environment.clearTimeout(Yt);
  });
  return a2.pendingRequests.add(y2);
}
var Xt = ["event", "props", "refresh", "store"];
function en$1(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function tn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? en$1(Object(n2), true).forEach(function(t3) {
      nn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : en$1(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function nn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function rn(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var on = ["props", "refresh", "store"], cn = ["inputElement", "formElement", "panelElement"], an = ["inputElement"], un = ["inputElement", "maxLength"], ln = ["item", "source"];
function sn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function fn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? sn(Object(n2), true).forEach(function(t3) {
      pn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : sn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function pn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function mn(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function dn(e2) {
  var t2 = e2.props, n2 = e2.refresh, r2 = e2.store, o2 = mn(e2, on);
  return { getEnvironmentProps: function(e3) {
    var n3 = e3.inputElement, o3 = e3.formElement, c2 = e3.panelElement;
    return fn({ onTouchStart: function(e4) {
      !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e4.target === n3 || [o3, c2].some(function(t3) {
        return n4 = t3, r3 = e4.target, n4 === r3 || n4.contains(r3);
        var n4, r3;
      }) === false && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
    }, onTouchMove: function(e4) {
      r2.getState().isOpen !== false && n3 === t2.environment.document.activeElement && e4.target !== n3 && n3.blur();
    } }, mn(e3, cn));
  }, getRootProps: function(e3) {
    return fn({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label") }, e3);
  }, getFormProps: function(e3) {
    e3.inputElement;
    return fn({ action: "", noValidate: true, role: "search", onSubmit: function(c2) {
      var i2;
      c2.preventDefault(), t2.onSubmit(fn({ event: c2, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("submit", null), (i2 = e3.inputElement) === null || i2 === void 0 || i2.blur();
    }, onReset: function(c2) {
      var i2;
      c2.preventDefault(), t2.onReset(fn({ event: c2, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("reset", null), (i2 = e3.inputElement) === null || i2 === void 0 || i2.focus();
    } }, mn(e3, an));
  }, getLabelProps: function(e3) {
    return fn({ htmlFor: "".concat(t2.id, "-input"), id: "".concat(t2.id, "-label") }, e3);
  }, getInputProps: function(e3) {
    var c2;
    function i2(e4) {
      (t2.openOnFocus || Boolean(r2.getState().query)) && Zt(fn({ event: e4, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, o2)), r2.dispatch("focus", null);
    }
    var a2 = "ontouchstart" in t2.environment, u2 = e3 || {}, l2 = (u2.inputElement, u2.maxLength), s2 = l2 === void 0 ? 512 : l2, f2 = mn(u2, un), p2 = mt(r2.getState()), m2 = function(e4) {
      return Boolean(e4 && e4.match(dt));
    }((c2 = t2.environment.navigator) === null || c2 === void 0 ? void 0 : c2.userAgent), d2 = p2 != null && p2.itemUrl && !m2 ? "go" : "search";
    return fn({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && r2.getState().activeItemId !== null ? "".concat(t2.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t2.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: d2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: s2, type: "search", onChange: function(e4) {
      Zt(fn({ event: e4, props: t2, query: e4.currentTarget.value.slice(0, s2), refresh: n2, store: r2 }, o2));
    }, onKeyDown: function(e4) {
      !function(e5) {
        var t3 = e5.event, n3 = e5.props, r3 = e5.refresh, o3 = e5.store, c3 = rn(e5, Xt);
        if (t3.key === "ArrowUp" || t3.key === "ArrowDown") {
          var i3 = function() {
            var e6 = n3.environment.document.getElementById("".concat(n3.id, "-item-").concat(o3.getState().activeItemId));
            e6 && (e6.scrollIntoViewIfNeeded ? e6.scrollIntoViewIfNeeded(false) : e6.scrollIntoView(false));
          }, a3 = function() {
            var e6 = mt(o3.getState());
            if (o3.getState().activeItemId !== null && e6) {
              var n4 = e6.item, i4 = e6.itemInputValue, a4 = e6.itemUrl, u4 = e6.source;
              u4.onActive(tn({ event: t3, item: n4, itemInputValue: i4, itemUrl: a4, refresh: r3, source: u4, state: o3.getState() }, c3));
            }
          };
          t3.preventDefault(), o3.getState().isOpen === false && (n3.openOnFocus || Boolean(o3.getState().query)) ? Zt(tn({ event: t3, props: n3, query: o3.getState().query, refresh: r3, store: o3 }, c3)).then(function() {
            o3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), a3(), setTimeout(i3, 0);
          }) : (o3.dispatch(t3.key, {}), a3(), i3());
        } else if (t3.key === "Escape")
          t3.preventDefault(), o3.dispatch(t3.key, null), o3.pendingRequests.cancelAll();
        else if (t3.key === "Enter") {
          if (o3.getState().activeItemId === null || o3.getState().collections.every(function(e6) {
            return e6.items.length === 0;
          }))
            return;
          t3.preventDefault();
          var u3 = mt(o3.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
          if (t3.metaKey || t3.ctrlKey)
            f3 !== void 0 && (p3.onSelect(tn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3)), n3.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o3.getState() }));
          else if (t3.shiftKey)
            f3 !== void 0 && (p3.onSelect(tn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3)), n3.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o3.getState() }));
          else if (t3.altKey)
            ;
          else {
            if (f3 !== void 0)
              return p3.onSelect(tn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3)), void n3.navigator.navigate({ itemUrl: f3, item: l3, state: o3.getState() });
            Zt(tn({ event: t3, nextState: { isOpen: false }, props: n3, query: s3, refresh: r3, store: o3 }, c3)).then(function() {
              p3.onSelect(tn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, c3));
            });
          }
        }
      }(fn({ event: e4, props: t2, refresh: n2, store: r2 }, o2));
    }, onFocus: i2, onBlur: function() {
      a2 || (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
    }, onClick: function(n3) {
      e3.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || i2(n3);
    } }, f2);
  }, getPanelProps: function(e3) {
    return fn({ onMouseDown: function(e4) {
      e4.preventDefault();
    }, onMouseLeave: function() {
      r2.dispatch("mouseleave", null);
    } }, e3);
  }, getListProps: function(e3) {
    return fn({ role: "listbox", "aria-labelledby": "".concat(t2.id, "-label"), id: "".concat(t2.id, "-list") }, e3);
  }, getItemProps: function(e3) {
    var c2 = e3.item, i2 = e3.source, a2 = mn(e3, ln);
    return fn({ id: "".concat(t2.id, "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
      if (c2.__autocomplete_id !== r2.getState().activeItemId) {
        r2.dispatch("mousemove", c2.__autocomplete_id);
        var t3 = mt(r2.getState());
        if (r2.getState().activeItemId !== null && t3) {
          var i3 = t3.item, a3 = t3.itemInputValue, u2 = t3.itemUrl, l2 = t3.source;
          l2.onActive(fn({ event: e4, item: i3, itemInputValue: a3, itemUrl: u2, refresh: n2, source: l2, state: r2.getState() }, o2));
        }
      }
    }, onMouseDown: function(e4) {
      e4.preventDefault();
    }, onClick: function(e4) {
      var a3 = i2.getItemInputValue({ item: c2, state: r2.getState() }), u2 = i2.getItemUrl({ item: c2, state: r2.getState() });
      (u2 ? Promise.resolve() : Zt(fn({ event: e4, nextState: { isOpen: false }, props: t2, query: a3, refresh: n2, store: r2 }, o2))).then(function() {
        i2.onSelect(fn({ event: e4, item: c2, itemInputValue: a3, itemUrl: u2, refresh: n2, source: i2, state: r2.getState() }, o2));
      });
    } }, a2);
  } };
}
function hn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function vn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? hn(Object(n2), true).forEach(function(t3) {
      yn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : hn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function yn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function _n(e2) {
  var t2, n2, r2, o2, c2 = e2.plugins, i2 = e2.options, a2 = (t2 = (((n2 = i2.__autocomplete_metadata) === null || n2 === void 0 ? void 0 : n2.userAgents) || [])[0]) === null || t2 === void 0 ? void 0 : t2.segment, u2 = a2 ? yn({}, a2, Object.keys(((r2 = i2.__autocomplete_metadata) === null || r2 === void 0 ? void 0 : r2.options) || {})) : {};
  return { plugins: c2.map(function(e3) {
    return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
  }), options: vn({ "autocomplete-core": Object.keys(i2) }, u2), ua: nt.concat(((o2 = i2.__autocomplete_metadata) === null || o2 === void 0 ? void 0 : o2.userAgents) || []) };
}
function bn(e2) {
  var t2, n2 = e2.state;
  return n2.isOpen === false || n2.activeItemId === null ? null : ((t2 = mt(n2)) === null || t2 === void 0 ? void 0 : t2.itemInputValue) || null;
}
function gn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function On(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? gn(Object(n2), true).forEach(function(t3) {
      Sn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : gn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Sn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var En = function(e2, t2) {
  switch (t2.type) {
    case "setActiveItemId":
    case "mousemove":
      return On(On({}, e2), {}, { activeItemId: t2.payload });
    case "setQuery":
      return On(On({}, e2), {}, { query: t2.payload, completion: null });
    case "setCollections":
      return On(On({}, e2), {}, { collections: t2.payload });
    case "setIsOpen":
      return On(On({}, e2), {}, { isOpen: t2.payload });
    case "setStatus":
      return On(On({}, e2), {}, { status: t2.payload });
    case "setContext":
      return On(On({}, e2), {}, { context: On(On({}, e2.context), t2.payload) });
    case "ArrowDown":
      var n2 = On(On({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : ut(1, e2.activeItemId, Xe(e2), t2.props.defaultActiveItemId) });
      return On(On({}, n2), {}, { completion: bn({ state: n2 }) });
    case "ArrowUp":
      var r2 = On(On({}, e2), {}, { activeItemId: ut(-1, e2.activeItemId, Xe(e2), t2.props.defaultActiveItemId) });
      return On(On({}, r2), {}, { completion: bn({ state: r2 }) });
    case "Escape":
      return e2.isOpen ? On(On({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : On(On({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return On(On({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
    case "reset":
      return On(On({}, e2), {}, { activeItemId: t2.props.openOnFocus === true ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return On(On({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
    case "blur":
      return t2.props.debug ? e2 : On(On({}, e2), {}, { isOpen: false, activeItemId: null });
    case "mouseleave":
      return On(On({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
    default:
      return et(false, "The reducer action ".concat(JSON.stringify(t2.type), " is not supported.")), e2;
  }
};
function wn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function jn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? wn(Object(n2), true).forEach(function(t3) {
      Pn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : wn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Pn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function In(e2) {
  var t2 = [], n2 = function(e3, t3) {
    var n3, r3 = typeof window != "undefined" ? window : {}, o3 = e3.plugins || [];
    return It(It({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, environment: r3, shouldPanelOpen: function(e4) {
      return Xe(e4.state) > 0;
    }, reshape: function(e4) {
      return e4.sources;
    } }, e3), {}, { id: (n3 = e3.id) !== null && n3 !== void 0 ? n3 : "autocomplete-".concat(Ze++), plugins: o3, initialState: It({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
      var n4;
      (n4 = e3.onStateChange) === null || n4 === void 0 || n4.call(e3, t4), o3.forEach(function(e4) {
        var n5;
        return (n5 = e4.onStateChange) === null || n5 === void 0 ? void 0 : n5.call(e4, t4);
      });
    }, onSubmit: function(t4) {
      var n4;
      (n4 = e3.onSubmit) === null || n4 === void 0 || n4.call(e3, t4), o3.forEach(function(e4) {
        var n5;
        return (n5 = e4.onSubmit) === null || n5 === void 0 ? void 0 : n5.call(e4, t4);
      });
    }, onReset: function(t4) {
      var n4;
      (n4 = e3.onReset) === null || n4 === void 0 || n4.call(e3, t4), o3.forEach(function(e4) {
        var n5;
        return (n5 = e4.onReset) === null || n5 === void 0 ? void 0 : n5.call(e4, t4);
      });
    }, getSources: function(n4) {
      return Promise.all([].concat(wt(o3.map(function(e4) {
        return e4.getSources;
      })), [e3.getSources]).filter(Boolean).map(function(e4) {
        return pt(e4, n4);
      })).then(function(e4) {
        return Ge(e4);
      }).then(function(e4) {
        return e4.map(function(e5) {
          return It(It({}, e5), {}, { onSelect: function(n5) {
            e5.onSelect(n5), t3.forEach(function(e6) {
              var t4;
              return (t4 = e6.onSelect) === null || t4 === void 0 ? void 0 : t4.call(e6, n5);
            });
          }, onActive: function(n5) {
            e5.onActive(n5), t3.forEach(function(e6) {
              var t4;
              return (t4 = e6.onActive) === null || t4 === void 0 ? void 0 : t4.call(e6, n5);
            });
          } });
        });
      });
    }, navigator: It({ navigate: function(e4) {
      var t4 = e4.itemUrl;
      r3.location.assign(t4);
    }, navigateNewTab: function(e4) {
      var t4 = e4.itemUrl, n4 = r3.open(t4, "_blank", "noopener");
      n4 == null || n4.focus();
    }, navigateNewWindow: function(e4) {
      var t4 = e4.itemUrl;
      r3.open(t4, "_blank", "noopener");
    } }, e3.navigator) });
  }(e2, t2), r2 = gt(En, n2, function(e3) {
    var t3 = e3.prevState, r3 = e3.state;
    n2.onStateChange(jn({ prevState: t3, state: r3, refresh: i2 }, o2));
  }), o2 = function(e3) {
    var t3 = e3.store;
    return { setActiveItemId: function(e4) {
      t3.dispatch("setActiveItemId", e4);
    }, setQuery: function(e4) {
      t3.dispatch("setQuery", e4);
    }, setCollections: function(e4) {
      var n3 = 0, r3 = e4.map(function(e5) {
        return St(St({}, e5), {}, { items: Ge(e5.items).map(function(e6) {
          return St(St({}, e6), {}, { __autocomplete_id: n3++ });
        }) });
      });
      t3.dispatch("setCollections", r3);
    }, setIsOpen: function(e4) {
      t3.dispatch("setIsOpen", e4);
    }, setStatus: function(e4) {
      t3.dispatch("setStatus", e4);
    }, setContext: function(e4) {
      t3.dispatch("setContext", e4);
    } };
  }({ store: r2 }), c2 = dn(jn({ props: n2, refresh: i2, store: r2 }, o2));
  function i2() {
    return Zt(jn({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, query: r2.getState().query, refresh: i2, store: r2 }, o2));
  }
  return n2.plugins.forEach(function(e3) {
    var n3;
    return (n3 = e3.subscribe) === null || n3 === void 0 ? void 0 : n3.call(e3, jn(jn({}, o2), {}, { refresh: i2, onSelect: function(e4) {
      t2.push({ onSelect: e4 });
    }, onActive: function(e4) {
      t2.push({ onActive: e4 });
    } }));
  }), function(e3) {
    var t3, n3 = e3.metadata, r3 = e3.environment;
    if ((t3 = r3.navigator) === null || t3 === void 0 ? void 0 : t3.userAgent.includes("Algolia Crawler")) {
      var o3 = r3.document.createElement("meta"), c3 = r3.document.querySelector("head");
      o3.name = "algolia:metadata", setTimeout(function() {
        o3.content = JSON.stringify(n3), c3.appendChild(o3);
      }, 0);
    }
  }({ metadata: _n({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), jn(jn({ refresh: i2 }, c2), o2);
}
function kn(e2) {
  var t2 = e2.translations, n2 = (t2 === void 0 ? {} : t2).searchByText, r2 = n2 === void 0 ? "Search by" : n2;
  return Ue.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Ue.createElement("span", { className: "DocSearch-Label" }, r2), Ue.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img" }, Ue.createElement("path", { d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z", fill: "currentColor", fillRule: "evenodd" })));
}
function Dn(e2) {
  return Ue.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, Ue.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
}
function Cn(e2) {
  var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = n2.selectText, o2 = r2 === void 0 ? "to select" : r2, c2 = n2.selectKeyAriaLabel, i2 = c2 === void 0 ? "Enter key" : c2, a2 = n2.navigateText, u2 = a2 === void 0 ? "to navigate" : a2, l2 = n2.navigateUpKeyAriaLabel, s2 = l2 === void 0 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = f2 === void 0 ? "Arrow down" : f2, m2 = n2.closeText, d2 = m2 === void 0 ? "to close" : m2, h2 = n2.closeKeyAriaLabel, v2 = h2 === void 0 ? "Escape key" : h2, y2 = n2.searchByText, _2 = y2 === void 0 ? "Search by" : y2;
  return Ue.createElement(Ue.Fragment, null, Ue.createElement("div", { className: "DocSearch-Logo" }, Ue.createElement(kn, { translations: { searchByText: _2 } })), Ue.createElement("ul", { className: "DocSearch-Commands" }, Ue.createElement("li", null, Ue.createElement("kbd", { className: "DocSearch-Commands-Key" }, Ue.createElement(Dn, { ariaLabel: i2 }, Ue.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Ue.createElement("span", { className: "DocSearch-Label" }, o2)), Ue.createElement("li", null, Ue.createElement("kbd", { className: "DocSearch-Commands-Key" }, Ue.createElement(Dn, { ariaLabel: p2 }, Ue.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Ue.createElement("kbd", { className: "DocSearch-Commands-Key" }, Ue.createElement(Dn, { ariaLabel: s2 }, Ue.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Ue.createElement("span", { className: "DocSearch-Label" }, u2)), Ue.createElement("li", null, Ue.createElement("kbd", { className: "DocSearch-Commands-Key" }, Ue.createElement(Dn, { ariaLabel: v2 }, Ue.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Ue.createElement("span", { className: "DocSearch-Label" }, d2))));
}
function An(e2) {
  var t2 = e2.hit, n2 = e2.children;
  return Ue.createElement("a", { href: t2.url }, n2);
}
function xn() {
  return Ue.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Ue.createElement("g", { fill: "none", fillRule: "evenodd" }, Ue.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Ue.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Ue.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Ue.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function Nn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Ue.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function Rn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Tn() {
  return Ue.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Ue.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var Ln = function() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
};
function qn(e2) {
  switch (e2.type) {
    case "lvl1":
      return Ue.createElement(Ln, null);
    case "content":
      return Ue.createElement(Hn, null);
    default:
      return Ue.createElement(Mn, null);
  }
}
function Mn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Hn() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function Un() {
  return Ue.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ue.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function Fn() {
  return Ue.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function Bn() {
  return Ue.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Ue.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function Vn(e2) {
  var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = n2.titleText, o2 = r2 === void 0 ? "Unable to fetch results" : r2, c2 = n2.helpText, i2 = c2 === void 0 ? "You might want to check your network connection." : c2;
  return Ue.createElement("div", { className: "DocSearch-ErrorScreen" }, Ue.createElement("div", { className: "DocSearch-Screen-Icon" }, Ue.createElement(Fn, null)), Ue.createElement("p", { className: "DocSearch-Title" }, o2), Ue.createElement("p", { className: "DocSearch-Help" }, i2));
}
var zn = ["translations"];
function Wn(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return Kn(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && e3[Symbol.iterator] != null || e3["@@iterator"] != null)
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return Kn(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return Kn(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Kn(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Jn(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function $n(e2) {
  var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = Jn(e2, zn), o2 = n2.noResultsText, c2 = o2 === void 0 ? "No results for" : o2, i2 = n2.suggestedQueryText, a2 = i2 === void 0 ? "Try searching for" : i2, u2 = n2.reportMissingResultsText, l2 = u2 === void 0 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = s2 === void 0 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
  return Ue.createElement("div", { className: "DocSearch-NoResults" }, Ue.createElement("div", { className: "DocSearch-Screen-Icon" }, Ue.createElement(Bn, null)), Ue.createElement("p", { className: "DocSearch-Title" }, c2, ' "', Ue.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Ue.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Ue.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Ue.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
    return [].concat(Wn(e3), [Ue.createElement("li", { key: t3 }, Ue.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
      r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
    } }, t3))]);
  }, []))), r2.getMissingResultsUrl && Ue.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), Ue.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
}
var Qn = ["hit", "attribute", "tagName"];
function Yn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Gn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Yn(Object(n2), true).forEach(function(t3) {
      Zn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Yn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Zn(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Xn(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function er(e2, t2) {
  return t2.split(".").reduce(function(e3, t3) {
    return e3 != null && e3[t3] ? e3[t3] : null;
  }, e2);
}
function tr(e2) {
  var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
  return g(r2 === void 0 ? "span" : r2, Gn(Gn({}, Xn(e2, Qn)), {}, { dangerouslySetInnerHTML: { __html: er(t2, "_snippetResult.".concat(n2, ".value")) || er(t2, n2) } }));
}
function nr(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n2 == null)
      return;
    var r2, o2, c2 = [], i2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i2 || n2.return == null || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return rr(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return rr(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function rr(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function or() {
  return or = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, or.apply(this, arguments);
}
function cr(e2) {
  return e2.collection && e2.collection.items.length !== 0 ? Ue.createElement("section", { className: "DocSearch-Hits" }, Ue.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Ue.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
    return Ue.createElement(ir, or({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
  }))) : null;
}
function ir(e2) {
  var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, c2 = e2.getItemProps, i2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = nr(Ue.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = nr(Ue.useState(false), 2), m2 = p2[0], d2 = p2[1], h2 = Ue.useRef(null), v2 = u2;
  return Ue.createElement("li", or({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    h2.current && h2.current();
  } }, c2({ item: t2, source: a2.source, onClick: function() {
    i2(t2);
  } })), Ue.createElement(v2, { hit: t2 }, Ue.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && t2.type === "lvl1" && Ue.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ue.createElement(tr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Ue.createElement(tr, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && (t2.type === "lvl2" || t2.type === "lvl3" || t2.type === "lvl4" || t2.type === "lvl5" || t2.type === "lvl6") && Ue.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ue.createElement(tr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Ue.createElement(tr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), t2.type === "content" && Ue.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ue.createElement(tr, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Ue.createElement(tr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
    f2(true), h2.current = e3;
  }, runFavoriteTransition: function(e3) {
    d2(true), h2.current = e3;
  } }))));
}
function ar(e2, t2) {
  return e2.reduce(function(e3, n2) {
    var r2 = t2(n2);
    return e3.hasOwnProperty(r2) || (e3[r2] = []), e3[r2].length < 5 && e3[r2].push(n2), e3;
  }, {});
}
function ur(e2) {
  return e2;
}
function lr() {
}
var sr = /(<mark>|<\/mark>)/g, fr = RegExp(sr.source);
function pr(e2) {
  var t2, n2, r2, o2, c2, i2 = e2;
  if (!i2.__docsearch_parent && !e2._highlightResult)
    return e2.hierarchy.lvl0;
  var a2 = ((i2.__docsearch_parent ? (t2 = i2.__docsearch_parent) === null || t2 === void 0 || (n2 = t2._highlightResult) === null || n2 === void 0 || (r2 = n2.hierarchy) === null || r2 === void 0 ? void 0 : r2.lvl0 : (o2 = e2._highlightResult) === null || o2 === void 0 || (c2 = o2.hierarchy) === null || c2 === void 0 ? void 0 : c2.lvl0) || {}).value;
  return a2 && fr.test(a2) ? a2.replace(sr, "") : a2;
}
function mr() {
  return mr = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, mr.apply(this, arguments);
}
function dr(e2) {
  return Ue.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
    if (t2.items.length === 0)
      return null;
    var n2 = pr(t2.items[0]);
    return Ue.createElement(cr, mr({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
      var n3, r2 = e3.item, o2 = e3.index;
      return Ue.createElement(Ue.Fragment, null, r2.__docsearch_parent && Ue.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Ue.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== ((n3 = t2.items[o2 + 1]) === null || n3 === void 0 ? void 0 : n3.__docsearch_parent) ? Ue.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Ue.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Ue.createElement("div", { className: "DocSearch-Hit-icon" }, Ue.createElement(qn, { type: r2.type })));
    }, renderAction: function() {
      return Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement(Tn, null));
    } }));
  }), e2.resultsFooterComponent && Ue.createElement("section", { className: "DocSearch-HitsFooter" }, Ue.createElement(e2.resultsFooterComponent, { state: e2.state })));
}
var hr = ["translations"];
function vr() {
  return vr = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, vr.apply(this, arguments);
}
function yr(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function _r(e2) {
  var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = yr(e2, hr), o2 = n2.recentSearchesTitle, c2 = o2 === void 0 ? "Recent" : o2, i2 = n2.noRecentSearchesText, a2 = i2 === void 0 ? "No recent searches" : i2, u2 = n2.saveRecentSearchButtonTitle, l2 = u2 === void 0 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = s2 === void 0 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = p2 === void 0 ? "Favorite" : p2, d2 = n2.removeFavoriteSearchButtonTitle, h2 = d2 === void 0 ? "Remove this search from favorites" : d2;
  return r2.state.status === "idle" && r2.hasCollections === false ? r2.disableUserPersonalization ? null : Ue.createElement("div", { className: "DocSearch-StartScreen" }, Ue.createElement("p", { className: "DocSearch-Help" }, a2)) : r2.hasCollections === false ? null : Ue.createElement("div", { className: "DocSearch-Dropdown-Container" }, Ue.createElement(cr, vr({}, r2, { title: c2, collection: r2.state.collections[0], renderIcon: function() {
    return Ue.createElement("div", { className: "DocSearch-Hit-icon" }, Ue.createElement(Nn, null));
  }, renderAction: function(e3) {
    var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
    return Ue.createElement(Ue.Fragment, null, Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
      e4.preventDefault(), e4.stopPropagation(), n3(function() {
        r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
      });
    } }, Ue.createElement(Un, null))), Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
      e4.preventDefault(), e4.stopPropagation(), o3(function() {
        r2.recentSearches.remove(t3), r2.refresh();
      });
    } }, Ue.createElement(Rn, null))));
  } })), Ue.createElement(cr, vr({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
    return Ue.createElement("div", { className: "DocSearch-Hit-icon" }, Ue.createElement(Un, null));
  }, renderAction: function(e3) {
    var t3 = e3.item, n3 = e3.runDeleteTransition;
    return Ue.createElement("div", { className: "DocSearch-Hit-action" }, Ue.createElement("button", { className: "DocSearch-Hit-action-button", title: h2, type: "submit", onClick: function(e4) {
      e4.preventDefault(), e4.stopPropagation(), n3(function() {
        r2.favoriteSearches.remove(t3), r2.refresh();
      });
    } }, Ue.createElement(Rn, null)));
  } })));
}
var br = ["translations"];
function gr() {
  return gr = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, gr.apply(this, arguments);
}
function Or(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var Sr = Ue.memo(function(e2) {
  var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = Or(e2, br);
  if (r2.state.status === "error")
    return Ue.createElement(Vn, { translations: n2 == null ? void 0 : n2.errorScreen });
  var o2 = r2.state.collections.some(function(e3) {
    return e3.items.length > 0;
  });
  return r2.state.query ? o2 === false ? Ue.createElement($n, gr({}, r2, { translations: n2 == null ? void 0 : n2.noResultsScreen })) : Ue.createElement(dr, r2) : Ue.createElement(_r, gr({}, r2, { hasCollections: o2, translations: n2 == null ? void 0 : n2.startScreen }));
}, function(e2, t2) {
  return t2.state.status === "loading" || t2.state.status === "stalled";
}), Er = ["translations"];
function wr() {
  return wr = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, wr.apply(this, arguments);
}
function jr(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Pr(e2) {
  var t2 = e2.translations, n2 = t2 === void 0 ? {} : t2, r2 = jr(e2, Er), o2 = n2.resetButtonTitle, c2 = o2 === void 0 ? "Clear the query" : o2, i2 = n2.resetButtonAriaLabel, a2 = i2 === void 0 ? "Clear the query" : i2, u2 = n2.cancelButtonText, l2 = u2 === void 0 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = s2 === void 0 ? "Cancel" : s2, p2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
  return Ue.useEffect(function() {
    r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
  }, [r2.autoFocus, r2.inputRef]), Ue.useEffect(function() {
    r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
  }, [r2.isFromSelection, r2.inputRef]), Ue.createElement(Ue.Fragment, null, Ue.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
    e3.preventDefault();
  }, onReset: p2 }, Ue.createElement("label", wr({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), Ue.createElement(Be, null)), Ue.createElement("div", { className: "DocSearch-LoadingIndicator" }, Ue.createElement(xn, null)), Ue.createElement("input", wr({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), Ue.createElement("button", { type: "reset", title: c2, className: "DocSearch-Reset", "aria-label": a2, hidden: !r2.state.query }, Ue.createElement(Rn, null))), Ue.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
}
var Ir = ["_highlightResult", "_snippetResult"];
function kr(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Dr(e2) {
  return function() {
    var e3 = "__TEST_KEY__";
    try {
      return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
    } catch (e4) {
      return false;
    }
  }() === false ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t2) {
    return window.localStorage.setItem(e2, JSON.stringify(t2));
  }, getItem: function() {
    var t2 = window.localStorage.getItem(e2);
    return t2 ? JSON.parse(t2) : [];
  } };
}
function Cr(e2) {
  var t2 = e2.key, n2 = e2.limit, r2 = n2 === void 0 ? 5 : n2, o2 = Dr(t2), c2 = o2.getItem().slice(0, r2);
  return { add: function(e3) {
    var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, kr(t3, Ir)), i2 = c2.findIndex(function(e4) {
      return e4.objectID === n3.objectID;
    });
    i2 > -1 && c2.splice(i2, 1), c2.unshift(n3), c2 = c2.slice(0, r2), o2.setItem(c2);
  }, remove: function(e3) {
    c2 = c2.filter(function(t3) {
      return t3.objectID !== e3.objectID;
    }), o2.setItem(c2);
  }, getAll: function() {
    return c2;
  } };
}
var Ar = ["facetName", "facetQuery"];
function xr(e2) {
  var t2, n2 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
    return t2 === void 0 && (t2 = e2.localStorage || window.localStorage), t2;
  }, o2 = function() {
    return JSON.parse(r2().getItem(n2) || "{}");
  };
  return { get: function(e3, t3) {
    var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      var n4 = JSON.stringify(e3), r3 = o2()[n4];
      return Promise.all([r3 || t3(), r3 !== void 0]);
    }).then(function(e4) {
      var t4 = i(e4, 2), r3 = t4[0], o3 = t4[1];
      return Promise.all([r3, o3 || n3.miss(r3)]);
    }).then(function(e4) {
      return i(e4, 1)[0];
    });
  }, set: function(e3, t3) {
    return Promise.resolve().then(function() {
      var c2 = o2();
      return c2[JSON.stringify(e3)] = t3, r2().setItem(n2, JSON.stringify(c2)), t3;
    });
  }, delete: function(e3) {
    return Promise.resolve().then(function() {
      var t3 = o2();
      delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r2().removeItem(n2);
    });
  } };
}
function Nr(e2) {
  var t2 = a(e2.caches), n2 = t2.shift();
  return n2 === void 0 ? { get: function(e3, t3) {
    var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return t3().then(function(e4) {
      return Promise.all([e4, n3.miss(e4)]);
    }).then(function(e4) {
      return i(e4, 1)[0];
    });
  }, set: function(e3, t3) {
    return Promise.resolve(t3);
  }, delete: function(e3) {
    return Promise.resolve();
  }, clear: function() {
    return Promise.resolve();
  } } : { get: function(e3, r2) {
    var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return n2.get(e3, r2, o2).catch(function() {
      return Nr({ caches: t2 }).get(e3, r2, o2);
    });
  }, set: function(e3, r2) {
    return n2.set(e3, r2).catch(function() {
      return Nr({ caches: t2 }).set(e3, r2);
    });
  }, delete: function(e3) {
    return n2.delete(e3).catch(function() {
      return Nr({ caches: t2 }).delete(e3);
    });
  }, clear: function() {
    return n2.clear().catch(function() {
      return Nr({ caches: t2 }).clear();
    });
  } };
}
function Rr() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: true }, t2 = {};
  return { get: function(n2, r2) {
    var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, c2 = JSON.stringify(n2);
    if (c2 in t2)
      return Promise.resolve(e2.serializable ? JSON.parse(t2[c2]) : t2[c2]);
    var i2 = r2(), a2 = o2 && o2.miss || function() {
      return Promise.resolve();
    };
    return i2.then(function(e3) {
      return a2(e3);
    }).then(function() {
      return i2;
    });
  }, set: function(n2, r2) {
    return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
  }, delete: function(e3) {
    return delete t2[JSON.stringify(e3)], Promise.resolve();
  }, clear: function() {
    return t2 = {}, Promise.resolve();
  } };
}
function Tr(e2) {
  for (var t2 = e2.length - 1; t2 > 0; t2--) {
    var n2 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
    e2[t2] = e2[n2], e2[n2] = r2;
  }
  return e2;
}
function Lr(e2, t2) {
  return t2 ? (Object.keys(t2).forEach(function(n2) {
    e2[n2] = t2[n2](e2);
  }), e2) : e2;
}
function qr(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o2 = 0;
  return e2.replace(/%s/g, function() {
    return encodeURIComponent(n2[o2++]);
  });
}
var Mr = { WithinQueryParameters: 0, WithinHeaders: 1 };
function Hr(e2, t2) {
  var n2 = e2 || {}, r2 = n2.data || {};
  return Object.keys(n2).forEach(function(e3) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) === -1 && (r2[e3] = n2[e3]);
  }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n2.timeout || t2, headers: n2.headers || {}, queryParameters: n2.queryParameters || {}, cacheable: n2.cacheable };
}
var Ur = { Read: 1, Write: 2, Any: 3 }, Fr = 1, Br = 2, Vr = 3;
function zr(e2) {
  var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fr;
  return t(t({}, e2), {}, { status: n2, lastUpdate: Date.now() });
}
function Wr(e2) {
  return typeof e2 == "string" ? { protocol: "https", url: e2, accept: Ur.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || Ur.Any };
}
var Kr = "GET", Jr = "POST";
function $r(e2, t2) {
  return Promise.all(t2.map(function(t3) {
    return e2.get(t3, function() {
      return Promise.resolve(zr(t3));
    });
  })).then(function(e3) {
    var n2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === Fr || Date.now() - e5.lastUpdate > 12e4;
      }(e4);
    }), r2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === Vr && Date.now() - e5.lastUpdate <= 12e4;
      }(e4);
    }), o2 = [].concat(a(n2), a(r2));
    return { getTimeout: function(e4, t3) {
      return (r2.length === 0 && e4 === 0 ? 1 : r2.length + 3 + e4) * t3;
    }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
      return Wr(e4);
    }) : t2 };
  });
}
function Qr(e2, n2, r2, o2) {
  var c2 = [], i2 = function(e3, n3) {
    if (e3.method === Kr || e3.data === void 0 && n3.data === void 0)
      return;
    var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n3.data);
    return JSON.stringify(r3);
  }(r2, o2), u2 = function(e3, n3) {
    var r3 = t(t({}, e3.headers), n3.headers), o3 = {};
    return Object.keys(r3).forEach(function(e4) {
      var t2 = r3[e4];
      o3[e4.toLowerCase()] = t2;
    }), o3;
  }(e2, o2), l2 = r2.method, s2 = r2.method !== Kr ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), o2.queryParameters), p2 = 0, m2 = function t2(n3, a2) {
    var s3 = n3.pop();
    if (s3 === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Xr(c2) };
    var m3 = { data: i2, headers: u2, method: l2, url: Gr(s3, r2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, o2.timeout) }, d2 = function(e3) {
      var t3 = { request: m3, response: e3, host: s3, triesLeft: n3.length };
      return c2.push(t3), t3;
    }, h2 = { onSucess: function(e3) {
      return function(e4) {
        try {
          return JSON.parse(e4.content);
        } catch (t3) {
          throw function(e5, t4) {
            return { name: "DeserializationError", message: e5, response: t4 };
          }(t3.message, e4);
        }
      }(e3);
    }, onRetry: function(r3) {
      var o3 = d2(r3);
      return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", eo(o3)), e2.hostsCache.set(s3, zr(s3, r3.isTimedOut ? Vr : Br))]).then(function() {
        return t2(n3, a2);
      });
    }, onFail: function(e3) {
      throw d2(e3), function(e4, t3) {
        var n4 = e4.content, r3 = e4.status, o3 = n4;
        try {
          o3 = JSON.parse(n4).message;
        } catch (e5) {
        }
        return function(e5, t4, n5) {
          return { name: "ApiError", message: e5, status: t4, transporterStackTrace: n5 };
        }(o3, r3, t3);
      }(e3, Xr(c2));
    } };
    return e2.requester.send(m3).then(function(e3) {
      return function(e4, t3) {
        return function(e5) {
          var t4 = e5.status;
          return e5.isTimedOut || function(e6) {
            var t5 = e6.isTimedOut, n4 = e6.status;
            return !t5 && ~~n4 == 0;
          }(e5) || ~~(t4 / 100) != 2 && ~~(t4 / 100) != 4;
        }(e4) ? t3.onRetry(e4) : ~~(e4.status / 100) == 2 ? t3.onSucess(e4) : t3.onFail(e4);
      }(e3, h2);
    });
  };
  return $r(e2.hostsCache, n2).then(function(e3) {
    return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
  });
}
function Yr(e2) {
  var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
    var n2 = "; ".concat(e3.segment).concat(e3.version !== void 0 ? " (".concat(e3.version, ")") : "");
    return t2.value.indexOf(n2) === -1 && (t2.value = "".concat(t2.value).concat(n2)), t2;
  } };
  return t2;
}
function Gr(e2, t2, n2) {
  var r2 = Zr(n2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat(t2.charAt(0) === "/" ? t2.substr(1) : t2);
  return r2.length && (o2 += "?".concat(r2)), o2;
}
function Zr(e2) {
  return Object.keys(e2).map(function(t2) {
    return qr("%s=%s", t2, (n2 = e2[t2], Object.prototype.toString.call(n2) === "[object Object]" || Object.prototype.toString.call(n2) === "[object Array]" ? JSON.stringify(e2[t2]) : e2[t2]));
    var n2;
  }).join("&");
}
function Xr(e2) {
  return e2.map(function(e3) {
    return eo(e3);
  });
}
function eo(e2) {
  var n2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n2) }) });
}
var to = function(e2) {
  var n2 = e2.appId, r2 = function(e3, t2, n3) {
    var r3 = { "x-algolia-api-key": n3, "x-algolia-application-id": t2 };
    return { headers: function() {
      return e3 === Mr.WithinHeaders ? r3 : {};
    }, queryParameters: function() {
      return e3 === Mr.WithinQueryParameters ? r3 : {};
    } };
  }(e2.authMode !== void 0 ? e2.authMode : Mr.WithinHeaders, n2, e2.apiKey), o2 = function(e3) {
    var t2 = e3.hostsCache, n3 = e3.logger, r3 = e3.requester, o3 = e3.requestsCache, c3 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l2 = e3.hosts, s2 = e3.queryParameters, f2 = { hostsCache: t2, logger: n3, requester: r3, requestsCache: o3, responsesCache: c3, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s2, hosts: l2.map(function(e4) {
      return Wr(e4);
    }), read: function(e4, t3) {
      var n4 = Hr(t3, f2.timeouts.read), r4 = function() {
        return Qr(f2, f2.hosts.filter(function(e5) {
          return (e5.accept & Ur.Read) != 0;
        }), e4, n4);
      };
      if ((n4.cacheable !== void 0 ? n4.cacheable : e4.cacheable) !== true)
        return r4();
      var o4 = { request: e4, mappedRequestOptions: n4, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
      return f2.responsesCache.get(o4, function() {
        return f2.requestsCache.get(o4, function() {
          return f2.requestsCache.set(o4, r4()).then(function(e5) {
            return Promise.all([f2.requestsCache.delete(o4), e5]);
          }, function(e5) {
            return Promise.all([f2.requestsCache.delete(o4), Promise.reject(e5)]);
          }).then(function(e5) {
            var t4 = i(e5, 2);
            return t4[0], t4[1];
          });
        });
      }, { miss: function(e5) {
        return f2.responsesCache.set(o4, e5);
      } });
    }, write: function(e4, t3) {
      return Qr(f2, f2.hosts.filter(function(e5) {
        return (e5.accept & Ur.Write) != 0;
      }), e4, Hr(t3, f2.timeouts.write));
    } };
    return f2;
  }(t(t({ hosts: [{ url: "".concat(n2, "-dsn.algolia.net"), accept: Ur.Read }, { url: "".concat(n2, ".algolia.net"), accept: Ur.Write }].concat(Tr([{ url: "".concat(n2, "-1.algolianet.com") }, { url: "".concat(n2, "-2.algolianet.com") }, { url: "".concat(n2, "-3.algolianet.com") }])) }, e2), {}, { headers: t(t(t({}, r2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: t(t({}, r2.queryParameters()), e2.queryParameters) })), c2 = { transporter: o2, appId: n2, addAlgoliaAgent: function(e3, t2) {
    o2.userAgent.add({ segment: e3, version: t2 });
  }, clearCache: function() {
    return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
    });
  } };
  return Lr(c2, e2.methods);
}, no = function(e2) {
  return function(t2) {
    var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
    return Lr(r2, n2.methods);
  };
}, ro = function(e2) {
  return function(n2, r2) {
    var o2 = n2.map(function(e3) {
      return t(t({}, e3), {}, { params: Zr(e3.params || {}) });
    });
    return e2.transporter.read({ method: Jr, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
  };
}, oo = function(e2) {
  return function(n2, r2) {
    return Promise.all(n2.map(function(n3) {
      var o2 = n3.params, i2 = o2.facetName, a2 = o2.facetQuery, u2 = c(o2, Ar);
      return no(e2)(n3.indexName, { methods: { searchForFacetValues: ao } }).searchForFacetValues(i2, a2, t(t({}, r2), u2));
    }));
  };
}, co = function(e2) {
  return function(t2, n2, r2) {
    return e2.transporter.read({ method: Jr, path: qr("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n2 }, cacheable: true }, r2);
  };
}, io = function(e2) {
  return function(t2, n2) {
    return e2.transporter.read({ method: Jr, path: qr("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n2);
  };
}, ao = function(e2) {
  return function(t2, n2, r2) {
    return e2.transporter.read({ method: Jr, path: qr("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n2 }, cacheable: true }, r2);
  };
}, uo = 1, lo = 2, so = 3;
function fo(e2, n2, r2) {
  var o2, c2 = { appId: e2, apiKey: n2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
    return new Promise(function(t2) {
      var n3 = new XMLHttpRequest();
      n3.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t3) {
        return n3.setRequestHeader(t3, e3.headers[t3]);
      });
      var r3, o3 = function(e4, r4) {
        return setTimeout(function() {
          n3.abort(), t2({ status: 0, content: r4, isTimedOut: true });
        }, 1e3 * e4);
      }, c3 = o3(e3.connectTimeout, "Connection timeout");
      n3.onreadystatechange = function() {
        n3.readyState > n3.OPENED && r3 === void 0 && (clearTimeout(c3), r3 = o3(e3.responseTimeout, "Socket timeout"));
      }, n3.onerror = function() {
        n3.status === 0 && (clearTimeout(c3), clearTimeout(r3), t2({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
      }, n3.onload = function() {
        clearTimeout(c3), clearTimeout(r3), t2({ content: n3.responseText, status: n3.status, isTimedOut: false });
      }, n3.send(e3.data);
    });
  } }, logger: (o2 = so, { debug: function(e3, t2) {
    return uo >= o2 && console.debug(e3, t2), Promise.resolve();
  }, info: function(e3, t2) {
    return lo >= o2 && console.info(e3, t2), Promise.resolve();
  }, error: function(e3, t2) {
    return console.error(e3, t2), Promise.resolve();
  } }), responsesCache: Rr(), requestsCache: Rr({ serializable: false }), hostsCache: Nr({ caches: [xr({ key: "".concat("4.8.5", "-").concat(e2) }), Rr()] }), userAgent: Yr("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: Mr.WithinQueryParameters };
  return to(t(t(t({}, c2), r2), {}, { methods: { search: ro, searchForFacetValues: oo, multipleQueries: ro, multipleSearchForFacetValues: oo, initIndex: function(e3) {
    return function(t2) {
      return no(e3)(t2, { methods: { search: io, searchForFacetValues: ao, findAnswers: co } });
    };
  } } }));
}
fo.version = "4.8.5";
var po = ["footer", "searchBox"];
function mo() {
  return mo = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, mo.apply(this, arguments);
}
function ho(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function vo(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? ho(Object(n2), true).forEach(function(t3) {
      yo(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ho(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function yo(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function _o(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n2 == null)
      return;
    var r2, o2, c2 = [], i2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i2 || n2.return == null || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return bo(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return bo(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function bo(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function go(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Oo(e2) {
  var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, c2 = o2 === void 0 ? "Search docs" : o2, i2 = e2.searchParameters, a2 = e2.onClose, u2 = a2 === void 0 ? lr : a2, l2 = e2.transformItems, s2 = l2 === void 0 ? ur : l2, f2 = e2.hitComponent, p2 = f2 === void 0 ? An : f2, m2 = e2.resultsFooterComponent, d2 = m2 === void 0 ? function() {
    return null;
  } : m2, h2 = e2.navigator, v2 = e2.initialScrollY, y2 = v2 === void 0 ? 0 : v2, _2 = e2.transformSearchClient, b2 = _2 === void 0 ? ur : _2, g2 = e2.disableUserPersonalization, O2 = g2 !== void 0 && g2, S2 = e2.initialQuery, E2 = S2 === void 0 ? "" : S2, w2 = e2.translations, j2 = w2 === void 0 ? {} : w2, P2 = e2.getMissingResultsUrl, I2 = j2.footer, k2 = j2.searchBox, D2 = go(j2, po), C2 = _o(Ue.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), A2 = C2[0], x2 = C2[1], N2 = Ue.useRef(null), R2 = Ue.useRef(null), T2 = Ue.useRef(null), L2 = Ue.useRef(null), q2 = Ue.useRef(null), M2 = Ue.useRef(10), H2 = Ue.useRef(typeof window != "undefined" ? window.getSelection().toString().slice(0, 64) : "").current, U2 = Ue.useRef(E2 || H2).current, F2 = function(e3, t3, n3) {
    return Ue.useMemo(function() {
      var r3 = fo(e3, t3);
      return r3.addAlgoliaAgent("docsearch", "3.1.0"), /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) === false && r3.addAlgoliaAgent("docsearch-react", "3.1.0"), n3(r3);
    }, [e3, t3, n3]);
  }(t2, n2, b2), B2 = Ue.useRef(Cr({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, V2 = Ue.useRef(Cr({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: B2.getAll().length === 0 ? 7 : 4 })).current, z2 = Ue.useCallback(function(e3) {
    if (!O2) {
      var t3 = e3.type === "content" ? e3.__docsearch_parent : e3;
      t3 && B2.getAll().findIndex(function(e4) {
        return e4.objectID === t3.objectID;
      }) === -1 && V2.add(t3);
    }
  }, [B2, V2, O2]), W2 = Ue.useMemo(function() {
    return In({ id: "docsearch", defaultActiveItemId: 0, placeholder: c2, openOnFocus: true, initialState: { query: U2, context: { searchSuggestions: [] } }, navigator: h2, onStateChange: function(e3) {
      x2(e3.state);
    }, getSources: function(e3) {
      var t3 = e3.query, n3 = e3.state, o3 = e3.setContext, c3 = e3.setStatus;
      return t3 ? F2.search([{ query: t3, indexName: r2, params: vo({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(M2.current), "hierarchy.lvl2:".concat(M2.current), "hierarchy.lvl3:".concat(M2.current), "hierarchy.lvl4:".concat(M2.current), "hierarchy.lvl5:".concat(M2.current), "hierarchy.lvl6:".concat(M2.current), "content:".concat(M2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, i2) }]).catch(function(e4) {
        throw e4.name === "RetryError" && c3("error"), e4;
      }).then(function(e4) {
        var t4 = e4.results[0], r3 = t4.hits, c4 = t4.nbHits, i3 = ar(r3, function(e5) {
          return pr(e5);
        });
        return n3.context.searchSuggestions.length < Object.keys(i3).length && o3({ searchSuggestions: Object.keys(i3) }), o3({ nbHits: c4 }), Object.values(i3).map(function(e5, t5) {
          return { sourceId: "hits".concat(t5), onSelect: function(e6) {
            var t6 = e6.item, n4 = e6.event;
            z2(t6), n4.shiftKey || n4.ctrlKey || n4.metaKey || u2();
          }, getItemUrl: function(e6) {
            return e6.item.url;
          }, getItems: function() {
            return Object.values(ar(e5, function(e6) {
              return e6.hierarchy.lvl1;
            })).map(s2).map(function(e6) {
              return e6.map(function(t6) {
                return vo(vo({}, t6), {}, { __docsearch_parent: t6.type !== "lvl1" && e6.find(function(e7) {
                  return e7.type === "lvl1" && e7.hierarchy.lvl1 === t6.hierarchy.lvl1;
                }) });
              });
            }).flat();
          } };
        });
      }) : O2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
        var t4 = e4.item, n4 = e4.event;
        z2(t4), n4.shiftKey || n4.ctrlKey || n4.metaKey || u2();
      }, getItemUrl: function(e4) {
        return e4.item.url;
      }, getItems: function() {
        return V2.getAll();
      } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
        var t4 = e4.item, n4 = e4.event;
        z2(t4), n4.shiftKey || n4.ctrlKey || n4.metaKey || u2();
      }, getItemUrl: function(e4) {
        return e4.item.url;
      }, getItems: function() {
        return B2.getAll();
      } }];
    } });
  }, [r2, i2, F2, u2, V2, B2, z2, U2, c2, h2, s2, O2]), K2 = W2.getEnvironmentProps, J2 = W2.getRootProps, $2 = W2.refresh;
  return function(e3) {
    var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
    Ue.useEffect(function() {
      if (n3 && r3 && o3) {
        var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), c3 = e4.onTouchStart, i3 = e4.onTouchMove;
        return window.addEventListener("touchstart", c3), window.addEventListener("touchmove", i3), function() {
          window.removeEventListener("touchstart", c3), window.removeEventListener("touchmove", i3);
        };
      }
    }, [t3, n3, r3, o3]);
  }({ getEnvironmentProps: K2, panelElement: L2.current, formElement: T2.current, inputElement: q2.current }), function(e3) {
    var t3 = e3.container;
    Ue.useEffect(function() {
      if (t3) {
        var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
        return t3.addEventListener("keydown", o3), function() {
          t3.removeEventListener("keydown", o3);
        };
      }
      function o3(e5) {
        e5.key === "Tab" && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
      }
    }, [t3]);
  }({ container: N2.current }), Ue.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var e3, t3;
      document.body.classList.remove("DocSearch--active"), (e3 = (t3 = window).scrollTo) === null || e3 === void 0 || e3.call(t3, 0, y2);
    };
  }, []), Ue.useEffect(function() {
    window.matchMedia("(max-width: 750px)").matches && (M2.current = 5);
  }, []), Ue.useEffect(function() {
    L2.current && (L2.current.scrollTop = 0);
  }, [A2.query]), Ue.useEffect(function() {
    U2.length > 0 && ($2(), q2.current && q2.current.focus());
  }, [U2, $2]), Ue.useEffect(function() {
    function e3() {
      if (R2.current) {
        var e4 = 0.01 * window.innerHeight;
        R2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
      }
    }
    return e3(), window.addEventListener("resize", e3), function() {
      window.removeEventListener("resize", e3);
    };
  }, []), Ue.createElement("div", mo({ ref: N2 }, J2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", A2.status === "stalled" && "DocSearch-Container--Stalled", A2.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
    e3.target === e3.currentTarget && u2();
  } }), Ue.createElement("div", { className: "DocSearch-Modal", ref: R2 }, Ue.createElement("header", { className: "DocSearch-SearchBar", ref: T2 }, Ue.createElement(Pr, mo({}, W2, { state: A2, autoFocus: U2.length === 0, inputRef: q2, isFromSelection: Boolean(U2) && U2 === H2, translations: k2, onClose: u2 }))), Ue.createElement("div", { className: "DocSearch-Dropdown", ref: L2 }, Ue.createElement(Sr, mo({}, W2, { indexName: r2, state: A2, hitComponent: p2, resultsFooterComponent: d2, disableUserPersonalization: O2, recentSearches: V2, favoriteSearches: B2, inputRef: q2, translations: D2, getMissingResultsUrl: P2, onItemClick: function(e3) {
    z2(e3), u2();
  } }))), Ue.createElement("footer", { className: "DocSearch-Footer" }, Ue.createElement(Cn, { translations: I2 }))));
}
function So() {
  return So = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, So.apply(this, arguments);
}
function Eo(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = e3 == null ? null : typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
    if (n2 == null)
      return;
    var r2, o2, c2 = [], i2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(i2 = (r2 = n2.next()).done) && (c2.push(r2.value), !t3 || c2.length !== t3); i2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        i2 || n2.return == null || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return c2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return wo(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return wo(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function wo(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function jo(e2) {
  var t2, n2, r2 = Ue.useRef(null), o2 = Eo(Ue.useState(false), 2), c2 = o2[0], i2 = o2[1], a2 = Eo(Ue.useState((e2 == null ? void 0 : e2.initialQuery) || void 0), 2), u2 = a2[0], l2 = a2[1], s2 = Ue.useCallback(function() {
    i2(true);
  }, [i2]), f2 = Ue.useCallback(function() {
    i2(false);
  }, [i2]);
  return function(e3) {
    var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, c3 = e3.searchButtonRef;
    Ue.useEffect(function() {
      function e4(e5) {
        (e5.keyCode === 27 && t3 || e5.key === "k" && (e5.metaKey || e5.ctrlKey) || !function(e6) {
          var t4 = e6.target, n4 = t4.tagName;
          return t4.isContentEditable || n4 === "INPUT" || n4 === "SELECT" || n4 === "TEXTAREA";
        }(e5) && e5.key === "/" && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n3()), c3 && c3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
      }
      return window.addEventListener("keydown", e4), function() {
        window.removeEventListener("keydown", e4);
      };
    }, [t3, n3, r3, o3, c3]);
  }({ isOpen: c2, onOpen: s2, onClose: f2, onInput: Ue.useCallback(function(e3) {
    i2(true), l2(e3.key);
  }, [i2, l2]), searchButtonRef: r2 }), Ue.createElement(Ue.Fragment, null, Ue.createElement(Ke, { ref: r2, translations: e2 == null || (t2 = e2.translations) === null || t2 === void 0 ? void 0 : t2.button, onClick: s2 }), c2 && je(Ue.createElement(Oo, So({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: e2 == null || (n2 = e2.translations) === null || n2 === void 0 ? void 0 : n2.modal, onClose: f2 })), document.body));
}
function Po(e2) {
  De(Ue.createElement(jo, o({}, e2, { transformSearchClient: function(t2) {
    return t2.addAlgoliaAgent("docsearch.js", "3.1.0"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
  } })), function(e3) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof e3 == "string" ? t2.document.querySelector(e3) : e3;
  }(e2.container, e2.environment));
}
var SearchBox_vue_vue_type_style_index_0_lang = "";
function isSpecialClick(event) {
  return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}
function getRelativePath(absoluteUrl) {
  const { pathname, hash } = new URL(absoluteUrl);
  return pathname + hash;
}
function debounce(func, wait = 100) {
  let lastTimeout = null;
  return function(...args) {
    const that = this;
    return new Promise((resolve, reject) => {
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }
      lastTimeout = setTimeout(() => {
        lastTimeout = null;
        Promise.resolve(func.apply(that, args)).then(resolve).catch(reject);
      }, wait);
    });
  };
}
const _sfc_main$f = defineComponent({
  name: "SearchBox",
  setup() {
    const route = useRoute();
    const router2 = useRouter();
    return {
      route,
      router: router2
    };
  },
  mounted() {
    Po({
      container: "#docsearch",
      appId: "LIXBD9IHZ6",
      apiKey: "d6925092b4555ac6b68e70fcbf4faf7e",
      indexName: "tinymce-plugin-dev",
      placeholder: "\u8BF7\u641C\u7D22\u8981\u641C\u7D22\u7684\u5185\u5BB9",
      context: ["asdasd", "asdasdsadgibe"],
      searchParameters: {
        hitsPerPage: 10
      },
      transformSearchClient: (searchClient) => {
        return __spreadProps(__spreadValues({}, searchClient), {
          search: debounce(searchClient.search, 500)
        });
      },
      getMissingResultsUrl: (searchFor) => {
        return `https://github.com/tinymce-plugin/tinymce-plugin.github.io/discussions?discussions_q=${searchFor}`;
      },
      translations: {
        button: {
          buttonText: "\u641C\u7D22",
          buttonAriaLabel: "Search"
        },
        modal: {
          searchBox: {
            resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2",
            resetButtonAriaLabel: "Clear the query",
            cancelButtonText: "\u53D6\u6D88",
            cancelButtonAriaLabel: "Cancel"
          },
          startScreen: {
            recentSearchesTitle: "\u6700\u8FD1\u641C\u7D22",
            noRecentSearchesText: "\u6700\u8FD1\u6CA1\u6709\u641C\u7D22",
            saveRecentSearchButtonTitle: "\u4FDD\u5B58\u6B64\u641C\u7D22",
            removeRecentSearchButtonTitle: "\u4ECE\u5386\u53F2\u8BB0\u5F55\u4E2D\u5220\u9664\u6B64\u641C\u7D22",
            favoriteSearchesTitle: "\u6536\u85CF\u5939",
            removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u5939\u4E2D\u5220\u9664\u6B64\u641C\u7D22"
          },
          errorScreen: {
            titleText: "\u65E0\u6CD5\u83B7\u53D6\u76F8\u5173\u7684\u7ED3\u679C",
            helpText: "\u60A8\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u3002"
          },
          footer: {
            selectText: "\u9009\u62E9",
            selectKeyAriaLabel: "Enter key",
            navigateText: "\u5207\u6362",
            navigateUpKeyAriaLabel: "Arrow up",
            navigateDownKeyAriaLabel: "Arrow down",
            closeText: "\u5173\u95ED",
            closeKeyAriaLabel: "Escape key",
            searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005"
          },
          noResultsScreen: {
            noResultsText: "\u6682\u65F6\u6CA1\u6709\u60A8\u60F3\u8981\u7684\u7ED3\u679C",
            suggestedQueryText: "\u53EF\u4EE5\u5C1D\u8BD5\u641C\u7D22",
            reportMissingResultsText: "\u6CA1\u6709\u4F60\u60F3\u8981\u7684\u7ED3\u679C?",
            reportMissingResultsLinkText: "\u8BF7\u544A\u8BC9\u6211\u4EEC\u77E5\u9053\u3002"
          }
        }
      },
      navigator: {
        navigate: ({ itemUrl }) => {
          const { pathname: hitPathname } = new URL(window.location.origin + itemUrl);
          if (this.route.path === hitPathname) {
            window.location.assign(window.location.origin + itemUrl);
          } else {
            this.router.push(itemUrl);
          }
        }
      },
      hitComponent: ({
        hit,
        children
      }) => {
        const relativeHit = hit.url.startsWith("http") ? getRelativePath(hit.url) : hit.url;
        return {
          type: "a",
          ref: void 0,
          constructor: void 0,
          key: void 0,
          props: {
            href: hit.url,
            onClick: (event) => {
              var _a2, _b2;
              if (isSpecialClick(event)) {
                return;
              }
              if (((_a2 = this.route) == null ? void 0 : _a2.path) === relativeHit) {
                return;
              }
              if (((_b2 = this.route) == null ? void 0 : _b2.path) !== relativeHit) {
                event.preventDefault();
              }
              this.router.push(relativeHit);
            },
            children
          },
          __v: null
        };
      }
    });
  }
});
const _hoisted_1$f = { class: "search-box" };
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("div", { id: "docsearch" }, null, -1);
const _hoisted_3$a = [
  _hoisted_2$c
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, _hoisted_3$a);
}
var SearchBox = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$c]]);
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = defineComponent({
  name: "Header",
  components: {
    TPNavBarAppearance,
    TPNavBarTranslations,
    TPNavBarSocialLinks,
    TPNavBarExtra,
    TPNavScreen,
    TPNavBarHamburger,
    SearchBox
  },
  props: {
    dWidth: {
      type: Number,
      default: document.documentElement.clientWidth
    }
  },
  data() {
    return {
      pola: 2,
      polaTop: 0,
      scrolltop: document.documentElement.scrollTop,
      IsFixed: false,
      IsFixedM: false,
      IsMobile: false
    };
  },
  setup(porps) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    return {
      isScreenOpen,
      closeScreen,
      toggleScreen
    };
  },
  created() {
    this.info();
  },
  mounted() {
    var that = this;
    window.onscroll = function() {
      that.scrolltop = document.documentElement.scrollTop;
      that.IsFixed = that.scrolltop >= 55 ? true : false;
      that.scrolltop < 55 && !that.IsFixed ? that.polaTop = that.scrolltop : "";
      that.IsFixedM = that.scrolltop >= 1 ? true : false;
    };
  },
  methods: {
    info() {
      let that = this;
      let intervalID = setInterval(function() {
        if (document.getElementById("logoSvgId")) {
          var timingProps = {
            type: "scenario-sync",
            duration: 100,
            forceRender: false,
            pathTimingFunction: Vivus$1.EASE_IN,
            animatedTime: 80
          };
          that.pola = new Vivus$1("logoSvgId", timingProps);
          clearInterval(intervalID);
        }
      }, 200);
    },
    resetPola() {
      let that = this;
      that.pola.play(-3);
      setTimeout(() => {
        that.pola.reset().play();
      }, 1e3);
    }
  }
});
const _withScopeId$5 = (n2) => (pushScopeId("data-v-1e239cdb"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$e = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { style: { "height": "152px" } }, null, -1));
const _hoisted_2$b = { class: "header-search-Box" };
const _hoisted_3$9 = { class: "header-centent" };
const _hoisted_4$6 = { class: "header-box_logo" };
const _hoisted_5$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "tinymce_color" }, "Tinymce", -1));
const _hoisted_6$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("path", {
  transform: "translate(868,2070) scale(2.1,2.1) rotate(180)",
  fill: "none",
  "fill-opacity": "null",
  "stroke-opacity": "null",
  "stroke-width": "16",
  stroke: "#335FFF",
  d: "m203.108398,645.3192c33.99355,0.20039 67.58717,28.4558 67.58717,69.63654c0,0 0.22086,11.0003 0.23698,24.09619l0.00048,2.53102c-0.0025,2.83556 -0.0155,5.74026 -0.04309,8.62832l-0.01835,1.73016c-0.12767,10.93632 -0.47796,21.38476 -1.27581,26.63907c-4.69911,31.46169 -28.19465,53.20432 -60.5885,58.71512c-29.19446,5.7112 -46.49118,9.01769 -52.09012,10.11985c-1.41149,0.29469 -5.65982,0.90142 -9.85524,1.35111l-0.83752,0.08771c-2.6445,0.27022 -5.1905,0.46491 -6.9039,0.46491c-35.59324,0 -67.88711,-26.65226 -68.38702,-69.63654l0.00088,-2.15162c0.00007,-0.10585 0.00014,-0.21526 0.00022,-0.32814l0.00086,-1.10755c0.00451,-5.18721 0.01936,-15.29461 0.06827,-25.59709l0.01191,-2.3788l0,0l0.00864,-1.58335c0.05803,-10.27482 0.15317,-20.13893 0.30914,-24.8672c1.19978,-31.3615 22.89566,-56.7112 64.18782,-64.82712l0.0598,-0.01163c1.94046,-0.37737 50.47261,-9.81564 52.53022,-10.20841c4.79909,-0.90176 10.09809,-1.30255 14.99716,-1.30255zm23.79548,36.57171l-79.98482,15.53045l0,31.2613l-31.99393,6.21218l0,77.95285l79.98482,-15.53046l0,-31.26129l31.99393,-6.21218l0,-77.95285zm-31.99393,37.47348l0,46.69155l-47.99089,9.31827l0,-46.69155l47.99089,-9.31827z"
}, null, -1));
const _hoisted_7$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("path", {
  id: "logoSvgBottom",
  fill: "#34435C",
  transform: "translate(-100,-100) scale(1.1,1.1)",
  "fill-opacity": "0.75",
  "stroke-opacity": "null",
  "stroke-width": "32",
  stroke: "#34435C",
  d: "M547.0208 823.650987L301.615787 681.970347V398.677333l245.405013-141.748906L792.41216 398.677333v283.293014z"
}, null, -1));
const _hoisted_8$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  "fill-opacity": "null",
  "stroke-opacity": "null",
  "stroke-width": "24",
  stroke: "#43B984",
  transform: "translate(-26,-36) scale(1.03,1.03)",
  d: "M782.595413 700.66176l-38.352213 22.1184a9.721173 9.721173 0 0 1-4.942507 1.365333 9.91232 9.91232 0 0 1-4.942506-18.445653l38.324906-22.145707a34.73408 34.73408 0 0 0 17.298774-29.969066v-281.258667a34.69312 34.69312 0 0 0-17.28512-29.928107l-243.698347-140.629333a34.638507 34.638507 0 0 0-34.583893 0L409.6 250.729813a46.789973 46.789973 0 0 1 2.402987 14.103894 47.786667 47.786667 0 1 1-12.151467-31.3344l84.650667-48.837974a54.613333 54.613333 0 0 1 54.381226 0l243.698347 140.629334a54.613333 54.613333 0 0 1 27.19744 47.076693v281.258667a54.504107 54.504107 0 0 1-27.183787 47.035733zM388.819627 251.849387a9.325227 9.325227 0 0 1-0.477867-0.873814 26.528427 26.528427 0 1 0 3.8912 13.871787 27.129173 27.129173 0 0 0-3.413333-12.997973z m350.467413 472.255146z m-105.417387-249.856c0-0.2048-0.12288-0.314027-0.12288-0.49152a9.079467 9.079467 0 0 1 2.49856-8.178346 8.533333 8.533333 0 0 1 3.76832-2.198187 8.833707 8.833707 0 0 1 9.161387 2.198187l48.16896 48.141653-3.467947 3.467947-57.01632 56.97536 1.59744-1.59744-13.653333-5.85728 55.391573-55.391574s-23.01952-23.497387-31.402666-31.402666c-3.085653-2.90816 5.802667 55.978667-47.14496 62.805333-28.808533 3.713707-54.463147-23.10144-55.00928-55.00928-0.65536-38.597973 51.6096-50.7904 47.14496-55.00928-23.688533-22.377813-55.00928-55.00928-55.00928-55.00928L397.312 519.099733l83.1488 78.52032-26.487467 26.46016a29.24544 29.24544 0 1 0 5.36576 5.69344h0.109227l26.70592-26.70592 52.578987 49.5616 86.016-86.016-7.468374 7.468374h19.510614l-99.669334 99.587413-51.336533-51.4048a9.106773 9.106773 0 0 0-15.428267 8.192c0 0.177493 0.095573 0.28672 0.095574 0.49152a4.696747 4.696747 0 0 0 0.77824 1.952427 39.594667 39.594667 0 1 1-23.552-23.770454 6.116693 6.116693 0 0 0 1.365333 0.505174 9.106773 9.106773 0 0 0 9.038507-15.209814l-77.4144-77.37344 65.672533-65.645226a9.106773 9.106773 0 0 0-8.27392-15.414614c-0.2048 0-0.28672 0.109227-0.49152 0.109227A4.724053 4.724053 0 0 0 435.541333 436.906667a39.594667 39.594667 0 1 1 23.784107-23.552 9.106773 9.106773 0 0 0 14.731947 10.349226l66.68288-66.64192 80.677546 80.636587a9.270613 9.270613 0 0 1 0 12.929707 9.106773 9.106773 0 0 1-9.024853 2.280106 4.096 4.096 0 0 1-1.365333-0.505173 39.471787 39.471787 0 0 0-41.7792 9.147733 39.594667 39.594667 0 1 0 65.37216 14.62272 5.188267 5.188267 0 0 1-0.764587-1.897813zM289.05472 320.279893l-38.352213 22.145707a34.69312 34.69312 0 0 0-17.230507 29.928107v281.258666a34.679467 34.679467 0 0 0 17.28512 29.914454l243.698347 140.629333a34.679467 34.679467 0 0 0 34.583893 0l84.759893-48.919893a46.803627 46.803627 0 0 1-2.389333-14.09024 47.786667 47.786667 0 1 1 12.151467 31.3344l-84.650667 48.837973a54.613333 54.613333 0 0 1-54.381227 0l-243.712-140.629333a54.490453 54.490453 0 0 1-27.19744-47.06304v-281.258667a54.613333 54.613333 0 0 1 27.19744-47.076693l38.324907-22.186667a9.898667 9.898667 0 1 1 9.91232 17.175893z m369.62304 468.309334a27.552427 27.552427 0 1 0-26.528427-27.470507 27.552427 27.552427 0 0 0 26.528427 27.52512z"
}, null, -1));
const _hoisted_9$5 = [
  _hoisted_6$6,
  _hoisted_7$6,
  _hoisted_8$5
];
const _hoisted_10$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("span", { class: "plugin_color" }, "Plugin", -1));
const _hoisted_11$4 = { class: "content" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_search_box = resolveComponent("search-box");
  const _component_TPNavBarTranslations = resolveComponent("TPNavBarTranslations");
  const _component_TPNavBarAppearance = resolveComponent("TPNavBarAppearance");
  const _component_TPNavBarSocialLinks = resolveComponent("TPNavBarSocialLinks");
  const _component_TPNavBarExtra = resolveComponent("TPNavBarExtra");
  const _component_TPNavBarHamburger = resolveComponent("TPNavBarHamburger");
  const _component_TPNavScreen = resolveComponent("TPNavScreen");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$e,
    createBaseVNode("div", {
      class: normalizeClass(["header-box", [_ctx.IsFixed ? "IsFixed" : "", _ctx.dWidth <= 750 ? "IsMobile" : ""]])
    }, [
      createBaseVNode("div", _hoisted_2$b, [
        createVNode(_component_search_box)
      ]),
      createBaseVNode("div", _hoisted_3$9, [
        createBaseVNode("h1", _hoisted_4$6, [
          _hoisted_5$6,
          createBaseVNode("span", {
            class: "header_logo",
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.resetPola && _ctx.resetPola(...args), ["stop"]))
          }, [
            (openBlock(), createElementBlock("svg", {
              class: "icon",
              id: "logoSvgId",
              viewBox: "0 0 1024 1024",
              style: normalizeStyle({ top: _ctx.polaTop + "px" }),
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5863",
              width: "120",
              height: "120"
            }, _hoisted_9$5, 4))
          ]),
          createBaseVNode("span", {
            class: "line",
            style: normalizeStyle({ width: 30 + _ctx.polaTop * 1.2 + "px" })
          }, "-", 4),
          _hoisted_10$5
        ]),
        createBaseVNode("div", _hoisted_11$4, [
          createVNode(_component_TPNavBarTranslations, { class: "translations" }),
          createVNode(_component_TPNavBarAppearance, { class: "assppearance" }),
          createVNode(_component_TPNavBarSocialLinks, { class: "social-links" }),
          createVNode(_component_TPNavBarExtra, { class: "extra" }),
          createVNode(_component_TPNavBarHamburger, {
            class: "hamburger",
            active: _ctx.isScreenOpen,
            onClick: _ctx.toggleScreen
          }, null, 8, ["active", "onClick"])
        ])
      ]),
      createVNode(_component_TPNavScreen, { open: _ctx.isScreenOpen }, null, 8, ["open"])
    ], 2)
  ], 64);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$b], ["__scopeId", "data-v-1e239cdb"]]);
var en = {
  "tp": {
    "editPage": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edit Page"]);
    },
    "editPageInGithub": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edit this page on GitHub"]);
    },
    "editPageInGitee": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edit this page on Gitee"]);
    },
    "upTime": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Update Time"]);
    },
    "editContributors": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Contributors"]);
    },
    "QandAarea": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mutual help Q & A area"]);
    },
    "codeCopySuccess": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Code copied successfully"]);
    }
  }
};
var __glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": en
}, Symbol.toStringTag, { value: "Module" }));
var zhCN = {
  "tp": {
    "editPage": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7F16\u8F91\u6B64\u9875"]);
    },
    "editPageInGithub": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Github\u4E0A\u7F16\u8F91\u6B64\u9875"]);
    },
    "editPageInGitee": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Gitee\u4E0A\u7F16\u8F91\u6B64\u9875"]);
    },
    "upTime": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u65B0\u65F6\u95F4"]);
    },
    "editContributors": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8D21\u732E\u8005"]);
    },
    "QandAarea": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E92\u52A9\u95EE\u7B54\u533A"]);
    },
    "codeCopySuccess": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4EE3\u7801\u590D\u5236\u6210\u529F"]);
    }
  }
};
var __glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zhCN
}, Symbol.toStringTag, { value: "Module" }));
class sessionStorageProxy {
  constructor(storageModel) {
    __publicField(this, "storage");
    this.storage = storageModel;
  }
  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    return JSON.parse(this.storage.getItem(key));
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}
class localStorageProxy extends sessionStorageProxy {
  constructor(localStorage2) {
    super(localStorage2);
  }
}
new sessionStorageProxy(sessionStorage);
const storageLocal = new localStorageProxy(localStorage);
function siphonI18n(prefix = "zh-CN") {
  return Object.fromEntries(Object.entries({ "../../locales/en.yaml": __glob_2_0, "../../locales/zh-CN.yaml": __glob_2_1 }).map(([key, value]) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1];
    return [matched, value.default];
  }))[prefix];
}
const localesConfigs = {
  zh: __spreadValues({}, siphonI18n("zh-CN")),
  en: __spreadValues({}, siphonI18n("en"))
};
function transformI18n(message = "", isI18n = true, argArray) {
  if (!message) {
    return "";
  }
  if (typeof message === "object") {
    const locale = i18n.global.locale;
    return message[locale == null ? void 0 : locale.value];
  }
  if (isI18n) {
    return i18n.global.t.call(i18n.global.locale, message, argArray);
  } else {
    return message;
  }
}
const i18n = createI18n({
  legacy: false,
  locale: (_b = (_a = storageLocal.getItem("responsive-locale")) == null ? void 0 : _a.locale) != null ? _b : "zh",
  fallbackLocale: "en",
  messages: localesConfigs
});
function useI18n(app2) {
  app2.use(i18n);
}
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
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module2, exports2) {
  (function(root, factory) {
    {
      module2.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress2 = {};
    NProgress2.version = "0.2.0";
    var Settings = NProgress2.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress2.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress2.status = null;
    NProgress2.set = function(n2) {
      var started = NProgress2.isStarted();
      n2 = clamp(n2, Settings.minimum, 1);
      NProgress2.status = n2 === 1 ? null : n2;
      var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress2.getPositioningCSS();
        css(bar, barPositionCSS(n2, speed, ease));
        if (n2 === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress2.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress2.isStarted = function() {
      return typeof NProgress2.status === "number";
    };
    NProgress2.start = function() {
      if (!NProgress2.status)
        NProgress2.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress2.status)
            return;
          NProgress2.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress2.done = function(force) {
      if (!force && !NProgress2.status)
        return this;
      return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress2.inc = function(amount) {
      var n2 = NProgress2.status;
      if (!n2) {
        return NProgress2.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
        }
        n2 = clamp(n2 + amount, 0, 0.994);
        return NProgress2.set(n2);
      }
    };
    NProgress2.trickle = function() {
      return NProgress2.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress2.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress2.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress2.done();
          } else {
            NProgress2.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress2.render = function(fromStart) {
      if (NProgress2.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress2.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress2.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress2.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n2, min, max) {
      if (n2 < min)
        return min;
      if (n2 > max)
        return max;
      return n2;
    }
    function toBarPerc(n2) {
      return (-1 + n2) * 100;
    }
    function barPositionCSS(n2, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n2) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n2) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n2) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn2 = pending.shift();
        if (fn2) {
          fn2(next);
        }
      }
      return function(fn2) {
        pending.push(fn2);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style2 = document.body.style;
        if (name in style2)
          return name;
        var i2 = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i2--) {
          vendorName = cssPrefixes[i2] + capName;
          if (vendorName in style2)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress2;
  });
})(nprogress$1);
var NProgress = nprogress$1.exports;
var nprogress = "";
const Examples = {
  template: '<div class="example w1300" ><router-view></router-view></div>'
};
let mode = { "routesSuffix": ".html" }.routesSuffix;
let redirectPage = "/introduction" + mode;
let routes = [
  {
    path: "/",
    name: "redirect",
    redirect: (to2) => {
      return { path: to2.query.redirect || redirectPage, query: Object.assign({}, to2.query, { redirect: void 0 }), hash: to2.hash };
    }
  },
  {
    path: "/supportandfeedback" + mode,
    name: "supportandfeedback",
    component: () => __vitePreload(() => import("./chunk/supportandfeedback.js"), true ? ["assets/chunk/supportandfeedback.js","assets/chunk/pinia.js","assets/chunk/vue.js"] : void 0),
    meta: {
      title: "\u652F\u6301\u4E0E\u53CD\u9988"
    }
  },
  {
    path: "/nextplan",
    name: "nextplan",
    component: Examples,
    meta: {
      title: "@next\u8BA1\u5212"
    },
    children: [
      {
        path: "info" + mode,
        name: "nextplainfo",
        meta: {
          title: "\u8BA1\u5212\u770B\u677F"
        },
        component: () => __vitePreload(() => import("./chunk/nextplan.js"), true ? ["assets/chunk/nextplan.js","assets/chunk/pinia.js","assets/chunk/vue.js"] : void 0)
      },
      {
        path: "demoall" + mode,
        name: "demoall",
        meta: {
          title: "@next Demo"
        },
        component: () => __vitePreload(() => import("./chunk/demoAll.js"), true ? ["assets/chunk/demoAll.js","assets/demoAll.css","assets/chunk/pinia.js","assets/chunk/vue.js","assets/chunk/tinymce.js","assets/chunk/tinymce-plugin-routes.js"] : void 0)
      },
      {
        path: "vuedemo" + mode,
        name: "vuedemo",
        meta: {
          title: "@next vueDemo"
        },
        component: () => __vitePreload(() => import("./chunk/index.js"), true ? ["assets/chunk/index.js","assets/index2.css","assets/chunk/tinymce.js","assets/chunk/plugin.min.js","assets/chunk/pinia.js","assets/chunk/vue.js","assets/chunk/tinymce-plugin-routes.js"] : void 0)
      }
    ]
  }
];
JSON.parse(JSON.stringify(routes));
const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior(to2, from, savedPosition) {
    if (to2.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            el: to2.hash,
            top: 210
          });
        }, to2.name !== from.name ? 500 : 100);
      });
    }
  }
});
router.beforeEach((to2, from, next) => {
  NProgress.start();
  next();
});
router.afterEach((to2, from) => {
  useStore().setPagePath(to2.name, to2.query, to2);
  NProgress.done();
});
var axios$2 = { exports: {} };
var bind$2 = function bind(fn2, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn2.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn2) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn2.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn2.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a2, b2, thisArg) {
  forEach(b2, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a2[key] = bind$1(val, thisArg);
    } else {
      a2[key] = val;
    }
  });
  return a2;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue2(v2) {
        if (utils$d.isDate(v2)) {
          v2 = v2.toISOString();
        } else if (utils$d.isObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        parts.push(encode(key) + "=" + encode(v2));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn2) {
  utils$c.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn2(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config2, code, request2, response) {
  error.config = config2;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config2, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config2, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i2;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i2 = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i2)).toLowerCase();
    val = utils$9.trim(line.substr(i2 + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config2.data;
    var requestHeaders = config2.headers;
    var responseType = config2.responseType;
    var onCanceled;
    function done() {
      if (config2.cancelToken) {
        config2.cancelToken.unsubscribe(onCanceled);
      }
      if (config2.signal) {
        config2.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config2.baseURL, config2.url);
    request2.open(config2.method.toUpperCase(), buildURL$1(fullPath, config2.params, config2.paramsSerializer), true);
    request2.timeout = config2.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config2, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config2, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
      var transitional2 = config2.transitional || defaults$4.transitional;
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config2, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config2.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config2.withCredentials)) {
      request2.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request2.addEventListener("progress", config2.onDownloadProgress);
    }
    if (typeof config2.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config2.onUploadProgress);
    }
    if (config2.cancelToken || config2.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
      if (config2.signal) {
        config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw enhanceError2(e2, this, "E_JSON_PARSE");
          }
          throw e2;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn2) {
    data2 = fn2.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData2.call(config2, config2.data, config2.headers, config2.transformRequest);
  config2.headers = utils$4.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config2.headers[method];
  });
  var adapter = config2.adapter || defaults$1.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData2.call(config2, response.data, response.headers, config2.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config2, reason.response.data, reason.response.headers, config2.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
};
var data = {
  "version": "0.24.0"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")));
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config2) {
  if (typeof config2 === "string") {
    config2 = arguments[1] || {};
    config2.url = arguments[0];
  } else {
    config2 = config2 || {};
  }
  config2 = mergeConfig$1(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional2 = config2.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$1(this.defaults, config2);
  return buildURL2(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i2;
    var l2 = token._listeners.length;
    for (i2 = 0; i2 < l2; i2++) {
      token._listeners[i2](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c2) {
    cancel = c2;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils$1 = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig2) {
  var context = new Axios(defaultConfig2);
  var instance = bind2(Axios.prototype.request, context);
  utils$1.extend(instance, Axios.prototype, context);
  utils$1.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig2, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
const defaultConfig = {
  baseURL: "",
  timeout: 6e4,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
};
function excludeProps(origin, prop) {
  return Object.keys(origin).filter((key) => !prop.includes(key)).reduce((res, key) => {
    res[key] = origin[key];
    return res;
  }, {});
}
function transformConfigByMethod(params, config2) {
  const { method } = config2;
  const props = ["delete", "get", "head", "options"].includes(method.toLocaleLowerCase()) ? "params" : "data";
  return __spreadProps(__spreadValues({}, config2), {
    [props]: params
  });
}
function genConfig(config2) {
  if (!config2) {
    return defaultConfig;
  }
  const { headers } = config2;
  if (headers && typeof headers === "object") {
    defaultConfig.headers = __spreadValues(__spreadValues({}, defaultConfig.headers), headers);
  }
  return __spreadValues(__spreadValues({}, excludeProps(config2, "headers")), defaultConfig);
}
const _EnclosureHttp = class {
  constructor() {
    __publicField(this, "CancelToken", axios.CancelToken);
    __publicField(this, "sourceTokenList", []);
    __publicField(this, "currentCancelTokenKey", "");
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  get cancelTokenList() {
    return this.sourceTokenList;
  }
  set cancelTokenList(value) {
    throw new Error("cancelTokenList\u4E0D\u5141\u8BB8\u8D4B\u503C");
  }
  static genUniqueKey(config2) {
    let _data = config2.data;
    if (/GET/i.test(config2.method + ""))
      _data = config2.params;
    return `${config2.url + "" + Math.round(Math.random() * 100)}--${JSON.stringify(_data)}`;
  }
  cancelRepeatRequest() {
    const temp = {};
    this.sourceTokenList = this.sourceTokenList.reduce((res, cancelToken) => {
      const { cancelKey, cancelExecutor } = cancelToken;
      if (!temp[cancelKey]) {
        temp[cancelKey] = true;
        res.push(cancelToken);
      } else {
        cancelExecutor();
      }
      return res;
    }, []);
  }
  deleteCancelTokenByCancelKey(cancelKey) {
    this.sourceTokenList = this.sourceTokenList.length < 1 ? this.sourceTokenList.filter((cancelToken) => cancelToken.cancelKey !== cancelKey) : [];
  }
  httpInterceptorsRequest() {
    _EnclosureHttp.axiosInstance.interceptors.request.use((config2) => {
      const $config = config2;
      const cancelKey = _EnclosureHttp.genUniqueKey($config);
      $config.cancelToken = new this.CancelToken((cancelExecutor) => {
        this.sourceTokenList.push({ cancelKey, cancelExecutor });
      });
      this.cancelRepeatRequest();
      this.currentCancelTokenKey = cancelKey;
      if (typeof config2.beforeRequestCallback === "function") {
        config2.beforeRequestCallback($config);
        return $config;
      }
      if (_EnclosureHttp.initConfig.beforeRequestCallback) {
        _EnclosureHttp.initConfig.beforeRequestCallback($config);
        return $config;
      }
      return $config;
    }, (error) => {
      return Promise.reject(error);
    });
  }
  clearCancelTokenList() {
    this.sourceTokenList.length = 0;
  }
  httpInterceptorsResponse() {
    const instance = _EnclosureHttp.axiosInstance;
    instance.interceptors.response.use((response) => {
      const $config = response.config;
      const cancelKey = _EnclosureHttp.genUniqueKey($config);
      this.deleteCancelTokenByCancelKey(cancelKey);
      if (typeof $config.beforeResponseCallback === "function") {
        $config.beforeResponseCallback(response);
        return response.data;
      }
      if (_EnclosureHttp.initConfig.beforeResponseCallback) {
        _EnclosureHttp.initConfig.beforeResponseCallback(response);
        return response.data;
      }
      return response.data;
    }, (error) => {
      const $error = error;
      if (this.currentCancelTokenKey) {
        const haskey = this.sourceTokenList.filter((cancelToken) => cancelToken.cancelKey === this.currentCancelTokenKey).length;
        if (haskey) {
          this.sourceTokenList = this.sourceTokenList.filter((cancelToken) => cancelToken.cancelKey !== this.currentCancelTokenKey);
          this.currentCancelTokenKey = "";
        }
      }
      $error.isCancelRequest = axios.isCancel($error);
      return Promise.reject($error);
    });
  }
  request(method, url, param, axiosConfig) {
    const config2 = transformConfigByMethod(param, __spreadValues({
      method,
      url
    }, axiosConfig));
    return new Promise((resolve, reject) => {
      _EnclosureHttp.axiosInstance.request(config2).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  post(url, params, config2) {
    return this.request("post", url, params, config2);
  }
  get(url, params, config2) {
    return this.request("get", url, params, config2);
  }
};
let EnclosureHttp = _EnclosureHttp;
__publicField(EnclosureHttp, "initConfig", {});
__publicField(EnclosureHttp, "axiosInstance", axios.create(genConfig()));
__publicField(EnclosureHttp, "EnclosureHttpInstance");
const http = new EnclosureHttp();
const GlobalApi = {
  github: {
    api: "https://api.github.com",
    org: "tinymce-plugin"
  },
  gitee: {
    api: "https://api.github.com",
    org: "tinymce-plugin"
  },
  jsdelivrApi: "https://cdn.jsdelivr.net/gh/tinymce-plugin"
};
var api = {
  async getRepos() {
    const resData = await http.request("get", `${GlobalApi.github.api}/orgs/${GlobalApi.github.org}/repos?org=org&type=public&page=1&per_page=100`);
    return resData;
  },
  async getRepo(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}`);
    return resData;
  },
  async getContributors(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/contributors?page=1&per_page=100`);
    return resData;
  },
  async getTags(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/tags`);
    return resData;
  },
  async getTopics(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/topics`);
    return resData;
  },
  async getPages(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/pages`);
    return resData;
  },
  async getCommitsList(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/commits?page=1&per_page=100`);
    return resData;
  },
  async getIssues(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/issues?page=1&per_page=100`);
    return resData;
  },
  async getViews(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/traffic/views`);
    return resData;
  },
  async getReleases(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/releases`);
    return resData;
  },
  async getReleasesLatest(repo) {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/releases/latest`);
    return resData;
  },
  async getContributorsList(repo, path) {
    const resData = await http.request("get", `https://github.com/${GlobalApi.github.org}/${repo}/contributors-list/main/${path}`);
    return resData;
  },
  async getContents(repo, path = "") {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/contents/${path}`);
    return resData;
  },
  async getTrees(repo, path = "") {
    const resData = await http.request("get", `${GlobalApi.github.api}/repos/${GlobalApi.github.org}/${repo}/git/trees/${path}`);
    return resData;
  }
};
const useGithubStore = defineStore({
  id: "githubApi",
  state: () => ({}),
  actions: __spreadValues({
    async getSiteMap() {
      const resData = await http.request("get", `/siteMap.json`);
      return resData || {};
    }
  }, api)
});
const useStore = defineStore({
  id: "store",
  state: () => ({
    pagePath: "index",
    pageRoute: [],
    language: "zh",
    menuList: [],
    pagesObj: { "_pagesPrev": {} },
    siteMap: {},
    openMenu: false,
    completeMenu: false
  }),
  actions: {
    async initRouter() {
      let that = this;
      let githubStore = useGithubStore();
      const siteMap = await githubStore.getSiteMap();
      that.siteMap = siteMap.siteMap;
      window.__PRERENDER_ROUTES__ = router.getRoutes();
      let pagesPrev = "_pagesPrev";
      siteMap.routes.forEach((ele) => {
        that.menuList.push(ele);
      });
      routes.forEach((ele) => {
        ele.name != "redirect" && that.menuList.push(ele);
      });
      JSON.parse(JSON.stringify(that.menuList)).forEach((ele) => {
        if (ele.children) {
          ele.children.forEach((e2) => {
            if (e2.children && e2.children.length > 0) {
              e2.children.forEach((e22) => {
                e22.path = ele.path + "/" + e2.path.replace("/", "") + "/" + e22.path.replace("/", "");
                that.pagesObj[pagesPrev]["pagesNext"] = e22.name;
                e22.pagesPrev = pagesPrev;
                pagesPrev = e22.name;
                that.pagesObj[e22.name] = e22;
              });
            } else {
              e2.path = ele.path + "/" + e2.path.replace("/", "");
              that.pagesObj[pagesPrev]["pagesNext"] = e2.name;
              e2.pagesPrev = pagesPrev;
              pagesPrev = e2.name;
              that.pagesObj[e2.name] = e2;
            }
          });
        } else {
          that.pagesObj[pagesPrev]["pagesNext"] = ele.name;
          ele.pagesPrev = pagesPrev;
          that.pagesObj[ele.name] = ele;
          pagesPrev = ele.name;
        }
      });
      setTimeout(() => {
        that.completeMenu = true;
      }, 300);
    },
    initStore() {
      this.initRouter();
    },
    setPagePath(routePath, query, obj) {
      let that = this;
      that.pagePath = routePath;
      that.pageRoute = obj;
    },
    getPagePath(resObj) {
      let that = this;
      that.isShow = toRef(resObj, "value");
    },
    chanageLanguage(lang) {
      this.$patch({
        language: lang
      });
    }
  }
});
var Sidebar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = defineComponent({
  name: "Sidebar",
  data() {
    return {
      sidebarList: []
    };
  },
  setup() {
    const store = useStore();
    const seletcIdx = ref(0);
    const outLinkQABox = ref();
    const seletIdx = computed(() => {
      let _idx = 0;
      store.menuList.some((ele, idx) => {
        var _a2;
        if (store.pageRoute && store.pageRoute.matched && ele.path === ((_a2 = store.pageRoute.matched[0]) == null ? void 0 : _a2.path)) {
          if (store.pageRoute.matched.length > 1) {
            ele.children.some((cEle, cIdx) => {
              if (ele.path + "/" + cEle.path === store.pageRoute.matched[1].path) {
                seletcIdx.value = cIdx;
                return true;
              }
            });
          }
          _idx = idx;
          return true;
        }
        return false;
      });
      return _idx;
    });
    const closeOpen = () => {
      outLinkQABox.value.clickCloseFn();
    };
    return {
      store,
      seletIdx,
      seletcIdx,
      closeOpen,
      transformI18n
    };
  }
});
const _withScopeId$4 = (n2) => (pushScopeId("data-v-4c80fadd"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$d = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "top-bage" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "Sponsor" }, [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://github.com/Five-great",
      title: "Sponsor Li Haolong"
    }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: "https://avatars.githubusercontent.com/u/43601963?s=60&amp;v=4",
        alt: ""
      })
    ])
  ])
], -1));
const _hoisted_2$a = { class: "sidebar-ul" };
const _hoisted_3$8 = ["data-ison"];
const _hoisted_4$5 = { key: 0 };
const _hoisted_5$5 = { class: "sidebar-cUl" };
const _hoisted_6$5 = ["data-ison"];
const _hoisted_7$5 = { key: 0 };
const _hoisted_8$4 = { class: "sidebar-ccUl" };
const _hoisted_9$4 = { class: "sidebar-li outline outlink" };
const _hoisted_10$4 = { class: "sidebar-title" };
const _hoisted_11$3 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon outbound icon",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "20",
  height: "20",
  "data-v-1501f284": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1));
const _hoisted_12$1 = { class: "edit-page_box" };
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", {
  height: "128",
  "aria-hidden": "true",
  viewBox: "0 0 16 16",
  version: "1.1",
  width: "128",
  "data-view-component": "true",
  class: "octicon octicon-mark-github v-align-middle"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
  })
], -1));
const _hoisted_14$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_16$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon outbound icon",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15",
  "data-v-1501f284": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1));
const _hoisted_17$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1648028102473",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2405",
  width: "128",
  height: "128"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z",
    fill: "#C71D23"
  })
], -1));
const _hoisted_18$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_19$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_20$1 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon outbound icon",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15",
  "data-v-1501f284": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1));
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _a2;
  const _component_router_link = resolveComponent("router-link");
  const _component_modalBox = resolveComponent("modalBox");
  return ((_a2 = _ctx.store.menuList) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "sidebar-Box",
    onClick: _cache[2] || (_cache[2] = withModifiers(() => {
    }, ["stop"]))
  }, [
    _hoisted_1$d,
    createBaseVNode("ul", _hoisted_2$a, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.store.menuList, (item, index) => {
        return openBlock(), createElementBlock("li", {
          key: index,
          class: "sidebar-li",
          "data-ison": _ctx.seletIdx === index ? true : false
        }, [
          item.children && item.children.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4$5, [
            createVNode(_component_router_link, {
              to: item.path + "/" + item.children[0].path,
              class: "sidebar-title"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString$1(item.meta ? item.meta.title : item.name), 1)
              ]),
              _: 2
            }, 1032, ["to"]),
            createBaseVNode("ul", _hoisted_5$5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (cItem, cIndex) => {
                return openBlock(), createElementBlock("li", {
                  key: cIndex,
                  class: "sidebar-cLi",
                  "data-ison": _ctx.seletcIdx === cIndex ? true : false
                }, [
                  cItem.children && cItem.children.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$5, [
                    createVNode(_component_router_link, {
                      to: item.path + "/" + cItem.path + "/" + cItem.children[0].path,
                      class: "sidebar-cTitle"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", null, toDisplayString$1(cItem.meta ? cItem.meta.title : cItem.name), 1),
                        createBaseVNode("em", null, toDisplayString$1(cItem.meta && cItem.meta.pluginName ? " | " + cItem.meta.pluginName : ""), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createBaseVNode("ul", _hoisted_8$4, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(cItem.children, (ccItem, ccIndex) => {
                        return openBlock(), createElementBlock("li", {
                          key: ccIndex,
                          class: "sidebar-ccLi"
                        }, [
                          createVNode(_component_router_link, {
                            to: item.path + "/" + cItem.path + "/" + ccItem.path,
                            class: "sidebar-ccTitle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString$1(ccItem.meta ? ccItem.meta.title : ccItem.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]);
                      }), 128))
                    ])
                  ])) : (openBlock(), createBlock(_component_router_link, {
                    key: 1,
                    to: item.path + "/" + cItem.path,
                    class: "sidebar-cTitle"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", null, toDisplayString$1(cItem.meta ? cItem.meta.title : cItem.name), 1),
                      createBaseVNode("em", null, toDisplayString$1(cItem.meta && cItem.meta.pluginName ? " | " + cItem.meta.pluginName : ""), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]))
                ], 8, _hoisted_6$5);
              }), 128))
            ])
          ])) : (openBlock(), createBlock(_component_router_link, {
            key: 1,
            class: "sidebar-title",
            to: item.path
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString$1(item.meta ? item.meta.title : item.name), 1)
            ]),
            _: 2
          }, 1032, ["to"]))
        ], 8, _hoisted_3$8);
      }), 128)),
      createBaseVNode("li", _hoisted_9$4, [
        createVNode(_component_modalBox, {
          ref: "outLinkQABox",
          title: "\u4E92\u52A9\u95EE\u7B54\u533A"
        }, {
          show: withCtx(() => [
            createBaseVNode("div", _hoisted_10$4, [
              createBaseVNode("span", null, toDisplayString$1(_ctx.transformI18n("tp.QandAarea")), 1),
              _hoisted_11$3
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("a", {
                href: "https://github.com/tinymce-plugin/tinymce-plugin.github.io/discussions/categories/q-a",
                target: "_blank",
                onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.closeOpen && _ctx.closeOpen(...args), ["stop"]))
              }, [
                _hoisted_13$1,
                _hoisted_14$1,
                _hoisted_15$1,
                createBaseVNode("span", null, "Github" + toDisplayString$1(_ctx.transformI18n("tp.QandAarea")), 1),
                _hoisted_16$1
              ]),
              createBaseVNode("a", {
                href: "https://gitee.com/tinymce-plugin/tinymce-plugin/issues",
                target: "_blank",
                onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.closeOpen && _ctx.closeOpen(...args), ["stop"]))
              }, [
                _hoisted_17$1,
                _hoisted_18$1,
                _hoisted_19$1,
                createBaseVNode("span", null, "Gitee" + toDisplayString$1(_ctx.transformI18n("tp.QandAarea")), 1),
                _hoisted_20$1
              ])
            ])
          ]),
          _: 1
        }, 512)
      ])
    ])
  ])) : createCommentVNode("", true);
}
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$a], ["__scopeId", "data-v-4c80fadd"]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$c = defineComponent({
  components: { Header, Sidebar },
  data() {
    return {
      _resize: document.documentElement.clientWidth,
      showToc: false
    };
  },
  name: "App",
  created() {
    window.addEventListener("resize", this.resizeFun, false);
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event("render-event"));
    });
    const instance = getCurrentInstance().appContext.config.globalProperties.$storage;
    let store = useStore();
    store.initStore();
    provide("store", ref(store));
    return {
      store,
      instance
    };
  },
  methods: {
    resizeFun(e2) {
      this._resize = document.documentElement.clientWidth;
    },
    closeMenu() {
      this._resize < 959 ? this.store.openMenu = false : "";
    },
    listenerFun(e2) {
      if (/fv-hljs/.test(e2.target.className)) {
        let input = document.getElementById("inputCopy");
        input.value = e2.target.children[0].tagName === "CODE" ? e2.target.children[0].innerText : e2.target.children[1].innerText;
        input.select();
        document.execCommand("copy");
        this.showTips(transformI18n("tp.codeCopySuccess"), "ok", 60, 3);
      }
    },
    showTips(content, message, height, time) {
      let docTips = document.getElementById("tips");
      docTips.innerHTML = '<div class="tipsClass ' + message + '"><i></i>' + content + "</div>";
      this._resize < 750 ? height = height / 100 + "rem" : height = height + "px";
      docTips.children[0].style.top = height;
      docTips.children[0].style.display = "block";
      setTimeout(function() {
        docTips.children[0].style.display = "none";
      }, time * 1e3);
    }
  },
  destroy() {
    window.removeEventListener("resize", this.resizeFun);
  }
});
const _hoisted_1$c = /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon",
  t: "1628149369842",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4051",
  width: "30",
  height: "30"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M789.12 210.56H42.88a35.2 35.2 0 0 1-35.2-35.2 35.2 35.2 0 0 1 35.2-34.56h746.24a34.56 34.56 0 0 1 35.2 34.56 35.2 35.2 0 0 1-35.2 35.2zM981.12 544.64H42.88a35.2 35.2 0 1 1 0-69.76h938.24a35.2 35.2 0 1 1 0 69.76zM981.12 878.72H42.88a35.2 35.2 0 0 1-35.2-34.56 35.2 35.2 0 0 1 35.2-35.2h938.24a35.2 35.2 0 0 1 35.2 35.2 35.2 35.2 0 0 1-35.2 34.56z",
    "p-id": "4052"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M949.12 175.36m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z",
    "p-id": "4053"
  })
], -1);
const _hoisted_2$9 = [
  _hoisted_1$c
];
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("div", { id: "nav-right" }, [
  /* @__PURE__ */ createBaseVNode("div", { id: "repos" }),
  /* @__PURE__ */ createBaseVNode("div", { id: "fv-tocBox" })
], -1);
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _a2;
  const _component_Header = resolveComponent("Header");
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["appBox", ((_a2 = _ctx.instance) == null ? void 0 : _a2.locale) && _ctx.instance.locale.locale ? _ctx.instance.locale.locale : ""]),
    onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.closeMenu && _ctx.closeMenu(...args), ["stop"]))
  }, [
    createVNode(_component_Header, { dWidth: _ctx._resize }, null, 8, ["dWidth"]),
    createBaseVNode("div", {
      class: "menu_icon",
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.store.openMenu = !_ctx.store.openMenu, ["stop"]))
    }, _hoisted_2$9),
    createBaseVNode("aside", {
      class: normalizeClass([_ctx.store.openMenu ? "openMenu" : ""]),
      style: normalizeStyle({ transform: `translateX(${_ctx.store.completeMenu ? "0" : "-100%"})` })
    }, [
      createVNode(_component_Sidebar)
    ], 6),
    createBaseVNode("div", {
      id: "main-box",
      class: normalizeClass(_ctx.showToc ? "" : "noshow")
    }, [
      createBaseVNode("main", {
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.listenerFun && _ctx.listenerFun(...args))
      }, [
        createVNode(_component_router_view)
      ]),
      _hoisted_3$7
    ], 2)
  ], 2);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9]]);
var Preview_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = defineComponent({
  name: "Preview",
  props: {
    source: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots, attrs }) {
    const codeRef = ref();
    const state = reactive({
      codeHeight: 0
    });
    const versionVal = version;
    const slotDescription = slots.description ? true : false;
    const toggleCode = () => {
      var _a2;
      if (state.codeHeight === 0) {
        state.codeHeight = ((_a2 = codeRef.value) == null ? void 0 : _a2.offsetHeight) || 0;
      } else {
        state.codeHeight = 0;
      }
    };
    return {
      toggleCode,
      slots,
      state,
      codeRef,
      slotDescription,
      versionVal
    };
  }
});
const _withScopeId$3 = (n2) => (pushScopeId("data-v-77bfd898"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$b = { class: "preview demo-block" };
const _hoisted_2$8 = { class: "topBox" };
const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: "https://cn.vuejs.org/images/logo.svg",
  alt: ""
}, null, -1));
const _hoisted_4$4 = { class: "text" };
const _hoisted_5$4 = /* @__PURE__ */ createTextVNode("V");
const _hoisted_6$4 = { class: "preview__card" };
const _hoisted_7$4 = { class: "preview__demo source" };
const _hoisted_8$3 = {
  ref: "codeRef",
  class: "preview__coderef"
};
const _hoisted_9$3 = {
  key: 0,
  class: "preview__description description"
};
const _hoisted_10$3 = ["innerHTML"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createBaseVNode("div", _hoisted_2$8, [
      _hoisted_3$6,
      createBaseVNode("p", _hoisted_4$4, [
        _hoisted_5$4,
        createBaseVNode("span", null, toDisplayString$1(_ctx.versionVal), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_6$4, [
      createBaseVNode("div", _hoisted_7$4, [
        createBaseVNode("div", null, [
          renderSlot(_ctx.$slots, "demo1", {}, void 0, true)
        ]),
        createBaseVNode("div", null, [
          renderSlot(_ctx.$slots, "demo", {}, void 0, true)
        ])
      ]),
      createBaseVNode("div", {
        style: normalizeStyle({ height: `${_ctx.state.codeHeight}px` }),
        class: "preview__code meta"
      }, [
        createBaseVNode("div", {
          class: "preview__footer demo-block-control",
          style: { "height": "24px" },
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
        }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1),
        createBaseVNode("div", _hoisted_8$3, [
          _ctx.slotDescription ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
            renderSlot(_ctx.$slots, "description", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "preview__coder highlight",
            innerHTML: _ctx.source
          }, null, 8, _hoisted_10$3)
        ], 512)
      ], 4),
      createBaseVNode("div", {
        class: "preview__footer demo-block-control",
        onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
      }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1)
    ])
  ]);
}
var Preview = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$8], ["__scopeId", "data-v-77bfd898"]]);
var PreviewVue2_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = defineComponent({
  name: "PreviewVue2",
  props: {
    source: {
      type: String,
      default: ""
    },
    template: {
      type: String,
      default: ""
    },
    demoID: {
      type: String,
      default: "demoVue2" + new Date().getTime() + Math.round(Math.random() * 10)
    },
    versionVal: {
      type: String,
      default: "2.6.14"
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let TinymceVue2 = Vue2.component("TinymceVue", {
        props: {
          value: {
            type: [String, Number],
            default: "dsd"
          },
          show: {
            type: Boolean,
            default: false
          },
          init: {
            type: Object,
            default: {}
          }
        },
        data() {
          return {
            tinymceID: "tinymce-" + new Date().getTime() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
            tinymceTimerID: null,
            tinymce_width: "100%",
            tinymce_height: 200,
            tinymce_loading: "loading",
            editorFn: ""
          };
        },
        created() {
          setTimeout(() => {
            if (typeof tinymce === "undefined") {
              clearInterval(this.tinymceTimerID);
              throw new Error("tinymce undefined");
            }
          }, 3e3);
          this.tinymceTimerID = setInterval(() => {
            if (typeof tinymce !== "undefined" && tp$State) {
              this.ceateInit(JSON.stringify({
                base_url: "/tinymce",
                language: "zh_CN",
                schema: "html5",
                plugins: "code hr",
                table_default_attributes: {
                  "border": "1"
                },
                table_default_styles: {
                  "border-collapse": "collapse",
                  "width": "100%"
                },
                table_header_type: "sectionCells",
                table_responsive_width: true,
                skeletonScreen: true,
                file_picker_types: "file img media",
                fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px"
              }));
              clearInterval(this.tinymceTimerID);
            }
          }, 50);
        },
        methods: {
          importantFn() {
            this.editor.execCommand("mceImportword");
          },
          xhrOnProgress(fun) {
            this.xhrOnProgress.onprogress = fun;
            return function() {
              var xhr2 = this.createXHR();
              if (typeof xhrOnProgress.onprogress !== "function")
                return xhr2;
              if (xhrOnProgress.onprogress && xhr2.upload) {
                xhr2.upload.onprogress = xhrOnProgress.onprogress;
              }
              return xhr2;
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
          ceateInit(defaultOpt) {
            let that = this;
            let defaultOptions = JSON.parse(defaultOpt);
            defaultOptions.selector = "#" + that.tinymceID;
            defaultOptions.setup = (editor) => {
              that.editorFn = editor;
              editor.on("init", () => {
                editor.setTpContent(that.value);
                tinymce.activeEditor.setProgressState(false, 50);
              });
              editor.on("input NodeChange", () => {
                that.$emit("input", editor.getTpContent());
              });
            };
            Object.assign(defaultOptions, this.init || {});
            that.tinymce_height = defaultOptions.min_height;
            tinymce.init(defaultOptions);
          }
        },
        template: `
                    <div>
                      <div class="tinymceVue">
                        <div :id="tinymceID"></div>
                    </div>
                  </div>
                `
      });
      let sourceCode = this.$parent.sourceCode();
      !sourceCode.components ? sourceCode.components = {} : "";
      sourceCode.components["TinymceVue"] = TinymceVue2;
      let Vue2Demo = new Vue2(__spreadValues({
        template: this.template
      }, sourceCode));
      setTimeout(() => {
        Vue2Demo.$mount("#" + this.demoID);
      }, 0);
    }
  },
  setup(props, { slots, attrs }) {
    const codeRef = ref();
    const demoVueRef = ref();
    const state = reactive({
      codeHeight: 0
    });
    const slotDescription = slots.description ? true : false;
    const toggleCode = () => {
      var _a2;
      if (state.codeHeight === 0) {
        state.codeHeight = ((_a2 = codeRef.value) == null ? void 0 : _a2.offsetHeight) || 0;
      } else {
        state.codeHeight = 0;
      }
    };
    return {
      toggleCode,
      slots,
      state,
      codeRef,
      demoVueRef,
      slotDescription
    };
  }
});
const _withScopeId$2 = (n2) => (pushScopeId("data-v-2b0c5204"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$a = { class: "preview vue2 demo-block" };
const _hoisted_2$7 = { class: "topBox" };
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: "https://v3.cn.vuejs.org/logo.png",
  alt: ""
}, null, -1));
const _hoisted_4$3 = { class: "text" };
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode("V");
const _hoisted_6$3 = { class: "preview__card" };
const _hoisted_7$3 = { class: "preview__demo source" };
const _hoisted_8$2 = ["id"];
const _hoisted_9$2 = {
  ref: "codeRef",
  class: "preview__coderef"
};
const _hoisted_10$2 = {
  key: 0,
  class: "preview__description description"
};
const _hoisted_11$2 = ["innerHTML"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    createBaseVNode("div", _hoisted_2$7, [
      _hoisted_3$5,
      createBaseVNode("p", _hoisted_4$3, [
        _hoisted_5$3,
        createBaseVNode("span", null, toDisplayString$1(_ctx.versionVal || "2.6.14"), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_6$3, [
      createBaseVNode("div", _hoisted_7$3, [
        createBaseVNode("div", { id: _ctx.demoID }, null, 8, _hoisted_8$2)
      ]),
      createBaseVNode("div", {
        style: normalizeStyle({ height: `${_ctx.state.codeHeight}px` }),
        class: "preview__code meta"
      }, [
        createBaseVNode("div", {
          class: "preview__footer demo-block-control",
          style: { "height": "24px" },
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
        }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1),
        createBaseVNode("div", _hoisted_9$2, [
          _ctx.slotDescription ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
            renderSlot(_ctx.$slots, "description", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "preview__coder highlight",
            innerHTML: _ctx.source
          }, null, 8, _hoisted_11$2)
        ], 512)
      ], 4),
      createBaseVNode("div", {
        class: "preview__footer demo-block-control",
        onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
      }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1)
    ])
  ]);
}
var PreviewVue2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$7], ["__scopeId", "data-v-2b0c5204"]]);
var PreviewReact_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = defineComponent({
  name: "PreviewReact",
  props: {
    source: {
      type: String,
      default: ""
    },
    idx: {
      type: String,
      default: "demo0"
    },
    template: {
      type: String,
      default: ""
    },
    demoID: {
      type: String,
      default: "demoReact" + new Date().getTime()
    },
    versionVal: {
      type: String,
      default: "17.0.2"
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.$parent.sourceCode(document.getElementById("" + this.demoID + "_" + this.idx));
      }, 10);
    }
  },
  setup(props, { slots, attrs }) {
    const codeRef = ref();
    const demoVueRef = ref();
    const state = reactive({
      codeHeight: 0
    });
    const slotDescription = slots.description ? true : false;
    const toggleCode = () => {
      var _a2;
      if (state.codeHeight === 0) {
        state.codeHeight = ((_a2 = codeRef.value) == null ? void 0 : _a2.offsetHeight) || 0;
      } else {
        state.codeHeight = 0;
      }
    };
    return {
      toggleCode,
      slots,
      state,
      codeRef,
      demoVueRef,
      slotDescription
    };
  }
});
const _withScopeId$1 = (n2) => (pushScopeId("data-v-05e85e30"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$9 = { class: "preview react demo-block" };
const _hoisted_2$6 = { class: "topBox" };
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
  alt: ""
}, null, -1));
const _hoisted_4$2 = { class: "text" };
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode("V");
const _hoisted_6$2 = { class: "preview__card" };
const _hoisted_7$2 = { class: "preview__demo source" };
const _hoisted_8$1 = ["id"];
const _hoisted_9$1 = {
  ref: "codeRef",
  class: "preview__coderef"
};
const _hoisted_10$1 = {
  key: 0,
  class: "preview__description description"
};
const _hoisted_11$1 = ["innerHTML"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createBaseVNode("div", _hoisted_2$6, [
      _hoisted_3$4,
      createBaseVNode("p", _hoisted_4$2, [
        _hoisted_5$2,
        createBaseVNode("span", null, toDisplayString$1(_ctx.versionVal || "17.0.2"), 1)
      ])
    ]),
    createBaseVNode("div", _hoisted_6$2, [
      createBaseVNode("div", _hoisted_7$2, [
        createBaseVNode("div", {
          id: _ctx.demoID + "_" + _ctx.idx
        }, null, 8, _hoisted_8$1)
      ]),
      createBaseVNode("div", {
        style: normalizeStyle({ height: `${_ctx.state.codeHeight}px` }),
        class: "preview__code meta"
      }, [
        createBaseVNode("div", {
          class: "preview__footer demo-block-control",
          style: { "height": "24px" },
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
        }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1),
        createBaseVNode("div", _hoisted_9$1, [
          _ctx.slotDescription ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
            renderSlot(_ctx.$slots, "description", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "preview__coder highlight",
            innerHTML: _ctx.source
          }, null, 8, _hoisted_11$1)
        ], 512)
      ], 4),
      createBaseVNode("div", {
        class: "preview__footer demo-block-control",
        onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
      }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1)
    ])
  ]);
}
var PreviewReact = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$6], ["__scopeId", "data-v-05e85e30"]]);
var PreviewIframe_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = defineComponent({
  name: "PreviewIframe",
  props: {
    source: {
      type: String,
      default: ""
    },
    sourceCode: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots, attrs }) {
    const codeRef = ref();
    const state = reactive({
      codeHeight: 0
    });
    const versionVal = version;
    const slotDescription = slots.description ? true : false;
    const toggleCode = () => {
      var _a2;
      if (state.codeHeight === 0) {
        state.codeHeight = ((_a2 = codeRef.value) == null ? void 0 : _a2.offsetHeight) || 0;
      } else {
        state.codeHeight = 0;
      }
    };
    return {
      toggleCode,
      slots,
      state,
      codeRef,
      slotDescription,
      versionVal
    };
  }
});
const _hoisted_1$8 = { class: "preview iframe demo-block" };
const _hoisted_2$5 = { class: "preview__card" };
const _hoisted_3$3 = { class: "preview__demo source" };
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5$1 = {
  ref: "codeRef",
  class: "preview__coderef"
};
const _hoisted_6$1 = {
  key: 0,
  class: "preview__description description"
};
const _hoisted_7$1 = ["innerHTML"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", _hoisted_2$5, [
      createBaseVNode("div", _hoisted_3$3, [
        createBaseVNode("div", { innerHTML: _ctx.sourceCode }, null, 8, _hoisted_4$1)
      ]),
      createBaseVNode("div", {
        style: normalizeStyle({ height: `${_ctx.state.codeHeight}px` }),
        class: "preview__code meta"
      }, [
        createBaseVNode("div", {
          class: "preview__footer demo-block-control",
          style: { "height": "24px" },
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
        }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1),
        createBaseVNode("div", _hoisted_5$1, [
          _ctx.slotDescription ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            renderSlot(_ctx.$slots, "description", {}, void 0, true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: "preview__coder highlight",
            innerHTML: _ctx.source
          }, null, 8, _hoisted_7$1)
        ], 512)
      ], 4),
      createBaseVNode("div", {
        class: "preview__footer demo-block-control",
        onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.toggleCode && _ctx.toggleCode(...args), ["stop"]))
      }, toDisplayString$1(_ctx.state.codeHeight > 0 ? "\u9690\u85CF\u4EE3\u7801" : "\u663E\u793A\u4EE3\u7801"), 1)
    ])
  ]);
}
var PreviewIframe = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$5], ["__scopeId", "data-v-7c1278ef"]]);
var PagesRouter_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = defineComponent({
  name: "PagesRouter",
  props: {
    pagesName: {
      type: String,
      default: ""
    },
    mapType: {
      type: String,
      default: "docsMap"
    },
    docRepo: {
      type: String,
      default: ""
    },
    docPath: {
      type: String,
      default: ""
    }
  },
  created() {
    this.init();
  },
  setup(props) {
    const prefix = {
      gitee: "https://gitee.com/tinymce-plugin/",
      github: "https://github.com/tinymce-plugin/"
    };
    const pagesNext = ref({});
    const pagesPrev = ref({});
    const store = inject("store");
    const editBox = ref("");
    const contributorsList = ref([]);
    const upTime = ref("");
    prefix.gitee + props.docRepo + "/edit/main/" + props.docPath;
    const closeOpen = () => {
      editBox.value.clickCloseFn();
    };
    const init = () => {
      let setIntervalID = setInterval(() => {
        var _a2;
        if (store.value.pagesObj[props.pagesName] || store.value.pagesObj[props.docRepo]) {
          clearInterval(setIntervalID);
          let pagesNow = store.value.pagesObj[props.pagesName] ? store.value.pagesObj[props.pagesName] : store.value.pagesObj[props.docRepo];
          pagesNext.value = store.value.pagesObj[pagesNow.pagesNext];
          pagesPrev.value = store.value.pagesObj[pagesNow.pagesPrev];
          if (props.docRepo && store.value.siteMap[props.mapType + "Map"]) {
            let docData = store.value.siteMap[props.mapType + "Map"][props.docRepo][props.docPath.replace(/\.md$/, "")];
            docData.upTime && (upTime.value = new Date(docData.upTime).toLocaleString());
            contributorsList.value = (_a2 = docData["contributors-list"]) == null ? void 0 : _a2.slice(0, 12);
          }
        }
      }, 200);
      setTimeout(() => {
        clearInterval(setIntervalID);
      }, 12e4);
    };
    return {
      closeOpen,
      prefix,
      store,
      init,
      contributorsList,
      upTime,
      editBox,
      pagesPrev,
      pagesNext,
      transformI18n
    };
  }
});
const _hoisted_1$7 = { class: "edit-page" };
const _hoisted_2$4 = {
  key: 0,
  class: "contributors-list-box"
};
const _hoisted_3$2 = { class: "contributors-title" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1648096750538",
  class: "icon",
  viewBox: "0 0 1195 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2178",
  width: "18",
  height: "18"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#344a85",
    d: "M1192.262422 246.651345a39.828914 39.828914 0 0 0-39.691809-40.034571 39.211943 39.211943 0 0 0-27.420939 11.105481v-1.096838l-266.600078 241.989785L644.254958 27.352387a54.841878 54.841878 0 0 0-46.684148-27.420939A55.801611 55.801611 0 0 0 548.418777 29.751719L335.358082 458.272441 63.753683 212.238067a38.320762 38.320762 0 0 0-22.553722-7.746415 39.897466 39.897466 0 0 0-39.691809 40.03457c0 1.371047-0.754076 0.754076-1.233943 1.233943l84.456492 634.246315v-2.604989a118.252799 118.252799 0 0 0 74.996268 96.453153 1463.661164 1463.661164 0 0 0 435.033195 48.397957 1450.567666 1450.567666 0 0 0 442.094087-58.4066 117.978589 117.978589 0 0 0 71.979964-94.807896 60.326065 60.326065 0 0 0 0.479867 9.117462l83.83952-630.681594c-0.342762-0.411314-0.891181 0.411314-0.89118-0.822628zM596.40542 936.425062L426.395599 681.547435 596.40542 426.669809l170.009821 254.877626z",
    "p-id": "2179"
  })
], -1);
const _hoisted_5 = { class: "contributors-list-ul" };
const _hoisted_6 = ["href", "title"];
const _hoisted_7 = ["src"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1648027203716",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2193",
  width: "16",
  height: "16"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "#344A85",
    d: "M678.854949 37.925925 151.913033 37.925925C67.776878 37.925925 0 105.939719 0 189.838987L0 872.086938C0 956.223137 68.013787 1024 151.913033 1024L834.161006 1024C918.297234 1024 986.074039 955.986205 986.074039 872.086938L986.074039 352.876954 910.22219 428.728803 910.22219 872.086938C910.22219 914.194593 876.305262 948.148151 834.161006 948.148151L151.913033 948.148151C109.805422 948.148151 75.851849 914.231172 75.851849 872.086938L75.851849 189.838987C75.851849 147.731332 109.76885 113.777781 151.913033 113.777781L603.003099 113.777781 678.854949 37.925925ZM320.679497 698.854934 550.775881 633.528042 386.423442 470.180586 320.679497 698.854934ZM935.236535 251.412619 770.882048 88.063035 409.297774 447.421923 573.650213 610.755591 935.236535 251.412619ZM1011.623351 114.198462 908.897353 12.111338C891.877742-4.806437 863.36629-3.885305 845.211136 14.152038L795.896832 63.146942 960.252416 226.495459 1009.563575 177.485707C1027.718729 159.447296 1028.639817 131.118358 1011.623351 114.198462Z"
  })
], -1);
const _hoisted_9 = { class: "edit-page_box" };
const _hoisted_10 = ["href"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "128",
  "aria-hidden": "true",
  viewBox: "0 0 16 16",
  version: "1.1",
  width: "128",
  "data-view-component": "true",
  class: "octicon octicon-mark-github v-align-middle"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "fill-rule": "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon outbound icon",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15",
  "data-v-1501f284": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1);
const _hoisted_15 = ["href"];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("svg", {
  t: "1648028102473",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2405",
  width: "128",
  height: "128"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z",
    fill: "#C71D23"
  })
], -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon outbound icon",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15",
  "data-v-1501f284": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1);
const _hoisted_20 = ["href"];
const _hoisted_21 = { class: "edit-page-text" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon outbound icon",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15",
  "data-v-1501f284": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  /* @__PURE__ */ createBaseVNode("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
], -1);
const _hoisted_23 = {
  key: 3,
  class: "upDate"
};
const _hoisted_24 = { class: "pages-router" };
const _hoisted_25 = {
  key: 0,
  class: "pages-prev"
};
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "icon icon-prev",
  "data-v-01ae7502": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z" })
], -1);
const _hoisted_27 = {
  key: 1,
  class: "pages-next"
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "icon icon-next",
  "data-v-01ae7502": ""
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z" })
], -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _a2;
  const _component_modalBox = resolveComponent("modalBox");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$7, [
      ((_a2 = _ctx.contributorsList) == null ? void 0 : _a2.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
        createBaseVNode("span", _hoisted_3$2, toDisplayString$1(_ctx.transformI18n("tp.editContributors")), 1),
        _hoisted_4,
        createBaseVNode("ul", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.contributorsList, (item, idx) => {
            return openBlock(), createElementBlock("li", { key: idx }, [
              createBaseVNode("a", {
                href: "https://github.com" + item.repo,
                title: item.name
              }, [
                createBaseVNode("img", {
                  src: item.logo,
                  alt: ""
                }, null, 8, _hoisted_7)
              ], 8, _hoisted_6)
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true),
      _ctx.docRepo && _ctx.docRepo == "tinymce-plugin-docs" ? (openBlock(), createBlock(_component_modalBox, {
        key: 1,
        ref: "editBox",
        title: "\u7F16\u8F91\u6B64\u9875"
      }, {
        show: withCtx(() => [
          createBaseVNode("span", null, [
            createTextVNode(toDisplayString$1(_ctx.transformI18n("tp.editPage")) + " ", 1),
            _hoisted_8
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_9, [
            _ctx.docRepo ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: _ctx.prefix.github + _ctx.docRepo + "/edit/main/" + _ctx.docPath,
              target: "_blank",
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.closeOpen && _ctx.closeOpen(...args), ["stop"]))
            }, [
              _hoisted_11,
              _hoisted_12,
              _hoisted_13,
              createBaseVNode("span", null, toDisplayString$1(_ctx.transformI18n("tp.editPageInGithub")), 1),
              _hoisted_14
            ], 8, _hoisted_10)) : createCommentVNode("", true),
            createBaseVNode("a", {
              href: _ctx.prefix.gitee + _ctx.docRepo + "/edit/main/" + _ctx.docPath,
              target: "_blank",
              onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.closeOpen && _ctx.closeOpen(...args), ["stop"]))
            }, [
              _hoisted_16,
              _hoisted_17,
              _hoisted_18,
              createBaseVNode("span", null, toDisplayString$1(_ctx.transformI18n("tp.editPageInGitee")), 1),
              _hoisted_19
            ], 8, _hoisted_15)
          ])
        ]),
        _: 1
      }, 512)) : _ctx.docRepo && _ctx.docPath.length > 5 ? (openBlock(), createElementBlock("a", {
        key: 2,
        href: _ctx.prefix.github + _ctx.docRepo + "/edit/main/" + _ctx.docPath,
        target: "_blank"
      }, [
        createBaseVNode("span", _hoisted_21, toDisplayString$1(_ctx.transformI18n("tp.editPageInGithub")), 1),
        _hoisted_22
      ], 8, _hoisted_20)) : createCommentVNode("", true),
      _ctx.upTime ? (openBlock(), createElementBlock("div", _hoisted_23, toDisplayString$1(_ctx.transformI18n("tp.upTime")) + "\uFF1A" + toDisplayString$1(_ctx.upTime), 1)) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_24, [
      _ctx.pagesPrev && _ctx.pagesPrev.path ? (openBlock(), createElementBlock("div", _hoisted_25, [
        createVNode(_component_router_link, {
          to: _ctx.pagesPrev.path
        }, {
          default: withCtx(() => [
            _hoisted_26,
            createBaseVNode("span", null, toDisplayString$1(_ctx.pagesPrev.meta ? _ctx.pagesPrev.meta.title : _ctx.pagesPrev.name), 1)
          ]),
          _: 1
        }, 8, ["to"])
      ])) : createCommentVNode("", true),
      _ctx.pagesNext && _ctx.pagesNext.path ? (openBlock(), createElementBlock("div", _hoisted_27, [
        createVNode(_component_router_link, {
          to: _ctx.pagesNext.path
        }, {
          default: withCtx(() => [
            createBaseVNode("span", null, toDisplayString$1(_ctx.pagesNext.meta ? _ctx.pagesNext.meta.title : _ctx.pagesNext.name), 1),
            _hoisted_28
          ]),
          _: 1
        }, 8, ["to"])
      ])) : createCommentVNode("", true)
    ])
  ]);
}
var PagesRouter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent({
  name: "modalBox",
  props: {
    title: {
      type: String,
      default: "\u6309\u94AE"
    }
  },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    clickCloseFn() {
      this.modalOpen = false;
    }
  }
});
const _withScopeId = (n2) => (pushScopeId("data-v-274ff3b9"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1648029396299",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3858",
  width: "35",
  height: "35"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM672 627.2c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L512 556.8l-115.2 115.2c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8L467.2 512 352 396.8C339.2 384 339.2 364.8 352 352s32-12.8 44.8 0L512 467.2l115.2-115.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L556.8 512 672 627.2z",
    "p-id": "3859"
  })
], -1));
const _hoisted_2$3 = [
  _hoisted_1$6
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("a", {
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.modalOpen = true),
      class: "modal-button"
    }, [
      renderSlot(_ctx.$slots, "show", {}, () => [
        createTextVNode(toDisplayString$1(_ctx.title), 1)
      ], true)
    ]),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      _ctx.modalOpen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "modal-box",
        onClick: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.clickCloseFn && _ctx.clickCloseFn(...args), ["stop"]))
      }, [
        createBaseVNode("div", {
          class: "modal-box-body",
          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          createBaseVNode("a", {
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.modalOpen = false),
            class: "close-button"
          }, _hoisted_2$3)
        ])
      ])) : createCommentVNode("", true)
    ]))
  ]);
}
var modalBox = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__scopeId", "data-v-274ff3b9"]]);
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = defineComponent({
  name: "fvToc",
  props: {
    title: {
      type: String,
      default: "\u6309\u94AE"
    }
  },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    clickCloseFn() {
      this.modalOpen = false;
    }
  },
  created() {
    setTimeout(() => {
      this.$root.showToc = true;
      tocbot.init({
        tocSelector: "#fv-toc",
        contentSelector: "#main-box main",
        headingSelector: "h1, h2, h3",
        scrollSmooth: true,
        scrollSmoothDuration: 120,
        scrollSmoothOffset: 120,
        hasInnerContainers: true,
        orderedList: false,
        headingsOffset: 210,
        collapseDepth: Number("2")
      });
    }, 200);
  },
  beforeUnmount() {
    this.$root.showToc = false;
    tocbot.destroy();
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("p", { class: "toc-title" }, "\u76EE\u5F55", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { id: "fv-toc" }, null, -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(), createBlock(Teleport, { to: "div#fv-tocBox" }, [
      _hoisted_1$5,
      _hoisted_2$2
    ]))
  ]);
}
var fvToc = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2]]);
var codeGroup = defineComponent({
  name: "CodeGroup",
  setup(_2, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    const activateNext = (i2 = activeIndex.value) => {
      if (i2 < tabRefs.value.length - 1) {
        activeIndex.value = i2 + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i2 = activeIndex.value) => {
      if (i2 > 0) {
        activeIndex.value = i2 - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i2) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i2;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i2);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i2);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i2) => {
          vnode.props.active = i2 === activeIndex.value;
        });
      }
      return h$1("div", { class: "code-group" }, [
        h$1("div", { class: "code-group__nav" }, h$1("ul", { class: "code-group__ul" }, items.map((vnode, i2) => {
          const isActive2 = i2 === activeIndex.value;
          return h$1("li", { class: "code-group__li" }, h$1("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i2] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive2
            },
            ariaPressed: isActive2,
            ariaExpanded: isActive2,
            onClick: () => activeIndex.value = i2,
            onKeydown: (e2) => keyboardHandler(e2, i2)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const _hoisted_1$4 = ["aria-selected"];
const __default__$2 = defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["code-group-item", { "code-group-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$4);
    };
  }
}));
var loading_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {};
const _hoisted_1$3 = { class: "lazyload-wrapper" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", {
  style: { "display": "flex" },
  class: "css-vem7w7 e10ne1lt2"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "fv-loading" }, [
    /* @__PURE__ */ createBaseVNode("svg", {
      class: "icon",
      id: "logoSvgId",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "5863",
      width: "120",
      height: "120"
    }, [
      /* @__PURE__ */ createBaseVNode("path", {
        transform: "translate(868,2070) scale(2.1,2.1) rotate(180)",
        fill: "none",
        "fill-opacity": "null",
        "stroke-opacity": "null",
        "stroke-width": "16",
        stroke: "#335FFF",
        d: "m203.108398,645.3192c33.99355,0.20039 67.58717,28.4558 67.58717,69.63654c0,0 0.22086,11.0003 0.23698,24.09619l0.00048,2.53102c-0.0025,2.83556 -0.0155,5.74026 -0.04309,8.62832l-0.01835,1.73016c-0.12767,10.93632 -0.47796,21.38476 -1.27581,26.63907c-4.69911,31.46169 -28.19465,53.20432 -60.5885,58.71512c-29.19446,5.7112 -46.49118,9.01769 -52.09012,10.11985c-1.41149,0.29469 -5.65982,0.90142 -9.85524,1.35111l-0.83752,0.08771c-2.6445,0.27022 -5.1905,0.46491 -6.9039,0.46491c-35.59324,0 -67.88711,-26.65226 -68.38702,-69.63654l0.00088,-2.15162c0.00007,-0.10585 0.00014,-0.21526 0.00022,-0.32814l0.00086,-1.10755c0.00451,-5.18721 0.01936,-15.29461 0.06827,-25.59709l0.01191,-2.3788l0,0l0.00864,-1.58335c0.05803,-10.27482 0.15317,-20.13893 0.30914,-24.8672c1.19978,-31.3615 22.89566,-56.7112 64.18782,-64.82712l0.0598,-0.01163c1.94046,-0.37737 50.47261,-9.81564 52.53022,-10.20841c4.79909,-0.90176 10.09809,-1.30255 14.99716,-1.30255zm23.79548,36.57171l-79.98482,15.53045l0,31.2613l-31.99393,6.21218l0,77.95285l79.98482,-15.53046l0,-31.26129l31.99393,-6.21218l0,-77.95285zm-31.99393,37.47348l0,46.69155l-47.99089,9.31827l0,-46.69155l47.99089,-9.31827z"
      }),
      /* @__PURE__ */ createBaseVNode("path", {
        id: "logoSvgBottom",
        fill: "#34435C",
        transform: "translate(-100,-100) scale(1.1,1.1)",
        "fill-opacity": "0.75",
        "stroke-opacity": "null",
        "stroke-width": "32",
        stroke: "#34435C",
        d: "M547.0208 823.650987L301.615787 681.970347V398.677333l245.405013-141.748906L792.41216 398.677333v283.293014z"
      }),
      /* @__PURE__ */ createBaseVNode("path", {
        fill: "none",
        "fill-opacity": "null",
        "stroke-opacity": "null",
        "stroke-width": "24",
        stroke: "#43B984",
        transform: "translate(-26,-36) scale(1.03,1.03)",
        d: "M782.595413 700.66176l-38.352213 22.1184a9.721173 9.721173 0 0 1-4.942507 1.365333 9.91232 9.91232 0 0 1-4.942506-18.445653l38.324906-22.145707a34.73408 34.73408 0 0 0 17.298774-29.969066v-281.258667a34.69312 34.69312 0 0 0-17.28512-29.928107l-243.698347-140.629333a34.638507 34.638507 0 0 0-34.583893 0L409.6 250.729813a46.789973 46.789973 0 0 1 2.402987 14.103894 47.786667 47.786667 0 1 1-12.151467-31.3344l84.650667-48.837974a54.613333 54.613333 0 0 1 54.381226 0l243.698347 140.629334a54.613333 54.613333 0 0 1 27.19744 47.076693v281.258667a54.504107 54.504107 0 0 1-27.183787 47.035733zM388.819627 251.849387a9.325227 9.325227 0 0 1-0.477867-0.873814 26.528427 26.528427 0 1 0 3.8912 13.871787 27.129173 27.129173 0 0 0-3.413333-12.997973z m350.467413 472.255146z m-105.417387-249.856c0-0.2048-0.12288-0.314027-0.12288-0.49152a9.079467 9.079467 0 0 1 2.49856-8.178346 8.533333 8.533333 0 0 1 3.76832-2.198187 8.833707 8.833707 0 0 1 9.161387 2.198187l48.16896 48.141653-3.467947 3.467947-57.01632 56.97536 1.59744-1.59744-13.653333-5.85728 55.391573-55.391574s-23.01952-23.497387-31.402666-31.402666c-3.085653-2.90816 5.802667 55.978667-47.14496 62.805333-28.808533 3.713707-54.463147-23.10144-55.00928-55.00928-0.65536-38.597973 51.6096-50.7904 47.14496-55.00928-23.688533-22.377813-55.00928-55.00928-55.00928-55.00928L397.312 519.099733l83.1488 78.52032-26.487467 26.46016a29.24544 29.24544 0 1 0 5.36576 5.69344h0.109227l26.70592-26.70592 52.578987 49.5616 86.016-86.016-7.468374 7.468374h19.510614l-99.669334 99.587413-51.336533-51.4048a9.106773 9.106773 0 0 0-15.428267 8.192c0 0.177493 0.095573 0.28672 0.095574 0.49152a4.696747 4.696747 0 0 0 0.77824 1.952427 39.594667 39.594667 0 1 1-23.552-23.770454 6.116693 6.116693 0 0 0 1.365333 0.505174 9.106773 9.106773 0 0 0 9.038507-15.209814l-77.4144-77.37344 65.672533-65.645226a9.106773 9.106773 0 0 0-8.27392-15.414614c-0.2048 0-0.28672 0.109227-0.49152 0.109227A4.724053 4.724053 0 0 0 435.541333 436.906667a39.594667 39.594667 0 1 1 23.784107-23.552 9.106773 9.106773 0 0 0 14.731947 10.349226l66.68288-66.64192 80.677546 80.636587a9.270613 9.270613 0 0 1 0 12.929707 9.106773 9.106773 0 0 1-9.024853 2.280106 4.096 4.096 0 0 1-1.365333-0.505173 39.471787 39.471787 0 0 0-41.7792 9.147733 39.594667 39.594667 0 1 0 65.37216 14.62272 5.188267 5.188267 0 0 1-0.764587-1.897813zM289.05472 320.279893l-38.352213 22.145707a34.69312 34.69312 0 0 0-17.230507 29.928107v281.258666a34.679467 34.679467 0 0 0 17.28512 29.914454l243.698347 140.629333a34.679467 34.679467 0 0 0 34.583893 0l84.759893-48.919893a46.803627 46.803627 0 0 1-2.389333-14.09024 47.786667 47.786667 0 1 1 12.151467 31.3344l-84.650667 48.837973a54.613333 54.613333 0 0 1-54.381227 0l-243.712-140.629333a54.490453 54.490453 0 0 1-27.19744-47.06304v-281.258667a54.613333 54.613333 0 0 1 27.19744-47.076693l38.324907-22.186667a9.898667 9.898667 0 1 1 9.91232 17.175893z m369.62304 468.309334a27.552427 27.552427 0 1 0-26.528427-27.470507 27.552427 27.552427 0 0 0 26.528427 27.52512z"
      })
    ])
  ])
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, _hoisted_3$1);
}
var loadingVue = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
var error_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "lazyload-wrapper" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", {
  style: { "display": "flex" },
  class: "css-vem7w7 e10ne1lt2"
}, [
  /* @__PURE__ */ createTextVNode(" errr "),
  /* @__PURE__ */ createBaseVNode("div", { class: "css-0 e10ne1lt0" })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _hoisted_3);
}
var errorVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const modulesList = { "../../../build/site/docs/tinymce-plugin-docs/resources/README_t_jvyw4u1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/README_t_jvyw4u1657195872549_p_.js"), ["assets/chunk/README_t_jvyw4u1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-importword/resources/README_t_06puav1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/README_t_06puav1657195872549_p_.js"), ["assets/chunk/README_t_06puav1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-indent2em/resources/README_t_7c2fe41657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/README_t_7c2fe41657195872549_p_.js"), ["assets/chunk/README_t_7c2fe41657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-layout/resources/README_t_nk5jlh1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/README_t_nk5jlh1657195872549_p_.js"), ["assets/chunk/README_t_nk5jlh1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/introduction_t_0unla51657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/introduction_t_0unla51657195872549_p_.js"), ["assets/chunk/introduction_t_0unla51657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/quickStart_t_5davl51657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/quickStart_t_5davl51657195872549_p_.js"), ["assets/chunk/quickStart_t_5davl51657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-importword/resources/__docs__/configure_t_5zy4om1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/configure_t_5zy4om1657195872549_p_.js"), ["assets/chunk/configure_t_5zy4om1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-importword/resources/__docs__/introduction_t_55dqpd1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/introduction_t_55dqpd1657195872549_p_.js"), ["assets/chunk/introduction_t_55dqpd1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-importword/resources/__docs__/quickStart_t_iuclnv1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/quickStart_t_iuclnv1657195872549_p_.js"), ["assets/chunk/quickStart_t_iuclnv1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tp-importword/resources/__docs__/tpImporatwordDemo_t_2irpun1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/tpImporatwordDemo_t_2irpun1657195872549_p_.js"), ["assets/chunk/tpImporatwordDemo_t_2irpun1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js","assets/chunk/tinymce.js","assets/chunk/plugin.min.js","assets/chunk/Editor.js"]) : null, "../../../build/site/docs/tp-indent2em/resources/__docs__/tpIndent2em_t_d1wzgx1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/tpIndent2em_t_d1wzgx1657195872549_p_.js"), ["assets/chunk/tpIndent2em_t_d1wzgx1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/commonproblem/images_t_3hwvwz1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/images_t_3hwvwz1657195872549_p_.js"), ["assets/chunk/images_t_3hwvwz1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/contributing/plugin_t_aal5hj1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/plugin_t_aal5hj1657195872549_p_.js"), ["assets/chunk/plugin_t_aal5hj1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/customize/images_t_9civ3g1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/images_t_9civ3g1657195872549_p_.js"), ["assets/chunk/images_t_9civ3g1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/customize/table_t_jqxznp1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/table_t_jqxznp1657195872549_p_.js"), ["assets/chunk/table_t_jqxznp1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/examples/advanced_t_4s8tri1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/advanced_t_4s8tri1657195872549_p_.js"), ["assets/chunk/advanced_t_4s8tri1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/examples/basic_t_dijdmz1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/basic_t_dijdmz1657195872549_p_.js"), ["assets/chunk/basic_t_dijdmz1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/skill/skeleton_t_b21yci1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/skeleton_t_b21yci1657195872549_p_.js"), ["assets/chunk/skeleton_t_b21yci1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/contributing/syntax/link-images_t_1e6txf1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/link-images_t_1e6txf1657195872549_p_.js"), ["assets/chunk/link-images_t_1e6txf1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/contributing/syntax/tip-code_t_hlnnp41657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/tip-code_t_hlnnp41657195872549_p_.js"), ["assets/chunk/tip-code_t_hlnnp41657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/contributing/writing-guide/grammar-demo_t_1j5qbx1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/grammar-demo_t_1j5qbx1657195872549_p_.js"), ["assets/chunk/grammar-demo_t_1j5qbx1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js","assets/chunk/tinymce.js","assets/chunk/plugin.min.js","assets/chunk/Editor.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/contributing/writing-guide/grammar_t_lykqhc1657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/grammar_t_lykqhc1657195872549_p_.js"), ["assets/chunk/grammar_t_lykqhc1657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null, "../../../build/site/docs/tinymce-plugin-docs/resources/guide/contributing/writing-guide/guide_t_fwxri91657195872549_p_.md": () => true ? __vitePreload(() => import("./chunk/guide_t_fwxri91657195872549_p_.js"), ["assets/chunk/guide_t_fwxri91657195872549_p_.js","assets/chunk/pinia.js","assets/chunk/vue.js"]) : null };
const setRoutes = (router2) => {
  http.request("get", `/siteMap.json`).then((resData) => {
    getModulesList(router2, resData, modulesList, loadingVue, errorVue);
    router2.push(router2.currentRoute.value.fullPath);
  });
};
var demoGroup = defineComponent({
  name: "demoGroup",
  setup(_2, { slots }) {
    const activeIndex = ref(-1);
    const navRefs = ref(null);
    const tabRefs = ref([]);
    const activateNext = (i2 = activeIndex.value) => {
      if (i2 < tabRefs.value.length - 1) {
        activeIndex.value = i2 + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i2 = activeIndex.value) => {
      if (i2 > 0) {
        activeIndex.value = i2 - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i2) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i2;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i2);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i2);
      }
    };
    return () => {
      var _a2;
      const items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "DemoGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i2) => {
          vnode.props.active = i2 === activeIndex.value;
        });
      }
      return h$1("div", { class: "demo-group" }, [
        h$1("div", { class: "demo-group__nav", ref: (element) => {
          if (element) {
            !navRefs.value && (navRefs.value = element.clientWidth);
          }
        } }, h$1("ul", { class: "demo-group__ul" }, items.map((vnode, i2) => {
          const isActive2 = i2 === activeIndex.value;
          return h$1("li", { class: "demo-group__li" }, h$1("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i2] = element;
              }
            },
            class: {
              "demo-group__nav-tab": true,
              "demo-group__nav-tab-active": isActive2
            },
            ariaPressed: isActive2,
            ariaExpanded: isActive2,
            onClick: () => activeIndex.value = i2,
            onKeydown: (e2) => keyboardHandler(e2, i2)
          }, vnode.props.title));
        }))),
        h$1("div", { class: "demo-group__content", style: { width: "calc(100% - " + navRefs.value + "px)" } }, items)
      ]);
    };
  }
});
const _hoisted_1$1 = ["aria-selected"];
const __default__$1 = defineComponent({
  name: "DemoGroupItem"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["demo-group-item", { "demo-group-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$1);
    };
  }
}));
var codeBox = defineComponent({
  name: "CodeBox",
  setup(_2, { slots }) {
    const activeIndex = ref(-1);
    const tabRefs = ref([]);
    const activateNext = (i2 = activeIndex.value) => {
      if (i2 < tabRefs.value.length - 1) {
        activeIndex.value = i2 + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i2 = activeIndex.value) => {
      if (i2 > 0) {
        activeIndex.value = i2 - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i2) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i2;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i2);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i2);
      }
    };
    return () => {
      var _a2;
      let _items = (((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeBoxItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (_items.length === 0) {
        return null;
      }
      let firstItem = _items.pop();
      const items = [firstItem, ..._items];
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i2) => {
          vnode.props.active = i2 === activeIndex.value;
        });
      }
      return h$1("div", { class: "code-box" }, [
        h$1("div", { class: "code-box__nav" }, h$1("ul", { class: "code-box__ul" }, items.map((vnode, i2) => {
          const isActive2 = i2 === activeIndex.value;
          return h$1("li", {
            class: {
              "code-box__li": true,
              "code-box__li-active": isActive2
            },
            ariaPressed: isActive2,
            ariaExpanded: isActive2,
            onClick: () => activeIndex.value = i2,
            onKeydown: (e2) => keyboardHandler(e2, i2)
          }, h$1("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i2] = element;
              }
            },
            class: {
              "code-box__nav-tab": true
            }
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const _hoisted_1 = ["aria-selected"];
const __default__ = defineComponent({
  name: "CodeBoxItem"
});
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["code-box-item", { "code-box-item__active": __props.active }]),
        "aria-selected": __props.active
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1);
    };
  }
}));
var fonts = "";
var vars = "";
var utils = "";
var customBlock = "";
var vpCode = "";
var tpDoc = "";
var vpSponsor = "";
var markdown = "";
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
var Storage = class {
  constructor(app2, nameSpace = "responsive", options = {}) {
    this.nameSpace = "";
    this.options = {};
    this.storage = {};
    this._getKey = (key) => this.nameSpace + key;
    const self = this;
    this.nameSpace = `${nameSpace}-`;
    this.options = options;
    const cacheStorage = Object.keys(window.localStorage).filter((key) => new RegExp(`^${this.nameSpace}`).test(key)).reduce((acc, key) => Object.assign(acc, {
      [key.replace(this.nameSpace, "")]: window.localStorage[key]
    }), {});
    const keyMap = [
      [String, ""],
      [Boolean, false],
      [Number, 0],
      [Array, []],
      [Object, {}]
    ];
    const map = this.typeMap = new Map(keyMap);
    let _storage = reactive(this.storage = __spreadValues2(__spreadValues2({}, Object.keys(options).reduce((acc, key) => {
      const { type, default: val } = options[key];
      if (!type) {
        warn$1("type of the field 'key' is required!");
        return acc;
      }
      return Object.assign(acc, {
        [key]: val === void 0 ? map.get(type) : val
      });
    }, {})), cacheStorage));
    if (Object.keys(_storage).length === 0) {
      warn$1("responsive key can not be empty empty!");
    }
    Object.keys(_storage).forEach((key) => {
      try {
        const val = _storage[key];
        this.set(key, val);
      } catch (e2) {
        console.log(e2);
      }
      Reflect.defineProperty(_storage, key, {
        get: () => self.get(key),
        set: (val) => self.set(key, val),
        configurable: true
      });
    });
    Reflect.defineProperty(app2.config.globalProperties, "$storage", {
      get: () => _storage
    });
    Reflect.defineProperty(app2.config.globalProperties, "$storager", {
      get: () => self
    });
    app2.storage = _storage;
    app2.storager = self;
  }
  static clearAll(nameSpace = "responsive", options) {
    Object.keys(options).forEach((key) => {
      const lsKey = `${nameSpace}-${key}`;
      if (Object.prototype.hasOwnProperty.call(window.localStorage, lsKey)) {
        window.localStorage.removeItem(lsKey);
      }
    });
  }
  static install(app2, nameSpace, options) {
    if (typeof nameSpace === "object") {
      options = nameSpace;
      nameSpace = "responsive";
    }
    Storage.clearAll(nameSpace, options);
    const instance = new Storage(app2, nameSpace, options);
    return instance;
  }
  static getData(nameSpace = "responsive", key) {
    const lsKey = `${nameSpace}-${key}`;
    if (Object.prototype.hasOwnProperty.call(window.localStorage, lsKey)) {
      let val = window.localStorage.getItem(lsKey);
      try {
        val = JSON.parse(val);
      } catch (error) {
        console.log(error, val);
      }
      return val;
    }
  }
  get(key) {
    let val = window.localStorage.getItem(this._getKey(key));
    try {
      val = JSON.parse(val);
    } catch (e2) {
      warn$1(e2);
    }
    return val;
  }
  set(key, val) {
    try {
      val = typeof val === "object" ? JSON.stringify(val) : val;
      window.localStorage.setItem(this._getKey(key), val);
    } catch (e2) {
      warn$1("storage setting fail, please check the value");
    }
  }
  remove(key) {
    window.localStorage.removeItem(this._getKey(key));
  }
  clear() {
    Object.keys(this.storage).forEach((key) => {
      const lsKey = this._getKey(key);
      if (Object.prototype.hasOwnProperty.call(window.localStorage, lsKey)) {
        window.localStorage.removeItem(lsKey);
      }
    });
  }
};
const injectResponsiveStorage = (app2, config2) => {
  var _a2, _b2, _c;
  const configObj = Object.assign({
    locale: {
      type: Object,
      default: (_b2 = Storage.getData(void 0, "locale")) != null ? _b2 : {
        locale: (_a2 = config2.Locale) != null ? _a2 : "zh"
      }
    }
  }, config2.MultiTagsCache ? {
    tags: {
      type: Array,
      default: (_c = Storage.getData(void 0, "tags")) != null ? _c : [
        {
          path: "/welcome",
          parentPath: "/",
          meta: {
            title: "menus.hshome",
            i18n: true,
            icon: "home-filled"
          }
        }
      ]
    }
  } : {});
  app2.use(Storage, configObj);
};
let config = {
  Locale: "zh"
};
const app = createApp(App);
setRoutes(router);
app.component("modalBox", modalBox);
app.component("fvToc", fvToc);
app.component("codeGroup", codeGroup);
app.component("codeGroupItem", _sfc_main$4);
app.component("demoGroup", demoGroup);
app.component("demoGroupItem", _sfc_main$1);
app.component("codeBox", codeBox);
app.component("codeBoxItem", _sfc_main);
app.component("Preview", Preview);
app.component("PreviewVue2", PreviewVue2);
app.component("PreviewReact", PreviewReact);
app.component("PreviewIframe", PreviewIframe);
app.component("PagesRouter", PagesRouter);
injectResponsiveStorage(app, config);
app.use(router).use(useI18n).use(createPinia()).mount("#app");
export { _export_sfc as _ };
