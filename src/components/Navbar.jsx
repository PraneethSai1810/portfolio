import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home",        href: "home"        },
  { label: "Highlights", href: "highlights" },
  { label: "Projects",    href: "projects"    },
  { label: "Skills",      href: "skills"      },
  { label: "Contact",     href: "contact"     },
];

export default function Navbar({ visible }) {
  const [active, setActive]     = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  /* track active section on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        for (let i = LINKS.length - 1; i >= 0; i--) {
          const el = document.getElementById(LINKS[i].href);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActive(LINKS[i].href);
            break;
          }
        }
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="navbar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "fixed",
            top: 14,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 100,
            pointerEvents: "none", // let clicks pass through the wrapper
          }}
        >
          {/* The pill itself */}
          <div
            style={{
              pointerEvents: "all",
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              padding: "5px 6px",
              borderRadius: 999,
              background: scrolled ? "rgba(20,18,40,0.88)" : "rgba(20,18,40,0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(139,92,246,0.38)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)"
                : "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            {LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    fontSize: "clamp(0.72rem, 1.8vw, 0.82rem)",
                    fontWeight: isActive ? 600 : 450,
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.01em",
                    color: isActive ? "#fff" : "rgba(148,163,184,0.75)",
                    background: isActive
                      ? "rgba(99,102,241,0.22)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(139,92,246,0.38)"
                      : "1px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                    boxShadow: isActive
                      ? "0 0 14px rgba(99,102,241,0.22)"
                      : "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#e2e8f0";
                      e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = "rgba(148,163,184,0.75)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}