'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Code2, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack MERN' | 'AI & Web' | 'E-Commerce';
  description: string;
  features: string[];
  tags: string[];
  metrics: string;
  demoUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 'mother-n-toddler',
    title: 'Mother N Toddler',
    subtitle: 'Production MERN Stack Retail E-Commerce Platform',
    category: 'Full Stack MERN',
    description:
      'Full-scale retail e-commerce system featuring secure user authentication, dynamic product catalog management, persistent cart & wishlist state, live order tracking, and an administrative dashboard for inventory & sales metrics.',
    features: [
      'JWT Authentication & Protected User Routes',
      'MongoDB Atlas Schema & Mongoose Data Pipelines',
      'Cart, Wishlist & Dynamic Order Status Tracking',
      'Admin Portal for Product & Inventory Control',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'Vercel'],
    metrics: 'Production MERN App',
    demoUrl: 'https://motherntoddler-two.vercel.app',
    githubUrl: 'https://github.com/JohnWeslyKurasa/toys-shop',
  },
  {
    id: 'voxbridge',
    title: 'VoxBridge',
    subtitle: 'Real-Time AI Voice & Communication Bridge',
    category: 'AI & Web',
    description:
      'Cutting-edge real-time voice translation and audio bridge platform enabling seamless speech synthesis, low-latency audio processing, and responsive cross-platform communication interfaces.',
    features: [
      'Web Audio Stream Processing & Speech Synthesis',
      'Low-Latency API Routing with Node.js & Express',
      'Reactive UI State Management with React.js',
      'Deployed Production Microservice Architecture',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'Web Audio API', 'TypeScript', 'Vercel'],
    metrics: 'Live Vercel Platform',
    demoUrl: 'https://voxbridge-seven.vercel.app/',
    githubUrl: 'https://github.com/JohnWeslyKurasa/voxbridge',
  },
  {
    id: 'buy-pilot',
    title: 'BuyPilot',
    subtitle: 'AI-Assisted Smart Product Discovery Engine',
    category: 'AI & Web',
    description:
      'Intelligent AI-assisted product recommendation and discovery web application designed to help users search, compare, and discover items through natural language search and smart filters.',
    features: [
      'AI API Integration for Smart Recommendations',
      'Dynamic Product Filtering & Comparison Interface',
      'REST API Data Fetching with Express.js Backend',
      'Cloud Database Integration with MongoDB Atlas',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI API Integration', 'Vercel'],
    metrics: 'Live AI Web App',
    demoUrl: 'https://buy-pilot-tau.vercel.app',
    githubUrl: 'https://github.com/JohnWeslyKurasa/buy-pilot',
  },
  {
    id: 'shopy-friendly',
    title: 'Shopy Friendly',
    subtitle: 'Modern Responsive Online Shopping Portal',
    category: 'E-Commerce',
    description:
      'Lightweight online shopping website built with responsive layouts, user authentication, catalog browsing, shopping cart workflow, and optimized mobile user experience.',
    features: [
      'User Sign-Up, Login & Session Management',
      'Fast Catalog Search & Dynamic Product Cards',
      'Responsive Flexbox & Grid UI Layouts',
      'Deployed Production Frontend & Backend',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Vercel'],
    metrics: 'Full Stack Web',
    demoUrl: 'https://shopy-friendly.vercel.app',
    githubUrl: 'https://github.com/JohnWeslyKurasa/shopy-friendly',
  },
];

const CATEGORIES = ['All', 'Full Stack MERN', 'AI & Web', 'E-Commerce'] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative z-30 bg-[#FAF7F0] py-32 px-6 md:px-16 overflow-hidden border-t border-[#DCCB9A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCCB9A] bg-[#FFFDF8] px-4 py-1.5 mb-4 shadow-sm">
              <Code2 className="h-4 w-4 text-[#C99A2E]" />
              <span className="text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
                PRODUCTION FULL-STACK PROJECTS
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] tracking-tight">
              Featured <span className="text-gradient-gold">Projects.</span>
            </h2>

            <p className="mt-4 text-[#6B665D] text-base md:text-lg max-w-2xl font-normal">
              Detailed breakdown of production MERN stack web applications, AI platforms, and real-time audio software built and deployed live on Vercel by Kurasa John Wesly.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#F3EEE3] border border-[#DCCB9A]">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#C99A2E] text-[#FFFDF8] shadow-md font-bold'
                    : 'text-[#6B665D] hover:text-[#1C1C1C] hover:bg-white/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl glass-card glass-card-hover overflow-hidden border border-[#DCCB9A] bg-[#FFFDF8] p-8 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#C99A2E] font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                      <span className="text-[#6B665D]">•</span>
                      <span className="text-xs font-mono text-[#C99A2E] font-semibold">
                        {project.metrics}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-lg bg-[#F3EEE3] hover:bg-[#DCCB9A]/30 border border-[#DCCB9A] text-[#1C1C1C] transition-colors flex items-center gap-1.5 text-xs font-mono font-semibold"
                        title="GitHub Repository"
                      >
                        <Github className="h-4 w-4 text-[#C99A2E]" />
                        <span className="hidden sm:inline">CODE</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-lg bg-[#C99A2E] text-[#FFFDF8] hover:bg-[#C99A2E]/90 shadow-md transition-colors flex items-center gap-1 text-xs font-mono font-bold"
                        title="Open Live Application"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-3xl font-extrabold text-[#1C1C1C] group-hover:text-[#C99A2E] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-[#C99A2E] font-semibold mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm text-[#6B665D] font-normal leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 mb-6 bg-[#F3EEE3] p-4 rounded-2xl border border-[#DCCB9A]">
                    <span className="text-xs font-mono text-[#6B665D] font-semibold uppercase tracking-widest block mb-2">
                      KEY ARCHITECTURE FEATURES
                    </span>
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#1C1C1C] font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#C99A2E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#DCCB9A]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F3EEE3] text-[#C99A2E] font-semibold border border-[#DCCB9A] group-hover:border-[#C99A2E] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
