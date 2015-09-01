
/*
One famous example of preventing a variable from being overwritten uses the
jQuery and Prototype JavaScript libraries. They both make extensive use of the one
character variable $. If you include both of them in your application, then the library
that was added last gets control over the $. The technique of passing in a variable to
the self-executing anonymous function can be used to ensure that jQuery can use the
$ variable for a block of code.
For this example, you should know that the jQuery and $ variables are aliases of
each other. By passing the jQuery variable into the self-executing anonymous function
that uses it as the $ parameter, you prevent the $ from being taken over by the Prototype
library:
*/

(function ($) {
	console.log($);
})(jQuery);