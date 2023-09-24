import "./globals.css";
import { poppins } from "@/fonts";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const apiURL =
    process.env.API_DOMAIN + process.env.API_PATH + process.env.CUSTOM_DOMAIN;

export async function generateMetadata() {
    const { user } = await fetch(apiURL).then((response) => response.json());
    return {
        title: user.store_name,
        openGraph: {
            title: user.store_name,
            description: user.slogan,
            url: user.custom_domain,
            siteName: user.name,
            images: [
                {
                    url:
                        process.env.API_DOMAIN +
                        process.env.STORAGE_PATH +
                        user.store_logo,
                    width: 800,
                    height: 600,
                },
            ],
            locale: "id_ID",
            type: "website",
        },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={poppins.className}>
                <Header />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
