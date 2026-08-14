"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProjectCard({
  project,
  index = 0,
}) {
  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-[28px] border border-gray-800 bg-[#080808]"
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} project`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-2 transition duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-700">
              Project Preview
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Status Badge */}

          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md">
            {project.status}
          </div>
        </div>

        {/* Content */}

        <div className="p-7 md:p-8">
          <div className="flex items-center justify-between gap-5">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              {project.category}
            </p>

            <span className="text-xs text-gray-600">
              {project.year}
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-bold">
            {project.title}
          </h3>

          {/* Role */}

          {project.role && (
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                My Role
              </span>

              <span className="h-px w-8 bg-gray-800" />

              <span className="text-sm font-medium text-gray-300">
                {project.role}
              </span>
            </div>
          )}

          {/* Description */}

          <p className="mt-5 line-clamp-3 leading-7 text-gray-500">
            {project.shortDescription}
          </p>

          {/* Tech Stack + View */}

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {project.techStack
                .slice(0, 4)
                .map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            <motion.span
              whileHover={{
                x: 5,
              }}
              className="shrink-0 text-gray-400"
            >
              View Project →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}