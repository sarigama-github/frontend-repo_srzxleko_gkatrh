import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Neon gradients and vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.15),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(2,6,23,0.85))]" />

      {/* Subtle moving moon and stars */}
      <motion.div
        className="absolute right-10 top-16 h-24 w-24 rounded-full bg-cyan-300/10 shadow-[0_0_50px_rgba(56,189,248,0.45)_inset,0_0_60px_rgba(56,189,248,0.25)] backdrop-blur-md"
        animate={{ y: [0, -10, 0], x: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/20 to-transparent" />
      </motion.div>
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-200/70 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
            style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4 + Math.random()*4, delay: Math.random()*2 }}
          />
        ))}
      </div>

      {/* Dubai skyline silhouettes */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 opacity-70">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        <svg className="absolute bottom-0 w-[140%] -left-[20%] text-slate-800" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,180 L80,170 L120,120 L140,130 L180,90 L210,150 L250,110 L280,160 L320,120 L350,180 L380,100 L410,140 L450,110 L480,170 L520,150 L560,190 L600,120 L640,160 L680,90 L720,170 L760,130 L800,180 L840,120 L880,160 L920,100 L960,150 L1000,110 L1040,170 L1080,140 L1120,190 L1160,120 L1200,160 L1240,90 L1280,170 L1320,130 L1360,180 L1440,150 V200 H0 Z" />
        </svg>
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]"
        >
          Dubai <span className="text-cyan-300">Night</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-2xl text-cyan-100/80 text-lg"
        >
          Discover the most exclusive parties, dazzling clubs, and unforgettable events under the neon-lit Dubai sky.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#clubs" className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:bg-cyan-400/20 transition">Explore Clubs</a>
          <a href="#events" className="rounded-full border border-cyan-200/30 bg-slate-800/60 px-6 py-3 text-sm font-semibold text-cyan-100 hover:text-cyan-200 hover:bg-slate-700/60 transition">Upcoming Events</a>
        </motion.div>
      </div>
    </section>
  )
}
