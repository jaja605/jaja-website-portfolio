/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { NeuralPlayground } from './components/NeuralPlayground';
import { BeyondTheCode } from './components/BeyondTheCode';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TrajectoryAwards } from './components/TrajectoryAwards';
import { ContactTerminal } from './components/ContactTerminal';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPhilosophy = () => {
    const el = document.getElementById('philosophy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Contract Navigation */}
      <Navigation onContactClick={scrollToContact} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Interactive 3D Neural Core & Zero-Occlusion HUD */}
        <HeroSection
          onExploreClick={scrollToPhilosophy}
          onContactClick={scrollToContact}
        />

        {/* Section 01 // Human + AI Symbiosis & Philosophy Quote */}
        <NeuralPlayground />

        {/* Section 02 // Beyond The Code 3D Bento Grid (Python Runner, Lo-Fi Audio Drone, Sports & #07) */}
        <BeyondTheCode />

        {/* Section 03 // Interactive Tech Stack & Skills Matrix */}
        <SkillsMatrix />

        {/* Section 04 // Flagship Projects Showcase */}
        <ProjectsShowcase />

        {/* Section 05 // Academic Trajectory & Holographic Trophy Room */}
        <TrajectoryAwards />

        {/* Section 06 // Direct Contact Terminal */}
        <ContactTerminal />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
