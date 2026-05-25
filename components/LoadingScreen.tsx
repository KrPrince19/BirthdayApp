'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > -1) {
      // 1000ms for countdown (3,2,1) and 1200ms for "Let's Go!"
      const timer = setTimeout(() => setCount(count - 1), count === 0 ? 1200 : 1000);
      return () => clearTimeout(timer);
    } else {
      // Show "Happy Birthday ZamZam!" for 2 seconds before closing loading screen
      const timer = setTimeout(() => setLoading(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen flex-col gap-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={count}
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ff2d78] via-[#bf00ff] to-[#ffcc00] drop-shadow-[0_0_20px_rgba(191,0,255,0.5)] text-center px-4 ${
                count > 0
                  ? 'text-9xl md:text-[12rem]'
                  : count === 0
                  ? 'text-7xl md:text-8xl'
                  : 'text-5xl md:text-7xl'
              }`}
            >
              {count > 0 ? (
                count
              ) : count === 0 ? (
                "Let's Go! 🚀"
              ) : (
                <>
                  Happy Birthday<br />ZamZam! 🎉
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {count > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-purple-300 text-lg md:text-xl tracking-widest uppercase font-semibold mt-4 absolute bottom-[30%]"
              >
                Get Ready...
              </motion.p>
            )}
          </AnimatePresence>

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
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
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
