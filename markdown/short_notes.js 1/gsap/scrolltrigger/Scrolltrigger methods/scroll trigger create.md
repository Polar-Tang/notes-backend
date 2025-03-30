The `scroll trigger create` method creates a scroll trigger instance that will listening to the screen scrolling on the page, based in the option you have provided.
### **What Each Option Means:**

| Option            | Description                                                                                                                                                    | arg type |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `animation`       | The animation from gsap a sequence of animations, just like a timeline                                                                                         | string   |
| `trigger`         | An html element that scroll trigger watches to start or stop the animation                                                                                     | string   |
| `start`           | `start` point, relative to the trigger element                                                                                                                 | string   |
| `end`             | `end` point, relative to the trigger element                                                                                                                   | string   |
| `pin`             | If `true`, the `trigger` element will be **pinned in place** as the user scrolls. (It **sticks** to the top of the viewport until the animation is completed.) | bolean   |
| `pinSpacing`      | If `false`, GSAP **removes the extra space normally added when pinning**. Useful for smooth transitions between pinned and unpinned sections.                  | bolean   |
| `onEnter`         | Triggered every time the screen enter. It's like event listener.                                                                                               | callback |
| `onLeave`         | Every time the screen leaves                                                                                                                                   | callback |
| `onEnterBack`     | it triggered when enterbacks                                                                                                                                   | callback |
| `onLeaveBack`     | or when you leave                                                                                                                                              | callback |
| `onUpdate`        | Everitime the scroll trigger get's updated executes the callback function                                                                                      | callback |
| `onToggle`        | Toggle the function from the callback everytime that the start and end limits from the animated objects get's active                                           | callback |
| `toggleClass`     | Toggle a class when the animated object gets active                                                                                                            | string   |
| `id`              | An arbitrary string key that we could set, later we can access it with `ScrollTrigger.getById("my-id")`                                                        | string   |
| `scroller`        | The scroll trigger by default is always the viewport, but with this property we could use a selector to watch for this element as the scroll trigger           | string   |
| `horizontal`      | true to use horizontall scroll                                                                                                                                 | bolean   |
| `onScrubComplete` | the value of this is a function which is triggered every time the user last to scroll the scrub (you need `scrub: number` attribute to this work)              | callback |

---
### Example of `onUpdate`
```js
ScrollTrigger.create({
	trigger: ".oush",
	start: "top center",
	end: "bottom center",
	onUpdate: (self) => { document.getElementById("progress").innerHTML = self.progress.toFixed(3) },
	markers: true
})
```

### Example 
```js
ScrollTrigger.create({
	trigger: ".oush",
	start: "top center",
	end: "bottom center",
	onUpdate: (self) => { document.getElementById("progress").innerHTML = self.progress.toFixed(3) },
	markers: true
})
```