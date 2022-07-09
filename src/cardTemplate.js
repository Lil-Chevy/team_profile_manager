// createCard function to dynamically add userArr  information used in index.js
const createCard = function makePage(userArr) {
  console.log("USER ARR 2 ", userArr);
  function makeEngineer(engineer) {
    return `
        <div class ="card">
        <div class="container">
        <div class="title">
            <h2>${engineer.name}</h2>
            <h2>${engineer.getRole}<h2>
         </div>
         <div class="info">
         <p> ID: ${engineer.id}</p>
         <p> Email: <a href ="${engineer.email}"> ${engineer.email} </a></p>
         <p> Github: <a href ="https://github.com/${engineer.github}"> https://github.com/${engineer.github}</a></p>
         </div>
         </div>
         </div>

         `;
  }
  function makeManager(manager) {
    return `
        <div class="card">
        <div class="container">
        <div class="title">
            <h2>${manager.name}</h2>
            <h2>${manager.role}</h2>
         </div>
         <div class="info">
         <p> ID: ${manager.id}</p>
         <p> Email:<a href ="${manager.email}"> ${manager.email}</a> </p>
         <p> school: ${manager.office} </p>
         </div>
         </div>
         </div>
        `;
  }
  function makeIntern(intern) {
    return `
        <div class="card">
        <div class="container">
        <div class="title">
            <h2>${intern.name}</h2>
            <h2>${intern.getRole}</h2>
         </div>
         <div class="info">
         <p> ID: ${intern.id}</p>
         <p> Email: <a href ="${intern.email}> ${intern.email}</a></p>
         <p> school: ${intern.school} </p>
         </div>
         </div>
         </div>
        `;
  }

  const dynamicArr = [];
  // take information from UserARR and push to dynamicARR
  dynamicArr.push(
    userArr
      // filter information from employee under the role Manager
      .filter((employee) => employee.role == "Manager")
      // iterate through userArr array for information portaining to manager and make array manager
      .map((manager) => makeManager(manager))
  );
  dynamicArr.push(
    userArr
      .filter((employee) => employee.getRole == "Engineer")
      .map((engineer) => makeEngineer(engineer))
  );
  dynamicArr.push(
    userArr
      .filter((employee) => employee.getRole == "Intern")
      .map((intern) => makeIntern(intern))
  );
  return dynamicArr.flat().join("");
};
// html file to be written in dist folder
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
    <div class="title">
        <h2> My Team</h2>
        </div>
        <div class="team-container">
        ${createCard(team)}
        </div>
  </body>
</html>

    `;
};
