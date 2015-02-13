

function CreateObjects()
{

    // creating as object literal
    var person1 = {
        firstname: "Walter"
    };

    // creating with new Object()
    var person2 = new Object();
    person2.lastname = "White";

    CheckAllProperties(person1, person2);

    CheckOwnProperties(person1);
    CheckOwnProperties(person2);
}

function CheckOwnProperties(obj)
{
    if(obj.hasOwnProperty("firstname"))
    {
        console.log(obj.firstname);
    }
}

function CheckAllProperties()
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

CreateObjects();
