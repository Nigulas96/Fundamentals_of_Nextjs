'use client';

import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme === 'dark' ? '#222' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}
        >
            <h1>Current Theme: {theme}</h1>

            <button
                onClick={toggleTheme}
                style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    backgroundColor: theme === 'dark' ? '#555' : '#ddd',
                    cursor: 'pointer',
                }}
            >
                Toggle Theme
            </button>

            <Link href="/">Back to Home</Link>
        </div>
    );
}