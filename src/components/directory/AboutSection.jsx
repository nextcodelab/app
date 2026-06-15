import React from "react";
import { Code2, Zap, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/lib/appData";
import AdPlaceholder from "./AdPlaceholder";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "Open Source",
    description: "Most projects are open source. Explore, contribute, and learn from the codebase.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Built with speed and efficiency in mind. Lightweight, fast, and resource-friendly.",
  },
  {
    icon: Shield,
    title: "Trusted & Safe",
    description: "All apps are scanned and verified. No telemetry, no bloat, no hidden surprises.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sidebar ad */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left mb-12"
            >
              <span className="inline-block text-xs font-semibold tracking-widest text-chart-3 uppercase mb-3">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About {SITE_CONFIG.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {SITE_CONFIG.name} is a personal lab for building Windows applications, 
                utilities, AI-powered tools, and experiments. Every project is crafted with 
                care, focusing on clean code, great user experience, and real-world utility.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar ad */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24">
              <AdPlaceholder type="sidebar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}