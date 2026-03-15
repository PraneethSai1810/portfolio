import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CERTS = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    color: "#818cf8",
    rgb: "99,102,241",
    links: [
      {
        label: "View Credential",
        href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B96853F2E3267D1F415FD3DD859F2EA5664661A312714A90FEAD53670365E002",
      },
    ],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    color: "#a78bfa",
    rgb: "139,92,246",
    links: [
      {
        label: "View Credential",
        href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4681A8335B9AF9F49D1877CA62A1B34A6D9D28F3CBBD507A7155CC798176438A",
      },
    ],
  },
  {
    title: "Generative AI Certificate",
    issuer: "KMCE Project School",
    year: "2025",
    color: "#818cf8",
    rgb: "99,102,241",
    links: [
      {
        label: "View Credential",
        href: "https://psapi.kmitonline.com/studentps/certificate/1a94acd4-a9ee-4548-a796-0ed640180b8b",
      },
    ],
  },
  {
    title: "TCS iON Career Edge — Young Professional",
    issuer: "TCS iON",
    year: "2024",
    color: "#818cf8",
    rgb: "99,102,241",
    links: [
      {
        label: "View Credential",
        href: "https://drive.google.com/file/d/18KG8qOPDc8s4phBFMlMNYa_gyjBwt-3A/view",
      },
    ],
  },
  {
    title: "JavaScript for Beginners",
    issuer: "Simplilearn",
    year: "2024",
    color: "#a78bfa",
    rgb: "139,92,246",
    links: [
      {
        label: "View Credential",
        href: "https://drive.google.com/file/d/1yXigsa9ZRoCeDB0DP9QcOz5zjL_f7tDo/view?usp=drive_link",
      },
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      style={{
        background: "transparent",
        padding: "80px 32px 88px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "20%", right: "15%",
        width: 340, height: 200, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)",
        filter: "blur(55px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.63rem",
            fontWeight: 600,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(139,92,246,0.72)",
            marginBottom: 10,
          }}>
            Achievements
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
            lineHeight: 1.1,
            margin: 0,
          }}>
            Certifications
          </h2>
        </motion.div>

        {/* ── Top rule ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.22), transparent)",
            transformOrigin: "center",
          }}
        />

        {/* ── Cert rows ── */}
        <div>
          {CERTS.map((cert, i) => (
            <CertRow
              key={cert.title}
              cert={cert}
              index={i}
              isLast={i === CERTS.length - 1}
            />
          ))}
        </div>
        {/* Google Cloud badges note */}
<motion.p
  initial={{ opacity: 0, y: 8 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1.2rem",
    fontWeight: 300,
    color: "rgba(148,163,184,0.5)",
    padding: "14px 0 4px",
    margin: 0,
  }}
>
  + 5 Google Cloud skill badges —{" "}
  <span style={{ color: "rgba(148,163,184,0.65)" }}>
    Generative AI, Large Language Models, Responsible AI, Prompt Design in Vertex AI
  </span>
</motion.p>

        {/* ── Bottom rule ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.18), transparent)",
            transformOrigin: "center",
          }}
        />

      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 600px) {
          .cert-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .cert-links {
            align-self: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}

function CertRow({ cert, index, isLast }) {
  return (
    <motion.div
      className="cert-row"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "22px 0",
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Left — title + issuer */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.92rem",
          color: "#f1f5f9",
          margin: "0 0 4px",
          lineHeight: 1.3,
        }}>
          {cert.title}
        </p>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.62rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          color: cert.color,
          opacity: 0.75,
          margin: 0,
        }}>
          {cert.issuer} · {cert.year}
        </p>
      </div>

      {/* Right — credential buttons */}
      <div
        className="cert-links"
        style={{
          display: "flex",
          gap: 8,
          flexShrink: 0,
          flexWrap: "wrap",
        }}
      >
        {cert.links.map((link) => (
          <CredentialButton key={link.href} link={link} cert={cert} />
        ))}
      </div>
    </motion.div>
  );
}

function CredentialButton({ link, cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -1, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 20 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        borderRadius: 999,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.75rem",
        fontWeight: 500,
        textDecoration: "none",
        letterSpacing: "0.01em",
        transition: "all 0.2s ease",
        background: hovered
          ? `rgba(${cert.rgb},0.16)`
          : `rgba(${cert.rgb},0.07)`,
        border: hovered
          ? `1px solid rgba(${cert.rgb},0.55)`
          : `1px solid rgba(${cert.rgb},0.25)`,
        color: hovered ? cert.color : "rgba(203,213,225,0.7)",
        boxShadow: hovered
          ? `0 0 12px rgba(${cert.rgb},0.15)`
          : "none",
      }}
    >
      <FaExternalLinkAlt size={10} />
      {link.label}
    </motion.a>
  );
}