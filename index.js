const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const team = require("./src/cardTemplate");

const fs = require("fs");

const userArr = [];

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

const managerInput = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "enter the team manager's name",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter the team manager's name");
            return false;
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "enter the team manager's employee id",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter the team manager's employee id");
            return false;
          }
        },
      },
      {
        name: "email",
        type: "input",
        message: "enter the team manager's email",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter the team managers email");
            return false;
          }
        },
      },
      {
        name: "office",
        type: "input",
        message: "enter the team manager's office number",
        validate: (managerOfficeInput) => {
          if (managerOfficeInput) {
            return true;
          } else {
            console.log("Please enter the team manager’s office number");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
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
        name: "createEmployee",
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
          console.log("USER ARR", userArr);
          writeFile("index.html", team(userArr));
          break;
      }
    });
};

const engineerInput = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "enter the engineer's name",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter the engineer’s name");
            return false;
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "enter the engineer's employee id",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter the engineer’s employee id");
            return false;
          }
        },
      },
      {
        name: "github",
        type: "input",
        message: "enter the team engineer's GitHub",
        validate: (engineerGithubInput) => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's Github");
            return false;
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
        name: "name",
        type: "input",
        message: "enter the Intern's name",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter the intern’s name");
            return false;
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "enter the intern's employee id",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter the intern’s employee id");
            return false;
          }
        },
      },
      {
        name: "email",
        type: "input",
        message: "enter the intern email",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter the interns Email");
            return false;
          }
        },
      },
      {
        name: "school",
        type: "input",
        message: "enter the interns School",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter the interns school");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      userArr.push(intern);
      createTeam();
    });
};

managerInput();
