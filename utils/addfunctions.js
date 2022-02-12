const db = require('../db/connection')
const inquirer = require('inquirer');
const { showAllEmployees, showAllDepartments, showAllRoles }= require('./displayfuctions.js')
const {startQuestion} = require('../index')


function insertDepartment(data) {
    const sql = `INSERT INTO department (title) VALUES (?)`;
      const params = data.new_department;
      db.query(sql, params, (err, result) => {
          if (err) {
              console.log('error')
          }
          showAllDepartments();
      });
    
}

function addDepartment() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'new_department',
          message: 'Enter The Department Name',
        }
      ]).then(insertDepartment)
}


function insertRole(data) {
    console.log(data)


    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
      const params = [data.new_role, data.salary, data.department_id]
      db.query(sql, params, (err, result) => {
          if (err) {
            console.log('error')
              return;
          }
      });
}

function addRole() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'new_role',
          message: "Enter The New Role's Name",
        },
        {
            type: 'input',
            name: 'salary',
            message: "Enter The New Role's Salary",
          },
          {
            type: 'input',
            name: 'department_id',
            message: "Enter The New Role's Department_id",
          },
      ]).then(insertRole)
}

function insertEmployee(data) {
    console.log(data)


    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?,?)`;
      const params = [data.first_name, data.last_name, data.role, data.manager_id]
      db.query(sql, params, (err, result) => {
          if (err) {
            console.log('error');
              return;
          }
      });
}

function addEmployee() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'first_name',
          message: "Enter The New Employees's First Name:",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter The New Employees's Last Name:",
          },
        {
            type: 'input',
            name: 'role',
            message: "Enter The New Employees's Role ID",
          },
          {
            type: 'input',
            name: 'manager_id',
            message: "Enter The New Employee's Manager ID",
          },
      ]).then(insertEmployee)
}



module.exports = {addDepartment, addRole, addEmployee}