https://react.dev/reference/react/useCallback
Caches a function to not re-run it in every new render
### Syntax:
```jsx
useCallback((fnArgs) => { CallbackFn(fnArgs)  }, [depndency1, dependency2]);
```
#### Parameters [](https://react.dev/reference/react/useCallback#parameters "Link for Parameters")

- `fn`: The funtion or functions which their values will be cached. This function is not ran unless the the dependencies (Second arguments) have changed. This means the initial value are stored until that dependencies have changed.
    
- `dependencies`: The list of all reactive values referenced inside of the `fn` code.
#### Returns [](https://react.dev/reference/react/useCallback#returns "Link for Returns")

On the initial render, `useCallback` returns the `fn` function you have passed.

During subsequent renders, it will either return an already stored `fn` function from the last render (if the dependencies haven’t changed), or return the `fn` function you have passed during this render.

### Example
Use callback will store the value until its dependency change, this means it will keep the initial state unless you change a dependency
```jsx
import React, { useState, useCallback } from "react";

function ToggleComponent() {
  const [isOn, setIsOn] = useState(false);

  // This function will be the same unless `isOn` changes
  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  console.log("Component re-rendered");

  return (
    <div>
      <p>Toggle is {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
```