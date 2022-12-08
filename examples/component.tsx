import React from "react";
import { IntersectionObservable, IntersectionObservableCallback } from "../src";

const ComponentExample: React.ComponentType = () => {
  const onChange: IntersectionObservableCallback = (args) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { entry, entries, observer } = args;
  };
  return (
    <div>
      <IntersectionObservable
        visibleClassName="visible-class"
        hiddenClassName="hidden-class"
        onChange={onChange}
      >
        <div>Test content</div>
      </IntersectionObservable>
    </div>
  );
};

export default ComponentExample;
