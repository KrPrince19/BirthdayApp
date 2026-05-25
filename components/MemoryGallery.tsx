'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiZoomIn, FiHeart } from 'react-icons/fi';

const photos = [
  {
    id: 1,
    src: "/images/zm1.jpeg",
    alt: 'Birthday celebration',
    caption: 'The Day We Celebrated You 🎉',
  },
  {
    id: 2,
    src: "/images/zm2.jpeg",
    alt: 'Sweet Moments',
    caption: 'Sweet Moments 🎂',
  },
  {
    id: 3,
    src: "/images/zm3.jpeg",
    alt: 'Magical Lights',
    caption: 'Magical Lights ✨',
  },
  {
    id: 4,
    src: "/images/zm4.jpeg",
    alt: 'Adventure Together',
    caption: 'Adventure Together 🎈',
  },
  {
    id: 5,
    src: "/images/zm5.jpeg",
    alt: 'Golden Memories',
    caption: 'Golden Memories 🌟',
  },
  {
    id: 6,
    src: "/images/zm6.jpeg",
    alt: 'Laughter and Joy',
    caption: 'Laughter and Joy 🎊',
  },
  
  {
    id: 8,
    src: "/images/zm8.jpeg",
    alt: 'Forever Grateful',
    caption: 'Forever Grateful ❤️',
  },
  {
    id: 9,
    src: "/images/zam7.jpeg",
    alt: 'Beautiful Moment',
    caption: 'Beautiful Moment 💖',
  },
  {
    id: 10,
    src: "/images/zam9.jpeg",
    alt: 'Precious Memories',
    caption: 'Precious Memories 🌸',
  },
  {
    id: 11,
    src: "/images/zam10.jpeg",
    alt: 'Always Smiling',
    caption: 'Always Smiling 😊',
  },
];

export default function MemoryGallery() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute top-1/4 -right-24 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #bf00ff 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-1/4 -left-24 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ff2d78 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="section-tag">📸 Memory Gallery</div>
          <h2 className="text-5xl md:text-7xl font-black font-display gradient-text-pink mb-6">
            Captured Moments
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every picture tells a story of love, laughter, and the beautiful journey we&apos;ve shared. 
            These are the snapshots of our favorite chapters.
          </p>
        </motion.div>

        {/* Sequential Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Floating Decoration Container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
                className="relative cursor-pointer"
                onClick={() => setSelected(photo)}
              >
                {/* Polaroid Frame */}
                <div className="glass p-4 pb-14 rounded-xl shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(191,0,255,0.2)] group-hover:-translate-y-2 group-hover:rotate-1 border border-white/10">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black/40">
                    {/* Blurred Background */}
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        className="object-cover blur-xl scale-110"
                      />
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full h-full p-2 flex items-center justify-center">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-contain transition-transform duration-1000 group-hover:scale-105 z-10"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                       <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                          <FiZoomIn size={24} />
                       </div>
                    </div>
                  </div>

                  {/* Caption area (Polaroid style) */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white/80 font-medium text-sm truncate group-hover:text-pink-400 transition-colors">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Corner Heart Decoration */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
                    <FiHeart className="text-pink-500 fill-pink-500 shadow-glow" />
                  </div>
                </div>

                {/* Subtle Shadow beneath floating card */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Ultra Blur Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
              onClick={() => setSelected(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative max-w-6xl w-full h-full max-h-[90vh] glass rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full bg-black/20">
                {/* Background Blur for Modal */}
                <div className="absolute inset-0 opacity-30">
                  <Image
                    src={selected.src}
                    alt=""
                    fill
                    className="object-cover blur-3xl scale-125"
                  />
                </div>

                <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    width={1920}
                    height={1080}
                    className="w-auto h-auto max-w-full max-h-full object-contain shadow-2xl rounded-lg z-10"
                    quality={100}
                  />
                </div>
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-20" />
                
                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-4 z-30">
                  <div className="max-w-full overflow-hidden">
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white text-xl md:text-5xl font-black font-display mb-2 break-words"
                    >
                      {selected.caption}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2 text-pink-400"
                    >
                      <FiHeart className="fill-current flex-shrink-0" />
                      <span className="text-white/60 font-medium uppercase tracking-widest text-[10px] md:text-xs">A special memory captured forever</span>
                    </motion.div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-pink-500/20 transition-all duration-300 hover:scale-110 group z-50"
                  onClick={() => setSelected(null)}
                >
                  <FiX className="group-hover:rotate-90 transition-transform duration-300" size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
