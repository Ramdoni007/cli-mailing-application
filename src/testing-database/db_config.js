const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "user-tester",
  password: "",
  database: "table_messages",
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Yeyy Berhasil Connect");
// });

module.exports = db;
