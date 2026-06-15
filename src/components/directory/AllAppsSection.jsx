import React, { useState, useMemo } from "react";
import { APPS } from "@/lib/appData";
import AppCard from "./AppCard";
import SearchAndFilter from "./SearchAndFilter";
import AdPlaceholder from "./AdPlaceholder";
import { motion } from "framer-motion";

export default function AllAppsSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return APPS.filter((app) => {
      const matchesSearch =
        search === "" ||
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || app.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Insert ad placeholders between cards
  const renderItems = () => {
    const items = [];
    filtered.forEach((app, i) => {
      items.push(<AppCard key={app.id} app={app} />);
      // Insert in-feed ad after every 3rd card
      if ((i + 1) % 3 === 0 && i < filtered.length - 1) {
        items.push(
          <div key={`ad-${i}`} className="col-span-1 sm:col-span-2 lg:col-span-3">
            <AdPlaceholder type="infeed" />
          </div>
        );
      }
    });
    return items;
  };

  return (
    <section id="apps" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-accent uppercase mb-3">
            Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            All Apps
          </h2>
        </motion.div>

        <SearchAndFilter
          search={search}
          onSearchChange={setSearch}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">No apps found matching your search.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderItems()}
          </div>
        )}
      </div>
    </section>
  );
}