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
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0d0020] to-[#10000a]" />

      {/* Radial glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #bf00ff 0%, transparent 70%)',
            top: '10%',
            left: '20%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #ff2d78 0%, transparent 70%)',
            bottom: '10%',
            right: '20%',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #ffcc00 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

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
          "Pray that your future shines bright like the moon,<br />
          May your heart lift with joy like a soaring balloon.<br />
          May your life play a success story's beautiful tune,<br />
          For the world grew more lovely when you came in June." 🌙
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#surprise" className="btn-primary text-lg px-8 py-4">
            <span>🎁 Open Your Surprise</span>
          </a>
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
          <source src="/music/birthday.mp3" type="audio/mpeg" />
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
