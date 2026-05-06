import React from "react";

export default function AdPlaceholder({ type = "banner", className = "" }) {
  const styles = {
    banner: "w-full h-20 sm:h-24",
    sidebar: "w-full h-64",
    infeed: "w-full h-24",
    footer: "w-full h-20",
  };

  return (
    <div
      className={`${styles[type]} rounded-xl border border-dashed border-border/30 flex items-center justify-center text-xs text-muted-foreground/30 ${className}`}
    >
      {/* Google AdSense Ad Unit */}
      Ad Space — {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  );
}