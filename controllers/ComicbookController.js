const { Router } = require("express");
const ComicbookService = require("../services/ComicbookService");
const { CREATED } = require("../dictionary/statusCodes");

const ComicbookController = new Router();

ComicbookController.post("/", async (request, response) => {
  const comicbookFromRequest = request.body;

  const createdComicbook = await ComicbookService.createComicbook(
    comicbookFromRequest
  );

  response.status(CREATED).json(createdComicbook);
});

module.exports = ComicbookController;
