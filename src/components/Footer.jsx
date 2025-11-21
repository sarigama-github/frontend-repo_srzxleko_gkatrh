export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-cyan-400/10 bg-slate-950/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cyan-100/70 text-sm">© {new Date().getFullYear()} Dubai Night. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-cyan-100/70 hover:text-cyan-200">Privacy</a>
            <a href="#" className="text-cyan-100/70 hover:text-cyan-200">Terms</a>
            <a href="#" className="text-cyan-100/70 hover:text-cyan-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
