

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getDist() {
        return Math.sqrt(this.x * this.x +
        this.y * this.y);
    }
}
var p = new Point(3,4);
var dist = p.getDist();
p.x = 100;  // has no effect!
console.log("Hypotenuse is: " + dist);
