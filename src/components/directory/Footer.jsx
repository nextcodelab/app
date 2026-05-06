import React from "react";
import { Github, Mail, Heart } from "lucide-react";
import { SITE_CONFIG, LOGO_URL } from "@/lib/appData";
import AdPlaceholder from "./AdPlaceholder";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      {/* Footer ad */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <AdPlaceholder type="footer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt={SITE_CONFIG.name} className="w-7 h-7 rounded-lg" />
            <span className="text-sm font-semibold text-foreground">{SITE_CONFIG.name}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            © {currentYear} {SITE_CONFIG.name}. Built with
            <Heart className="w-3 h-3 text-chart-3 fill-chart-3 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}