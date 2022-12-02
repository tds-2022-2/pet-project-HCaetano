const { Router } = require("express");
const ComicbookService = require("../services/ComicbookService");
const { CREATED, OK } = require("../dictionary/statusCodes");

const ComicbookController = new Router();

ComicbookController.get("/", async (_, response) => {
  const foundComicbooks = await ComicbookService.findAllComicbooks();

  response.status(OK).json(foundComicbooks);
});

ComicbookController.post("/", async (request, response) => {
  const comicbookFromRequest = request.body;

  const createdComicbook = await ComicbookService.createComicbook(
    comicbookFromRequest
  );

  response.status(CREATED).json(createdComicbook);
});

module.exports = ComicbookController;
