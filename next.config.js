/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "app.lezenda.com",
                port: "",
                pathname: "/storage/**",
            },
        ],
    },
};

module.exports = nextConfig;
