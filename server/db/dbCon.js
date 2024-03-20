var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6692989",
    password: "eFWhpcnxLC",
    database: "sql6692989",
    port: 3306
});

con.connect(function(error){
    if(error) throw error;
    console.log("Connection Successful");
});

module.exports = con;
