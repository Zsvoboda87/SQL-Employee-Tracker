const db = require('../db/connection')
const inquirer = require('inquirer');




function insertEmployeeUpdate(data) {

    const sql = `UPDATE employees 
                    SET first_name = ?,
                    last_name = ?,
                    role_id = ?,
                    manager_id = ?
                    WHERE id = ?;`

    const params = [data.first_name, data.last_name, data.role, data.manager_id, data.update_id];

    return db.query(sql, params, (err, result) => {
        if (err) {
           console.log('error')
            return;
        }
    });
}

    function updateEmployee() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'update_id',
                message: 'Enter the Employee ID you would like to update',
            },
            {
                type: 'input',
                name: 'first_name',
                message: "Enter The Employees's First Name:",
            },
            {
                type: 'input',
                name: 'last_name',
                message: "Enter The Employees's Last Name:",
            },
            {
                type: 'input',
                name: 'role',
                message: "Enter The Employees's Role ID",
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "Enter The Employee's Manager ID",
            },
        ])
    }


    

    function viewDeptBudget() {

        return db.promise().query(`
        SELECT d.title, 
        SUM(r.salary)
        FROM employees e
            JOIN roles r ON r.id = e.role_id
            JOIN department d ON r.department_id = d.id
        GROUP BY d.title;`)
      }

    module.exports = { updateEmployee, insertEmployeeUpdate, viewDeptBudget };