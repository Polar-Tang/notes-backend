Unlike `GET` and `POST`, there is no `http.Put` function. You will have to create a raw `http.Request` that an `http.Client` can [`Do`](https://pkg.go.dev/net/http#Client.Do).  So you have to create the [[new request]] method:
```go
req, err := http.NewRequest("PUT", fullURL, bytes.NewBuffer(jsonData))
```
