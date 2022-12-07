/* eslint-disable consistent-return,no-underscore-dangle,consistent-return,no-undef */
import React, { useRef, useEffect, useState } from "react";
const IntersectionObservable = (props) => {
    const { children, visibleClassName, hiddenClassName, options = {}, onChange, } = props;
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
    return (React.createElement("div", { className: isVisible ? visibleClassName : hiddenClassName, ref: containerRef }, children));
};
export default IntersectionObservable;
export { IntersectionObservable };
