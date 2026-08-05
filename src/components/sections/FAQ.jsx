import { useState } from 'react';
import { faqs } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" style={{
      padding: '120px 0',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="faq-layout">
          <div ref={ref}>
            <p style={{
              fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
              textTransform: 'uppercase', fontFamily: 'var(--font-display)',
              marginBottom: '20px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}>FAQ</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 56px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '24px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.6s 0.1s ease',
            }}>
              Questions?<br />
              <span style={{ color: 'var(--accent)' }}>Answered.</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.7,
              marginBottom: '40px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s 0.2s ease',
            }}>
              Still have questions? Reach out and we'll respond within 24 hours.
            </p>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius)',
              color: 'var(--accent)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'all var(--transition)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#080808'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
            >
              Contact Us
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                borderBottom: '1px solid var(--border)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateX(20px)',
                transition: `all 0.6s ${i * 0.08}s ease`,
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '28px 0',
                  textAlign: 'left',
                  gap: '16px',
                  color: open === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                  transition: 'color var(--transition)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '17px',
                    letterSpacing: '-0.01em',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    width: '28px', height: '28px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '18px',
                    color: open === i ? 'var(--accent)' : 'var(--text-muted)',
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    transition: 'all var(--transition)',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: open === i ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                }}>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    paddingBottom: '28px',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .faq-layout { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
