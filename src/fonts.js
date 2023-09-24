import { Poppins, Metal, Noto_Serif_JP, Montserrat } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

export const metal = Metal({
    subsets: ["latin"],
    weight: ["400"],
});

export const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["400"],
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400"],
});
