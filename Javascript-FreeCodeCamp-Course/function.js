// ## Reusable Code with Function
function ourReUsableFunction(){
    console.log("Hey World!");
}
ourReUsableFunction(); //Hey World!


// ## Define Function : Word Blanks 
function wordBanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = " ";

    result = "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return result;

}
console.log(wordBanks("dog", "big", "ran", "quickly"));
//The big dog ran to the store quickly

// ## Passing Values to function with Arguments
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(10-5); // 5

// ## Declarative Function
const bicycle = {
    gear: 2,
    setGear : function(updatedGear){
        this.gear = updatedGear;
    }
};

console.log(bicycle.gear); // 2
bicycle.setGear(5); 
console.log(bicycle.gear); // 5

// Global Scope and function 
var myGlobal = 10;
function func1(){
    oopsGlobal=5;
}
function func2(){
    var output="";

    if(typeof myGlobal != undefined){
        output+= "MyGlobal: " + myGlobal + "||";
    }

    if(typeof oopsGlobal != undefined){
        output+= "oopsGlobal: " + oopsGlobal;
    }

    console.log(output)

}

func1();
func2();
//MyGlobal: 10||oopsGlobal: 5

// ## Local Scope and Function
function myLocalScope(){
    var myVar=5;
    console.log(myVar); // 5
}

// ## Return a Value from Function
function minusSeven(num){
    return num - 7;
}

console.log(minusSeven(10));

// ## Create New Function - Stand in Line
function nextLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArray = [1, 2, 3, 4, 5];
console.log("Before: " + testArray); // Before: 1,2,3,4,5
console.log(nextLine(testArray, 6)); // 1
console.log("After: "+ testArray); // After: 2,3,4,5,6

// ## Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
}

console.log(trueOrFalse(true)); // Yes, that was true

// ## Switch in Function
function sequentialSizes(val){
    var answer ="";
    
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;

        case 4:
        case 5:
            answer = "Mild";
            break;
    }

    return answer;
}

console.log(sequentialSizes(2)) //Low

// ## Returning Boolean Values from Function
function isLess(a,b){
    return a<b;
}
console.log(isLess(5,10)); //true

// ## Return Early Pattern for function
function abTest(a,b){
    if(a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(1,2)); // 6

// ## Default parameters

function Increment(number, value=1){
    return number + value;
}
 var result = Increment(5);
 console.log(result); // 6



