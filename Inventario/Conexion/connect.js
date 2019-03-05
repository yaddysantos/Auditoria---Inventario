var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'auditoria_db'
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

connection.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    connection.query("SELECT * FROM auditor", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
 
//connection.end();