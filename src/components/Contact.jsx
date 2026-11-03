import React, { useState } from 'react';
import { Copy, Check, Send, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
    <section id="contact" className="pt-10 sm:pt-14 pb-16 border-b border-[#E5E1D8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Direct Letterhead Info (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="eyebrow eyebrow-accent block">
              Initiate Communication
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121316] font-normal leading-tight">
              Open for software engineering internships and{' '}
              <em className="italic text-[#9E3514] font-serif">technical collaboration</em>.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5C6069] leading-relaxed max-w-lg">
            Available for summer/fall engineering internships, full-stack MERN application engineering, and applied computer vision roles. Inquiries are responded to directly.
          </p>

          {/* Direct Channels List */}
          <div className="space-y-4 pt-2 font-mono text-xs">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-3 border-b border-[#E5E1D8]">
              <span className="w-36 uppercase text-[10px] tracking-wider text-[#5C6069]">
                Institutional Email
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-[#121316] hover:text-[#9E3514] transition-colors font-mono"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1 text-[#5C6069] hover:text-[#121316] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#9E3514]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-3 border-b border-[#E5E1D8]">
              <span className="w-36 uppercase text-[10px] tracking-wider text-[#5C6069]">
                Direct Phone / WA
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-sm text-[#121316] hover:text-[#9E3514] transition-colors font-mono"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1 text-[#5C6069] hover:text-[#121316] transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#9E3514]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-3 border-b border-[#E5E1D8]">
              <span className="w-36 uppercase text-[10px] tracking-wider text-[#5C6069]">
                Academic Base
              </span>
              <span className="text-sm text-[#121316]">
                BVRIT Autonomous · Hyderabad / Medak, India
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="w-36 uppercase text-[10px] tracking-wider text-[#5C6069]">
                External Profiles
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121316] hover:text-[#9E3514] transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121316] hover:text-[#9E3514] transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121316] hover:text-[#9E3514] transition-colors"
                >
                  LeetCode ↗
                </a>
                <a
                  href={personalInfo.socials.smartinterviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#121316] hover:text-[#9E3514] transition-colors"
                >
                  SmartInterviews ↗
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Clean Letterhead Message Form (6 cols) */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#E5E1D8] shadow-sm">
          <div className="font-serif text-xl text-[#121316] font-medium pb-3 border-b border-[#E5E1D8] mb-6">
            Direct Message Inquiry
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069] block">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jane Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5E1D8] text-sm text-[#121316] focus:outline-none focus:border-[#9E3514] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069] block">
                Your Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. jane@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5E1D8] text-sm text-[#121316] focus:outline-none focus:border-[#9E3514] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069] block">
                Project Scope or Role Brief
              </label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your internship role, engineering project, or technical question..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full p-2.5 bg-[#FAF8F5] border border-[#E5E1D8] text-sm text-[#121316] focus:outline-none focus:border-[#9E3514] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="editorial-btn-dark !w-full justify-center !py-2.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitted ? 'Opening Mail Client...' : 'Send Inquiry →'}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}