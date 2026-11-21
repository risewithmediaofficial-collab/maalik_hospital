import { Link } from 'react-router-dom'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon: Icon,
  iconRight: IconRight,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95'

  const variants = {
    primary:
      'bg-[#007C88] hover:bg-[#07545B] !text-white shadow-sm hover:shadow-md focus:ring-[#007C88]',
    vaaris:
      'bg-[#680858] hover:bg-[#800060] !text-white shadow-sm hover:shadow-md focus:ring-[#680858]',
    secondary:
      'bg-white text-[#007C88] border-2 border-[#007C88] hover:bg-[#E6F5F6] focus:ring-[#007C88]',
    outline:
      'bg-transparent text-[#007C88] border-2 border-[#007C88] hover:bg-[#007C88] hover:!text-white focus:ring-[#007C88]',
    ghost:
      'bg-transparent text-[#007C88] hover:bg-[#E6F5F6] focus:ring-[#007C88]',
    dark: 'bg-[#173C4B] hover:bg-[#0D242D] !text-white focus:ring-[#173C4B]',
    white:
      'bg-white text-[#173C4B] hover:bg-gray-100 shadow-md focus:ring-white',
    emergency:
      'bg-red-600 hover:bg-red-700 !text-white shadow-md focus:ring-red-500 animate-pulse',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold',
    lg: 'px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold',
    xl: 'px-8 sm:px-10 py-4 text-base font-bold',
  }

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {IconRight && <IconRight className="w-4 h-4 shrink-0" />}
    </>
  )

  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>
  return <button className={classes} {...props}>{content}</button>
}

export function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-[#E6F5F6] text-[#007C88]',
    secondary: 'bg-[#EDF8F2] text-[#4B9B75]',
    accent: 'bg-[#FDF8E8] text-[#A88D36]',
    vaaris: 'bg-[#F7EBF5] text-[#680858]',
    dark: 'bg-[#173C4B]/10 text-[#173C4B]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
        variants[variant] || variants.primary
      } ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  badge,
  badgeVariant = 'primary',
  title,
  subtitle,
  centered = false,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#173C4B] leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 sm:mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          style={centered ? { margin: '0.75rem auto 0' } : {}}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Card({ children, className = '', hover = true, padding = true }) {
  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 ${
        hover ? 'card-hover' : ''
      } ${padding ? 'p-5 sm:p-7' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export function Container({ children, className = '' }) {
  return (
    <div className={`section-container ${className}`}>
      {children}
    </div>
  )
}

export function Section({ children, className = '', id, background = 'white' }) {
  const bg = {
    white: 'bg-white',
    gray: 'bg-[#F9FBFC]',
    gradient: 'bg-gradient-hero',
    dark: 'bg-[#0D242D] text-white',
  }

  return (
    <section id={id} className={`py-12 sm:py-16 md:py-24 ${bg[background]} ${className}`}>
      {children}
    </section>
  )
}
