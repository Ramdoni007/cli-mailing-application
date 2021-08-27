const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "user-tester",
  password: "",
  database: "mailing_database",
});

module.exports = db;
