var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Acc3ssGr@nt3d',
    database: 'resource_allocation'
});
module.exports = connection;