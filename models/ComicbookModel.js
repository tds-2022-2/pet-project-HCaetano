const comicbookList = [];

// const comicbook = {
//     id: string,
//     name: string,
//     issue: number,
//     year: string,
// }

const createComicbook = (comicbookFromRequest) => {
  const { id, name, issue, year } = comicbookFromRequest;

  const newComicbook = { id, name, issue, year };
  comicbookList.push(newComicbook);

  return newComicbook;
};

const findAllComicbooks = () => {
  return comicbookList;
};

const findComicbookById = (idFromRequest) => {
  const comicbook = comicbookList.find(
    (comicbook) => comicbook.id === idFromRequest
  );

  return comicbook;
};

const updateComicbook = (comicbook) => {
  const { id, name, issue, year } = comicbook;
  const comicbookToBeUpdatedIndex = comicbookList.findIndex(
    (comicbook) => comicbook.id === id
  );

  const updatedComicbook = { id, name, issue, year };
  comicbookList.splice(comicbookToBeUpdatedIndex, 1, updatedComicbook);

  return updatedComicbook;
};

module.exports = {
  createComicbook,
  findAllComicbooks,
  findComicbookById,
  updateComicbook,
};
