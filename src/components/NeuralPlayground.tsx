import { useState } from 'react';
import { Brain, Cpu, Zap, Sparkles, Quote, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Scenario {
  id: string;
  title: string;
  humanRole: string;
  aiRole: string;
  synergyResult: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'ai-tools',
    title: 'AI Tool Building & Software Architecture',
    humanRole: 'Architecting the problem definition, empathy for the end user, and core ethics',
    aiRole: 'Generating boilerplate, benchmarking performance patterns, and linting edge cases',
    synergyResult: 'Production-ready software delivered 4x faster while retaining human intentionality and soul.'
  },
  {
    id: 'algorithms',
    title: 'Algorithmic Problem Solving & Data Structures',
    humanRole: 'Conceptual mathematical formulation and selecting correct heuristic models',
    aiRole: 'Executing parameter space search, stress testing millions of edge inputs, and profiling',
    synergyResult: 'Novel algorithmic breakthroughs without hours of tedious manual dry-runs.'
  },
  {
    id: 'creativity',
    title: 'Interactive 3D & Creative WebGL Design',
    humanRole: 'Art direction, sensory pacing, aesthetic taste, and personal storytelling',
    aiRole: 'Solving matrix trigonometry equations, procedural geometry noise math, and optimization',
    synergyResult: 'Immersive digital universes that touch people emotionally with 60+ FPS fidelity.'
  }
];

export function NeuralPlayground() {
  const [humanPower, setHumanPower] = useState<number>(85);
  const [aiPower, setAiPower] = useState<number>(75);
  const [activeScenario, setActiveScenario] = useState<string>('ai-tools');

  // Compute Symbiosis State
  const getSymbiosisState = () => {
    if (humanPower < 40 && aiPower < 40) {
      return {
        label: 'Dormant State',
        tone: 'text-slate-400',
        summary: 'Neither human insight nor computational assistance is engaged.',
        verdict: 'No progress made. Ideas remain unarticulated.',
        amplificationFactor: '1.0x'
      };
    }
    if (humanPower < 40 && aiPower >= 60) {
      return {
        label: 'Unguided Machine Output',
        tone: 'text-amber-400',
        summary: 'AI churning repetitive patterns without human vision, purpose, or taste.',
        verdict: 'Produces synthetic filler lacking purpose and emotional resonance.',
        amplificationFactor: '1.4x (Unchecked Noise)'
      };
    }
    if (humanPower >= 60 && aiPower < 40) {
      return {
        label: 'High Intuition, Manual Friction',
        tone: 'text-sky-300',
        summary: 'Visionary human thought slowed down by boilerplate, repetitive syntax, and manual grunt work.',
        verdict: 'Brilliant conceptual sparks, but slowed down by repetitive mechanics.',
        amplificationFactor: '2.1x'
      };
    }
    return {
      label: 'The Golden Symbiosis (Human Amplified)',
      tone: 'text-cyan-300',
      summary: 'Human intellect directs the vision, ethics, and nuance, while AI multiplies speed and expands computational reach.',
      verdict: 'Amplified human cognition. Work becomes effortless and creative expression deepens.',
      amplificationFactor: `${((humanPower * aiPower) / 1000 + 3.2).toFixed(1)}x Cognitive Velocity`
    };
  };

  const currentSymbiosis = getSymbiosisState();
  const selectedScenario = SCENARIOS.find((s) => s.id === activeScenario) || SCENARIOS[0];

  return (
    <section id="philosophy" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
            <span>01. Core AI Philosophy</span>
            <span className="text-slate-600">·</span>
            <span>Cognitive Augmentation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Human-Centric Intelligence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            James Andrei's foundational perspective on software engineering: technology exists to empower the human spirit, never to replace it.
          </p>
        </div>

        {/* Featured Philosophy Quote Hero Card */}
        <div className="relative mb-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#0c1322] via-[#080d19] to-[#07090e] border border-blue-900/40 shadow-2xl">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="p-3 bg-blue-600/15 rounded-xl text-blue-400 border border-blue-500/20 shrink-0">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-4">
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-100 leading-snug tracking-tight">
                "{PERSONAL_INFO.philosophyQuote}"
              </blockquote>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
                <span className="text-blue-400 font-semibold">{PERSONAL_INFO.fullName}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Personal Engineering Creed</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="font-mono text-slate-400">Bacoor, Cavite</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Symbiosis Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0a0f1d] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Symbiosis Visualizer</span>
                </h3>
                <span className="text-xs font-mono text-blue-400">Adjust Parameters</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Test how varying human creative intent and AI computational speed alter overall output fidelity.
              </p>

              {/* Slider 1: Human Creative Intent */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center gap-2 text-slate-200">
                    <Brain className="w-4 h-4 text-sky-400" />
                    Human Creative Intent & Empathy
                  </span>
                  <span className="font-mono text-blue-400 font-semibold">{humanPower}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={humanPower}
                  onChange={(e) => setHumanPower(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>Passive</span>
                  <span>Visionary Direction</span>
                </div>
              </div>

              {/* Slider 2: AI Computational Speed */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center gap-2 text-slate-200">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    AI Computational Acceleration
                  </span>
                  <span className="font-mono text-cyan-400 font-semibold">{aiPower}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={aiPower}
                  onChange={(e) => setAiPower(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>Zero Tooling</span>
                  <span>Autonomous Velocity</span>
                </div>
              </div>
            </div>

            {/* Scenario Selector Tabs */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Select Active Domain Context
              </span>
              <div className="flex flex-wrap gap-2">
                {SCENARIOS.map((sc) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setActiveScenario(sc.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      activeScenario === sc.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {sc.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Synthesis Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#0a0f1d] border border-blue-900/30 rounded-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Symbiosis Telemetry</span>
                <span className="text-cyan-400">{currentSymbiosis.amplificationFactor}</span>
              </div>

              {/* State Header */}
              <div className="p-4 rounded-xl bg-[#080d1a] border border-slate-800/80 mb-6">
                <div className={`text-base font-bold ${currentSymbiosis.tone} flex items-center gap-2 mb-1.5`}>
                  <Zap className="w-4 h-4" />
                  <span>{currentSymbiosis.label}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentSymbiosis.summary}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                  <span className="text-slate-300 font-medium">Outcome:</span> {currentSymbiosis.verdict}
                </div>
              </div>

              {/* Breakdown in Selected Scenario */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5" />
                    <span>The Human Mind (James Andrei)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {selectedScenario.humanRole}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>The Machine Accelerator</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {selectedScenario.aiRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Synthesis Conclusion */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                <span>Symbiotic Output</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedScenario.synergyResult}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
