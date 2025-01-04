Kets are encoded as a raw data. In Go we usually use a slice of bytes as the datta types. 
```go
[]byte{0xAA, 0xBB}
```
`0xAA` and `0xBB` are [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) values, and hex is one of the more common ways to write raw binary in code. They represent the raw binary data `10101010` and `10111011` respectively.