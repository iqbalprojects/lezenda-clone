import { montserrat } from "@/fonts";
import React from "react";
import ArrowLong from "./Icons/ArrowLong";
import Link from "next/link";

const Dropdown = ({ item, expert, client }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Link
                href={
                    !client
                        ? `?${new URLSearchParams({
                              expert: item.title,
                          })}`
                        : item.title === expert
                        ? `?${new URLSearchParams({
                              client,
                          })}`
                        : `?${new URLSearchParams({
                              expert: item.title,
                              client,
                          })}`
                }
                className="flex items-center justify-between relative px-8 border-b pb-2.5"
            >
                <h3 className="text-xl">{item.title}</h3>
                <ArrowLong
                    className={`${
                        item.title === expert ? "rotate-90" : "rotate-0"
                    } absolute bg-[#1f2144] top-6 right-6`}
                />
            </Link>
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
