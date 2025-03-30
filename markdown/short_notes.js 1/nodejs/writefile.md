
#### Signature

```ts
function writeFile(path: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, callback: fs.NoParamCallback): void (+3 overloads)
```
#### Example
```js
const content = "This is the content from the file"

fs.writeFile('/path/to/folder', content, err => { 
	if (err) { 
		console.error(err); 
	} else { // file written successfully 
	}
});
```