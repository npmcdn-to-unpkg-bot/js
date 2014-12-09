
// example of creating an object which has a function as member;
// a member function is aka as method
var anObject = {
	aValue: 0,
	
	// if the argument is not a number, just increment by 1,
	// otherwise add the value passed is as parameter
	increment: function(toIncrement) {
		this.aValue += typeof toIncrement === 'number' ? toIncrement : 1;
	}
};

anObject.increment();
console.log(anObject.aValue);

anObject.increment(42);
console.log(anObject.aValue);
