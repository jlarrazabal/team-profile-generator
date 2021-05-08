//Node Packages:
const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "What is the employee ID number of the team's Manager?"
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
    message: "What is the name of the team member that you want to add to the group?"
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is the employee ID number of the team member that you want to add?"
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the new team member's email address?"
  }
];

const engineerQuestions = [{
  type: "input",
  name: "engineerGitHubUsername",
  message: "What is the GitHub username of the engineer that you want to add to the group?"
}];

const internQuestions = [{
  type: "input",
  name: "internSchool",
  message: "To what school does the intern that you want to add to the group belongs to?"
}];

const addNewTeamMemberQuestion = [{
  type: "list",
  name: "addNewTeamMember",
  message: "Do you want to add another team member?",
  choices: ["YES", "NO"]
}];

const employeeTypeQuestion = [{
  type: "list",
  name: "employeeType",
  message: "What type of employee do you want to add to the team",
  choices: ["Engineer", "Intern"]
}];

const teamNameQuestion = [{
  type: "input",
  name: "teamName",
  message: "What is the name of the team?"
}];

//Classes
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
};

class Manager extends Employee {
  constructor(name, id, email, managerOfficeNumber) {
    super(name, id, email);
    this.managerOfficeNumber = managerOfficeNumber;
    this.role = "Manager";
  }
};

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  getGitHub() {
    return this.github;
  }
};

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getSchool() {
    return this.school;
  }
};

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
      const newManager = new Manager(answers.teamManagerName, answers.employeeID, answers.employeeEmail, answers.managerOfficeNumber);
      teamMembers.push(newManager);
      addTeamMember();
    }
  });
};

const addTeamMember = function() {
  inquirer.prompt(addNewTeamMemberQuestion).then((answers) => {
    if (answers.addNewTeamMember === "YES") {
      inquirer.prompt(employeeTypeQuestion).then((answers) => {
        switch (answers.employeeType) {
          case "Engineer":
            const newEngineerQuestions = teamMembersQuestions.concat(engineerQuestions);
            addEngineer(newEngineerQuestions);
            break;
          case "Intern":
            const newInternQuestions = teamMembersQuestions.concat(internQuestions);
            addIntern(newInternQuestions);
        }
      });
    } else {
      console.log(teamMembers);
      createHTMLfile();
    }
  });
};

const addEngineer = function(newEngineerQuestions) {
  inquirer.prompt(newEngineerQuestions).then((answers) => {
    if (answers.teamMemberName === "" || answers.employeeID === "" || answers.employeeEmail === "" || answers.engineerGitHubUsername === "") {
      console.log("The information provide is not complete. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer();
      }, 2000);
    } else if (isNaN(parseInt(answers.employeeID))) {
      console.log("Employee ID must be a number, please try again. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer();
      }, 2000);
    } else {
      const newEngineer = new Engineer(answers.teamMemberName, answers.employeeID, answers.employeeEmail, answers.engineerGitHubUsername);
      teamMembers.push(newEngineer);
      addTeamMember();
    }
  });
};

const addIntern = function(newInternQuestions) {
  inquirer.prompt(newInternQuestions).then((answers) => {
    if (answers.teamMemberName === "" || answers.employeeID === "" || answers.employeeEmail === "" || answers.internSchool === "") {
      console.log("The information provide is not complete. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer();
      }, 2000);
    } else if (isNaN(parseInt(answers.employeeID))) {
      console.log("Employee ID must be a number, please try again. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer();
      }, 2000);
    } else {
      const newIntern = new Intern(answers.teamMemberName, answers.employeeID, answers.employeeEmail, answers.internSchool);
      teamMembers.push(newIntern);
      addTeamMember();
    }
  });
};

// Function to write the index.html file with the information provided by the user:
const createHTMLfile = function() {
  inquirer.prompt(teamNameQuestion).then((answers) => {
    if (answers.teamName === "") {
      console.log("Team name connot be empty, please try again. For your convenience, the questions will be presented again in 2 seconds.");
      setTimeout(() => {
        addEngineer();
      }, 2000);
    } else {
      let teamName = answers.teamName.replace(/\s+/g, "");
      let cards = [];
      const addCards = function(teamMembers) {
        for (let i = 0; i < teamMembers.length; i++) {
          switch (teamMembers[i].role) {
            case "Manager":
              let manager = `
              <div class="card text-dark bg-light mb-3" style="width: 22rem; height: 16rem; margin: 1rem;">
                <div class="card-header bg-primary">
                  <h3 style="color:white;">${teamMembers[i].name}</h3>
                  <h3 style="color:white;">☕ Manager</h3>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item border border-1 border-bottom-0 rounded-top">ID: ${teamMembers[i].id}</li>
                    <li class="list-group-item border border-1 border-bottom-0">Email: ${teamMembers[i].email}</li>
                    <li class="list-group-item border border-1 rounded-bottom">Office Number: ${teamMembers[i].managerOfficeNumber}</li>
                  </ul>
                </div>
              </div>
              `;
              cards.push(manager);
              break;
            case "Engineer":
              let engineer = `
              <div class="card text-dark bg-light mb-3" style="width: 22rem; height: 16rem; margin: 1rem;">
                <div class="card-header bg-primary">
                  <h3 style="color:white;">${teamMembers[i].name}</h3>
                  <h3 style="color:white;">👓 Engineer</h3>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item border border-1 border-bottom-0 rounded-top">ID: ${teamMembers[i].id}</li>
                    <li class="list-group-item border border-1 border-bottom-0">Email: ${teamMembers[i].email}</li>
                    <li class="list-group-item border border-1 rounded-bottom">GitHub: <a href="https://github.com/${teamMembers[i].github}">${teamMembers[i].github}</a></li>
                  </ul>
                </div>
              </div>
              `;
              cards.push(engineer);
              break;
            case "Intern":
              let intern = `
              <div class="card text-dark bg-light mb-3" style="width: 22rem; height: 16rem; margin: 1rem;">
                <div class="card-header bg-primary">
                  <h3 style="color:white;">${teamMembers[i].name}</h3>
                  <h3 style="color:white;">👨‍🎓 Intern</h3>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item border border-1 border-bottom-0 rounded-top">ID: ${teamMembers[i].id}</li>
                    <li class="list-group-item border border-1 border-bottom-0">Email: ${teamMembers[i].email}</li>
                    <li class="list-group-item border border-1 rounded-bottom">School: ${teamMembers[i].school}</li>
                  </ul>
                </div>
              </div>
              `;
              cards.push(intern);
          }
        }
      };
      addCards(teamMembers);
      let template = `
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <style>
        * {
          margin: 0;
          border: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
        }
        </style>
        <title>${answers.teamName} Team Profie</title>
      </head>

      <body class="vh-100 vw-100 bg-light d-flex justify-content-center flex-column">
        <nav class="container-fluid d-flex justify-content-center bg-danger">
          <h1 class="h1 lh-lg" style="color:white;">My Team</h1>
        </nav>
        <main class="h-100 w-75 bg-light d-flex justify-content-evenly align-items-flex-start flex-wrap flex-row" style="margin: 0 auto;">
          ${cards.join("\n")}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      </body>
      </html>
      `;
      fs.writeFile(`${teamName}.html`, template, function(err) {
        if (err) throw err;
        console.log(`Your new file "${teamName}.html" has been created/updated successfully!`);
      });
    }
  });
}

addManager();
