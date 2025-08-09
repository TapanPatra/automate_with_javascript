// ## Use  the Conditional Ternary Operator 
var a = 10;
var b = 10;
console.log (a===b? true: false); //true

// ## Use Multiple Ternary Operator 

var n =0;
var result = n >0 ?  "positive": n<0 ? "negative":"zero";
console.log(result); //zero

// ## Else statement 
var val = 10;
var result = "";
if(val > 5){
    result = "Bigger than 5";
}
else{
    result = "5 or Smaller";
}
console.log(result); // Bigger than 5

// ## Else if Statement 
var val =5;
var result = "";
if(val > 10){
    result = "Greater than 10";
}
else if(val<5){
    result =  "Smaller than 5";
}
else{
    result =  "Between 5 and 10"
}
console.log(result); // Between 5 and 10

// ## Switch Statements
function caseInSwitch(val){
    var answer="";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;

        default:
            answer ="stuff";
            break;
    }

    return answer;
}

console.log(caseInSwitch(2)); // beta

