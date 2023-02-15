let quotes = [
  { id: 5, text: "Elementary, my dear Watson ", author: "Sherlock Holmes" },
  { id: 3, text: "Big Brother is watching you", author: "Georges Orwell" },
  { id: 2, text: "I think therefore I am", author: "Rene Descartes" },
  { id: 4, text: "You talkinâ€™ to me?", author: "Travis Bickle" },
];
let x = 7;

const getQuote = (id) => {
  return quotes.filter((quote) => quote.id === +id);
};

const updateQuote = (q) => {
  const { id, text, author } = q;
  const quoteToUpdate = getQuote(id);

  quoteToUpdate.forEach((element) => {
    if (id) {
      element.id = id;
    }

    if (text) {
      element.text = text;
    }

    if (author) {
      element.author = author;
    }
    console.log("here", element);
    return element;
  });
};

const createQuote = (q) => {
  if (!q.text || !q.author || q.text === "" || q.author === "") {
    return null;
  }
  const { text, author } = q;
  const id = quotes.length + 5;

  quotes.push({ id, text, author });

  return quotes;
};

const deleteQuote = (id) => {
  quotes = quotes.filter((quote) => quote.id !== +id);
};

module.exports = { quotes, getQuote, updateQuote, createQuote, deleteQuote };
