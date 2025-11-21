import { motion } from 'framer-motion'

export default function EventDetails() {
  const event = {
    title: 'Aurora Night',
    subtitle: 'A Neon Symphony Above the Skyline',
    date: 'Friday, 22:00 – Late',
    location: 'Aurora Lounge, Downtown Dubai',
    description:
      'Step into a world of luminous rhythms and sky-blue glow. Experience immersive sound, kinetic visuals, and VIP terraces overlooking the glittering city lights.',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
    lineup: ['DJ Solaris', 'Luna Noir', 'Nebula Twins'],
    perks: ['VIP Tables', 'Bottle Service', 'LED Wristbands', 'Holographic Photo Booth'],
  }

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_60px_rgba(56,189,248,0.25)]">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <img src={event.image} alt={event.title} className="h-full w-full object-cover opacity-80" />
              <motion.span className="absolute left-1/4 top-1/3 h-1 w-2/3 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-sm opacity-60" animate={{ x: [-150, 150] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
            <div className="p-8 md:p-10">
              <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white">
                {event.title} <span className="text-cyan-300">—</span>
              </motion.h3>
              <p className="mt-2 text-cyan-100/80">{event.subtitle}</p>

              <div className="mt-6 grid gap-3 text-sm text-cyan-100/80">
                <div><span className="text-cyan-300">Date:</span> {event.date}</div>
                <div><span className="text-cyan-300">Location:</span> {event.location}</div>
              </div>

              <p className="mt-5 text-cyan-100/80">{event.description}</p>

              <div className="mt-6">
                <h4 className="text-white font-semibold">Lineup</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {event.lineup.map((a) => (
                    <span key={a} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{a}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-white font-semibold">Perks</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {event.perks.map((p) => (
                    <span key={p} className="rounded-full bg-slate-800/60 border border-cyan-400/20 px-3 py-1 text-xs text-cyan-100">{p}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:bg-cyan-400/20 transition">Book VIP</button>
                <button className="rounded-full border border-cyan-200/30 bg-slate-800/60 px-5 py-2 text-sm font-semibold text-cyan-100 hover:text-cyan-200 hover:bg-slate-700/60 transition">Add to Calendar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
