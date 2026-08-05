import { testimonials } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" style={{ padding: '120px 0' }}>
      <div className="container">
        <div ref={ref} style={{ marginBottom: '80px' }}>
          <p style={{
            fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
            textTransform: 'uppercase', fontFamily: 'var(--font-display)',
            marginBottom: '20px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}>Client Love</p>
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
            Trusted by builders.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '40px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ${i * 0.12}s ease`,
            }}>
              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '24px', right: '32px',
                fontFamily: 'Georgia, serif',
                fontSize: '80px',
                color: 'var(--border-light)',
                lineHeight: 1,
                pointerEvents: 'none',
              }}>"</div>

              <p style={{
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                marginBottom: '32px',
                position: 'relative',
              }}>
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: '#080808',
                  fontSize: '14px',
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
