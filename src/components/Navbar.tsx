'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#DCCB9A]/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between relative">
        {/* Left Side: Brand Name & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-[#DCCB9A] bg-[#FFFDF8] text-[#C99A2E] shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#C99A2E]" /> : <Menu className="h-5 w-5 text-[#C99A2E]" />}
          </button>

          <a href="#top" className="font-serif font-bold text-base sm:text-lg text-[#0F172A] tracking-tight hover:text-[#C99A2E] transition-colors">
            John Wesly Kurasa<span className="text-[#C99A2E]">.</span>
          </a>
        </div>

        {/* Centered Navigation Bar (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#FFFDF8]/90 backdrop-blur-md border border-[#DCCB9A] shadow-sm absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-xs font-mono font-bold text-[#6B665D] hover:text-[#1C1C1C] hover:bg-[#F3EEE3] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: LinkedIn & GitHub Badges (Matching Reference Screenshot) */}
        <div className="flex items-center gap-2.5 z-10 ml-auto md:ml-0">
          <a
            href="https://linkedin.com/in/john-wesly-kurasa-87a5bb36a"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-xl border border-[#DCCB9A] bg-[#FFFDF8] hover:bg-[#F3EEE3] text-xs font-mono font-bold text-[#1C1C1C] shadow-sm transition-all flex items-center gap-1.5"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#6B665D]" />
          </a>

          <a
            href="https://github.com/JohnWeslyKurasa"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-xl border border-[#DCCB9A] bg-[#FFFDF8] hover:bg-[#F3EEE3] text-xs font-mono font-bold text-[#1C1C1C] shadow-sm transition-all flex items-center gap-1.5"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4 text-[#1C1C1C]" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF7F0]/95 backdrop-blur-xl border-t border-[#DCCB9A] px-6 py-6 shadow-2xl mt-3"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl bg-[#FFFDF8] border border-[#DCCB9A] text-base font-mono font-bold text-[#C99A2E] active:bg-[#F3EEE3] shadow-sm flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#6B665D]">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
