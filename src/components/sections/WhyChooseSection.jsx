import { Users, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react'
import { Container } from '../ui/index'
import { useInView } from '../../hooks/index'

const PILLARS = [
  {
    icon: Users,
    title: 'Patient-First Approach',
    desc: 'Compassionate, personalized care tailored to every patient and family.',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Technology',
    desc: 'Modern diagnostic equipment, cutting-edge surgery and newborn care.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Care',
    desc: 'Respectful, empathetic healing inspired by our founding family philosophy.',
  },
  {
    icon: Leaf,
    title: 'Ethical & Transparent',
    desc: 'Clear communication, affordable pathways, and highest clinical safety.',
  },
]

export default function WhyChooseSection() {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-r from-[#007C88] via-[#07545B] to-[#680858] text-white py-12 md:py-14"
    >
      {/* Decorative subtle background waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <Container>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors"
              >
                {/* Circular Icon with Outline */}
                <div className="w-12 h-12 rounded-full border-2 border-white/40 bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/75 mt-0.5 hidden sm:block leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
