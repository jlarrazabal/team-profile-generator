//Node Packages:
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Global Variables:
const teamMembers = [];

const manangerQuestions = [{
    type: "input",
    name: "teamManagerName",
    message: "What is the name of the team's Manager?"
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is the employeeID number of the team's Manager?"
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the email address of the team's Manager?"
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the Manager's office number?"
  }
];

const teamMembersQuestions = [{
    type: "input",
    name: "teamMemberName",
    message: "What is the name to the team member that you want to add to the group?"
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is the employeeID number of the team member that you want to add?"
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the email address of the team's Manager?"
  },
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee do you want to add to the team",
    choices: ["Engineer", "Intern"]
  }
];

const engineerQuestions = [{
    type: "input",
    name: "engineerGitHubUsername",
    message: "What is the GitHub username of the engineer that you want to add to the group?"
  },
  {
    type: "list",
    name: "addNewTeamMember",
    message: "Do you want to add another team member?",
    choices: ["YES", "NO"]
  }
];

const internQuestions = [{
    type: "input",
    name: "internSchool",
    message: "To what school does the intern that you want to add to the group belongs to?"
  },
  {
    type: "list",
    name: "addNewTeamMember",
    message: "Do you want to add another team member?",
    choices: ["YES", "NO"]
  },
];

//Functions to Build the Team and save the information on the teamMembers array
const addManager = function() {
  inquirer.prompt(manangerQuestions).then((answers) => {
    if (answers.teamManagerName === "" || answers.employeeID === "" || answers.employeeEmail === "" || answers.managerOfficeNumber === "") {
      console.log("The information provide is not complete. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addManager();
      }, 2000);
    } else if (isNaN(parseInt(answers.employeeID)) || isNaN(parseInt(answers.managerOfficeNumber))) {
      console.log("Employee ID and Office Number must be numbers, please try again. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addManager();
      }, 2000);
    } else {
      teamMembers.push(answers);
      addTeamMember();
    }
  });
}

const addTeamMember = function() {
  inquirer.prompt(teamMembersQuestions).then((answers) => {
    if (answers.teamMemberName === "" || answers.employeeID === "" || answers.employeeEmail === "" || answers.employeeType === "") {
      console.log("The information provide is not complete. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addTeamMember();
      }, 2000);
    } else if (isNaN(parseInt(answers.employeeID))) {
      console.log("Employee ID must be a number, please try again. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addTeamMember();
      }, 2000);
    } else {
      switch (answers.employeeType) {
        case "Engineer":
          addEngineer(answers);
          break;
        case "Intern":
          addIntern(answers);
      }
    }
  });
}

const addEngineer = function(data) {
  inquirer.prompt(engineerQuestions).then((answers) => {
    if (answers.engineerGitHubUsername === "") {
      console.log("The information provide is not complete. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer(data);
      }, 2000);
    } else {
      switch (answers.addNewTeamMember) {
        case "YES":
          let newTeamMember1 = {
            ...data,
            engineerGitHubUsername: answers.engineerGitHubUsername
          };
          teamMembers.push(newTeamMember1);
          addTeamMember();
          break;
        case "NO":
          let newTeamMember2 = {
            ...data,
            engineerGitHubUsername: answers.engineerGitHubUsername
          };
          teamMembers.push(newTeamMember2);
          console.log("A team has been created succesfully: ", teamMembers);
      }
    }
  });
}

const addIntern = function(data) {
  inquirer.prompt(internQuestions).then((answers) => {
    if (answers.internSchool === "") {
      console.log("The information provide is not complete. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer(data);
      }, 2000);
    } else {
      switch (answers.addNewTeamMember) {
        case "YES":
          let newTeamMember1 = {
            ...data,
            internSchool: answers.internSchool
          };
          teamMembers.push(newTeamMember1);
          addTeamMember();
          break;
        case "NO":
          let newTeamMember2 = {
            ...data,
            internSchool: answers.internSchool
          };
          teamMembers.push(newTeamMember2);
          console.log("A team has been created succesfully: ", teamMembers);
      }
    }
  });
}

//Function to write the index.html file with the information provided by the user:
// const createIndexHtml = function() {
//
// }

addManager();
