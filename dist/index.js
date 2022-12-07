"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  IntersectionObservable: () => IntersectionObservable,
  useIntersectionObservable: () => useIntersectionObservable
});
module.exports = __toCommonJS(src_exports);

// src/components/intersection-observable/index.tsx
var import_react = __toESM(require("react"));
var IntersectionObservable = (props) => {
  const {
    children,
    visibleClassName,
    hiddenClassName,
    options = {},
    onChange
  } = props;
  const containerRef = (0, import_react.useRef)(null);
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver((entries, _observer) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (onChange) {
            onChange({ entry, entries, observer: _observer });
          }
        });
      }, options);
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [containerRef.current]);
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: isVisible ? visibleClassName : hiddenClassName,
      ref: containerRef
    },
    children
  );
};

// src/hooks/useIntersectionObservable.ts
var import_react2 = require("react");
function useIntersectionObservable(args) {
  const { options } = args;
  const [isVisible, setIsVisible] = (0, import_react2.useState)(false);
  const [entry, setEntry] = (0, import_react2.useState)();
  const [observer, setObserver] = (0, import_react2.useState)();
  const targetRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (targetRef.current) {
      const _observer = new IntersectionObserver((entries) => {
        entries.forEach((_entry) => {
          setIsVisible(_entry.isIntersecting);
          setEntry(_entry);
        });
      }, options);
      setObserver(_observer);
      _observer.observe(targetRef.current);
      return () => _observer.disconnect();
    }
  }, [targetRef.current]);
  return {
    isVisible,
    entry,
    observer,
    ref: targetRef
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IntersectionObservable,
  useIntersectionObservable
});
