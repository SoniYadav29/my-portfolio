// components/ProjectCard.jsx

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard() {
  const techStack = [
    "Next.js",
    "React",
    "MongoDB Atlas",
    "Tailwind CSS",
    "JavaScript",
    "REST API",
    "Vercel",
  ];

  const features = [
    "Secure Admin Dashboard",
    "Blog CRUD",
    "Job CRUD",
    "Dynamic Routing",
    "Responsive UI",
    "SEO Friendly",
    "MongoDB Atlas",
    "Performance",
  ];

  return (
    <section className="bg-[#F8F5EF] py-20 px-5 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid lg:grid-cols-[150px_1fr] gap-10">
          {/* Number */}
          <div className="hidden lg:block">
            <h1 className="text-[170px] font-black text-[#FFE7D4] leading-none">
              01
            </h1>
          </div>

          {/* Right */}
          <div>
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="max-w-3xl">
                <p className="uppercase tracking-[4px] text-[#FF6B00] text-sm font-semibold">
                  Featured Project
                </p>

                <h2 className="mt-3 text-4xl md:text-6xl font-bold text-[#1A1A1A]">
                  HireBlog
                </h2>

                <p className="mt-4 text-xl font-medium text-[#444]">
                  Full Stack Blog & Job Management Platform
                </p>

                <p className="mt-6 text-[#666] leading-8">
                  A production-ready full-stack application that allows
                  administrators to create, update, and manage blog posts and
                  job listings through a secure admin dashboard. All content is
                  stored in MongoDB Atlas and rendered dynamically for users.
                </p>
              </div>

              <div className="flex flex-col justify-end">
                <span className="text-sm uppercase tracking-widest text-[#999]">
                  Year
                </span>

                <h3 className="text-3xl font-bold text-[#1A1A1A]">2025</h3>
              </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              {/* Left */}
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">Tech Stack</h3>

                <div className="flex flex-wrap gap-3 mt-6">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="bg-[#FFF1E6] text-[#FF6B00] px-4 py-2 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features */}

                <h3 className="text-xl font-bold text-[#1A1A1A] mt-14">
                  Features
                </h3>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {features.map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-2xl border border-[#F1D6BF] p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FFF2E7] flex items-center justify-center mb-4">
                        <span className="text-[#FF6B00] font-bold">✓</span>
                      </div>

                      <p className="font-medium text-[#333]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}

              <div>
                <div className="relative rounded-[32px] overflow-hidden border border-[#F3D9C3] bg-white shadow-xl">
                  <Image
                    src="/projects/hireblog.png"
                    alt="HireBlog"
                    width={900}
                    height={650}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  {/* Overlay */}

                  <div className="absolute bottom-6 left-6 flex gap-4">
                    <a
                      href="#"
                      className="bg-[#FF6B00] text-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-[#e85f00] transition"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>

                    <a
                      href="#"
                      className="bg-white rounded-full px-6 py-3 border border-[#F3D9C3] hover:bg-[#FFF5ED] transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
