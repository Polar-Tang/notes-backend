Perspective camara initialize at the origin (`0,0,0`) by default.
![[Pasted image 20250224154722.png]]
- FOV is the size of the scene
- Aspect Ratio use to be weight divided by height
- Is the distance from where and where to move

### 3D perspective
In 3D rendering, if the camera is inside or too close to an object, it can lead to:

- **Clipping:** Parts of the object might be cut off or disappear from view.
- **Z-fighting:** If objects are at the same depth (same Z-coordinate) and very close, the rendering engine might struggle to decide which object should be in front, leading to flickering or visual artifacts.
- **Obstructed View:** You might be inside the object and unable to see its overall shape or the scene around it.