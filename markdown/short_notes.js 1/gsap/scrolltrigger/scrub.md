Scrub it an atributte from [[scroll trigger use in gsap]] which links an animations to the scroll bar. It gets activated by scrub set to the value of true:
```js
gsap.to(".c", {
	scrollTrigger: {
		trigger: ".c",
		toggleActions: "restart none none none ",
		start: "top 80%",
		scrub: true,
		end: () => "+=" + document.querySelector(".c").offsetWidth,
		markers: true
	},
	x: 200,
	rotation: 360,
	duration: 3
});
```
Or instead of a bolean, we could use a number to head up the animation