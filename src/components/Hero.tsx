'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, ArrowRight, ArrowDown } from 'lucide-react';

const TITLES = [
  'Full Stack Developer',
  'Problem Solver',
  'Aspiring Software Engineer',
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(TITLES[0]);
      return;
    }

    const currentTitle = TITLES[titleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Type letter by letter
      if (displayedText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 60); // 60ms per letter typing speed
      } else {
        // Hold completed title for ~2.5 seconds
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else {
      // Erase letter by letter
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
        }, 30); // 30ms per letter deleting speed
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, shouldReduceMotion]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-16 overflow-hidden bg-[#FAF7F0] flex items-center">
      {/* Background Graphic Accents (Golden Circles & Geometric Rings) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-[#DCCB9A]/40 pointer-events-none translate-x-1/4 md:translate-x-10" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-tr from-[#E7C66A]/20 to-[#C99A2E]/10 blur-2xl pointer-events-none" />
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-[#C99A2E]/20 pointer-events-none" />

      {/* Decorative Dot Matrix Grid */}
      <div className="absolute right-6 bottom-12 hidden lg:grid grid-cols-6 gap-2 opacity-30 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#C99A2E]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C99A2E]/70 bg-[#FFFDF8] px-4 py-1.5 shadow-sm mb-6">
            <Code2 className="h-4 w-4 text-[#C99A2E]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#C99A2E] uppercase">
              FULL STACK MERN SPECIALIST
            </span>
          </div>

          {/* Main Title Heading with Decreased Font Size & Letter-by-Letter Typewriter Animation */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#0F172A] tracking-tight leading-[1.2]">
            Kurasa John Wesly
          </h1>

          {/* Rotating Subheading: Decreased Font Size + Letter by Letter Animation */}
          <div className="mt-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center">
            <span className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#F0C75E] via-[#D4AF37] to-[#C99A2E] tracking-tight inline-block">
              {displayedText}
              {!shouldReduceMotion && (
                <span className="inline-block w-[3px] h-[0.85em] bg-[#C99A2E] ml-1 align-middle animate-pulse" />
              )}
            </span>
          </div>

          {/* Accent Underline Bar */}
          <div className="h-1 w-20 bg-[#C99A2E] rounded-full my-6" />

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-xl">
            Data Science &amp; Engineering Student at NIAT (9.32 CGPA). <br className="hidden sm:inline" />
            Building production-ready MERN web platforms with scalable architectures.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C99A2E] via-[#D4AF37] to-[#C99A2E] text-[#FFFDF8] text-sm font-mono font-bold tracking-wider uppercase shadow-lg shadow-[#C99A2E]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={scrollToProjects}
              className="text-sm font-mono font-bold tracking-wider text-[#C99A2E] hover:text-[#0F172A] transition-colors flex items-center gap-2 group py-2"
            >
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform text-[#C99A2E]" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Exact Developer Portrait Photo Extracted from User Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-end"
        >
          <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] aspect-[1075/912] flex items-end justify-center">
            {/* Developer Portrait Image */}
            <div className="relative z-10 w-full h-full flex items-end justify-center drop-shadow-2xl overflow-hidden rounded-3xl">
              <Image
                src="/john_wesly_portrait.png"
                alt="Kurasa John Wesly - Full Stack Developer"
                width={1075}
                height={912}
                priority
                className="object-cover object-center w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
