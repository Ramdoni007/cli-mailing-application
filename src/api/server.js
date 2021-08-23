const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  // Create route/endpoint and HTTP verb/method
  if (req.url === "/mail" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(JSON.parse(body));
    });

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "Ok",
        message: "Message successfully sent",
      })
    );
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
