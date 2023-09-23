import { metal, notoSerifJP } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Introduce = () => {
    return (
        <div className="h-screen relative text-white">
            <video
                poster="/images/cloud.jpeg"
                playsInline
                autoPlay
                loop
                muted
                className="h-full object-cover"
            >
                <source src="/videos/cloud.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 h-screen px-4 grid grid-rows-6 -space-y-10">
                <div className="mx-auto text-center row-span-2 self-center">
                    <p className={`${metal.className} text-xl mb-1`}>
                        introducing:
                    </p>
                    <Image
                        src={"/images/Lezenda_White.png"}
                        width={170}
                        height={170}
                        quality={50}
                        loading="lazy"
                        className="h-auto w-auto"
                        alt="Lezenda Logo"
                    />
                </div>
                <div className="text-center">
                    <h1
                        className={`${notoSerifJP.className} text-6xl leading-relaxed mb-4`}
                    >
                        we help
                        <span
                            className={`${metal.className} text-7xl inline-block leading-none`}
                        >
                            grow brand awareness and increase sales.
                        </span>
                    </h1>
                    <Link href="#" className="underline underline-offset-2">
                        GET TO KNOW US
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
