"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    setTimeout(() => {
      animate(
        "span",
        { opacity: 1 },
        { duration: 2, delay: stagger(0.1) }
      );
    }, 2000);
  },[scope.current]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={cn(
            "opacity-0", // Default hidden state
            idx > 3 ? "text-purple" : "dark:text-white text-black"
          )}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      {/* Ensure static fallback */}
      <noscript>
        <div className="font-bold opacity-100 dark:text-white text-black leading-snug tracking-wide">
          {words}
        </div>
      </noscript>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
