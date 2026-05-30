'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MessageGateProps {
  onComplete: () => void;
}

export default function MessageGate({ onComplete }: MessageGateProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] px-4 py-8 overflow-y-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-3xl opacity-50" />
          </div>

          <motion.div 
            className="relative w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-200 font-light leading-relaxed text-lg md:text-xl">
              <p>
                I'm sorry if this bothers you 😔, and please forgive me if it seems strange 🙏.
              </p>
              
              <p>
                Many people are practical and don't take things this seriously. Maybe I'm different—that's just the way God made me ✨. I still have the pen 🖊️ you gave me, I remember the sketch 🎨 I made for you, and I never removed your signature ✍️ from my T-shirt 👕. To others, these may be small things, but I kept them as memories of someone whose friendship I always hoped for 🤝.
              </p>

              <p>
                I could have kept all of this to myself, but I wanted to be honest 🗣️. I don't know what the result will be, but I'd rather tell the truth 🤍.
              </p>

              <p>
                I've always wanted to be your friend, and that's the only wish I hope comes true someday 🌟. If it never does, please just remember this: I was always sincere about your friendship 🫂.
              </p>

              <p>
                And once again, I'm sorry if I've ever bothered you 😔🙏.
              </p>
            </div>

            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }} // Delayed to encourage reading
            >
              <button
                onClick={handleNext}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(191,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,45,120,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Read & Continue
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
