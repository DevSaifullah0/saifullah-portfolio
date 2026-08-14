"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-20"
    >
      <div className="max-w-5xl">
        {/* Status */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          className="mb-8 flex w-fit items-center gap-3 rounded-full border border-gray-800 bg-[#080808] px-4 py-2"
        >
          <motion.span
            animate={{
              opacity: [1, 0.25, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-2 w-2 rounded-full bg-green-500"
          />

          <span className="text-sm text-gray-400">
            Open to React Native Frontend opportunities
          </span>
        </motion.div>

        {/* Intro */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mb-5 text-lg text-gray-400 md:text-xl"
        >
          Hi, I&apos;m Saifullah
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.9,
          }}
          className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-8xl"
        >
          React Native

          <motion.span
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.9,
            }}
            className="block text-gray-500"
          >
            Frontend Developer.
          </motion.span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          I build modern, responsive and user-friendly mobile applications
          using React Native and JavaScript, with a strong focus on clean UI,
          reusable components, smooth navigation and real-world frontend
          experiences.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <AnimatedLink href="/projects" primary>
            Explore Projects
          </AnimatedLink>

          <AnimatedLink href="/resume">
            View Resume
          </AnimatedLink>

          <AnimatedLink href="/contact">
            Contact Me
          </AnimatedLink>
        </motion.div>

        {/* Technologies */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600"
        >
          <span>React Native CLI</span>
          <span>•</span>

          <span>JavaScript</span>
          <span>•</span>

          <span>NativeWind</span>
          <span>•</span>

          <span>React Navigation</span>
          <span>•</span>

          <span>REST APIs</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-6 hidden items-center gap-3 text-sm text-gray-600 lg:flex"
      >
        Scroll to explore
        <span>↓</span>
      </motion.div>
    </section>
  );
}

function AnimatedLink({
  href,
  children,
  primary = false,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
    >
      <Link
        href={href}
        className={
          primary
            ? "block rounded-xl bg-white px-7 py-4 font-semibold text-black"
            : "block rounded-xl border border-gray-700 px-7 py-4 font-semibold text-white transition hover:border-white"
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}