'use client'

import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ToolboxSection } from '@/components/ToolboxSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { EducationSection } from '@/components/EducationSection'
import { QuoteSpread } from '@/components/QuoteSpread'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AboutSection } from '@/components/AboutSection'
import { Heart } from 'lucide-react'
import { LinkedInIcon } from '@/components/LinkedInIcon'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />

      <main>
        <HeroSection />
        <ToolboxSection />
        <ExperienceSection />
        <EducationSection />
        <QuoteSpread />
        <ProjectsSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <footer
        style={{
          background: 'var(--navbar-bg)',
          padding: '32px 24px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '8px',
              letterSpacing: '-0.5px',
            }}
          >
            Debokti
            <span style={{ color: '#b265ff' }}>.</span>
          </p>
          <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '20px' }}>
            Full-Stack Software Engineer · Kolkata, India
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <a
              href="https://linkedin.com/in/debokti-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#9ca3af',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#b265ff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9ca3af')}
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:debokti@gmail.com"
              style={{ color: '#9ca3af', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#b265ff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9ca3af')}
            >
              <Mail size={18} />
            </a>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            Built with <Heart size={11} style={{ color: '#b265ff', fill: '#b265ff' }} /> using Next.js &amp; Tailwind CSS
            · © {new Date().getFullYear()} Debokti Ghosh
          </p>
        </div>
      </footer>
    </div>
  )
}
