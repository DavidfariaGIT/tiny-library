"use client"

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header>
      <nav className="flex items-center justify-between px-10">
        <Link href="/">
          <Image src={logo} alt="book-logo" width={100} />
        </Link>
        <ul className="flex flex-row gap-12">
          <li>
            <Link className={`${pathname === "/books" ? "text-orange-500" : ""} text-[1.1rem]`} href="/books">
              BOOKS
            </Link>
          </li>
          <li>
            <Link className={`${pathname === "/about" ? "text-orange-500" : ""} text-[1.1rem]`} href="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
