
var listOfPersons = new Array();

function CreateObjects() {

    // creating as object literal
    var person1 = {
        firstname: "Walter"
    };

    // creating with new Object()
    var person2 = new Object();
    person2.lastname = "White";

    console.log(person1);
    console.log(person2);

    DetectProperties(perosn1, person2);

    listOfPersons.push(person1);
    listOfPersons.push(person2);
}


function DetectProperties()
{

}

CreateObjects();
