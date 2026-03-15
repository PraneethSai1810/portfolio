import { useState } from "react";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: "⬡",
    title: "REST API Architecture",
    desc: "Built production REST APIs with JWT authentication, centralized error handling, and async polling — achieving sub-second response times on non-ML endpoints across LegalSeg and SceneSolver.",
    accent: "rgba(99,102,241,0.7)",
  },
  {
    icon: "◈",
    title: "ML Inference Pipelines",
    desc: "Integrated HuggingFace Transformers for NLP and YOLOv8 + Vision Transformer for computer vision into async FastAPI/Node.js backends — handling end-to-end prediction from upload to structured storage.",
    accent: "rgba(139,92,246,0.7)",
  },
  {
    icon: "◫",
    title: "Full-Stack Systems",
    desc: "Shipped complete applications with React frontends, Node.js and FastAPI backends, and MongoDB persistence — deployed on Vercel and Render with environment-based configuration across frontend and backend.",
    accent: "rgba(99,102,241,0.7)",
  },
  {
    icon: "⬙",
    title: "Database Design",
    desc: "Modelled MongoDB schemas for legal document storage, ML prediction metadata, and user-linked querying — structured for efficient retrieval across multi-collection pipelines in production.",
    accent: "rgba(139,92,246,0.7)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function HighlightsSection() {
  return (
    <section
      id="highlights"
      style={{
        background: "transparent",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 300, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(139,92,246,0.8)",
            marginBottom: 12,
          }}>
            Core Strengths
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
            lineHeight: 1.1,
          }}>
            Engineering Highlights
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}>
          {HIGHLIGHTS.map((h, i) => (
            <HighlightCard key={h.title} item={h} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function HighlightCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        padding: "28px 24px",
        background: hovered ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(139,92,246,0.35)"
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: hovered
          ? "0 0 32px rgba(99,102,241,0.12), 0 8px 32px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: hovered
          ? `linear-gradient(90deg, transparent, ${item.accent}, transparent)`
          : "transparent",
        transition: "all 0.3s ease",
        borderRadius: "16px 16px 0 0",
      }} />
      <div style={{
        position: "absolute", top: -30, right: -30,
        width: 100, height: 100, borderRadius: "50%",
        background: `radial-gradient(circle, ${item.accent.replace("0.7", "0.12")} 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
      }} />
      <div style={{
        width: 40, height: 40,
        borderRadius: 10,
        background: "rgba(99,102,241,0.12)",
        border: "1px solid rgba(139,92,246,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.1rem",
        marginBottom: 18,
        color: "rgba(167,139,250,0.9)",
        transition: "all 0.3s ease",
        ...(hovered && {
          background: "rgba(99,102,241,0.2)",
          border: "1px solid rgba(139,92,246,0.4)",
          boxShadow: "0 0 16px rgba(99,102,241,0.2)",
        }),
      }}>
        {item.icon}
      </div>
      <h3 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: "0.95rem",
        letterSpacing: "-0.01em",
        color: "#f1f5f9",
        marginBottom: 10,
        lineHeight: 1.3,
      }}>
        {item.title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: "0.82rem",
        lineHeight: 1.75,
        color: "rgba(148,163,184,0.72)",
      }}>
        {item.desc}
      </p>
    </motion.div>
  );
}