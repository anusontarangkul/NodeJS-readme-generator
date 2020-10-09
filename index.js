const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./generate-markdown")


const questions = [
    {
        type: "input",
        name: "github",
        message: "Please enter the title of your GitHub username."
    },
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
        name: "installation",
        message: "Please enter the installation directions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter how to use the application."
    },
    {
        type: "list",
        name: "license",
        message: "Please enter the license.",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
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
        name: "email",
        message: "Please enter your GitHub email."
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then(
        (answers) => {
            writeToFile("README.md", generateMarkdown({ ...answers }))
        }
    )
}

init();