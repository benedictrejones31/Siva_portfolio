import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { BatteryCharging, ShieldCheck, Mountain, Activity, ArrowUpRight } from 'lucide-react';

export const Highlights: React.FC = () => {
  const { highlights } = PORTFOLIO_CONTENT;

  const highlightIcons = [
    <BatteryCharging className="w-5 h-5 text-accent" />,
    <ShieldCheck className="w-5 h-5 text-accent" />,
    <Mountain className="w-5 h-5 text-accent" />,
    <Activity className="w-5 h-5 text-accent" />,
  ];

  return (
    <SectionWrapper id="highlights" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Flight Program Highlights
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight">
            Key Engineering & Validation Milestones
          </h2>
          <p className="mt-3 text-muted text-base">
            Representative flight test programs delivering measurable endurance gains, regulatory compliance, and dynamic stability refinements.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-card border border-border bg-surface hover-subtle flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center shrink-0">
                    {highlightIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-muted tracking-widest uppercase">
                    PROG-{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-text tracking-tight group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.context}
                </p>
              </div>

              {/* Outcome Badge */}
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-text">
                  <span className="text-accent font-bold">Outcome:</span>
                  <span>{item.outcome}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
