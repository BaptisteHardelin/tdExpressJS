const express = require("express");
const routes = express.Router();
const { getQuote, updateQuote, createQuote } = require("../quotes/quotes100");

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

routes.patch("/quotes", (req, res) => {
  const { id, text, author } = req.body;

  if (id || text || author) {
    res.json(updateQuote({ id, text, author })).status(201);
  }

  res.status(204);
});

routes.post("/", (req, res) => {
  if (!req.body.text || !req.body.author) {
    res.status(204);
  }

  const { text, author } = req.body;
  res.json({ quote: createQuote({ text, author }) }).status(201);
});

module.exports = routes;
