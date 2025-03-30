
### [Parameters](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

[`alignToTop` Optional](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#aligntotop)
A bolean value

[`scrollIntoViewOptions` Optional Experimental](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#scrollintoviewoptions)

An Object with the following properties:

[`behavior` Optional](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#behavior)

Determines the scrolling animation:

- `smooth`: scrolling should animate smoothly
- `instant`: scrolling should happen instantly in a single jump
- `auto`: scroll behavior is determined by the computed value of [`scroll-behavior`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

[`block` Optional](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#block)

Defines the vertical alignment of the element:

- `start`: Aligns the element's top edge with the top of the scrollable container, making the element appear at the start of the visible area vertically.
- `center`: Aligns the element vertically at the center of the scrollable container, positioning it in the middle of the visible area.
- `end`: Aligns the element's bottom edge with the bottom of the scrollable container, placing the element at the end of the visible area vertically.
- `nearest`: Scrolls the element to the nearest edge in the vertical direction. If the element is closer to the top edge of the scrollable container, it will align to the top; if it's closer to the bottom edge, it will align to the bottom. This minimizes the scrolling distance.
- Defaults to `start`.

[`inline` Optional](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#inline)

Defines the horizontal alignment of the element within the scrollable ancestor container. This option is a string and accepts one of the following values:

- `start`: Aligns the element's left edge with the left of the scrollable container, making the element appear at the start of the visible area horizontally.
- `center`: Aligns the element horizontally at the center of the scrollable container, positioning it in the middle of the visible area.
- `end`: Aligns the element's right edge with the right of the scrollable container, placing the element at the end of the visible area horizontally.
- `nearest`: Scrolls the element to the nearest edge in the horizontal direction. If the element is closer to the left edge of the scrollable container, it will align to the left; if it's closer to the right edge, it will align to the right. This minimizes the scrolling distance.
- Defaults to `nearest`.

### [Return value](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#return_value)

None ([`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).