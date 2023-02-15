require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(process.env.DB, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Connected to the database");
});
db.exec("PRAGMA foreign_keys = ON");

const getAllAuthors = (req, res) => {
  db.all("select * from author", (err, rows) => {
    if (err) {
      return res.status(404).json(err);
    }

    res.json({ authors: rows }).status(200);
  });
};

module.exports = {
  getAllAuthors,
};
