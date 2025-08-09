// ## Define Array
var ourArray = ["Joh", 23]; //Any Data Type

//empty array
var arr = [];

// ## Nested Array
var ourArray = [["the universe, 42"], ["everything", 101010]];

// ## Access Array Data with Index
var ourArray = [50, 50, 70];
var ourData = ourArray[0];
console.log(ourData); // 50

// ## Modify Array with Index
var ourArray = [50, 50, 70];
ourArray[1] = 45;
console.log(ourArray); // (3) [50, 45, 70]

// ## Access Multidimensional Array with Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], 
                                    [[10,11,12], 13,14]]
console.log(myArray[0][0]); //1
console.log(myArray[3][1]); //13
console.log(myArray[3][0][0]); //10

// ## Manipulate Array with push()
var ourArray = ["Stimson", "J", "Cat"];
ourArray.push(["happy", "Joy"]);
console.log(ourArray); // (4) ['Stimson', 'J', 'Cat', Array(2)]
console.log(ourArray[3]); // (2) ['happy', 'Joy']
console.log(ourArray[3][1]); // Joy

// ## Manipulate Array with pop()
var ourArray = [1,2,3];
var removedFromArray = ourArray.pop(); 
console.log(removedFromArray); // 3
console.log(ourArray); (2) [1, 2]

// ## Manipulate Array with shift()
var ourArray = ["Stimson", "J", ["Cat"] ];
var removedFromArray = ourArray.shift();
console.log(removedFromArray); //Stimson
console.log(ourArray); // (2) ['J', Array(1)]


// ## Manipulate Array with unshift()
var ourArray = ["Stimson", "J", ["Cat"] ];
ourArray.unshift("Happy");
console.log(ourArray); // (4) ['Happy', 'Stimson', 'J', Array(1)]

// ## Shopping List 
var myList = [["cereal", 1], ["milk", 3], ["banana", 12]];
console.log(myList); // (3) [Array(2), Array(2), Array(2)]

