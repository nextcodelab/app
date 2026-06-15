import React from "react";
import { APPS } from "@/lib/appData";
import AppCard from "./AppCard";
import { motion } from "framer-motion";

export default function FeaturedSection() {
  const featured = APPS.filter((app) => app.featured);

  if (featured.length === 0) return null;

  return (
    <section id="featured" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            Featured
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Top Picks
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((app) => (
            <AppCard key={app.id} app={app} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
