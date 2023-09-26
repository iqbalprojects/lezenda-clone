import Image from "next/image";
import Link from "next/link";

const apiURL =
    process.env.API_DOMAIN + process.env.API_PATH + process.env.CUSTOM_DOMAIN;

const Posts = async () => {
    const { posts } = await fetch(apiURL + "posts").then((response) =>
        response.json()
    );
    return (
        <div className="bg-[#1f2144] text-white flex flex-col divide-y">
            {posts.data.map((post) => (
                <figure key={post.id} className="py-8 flex flex-col gap-y-4">
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
                            alt="blog post image"
                        />
                    )}
                    <figcaption className="flex flex-col gap-y-6 px-8">
                        <p className="text-sm">{post.author}</p>
                        <h2 className="text-2xl">{post.title}</h2>
                        <Link
                            href={"posts/" + post.path}
                            className="underline underline-offset-4 font-light text-sm"
                        >
                            Read more article
                        </Link>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
};

export default Posts;
