
var showParameters = function () {
	for(i = 0; i < arguments.length; i += 1) {
		console.log(arguments[i]);
	}
}

var foo = function () {
    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;
		
		// At this point, a is 3, b is 7, and c is 11
		showParameters(a,b,c);
		

        a += b + c;
		
		// At this point, a is 21, b is 7, and c is 11
		showParameters(a,b,c);
    };

    bar();

	// At this point, a is 21, b is 5 and c is undefined
	showParameters(a,b);
}();
