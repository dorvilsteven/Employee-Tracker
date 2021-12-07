const viewTable = require('./viewTable');

// function that views all departments
module.exports = () => {
    const sqlQuery = `SELECT name AS 'department', id FROM departments`;
    const tableName = "Departments";
    viewTable(sqlQuery, tableName);
};