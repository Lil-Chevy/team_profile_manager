// import employee constructor
const Employee = require("./Employee");

// class Manager expression and  using employee constructor

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.officeNumber = office;
    this.role = this.getRole();
  }
  getOffice() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
