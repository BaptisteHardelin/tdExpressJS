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

module.exports = { quotes, getQuote };
