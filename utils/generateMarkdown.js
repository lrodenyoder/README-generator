//const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

const axios = require('axios');



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const createLicense = (licenseText) => {
  if (!licenseText) {
    return "";
  }

  axios.get("https://api.github.com/licenses/MIT").then((response) => {
    console.log(response);
  });

  return `
  ## Installation
  ${licenseText}
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


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${data.description}
  ${createInstallation(data.installation)}
  ${createUsage(data.usage)}
  ${createLicense(data.license)}
`;
}

module.exports = generateMarkdown;
