'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Terminal, CheckCircle2 } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  skills: { name: string; description: string }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Full-Stack & Web',
    icon: Code,
    skills: [
      { name: 'React.js', description: 'Component Architecture, Hooks, Context, State Management' },
      { name: 'JavaScript (ES6+)', description: 'Async/Await, Promises, Closures, DOM Manipulation' },
      { name: 'HTML5 & CSS3', description: 'Semantic Layouts, Flexbox, Grid, Responsive Design' },
      { name: 'Tailwind CSS', description: 'Utility-first Styling, Responsive Tokens, Glassmorphism' },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: Server,
    skills: [
      { name: 'Node.js', description: 'RESTful API Engineering, Event-Driven Architecture' },
      { name: 'Express.js', description: 'Middleware, Routing, JWT Authentication, Security' },
      { name: 'MongoDB & Atlas', description: 'Document Schemas, Mongoose ODM, Aggregations' },
      { name: 'SQL & Relational DBs', description: 'Complex Queries, Indexing, Schema Design' },
    ],
  },
  {
    category: 'Languages & Tools',
    icon: Wrench,
    skills: [
      { name: 'Python & C++', description: 'Algorithms, Data Structures, OOP Principles' },
      { name: 'Git & GitHub', description: 'Version Control, Branching, Pull Requests, Actions' },
      { name: 'Postman & APIs', description: 'API Testing, Endpoint Debugging, Mock Servers' },
      { name: 'Vercel & Render', description: 'Continuous Deployment, Cloud Hosting, Environment Variables' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative z-20 bg-[#FAF7F0] py-32 px-6 md:px-16 border-t border-[#DCCB9A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCCB9A] bg-[#FFFDF8] px-4 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <Terminal className="h-4 w-4 text-[#C99A2E]" />
            <span className="text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
              TECHNICAL PROFICIENCY
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] tracking-tight">
            Technical <span className="text-gradient-gold">Skills &amp; Stack.</span>
          </h2>

          <p className="mt-4 text-[#6B665D] text-base md:text-lg font-normal">
            Full-stack engineering capabilities across modern frontend frameworks, backend engines, databases, and deployment platforms.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-3xl glass-card glass-card-hover border border-[#DCCB9A] bg-[#FFFDF8] p-8 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-[#F3EEE3] border border-[#DCCB9A] text-[#C99A2E]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1C1C1C]">{group.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-[#F3EEE3] border border-[#DCCB9A] hover:border-[#C99A2E] transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 className="h-4 w-4 text-[#C99A2E] shrink-0" />
                          <span className="text-sm font-bold text-[#1C1C1C]">{skill.name}</span>
                        </div>
                        <p className="text-xs text-[#6B665D] font-mono pl-6 leading-relaxed font-medium">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
