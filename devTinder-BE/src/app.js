const express = require("express");
const app = express();
const port = 3000;

// this will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstname: "Vaibhav", lastname: "Mendpara" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully saved to DB");
});

app.delete("/user", (req, res) => {
  res.send("Data successfully Deleted");
});

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("test from the test path");
});

app.listen(port, () => {
  console.log(`Server is successfully listening on port ${port}...`);
});
