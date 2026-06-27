"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  //   Github,
  Check,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const width = carouselRef.current.clientWidth * 0.85;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="bg-black py-24 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
              Featured Work
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-6xl">Projects</h2>

            <p className="mt-5 max-w-2xl text-zinc-400 leading-7">
              A selection of projects focused on responsive design, performance,
              reusable components, and creating clean user experiences.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="rounded-full border border-zinc-800 bg-zinc-950 p-3 transition hover:border-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="rounded-full border border-zinc-800 bg-zinc-950 p-3 transition hover:border-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-5 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="snap-center shrink-0"
            >
              <div className="w-[320px] md:w-[560px] rounded-3xl  bg-zinc-950 overflow-hidden transition hover:border-zinc-700">
                {/* Image */}
                <div className="relative h-72 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center">
                  {/* Replace with next/image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-sm backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.emoji}</span>

                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>

                      <p className="text-zinc-500">{project.category}</p>
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <Check size={16} className="text-green-400" />

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 bg-black px-4 py-2 text-sm text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-10 flex gap-4">
                    <a
                      href={project.live}
                      className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>

                    {/* <a
                      href={project.github}
                      className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-white"
                    >
                      GitHub
                      <Github size={18} />
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-10 flex justify-center gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-2 w-12 rounded-full bg-zinc-800"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
