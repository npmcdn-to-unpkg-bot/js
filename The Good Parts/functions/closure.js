
// closures in JavaScript

// The good news about scope is that inner functions get access to the parameters and variables of the functions they are defined within 
// (with the exception of this and arguments). This is a very good thing.

// We are not assigning a function to myObject; we are assigning the result of invoking that function!
//
// Instead of initializing myObject with an object literal, we will initialize myObject by calling a function
// that returns an object literal. That function defines a 'value' variable and this variable is always available
// to the 'increment' and 'getValue' but the function's scope keeps it hidden from the rest of the program.
var myObject = function() {
	var value = 0;
	
	return {
		increment: function(inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function() {
			return value;
		}
	}
} ();


console.log( ' myObject value is now: ' + myObject.getValue () );
myObject.increment (5);
console.log( ' myObject value is now: ' + myObject.getValue () );

// A better example:
// This quo function is designed to be used without the new prefix, so the name is not capitalized.
// When we call quo, it returns a new object containing a get_status method.
// A reference to that object is stored in myQuo.
// The get_status method still has privileged access to quo's status property even though quo has already returned.
// get_status does not have access to a copy of the parameter; it has access to the parameter itself.
// This is possible because the function has access to the context in which it was created.
// This is called closure.

var quo = function(status) {
	return {
		get_status: function() {
			return status;
		}
	};
};

var myQuo = quo('amazed');
console.log( myQuo.get_status () );

