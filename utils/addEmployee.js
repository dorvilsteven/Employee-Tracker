const db = require('../config/connection.js');
const Inquirer = require('inquirer');
const questions = require('./questions');
const viewEmployees = require('./viewEmployees');


module.exports = () => {
    Inquirer.prompt(questions.addEmployee)
    .then(({firstName, lastName, role_id, manager_id}) => {
        const employee = [firstName, lastName, role_id, manager_id];

        const sqlInsert = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ?";

        db.query(sqlInsert, [[employee]], (err, results) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`${results.affectedRows} row(s) of data added`);
        });

        viewEmployees();
    });
};