'use client'

import { Download, Mail } from 'lucide-react'
import { LinkedInIcon } from './LinkedInIcon'

// Star SVG decoration
const StarIcon = ({ size = 24, color = '#b265ff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
  </svg>
)

// Dot grid decoration
const DotGrid = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    {[0, 10, 20, 30, 40, 50, 60, 70].map((x) =>
      [0, 10, 20, 30, 40, 50, 60, 70].map((y) => (
        <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="2" fill="#9ca3af" opacity="0.4" />
      ))
    )}
  </svg>
)

// Curved arrow
const CurvedArrow = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ transform: 'rotate(30deg)' }}>
    <path d="M8 8 Q24 4 40 24 Q32 40 16 40" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M10 36 L16 40 L12 46" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: 'var(--bg)',
        paddingTop: '100px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        {/* Main heading */}
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            fontWeight: 900,
            color: 'var(--text)',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: '12px',
            letterSpacing: '-1px',
          }}
        >
          I&apos;m{' '}
          <span className="gradient-text">Debokti Ghosh</span>,
          <br />
          Front-end Engineer
        </h1>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            marginBottom: '52px',
            fontWeight: 400,
          }}
        >
          AI-Enabled Enterprise Applications · Financial Services
        </p>

        {/* Three-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {/* Left: Location + Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-end' }}>
            {/* Location */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end', marginBottom: '4px' }}>
                <StarIcon size={20} color="#b265ff" />
                <span style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>
                  Kolkata, India
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>West Bengal · BFSI Specialist</p>
            </div>

            {/* Quote */}
            <div style={{ maxWidth: '240px', textAlign: 'right' }}>
              <div style={{ fontSize: '2rem', color: 'var(--text-muted)', lineHeight: 0.5, marginBottom: '8px' }}>&ldquo;&rdquo;</div>
              <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--text)', fontWeight: 400 }}>
                Bridging{' '}
                <span className="highlight-chip">traditional</span>
                {' '}enterprise systems with{' '}
                <span className="highlight-chip">modern</span>,{' '}
                AI-enabled{' '}
                <span className="highlight-chip">architectures</span>.
              </p>
            </div>

            {/* Arrow pointing to photo */}
            <div style={{ opacity: 0.5, paddingRight: '16px' }}>
              <CurvedArrow />
            </div>
          </div>

          {/* Center: Profile Photo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {/* Decorative stars */}
            <div className="deco float" style={{ top: '-12px', left: '-20px' }}>
              <StarIcon size={22} color="#b265ff" />
            </div>
            <div className="deco float-slow" style={{ top: '20px', right: '-24px' }}>
              <StarIcon size={16} color="#ff4400" />
            </div>
            <div className="deco float" style={{ bottom: '10px', left: '-28px' }}>
              <StarIcon size={14} color="#ffa100" />
            </div>
            <div className="deco float-slow" style={{ bottom: '-4px', right: '-20px' }}>
              <StarIcon size={20} color="#b265ff" />
            </div>

            {/* Arch frame */}
            <div style={{ position: 'relative', width: '210px', height: '270px' }}>
              {/* Purple arch bg */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '105px 105px 0 0',
                  background: 'linear-gradient(180deg, #b265ff, #7c3aed)',
                }}
              />
              {/* Profile Image */}
              <img
                src="/profile.png"
                alt="Debokti Ghosh"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '190px',
                  height: '305px',
                  borderRadius: '95px 95px 0 0',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Dot grid decoration */}
            <div className="deco" style={{ bottom: '-20px', right: '-60px', opacity: 0.5 }}>
              <DotGrid />
            </div>
          </div>

          {/* Right: Experience stats + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { value: '7.5+', label: 'Years Experience' },
                { value: '5+', label: 'Banking Clients' },
                { value: '2', label: 'Employers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      background: 'var(--gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Specialization */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(178,101,255,0.08)',
                border: '1px solid rgba(178,101,255,0.2)',
                maxWidth: '200px',
              }}
            >
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Currently at
              </p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>Tata Consultancy</p>
              <p style={{ fontSize: '0.78rem', color: '#b265ff', fontWeight: 500 }}>Citibank ICG Trade Loans</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '52px', flexWrap: 'wrap' }}>
          <a href="/resume.pdf" download className="btn-pill-outline">
            <Download size={16} />
            Download Resume
          </a>
          <a href="https://linkedin.com/in/debokti-ghosh" target="_blank" rel="noopener noreferrer" className="btn-pill-gradient">
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a href="mailto:debokti@gmail.com" className="btn-pill-outline">
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
