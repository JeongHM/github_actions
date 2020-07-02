const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  return res.send("Hello github actions 9");
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

module.exports = app;
