"use client";

import { montserrat } from "@/fonts";
import React, { useState } from "react";
import ArrowLong from "./Icons/ArrowLong";
import { useRouter } from "next/navigation";

const Dropdown = ({ item, expert, client }) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div className={`${montserrat.className}`}>
            <div
                onClick={() => (
                    setIsOpen((open) => !open),
                    router.push(
                        !client && item.title === expert
                            ? `?${new URLSearchParams()}`
                            : client && item.title === expert
                            ? `?${new URLSearchParams({
                                  client,
                              })}`
                            : client && item.title !== expert
                            ? `?${new URLSearchParams({
                                  client,
                                  expert: item.title,
                              })}`
                            : `?${new URLSearchParams({
                                  expert: item.title,
                              })}`
                    )
                )}
                className="flex items-center justify-between relative px-8 border-b pb-2.5"
            >
                <h3 className="text-xl">{item.title}</h3>
                <ArrowLong
                    className={`${
                        item.title === expert ? "rotate-90" : "rotate-0"
                    } absolute bg-[#1f2144] top-6 right-6`}
                />
            </div>
            <div
                className={`${
                    item.title !== expert
                        ? "max-h-0 overflow-hidden"
                        : "max-h-96"
                } transition-all duration-500`}
            >
                <div className="p-8 border-b">
                    <h4>{item.descTitle}</h4>
                    <p>{item.descText}</p>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
