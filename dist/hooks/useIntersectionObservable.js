/* eslint-disable consistent-return,no-underscore-dangle,consistent-return,no-undef */
import { useState, useEffect, useRef } from "react";
function useIntersectionObservable(args) {
    const { options } = args;
    const [isVisible, setIsVisible] = useState(false);
    const [entry, setEntry] = useState();
    const [observer, setObserver] = useState();
    const targetRef = useRef(null);
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
