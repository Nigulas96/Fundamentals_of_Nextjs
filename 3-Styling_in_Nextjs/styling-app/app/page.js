'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    });

    const data = await response.json();

    setResult(data.message || data.error);
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <textarea
          placeholder="Message"
          onChange={(event) => setMessage(event.target.value)}
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <button type="submit">Send</button>
      </form>

      <p>{result}</p>
    </main>
  );
}