import { ArrowDown, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export function HeroSection({ onExploreClick, onContactClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-slate-800/80">
      {/* 3D Canvas Background & Interaction Layer */}
      <div className="absolute inset-0 z-0">
        <Hero3DCanvas />
      </div>

      {/* Semantic DOM Foreground Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pointer-events-none w-full">
        <div className="max-w-3xl space-y-6 pointer-events-auto">
          {/* Unboxed Metadata Kicker */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-blue-400 font-medium tracking-wide">
            <span>{PERSONAL_INFO.institution}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Bacoor, Philippines</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-cyan-400 font-mono">07 Genesis Matrix</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            James Andrei <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
              U. Reyes
            </span>{' '}
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-400 tracking-normal font-sans">
              ("{PERSONAL_INFO.preferredName}")
            </span>
          </h1>

          {/* Role Subtitle & Bio */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            3rd-Year BSCS Student & Aspiring AI Developer dedicated to mastering Python and JavaScript to build tools that amplify human thinking.
          </p>

          {/* Unboxed Status & Quick Facts */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-normal pt-1">
            <span>Age 20 (Born July 07, 2006)</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>2nd Year Dean's Lister</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span className="text-blue-300 font-mono">Lucky Key: #07</span>
          </div>

          {/* Interactive Primary Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onExploreClick}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              <span>Explore Vision & AI</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
