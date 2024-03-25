// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // creates the title for the README
    {
        type: 'input',
        name: 'fileName',
        message: "Enter Title of your Project",
    },
    // Will create the description for the README
    {
        type: "input",
        name: "description",
        message: "Enter a description of the project",
    },
    // Will create the installations section for the README
    {
        type: "input",
        name: "Installation",
        message: "Enter an explanation detailing how to install the software, or enter commands for the program",
    },
    // Will create the Usage section for the README
    {
        type: "input",
        name: "Usage",
        message: "Enter a description on how to use software/program",
    },
    // Will Create the user GitHub Link for the README
    {
        type: "input",
        name: "GitHub-UserName",
        message: "Enter your GitHub username(enter url)?",
    },
    // Will have a link to user email
    {
        type: "input",
        name: "e-mail",
        message: "Enter your e-mail address",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data); {
        console.log(JSON.stringify(data, null, ''));
        writeToFile("./README/README.md")
    }
};

// Function call to initialize app
init();
