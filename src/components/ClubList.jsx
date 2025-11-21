import ClubCard from './ClubCard'

const clubs = [
  {
    name: 'Aurora Lounge',
    location: 'Downtown Dubai',
    hours: '8 PM – 3 AM',
    description: 'Sky-high beats, glass floors, and skyline views with neon ambience.',
    image: 'https://images.unsplash.com/photo-1604166159540-4f6a2a39bd30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBMb3VuZ2V8ZW58MHwwfHx8MTc2MzcyMTQwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '/events/aurora-night',
  },
  {
    name: 'Neon Mirage',
    location: 'Dubai Marina',
    hours: '9 PM – 4 AM',
    description: 'Immersive lasers, holographic visuals, and premium bottle service.',
    image: 'https://images.unsplash.com/photo-1513624966781-e5797f1a372a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwTWlyYWdlfGVufDB8MHx8fDE3NjM3MjE0MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '/events/neon-mirage',
  },
  {
    name: 'Pulse District',
    location: 'JBR Walk',
    hours: '7 PM – 2 AM',
    description: 'Bass-forward sound, kinetic dance floor, and VIP domes.',
    image: 'https://images.unsplash.com/photo-1708660758299-40bdc5b87f98?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZSUyMERpc3RyaWN0fGVufDB8MHx8fDE3NjM3MjE0MDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '/events/pulse-district',
  },
]

export default function ClubList() {
  return (
    <section id="clubs" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured <span className="text-cyan-300">Clubs</span></h2>
          <p className="mt-2 text-cyan-100/80">Explore the most exclusive nightlife destinations in the city.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <ClubCard key={club.name} club={club} />
          ))}
        </div>
      </div>
    </section>
  )
}
