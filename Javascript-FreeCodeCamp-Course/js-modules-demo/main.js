// main.js

// Named import
import { PI, add, subtract } from './math.js';
console.log("PI =", PI);
console.log("5 + 3 =", add(5, 3));
console.log("5 - 3 =", subtract(5, 3));

// Named import with rename
import { add as sum } from './math.js';
console.log("Renamed add (sum):", sum(2, 4));

// Default import
import greet from './greet.js';
console.log(greet("Tapan"));

// Import all as object
import * as MathUtils from './math.js';
console.log("MathUtils.PI =", MathUtils.PI);
console.log("MathUtils.add =", MathUtils.add(10, 20));

// Mixed imports
import sayHello, { language } from './mixed.js';
sayHello();
console.log("Language:", language);

/*
PI = 3.14159
5 + 3 = 8
5 - 3 = 2
Renamed add (sum): 6
Hello, Tapan!
MathUtils.PI = 3.14159
MathUtils.add = 30
Hello from mixed.js!
Language: JavaScript
*/