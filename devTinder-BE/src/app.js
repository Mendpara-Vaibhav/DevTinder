const express = require("express");
const app = express();
const port = 3000;

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User Data send");
});

app.get("/admin/getALLData", (req, res) => {
  res.send("All Data send");
});
app.get("/admin/deleteData", (req, res) => {
  res.send("All Data Deleted");
});

app.listen(port, () => {
  console.log(`Server is successfully listening on port ${port}...`);
});
