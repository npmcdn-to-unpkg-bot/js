
// JavaScript provides a set of methods for acting on arrays.
// The methods are functions stored in Array.prototype.
// In Chapter 3, we saw that Object.prototype can be augmented. Array.prototype can be augmented as well.

// For example, suppose we want to add an array method that will allow us to do computation on an array:

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

Array.method ('reduce', function (f, value) {
    for (var i = 0; i < this.length; i++) {
        value = f(this[i], value);
    }
});

// now let's use this ne method:
var data = [4, 8, 15, 16, 23, 42];

// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a * b;
};

// Invoke the data's reduce method we just added:
var sum = data.reduce (add, 0);
console.log ('sum of elements in the array is: ' + sum);

var product = data.reduce (mult, 1);
console.log ('product of elements in the array is: ' + product);

// very important:
// Because an array is really an object, we can add methods directly to an individual array:

// Give the data array a total function.

data.total = function () {
    return this.reduce(add, 0);
};

total = data.total ();    // total is 108
console.log ('the total of elements in the array is: ' + total);