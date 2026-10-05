import {getBookById} from "@/app/lib/books"
import Image from "next/image"
import HeroImg from "@/public/hero-sqaure.png"
import heartIcon from "@/public/heartIcon.png"


type bookDetailsProps = {
    params: Promise<{
        id:string
    }>
}


export default async function bookDetails({ params }: bookDetailsProps) {
    const { id } = await params
    const currBook = getBookById(id)
    
    
    return(
        <section>
            <div className="border rounded-2xl w-[90%] mx-auto mb-14">
                <Image 
                    src={HeroImg}
                    alt="beach with waves"
                    width={550}
                   className="rounded-t-2xl"
                />
                <div className="w-[80%] ml-5 mt-5 flex flex-col justify-evenly h-70">
                <p className="text-[2rem] font-semibold">{currBook?.title}</p>
                <p className="text-[1.3rem] mt-2">{currBook?.Author}</p>
                <p className="text-[1.3rem] mt-2 border rounded-full w-30 text-center font-light">{currBook?.Genre}</p>
                <div className="flex items-center gap-2 mt-2">
                <Image src={heartIcon} alt="heart" width={30}/>
                <p className="text-[1.3rem]">{currBook?.Likes}</p>
                </div>
                </div>
            </div>
        </section>

    
    )
}