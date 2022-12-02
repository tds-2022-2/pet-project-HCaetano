const { Router } = require("express");
const { randomUUID } = require("crypto");
const ComicbookService = require("../services/ComicbookService");
const { BAD_REQUEST, CREATED, OK } = require("../dictionary/statusCodes");
const { USE_PUT_INSTEAD } = require("../dictionary/errorMessages");

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

ComicbookController.patch("/:id", (request, response) => {
  const { id } = request.params;
  const isThereMoreThanOnePropToUpdate = Object.keys(request.body).length > 1;

  if (isThereMoreThanOnePropToUpdate) {
    return response.status(BAD_REQUEST).json({ message: USE_PUT_INSTEAD });
  }

  const propToUpdate = request.body;

  const updatedComicbook = ComicbookService.updateComicbookPartially(
    id,
    propToUpdate
  );

  response.status(OK).json(updatedComicbook);
});

ComicbookController.put("/:id", (request, response) => {
  const { id } = request.params;
  const comicbookFromRequest = { ...request.body, id };

  const updatedComicbook =
    ComicbookService.updateComicbookCompletely(comicbookFromRequest);

  response.status(OK).json(updatedComicbook);
});

module.exports = ComicbookController;
