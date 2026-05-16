'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Toolbox', href: '#toolbox' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Sandboxes', href: '#projects' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{
          fontSize: '1.2rem',
          fontWeight: 800,
          color: 'white',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          letterSpacing: '-0.5px',
        }}
      >
        dvoktG
        <span style={{ color: '#b265ff', fontSize: '1.4rem', lineHeight: 1 }}>.</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((l) => (
          <button
            key={l.href}
            onClick={() => handleNav(l.href)}
            style={{
              background: 'none',
              border: 'none',
              color: '#d1d5db',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              padding: '4px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '8px',
            color: '#d1d5db',
            padding: '6px 8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: '#d1d5db', cursor: 'pointer' }}>
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: '#d1d5db', cursor: 'pointer' }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="md:hidden absolute top-14 left-0 right-0 flex flex-col"
          style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 0', zIndex: 99 }}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{
                background: 'none',
                border: 'none',
                color: '#d1d5db',
                fontSize: '0.95rem',
                fontWeight: 500,
                padding: '12px 32px',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
