const Intern = require("../lib/Intern");

test("Create intern constructor", () => {
  const intern = new Intern("Jerry", 1111, "intern@internstuff.com", "harvard");
  expect(intern.name).toBe("Jerry");
  expect(intern.id).toBe(1111);
  expect(intern.email).toBe("intern@internstuff.com");
  expect(intern.school).toBe("harvard");
});

test("get id", () => {
  const intern = new Intern("Jerry", 1111, "intern@internstuff.com", "harvard");
  expect(intern.id).toBe(1111);
});

test("get name", () => {
  const intern = new Intern("Jerry", 1111, "intern@internstuff.com", "harvard");
  expect(intern.name).toBe("Jerry");
});

test("get email", () => {
  const intern = new Intern("Jerry", 1111, "intern@internstuff.com", "harvard");
  expect(intern.email).toBe("intern@internstuff.com");
});

test("get school", () => {
  const intern = new Intern("Jerry", 1111, "intern@internstuff.com", "harvard");
  expect(intern.school).toBe("harvard");
});
