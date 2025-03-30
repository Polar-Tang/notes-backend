Return node list elements that ocurrence with the given selectors

#### Syntax
```js
const imgNode = listNode.querySelectorAll('li > img')[index];
```

### [Parameters](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll#parameters)

#### [`selectors`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll#selectors)
A string contaning the selectors to match. It should be a valid CSS selector

### [Return value](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll#return_value)

A non-live [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) containing one [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) object for each element that matches at least one of the specified selectors or **an empty** [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) **in case of no matches.** The elements are in document order — that is, parents before children, earlier siblings before later siblings.