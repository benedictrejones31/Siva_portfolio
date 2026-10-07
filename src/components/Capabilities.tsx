import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { Plane, Disc, CheckCircle2, Wrench } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fixed-wing' | 'multirotor'>('fixed-wing');
  const { capabilities } = PORTFOLIO_CONTENT;

  return (
    <SectionWrapper id="capabilities" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Flight Test Capabilities
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight">
            Specialised Flight Operations & Dynamic Characterisation
          </h2>
          <p className="mt-3 text-muted text-base">
            Systematic envelope expansion, handling qualities assessment, and airframe-specific validation routines across dual aircraft categories.
          </p>
        </div>

        {/* Group A: Core Flight Test (Shown in both states) */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              Group A: Core Flight Test Disciplines
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent-soft text-accent">
              Universal Across Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.flightTestAlways.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-card border border-border bg-surface hover-subtle flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-text leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Airframe Category Segmented Toggle */}
        <div className="pt-4 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                Airframe-Specific Regimes
              </h3>
              <p className="text-xs text-muted mt-0.5">Toggle airframe category to inspect dedicated flight envelopes</p>
            </div>

            {/* Segmented Control */}
            <div
              role="tablist"
              aria-label="Airframe category toggle"
              className="inline-flex p-1 rounded-lg border border-border bg-surface"
            >
              <button
                role="tab"
                id="tab-fixed-wing"
                aria-selected={activeTab === 'fixed-wing'}
                aria-controls="panel-airframe-content"
                onClick={() => setActiveTab('fixed-wing')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent ${
                  activeTab === 'fixed-wing'
                    ? 'text-surface font-semibold bg-accent shadow-xs'
                    : 'text-muted hover:text-text'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Fixed-Wing</span>
              </button>

              <button
                role="tab"
                id="tab-multirotor"
                aria-selected={activeTab === 'multirotor'}
                aria-controls="panel-airframe-content"
                onClick={() => setActiveTab('multirotor')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all duration-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent ${
                  activeTab === 'multirotor'
                    ? 'text-surface font-semibold bg-accent shadow-xs'
                    : 'text-muted hover:text-text'
                }`}
              >
                <Disc className="w-3.5 h-3.5" />
                <span>Multirotor</span>
              </button>
            </div>
          </div>

          {/* Crossfading Airframe Content */}
          <div id="panel-airframe-content" role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="mt-6">
            <AnimatePresence mode="wait">
              {activeTab === 'fixed-wing' ? (
                <motion.div
                  key="fixed-wing"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {capabilities.fixedWing.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-card border border-border bg-surface hover-subtle flex items-start gap-3"
                    >
                      <Plane className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="multirotor"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {capabilities.multirotor.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-card border border-border bg-surface hover-subtle flex items-start gap-3"
                    >
                      <Disc className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Group D: Tools and Data (Shown always) */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-3.5 h-3.5 text-accent" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              Group D: Tools, Avionics & Data Stack
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {capabilities.toolsAndData.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono font-medium text-text hover-subtle"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
