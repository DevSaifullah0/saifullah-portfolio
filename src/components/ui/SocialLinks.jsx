"use client";

import { motion } from "motion/react";

import { socialLinks } from "../../data/site";

const icons = {
  GitHub: (
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  ),
  LinkedIn: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  Email: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.6 2 7.4 5.6L19.4 7H4.6ZM4 8.9V17h16V8.9l-8 6.1-8-6.1Z" />
  ),
};

/**
 * Always-visible, animated social links.
 * variant "icon"  -> round icon buttons (navbar)
 * variant "pill"  -> icon + label (hero, footer, mobile menu)
 */
export default function SocialLinks({
  variant = "pill",
  className = "",
  delay = 0,
}) {
  return (
    <ul
      aria-label="Social links"
      className={`flex flex-wrap items-center gap-3 ${className}`}
    >
      {socialLinks.map((link, index) => (
        <motion.li
          key={link.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.08,
            duration: 0.5,
          }}
        >
          <motion.a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className={`social-link group inline-flex items-center gap-2.5 border border-gray-700 text-gray-200 transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:border-white ${
              variant === "icon"
                ? "h-10 w-10 justify-center rounded-full"
                : "rounded-full px-4 py-2.5 text-sm font-medium"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110"
            >
              {icons[link.name]}
            </svg>

            {variant === "pill" && <span>{link.label}</span>}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
}
