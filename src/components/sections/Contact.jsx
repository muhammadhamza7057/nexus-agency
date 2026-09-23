import { useState } from 'react';

/* ─── tiny icon helpers ─────────────────────────────────────────── */
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" />
  </svg>
);
const IconCoin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v2m0 8v2M9.5 9.5C9.5 8.1 10.6 7 12 7s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
  </svg>
);
const IconMsg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const IconCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

/* ─── field wrapper ─────────────────────────────────────────────── */
function Field({ label, icon, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label style={{
        display: 'flex', alignItems: 'center', gap: '7px',
        fontSize: '12px', letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
      }}>
        <span style={{ color: 'var(--accent)', opacity: 0.8 }}>{icon}</span>
        {label}
      </label>
      {children}
    </div>
  );
}

/* ─── shared input style ────────────────────────────────────────── */
const baseInput = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '10px',
  padding: '15px 18px',
  color: 'var(--text-primary)',
  fontSize: '15px',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
  /* kill browser autofill chrome icon */
  WebkitTextFillColor: 'var(--text-primary)',
};

function useField() {
  const [focused, setFocused] = useState(false);
  const style = {
    ...baseInput,
    borderColor: focused ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
    boxShadow: focused ? '0 0 0 3px rgba(200,240,77,0.08)' : 'none',
    background: focused ? 'rgba(200,240,77,0.03)' : 'rgba(255,255,255,0.03)',
  };
  return { style, onFocus: () => setFocused(true), onBlur: () => setFocused(false) };
}

/* ─── budget pills ──────────────────────────────────────────────── */
const budgets = ['$5k – $10k', '$10k – $25k', '$25k – $50k', '$50k+'];

/* ─── main component ────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const nameField = useField();
  const emailField = useField();
  const msgField = useField();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.budget) e.budget = 'Pick a range';
    if (!form.message.trim()) e.message = 'Tell us something!';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '140px 0 120px' }}>
      <div className="container">

        {/* ── Big CTA banner ─────────────────────────────────────── */}
        <div style={{
          textAlign: 'center',
          marginBottom: '100px',
          padding: '90px 40px',
          borderRadius: '20px',
          border: '1px solid rgba(200,240,77,0.15)',
          background: 'linear-gradient(135deg, rgba(200,240,77,0.06) 0%, rgba(8,8,8,0) 60%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* decorative glow blobs */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px',
            background: 'radial-gradient(circle, rgba(200,240,77,0.12) 0%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', bottom: '-40px', left: '-40px', width: '240px', height: '240px',
            background: 'radial-gradient(circle, rgba(77,166,255,0.08) 0%, transparent 70%)',
            borderRadius: '50%', pointerEvents: 'none'
          }} />

          <p style={{
            fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)',
            textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginBottom: '24px'
          }}>
            Let's Build Together
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '32px',
          }}>
            Got an idea?<br /><span style={{ color: 'var(--accent)' }}>We're all ears.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Tell us about your project — we'll respond with a free proposal within 48 hours.
          </p>
          <a href="mailto:hello@nexus.studio" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '18px 48px', background: 'var(--accent)', color: '#080808',
            borderRadius: '8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(200,240,77,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <IconMail /> hello@nexus.studio
          </a>
        </div>

        {/* ── Form card ──────────────────────────────────────────── */}
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-0.03em', marginBottom: '12px',
            }}>
              Or fill out the form
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
              We read every message and reply within one business day.
            </p>
          </div>

          {submitted ? (
            /* ── success state ── */
            <div style={{
              textAlign: 'center', padding: '80px 40px',
              border: '1px solid rgba(200,240,77,0.25)',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(200,240,77,0.06), transparent)',
              animation: 'fadeUp 0.5s ease',
            }}>
              <div style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <IconCheck />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', marginBottom: '12px', color: 'var(--accent)' }}>
                Message Sent!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
                We'll be in touch within 48 hours. Check your inbox.
              </p>
            </div>
          ) : (
            /* ── form ── */
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: 'clamp(32px, 5vw, 56px)',
              backdropFilter: 'blur(12px)',
            }}>
              {/* suppress browser autofill styles globally for this block */}
              <style>{`
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus {
                  -webkit-box-shadow: 0 0 0 1000px #111 inset !important;
                  -webkit-text-fill-color: var(--text-primary) !important;
                  caret-color: var(--text-primary);
                }
                /* hide the native email suggestion icon */
                input[type="email"]::-webkit-contacts-auto-fill-button,
                input[type="email"]::-webkit-credentials-auto-fill-button {
                  visibility: hidden;
                  display: none !important;
                  pointer-events: none;
                }
                @media (max-width: 600px) { .form-row { flex-direction: column !important; } }
              `}</style>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

                {/* Row 1 — Name + Email */}
                <div className="form-row" style={{ display: 'flex', gap: '20px' }}>
                  {/* Name */}
                  <Field label="Your Name" icon={<IconUser />}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <input
                        type="text"
                        placeholder="Jack Doe"
                        autoComplete="off"
                        value={form.name}
                        onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                        style={{ ...nameField.style, paddingLeft: '18px' }}
                        onFocus={nameField.onFocus}
                        onBlur={nameField.onBlur}
                      />
                      {errors.name && <span style={errStyle}>{errors.name}</span>}
                    </div>
                  </Field>

                  {/* Email — custom styled, no browser icon */}
                  <Field label="Email Address" icon={<IconMail />}>
                    <div style={{ position: 'relative', flex: 1 }}>
                      <input
                        type="text"          /* type="text" kills browser email icon entirely */
                        inputMode="email"
                        placeholder="you@company.com"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        value={form.email}
                        onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                        style={{ ...emailField.style }}
                        onFocus={emailField.onFocus}
                        onBlur={emailField.onBlur}
                      />
                      {errors.email && <span style={errStyle}>{errors.email}</span>}
                    </div>
                  </Field>
                </div>

                {/* Row 2 — Budget pills */}
                <Field label="Budget Range" icon={<IconCoin />}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {budgets.map(b => (
                      <button key={b} onClick={() => { setForm({ ...form, budget: b }); setErrors({ ...errors, budget: '' }); }}
                        style={{
                          padding: '11px 22px',
                          borderRadius: '100px',
                          border: form.budget === b
                            ? '1px solid var(--accent)'
                            : '1px solid rgba(255,255,255,0.1)',
                          background: form.budget === b
                            ? 'rgba(200,240,77,0.12)'
                            : 'rgba(255,255,255,0.03)',
                          color: form.budget === b ? 'var(--accent)' : 'var(--text-secondary)',
                          fontFamily: 'var(--font-display)',
                          fontWeight: form.budget === b ? 700 : 400,
                          fontSize: '14px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.02em',
                        }}
                        onMouseEnter={e => { if (form.budget !== b) e.currentTarget.style.borderColor = 'rgba(200,240,77,0.4)'; }}
                        onMouseLeave={e => { if (form.budget !== b) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.budget && <span style={{ ...errStyle, position: 'static', marginTop: '-4px' }}>{errors.budget}</span>}
                </Field>

                {/* Row 3 — Message */}
                <Field label="Project Details" icon={<IconMsg />}>
                  <div style={{ position: 'relative' }}>
                    <textarea
                      placeholder="What are you building? What's the timeline? Any specific requirements?"
                      value={form.message}
                      onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                      rows={5}
                      style={{
                        ...msgField.style,
                        ...baseInput,
                        borderColor: msgField.style.borderColor,
                        boxShadow: msgField.style.boxShadow,
                        background: msgField.style.background,
                        resize: 'vertical',
                        minHeight: '150px',
                        lineHeight: 1.7,
                      }}
                      onFocus={msgField.onFocus}
                      onBlur={msgField.onBlur}
                    />
                    {/* live char count */}
                    <span style={{
                      position: 'absolute', bottom: '14px', right: '16px',
                      fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-display)',
                      pointerEvents: 'none',
                    }}>
                      {form.message.length}
                    </span>
                    {errors.message && <span style={errStyle}>{errors.message}</span>}
                  </div>
                </Field>

                {/* Submit */}
                <button onClick={handleSubmit} style={{
                  width: '100%',
                  padding: '20px',
                  background: 'var(--accent)',
                  color: '#080808',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '17px',
                  cursor: 'pointer',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.3s ease',
                  marginTop: '4px',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(200,240,77,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                  onMouseDown={e => { e.currentTarget.style.transform = 'translateY(0px)'; }}
                >
                  Send Message <IconArrow />
                </button>

                <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', marginTop: '-8px' }}>
                  No spam. We respond within 1 business day.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const errStyle = {
  position: 'absolute', bottom: '-20px', left: '4px',
  fontSize: '11px', color: '#ff6b6b',
  fontFamily: 'var(--font-display)',
};