const { Router } = require("express");
// const { randomUUID } = require("crypto");
const ComicbookService = require("../services/ComicbookService");
const {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
  NOT_FOUND,
  OK,
} = require("../dictionary/statusCodes");
const {
  COULD_NOT_DELETE,
  COULD_NOT_FIND_COMICBOOK,
  USE_PUT_INSTEAD,
  NO_COMICBOOKS_TO_SHOW,
} = require("../dictionary/errorMessages");
const { SUCCESSFUL_DELETE } = require("../dictionary/constants");
const {
  validateFieldTypes,
  validateThatFieldsAreNotEmpty,
} = require("../middleware/validations");

const ComicbookController = new Router();

ComicbookController.delete("/:id", (request, response) => {
  const { id } = request.params;

  const deleteSuccessful = ComicbookService.deleteComicbook(id);

  if (!deleteSuccessful) {
    return response.status(INTERNAL_SERVER_ERROR).json(COULD_NOT_DELETE);
  }

  response.status(NO_CONTENT).json(SUCCESSFUL_DELETE);
});

ComicbookController.get("/", (_, response) => {
  const foundComicbooks = ComicbookService.findAllComicbooks();

  if (foundComicbooks.length === 0) {
    return response.status(NOT_FOUND).json(NO_COMICBOOKS_TO_SHOW);
  }

  response.status(OK).json(foundComicbooks);
});

ComicbookController.get("/:id", (request, response) => {
  const { id } = request.params;

  const foundComicbook = ComicbookService.findComicbookById(id);

  if (!foundComicbook) {
    return response.status(NOT_FOUND).json(COULD_NOT_FIND_COMICBOOK);
  }

  response.status(OK).json(foundComicbook);
});

ComicbookController.post(
  "/",
  validateThatFieldsAreNotEmpty,
  validateFieldTypes,
  (request, response) => {
    const comicbookFromRequest = request.body;
    //   comicbookFromRequest.id = randomUUID();
    //   const comicbookWithId = { ...comicbookFromRequest, id: randomUUID() };
    // TODO

    const createdComicbook =
      ComicbookService.createComicbook(comicbookFromRequest);

    response.status(CREATED).json(createdComicbook);
  }
);

ComicbookController.patch("/:id", (request, response) => {
  const { id } = request.params;
  const isThereMoreThanOnePropToUpdate = Object.keys(request.body).length > 1;

  if (!foundComicbook) {
    return response.status(NOT_FOUND).json(COULD_NOT_FIND_COMICBOOK);
  }

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

ComicbookController.put(
  "/:id",
  validateFieldTypes,
  validateThatFieldsAreNotEmpty,
  (request, response) => {
    const { id } = request.params;
    const foundComicbook = ComicbookService.findComicbookById(id);

    if (!foundComicbook) {
      return response.status(NOT_FOUND).json(COULD_NOT_FIND_COMICBOOK);
    }

    const comicbookFromRequest = { ...request.body, id };

    const updatedComicbook =
      ComicbookService.updateComicbookCompletely(comicbookFromRequest);

    response.status(OK).json(updatedComicbook);
  }
);

module.exports = ComicbookController;
