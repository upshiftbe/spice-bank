"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#f8f6f1] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Tagline */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-wider uppercase mb-4">
              Spice Bank
            </h3>
            <p className="font-display italic text-lg text-[#f8f6f1]/60">
              A new chapter in dining
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-[#f8f6f1]/40">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p>123 Culinary Street</p>
              <p>London, W1 2AB</p>
              <p className="mt-4">020 1234 5678</p>
              <p>hello@spicebank.be</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-[#f8f6f1]/40">
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              <p>Tuesday — Thursday</p>
              <p className="text-[#f8f6f1]/60">6pm — 11pm</p>
              <p className="mt-4">Friday — Saturday</p>
              <p className="text-[#f8f6f1]/60">6pm — 12am</p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm tracking-wider uppercase mb-6 text-[#f8f6f1]/40">
              Follow
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="block hover:opacity-50 transition-opacity duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block hover:opacity-50 transition-opacity duration-300"
              >
                Twitter
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#f8f6f1]/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] md:text-xs text-[#f8f6f1]/35">
          <p>
            &copy; {new Date().getFullYear()} Spice Bank. All rights reserved. Build with 💪 by{" "}
            <a
              href="https://upshift.be"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f8f6f1]/70 transition-colors duration-300"
            >
              upshift
            </a>
          </p>
          <div className="flex space-x-6 mt-0">
            <a
              href="#"
              className="hover:text-[#f8f6f1] transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-[#f8f6f1] transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
