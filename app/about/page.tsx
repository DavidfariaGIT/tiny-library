import Link from "next/link";
import heroImg from "@/public/hero-sqaure.png";
import book from "@/public/bookicon.png";
import globe from "@/public/globe.png";
import flag from "@/public/flag.png";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="border-blue-200 border-b pb-10">
        <Image
          className="w-[90%] block mx-auto"
          src={heroImg}
          alt="beach with waves"
          width={400}
        />
        <article className="w-[90%] block mx-auto">
          <div>
            <p className="text-[1.3rem] mt-4">About tiny island</p>
            <h1 className="text-[3.3rem] font-semibold">
              Small shelf, big impact
            </h1>
            <p className="text-[1.7rem] py-4 px-2 font-light">
              Tiny Library started as a simple idea: make it easier for curious
              readers to actually find books  they’ll love, not just scroll 
              endless lists. Every title here is chosen with care, not
              algorithms.
            </p>
          </div>
        </article>
        <div className="flex justify-center mt-5">
          <Link
            className="border-2 py-2 px-4 text-[1.4rem]"
            href="/about/contact"
          >
            Contact us
          </Link>
        </div>
      </section>
      <section className="flex flex-col justfiy-evenly gap-10 py-10 mx-auto px-2 border-blue-200 border-b pb-10">
        <div className="flex flex-col mx-auto w-[90%]">
          <div className="flex items-center gap-3">
            <Image src={book} alt="book icon" width={30} />
            <p className="text-[2rem]">Curated not crafted</p>
          </div>
          <p className="text-[1.4rem] font-light">
            Tiny Library keeps the catalogue intentionally small so every book
            feels like a recommendation.
          </p>
        </div>
        <div className="flex flex-col mx-auto w-[90%]">
          <div className="flex items-center gap-3">
            <Image src={globe} alt="book icon" width={30} />
            <p className="text-[2rem]">Easy to browse</p>
          </div>
          <p className="text-[1.4rem] font-light">
            Clear categories and simple descriptions make it quick to choose
            what you actually want to read next.
          </p>
        </div>
        <div className="flex flex-col  mx-auto w-[90%]">
          <div className="flex items-center gap-3">
            <Image src={flag} alt="book icon" width={30} />
            <p className="text-[2rem]">Readers first</p>
          </div>
          <p className="text-[1.4rem] font-light">
            Every part of Tiny Library is designed to help you spend less time
            searching and more time reading.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-evenly gap-5 py-10 px-8 mb-8">
          <div>
            <h2 className="font-semibold text-[3rem] my-5">Our Ethos</h2>
            <p className="text-[1.7rem]  font-light">
              At Tiny Library, we believe a good book shouldn’t be hard to find.
              Our ethos is to create a small, carefully curated space
              where every title earns its place on the shelf and readers 
              can trust that anything they pick up is worth their time.
            </p>
          </div>
          <div className="h-px w-[60%] mx-auto my-5 bg-black"></div>
          <div>
            <p className="text-[1.7rem] font-light">
              Instead of overwhelming you  with thousands of options,
              Tiny Library focuses on
              a modest collection that feels personal and  approachable. We want
              readers to feel like they’ve stepped into a cosy, well‑loved 
              library where someone has  already done the hard work of 
              sorting through the noise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
