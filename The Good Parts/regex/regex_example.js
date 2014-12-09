
// a simple regular expression example

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

//for(var i = 0; i < 1000000; i++) {
//    var r = parse_url.exec(url);
//}

var names = ['url', 'scheme', 'slash', 'host', 'port',
    'path', 'query', 'hash'];

var blanks = '       ';
var i;

for (i = 0; i < names.length; i += 1) {
    console.log (names[i]
        + ':'
        + blanks.substring(names[i].length), result[i]);
}

// a number parser:

var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test_number_parser = function (num) {
    console.log (parse_number.test(num));
};

test_number_parser('1');                // true
test_number_parser('number');           // false
test_number_parser('98.6');             // true
test_number_parser('132.21.86.100');    // false
test_number_parser('123.45E-67');       // true
test_number_parser('123.45D-67');       // false
