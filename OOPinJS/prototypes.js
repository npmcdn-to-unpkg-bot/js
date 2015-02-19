
// A prototype is essentially a recipe for an object.

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};

console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true
console.log("hasOwnProperty" in book); // true
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

console.log(book.hasOwnProperty("hasOwnProperty")); // false

// Identifying a prototype property:
// helper function to determine whether a property is on the prototype:
function hasPrototypeProperty(object, name)
{
    return name in object && !object.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(book, "title")); // false, title is not part of the prototype
console.log(hasPrototypeProperty(book, "hasOwnProperty")); // true, hasOwnProperty is always part of the prototype


// Creating an object without any own properties; adding own properties later:
var anObject = {};

console.log(anObject.toString());

// add/override the toString() method
anObject.toString = function() {
    return ["anObject Custom toString"];
}

console.log(anObject.toString());

// now delete the toString() method
delete anObject.toString;
console.log(anObject.toString());

// now try to delete the toString() method again - no effect,
// only own properties can be deleted
delete anObject.toString;
console.log(anObject.toString());


// using prototypes with constructors

function Person(name) {
    this.name = name;
    this.favorites = [];  // NOTE: this makes all the difference!
};

Person.prototype.sayName = function() {
    console.log(this.name);
};

Person.prototype.addToFavorites = function(fav) {
    this.favorites.push(fav);
};

Person.prototype.getFavorites = function() {
    return this.favorites;
};

// NOTE: careful with shared references!
Person.prototype.favorites = [];

var nick = new Person("Nicholas");
var greg = new Person("Gregory");

nick.sayName();
greg.sayName();

// these will add to the shared reference in the prototype
nick.favorites.push("pizza");
greg.favorites.push("quinoa");

console.log(nick.favorites);
console.log(greg.favorites);

// to make sure each Person has it's own favorites,
// use "this"
nick.addToFavorites("pizza");
greg.addToFavorites("quinoa");

console.log(nick.getFavorites());
console.log(greg.getFavorites());

// http://www.toptal.com/javascript/10-most-common-javascript-mistakes
