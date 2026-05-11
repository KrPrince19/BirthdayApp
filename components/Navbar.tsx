'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { GiPartyPopper } from 'react-icons/gi';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Surprise', href: '#surprise' },
  { label: 'Wishes', href: '#wishes' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 100], ['rgba(5,5,16,0)', 'rgba(5,5,16,0.9)']);
  const navBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(20px)']);

  return (
    <motion.nav
      style={{ backgroundColor: navBg, backdropFilter: navBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center gap-2 text-lg md:text-xl font-bold z-50"
          whileHover={{ scale: 1.05 }}
        >
          <GiPartyPopper className="text-xl md:text-2xl text-pink-400" />
          <span className="gradient-text font-display">Celebrate</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors relative group"
              whileHover={{ y: -1 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA - Strictly hidden on mobile/tablet */}
        <motion.a
          href="#surprise"
          className="!hidden md:!inline-flex btn-primary text-sm py-2.5 px-6 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>🎁 Open Surprise</span>
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 text-2xl z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-lg font-medium border-b border-white/5 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
