import BookGrid from "../components/Bookgrid";
import { getBooks } from "../lib/books";

export type Book = {
    title: string,
    Author: string, 
    Genre: string,
    Likes: number, 
    id: number
}

type SearchParamsProps = {
  searchParams: {
    query?: string
  }
}
  

export default async function books({ searchParams }: SearchParamsProps) {
  const query = (await searchParams)?.query?.toLowerCase() || ""
  const books = getBooks()

  const filteredModels:Book[] = query ? books.filter(b => b.title.includes(query.toLowerCase()) || 
  b.Genre.includes(query.toLowerCase())) : books

  return (
    <section>
      <form className="block mx-auto w-[90%]">
          <input 
            type="text" 
            name="query" 
            id="query" 
            placeholder="Search for a book"
            className="px-3 py-4 border rounded-3xl w-full mb-12 text-[1.2rem]"
            />
      </form>
      <BookGrid books={filteredModels} />
    </section>
  );
}
