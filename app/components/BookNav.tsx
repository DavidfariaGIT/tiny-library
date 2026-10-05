import Link from "next/link";

export default function BookNav() {
  return (
    <section>
      <nav className="flex items-center justify-between px-10 overflow-scroll scrollbar-none">
        <ul className="flex flex-row gap-14 mt-7 h-20">
            <Link href="books/category/fiction"><li className="text-[1.1rem]">FICTION</li></Link>
            <Link href="books/category/non-fiction"><li className="text-[1.1rem] w-30">NON-FICTION</li></Link>
            <Link href="books/category/romance"><li className="text-[1.1rem]">ROMANCE</li></Link>
            <Link href="books/category/fantasy"><li className="text-[1.1rem]">FANTASY</li></Link>
              <Link href="books/category/thriller"><li className="text-[1.1rem]">THRILLER</li></Link>
            <Link href="books/category/horror"><li className="text-[1.1rem]">HORROR</li></Link>
            <Link href="books/category/historical"><li className="text-[1.1rem]">HISTORICAL</li></Link>
            <Link href="books/category/self-help"><li className="text-[1.1rem] w-30">SELF-HELP</li></Link>
        </ul>
      </nav>
    </section>
  );
}
