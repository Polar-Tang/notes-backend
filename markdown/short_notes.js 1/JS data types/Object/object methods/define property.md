https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
As the name pointed, this function define/refine a property from an object.
### Syntax
```js
Object.defineProperty(obj, prop, descriptor)
```

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#parameters)

[`obj`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#obj)

The object on which to define the property.

[`prop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#prop)

The name of the key to modify

[`descriptor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#descriptor)

The descriptor for the property being defined or modified.

### Example
```ts
Object.defineProperty(Point.prototype, "x", {
  get() {
    return 100;
  },
});
console.log(pointer.x); // Outputs: 100
```

### [Return value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#return_value)

The object that was passed to the function, with the specified property added or modified.