"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface Props {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export default function ProcessCard({ step, index, total, progress }: Props) {
  const cardStart = index / total;
  const cardEnd = (index + 1) / total;

  const baseRotations = [-4, 3, -2, 2, -1, 1];

  const y = useTransform(
    progress,
    [cardStart, cardStart + 0.1, cardEnd],
    [0, 0, -2200],
  );

  const rotate = useTransform(
    progress,
    [cardStart, cardStart + 0.1, cardEnd],
    [baseRotations[index], baseRotations[index], -28],
  );

  const opacity = useTransform(
    progress,
    [cardStart, cardStart + 0.1, cardEnd],
    [1, 1, 0],
  );

  return (
    <motion.div
      style={{
        y,
        rotate,
        opacity,
        zIndex: total - index,
      }}
      className="
      absolute
      left-1/2
      top-1/2

      border
      shadow-lg

      h-[300px]
      w-[400px]

      -translate-x-1/2
      -translate-y-1/2

      rounded-lg
      bg-white
      p-10
      "
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <span className="text-orange-500 font-semibold">{step.id}</span>

          <h3 className="mt-4 text-4xl text-black font-bold">{step.title}</h3>
        </div>

        <p className="max-w-md text-zinc-500">{step.description}</p>
      </div>
    </motion.div>
  );
}
