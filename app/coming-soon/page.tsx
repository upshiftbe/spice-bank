"use client";

import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f1] flex flex-col justify-between px-6 lg:px-12 py-12">
      {/* Top Title */}
      <motion.h1
        className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-[#1a1a1a] uppercase"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Spice
      </motion.h1>

      {/* Middle Content */}
      <motion.div
        className="max-w-2xl mx-auto text-center py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="font-display text-3xl md:text-4xl leading-relaxed text-[#1a1a1a]">
          <em>Coming Soon</em>
        </p>

        <p className="font-display text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/70 mt-8">
          A new chapter in{" "}
          <span className="underline decoration-1 underline-offset-4">
            dining
          </span>{" "}
          begins.
        </p>
      </motion.div>

      {/* Bottom Title */}
      <motion.h1
        className="text-[18vw] md:text-[16vw] lg:text-[14vw] font-black leading-[0.85] tracking-tighter text-[#1a1a1a] uppercase text-right"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        Bank
      </motion.h1>
    </section>
  );
};

export default ComingSoon;
