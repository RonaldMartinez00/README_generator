const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
   {
     type: 'input',
     name: 'project',
     message: "What's your project name",
   },
   {
     type: 'input',
     name: 'motivation',
     message: "what was your motivation?",
    },   
    {
    type: 'input',
    name: 'installation',
    message: "What are the steps required to install your project?",
    },
    {
        type: 'input',
        name: 'credits',
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use.",
    },
    {
     type: 'input',
     name: 'license',
     message: "If needed add license.",
     default() {
        return 'None';
      },
    }
];

inquirer.prompt(questions).then((answers) => {


fs.writeFileSync(
'README.md',

`# My Project

## Project Name

${answers.project}

## Motivation

${answers.motivation}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}`
);
});
