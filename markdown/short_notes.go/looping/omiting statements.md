We could omit statements in the [[for(c-like)]] and this will work, for example, here we got an infinite loop:
```go
for INITIAL; ; AFTER {
  // do something forever
}
```