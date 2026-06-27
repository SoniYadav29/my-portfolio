"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ProcessCard from "./ProcessCard";
import { processSteps } from "@/data/processData";

export default function Process() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[900vh] bg-[#f7f7f5]" id="process">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center  justify-center">
          <div className="text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-500 uppercase">
              Process
            </p>

            <h2 className="text-3xl md:text-5xl text-black font-bold leading-none">
              My Development Process
            </h2>

            <p className="mt-6 max-w-xl text-zinc-500">
              Every successful product starts with a clear process. From
              understanding requirements to deployment, I follow a structured
              workflow that ensures quality, performance, and exceptional user
              experience.
            </p>
          </div>

          <div className="relative h-[300px] w-[400px] mt-[100px]">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.id}
                step={step}
                index={index}
                total={processSteps.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
