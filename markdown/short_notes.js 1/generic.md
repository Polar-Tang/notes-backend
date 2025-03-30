https://www.typescriptlang.org/docs/handbook/2/generics.html
Generic allow you to manipulate data from any type in a reusable way.
**example**
```ts
function genericFunc<Type>(arg: Type): string {
	return typeof arg;
}

console.log(genericFunc("hola")) // string
console.log(genericFunc(123)) // number
console.log(genericFunc(true)) // bolean
```
We could write the type explicitly
```ts
console.log(genericFunc<string>("hola"))
```

#### Generic Constraints
You might be aware of the properties the prototype that you want to utilize will have. For example we know our argument it's an iterable type where we could use the length property
```ts
function loggingIdentity<Type>(arg: Type): Type {
console.log(arg.length);
// Property 'length' does not exist on type 'Type'.Property 'length' does not exist on type 'Type'.
return arg;
}
```
However this displays an error, that's because we're currently working with all kind of types, and not every type will have the don length property. What we will do is to extend the T generic, to use any type and what have the length prop:
```ts
interface Lengthwise {
	length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
	console.log(arg.length); // Now we know it has a .length property, so no more error
	return arg;
}
```
Now our function is not going to work with any type:
```ts
loggingIdentity(3);
```
We need to provide it as an object that supply the requiremnts:
```ts
loggingIdentity({ length: 10, value: 3 });
```

### Extends
The extends keywords is used for inheritance but in generic the meaning of this could change, it's used for generic contraints, like this:
```ts
function identity<T extends string | number>(value: T): T {
  return value;
}

identity("hello"); // ✅ Works
identity(42);      // ✅ Works
identity(true);    // ❌ Error: 'boolean' is not assignable to 'string | number'
```
So we could extend the generic to be a part of the object.
Now we also could utilize the extends with the [[keyof]] keyword, and this will look like:
```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
	return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
getProperty(x, "m"); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```
###### Another example:
```ts
type User = {
  id: number;
  name: string;
  email: string;
};

function getUserInfo<T extends keyof User>(key: T): User[T] {
  const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
  return user[key]; // Type-safe access
}

console.log(getUserInfo("name")); // ✅ "Alice"
console.log(getUserInfo("age")); // ❌ Error: "age" is not a valid key
```
So:
- `extends` it's used to see if the generic type belongs to certain type
- `extends keyof` it's used to see if the generic is included as a key in certain type 