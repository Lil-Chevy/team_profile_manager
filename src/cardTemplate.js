const createCard = function makePage(userArr) {
  function makeEngineer(engineer) {
    return `
        <div class ="card"
        <div class="container">
        <div class="title">
            <h2>${engineer.name}</h2>
            <h2>${engineer.getRole}<h2>
         </div>
         <div class="info">
         <p> ID: ${engineer.id}</p>
         <p> Email: ${engineer.email}</p>
         <p> Github: https://github.com/${engineer.github} </p>
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
            <h2>${manager.name}<h2>
            <h2>${manager.getRole}<h2>
         </div>
         <div class="info"> 
         <p> ID: ${manager.id}</p>
         <p> Email: ${manager.email}</p>
         <p> Office: ${manager.office} </p>
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
            <h2>${intern.name}<h2>
            <h2>${intern.getRole}<h2>
         </div>
         <div class="info">
         <p> ID: ${intern.id}</p>
         <p> Email: ${intern.email}</p>
         <p> school: ${intern.school} </p>
         </div>
         </div>
         </div>
        `;
  }
  const card = [];
  card.push(
    userArr
      .filter((employee) => employee.getRole == "Manager")
      .map((manager) => makeManager(manager))
  );
  card.push(
    userArr
      .filter((employee) => employee.getRole == "Engineer")
      .map((engineer) => makeEngineer(engineer))
  );
  card.push(
    userArr
      .filter((employee) => employee.getRole == "Intern")
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
