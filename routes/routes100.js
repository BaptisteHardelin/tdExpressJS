const express = require("express");
const routes = express.Router();
const { getQuote } = require("../quotes/quotes100");

routes.get("/", (req, res) => {
  res.json("Hello, World! v 100");
});

routes.get("/:id", (req, res) => {
  const id = req.params.id;

  if (getQuote(id).length === 0) {
    res.status(204).json(null);
    return;
  }

  res.json({ quote: getQuote(id) }).status(200);
});

module.exports = routes;
