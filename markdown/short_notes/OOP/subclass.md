Subclasses are extensions from a parent class. This extensions are independent from the parent class.
#### Example

```js
class Animal {
    makeSound() {
        console.log("Makes a general animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Barks at the moon");
    }
}
```

Many languages doesn't leave to inherit behavior from different classes