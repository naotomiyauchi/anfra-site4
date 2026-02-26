"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-xl bg-white shadow-md
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}
