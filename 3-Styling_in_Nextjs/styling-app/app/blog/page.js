export default async function Blog() {
    const response = await fetch('https://api.vercel.app/blog');

    const posts = await response.json();

    return (
        <>
            <h1>Blog</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}