const intern = require("../lib/Intern");
const Intern = intern.Intern;

describe("Intern Class", () => {
  it("getName should return employee name", () => {
    expect(new Intern("John",123,"john@test.com","UM").getName()).toBe("John");
  });

  it("getId should return employee id", () => {
    expect(new Intern("John",123,"john@test.com","UM").getId()).toBe(123);
  });

  it("getEmail should return employee email", () => {
    expect(new Intern("John",123,"john@test.com","UM").getEmail()).toBe("john@test.com");
  });

  it("getRole should return Intern", () => {
    expect(new Intern("John",123,"john@test.com","UM").getRole()).toBe("Intern");
  });

  it("getSchool should return UM", () => {
    expect(new Intern("John",123,"john@test.com","UM").getSchool()).toBe("UM");
  });
});
