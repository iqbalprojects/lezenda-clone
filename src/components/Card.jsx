"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card = ({ client }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen((open) => !open)}
            className="bg-white pl-4 py-2 rounded-xl"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-medium">{client.brand}</h3>
                    <p className="text-xs">{client.title}</p>
                </div>
                <Image
                    src={client.image}
                    width={70}
                    height={70}
                    quality={50}
                    loading="lazy"
                    alt="Client Logo"
                    className="h-20 w-20"
                />
            </div>
            <div
                className={`${
                    !isOpen ? "hidden" : "block"
                } text-xs flex flex-col gap-y-2 pb-2 pr-4`}
            >
                <p>{client.description}</p>
                {client.link && (
                    <Link href={client.link} className="underline">
                        Read more
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Card;
