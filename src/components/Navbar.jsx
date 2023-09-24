import Image from "next/image";
import React from "react";
import Star from "./Icons/Star";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-[#1f2144]  p-8 sticky top-0 z-10">
            <div className="container mx-auto flex items-center justify-between max-w-7xl">
                <Link href={"/"}>
                    <Image
                        src={"/images/Lezenda_White.png"}
                        width={120}
                        height={120}
                        quality={50}
                        loading="lazy"
                        className="h-auto w-auto"
                        alt="Lezenda Logo"
                    />
                </Link>
                <Star />
            </div>
        </nav>
    );
};

export default Navbar;
