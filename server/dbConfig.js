let mysql = require("mysql2");


//creating mysql connection
let connection = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  
  
module.exports = connection