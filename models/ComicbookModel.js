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

const deleteComicbook = (idFromRequest) => {
  const comicbookToBeUpdatedIndex = comicbookList.findIndex(
    (comicbook) => comicbook.id === idFromRequest
  );
  const originalSize = comicbookList.length;

  comicbookList.splice(comicbookToBeUpdatedIndex, 1);
  const currentSize = comicbookList.length;

  if (currentSize >= originalSize) {
    return false;
  }

  return true;
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

const updateComicbookCompletely = (comicbook) => {
  const { id, name, issue, year } = comicbook;
  const comicbookToBeUpdatedIndex = comicbookList.findIndex(
    (comicbook) => comicbook.id === id
  );

  const updatedComicbook = { id, name, issue, year };
  comicbookList.splice(comicbookToBeUpdatedIndex, 1, updatedComicbook);

  return updatedComicbook;
};

const updateComicbookPartially = (id, propToUpdate) => {
  const comicbookToBeUpdatedIndex = comicbookList.findIndex(
    (comicbook) => comicbook.id === id
  );
  const comicbookToBeUpdated = comicbookList.find(
    (comicbook) => comicbook.id === id
  );
  const propName = Object.keys(propToUpdate)[0];
  const propValue = Object.values(propToUpdate)[0];
  const updatedComicbook = { ...comicbookToBeUpdated };
  updatedComicbook[propName] = propValue;

  comicbookList.splice(comicbookToBeUpdatedIndex, 1, updatedComicbook);

  return updatedComicbook;
};

module.exports = {
  createComicbook,
  deleteComicbook,
  findAllComicbooks,
  findComicbookById,
  updateComicbookCompletely,
  updateComicbookPartially,
};
