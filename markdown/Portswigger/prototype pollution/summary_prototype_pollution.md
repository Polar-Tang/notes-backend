https://portswigger.net/web-security/prototype-pollution

Prototype pollution occurs in JavaScript, basically means to an attacker to add properties to a global object and to cause the object to inheritance this.
JavaScript is a [[prototype-based inheritance]] where every prototype is chained, prototype pollution use to be unexploitable by itself, but could be very dangerous by chaining to another vulnerabilities.

### Description
Porto-type pollution occurs when an object inheritance user-controllable properties, and those props are not properly sanitized before.

### Exploitable?
The requirements to have a prototype pollution exploitable are:
- A source with user input
- A sink, a JavaScript function that enables code execution
- An exploitable gadget