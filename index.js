// required packages
const Inquirer = require('inquirer');
const db = require('./config/connection.js');

// required uitilites 
const addDepartment = require('./utils/addDepartment');
const addEmployee = require('./utils/addEmployee');
const addRole = require('./utils/addRole');
const updateRole = require('./utils/updateRole');
const viewDepartments = require('./utils/viewDepartments');
const viewEmployees = require('./utils/viewEmployees');
const viewRoles = require('./utils/viewRoles');
// more utilities
const questions = require('./utils/questions');
const menu = require('./utils/menuOptions');


function employeeTracker() {
    return Inquirer.prompt(questions.menu)
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
                addEmployee();
                break;
            case menu[6]: // update an employee role
                updateRole();
                break;
            case menu[7]: // exit
                process.exit();
            default: 
                console.log('err: please make a choice');
                employeeTracker();
        }
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
    });
};

employeeTracker();

