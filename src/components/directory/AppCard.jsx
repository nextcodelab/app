import React from "react";
import { Download, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function AppCard({ app, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group glass rounded-2xl overflow-hidden transition-all duration-300 hover:glow-purple hover:border-primary/30 ${
        featured ? "col-span-1 md:col-span-1" : ""
      }`}
    >
      <div className={`p-6 ${featured ? "sm:p-8" : ""}`}>
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={app.icon}
            alt={app.name}
            className={`rounded-xl shadow-lg shadow-black/20 object-cover ${
              featured ? "w-16 h-16" : "w-12 h-12"
            }`}
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <h3
              className={`font-bold text-foreground group-hover:text-primary transition-colors truncate ${
                featured ? "text-xl" : "text-lg"
              }`}
            >
              {app.name}
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              v{app.version}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-muted-foreground leading-relaxed mb-5 ${
            featured ? "text-sm" : "text-sm line-clamp-3"
          }`}
        >
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {app.categories.map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="bg-secondary/80 text-secondary-foreground/80 border-0 text-xs font-medium px-2.5 py-0.5"
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-xs font-semibold"
            asChild
          >
            <a href={app.downloadUrl}>
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-border/60 text-muted-foreground hover:text-foreground rounded-lg text-xs"
            asChild
          >
            <a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 mr-1.5" />
              Source
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground rounded-lg text-xs"
            asChild
          >
            <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              Website
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
