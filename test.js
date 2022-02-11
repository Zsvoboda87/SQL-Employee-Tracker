const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company"
})

connection.connect(function (err) {
    if(err) throw err;
    start()
})

function start () {
    connection.query("SELECT * FROM employees", (err, data)  => {
        if (err) throw err;

        console.log("\n")
        console.table(data)
        console.log("\n")
    })
}