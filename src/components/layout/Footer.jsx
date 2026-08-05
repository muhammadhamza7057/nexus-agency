export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '60px 0 40px',
      background: 'var(--bg)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '60px',
        }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '28px', height: '28px',
                background: 'var(--accent)', borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#080808', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '14px' }}>N</span>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Nexus<span style={{ color: 'var(--accent)' }}>.</span></span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, maxWidth: '240px' }}>
              We build software that moves businesses forward. Based globally, delivering everywhere.
            </p>
          </div>

          {[
            { title: 'Services', links: ['Web Development', 'App Development', 'UI/UX Design', 'AI Integration', 'Digital Marketing'] },
            { title: 'Company', links: ['About', 'Careers', 'Blog', 'Case Studies', 'Press Kit'] },
            {
              title: 'Contact', links: [
                { label: 'codingexpert098@gmail.com', href: 'mailto:codingexpert098@gmail.com' },
                { label: '+92 342 7057124', href: 'tel:+923427057124' },
                { label: '+92 300 8925097', href: 'tel:+923008925097' },
                { label: 'Schedule a Call', href: '#contact' },
                { label: 'WhatsApp', href: 'https://wa.me/923427057124', target: '_blank', rel: 'noopener noreferrer' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
              ]
            },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '20px' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => {
                  const label = typeof link === 'string' ? link : link.label;
                  const href = typeof link === 'string' ? '#' : link.href;
                  const target = link && link.target ? link.target : undefined;
                  const rel = link && link.rel ? link.rel : undefined;
                  return (
                    <li key={label}>
                      <a href={href} target={target} rel={rel} style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color var(--transition)' }}
                        onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                      >{label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid var(--border)', paddingTop: '32px',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © {year} Nexus Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" style={{ fontSize: '13px', color: 'var(--text-muted)', transition: 'color var(--transition)' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-secondary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
