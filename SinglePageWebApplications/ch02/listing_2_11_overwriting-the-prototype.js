var proto = {
	sentence : 4,
	probation : 2
};
var makePrisoner = function( name, id ) {
	var prisoner = Object.create( proto );
	prisoner.name = name;
	prisoner.id = id;
	return prisoner;
};
var firstPrisoner = makePrisoner( 'Joe', '12A' );
	
// Both of these output 4
console.log( firstPrisoner.sentence );
console.log( firstPrisoner.__proto__.sentence );
firstPrisoner.sentence = 10;
// Outputs 10
console.log( firstPrisoner.sentence );

// Outputs 4
console.log( firstPrisoner.__proto__.sentence );

/*
by deleting the attribute from the object,
it will 'fall back' to the attribute from the prototype!
*/
delete firstPrisoner.sentence;
// Both of these output 4
console.log( firstPrisoner.sentence );
console.log( firstPrisoner.__proto__.sentence );

/*
modifying the prototype will modify -all- objects created after and before (!!)
will reflect this value - it's just like static variables in objects
*/
var thirdPrisoner = makePrisoner('Bob', '7XY');
proto.sentence = 5;
// Both of these output '5'
console.log( firstPrisoner.sentence );
console.log( thirdPrisoner.sentence );
