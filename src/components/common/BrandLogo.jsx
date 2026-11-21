import { Link } from 'react-router-dom'

/**
 * Official Malik Life Care Hospital Logo Component
 * Uses /images/Logo.jpg (standardized website header/footer branding)
 * Supports light mode (for dark backgrounds like footer) and responsive standard sizing.
 */
export function MalikLogo({ className = '', light = false, size = 'default' }) {
  // Industry-standard responsive logo heights for web:
  // - small: h-8 sm:h-9 (mobile badges / compact widgets)
  // - default: h-10 sm:h-12 md:h-13 (standard website header)
  // - large: h-12 sm:h-14 md:h-16 (footer / splash / hero brand displays)
  const sizeMap = {
    small: 'h-8 sm:h-9',
    default: 'h-10 sm:h-12 md:h-13',
    large: 'h-12 sm:h-14 md:h-16',
  }
  const heightClass = sizeMap[size] || sizeMap.default

  if (light) {
    // For dark backdrops (e.g., Footer bg-[#0D242D]):
    // Framed inside an elegant crisp white rounded badge ensuring 100% brand clarity & contrast
    return (
      <div
        className={`inline-flex items-center bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-sm transition-transform duration-200 hover:scale-[1.02] ${className}`}
      >
        <img
          src="/images/Logo.jpg"
          alt="Malik Life Care Hospital - Krishnagiri"
          className={`${heightClass} w-auto object-contain block`}
          loading="eager"
        />
      </div>
    )
  }

  // Standard Header / light background
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <img
        src="/images/Logo.jpg"
        alt="Malik Life Care Hospital - Krishnagiri"
        className={`${heightClass} w-auto object-contain block transition-transform duration-200 hover:scale-[1.01]`}
        loading="eager"
      />
    </div>
  )
}

/**
 * VAARIS Fertility & IVF Logo Component
 * Specialized co-branded center at Malik Life Care Hospital
 * Uses authentic /images/vaaris-logo.png / vaaris logo.jpeg
 */
export function VaarisLogo({ className = '', light = false, size = 'default' }) {
  const sizeMap = {
    small: 'w-7 h-7 sm:w-8 sm:h-8',
    default: 'w-9 h-9 sm:w-10 sm:h-10',
    large: 'w-12 h-12 sm:w-14 sm:h-14',
  }
  const imgSize = sizeMap[size] || sizeMap.default

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Authentic VAARIS Emblem */}
      <div
        className={`${imgSize} shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105`}
      >
        <img
          src="/images/vaaris-logo-transparent.png"
          alt="VAARIS Fertility & IVF Centre"
          className="w-full h-full object-contain block"
          onError={(e) => {
            e.currentTarget.src = '/images/vaaris logo.jpeg'
          }}
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-black text-sm sm:text-base tracking-widest leading-none ${
            light ? 'text-white' : 'text-[#680858]'
          }`}
        >
          VAARIS
        </span>
        <span
          className={`text-[0.65rem] sm:text-xs font-semibold tracking-wide ${
            light ? 'text-purple-200' : 'text-[#800060]'
          } mt-0.5`}
        >
          Fertility &amp; IVF Centre
        </span>
      </div>
    </div>
  )
}
