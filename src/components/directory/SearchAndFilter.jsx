import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/lib/appData";
import { motion } from "framer-motion";

export default function SearchAndFilter({ search, onSearchChange, activeCategory, onCategoryChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6 mb-12"
    >
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-11 pr-4 py-3 h-12 rounded-xl bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-primary/20"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </motion.div>
  );
}