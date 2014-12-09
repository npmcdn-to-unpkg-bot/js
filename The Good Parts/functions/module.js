
// module.js

// We can use functions and closure to make modules. A module is a function or object 
// that presents an interface but that hides its state and implementation. 
// By using functions to produce modules, we can almost completely eliminate 
// our use of global variables, thereby mitigating one of JavaScript's worst features.

// The module pattern takes advantage of function scope and closure to create relationships that are binding and private. 
// In this example, only the deentityify method has access to the entity data structure.

// The general pattern of a module is a function that defines private variables and functions; 
// creates privileged functions which, through closure, will have access to the private variables
// and functions; and that returns the privileged functions or stores them in an accessible place.

// Use of the module pattern can eliminate the use of global variables.
// It promotes information hiding and other good design practices.
// It is very effective in encapsulating applications and other singletons.

// For example, suppose we want to augment String with a deentityify method. 
// Its job is to look for HTML entities in a string and replace them with their equivalents. 
// It makes sense to keep the names of the entities and their equivalents in an object. 
// But where should we keep the object? We could put it in a global variable, 
// but global variables are evil. 
// We could define it in the function itself, but that has a runtime cost because 
// the literal must be evaluated every time the function is invoked. 
// The ideal approach is to put it in a closure, and perhaps provide an extra method 
// that can add additional entities:

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};


String.method('deentityify', function (  ) {

// The entity table. It maps entity names to
// characters.

    var entity = {
        quot: '"',
        lt:   '<',
        gt:   '>'
    };

// Return the deentityify method.

    return function (  ) {

// This is the deentityify method. It calls the string
// replace method, looking for substrings that start
// with '&' and end with ';'. If the characters in
// between are in the entity table, then replace the
// entity with the character from the table. It uses
// a regular expression (Chapter 7).

        return this.replace(/&([^&;]+);/g,
            function (a, b) {
                var r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    };
}(  ));

// make a simple call to the new 'deentityify' function:
console.log ( '&lt;&quot;&gt;'.deentityify () );


// The module pattern can also be used to produce objects that are secure.
// Let's suppose we want to make an object that produces a serial number:

var serial_maker = function() {
	// Produce an object that produces unique strings. A
	// unique string is made up of two parts: a prefix
	// and a sequence number. The object comes with
	// methods for setting the prefix and sequence
	// number, and a gensym method that produces unique
	// strings.
	
	var prefix = '';
	var sequence = 0;
	return {
		set_prefix: function(p) {
			prefix = String(p);
		},
		set_sequence: function(s) {
			sequence = s;
		},
		gensym: function() {
			var result = prefix + sequence;
			sequence += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix ('Q');
seqer.set_sequence (1000);
var unique = seqer.gensym();

console.log( unique );