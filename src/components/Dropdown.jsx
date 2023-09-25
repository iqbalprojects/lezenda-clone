"use client";

import { montserrat } from "@/fonts";
import { useState } from "react";
import ArrowLong from "./Icons/ArrowLong";

const Dropdown = ({ expert }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${montserrat.className} border-b`}>
            <div
                onClick={() => setIsOpen((open) => !open)}
                className="flex items-center justify-between relative px-8 pb-2.5"
            >
                <h3 className="text-xl">{expert.title}</h3>
                <ArrowLong
                    className={`${
                        isOpen ? "rotate-90" : "rotate-0"
                    } absolute bg-[#1f2144] top-6 right-6`}
                />
            </div>
            <div
                className={`${
                    !isOpen ? "max-h-0 overflow-hidden" : "max-h-96"
                } transition-all duration-500`}
            >
                <div className="p-8 border-t flex flex-col gap-y-4">
                    <h4>{expert.descTitle}</h4>
                    {expert.descText.split("\n").map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
