const fs = require("fs"); //inbuild pacakages
const path = require("path");
const express = require("express");
const dirPath = path.join(__dirname, "timestamp");
console.log(dirPath);
const app = express();
const PORT = 9000;

let ts = new Date();

let dateOb = new Date(new Date().toUTCString().slice(0, -3));

const timeStamp = "Last clicked TimeStamp : " + dateOb;

fs.writeFileSync(`${dirPath}/currentdate-time.txt`, timeStamp, (res) => {
  console.log("File Created");
});

app.use(express.static("timestamps"));

app.get("/timestamp", (request, response) => {
  response.sendFile(path.join(__dirname, "/timestamp/currentdate-time.txt"));
});

app.listen(PORT, () => console.log(`Server Started: localhost:${PORT}`));