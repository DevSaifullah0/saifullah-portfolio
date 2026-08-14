import * as motion from "motion/react-client";

import ProjectCard from "../../components/projects/ProjectCard";

import { projects } from "../../data/projects";

export const metadata = {
  title: "Projects",

  description:
    "Explore React Native frontend projects built by Saifullah, focused on mobile UI, navigation, reusable components and API integration.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Header */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Selected Work
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-8xl">
            Mobile experiences built with
            <span className="text-gray-500">
              {" "}
              React Native.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of React Native projects that demonstrate my
            approach to mobile UI development, responsive layouts,
            navigation, reusable components, API integration and complete
            frontend application flows.
          </p>
        </motion.div>
      </section>

      {/* Projects */}

      <section className="border-t border-gray-900 pb-32 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
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
    </main>
  );
}