const Inquirer = require('inquirer');
const db = require('./config/connection.js');

const questions = require('./utils/questions');
const menu = require('./utils/menuOptions');

function employeeTracker() {
    return Inquirer.prompt(questions.menu)
        .then(({action}) => {
            switch(action) {
                case menu[0]:
                    console.log(action);
                    break;
                case menu[1]:
                    console.log(action);
                    break;
                case menu[2]:
                    console.log(action);
                    break;
                case menu[3]:
                    console.log(action);
                    Inquirer.prompt(questions.addDepartment)
                    .then(({departmentName}) => {
                        console.log(departmentName);
                    });
                    break;
                case menu[4]:
                    console.log(action);
                    break;
                case menu[5]:
                    console.log(action);
                    break;
                case menu[6]:
                    console.log(action);
                    break;
                case menu[7]:
                    console.log(action);
                    process.exit();
                    break;
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

