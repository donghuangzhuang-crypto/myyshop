'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBot from '@/components/positioning/ChatBot';

/* ── tiny star field (randomly placed, deterministic) ── */
const stars = [
  { x: 8, y: 12, size: 1.5, delay: 0 },
  { x: 15, y: 28, size: 1, delay: 0.4 },
  { x: 25, y: 8, size: 1.2, delay: 1.2 },
  { x: 32, y: 35, size: 0.8, delay: 0.8 },
  { x: 40, y: 15, size: 1.4, delay: 2.0 },
  { x: 55, y: 6, size: 1, delay: 1.6 },
  { x: 62, y: 22, size: 1.3, delay: 0.3 },
  { x: 70, y: 10, size: 0.9, delay: 1.0 },
  { x: 78, y: 30, size: 1.1, delay: 1.8 },
  { x: 85, y: 14, size: 1.5, delay: 0.6 },
  { x: 92, y: 25, size: 0.8, delay: 2.2 },
  { x: 18, y: 42, size: 0.7, delay: 1.4 },
  { x: 45, y: 38, size: 1.0, delay: 0.9 },
  { x: 72, y: 40, size: 0.9, delay: 1.1 },
  { x: 88, y: 5, size: 1.2, delay: 0.2 },
  { x: 5, y: 35, size: 1.0, delay: 1.7 },
  { x: 35, y: 20, size: 0.6, delay: 2.4 },
  { x: 60, y: 32, size: 0.8, delay: 0.5 },
  { x: 50, y: 45, size: 0.7, delay: 1.3 },
  { x: 28, y: 18, size: 1.1, delay: 2.1 },
];

function NorthStar() {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="absolute"
      style={{ top: '12%', right: '22%' }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
    >
      {/* Cross rays */}
      <line x1="16" y1="0" x2="16" y2="32" stroke="white" strokeWidth="1" opacity="0.6" />
      <line x1="0" y1="16" x2="32" y2="16" stroke="white" strokeWidth="1" opacity="0.6" />
      {/* Diagonal rays */}
      <line x1="4" y1="4" x2="28" y2="28" stroke="white" strokeWidth="0.5" opacity="0.3" />
      <line x1="28" y1="4" x2="4" y2="28" stroke="white" strokeWidth="0.5" opacity="0.3" />
      {/* Center glow */}
      <circle cx="16" cy="16" r="3" fill="white" opacity="0.9" />
      <circle cx="16" cy="16" r="6" fill="white" opacity="0.15" />
      {/* Pulse ring */}
      <motion.circle
        cx="16"
        cy="16"
        r="8"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        initial={{ opacity: 0.4, r: 6 }}
        animate={{ opacity: 0, r: 14 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />
    </motion.svg>
  );
}

/* ── Sparkle (4-point star) ── */
function Sparkle({ x, y, size = 10, delay = 0 }: { x: string; y: string; size?: number; delay?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M8 0 L9 6.5 L16 8 L9 9.5 L8 16 L7 9.5 L0 8 L7 6.5Z" fill="white" opacity="0.7" />
    </motion.svg>
  );
}

/* ── Bot character (cat with purple gradient, glassmorphism) ── */
function BotCharacter() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Sparkles around bot */}
      <Sparkle x="-20px" y="-10px" size={14} delay={0.5} />
      <Sparkle x="90px" y="-5px" size={10} delay={1.2} />
      <Sparkle x="-15px" y="60px" size={8} delay={1.8} />

      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          {/* Purple gradient matching reference */}
          <radialGradient id="botGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
          </radialGradient>
          {/* Glass effect */}
          <radialGradient id="glassGrad" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0.03" />
          </radialGradient>
          {/* Noise texture */}
          <filter id="noise">
            <feTurbulence baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
        </defs>

        {/* Outer glow */}
        <ellipse cx="60" cy="65" rx="42" ry="38" fill="#8b5cf6" opacity="0.08" />

        {/* Cat ears */}
        <path d="M30 42 L38 18 L50 38Z" fill="url(#glassGrad)" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
        <path d="M90 42 L82 18 L70 38Z" fill="url(#glassGrad)" stroke="white" strokeWidth="0.5" strokeOpacity="0.15" />
        {/* Inner ear glow */}
        <path d="M35 38 L40 24 L47 36Z" fill="#c084fc" opacity="0.2" />
        <path d="M85 38 L80 24 L73 36Z" fill="#c084fc" opacity="0.2" />

        {/* Head - glass circle */}
        <circle cx="60" cy="62" r="36" fill="url(#glassGrad)" stroke="white" strokeWidth="0.6" strokeOpacity="0.12" />
        {/* Purple gradient overlay */}
        <circle cx="60" cy="58" r="28" fill="url(#botGrad)" opacity="0.5" />

        {/* Face - closed/squinting eyes like reference */}
        {/* Left eye - X shape */}
        <g transform="translate(46, 58)">
          <line x1="-4" y1="-3" x2="4" y2="3" stroke="#1e1b4b" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="4" y1="-3" x2="-4" y2="3" stroke="#1e1b4b" strokeWidth="2.2" strokeLinecap="round" />
        </g>
        {/* Right eye - X shape */}
        <g transform="translate(74, 58)">
          <line x1="-4" y1="-3" x2="4" y2="3" stroke="#1e1b4b" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="4" y1="-3" x2="-4" y2="3" stroke="#1e1b4b" strokeWidth="2.2" strokeLinecap="round" />
        </g>
        {/* Mouth - small curve */}
        <path d="M55 70 Q60 74 65 70" stroke="#1e1b4b" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Highlight reflection */}
        <ellipse cx="48" cy="46" rx="8" ry="4" fill="white" opacity="0.08" transform="rotate(-15 48 46)" />
      </motion.svg>
    </motion.div>
  );
}

export default function PositioningPage() {
  const [started, setStarted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#070b14]"
        >
          {/* Night sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1225] via-[#070b14] to-[#0f0a1a]" />

          {/* Stars */}
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size * 2,
                height: star.size * 2,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 3 + star.delay,
                delay: star.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* North Star */}
          <NorthStar />

          {/* Horizon glow — warm desert-like tone at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#1a1028]/80 via-[#120e1f]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#2d1f3d]/30 to-transparent" />

          {/* Desert dunes silhouette */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            viewBox="0 0 1440 200"
            fill="none"
            preserveAspectRatio="none"
            style={{ height: '15%' }}
          >
            <path
              d="M0 200 L0 140 Q120 80 300 120 Q480 160 600 100 Q720 40 900 90 Q1080 140 1200 80 Q1320 40 1440 100 L1440 200Z"
              fill="#0f0a18"
              opacity="0.8"
            />
            <path
              d="M0 200 L0 160 Q200 110 400 145 Q600 180 800 130 Q1000 80 1200 120 Q1350 150 1440 130 L1440 200Z"
              fill="#0a0710"
              opacity="0.9"
            />
          </svg>

          {/* Faint path/road in desert */}
          <svg
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            width="200"
            height="120"
            viewBox="0 0 200 120"
            fill="none"
            style={{ bottom: '2%' }}
          >
            <path
              d="M85 120 L95 0 L105 0 L115 120Z"
              fill="white"
              opacity="0.03"
            />
          </svg>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center px-6 max-w-2xl flex flex-col items-center"
          >
            {/* Bot character */}
            <div className="mb-8">
              <BotCharacter />
            </div>

            {/* Product name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Find
              <span className="text-primary">Your</span>
              Lane
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-white/45 font-light leading-relaxed mb-4">
              A deep dive for inner explorers
            </p>

            {/* Description */}
            <p className="text-sm text-white/25 max-w-md mx-auto leading-relaxed mb-12">
              Through a guided conversation, uncover your unique creator identity —
              your strengths, your style, and the lane where you truly belong.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={() => setStarted(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-medium text-base transition-all hover:bg-primary-dark hover:shadow-[0_0_40px_rgba(58,163,159,0.3)]"
            >
              Begin Your Journey
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 10h14M11 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="chat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <ChatBot />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
