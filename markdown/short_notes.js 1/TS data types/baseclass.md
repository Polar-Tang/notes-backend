baseclass utilizes a class to extend on it.
The parent has a property, and a method for its property which relies on another class
```ts
class Parent {
	childThing: Children // childThing is CHildren type
	  
	constructor(childThing: Children) {
		this.childThing = childThing
	}
	
	helloChild() {
		return this.childThing.childrenMethod() // derived to childTHing
	}
}

class BaseClass {
	childrenMethod() {} // A base class, so another classes similars from Children could have the same structure
}
  
class Children extends BaseClass { // The children class derived from the base class
	childrenMethod() {
		return "Hello from the chilldren"
	}
}

const theParent = new Parent(new Children())
console.log(theParent.helloChild()
```