"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  // Split text into words for staggered animation
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: delay 
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.15em" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(word);
        
        return (
          <motion.span 
            variants={child} 
            key={index} 
            style={{ display: "inline-block" }}
            className={isHighlighted ? "text-accent italic font-light pr-3 -mr-2.5" : ""}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
