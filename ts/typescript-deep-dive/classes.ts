
// classes in typescript

class Point2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point2D) {
    return new Point2D(this.x + point.x, this.y + point.y)
  }
}

var p1 = new Point2D(0, 10);
var p2 = new Point2D(10, 20);
var p3 = p1.add(p2);
console.log(p3);

class Point3D extends Point2D {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(point: Point3D) {
    var point2D = super.add(point); // okay, since Point3D is-a Point2D
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}

var p11 = new Point3D(0, 10, 20);
var p22 = new Point3D(10, 20, 30);
var p33 = p11.add(p22);
console.log(p33);
