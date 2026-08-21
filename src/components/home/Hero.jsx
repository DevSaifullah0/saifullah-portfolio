"use client";

import Link from "next/link";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export default function Hero() {
  // =====================================================
  // IMAGE MOTION
  // =====================================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const imageX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-15, 15],
  );

  const imageY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-8, 8],
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-5, 5],
  );

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [4, -4],
  );

  const glowX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-30, 30],
  );

  const handleMouseMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative mx-auto min-h-[calc(100vh-81px)] max-w-7xl overflow-hidden px-6 py-16 lg:py-20"
    >
      {/* ================================================= */}
      {/* HERO GRID */}
      {/* ================================================= */}

      <div className="grid min-h-[calc(100vh-180px)] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ================================================= */}
        {/* LEFT SIDE CONTENT */}
        {/* ================================================= */}

        <div className="relative z-20 max-w-4xl">
          {/* Intro */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mb-5 text-lg text-gray-400 md:text-xl"
          >
            Hi, I&apos;m Saifullah
          </motion.p>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.9,
            }}
            className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl"
          >
            React Native

            <motion.span
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.9,
              }}
              className="block text-gray-500"
            >
              Frontend Developer.
            </motion.span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl"
          >
            I build modern, responsive and user-friendly
            mobile applications using React Native and
            JavaScript, with a strong focus on clean UI,
            reusable components, smooth navigation and
            real-world frontend experiences.
          </motion.p>

          {/* Buttons */}

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
              delay: 1.1,
              duration: 0.8,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <AnimatedLink
              href="/projects"
              primary
            >
              Explore Projects
            </AnimatedLink>

            <AnimatedLink href="/resume">
              View Resume
            </AnimatedLink>

            <AnimatedLink href="/contact">
              Contact Me
            </AnimatedLink>
          </motion.div>

          {/* Technologies */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
            }}
            className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-600"
          >
            <span>React Native CLI</span>
            <span>•</span>

            <span>JavaScript</span>
            <span>•</span>

            <span>NativeWind</span>
            <span>•</span>

            <span>React Navigation</span>
            <span>•</span>

            <span>REST APIs</span>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE IMAGE SECTION */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.45,
            duration: 1,
          }}
          className="relative hidden h-[620px] items-end justify-center lg:flex"
          style={{
            perspective: "1200px",
          }}
        >
          {/* Background glow */}

          <motion.div
            style={{
              x: glowX,
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[90px]"
          />

          {/* Large subtle ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
          />

          {/* Second ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.035]"
          />

          {/* Portrait frame */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-5 z-10 h-[540px] w-[390px] overflow-hidden rounded-[42px] border border-white/[0.08] bg-white/[0.018]"
          >
            {/* Top Left corner */}

            <div className="absolute left-5 top-5 z-20 h-10 w-10 border-l border-t border-white/20" />

            {/* Top Right corner */}

            <div className="absolute right-5 top-5 z-20 h-10 w-10 border-r border-t border-white/20" />

            {/* Bottom Left corner */}

            <div className="absolute bottom-5 left-5 z-20 h-10 w-10 border-b border-l border-white/10" />

            {/* Bottom Right corner */}

            <div className="absolute bottom-5 right-5 z-20 h-10 w-10 border-b border-r border-white/10" />

            {/* Subtle background */}

            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/40" />

            {/* ============================================= */}
            {/* YOUR IMAGE */}
            {/* ============================================= */}

            <motion.img
              src="/images/saifullah-hero.png"
              alt="Saifullah"
              style={{
                x: imageX,
                y: imageY,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* ============================================= */}
          {/* FLOATING ROLE CARD */}
          {/* ============================================= */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-15px] top-[120px] z-30 rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-xs text-white font-extrabold">
              Specialization :
            </p>

            <p className="mt-1 font-semibold text-white text-sm">
              React Native
            </p>

            <p className="mt-1 text-xs text-white">
              Frontend Development
            </p>
          </motion.div>

          {/* ============================================= */}
          {/* FLOATING PLATFORM CARD */}
          {/* ============================================= */}

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[90px] left-[-25px] z-30 rounded-2xl border border-white/[0.08] bg-black/60 px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-xs text-white font-extrabold">
              Platform
            </p>

            <p className="mt-1 font-semibold text-white">
              Android + iOS
            </p>
          </motion.div>

          {/* Decorative dots */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute right-[35px] top-[80px] h-2 w-2 rounded-full bg-white"
          />

          <div className="absolute bottom-[60px] right-[40px] h-1.5 w-1.5 rounded-full bg-gray-600" />
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* SCROLL INDICATOR */}
      {/* ================================================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-5 right-6 hidden items-center gap-3 text-sm text-gray-600 lg:flex"
      >
        Scroll to explore

        <span>
          ↓
        </span>
      </motion.div>
    </section>
  );
}

function AnimatedLink({
  href,
  children,
  primary = false,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
    >
      <Link
        href={href}
        className={
          primary
            ? "block rounded-xl bg-white px-7 py-4 font-semibold text-black"
            : "block rounded-xl border border-gray-700 px-7 py-4 font-semibold text-white transition hover:border-white"
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}