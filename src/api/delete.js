const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;
  // Kita akan menghapus Starbucks Guysss :)

  let sql = `DELETE FROM  messages WHERE id =1`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(
      "Yeyyyy Number Berhasil di hapus berjumlah : " + result.affectedRows
    );
  });
});
