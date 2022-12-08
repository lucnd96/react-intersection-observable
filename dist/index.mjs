// src/components/intersection-observable/index.tsx
import React, { useRef, useEffect, useState } from "react";
var IntersectionObservable = (props) => {
  const {
    children,
    visibleClassName,
    hiddenClassName,
    options = {},
    onChange,
    className,
    ...restProps
  } = props;
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...restProps,
      className: `${className} ${isVisible ? visibleClassName : hiddenClassName}`,
      ref: containerRef
    },
    children
  );
};

// src/hooks/useIntersectionObservable.ts
import { useState as useState2, useEffect as useEffect2, useRef as useRef2 } from "react";
function useIntersectionObservable(options) {
  const [isVisible, setIsVisible] = useState2(false);
  const [entry, setEntry] = useState2();
  const [observer, setObserver] = useState2();
  const targetRef = useRef2(null);
  useEffect2(() => {
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
export {
  IntersectionObservable,
  useIntersectionObservable
};
