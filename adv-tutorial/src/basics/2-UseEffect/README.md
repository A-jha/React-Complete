# UseEffect

Work outside of the component.

- To Import useEffect

```JSX
import {useEffect} form 'react'
```

- By default runs after every re-render

## second parameters

- if list of dependencies is empty then it will run only once

```jsx
useEffect(() => {
  console.log("call use effect");
  if (value > 20) {
    document.getElementById("title").innerText = `you Reached ${value} `;
  }
}, []);
```

- if there is some dependecies in list of dependencies then it will run as dependency changes.

```jsx
useEffect(() => {
  console.log("call use effect");
  if (value > 20) {
    document.getElementById("title").innerText = `you Reached ${value} `;
  }
}, [values]);
```

- if you are not using dependency then a warning will come

```
React Hook useEffect has a missing dependency: 'value'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
```

- We can add as many useEffect as we want.

## cleanup function

- useEffect runs after each render and it store each instance of render i.e if we have a event listner then it will store all the event listner in Elements --> Event listner in browser and it will consume a lot of memory and thats why we use cleanup fuction inside useEffect.

```jsx
useEffect(() => {
  window.addEventListener("resize", checkSize);
  return () => {
    window.removeEventListener("resize", checkSize);
  };
});
```
