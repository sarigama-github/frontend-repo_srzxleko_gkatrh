import { motion } from 'framer-motion'

export default function ClubCard({ club }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -6 }}
      className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-400/40 via-transparent to-transparent shadow-[0_0_40px_rgba(56,189,248,0.25)]"
    >
      <div className="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-cyan-400/20 overflow-hidden">
        {/* Glow ring */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[0_0_80px_rgba(56,189,248,0.25)_inset]" />

        <div className="aspect-[16/10] relative overflow-hidden">
          <img src={club.image} alt={club.name} className="h-full w-full object-cover opacity-80" />
          {/* light trails */}
          <motion.span className="absolute -right-20 top-1/3 h-1 w-2/3 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[2px] opacity-60" animate={{ x: [-200, 200] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white tracking-wide">{club.name}</h3>
            <span className="text-xs text-cyan-200/80">{club.location}</span>
          </div>
          <p className="mt-2 text-sm text-cyan-100/80">{club.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-cyan-200/80">Open: {club.hours}</div>
            <a href={club.link} className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-400/20 transition">Details</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
