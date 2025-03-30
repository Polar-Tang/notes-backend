To use optional values you could use the quiestion mark syntax:
```ts
interface PaintOptions {
	shape: Shape;
	xPos?: number;
	yPos?: number;
}

function paintShape(opts: PaintOptions) {
// ...
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

However, thank the [strict null](https://www.typescriptlang.org/tsconfig/#strictNullChecks) property the optional property should be handled with conditional
