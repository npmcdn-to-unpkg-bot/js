
// exceptions
var add = function (a, b) {
	if( typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'add function needs number types as parameters'
		}
	}
	return a + b;
}

var try_it = function() {
	try {
		add("seven");
	} catch (e) {
		console.log('exception caught: ' + e.name + ' : ' + e.message);
	}
}

console.log(add (17, 8));

try_it();
