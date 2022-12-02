const bodyParser = require("body-parser");
const express = require("express");
const ComicbookController = require("./controllers/ComicbookController");

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.get("/", (request, response) => {
  console.log(request.body);
  response.send("hello");
});

app.use("/comicbooks", ComicbookController);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
