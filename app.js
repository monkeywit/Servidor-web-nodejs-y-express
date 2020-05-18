const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  //res.send("hello world!");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});
