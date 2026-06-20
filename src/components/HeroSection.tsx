'use client'

import { useState } from 'react'
import { Download, Mail, Eye, X } from 'lucide-react'
import { LinkedInIcon } from './LinkedInIcon'
import { DiscordIcon } from './DiscordIcon'

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
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

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
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 items-center">
          {/* Left: Location + Quote */}
          <div className="flex flex-col gap-6 md:gap-8 items-center md:items-end order-2 md:order-1 text-center md:text-right">
            {/* Location */}
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-end mb-1">
                <StarIcon size={20} color="#b265ff" />
                <span style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)' }}>
                  Bangalore, India
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Karnataka · BFSI Specialist</p>
            </div>

            {/* Quote */}
            <div className="max-w-[240px]">
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
          <div className="flex flex-col items-center relative order-1 md:order-2">
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
            <div style={{ position: 'relative', width: '220px', height: '278px' }}>
              {/* Outer arch border — subtle gradient ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '110px 110px 0 0',
                  background: 'linear-gradient(160deg, rgba(178,101,255,0.55) 0%, rgba(150,150,180,0.2) 50%, rgba(255,100,0,0.35) 100%)',
                  padding: '7px',
                }}
              />
              {/* Inner arch background — neutral surface */}
              <div
                style={{
                  position: 'absolute',
                  inset: '7px',
                  borderRadius: '103px 103px 0 0',
                  background: 'var(--pill-bg)',
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
                  width: '200px',
                  height: '314px',
                  borderRadius: '100px 100px 0 0',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>

            {/* Dot grid decoration */}
            <div className="deco" style={{ bottom: '-20px', right: '-60px', opacity: 0.5 }}>
              <DotGrid />
            </div>
          </div>

          {/* Right: Experience stats + tagline */}
          <div className="flex flex-col gap-6 items-center md:items-start order-3 text-center md:text-left">
            {/* Stats */}
            <div className="flex flex-col gap-4">
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
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>Tata Consultancy Services Ltd</p>
              <p style={{ fontSize: '0.78rem', color: '#b265ff', fontWeight: 500 }}>Trade Loans</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '52px', flexWrap: 'wrap' }}>
          <button onClick={() => setIsCvModalOpen(true)} className="btn-pill-outline">
            <Eye size={16} />
            View Resume
          </button>
          <a href="https://linkedin.com/in/debokti-ghosh" target="_blank" rel="noopener noreferrer" className="btn-pill-outline">
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a href="https://discordapp.com/users/devoktg" target="_blank" rel="noopener noreferrer" className="btn-pill-outline">
            <DiscordIcon size={16} />
            Discord
          </a>
          <a href="mailto:debokti@gmail.com" className="btn-pill-outline">
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* CV Modal Popup */}
      {isCvModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" 
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCvModalOpen(false)
          }}
        >
          <div className="relative w-full max-w-5xl h-[85vh] bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div 
              className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]"
              style={{ padding: '16px 24px' }}
            >
              <h3 className="font-semibold text-[var(--text)] tracking-wide">Resume Preview</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="/assets/CV-Debokti_Ghosh_26.pdf" 
                  download 
                  className="btn-pill-gradient"
                  style={{ 
                    padding: '8px 16px', 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    fontWeight: 700, 
                    letterSpacing: '0.05em' 
                  }}
                >
                  <Download size={14} strokeWidth={2.5} style={{ marginRight: '4px' }} />
                  Download
                </a>
                <button 
                  onClick={() => setIsCvModalOpen(false)}
                  className="rounded-full hover:bg-[rgba(255,255,255,0.1)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                  style={{ padding: '6px' }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            {/* PDF Viewer */}
            <div className="flex-1 w-full bg-zinc-950 relative">
              <iframe 
                src="/assets/CV-Debokti_Ghosh_26.pdf#toolbar=0" 
                className="w-full h-full border-none"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
