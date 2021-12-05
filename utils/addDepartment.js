const db = require('../config/connection.js');
const Inquirer = require('inquirer');
const questions = require('./questions');
const viewDepartments = require('./viewDepartments');

module.exports = () => {
    Inquirer.prompt(questions.addDepartment)
    .then(({departmentName}) => {
        const sqlQuery = "INSERT INTO departments (name) VALUES (?)";

        db.query(sqlQuery, departmentName, (err, results) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`${results.affectedRows} row(s) of data added`);
        });

        viewDepartments();
    });
};