const mysql = require('mysql2/promise')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '@sqlshal134#',
    database: 'students_db',
})

module.exports = db;