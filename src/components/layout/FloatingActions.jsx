import { Phone, MessageCircle, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { HOSPITAL } from '../../data/constants'

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 items-end">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#173C4B]/90 text-white flex items-center justify-center shadow-md hover:bg-[#173C4B] transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* WhatsApp Quick Chat */}
      <a
        href={HOSPITAL.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Chat with hospital on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        {/* Desktop Tooltip */}
        <span className="hidden sm:group-hover:block absolute right-full mr-2.5 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-md whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Direct Emergency Call */}
      <a
        href={`tel:${HOSPITAL.phone}`}
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label={`Emergency phone call to ${HOSPITAL.phone}`}
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-white animate-pulse" />
        {/* Desktop Tooltip */}
        <span className="hidden sm:group-hover:block absolute right-full mr-2.5 bg-red-700 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-md whitespace-nowrap pointer-events-none">
          Emergency Call: {HOSPITAL.phone}
        </span>
      </a>
    </div>
  )
}
