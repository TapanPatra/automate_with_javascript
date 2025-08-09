// ## Iterate with while Loops
var myArray = [];
var i=0;
while(i<5){
    myArray.push(i);
    i++;
}

console.log(myArray); // (5) [0, 1, 2, 3, 4]

// ## Iterate with For Loop
var myArray = [];
for(var i=0; i<5;i++){
    myArray.push(i);
}
console.log(myArray); // (5) [0, 1, 2, 3, 4]

var myArray = [];
for(var i=0; i<10;i+=2){
    myArray.push(i);
}
console.log(myArray); // (5) [0, 2, 4, 6, 8]


var myArray = [];
for(var i=10; i>0;i-=2){
    myArray.push(i);
}
console.log(myArray); // (5) [10, 8, 6, 4, 2]

// ## Iterate through Array with For Loop
var ourArray = [9, 10, 11, 12];
var total =0;
for(i=0; i<ourArray.length; i++){
    total+= ourArray[i];
}

console.log(total); // 42

// ## Nesting For Loops
var arr = [[1,2], [3,4], [5,6,7]];
var product = 1;
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
    for(var j=0; j<arr[i].length;j++){
        console.log(arr[i][j]);
        product*=arr[i][j];
    }
}
console.log(product); 
/*
(2) [1, 2]
1
2
(2) [3, 4]
3
4
(3) [5, 6, 7]
5
6
7
5040
*/

// ## Iterate with Do...While Loops
var myArray =[];
var i=0;
do{
    myArray.push(i);
    i++;
}while(i<5)

console.log(myArray); // (5) [0, 1, 2, 3, 4]






