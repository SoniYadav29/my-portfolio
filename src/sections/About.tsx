"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const revealText =
  "I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.";

export default function About() {
  const revealRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["start center", "end center"],
  });

  const words = revealText.trim().split(/\s+/);

  return (
    <section className="bg-[#f3f3f3]">
      {/* Scroll Reveal Section */}
      <section ref={revealRef} className="py-15 md:py-md-24">
        <div className="px-5 md:px-20 max-w-7xl">
          <p className="text-[clamp(2rem,7vw,4rem)] leading-[0.95] font-medium">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 0.18;

              return (
                <Word
                  key={index}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="pb-24">
        <div className="px-5 md:px-20">
          <p className="text-sm text-zinc-500 pb-5">About Me</p>

          <div className="mb-0 md:mb-14 border-t border-zinc-300" />

          <div className="grid gap-8 md:gap-16 lg:grid-cols-2 pt-8">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                Hi, I&apos;m
                <br />
                Soni Yadav.
              </h2>
            </div>

            {/* Right */}
            <div className="max-w-xl">
              <p className="text-lg leading-8 text-zinc-700">
                I&apos;m a Frontend Developer with 1.5+ years of experience
                creating responsive, scalable, and user-centric web
                applications. Currently working as a UI Developer, I specialize
                in developing modern interfaces, verification workflows,
                dashboards, and business portals using HTML, CSS, JavaScript,
                Bootstrap, Tailwind CSS, React, and Next.js.
              </p>

              <p className="text-lg leading-8 text-zinc-700 pt-5">
                My passion lies in transforming designs into high-quality web
                experiences while ensuring performance, accessibility,
                responsiveness, and maintainability. I continuously explore
                modern web technologies and best practices to build products
                that deliver real business value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

type WordProps = {
  children: string;
  progress: any;
  range: number[];
};

function Word({ children, progress, range }: WordProps) {
  const color = useTransform(progress, range, [
    "rgb(161,161,170)",
    "rgb(24,24,27)",
  ]);

  return (
    <motion.span style={{ color }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}
