https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Remove or replace a giving element as a [[deep copy]], if you want to get the modified array without modify the original, utilize [toSplice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced).

Where the first argument (`start`) reference the index to start changing the array, the second argument are the quantity of elements to delete, and the third argument, of groups of argument, that are the words we want to add, if we don't provide it, then will just remove the element resulting
```js
const months = ['Jan', 'March', 'April', 'June'];
// change the index 1 starting from index 0 to "Feb" 

months.splice(1, 0, 'Feb'); 
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(1, 1); 
console.log(months); // ["Jan", "March", "April", "June"]

```

### Parameters
#### `Start`
Where to start changing
- Counts from back to the end
- If the provided number is grater than the length of the array, it will not delete instead it add 
- If it's passed undefined the [[integer conversion]] will turn it to zero

#### `DeleteCount`
Quantity of items to delete
- It will delete every elemnt in the array if it's omitted, or if is greater or equal than the array `if deletecount == nil || deletecount >= array.lenght` 
- if `deleteCount == 0` no elements are removed

#### `item1, ..., itemN`
- The elements to add to the array, beginning from `start`.
- If you do not specify any elements, `splice()` will only remove elements from the array.

### Return value
An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.


