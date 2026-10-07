import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { BatteryCharging, ShieldCheck, Mountain, Activity, ArrowUpRight } from 'lucide-react';

export const Highlights: React.FC = () => {
  const { highlights } = PORTFOLIO_CONTENT;

  const highlightIcons = [
    <BatteryCharging className="w-4 h-4 text-accent" />,
    <ShieldCheck className="w-4 h-4 text-accent" />,
    <Mountain className="w-4 h-4 text-accent" />,
    <Activity className="w-4 h-4 text-accent" />,
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

        {/* 4 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-card border border-border bg-surface hover-subtle flex flex-col justify-between overflow-hidden group transition-all duration-200"
            >
              {/* AI-Generated Project Image Header */}
              <div className="relative aspect-16/9 w-full overflow-hidden bg-bg border-b border-border">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  width={600}
                  height={338}
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-surface/90 backdrop-blur-md border border-border/80 text-[11px] font-mono font-semibold text-text shadow-xs">
                    PROG-{String(idx + 1).padStart(2, '0')}
                  </span>
                  
                  <div className="w-8 h-8 rounded-md bg-surface/90 backdrop-blur-md border border-border/80 flex items-center justify-center shadow-xs">
                    {highlightIcons[idx]}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
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
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
