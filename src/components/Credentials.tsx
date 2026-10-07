import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

export const Credentials: React.FC = () => {
  const { credentials } = PORTFOLIO_CONTENT;

  return (
    <SectionWrapper id="credentials" className="py-20 md:py-28 border-b border-border/80 bg-surface/30">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Qualifications
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight">
            Credentials & Education
          </h2>
          <p className="mt-3 text-muted text-base">
            Regulatory pilot certifications, technical foundation, and academic credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-card border border-border bg-surface hover-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center shrink-0">
                    {item.type === 'credential' ? (
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <span className="text-xs font-mono text-muted tracking-wider uppercase">
                    {item.periodOrDetail}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-text tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  {item.institution}
                </p>
              </div>

              {item.meta && (
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-mono text-text">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-semibold">{item.meta}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

