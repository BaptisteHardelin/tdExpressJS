const express = require("express");
const routes = express.Router();
const {
  getAllAuthors,
  getSingleAuthor,
  createAuthor,
} = require("../controllers/quoteController110");

routes.get("/", (req, res) => {
  res.json("Hello, World! 110");
});

routes.get("/authors", getAllAuthors);
routes.get("/authors/:id", getSingleAuthor);
routes.post("/authors", createAuthor);

module.exports = routes;
