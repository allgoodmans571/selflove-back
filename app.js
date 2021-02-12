const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use("/static", express.static(__dirname + "/public"));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type: image/png");
  res.header('Content-Disposition: attachment; filename="picture.png"');
  next();
});

app.get("/books", (req, res) => {
  res.download(__dirname + `/public/books.png`);
});
app.get("/CROCLMS", (req, res) => {
  res.download(__dirname + `/public/CROCLMS.png`);
});
app.get("/fitmost", (req, res) => {
  res.download(__dirname + `/public/fitmost.png`);
});
app.get("/Meditopia", (req, res) => {
  res.download(__dirname + `/public/Meditopia.png`);
});
app.get("/webinar18", (req, res) => {
  res.download(__dirname + `/public/webinar18.png`);
});

app.listen(8080);
console.log("Server started");
