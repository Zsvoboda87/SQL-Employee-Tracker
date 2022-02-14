const inquirer = require('inquirer');
const { showAllEmployees, showAllDepartments, showAllRoles, showEmployeeByManager, showEmployeeByDepartment }= require('./utils/displayfuctions.js')
const { addDepartment, addRole, addEmployee, insertDepartment, insertRole, insertEmployee } = require('./utils/addfunctions.js')
const {updateEmployee, insertEmployeeUpdate} =require('./utils/updatefunctions')
const {deleteEmployee, removeEmployee, deleteRole, removeRole, deleteDepartment, removeDepartment} = require('./utils/deletefunctions')
const db = require('./db/connection')


db.connect(function (err) {
  if (err) throw err;
  startQuestion()
})


const sorter = pdata => {
  switch (pdata.todo) {
    case 'View All Departments': showAllDepartments().then(data => {console.table(data[0]); startQuestion() }); break;
    case 'View All Roles': showAllRoles().then(data => {console.table(data[0]); startQuestion() }); break;
    case 'View All Employees': showAllEmployees().then(data => {console.table(data[0]); startQuestion() }); break;
    case 'View Employees by Department': showEmployeeByDepartment().then(data => {console.table(data[0]); startQuestion() }); break;
    case 'View Employees by Manager': showEmployeeByManager().then(data => {console.table(data[0]); startQuestion() }); break;

    case 'Add A Department': addDepartment().then(answer => {insertDepartment(answer); startQuestion()}) ; break;
    case 'Add A Role': addRole().then(answer => {insertRole(answer); startQuestion()}) ; break;
    case 'Add An Employee': addEmployee().then(answer => {insertEmployee(answer); startQuestion()}) ; break;

    case 'Update An Employee Role': showAllEmployees().then(data => {console.table(data[0]); return '' })
             .then( () => { updateEmployee().then(answer => {insertEmployeeUpdate(answer); startQuestion()})})

    case 'Delete Employee': deleteEmployee().then(answer => {removeEmployee(answer); startQuestion()}) ; break;
    case 'Delete Role': deleteRole().then(answer => {removeRole(answer); startQuestion()}) ; break;
    case 'Delete Department': deleteDepartment().then(answer => {removeDepartment(answer); startQuestion()}) ; break;


  }
}

function startQuestion() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'todo',
      message: 'Select on option',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'View Employees by Department', 'View Employees by Manager', 
                'Add A Department', 'Add A Role', 'Add An Employee', 
                'Update An Employee Role',
                'Delete Employee', 'Delete Role', 'Delete Department']
    }
  ]).then(data => sorter(data))
};

module.exports = {startQuestion};
