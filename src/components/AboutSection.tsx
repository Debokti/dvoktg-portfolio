'use client'

export function AboutSection() {
  const highlights = [
    { label: 'Angular', color: '#dd0031' },
    { label: 'Financial Services', color: '#b265ff' },
    { label: 'Citibank ICG', color: '#2563eb' },
    { label: 'AI integrations', color: '#ff4400' },
  ]

  return (
    <section
      id="about"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="section-wrap">
        <h2 className="section-heading">
          About{' '}
          <span className="gradient-text">Me</span>
        </h2>

        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}
        >
          <p style={{ marginBottom: '20px' }}>
            I am a Frontend Engineer with over{' '}
            <span style={{ fontWeight: 700, color: 'var(--text)' }}>7.5 years</span> of experience
            building scalable applications in the{' '}
            <span
              className="about-highlight"
              style={{ background: 'rgba(178,101,255,0.12)', color: '#b265ff' }}
            >
              Financial Services
            </span>{' '}
            sector, currently specializing in complex{' '}
            <span
              className="about-highlight"
              style={{ background: 'rgba(221,0,49,0.08)', color: '#dd0031' }}
            >
              Angular
            </span>{' '}
            architectures and UI debugging for{' '}
            <span
              className="about-highlight"
              style={{ background: 'rgba(37,99,235,0.08)', color: '#2563eb' }}
            >
              Tata Consultancy Services (Citi's ICG Trade Loans)
            </span>
            .
          </p>
          <p style={{ marginBottom: '20px' }}>
            My enterprise expertise focuses on navigating massive systems, resolving deep UI/Java
            integration bottlenecks, tracing API payloads, and streamlining CI/CD pipelines.
          </p>
          <p>
            To bridge the gap between traditional banking interfaces and modern technology, I
            actively build full-stack architectural sandboxes combining robust Angular frontends
            with microservices and{' '}
            <span
              className="about-highlight"
              style={{ background: 'rgba(255,68,0,0.08)', color: '#ff4400' }}
            >
              AI integrations
            </span>
            .
          </p>
        </div>

        {/* Skill highlights */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '48px',
          }}
        >
          {[
            'Angular 2–17',
            'Spring Boot',
            'Python / FastAPI',
            'Module Federation',
            'Agent-Driven Dev',
            'BFSI Domain',
            'Trade Finance',
            'Micro-frontends',
          ].map((skill) => (
            <span key={skill} className="skill-pill" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
