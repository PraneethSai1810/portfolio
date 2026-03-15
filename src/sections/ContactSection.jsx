import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_1vexd6v";
const TEMPLATE_ID = "template_dwdn0fm";
const PUBLIC_KEY  = "Nk5s-wKFvzKazd_xK";

const CONTACT_CARDS = [
  {
    icon: <FaEnvelope size={15} />,
    label: "Email",
    value: "praneethsaiajjarapu@gmail.com",
    href: "mailto:praneethsaiajjarapu@gmail.com",
    rgb: "99,102,241",
    color: "#818cf8",
  },
  {
    icon: <FaLinkedin size={15} />,
    label: "LinkedIn",
    value: "linkedin.com/in/praneethsai1810",
    href: "https://www.linkedin.com/in/praneethsai1810/",
    rgb: "139,92,246",
    color: "#a78bfa",
  },
  {
    icon: <FaGithub size={15} />,
    label: "GitHub",
    value: "github.com/PraneethSai1810",
    href: "https://github.com/PraneethSai1810",
    rgb: "99,102,241",
    color: "#818cf8",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ContactSection() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setError(false);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setSending(false);
  };

  return (
    <section
      id="contact"
      style={{
        background: "transparent",
        padding: "96px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "8%", left: "12%",
        width: 340, height: 200, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)",
        filter: "blur(55px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "18%", right: "10%",
        width: 300, height: 180, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.035) 0%, transparent 70%)",
        filter: "blur(48px)", pointerEvents: "none",
      }} />

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 760px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        .contact-input {
          width: 100%;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: #f1f5f9;
          box-sizing: border-box;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }
        .contact-input::placeholder { color: rgba(148,163,184,0.32); }
        .contact-input:focus {
          border-color: rgba(139,92,246,0.55) !important;
          background: rgba(99,102,241,0.07) !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.09), 0 0 14px rgba(99,102,241,0.1) !important;
        }
      `}</style>

      <div style={{ maxWidth: 980, margin: "0 auto", position: "relative" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.63rem", fontWeight: 600,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "rgba(139,92,246,0.75)", marginBottom: 10,
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.02em",
            color: "#f1f5f9", lineHeight: 1.1, margin: "0 0 16px",
          }}>
            Contact
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.92rem",
            lineHeight: 1.8, color: "rgba(148,163,184,0.70)",
            maxWidth: "58ch", margin: "0 auto 10px",
          }}>
            I'm currently open to internship opportunities and engineering
            collaborations. If you'd like to discuss a project, opportunity,
            or just connect, feel free to reach out.
          </p>
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(139,92,246,0.7)",
          }}>
            ✦ Available for Summer 2026 Internships
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="contact-grid">

          {/* LEFT — info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CONTACT_CARDS.map((card, i) => (
              <ContactCard key={card.label} card={card} index={i} />
            ))}
          </div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              borderRadius: 18, padding: "28px 26px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

              <Field label="Name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange}
                focused={focused === "name"} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />

              <Field label="Email" name="email" type="email" placeholder="your@email.com"
                value={form.email} onChange={handleChange}
                focused={focused === "email"} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />

              <Field label="Message" name="message" type="textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange} rows={5}
                focused={focused === "message"} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />

              {/* Success message */}
              {sent && (
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
                  color: "rgba(139,92,246,0.9)", textAlign: "center",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  borderRadius: 10, padding: "10px 14px", margin: 0,
                }}>
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}

              {/* Error message */}
              {error && (
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
                  color: "rgba(248,113,113,0.9)", textAlign: "center",
                  background: "rgba(248,113,113,0.06)",
                  border: "1px solid rgba(248,113,113,0.2)",
                  borderRadius: 10, padding: "10px 14px", margin: 0,
                }}>
                  Something went wrong. Please try again or email directly.
                </p>
              )}

              <SendButton onClick={handleSubmit} sending={sending} sent={sent} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactCard({ card, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={card.href} target="_blank" rel="noreferrer"
      custom={index} initial="hidden" whileInView="visible"
      viewport={{ once: true, margin: "-20px" }} variants={fadeUp}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 14,
        borderRadius: 13, padding: "14px 16px",
        background: hovered ? `rgba(${card.rgb},0.08)` : "rgba(255,255,255,0.03)",
        border: hovered ? `1px solid rgba(${card.rgb},0.38)` : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        boxShadow: hovered
          ? `0 0 22px rgba(${card.rgb},0.1), 0 4px 18px rgba(0,0,0,0.22)`
          : "0 2px 12px rgba(0,0,0,0.15)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease", textDecoration: "none",
        cursor: "pointer", position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: hovered
          ? `linear-gradient(90deg, transparent, rgba(${card.rgb},0.65), transparent)`
          : "transparent",
        transition: "all 0.25s ease", borderRadius: "13px 13px 0 0",
      }} />
      <div style={{
        width: 34, height: 34, borderRadius: 9, flexShrink: 0,
        background: hovered ? `rgba(${card.rgb},0.18)` : `rgba(${card.rgb},0.1)`,
        border: hovered ? `1px solid rgba(${card.rgb},0.4)` : `1px solid rgba(${card.rgb},0.2)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: card.color,
        boxShadow: hovered ? `0 0 12px rgba(${card.rgb},0.2)` : "none",
        transition: "all 0.25s ease",
      }}>
        {card.icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", fontWeight: 600,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: card.color, opacity: 0.8, margin: "0 0 2px",
        }}>{card.label}</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 400,
          color: hovered ? "#f1f5f9" : "rgba(203,213,225,0.70)",
          margin: 0, transition: "color 0.2s ease",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{card.value}</p>
      </div>
    </motion.a>
  );
}

function Field({ label, name, type, placeholder, value, onChange, focused, onFocus, onBlur, rows }) {
  const inputStyle = {
    padding: type === "textarea" ? "11px 13px" : "10px 13px",
    background: focused ? "rgba(99,102,241,0.06)" : "rgba(255,255,255,0.04)",
    border: focused ? "1px solid rgba(139,92,246,0.55)" : "1px solid rgba(255,255,255,0.09)",
    resize: type === "textarea" ? "vertical" : undefined,
  };
  return (
    <div>
      <label style={{
        display: "block", fontFamily: "'DM Mono', monospace",
        fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "rgba(139,92,246,0.72)", marginBottom: 7,
      }}>{label}</label>
      {type === "textarea" ? (
        <textarea className="contact-input" name={name} placeholder={placeholder}
          value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
          rows={rows || 5} style={inputStyle} />
      ) : (
        <input className="contact-input" type={type} name={name} placeholder={placeholder}
          value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
          style={inputStyle} />
      )}
    </div>
  );
}

function SendButton({ onClick, sending, sent }) {
  const [hovered, setHovered] = useState(false);
  const label = sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message";

  return (
    <motion.button
      onClick={onClick}
      disabled={sending || sent}
      whileHover={{ scale: sending || sent ? 1 : 1.03, y: sending || sent ? 0 : -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 340, damping: 18 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        padding: "10px 28px",
        borderRadius: 999,
        border: sent
          ? "1px solid rgba(139,92,246,0.5)"
          : hovered
          ? "1px solid rgba(139,92,246,0.6)"
          : "1px solid rgba(139,92,246,0.38)",
        background: sent
          ? "rgba(99,102,241,0.22)"
          : hovered
          ? "rgba(99,102,241,0.28)"
          : "rgba(99,102,241,0.16)",
        color: "rgba(241,245,249,0.94)",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.03em",
        cursor: sending || sent ? "default" : "pointer",
        transition: "background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
        boxShadow: hovered && !sent
          ? "0 0 20px rgba(139,92,246,0.25), 0 4px 14px rgba(0,0,0,0.18)"
          : "0 2px 8px rgba(0,0,0,0.12)",
      }}
    >
      {label}
    </motion.button>
  );
}