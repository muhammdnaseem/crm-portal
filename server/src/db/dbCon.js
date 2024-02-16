var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crm",
});


con.connect(function(error) {
    if (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
    console.log("Connection Successful");
});


module.exports = con;