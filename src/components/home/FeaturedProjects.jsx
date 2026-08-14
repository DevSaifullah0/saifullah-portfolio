"use client";

import Link from "next/link";
import { motion } from "motion/react";

import ProjectCard from "../projects/ProjectCard";
import { getFeaturedProjects } from "../../data/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 2);

  return (
    <section className="border-t border-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
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
              Selected Work
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-6xl">
              Featured
              <span className="text-gray-500">
                {" "}
                Mobile Projects.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              React Native projects where I focused on mobile UI development,
              navigation, reusable components, API integration and complete
              frontend user flows.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              x: 5,
            }}
          >
            <Link
              href="/projects"
              className="text-gray-400 transition hover:text-white"
            >
              View all projects →
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}