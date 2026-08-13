'use client';
import Link from 'next/link';


export default function AboutPage() {
    return (
        <>
            <h1>About this course</h1>
            <p>This course is about Next.js</p>
            <Link href="/">Back to Home</Link>
        </>
    );
}