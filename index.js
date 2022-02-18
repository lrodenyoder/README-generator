//VARIABLES
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');
//prompted questions to get user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmInstallation",
    message: "Would you like to include an installation section?",
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    }
  },
  // {
  //   type: "confirm",
  //   name: "confirmUsage",
  //   message: "Would you like to include a usage section?",
  //   default: true,
  // },
  // {
  //   type: "input",
  //   name: "usage",
  //   message: "Please provide instructions and examples for use",
  //   when: ({ confirmUsage }) => {
  //     if (confirmUsage) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  // {
  //   type: "confirm",
  //   name: "confirmLicense",
  //   message: "Would you like to include a license?",
  //   default: true,
  // },
  // {
  //   type: "list",
  //   name: "license",
  //   message: "Please choose a license to use",
  //   choices: [
  //     "MIT",
  //     "GNU Lesser General Public",
  //     'GNU General Public',
  //     'GNU Affero General Public',
  //     'Mozilla Public',
  //     'The Unlicense',
  //     'Apache'
  //   ],
  //   when: ({ confirmLicense }) => {
  //     if (confirmLicense) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  // {
  //   type: "input",
  //   name: "fullName",
  //   message: "Please provide your full name",
  //   validate: (nameInput) => {
  //     if (nameInput) {
  //       return true;
  //     } else {
  //       console.log("Please enter your name!");
  //       return false;
  //     }
  //   },
  //   when: ({ confirmLicense }) => {
  //     if (confirmLicense) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  // {
  //   type: "confirm",
  //   name: "confirmContributing",
  //   message:
  //     "Would you like to provide information on how to contribute to this project?",
  //   default: true,
  // },
  // {
  //   type: "input",
  //   name: "contributing",
  //   message: "How can others contribute to this project?",
  //   when: ({ confirmUsage }) => {
  //     if (confirmUsage) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  // {
  //   type: "confirm",
  //   name: "confirmTesting",
  //   message:
  //     "Would you like to provide any tests for this project?",
  //   default: true,
  // },
  // {
  //   type: "input",
  //   name: "testing",
  //   message: "What tests have been done for this project?",
  //   when: ({ confirmTesting }) => {
  //     if (confirmTesting) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  {
    type: "input",
    name: "github",
    message: "Please enter your github username",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter an email where you can be contacted",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
];

//FUNCTIONS
//creates readme file from user input data
const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File Created!'
      })
    })
  });
};

//initialize app
const init = readmeData => {
    console.log(`
    ===============
    Create a README
    ===============
    `)
    return inquirer.prompt(questions)
};

//call to initialize app
init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markdownData => {
        return writeToFile(markdownData);
    })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
    .catch(err => {
        console.log(err);
    });