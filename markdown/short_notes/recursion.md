[Wikipedi defines recursion](https://en.wikipedia.org/wiki/Recursion) as a process that depends of a previous/simpler of itself. 
##### Common examples
when you share your screen and the monitor is pointing at their own playback
![[Pasted image 20250131134421.png]]
#### Programming 
In programming, this the act of a function calling itself, which may sound like an infinite process, and it is if there's no condition to stop this chain.
#### Formal definition
- There's a simple **base case**, whiich doesn't use recursion to produce an answer
- A **resursive step**, a set of rules that reduces all posible cases to the simple case
#### Common examples
###### Factorial
Given `X`, it's the product of every natural number less than `X`
**Formula**:
![[Pasted image 20250131144410.png]]
In typescript:
```ts
const factorial = (n: number): number => {
	if (n == 1){
		n = 1
	} else {
		n = n * factorial(n - 1)
	}
	return n
}
```

###### Fibonacci
There's a base case:
- Fib(0) = 0 as base case 1,
And a second one:
- Fib(1) = 1 as base case 2