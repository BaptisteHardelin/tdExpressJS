const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.json("Hello, World! v 100");
});

module.exports = routes;
