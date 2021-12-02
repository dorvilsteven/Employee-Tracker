// require mysql2 
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: 'Neverneeded1!',
        database: 'company'
    },
    console.log('Connected To The Company Database.')
);

module.exports = db;
