import React from 'react';

export default function MetricsStrip() {
  const metrics = [
    {
      kicker: "Academic Standing",
      value: "8.6 / 10",
      detail: "B.Tech CSE @ Padmasri Dr. B.V. Raju Institute of Technology"
    },
    {
      kicker: "National Hackathon",
      value: "SIH Level 2",
      detail: "Smart India Hackathon 2024 Qualifier (Traffic Algorithm)"
    },
    {
      kicker: "API Architecture",
      value: "6 Live APIs",
      detail: "Orchestrated across WanderAI backend services"
    },
    {
      kicker: "Industry Certification",
      value: "Agentforce",
      detail: "Salesforce Certified Specialist (Credential #7198308)"
    }
  ];

  return (
    <section className="py-2 border-b border-[#202534]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
        {metrics.map((item) => (
          <div key={item.kicker} className="space-y-1">
            <span className="text-xs font-mono text-[#949EAE] uppercase tracking-wider block">
              {item.kicker}
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {item.value}
            </div>
            <p className="text-xs text-[#949EAE] leading-relaxed line-clamp-2">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
