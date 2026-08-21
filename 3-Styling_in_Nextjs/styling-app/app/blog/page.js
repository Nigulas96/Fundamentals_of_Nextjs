export const revalidate = 10;

export default async function Blog() {
    const response = await fetch(
        'https://api.vercel.app/blog',
        {
            next: { revalidate: 10 },
        }
    );

    const posts = await response.json();

    return (
        <>
            <h1>Blog</h1>

            <p>Last updated: {new Date().toLocaleString()}</p>

            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}

            </ul>
        </>
    );
}