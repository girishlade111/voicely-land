export default function DemoVideo() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            See It In Action
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900">
            See Voicely in Action
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-zinc-100">
            <video
              className="w-full aspect-video"
              controls
              preload="none"
              poster="/video-poster.png"
            >
              {process.env.NEXT_PUBLIC_DEMO_VIDEO_URL && (
                <source src={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL} type="video/mp4" />
              )}
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-6 text-center text-zinc-500">
            Speak in Hindi, Marathi, or English — Voicely types it, instantly.
          </p>
        </div>
      </div>
    </section>
  )
}
