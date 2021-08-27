const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;

  let sql = "SELECT * FROM messages ";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
