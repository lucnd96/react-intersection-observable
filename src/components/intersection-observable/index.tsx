/* eslint-disable consistent-return,no-underscore-dangle,consistent-return,no-undef */
import React, { useRef, useEffect, useState } from "react";

type IntersectionObservableCallbackArgs = {
  entry: IntersectionObserverEntry,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
}
type IntersectionObservableCallback = (args: IntersectionObservableCallbackArgs) => unknown;
interface IIntersectionObservableProps {
  visibleClassName?: string;
  hiddenClassName?: string;
  options?: IntersectionObserverInit;
  onChange?: IntersectionObservableCallback;
}
const IntersectionObservable: React.ComponentType<IIntersectionObservableProps> = (props) => {
  const {
    children,
    visibleClassName,
    hiddenClassName,
    options = {},
    onChange,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div
      className={isVisible ? visibleClassName : hiddenClassName}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default IntersectionObservable;
export { IntersectionObservable };
export type { IntersectionObservableCallback, IIntersectionObservableProps };
