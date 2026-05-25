'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';

const BIRTHDAY_NAME = 'ZamZam';

const words = [
  `Happy Birthday ${BIRTHDAY_NAME}! 🎂`,
  'Wishing You Joy & Happiness 🎉',
  'Today Is Your Magical Day ✨',
  `We Celebrate You, ${BIRTHDAY_NAME}! 🥳`,
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % texts.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, isDeleting ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, texts]);

  return (
    <span className="shimmer-text">
      {displayText}
      <span className="animate-pulse text-pink-400">|</span>
    </span>
  );
}

function Balloon({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="balloon absolute"
      style={style}
    />
  );
}

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 1,
    delay: Math.random() * 3,
  }));

  return (
    <>
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}

function ConfettiRain() {
  const pieces = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    color: ['#ff2d78', '#bf00ff', '#ffcc00', '#00f5d4', '#ff9500'][i % 5],
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 4 + 4}s`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() * 6 + 4,
    shape: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '2px',
  }));

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            top: '-20px',
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.shape,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}

const balloons = [
  { color: '#ff2d78', size: '65px', left: '5%', top: '25%', duration: '7s', delay: '0s' },
  { color: '#bf00ff', size: '50px', left: '12%', top: '55%', duration: '9s', delay: '1s' },
  { color: '#ffcc00', size: '75px', left: '88%', top: '20%', duration: '8s', delay: '0.5s' },
  { color: '#ff6eb4', size: '55px', left: '92%', top: '60%', duration: '6s', delay: '2s' },
  { color: '#9b5de5', size: '45px', left: '3%', top: '75%', duration: '10s', delay: '1.5s' },
  { color: '#f15bb5', size: '60px', left: '95%', top: '80%', duration: '7.5s', delay: '0.8s' },
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Deep space gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #2D0A31, #1A0B2E, #11051F)",
            "linear-gradient(45deg, #1A0B2E, #11051F, #3b0c36)",
            "linear-gradient(45deg, #11051F, #3b0c36, #2D0A31)",
            "linear-gradient(45deg, #2D0A31, #1A0B2E, #11051F)",
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Animated Mesh Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none filter blur-[80px] md:blur-[120px] opacity-70">
        <motion.div
          className="absolute w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-purple-600/50 rounded-full mix-blend-screen"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '-10%', left: '-10%' }}
        />
        
        <motion.div
          className="absolute w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] bg-pink-600/40 rounded-full mix-blend-screen"
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -100, 0],
            scale: [1, 0.8, 1.3, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '20%', right: '-20%' }}
        />
        
        <motion.div
          className="absolute w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] bg-yellow-500/30 rounded-full mix-blend-screen"
          animate={{
            x: [0, 100, -150, 0],
            y: [0, -50, 150, 0],
            scale: [1, 1.3, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '-10%', left: '10%' }}
        />
        
        <motion.div
          className="absolute w-[35vw] h-[35vw] min-w-[350px] min-h-[350px] bg-fuchsia-600/50 rounded-full mix-blend-screen"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '10%', right: '20%' }}
        />
      </div>

      {/* Glassmorphism Noise Overlay for premium texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <StarField />
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <ConfettiRain />
      </div>

      {/* Balloons */}
      {balloons.map((b, i) => (
        <Balloon
          key={i}
          style={{
            background: b.color,
            '--size': b.size,
            '--duration': b.duration,
            '--delay': b.delay,
            left: b.left,
            top: b.top,
            boxShadow: `0 0 20px ${b.color}88`,
          } as React.CSSProperties}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass neon-border-purple px-5 py-2 rounded-full mb-8 text-purple-300 text-sm font-medium tracking-widest uppercase"
        >
          <span className="animate-heart-beat text-lg">💖</span>
          A Special Day
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        >
          <TypeWriter texts={words} />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/60 text-lg md:text-xl mb-10 font-light leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          &quot;Pray that your future shines bright like the moon,<br />
          May your heart lift with joy like a soaring balloon.<br />
          May your life play a success story&apos;s beautiful tune,<br />
          For the world grew more lovely when you came in June.&quot; 🌙
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button 
            onClick={(e) => {
              e.preventDefault();
              if (!isPlaying) toggleMusic();
              document.getElementById('surprise')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            <span>🎂 Cut the Cake</span>
          </button>
          <a
            href="#gallery"
            className="flex items-center gap-2 px-8 py-4 glass rounded-full text-white/80 font-semibold border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/5"
          >
            📸 View Memories
          </a>
        </motion.div>

        {/* Music Player */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={toggleMusic}
            className="flex items-center gap-3 glass neon-border-pink px-5 py-3 rounded-full text-sm text-white/80 hover:text-white transition-all hover:scale-105"
          >
            {isPlaying ? (
              <>
                <FiPause className="text-pink-400" />
                <div className="flex items-end gap-0.5 h-5">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className="eq-bar"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <span>Playing Birthday Music</span>
              </>
            ) : (
              <>
                <FiPlay className="text-pink-400" />
                <span>Play Birthday Music 🎵</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Audio element */}
        <audio ref={audioRef} loop>
          <source src="/music/zam.mpeg" type="audio/mpeg" />
        </audio>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiChevronDown className="text-2xl text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
