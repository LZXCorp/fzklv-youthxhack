import { useState, useEffect } from 'react';
import '../assets/Theme.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme or default to dark
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Apply the theme to the body and save it to localStorage
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme} className='theme-toggle'>
      Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;