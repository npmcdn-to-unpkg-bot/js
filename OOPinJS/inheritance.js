
// prototype chaining and Object.prototype

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};

var prototype = Object.getPrototypeOf(book);
console.log( prototype === Object.prototype);  // true

// ---- Object.prototype:
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

// Note:
// modifying Object.prototype is not recommended and a classic advice is:
// always use hasOwnProperty() in for-in loops

// ---- object inheritance:
// is the simplest of inheritance methods; all you need to do is specify what object
// should be the new object's [[Prototype]]; this can also be specified with the Object.create() method

// the previous object-literal definition of "book" is the same as:
var book2 = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "The Principles of Object-Oriented JavaScript",
        writable: true
    }
});

console.log(book2.title);

// ---- (1) inheriting from other objects:

var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable: true
    }
});

person1.sayName();
person2.sayName();
console.log(person1.hasOwnProperty("sayName"));  // true
console.log(person1.isPrototypeOf(person2));     // true
console.log(person2.hasOwnProperty("sayName"));  // false, it's an inherited property, not own

// ---- (2) constructor inheritance

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
}

Rectangle.prototype.toString = function() {
    return "[Rectangle " + this.length + "x" + this.width + "]";
}


// Square inherits from rectangle
function Square(size) {
    this.length = size;
    this.width = size;
}

Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
    return "[Square " + this.length + "x" + this.width + "]";
}

var rectangle = new Rectangle(5, 10);
var square = new Square(6);

console.log(rectangle.getArea());
console.log(square.getArea());
console.log(rectangle.toString());
console.log(square.toString());
console.log("rectangle instanceof Rectangle: ".concat(rectangle instanceof Rectangle));
console.log("rectangle instanceof Object: ".concat(rectangle instanceof Object));

console.log("square instanceof Square: ".concat((square instanceof Square).toString()));
console.log("square instanceof Rectangle: ".concat(square instanceof Rectangle));
console.log("square instanceof Object: ".concat(square instanceof Object));


// ---- (3) Stealing constructor of supertype
function Square2(size) {
    Rectangle.call(this, size, size);

    // optional: add new properties or override existing ones here
}

Square2.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square2,
        writable: true
    }
});

Square2.prototype.toString = function() {
    return "[Square2 " + this.length + "x" + this.width + "]";
}

var square2 = new Square2(7);
console.log(square2.length);
console.log(square2.width);
console.log(square2.getArea());
console.log(square2.toString());

// ---- (4) accessing supertype (base) methods
// example: let's replace the Square.toString function by calling first the supertype (Rectangle) toString()

Square2.prototype.toString = function() {
    var text = Rectangle.prototype.toString.call(this);
    return text.replace("Rectangle", "Square2-replaced-toString");
}

console.log(square2.toString());