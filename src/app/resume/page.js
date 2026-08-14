import Link from "next/link";
import * as motion from "motion/react-client";

export const metadata = {
  title: "Resume",

  description:
    "View and download the professional resume of Saifullah, a React Native Frontend Developer.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28">
      {/* Header */}

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
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Resume
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            My
            <span className="text-gray-500">
              {" "}
              Resume.
            </span>
          </h1>

          {/* Role */}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Role
            </span>

            <span className="h-px w-10 bg-gray-800" />

            <span className="text-sm font-medium text-gray-300">
              React Native Frontend Developer
            </span>
          </div>

          <p className="mt-6 max-w-xl leading-7 text-gray-500">
            View my resume to explore my React Native frontend skills,
            mobile development projects, technical experience and education.
          </p>
        </div>

        {/* Download Button */}

        <motion.a
          href="/resume/My Resume.docx.pdf"
          download
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="w-fit rounded-xl bg-white px-7 py-4 font-semibold text-black"
        >
          Download Resume ↓
        </motion.a>
      </motion.div>

      {/* Resume Viewer */}

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
          delay: 0.2,
          duration: 0.8,
        }}
        className="mt-14 overflow-hidden rounded-3xl border border-gray-800 bg-[#080808]"
      >
        <object
          data="/resume/My Resume.docx.pdf"
          type="application/pdf"
          className="h-[85vh] min-h-[700px] w-full"
        >
          <div className="flex min-h-[500px] flex-col items-center justify-center p-8 text-center">
            <p className="text-gray-400">
              Your browser cannot display the PDF directly.
            </p>

            <a
              href="/resume/My Resume.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-white underline"
            >
              Open Resume
            </a>
          </div>
        </object>
      </motion.div>

      {/* Back */}

      <div className="mt-10">
        <Link
          href="/"
          className="text-gray-500 transition hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}