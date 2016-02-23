

class SimpleBase {
  public x: number;
  private y: number;
  protected z: number;
}

var simpleObject = new SimpleBase();
simpleObject.x; // okay
// simpleObject.y; // error
// simpleObject.z; // error

class SimpleChild extends SimpleBase {
  constructor() {
    super();
    this.x; // okay
    // this.y; // error: private not accessible in derived class
    this.z; // okay
  }
}
