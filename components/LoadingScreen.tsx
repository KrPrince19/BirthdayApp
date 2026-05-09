'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen flex-col gap-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated cake emoji */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-7xl"
          >
            🎂
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="shimmer-text text-3xl font-bold font-display mb-2">
              Preparing Your Surprise...
            </p>
            <p className="text-purple-300 text-sm tracking-widest uppercase">
              Loading magic ✨
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #bf00ff, #ff2d78, #ffcc00)',
                width: `${progress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <p className="text-white/40 text-sm">{progress}%</p>

          {/* Floating sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.5,
                delay: i * 0.3,
              }}
            >
              {['✨', '⭐', '💫', '🌟', '✨', '💎'][i]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
