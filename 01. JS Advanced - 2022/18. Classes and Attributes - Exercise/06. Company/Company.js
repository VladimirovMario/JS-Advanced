class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    }
    if (salary <= 0) {
      throw new Error("Invalid input!");
    }

    if (this.departments.hasOwnProperty(department) == false) {
      this.departments[department] = {};
    }
    if (this.departments.hasOwnProperty(department)) {
      this.departments[department][position] = { name, salary };
      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  }

  bestDepartment() {
    let bestDepartment = ``;
    let average = 0;
    for (const currDepartment in this.departments) {
      let currAverage = 0;
      let count = 0;
      const element = this.departments[currDepartment];
      for (const iterator of Object.entries(element)) {
        currAverage += iterator[1].salary;
        count++;
      }
      currAverage /= count;

      if (currAverage > average) {
        average = currAverage;
        bestDepartment = currDepartment;
      }
    }
    let result = [];
    result.push(
      `Best Department is: ${bestDepartment}`,
      `Average salary: ${average.toFixed(2)}`
    );
    let sorted = Object.entries(this.departments[bestDepartment]);

    for (const iterator of sorted) {
      result.push(`${iterator[1].name} ${iterator[1].salary} ${iterator[0]}`);
    }
    return result.join(`\n`);
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

/*
Best Department is: Construction
Average salary: 1500.00
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer
Stan 2000 architect
*/
