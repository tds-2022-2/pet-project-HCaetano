const ComicbookModel = require("../models/ComicbookModel");

const createComicbook = (comicbookFromRequest) =>
  ComicbookModel.createComicbook(comicbookFromRequest);

const deleteComicbook = (idFromRequest) =>
  ComicbookModel.deleteComicbook(idFromRequest);

const findAllComicbooks = () => ComicbookModel.findAllComicbooks();

const findComicbookById = (idFromRequest) =>
  ComicbookModel.findComicbookById(idFromRequest);

const updateComicbookCompletely = (comicbookFromRequest) =>
  ComicbookModel.updateComicbookCompletely(comicbookFromRequest);

const updateComicbookPartially = (id, propToUpdate) =>
  ComicbookModel.updateComicbookPartially(id, propToUpdate);

module.exports = {
  createComicbook,
  deleteComicbook,
  findAllComicbooks,
  findComicbookById,
  updateComicbookCompletely,
  updateComicbookPartially,
};
