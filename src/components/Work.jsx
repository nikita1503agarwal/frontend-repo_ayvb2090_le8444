import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Atlas',
    tag: 'Immersive Web',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Orbit IX',
    tag: 'Interface',
    image: 'https://images.unsplash.com/photo-1520975682031-ae5b2530d2ac?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Signal Drift',
    tag: 'Identity',
    image: 'https://images.unsplash.com/photo-1591804273391-63ec103efd55?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYWwlMjBEcmlmdHxlbnwwfDB8fHwxNzYzNzI1ODc5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-300">A glimpse of collaborations and experiments.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[11px] uppercase tracking-wider text-fuchsia-200/90">{p.tag}</span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
