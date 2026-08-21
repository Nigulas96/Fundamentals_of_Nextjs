export default async function Profile() {
    console.log('Rendering profile on server');

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            cache: 'no-store',
        }
    );

    const user = await response.json();

    return (
        <>
            <h1>Profile</h1>

            <p>Welcome, {user.name}!</p>
        </>
    );
}