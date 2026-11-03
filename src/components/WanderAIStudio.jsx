import React, { useState, useMemo } from 'react';
import { 
  Compass, MapPin, Calendar, Users, Wallet, Sparkles, RefreshCw, 
  Check, ArrowRight, Utensils, Landmark, Mountain, Trees, Camera,
  ShieldAlert, Info, ChevronRight, Layers
} from 'lucide-react';
import { wanderDestinations } from '../data/wanderAIData';

export default function WanderAIStudio() {
  // 1. Initial State / Sensible Defaults
  const [destinationId, setDestinationId] = useState('jaipur');
  const [duration, setDuration] = useState(5); // 3, 5, or 7
  const [travelers, setTravelers] = useState(2); // 1 - 6
  const [budgetStyle, setBudgetStyle] = useState('standard'); // budget, standard, premium
  const [interests, setInterests] = useState(['food', 'culture', 'sightseeing']);
  const [activeDayTab, setActiveDayTab] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationCount, setGenerationCount] = useState(1);

  // Available options
  const durations = [3, 5, 7];
  const travelerCounts = [1, 2, 3, 4, 5, 6];
  const budgetTiers = [
    { key: 'budget', label: 'Budget', desc: 'Boutique hostels, metro/local transit & street bistros' },
    { key: 'standard', label: 'Standard', desc: 'Curated 3-4★ hotels, mixed transit & popular dining' },
    { key: 'premium', label: 'Premium', desc: 'Luxury heritage properties, private cabs & fine dining' }
  ];

  const interestOptions = [
    { key: 'food', label: 'Food & Dining', icon: Utensils },
    { key: 'culture', label: 'Culture & Heritage', icon: Landmark },
    { key: 'adventure', label: 'Adventure', icon: Mountain },
    { key: 'nature', label: 'Nature & Parks', icon: Trees },
    { key: 'sightseeing', label: 'Sightseeing', icon: Camera }
  ];

  // Current active destination data
  const currentDestination = useMemo(() => {
    return wanderDestinations.find(d => d.id === destinationId) || wanderDestinations[0];
  }, [destinationId]);

  // Toggle interest
  const toggleInterest = (key) => {
    setInterests(prev => {
      if (prev.includes(key)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter(k => k !== key);
      } else {
        return [...prev, key];
      }
    });
  };

  // Generate Action with subtle snappy feedback
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationCount(c => c + 1);
      setActiveDayTab(1);
    }, 280);
  };

  // Reset to sensible defaults
  const handleReset = () => {
    setDestinationId('jaipur');
    setDuration(5);
    setTravelers(2);
    setBudgetStyle('standard');
    setInterests(['food', 'culture', 'sightseeing']);
    setActiveDayTab(1);
    setGenerationCount(1);
  };

  // Mathematically Consistent Budget Calculation
  const budgetBreakdown = useMemo(() => {
    const rates = currentDestination.dailyRates[budgetStyle];
    const rooms = Math.ceil(travelers / 2); // 2 people per room standard

    // Lodging: Rooms * Lodging Rate * Days
    const lodgingTotal = rooms * rates.lodging * duration;
    
    // Transit: Transit rate per person * travelers * days
    const transitTotal = rates.transit * travelers * duration;
    
    // Food: Food rate per person * travelers * days
    const foodTotal = rates.food * travelers * duration;
    
    // Activities: Base rate * travelers * days * interest weight multiplier
    const interestMultiplier = 0.85 + (interests.length * 0.05); // 0.90 to 1.10
    const activitiesTotal = Math.round(rates.activities * travelers * duration * interestMultiplier);

    const grandTotal = lodgingTotal + transitTotal + foodTotal + activitiesTotal;
    const perPerson = Math.round(grandTotal / travelers);

    return {
      lodging: lodgingTotal,
      transit: transitTotal,
      food: foodTotal,
      activities: activitiesTotal,
      total: grandTotal,
      perPerson,
      rooms
    };
  }, [currentDestination, duration, travelers, budgetStyle, interests]);

  // Slice itinerary to selected duration
  const activeDays = useMemo(() => {
    return currentDestination.itineraryDays.slice(0, duration);
  }, [currentDestination, duration]);

  // Selected Day Plan
  const selectedDayPlan = useMemo(() => {
    return activeDays.find(d => d.day === activeDayTab) || activeDays[0];
  }, [activeDays, activeDayTab]);

  return (
    <div 
      id="wander-studio" 
      className="mt-14 pt-2 bg-white border border-[#E5E1D8] shadow-sm scroll-mt-24"
    >
      {/* Studio Header Bar */}
      <div className="p-6 sm:p-8 border-b border-[#E5E1D8] bg-[#FAF8F5]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] text-[#0F766E] uppercase tracking-wider font-semibold bg-[#0F766E]/10 px-2 py-0.5 border border-[#0F766E]/20">
                Fig. 01B — Interactive Itinerary & Budget Studio
              </span>
              <span className="font-mono text-[10px] text-[#5C6069] hidden sm:inline">
                Simulated Multi-API Intelligence Engine
              </span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#121316] font-medium tracking-tight">
              WanderAI Trip Planner Studio
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6069] mt-1 max-w-2xl leading-relaxed">
              Configure parameters to simulate WanderAI's heuristic itinerary generation, dynamic multi-tier budget estimation, and curated local venue recommendations.
            </p>
          </div>

          {/* Illustrative Demo Disclaimer Badge */}
          <div className="shrink-0 flex items-start gap-2 bg-[#FBF4F1] border border-[#9E3514]/20 p-2.5 max-w-xs text-[11px] font-mono text-[#9E3514]">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#9E3514]" />
            <div className="leading-tight">
              <strong>Illustrative estimate:</strong> Demo data model. Production backend queries live Google Places & Amadeus APIs.
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Grid: Configuration Dossier (Left) & Generated Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E1D8] items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Trip Configuration Controls (5 Cols)          */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 p-6 sm:p-7 space-y-6 bg-[#FAF8F5]/50">
          
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#121316] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Trip Parameters</span>
            </span>
            <button
              onClick={handleReset}
              className="font-mono text-[11px] text-[#5C6069] hover:text-[#9E3514] flex items-center gap-1 transition-colors cursor-pointer"
              title="Reset to default settings"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* 1. Destination Selector */}
          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#5C6069] block">
              01 / Destination
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {wanderDestinations.map((dest) => {
                const isSelected = dest.id === destinationId;
                return (
                  <button
                    key={dest.id}
                    onClick={() => {
                      setDestinationId(dest.id);
                      setActiveDayTab(1);
                    }}
                    className={`p-2.5 text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0F766E] bg-white shadow-xs'
                        : 'border-[#E5E1D8] bg-[#FAF8F5] hover:border-[#BFBBAF]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold ${isSelected ? 'text-[#0F766E]' : 'text-[#121316]'}`}>
                        {dest.name}
                      </span>
                      {isSelected && <Check className="w-3 h-3 text-[#0F766E]" />}
                    </div>
                    <span className="font-mono text-[9px] text-[#8A8F99] block mt-0.5 truncate">
                      {dest.country} · {dest.vibe.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Duration & Travelers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Duration */}
            <div className="space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#5C6069] block">
                02 / Duration
              </label>
              <div className="flex border border-[#E5E1D8] bg-[#FAF8F5] p-0.5">
                {durations.map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setDuration(d);
                      if (activeDayTab > d) setActiveDayTab(1);
                    }}
                    className={`flex-1 py-1.5 text-center font-mono text-xs transition-colors cursor-pointer ${
                      duration === d
                        ? 'bg-[#121316] text-white font-medium'
                        : 'text-[#5C6069] hover:text-[#121316]'
                    }`}
                  >
                    {d} Days
                  </button>
                ))}
              </div>
            </div>

            {/* Travelers */}
            <div className="space-y-2">
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#5C6069] block">
                03 / Travelers
              </label>
              <div className="flex border border-[#E5E1D8] bg-[#FAF8F5] p-0.5">
                {travelerCounts.map((num) => (
                  <button
                    key={num}
                    onClick={() => setTravelers(num)}
                    className={`flex-1 py-1.5 text-center font-mono text-xs transition-colors cursor-pointer ${
                      travelers === num
                        ? 'bg-[#121316] text-white font-medium'
                        : 'text-[#5C6069] hover:text-[#121316]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <span className="font-mono text-[10px] text-[#8A8F99] block text-right">
                {Math.ceil(travelers / 2)} double room{Math.ceil(travelers / 2) > 1 ? 's' : ''}
              </span>
            </div>

          </div>

          {/* 3. Budget Tier */}
          <div className="space-y-2">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#5C6069] block">
              04 / Budget Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {budgetTiers.map((tier) => {
                const isSelected = budgetStyle === tier.key;
                return (
                  <button
                    key={tier.key}
                    onClick={() => setBudgetStyle(tier.key)}
                    className={`p-2.5 text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0F766E] bg-white shadow-xs'
                        : 'border-[#E5E1D8] bg-[#FAF8F5] hover:border-[#BFBBAF]'
                    }`}
                  >
                    <span className={`text-xs font-semibold block ${isSelected ? 'text-[#0F766E]' : 'text-[#121316]'}`}>
                      {tier.label}
                    </span>
                    <span className="font-mono text-[9px] text-[#8A8F99] block mt-0.5 line-clamp-2 leading-tight">
                      {tier.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Travel Interests (Multi-Select) */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#5C6069] block">
                05 / Travel Interests
              </label>
              <span className="font-mono text-[10px] text-[#8A8F99]">
                {interests.length} selected
              </span>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {interestOptions.map((item) => {
                const Icon = item.icon;
                const isSelected = interests.includes(item.key);
                return (
                  <button
                    key={item.key}
                    onClick={() => toggleInterest(item.key)}
                    className={`px-2.5 py-1.5 border text-xs font-mono inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0F766E] bg-[#0F766E]/10 text-[#0F766E] font-medium'
                        : 'border-[#E5E1D8] bg-white text-[#5C6069] hover:border-[#BFBBAF]'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{item.label}</span>
                    {isSelected && <Check className="w-2.5 h-2.5 ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-2">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="editorial-btn-dark !w-full justify-center !py-2.5 text-xs cursor-pointer shadow-sm"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Synthesizing Itinerary...' : 'Generate Trip Preview →'}</span>
            </button>
          </div>

          <div className="text-[11px] text-[#8A8F99] font-mono text-center">
            Run #{generationCount} · Destination heuristics compiled locally
          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Generated Trip Preview & Ledger (7 Cols)     */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-white">
          
          {/* Destination Dossier Masthead */}
          <div className="pb-4 border-b border-[#E5E1D8]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-[#0F766E] font-semibold uppercase tracking-wider">
                {currentDestination.name}, {currentDestination.country} · {currentDestination.vibe}
              </span>
              <span className="font-mono text-[11px] text-[#5C6069]">
                {duration} Days · {travelers} Traveler{travelers > 1 ? 's' : ''} · {budgetStyle.toUpperCase()}
              </span>
            </div>

            <h5 className="font-serif text-xl sm:text-2xl text-[#121316] font-medium mt-1">
              {currentDestination.tagline}
            </h5>
          </div>

          {/* Financial Ledger (Total & Category Breakdown) */}
          <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#E5E1D8] space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#E5E1D8]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#5C6069] block">
                  Estimated Total Trip Cost
                </span>
                <div className="font-serif text-2xl sm:text-3xl text-[#121316] font-semibold">
                  ₹{budgetBreakdown.total.toLocaleString('en-IN')}
                  <span className="text-xs font-mono text-[#5C6069] font-normal ml-2">
                    (approx. ₹{budgetBreakdown.perPerson.toLocaleString('en-IN')} / person)
                  </span>
                </div>
              </div>

              <div className="font-mono text-[11px] text-[#0F766E] bg-white px-2.5 py-1 border border-[#E5E1D8]">
                {budgetBreakdown.rooms} Room{budgetBreakdown.rooms > 1 ? 's' : ''} · {duration} Nights
              </div>
            </div>

            {/* Category Breakdown 4-Item Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-white border border-[#E5E1D8]">
                <span className="text-[10px] text-[#5C6069] uppercase block">Lodging</span>
                <span className="font-semibold text-[#121316] block mt-0.5">
                  ₹{budgetBreakdown.lodging.toLocaleString('en-IN')}
                </span>
                <span className="text-[9px] text-[#8A8F99]">
                  {Math.round((budgetBreakdown.lodging / budgetBreakdown.total) * 100)}% of total
                </span>
              </div>

              <div className="p-2.5 bg-white border border-[#E5E1D8]">
                <span className="text-[10px] text-[#5C6069] uppercase block">Transit</span>
                <span className="font-semibold text-[#121316] block mt-0.5">
                  ₹{budgetBreakdown.transit.toLocaleString('en-IN')}
                </span>
                <span className="text-[9px] text-[#8A8F99]">
                  {Math.round((budgetBreakdown.transit / budgetBreakdown.total) * 100)}% of total
                </span>
              </div>

              <div className="p-2.5 bg-white border border-[#E5E1D8]">
                <span className="text-[10px] text-[#5C6069] uppercase block">Food & Dining</span>
                <span className="font-semibold text-[#121316] block mt-0.5">
                  ₹{budgetBreakdown.food.toLocaleString('en-IN')}
                </span>
                <span className="text-[9px] text-[#8A8F99]">
                  {Math.round((budgetBreakdown.food / budgetBreakdown.total) * 100)}% of total
                </span>
              </div>

              <div className="p-2.5 bg-white border border-[#E5E1D8]">
                <span className="text-[10px] text-[#5C6069] uppercase block">Activities</span>
                <span className="font-semibold text-[#121316] block mt-0.5">
                  ₹{budgetBreakdown.activities.toLocaleString('en-IN')}
                </span>
                <span className="text-[9px] text-[#8A8F99]">
                  {Math.round((budgetBreakdown.activities / budgetBreakdown.total) * 100)}% of total
                </span>
              </div>
            </div>

          </div>

          {/* Day-by-Day Itinerary Schedule */}
          <div className="space-y-3">
            
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[#121316] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Day-by-Day Schedule</span>
              </span>
              
              {/* Day Selector Pills */}
              <div className="flex border border-[#E5E1D8] bg-[#FAF8F5] p-0.5 font-mono text-xs">
                {activeDays.map((d) => (
                  <button
                    key={d.day}
                    onClick={() => setActiveDayTab(d.day)}
                    className={`px-2.5 py-1 text-center transition-colors cursor-pointer ${
                      activeDayTab === d.day
                        ? 'bg-[#0F766E] text-white font-medium'
                        : 'text-[#5C6069] hover:text-[#121316]'
                    }`}
                  >
                    Day {d.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Day Content Plate */}
            {selectedDayPlan && (
              <div className="border border-[#E5E1D8] p-4 sm:p-5 bg-[#FAF8F5] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
                  <span className="font-serif text-base sm:text-lg font-medium text-[#121316]">
                    Day 0{selectedDayPlan.day}: {selectedDayPlan.title}
                  </span>
                  <span className="font-mono text-[10px] text-[#0F766E] bg-white px-2 py-0.5 border border-[#E5E1D8]">
                    Active Plan
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  
                  <div className="p-3 bg-white border border-[#E5E1D8] space-y-1">
                    <span className="font-mono text-[10px] text-[#0F766E] font-semibold uppercase tracking-wider block">
                      Morning (08:30 – 12:00)
                    </span>
                    <p className="text-[#5C6069] leading-relaxed">
                      {selectedDayPlan.morning}
                    </p>
                  </div>

                  <div className="p-3 bg-white border border-[#E5E1D8] space-y-1">
                    <span className="font-mono text-[10px] text-[#0F766E] font-semibold uppercase tracking-wider block">
                      Afternoon (12:30 – 16:30)
                    </span>
                    <p className="text-[#5C6069] leading-relaxed">
                      {selectedDayPlan.afternoon}
                    </p>
                  </div>

                  <div className="p-3 bg-white border border-[#E5E1D8] space-y-1">
                    <span className="font-mono text-[10px] text-[#0F766E] font-semibold uppercase tracking-wider block">
                      Evening (17:00 – 21:30)
                    </span>
                    <p className="text-[#5C6069] leading-relaxed">
                      {selectedDayPlan.evening}
                    </p>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Curated Recommendations Matching Selected Interests */}
          <div className="space-y-2 pt-2 border-t border-[#E5E1D8]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#121316] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Recommended Spots for Selected Interests</span>
            </span>

            <div className="space-y-2 pt-1 text-xs">
              {interests.map((catKey) => {
                const list = currentDestination.interestHighlights[catKey] || [];
                const optionMeta = interestOptions.find(o => o.key === catKey);
                if (list.length === 0) return null;

                return (
                  <div key={catKey} className="p-3 bg-[#FAF8F5] border border-[#E5E1D8]">
                    <span className="font-mono text-[10px] text-[#0F766E] uppercase tracking-wider block font-semibold mb-1">
                      {optionMeta ? optionMeta.label : catKey}:
                    </span>
                    <ul className="space-y-1 text-[#5C6069]">
                      {list.map((rec, rIdx) => (
                        <li key={rIdx} className="pl-3 relative leading-relaxed">
                          <span className="absolute left-0 text-[#9E3514]">•</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
