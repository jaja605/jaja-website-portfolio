import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Terminal, Flame, CircleDot, Volume2, VolumeX, Sparkles, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function BeyondTheCode() {
  // Python Interactive Snippet State
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string[]>([
    "Ready to execute jaja_routine.py...",
    "Click 'Run Routine' to execute algorithm."
  ]);

  // Audio Synth State (Web Audio API - 100% Procedural)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleLoFiAudio = () => {
    if (isPlayingAudio) {
      // Stop Audio
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      oscillatorsRef.current = [];
      if (gainNodeRef.current) {
        gainNodeRef.current.disconnect();
        gainNodeRef.current = null;
      }
      setIsPlayingAudio(false);
    } else {
      // Start Procedural Warm Ambient Chord (F major 9: F, A, C, E, G in low octaves)
      try {
        const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtxClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a warm lo-fi harmonic drone (Hz)
        const chordFreqs = [174.61, 220.00, 261.63, 329.63, 392.00];
        const newOscs: OscillatorNode[] = [];

        chordFreqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Warm low-pass filter to sound like gentle vintage vinyl tape
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450 + idx * 50, ctx.currentTime);

          osc.connect(filter);
          if (panner) {
            panner.pan.setValueAtTime((idx - 2) * 0.35, ctx.currentTime);
            filter.connect(panner);
            panner.connect(masterGain);
          } else {
            filter.connect(masterGain);
          }

          osc.start();
          newOscs.push(osc);
        });

        oscillatorsRef.current = newOscs;
        setIsPlayingAudio(true);
      } catch (e) {
        console.error('Audio initialization error:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const handleRunPython = () => {
    setIsRunningCode(true);
    setCodeOutput(["[Compiling Python 3.12 VM]", "Parsing AST...", "Executing state loop..."]);

    setTimeout(() => {
      setCodeOutput([
        ">> Initializing Jaja's cognitive cycle...",
        ">> Status: BOREDOM_DETECTED == True",
        ">> Action: Triggering build_something_extraordinary()",
        ">> Output: New AI model prototype initialized.",
        ">> Result: 'Boredom is just fuel for coding breakthroughs.'",
        ">> [Execution Complete: 0 errors, 407 tokens synthesized]"
      ]);
      setIsRunningCode(false);
    }, 700);
  };

  return (
    <section id="beyond-code" className="py-24 bg-[#07090e] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
            <span>02. Beyond The Code</span>
            <span className="text-slate-600">·</span>
            <span>Lifestyle & Personal Vibe</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Human Behind The Keyboard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From bank shots in billiards to late-night coding loops and comfort food, here is what fuels James Andrei's creative energy.
          </p>
        </div>

        {/* Dynamic Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Interactive Python Routine (Col Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#0a0f1d] border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <span>boredom_engine.py</span>
                </div>
                <button
                  type="button"
                  onClick={handleRunPython}
                  disabled={isRunningCode}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50 transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isRunningCode ? 'Running...' : 'Run Routine'}</span>
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-4 rounded-xl bg-[#06080d] border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
                <div><span className="text-blue-400">def</span> <span className="text-cyan-300">lifestyle_loop</span>(state):</div>
                <div className="pl-4">boredom = state.<span className="text-sky-300">detect_downtime</span>()</div>
                <div className="pl-4"><span className="text-purple-400">if</span> boredom:</div>
                <div className="pl-8"><span className="text-slate-500"># Whenever bored, transform stillness into code</span></div>
                <div className="pl-8">solution = <span className="text-sky-300">explore_ai_concepts</span>(focus=<span className="text-amber-300">"human-amplification"</span>)</div>
                <div className="pl-8"><span className="text-purple-400">return</span> solution.<span className="text-sky-300">ship_to_github</span>()</div>
                <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-amber-300">"Practicing basketball jump-shots & bank angles"</span></div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="mt-4 p-3 rounded-lg bg-black/50 border border-slate-900 font-mono text-[11px] sm:text-xs text-blue-300/90 space-y-1 min-h-[70px]">
              {codeOutput.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          </div>

          {/* Card 2: Late Night Coding Vibe (Col Span 5) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#0a0f1d] border border-slate-800 relative group shadow-xl">
            <img
              src="/src/assets/images/bento_night_coding_1794502781497.jpg"
              alt="Nighttime developer workstation"
              className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Midnight Flow</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Coding Whenever Bored</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Coding isn't just an academic requirement—it's James's natural reflex whenever downtime strikes. Turning idle curiosity into functional software.
              </p>
            </div>
          </div>

          {/* Card 3: Lo-Fi Study Music Vibe (Col Span 4) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Audio Soundtrack
                </span>
                <button
                  type="button"
                  onClick={toggleLoFiAudio}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    isPlayingAudio
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Pause Drone</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                      <span>Play Ambient Drone</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Lo-Fi Study Focus</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Listening to low-tempo melodic tracks and warm chords while dissecting algorithms creates deep flow states.
              </p>

              {/* Animated Waveform Visualizer */}
              <div className="h-16 flex items-end gap-1.5 p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                {[45, 80, 60, 95, 30, 75, 90, 50, 70, 85, 40, 65, 90, 55].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: isPlayingAudio ? `${Math.min(100, Math.max(15, h + (i % 3) * 10))}%` : '20%',
                      transition: 'height 0.3s ease'
                    }}
                    className={`flex-1 rounded-sm ${
                      isPlayingAudio ? 'bg-blue-500' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Mood: Calm Focus</span>
              <span>Procedural Web Audio</span>
            </div>
          </div>

          {/* Card 4: Precision Sports — Basketball & Billiards (Col Span 4) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0a0f1d] border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-3">
                <Trophy className="w-4 h-4 text-sky-400" />
                <span>Tactical Geometry</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Basketball & Billiards</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Court vision and cue stick precision require the same spatial geometry and split-second problem solving as writing high-performance code.
              </p>

              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="text-slate-200 font-semibold mb-0.5">Billiards Angle Geometry</div>
                  <div className="text-slate-400 text-[11px]">Bank shot vectors, cue deflection compensation, and positional strategy.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                  <div className="text-slate-200 font-semibold mb-0.5">Court Vision & Perimeter Defense</div>
                  <div className="text-slate-400 text-[11px]">Fast-break transition timing, defensive anticipation, and high-pressure focus.</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
              Discipline · Spatial Awareness · Resilience
            </div>
          </div>

          {/* Card 5: Favorites & Lucky #07 Matrix (Col Span 4) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-[#0c1426] via-[#090e1d] to-[#07090e] border border-blue-900/40 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                <CircleDot className="w-4 h-4 text-blue-400" />
                <span>Personal Signature</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Identity & Favorites</h3>

              <div className="space-y-3 mt-4 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Favorite Food:</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Sinigang na Baboy
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Favorite Color:</span>
                  <span className="text-blue-300 font-medium flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                    Electric Blue
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-slate-400">Lucky Number:</span>
                  <span className="text-cyan-300 font-mono font-bold text-sm">
                    #07 (July 07, 2006)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400">
              Niog 1, Bacoor City, Cavite
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
