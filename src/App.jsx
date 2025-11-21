import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClubList from './components/ClubList'
import EventDetails from './components/EventDetails'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Subtle background grid and glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,_#67e8f9_1.2px,_transparent_1.3px)] bg-[length:24px_24px]" />

      <Navbar />
      <main className="pt-28">
        <Hero />
        <ClubList />
        <div id="events">
          <EventDetails />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
