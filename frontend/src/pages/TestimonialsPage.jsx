import { useState } from 'react'
import { Play, Video, X } from 'lucide-react'
import { Container } from '../components/ui/index'

// 10 Video Frames ready for embedding (leave videoUrl empty or paste YouTube/MP4 URL)
export const VIDEO_FRAMES = [
  { id: 1, title: 'Video Story 01', videoUrl: '' },
  { id: 2, title: 'Video Story 02', videoUrl: '' },
  { id: 3, title: 'Video Story 03', videoUrl: '' },
  { id: 4, title: 'Video Story 04', videoUrl: '' },
  { id: 5, title: 'Video Story 05', videoUrl: '' },
  { id: 6, title: 'Video Story 06', videoUrl: '' },
  { id: 7, title: 'Video Story 07', videoUrl: '' },
  { id: 8, title: 'Video Story 08', videoUrl: '' },
  { id: 9, title: 'Video Story 09', videoUrl: '' },
  { id: 10, title: 'Video Story 10', videoUrl: '' },
]

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <>
      {/* Header (Clean, Plain, No Borders) */}
      <section className="bg-gradient-hero py-12 sm:py-16 text-center">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            {/* Plain Badge with NO border */}
            <div className="inline-block bg-[#E6F5F6] text-[#007C88] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
              Patient Testimonials
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Patient <span className="text-[#007C88]">Video Stories</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* 10 Video Frames Section (Crazy UI Grid, Zero Content Clutter) */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <Container>
          {/* Main 10 Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {VIDEO_FRAMES.map((item, idx) => {
              const isFirst = idx === 0

              return (
                <div
                  key={item.id}
                  className={`group relative rounded-[28px] overflow-hidden bg-[#0A1F24] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    isFirst ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Video Player Frame Container (16:9 aspect ratio) */}
                  <div
                    onClick={() => setSelectedVideo(item)}
                    className="relative aspect-video w-full overflow-hidden cursor-pointer bg-gradient-to-br from-[#06181C] via-[#0E2730] to-[#1C0D22] flex items-center justify-center"
                  >
                    {item.videoUrl ? (
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        {/* High-Tech Viewfinder HUD Lines */}
                        <div className="absolute inset-0 bg-[radial-gradient(#007C8822_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-teal-400/50 pointer-events-none" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-teal-400/50 pointer-events-none" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-teal-400/50 pointer-events-none" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-teal-400/50 pointer-events-none" />

                        {/* Top Number Tag */}
                        <div className="absolute top-4 left-5 z-10">
                          <span className="bg-black/50 backdrop-blur-md text-white text-[0.7rem] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                            {item.title}
                          </span>
                        </div>

                        {/* Futuristic Play Button with Pulsing Sonar Ring */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <div className="relative mb-2">
                            <div className="absolute inset-0 rounded-full bg-teal-400/20 animate-ping opacity-60" />
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-[0_0_25px_rgba(0,124,136,0.4)] group-hover:scale-110 group-hover:bg-[#007C88] group-hover:border-transparent transition-all duration-300">
                              <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white text-white translate-x-0.5" />
                            </div>
                          </div>
                          <span className="text-white text-xs font-bold tracking-wider uppercase bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full mt-1">
                            Play Video
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Video Modal Player (Clean, Zero Text) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0B2126] text-white">
              <span className="text-xs sm:text-sm font-bold text-teal-300">
                {selectedVideo.title}
              </span>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {selectedVideo.videoUrl ? (
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-br from-[#06181C] to-[#120B16] w-full h-full">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-300 mb-3">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {selectedVideo.title} Frame Ready
                  </h3>
                  <p className="text-xs text-gray-400">
                    Add video URL in VIDEO_FRAMES array to stream video directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
