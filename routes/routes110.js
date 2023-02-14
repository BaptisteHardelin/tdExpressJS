const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json("Hello, World! 110");
});

module.exports = routes;
