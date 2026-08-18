import { NextResponse } from 'next/server';

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req) {
    const body = await req.json();

    if (!body.name) {
        return NextResponse.json(
            { error: 'Name is required' },
            { status: 400 }
        );
    }

    const newUser = {
        id: users.length + 1,
        name: body.name,
    };

    users.push(newUser);

    return NextResponse.json(newUser, { status: 201 });
}