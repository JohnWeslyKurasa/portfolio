'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-[#FAF7F0] text-[#1C1C1C] selection:bg-[#C99A2E] selection:text-[#FFFDF8]">
      {/* 1. Fixed Header Navigation Bar */}
      <Navbar />

      {/* 2. Primary Hero Section */}
      <Hero />

      {/* 3. About Me Section (With Small Portrait Photo & Details) */}
      <About />

      {/* 4. Portfolio Showcase Sections */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
