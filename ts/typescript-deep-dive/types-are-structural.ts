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

// classes in typescript

class Point {
  constructor(public x: number, public y: number) {
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y)
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);

var inc = (x) => x + 1;
console.log(inc);
