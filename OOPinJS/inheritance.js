
// prototype chaining and Object.prototype

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};

var prototype = Object.getPrototypeOf(book);
console.log( prototype === Object.prototype);  // true

// the most important properties inherited from Object.prototype:
// hasOwnProperty()
// propertyIsEnumerable()
// isPrototypeOf()
// valueOf()
// toString()

// valueOf() - gets called whenever an operator is used on an object
// by default, it simply returns the object instance
var now = new Date();
var earlier = new Date(2010, 1, 1);
console.log(now > earlier);  // true
console.log(now);  // calls toString()
console.log(now.toString());
console.log(now.toDateString() + " - " + now.toISOString() + " - " + now.toLocaleDateString());


// toString() - is called as a fallback whenever valueOf() returns a reference value instead of a primitive value

var message = "Book: " + book;  // calls book.toString() - from the prototype
console.log(message);

book.toString = function() {
    return "[" + this.title + "]";
}

console.log("Book: " + book.toString());