"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { skillGroups } from "../../data/skills";

export default function SkillsPreview() {
  return (
    <section className="border-t border-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

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
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Frontend Stack
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Technologies I use to build
            <span className="text-gray-500">
              {" "}
              mobile experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            My primary focus is React Native frontend development, from
            responsive mobile interfaces and navigation to API integration and
            real application workflows.
          </p>
        </motion.div>

        {/* Skill Groups */}

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
                borderColor: "#444444",
              }}
              className="group rounded-3xl border border-gray-900 bg-[#070707] p-8"
            >
              {/* Number */}

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <span className="text-xs uppercase tracking-[0.2em] text-gray-700">
                  Frontend
                </span>
              </div>

              {/* Group Title */}

              <h3 className="mt-6 text-2xl font-bold transition-colors group-hover:text-white">
                {group.title}
              </h3>

              {/* Description */}

              <p className="mt-3 max-w-md leading-7 text-gray-500">
                {group.description}
              </p>

              {/* Skills */}

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="rounded-full border border-gray-800 bg-[#0d0d0d] px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* About Link */}

        <motion.div
          className="mt-10 w-fit"
          whileHover={{
            x: 5,
          }}
        >
          <Link
            href="/about"
            className="text-gray-400 transition hover:text-white"
          >
            Explore my frontend skills →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}