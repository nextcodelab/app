import React, { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import { SITE_CONFIG, LOGO_URL } from "@/lib/appData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Featured", href: "#featured" },
    { label: "Apps", href: "#apps" },
    { label: "About", href: "#about" },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
            <img src={LOGO_URL} alt="NextCodeLab" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {SITE_CONFIG.name}
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </button>
            ))}
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border/50">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}