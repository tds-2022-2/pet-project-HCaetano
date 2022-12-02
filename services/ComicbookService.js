const ComicbookModel = require("../models/ComicbookModel");

const createComicbook = async (comicbookFromRequest) =>
  ComicbookModel.createComicbook(comicbookFromRequest);

const findAllComicbooks = async () => ComicbookModel.findAllComicbooks();

module.exports = {
  createComicbook,
  findAllComicbooks,
};
