

function CreateObjects() {

    // creating as object literal
    var person1 = {
        firstname: "Walter"
    };

    // creating with new Object()
    var person2 = new Object();
    person2.lastname = "White";

    CheckAllProperties(person1, person2);
}


function CheckAllProperties()
{
    for(var object in arguments) {
        for(var property in object) {
            console.log("Name:  " + property);
            console.log("Value: " + object[property]);
        }
    }
}

CreateObjects();
