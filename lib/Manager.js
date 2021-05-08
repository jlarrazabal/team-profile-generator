const employee = require("./Employee");
const Employee = employee.Employee;

class Manager extends Employee {
  constructor(name, id, email, managerOfficeNumber) {
    super(name, id, email);
    this.managerOfficeNumber = managerOfficeNumber;
    this.role = "Manager";
  }
}

module.exports = {
  Manager: Manager
}

// function test() {
//   let manager = new Manager("John",123,"john@test.com",5);
//   console.log(manager);
// }
// test();
