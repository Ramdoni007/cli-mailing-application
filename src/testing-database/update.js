const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;

  // kita akan mengubah alamat Starbucks Ogheyyyyy :)
  let sql = ` UPDATE  messages  
                 SET  addres = 'LANTAI 10 ' 
                 WHERE id =1`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number Berhasil di masukan: " + result.affectedRows);
  });
});
