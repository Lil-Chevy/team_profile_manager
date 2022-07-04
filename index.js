import inquirer from "inquirer";
// const userArr = [];

const collectInputs = async (inputs = []) => {
  const employee = [
    {
      name: "name",
      type: "input",
      message: "What is your employee's name?",
    },
    {
      name: "id",
      type: "input",
      message: "What is your Employee's id?",
    },
    {
      name: "email",
      type: "input",
      message: "What is your employee's contact email?",
    },
  ];
  const { again, ...answers } = await inquirer.prompt(employee);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};
const main = async () => {
  const inputs = await collectInputs();
  console.log(inputs);
};

main();
