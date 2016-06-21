// pure functions
"use babel";


function square(x) {
  return x * x;
}

// does not modify the parameter
function squareAll(items) {
  return items.map(square);
}

console.log(square(8));

var anArray = [2, 11, 13];
console.log(squareAll(anArray));
console.log(anArray);

// impure functions

// does something else then expected, which
// my or may not depend on the parameter
function square2(x) {
  updateXInDatabase(x);
  return x * x;
}

function updateXInDatabase(elem) {}

// modifies the incoming parameter
function squareAll2(items) {
  for (var i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
  return items;
}

console.log(square2(8));

var anArray2 = [7, 11, 13];
console.log(squareAll2(anArray2));
console.log(anArray2);
