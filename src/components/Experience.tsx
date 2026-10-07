import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { ChevronDown, Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_CONTENT;
  // Latest role open by default (zmotion is index 0)
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    zmotion: true,
    aero360: false,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SectionWrapper id="experience" className="py-20 md:py-28 border-b border-border/80 bg-surface/30">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Flight Test Career
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight">
            Operational Track Record
          </h2>
          <p className="mt-3 text-muted text-base">
            Hands-on flight testing across OEM R&D programs, envelope expansion, defense trials, and formal regulatory certification.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {experience.map((item, index) => {
            const isOpen = !!openIds[item.id];
            const contentId = `exp-content-${item.id}`;
            const headerId = `exp-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-card border transition-all duration-200 overflow-hidden bg-surface ${
                  isOpen ? 'border-accent shadow-xs' : 'border-border hover:border-accent/60'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-display text-base sm:text-lg font-bold text-text tracking-tight">
                        {item.role}
                      </span>
                      {index === 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-accent-soft text-accent text-[11px] font-mono font-semibold uppercase">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted font-medium">
                      <span className="flex items-center gap-1.5 text-text font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-accent" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-muted" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-muted" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Smooth Chevron Rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="p-1.5 rounded-md bg-bg text-muted border border-border shrink-0 mt-1 sm:mt-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Smooth Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-border/60">
                        <ul className="space-y-3">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-text/90 leading-relaxed">
                              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};

