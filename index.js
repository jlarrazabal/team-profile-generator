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
    this.getName = function() {
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
    };
    this.getId = function() {
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
    };
    this.getEmail = function() {
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
    };
    this.getRole= function() {
      return "Employe";
    }
  }
}

class Manager extends Employee {
  constructor(name, id, email, managerOfficeNumber) {
    super(name, id, email);
    this.getRole = function(){
      return "Manager";
    };
    this.managerOfficeNumber = managerOfficeNumber;
    this.getOfficeNumber = function(){
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
  constructor(name, id, email, github) {
    super(name, id, email);
    this.getRole = function(){
      return "Engineer";
    };
    this.github = github;
    this.getGitHub = function(){
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
  constructor(name, id, email, school) {
    super(name, id, email);
    this.getRole = function() {
      return "Intern";
    };
    this.school = school;
    this.getSchool = function() {
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
  const rol = newManager.getRole();
  const addName = async function(){
    newManager.getName();
  };

  const addId = async function() {
    await addName();
    newManager.getId();
  };

  const addEmail = async function() {
    await addId();
    newManager.getEmail();
  };

  const addOffice = async function() {
    await addEmail();
    newManager.getOfficeNumber();
  };

  const updateTeam = async function() {
    await addOffice();
    teamMembers.push(newManager);
  };

  const addTeamMember = async function() {
    await updateTeam();
    addNewTeamMember();
  };

  addName();
  addId();
  addEmail();
  addOffice();
  updateTeam();
  addTeamMember();
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
        break;
      }
  });
}

// const addEngineer = function() {
//   const newEngineer = new Engineer();
//   let role = newEngineer.getRole();
//   newEngineer.name = newEngineer.getName();
//   newEngineer.id = newEngineer.getId();
//   newEngineer.email = newEngineer.getEmail();
//   newEngineer.github = newEngineer.getGitHub();
//   teamMembers.push(newEngineer);
//   inquirer.prompt([{
//       type: "list",
//       name: "addNewTeamMember",
//       message: "do you want to add another team member?",
//       choices: ["YES", "NO"]
//     }]).then((answers) => {
//       switch (answers.addNewTeamMember) {
//         case "YES":
//         addNewTeamMember();
//         break;
//         case "NO":
//         console.log(teamMembers);
//         break;
//       }
//   });
// }
//
// const addIntern = function() {
//   const newIntern = new Intern();
//   let role = newIntern.getRole();
//   newIntern.name = newIntern.getName();
//   newIntern.id = newIntern.getId();
//   newIntern.email = newIntern.getEmail();
//   newIntern.school = newIntern.getSchool();
//   teamMembers.push(newIntern);
//   inquirer.prompt([{
//       type: "list",
//       name: "addNewTeamMember",
//       message: "do you want to add another team member?",
//       choices: ["YES", "NO"]
//     }]).then((answers) => {
//       switch (answers.addNewTeamMember) {
//         case "YES":
//         addNewTeamMember();
//         break;
//         case "NO":
//         console.log(teamMembers);
//         break;
//       }
//   });
// }

addManager();
