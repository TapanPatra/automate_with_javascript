// ## Declare String Variable 
var firstName = "Alan";

// ## Escaping Literal Quotes in Strings 
var myStr = "I am \"double quoted \" string";
console.log(myStr); // Output: I am "double quoted " string

// ## Quoting Strings With Single Quote
var str = '<a href="http://example.com">Link</a>';
console.log(str); // <a href="http://example.com">Link</a>
// ## Escape Sequence in Strings
/*
\' : Single Quote
\" : Double Quote
\\ : Back Slash
\n : New Line
\r : Carriage Return
\t : Tab
\b : Back Space 
\f : Form Feed
*/

// ## Concatenation 
var ourStr = "I come first | " + "I come second |";
ourStr+= "I come third";
console.log(ourStr); // I come first | I come second |I come third

// ## Appending Variables to Strings
var adjective = "awesome";
var ourStr = "free code camp is ";
ourStr+= adjective;
console.log(ourStr); // free code camp is awesome

var firstNameLength =0;
var firstName = "Ada";
firstNameLength = firstName.length;
console.log(firstNameLength) // 3


// ## Bracket Notation to Find First Character in String
var firstCharacterOfFirstName = " ";
firstCharacterOfFirstName = firstName[0];
console.log(firstCharacterOfFirstName); //A

// ## Bracket Notation to Find Nth Character in String (Last Character)
firstCharacterOfFirstName = firstName[firstName.length - 1];
console.log(firstCharacterOfFirstName); //a

// ## creating strings using template literals
// Object with person details
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal string
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
 
console.log(greeting); 
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.






