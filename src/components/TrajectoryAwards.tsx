import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, GraduationCap, Sparkles, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EDUCATION, AWARDS, AwardItem } from '../data/portfolioData';

export function TrajectoryAwards() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'trophies'>('timeline');
  const [celebratedId, setCelebratedId] = useState<string | null>(null);

  const triggerConfetti = (awardId: string) => {
    setCelebratedId(awardId);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#38bdf8', '#06b6d4', '#93c5fd']
      });
    } catch {}

    setTimeout(() => {
      setCelebratedId(null);
    }, 2000);
  };

  return (
    <section id="trajectory" className="py-24 bg-[#07090e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
            <span>05. Trajectory & Honors</span>
            <span className="text-slate-600">·</span>
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Academic Track & Trophy Room.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Consistent academic honor standing from elementary to collegiate computer science, paired with university championships in fitness and creative stage direction.
          </p>
        </div>

        {/* View Switcher Tabs (Functional Buttons) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#0a0f1d] border border-slate-800 rounded-xl mb-12 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Pathway</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('trophies')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'trophies'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Holographic Trophies</span>
          </button>
        </div>

        {/* Tab 1: Academic Pathway Timeline */}
        {activeTab === 'timeline' && (
          <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-blue-800 before:to-slate-900">
            {EDUCATION.map((edu, idx) => (
              <div key={edu.id} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#07090e] border-2 border-blue-500 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0f1d] border border-slate-800 hover:border-blue-900/60 transition-colors shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400">
                      Step #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {edu.institution}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-blue-300 font-medium mb-4">
                    <span>{edu.degreeOrLevel}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-amber-300 font-semibold">{edu.honors}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {edu.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Holographic Trophy Room */}
        {activeTab === 'trophies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS.map((award: AwardItem) => {
              const isCelebrated = celebratedId === award.id;
              return (
                <div
                  key={award.id}
                  className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0c1426] via-[#090e1c] to-[#07090e] border border-blue-900/50 hover:border-cyan-500/60 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between"
                >
                  {/* Subtle Holographic Radial Flare */}
                  <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                        <Award className="w-4 h-4 text-cyan-400" />
                        <span>{award.year} Recognition</span>
                      </div>
                      <span className="text-xs font-mono text-blue-300 px-2 py-0.5 bg-blue-950/60 border border-blue-800/60 rounded">
                        {award.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {award.title}
                    </h3>

                    <div className="text-xs text-blue-300/80 mb-4 font-medium">
                      {award.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">
                      Verified Campus Distinction
                    </span>
                    <button
                      type="button"
                      onClick={() => triggerConfetti(award.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                        isCelebrated
                          ? 'bg-cyan-500 text-slate-950 shadow-md'
                          : 'bg-slate-900 text-blue-300 hover:text-white hover:bg-blue-600 border border-slate-800'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isCelebrated ? 'Celebrated!' : 'Celebrate Trophy'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
