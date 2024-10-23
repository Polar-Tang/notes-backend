### Fuzzing
The key ffrom fuzzing is to cause some anomalie on the api, for example using a strin as a parameter and getting this response:
```
HTTP/1.1 400 Bad Request
{
"error": "number required"
}
```
so you can deduce that the developers configured the API to properly handle requests like yours and prepared a tailored response.
When input is not handled properly and causes an error, the server will
often return that error in the response. For example, if you sent input like
~'!@#$%^&*()-_+ to an endpoint that improperly handles it, you could receive
an error like this:
```
HTTP/1.1 200 OK
--snip--

SQL Error: There is an error in your SQL syntax.
```
So this reveals that the backend is utilizing SQL DATABASE ON THE INPUT
##### Fuzzing millions
SO you will fuzzing through lotta request nad if every request have a pattern , then you could use a base line to identify what responses you wnat to disscard. if you issue 100 API requests and 98 of those result in an HTTP 200
response code with a similar response size, you can consider those requests to
be your baseline. And then you could isolate the anomalous responses and examine its response size
**Sending the wfuzz request to Burpsuite**
To send the request to Burpsuite you can use this prototype
```
wfuzz -z file,/home/hapihacker/big-list-of-naughty-strings.txt -H "Content-Type: application/
json" -H "x-access-token: [...]" -p 127.0.0.1:8080 --hc 400 -X PUT -d "{
\"user\": \"FUZZ\",
\"pass\": \"FUZZ\",
\"id\": \"FUZZ\",
\"name\": \"FUZZ\",
\"is_admin\": \"FUZZ\",
\"account_balance\": \"FUZZ\"
}" -u http://192.168.195.132:8090/api/user/edit_info
```


#### `fsPromises.mkdir(path[, options])`[#](https://nodejs.org/api/fs.html#fspromisesmkdirpath-options)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [<Buffer>](https://nodejs.org/api/buffer.html#class-buffer) | [<URL>](https://nodejs.org/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
    - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
    - `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Not supported on Windows. **Default:** `0o777`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Upon success, fulfills with `undefined` if `recursive` is `false`, or the first directory path created if `recursive` is `true`.

Asynchronously creates a directory.

The optional `options` argument can be an integer specifying `mode` (permission and sticky bits), or an object with a `mode` property and a `recursive` property indicating whether parent directories should be created. Calling `fsPromises.mkdir()` when `path` is a directory that exists results in a rejection only when `recursive` is false.

`const { mkdir } = require('node:fs/promises'); const { join } = require('node:path');  async function makeDirectory() {   const projectFolder = join(__dirname, 'test', 'project');   const dirCreation = await mkdir(projectFolder, { recursive: true });    console.log(dirCreation);   return dirCreation; }  makeDirectory().catch(console.error);`