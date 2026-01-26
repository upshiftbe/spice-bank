"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f1] flex flex-col justify-between px-6 lg:px-12 pt-32 pb-12">
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
        <p className="font-display text-xl md:text-2xl leading-relaxed text-[#1a1a1a]">
          <span className="underline decoration-1 underline-offset-4">
            A new chapter in
          </span>{" "}
          <em>Dining</em> begins.
        </p>
        <p className="font-display text-xl md:text-2xl leading-relaxed text-[#1a1a1a] mt-2">
          Refined yet daring,{" "}
          <em className="underline decoration-1 underline-offset-4">
            Timeless yet Fresh
          </em>
          . This captures it all.
        </p>
        <p className="font-display text-xl md:text-2xl leading-relaxed text-[#1a1a1a] mt-2">
          We&apos;ve crafted{" "}
          <em className="underline decoration-1 underline-offset-4">
            More Than a Menu
          </em>
          , we&apos;ve shaped an identity.
        </p>
        <p className="font-display text-xl md:text-2xl leading-relaxed text-[#1a1a1a] mt-2">
          Elegant, confident, and{" "}
          <em className="underline decoration-1 underline-offset-4">
            Ready to Make its Mark
          </em>
          .
        </p>

        <motion.p
          className="font-display italic text-3xl md:text-4xl mt-12 text-[#1a1a1a]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          By Marie
        </motion.p>
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

export default Hero;
