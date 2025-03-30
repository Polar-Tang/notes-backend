https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
The JavaScript engine run the JS code using a variety of concept  
![[Pasted image 20250207161432.png]]
- Stack is ordered just like a stack of plates, you take the first ones. In JavaScript there's a frame where there are variables and functions, so the engine follow the threads of those references and discard whenever got the value
- Heap is the chaotic and more random memmory
- queue is kinda a list of names that reference the functions, where it's processed every function in order of the older