// ## Arrow Function write concise Anonymous function
var magic = () => console.log("I am arrow function");
magic(); //I am arrow function
console.log(magic); //() => console.log("I am arrow function")

// ## Write Arrow Function with Parameters
var arr1 = [1,2];
var arr2 = [3,4];
var myConcat = (arr1, arr2) => {
    return arr1.concat(arr2)
};

var result = myConcat(arr1, arr2);
console.log(result); //(4) [1, 2, 3, 4]

// ## Write Higher Order Arrow function
var realArray = [4, 5.6, -2, -9.8, 2];
var Int;
const IntList = (arr) =>{
    Int = arr.filter( num => Number.isInteger(num) && num > 0);
};

IntList(realArray);
console.log(Int); //(2) [4, 2]
// ------------------------------
var squareInt;
const squareList = (arr) =>{
    squareInt = arr.filter( num => Number.isInteger(num) && num > 0)
                .map( x=> x*x);
};

squareList(realArray);
console.log(squareInt); // (2) [16, 4]


 // ## Rest Operator
 // Example without rest operator
function fsum(a, b) {
    return a + b;
}

console.log(fsum(1, 2));           // 3
console.log(fsum(1, 2, 3, 4, 5));  // 3 (extra arguments ignored)


// Example using rest operator
function fsumRest(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(fsumRest(1, 2, 3, 4, 5)); // 15

// ## Spread Operator 
// Original array
let arr1 = ["Jan", "Feb", "March"];

// Copy the content of arr1 into arr2
let arr2 = [...arr1];

let arr1_new = ["patch"];

// IIFE (Immediately Invoked Function Expression) example
(function () {
    arr2 = [...arr1];
    arr1_new[0] = "patch";
})();

// ## destructuring assignment from objects
// Example object
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// Without destructuring
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

console.log(x, y, z); // 3.6 7.4 6.54

// With destructuring
const { x: a, y: b, z: c } = voxel;

console.log(a, b, c); // 3.6 7.4 6.54

// ## destructuring assignment with nested objects:
// Example nested object
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

// Destructuring nested object
const { tomorrow: { max: maxOfTomorrow } } = LOCAL_FORECAST;

console.log(maxOfTomorrow); // 84.6

// ## destructuring assignment from arrays and using it with the rest operator:
// Destructuring assignment from array
const [z, x, y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y); // 1 2 3


// Destructuring assignment with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [p, q, ...arr] = source;

console.log(p);    // 1
console.log(q);    // 2
console.log(arr);  // [3, 4, 5, 6, 7, 8, 9, 10]

// ##  using destructuring assignment to pass an object as a function’s parameter:
// Object with multiple properties
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 35.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Function using destructuring in parameters
const half = ({ max, min }) => (max + min) / 2.0;

console.log(half(stats)); // 28.015







