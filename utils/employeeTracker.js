// required packages
const Inquirer = require('inquirer');
//database
const db = require('../config/connection');
// required uitilites 
const addDepartment = require('./addDepartment');
const addEmployee = require('./addEmployee');
const addRole = require('./addRole');
const updateRole = require('./updateRole');
const viewDepartments = require('./viewDepartments');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');
// more utilities
const questions = require('./questions');
const menu = require('./menuOptions');

module.exports = () => {
    Inquirer.prompt(questions.menu)
        .then(({action}) => {
            switch(action) {
                case menu[0]: // view all departments
                    viewDepartments();
                    break;
                case menu[1]: // view all roles
                    viewRoles();
                    break;
                case menu[2]: // view all employees
                    viewEmployees();
                    break;
                case menu[3]: // add a department
                    addDepartment();
                    break;
                case menu[4]: // add a role
                    addRole();
                    break;
                case menu[5]: // add an employee
                    viewRoles();
                    viewEmployees();
                    addEmployee();
                    break;
                case menu[6]: // update an employee role
                    updateRole();
                    break;
                case menu[7]: // exit
                    process.exit();
                default: 
                    console.log('err: please make a choice');
            }
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
    return;
};