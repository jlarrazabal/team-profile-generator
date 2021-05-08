const engineer = require("../lib/Engineer");
const Engineer = engineer.Engineer;

describe("Engineer Class", () => {
  it("getName should return employee name", () => {
    expect(new Engineer("John",123,"john@test.com","johnUsername").getName()).toBe("John");
  });

  it("getId should return employee id", () => {
    expect(new Engineer("John",123,"john@test.com","johnUsername").getId()).toBe(123);
  });

  it("getEmail should return employee email", () => {
    expect(new Engineer("John",123,"john@test.com","johnUsername").getEmail()).toBe("john@test.com");
  });

  it("getRole should return Engineer", () => {
    expect(new Engineer("John",123,"john@test.com","johnUsername").getRole()).toBe("Engineer");
  });

  it("getGitHub should return johnUsername", () => {
    expect(new Engineer("John",123,"john@test.com","johnUsername").getGitHub()).toBe("johnUsername");
  });
});
