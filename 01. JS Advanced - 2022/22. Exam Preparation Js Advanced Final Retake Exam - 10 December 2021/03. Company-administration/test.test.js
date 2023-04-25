const { companyAdministration } = require(`./companyAdministration`);
const { expect } = require(`chai`);

describe("Testing companyAdministration", () => {
  describe("Testing hiringEmployee", () => {
    it("Works with correct position and lower limit years", () => {
      expect(
        companyAdministration.hiringEmployee(`John`, `Programmer`, 3)
      ).to.be.equal(`John was successfully hired for the position Programmer.`);
    });
    it("Works with correct position and years", () => {
      expect(
        companyAdministration.hiringEmployee(`John`, `Programmer`, 5)
      ).to.be.equal(`John was successfully hired for the position Programmer.`);
    });
    it("Throw an error with incorrect position", () => {
      expect(() =>
        companyAdministration.hiringEmployee(`John`, `Administration`, 10)
      ).to.throw(`We are not looking for workers for this position.`);
    });
    it("Works with years bellow boundary", () => {
      expect(
        companyAdministration.hiringEmployee(`John`, `Programmer`, 1)
      ).to.be.equal(`John is not approved for this position.`);
    });
  });
  describe("Testing calculateSalary", () => {
    it("Works with correct minimum hours", () => {
      expect(companyAdministration.calculateSalary(1)).to.be.equal(15);
    });
    it("Works correct with zero hours", () => {
      expect(companyAdministration.calculateSalary(0)).to.be.equal(0);
    });
    it("Works correct when calculating bonus hours", () => {
      expect(companyAdministration.calculateSalary(170)).to.be.equal(3550);
    });
    it("Thor an error with hours bellow zero", () => {
      expect(() => companyAdministration.calculateSalary(-1)).to.throw(
        "Invalid hours"
      );
    });
    it("Thor an error with different type of input []", () => {
      expect(() => companyAdministration.calculateSalary([])).to.throw(
        "Invalid hours"
      );
    });
    it("Thor an error with different type of input: string", () => {
      expect(() => companyAdministration.calculateSalary(`1`)).to.throw(
        "Invalid hours"
      );
    });
    it("Thor an error with different type of input: object", () => {
      expect(() => companyAdministration.calculateSalary({})).to.throw(
        "Invalid hours"
      );
    });
  });
  describe("Testing firedEmployee", () => {
    it("Fired the employee at correct index", () => {
      expect(
        companyAdministration.firedEmployee(["John", "Ivan"], 0)
      ).to.be.equal(`Ivan`);
    });
    it("Fired the employee at correct index", () => {
      expect(
        companyAdministration.firedEmployee(["John", "Ivan", "George"], 1)
      ).to.be.equal(`John, George`);
    });
    it("Throw an error with bigger index", () => {
      expect(() =>
        companyAdministration.firedEmployee(["John", "Ivan", "George"], 3)
      ).throw("Invalid input");
    });
    it("Throw an error with empty array", () => {
      expect(() => companyAdministration.firedEmployee([], 0)).throw(
        "Invalid input"
      );
    });
    it("Throw an error with invalid firs param", () => {
      expect(() => companyAdministration.firedEmployee({}, 0)).throw(
        "Invalid input"
      );
    });
    it("Throw an error with invalid second param", () => {
      expect(() =>
        companyAdministration.firedEmployee(["John", "Ivan", "George"], `0`)
      ).throw("Invalid input");
    });
    it("Throw an error with index bellow zero", () => {
        expect(() =>
          companyAdministration.firedEmployee(["John", "Ivan", "George"], -1)
        ).throw("Invalid input");
      });
  });
});

/*
  Testing companyAdministration
    Testing hiringEmployee
      ✔ Works with correct position and lower limit years
      ✔ Works with correct position and years
      ✔ Throw an error with incorrect position
      ✔ Works with years bellow boundary
    Testing calculateSalary
      ✔ Works with correct minimum hours
      ✔ Works correct with zero hours
      ✔ Works correct when calculating bonus hours
      ✔ Thor an error with hours bellow zero
      ✔ Thor an error with different type of input []
      ✔ Thor an error with different type of input: string
      ✔ Thor an error with different type of input: object
    Testing firedEmployee
      ✔ Fired the employee at correct index
      ✔ Fired the employee at correct index
      ✔ Throw an error with bigger index
      ✔ Throw an error with empty array
      ✔ Throw an error with invalid firs param
      ✔ Throw an error with invalid second param
      ✔ Throw an error with index bellow zero


  18 passing (43ms)
*/

