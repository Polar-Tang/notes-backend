The scene is like our 3d world and add is to add some animation.
To create a scene do:
```js
const scene = new THREE.Scene();
```
We mesh all of these and then we could add all the materials:
```js
const scene = new THREE.Scene();
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
```