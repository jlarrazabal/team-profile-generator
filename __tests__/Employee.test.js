const employee = require("../lib/Employee");
const Employee = employee.Employee;

describe("Employee Class", () => {
  it("getName should return employee name", () => {
    expect(new Employee("John",123,"john@test.com").getName()).toBe("John");
  });

  it("getId should return employee id", () => {
    expect(new Employee("John",123,"john@test.com").getId()).toBe(123)
  });

  it("getEmail should return employee email", () => {
    expect(new Employee("John",123,"john@test.com").getEmail()).toBe("john@test.com");
  });

  it("getRole should return Employee", () => {
    expect(new Employee("John",123,"john@test.com").getRole()).toBe("Employee");
  });
});
