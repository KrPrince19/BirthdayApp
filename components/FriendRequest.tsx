'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FriendRequest() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const maxDistance = 150;
    
    // Generate new random coordinates within the boundaries
    const newX = (Math.random() - 0.5) * maxDistance * 2;
    const newY = (Math.random() - 0.5) * maxDistance * 2;
    
    setNoPosition({ x: newX, y: newY });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-8 w-full max-w-2xl relative z-10">
        {/* Story Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass neon-border-pink rounded-3xl p-6 md:p-10 text-center relative w-full"
        >
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-2xl md:text-3xl font-bold font-display gradient-text mb-6">
            Give Where It&apos;s Truly Needed
          </h3>
          <p className="text-white/80 leading-relaxed text-sm md:text-base font-medium italic text-left">
            &quot;Jaise mandir aur mahjid me log paisa, prasad aur daan karte hain. Wahan koi maang nahi raha hota, phir bhi log dete hain. Lekin bahar koi zaruratmand haath phaila kar help maang raha hota hai, use aksar log nazarandaaz kar dete hain. Haqeeqat ye hai ki us daan ki keemat mandir ya mahjid se zyada us insaan ke liye hoti hai jise uski sach me zarurat hai. Isi tarah apni friendship bhi usi insaan ko do jo sach me tumhari friendship maang raha ho, jo tumhare friendship ki respect karta ho aur jise waqai tumhari friendship ki zarurat ho.&quot;
          </p>
        </motion.div>

        {/* Request Box */}
        <div className="glass neon-border-pink rounded-3xl p-8 md:p-12 text-center relative max-w-md w-full">
          {!accepted ? (
            <>
              <h2 className="text-3xl font-bold font-display gradient-text mb-8">
                You want be my friend?
              </h2>
              <div className="flex justify-center gap-6 items-center min-h-[60px]">
                <button
                  onClick={() => setAccepted(true)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg hover:scale-105 transition-transform z-10"
                >
                  Yes
                </button>
                
                <motion.button
                  className="px-8 py-3 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 z-20"
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  onTouchStart={(e) => {
                    e.preventDefault(); // Prevent default touch behavior
                    moveNoButton();
                  }}
                >
                  No
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <div className="text-6xl mb-4">🥳</div>
              <h2 className="text-3xl font-bold font-display gradient-text mb-2">
                Yay! Best friends forever! 🎉
              </h2>
              <p className="text-2xl font-semibold text-white/90">
                Thank You!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
