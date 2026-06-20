'use client'

import { useState } from 'react'

// Tech icon URLs from devicon CDN
const techIcons: Record<string, string> = {
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  RxJS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Vercel: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  Cordova: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
}

const EmojiIcon = ({ emoji, size = 20 }: { emoji: string; size?: number }) => (
  <span style={{ fontSize: size }}>{emoji}</span>
)

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'Angular 2–17', icon: techIcons.Angular },
      { name: 'TypeScript', icon: techIcons.TypeScript },
      { name: 'RxJS', icon: techIcons.RxJS },
      { name: 'Bootstrap', icon: techIcons.Bootstrap },
      { name: 'ag-Grid', emoji: '📊' },
      { name: 'Module Federation', emoji: '🧩' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Java', icon: techIcons.Java },
      { name: 'Spring Boot', icon: techIcons['Spring Boot'] },
      { name: 'Python', icon: techIcons.Python },
      { name: 'FastAPI', icon: techIcons.FastAPI },
      { name: 'REST APIs', emoji: '🔗' },
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'Jenkins', icon: techIcons.Jenkins },
      { name: 'GitHub', icon: techIcons.GitHub },
      { name: 'Vercel', icon: techIcons.Vercel },
      { name: 'Harness', emoji: '⚙️' },
      { name: 'Lightspeed', emoji: '⚡' },
      { name: 'Render', emoji: '☁️' },
    ],
  },
  {
    id: 'ai',
    label: 'Data & AI',
    skills: [
      { name: 'Antigravity CLI / 2.0', icon: '/assets/antigravity_icon.jpg' },
      { name: 'Claude Code', icon: '/assets/claude_icon.png' },
      { name: 'Gemini CLI', icon: '/assets/gemini_cli_icon.jpg' },
      { name: 'Google AI Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'Pandas', icon: techIcons.Pandas },
      { name: 'MCP', emoji: '🔌' },
    ],
  },
  {
    id: 'cms',
    label: 'CMS & Hybrid',
    skills: [
      { name: 'Apache Cordova', icon: techIcons.Cordova },
      { name: 'IBM MobileFirst', emoji: '📱' },
      { name: 'Dynamic Yield', emoji: '🎯' },
    ],
  },
]

// Decorative shapes
const DonutShape = () => (
  <svg width="70" height="28" viewBox="0 0 70 28" fill="none">
    <ellipse cx="35" cy="14" rx="35" ry="14" fill="#d4a574" />
    <ellipse cx="35" cy="12" rx="35" ry="14" fill="#e8c090" />
    <ellipse cx="35" cy="12" rx="20" ry="7" fill="#c8915a" />
  </svg>
)

const SunBurst = ({ color = '#ffa100', size = 50 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill={color}>
    <circle cx="25" cy="25" r="10" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
      <rect
        key={i}
        x="23" y="0" width="4" height="12" rx="2"
        fill={color}
        transform={`rotate(${deg} 25 25)`}
      />
    ))}
  </svg>
)

const PillShape = () => (
  <svg width="24" height="60" viewBox="0 0 24 60" fill="none">
    <rect x="0" y="0" width="24" height="60" rx="12" fill="#c084fc" opacity="0.7" />
  </svg>
)

const XMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M4 4 L28 28 M28 4 L4 28" stroke="#374151" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
)

interface Skill {
  name: string
  icon?: string
  emoji?: string
}

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="skill-pill">
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          width={20}
          height={20}
          style={{ objectFit: 'contain', flexShrink: 0 }}
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      ) : (
        <EmojiIcon emoji={skill.emoji || '•'} size={18} />
      )}
      <span>{skill.name}</span>
    </div>
  )
}

export function ToolboxSection() {
  const [active, setActive] = useState('frontend')
  const current = categories.find((c) => c.id === active)!

  return (
    <section
      id="toolbox"
      className="section-glow"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative floating shapes */}
      <div className="deco float-slow hidden md:block" style={{ left: '3%', top: '30%', opacity: 0.7 }}>
        <DonutShape />
      </div>
      <div className="deco float hidden md:block" style={{ right: '5%', top: '20%' }}>
        <SunBurst color="#ffa100" size={52} />
      </div>
      <div className="deco float-slow hidden md:block" style={{ left: '8%', bottom: '20%' }}>
        <SunBurst color="#66c2e0" size={38} />
      </div>
      <div className="deco float hidden md:block" style={{ right: '3%', bottom: '25%' }}>
        <PillShape />
      </div>
      <div className="deco hidden md:block" style={{ right: '7%', bottom: '10%', opacity: 0.5 }}>
        <XMark />
      </div>

      <div className="section-wrap">
        {/* Heading */}
        <h2 className="section-heading">
          Take a look at my{' '}
          <span className="gradient-text">Toolbox</span>
        </h2>
        <p className="section-sub">
          My go-to tools of the trade — the ones I use regularly
          <br />
          and am constantly refining.
        </p>

        {/* Category tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '44px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {current.skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
