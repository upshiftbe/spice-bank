"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type DiningSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  index: number;
};

const DiningSection = ({
  title,
  subtitle,
  description,
  index,
}: DiningSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="border-t border-[#1a1a1a]/20 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Number */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-sm text-[#1a1a1a]/40">
            0{index + 1}
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
            {title}
          </h3>
          <p className="font-display italic text-lg mt-2 text-[#1a1a1a]/60">
            {subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg leading-relaxed text-[#1a1a1a]/70 max-w-xl">
            {description}
          </p>
          <button className="mt-8 text-sm tracking-wide border-b border-[#1a1a1a] pb-1 hover:opacity-50 transition-opacity duration-300">
            Explore
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DiningSection;
