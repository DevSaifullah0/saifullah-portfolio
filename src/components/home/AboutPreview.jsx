"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function AboutPreview() {
  const strengths = [
    "Responsive Mobile UI",
    "React Navigation",
    "Reusable Components",
    "REST API Integration",
  ];

  return (
    <section className="border-t border-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              About Me
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Building frontend
              <span className="block text-gray-500">
                mobile experiences.
              </span>
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <p className="max-w-2xl text-lg leading-8 text-gray-400">
              I&apos;m a React Native Frontend Developer focused on building
              modern, responsive and user-friendly mobile applications. I work
              primarily with React Native and JavaScript to create clean
              interfaces, smooth navigation flows and reusable frontend
              components.
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-gray-500">
              I also integrate mobile interfaces with REST APIs,
              authentication and application data to build complete real-world
              frontend experiences.
            </p>

            {/* Strengths */}

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    x: 5,
                    borderColor: "#555555",
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-900 bg-[#070707] p-5"
                >
                  <span className="text-xs text-gray-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-medium text-gray-300">
                    {strength}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Link */}

            <motion.div
              whileHover={{
                x: 6,
              }}
              className="mt-10 w-fit"
            >
              <Link
                href="/about"
                className="text-gray-400 transition hover:text-white"
              >
                More About Me →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}