const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN department ON roles.department_id = department.id;`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });

});


module.exports = router;