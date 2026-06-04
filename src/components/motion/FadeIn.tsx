"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const soft = [0.16, 1, 0.3, 1] as const;

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function FadeIn({
  children,
  delay = 0,
  y = 28,
  ...rest
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, delay, ease: soft }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(8% 6% 8% 6%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.35, ease: soft }}
    >
      {children}
    </motion.div>
  );
}
