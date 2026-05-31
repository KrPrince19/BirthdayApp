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
          className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-3xl opacity-50" />
          </div>

          <div className="h-full w-full flex items-center justify-center p-4">
            <motion.div
              className="relative w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[95vh]"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-1.5 sm:space-y-4 md:space-y-5 text-gray-200 font-light leading-snug sm:leading-relaxed text-[11px] xs:text-xs sm:text-base md:text-lg overflow-y-auto shrink pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pr-1">
                <p className="px-2 py-1.5 sm:px-4 sm:py-3 -mx-2 sm:-mx-4 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 cursor-default">
                  I'm sorry if this bothers you 😔, and please forgive me if it seems strange 🙏.
                </p>
                
                <p className="px-2 py-1.5 sm:px-4 sm:py-3 -mx-2 sm:-mx-4 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 cursor-default">
                  Many people are practical and don't take things this seriously. Maybe I'm different—that's just the way God made me ✨. I still have the pen 🖊️ you gave me, I remember the sketch 🎨 I made for you, and I never removed your signature ✍️ from my T-shirt 👕. To others, these may be small things, but I kept them as memories of someone whose friendship I always hoped for 🤝.
                </p>

                <p className="px-2 py-1.5 sm:px-4 sm:py-3 -mx-2 sm:-mx-4 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 cursor-default">
                  I could have kept all of this to myself, but I wanted to be honest 🗣️. I don't know what the result will be, but I'd rather tell the truth 🤍.
                </p>

                <p className="px-2 py-1.5 sm:px-4 sm:py-3 -mx-2 sm:-mx-4 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 cursor-default">
                  Kabhi lagta hai ki ek din main tumhara friend ban jaunga, kyunki main baar-baar isi umeed ke saath tumse darkhwast karta hoon. Aur kabhi lagta hai ki shayad main woh shakhs ban jaunga jise tum apni zindagi mein sabse zyada Hate karogi, sirf isliye kyunki main har baar tumhari friendship ki guzarish kar deta hoon
                </p>

                <p className="px-2 py-1.5 sm:px-4 sm:py-3 -mx-2 sm:-mx-4 rounded-xl sm:rounded-2xl hover:bg-white/5 hover:text-white transition-all duration-300 cursor-default">
                  And once again, I'm sorry if I've ever bothered you 😔🙏.
                </p>
              </div>

              <motion.div
                className="mt-4 sm:mt-8 flex justify-center shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }} // Delayed to encourage reading
              >
                <button
                  onClick={handleNext}
                  className="group relative px-5 py-2.5 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm sm:text-base font-semibold text-white tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(191,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,45,120,0.5)]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-2">
                    Read & Continue
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
