const ComicbookModel = require("../models/ComicbookModel");

const createComicbook = async (comicbookFromRequest) =>
  ComicbookModel.createComicbook(comicbookFromRequest);

module.exports = {
  createComicbook,
};
