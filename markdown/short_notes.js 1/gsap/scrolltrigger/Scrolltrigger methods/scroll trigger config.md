https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.config()/

This will define an object with a common settings for all the scroll triggers.
### Example
```js
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true
});
```

----


| Option               | Description                                                                                                                                                  | arg type |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `limitCallback`      | Controll the limit of firing for the callbacks                                                                                                               | bolean   |
| `ignoreMobileResize` | When `true`, `ScrollTrigger` will **ignore viewport resizes caused by the virtual keyboard appearing or other mobile-related adjustments**.                  | bolean   |
| `autoRefreshEvents`  | By default scroll trigger `refresh()` on the following examples: `"visibilitychange,DOMContentLoaded,load,resize"` but you could set it to a subset of those |          |

