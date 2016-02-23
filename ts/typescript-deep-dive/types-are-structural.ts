interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

var point2D: Point2D = { x: 0, y: 0 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }

function iTakePoint2D(point: Point2D) {
  // do something with the point...
}

iTakePoint2D(point2D);  // exact match, okay
iTakePoint2D(point3D);  // extra information okay
//iTakePoint2D( {x: 0});  // error: missing information 'y'

// arrow functions:

var inc = (x) => x + 1;
console.log(inc(100));
