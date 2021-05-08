const manager = require("../lib/Manager");
const Manager = manager.Manager;

describe("Manager Class", () => {
  it("getName should return employee name", () => {
    expect(new Manager("John",123,"john@test.com",5).getName()).toBe("John");
  });

  it("getId should return employee id", () => {
    expect(new Manager("John",123,"john@test.com",5).getId()).toBe(123);
  });

  it("getEmail should return employee email", () => {
    expect(new Manager("John",123,"john@test.com",5).getEmail()).toBe("john@test.com");
  });

  it("getRole should return Manager", () => {
    expect(new Manager("John",123,"john@test.com",5).getRole()).toBe("Manager");
  });
});
