/* eslint-disable consistent-return,no-underscore-dangle,consistent-return,no-undef */
import React, { useState, useEffect, useRef } from "react";

interface IUseIntersectionObservableArgs {
  options?: IntersectionObserverInit;
}

interface IUseIntersectionObservableReturnValue<T> {
  isVisible: boolean,
  entry?: IntersectionObserverEntry,
  observer?: IntersectionObserver,
  ref: React.RefObject<T>;
}
function useIntersectionObservable<T extends Element>(args: IUseIntersectionObservableArgs): IUseIntersectionObservableReturnValue<T> {
  const { options } = args;
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [observer, setObserver] = useState<IntersectionObserver>();
  const targetRef = useRef<T>(null);

  useEffect(() => {
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
    ref: targetRef,
  };
}

export default useIntersectionObservable;
export { useIntersectionObservable };
