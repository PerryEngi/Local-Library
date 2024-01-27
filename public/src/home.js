function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;

  for (let i = 0; i < books.length; i++) {
    if (!books[i].borrows[0].returned) {
      borrowedBooks++;
    }
  }

  return borrowedBooks;
}

function getMostCommonGenres(books) {
 const counts = books.reduce((a, b) => {
    const { genre } = b
    if (!a[genre]) {
      a[genre] = {name: genre, count: 0}
    } 
    a[genre].count++
    return a 
  }, {})  


const sortedGenres = Object.values(counts)
.sort((a, b) => b.count - a.count)

return sortedGenres.slice(0,5)
}

function getMostPopularBooks(books) {
  const bookCounts = books.map(book => ({ name: book.title, count: book.borrows.length }));
  const sortedBooks = bookCounts.sort((a, b) => b.count - a.count);
  return sortedBooks.slice(0, 5);
}    

function getMostPopularAuthors(books, authors) {
  const authorCounts = authors.map(author => {
    const authorBooks = books.filter(book => book.authorId === author.id);
    const borrowCount = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return { name: `${author.name.first} ${author.name.last}`, count: borrowCount };
  });

  const sortedAuthors = authorCounts.sort((a, b) => b.count - a.count);

  return sortedAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
