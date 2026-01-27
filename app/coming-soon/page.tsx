"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="min-h-screen bg-[#f8f6f1] flex flex-col justify-between px-6 lg:px-12 py-12">
      {/* Logo */}
      <motion.div
        className="relative w-full max-w-[min(90vw,1200px)] h-[clamp(5rem,12vw,10rem)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/media/spice_bank_full.svg"
          alt="Spice Bank"
          fill
          className="object-contain object-left"
          priority
          sizes="(max-width: 768px) 90vw, 1200px"
        />
      </motion.div>

      {/* Middle Content */}
      <motion.div
        className="max-w-2xl mx-auto text-center py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="font-display text-3xl md:text-4xl leading-relaxed text-[#1a1a1a]">
          <em>When spring blooms, so do we.</em>
        </p>

        <p className="font-display text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/70 mt-8">
          Opening next season.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-end w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        <div className="relative max-w-[min(90vw,820px)] w-full h-[clamp(5rem,12vw,10rem)]">
          <Image
            src="/media/curated_flavours.svg"
            alt="Spice Bank"
            fill
            className="object-contain object-right"
            priority
            sizes="(max-width: 250px) 20vw, 120px"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default ComingSoon;
