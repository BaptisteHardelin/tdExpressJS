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
      return res.status(500).json(err);
    }

    res.json({ authors: rows }).status(200);
  });
};

const getSingleAuthor = (req, res) => {
  const id = req.params.id;
  db.get("select * from author where auth_id=$id", { $id: id }, (err, row) => {
    if (err != null) {
      res.sendStatus(204);
    }
    res.json({ author: row }).status(200);
  });
};

const createAuthor = (req, res) => {
  const { firstname, lastname } = req.body;
  db.run(
    "INSERT INTO author (auth_firstname, auth_lastname) VALUES ($firstname, $lastname)",
    { $firstname: firstname, $lastname: lastname },
    (err) => {
      if (err) {
        res.sendStatus(500);
        return console.log("createAuthor", err);
      }
    }
  );
  return res.sendStatus(201);
};

const deleteAuthor = (req, res) => {
  const id = req.params.id;
  db.run("delete from author where auth_id=$id", { $id: id }, (err) => {
    if (err) {
      console.log("here");
      res.sendStatus(204);
      return console.log("deleteAuthor", err);
    }
  });

  return res.sendStatus(200);
};

const updateAuhtor = (req, res) => {
  const id = req.params.id;
  const { firstname, lastname } = req.body;

  db.run(
    "update author set auth_firstname=$firstname, auth_lastname=$lastname where auth_id=$id",
    { $firstname: firstname, $lastname: lastname, $id: id },
    (err) => {
      if (err) {
        console.log("here");
        res.sendStatus(204);
        return console.log("deleteAuthor", err);
      }
    }
  );

  return res.sendStatus(200);
};

module.exports = {
  getAllAuthors,
  getSingleAuthor,
  createAuthor,
  deleteAuthor,
  updateAuhtor,
};
