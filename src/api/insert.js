const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;

  let sql = ` INSERT INTO messages (name , addres)   
                VALUES ('Starbucks' , 'Cileungsi Mall Metropolitan')`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Yeyy Berhasil Memasukan 1 Data");
  });
});
