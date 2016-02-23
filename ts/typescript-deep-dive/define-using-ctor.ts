
class Foo {
  // automatically declare a class member x (this.x)
  // and a parameter, also named x that can be used
  constructor( public x: number) {
    this.x = x;
  }
}
