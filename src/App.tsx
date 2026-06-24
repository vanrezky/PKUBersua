/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ValuePropSection } from './components/ValuePropSection';
import { KegiatanSection } from './components/KegiatanSection';
import { CommunityHighlight } from './components/CommunityHighlight';
import { Testimonials } from './components/Testimonials';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col font-body text-[#2F1F0F] overflow-x-hidden select-none">
      {/* 1. Header / Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem / Why Section */}
        <ProblemSection />

        {/* 4. Value Proposition Section */}
        <ValuePropSection />

        {/* 5. Kegiatan Section */}
        <KegiatanSection />

        {/* 6. Community Highlight Section */}
        <CommunityHighlight />

        {/* 7. Testimonials / Quotes Section */}
        <Testimonials />

        {/* 8. Join CTA Section */}
        <JoinSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
