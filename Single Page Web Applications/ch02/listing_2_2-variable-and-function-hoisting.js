
function myFunction(arg1, arg2){
	var local_var = 'iamlocal',
		a_function = function() {
			console.log('in a_function');
		};
	function inner_function() {
		console.log('in inner function');
	}
}

myFunction( 1, "two");

