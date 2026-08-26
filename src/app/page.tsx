'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-[#FAF7F0] text-[#1C1C1C] selection:bg-[#C99A2E] selection:text-[#FFFDF8]">
      {/* 1. Fixed Viewport Background Live Wallpaper */}
      <ScrollyCanvas />

      {/* 2. Fixed Glassmorphism Navbar */}
      <Navbar />

      {/* 3. Scrolling Portfolio Content */}
      <div className="relative z-10">
        {/* Hero, About & Academics Parallax Overlay Sections */}
        <div className="relative min-h-[280vh]">
          <Overlay />
        </div>

        {/* Portfolio Content Sections */}
        <div className="relative z-30">
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </div>
    </main>
  );
}
