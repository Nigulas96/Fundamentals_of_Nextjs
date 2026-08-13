'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello Next.js App</h1>
      <p>This application is built with Next.js</p>
      <Link href="/about">Go to About Page</Link>
    </>
  );

}