const Inquirer = require('inquirer');
const db = require('./config/connection.js');

const questions = require('./utils/questions');
const menu = require('./utils/menuOptions');


function employeeTracker() {
    return Inquirer.prompt(questions.menu)
    .then(({action}) => {
        switch(action) {
            case menu[0]: // view all departments
                console.log(action);
                break;
            case menu[1]: // view all roles
                console.log(action);
                break;
            case menu[2]: // view all employees
                console.log(action);
                break;
            case menu[3]: // add a department
                console.log(action);
                Inquirer.prompt(questions.addDepartment)
                .then(({departmentName}) => {
                    console.log(departmentName);
                });
                break;
            case menu[4]: // add a role
                console.log(action);
                break;
            case menu[5]: // add an employee
                console.log(action);
                break;
            case menu[6]: // update an employee role
                console.log(action);
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
};

employeeTracker();

