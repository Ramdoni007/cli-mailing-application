const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;

  let sql = `CREATE TABLE messages

( 
    id int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255),
    addres VARCHAR(255),
    PRIMARY KEY (id)

)`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Yeyy Table created");
  });
});
