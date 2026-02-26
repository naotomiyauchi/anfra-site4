"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
