import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_CONTENT, Metric } from '../data/content';

interface MetricCounterProps {
  metric: Metric;
}

const MetricCounter: React.FC<MetricCounterProps> = ({ metric }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || metric.isTextValue || metric.value === 0) return;

    if (shouldReduceMotion) {
      setDisplayValue(metric.value);
      return;
    }

    const duration = 900; // ~900ms as requested
    const startTime = performance.now();
    const target = metric.value;

    let frameId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, metric.value, metric.isTextValue, shouldReduceMotion]);

  return (
    <div ref={ref} className="font-display text-3xl sm:text-4xl font-extrabold text-text tracking-tight flex items-baseline">
      {metric.prefix && <span>{metric.prefix}</span>}
      {metric.isTextValue ? (
        <span>{metric.isTextValue}</span>
      ) : (
        <span>{displayValue}</span>
      )}
      {metric.suffix && <span className="text-xl sm:text-2xl text-accent font-semibold ml-1">{metric.suffix}</span>}
    </div>
  );
};

export const KeyMetrics: React.FC = () => {
  const { metrics } = PORTFOLIO_CONTENT;

  return (
    <section className="py-12 border-b border-border/80 bg-surface/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08, ease: 'easeOut' }}
              className="group p-5 sm:p-6 rounded-card border border-border bg-surface hover-subtle flex flex-col justify-between"
            >
              <div>
                <MetricCounter metric={metric} />
                <h3 className="mt-2 text-sm font-semibold text-text uppercase tracking-wider font-mono">
                  {metric.label}
                </h3>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

