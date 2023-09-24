import { metal, notoSerifJP } from "@/fonts";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="px-4 pb-8 bg-gradient-to-b from-[#c3dfe2] to-[#feffd5] ">
            <h2 className={`${notoSerifJP.className} text-5xl px-4`}>
                Want to{" "}
                <span className={`${metal.className} block text-7xl`}>
                    reach out?
                </span>
            </h2>
            <div className="flex flex-col gap-y-5 my-8">
                <Link href={"mailto:ping@lezenda.com"} target="_blank">
                    <div className="bg-white py-6 pl-4 rounded-xl">
                        <h3 className="text-3xl font-light tracking-wider underline underline-offset-8 decoration-[1.5px]">
                            ping@lezenda.com
                        </h3>
                        <p className="font-light mt-2">
                            Click to send an email
                        </p>
                    </div>
                </Link>
                <Link href={"https://wa.me/6285156700100"} target="_blank">
                    <div className="bg-white py-6 pl-4 rounded-xl">
                        <h3 className="text-3xl font-light underline underline-offset-8 decoration-[1.5px]">
                            +628 5156 700 100
                        </h3>
                        <p className="font-light mt-2">
                            Click to send a message
                        </p>
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-x-4 mb-4 px-4">
                <Link href={"mailto:hr@lezenda.com"} target="_blank">
                    Join the team
                </Link>
                <Link href={"https://instagram.com/lezendacom"} target="_blank">
                    Discover Our Story
                </Link>
                <Link href={"#"}>Privacy + terms</Link>
            </div>
            <p class="text-xs font-light tracking-wide px-4">@2023 Lezenda</p>
        </footer>
    );
};

export default Footer;
