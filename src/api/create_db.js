const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;

  let sql = "CREATE DATABASE table_messages ";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
