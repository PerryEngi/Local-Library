function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      return authors[i];
    }
  }
  return null;
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
  return null;
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = [];
  const returnedBooks = [];

  for (let i = 0; i < books.length; i++) {
    const borrowStatus = books[i].borrows[0].returned;
    
    if (borrowStatus === false) {
      checkedOutBooks.push(books[i]);
    } else {
      returnedBooks.push(books[i]);
    }
  }

  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = [];

  for (const borrow of book.borrows) {
    const account = accounts.find(account => account.id === borrow.id);
    const borrower = { ...account, returned: borrow.returned };
    borrowers.push(borrower);
  }

  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
