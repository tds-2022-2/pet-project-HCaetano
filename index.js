const bodyParser = require("body-parser");
const express = require("express");
const ComicbookController = require("./controllers/ComicbookController");

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/comicbooks", ComicbookController);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
