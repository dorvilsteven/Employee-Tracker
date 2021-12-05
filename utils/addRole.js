const db = require('../config/connection.js');
const Inquirer = require('inquirer');
const questions = require('./questions');
const viewRoles = require('./viewRoles');

module.exports = () => {
    Inquirer.prompt(questions.addRole)
    .then(({ title, salary, department_id }) => {
        let role = [title, salary, department_id];
        
        const sqlInsert = "INSERT INTO roles (title, salary, department_id) VALUES ?";
        
        db.query(sqlInsert, [[role]], (err, results) => {
            if (err) {
                return console.error(err.message);
            }
            console.log(`${results.affectedRows} row(s) of data added`);
        });

        viewRoles();
    });
};