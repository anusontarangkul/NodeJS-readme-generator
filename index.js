const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project."
        },
        {
            type: "input",
            name: "description",
            message: "Please enter the description of your project."
        },
        {
            type: "input",
            name: "table of conts",
            message: "Please enter the Table of Contents of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter the installation directions."
        },
        {
            type: "input",
            name: "license",
            message: "Please enter the license."
        },
        {
            type: "input",
            name: "contributors",
            message: "Please enter the contributors."
        },
        {
            type: "input",
            name: "tests",
            message: "Please enter how to test the app."
        },
        {
            type: "input",
            name: "pciture",
            message: "Please enter your GitHub profile picture."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your GitHub email."
        }
    ])
    .then(answers => {
        console.info('Answers:', answers);
    });

