import Image from "next/image";
import { useState } from "react";

const Card = ({ client }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white pl-4 py-2 rounded-xl">
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
            <p className={`${!isOpen ? "hidden" : "block"} text-xs pb-2 pr-4`}>
                {client.description}
            </p>
        </div>
    );
};

export default Card;
