const EXTERNAL_DATA_URL =
    process.env.API_DOMAIN +
    process.env.API_PATH +
    process.env.CUSTOM_DOMAIN +
    "posts";

export default async function sitemap() {
    const { posts: allPosts } = await fetch(EXTERNAL_DATA_URL).then(
        (response) => response.json()
    );

    const posts = allPosts.data.map((post) => {
        return {
            url: `${process.env.CUSTOM_DOMAIN}${post.path}`,
            lastModified: post.published_at,
        };
    });
    return [
        {
            url: `${process.env.CUSTOM_DOMAIN}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        ...posts,
    ];
}
