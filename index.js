const fs = require("fs");

const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = require("./src/cardTemplate");
const { response } = require("express");

const userArr = [];

function writeFile(file, data) {
  fs.writeFile(file, data, (err) => {
    if (err) {
      console.log(error);
    }
  });
}

const managerInput = () => {
  return inquirer
    .prompt([
      {
        name: "input",
        type: "managerName",
        message: "enter the team manager's name",
        validate: (teamManagerNameInput) => {
          if (teamManagerNameInput) {
            return true;
          } else {
            console.log("Please enter the team manager’s name");
          }
        },
      },
      {
        name: "input",
        type: "managerId",
        message: "enter the team manager's employee id",
        validate: (managerEmployeeID) => {
          if (managerEmployeeID) {
            return true;
          } else {
            console.log("Please enter the team manager’s employee id");
          }
        },
      },
      {
        name: "input",
        type: "managerEmail",
        message: "enter the team manager's email",
        validate: (managerEmail) => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter the team manager’s email");
          }
        },
      },
      {
        name: "input",
        type: "managerOffice",
        message: "enter the team manager's office number",
        validate: (managerOffice) => {
          if (managerOffice) {
            return true;
          } else {
            console.log("Please enter the team manager’s office number");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.ManagerId,
        data.managerEmail,
        data.managerOffice
      );
      userArr.push(manager);
    })
    .then(() => {
      createTeam();
    });
};

const createTeam = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "createEmployees",
        message:
          "would you like to add an engineer or an intern or are you finished with adding employees",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((data) => {
      switch (data.createEmployee) {
        case "Engineer":
          engineerInput();
          break;
        case "Intern":
          internInput();
          break;
        case "Done":
          console.log("Uploading content, check for html");
          writeFile("index.html", team(userArr));
          break;
      }
    });
};

const engineerInput = () => {
  return inquirer
    .prompt([
      {
        name: "input",
        type: "engineerName",
        message: "enter the engineer's name",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter the engineer’s name");
          }
        },
      },
      {
        name: "input",
        type: "engineerId",
        message: "enter the engineer's employee id",
        validate: (engineerEmployeeID) => {
          if (engineerEmployeeID) {
            return true;
          } else {
            console.log("Please enter the engineer’s employee id");
          }
        },
      },
      {
        name: "input",
        type: "engineerGithub",
        message: "enter the team engineer's GitHub",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true;
          } else {
            console.log("Please enter the engineer's Github");
          }
        },
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      userArr.push(engineer);
      createTeam();
    });
};
const internInput = () => {
  return inquirer
    .prompt([
      {
        name: "input",
        type: "internName",
        message: "enter the engineer's name",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter the intern’s name");
          }
        },
      },
      {
        name: "input",
        type: "internId",
        message: "enter the intern's employee id",
        validate: (internEmployeeID) => {
          if (internEmployeeID) {
            return true;
          } else {
            console.log("Please enter the intern’s employee id");
          }
        },
      },
      {
        name: "input",
        type: "internEmail",
        message: "enter the intern email",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("Please enter the interns Email");
          }
        },
      },
      {
        name: "input",
        type: "internSchool",
        message: "enter the interns School",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("Please enter the interns school");
          }
        },
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.github
      );
      userArr.push(intern);
      createTeam();
    });
};

managerInput();
