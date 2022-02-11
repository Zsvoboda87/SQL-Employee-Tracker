const db = require('../db/connection')
const {startQuestion} = require('../index')

function showAllEmployees() {
  db.query("SELECT * FROM employees", (err, data) => {
    if (err) throw err;
    console.log("\n")
    console.table(data)
    console.log("\n")
  })
}

function showAllRoles() {
  db.query("SELECT * FROM roles", (err, data) => {
    if (err) throw err;
    console.log("\n")
    console.table(data)
    console.log("\n")
  })
}

function showAllDepartments() {
  db.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.log("\n")
    console.table(data)
    console.log("\n")
  })
}



module.exports = { showAllEmployees, showAllDepartments, showAllRoles };