# **React intersection observable**
## **Description**
This package help developers easy to using native  [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) API 
## **Install**
- npm:
```shell
npm install @lucnd96/react-intersection-observable
```
- yarn:
```shell
yarn add @lucnd96/react-intersection-observable
```
## *Usage*
### Component `IntersectionObservable`
```tsx
import { IntersectionObservable, IntersectionObservableCallback } from "@lucnd96/react-intersection-observable";
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
```
**`IntersectionObservable` props:**
- `visibleClassName?: string`; class name when visible in view
- `hiddenClassName?: string`; class name when hidden in view
- `options?: IntersectionObserverInit`: options pass into `new IntersectionObserver` [options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)
- `onChange?: IntersectionObservableCallback`: call back call on change

### Hook `useIntersectionObservable`
```tsx
import { useIntersectionObservable } from "@lucnd96/react-intersection-observable";

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
```
**`useIntersectionObservable` args**
- `options?: IntersectionObserverInit`: options pass into `new IntersectionObserver` [options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)