import { techStack } from '../../data/siteData';

export default function TechTicker() {
  const doubled = [...techStack, ...techStack];

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '20px 0',
      overflow: 'hidden',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{
        display: 'flex',
        gap: '48px',
        animation: 'marquee 25s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((tech, i) => (
          <span key={i} style={{
            display: 'flex', alignItems: 'center', gap: '48px',
            fontSize: '13px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-display)',
            whiteSpace: 'nowrap',
          }}>
            {tech}
            <span style={{ color: 'var(--accent)', fontSize: '10px' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
