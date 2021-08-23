const readline = require("readline");
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("To : ", function (to) {
  prompt.question("From : ", function (from) {
    prompt.question("Message : ", function (message) {
      console.log("To : " + to);
      console.log("From : " + from);
      console.log("Message : " + message);

      prompt.close();
    });
  });
});

prompt.on("close", function () {
  process.exit(0);
});
