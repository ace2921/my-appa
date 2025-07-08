import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import Banner from './Banner/Banner'
import Flight from './Flight/Flight'
import Footer from './Footer/Footer'
import './App.css'

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000,
      padding: '0.5rem 1rem',
      borderRadius: '1.5rem',
      border: 'none',
      background: 'var(--color-accent)',
      color: 'var(--color-bg)',
      fontWeight: 600,
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
  >
    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
  </button>
)

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className='App'>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Banner />
      <Flight />
      <Footer />
    </div>
  )
}

export default App