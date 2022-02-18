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

  const licName = licenseArray.find(({ name }) => name === licenseText)

  const { name, url, badge } = licName
  
  return `
  ![license](${badge})
  `;
};

//check if installation section included
const createInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `
  ## Installation
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
  ${testingText}
  `
};


//check if license section included
const createLicense = (data) => {
  if (!data.license) {
    return "";
  }

  const licName = licenseArray.find(({ name }) => name === data.license);

  const { name, url, badge } = licName;
  
  return `
 ## License
  ${data.license} License 

  Copyright (c) [${new Date().getFullYear()}] by [${data.fullName}]

  [Click Here](${url}) to go to license details
  `
};

const createTableOfContents = (data) => {
  console.log("working toc", data)

  let { title, description, confirmInstallation, github, email } = data;

  if (!confirmInstallation) {
    confirmInstallation = ''
  } else {
    confirmInstallation = `- Installation`
  }

  return `
  - test
  ${confirmInstallation}

  `
}


//generate markdown text
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  ${createTableOfContents(data)}

  ${createInstallation(data.installation)}

  ${createUsage(data.usage)}
  
  ${createContribution(data.contributing)}

  ${createTesting(data.testing)}

  ${createLicense(data)}
`;
};

//pass use of function to index.js
module.exports = generateMarkdown;
