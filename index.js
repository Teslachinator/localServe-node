const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const host = "localhost";
const port = "8080";

// *! Выводит на странице сообщение
// const requestListener = (req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.writeHead(200);
//   res.end(`{"message": "dfghjkjvbn"}`);
// };

// *! Сохраняет в формате CSV
// const requestListener = function (req, res) {
//   res.setHeader("Content-Type", "text/csv");
//   res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
//   res.writeHead(200);
//   res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
// };

// *! Формат HTML
// const requestListener = function (req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.writeHead(200);
//   res.end(`<html><body><h1>This is HTML</h1></body></html>`);
// };
// *! В формате HTML из готового HTML
// const requestListener = function (req, res) {
//   fs.readFile(__dirname + "/index.html")
//     .then((contents) => {
//       res.setHeader("Content-Type", "text/html");
//       res.writeHead(200);
//       res.end(contents);
//     })
//     .catch((err) => {
//       res.writeHead(500);
//       res.end(err);
//       return;
//     });
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

// *! request

http
  .createServer((req, res) => {
    console.log("url: " + req.url);
    console.log("Тип запроса: " + req.method);
    console.log("User-Agent: " + req.headers["user-agent"]);
    console.log("asdfsd");
    console.log(req.headers);
    res.end();
  })
  .listen(8080);
