

flex has by default `flex-direction: row;` so if you apply display flex, the items aligned in row automatically.
```js
#container {
    background-color: grey;
    display: flex;
}
```

### Number as a value
Flex could accept numbers as values.
```css
flex: [flex-grow] [flex-shrink] [flex-basis];
```
To control how much the children will ocuppy in its parent we use a number as a value `flex: 0 0 X%;` 
- `0`: The panel should not **grow** to take up extra space.
 - `0`: The panel should not **shrink** if there's not enough space.
 - `X%`: The exact width each panel will occupy.