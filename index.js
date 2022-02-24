// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// resarch path npm  path pachkage

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "what is a description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "how do you install your project?",
  },
  {
    type: "list",
    name: "license",
    message: "what license does your project have?",
    choices: ["mit", "..", "..", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("generating answer json");
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
