import React, { useEffect } from "react";
import { useIntersectionObservable } from "../src";

const HookExample: React.ComponentType = () => {
  const {
    ref, entry, observer, isVisible,
  } = useIntersectionObservable<HTMLHeadingElement>();

  useEffect(() => {
    // Do anything when entry change or observer change
  }, [entry, observer]);

  return (
    <div>
      <h1
        ref={ref}
        className={isVisible ? "visible-class" : "hidden-class"}
      >
        Test component
      </h1>
    </div>
  );
};

export default HookExample;
