Mutexes (the term refers to [[Mutual exclusion]]) are [[readers-writer lock]]s that locks and unlocks access to data , so we could use this to ensure we where we could access to any data in certain time, so it's pretty useful for [[Goroutine]].
T
They are two commands.
- `Lock()`
- `Unlock()`
Mutex allow to protect data from race condition, for example maps are not safe-thread, a goroutine might be overwritting it, so what we wanto to do it's to lock that map.
We can protect the go routine by surrender it of two mutex:
```go
func protected(){
    mu.Lock()
    defer mu.Unlock()
    // the rest of the function is protected
    // any other calls to `mu.Lock()` will block
}
```
