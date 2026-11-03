import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Award, Globe, ShieldCheck } from 'lucide-react';

const StatsCard = ({ title, value, change, icon: Icon, detail }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="glass-panel p-6 rounded-3xl border border-white/15 relative overflow-hidden group"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-white/60 font-medium">{title}</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{value}</h2>
          <p className="flex items-center gap-1 text-xs sm:text-sm text-emerald-400 font-mono font-medium pt-1">
            <ArrowUpRight size={16} /> {change}
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#818CF8] group-hover:scale-110 group-hover:bg-[#6366F1]/20 group-hover:border-[#6366F1]/40 transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-3.5 pt-3 border-t border-white/10 text-[11px] text-white/50 line-clamp-1 font-mono">
        {detail}
      </div>
    </motion.div>
  );
};

export default function MetricsStrip() {
  const stats = [
    {
      title: "Academic Standing",
      value: "8.6 / 10",
      change: "+Top 5% Tier",
      icon: GraduationCap,
      detail: "B.Tech CSE @ Padmasri Dr. B.V. Raju Institute of Technology"
    },
    {
      title: "Hackathon Performance",
      value: "SIH Level 2",
      change: "+National Rank",
      icon: Award,
      detail: "Smart India Hackathon 2024 Adaptive Signal Algorithm"
    },
    {
      title: "API Orchestration",
      value: "6 Live Services",
      change: "100% Up",
      icon: Globe,
      detail: "Amadeus, OpenWeather, Foursquare, VisualCrossing, Gemini"
    },
    {
      title: "Industry Credential",
      value: "Agentforce",
      change: "ID: 7198308",
      icon: ShieldCheck,
      detail: "Salesforce Certified Agentforce Specialist (Dec 2025)"
    }
  ];

  return (
    <section className="py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
