import { useState } from "react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    color: "#818cf8",
    rgb: "99,102,241",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    label: "Backend",
    color: "#a78bfa",
    rgb: "139,92,246",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT", "Python", "Java"],
  },
  {
    label: "Database",
    color: "#818cf8",
    rgb: "99,102,241",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "AI / ML",
    color: "#c4b5fd",
    rgb: "167,139,250",
    skills: ["HuggingFace", "Transformers", "YOLOv8", "PyTorch", "NLP", "Computer Vision"],
  },
  {
    label: "Tools",
    color: "#a78bfa",
    rgb: "139,92,246",
    skills: ["Git", "GitHub", "Vercel", "Render"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        background: "transparent",
        padding: "96px 32px 108px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "20%", left: "15%",
        width: 380, height: 220, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "10%",
        width: 320, height: 180, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.035) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <style>{`
        @keyframes sweep {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @media (max-width: 600px) {
          .skills-row-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
            padding: 20px 0 !important;
          }
          .skills-vline { display: none !important; }
          .skills-row-grid > div:first-child {
            text-align: left !important;
            padding-right: 0 !important;
            width: 100% !important;
          }
          .skills-pills {
            justify-content: flex-start !important;
            width: 100% !important;
          }
          .skills-pills span {
            font-size: 0.68rem !important;
            padding: 3px 10px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>

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
            Technologies
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
            Skills
          </h2>
        </motion.div>

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

        <div>
          {SKILL_GROUPS.map((group, gi) => (
            <SkillRow
              key={group.label}
              group={group}
              index={gi}
              isLast={gi === SKILL_GROUPS.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.18), transparent)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}

function SkillRow({ group, index, isLast }) {
  return (
    <motion.div
      className="skills-row-grid"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1px 1fr",
        alignItems: "center",
        gap: "0 26px",
        padding: "20px 0",
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ textAlign: "right", paddingRight: 4 }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.98rem",
          fontWeight: 700,
          letterSpacing: "0.01em",
          color: group.color,
        }}>
          {group.label}
        </span>
      </div>

      <div
        className="skills-vline"
        style={{
          width: 1,
          height: 26,
          background: `linear-gradient(to bottom, transparent, rgba(${group.rgb},0.45), transparent)`,
          justifySelf: "center",
        }}
      />

      <motion.div
        className="skills-pills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: index * 0.07 + 0.1,
            },
          },
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
          alignItems: "center",
        }}
      >
        {group.skills.map((skill) => (
          <SkillPill key={skill} skill={skill} group={group} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function SkillPill({ skill, group }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, scale: 0.86, y: 5 },
        visible: {
          opacity: 1, scale: 1, y: 0,
          transition: { duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      whileHover={{
        y: -2,
        scale: 1.03,
        transition: { type: "spring", stiffness: 420, damping: 22 },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 14px",
        borderRadius: 999,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "0.8rem",
        letterSpacing: "0.015em",
        cursor: "default",
        userSelect: "none",
        overflow: "hidden",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, background 0.2s ease",
        background: hovered
          ? `linear-gradient(105deg,
              rgba(${group.rgb},0.08) 0%,
              rgba(${group.rgb},0.18) 40%,
              rgba(255,255,255,0.06) 50%,
              rgba(${group.rgb},0.18) 60%,
              rgba(${group.rgb},0.08) 100%)`
          : `rgba(${group.rgb},0.065)`,
        backgroundSize: "200% auto",
        animation: hovered ? "sweep 1.4s linear infinite" : "none",
        border: hovered
          ? `1px solid rgba(${group.rgb},0.65)`
          : `1px solid rgba(${group.rgb},0.28)`,
        color: hovered ? group.color : "rgba(203,213,225,0.68)",
        boxShadow: hovered
          ? `0 0 14px rgba(${group.rgb},0.18), 0 2px 8px rgba(0,0,0,0.22)`
          : "none",
      }}
    >
      {skill}
    </motion.span>
  );
}