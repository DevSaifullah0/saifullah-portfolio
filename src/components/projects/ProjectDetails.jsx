"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import ProjectGallery from "./ProjectGallery";

export default function ProjectDetails({
  project,
  nextProject,
}) {
  return (
    <main>
      {/* ===================================================== */}
      {/* PROJECT HERO */}
      {/* ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
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
            duration: 0.8,
          }}
        >
          {/* Back */}

          <Link
            href="/projects"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            ← All Projects
          </Link>

          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left */}

            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {project.category}
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-8xl">
                {project.title}
              </h1>

              {/* Role */}

              {project.role && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.7,
                  }}
                  className="mt-7 flex flex-wrap items-center gap-3"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
                    My Role
                  </span>

                  <span className="h-px w-10 bg-gray-800" />

                  <span className="rounded-full border border-gray-800 bg-[#080808] px-4 py-2 text-sm font-medium text-gray-300">
                    {project.role}
                  </span>
                </motion.div>
              )}

              {/* Description */}

              <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
                {project.shortDescription}
              </p>
            </div>

            {/* Status */}

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-gray-700 px-5 py-3 text-sm text-gray-300">
                {project.status}
              </span>

              {project.year && (
                <span className="rounded-full border border-gray-800 px-5 py-3 text-sm text-gray-500">
                  {project.year}
                </span>
              )}
            </div>
          </div>

          {/* Frontend Highlights */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
            }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {project.techStack
              ?.slice(0, 6)
              .map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-800 bg-[#080808] px-4 py-2 text-sm text-gray-500"
                >
                  {tech}
                </span>
              ))}
          </motion.div>
        </motion.div>

        {/* ===================================================== */}
        {/* COVER IMAGE */}
        {/* ===================================================== */}

        {project.coverImage && (
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative mt-16 aspect-video overflow-hidden rounded-[32px] border border-gray-800 bg-[#080808]"
          >
            <Image
              src={project.coverImage}
              alt={`${project.title} project showcase`}
              fill
              priority
              sizes="100vw"
              className="object-contain p-3"
            />
          </motion.div>
        )}
      </section>

      {/* ===================================================== */}
      {/* 01 OVERVIEW */}
      {/* ===================================================== */}

      <CaseStudySection
        number="01"
        title="Overview"
      >
        <p className="text-xl leading-9 text-gray-300">
          {project.overview}
        </p>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* 02 PROBLEM */}
      {/* ===================================================== */}

      <CaseStudySection
        number="02"
        title="The Problem"
      >
        <p className="text-lg leading-8 text-gray-400">
          {project.problem}
        </p>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* 03 SOLUTION */}
      {/* ===================================================== */}

      <CaseStudySection
        number="03"
        title="Frontend Approach"
      >
        <p className="text-lg leading-8 text-gray-400">
          {project.solution}
        </p>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* 04 FEATURES */}
      {/* ===================================================== */}

      <CaseStudySection
        number="04"
        title="Features & User Flows"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {project.features.map(
            (feature, index) => (
              <motion.div
                key={feature}
                whileHover={{
                  x: 5,
                  borderColor: "#555555",
                }}
                className="flex gap-4 rounded-xl border border-gray-800 bg-[#080808] p-4"
              >
                <span className="text-xs text-gray-600">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="text-gray-300">
                  {feature}
                </span>
              </motion.div>
            )
          )}
        </div>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* 05 TECH STACK */}
      {/* ===================================================== */}

      <CaseStudySection
        number="05"
        title="Frontend & Integration Stack"
      >
        <div>
          <p className="mb-7 max-w-2xl leading-7 text-gray-500">
            The main technologies used to build the mobile interface,
            navigation, application state and backend integrations.
          </p>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    scale: 1.06,
                    y: -3,
                    borderColor: "#555555",
                  }}
                  className="rounded-full border border-gray-800 bg-[#0a0a0a] px-5 py-3 text-sm text-gray-300"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </div>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* 06 PROJECT DETAILS */}
      {/* ===================================================== */}

      <CaseStudySection
        number="06"
        title="Project Details"
      >
        <div>
          {project.details.map(
            (detail) => (
              <motion.div
                key={detail.label}
                whileHover={{
                  x: 5,
                }}
                className="flex items-center justify-between gap-6 border-b border-gray-800 py-5 last:border-none"
              >
                <span className="text-gray-500">
                  {detail.label}
                </span>

                <span className="text-right font-medium text-gray-200">
                  {detail.value}
                </span>
              </motion.div>
            )
          )}
        </div>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* PROJECT GALLERY */}
      {/* ===================================================== */}

      <ProjectGallery project={project} />

      {/* ===================================================== */}
      {/* 07 LEARNINGS */}
      {/* ===================================================== */}

      <CaseStudySection
        number="07"
        title="Frontend Learnings"
      >
        <div>
          <p className="mb-6 max-w-2xl leading-7 text-gray-500">
            Key frontend development concepts and practical skills I
            strengthened while building this project.
          </p>

          <div className="space-y-1">
            {project.learnings.map(
              (learning, index) => (
                <motion.div
                  key={learning}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex gap-4 border-b border-gray-900 py-4"
                >
                  <span className="text-sm text-gray-700">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span className="text-gray-400">
                    {learning}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* 08 EXPLORE */}
      {/* ===================================================== */}

      <CaseStudySection
        number="08"
        title="Explore Project"
      >
        <div>
          <p className="mb-7 max-w-xl leading-7 text-gray-500">
            Explore the source code, application demo or Android build.
          </p>

          <div className="flex flex-wrap gap-4">
            <ProjectAction
              href={project.links.github}
              primary
            >
              View GitHub ↗
            </ProjectAction>

            <ProjectAction
              href={project.links.demo}
            >
              Watch Demo ↗
            </ProjectAction>

            <ProjectAction
              href={project.links.apk}
              download
            >
              Download APK ↓
            </ProjectAction>
          </div>
        </div>
      </CaseStudySection>

      {/* ===================================================== */}
      {/* NEXT PROJECT */}
      {/* ===================================================== */}

      {nextProject && (
        <section className="border-t border-gray-900 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
              Next Project
            </p>

            <motion.div
              whileHover={{
                x: 10,
              }}
              className="mt-5"
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="text-4xl font-bold md:text-6xl"
              >
                {nextProject.title}

                <span className="text-gray-600">
                  {" "}
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}

/* ========================================================= */
/* CASE STUDY SECTION */
/* ========================================================= */

function CaseStudySection({
  number,
  title,
  children,
}) {
  return (
    <section className="border-t border-gray-900 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.32fr_0.68fr]">
        {/* Title */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gray-600">
            {number} / {title}
          </p>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ========================================================= */
/* PROJECT ACTION BUTTON */
/* ========================================================= */

function ProjectAction({
  href,
  children,
  primary = false,
  download = false,
}) {
  if (!href) {
    return (
      <span
        className={
          primary
            ? "cursor-not-allowed rounded-xl bg-gray-800 px-7 py-4 font-semibold text-gray-500"
            : "cursor-not-allowed rounded-xl border border-gray-800 px-7 py-4 font-semibold text-gray-600"
        }
      >
        {children}
      </span>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download || undefined}
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={
        primary
          ? "rounded-xl bg-white px-7 py-4 font-semibold text-black"
          : "rounded-xl border border-gray-700 px-7 py-4 font-semibold text-white transition hover:border-white"
      }
    >
      {children}
    </motion.a>
  );
}