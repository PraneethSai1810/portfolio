import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ background: "transparent", padding: "80px 24px", position: "relative", overflow: "hidden" }}
    >
      {/* bg glow */}
      <div style={{
        position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 260, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(139,92,246,0.8)", marginBottom: 12,
          }}>Selected Work</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.02em",
            color: "#f1f5f9", lineHeight: 1.1,
          }}>Projects</h2>
        </motion.div>

        {/* 3-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              style={{ display: "flex" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        background: hovered ? "rgba(99,102,241,0.07)" : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(139,92,246,0.38)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? "0 0 36px rgba(99,102,241,0.12), 0 10px 36px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.22)",
        transition: "all 0.32s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        position: "relative",
      }}
    >
      {/* Top accent on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 2,
        background: hovered
          ? "linear-gradient(90deg, transparent, rgba(139,92,246,0.75), transparent)"
          : "transparent",
        transition: "all 0.32s ease",
      }} />

      {/* 16:9 image container */}
      <div style={{
        position: "relative",
        width: "100%",
        paddingTop: "56.25%", // 16:9
        overflow: "hidden",
        background: "rgba(99,102,241,0.08)",
        flexShrink: 0,
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s ease",
            display: "block",
          }}
        />
        {/* gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(5,5,7,0.08) 0%, rgba(5,5,7,0.52) 100%)",
        }} />
        {/* badge */}
        <div style={{
          position: "absolute", top: 12, left: 12,
          padding: "3px 10px", borderRadius: 999,
          background: "rgba(5,5,7,0.75)",
          backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(139,92,246,0.32)",
          fontFamily: "'DM Mono', monospace", fontSize: "0.6rem",
          fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
          color: "rgba(167,139,250,0.95)",
        }}>{project.badge}</div>
      </div>

      {/* Body */}
      <div style={{
        padding: "20px 20px 22px",
        display: "flex", flexDirection: "column", flex: 1, gap: 10,
      }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: "1.05rem", letterSpacing: "-0.01em",
          color: "#f1f5f9", lineHeight: 1.2, margin: 0,
        }}>{project.title}</h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
          fontSize: "0.8rem", lineHeight: 1.72,
          color: "rgba(148,163,184,0.72)", margin: 0, flex: 1,
        }}>{project.description}</p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "2px 9px", borderRadius: 999,
              fontSize: "0.65rem", fontWeight: 500,
              fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em",
              color: "rgba(139,92,246,0.9)",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(139,92,246,0.18)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          <CardButton href={project.github} icon={<FaGithub size={12} />} label="GitHub" ghost />
          {project.live && (
  <CardButton href={project.live} icon={<FaExternalLinkAlt size={10} />} label="Live Demo" />
)}
        </div>
      </div>
    </div>
  );
}

function CardButton({ href, icon, label, ghost }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        padding: "6px 14px", borderRadius: 999,
        fontSize: "0.73rem", fontWeight: 500,
        fontFamily: "'DM Sans', sans-serif", textDecoration: "none",
        transition: "all 0.2s ease",
        background: ghost
          ? hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"
          : hovered ? "rgba(99,102,241,0.30)" : "rgba(99,102,241,0.16)",
        border: ghost
          ? hovered ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.1)"
          : hovered ? "1px solid rgba(139,92,246,0.55)" : "1px solid rgba(139,92,246,0.28)",
        color: hovered ? "#fff" : "rgba(226,232,240,0.82)",
        boxShadow: hovered && !ghost ? "0 0 14px rgba(99,102,241,0.2)" : "none",
      }}
    >{icon} {label}</a>
  );
}