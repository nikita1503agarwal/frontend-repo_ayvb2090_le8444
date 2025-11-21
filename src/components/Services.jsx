import { motion } from 'framer-motion'
import { Sparkles, Rocket, PanelsTopLeft } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Brand Futures',
    desc: 'Identity systems, motion language and sonic marks tuned for the next decade.'
  },
  {
    icon: PanelsTopLeft,
    title: 'Interfaces',
    desc: 'Frictionless product design, prototyping and design systems at scale.'
  },
  {
    icon: Rocket,
    title: 'Experiments',
    desc: 'R&D, emerging tech and immersive experiences that feel like tomorrow.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300">Strategy to execution with a love for detail and motion.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-fuchsia-600 via-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_25px_rgba(76,29,149,0.45)]">
                <s.icon className="text-white" size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
