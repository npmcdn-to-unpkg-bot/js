
// Put one or more declarations on a single line,
// but only one assignment per line.
var
	x, y, z, print_msg, get_random,
	coef		= 0.5,
	rot_delta	= 1,
	x_delta		= 1,
	y_delta		= 1,
	first_name	= 'sally'
	;
	
// function to write text to message container
print_msg = function( msg_text ) {
	// .text() prevents xss injection
	$('#sl').text( msg_text );
};

// function to return a random number
get_random = function( num_arg ) {
	return Math.random() * num_arg;
};

// initialize coordinates
x = get_random( 10 );
y = get_random( 20 );
r = get_random( 360 );

// add spaces and  align like elements
// to make similar statements more readable:
x += x_delta	* coef;
y += y_delta	* coef;
r += rot_delta	* coef;

// use braces for all 'if' statements, even very short ones like this:
if( first_name == 'sally' ) { print_msg('Hello Sally!'); };
