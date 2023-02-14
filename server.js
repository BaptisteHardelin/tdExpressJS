const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8000;

app
  .use(morgan("combined"))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extends: true }))
  .use(routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
