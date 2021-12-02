const db = require('../config/connection.js');
const cTable = require('console.table');

module.exports = (sqlQuery, tableName) => {
  db.query(sqlQuery, (err, rows) => {
    const table = cTable.getTable(rows);
    console.log(`All ${tableName}`, "\n", table);
  });
}