function greet() {
  console.log(this.name, this.age);
}

let person = { name: "Alex", age: 38 };
greet.call(person,);
