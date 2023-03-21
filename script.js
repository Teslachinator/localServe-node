const http = require("node:http");
const fs = require("fs").promises;
const path = require("path");

const HOST = "localhost";
const PORT = "8080";
let comments = [];
let numAgent = 0;
const reqListener = (req, res) => {
  // console.log(getClientIp(req));
  if (req.method == "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });

      console.log("Тип запроса: " + req.method);
      res.end("<p>hi man</p>");
    } else if (req.url === "/stats") {
      res.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });
      let userAgent = req.headers["user-agent"];
      numAgent++;

      res.end(
        `<table><tr><th>User-Agent</th><th>Count</th></tr><tr><td>${userAgent}</td><td>${numAgent}</td></tr></table>`
      );
    } else {
      res.writeHead(400, { "Content-Type": "text/plane; charset = utf-8" });
      res.end("400 bad");
    }
  } else if (req.method == "POST" && req.url == "/comments") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      comments.push(JSON.parse(body));
      response.writeHeader(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify(comments));
    });
  } else {
    res.writeHead(400, { "Content-Type": "text/html; charset = utf-8" });
    res.end("400 Bad request");
  }
};
http
  .createServer(reqListener)
  .on("connection", () => {
    console.log("success");
  })
  .listen(PORT, HOST, () => {
    console.log(`Сервер запустился по ссылке: http://${HOST}:${PORT}`);
  });
