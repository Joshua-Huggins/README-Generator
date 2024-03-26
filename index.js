// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function validateInput(value) {
    if(value != "") {
        return true;
    } else {
        return "Please enter a valid input";
    }
}
// TODO: Create an array of questions for user input
const questions = [
    // creates the title for the README
    {
        type: 'input',
        name: 'fileName',
        message: "Enter Title of your Project",
        validate: validateInput,
    },
    // Will create the description for the README
    {
        type: "input",
        name: "description",
        message: "Enter a description of the project",
        validate: validateInput,
    },
    // Will create the installations section for the README
    {
        type: "input",
        name: "Installation",
        message: "Enter an explanation detailing how to install the software, or enter commands for the program",
        validate: validateInput,
    },
    // Will create the Usage section for the README
    {
        type: "input",
        name: "Usage",
        message: "Enter a description on how to use software/program",
        validate: validateInput,
    },
    // Will Create the user GitHub Link for the README
    {
        type: "input",
        name: "GitHubUserName",
        message: "Enter your GitHub username(enter url)?",
        validate: validateInput,
    },
    // Will have a link to user email
    {
        type: "input",
        name: "email",
        message: "Enter your e-mail address",
        validate: validateInput,
    },
];

// function to generate the ReadMe here
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}


// function to initalize the beginning of the questions 
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("./README/README.md", data);
    });
}

// call the function to initalize the beginning of the questions 
init();