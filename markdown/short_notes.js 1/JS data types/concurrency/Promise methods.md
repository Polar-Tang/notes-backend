#### [Promise all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
Promise all creates an iterator assuming all the passed parameters
```js
const mainFunction = async () => {
  const C = C()
  const B = B()
  const A = A()

  await Promise.all([C, B, A])

  const D = await D()
}

mainFunction()
```
#### [Promises all settled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
Takes an iterator and return a single promise
#### [Promise any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
Takes an iterator and when any promise fulfill return a single promises