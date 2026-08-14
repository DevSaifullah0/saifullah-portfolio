"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              Saifullah
              <span className="text-gray-500">.</span>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-gray-500">
              React Native Frontend Developer focused on building modern,
              responsive and user-friendly mobile applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Projects", "/projects"],
              ["Resume", "/resume"],
              ["Contact", "/contact"],
            ].map(([name, href]) => (
              <motion.div
                key={name}
                whileHover={{
                  y: -3,
                  color: "#ffffff",
                }}
              >
                <Link href={href}>
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-900 pt-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Saifullah. All rights reserved.
          </p>

          <motion.a
            href="#top"
            whileHover={{
              y: -4,
              color: "#ffffff",
            }}
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}