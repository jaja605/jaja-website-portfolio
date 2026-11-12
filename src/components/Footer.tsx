import { ArrowUp, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#05070c] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </div>
            <div className="text-xs text-slate-400">
              3rd-Year BSCS Student · Cavite State University - Bacoor Campus
            </div>
          </div>

          {/* Quick Links & Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>Niog 1, Bacoor, Cavite</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span>Flagship Project #01</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-blue-400">#07 Matrix</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Quiet Subtext */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-400 font-mono">
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Crafted with Three.js, React & Tailwind CSS. Ready for GitHub & Vercel.
        </div>
      </div>
    </footer>
  );
}
