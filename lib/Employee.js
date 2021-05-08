class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = {
  Employee: Employee
}

// function test() {
//   let employee = new Employee("John",123,"john@test.com");
//   console.log(employee);
// }
// test();
