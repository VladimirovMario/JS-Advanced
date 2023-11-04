1; // Import one by one.
import { sum, multiply, data } from './module.js';
2; // How to rename it.
import { sum as secondSum } from './second.js';
console.log(sum(3, 5));
console.log(multiply(3, 5));
console.log(data);
console.log(secondSum(3, 5, 5));

3; // import everything from module.js

// import * as api from "./module.js";
// console.log(api.sum(3, 5));
// console.log(api.multiply(3, 5));
// console.log(api);
/*
Object { data: (3) […], multiply: multiply(a, b), sum: sum(a, b)
, … }
​
data: Array(3) [ 1, 2, 3 ]
​
multiply: function multiply(a, b)​
sum: function sum(a, b)
​
Symbol(Symbol.toStringTag): "Module"
*/

4; //export from app.js (imported from module.js)
export { data } from './module.js';

import { secondData } from './module.js';

export { secondData } from './module.js';

5; // The default import, can be only one.
import Person from './Person.js';

const myPerson = new Person('Mario', '39');
console.log(myPerson);
