'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiRefreshCw, FiHeart } from 'react-icons/fi';

const BIRTHDAY_WISHES = [
  {
    id: 1,
    text: "Pray that your future shines bright like the moon,\nMay your heart lift with joy like a soaring balloon.\nMay your life play a success story's beautiful tune,\nFor the world grew more lovely when you came in June. ✨",
    emoji: '🌙',
    author: 'A Special Wish',
  },
  {
    id: 2,
    text: "Happy Birthday! 🎉\n\nWishing you a wonderful day filled with happiness, good health, and lots of memorable moments. May this year bring you success, new opportunities, and everything you are working towards.\n\nYou are a kind and hardworking person, and I hope life rewards you with many reasons to smile. May your birthday be filled with laughter, positivity, and the company of people who care about you.\n\nEnjoy your special day, make great memories, and may the year ahead be full of happiness and good fortune. 🎂✨",
    emoji: '✨',
    author: 'From the Heart',
  },
];

export default function BirthdayWishes() {
  const [currentWish, setCurrentWish] = useState(0);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const nextWish = () => {
    setCurrentWish((prev) => (prev + 1) % BIRTHDAY_WISHES.length);
  };

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const wish = BIRTHDAY_WISHES[currentWish];

  return (
    <section id="wishes" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ffcc00 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">💌 Wishes</div>
          <h2 className="text-4xl md:text-6xl font-black font-display gradient-text mb-4">
            Birthday Wishes
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            Beautiful messages crafted with care, just for you.
          </p>
        </motion.div>

        {/* Featured Wish - Large Display */}
        <motion.div
          key={currentWish}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="glass neon-border-gold rounded-3xl p-10 md:p-14 text-center mb-8 relative overflow-hidden"
        >
          {/* Background shimmer */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #ffcc00, transparent, #ff2d78)',
            }}
          />

          <motion.div
            className="text-6xl md:text-8xl mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            {wish.emoji}
          </motion.div>

          <blockquote className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-8 font-display italic whitespace-pre-wrap">
            &ldquo;{wish.text}&rdquo;
          </blockquote>

          <p className="text-white/40 text-sm tracking-widest uppercase">
            — {wish.author}
          </p>

          {/* Like & Next buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <motion.button
              onClick={() => toggleLike(wish.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${liked.has(wish.id)
                  ? 'bg-pink-500/30 border border-pink-400/50 text-pink-300'
                  : 'glass border border-white/10 text-white/60 hover:border-pink-500/40 hover:text-white'
                }`}
              whileTap={{ scale: 0.95 }}
            >
              <FiHeart className={liked.has(wish.id) ? 'fill-pink-400 text-pink-400' : ''} />
              {liked.has(wish.id) ? 'Liked it! 🎉' : 'Like this wish'}
            </motion.button>

            <motion.button
              onClick={nextWish}
              className="flex items-center gap-2 px-6 py-3 glass rounded-full font-semibold text-sm text-white/60 border border-white/10 hover:border-purple-500/40 hover:text-white transition-all"
              whileTap={{ scale: 0.95, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FiRefreshCw />
              Next Wish
            </motion.button>
          </div>
        </motion.div>

        {/* Wish indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {BIRTHDAY_WISHES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentWish(i)}
              className={`rounded-full transition-all duration-300 ${i === currentWish
                  ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>

        {/* Grid of all wishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BIRTHDAY_WISHES.map((w, i) => (
            <motion.div
              key={w.id}
              className="glass glass-hover rounded-2xl p-6 cursor-pointer group"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setCurrentWish(i)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-125 transition-transform">{w.emoji}</span>
                <div>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors">
                    &ldquo;{w.text}&rdquo;
                  </p>
                  <p className="mt-2 text-white/30 text-xs">{w.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
