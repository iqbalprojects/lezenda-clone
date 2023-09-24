import { metal, notoSerifJP } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduce = () => {
    return (
        <div className="h-screen w-full relative text-white">
            <video
                poster="/images/cloud.jpeg"
                playsInline
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
            >
                <source src="/videos/cloud.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 h-screen w-full px-4 grid grid-rows-6 -space-y-10">
                <div className="mx-auto text-center row-span-2 self-center">
                    <p className={`${metal.className} text-xl mb-1.5`}>
                        introducing:
                    </p>
                    <Image
                        src={"/images/Lezenda_White.png"}
                        width={130}
                        height={130}
                        quality={50}
                        loading="lazy"
                        className="h-auto w-auto ml-4"
                        alt="Lezenda Logo"
                    />
                </div>
                <div className="text-center">
                    <h1
                        className={`${notoSerifJP.className} text-4xl xs:text-6xl mb-4`}
                    >
                        we help
                        <span
                            className={`${metal.className} text-5xl xs:text-7xl block mt-4`}
                        >
                            grow brand awareness and increase sales.
                        </span>
                    </h1>
                    <Link
                        href="#"
                        className="underline text-sm sm:text-base underline-offset-2"
                    >
                        GET TO KNOW US
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
