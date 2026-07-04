import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "HireBlog — Full-Stack Blog & Job Management Platform",
    description:
      "A full-stack web application that enables administrators to manage blogs and job postings through a secure dashboard. Built with Next.js and MongoDB Atlas, featuring authentication, CRUD operations, dynamic routing, responsive design, and a scalable component-based architecture.",
    image: "/techstack/adminpanel.png",
    link: "https://hireblog.vercel.app/",
    color: "bg-orange-300",
  },
  {
    title: "Developer Portfolio — Modern Interactive Portfolio",
    description:
      "A high-performance portfolio built with Next.js to showcase projects, skills, and professional experience. Features smooth animations, responsive layouts, optimized performance, resume download functionality, and an integrated contact form for recruiters.",
    image: "/techstack/portfolio.png",
    link: "https://hireblog.vercel.app",
    color: "bg-green-300",
  },
  {
    title: "IT Solutions — Corporate Business Website",
    description:
      "A responsive corporate website developed for an IT services company to showcase services, strengthen its online presence, and generate customer inquiries. Built with a focus on clean UI, responsive design, performance optimization, and user-friendly navigation.",
    image: "/techstack/surekhaItsolutions.png",
    link: "https://surekhaitsolutions.vercel.app",
    color: "bg-violet-300",
  },
];

export default function Projects() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl ">
        {/* Heading */}

        <h2 className="max-w-sm text-5xl font-semibold leading-tight tracking-tight text-white">
          Leading Companies
          <br />
          Have Trusted Us
        </h2>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="relative overflow-hidden rounded-[26px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-[260px] w-full rounded-[26px] object-cover transition duration-700 group-hover:scale-105"
                />

                <a
                  href={project.link}
                  target="_blank"
                  className={`absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#171717] text-white transition duration-300 group-hover:scale-110`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-neutral-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
