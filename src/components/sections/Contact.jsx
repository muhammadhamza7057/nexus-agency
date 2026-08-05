import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const inputBaseStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '14px 16px',
    color: 'var(--text-primary)',
    fontSize: '15px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color var(--transition)',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
  };

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" style={{ padding: '140px 0 120px' }}>
      <div className="container">
        {/* Big CTA */}
        <div style={{
          textAlign: 'center',
          marginBottom: '100px',
          padding: '80px 40px',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, rgba(200,240,77,0.04) 0%, rgba(8,8,8,0) 60%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(200,240,77,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          <p style={{
            fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
            textTransform: 'uppercase', fontFamily: 'var(--font-display)',
            marginBottom: '24px',
          }}>Let's Build Together</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 80px)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            marginBottom: '32px',
          }}>
            Got an idea?<br />
            <span style={{ color: 'var(--accent)' }}>We're all ears.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Tell us about your project and we'll come back with a free proposal within 48 hours.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=codingexpert098@gmail.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '18px 48px',
            background: 'var(--accent)',
            color: '#080808',
            borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '18px',
            transition: 'all var(--transition)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(200,240,77,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            codingexpert098@gmail.com
          </a>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '20px auto 8px', lineHeight: 1.6 }}>
            Want to schedule a call? Tell us your availability and we’ll arrange a time that works perfectly for you.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
            <a href="tel:+923427057124" style={{
              padding: '10px 18px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-primary)', borderRadius: '8px', textDecoration: 'none', fontWeight: 600
            }}>+92 342 7057124</a>

            <a href="tel:+923008925097" style={{
              padding: '10px 18px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-primary)', borderRadius: '8px', textDecoration: 'none', fontWeight: 600
            }}>+92 300 8925097</a>

            <a href="https://wa.me/923427057124" target="_blank" rel="noopener noreferrer" style={{
              padding: '10px 18px', background: 'var(--accent)', color: '#080808', borderRadius: '8px', textDecoration: 'none', fontWeight: 700
            }}>WhatsApp →</a>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={ref} style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '28px',
            textAlign: 'center',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}>
            Or fill out the form
          </h3>

          {submitted ? (
            <div style={{
              textAlign: 'center', padding: '60px',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(200,240,77,0.05)',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', marginBottom: '12px', color: 'var(--accent)' }}>
                Message Sent!
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>We'll be in touch within 48 hours.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'none' : 'translateY(20px)',
              transition: 'all 0.6s 0.1s ease',
            }} className="contact-form">
              {[
                { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', col: 1 },
                { key: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', col: 1 },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.04em' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key]}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    style={inputBaseStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  Budget Range
                </label>
                <select
                  value={form.budget}
                  onChange={e => setForm({ ...form, budget: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '14px 16px',
                    color: form.budget ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontSize: '15px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="" disabled>Select budget range</option>
                  <option value="5k">$500 – $10,000</option>
                  <option value="10k">$10,000 – $25,000</option>
                  <option value="25k">$25,000 – $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '0.04em' }}>
                  Tell us about your project
                </label>
                <textarea
                  placeholder="What are you building? What's the timeline? Any specific requirements?"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '14px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '15px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '140px',
                    transition: 'border-color var(--transition)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <button onClick={handleSubmit} style={{
                  width: '100%',
                  padding: '18px',
                  background: 'var(--accent)',
                  color: '#080808',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all var(--transition)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(200,240,77,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Send Message →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) { .contact-form { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
