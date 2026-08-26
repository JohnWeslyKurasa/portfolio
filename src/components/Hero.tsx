'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

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

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] pt-36 pb-24 px-6 md:px-16 overflow-hidden bg-[#FAF7F0] flex items-center justify-center">
      {/* Background Graphic Accents (Golden Rings & Ambient Blur) */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#DCCB9A]/30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#E7C66A]/15 to-[#C99A2E]/10 blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Main Title Heading: Hi, I’m John Wesly Kurasa */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#0F172A] tracking-tight leading-[1.15]">
            Hi, I’m John Wesly Kurasa
          </h1>

          {/* Rotating Subheading: Letter by Letter Animation */}
          <div className="mt-4 min-h-[2.5rem] sm:min-h-[3.5rem] flex items-center justify-center">
            <span className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#F0C75E] via-[#D4AF37] to-[#C99A2E] tracking-tight inline-block">
              {displayedText}
              {!shouldReduceMotion && (
                <span className="inline-block w-[3px] h-[0.85em] bg-[#C99A2E] ml-1.5 align-middle animate-pulse" />
              )}
            </span>
          </div>

          {/* Accent Underline Bar */}
          <div className="h-1.5 w-24 bg-[#C99A2E] rounded-full my-8" />

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-2">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C99A2E] via-[#D4AF37] to-[#C99A2E] text-[#FFFDF8] text-sm font-mono font-bold tracking-wider uppercase shadow-lg shadow-[#C99A2E]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="px-7 py-4 rounded-xl border border-[#C99A2E] bg-[#FFFDF8] text-sm font-mono font-bold tracking-wider uppercase text-[#C99A2E] hover:bg-[#F3EEE3] hover:text-[#0F172A] transition-all flex items-center gap-2 shadow-sm"
            >
              <Mail className="h-4 w-4 text-[#C99A2E]" />
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
