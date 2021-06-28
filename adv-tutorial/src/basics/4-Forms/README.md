# Forms in React

## Typical way

- ### Target the input

```js
const inputValue = document.getElementById("myText");
const inputValue = inputValue.value;
```

- ### In React Way

```

```

## PreventDefault

When we submit the form browser auto refresh the page and due to which we lose data to prevent auto reload javascript provides us a method called prevent default.

- we use prevent default while in after submit fuction.

```javascript
function HandleSubmit(e) {
  e.preventDefault();
  //then we will not lose our data
}
```

## How to append in Array

```javascript
setPeople((people) => {
  return [...people, person];
});
```

## 2-multiple inputs

- instead of using multiple use state set one useState with object

### Dynamic property of js

## [Use Ref](https://dmitripavlutin.com/react-useref-guide/)

- Using uncontrolled input in forms
- most popular use of use ref is to get refereb=nce of DOM element.
- it preserves value
- does not trigger rerender
- target DOM Nodes/Elements
