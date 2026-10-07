import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { Compass, Cpu, FileCheck2, Award } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_CONTENT;

  const competencies = [
    {
      icon: <Compass className="w-4 h-4 text-accent" />,
      title: "Sortie Execution",
      desc: "Planning test cards, maiden flights & expanding flight envelopes.",
    },
    {
      icon: <Cpu className="w-4 h-4 text-accent" />,
      title: "Data-Driven Tuning",
      desc: "Inner-loop PID rate control, notch filters & FFT log diagnostics.",
    },
    {
      icon: <FileCheck2 className="w-4 h-4 text-accent" />,
      title: "Engineering Feedback",
      desc: "Translating stick response and telemetry into design iterations.",
    },
    {
      icon: <Award className="w-4 h-4 text-accent" />,
      title: "Certification Rigour",
      desc: "Executing regulatory points for DGCA Type Certification compliance.",
    },
  ];

  return (
    <SectionWrapper id="about" className="py-20 md:py-28 border-b border-border/80">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Flight Test Philosophy
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight leading-snug">
              Bridging the gap between conceptual airframes and certified reality.
            </h2>

            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-text/90">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Competency Columns / Technical Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {competencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-card border border-border bg-surface hover-subtle flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-md bg-accent-soft text-accent shrink-0 mt-0.5">
                    {comp.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text tracking-tight">
                      {comp.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

