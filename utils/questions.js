const menuOptions = require('./menuOptions');

const menu = [{
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: menuOptions,
}];

const addDepartment = [{
    type: "input",
    name: "departmentName",
    message: "Enter the name of the department to add?",
}]

const addRole = [
    {
        type: "input",
        name: "title",
        message: "What is the role's title?",
    },
    {
        type: "input",
        name: "salary",
        message: "What is the role's salary?",
    },
    {
        type: "number",
        name: "department_id", 
        message: "What is the department_id for the role?",
    }
];

const addEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "What is the new employee's first name?",
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the new employee's last name?",
    },
    {
        type: "number",
        name: "role_id",
        message: "What is the role_id for the employee?"
    },
    {
        type: "number",
        name: "manager_id",
        message: "What is the manager_id for the manger of this employee?"
    }
];

const updateRole = [
    {
        type: "number",
        name: "employee_id",
        message: "Select the employee you'd like to modify by their id: "
    },
    {
        type: "number",
        name: "role_id",
        message: "Select the new role of the employee by id: "
    }
];

module.exports = {menu, addDepartment, addRole, addEmployee, updateRole};