"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ProjectGallery({ project }) {
  if (!project.images?.length) {
    return null;
  }

  return (
    <section className="border-t border-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Gallery Heading */}

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
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Mobile UI Gallery
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Frontend screens from
            <span className="text-gray-400">
              {" "}
              {project.title}.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            A closer look at the mobile interfaces, navigation flows and
            frontend experiences built for the application.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            {project.images.length} application screens
          </p>
        </motion.div>

        {/* Gallery Grid */}

        <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 md:mt-16 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group"
            >
              {/* Number + Screen Name */}

              <div className="mb-3 flex items-center gap-2 md:mb-4 md:gap-4">
                <span className="shrink-0 text-sm font-medium text-gray-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="hidden h-px flex-1 bg-gray-900 sm:block" />

                <h3 className="min-w-0 text-[13px] font-medium leading-tight text-gray-300 md:shrink-0 md:text-sm">
                  {image.name}
                </h3>
              </div>

              {/* Screenshot Card */}

              <motion.a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{
                  scale: 0.98,
                }}
                className="relative block overflow-hidden rounded-2xl border border-gray-800 md:rounded-[28px] bg-[#070707] transition-colors duration-300 hover:border-gray-600"
              >
                {/* Exact Vertical Screenshot Area */}

                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>

                {/* Hover Overlay */}

                <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/20 bg-black/70 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md">
                    View Full Size ↗
                  </span>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}