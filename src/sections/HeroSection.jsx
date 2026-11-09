import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileAlt, FaDownload } from "react-icons/fa";

function useCursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return pos;
}

export default function HeroSection({ onReady }) {
  const [stage, setStage] = useState(0);
  const ran = useRef(false);
  const cursor = useCursorGlow();

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    setTimeout(() => setStage(1), 300);
    setTimeout(() => setStage(2), 1200);
    setTimeout(() => setStage(3), 2800);
    setTimeout(() => { setStage(4); onReady?.(); }, 3600);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white overflow-hidden relative">

      {/* Cursor glow */}
      <div style={{
        position: "fixed",
        left: cursor.x, top: cursor.y,
        width: 480, height: 480,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
        zIndex: 1,
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }} />

      <AuroraBackground />

      {/* ── INTRO ── */}
      <AnimatePresence>
        {stage < 4 && (
          <motion.div
            key="intro"
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-center">
              <motion.span
                className="whitespace-nowrap select-none"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  stage >= 2
                    ? { opacity: stage >= 3 ? 0 : 1, x: stage >= 3 ? -100 : -20 }
                    : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em",
                  color: "#f1f5f9", paddingRight: "0.5rem",
                }}
              >Ajjarapu</motion.span>

              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={
                  stage >= 1
                    ? { opacity: stage >= 3 ? 0 : 1, scale: stage >= 3 ? 0.7 : 1 }
                    : { opacity: 0, scale: 0.4 }
                }
                transition={{ duration: 0.7, ease: [0.34, 1.2, 0.64, 1] }}
                style={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}
              >
                <style>{`
                  @keyframes pspin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  .ps-spin { animation:pspin 1.6s linear infinite; transform-box:fill-box; transform-origin:center; }
                  @keyframes shine {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                  }
                  .text-shine {
                    background: linear-gradient(105deg, #f1f5f9 40%, rgba(255,255,255,0.95) 45%, rgba(200,210,255,1) 50%, rgba(255,255,255,0.95) 55%, #f1f5f9 60%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shine 4.5s linear infinite;
                    animation-delay: 1.5s;
                  }
                `}</style>
                <svg width="80" height="80" viewBox="0 0 80 80"
                  style={{ position:"absolute", top:0, left:0 }} className="ps-spin">
                  <defs>
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="rgba(139,92,246,0)" />
                      <stop offset="60%"  stopColor="rgba(139,92,246,0.8)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,1)" />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="36" fill="none"
                    stroke="url(#arcGrad)" strokeWidth="2.5"
                    strokeLinecap="round" strokeDasharray="75 151" />
                </svg>
                <div style={{ position:"absolute", inset:-10, borderRadius:"50%",
                  background:"radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
                  filter:"blur(10px)" }} />
                <div style={{ position:"absolute", inset:5, borderRadius:"50%",
                  background:"linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #1e1b4b 100%)",
                  boxShadow:"0 0 0 1px rgba(139,92,246,0.5), 0 8px 30px rgba(99,102,241,0.4)",
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontFamily:"'Playfair Display', serif",
                    fontSize:"1.35rem", fontWeight:700, letterSpacing:"0.06em",
                    color:"#fff", userSelect:"none" }}>PS</span>
                </div>
              </motion.div>

              <motion.span
                className="whitespace-nowrap select-none"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  stage >= 2
                    ? { opacity: stage >= 3 ? 0 : 1, x: stage >= 3 ? 100 : 20 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily:"'Playfair Display', serif", fontWeight:700,
                  fontSize:"clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing:"-0.02em",
                  color:"#f1f5f9", paddingLeft:"0.5rem",
                }}
              >Praneeth Sai</motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <AnimatePresence>
        {stage >= 4 && (
          <motion.div key="hero"
            className="relative flex flex-col items-center gap-5 px-6 text-center"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="whitespace-nowrap text-shine"
              style={{ fontFamily:"'Playfair Display', serif", fontWeight:700,
                fontSize:"clamp(2.4rem, 6vw, 4.5rem)", letterSpacing:"-0.02em", lineHeight:1 }}
            >Ajjarapu Praneeth Sai</motion.h1>

            {/* ── UPDATED: more specific title ── */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily:"'DM Mono', monospace", fontSize:"0.9rem", fontWeight:600,
                letterSpacing:"0.32em", textTransform:"uppercase",
                background:"linear-gradient(90deg, rgba(139,92,246,0.9), rgba(99,102,241,1), rgba(167,139,250,0.85))",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}
            >Full Stack Developer · NLP & Vision AI</motion.p>

            {/* ── UPDATED: concrete bio with real achievements ── */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily:"'DM Sans', sans-serif", fontWeight:300, fontSize:"0.95rem",
                lineHeight:1.8, color:"rgba(148,163,184,0.78)", maxWidth:"50ch" }}
            >
              Final-year CS undergrad at KMCE, Hyderabad (2027). I build full-stack applications, backend systems, and AI-powered solutions, from REST APIs and database-driven apps to NLP and computer vision pipelines.
            </motion.p>

            {/* ── UPDATED: added Resume button ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex gap-3 mt-1 flex-wrap justify-center"
            >
              <PremiumButton href="https://github.com/PraneethSai1810"
                icon={<FaGithub size={14} />} label="GitHub" variant="ghost" />
              <PremiumButton href="https://linkedin.com/in/praneethsai1810"
                icon={<FaLinkedin size={14} />} label="LinkedIn" variant="filled" />
              <PremiumButton href="/AjjarapuPraneeth_Resume.pdf"
  icon={<FaFileAlt size={14} />} label="Resume" variant="ghost" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PremiumButton({ href, icon, label, variant, download }) {
  const isGhost = variant === "ghost";
  return (
    <motion.a href={href} target={download ? "_self" : "_blank"} rel="noreferrer"
      download={download || undefined}
      whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
      style={{
        background: isGhost ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.18)",
        border: isGhost ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(139,92,246,0.38)",
        color: isGhost ? "rgba(241,245,249,0.88)" : "rgba(241,245,249,0.94)",
        fontFamily:"'DM Sans', sans-serif", letterSpacing:"0.02em",
        textDecoration:"none",
        transition:"background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = isGhost ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.30)";
        e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
        e.currentTarget.style.boxShadow = isGhost ? "0 0 18px rgba(99,102,241,0.18)" : "0 0 24px rgba(139,92,246,0.28)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = isGhost ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.18)";
        e.currentTarget.style.borderColor = isGhost ? "rgba(255,255,255,0.1)" : "rgba(139,92,246,0.38)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >{icon} {label}</motion.a>
  );
}

function AuroraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const setSize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const orbs = [
      { cx:0.20, cy:0.25, rx:0.20, ry:0.15, sx:0.0006, sy:0.0008, px:0.0, py:0.0, r:0.60, rgb:[79,  70, 229] },
      { cx:0.75, cy:0.70, rx:0.18, ry:0.18, sx:0.0008, sy:0.0005, px:1.3, py:0.9, r:0.65, rgb:[139, 92, 246] },
      { cx:0.50, cy:0.15, rx:0.14, ry:0.20, sx:0.0005, sy:0.0010, px:2.5, py:1.7, r:0.48, rgb:[99, 102, 241] },
      { cx:0.10, cy:0.80, rx:0.13, ry:0.18, sx:0.0010, sy:0.0006, px:0.7, py:2.2, r:0.42, rgb:[167,139, 250] },
      { cx:0.85, cy:0.20, rx:0.15, ry:0.14, sx:0.0007, sy:0.0009, px:3.2, py:0.5, r:0.52, rgb:[55,  48, 163] },
      { cx:0.60, cy:0.85, rx:0.13, ry:0.11, sx:0.0009, sy:0.0007, px:1.9, py:2.9, r:0.40, rgb:[109, 40, 217] },
    ];

    const draw = () => {
      t++;
      const W = canvas.width;
      const H = canvas.height;
      ctx.fillStyle = "#050507";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "screen";
      orbs.forEach(o => {
        const x = (o.cx + Math.sin(t * o.sx + o.px) * o.rx) * W;
        const y = (o.cy + Math.cos(t * o.sy + o.py) * o.ry) * H;
        const r = o.r * Math.min(W, H);
        const [R, G, B] = o.rgb;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0,   `rgba(${R},${G},${B},0.30)`);
        g.addColorStop(0.5, `rgba(${R},${G},${B},0.10)`);
        g.addColorStop(1,   `rgba(${R},${G},${B},0)`);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef}
        style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} />
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
        style={{ position:"absolute", inset:0, opacity:0.5 }}>
        <defs>
          <pattern id="dotgrid2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(139,92,246,0.35)" />
          </pattern>
          <radialGradient id="dotmask2" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="black" />
            <stop offset="35%"  stopColor="black" />
            <stop offset="100%" stopColor="white" />
          </radialGradient>
          <mask id="gridmask2">
            <rect width="100%" height="100%" fill="url(#dotmask2)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid2)" mask="url(#gridmask2)" />
      </svg>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
        style={{ position:"absolute", inset:0, opacity:0.045, mixBlendMode:"overlay" }}>
        <filter id="noise2">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise2)" />
      </svg>
      <div style={{
        position:"absolute", inset:0,
        background:`radial-gradient(ellipse 80% 70% at 50% 50%,
          transparent 35%, rgba(5,5,7,0.45) 70%, rgba(5,5,7,0.85) 100%)`,
      }} />
      <div style={{
        position:"absolute", inset:0,
        background:`linear-gradient(to bottom,
          rgba(5,5,7,0.5) 0%, transparent 18%, transparent 82%, rgba(5,5,7,0.5) 100%)`,
      }} />
    </div>
  );
}