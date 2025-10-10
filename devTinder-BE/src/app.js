const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.send("Hi Server from main path");
});

app.use("/hello", (req, res) => {
  res.send("Hello from hello path");
});

app.use("/test", (req, res) => {
  res.send("test from the test path");
});

app.listen(port, () => {
  console.log(`Server is successfully listening on port ${port}...`);
});
