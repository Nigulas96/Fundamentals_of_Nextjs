'use client';
import Link from 'next/link';


export default function BlogPostPage() {
    return (
        <>
            <h1>This is blog post page.</h1>
            <p>Blog text here.</p>
            <Link href="/">Back to Home</Link>
        </>
    );
}