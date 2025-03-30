```js
	HMACSHA256(  
	base64UrlEncode(header) + "." +  
	base64UrlEncode(payload)  
	<jwt_secret>
)
```
