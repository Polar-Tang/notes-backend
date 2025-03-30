Generally speaking mostly of the values in go are passed by value. meaning the value ogf the variable get copied and the original it's not modified:
```go
func increment(x int) {
    x++
    fmt.Println(x)
    // 6
}


func main() {
    x := 5
    increment(x)
    fmt.Println(x)
    // 5
}
```
X remains as 5 in the main function because increment only change a copy of x.
But thanks to the pointer we use the same place in the memmory so we alter directly that variable allocation. 

### Change the value
If we want to change the value in the memmory, we should to use a [[short_notes.go 1/memory/pointer/pointer|pointer]]

### Example
```go
func swapByValue(a, b int) (int, int) {
	a, b = b, a
	return a, b
}

func swapByRef(a, b *int) (int, int) {
	*a, *b = *b, *a
	return *a, *b
}

func swapingValuesByValue() {
	fmt.Println("---------------------------------------")
	a, b := 5, 6
	a1, b1 := swapByValue(a, b)
	fmt.Printf("Valor original a=%d y b=%d\n", a, b)          // Valor original a=5 y b=6
	fmt.Printf("Valor intercambiado a1=%d y b1=%d\n", a1, b1) // Valor intercambiado a1=6 y b1=5
	fmt.Println("---------------------------------------")
	y, z := 10, 20
	y1, z1 := swapByRef(&y, &z)
	fmt.Printf("Valor original y=%d y z=%d\n", y, z)          // Valor original y=20 y z=10
	fmt.Printf("Valor intercambiado y1=%d y z1=%d\n", y1, z1) // Valor intercambiado y1=20 y z1=10
}
````