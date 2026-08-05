import { process } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" style={{
      padding: '120px 0',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div ref={ref} style={{ marginBottom: '80px', textAlign: 'center' }}>
          <p style={{
            fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
            textTransform: 'uppercase', fontFamily: 'var(--font-display)',
            marginBottom: '20px',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease',
          }}>How We Work</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s 0.1s ease',
          }}>
            Our process, <span style={{ color: 'var(--accent)' }}>simplified.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }} className="process-grid">
          {process.map((item, i) => (
            <div key={item.step} style={{
              padding: '48px 40px',
              border: '1px solid var(--border)',
              position: 'relative',
              background: 'var(--bg-card)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ${i * 0.08}s ease`,
              overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--surface)';
                e.currentTarget.querySelector('.step-accent').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--bg-card)';
                e.currentTarget.querySelector('.step-accent').style.opacity = '0';
              }}
            >
              {/* Accent line */}
              <div className="step-accent" style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '2px',
                background: 'var(--accent)',
                opacity: 0, transition: 'opacity var(--transition)',
              }} />

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '48px',
                fontWeight: 800,
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '24px',
                letterSpacing: '-0.04em',
                textShadow: '0 0 18px rgba(200, 240, 77, 0.18)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '20px',
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}>
                {item.step}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
