# Advance React Tutorial

## UseState in React

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

- UseState is a nmed function hence during import we must have to use curly braces.

```JSX
import React,{useState} from 'react';
```

- useState has a property to re render

```JSX
const [text, setText] = useState("Avinash")
//here Avinash is a default value to re render the new value we have
//to call setText function
setText("New Avinash");
```

### Important things about Hooks

- All Hooks in react will start with _use_

```jsx
useState
useMemo
...
```

- to use react hook react component names must be cpitalized.

```jsx
const UseStateBasics()=>{

}
```

- Hooks Need to be inside fuction/component body

```jsx
const UseStateBasics()=>{
    const [apple,setApple] = useState("green Apple");
    const someEvent = () =>{
        if(cond){
            setApple("Red apple");
        }else{
            setApple("Yellow Apple");
        }
    }
}
```

- we can not call hook conditionally this does not mean thet we can not set condion on
  function of the hook like we did in abobe example.

```jsx
//here is what we have to avoid we can't place hook in conditional statement
if (cond) {
  hook;
}
```
