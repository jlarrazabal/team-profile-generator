const employee = require("./Employee");
const Employee = employee.Employee;

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = {
  Intern: Intern
}

// function test() {
//   let intern = new Intern("John",123,"john@test.com","UM");
//   console.log(intern);
// }
// test();
