import "@/app/globals.css";
import { poppins } from "@/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Blog Posts",
    description: "Blog Posts Page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
