import { BookOpen, Clock, ArrowRight } from 'lucide-react'
import { Container, Badge, Button } from '../components/ui/index'
import { BLOG_POSTS } from '../data/constants'

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Health Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              Helpful Health{' '}
              <span className="text-gradient-primary">Resources</span>
            </h1>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Expert health articles and patient guides from our medical team.
            </p>
          </div>
        </Container>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-card)] card-hover border border-gray-100"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-50 to-secondary-50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary-200" />
                  </div>
                  <span className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-navy group-hover:text-primary-600 transition-colors mb-3">{post.title}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <Button to="/contact" variant="ghost" size="sm" iconRight={ArrowRight}>
                    Contact Consultation Desk
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 max-w-2xl mx-auto p-6 rounded-[var(--radius-xl)] bg-amber-50 border border-amber-200">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided in these articles is for general informational purposes only. It is not intended as medical advice. Please consult a qualified doctor for personalised diagnosis and treatment.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
