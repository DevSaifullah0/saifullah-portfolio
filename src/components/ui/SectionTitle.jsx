"use client";

import { motion } from "motion/react";

export default function SectionTitle({
  eyebrow,
  title,
  mutedTitle,
  description,
  center = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className={center ? "mx-auto text-center" : ""}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        {title}

        {mutedTitle && (
          <span className="text-gray-500">
            {" "}
            {mutedTitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-lg leading-8 text-gray-500 ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}