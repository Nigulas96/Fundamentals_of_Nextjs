import { NextResponse } from 'next/server';

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
];

export async function GET(req, { params }) {
    const user = users.find(user => user.id === Number(params.id));

    if (!user) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(user);
}