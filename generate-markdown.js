function generateProjectURL(githubUser, title) {
    const validTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${githubUser}/${validTitle}`;
}

function generateLicenseBadge(license, githubUser, title) {
    if (license !== "none") {
        return `[![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)](${generateProjectURL(githubUser, title)})`
    }
    return "";
}

function renderLicenseSection(license) {
    if (license !== "none") {
        return (
            `## License
            
            This project is license under ${license}.`
        )
    }
    return "";
}

function generateMarkdown(data) {
    return `
    # ${data.title} 
    ${generateLicenseBadge(data.license, data.githubUser, data.title)}
    
    ## Description

    ${data.description}
    
    ## Table of Contents
    
    * [Installation](#installation)

    * [Usage](#usage)

    * [License](#license)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)
    
    ## Installation

    To install the necessary dependencies and run the command:

    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage

    ${data.usage}
    
    ${renderLicenseSection(data.license)}
   
    ## Contributors
    
    ${data.contributors}

    ## Tests

    To test this project run the following command:

    \`\`\`
    ${data.tests}
    \`\`\`

    ## Questions

    If you have any questions, please contact ${githubUser} at ${data.email}.
    `
}