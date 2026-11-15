"use client";

import Link from "next/link";
import { motion } from "motion/react";

import SocialLinks from "../ui/SocialLinks";
import { contact, navigation } from "../../data/site";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}

          <motion.div {...fadeUp} className="md:col-span-5">
            <Link href="/" className="tap-area text-2xl font-bold">
              Saifullah
              <span className="text-gray-400">.</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              React Native Frontend Developer focused on building modern,
              responsive and user-friendly mobile applications.
            </p>

            <p className="mt-5 inline-flex items-center gap-3 rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-300">
              <span className="status-dot h-2 w-2 rounded-full bg-green-400" />
              Open to internships &amp; junior roles
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.nav
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            aria-label="Footer navigation"
            className="md:col-span-3"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Navigate
            </p>

            <ul className="mt-5 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 6 }}
                  >
                    <Link
                      href={item.href}
                      className="link-underline text-gray-200 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Connect */}

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-4"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Connect
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="link-underline mt-5 break-all text-gray-200 transition-colors hover:text-white"
            >
              {contact.email}
            </a>

            <p className="mt-3 text-sm text-gray-400">
              {contact.location}
            </p>

            <SocialLinks className="mt-6" />
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-900 pt-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Saifullah. All rights reserved.</p>

          <motion.button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex min-h-11 w-fit items-center text-gray-200 transition-colors hover:text-white"
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
