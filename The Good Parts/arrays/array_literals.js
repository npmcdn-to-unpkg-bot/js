
// array literals
// --------------

var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

console.log ('length is: ' + empty.length
    + ' second element is: ' + empty[1]);
console.log ('length is: ' + numbers.length
    + ' second element is: ' + numbers[1]);

// an object literal that acts just like 'numbers'
// however with great differences:

var number_object = {
    '0': 'zero',  '1': 'one',   '2': 'two',
    '3': 'three', '4': 'four',  '5': 'five',
    '6': 'six',   '7': 'seven', '8': 'eight',
    '9': 'nine'
};

console.log ('length is: ' + number_object.length
    + ' second element is: ' + number_object[1]);

// In most languages, the elements of an array are all required to be of the same type.
// JavaScript allows an array to contain any mixture of values:

    var misc = [
        'string', 98.6, true, false, null, undefined,
        ['nested', 'array'], {object: true}, NaN,
        Infinity
    ];
console.log (misc.length);
console.log( misc[6]);  // access the nested array directly!

// appending an element:
numbers[numbers.length] = 'new number';

// or, just simply use push:
numbers.push('another number');

console.log (numbers);


// length of an array is not an upper bound
// the array and it's length will automatically increase to the index provided

var stretching = [];
stretching[10000] = true;

console.log ('length of auto-stretching array: ' + stretching.length);

// deleting elements from an array:
delete numbers[9];
console.log (numbers); // the element at index 9 will be left empty!

// to avoid leaving holes in the array, use splicing of arrays:
numbers.splice(2,1); // delete 1 element, starting at index 2
console.log (numbers);


// Since JavaScript's arrays are really objects, the for in statement can be used to iterate over all of the properties
// of an array. Unfortunately, for in makes no guarantee about the order of the properties,
// and most array applications expect the elements to be produced in numerical order.
// Also, there is still the problem with unexpected properties being dredged up from the prototype chain.

// Fortunately, the conventional for statement avoids these problems.
// JavaScript's for statement is similar to that in most C-like languages.
// It is controlled by three clauses—the first initializes the loop, the second is the while condition,
// and the third does the increment:

for(var i=0; i < numbers.length; i++) {
    console.log (numbers[i]);
}