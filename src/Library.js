function createLibrary(libraryName) {
var library = {
  name: libraryName,
  shelves: {
    fantasy:[],
    fiction:[],
    nonFiction:[]
  }

}
return library
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(shelf, title, genre) {
  var shelveLength = shelf.shelves[genre].length

  shelf.shelves[genre] = shelf.shelves[genre].filter((function (book) {
     return book.title !== title
}))

}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
