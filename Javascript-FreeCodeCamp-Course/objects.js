// ## Build Objects
var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
}

console.log(ourDog); // {name: 'Camper', legs: 4, tails: 1, friends: Array(1)}


// ## Dot Notation 
var testObject = {
    "hat": "BallCap",
    "shirt":"Jersey",
    "shoes":"adidas"
}

var hatValue = testObject.hat;
console.log(hatValue); // BallCap
var shirtValue = testObject.shirt;
console.log(shirtValue); // Jersey

// ## Accessing Object Properties with Bracket Notation
var myPizzaObject = {
    "an entree":"hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue= myPizzaObject['an entree'];
console.log(entreeValue); // hamburger

// ## Access Object Properties with Variable
var testObject = {
    12:"Twelve",
    16:"Sixteen",
    20:"Twenty"
}

var number =16;
console.log(testObject[number]); // Sixteen


// ## Updating Object Properties
var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
}

ourDog.name ="Happy Camper";
console.log(ourDog); // {name: 'Happy Camper', legs: 4, tails: 1, friends: Array(1)}

// ## Add New Properties to Object
ourDog.bark = "bow-bow";
console.log(ourDog); // {name: 'Happy Camper', legs: 4, tails: 1, friends: Array(1), bark: 'bow-bow'}

// ## Delete Properties from Object
delete ourDog.bark;
console.log(ourDog); // {name: 'Happy Camper', legs: 4, tails: 1, friends: Array(1)}

// ## Using Objects for Lookup
function phoneticLookup(val){
    var result= "";
    var lookup = {
        "alpha":"adams",
        "bravo": "boston"
    };
    result = lookup[val]
    return result;
}

console.log(phoneticLookup("alpha")); // adams

// ## Testing Object for Properties
var myProfile = {
    "name":"Tap",
    "designation":"Automation Engineer",
    "Skill": ["C#", "Python", "Javascript", "Java"]
}

function CheckObjProperties(propertyName){
    if(myProfile.hasOwnProperty(propertyName)){
        return myProfile[propertyName];
    }
    else{
        return "Not Found"
    }
}

console.log(CheckObjProperties("designation")); //Automation Engineer
console.log(CheckObjProperties("mySkills")); // Not Found


// ## Manipulating Complex Objects
var myMusic = [
    {
        "artist":"Sonu Nigam",
        "title": "Churake Dil Mera",
        "release_year": "1973",
        "formats":["CD", "Online"],
        "gold":true
    },
    {
        "artist":"Kumar Sanu",
        "title": "Udake Daman",
        "release_year": "1973",
        "formats":["CD", "Online"],
        "gold":true
    }
];

console.log(myMusic[0].artist) // Sonu Nigam

// ## Accessing Nested Objects 
var myStorage = {
    "car":{
        "inside":{
            "globe_box":"map",
            "passenger_seat":"Crumbs"
        },
        "outside":{
            "trunk":"Jack"
        }
    }
};

var globeBoxContent = myStorage.car.inside["globe_box"];
console.log(globeBoxContent); // map

// ## Accessing Nested Arrays 
var myPlants = [
    {
        "type": "flower",
        "list":["rose", "tulip", "dandelion"]
    },
    {
        "type":"trees",
        "list":["fir", "pine", "birch"]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree); // pine



//console.log(myPlants);
//var copy = JSON.parse(JSON.stringify(myPlants));
//console.log(copy);

// ## object creation using simple fields (object property shorthand
// Without shorthand
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));

// With shorthand (simplified)
const createPersonShort = (name, age, gender) => ({ name, age, gender });

console.log(createPersonShort("Zodiac Hasbro", 56, "male")); 
//{name: 'Zodiac Hasbro', age: 56, gender: 'male'}
//{name: 'Zodiac Hasbro', age: 56, gender: 'male'} 








