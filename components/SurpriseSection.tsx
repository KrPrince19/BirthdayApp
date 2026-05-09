'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Heart({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute text-2xl pointer-events-none"
      style={style}
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 0, y: -200, scale: 0 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
    >
      💖
    </motion.div>
  );
}

function FireworkParticle({ color, angle }: { color: string; angle: number }) {
  const rad = (angle * Math.PI) / 180;
  const dist = 100 + Math.random() * 60;
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: color,
        boxShadow: `0 0 6px ${color}`,
        left: '50%',
        top: '50%',
      }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(rad) * dist,
        y: Math.sin(rad) * dist,
        opacity: 0,
        scale: 0,
      }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    />
  );
}

function Fireworks() {
  const colors = ['#ff2d78', '#bf00ff', '#ffcc00', '#00f5d4', '#ff9500', '#fff'];
  const angles = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <div className="relative">
      {angles.map((angle, i) => (
        <FireworkParticle
          key={i}
          color={colors[i % colors.length]}
          angle={angle}
        />
      ))}
    </div>
  );
}

const SECRET_MESSAGE = `Dear ZamZam,

On this wonderful day, I want you to know how incredibly special you are to the world and to everyone who knows you.

Your smile lights up any room you walk into. Your kindness makes the world a better place. Your strength inspires everyone around you.

May this year bring you everything your heart desires — happiness that never fades, joy that never ends, and dreams that always come true. 🌟

Wishing you the very best,
Your Biggest Fan 🎉`;

export default function SurpriseSection() {
  const [opened, setOpened] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);
  const [shaking, setShaking] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      setOpened(true);
      setShowFireworks(true);

      // Spawn hearts
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        x: 20 + Math.random() * 60,
      }));
      setHearts(newHearts);

      setTimeout(() => setShowFireworks(false), 2000);
      setTimeout(() => setHearts([]), 3000);
    }, 600);
  };

  return (
    <section id="surprise" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center, #ff2d78 0%, #bf00ff 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">🎁 Surprise</div>
          <h2 className="text-4xl md:text-6xl font-black font-display gradient-text mb-4">
            Your Special Gift
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-white/50 text-lg">
            Click the gift box to reveal your surprise! 🎀
          </p>
        </motion.div>

        {/* Gift Box */}
        <div className="relative flex justify-center mb-12">
          {/* Fireworks */}
          <AnimatePresence>
            {showFireworks && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + (i % 2) * 30}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <Fireworks />
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Floating Hearts */}
          {hearts.map((heart) => (
            <Heart
              key={heart.id}
              style={{ left: `${heart.x}%`, bottom: '60%' }}
            />
          ))}

          {/* Gift Box */}
          <motion.button
            onClick={handleOpen}
            className="relative cursor-pointer select-none"
            animate={shaking ? { rotate: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.5 }}
            whileHover={!opened ? { scale: 1.05 } : {}}
            whileTap={!opened ? { scale: 0.95 } : {}}
          >
            <motion.div
              className="text-[120px] md:text-[160px] filter drop-shadow-lg"
              animate={
                !opened
                  ? {
                      y: [0, -12, 0],
                    }
                  : { scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }
              }
              transition={
                !opened
                  ? { repeat: Infinity, duration: 2, ease: 'easeInOut' }
                  : { duration: 0.6 }
              }
            >
              {opened ? '🎁' : '📦'}
            </motion.div>

            {!opened && (
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium whitespace-nowrap"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ✨ Click to open ✨
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Revealed Message */}
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', damping: 15 }}
              className="glass neon-border-pink rounded-3xl p-8 md:p-12 text-left relative overflow-hidden"
            >
              {/* Sparkle corner */}
              <div className="absolute top-4 right-4 text-2xl animate-spin-slow">✨</div>
              <div className="absolute bottom-4 left-4 text-2xl animate-float">💫</div>

              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">💌</div>
                <div>
                  <h3 className="text-2xl font-bold font-display gradient-text">
                    A Message Just For You
                  </h3>
                  <p className="text-white/40 text-sm">A heartfelt message, just for you 🎉</p>
                </div>
              </div>

              <div className="whitespace-pre-line text-white/80 leading-relaxed text-base md:text-lg font-light border-l-2 border-pink-500/50 pl-6">
                {SECRET_MESSAGE}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['🎂', '🎈', '🌸', '🦋', '💎', '🌟', '💖', '🎊'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5 + i * 0.2,
                      delay: i * 0.15,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
