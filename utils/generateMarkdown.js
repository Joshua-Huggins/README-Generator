// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Contents

  1. Description
  2. Installation
  3. Usage
  4. License
  5. Example
  6. Contact

  ## Description

  ${data.description}

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## Example

  ## Contact
  * GitHub Username: ${data.GitHubUserName}
  * E=mail address: ${data.email}

`;
}

module.exports = generateMarkdown;
