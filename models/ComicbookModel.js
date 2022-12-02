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
  console.log(newComicbook);
};

module.exports = {
  createComicbook,
};
