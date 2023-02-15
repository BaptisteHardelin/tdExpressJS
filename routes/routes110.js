const express = require("express");
const routes = express.Router();
const {
  getAllAuthors,
  getSingleAuthor,
  createAuthor,
  deleteAuthor,
  updateAuhtor,
} = require("../controllers/quoteController110");

routes.get("/", (req, res) => {
  res.json("Hello, World! 110");
});

routes.get("/authors", getAllAuthors);
routes.get("/authors/:id", getSingleAuthor);
routes.post("/authors", createAuthor);
routes.delete("/authors/:id", deleteAuthor);
routes.patch("/authors/:id", updateAuhtor);

module.exports = routes;
