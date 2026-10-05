import { getBooks } from "../lib/books"
import Image from "next/image"
import HeroImg from "@/public/hero-sqaure.png"
import heartIcon from "@/public/heartIcon.png"

export default function BookGrid() {
    const allBooks = getBooks()
    
    return (
        <main>
        <div className="flex flex-col items-center gap-10 w-[90%] mx-auto">
        {allBooks.map(b => 
            <div className="border rounded-2xl">
                <Image 
                    src={HeroImg}
                    alt="beach with waves"
                    width={550}
                   className="rounded-t-2xl"
                />
                <div className="w-[80%] ml-5 mt-5 flex flex-col justify-evenly h-70">
                <p className="text-[2rem] font-semibold">{b.title}</p>
                <p className="text-[1.3rem] mt-2">{b.Author}</p>
                <p className="text-[1.3rem] mt-2 border rounded-full w-30 text-center font-light">{b.Genre}</p>
                <div className="flex items-center gap-2 mt-2">
                <Image src={heartIcon} alt="heart" width={30}/>
                <p className="text-[1.3rem]">{b.Likes}</p>
                </div>
                </div>
            </div>
        )}
        </div>
        </main>
    )
}