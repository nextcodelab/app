import React from "react";
import { Download, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, LOGO_URL } from "@/lib/appData";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-chart-3/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Ad placeholder - top banner */}
      <div className="absolute top-20 left-0 right-0 flex justify-center px-4">
        <div className="w-full max-w-3xl h-16 rounded-lg border border-dashed border-border/30 flex items-center justify-center text-xs text-muted-foreground/40">
          {/* Google AdSense Ad Unit — Top Banner */}
          Ad Space — Top Banner
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={LOGO_URL}
            alt={SITE_CONFIG.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl mx-auto mb-8 shadow-2xl shadow-primary/20"
            loading="lazy"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl glow-purple"
            onClick={() => document.querySelector("#apps")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Download className="w-5 h-5 mr-2" />
            Browse Apps
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/60 text-foreground hover:bg-secondary/50 px-8 py-6 text-base font-semibold rounded-xl"
            asChild
          >
            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}