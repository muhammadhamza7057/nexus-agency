import { useState, useEffect } from 'react';
import { contactConfig } from '../../data/siteData';

export default function CalendlyEmbed({ url = contactConfig.calendlyUrl }) {
  const [loading, setLoading] = useState(true);

  // Append dark mode parameters matching our palette
  const darkCalendlyUrl = (() => {
    try {
      const parsed = new URL(url);
      parsed.searchParams.set('hide_landing_page_details', '1');
      parsed.searchParams.set('hide_gdpr_banner', '1');
      parsed.searchParams.set('background_color', '080808');
      parsed.searchParams.set('text_color', 'f0ece4');
      parsed.searchParams.set('primary_color', 'c8f04d');
      return parsed.toString();
    } catch {
      return `${url}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=080808&text_color=f0ece4&primary_color=c8f04d`;
    }
  })();

  useEffect(() => {
    // Optionally load Calendly widget script if needed
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '20px',
      padding: 'clamp(20px, 3vw, 36px)',
      backdropFilter: 'blur(12px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Calendar Header info */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        paddingBottom: '24px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        marginBottom: '20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'rgba(200,240,77,0.12)', border: '1px solid rgba(200,240,77,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--accent)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)' }}>
              30-Minute Discovery Call
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              1-on-1 strategy & technical consultation
            </div>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            color: 'var(--accent)',
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            background: 'rgba(200,240,77,0.06)',
            border: '1px solid rgba(200,240,77,0.2)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,240,77,0.14)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,240,77,0.06)'; }}
        >
          Open in New Window
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div style={{
          minHeight: '650px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          color: 'var(--text-secondary)',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(200,240,77,0.15)',
            borderTopColor: 'var(--accent)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <span style={{ fontSize: '14px', fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
            Loading calendar slots...
          </span>
        </div>
      )}

      {/* Calendly iFrame Embed */}
      <iframe
        src={darkCalendlyUrl}
        width="100%"
        height="680"
        frameBorder="0"
        title="Schedule a Call"
        onLoad={() => setLoading(false)}
        style={{
          borderRadius: '12px',
          display: loading ? 'none' : 'block',
          border: 'none',
          minHeight: '680px',
        }}
      />
    </div>
  );
}
