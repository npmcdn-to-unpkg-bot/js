
var
	run_count,	full_name, top_fruit_list,
	full_fruit_list, print_string;
	
run_count = 2;
full_name = 'Fred Burns';

top_fruit_list	= [ 'Apple', 'Banana', 'Orange' ];
full_fruit_list	= [
	'Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry',
	'Currant', 'Cherry', 'Date', 'Grape', 'Grapefruit',
	'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime',
	'Lychee', 'Mango', 'Melon', 'Nectarine', 'Orange',
	'Peach', 'Pear', 'Pineapple', 'Raspberry', 'Strawberry',
	'Tangerine', 'Ugli'
];

print_string = function ( text_arg ) {
	var text_arg, char_list, i;
	
	char_list = input_text.split(' ');
	
	for( i = 0; i < char_list.length; i++ ) {
		document.write( char_list[i] );
	}
	
	return true;
};

print_string( 'We have counted '
	+ String( run_count )
	+ ' invocations to date!'
	);