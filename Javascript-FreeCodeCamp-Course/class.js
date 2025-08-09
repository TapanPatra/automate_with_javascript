// ## Class Syntax

class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

// ## Create Object of Class
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // Jupiter

// ## Alternative to Class using Function
var SpaceShuttle2 = function (targetPlanet){
    this.targetPlanet = targetPlanet;
}

var zeus2 = new SpaceShuttle2('Venus');
console.log(zeus2.targetPlanet); // Venus


// ## Getters and Setters
class Book{
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

console.log(new Book("Tap").writer); // Tap
var myBook = new Book('Aru');
console.log(myBook.writer); // Aru 
myBook.writer = "Rab";
console.log(myBook.writer);  //Rab
