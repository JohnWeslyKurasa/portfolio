'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  type: 'internship' | 'education';
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    type: 'internship',
    period: 'June 2026 – July 2026',
    title: 'Web Development Intern',
    organization: 'Mother N Toddler',
    description:
      'Engineered a complete, production-ready MERN Stack retail e-commerce platform during intensive industry internship.',
    highlights: [
      'Developed responsive React.js frontend UIs and backend REST APIs using Node.js & Express.js.',
      'Integrated MongoDB Atlas database for dynamic product catalogs and order persistence.',
      'Implemented user authentication, shopping cart, wishlist, live order tracking, and admin management dashboard.',
      'Awarded official Web Development Internship Completion Certificate.',
    ],
  },
  {
    type: 'education',
    period: '2025 — Present (Second Year)',
    title: 'B.Tech in Data Science & Engineering',
    organization: 'NxtWave Institute of Advanced Technology (NIAT)',
    description:
      'Pursuing Bachelor of Technology with exceptional academic performance and practical full-stack software development focus.',
    highlights: [
      'Current Academic Performance: 9.32 / 10 CGPA.',
      'Core coursework in Data Structures, Algorithms, Database Systems, Object-Oriented Programming, and Web Engineering.',
      'Active developer building production full-stack MERN applications.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative z-20 bg-[#FAF7F0] py-32 px-6 md:px-16 border-t border-[#DCCB9A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCCB9A] bg-[#FFFDF8] px-4 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <Award className="h-4 w-4 text-[#C99A2E]" />
            <span className="text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
              EXPERIENCE &amp; EDUCATION
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] tracking-tight">
            Background &amp; <span className="text-gradient-gold">Milestones.</span>
          </h2>

          <p className="mt-4 text-[#6B665D] text-base md:text-lg max-w-xl font-normal">
            Internship deliverables, academic record, and software engineering credentials.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#DCCB9A] ml-4 md:ml-32 space-y-12">
          {EXPERIENCE_DATA.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-5 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-[#C99A2E] bg-[#FFFDF8] text-[#C99A2E] shadow-md">
                {item.type === 'internship' ? (
                  <Briefcase className="h-5 w-5" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-[#C99A2E]" />
                )}
              </div>

              {/* Card Body */}
              <div className="rounded-3xl glass-card glass-card-hover border border-[#DCCB9A] p-6 md:p-8 bg-[#FFFDF8] shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#C99A2E] font-bold tracking-wider uppercase">
                      {item.organization}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1C1C1C] mt-0.5">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C99A2E] font-bold bg-[#F3EEE3] px-3 py-1.5 rounded-full border border-[#DCCB9A] w-fit">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-[#6B665D] text-sm md:text-base font-normal leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 border-t border-[#DCCB9A] pt-4">
                  {item.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#1C1C1C] font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#C99A2E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
