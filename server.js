const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes100 = require("./routes/routes100");
const routes110 = require("./routes/routes110");

const app = express();
const port = process.env.PORT || 8000;

app
  .use(morgan("combined"))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

app.use("/api/1.0.0/", routes100);
app.use(routes110);

app.use((req, res) => {
  res.status(404);
  res.json({ error: "page not found" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
