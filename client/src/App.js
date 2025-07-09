import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');

  const colors = {
    light: {
      background: '#f9f9f9',
      text: '#333',
      cardBg: '#fff',
      cardText: '#333',
      accent: '#4CAF50',
    },
    dark: {
      background: '#121212',
      text: '#f9f9f9',
      cardBg: '#1e1e1e',
      cardText: '#f9f9f9',
      accent: '#FF9800',
    },
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div
        style={{
          background: colors[theme].background,
          color: colors[theme].text,
          minHeight: '100vh',
        }}
      >
        <nav
          style={{
            padding: '1rem 2rem',
            background: colors[theme].accent,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link
              to="/"
              style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
            >
              GroceryApp
            </Link>
            <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>
              Products
            </Link>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
              Login
            </Link>
            <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              background: '#fff',
              color: colors[theme].accent,
              border: 'none',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home theme={theme} colors={colors} />} />
          <Route path="/products" element={<Products theme={theme} colors={colors} />} />
          <Route path="/login" element={<Login theme={theme} colors={colors} />} />
          <Route path="/signup" element={<SignUp theme={theme} colors={colors} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ theme, colors }) {
  return (
    <div
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        color: colors[theme].text,
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          marginBottom: '1.5rem',
          color: colors[theme].accent,
        }}
      >
        Welcome to Grocery App
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}
      >
        Experience the freshness of daily groceries delivered right to your doorstep.
        Shop from a wide range of fruits, vegetables, dairy products, and more —
        all at the best prices!
      </p>

      <Link
        to="/products"
        style={{
          background: colors[theme].accent,
          color: '#fff',
          textDecoration: 'none',
          padding: '0.8rem 2rem',
          borderRadius: '6px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'all 0.3s',
        }}
      >
        Shop Now
      </Link>
    </div>
  );
}

function Products({ theme, colors }) {
  const products = [
    {
      name: 'Apple',
      price: 1.5,
      description: 'Fresh red apple',
      image: 'https://tse1.mm.bing.net/th/id/OIP.LE5P4gVfXHkZ4JaI3t5iKQHaEK?pid=Api&P=0&h=180',
    },
    {
      name: 'Banana',
      price: 0.75,
      description: 'Sweet bananas',
      image: 'https://tse2.mm.bing.net/th/id/OIP.MEEgsg4_Niy-Edc-29RoBQHaE7?pid=Api&P=0&h=180',
    },
    {
      name: 'Milk',
      price: 2.0,
      description: 'Pure cow milk',
      image: 'https://tse3.mm.bing.net/th/id/OIP.zUeGxrkDyf50ZqCzMuVMtAAAAA?pid=Api&P=0&h=180',
    },
    {
      name: 'Bread',
      price: 1.2,
      description: 'Whole grain bread',
      image: 'https://tse2.mm.bing.net/th/id/OIP.AjCDKyD2LQ4S2on8h0p0UgHaHa?pid=Api&P=0&h=180',
    },
    {
      name: 'Mango',
      price: 2.5,
      description: 'Juicy ripe mango',
      image: 'https://tse1.mm.bing.net/th/id/OIP.PryfDNqEYI6wGCfJPBE4mAHaL4?pid=Api&P=0&h=180',
    },
    {
      name: 'Tomato',
      price: 0.9,
      description: 'Fresh organic tomatoes',
      image: 'https://tse3.mm.bing.net/th/id/OIP.HiOMg7tz8EJzXnQVrhblAgHaE7?pid=Api&P=0&h=180',
    },
    {
      name: 'Onion',
      price: 1.1,
      description: 'Red onions',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Raxso1pKzxaLckuGTYn0HAHaEJ?pid=Api&P=0&h=180',
    },
    {
      name: 'Potato',
      price: 0.8,
      description: 'Clean and washed potatoes',
      image: 'https://tse3.mm.bing.net/th/id/OIP.hqjYEq4bgrgi2OZ8Ic5lAAHaE7?pid=Api&P=0&h=180',
    },
    {
      name: 'Eggs',
      price: 3.0,
      description: 'Farm fresh eggs (12 pcs)',
      image: 'https://tse1.mm.bing.net/th/id/OIP.URwaYmnKMu4DWQ27goOVEwHaHa?pid=Api&P=0&h=180',
    },
    {
      name: 'Butter',
      price: 2.2,
      description: 'Salted butter 250g',
      image: 'https://tse2.mm.bing.net/th/id/OIP.zuKaEzY3YF4vABCkk8gQqAHaEJ?pid=Api&P=0&h=180',
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: colors[theme].accent, textAlign: 'center' }}>
        Grocery Products
      </h1>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          marginTop: '2rem',
        }}
      >
        {products.map((product, index) => (
          <li
            key={index}
            style={{
              background: colors[theme].cardBg,
              color: colors[theme].cardText,
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={100}
              style={{ marginBottom: '1rem' }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Login({ theme, colors }) {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '3rem auto',
        padding: '2rem',
        background: colors[theme].cardBg,
        color: colors[theme].cardText,
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Login</h2>
      <form>
        <input type="email" placeholder="Email" style={inputStyle(colors, theme)} />
        <input type="password" placeholder="Password" style={inputStyle(colors, theme)} />
        <button style={buttonStyle(colors, theme)}>Login</button>
      </form>
    </div>
  );
}

function SignUp({ theme, colors }) {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '3rem auto',
        padding: '2rem',
        background: colors[theme].cardBg,
        color: colors[theme].cardText,
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" style={inputStyle(colors, theme)} />
        <input type="email" placeholder="Email" style={inputStyle(colors, theme)} />
        <input type="password" placeholder="Password" style={inputStyle(colors, theme)} />
        <button style={buttonStyle(colors, theme)}>Sign Up</button>
      </form>
    </div>
  );
}

const inputStyle = (colors, theme) => ({
  display: 'block',
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  background: colors[theme].background,
  color: colors[theme].text,
});

const buttonStyle = (colors, theme) => ({
  background: colors[theme].accent,
  color: '#fff',
  border: 'none',
  padding: '0.8rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  width: '100%',
});

export default App;



