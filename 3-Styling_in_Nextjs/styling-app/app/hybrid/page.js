export const revalidate = 10;

export default async function HybridPage() {
    const postsResponse = await fetch(
        'https://api.vercel.app/blog',
        {
            next: { revalidate: 10 },
        }
    );

    const posts = await postsResponse.json();

    const userResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            cache: 'no-store',
        }
    );

    const user = await userResponse.json();

    return (
        <>
            <h1>Hybrid Page</h1>

            <h2>Latest Posts</h2>
            <ul>
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <h2>User Dashboard</h2>
            <p>Welcome, {user.name}!</p>
        </>
    );
}
