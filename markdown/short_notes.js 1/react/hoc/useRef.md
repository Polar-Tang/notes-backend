https://react.dev/reference/react/useRef

BInd a piece of JSX as a raference


#### Syntax
```jsx
const constant = useref(initialValue)
```
#### Parameters [](https://react.dev/reference/react/useRef#parameters "Link for Parameters")

- `initialValue`: The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render.

#### Returns [](https://react.dev/reference/react/useRef#returns "Link for Returns")

`useRef` returns an object with a single property:

- `current`: Initially, it’s set to the `initialValue` you have passed but after set it as an atribute, becomes the React Node.

#### Description
`useRef` returns a ref object with a single `current` property initially set to the initial value you provided.
Use ref is a plain object, which unlike state is mutable, after rendering you should not change the value if the current value of use ref is bind to a state, because when you change the `ref.current` property, React does not re-render your component. THis is mean that use ref it's perfect to change values that doesn't affect the visual output of your component. For example you could store a variable:
```jsx
function handleStartClick() {  
	const intervalId = setInterval(() => {  
	// ...  
}, 1000);  
	intervalRef.current = intervalId;  
}
```
By using a ref, you ensure that:

- You can **store information** between re-renders (unlike regular variables, which reset on every render).
- Changing it **does not trigger a re-render** (unlike state variables, which trigger a re-render).
- The **information is local** to each copy of your component (unlike the variables outside, which are shared).

###### Example
```jsx
import { useRef } from 'react';

const function = () => {
	const focusRef = useRef()

	useEffect(() => {
		focusRef.current.focus()
	})

	return (
		<form>
			<input 
				ref={focusRef}
			/>
		</form>
	)
}
```
- Here first we utilize the focus ref and it's assigned to a different variable. 
- Then we utilize that variable as a property in the JSX.
- And we call, inside the usseffect, the current of useEffect, which utilize the bound element
- For the last utilize the focus, which is a use ref property