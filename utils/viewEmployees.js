const viewTable = require('./viewTable');
// function that views all departments
module.exports = () => {
    const sqlQuery = `SELECT 
                      employees.id, 
                      employees.first_name, 
                      employees.last_name, 
                      roles.title AS 'role',
                      roles.salary AS 'salary'
                      FROM employees LEFT JOIN roles 
                      ON employees.role_id = roles.id 
                      LEFT JOIN departments 
                      ON roles.department_id = departments.id`;
    const tableName = "Employees";
    viewTable(sqlQuery, tableName);
};