// import employee constructor for usage on intern constructor
const Employee = require("./Employee");

// class Intern expression and  using employee constructor

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.getRole = this.getRole();
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
