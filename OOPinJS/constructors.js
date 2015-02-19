
// a constructor is simply a function that is used
// with -new- to create objects
function Person(name)
{
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    }
};

var person1 = new Person("Nicholas");

// if no parameters are passed in, the parentheses can be omitted
var person2 = new Person;

// checking type with instanceof
console.log(person1 instanceof Person);

// checking type through 'constructor' property
console.log(person2.constructor === Person);

person1.sayName();
person2.sayName();