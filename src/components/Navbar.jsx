import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
  }`

  const LinkItem = ({ href, children }) => (
    <a href={href} className="text-sm text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )

  return (
    <header className={navClasses}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-600 to-indigo-600 shadow-[0_0_30px_rgba(168,85,247,0.35)]" />
          <div className="leading-tight">
            <span className="block text-white font-semibold tracking-tight text-lg">Third Act</span>
            <span className="block text-[11px] text-fuchsia-300/80">Future-forward studio</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <LinkItem href="#services">Services</LinkItem>
          <LinkItem href="#work">Work</LinkItem>
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-4 py-2 rounded-lg shadow-[0_8px_30px_rgba(76,29,149,0.35)] hover:shadow-[0_10px_35px_rgba(76,29,149,0.55)] transition-all">
            Start a Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur p-4 flex flex-col gap-3">
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#work">Work</LinkItem>
            <LinkItem href="#about">About</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
            <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-4 py-2 rounded-lg">
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
