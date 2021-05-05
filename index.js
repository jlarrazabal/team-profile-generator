//Node Packages:
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Global Variables:
const teamMembers = [];

const manangerQuestions = [
  {
    type: "input",
    name: "managerName",
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

const teamMembersQuestions = [
  {
    type: "input",
    name: "teamMemberName",
    message: "What is the name to the team member that you want to add to the group?"
  },
  {
    type: "list",
    name: "employeeType",
    message: "What type of employee do you want to add to the team",
    choices: ["Engineer","Intern"]
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
  }
];

const engineerQuestion = [
  {
    type: "input",
    name: "engineerGitHubUsername",
    message: "What is the GitHub username of the engineer that you want to add to the group?"
  }
];

const internQuestion = [
  {
    type: "input",
    name: "interSchool",
    message: "To what school does the intern that you want to add to the group belongs to?"
  }
];

//Functions to Build the Team and save the information on the teamMembers array
const addManager = function() {
addTeamMember();
}

const addTeamMember = function() {

}

//Function to write the index.html file with the information provided by the user:
const createIndexHtml = function() {
  
}
