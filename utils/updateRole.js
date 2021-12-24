const db = require('../config/connection.js');
const Inquirer = require('inquirer');
const questions = require('./questions');
const viewRoles = require('./viewRoles');
const viewEmployees = require('./viewEmployees');

module.exports = () => {
    viewRoles();
    viewEmployees();
    Inquirer.prompt(questions.updateRole)
        .then(({ employee_id, role_id }) => {
            const update = [role_id, employee_id];
            const sqlInsert = `UPDATE employees SET role_id = ? WHERE id = ?`;

            db.query(sqlInsert, update, (err, results) => {
                if (err) {
                    return console.log(err.message);
                }
                console.log(`Rows Updated: ${results.affectedRows}`);
            });
            viewEmployees();
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
}