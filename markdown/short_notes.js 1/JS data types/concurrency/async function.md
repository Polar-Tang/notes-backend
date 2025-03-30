https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

`async` is a special keyword that enables to use asynchronous functionality
### [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#parameters)

[`name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#name)

The function's name.

[`param` Optional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#param)

The name of a formal parameter for the function. For the parameters' syntax, see the [Functions reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters).

[`statements` Optional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#statements)

The statements comprising the body of the function. The `await` mechanism may be used.

#### Async...await
Instead of using everything with then you could use async and await, which remains much more to the synchronous functions
```ts
const doSomething = async (): Promise<string> => {
	console.log("Starting process")
	return new Promise((resolve) => {
		setTimeout(() => {
		console.log("Did someting")
		resolve("https://example.com")
		}, 2000)
	})
}
  
const mainFunc = async () => {
	const url: string = await doSomething()
	const data = await fetch(url)
}
```
And you should use this with 