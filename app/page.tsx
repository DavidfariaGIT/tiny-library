import Image from "next/image"
import HeroMb from "@/public/hero-mb.png"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center w-full py-10">
        <div className="flex flex-col items-center w-full px-14">
          <h1 className="text-[4.2rem] font-bold mx-0 px-0 text-center">Find your next favourite book</h1>
          <p className="text-[1.7rem] mt-5">A cosy corner of the web where readers discover hand‑picked titles across every genre, from timeless classics to hidden indie gems.</p>
        </div>
        <button className="mt-10 border-3 px-4 py-2 text-[1.6rem] mr-auto ml-14 font-[400] cursor-pointer">BROWSE BOOKS</button>
        <Image 
          className="mr-auto mask-clip-border rounded-full"
          src={HeroMb}
          alt="beach with waves"
          width={550}
        />
      </section>
    </main>
  );
}
