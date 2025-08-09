// ## Variables
var number = 5; 

// ## Comment

//inline comment

/* This is
multiline comment
*/


// ## Data Types
myName= "Beau";
myName =8;
let ourName = "freeCodeCamp"; //within scope
const pi = 3.14; //never change

var a;
b=2;
a=10;
b=a;
console.log(a); // Output: 10


/* 
undefined
null
boolean
string
symbol
number
object
*/


//## Storing Values within Assignment Operator
var a;
var b = 2; a=7; b=a;
console.log(a); // Output: 7

// ## Case Sensitivity in Variable
// camelcase 
var studlyCapVar;

// ## Var vs Let
let catName = "Quincy";
// let catName = "Beau"; // Not Allowed
catName = "Beau"; // Allowed

var myCatName = "Quincy";
var myCatName = "Beau"; // Allowed

// ## Declare Variable as Readonly
const SENTENCE = "is cool";
// SENTENCE = "is amazing" //  TypeError: Assignment to constant variable.

// ## Mutate an Array Declared with Constant
const ARR = [5,7, 2];
// ARR = [2,5,7]; // not allowed
ARR[0]=2; ARR[1]=5;ARR[2]=7;
console.log(ARR); // (3) [2, 5, 7]

// ## Parent Object Mutation
const MATH_CONST = {
    PI:3.14
};
try{
    MATH_CONST.PI = 99;
    console.log(MATH_CONST.PI); // 99
}catch(ex){
    console.log("Error");
}


const MATH_CONST2 = {
    PI:3.14
};
Object.freeze(MATH_CONST2)
try{
    MATH_CONST2.PI = 99;
    console.log(MATH_CONST2.PI); // 3.14
}catch(ex){
    console.log("Error");
}

