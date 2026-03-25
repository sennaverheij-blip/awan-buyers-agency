import { Phone, Mail, MapPin, Globe, Camera, Briefcase } from 'lucide-react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-2">
              AW<span className="text-accent">A</span>N
            </div>
            <p className="text-sm text-white/50 mb-1">Buyers Agency</p>
            <p className="text-accent italic mb-4">"Make it happen"</p>
            <div className="space-y-3 text-sm text-white/70">
              <a href="tel:0421112940" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> 0421 112 940
              </a>
              <a href="mailto:contact@awanbuyersagency.com.au" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> contact@awanbuyersagency.com.au
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Suite 15, Level 6, 175 Macquarie Street, Parramatta NSW 2150</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Facebook">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Instagram">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/past-results" className="hover:text-accent transition-colors">Past Results</Link></li>
              <li><Link to="/#about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Property Acquisition</li>
              <li>Market Research</li>
              <li>Investment Strategy</li>
              <li>Buyer Representation</li>
              <li>Settlement Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a href="tel:0421112940" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" /> 0421 112 940
              </a>
              <a href="mailto:contact@awanbuyersagency.com.au" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> contact@awanbuyersagency.com.au
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Suite 15, Level 6, 175 Macquarie Street, Parramatta NSW 2150</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            Copyright &copy; 2025 AWAN BUYERS AGENCY PTY LTD. All Rights Reserved. | ABN: 12 345 678 901 | Licensed Buyer's Agent
          </p>
        </div>
      </div>
    </footer>
  )
}
