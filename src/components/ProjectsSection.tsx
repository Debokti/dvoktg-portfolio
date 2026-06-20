'use client'

import { ExternalLink, Globe, Lock, Zap } from 'lucide-react'

const projects = [
  {
    id: 'financial-portal',
    title: 'Unified Financial Portal Sandbox',
    description:
      'An architectural sandbox connecting an Angular dashboard with Python/FastAPI and Java/Spring Boot microservices. Orchestrated using Google Antigravity\'s agent-driven development and MCP for AI integrations and secure machine-to-machine authentication.',
    language: 'TypeScript',
    langColor: '#3178c6',
    badge: 'AI-Enabled',
    badgeColor: '#b265ff',
    icon: Globe,
    tags: ['Angular 17', 'Python / FastAPI', 'Spring Boot', 'MCP', 'Google Antigravity'],
    type: 'public',
  },
  {
    id: 'trade-loans',
    title: 'Trade Loans Data Retention Engine',
    description:
      'Engineered complex request, attachment, and rekey workflows resolving state loss on navigation and ensuring strict data retention across multi-page transitions for banking applications.',
    language: 'Angular',
    langColor: '#dd0031',
    badge: 'TCS Financial Services',
    badgeColor: '#2563eb',
    icon: Lock,
    tags: ['Angular', 'RxJS', 'ag-Grid', 'Java/Spring Boot', 'Trade Finance'],
    type: 'private',
  },
]

// Arrow decoration
const SmallArrow = () => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
    <path d="M0 10 Q30 2 55 10" stroke="#9ca3af" strokeWidth="1.5" fill="none" />
    <circle cx="56" cy="10" r="3.5" fill="#9ca3af" />
    <circle cx="2" cy="10" r="2.5" fill="#9ca3af" />
  </svg>
)

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative arrow */}
      <div style={{ position: 'absolute', top: '15%', right: '6%', opacity: 0.4 }}>
        <SmallArrow />
      </div>
      <div style={{ position: 'absolute', bottom: '15%', left: '5%', opacity: 0.3 }}>
        <SmallArrow />
      </div>

      <div className="section-wrap">
        <h2 className="section-heading">
          Featured{' '}
          <span className="gradient-text">Sandboxes</span>
        </h2>
        <p className="section-sub">
          Turning curiosity into functional, AI-enabled architectures.
        </p>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {projects.map((proj) => {
            const Icon = proj.icon
            return (
              <div key={proj.id} className="repo-card">
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: `${proj.badgeColor}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} style={{ color: proj.badgeColor }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.3 }}>
                      {proj.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: `${proj.badgeColor}15`,
                      color: proj.badgeColor,
                      border: `1px solid ${proj.badgeColor}30`,
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      marginLeft: '8px',
                    }}
                  >
                    {proj.badge}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.845rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '4px' }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        background: 'var(--pill-bg)',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--border)', marginTop: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: proj.langColor,
                      }}
                    />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {proj.language}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {proj.type}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
