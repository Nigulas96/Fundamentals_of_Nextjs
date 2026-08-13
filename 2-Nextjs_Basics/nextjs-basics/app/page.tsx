'use client';
import Link from 'next/link';
import styles from './home.module.css';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <h1 className={styles.title}>Hello Next.js App</h1>
      <p>This application is built with Next.js</p>
      <Link href="/about">Go to About Page</Link>
    </>
  );

}