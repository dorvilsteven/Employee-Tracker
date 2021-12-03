const viewTable = require('./viewTable');

// function that views all roles 
module.exports = () => {
  const sqlQuery = `SELECT roles.id, 
                    roles.title, 
                    roles.salary, 
                    departments.name AS 'department' 
                    FROM roles LEFT JOIN departments 
                    ON roles.department_id = departments.id`;
  const tableName = "Roles";
  viewTable(sqlQuery, tableName);
}
