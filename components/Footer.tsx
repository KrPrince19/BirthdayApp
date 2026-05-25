'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { GiPartyPopper } from 'react-icons/gi';
const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Surprise', href: '#surprise' },
  { label: 'Wishes', href: '#wishes' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-5 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #bf00ff, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GiPartyPopper className="text-2xl text-pink-400" />
              <span className="gradient-text font-bold text-xl font-display">Celebrate</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              A premium birthday celebration experience crafted with magic, joy, and endless smiles.
              Because you deserve nothing but the best! 💫
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-pink-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Wishes */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              A Special Message
            </h4>
            <div className="glass p-4 rounded-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-white/80 text-sm leading-relaxed italic relative z-10">
                &quot;Wishes from your Yadav friend! ✨<br />
                <span className="text-white/50 text-xs mt-2 block not-italic">May this year bring you endless joy and success.&quot;</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Celebrate. Crafted with{' '}
            <FiHeart className="inline text-pink-500 animate-pulse" /> for someone special.
          </p>

          <motion.div
            className="flex items-center gap-2 text-white/30 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-lg">🎂</span>
            <span>May all your dreams come true!</span>
            <span className="text-lg">✨</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
