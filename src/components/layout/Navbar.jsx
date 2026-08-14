"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="sticky top-0 z-[1000] border-b border-white/[0.05] bg-black/75 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ================================================= */}
        {/* BRAND */}
        {/* ================================================= */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4"
          >
            <div>
              <p className="text-2xl font-bold tracking-tight">
                Saifullah
                <span className="text-gray-500">.</span>
              </p>
            </div>

            {/* Developer Role - Desktop Only */}

            <div className="hidden border-l border-gray-800 pl-4 lg:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
                React Native
              </p>

              <p className="mt-0.5 text-xs text-gray-400">
                Frontend Developer
              </p>
            </div>
          </Link>
        </motion.div>

        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{
                y: -3,
              }}
            >
              <Link
                href={item.href}
                className={`relative text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {item.name}

                {/* Active Indicator */}

                {isActive(item.href) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"
                  />
                )}
              </Link>
            </motion.div>
          ))}

          {/* Resume */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Link
              href="/resume"
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                pathname === "/resume"
                  ? "bg-gray-200 text-black"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Resume
            </Link>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ================================================= */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <motion.span
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 7 : 0,
            }}
            className="h-[2px] w-6 bg-white"
          />

          <motion.span
            animate={{
              opacity: menuOpen ? 0 : 1,
            }}
            className="h-[2px] w-6 bg-white"
          />

          <motion.span
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -7 : 0,
            }}
            className="h-[2px] w-6 bg-white"
          />
        </button>
      </nav>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-gray-900 bg-black md:hidden"
          >
            <div className="px-6 py-6">
              {/* Mobile Identity */}

              <div className="mb-6 border-b border-gray-900 pb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                  React Native
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Frontend Developer
                </p>
              </div>

              {/* Links */}

              <div className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between border-b border-gray-900 py-4 ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      <span>{item.name}</span>

                      {isActive(item.href) && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Resume */}

              <Link
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="mt-6 block rounded-xl bg-white px-5 py-4 text-center font-semibold text-black"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}