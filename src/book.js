function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character;
};

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
};

function calculatePageCount(bookTitle, bookPageCount) {
  var bookPageCount = bookTitle.length*20;
  return bookPageCount;
}

function writeBook(bookTitle, bookCharacter, genre) {
var book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre,
}
return book;
};

function editBook(book) {
book.pageCount = book.pageCount*.75;
return book.pageCount;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}
