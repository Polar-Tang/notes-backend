
### Usage
TO use the scroll trigger in GSAP we should first register the plugin.

```js
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
	scrollTrigger: ".c",
	x: 400,
	duration: 3,
	rotation: 360
})
```

### Scroll trigger
If you want to trigger the animation in a special circumstance, you could use `toggleActions`, to use this we should turn scrollTrigger into an object:
```js
gsap.to(".c", {
	scrollTrigger: {
		trigger: ".c",
		toggleActions: "play none none none"
	},
	x: 400,
	rotation: 360,
	duration: 3
});
```

