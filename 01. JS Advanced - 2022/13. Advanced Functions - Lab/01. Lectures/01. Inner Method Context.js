const obj = {
  name: "Peter",
  outer() {
    console.log(this); // Object {name: "Peter"}
    function inner() {
      console.log(this);
    }
    inner();
  },
};
obj.outer(); // Window
