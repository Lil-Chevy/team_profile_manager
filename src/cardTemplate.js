const Employee = require("../lib/Employee");

const createCard = function makePage(userArr) {
  function makeEngineer(engineer) {
    return `
        <div> class ="card"
        <div class = container>
        <div class = "title"
            <h3>${engineer.getName()}<h2>
            <h3>${engineer.getRole()}<h2>
         </div>
         <div class="info"> 
         <p> ID: ${engineer.getId()}<p>
         <p> Email: ${engineer.getEmail}<p>
         <p> Github: https://github.com/${engineer.github()} <p>
         </div>
         </div>
         </div>

         `;
  }
  function makeManager(manager) {
    return `
        <div> class ="card"
        <div class = container>
        <div class = "title"
            <h3>${manager.getName()}<h2>
            <h3>${manager.getRole()}<h2>
         </div>
         <div class="info"> 
         <p> ID: ${manager.getId()}<p>
         <p> Email: ${manager.getEmail}<p>
         <p> Office: ${manager.office} <p>
         </div>
         </div>
         </div>
        `;
  }
  function makeIntern(intern) {
    return `
        <div> class ="card"
        <div class = container>
        <div class = "title"
            <h3>${intern.getName()}<h2>
            <h3>${intern.getRole()}<h2>
         </div>
         <div class="info">
         <p> ID: ${intern.getId()}<p>
         <p> Email: ${intern.getEmail}<p>
         <p> school: ${intern.school} <p>
         </div>
         </div>
         </div>
        `;
  }
  const card = [];
  card.push(
    userArr
      .filter((employee) => employee.getRole() == "Manager")
      .map((manager) => makeManager(manager))
  );
  card.push(
    userArr
      .filter((employee) => employee.getRole() == "Engineer")
      .map((engineer) => makeEngineer(engineer))
  );
  card.push(
    userArr
      .filter((employee) => employee.getRole() == "Intern")
      .map((intern) => makeIntern(intern))
  );
  return card.flat().join("");
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Management</title>
  </head>
  <body>
    <div class = "title>
        <h2> My Team<h1>
        </div>
        <div class = "team-container">
        ${createCard(team)}
        </div>
    <h1>
  </body>
</html>

    `;
};
