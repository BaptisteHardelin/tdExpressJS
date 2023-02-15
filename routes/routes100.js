const express = require("express");
const routes = express.Router();
const {
  getQuoteById,
  updateQuoteByQuote,
  createANewQuote,
  deleteAquote,
} = require("../controllers/quoteController100");

routes.get("/", (req, res) => {
  res.json("Hello, World! v 100");
});

routes.get("/:id", getQuoteById);

routes.patch("/quotes", updateQuoteByQuote);

routes.post("/", createANewQuote);

routes.delete("/:id", deleteAquote);

module.exports = routes;
