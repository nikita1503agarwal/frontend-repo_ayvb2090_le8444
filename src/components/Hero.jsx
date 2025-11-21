import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950 text-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-fuchsia-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" /> Futuristic Studio
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Crafting digital experiences for the Third Act
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            We design and build immersive products, interfaces and identities for visionary brands ready to step into tomorrow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(76,29,149,0.45)] hover:shadow-[0_10px_40px_rgba(76,29,149,0.65)] transition-all">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
