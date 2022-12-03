class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayName() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  }
}
const person = new Person("John", "Doe");
person.displayName(); // Name: John Doe
