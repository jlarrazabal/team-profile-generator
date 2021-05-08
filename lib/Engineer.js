const employee = require("./Employee");
const Employee = employee.Employee;

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getGitHub() {
    return this.github;
  }
}

module.exports = {
  Engineer: Engineer
}

// function test() {
//   let engineer = new Engineer("John",123,"john@test.com","johnUsername");
//   console.log(engineer);
// }
// test();
