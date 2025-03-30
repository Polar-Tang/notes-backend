https://www.typescriptlang.org/docs/handbook/decorators.html
The decorators in TS are function invoked at the same time that the function or class. this can be re-utilized by different classes. It simply it's wrapped by the class so the function could remains the same.

#### Declaration
The declaration will look always as follows:
```ts
@decoratorName
class SomeClass { }
```
**or**
```ts
class SomeClass {
  @decoratorName
  method() { }
}
```

Now in this case, the decorator name will be executed with the class:
```ts
function SimpleDecorator(target: Function) {
  console.log("SimpleDecorator executed on:", target);
}

@SimpleDecorator
class MyClass { }
```
When a decorator is applied to a **class**, the argument it receives is the **constructor function** of that class as an argument.

### **Decorator factory**
The decorator is a function that return another **function**, which will be the decorator 
```ts
function color(value: string) {
	// this is the decorator factory, it sets up
	// the returned decorator function
	return function (target) {
		// this is the decorator
		// do something with 'target' and 'value'...
	};
}
```


### **Extending the Constructor**

1️⃣ **Define a constructor type signature:**

```ts
{ new (...args: any[]): {} }
```

- This represents a **class constructor**.
- It **must return an object**.

2️⃣ **Extend the generic type to enforce this constraint:**

```ts
<T extends { new (...args: any[]): {} }>
```

- Ensures `T` **must be a class** (i.e., an instantiable function).
- Now extends the generic to this properties, see [[generic]]. 
- Guarantees that `T` **returns an object**.

3️⃣ **Use this in a function to extend a class dynamically:**

```ts
function extendClass<T extends { new (...args: any[]): {} }>(BaseClass: T) {
  return class extends BaseClass {
    newProperty = "I was added dynamically!";
  };
}
```

Then the return value it's an extension of the baseclass:
```ts
function extendClass<T extends { new (...args: any[]): {} }>(BaseClass: T) {
  return class extends BaseClass {
    newProperty = "I was added dynamically!";
  };
}

class Person {
  name = "Alice";
}

const EnhancedPerson = extendClass(Person);
const instance = new EnhancedPerson();

console.log(instance.name); // "Alice"
console.log(instance.newProperty); // "I was added dynamically!"
```
#### Example
```ts
class BasicMath {
  sumar(a: number, b: number){
    return a + b
  }

  restar(a: number, b: number){
    return a - b
  }

  multiplicar(a: number, b: number){
    return a * b
  }

  dividir(a: number, b: number){
    if (b === 0) {
      throw new Error('No se puede dividir entre 0')
    }
    return a / b
  }
}

const mathDecorator = (fun) => {
  return function(...args){
    console.log(`Llamando a la funcion ${fun.name} con argumentos`, args)
    return fun.apply(this, args)
  }
}

BasicMath.prototype.sumar = mathDecorator(BasicMath.prototype.sumar)
BasicMath.prototype.restar = mathDecorator(BasicMath.prototype.restar)
BasicMath.prototype.multiplicar = mathDecorator(BasicMath.prototype.multiplicar)
BasicMath.prototype.dividir = mathDecorator(BasicMath.prototype.dividir)

const test = new BasicMath()

console.log(test.sumar(2, 3))
console.log(test.restar(5, 3))
console.log(test.multiplicar(4, 3)) 
console.log(test.dividir(10, 2)) 
```
#### Class and interfaces
You could also define an interface, then you could access to the property
```ts
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		reportingURL = "http://www...";
	};
}
  
@reportableClassDecorator
class BugReport {
	type = "report";
	title: string;
	  
	constructor(t: string) {
		this.title = t;
	}
}

  

const bug = new BugReport("Needs dark mode") as BugReport & reportable
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
  
// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:

console.log(bug.reportingURL)
```
### **Extending the Constructor**

1️⃣ **Define a constructor type signature:**

```ts
{ new (...args: any[]): {} }
```

- This represents a **class constructor**.
- It **must return an object**.

2️⃣ **Extend the generic type to enforce this constraint:**

```ts
<T extends { new (...args: any[]): {} }>
```

- Ensures `T` **must be a class** (i.e., an instantiable function).
- Guarantees that `T` **returns an object**.

3️⃣ **Use this in a function to extend a class dynamically:**

```ts
function extendClass<T extends { new (...args: any[]): {} }>(BaseClass: T) {
  return class extends BaseClass {
    newProperty = "I was added dynamically!";
  };
}
```

#### Accessor decorator
An **accessor decorator**, on the other hand, is accessing to the class prototype.
