const {
  getQuote,
  updateQuote,
  createQuote,
  deleteQuote,
} = require("../quotes/quotes100");

const getQuoteById = (req, res) => {
  const id = req.params.id;

  if (getQuote(id).length === 0) {
    res.status(204).json(null);
    return;
  }

  res.json({ quote: getQuote(id) }).status(200);
};

const updateQuoteByQuote = (req, res) => {
  const { id, text, author } = req.body;

  if (id || text || author) {
    res.json(updateQuote({ id, text, author })).status(201);
  }

  res.status(204);
};

const createANewQuote = (req, res) => {
  if (!req.body.text || !req.body.author) {
    res.status(204);
  }

  const { text, author } = req.body;
  res.json({ quote: createQuote({ text, author }) }).status(201);
};

const deleteAquote = (req, res) => {
  if (!req.id) {
    res.status(204);
  }

  const id = req.params.id;

  res.json({ quote: deleteQuote(id) }).status(200);
};

module.exports = {
  getQuoteById,
  updateQuoteByQuote,
  createANewQuote,
  deleteAquote,
};
