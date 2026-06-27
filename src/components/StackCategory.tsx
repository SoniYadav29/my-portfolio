"use client";

import { useLayoutEffect, useRef, type ComponentType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  skills: {
    name: string;
    icon: ComponentType<{ className?: string; color?: string }>;
    color: string;
  }[];
}

export default function StackCategory({ title, skills }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".skill-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid lg:grid-cols-2 gap-12 md:gap-20 py-24 md:py-40"
    >
      {/* TITLE */}
      <div>
        <h2 className="text-4xl md:text-[80px] font-black leading-none text-zinc-300">
          {title}
        </h2>
      </div>

      {/* SKILLS GRID (FIXED) */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-16 gap-y-8 md:gap-y-10">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="skill-item flex items-center gap-3 md:gap-4"
            >
              {/* RESPONSIVE ICON SIZE */}
              <Icon className="text-xl md:text-3xl" color={skill.color} />

              <span className="text-lg md:text-3xl text-zinc-200">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
