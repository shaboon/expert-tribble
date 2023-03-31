// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
  "Project Name?",
  "Description?",
  "How do I Install?",
  "Please Give Credits:",
  "What License do I use?",
  "Any Features?",
  "Any Tests?",
];

// console.log(questions[3]);

const [
  projectName,
  description,
  howDoIInstall,
  pleaseGiveCredits,
  whatLicenseDoIUse,
  anyFeatures,
  anyTests,
] = questions;

// return;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: projectName,
        name: "name",
      },
      {
        type: "input",
        message: description,
        name: "desc",
      },
      {
        type: "list",
        message: howDoIInstall,
        name: "install",
        choices: ["Web-Application - N/A", "UnZip & Run Executable"],
      },
      {
        type: "list",
        message: whatLicenseDoIUse,
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        message: pleaseGiveCredits,
        name: "cred",
      },
      {
        type: "input",
        message: anyFeatures,
        name: "feats",
      },
      {
        type: "input",
        message: anyTests,
        name: "test",
      },
    ])
    .then((data) => {
      console.log(data);

      writeToFile(fileName, data);
    });
}

init();
