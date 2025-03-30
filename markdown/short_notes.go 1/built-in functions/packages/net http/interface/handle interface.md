https://pkg.go.dev/net/http#Handler
A handler response to an HTTP request 
```go
type Handler interface {
	ServeHTTP(ResponseWriter, *Request)
}
```
- It write headers, and data to the [ResponseWriter](https://pkg.go.dev/net/http#ResponseWriter) and then return.
- You coudln't write the http response concurrently or after the handler
- Handlers shouldn't modify the request
- If ServerHTTP crashes, this 

