const inquirer = require('inquirer');
const { showAllEmployees, showAllDepartments, showAllRoles }= require('./utils/displayfuctions.js')
const { addDepartment, addRole, addEmployee } = require('./utils/addfunctions.js')
const {updateEmployee} =require('./utils/updatefunctions')
const db = require('./db/connection')

db.connect(function (err) {
  if (err) throw err;
  startQuestion()
})


const sorter = pdata => {
  switch (pdata.todo) {
    case 'View All Departments': showAllDepartments();break;
    case 'View All Roles': showAllRoles(); break;
    case 'View All Employees': showAllEmployees(); break;

    case 'Add A Department': addDepartment(); break;
    case 'Add A Role': addRole(); break;
    case 'Add An Employee': addEmployee(); break;

    case 'Update An Employee Role': updateEmployee(); break;
  }
}

function startQuestion() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'todo',
      message: 'Select on option',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role']
    }
  ]).then(data => sorter(data))
};

// module.exports = {startQuestion};
