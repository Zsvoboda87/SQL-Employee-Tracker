const db = require('../db/connection')
const inquirer = require('inquirer');
const { showAllEmployees, showAllDepartments, showAllRoles }= require('./displayfuctions.js')



function insertDepartment(data) {
    const sql = `INSERT INTO department (title) VALUES (?)`;
      const params = data.new_department;
      
      return db.promise().query(sql, params, (err, result) => {
          if (err) {
              console.log('error')
          }
      });

    
}

function addDepartment() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'new_department',
          message: 'Enter The Department Name',
        }
      ])
}


function insertRole(data) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
      const params = [data.new_role, data.salary, data.department_id]
      return db.promise().query(sql, params, (err, result) => {
          if (err) {
            console.log('error')
              return;
          }
      });
}

function addRole() {
   return inquirer.prompt([
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
      ])
}

function insertEmployee(data) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
      const params = [data.first_name, data.last_name, data.role, data.manager_id]
      return db.promise().query(sql, params, (err, result) => {
          if (err) {
            console.log('error');
              return;
          }
      });
}

function addEmployee() {
    return inquirer.prompt([
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
      ])
}



module.exports = {addDepartment, addRole, addEmployee, insertDepartment, insertRole, insertEmployee}