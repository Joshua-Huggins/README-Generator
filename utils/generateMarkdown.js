// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Example](#example)
  - [Contact](#contact)

  ## Description

  ${data.description}

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}


  ## License

  ![badge](https://img.shields.io/badge/license-${data.license})

  This applications is covered by ${data.license} license.

  ## Contributors

  Contributors: ${data.Contribution}

  ## Tests

  ${data.Test}

  ## Questions

  ${data.Questions}

  ## Example

  ## Contact
  * GitHub Username: ${data.GitHubUserName}
  * E=mail address: ${data.email}

`;
}

module.exports = generateMarkdown;
