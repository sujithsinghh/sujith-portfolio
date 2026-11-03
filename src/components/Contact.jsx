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
    const subject = encodeURIComponent(`Inquiry from Portfolio — ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative border-b border-[#1B202D] bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF00] uppercase tracking-wider self-start px-3 py-1 rounded-full cyber-dock border border-[#D4FF00]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Initiate Contact & Collaboration
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl">
            Currently open for engineering internships, collaborative software development, and technical inquiries. Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl obsidian-card flex items-center justify-between border border-[#1B202D] hover:border-[#D4FF00]/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4FF00]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8E97AB] uppercase block">
                    Institutional Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#D4FF00] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4FF00] text-[#8E97AB] hover:text-[#D4FF00] transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#D4FF00]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl obsidian-card flex items-center justify-between border border-[#1B202D] hover:border-[#D4FF00]/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4FF00]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8E97AB] uppercase block">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#D4FF00] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4FF00] text-[#8E97AB] hover:text-[#D4FF00] transition-colors cursor-pointer"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-[#D4FF00]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl obsidian-card flex items-center gap-3 border border-[#1B202D]">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#A855F7]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8E97AB] uppercase block">
                  Location & Academic Base
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Hyderabad / Medak, Telangana, India
                </span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-[#8E97AB] uppercase tracking-wider mb-2.5">
                Verified External Profiles:
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl obsidian-card hover:border-[#D4FF00]/40 text-xs text-white transition-colors border border-[#1B202D]"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#D4FF00]" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl obsidian-card hover:border-[#D4FF00]/40 text-xs text-white transition-colors border border-[#1B202D]"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl obsidian-card hover:border-[#D4FF00]/40 text-xs text-white transition-colors border border-[#1B202D]"
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#F59E0B]" />
                    <span>LeetCode</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </a>

                <a
                  href={personalInfo.socials.smartinterviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl obsidian-card hover:border-[#D4FF00]/40 text-xs text-white transition-colors border border-[#1B202D]"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#A855F7] font-bold">SI</span>
                    <span>SmartInterviews</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-3xl obsidian-card border border-[#1B202D] shadow-2xl">
              <h3 className="text-lg font-bold font-display text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#94A3B8] mb-6">
                Fill out the form below to initiate contact via your preferred mail client.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#CBD5E1]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Satya Nadella"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08090C] border border-[#1B202D] focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#CBD5E1]">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08090C] border border-[#1B202D] focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] text-xs text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#CBD5E1]">
                    Message / Project Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project, role, or collaboration inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08090C] border border-[#1B202D] focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] text-xs text-white outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8E97AB]">
                    Dispatches directly to: <code className="text-[#D4FF00]">{personalInfo.email}</code>
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-xs font-bold btn-volt px-6 py-2.5 rounded-xl cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {submitted && (
                  <div className="mt-3 p-3 rounded-xl bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-xs font-mono text-[#D4FF00] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D4FF00]" />
                    <span>Opening your mail client with prefilled details. Thank you!</span>
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
