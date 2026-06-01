'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 px-6 md:px-16 bg-[#FAF7F0] border-t border-[#DCCB9A]/30">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-[#E7C66A]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-[#C99A2E] rounded-full mt-4" />
        </div>

        {/* Content Grid: Small Photo & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Small Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <div className="relative group max-w-[240px] sm:max-w-[260px] w-full">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C99A2E] to-[#E7C66A] opacity-20 blur-md group-hover:opacity-35 transition-opacity" />

              {/* Small Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCCB9A] bg-[#FFFDF8] shadow-lg aspect-[4/5]">
                <Image
                  src="/john_wesly_portrait.jpg"
                  alt="John Wesly Kurasa"
                  width={400}
                  height={500}
                  className="object-cover object-top w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name Badge Overlay */}
              <div className="mt-4 text-center">
                <h3 className="font-serif font-bold text-lg text-[#0F172A]">John Wesly Kurasa</h3>
                <p className="text-xs font-mono font-semibold text-[#C99A2E]">Data Science & Engineering</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="bg-[#FFFDF8] p-6 sm:p-8 rounded-3xl border border-[#DCCB9A]/40 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0F172A] mb-3">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-[#475569] text-base leading-relaxed mb-4">
                I am a Data Science & Engineering student at <strong className="text-[#0F172A]">NIAT</strong> with a strong academic standing of <strong className="text-[#C99A2E]">9.32 CGPA</strong>. I specialize in building robust, user-centric web applications using the <strong className="text-[#0F172A]">MERN Stack</strong> (MongoDB, Express, React, Node.js) and modern tools like Next.js and TypeScript.
              </p>
              <p className="text-[#475569] text-base leading-relaxed">
                During my internship at <strong className="text-[#0F172A]">Mother N Toddler</strong>, I developed a production-grade e-commerce retail platform featuring secure authentication, cart management, wishlists, and complete admin dashboard controls.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
