import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_CONTENT } from '../data/content';
import { Mail, Linkedin, MapPin, Copy, Check, Send, Loader2, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal, contact } = PORTFOLIO_CONTENT;

  // Copy email state
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form states
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setSending(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setSentSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message || 'Unable to transmit message at this moment. Please use the direct email link.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            Inquiries & Collaboration
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text tracking-tight">
            {contact.headline}
          </h2>
          <p className="mt-3 text-muted text-base">
            Reach out regarding prototype envelope expansion, system identification campaigns, or DGCA certification support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-card border border-border bg-surface hover-subtle space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border border-border bg-bg text-muted hover:text-text hover:border-accent transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="text-sm sm:text-base font-semibold text-text hover:text-accent transition-colors break-all block"
              >
                {personal.email}
              </a>
            </div>

            {/* LinkedIn Card - Hides URL, Shows Logo & Name, Navigates on Click */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-card border border-border bg-surface hover-subtle flex items-center justify-between group transition-colors block"
              aria-label="Open Siva Manikandan's LinkedIn profile in a new tab"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-surface transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted block">
                    Professional Network
                  </span>
                  <span className="text-base font-bold text-text group-hover:text-accent transition-colors">
                    LinkedIn
                  </span>
                </div>
              </div>
              
              <div className="p-2 rounded-md bg-bg text-muted group-hover:text-accent group-hover:bg-accent-soft transition-colors">
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Location & Operating Base Card */}
            <div className="p-5 rounded-card border border-border bg-surface hover-subtle space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Operational Base
              </span>
              <p className="text-sm font-semibold text-text">
                {personal.location}
              </p>
              <p className="text-xs text-muted leading-relaxed">
                Available for on-site flight trials and prototype deployment across India and international test ranges.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form via Resend (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-card border border-border bg-surface shadow-xs">
              
              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-text tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-muted mt-1">
                  Transmits securely to Siva's inbox via Resend.
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-6 rounded-lg bg-accent-soft border border-accent/30 space-y-3 text-center sm:text-left">
                  <div className="w-10 h-10 rounded-full bg-accent text-surface flex items-center justify-center mx-auto sm:mx-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-text">Message Dispatched Successfully</h4>
                  <p className="text-xs sm:text-sm text-text/80 leading-relaxed">
                    Thank you for reaching out. Your flight test inquiry has been forwarded to Siva Manikandan S. Expect a response shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSentSuccess(false)}
                    className="mt-2 text-xs font-mono text-accent hover:underline font-semibold"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-text mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Flight Operations Lead"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text text-sm focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-text mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@organisation.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text text-sm focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-text mb-1.5">
                      Subject / Program Focus
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Type Certification Flight Cards / SysID Trial"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text text-sm focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-text mb-1.5">
                      Operational Brief / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline your airframe test requirements, timeline, or consultation scope..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-bg text-text text-sm focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-surface text-sm font-medium hover:opacity-95 transition-opacity disabled:opacity-60 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};
