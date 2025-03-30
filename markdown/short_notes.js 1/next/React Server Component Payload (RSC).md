React server component are the react components by executed by the client side
RSC are used for next by default, unless you specify `"use client"` at the top of the file.
With next you can choose where to render server components and where to render client components. 
Imagine you could choose to render a navbar on the client but you need to reflect the active links on the client, so you should render it on the client
![[Pasted image 20250308232325.png]]

### Example
In this example we got a component executed in the server. However as it is using use State, and updating the UI it will throw an error, because the UI can't be updated from the server side 
```jsx
function Header({ title }) {
	return <h1>{title ? title : "Default title"}</h1>
}
export default function HomePage() {
	const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
	const [likes, setLikes] = React.useState(0)
	function handleClick() {
		setLikes(likes + 1)
	}
	return (
		<div>
		<Header title="Develop. Preview. Ship." />
		<ul>
		{names.map((name) => (
		<li key={name}>{name}</li>
		))}
		</ul>
		<button onClick={handleClick}>Like ({likes})</button>
		</div>
	)
}
```
We need to pass the component that need to be executed from the client side to another component that use the client
```jsx
"use client"
import { useState } from 'react';

export default function LikeButton() {
	const [likes, setLikes] = useState(0);
	function handleClick() {
	setLikes(likes + 1);
}

	return <button onClick={handleClick}>Like ({likes})</button>;
}
```

```
function Header({ title }) {

return <h1>{title ? title : "Default title"}</h1>

}

export default function HomePage() {

const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

return (

<div>

<Header title="Develop. Preview. Ship." />

<ul>

{names.map((name) => (

<li key={name}>{name}</li>

))}

</ul>

<LikeButton />

</div>

)

}
```

