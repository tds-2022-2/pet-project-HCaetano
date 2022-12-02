const {
  FIELDS_MUST_BE_FILLED,
  ID_MUST_BE_STRING,
  ISSUE_MUST_BE_NUMBER,
  NAME_MUST_BE_STRING,
  YEAR_MUST_BE_STRING,
} = require("../dictionary/errorMessages");
const { BAD_REQUEST } = require("../dictionary/statusCodes");

const validateFieldTypes = (request, response, next) => {
  const { id, name, issue, year } = request.body;

  if (typeof id !== "string") {
    return response.status(BAD_REQUEST).json({ message: ID_MUST_BE_STRING });
  }

  if (typeof name !== "string") {
    return response.status(BAD_REQUEST).json({ message: NAME_MUST_BE_STRING });
  }

  if (typeof issue !== "number") {
    return response.status(BAD_REQUEST).json({ message: ISSUE_MUST_BE_NUMBER });
  }

  if (typeof year !== "string") {
    return response.status(BAD_REQUEST).json({ message: YEAR_MUST_BE_STRING });
  }

  next();
};

const validateThatFieldsAreNotEmpty = (request, response, next) => {
  const comicbook = request.body;
  const areFieldsMissing =
    !comicbook.name || !comicbook.issue || !comicbook.year;

  if (areFieldsMissing) {
    return response
      .status(BAD_REQUEST)
      .json({ message: FIELDS_MUST_BE_FILLED });
  }

  next();
};

module.exports = {
  validateFieldTypes,
  validateThatFieldsAreNotEmpty,
};
