const db = require('../config/connection.js');
const cTable = require('console.table');

async function viewTable(sqlQuery, tableName) {
  db.query(sqlQuery, (err, rows) => {
    const table = cTable.getTable(rows);
    console.log("\n", `All ${tableName}`, "\n", table, "\n");
  });
  
}

// function that views all departments and department_id's
module.exports = () => {
    const sqlQuery = `SELECT name AS 'department', id FROM departments`;
    const tableName = "Departments";
    viewTable(sqlQuery, tableName);
};