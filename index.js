//Node Packages:
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Global Variables:
const teamMembers = [];

const employeeQuestions = [{
    type: "input",
    name: "name",
    message: "What is the name of the employee to be added to the group?"
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is the employee's ID number?"
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the employee's email?"
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

//Adding Classes
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    getName() {
      inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name of the employee to be added to the group?"
      }]).then((answers) => {
        if (answers.name === "") {
          const err = "Name cannot be empty; please try again";
          console.log(err);
        } else {
          this.name = answers.name;
        }
      });
    }
    getId() {
      inquirer.prompt([{
        type: "input",
        name: "id",
        message: "What is employee id number of the new team member?"
      }]).then((answers) => {
        if (answers.id === "" || isNaN(parseInt(answers.id))) {
          const err = "Employee ID cannot be empty or the ID that was provided is not a number; please try again";
          console.log(err);
        } else {
          this.id = answers.id;
        }
      });
    }
    getEmail() {
      inquirer.prompt([{
        type: "input",
        name: "email",
        message: "What is the email the new team member?"
      }]).then((answers) => {
        if (answers.email === "") {
          const err = "Error: Email cannot be empty; please try again";
          console.log(err);
        } else {
          this.email = answers.email;
        }
      });
    }
    getRole() {
      return "Employe";
    }
  }
}

class Manager extends Employee {
  constructor() {

  }
}

class Engineer extends Employee {
  constructor() {

  }
}

class Intern extends Employee {
  constructor() {

  }
}

//Functions to Build the Team and save the information on the teamMembers array
