'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Set next birthday target (change this date!)
const BIRTHDAY_DATE = new Date('2026-06-15T00:00:00');

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center glass neon-border-purple rounded-2xl">
        {/* Glow pulse */}
        <div className="absolute inset-0 rounded-2xl bg-purple-500/5 animate-pulse" />
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-5xl font-black gradient-text font-display"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="mt-2 text-white/50 text-xs uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(BIRTHDAY_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(BIRTHDAY_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isPast = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #bf00ff 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="section-tag">⏰ Countdown</div>
          <h2 className="text-4xl md:text-5xl font-black font-display gradient-text mb-4">
            {isPast ? '🎉 Today is the Day!' : 'Next Birthday Countdown'}
          </h2>
          <p className="text-white/50 text-lg">
            {isPast
              ? 'Happy Birthday! May all your dreams come true! 🌟'
              : 'Every second brings us closer to the most magical day!'}
          </p>
        </motion.div>

        {!isPast && (
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            <Digit value={timeLeft.days} label="Days" />
            <div className="text-3xl md:text-5xl font-black text-pink-400 mb-5 animate-pulse">:</div>
            <Digit value={timeLeft.hours} label="Hours" />
            <div className="text-3xl md:text-5xl font-black text-pink-400 mb-5 animate-pulse">:</div>
            <Digit value={timeLeft.minutes} label="Minutes" />
            <div className="text-3xl md:text-5xl font-black text-pink-400 mb-5 animate-pulse">:</div>
            <Digit value={timeLeft.seconds} label="Seconds" />
          </div>
        )}

        {isPast && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-8xl"
          >
            🎂
          </motion.div>
        )}
      </div>
    </section>
  );
}
