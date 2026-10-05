import { getBooksByCategory } from "@/app/lib/categories";
import type { Book } from "@/app/components/Bookgrid";
import heartIcon from "@/public/heartIcon.png";
import HeroImg from "@/public/hero-sqaure.png";
import Image from "next/image";

type BookByCategoryType = {
  params: Promise<{
    categoryName: string;
  }>;
};

export default async function BookByCategory({ params }: BookByCategoryType) {
  const { categoryName } = await params
  console.log(categoryName)

  const booksByCat: Book[] = getBooksByCategory(categoryName);

  return (
    <div className="w-[90%] mx-auto mb-10 grid grid-cols-2 gap-3">
      {booksByCat.map((b, index) => (
        <div key={index} className="border rounded-2xl mb-5">
          <Image
            src={HeroImg}
            alt="beach with waves"
            width={550}
            className="rounded-t-2xl"
          />
          <div className="w-[80%] ml-5 mt-5 flex flex-col justify-evenly h-70">
            <p className="text-[1.6rem] font-semibold">{b.title}</p>
            <p className="text-[1.3rem] mt-2 hidden">{b.Author}</p>
            <p className="text-[1.3rem] mt-2 border rounded-full w-30 text-center font-light">
              {b.Genre}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Image src={heartIcon} alt="heart" width={30} />
              <p className="text-[1.3rem]">{b.Likes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
