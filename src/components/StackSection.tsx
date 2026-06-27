"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stackData } from "./stack-data";

gsap.registerPlugin(ScrollTrigger);

export default function StackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 120 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    [],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>(".stack-group");

      groups.forEach((group) => {
        const title = group.querySelector(".stack-title");
        const skills = group.querySelectorAll(".stack-skill");

        // initial state
        gsap.set(title, {
          opacity: 0,
          y: 120,
        });

        gsap.set(skills, {
          opacity: 0,
          y: 90,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,

            // ✅ FIX: mobile-safe trigger position
            start: "top 98%",
            end: "top 40%",

            scrub: 1,

            // ✅ important for responsive recalculation
            invalidateOnRefresh: true,

            // ✅ fixes “stuck visible” on mobile
            toggleActions: "play none none reverse",
          },
        });

        tl.to(title, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        });

        tl.to(
          skills,
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.6",
        );
      });

      // ✅ IMPORTANT: fixes mobile layout calculation issues
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#000000] py-32 text-white"
    >
      {/* particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-16">
        <div className="mb-20">
          <h3 className="text-lg uppercase tracking-[0.2em] text-zinc-300">
            ✱ MY STACK
          </h3>
        </div>

        {stackData.map((group) => (
          <div
            key={group.title}
            className="stack-group mb-24 grid lg:grid-cols-[350px_1fr] gap-20"
          >
            {/* TITLE */}
            <div>
              <h2 className="stack-title text-3xl md:text-5xl font-bold uppercase leading-none text-white">
                {group.title}
              </h2>
            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="stack-skill flex items-center gap-4"
                  >
                    <Icon size={30} color={skill.color} />

                    <span className="text-xl md:text-2xl text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
