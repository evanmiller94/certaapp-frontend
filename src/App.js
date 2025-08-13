import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async e => {
  e.preventDefault();
  setMessage('');

  if (!form.username || !form.password) {
    setMessage('Please fill in both fields.');
    return;
  }

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
      // TODO: Save token or set login state here
    } else {
      setMessage(data.message || 'Login failed.');
    }
  } catch (error) {
    setMessage('Network error: ' + error.message);
  }
};

  return (
    <div style={{ maxWidth: 320, margin: 'auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 8, padding: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 8 }}>
          Log In
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
