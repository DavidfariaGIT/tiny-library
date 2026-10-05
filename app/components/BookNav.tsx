"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookNav() {
  const pathname = usePathname()

  return (
    <section>
      <nav className="flex items-center justify-between px-10 overflow-scroll scrollbar-none">
        <ul className="flex flex-row gap-14 mt-7 h-20">
            <Link href="/books/categories/fiction"><li className={`${pathname === "/books/categories/fiction" ? "text-orange-500" : ""} text-[1.1rem]`}>FICTION</li></Link>
            <Link href="/books/categories/non-fiction"><li className={ `${pathname === "/books/categories/non-fiction" ? "text-orange-500" : ""} text-[1.1rem] w-30`}>NON-FICTION</li></Link>
            <Link href="/books/categories/romance"><li className={ `${pathname === "/books/categories/romance" ? "text-orange-500" : ""} text-[1.1rem]`}>ROMANCE</li></Link>
            <Link href="/books/categories/fantasy"><li className={ `${pathname === "/books/categories/fantasy" ? "text-orange-500" : ""} text-[1.1rem]`}>FANTASY</li></Link>
            <Link href="/books/categories/thriller"><li className={`${pathname === "/books/categories/thriller" ? "text-orange-500" : ""} text-[1.1rem]`}>THRILLER</li></Link>
            <Link href="/books/categories/horror"><li className={`${pathname === "/books/categories/horror" ? "text-orange-500" : ""} text-[1.1rem]`}>HORROR</li></Link>
            <Link href="/books/categories/historical"><li className={`${pathname === "/books/categories/historical" ? "text-orange-500" : ""} text-[1.1rem]`}>HISTORICAL</li></Link>
            <Link href="/books/categories/self-help"><li className={ `${pathname === "/books/categories/self-help" ? "text-orange-500" : ""} text-[1.1rem] w-30`}>SELF-HELP</li></Link>
        </ul>
      </nav>
    </section>
  );
}
