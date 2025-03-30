https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
Promise are objects that allow us to use asyncronous functionalility, at first instance it returns a promise, that might turn into a valu or into an error in the future.
#####  Promises state
- _pending_: initial state, neither fulfilled nor rejected.
- _fulfilled_: meaning that the operation was completed successfully.
- _rejected_: meaning that the operation failed.
A promise is said to be _settled_ if it is either fulfilled or rejected, but not pending.

#### Promises usage
The return value from a promise it's a pending state. To await for the function and utilize the value returned you should utilize [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch), and [`finally()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) 

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```
### [Thenables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)
###### Args
- `CallbackFulfill` it's a callback to handle the promise if its fullfilled
- `CallbackReject` On the other hand, there's a special function to handle if the promise is rejected
You may try to call all of these function in certain order which may fall into a  [Callback Hell](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining) but you can use the dot then and pass callbacks 
```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```
The argumments used by the callbacks are the return value of the previous function:
```JS
function successCallback(result) {
	console.log(`The dosomething value: ${result}`)
	return (`The dosomething value: ${result}`);
}
  
const doSomething = async () => {
	console.log("Starting process")    // Starting process
	return new Promise((resolve) => {
		setTimeout(() => {
		resolve("https://example.com")
		}, 2000)
	})
}
  
const promise = doSomething();
const promise2 = promise.then(successCallback) // The dosomething value: https://example.com
```
see a more realistic **example**
```js
const doSomething = async () => {
	console.log("Starting process")
	return new Promise((resolve) => { // RETURN RESOLVE VALUE
		setTimeout(() => {
		console.log("Did someting")
		resolve("https://example.com") 
		}, 2000)
	})
}
  
doSomething()
	.then((url: string) => { 
	// `return` keyword now included in front of fetch call.
	return fetch(url)
	.then((res) => console.log(res))
})
```
##### Error handling
Whenever you add a catch, it will hold the function for the error handling:
```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```
