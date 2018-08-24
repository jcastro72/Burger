var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connection as id: "+connection.threadid)
 
  });

module.exports = connection;