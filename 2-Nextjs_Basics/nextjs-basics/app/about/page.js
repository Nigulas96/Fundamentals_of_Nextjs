'use client';
import Link from 'next/link';
import Navigation from '../components/Navigation';


export default function AboutPage() {
    return (
        <>
            <Navigation />
            <h1>About this course</h1>
            <p>This course is about Next.js</p>
            <Link href="/">Back to Home</Link>
        </>
    );
}