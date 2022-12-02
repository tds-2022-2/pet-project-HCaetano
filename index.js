const bodyParser = require("body-parser");
const express = require("express");
const ComicbookController = require("./controllers/ComicbookController");

const app = express();
app.use(bodyParser.json());

app.get("/", (request, response) => {
  console.log(request.body);
  response.send("hello");
});

app.use("/comicbooks", ComicbookController);

app.listen(3000, () => console.log(`Running on port ${3000}`));
