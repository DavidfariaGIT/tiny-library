import books from "@/app/data/books.json"

export function getBooksByCategory(category: string) {
    let categoryName = category
    categoryName = "Fiction"

    const bookByCat = books.filter(b => b.Genre.includes(categoryName))
    
    return bookByCat
}