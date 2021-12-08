const employeeTracker = require('./employeeTracker');
const db = require('../config/connection.js');
const cTable = require('console.table');


module.exports = (sqlQuery, tableName) => {
  db.query(sqlQuery, (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    const table = cTable.getTable(rows);
    console.log(`\n All ${tableName} \n ${table}`);
  });
  employeeTracker;
}