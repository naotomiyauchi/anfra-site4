"use client";

import { useRef, useEffect, useState, ElementType } from "react";

type AllowedTag = "div" | "section" | "article" | "li" | "span" | "header" | "footer";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  as?: AllowedTag;
  style?: React.CSSProperties;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = `fade-${direction}`;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
      className={`${dirClass}${visible ? " is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
    >
      {children}
    </Tag>
  );
}
