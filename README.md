# Introduction To React

- React is a javascript library for creating user Interface. React is used to build single-page web application.
- React allows us to create reusable UI.

## React Hooks

1. useState 👍
2. useEffect 👍
3. useRef
4. useReducer
5. useContext 👍
6. useMemo
7. useCallback

## React Router

1. Configuring Routes
2. Navigating with Link
3. Creating Links with active styling
4. Using Nested Routes for Layout
5. Navigating programmatically
6. Using URL params for data loading
7. Using URL Search params
8. Creating your own behaviors through composition
9. Server Rendering

## React ContextAPI

### Lifting Up the State

Lifting Up a state means in a React app we have a state say user name and it will be required by multiple components so we can initialize that state in the APP.js file and this is called Lifting Up i.e directly declared global to the app.

```jsx
import React, { Component, useState } from "react";

const Error = () => {
  const [name, setName] = useState("Avinash"); // lifting up state
  return (
    <div>
      <ComponentA name={name} />
      <ComponentB name={name} />
    </div>
  );
};
export default Error;
```

### Prop Drilling

Prop drilling is a concept of sending props from one component to other component. like in the above code we have to pass that name prop to a component c if it requires that name.

```jsx
import React, { Component, useState } from "react";

const ComponentA = ({ name }) => {
  const [name, setName] = useState("Avinash"); // lifting up state
  return (
    <div>
      <ComponentC name={name} />
      <ComponentD name={name} />
    </div>
  );
};

export default ComponentA;
```

Here we can see that component A does not require that name props but we have to drill the component such that component C and D can use it.

Here in the above code component C and D requires the same props so this is called prop drilling

### Creating The Context using createContext Hook and using that context using useContext Hook

Context API is an easy way to eliminate the problems of prop drilling and global state.

```jsx
import { createContext, useContext, useState } from "react";

const CounterContext = createContext(); // CounterContext is created
export const useCounter = () => useContext(CounterContext); // custom hook for that context
function CounterContextProvider(props) {
  // Provide function which will provide all the states to the context
  const [count, setCount] = useState(0);
  const handleIncreaseClick = () => {
    setCount(count + 1);
  };
  const handleDecreaseClick = () => {
    setCount(count - 1);
  };
  const value = { count, setCount, handleDecreaseClick, handleIncreaseClick };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
```

### use the context

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hooks from "./components/Hooks";
import Layout from "./components/Layout";
import Error from "./components/Error";
import CounterContextProvider from "./context/CounterContext";
export default function App() {
  return (
    <BrowserRouter>
      <CounterContextProvider>
        {/* this is the context provide it will provide that context to each and every component*/}
        <Layout>
          <Routes>
            {" "}
            <Route index element={<Home />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </CounterContextProvider>
    </BrowserRouter>
  );
}
```
