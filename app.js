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

app.post("/social", (req, res) => {
  const base64 = fs.readFileSync(
    __dirname + `/public/${req.body.pic}.png`,
    "base64"
  );
  res.status(200);
  res.send({ image: base64 });
  //   res.download(__dirname + `/public/${req.body.pic}.png`);
});

app.listen(8080);
console.log("Server started");
