'use client'

import { Award } from 'lucide-react'

const experiences = [
  {
    id: 'tcs',
    company: 'Tata Consultancy Services',
    abbr: 'TCS',
    logo: '/tcs.jpg',
    role: 'Offshore Lead & Web Developer',
    period: 'Nov 2024 — Present',
    year: '2024 - Now',
    client: 'Citibank ICG',
    color: '#2563eb',
    current: true,
    bullets: [
      'Leading offshore CAP item project delivery for Citibank\'s ICG Trade Loans platform.',
      'Developing Angular libraries and module federation architectures for enterprise-scale deployments.',
      'Debugging and enhancing Angular components integrated with legacy Java/JSP systems, drastically reducing production issue resolution time.',
      'Utilizing data wrangling techniques to validate large JSON API responses for Trade Loan services.',
    ],
    tags: ['Angular 17', 'Module Federation', 'Java/JSP', 'Data Wrangling'],
  },
  {
    id: 'capgemini',
    company: 'Capgemini',
    abbr: 'CAP',
    logo: '/capgemini.png',
    role: 'Frontend Developer',
    period: 'Jan 2018 — Nov 2024',
    year: '2018 - 2024',
    client: 'Synchrony · Fiserv · HSBC · PNB MetLife',
    color: '#b265ff',
    current: false,
    awards: ['Aces of Capgemini', 'Level 0 Architect'],
    bullets: [
      'Engineered large-scale enterprise applications with multi-module Angular architecture for major banking clients including Synchrony Financial, Fiserv Inc., HSBC, and PNB MetLife.',
      'Executed mobile-first development using Apache Cordova and IBM MobileFirst for hybrid banking applications.',
      'Engineered automated testing workflows to ensure resilient and robust code.',
      'Recognized with the "Aces of Capgemini" award and certified as a Level 0 Architect.',
    ],
    tags: ['Angular', 'Jasmine/Karma', 'Cordova', 'MobileFirst', 'HSBC', 'Fiserv'],
  },
]

// Plus decoration
const PlusIcon = ({ size = 18, color = '#9ca3af' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 4 L12 20 M4 12 L20 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '15%', right: '4%', opacity: 0.3 }}>
        <PlusIcon size={28} color="#b265ff" />
      </div>
      <div style={{ position: 'absolute', bottom: '20%', left: '4%', opacity: 0.3 }}>
        <PlusIcon size={20} color="#b265ff" />
      </div>

      <div className="section-wrap">
        <h2 className="section-heading">
          Professional{' '}
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-sub">
          7.5+ years building scalable enterprise applications in Financial Services.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical gradient line — desktop */}
          <div
            className="hidden md:block absolute left-[100px] top-[12px] bottom-[12px] w-[3px] rounded-sm"
            style={{ background: 'linear-gradient(180deg, #b265ff, #ff4400)' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative">

                {/* ── Mobile layout ── */}
                <div
                  className="md:hidden pl-5 py-1"
                  style={{
                    borderLeft: `3px solid ${exp.current ? '#10b981' : '#b265ff'}`,
                    marginBottom: '4px',
                  }}
                >
                  {/* Year + inline dot row */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-[11px] h-[11px] rounded-full shrink-0 -ml-[20px] mr-1"
                      style={{
                        background: exp.current ? '#10b981' : 'linear-gradient(135deg, #b265ff, #ff4400)',
                        boxShadow: '0 0 0 2px var(--bg)',
                      }}
                    />
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                      {exp.year}
                    </span>
                    {exp.current && (
                      <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '9999px', background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)', fontWeight: 600 }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div className="exp-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', border: '1px solid var(--border)', flexShrink: 0 }}>
                        <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{exp.company}</h3>
                        <p style={{ fontSize: '0.85rem', color: exp.color, fontWeight: 600 }}>{exp.role}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{exp.period} · {exp.client}</p>
                    {exp.awards && (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        {exp.awards.map((a) => (
                          <span key={a} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', padding: '3px 10px', borderRadius: '9999px', background: 'rgba(255,161,0,0.1)', color: '#ffa100', border: '1px solid rgba(255,161,0,0.25)', fontWeight: 600 }}>
                            <Award size={10} />{a}
                          </span>
                        ))}
                      </div>
                    )}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {exp.bullets.map((b, i) => (
                        <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: exp.color, flexShrink: 0, marginTop: '7px' }} />
                          <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{b}</p>
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                      {exp.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: '0.72rem', padding: '3px 9px', borderRadius: '9999px', background: 'var(--pill-bg)', color: 'var(--text-muted)', fontWeight: 500 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Desktop layout ── */}
                <div className="hidden md:flex flex-row gap-0 items-start">
                  {/* Year label */}
                  <div style={{ width: '96px', textAlign: 'right', paddingRight: '16px', paddingTop: '10px', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', lineHeight: 1.4 }}>{exp.year}</span>
                  </div>

                  {/* Dot on timeline */}
                  <div
                    className="absolute left-[91px] top-[10px] w-[20px] h-[20px] rounded-full border-[3px] border-[var(--bg)] z-10"
                    style={{ background: exp.current ? '#10b981' : `linear-gradient(135deg, #b265ff, #ff4400)` }}
                  />

                  {/* Content */}
                  <div style={{ paddingLeft: '28px', flex: 1 }}>
                    <div className="exp-card">
                      {/* Header */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid var(--border)', flexShrink: 0 }}>
                              <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} />
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{exp.company}</h3>
                            {exp.current && (
                              <span style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: '9999px', background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)', fontWeight: 600 }}>
                                Current
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.9rem', color: exp.color, fontWeight: 600 }}>{exp.role}</p>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>{exp.period} · {exp.client}</p>
                        </div>
                      </div>

                      {exp.awards && (
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                          {exp.awards.map((a) => (
                            <span key={a} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', padding: '4px 12px', borderRadius: '9999px', background: 'rgba(255,161,0,0.1)', color: '#ffa100', border: '1px solid rgba(255,161,0,0.25)', fontWeight: 600 }}>
                              <Award size={11} />{a}
                            </span>
                          ))}
                        </div>
                      )}

                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {exp.bullets.map((b, i) => (
                          <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.color, flexShrink: 0, marginTop: '7px' }} />
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{b}</p>
                          </li>
                        ))}
                      </ul>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                        {exp.tags.map((tag) => (
                          <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', background: 'var(--pill-bg)', color: 'var(--text-muted)', fontWeight: 500 }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
