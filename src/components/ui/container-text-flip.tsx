"use client";

import React, { useState, useEffect } from "react";

import { motion } from "motion/react";
import { cn } from "@/utils/index";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    // inline-grid + every word placed at row/col 1 makes the container size to
    // the widest word permanently — switching the visible word never reflows
    // the surrounding heading.
    <span
      className={cn(
        "relative inline-grid align-middle rounded-lg py-1.5 px-[15px] text-center text-3xl font-bold text-black md:text-5xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className,
      )}
    >
      {words.map((word, wIdx) => {
        const isActive = wIdx === currentWordIndex;
        return (
          <span
            key={word}
            aria-hidden={!isActive}
            className={cn(
              "col-start-1 row-start-1 whitespace-nowrap",
              textClassName,
            )}
          >
            {word.split("").map((letter, lIdx) => (
              <motion.span
                key={lIdx}
                className="inline-block"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={
                  isActive
                    ? { opacity: 1, filter: "blur(0px)" }
                    : { opacity: 0, filter: "blur(10px)" }
                }
                transition={{
                  duration: animationDuration / 1000,
                  delay: isActive ? lIdx * 0.02 : 0,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
