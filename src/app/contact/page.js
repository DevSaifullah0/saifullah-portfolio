import * as motion from "motion/react-client";

export const metadata = {
  title: "Contact",

  description:
    "Contact Saifullah for React Native frontend development opportunities, internships and mobile application projects.",
};

const contact = {
  email: "saifullahshaikh634@gmail.com",
  linkedin: "https://www.linkedin.com/in/saifullah-507754372/",
  github: "https://github.com/DevSaifullah0",
  location: "Karachi, Pakistan",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}

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
            Contact
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-8xl">
            Let&apos;s build
            <span className="text-gray-500">
              {" "}
              something great.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m open to React Native frontend internships, junior
            developer roles and mobile application projects where I can
            contribute to responsive interfaces, smooth navigation and
            real-world frontend experiences.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}

      <section className="border-t border-gray-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
          <ContactCard
            number="01"
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />

          <ContactCard
            number="02"
            label="LinkedIn"
            value="Connect on LinkedIn"
            href={contact.linkedin}
          />

          <ContactCard
            number="03"
            label="GitHub"
            value="View GitHub Profile"
            href={contact.github}
          />

          <ContactCard
            number="04"
            label="Location"
            value={contact.location}
          />
        </div>
      </section>

      {/* Main CTA */}

      <section className="border-t border-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[36px] border border-gray-800 bg-[#080808] p-10 md:p-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Start a Conversation
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Looking for a React Native
              <span className="text-gray-500">
                {" "}
                Frontend Developer?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              Feel free to reach out for React Native frontend roles,
              internships or mobile application development opportunities.
            </p>

            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-black"
            >
              Send Email →
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({
  number,
  label,
  value,
  href,
}) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          {number}
        </span>

        {href && (
          <span className="text-gray-700">
            ↗
          </span>
        )}
      </div>

      <p className="mt-10 text-sm uppercase tracking-[0.25em] text-gray-600">
        {label}
      </p>

      <p className="mt-3 break-all text-xl font-medium text-gray-200">
        {value}
      </p>
    </>
  );

  if (!href) {
    return (
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
        className="rounded-3xl border border-gray-900 bg-[#070707] p-8"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      target={
        href.startsWith("mailto:")
          ? undefined
          : "_blank"
      }
      rel={
        href.startsWith("mailto:")
          ? undefined
          : "noopener noreferrer"
      }
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
      whileHover={{
        y: -7,
        borderColor: "#444444",
      }}
      className="rounded-3xl border border-gray-900 bg-[#070707] p-8"
    >
      {content}
    </motion.a>
  );
}