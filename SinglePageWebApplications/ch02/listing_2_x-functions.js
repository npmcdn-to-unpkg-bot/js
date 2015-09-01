
/*
explicit invocation of a function
*/

var f = function (arg1) {
	console.log('explicitly called with ' + arg1);
};

f('param');


/*
self-executing functions
*/
(function (arg1) {
	console.log('self-executing with ' + arg1);
})('another_param');

var eatFunction = function (what_to_eat) {
	var sentence='I am going to eat a ' + what_to_eat;
	console.log( sentence );
};
eatFunction( 'sandwich' );

// is the same as
(function (what_to_eat) {
	var sentence = 'I am going to eat a ' + what_to_eat;
	console.log(sentence);
})('sandwich');
