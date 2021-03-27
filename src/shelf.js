function shelfBook(bookTitle, shelf) {
  if (shelf.length < 3) {
return shelf.unshift(bookTitle);
}
};

function unshelfBook(title, shelf) {
  for(var i = 0; i < shelf.length; i++) {
    if(title === shelf[i].title) {
            var titleIndex = shelf.indexOf(shelf[i])
     shelf.splice(titleIndex, 1)
   }
  }
}

function listTitles(shelf) {
  var titles = [];
  for(var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
    return titles.join(", ");
}

 function searchShelf(shelf, isTrue) {
   var titles = [];
   for(var i = 0; i < shelf.length; i++) {
   titles.push(shelf[i].title);
  }
  return titles.includes(isTrue);
 }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
