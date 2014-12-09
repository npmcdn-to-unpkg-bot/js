
// ====================================
Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

// Make an array containing 10 zeros.

var myArray = Array.dim(10, 0);


// ====================================
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log (matrix[2][1]);    // 7


// ====================================
var n = 7;
var my_array = [];
for (var i = 0; i < n; i += 1) {
    my_array[i] = [];
};

// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.


// ====================================
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// Make a 4 * 4 matrix filled with zeros.

var myMatrix = Array.matrix(4, 4, 0);

console.log (myMatrix[3][3]);    // 0

// Method to make an identity matrix.

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);

console.log (myMatrix[3][3]);    // 1

