export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/923427057124"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1200,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 18px 14px 14px',
        borderRadius: '999px',
        background: '#25D366',
        color: '#ffffff',
        textDecoration: 'none',
        boxShadow: '0 16px 40px rgba(37, 211, 102, 0.35)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '0.02em',
        border: '1px solid rgba(255,255,255,0.12)',
        transition: 'transform var(--transition), box-shadow var(--transition)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(37, 211, 102, 0.42)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(37, 211, 102, 0.35)';
      }}
    >
      <span style={{
        width: '34px',
        height: '34px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true" focusable="false" fill="currentColor">
          <path d="M19.1 17.4c-.3-.2-1.7-.9-2-.9-.3 0-.5-.2-.7.2-.2.3-.8.9-1 .1-.2-.3-.2-.7-.4-1-.1-.2-.2-.4-.4-.6-.1-.2-.3-.3-.2-.5.1-.2.3-.4.4-.6.1-.2.1-.3.2-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-1-2.1-.3-.5-.6-.4-.8-.4h-.7c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 2s.9 2.4 1 2.6c.1.2 1.8 2.8 4.3 3.8.6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.2.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3zM16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.6 6.4L3 29l6.8-1.6c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-4-.5-5.7-1.4l-.4-.2-4 .9.9-3.9-.2-.4c-1-1.8-1.5-3.8-1.5-5.8 0-6.1 5-11.1 11.1-11.1S27.1 9 27.1 15.1 22.1 26.7 16 26.7z" />
        </svg>
      </span>
      <span className="whatsapp-label">WhatsApp</span>

      <style>{`
        @media (max-width: 600px) {
          .whatsapp-label {
            display: none;
          }
          a[aria-label="Chat on WhatsApp"] {
            right: 16px !important;
            bottom: 16px !important;
            padding: 12px !important;
          }
        }
      `}</style>
    </a>
  );
}
