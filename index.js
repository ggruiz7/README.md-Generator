const inquirer = require("inquirer");
const fs = require("fs");

const standardQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate(input) {
          if (input === "") {
            return "You must enter a valid username.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate(input) {
          if (input === "") {
            return "You must enter a project title.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address: ",
        validate(input) {
          if (input === "") {
            return "You must enter a email address.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a short description of your project: ",
        validate(input) {
          if (input === "") {
            return "You must provide a description.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "implement",
        message: "Provide the steps required for implementing your project: ",
      },
      {
        type: "input",
        name: "applications",
        message: "Provide a guide of the project: ",
      },
      {
        type: "input",
        name: "features",
        message: "Provide features of the project: ",
      },
      {
        type: "input",
        name: "Credit",
        message: "Provide a list of collaborators on the project (if any): ",
      },
      {
        type: "list",
        name: "License",
        message: "Select a license: ",
        choices: ["Boost Software", "GNU GPLv3", "Apache", "MIT"],
      },
    ])

    .then((data) => {
      const fname = `${data.title.toLowerCase().split("").join("")}.md`;

      JSON.stringify(data, null, "/t");

      fs.writeFile("./dist/" + fname, generateREADME(data, licenseBadge(data)), (err) =>
        err ? console.log(data) : console.log("Successful!")
      );
    });
};

generateREADME = (answers, badge) =>
  `
${badge}
# ${answers.title}
## Description
${answers.description}
## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Features](#features)
 - [Credits](#credits)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [License](#License)
 - [Questions](#questions)
## Installation
${answers.implement}
## Usage
${answers.applications}
## Features
${answers.features}
## Credits
${answers.Credit}
## License
This project is licensed under the ${answers.License} license.
## Questions
If you have any questions, please use the contact information below:  
https://github.com/${answers.username}  
${answers.email}
`;

function licenseBadge(answers) {
  switch (answers.License) {
    case "MIT":
      let badgeMIT =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return badgeMIT;
      break;
    case "GNU GPLv3":
      let badgeGNU =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return badgeGNU;
      break;
    case "Apache":
      let badgeApache =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return badgeApache;
      break;
  }
}

function init() {
  standardQuestions();
}

init();
