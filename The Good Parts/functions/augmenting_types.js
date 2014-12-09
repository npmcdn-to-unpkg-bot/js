
// augmenting types

/*
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};
*/

// The prototypes of the basic types are public structures, so care must be taken when mixing libraries.
// One defensive technique is to add a method only if the method is known to be missing:

// Add a method conditionally:

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

// an example of using the 'method' method added to the Function.prototype:
// JavaScript does not have a separate integer type, so it is sometimes necessary to extract just the integer part of a number.
// The method JavaScript provides to do that is ugly. We can fix it by adding an integer method to Number.prototype.
// It uses either Math.ceil(ing) or Math.floor, depending on the sign of the number:

Number.method('integer', function (  ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer(  ));  // -3


// another example of using the 'method' method added to the Function.prototype:
// JavaScript lacks a method that removes spaces from the ends of a string. That is an easy oversight to fix,
// by adding a 'trim' method to the String.prototype:

String.method('trim', function (  ) {
    return this.replace(/^\s+|\s+$/g, '');
});

console.log('"' + "   neat   ".trim(  ) + '"');


