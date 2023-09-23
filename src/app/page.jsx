import Dropdown from "@/components/Dropdown";
import { metal, notoSerifJP } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

const expertise = [
    {
        title: "Website Development",
        descTitle: "",
        descText:
            "Build your dream websites.\n Whether you're envisioning an e-commerce powerhouse, a slick company profile, or something uniquely you, we've got the skills to make it happen. Expect a site that's not only a feast for the eyes but also a breeze for users to navigate.\n",
    },
    {
        title: "Google Ads",
        descTitle: "Search, Youtube, Display Network",
        descText:
            "Need more leads, sales and awareness.\n Gain exposure on Google Search high-intent users then make sure they remember you on Youtube and Google Display Network.\n",
    },
    {
        title: "Instagram Ads",
        descTitle: "Instagram, Facebook, Meta",
        descText:
            "Harness the power of the biggest social media with high-buying power users to influence your product to the masses digitally.\n",
    },
    {
        title: "Marketplace Optimization",
        descTitle: "Tokopedia, Shopee",
        descText:
            "Ecommerce isn't just about setting up shop; it's about being the store everyone talks about. We'll walk you through everything, from selecting the ideal platform, sprucing up your product listings, and optimizing your store for better visibility.  Let’s maximize your ecommerce potential and achieve sustainable growth.\n",
    },
    {
        title: "SEO Management",
        descTitle: "Search Engine Optimization",
        descText:
            "Unlock the Full Potential of Google Search for Your Business.\n",
    },
];

const clients = [
    {
        brand: "Otten Coffee",
        image: "/images/Otten_Coffee.png",
        title: "Web Development, Ads Management",
        description:
            "Brewing the best in industry onto online platform with Data-driven strategy, supporting the best and biggest online coffee & tools supplier in Indonesia since 2014.",
        link: null,
    },
    {
        brand: "I Am Geprek Bensu",
        image: "/images/IAM_Geprek_Bensu.png",
        title: "Ads Management, Data & Analytics",
        description:
            "Build customer base for the growing franchise across Indonesia, Malaysia and Singapore",
        link: "/clients/iamgeprekbensu",
    },
    {
        brand: "Brewsuniq",
        image: "/images/Brewsuniq.png",
        title: "Website Development, Ads Management",
        description:
            "Successfully Positioned the Brewsuniq high-valued products into Indonesia Ecommerce Landscape since 2015 becoming the main role model in tableware industry in Indonesia.",
        link: null,
    },
    {
        brand: "Smiley",
        image: "/images/Smiley.png",
        title: "Web & App Development",
        description:
            "Customer Relationship Management to uphold brand standards from the very first step of consultation until transformation. Accumulating all the information and progress in one platform to help customer monitor and understand their transformation.",
        link: null,
    },
    {
        brand: "Norvus Mall",
        image: "/images/Norvus_Mall.png",
        title: "Ads Management, Website Development",
        description:
            "Developing a one-stop platform for Brand Awareness to Sales. Turning billions into revenue within months.",
        link: null,
    },
    {
        brand: "POSU",
        image: "/images/Posu.png",
        title: "Website Development, Ads Management",
        description:
            "Fully automate the brand's webhunt (flash sale) trend, making it possible to process hundreds of orders within seconds. While providing unique promotion strategy for brand needs.",
        link: null,
    },
    {
        brand: "Terapung",
        image: "/images/Terapung.webp",
        title: "Website Development, Ads Management",
        description:
            "Integrated Online booking system with Mindbody Wellness Booking System. Enabling swift booking for first-time traveller to Bali without the need to download app or prior registration.",
        link: null,
    },
];

export default function Home({ searchParams }) {
    const expert = searchParams.expert;
    const client = searchParams.client;

    return (
        <main className="bg-gradient-to-b from-[#1f2144] to-[#799cbc] flex flex-col gap-y-12 py-10">
            <section className="text-white flex flex-col gap-y-10">
                <h2 className={`${metal.className} px-8 text-5xl xs:text-7xl`}>
                    Digital consultants
                    <span
                        className={`${notoSerifJP.className} text-4xl xs:text-6xl inline-block`}
                    >
                        experts in
                    </span>
                </h2>
                <div className="flex flex-col gap-y-5">
                    {expertise.map((item, index) => (
                        <div key={index}>
                            <Dropdown
                                item={item}
                                expert={expert}
                                client={client}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2
                    className={`${notoSerifJP.className} text-white px-8 text-3xl xs:text-5xl xs:leading-snug`}
                >
                    that crossed path with
                    <span
                        className={`${metal.className} text-4xl xs:text-[4.25rem] leading-none inline-block mt-4`}
                    >
                        the best in the business :
                    </span>
                </h2>
                <div className="px-4 flex flex-col gap-y-4">
                    {clients.map((item, index) => (
                        <Link
                            href={
                                !expert
                                    ? `?${new URLSearchParams({
                                          client: item.brand,
                                      })}`
                                    : item.brand === client
                                    ? `?${new URLSearchParams()}`
                                    : `?${new URLSearchParams({
                                          expert,
                                          client: item.brand,
                                      })}`
                            }
                            className="bg-white pl-4 py-2 rounded-xl"
                            key={index}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium">
                                        {item.brand}
                                    </h3>
                                    <p className="text-xs">{item.title}</p>
                                </div>
                                <Image
                                    src={item.image}
                                    width={70}
                                    height={70}
                                    quality={50}
                                    loading="lazy"
                                    alt="Client Logo"
                                    className="h-20 w-20"
                                />
                            </div>
                            <p
                                className={`${
                                    item.brand !== client ? "hidden" : "block"
                                } text-xs pb-2 pr-4`}
                            >
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
