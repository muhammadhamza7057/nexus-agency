import { team } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div ref={ref} style={{ marginBottom: '80px', textAlign: 'center' }}>
          <p style={{
            fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
            textTransform: 'uppercase', fontFamily: 'var(--font-display)',
            marginBottom: '20px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            Our Team
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(30px)',
            transition: 'all 0.6s 0.1s ease',
          }}>
            Meet the creators<br />behind your vision.
          </h2>
          <p style={{
            maxWidth: '600px',
            margin: '0 auto',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            fontSize: '18px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'all 0.6s 0.2s ease',
          }}>
            A diverse team of designers, developers, and strategists united by one mission:
            turning ambitious ideas into exceptional digital experiences.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                padding: '32px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                position: 'relative',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(40px)',
                transition: `all 0.6s ${0.3 + index * 0.1}s ease`,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 20px 40px var(--accent-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Background gradient on hover */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, var(--accent-dim) 0%, transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
              }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                 onMouseLeave={(e) => e.currentTarget.style.opacity = '0'} />

              <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
              }}>
                {/* Profile Image */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--surface)',
                  margin: '0 auto 24px',
                  overflow: 'hidden',
                  border: '3px solid var(--border-light)',
                  transition: 'border-color 0.3s ease',
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=120&background=1a1a1a&color=f0ece4&font-size=0.6`;
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Name and Role */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}>
                  {member.role}
                </p>

                {/* Bio */}
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontSize: '16px',
                }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}