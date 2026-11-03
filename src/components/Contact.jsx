import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Code2, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry — ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFA800] uppercase tracking-wider self-start px-3.5 py-1.5 rounded-full glass-dock border border-[#FFA800]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800] animate-pulse"></span>
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Get in Touch & Work Together
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl">
            Currently open for engineering internships, collaborative software development, and technical inquiries. Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Glass Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl glass-card flex items-center justify-between border border-white/15">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#FFA800]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/50 uppercase block">
                    Institutional Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#FFA800] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl glass-card flex items-center justify-between border border-white/15">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#FFA800]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/50 uppercase block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#FFA800] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-card flex items-center gap-3 border border-white/15">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/50 uppercase block">
                  Location & Academic Base
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Hyderabad / Medak, Telangana, India
                </span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider mb-2.5">
                Verified External Profiles:
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl glass-dock hover:border-white/30 text-xs text-white transition-colors border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl glass-dock hover:border-white/30 text-xs text-white transition-colors border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl glass-dock hover:border-white/30 text-xs text-white transition-colors border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#FFA116]" />
                    <span>LeetCode</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>

                <a
                  href={personalInfo.socials.smartinterviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl glass-dock hover:border-white/30 text-xs text-white transition-colors border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#A855F7] font-bold">SI</span>
                    <span>SmartInterviews</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl glass-card border border-white/15 shadow-2xl">
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-white/60 mb-6">
                Fill out the form below to dispatch an inquiry directly to Matta Sujith Singh.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Satya Nadella"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800] text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/70">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800] text-xs text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-white/70">
                    Message / Project Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your role, collaboration project, or technical question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800] text-xs text-white outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-white/50">
                    Dispatches directly to: <code className="text-[#FFA800]">{personalInfo.email}</code>
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-xs font-bold btn-glass-primary px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {submitted && (
                  <div className="mt-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Opening your email client with prefilled message. Thank you!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
