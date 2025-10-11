const express = require("express");
const app = express();
const port = 3000;

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("jsabvdvaeu");
    res.send("User Data send");
  } catch {
    res.status(500).send("Error occur contact support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Server is successfully listening on port ${port}...`);
});
