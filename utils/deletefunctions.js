const db = require('../db/connection')
const inquirer = require('inquirer');

function removeEmployee(data) {
    const sql = `DELETE FROM employees WHERE id = ?`;
      const params = data.remove_employee;
      
      return db.promise().query(sql, params, (err, result) => {
          if (err) {
              console.log('error')
          }
      });
   
}

function deleteEmployee() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'remove_employee',
          message: 'Enter The Employee ID to be Deleted',
        }
      ])
}


function removeRole(data) {
    const sql = `DELETE FROM roles WHERE id = ?`;
      const params = data.remove_role ;
      
      return db.promise().query(sql, params, (err, result) => {
          if (err) {
              console.log('error')
          }
      });
   
}

function deleteRole() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'remove_role',
          message: 'Enter The Role ID to be Deleted',
        }
      ])
}

module.exports = {deleteEmployee, removeEmployee, deleteRole, removeRole}