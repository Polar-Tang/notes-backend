
https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback
Welcome to the the function of the command injection. exec function executes a command from the shell.

##### Syntax
```js
import {exec} from 'node:child_process'

exec(
	'echo "helo world"', 
	(error, stdout, stderr) => {}
)
```
###### Singature
```ts
function exec(command: string, calbaskFn: function)
```
#### Params
##### Command to execute
The command to execute is literally the command executed in the shell, and this string will vary based on [shell](https://en.wikipedia.org/wiki/List_of_command-line_interpreters)
##### Callback Fn (optional)
- **error** it's *null* in case of the command executing with no errors, otherwise it will be the instance of the error.
- **stdout** is the output with no errors of the executed command
- **stderr** is the error of the command

##### Example
```js
import {exec} from 'node:child_process'

exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

### Return value
- [`<ChildProcess>`](https://nodejs.org/api/child_process.html#class-childprocess)
- In case we utilize [`util.promisify()`](https://nodejs.org/api/util.html#utilpromisifyoriginal) it returns a promise
```js
const { exec } = require('node:child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```