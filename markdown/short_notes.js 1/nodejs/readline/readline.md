readline is a built-in method of node js to interact with the user through the cli
First you need to create an interface
```js
import readline from 'node:readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
```
#### `question`third 
The question function is a prompt in the cli, and returns the user input:
```js
const answer = await rl.question('What is your favorite food? ');
console.log(`Oh, so your favorite food is ${answer}`);
```
#### `abortSingal`
This function cancel the user input. It could be user as a time out:
```js
const signal = AbortSignal.timeout(10_000);

signal.addEventListener('abort', () => {
  console.log('The food question timed out');
}, { once: true });

const answer = await rl.question('What is your favorite food? ', { signal });
console.log(`Oh, so your favorite food is ${answer}`);
```