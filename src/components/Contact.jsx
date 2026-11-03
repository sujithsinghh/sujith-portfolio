import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
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
    <section id="contact" className="pt-8">
      {/* Section Header */}
      <div className="flex flex-col space-y-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#949EAE]">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
          Contact & Collaboration
        </h2>
        <p className="text-[#949EAE] text-sm sm:text-base max-w-3xl leading-relaxed">
          Currently open to software engineering internships, collaborative technical projects, and full-stack development inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="p-5 rounded-xl bg-[#13161F] border border-[#202534] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-[#F59E0B]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#949EAE] uppercase block">
                  Institutional Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-mono text-[#F3F4F6] hover:text-[#F59E0B] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="p-2 rounded-lg bg-[#0C0E12] border border-[#202534] hover:border-[#384055] text-[#949EAE] hover:text-white transition-colors cursor-pointer"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-xl bg-[#13161F] border border-[#202534] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-[#F59E0B]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#949EAE] uppercase block">
                  Direct Phone / WhatsApp
                </span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-xs sm:text-sm font-mono text-[#F3F4F6] hover:text-[#F59E0B] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="p-2 rounded-lg bg-[#0C0E12] border border-[#202534] hover:border-[#384055] text-[#949EAE] hover:text-white transition-colors cursor-pointer"
              title="Copy phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-xl bg-[#13161F] border border-[#202534] flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-[#10B981]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#949EAE] uppercase block">
                Academic Base & Location
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#F3F4F6]">
                Hyderabad / Medak, Telangana, India
              </span>
            </div>
          </div>

          {/* Verified External Profiles */}
          <div className="pt-2">
            <span className="text-xs font-mono text-[#949EAE] uppercase tracking-wider block mb-3">
              Verified Profiles:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#13161F] border border-[#202534] hover:border-[#384055] text-xs text-[#F3F4F6] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#949EAE]" />
                  <span>GitHub</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#949EAE]" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#13161F] border border-[#202534] hover:border-[#384055] text-xs text-[#F3F4F6] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[#949EAE]" />
                  <span>LinkedIn</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#949EAE]" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#13161F] border border-[#202534] hover:border-[#384055] text-xs text-[#F3F4F6] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#F59E0B]">LC</span>
                  <span>LeetCode</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#949EAE]" />
              </a>

              <a
                href={personalInfo.socials.smartinterviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#13161F] border border-[#202534] hover:border-[#384055] text-xs text-[#F3F4F6] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#10B981]">SI</span>
                  <span>SmartInterviews</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#949EAE]" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Direct Message Form (7 Cols) */}
        <div className="lg:col-span-7 bg-[#13161F] border border-[#202534] rounded-xl p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#202534]">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#F3F4F6]">
              <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
              <span>Send Direct Inquiry</span>
            </div>
            <span className="text-[11px] font-mono text-[#949EAE]">
              Opens default email client
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#949EAE] block">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-xs text-[#F3F4F6] placeholder-[#949EAE]/40 focus:outline-none focus:border-[#F59E0B] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#949EAE] block">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jane@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-xs text-[#F3F4F6] placeholder-[#949EAE]/40 focus:outline-none focus:border-[#F59E0B] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#949EAE] block">
                Project Scope or Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Briefly describe your internship role, project scope, or technical question..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0C0E12] border border-[#202534] text-xs text-[#F3F4F6] placeholder-[#949EAE]/40 focus:outline-none focus:border-[#F59E0B] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary !py-2.5 flex items-center justify-center gap-2 text-xs font-semibold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitted ? 'Opening Email Client...' : 'Dispatch Inquiry'}</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}