// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "Project Name?",
  "Description?",
  "How do I Install?",
  "What Kind of Application is This?",
  "How will they Use This?",
  "Please Give Credits:",
  "What License do I use?",
  "Any Features?",
  "Define Rules of Contribution",
  "Please Provide Link for Contribution",
  "Any Tests?",
];

// console.log(questions[3]);

const [
  projectName,
  description,
  howDoIInstall,
  appKind,
  usage,
  pleaseGiveCredits,
  whatLicenseDoIUse,
  anyFeatures,
  contRules,
  contLink,
  anyTests,
] = questions;

// return;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log("Line 34");
  console.log(data);
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
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
        type: "input",
        message: appKind,
        name: "type",
      },
      {
        type: "input",
        message: usage,
        name: "usage",
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
        message: contRules,
        name: "guide",
      },
      {
        type: "input",
        message: contLink,
        name: "link",
      },
      {
        type: "input",
        message: anyTests,
        name: "test",
      },
    ])
    .then((data) => {
      const fileName = "README.md";
      console.log(data);

      writeToFile(fileName, generateMarkdown(data));
    });
}

init();
