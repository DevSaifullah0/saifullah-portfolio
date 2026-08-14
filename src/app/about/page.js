import * as motion from "motion/react-client";

import SectionTitle from "../../components/ui/SectionTitle";

import { skillGroups } from "../../data/skills";

export const metadata = {
  title: "About",

  description:
    "Learn more about Saifullah, a React Native Frontend Developer focused on building modern, responsive and user-friendly mobile applications.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            About Me
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-8xl">
            React Native Frontend Developer
            <span className="text-gray-500">
              {" "}
              focused on mobile experiences.
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Introduction */}

      <section className="border-t border-gray-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Turning ideas into
              <span className="block text-gray-500">
                polished mobile interfaces.
              </span>
            </h2>
          </motion.div>

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
            className="space-y-6 text-lg leading-8 text-gray-400"
          >
            <p>
              I&apos;m a Computer Science student and React Native Frontend
              Developer focused on building modern, responsive and
              user-friendly mobile applications.
            </p>

            <p>
              My primary focus is frontend mobile development using React
              Native and JavaScript. I enjoy building clean interfaces,
              navigation flows, reusable components and responsive layouts
              that provide a smooth user experience.
            </p>

            <p>
              I also work with REST APIs, authentication and backend services
              from the frontend side, allowing me to connect mobile
              interfaces with real application data and functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus */}

      <section className="border-t border-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Development Focus"
            title="How I approach"
            mutedTitle="frontend development."
            description="I focus on creating mobile interfaces that are clean, responsive, reusable and connected to real application functionality."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Mobile UI & UX",
                text: "Building clean, responsive and user-friendly mobile interfaces with attention to usability and visual consistency.",
              },

              {
                number: "02",
                title: "Navigation & Integration",
                text: "Creating smooth navigation flows and connecting mobile applications with REST APIs, authentication and backend services.",
              },

              {
                number: "03",
                title: "Reusable Components",
                text: "Structuring React Native applications with reusable components and organized frontend code that is easier to maintain and scale.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="rounded-3xl border border-gray-900 bg-[#070707] p-8"
              >
                <p className="text-sm text-gray-600">
                  {item.number}
                </p>

                <h3 className="mt-7 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frontend Strengths */}

      <section className="border-t border-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Frontend Strengths"
            title="What I focus on"
            mutedTitle="while building apps."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Responsive Mobile UI",
              "React Navigation",
              "Reusable Components",
              "REST API Integration",
              "Authentication Flows",
              "State & Data Handling",
              "NativeWind Styling",
              "Android & iOS UI",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -5,
                  borderColor: "#555555",
                }}
                className="rounded-2xl border border-gray-900 bg-[#070707] p-6"
              >
                <p className="text-xs text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 font-semibold text-gray-200">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}

      <section
        id="skills"
        className="border-t border-gray-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Skills"
            title="Frontend technologies"
            mutedTitle="I work with."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  borderColor: "#444444",
                }}
                className="rounded-3xl border border-gray-900 bg-[#070707] p-8"
              >
                <h3 className="text-2xl font-bold">
                  {group.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {group.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}