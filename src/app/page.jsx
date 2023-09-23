import { metal, notoSerifJP } from "@/fonts";
import Image from "next/image";

export default function Home() {
    return (
        <main className="bg-gradient-to-b from-[#1f2144] to-[#799cbc] py-20">
            <section className="px-8 text-white">
                <h2 className={`${metal.className} text-7xl`}>
                    Digital consultants
                    <span
                        className={`${notoSerifJP.className} text-6xl inline-block`}
                    >
                        experts in
                    </span>
                </h2>
            </section>
        </main>
    );
}
