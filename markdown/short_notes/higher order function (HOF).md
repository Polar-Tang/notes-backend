Higher order functions is whatever function which takes one or more functions as some arguments, or return a function.
```js
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);
```

```js
const radius = [1, 2, 3]
  
const area = function (radius: number) {
	return Math.PI * radius * radius;
}
  
const diameter = function (radius: number) {
	return 2 * radius;
}
  
const calculate = function (radius: number[], calculus: string) {
	const output = [];
	for (let i = 0; i < radius.length; i++) {
	output.push(calculus.toLowerCase() === "area" ? area(radius[i]) : diameter(radius[i]));
}
	return output;
}
  
console.log(calculate(radius, "area"))
```