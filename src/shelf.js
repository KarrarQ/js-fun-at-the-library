function shelfBook(book, shelf) {

  if (shelf.length < 3)
  {
    shelf.unshift(book);
  }
}

function unshelfBook(books, theShelf) {

  for (var i = 0; i<theShelf.length; i++)
{
    if (theShelf[i].title === books)
{ theShelf.splice(i,1);
  }
}
return theShelf;
}

function listTitles(shelf) {

  var listOfTitles = []
  for (var i=0; i<shelf.length; i++) {

  listOfTitles.push(shelf[i].title)
}
result = `${listOfTitles[0]}, ${listOfTitles[1]}, ${listOfTitles[2]}`

  return result;
}

function searchShelf(shelf, book)
{
  for (var i = 0; i < shelf.length; i++)

{

      if (shelf[i].title === book) {
        return true }
}
      return false
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
