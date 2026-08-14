"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ContactCTA() {
  return (
    <section className="border-t border-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[36px] border border-gray-800 bg-[#080808] px-8 py-16 md:px-14 md:py-20"
        >
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/[0.05] blur-[100px]"
          />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Looking for a React Native
              <span className="text-gray-500">
                {" "}
                Frontend Developer?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              I&apos;m open to React Native frontend internships, junior
              developer roles and mobile application projects where I can build
              responsive interfaces, smooth navigation flows and real-world
              frontend experiences.
            </p>

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10 w-fit"
            >
              <Link
                href="/contact"
                className="block rounded-xl bg-white px-7 py-4 font-semibold text-black"
              >
                Get In Touch →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}