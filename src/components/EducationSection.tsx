'use client'

import { ExternalLink } from 'lucide-react'

const education = [
  {
    year: '2013 - 2017',
    degree: 'B.Tech — Electronics & Communication Engineering',
    institution: 'Academy of Technology',
    location: 'West Bengal, India',
    description: 'Pursued a full-time undergraduate degree in Electronics & Communication Engineering, building a strong foundation in digital systems, signal processing, and programming fundamentals that underpins my software engineering career.',
  },
  {
    year: '2012 - 2013',
    degree: 'ISC Science',
    institution: "St. Augustine's Day School",
    location: 'West Bengal, India',
    description: "Completed higher secondary schooling in Science stream with a focus on Mathematics, Physics, and Computer Science.",
  },
]

const certifications = [
  {
    name: 'Intermediate Python',
    issuer: 'DataCamp',
    emoji: '🐍',
    color: '#3776ab',
    bg: 'rgba(55,118,171,0.08)',
    border: 'rgba(55,118,171,0.2)',
    url: 'https://www.datacamp.com',
  },
  {
    name: 'Data Manipulation using Pandas',
    issuer: 'DataCamp',
    emoji: '🐼',
    color: '#e70488',
    bg: 'rgba(231,4,136,0.08)',
    border: 'rgba(231,4,136,0.2)',
    url: 'https://www.datacamp.com',
  },
]

// Orbit circle decoration
const OrbitCircle = ({ size = 100, opacity = 0.3 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <circle cx="50" cy="50" r="46" stroke="#9ca3af" strokeWidth="2" strokeDasharray="8 6" />
    <circle cx="50" cy="4" r="5" fill="#9ca3af" />
    <circle cx="96" cy="50" r="5" fill="#9ca3af" />
  </svg>
)

// Arrow decoration  
const ArrowDeco = () => (
  <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
    <path d="M0 15 Q40 5 70 15" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
    <circle cx="75" cy="15" r="4" fill="#9ca3af" />
    <circle cx="4" cy="15" r="3" fill="#9ca3af" />
  </svg>
)

export function EducationSection() {
  return (
    <section
      id="education"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative elements */}
      <div style={{ position: 'absolute', top: '10%', left: '2%', opacity: 0.4 }}>
        <OrbitCircle size={90} />
      </div>
      <div style={{ position: 'absolute', bottom: '15%', right: '3%', opacity: 0.35 }}>
        <OrbitCircle size={110} />
      </div>
      <div style={{ position: 'absolute', top: '40%', right: '6%', opacity: 0.3 }}>
        <ArrowDeco />
      </div>

      <div className="section-wrap">
        <h2 className="section-heading">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="section-sub">From early interests to specialized studies.</p>

        {/* Timeline */}
        <div style={{ position: 'relative', marginBottom: '60px' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '108px',
              top: '10px',
              bottom: '10px',
              width: '3px',
              background: 'linear-gradient(180deg, #b265ff, #ff4400)',
              borderRadius: '2px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0', position: 'relative' }}>
                {/* Year */}
                <div
                  style={{
                    width: '104px',
                    textAlign: 'right',
                    paddingRight: '20px',
                    paddingTop: '4px',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {edu.year}
                  </span>
                </div>

                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '100px',
                    top: '4px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #b265ff, #ff4400)',
                    border: '3px solid var(--bg)',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ paddingLeft: '28px', flex: 1 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#b265ff', fontWeight: 600, marginBottom: '2px' }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {edu.location}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '48px',
          }}
        >
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', textAlign: 'center', marginBottom: '28px' }}>
            Certifications
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', maxWidth: '600px', margin: '0 auto' }}>
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: cert.bg,
                    border: `1px solid ${cert.border}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
                >
                  <span style={{ fontSize: '2rem' }}>{cert.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem' }}>{cert.name}</p>
                    <p style={{ fontSize: '0.78rem', color: cert.color, fontWeight: 600 }}>{cert.issuer}</p>
                  </div>
                  <ExternalLink size={14} style={{ color: cert.color, opacity: 0.6, flexShrink: 0 }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
