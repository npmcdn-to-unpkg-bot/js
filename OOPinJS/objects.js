

(function createObjects()
{

    // creating as object literal
    var person1 = {
        firstname: "Walter"
    };

    // creating with new Object()
    var person2 = new Object();
    person2.lastname = "White";

    checkAllProperties(person1, person2);

    checkOwnProperties(person1);
    checkOwnProperties(person2);
})();

// There is a difference between the properties returned in a for-in loop
// and the ones returned by Object.keys():
// the for-in loop also enumerates prototype properties while Object.keys()
// returns only own (instance) properties.
//
function checkOwnProperties(paramObject)
{
    if(paramObject.hasOwnProperty("firstname"))
    {
        console.log(paramObject.firstname);
    }

    var properties = Object.keys(paramObject);
    for(var i = 0; i < properties.length; i++)
    {
        console.log("Property:  " + properties[i] + " - " + "Value: " + paramObject[properties[i]]);
    }
}

function checkAllProperties()
{
    // var args = Array.prototype.slice.call(arguments);
    // var args = Array.slice(arguments);  // Array generics is not available
    //
    // NOTE: to access the unnamed arguments through the 'arguments' keyword
    // accessible in each JavaScript function, please note that this is NOT an
    // array and it should not be parsed with for ... in; parsing by index works:
    for(var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        for(var property in obj) {
            console.log("Property:  " + property + " - " + "Value: " + obj[property]);
        }
    }
}

(function createObjectWithGetterAndSetter()
{
    var person =
    {
        _name: 'Nicholas',
        get name()
        {
            console.log("Reading name");
            return this._name;
        }
    }

    console.log(person.name);

    return person;
})();

// define single property:
var anotherPerson = {
    show : function()
    {
        console.log("name" in this);
        console.log(this.name);
    }
};

Object.defineProperty(anotherPerson, "name",
    {
       value: "Another Nicholas",
        enumerable: true,
        configurable: true,
        writable: true
    });

anotherPerson.show();


// define multiple properties:

var yetAnotherPerson = {};

Object.defineProperties(yetAnotherPerson,
    {
        _name: {
            value: "Also Nicholas",
            enumerable: true,
            configurable: true,
            writable: true
        },

        // add accessor property
        name: {
            get: function() {
                console.log("reading yet another name");
                return this._name;
            },
            set: function(value) {
                console.log("setting name to %s", value);
                this._name = value;
            },
            enumerable: true,
            configurable: true
        }
    });

console.log("does it have name property: ", "name" in yetAnotherPerson);
console.log("does it have _name property: ", "_name" in yetAnotherPerson);
console.log(yetAnotherPerson.name);
yetAnotherPerson.name = "Changed name for Nicholas";
console.log(yetAnotherPerson.name);
