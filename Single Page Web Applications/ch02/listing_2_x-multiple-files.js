/*
how to break our code up into multiple files, but still take advantage of
the self-executing anonymous function to control the scope of our variables
*/

/*
the return value of the self-executing anonymous function
is stored in the prison variable
*/
var prison = (function () {
	var prisoner_name = 'Mike Mikowski',
	jail_term = '20 year term';
	return {
		prisoner: prisoner_name + ' - ' + jail_term,
		sentence: jail_term
	};
})();

// this is undefined, no prisoner_name for you.
console.log( prison.prisoner_name );

// this is OK, outputs 'Mike Mikowski - 20 year term'
console.log( prison.prisoner );
// this is also OK, outputs '20 year term'
console.log( prison.sentence );

/*
We're going to become very familiar
with saving a variable or function to a
property of the same name on the object
returned from the module pattern:
we use it throughout the book.
*/
var prison = (function () {
	var prisoner = 'Josh Powell';
	return { prisoner: prisoner };
})();
// outputs 'Josh Powell'
console.log( prison.prisoner );
