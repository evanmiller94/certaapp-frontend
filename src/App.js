import React, { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <--- new loading state


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setLoading(false);
      return;
    }

    fetch('/api/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser(data.username);
        } else {
          // Invalid token → clear localStorage
          localStorage.removeItem('token');
          localStorage.removeItem('username');
        }
        setLoading(false);
      })
      .catch(() => setLoading(false)); // Network or server error
  }, []);


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
          // Save token & username in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', form.username);
          setUser(form.username);
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        setMessage('Network error: ' + err.message);
      }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  if (loading) {
    // Show nothing or a spinner while checking login
    //return <div style={{ maxWidth: 320, margin: 'auto', padding: 20 }}>Loading...</div>;
      return null; // blank screen while verifying token
  }

  if (user) {
    return (
      <div style={{ maxWidth: 320, margin: 'auto', padding: 20 }}>
        <h2>Hello, {user}!</h2>
        <button onClick={handleLogout} style={{ padding: 8 }}>
          Logout
        </button>
      </div>
    );
  }

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
