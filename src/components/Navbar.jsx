"use client";

import Image from "next/image";
import Star from "./Icons/Star";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const Navbar = () => {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <nav>
            <div className="bg-[#1f2144]  p-8 sticky top-0 z-10">
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
                    <button
                        onClick={() => setIsShowing((isShowing) => !isShowing)}
                    >
                        <Star fill="#FFFFFF" />
                    </button>
                </div>
            </div>
            <Transition
                show={isShowing}
                enter="transform transition ease-in duration-300"
                enterFrom="-translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-out duration-300"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-full opacity-0"
                className="bg-[#9ecbea] z-10 h-screen fixed top-0 w-full"
            >
                <button
                    className="p-8 flex w-full justify-end"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                    <Star className="rotate-45" fill="#1f2144" />
                </button>
                <ul className="text-2xl flex flex-col gap-y-6">
                    <li className="border-b-[0.5px] border-b-black pb-2 px-8">
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className="border-b-[0.5px] border-b-black pb-2 px-8">
                        <Link href={"/"}>Client</Link>
                    </li>
                    <li className="border-b-[0.5px] border-b-black pb-2 px-8">
                        <Link href={"/"}>Case Study</Link>
                    </li>
                    <li className="border-b-[0.5px] border-b-black pb-2 px-8">
                        <Link href={"/"}>Blog</Link>
                    </li>
                    <li className="border-b-[0.5px] border-b-black pb-2 px-8">
                        <Link href={"/"}>Contact</Link>
                    </li>
                </ul>
            </Transition>
        </nav>
    );
};

export default Navbar;
