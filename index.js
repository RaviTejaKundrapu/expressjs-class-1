const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello Dev!");
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(date);
});

app.get("/page", (request, response) => {
  response.sendFile("/page.html", { root: __dirname });
});

app.listen(3000);
