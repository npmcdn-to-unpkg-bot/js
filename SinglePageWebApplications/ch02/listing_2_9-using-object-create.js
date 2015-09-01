
/*
a prototype defines common attributes and methods
and it's used to create many objects sharing the same attributes
*/
var proto = {
	sentence: 4,
	probation: 2
};

var firstPrisoner = Object.create(proto);
firstPrisoner.name = 'Joe';
firstPrisoner.id = '12A';

var secondPrisoner = Object.create(proto);
secondPrisoner.name = 'Sam';
secondPrisoner.id = '2BC';
secondPrisoner.status = 'isolated';

/*
using the factory pattern is common, following the template of
make<ObjectName>
*/

var makePrisoner = function(name, id) {
	var prisoner = Object.create(proto);
	prisoner.name = name;
	prisoner.id = id;
	return prisoner;
};

var thirdPrisoner = makePrisoner('Bob', '7XY');

var listPrisoners = function() {
	console.log(firstPrisoner);
	console.log(secondPrisoner);
	console.log(thirdPrisoner);
};

listPrisoners();

