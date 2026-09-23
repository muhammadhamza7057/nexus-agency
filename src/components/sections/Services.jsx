import { useState } from 'react';
import { services } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Services() {
  const [hovered, setHovered] = useState(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" style={{ padding: '120px 0' }}>
      <div className="container">
        <div ref={ref} style={{ marginBottom: '80px' }}>
          <p style={{
            fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
            textTransform: 'uppercase', fontFamily: 'var(--font-display)',
            marginBottom: '20px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            What We Do
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(30px)',
              transition: 'all 0.6s 0.1s ease',
            }}>
              Full-spectrum<br />software services.
            </h2>
            <p style={{
              maxWidth: '360px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s 0.2s ease',
            }}>
              From pixel-perfect interfaces to cloud infrastructure — we cover the full stack so you don't have to juggle vendors.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((service, i) => (
            <div
              key={service.id}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '40px',
                alignItems: 'center',
                borderTop: '1px solid var(--border)',
                cursor: 'default',
                transition: 'all var(--transition)',
                background: hovered === service.id ? 'var(--bg-secondary)' : 'transparent',
                margin: '0 -40px',
                padding: '40px 40px',
                borderRadius: 'var(--radius)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(20px)',
                transitionDelay: `${i * 0.08}s`,
              }}
              className="service-row"
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                color: hovered === service.id ? service.color : 'var(--text-muted)',
                fontWeight: 700,
                transition: 'color var(--transition)',
              }}>
                {service.number}
              </span>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '22px',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                  color: hovered === service.id ? 'var(--text-primary)' : 'var(--text-primary)',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  maxWidth: '520px',
                  height: hovered === service.id ? 'auto' : 'auto',
                }}>
                  {service.description}
                </p>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px',
                  maxHeight: hovered === service.id ? '60px' : '0',
                  overflow: 'hidden',
                  opacity: hovered === service.id ? 1 : 0,
                  transition: 'all 0.3s ease',
                }}>
                  {service.stack.map(tech => (
                    <span key={tech} style={{
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      border: `1px solid ${service.color}33`,
                      color: service.color,
                      fontFamily: 'var(--font-display)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{
                width: '48px', height: '48px',
                borderRadius: '50%',
                border: `1px solid ${hovered === service.id ? service.color : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all var(--transition)',
                background: hovered === service.id ? `${service.color}11` : 'transparent',
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{
                  transform: hovered === service.id ? 'rotate(-45deg)' : 'none',
                  transition: 'transform var(--transition)',
                }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke={hovered === service.id ? service.color : 'var(--text-muted)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .service-row { grid-template-columns: 48px 1fr !important; }
          .service-row > :last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
