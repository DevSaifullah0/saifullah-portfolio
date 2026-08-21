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

  // =====================================================
  // POINTER
  // =====================================================

  const handlePointerMove = (event) => {
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

  const resetPointer = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="
        relative
        mx-auto
        min-h-[calc(100vh-81px)]
        max-w-7xl
        overflow-hidden
        px-6
        py-14
        lg:py-20
      "
    >
      {/* ================================================= */}
      {/* HERO GRID */}
      {/* ================================================= */}

      <div
        className="
          grid
          min-h-[calc(100vh-180px)]
          items-center
          gap-12
          lg:grid-cols-[1.15fr_0.85fr]
        "
      >
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
            className="
              text-5xl
              font-bold
              leading-[1.02]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              xl:text-8xl
            "
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
            className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-gray-400
              sm:text-lg
              md:text-xl
            "
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
            className="
              mt-14
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
              text-sm
              text-gray-600
            "
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
        {/* MOBILE + DESKTOP */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
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
          className="
            relative
            flex
            h-[430px]
            w-full
            items-end
            justify-center
            sm:h-[510px]
            lg:h-[620px]
          "
          style={{
            perspective: "1200px",
          }}
        >
          {/* Background Glow */}

          <motion.div
            style={{
              x: glowX,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[290px]
              w-[290px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.04]
              blur-[80px]
              sm:h-[360px]
              sm:w-[360px]
              lg:h-[420px]
              lg:w-[420px]
              lg:blur-[90px]
            "
          />

          {/* ================================================= */}
          {/* ROTATING RING 1 */}
          {/* ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/[0.06]
              sm:h-[380px]
              sm:w-[380px]
              lg:h-[430px]
              lg:w-[430px]
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                absolute
                left-1/2
                top-[-4px]
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-white
              "
            />
          </motion.div>

          {/* ================================================= */}
          {/* ROTATING RING 2 */}
          {/* ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-white/[0.035]
              sm:h-[440px]
              sm:w-[440px]
              lg:h-[510px]
              lg:w-[510px]
            "
          />

          {/* ================================================= */}
          {/* PORTRAIT FRAME */}
          {/* ================================================= */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-0
              z-10
              h-[390px]
              w-[275px]
              overflow-hidden
              rounded-[34px]
              border
              border-white/[0.08]
              bg-white/[0.018]
              sm:h-[465px]
              sm:w-[330px]
              sm:rounded-[38px]
              lg:bottom-5
              lg:h-[540px]
              lg:w-[390px]
              lg:rounded-[42px]
            "
          >
            {/* Top Left */}

            <div
              className="
                absolute
                left-4
                top-4
                z-20
                h-9
                w-9
                border-l
                border-t
                border-white/20
                lg:left-5
                lg:top-5
                lg:h-10
                lg:w-10
              "
            />

            {/* Top Right */}

            <div
              className="
                absolute
                right-4
                top-4
                z-20
                h-9
                w-9
                border-r
                border-t
                border-white/20
                lg:right-5
                lg:top-5
                lg:h-10
                lg:w-10
              "
            />

            {/* Bottom Left */}

            <div
              className="
                absolute
                bottom-4
                left-4
                z-20
                h-9
                w-9
                border-b
                border-l
                border-white/10
                lg:bottom-5
                lg:left-5
              "
            />

            {/* Bottom Right */}

            <div
              className="
                absolute
                bottom-4
                right-4
                z-20
                h-9
                w-9
                border-b
                border-r
                border-white/10
                lg:bottom-5
                lg:right-5
              "
            />

            {/* Background */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/[0.03]
                via-transparent
                to-black/40
              "
            />

            {/* ================================================= */}
            {/* YOUR IMAGE */}
            {/* ================================================= */}

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
              animate={{
                translateY: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-0
                left-1/2
                h-[96%]
                max-h-full
                w-auto
                max-w-[95%]
                -translate-x-1/2
                object-contain
                object-bottom
                drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]
                lg:max-w-none
              "
            />

            {/* Bottom Fade */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                h-[20%]
                bg-gradient-to-t
                from-black/40
                to-transparent
              "
            />
          </motion.div>

          {/* ================================================= */}
          {/* FLOATING SPECIALIZATION CARD */}
          {/* Desktop only */}
          {/* ================================================= */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[-15px]
              top-[120px]
              z-30
              hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-black/60
              px-5
              py-4
              backdrop-blur-xl
              lg:block
            "
          >
            <p className="text-xs font-extrabold text-white">
              Specialization :
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              React Native
            </p>

            <p className="mt-1 text-xs text-white">
              Frontend Development
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* PLATFORM CARD */}
          {/* Tablet/Desktop */}
          {/* ================================================= */}

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[70px]
              left-0
              z-30
              hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-black/60
              px-4
              py-3
              backdrop-blur-xl
              sm:block
              lg:bottom-[90px]
              lg:left-[-25px]
              lg:px-5
              lg:py-4
            "
          >
            <p className="text-xs font-extrabold text-white">
              Platform
            </p>

            <p className="mt-1 font-semibold text-white">
              Android + iOS
            </p>
          </motion.div>

          {/* Decorative Dot */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              right-[12%]
              top-[12%]
              h-2
              w-2
              rounded-full
              bg-white
              sm:right-[18%]
              lg:right-[35px]
              lg:top-[80px]
            "
          />
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* MOBILE LABEL */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          mt-3
          flex
          items-center
          justify-center
          gap-3
          text-xs
          text-gray-600
          lg:hidden
        "
      >
        <span>React Native Developer</span>

        <span>•</span>

        <span>Android + iOS</span>
      </motion.div>

      {/* ================================================= */}
      {/* DESKTOP SCROLL INDICATOR */}
      {/* ================================================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-5
          right-6
          hidden
          items-center
          gap-3
          text-sm
          text-gray-600
          lg:flex
        "
      >
        Scroll to explore

        <span>↓</span>
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
            ? "block rounded-xl bg-white px-6 py-3.5 font-semibold text-black sm:px-7 sm:py-4"
            : "block rounded-xl border border-gray-700 px-6 py-3.5 font-semibold text-white transition hover:border-white sm:px-7 sm:py-4"
        }
      >
        {children}
      </Link>
    </motion.div>
  );
}