"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";

const Header = () => {
    const pathname = usePathname();

    if (pathname.startsWith("/dashboard")) {
        return <></>;
    }

    return (
        <header className="px-4 py-3 border-b-2 border-gray-500 flex flex-wrap justify-between items-center">
            <Link href="/" className="text-lg font-semibold">Dev Story</Link>

            <nav className="space-x-5">
                <NavLink href="/stories">Stories</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/tutorials">Tutorials</NavLink>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/register">Register</NavLink>
            </nav>
        </header>
    );
};

export default Header;