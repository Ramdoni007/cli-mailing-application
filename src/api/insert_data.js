const db = require("./db_config");

const insertData = (jsonData) => {
  db.connect(function (err) {
    if (err) throw err;

    let sql = `INSERT INTO table_messages (\`to\`, \`from\`, message)
                      VALUES ('${jsonData.data.to}', '${jsonData.data.from}', '${jsonData.data.message}')`;

    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Data successfully inserted");
    });
  });
};

module.exports = insertData;
