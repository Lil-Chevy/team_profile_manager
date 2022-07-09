const Manager = require("../lib/Manager");

test("Create manager constructor", () => {
  const manager = new Manager("Jerry", 1111, "manager@managerstuff.com", 2222);
  expect(manager.name).toBe("Jerry");
  expect(manager.id).toBe(1111);
  expect(manager.email).toBe("manager@managerstuff.com");
  expect(manager.office).toBe(2222);
});

test("get id", () => {
  const manager = new Manager("Jerry", 1111, "manager@managerstuff.com", 2222);
  expect(manager.id).toBe(1111);
});

test("get name", () => {
  const manager = new Manager("Jerry", 1111, "manager@managerstuff.com", 2222);
  expect(manager.name).toBe("Jerry");
});

test("get email", () => {
  const manager = new Manager("Jerry", 1111, "manager@managerstuff.com", 2222);
  expect(manager.email).toBe("manager@managerstuff.com");
});

test("get school", () => {
  const manager = new Manager("Jerry", 1111, "manager@managerstuff.com", 2222);
  expect(manager.office).toBe(2222);
});
