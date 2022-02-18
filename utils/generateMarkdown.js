//VARIABLES
const licenseArray = [
  {
    name: "MIT",
    url: "https://choosealicense.com/licenses/mit/",
    badge: "https://img.shields.io/badge/license-MIT-blue",
  },
  {
    name: "GNU Lesser General Public",
    url: "https://choosealicense.com/licenses/lgpl-3.0/",
    badge:
      "https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public-blue",
  },
  {
    name: "Mozilla Public",
    url: "https://choosealicense.com/licenses/mpl-2.0/",
    badge: "https://img.shields.io/badge/license-Mozilla%20Public-blue",
  },
  {
    name: "GNU Affero General Public",
    url: "https://choosealicense.com/licenses/agpl-3.0/",
    badge:
      "https://img.shields.io/badge/license-GNU%20Affero%20General%20Public-blue",
  },
  {
    name: "The Unlicense",
    url: "https://choosealicense.com/licenses/unlicense/",
    badge: "https://img.shields.io/badge/license-The%20Unlicense-blue",
  },
  {
    name: "Apache",
    url: "https://choosealicense.com/licenses/apache-2.0/",
    badge: "https://img.shields.io/badge/license-Apache-blue",
  },
  {
    name: "GNU General Public",
    url: "https://choosealicense.com/licenses/gpl-3.0/",
    badge: "https://img.shields.io/badge/license-GNU%20General%20Public-blue",
  },
];

//FUNCTIONS
//check if included license section to add badge
const renderLicenseBadge = (licenseText) => {
  if (!licenseText) {
    return "";
  }

  const licName = licenseArray.find(({ name }) => name === licenseText);

  const { badge } = licName;
  
  return `
  ![license](${badge})
  `
};

//check if installation section included
const createInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `
  ## Installation

  ----------------------------------------------------

  ${installationText}
  `
};

//check if usage section included
const createUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `
  ## Usage

  ----------------------------------------

  ${usageText}
  `
};

//check if contribution section included
const createContribution = contributionText => {
  if (!contributionText) {
    return '';
  }

  return `
  ## Contribution

  -------------------------------------

  ${contributionText}
  `
};

//check if testing section included
const createTesting = testingText => {
  if (!testingText) {
    return '';
  }

  return `
  ## Tests

  -------------------------------------

  ${testingText}
  `
};

//check if license section included
const createLicense = (data) => {
  if (!data.license) {
    return "";
  }

  const licName = licenseArray.find(({ name }) => name === data.license);

  const { url } = licName;
  
  return `
 ## License

  -----------------------

  ${data.license} License 

  Copyright (c) [${new Date().getFullYear()}] by [${data.fullName}]

  [Click Here](${url}) to go to license details.
  `
};

const createQuestions = (data) => {
  let { github, email } = data;

  return `
  ## Questions?

  ---------------------------

  Visit my GitHub profile or shoot me an email!

  GitHub: [${github}](https://github.com/${github})

  ${email}
  `
};

//create ToC including only sections that user has provided
const createTableOfContents = (data) => {
  let { confirmInstallation, confirmUsage, confirmLicense, confirmContributing, confirmTesting } = data;

  if (!confirmInstallation) {
    confirmInstallation = ''
  } else {
    confirmInstallation = `- [Installation](#installation)`
  }
  
  if (!confirmUsage) {
    confirmUsage = ''
  } else {
    confirmUsage = `- [Usage](#usage)`
  }

  if (!confirmLicense) {
    confirmLicense = ''
  } else {
    confirmLicense = `- [License](#license)`
  }

  if (!confirmContributing) {
    confirmContributing = ''
  } else {
    confirmContributing = `- [Contribution](#contribution)`
  }

  if (!confirmTesting) {
    confirmTesting = ''
  } else {
    confirmTesting = `- [Tests](#tests)`
  }

  return `
  ${confirmInstallation}
  ${confirmUsage}
  ${confirmLicense}
  ${confirmContributing}
  ${confirmTesting}
  - [Questions](#questions)
  `
};


//generate markdown text
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ----------------------

  ${data.description}

  ## Table of Contents

  --------------------------

  ${createTableOfContents(data)}

  ${createInstallation(data.installation)}

  ${createUsage(data.usage)}
  
  ${createLicense(data)}

  ${createContribution(data.contributing)}
  
  ${createTesting(data.testing)}

  ${createQuestions(data)}
`;
};

//pass use of function to index.js
module.exports = generateMarkdown;
