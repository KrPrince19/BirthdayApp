'use client';

import LoadingScreen from '@/components/LoadingScreen';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import MemoryGallery from '@/components/MemoryGallery';
import Timeline from '@/components/Timeline';
import SurpriseSection from '@/components/SurpriseSection';
import BirthdayWishes from '@/components/BirthdayWishes';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <CursorGlow />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <CountdownTimer />

        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

        <MemoryGallery />

        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <Timeline />

        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

        <SurpriseSection />

        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <BirthdayWishes />
      </main>

      <Footer />
    </>
  );
}
