
function AddRemoveProperties() {

    var object = new Object();
    var anotherObject = object;

    object.myCustomProperty = "Awesome!";
    console.log(anotherObject.myCustomProperty);
}


function ObjectLiterals() {
    var book = new Object();

    book.title = "The Principles of Object-Oriented JavaScript";
    book.year = 2014;
    console.log(book);

    var colors = ["red", "green", "blue"];
    var anotherSetOfColors = new Array("red", "green", "blue");
    console.log(colors[0]);
    console.log(anotherSetOfColors[0]);
}

// run all test functions
AddRemoveProperties();
ObjectLiterals();
