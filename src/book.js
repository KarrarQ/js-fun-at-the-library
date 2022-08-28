function createTitle(title) {

  return `The ${title}`;
}

function buildMainCharacter(charName, charAge, charPronouns){

  var charFacts = {
name: charName,
age: charAge,
pronouns: charPronouns
}
  return charFacts;

}

function saveReview(newReview, reviews) {

for (var i = 0; i < reviews.length; i++) {
  if(newReview === reviews[i]){
    return reviews
  }
}
reviews.push(newReview);
}

function calculatePageCount(bookTitle) {

return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {

return {

title: bookTitle,
mainCharacter: bookCharacter,
pageCount:calculatePageCount(bookTitle),
genre: genre
}
}

function editBook(book) {

  book.pageCount = book.pageCount * .75
}






module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
