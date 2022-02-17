const licenseArray = [
  {
    name: "MIT",
    url: "https://choosealicense.com/licenses/mit/",
    badge: "https://img.shields.io/badge/license-MIT-blue",
  },
  {
    name: "GNU Lesser General Public",
    url: "https://choosealicense.com/licenses/gpl-3.0/",
    badge: "https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public-blue",
  },
];

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


const createLicense = (data) => {
  if (!data.license) {
    return "";
  }

  console.log(data, 'LOOK HERE')
  const licName = licenseArray.find(({ name }) => name === data.license)

  const { name, url, badge } = licName
  
  return `
 ## License
  ${data.license} License 

  Copyright (c) [${new Date().getFullYear()}] by [${data.fullName}]

  [Click Here](${url}) to go to license details
  `;
};

const createInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `
  ## Installation
  ${installationText}
  `
};

const createUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `
  ## Installation
  ${usageText}
  `
};

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ${createInstallation(data.installation)}

  ${createUsage(data.usage)}

  ${createLicense(data)}
`;
};

module.exports = generateMarkdown;
