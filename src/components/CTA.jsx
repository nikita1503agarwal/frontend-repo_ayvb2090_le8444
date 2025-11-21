import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Ready for your third act?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-300"
        >
          Tell us about your timeline, goals and constraints. We’ll respond within 24 hours.
        </motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Your name" />
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Email" type="email" />
          <button className="rounded-lg bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(76,29,149,0.45)] hover:shadow-[0_10px_40px_rgba(76,29,149,0.65)] transition-all">
            Send
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default CTA
