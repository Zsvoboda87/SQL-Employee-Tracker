const db = require('../db/connection')
const inquirer = require('inquirer');

function insertDepartment(data) {
    console.log(data.new_department)


    const sql = `INSERT INTO department (title) VALUES (?)`;
      const params = data.new_department;
      db.query(sql, params, (err, result) => {
          if (err) {
              res.status(400).json({ error: err.message });
              return;
          }
          console.log({
              message: 'success'
          });
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
    console.log(data.new_role)


    const sql = `INSERT INTO department (title) VALUES (?)`;
      const params = data.new_department;
      db.query(sql, params, (err, result) => {
          if (err) {
              res.status(400).json({ error: err.message });
              return;
          }
          console.log({
              message: 'success'
          });
      });
}

function addRole() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'new_role',
          message: "Enter The New Role's Name",
        }
      ]).then(insertDepartment)
}



module.exports = {addDepartment}