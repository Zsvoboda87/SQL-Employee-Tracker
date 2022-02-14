const db = require('../db/connection')



function showAllEmployees() {

  return db.promise().query(`
  SELECT e.id
    , e.first_name
    , e.last_name
    , r.title
    , r.salary
    , d.title AS department
    , CONCAT(employees.first_name, " ", employees.last_name) AS manager
  FROM employees e
  LEFT JOIN roles r ON e.role_id = r.id
  LEFT JOIN department d ON r.department_id = d.id
  LEFT JOIN employees ON e.manager_id = employees.id;`)
}

function showEmployeeByDepartment() {
  return db.promise().query(
      `SELECT 
      d.title AS department
      , CONCAT(employees.first_name, " ", employees.last_name) AS manager
      , r.title
      , e.first_name
      , e.last_name
      , e.id
      FROM employees e
      LEFT JOIN roles r ON e.role_id = r.id
      LEFT JOIN department d ON r.department_id = d.id
      LEFT JOIN employees ON e.manager_id = employees.id
      ORDER BY department;`)
    }

function showEmployeeByManager() {

  return db.promise().query(`
    SELECT e.id
    , CONCAT(employees.first_name, " ", employees.last_name) AS manager
    , e.first_name
    , e.last_name
    , r.title
    , d.title AS department
    FROM employees e
    LEFT JOIN roles r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id
    LEFT JOIN employees ON e.manager_id = employees.id
    ORDER BY manager;`)
}

function showAllRoles() {
  return db.promise().query("SELECT * FROM roles")
}

function showAllDepartments() {
  return db.promise().query("SELECT * FROM department")
}



module.exports = { showAllEmployees, showAllDepartments, showAllRoles, showEmployeeByManager, showEmployeeByDepartment };