const { Router } = require("express");
const { randomUUID } = require("crypto");
const ComicbookService = require("../services/ComicbookService");
const { CREATED, OK } = require("../dictionary/statusCodes");

const ComicbookController = new Router();

ComicbookController.get("/", (_, response) => {
  const foundComicbooks = ComicbookService.findAllComicbooks();

  response.status(OK).json(foundComicbooks);
});

ComicbookController.get("/:id", (request, response) => {
  const { id } = request.params;

  const foundComicbook = ComicbookService.findComicbookById(id);

  response.status(OK).json(foundComicbook);
});

ComicbookController.post("/", (request, response) => {
  const comicbookFromRequest = request.body;
  //   comicbookFromRequest.id = randomUUID();
  //   const comicbookWithId = Object.assign({}, comicbookFromRequest, {
  //     id: randomUUID(),
  //   });
  //   const comicbookWithId = { ...comicbookFromRequest, id: randomUUID() };
  // TODO

  const createdComicbook =
    ComicbookService.createComicbook(comicbookFromRequest);

  response.status(CREATED).json(createdComicbook);
});

ComicbookController.put("/:id", (request, response) => {
  const { id } = request.params;
  const comicbookFromRequest = { ...request.body, id };

  const updatedComicbook =
    ComicbookService.updateComicbook(comicbookFromRequest);

  response.status(OK).json(updatedComicbook);
});

module.exports = ComicbookController;
