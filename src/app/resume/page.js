import Link from "next/link";
import * as motion from "motion/react-client";

import { contact } from "../../data/site";

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
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Resume
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-7xl">
            My
            <span className="text-gray-400">
              {" "}
              Resume.
            </span>
          </h1>

          {/* Role */}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-[13px] uppercase tracking-[0.25em] text-gray-500">
              Role
            </span>

            <span className="h-px w-10 bg-gray-800" />

            <span className="text-sm font-medium text-gray-300">
              React Native Frontend Developer
            </span>
          </div>

          <p className="mt-6 max-w-xl leading-7 text-gray-400">
            View my resume to explore my React Native frontend skills,
            mobile development projects, technical experience and education.
          </p>
        </div>

        {/* View + Download Buttons */}

        <div className="flex flex-wrap gap-4">
          <motion.a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="w-fit rounded-xl border border-gray-600 px-7 py-4 font-semibold text-white transition-colors hover:border-white"
          >
            View Full Screen ↗
          </motion.a>

          <motion.a
            href={contact.resume}
            download="Saifullah-CV.pdf"
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
        </div>
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
        <div className="flex flex-col items-center gap-5 p-8 text-center sm:hidden">
          <p className="text-gray-400">
            The PDF is easiest to read in your phone&apos;s own viewer.
          </p>

          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-6 font-semibold text-black"
          >
            Open Resume
          </a>

          <a
            href={contact.resume}
            download="Saifullah-CV.pdf"
            className="flex min-h-12 w-full items-center justify-center rounded-xl border border-gray-700 px-6 font-semibold text-white"
          >
            Download PDF ↓
          </a>
        </div>

        <object
          data={`${contact.resume}#view=FitH`}
          type="application/pdf"
          className="hidden h-[85dvh] min-h-[700px] w-full sm:block"
        >
          <div className="flex min-h-[500px] flex-col items-center justify-center p-8 text-center">
            <p className="text-gray-400">
              Your browser cannot display the PDF directly.
            </p>

            <a
              href={contact.resume}
              download="Saifullah-CV.pdf"
              className="mt-5 rounded-xl bg-white px-6 py-3 font-semibold text-black"
            >
              Download Resume ↓
            </a>

            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 text-white"
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
          className="link-underline text-gray-300 transition hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}