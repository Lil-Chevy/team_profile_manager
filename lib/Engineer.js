// import Employee
const Employee = require("./Employee");
// class engineer expression and  using employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.getRole = this.getRole();
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
