import Image from "next/image";

const apiURL =
    process.env.API_DOMAIN + process.env.API_PATH + process.env.CUSTOM_DOMAIN;

export async function getPost(slug) {
    const data = await fetch(apiURL + "posts/" + slug).then((response) =>
        response.json()
    );
    return data;
}

export async function generateMetadata({ params: { slug } }) {
    const { post } = await getPost(slug);
    return {
        metadataBase: new URL("https://lezenda.vercel.app"),
        title: post.title,
        description: post.meta_description,
        openGraph: {
            title: post.title,
            description: post.meta_description,
            url: "https://lezenda.vercel.app",
            siteName: "Lezenda",
            images: [
                {
                    url: post.image_url
                        ? process.env.API_DOMAIN +
                          process.env.STORAGE_PATH +
                          post.image_url
                        : "/images/lezenda_banner.jpeg",
                    width: 800,
                    height: 600,
                },
            ],
            locale: "id_ID",
            type: "website",
        },
    };
}

const PostDetail = async ({ params: { slug } }) => {
    const { post } = await getPost(slug);
    return (
        <div className="bg-gradient-to-b from-[#ffffd6] to-[#9dccea]">
            <div>
                <h1>{post.title}</h1>
                <p>by {post.author}</p>
                <p>
                    {new Date(post.published_at).toLocaleDateString("ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
                {post.image_url && (
                    <Image
                        src={
                            process.env.API_DOMAIN +
                            process.env.STORAGE_PATH +
                            post.image_url
                        }
                        width={500}
                        height={500}
                        quality={50}
                        loading="lazy"
                        className="h-auto w-auto"
                        alt="post detail image"
                    />
                )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
};

export default PostDetail;
