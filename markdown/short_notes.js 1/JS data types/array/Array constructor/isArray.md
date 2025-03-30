https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
The **`Array.isArray()`** static method determines whether the passed value is an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

```js
Array.isArray()
```

#### Example
```js
console.log(Array.isArray([1, 3, 5]));

console.log(Array.isArray('[]'));

console.log(Array.isArray(new Array(5)));

console.log(Array.isArray(new Int16Array([15, 33])));
```
