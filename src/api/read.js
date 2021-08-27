const db = require("./db_config");

db.connect(function (err) {
  if (err) throw err;

  let sql = "SELECT * FROM messages ";
  db.query(sql, function (err, result) {
    if (err) throw err;
    // saya menggunakan perulangan untuk menampilkan data
    console.log(`ID \t NAME \t\t ADDRESS`);
    console.log(`--------------------------------------------`);
    result.forEach((messages) => {
      console.log(`${messages.id} \t ${messages.name} \t ${messages.addres}`);
    });
  });
});
