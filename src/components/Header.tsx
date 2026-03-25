import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleAnchorClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              AW<span className="text-accent">A</span>N
            </span>
            <span className="hidden sm:inline text-sm text-primary/60 border-l border-primary/20 pl-2">
              Buyers Agency
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/past-results" className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Past Results
            </Link>
            <button onClick={() => handleAnchorClick('#about')} className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              About
            </button>
            <button onClick={() => handleAnchorClick('#testimonials')} className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              Testimonials
            </button>
            <button
              onClick={() => handleAnchorClick('#booking')}
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-accent transition-colors duration-300 flex items-center gap-2 font-medium shadow-lg"
            >
              Book Free Call <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="flex flex-col items-center gap-6 pt-12">
            <Link to="/" className="text-xl text-primary hover:text-accent transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/past-results" className="text-xl text-primary hover:text-accent transition-colors duration-300 font-medium">
              Past Results
            </Link>
            <button onClick={() => handleAnchorClick('#about')} className="text-xl text-primary hover:text-accent transition-colors duration-300 font-medium">
              About
            </button>
            <button onClick={() => handleAnchorClick('#testimonials')} className="text-xl text-primary hover:text-accent transition-colors duration-300 font-medium">
              Testimonials
            </button>
            <button
              onClick={() => handleAnchorClick('#booking')}
              className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent transition-colors duration-300 flex items-center gap-2 font-medium shadow-lg text-lg w-4/5 justify-center"
            >
              Book Free Call <ArrowRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
