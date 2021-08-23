const readlineSync = require("readline-sync");
const http = require("http");

const to = readlineSync.question("To      : ");
const from = readlineSync.question("From    : ");
const message = readlineSync.question("Message : ");

const data = JSON.stringify({ data: { to, from, message } });

const options = {
  hostname: "localhost",
  port: 5000,
  path: "/mail",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const req = http.request(options, function (res) {
  console.log("\nstatusCode: " + res.statusCode);

  res.on("data", function (d) {
    process.stdout.write(d);
  });
});

req.on("error", function (error) {
  console.log(error);
});

req.write(data);
req.end();
