'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Phone, ArrowUp } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'john.kurasa@gmail.com';
  const phoneNumber = '+91 9100812760';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative z-20 bg-[#FAF7F0] pt-32 pb-12 px-6 md:px-16 border-t border-[#DCCB9A] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#C99A2E]/10 to-[#E7C66A]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Left Column: Direct Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCCB9A] bg-[#FFFDF8] px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm">
                <Mail className="h-4 w-4 text-[#C99A2E]" />
                <span className="text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-extrabold text-[#1C1C1C] tracking-tight leading-tight">
                Let&apos;s connect &amp; <br />
                <span className="text-gradient-gold">collaborate.</span>
              </h2>

              <p className="mt-6 text-[#6B665D] text-base md:text-lg max-w-lg font-normal leading-relaxed">
                Currently seeking **Software Development &amp; Full Stack Development Internship** roles. Feel free to contact me directly for hiring or project discussions.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-10 space-y-4 max-w-md">
              <div className="p-5 rounded-2xl glass-card border border-[#DCCB9A] bg-[#FFFDF8] shadow-md">
                <span className="text-[11px] font-mono text-[#6B665D] font-semibold uppercase tracking-widest block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-4">
                  <a href={`mailto:${emailAddress}`} className="text-sm font-mono text-[#C99A2E] font-bold hover:underline">
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F3EEE3] hover:bg-[#DCCB9A]/30 text-[#C99A2E] text-xs font-mono font-bold transition-colors border border-[#DCCB9A] shrink-0"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-[#DCCB9A] bg-[#FFFDF8] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#6B665D] font-semibold uppercase tracking-widest block mb-1">
                    PHONE CONTACT
                  </span>
                  <a href={`tel:${phoneNumber}`} className="text-sm font-mono text-[#1C1C1C] font-bold hover:text-[#C99A2E]">
                    {phoneNumber}
                  </a>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F3EEE3] text-[#C99A2E] border border-[#DCCB9A]">
                  <Phone className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl glass-card border border-[#DCCB9A] p-8 md:p-10 bg-[#FFFDF8] shadow-lg">
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">Send Kurasa a Message</h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#F3EEE3] border border-[#DCCB9A] text-center"
              >
                <div className="h-12 w-12 rounded-full bg-[#FAF7F0] text-[#C99A2E] border border-[#DCCB9A] flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-[#1C1C1C] mb-2">Message Delivered!</h4>
                <p className="text-sm text-[#6B665D] font-normal">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-[#6B665D] font-semibold mb-2 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Hiring Manager"
                    className="w-full rounded-xl bg-[#F3EEE3] border border-[#DCCB9A] px-4 py-3.5 text-sm text-[#1C1C1C] placeholder-[#6B665D]/60 focus:border-[#C99A2E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6B665D] font-semibold mb-2 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full rounded-xl bg-[#F3EEE3] border border-[#DCCB9A] px-4 py-3.5 text-sm text-[#1C1C1C] placeholder-[#6B665D]/60 focus:border-[#C99A2E] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#6B665D] font-semibold mb-2 uppercase">Message / Opportunity Details</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We would like to discuss full-stack internship opportunities with you..."
                    className="w-full rounded-xl bg-[#F3EEE3] border border-[#DCCB9A] px-4 py-3.5 text-sm text-[#1C1C1C] placeholder-[#6B665D]/60 focus:border-[#C99A2E] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-mono text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#C99A2E] via-[#E7C66A] to-[#C99A2E] text-[#FFFDF8] shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 font-extrabold"
                >
                  <Send className="h-4 w-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#DCCB9A] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#6B665D]">
          <div className="font-medium">
            © 2026 KURASA JOHN WESLY • MERN STACK DEVELOPER
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCCB9A] bg-[#FFFDF8] hover:bg-[#F3EEE3] text-[#C99A2E] font-bold shadow-sm transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
