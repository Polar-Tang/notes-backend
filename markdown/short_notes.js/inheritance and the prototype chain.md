In programming, _inheritance_ refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.  It's like a endless chain that advanced until it finds a null, this is an example:
```js
const animal = { type: 'animal' };
const dog = Object.create(animal); // dog inherits from animal
const myDog = Object.create(dog); // myDog inherits from dog

// Prototype chain: myDog --> dog --> animal --> Object.prototype --> null
```


When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
The prototype chain is when you try to access a property on an object, JavaScript first looks at the object itself to find it. If it doesn’t find it, JavaScript looks at the object’s prototype, then at the prototype’s prototype, and so on, until it reaches the end of the chain (where the prototype is `null`).