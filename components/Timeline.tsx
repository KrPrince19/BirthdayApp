'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    id: 'birth',
    year: 'June 15, 2004',
    title: 'A Star is Born 🌟',
    description:
      'On June 15, 2004, the world welcomed an extraordinary soul. A new chapter of brilliance, curiosity, and boundless potential had just begun.',
    icon: '👶',
    color: '#ffcc00',
  },
  {
    id: '10th',
    year: '2020',
    title: '10th Grade — Sri Kakathiya High School 🏫',
    description:
      'Completed Class 10 at Sri Kakathiya High School with an outstanding GPA of 600, and was honoured with a prestigious Academic Model Award for excellence in studies.',
    icon: '🏆',
    color: '#ff6eb4',
  },
  {
    id: '12th',
    year: '2022',
    title: '12th Grade — Margadarsi Junior College 📚',
    description:
      'Excelled in Intermediate studies at Margadarsi Junior College, achieving a remarkable GPA of 913 — a testament to dedication and hard work.',
    icon: '🎓',
    color: '#9b5de5',
  },
  {
    id: 'college-start',
    year: '2022',
    title: 'College Journey Begins 🚀',
    description:
      'Stepped into college life with dreams, ambitions, and a fire to conquer new frontiers. A brand-new adventure in higher education had officially started.',
    icon: '🎯',
    color: '#00f5d4',
  },
  {
    id: 'college-end',
    year: '2026',
    title: 'College Graduation 🎉',
    description:
      'Four incredible years of growth, knowledge, and memories culminate in a well-earned graduation. The world now awaits the mark you will leave on it.',
    icon: '🦋',
    color: '#bf00ff',
  },
  {
    id: 'today',
    year: 'Today',
    title: 'Your Day Has Come 🎂',
    description:
      "Today we celebrate YOU — the incredible person you've become and the amazing journey that still lies ahead!",
    icon: '🎉',
    color: '#ff2d78',
  },
];

function TimelineCard({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-12 relative`}
    >
      {/* Card */}
      <motion.div
        className="flex-1 glass glass-hover rounded-2xl p-6 cursor-default"
        style={{
          border: `1px solid ${event.color}30`,
          boxShadow: `0 0 20px ${event.color}15`,
        }}
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        whileHover={{
          scale: 1.02,
          boxShadow: `0 0 40px ${event.color}30`,
        }}
      >
        {/* Year badge */}
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-widest"
          style={{
            background: `${event.color}20`,
            border: `1px solid ${event.color}40`,
            color: event.color,
          }}
        >
          {event.year}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{event.description}</p>
      </motion.div>

      {/* Center icon */}
      <motion.div
        className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full glass text-2xl relative z-10"
        style={{
          background: `radial-gradient(circle, ${event.color}30, transparent)`,
          border: `2px solid ${event.color}50`,
          boxShadow: `0 0 20px ${event.color}40`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        {event.icon}
      </motion.div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-12 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #bf00ff 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">🌟 Life Journey</div>
          <h2 className="text-4xl md:text-6xl font-black font-display gradient-text mb-4">
            Your Story
          </h2>
          <div className="section-divider" />
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            Every chapter of your life has been a masterpiece worth celebrating.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line hidden md:block" />

          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
