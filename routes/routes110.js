const express = require("express");
const routes = express.Router();
const { getAllAuthors } = require("../controllers/quoteController110");

routes.get("/", (req, res) => {
  res.json("Hello, World! 110");
});

routes.get("/authors", getAllAuthors);

module.exports = routes;
