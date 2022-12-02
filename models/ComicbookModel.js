const comicbookList = [];

// const comicbook = {
//     id: string,
//     name: string,
//     issue: number,
//     year: string,
// }

const createComicbook = async (comicbookFromRequest) => {
  const { id, name, issue, year } = comicbookFromRequest;

  const newComicbook = { id, name, issue, year };
  comicbookList.push(newComicbook);

  return newComicbook;
};

const findAllComicbooks = async () => {
  return comicbookList;
};

module.exports = {
  createComicbook,
  findAllComicbooks,
};
