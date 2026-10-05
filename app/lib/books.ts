import books from "@/app/data/books.json"

export function getBooks() {
  const booksCollection = books
  return booksCollection
}

export function getBookById(id:string) {
  const ParamId = id 
  /* if this project had real data i wouldnt hard code fiction here but match the genre to the path*/
  
  const matchingBook = books.find(b => b.id === 1)
  return matchingBook
}