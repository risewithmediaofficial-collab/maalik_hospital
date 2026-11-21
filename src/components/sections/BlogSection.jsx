import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, Clock } from 'lucide-react'
import { Container, Badge } from '../ui/index'
import { BLOG_POSTS } from '../../data/constants'
import { useInView } from '../../hooks/index'

export default function BlogSection() {
  const [ref, isInView] = useInView()

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#F9FBFC]" ref={ref}>
      <Container>
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <Badge variant="primary" className="mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Health Resources</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#173C4B] leading-tight tracking-tight">
              Patient Guides &amp; Health Insights
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#007C88] hover:text-[#07545B] transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid (Responsive 1 col mobile, 2 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 text-xs text-[#6B8A8D] mb-3">
                  <span className="bg-[#E6F5F6] text-[#007C88] font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#173C4B] group-hover:text-[#007C88] transition-colors mb-2.5 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A6568] leading-relaxed mb-5">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#680858] hover:text-[#800060] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
