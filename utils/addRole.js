const db = require('../config/connection.js');
const Inquirer = require('inquirer');
const questions = require('./questions');

module.exports = () => {
    Inquirer.prompt(questions.addRole)
        .then(({ title, salary, department_id }) => {
            // const sqlQuery = "SELECT id FROM departments WHERE name = ?";
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
};