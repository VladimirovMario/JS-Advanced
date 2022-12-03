class MyClass {
  static staticMethod() {
    return "Static call";
  }
  static anotherStaticMethod() {
    return this.staticMethod() + " from another method";
  }
}
console.log(MyClass.staticMethod());
//Static call
console.log(MyClass.anotherStaticMethod());
//Static call from another method
