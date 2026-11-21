import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Users,
  LayoutGrid,
  UserCheck,
  Building2,
  MapPin,
  Search,
  Menu,
  X,
  Phone,
  Video,
} from 'lucide-react'
import { HOSPITAL } from '../../data/constants'
import { MalikLogo } from '../common/BrandLogo'

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About', path: '/about', icon: Users },
  { label: 'Departments', path: '/departments', icon: LayoutGrid },
  { label: 'Doctors', path: '/doctors', icon: UserCheck },
  { label: 'Facilities', path: '/facilities', icon: Building2 },
  { label: 'Stories', path: '/testimonials', icon: Video },
  { label: 'Contact', path: '/contact', icon: MapPin },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-white py-3'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <MalikLogo />
          </Link>

          {/* Center Navigation Pill Bar (MedixWeb aesthetic) */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#F4F7F7] px-3 py-1.5 rounded-full border border-gray-200/80 shadow-2xs">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#007C88] !text-white shadow-xs'
                      : 'text-[#364B4D] hover:text-[#007C88] hover:bg-white/90'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className={isActive ? '!text-white' : ''}>{item.label}</span>
                </Link>
              )
            })}

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#4A6568] hover:text-[#007C88] hover:bg-white transition-colors ml-1"
              aria-label="Search hospital services"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right Action: Contact Us CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="btn-purple hidden sm:inline-flex items-center gap-2 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-white font-bold">Contact Us</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#173C4B] hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="mt-3 p-3 bg-white rounded-2xl border border-gray-200 shadow-lg animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#007C88] ml-2 shrink-0" />
              <input
                type="text"
                placeholder="Search doctors, departments (e.g. Orthopaedics, Cardiology, Gynaecology)..."
                className="w-full text-sm outline-none px-2 py-1 text-[#173C4B]"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs text-gray-500 hover:text-gray-700 px-2 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer (Clean, Large Touch Targets, Fully Responsive) */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl shadow-2xl animate-fade-in-up">
          <div className="section-container py-5 space-y-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-[#007C88] !text-white'
                      : 'text-[#173C4B] hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className={isActive ? '!text-white' : ''}>{item.label}</span>
                </Link>
              )
            })}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <Link
                to="/contact"
                className="btn-purple w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-white" />
                <span className="text-white font-bold">Contact Hospital</span>
              </Link>
              <a
                href={`tel:${HOSPITAL.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 font-bold py-3 rounded-xl text-sm border border-emerald-200"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Emergency 24/7: {HOSPITAL.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
