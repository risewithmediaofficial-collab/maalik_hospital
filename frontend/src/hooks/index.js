import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Intersection Observer hook for scroll animations
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

/**
 * Counter animation hook
 */
export function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView()

  useEffect(() => {
    if (!startOnView || !isInView) return
    if (typeof end !== 'number' || isNaN(end)) return

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView, startOnView])

  return [ref, count]
}

/**
 * Scroll-to-top hook
 */
export function useScrollToTop() {
  const { pathname } = typeof window !== 'undefined' ? window.location : { pathname: '' }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

/**
 * Media query hook
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
    const listener = (e) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

/**
 * Mobile detection
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)')
}

/**
 * Form handler hook
 */
export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }, [errors])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
    setIsSubmitted(false)
  }, [initialValues])

  return { values, errors, setErrors, isSubmitting, setIsSubmitting, isSubmitted, setIsSubmitted, handleChange, reset }
}
