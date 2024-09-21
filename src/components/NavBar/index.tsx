'use client';

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-4 p-4 rounded bg-gray-500 text-white">
            <Link className={pathname === "/" ? "font-bold" : ""} href="/" >Home</Link>
            <Link className={pathname === "/about" ? "font-bold" : ""} href="/about">About</Link>
            <Link className={pathname === "/dishes" ? "font-bold" : ""} href="/dishes">Dishes</Link>
            <Link className={pathname === "/contact" ? "font-bold" : ""} href="/contact">Contact</Link>
        </nav>
    )
}
export default NavBar;