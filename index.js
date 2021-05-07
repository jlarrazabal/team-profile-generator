//Node Packages:
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Global Variables:
const teamMembers = [];

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
        message: "What is the name of the employee to be added to the group? (Note: the first Entry will be the manager of the team!)"
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
          const err = "Error: Email cannot be empty; please try again.";
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
    this.getRole(){
      return "Manager";
    }
    this.managerOfficeNumber = managerOfficeNumber;
    getOfficeNumber(){
      inquirer.prompt([{
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager of the team office number?"
      }]).then((answers) => {
        if (answers.managerOfficeNumber === ""||isNaN(parseInt(answers.managerOfficeNumber))) {
          const err = "Error: Email cannot be empty or the value provide is not a number; please try again.";
          console.log(err);
        } else {
          this.managerOfficeNumber = answers.managerOfficeNumber;
        }
      });
    }
  }
}

class Engineer extends Employee {
  constructor() {
    this.getRole(){
      return "Engineer";
    }
    this.github = github;
    getGitHub(){
      inquirer.prompt([{
        type: "input",
        name: "github",
        message: "What is the GitHub username of the engineer?"
      }]).then((answers) => {
        if (answers.github === "") {
          const err = "Error: github username cannot be empty; please try again.";
          console.log(err);
        } else {
          this.github = answers.github;
        }
      });
    }
  }
}

class Intern extends Employee {
  constructor() {
    this.getRole() {
      return "Intern";
    }
    this.school = school;
    getSchool() {
      inquirer.prompt([{
        type: "input",
        name: "school",
        message: "What is the where does the intern study?"
      }]).then((answers) => {
        if (answers.school === "") {
          const err = "Error: school cannot be empty; please try again.";
          console.log(err);
        } else {
          this.school = answers.school;
        }
      });
    }
  }
}

//Functions to Build the Team and save the information on the teamMembers array

const addManager = function() {
  const newManager = new Manager();
  newManager.getName();
  newManager.getId();
  newManager.getEmail();
  newManager.getRole();
  newManager.getOfficeNumber();
  teamMembers.push(newManager);
  addNewTeamMember();
}

const addNewTeamMember = function() {
  inquirer.prompt([{
      type: "list",
      name: "employeeType",
      message: "What type of employee do you want to add to the team?",
      choices: ["Engineer", "Intern"]
    }]).then((answers) => {
      switch (answers.employeeType) {
        case "Engineer":
        addEngineer();
        break;
        case "Intern":
        addIntern();
      }
  });
}

const addEngineer = function() {
  const newEngineer = new Engineer();
  newEngineer.getName();
  newEngineer.getId();
  newEngineer.getEmail();
  newEngineer.getRole();
  newEngineer.getGitHub();
  teamMembers.push(newEngineer);
  inquirer.prompt([{
      type: "list",
      name: "addNewTeamMember",
      message: "do you want to add another team member?",
      choices: ["YES", "NO"]
    }]).then((answers) => {
      switch (answers.addNewTeamMember) {
        case "YES":
        addNewTeamMember();
        break;
        case "NO":
        console.log(teamMembers);
      }
  });
}

const addIntern = function() {
  const newIntern = new Intern();
  newIntern.getName();
  newIntern.getId();
  newIntern.getEmail();
  newIntern.getRole();
  newIntern.getSchool();
  teamMembers.push(newIntern);
  inquirer.prompt([{
      type: "list",
      name: "addNewTeamMember",
      message: "do you want to add another team member?",
      choices: ["YES", "NO"]
    }]).then((answers) => {
      switch (answers.addNewTeamMember) {
        case "YES":
        addNewTeamMember();
        break;
        case "NO":
        console.log(teamMembers);
      }
  });
}

addManager();
