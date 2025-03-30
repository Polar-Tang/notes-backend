### Start and End
We could use keywords like start, center or end to indicate the limits from the animations
- End And start represents points in the website. 
- Whenever the viewport reachs one of these point, the animation will start or end depending the case.
- The `start` poperty in `ScrollTrigger` defines where the animation should start.
- The `end` property in `ScrollTrigger` **defines when your animation or pinned element should complete or unpin**.
##### example
When you define values like `"top end"`, `"center bottom"`, you are already defining where your scrolltrigger's animation ends/starts relative to the position in the viewport
Seeing the markers and look to this example:
![[Pasted image 20250314220706.png]]
```js
start: "top center"
```
Whent the top marker is in the center the scroll-element is triggered.
The end indicates where the animation.

#### Measure for start and end
We could also use percentage and pixels to get the value, which are always relative to the path.

#### equal plus `=+`
THe equal plus measure means to use the start or end, relative to its oposite, so `end += 100px` means 100 pixels more than the start point