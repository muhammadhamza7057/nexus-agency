import { useEffect, useState } from 'react';

const roles = ['Web Development', 'App Development', 'UI/UX Design', 'AI Integration'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,240,77,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,240,77,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gridGlow 4s ease-in-out infinite',
      }} />

      {/* Gradient orb */}
      <div style={{
        position: 'absolute',
        top: '20%', right: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(200,240,77,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%', left: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(77,166,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: '1px solid var(--border-light)',
          borderRadius: '100px', padding: '6px 16px',
          marginBottom: '48px',
          animation: 'fadeUp 0.6s ease forwards',
        }}>
         
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 7vw, 100px)',
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
          marginBottom: '32px',
          animation: 'fadeUp 0.6s 0.1s ease both',
        }}>
          We build<br />
          software<br />
          <span style={{ color: 'var(--accent)', position: 'relative' }}>that scales.</span>
        </h1>

        {/* Rotating role */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          marginBottom: '48px',
          animation: 'fadeUp 0.6s 0.2s ease both',
        }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Specializing in</span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '18px',
            color: 'var(--text-primary)',
            borderBottom: '2px solid var(--accent)',
            paddingBottom: '2px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.3s ease',
            minWidth: '220px',
          }}>
            {roles[roleIndex]}
          </span>
        </div>

        {/* Subtext */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'var(--text-secondary)',
          maxWidth: '560px',
          lineHeight: 1.7,
          marginBottom: '56px',
          animation: 'fadeUp 0.6s 0.3s ease both',
        }}>
          We're a software agency that turns ambitious ideas into production-ready products.
          Fast. Beautiful. Reliable.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          animation: 'fadeUp 0.6s 0.4s ease both',
        }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '16px 36px',
            background: 'var(--accent)',
            color: '#080808',
            borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '16px',
            transition: 'all var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(200,240,77,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '16px 36px',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '16px',
            color: 'var(--text-primary)',
            transition: 'all var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            View Services
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '48px', marginTop: '80px',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.6s 0.5s ease both',
        }}>
          {[
            { value: '120+', label: 'Projects Shipped' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '4yr', label: 'In Business' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
      </div>

    
    </section>
  );
}
