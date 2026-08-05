import { testimonials } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" style={{ padding: 'clamp(80px, 12vw, 120px) 0' }}>
      <div className="container">
        <div ref={ref} style={{ marginBottom: 'clamp(40px, 8vw, 80px)', textAlign: 'center' }}>
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 420px))',
            justifyContent: 'center',
            gap: 'clamp(24px, 3vw, 40px)',
            maxWidth: '960px',
            width: '100%',
            paddingLeft: '20px',
            paddingRight: '20px',
          }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" style={{
              padding: 'clamp(32px, 6vw, 56px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: `all 0.6s ${i * 0.12}s ease`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              minHeight: '100%',
            }}>
              {/* Decorative top border accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--accent), transparent)',
              }} />

              {/* Quote mark */}
              <div style={{
                position: 'absolute', top: '16px', right: '24px',
                fontFamily: 'Georgia, serif',
                fontSize: '64px',
                color: 'var(--accent)',
                lineHeight: 1,
                pointerEvents: 'none',
                opacity: 0.15,
              }}>"</div>

              <p style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                marginBottom: '40px',
                position: 'relative',
                fontWeight: 400,
                letterSpacing: '0.3px',
              }}>
                {t.quote}
              </p>

              {/* Separator line */}
              <div style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                marginBottom: '24px',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), #a8ff00)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: '#080808',
                  fontSize: '16px',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(168, 255, 0, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-card {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px) !important;
          border-color: rgba(255, 255, 255, 0.12) !important;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%) !important;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2) !important;
        }

        @media (max-width: 1024px) { 
          .testimonials-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 32px !important; max-width: 100% !important; } 
          .testimonial-card:hover {
            transform: translateY(-6px) !important;
          }
        }
        @media (max-width: 768px) { 
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 24px !important; padding-left: 16px !important; padding-right: 16px !important; } 
          .testimonial-card:hover {
            transform: translateY(-4px) !important;
          }
        }
      `}</style>
    </section>
  );
}
