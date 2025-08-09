// ## Random Number between 0 and 1
var num = Math.random();
console.log(num); // Random number between 0 and 1 like 0.6936617429616596

// ## Random Number between 0 and 19
var num = Math.random() * 20;
console.log(num); // Random number between 0 and 19 like 2.405586009467222

// ## Random Number between Range
var ourMax=20;
var ourMin = 5;
var num = Math.floor(Math.random()*(ourMax -ourMin+1))+ ourMin;
console.log(num); // Random number between 5 and 20 like 16




