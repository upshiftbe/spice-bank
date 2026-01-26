"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type MenuItem = {
  name: string;
  description?: string;
  price: number;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-display italic text-2xl text-[#1a1a1a]/60 mb-8">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="group flex justify-between items-baseline border-b border-[#1a1a1a]/10 pb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex-1">
              <h4 className="text-lg font-medium text-[#1a1a1a] group-hover:opacity-60 transition-opacity duration-300">
                {item.name}
              </h4>
              {item.description && (
                <p className="text-sm text-[#1a1a1a]/50 mt-1">
                  {item.description}
                </p>
              )}
            </div>
            <span className="text-lg font-medium text-[#1a1a1a] ml-8">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuSection;
