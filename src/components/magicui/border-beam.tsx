"use client";

import { motion } from "framer-motion";

interface BorderBeamProps {
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderRadius?: string;
  borderWidth?: number;
}

export const BorderBeam = ({
  duration = 8,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  borderRadius = "1rem",
  borderWidth = 2,
}: BorderBeamProps) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        borderRadius,
        zIndex: 0,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius,
          padding: `${borderWidth}px`,
          background: `conic-gradient(${colorFrom}, ${colorTo}, ${colorFrom})`,
          maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      />
    </div>
  );
};
