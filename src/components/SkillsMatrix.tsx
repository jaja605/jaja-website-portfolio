import { useState } from 'react';
import { Code2, Layers, Database, Cpu, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { SKILLS, SkillItem } from '../data/portfolioData';

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILLS[0]);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Web & 3D Frameworks' },
    { id: 'database', label: 'Databases & APIs' },
    { id: 'hardware', label: 'IoT & Hardware' },
    { id: 'tools', label: 'Tools & Design' },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'frameworks':
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-sky-400" />;
      case 'hardware':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#07090e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
            <span>03. Tech Stack Matrix</span>
            <span className="text-slate-600">·</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Modern Systems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Specializing in high-level algorithmic Python, interactive JavaScript/TypeScript, and embedded microcontrollers to build resilient software.
          </p>
        </div>

        {/* Interactive Category Filter Bar (Functional Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0a0f1d] border border-slate-800 rounded-xl mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Skills Cards & Interactive Deep-Dive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills Grid (Col Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0f172a] border-blue-500 shadow-lg shadow-blue-900/20'
                      : 'bg-[#0a0f1d] border-slate-800 hover:border-slate-700 hover:bg-[#0c1426]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(skill.category)}
                      <h3 className="text-base font-bold text-white">{skill.name}</h3>
                    </div>
                    <span className="font-mono text-xs text-blue-400">{skill.proficiency}%</span>
                  </div>

                  {/* Clean Meter Bar */}
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Skill Deep-Dive Inspector (Col Span 5) */}
          {activeSkill && (
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0a0f1d] border border-blue-900/40 sticky top-24 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    {getCategoryIcon(activeSkill.category)}
                    <span>{activeSkill.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeSkill.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold font-mono text-cyan-400">{activeSkill.proficiency}%</div>
                  <div className="text-xs text-slate-500">{activeSkill.experience}</div>
                </div>
              </div>

              <div className="py-5 space-y-4">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Architectural Utility & Use Case
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {activeSkill.description}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Implemented in Flagship Projects
                  </div>
                  <div className="space-y-2">
                    {activeSkill.keyProjects.map((proj, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>BSCS 3rd Year Curriculum</span>
                <span className="text-blue-400 flex items-center gap-1">
                  Verified in Codebase <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
