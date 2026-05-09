'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiZoomIn } from 'react-icons/fi';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800',
    alt: 'Birthday celebration',
    caption: 'The Day We Celebrated You 🎉',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    alt: 'Birthday cake',
    caption: 'Sweet Moments 🎂',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800',
    alt: 'Party lights',
    caption: 'Magical Lights ✨',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800',
    alt: 'Balloons',
    caption: 'Up, Up & Away 🎈',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
    alt: 'Celebration',
    caption: 'Golden Memories 🌟',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=800',
    alt: 'Confetti',
    caption: 'Let The Joy Burst 🎊',
    span: 'col-span-1 row-span-1',
  },
];

export default function MemoryGallery() {
  const [selected, setSelected] = useState<(typeof photos)[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 relative">
      {/* Section glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ff2d78 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="section-tag">📸 Memory Gallery</div>
          <h2 className="text-4xl md:text-6xl font-black font-display gradient-text-pink mb-4">
            Captured Moments
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            Every picture tells a story. These are the moments that make life beautiful.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer memory-card ${photo.span} group`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm leading-snug">{photo.caption}</p>
                <div className="mt-2 flex items-center gap-1 text-purple-300 text-xs">
                  <FiZoomIn /> Click to expand
                </div>
              </div>

              {/* Neon border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            {/* Modal content */}
            <motion.div
              className="relative max-w-4xl w-full glass neon-border-purple rounded-3xl overflow-hidden"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-xl font-bold font-display">{selected.caption}</p>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-pink-500/20 transition-colors neon-border-pink"
                onClick={() => setSelected(null)}
              >
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
