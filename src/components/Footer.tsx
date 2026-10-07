import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '../data/content';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_CONTENT;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface py-12 transition-colors">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div className="text-center sm:text-left space-y-1">
            <p className="font-display font-bold text-sm text-text">
              {personal.name}
            </p>
            <p className="text-xs text-muted">
              {personal.headline}
            </p>
            <p className="text-xs font-mono text-muted/80 pt-1">
              © 2026 {personal.name}. All rights reserved.
            </p>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-bg text-xs font-mono text-muted hover:text-text hover:border-accent transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>

        </div>
      </div>
    </footer>
  );
};

