function findAccountById(accounts, id) {
  return accounts.find(account => {
    return id === account.id
  })
}

function sortAccountsByLastName(accounts) {
   return accounts.sort((a,b) =>{
    const name1 = a.name.last.toUpperCase()
    const name2 = b.name.last.toUpperCase()

    if(name1 > name2) {
      return 1
    }
    else if (name1 < name2) {
    return -1
  }
    return 0 
  })
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id
  return books.reduce((a, b) => {
       const found = b.borrows.find(i => i.id === id)
       if (found) a++
    return a
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const id = account.id
  return books.reduce((a, b) => {
    const found = b.borrows.find(i => i.id === id && i.returned === false)
    if (found) {
      b.author = authors.find(l => l.id === b.authorId) 
      a.push(b)
    }
  return a
}, [])
   
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
