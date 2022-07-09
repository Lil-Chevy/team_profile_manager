// import of all required libraries
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const team = require("./src/cardTemplate");

const fs = require("fs");
// userarr to hold all data input
const userArr = [];

// function to write file index.html in the dist directory
function writeFile(fileName, data) {
  fs.writeFile("./dist/index.html", data, (error) => {
    if (error) {
      console.log(error);
    }
  });
}
// manager questions
const managerInput = () => {
  return (
    inquirer
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
      // promises to get information input and push to userArr
      .then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.office
        );
        userArr.push(manager);
      })
      .then(() => {
        createTeam();
      })
  );
};

// createTeam function used for giving option on what employee needed to be added next
// and running a switch statement  tp execute next line of questioning
const createTeam = () => {
  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "createEmployee",
          message:
            "would you like to add an engineer or an intern or are you finished with adding employees",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      // promise switch statement to ask engineer questions, intern questions or write file
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
      })
  );
};
// engineer questions
const engineerInput = () => {
  return (
    inquirer
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
          name: "email",
          type: "input",
          message: "enter the engineer email",
          validate: (engineerEmailInput) => {
            if (engineerEmailInput) {
              return true;
            } else {
              console.log("Please enter the interns Email");
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
      // get information from prompts and push to userArr
      .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );
        userArr.push(engineer);
        createTeam();
      })
  );
};
// intern question prompts
const internInput = () => {
  return (
    inquirer
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
      // get responses for intern questions and push to userarr
      .then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        userArr.push(intern);
        createTeam();
      })
  );
};

managerInput();
