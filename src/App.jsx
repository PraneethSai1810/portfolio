import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import HighlightsSection from "./sections/HighlightsSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <div style={{ position: "relative", background: "#050507" }}>

      {/* ── Fixed aurora — stays put, sections scroll over it ── */}
      <FixedAurora />

      {/* ── All content sits above the aurora ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar visible={heroReady} />
        <HeroSection onReady={() => setHeroReady(true)} />
        <HighlightsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>

    </div>
  );
}

function FixedAurora() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId, t = 0;

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
      const W = canvas.width, H = canvas.height;
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
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>

      {/* Aurora canvas */}
      <canvas ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

      {/* Dot grid */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
  style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
  <defs>
    <pattern id="app-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(139,92,246,0.35)" />
    </pattern>
    <radialGradient id="app-dotmask-grad" cx="50%" cy="50%" r="55%">
      <stop offset="0%"   stopColor="black" />
      <stop offset="35%"  stopColor="black" />
      <stop offset="100%" stopColor="white" />
    </radialGradient>
    <mask id="app-dotmask">
      <rect width="100%" height="100%" fill="url(#app-dotmask-grad)" />
    </mask>
  </defs>
  <rect width="100%" height="100%" fill="url(#app-dots)" mask="url(#app-dotmask)" />
</svg>

      {/* Noise grain */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, opacity: 0.04, mixBlendMode: "overlay" }}>
        <filter id="app-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#app-noise)" />
      </svg>

      {/* Vignette — dark edges, focused centre, same as hero. Applies to entire page */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse 85% 75% at 50% 50%,
          transparent 30%, rgba(5,5,7,0.5) 65%, rgba(5,5,7,0.92) 100%)`,
        pointerEvents: "none",
      }} />

      {/* Top/bottom edge darkening */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to bottom,
          rgba(5,5,7,0.55) 0%, transparent 15%, transparent 85%, rgba(5,5,7,0.55) 100%)`,
        pointerEvents: "none",
      }} />

    </div>
  );
}