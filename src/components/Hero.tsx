import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#F7F7F5] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-[#FF5A0A]/10 px-4 py-2 mt-5 text-sm font-semibold text-[#FF5A0A]">
              👋 Hello, I&apos;m Soni Yadav
            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl  font-extrabold leading-tight text-neutral-900">
              Building <br />
              Modern{" "}
              <span className="text-[#FF5A0A]">
                Web
                <br />
                Experiences{" "}
              </span>{" "}
              That
              <br /> Users Love.
            </h1>

            <p className="mt-6 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg text-neutral-600 leading-8">
              Frontend Developer specializing in React, Next.js, Tailwind CSS,
              and JavaScript with a passion for crafting fast, accessible, and
              visually engaging web applications.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <button className="flex items-center justify-center gap-2 bg-[#FF5A0A] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                Hire Me <ArrowRight size={18} />
              </button>

              <button className="border-2 border-[#FF5A0A] text-neutral-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FF5A0A] hover:text-white transition">
                View Projects
              </button> */}
              <Link
                href="#contact"
                className="rounded-full bg-[#FF5A0A] px-8 py-4 font-semibold text-white transition hover:bg-[#e64f09]"
              >
                Hire Me
              </Link>

              <Link
                href="#"
                className="rounded-full border-2 border-[#FF5A0A] px-8 py-4 font-semibold text-neutral-900 transition hover:bg-[#FF5A0A] hover:text-white"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            {/* ORIGINAL STYLE SIZE WRAPPER (FIXED) */}
            <div className="relative w-[240px] sm:w-[310px] md:w-[360px] lg:w-[450px] h-[320px] sm:h-[420px] md:h-[500px] lg:h-[620px]">
              {/* PERFECT CIRCLE GLOW (NO OVAL) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-[#FF5A0A]/10 blur-3xl" />
              </div>

              {/* PERFECT CIRCLE RING */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full border-[18px] sm:border-[25px] lg:border-[40px] border-[#FF5A0A]/10" />
              </div>

              {/* IMAGE (UNCHANGED FEEL) */}
              <Image
                src="/techstack/soni.png"
                alt="Soni"
                fill
                priority
                className="object-contain z-10"
              />

              {/* FLOATING CARDS (SCALED BUT SAME DESIGN) */}

              {/* Available */}
              <div className="absolute left-[-25%] md:left-[-6%] top-[14%] bg-white shadow-xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#FF5A0A]">
                  Available for Freelance
                </h3>
              </div>

              {/* Projects */}
              <div className="absolute right-[-10%] md:right-[-6%] top-[30%] bg-white shadow-xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                <p className="text-[10px] sm:text-xs text-neutral-500">
                  Projects
                </p>
                <h3 className="text-sm sm:text-lg font-bold text-[#FF5A0A]">
                  30+
                </h3>
              </div>

              {/* Experience */}
              <div className="absolute left-[-20%] md:left-[0%] bottom-[24%] bg-white shadow-xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                <p className="text-[10px] sm:text-xs text-neutral-500">
                  Experience
                </p>
                <h3 className="text-sm sm:text-lg font-bold text-[#FF5A0A]">
                  2+ Years
                </h3>
              </div>

              {/* Tech */}
              <div className="absolute right-[-25%] md:right-[-8%] bottom-[0%] md:bottom-[14%] bg-white shadow-xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                <p className="text-[10px] sm:text-xs text-neutral-500">Tech</p>
                <div className="mt-1 flex gap-1 sm:gap-2">
                  <span className="text-[10px] sm:text-xs bg-[#FF5A0A]/10 text-[#FF5A0A] px-2 py-0.5 rounded-full">
                    React
                  </span>
                  <span className="text-[10px] sm:text-xs bg-[#FF5A0A]/10 text-[#FF5A0A] px-2 py-0.5 rounded-full">
                    Next.js
                  </span>
                </div>
              </div>

              {/* DECORATIONS (SAFE POSITIONED) */}
              <div className="absolute left-[10%] top-[8%] w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#FF5A0A]" />
              <div className="absolute right-[10%] bottom-[10%] w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-[#FF5A0A]" />
              <div className="absolute right-[18%] top-[10%] w-6 h-6 sm:w-8 sm:h-8 rotate-45 rounded-lg bg-[#FF5A0A]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
