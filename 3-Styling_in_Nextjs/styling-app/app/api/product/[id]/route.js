import { NextResponse } from "next/server";

export async function GET(request, { params }) {

    return NextResponse.json({
        id: params.id,
        name: "Motorcycle",
        price: 5000,
        description: "Cool motorcycle",

    });

}