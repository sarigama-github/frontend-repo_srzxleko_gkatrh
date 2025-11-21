import { useState } from 'react'
import { Menu, X, Moon, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/clubs', label: 'Clubs' },
    { to: '/events/aurora-night', label: 'Events' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_60px_rgba(56,189,248,0.15)]">
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="group inline-flex items-center gap-2">
              <div className="relative">
                <motion.span
                  className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-xl"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                <Moon className="relative h-7 w-7 text-cyan-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              </div>
              <div>
                <p className="text-xl font-semibold tracking-wide text-white">Dubai <span className="text-cyan-300">Night</span></p>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200/70">
                  <Star className="h-3 w-3" />
                  Neon Luxe
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-cyan-300' : 'text-cyan-100/70 hover:text-cyan-200'}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/events/aurora-night"
                className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:bg-cyan-400/20 transition"
              >
                Buy Tickets
              </Link>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-800/60 p-2 text-cyan-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-cyan-400/10"
              >
                <div className="p-4 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl bg-slate-800/50 px-4 py-3 text-cyan-100 hover:text-cyan-200 border border-cyan-400/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/events/aurora-night"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-3 text-center text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.35)]"
                  >
                    Buy Tickets
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
