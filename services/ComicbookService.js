const ComicbookModel = require("../models/ComicbookModel");

const createComicbook = (comicbookFromRequest) =>
  ComicbookModel.createComicbook(comicbookFromRequest);

const findAllComicbooks = () => ComicbookModel.findAllComicbooks();

const findComicbookById = (idFromRequest) =>
  ComicbookModel.findComicbookById(idFromRequest);

const updateComicbook = (comicbookFromRequest) =>
  ComicbookModel.updateComicbook(comicbookFromRequest);

module.exports = {
  createComicbook,
  findAllComicbooks,
  findComicbookById,
  updateComicbook,
};
