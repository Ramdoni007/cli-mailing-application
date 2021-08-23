const readline = require("readline");
const http = require("http");

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = {
  hostname: "localhost",
  port: 5000,
  path: "/mail",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

let data = JSON.stringify({});

prompt.question("To : ", function (to) {
  prompt.question("From : ", function (from) {
    prompt.question("Message : ", function (message) {
      data = JSON.stringify({ data: { to, from, message } });
      prompt.close();
    });
  });
});

const req = http.request(options, function (res) {
  console.log("statusCode: " + res.statusCode);

  res.on("data", function (d) {
    process.stdout.write(d);
  });
});

req.on("error", function (error) {
  console.log(error);
});

req.write(data);
req.end();
