import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import { metal, notoSerifJP } from "@/fonts";
import Link from "next/link";
import Marquee from "react-fast-marquee";

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
const apiURL =
    process.env.API_DOMAIN + process.env.API_PATH + process.env.CUSTOM_DOMAIN;

export default async function Home() {
    const { posts } = await fetch(apiURL + "posts").then((response) =>
        response.json()
    );
    return (
        <main>
            <section className="bg-[#1f2144] py-10">
                <div className="text-white flex flex-col gap-y-10 container mx-auto max-w-7xl">
                    <h2
                        className={`${metal.className} px-8 text-5xl xs:text-7xl tracking-wide`}
                    >
                        Digital consultants
                        <span
                            className={`${notoSerifJP.className} text-4xl mt-1 xs:text-[3.5rem] block`}
                        >
                            experts in
                        </span>
                    </h2>
                    <div className="flex flex-col gap-y-5">
                        {expertise.map((expert, index) => (
                            <div key={index}>
                                <Dropdown expert={expert} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-[#1f2144] to-[#799cbc] py-10">
                <div className="container mx-auto max-w-7xl flex flex-col gap-y-10">
                    <h2
                        className={`${notoSerifJP.className} text-white tracking-wider px-8 text-3xl xs:text-5xl xs:leading-snug`}
                    >
                        that crossed path with
                        <span
                            className={`${metal.className} text-4xl tracking-normal xs:text-[4.25rem] leading-none block mt-4`}
                        >
                            the best in the business:
                        </span>
                    </h2>
                    <div className="px-4 flex flex-col gap-y-4">
                        {clients.map((client, index) => (
                            <div key={index}>
                                <Card client={client} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-[#799cbc] to-[#c3dfe2] flex flex-col gap-y-10 py-10">
                <Marquee speed={50}>
                    <h2
                        className={`${notoSerifJP.className} text-[#1f2144] px-20 text-5xl`}
                    >
                        A peek into{" "}
                        <span
                            className={`${metal.className} underline underline-offset-8 text-7xl decoration-2`}
                        >
                            our mind
                        </span>
                    </h2>
                </Marquee>
                <div className="container mx-auto max-w-7xl flex flex-col gap-y-8">
                    {posts.data
                        .filter((post, index) => index < 3)
                        .map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col gap-y-1.5 px-8 pb-5 border-b border-b-black"
                            >
                                <h3 className="text-xl">"{post.title}"</h3>
                                <Link
                                    href={`/posts/${post.path}`}
                                    className="text-sm underline font-light"
                                >
                                    Read more our posts
                                </Link>
                            </div>
                        ))}
                </div>
            </section>
        </main>
    );
}
