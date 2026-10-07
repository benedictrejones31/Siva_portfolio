import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ArrowRight, Linkedin, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '../data/content';
import { FlightArtSvg } from './FlightArtSvg';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { personal } = PORTFOLIO_CONTENT;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const top = contactElem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-border/60">
      {/* Decorative Technical Vector Art Layer */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full opacity-35 lg:opacity-60 pointer-events-none z-0">
        <FlightArtSvg />
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left / Primary Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Location Pill */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-muted tracking-tight"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{personal.location}</span>
              <span className="text-border">|</span>
              <span className="text-text font-medium">UAV Prototype Operations</span>
            </motion.div>

            {/* Name Header */}
            <div>
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-[1.1]"
              >
                {personal.name}
              </motion.h1>
              
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-3 text-lg sm:text-xl font-medium text-accent tracking-tight"
              >
                {personal.headline}
              </motion.p>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-base sm:text-lg text-muted max-w-xl leading-relaxed"
            >
              {personal.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-surface font-medium text-sm transition-all duration-200 hover:opacity-95 hover:shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-surface text-text font-medium text-sm transition-all duration-200 hover:border-accent hover:text-accent hover-subtle focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Visit Siva's LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right / Photo & Certification Badge Column (5 cols on lg) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-[340px] sm:max-w-[360px] w-full">
              {/* Card Container with 1px border and 12px radius */}
              <div className="relative rounded-card overflow-hidden border border-border bg-surface shadow-xs transition-colors duration-200 group-hover:border-accent">
                {/* Image */}
                <div className="aspect-3/4 relative overflow-hidden bg-bg">
                  <img
                    src={personal.photoUrl}
                    alt="Siva Manikandan S - Prototype Flight Test Pilot"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                    width={360}
                    height={480}
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                </div>

                {/* Sub-label under portrait */}
                <div className="p-4 border-t border-border bg-surface flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-text font-medium">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>DGCA Certified Remote Pilot</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted uppercase tracking-wider">Small UAV</span>
                </div>
              </div>

              {/* Decorative Corner Coordinate Ticks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-accent/40 pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-accent/40 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
