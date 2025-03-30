with from you define the value where the animated element should start
### Example
```js
let tween = gsap.from(".class", {
  rotation: 360,
  duration: 5,
  ease: "elastic",
});

//now we can control it!
tween.pause();
tween.seek(2);
tween.progress(0.5);
tween.play();
```
## Parameters[​](https://gsap.com/docs/v3/GSAP/gsap.from\(\)/#parameters "Direct link to Parameters")

1. **targets** - The element to animate, usually an HTML element which is accessed with a selector, e.g. `".class"`, `"#id"`, etc.
2. **vars** - An object containing all the properties/values you want to animate.