export default function Home() {
  return (
    <main className="bg-[#f8f7f4] text-[#1a1a18]">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-xs uppercase tracking-widest text-[#28a066] mb-4 font-sans">
          Online Lessons · Beginners welcome
        </p>
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight leading-tight">
          Learn Violin With<br />Paul Lazarus
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-10 text-[#5a5a56] font-sans leading-relaxed">
          Classical foundations, contemporary music, and a free first lesson to get you started.
        </p>
        <a
          href="https://wa.me/919962448276"
          className="bg-[#27b56e] text-white px-8 py-3 rounded-lg text-base font-sans font-medium hover:bg-[#22a062] transition-colors"
        >
          Book Your Free Trial
        </a>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">
            Is This For You?
          </h2>
          <p className="text-base text-[#5a5a56] font-sans mb-10 max-w-xl mx-auto leading-relaxed">
            My lessons are for teens and adults who are passionate about music. Ideally, for those who can set aside a minimum of 30 minutes a day to practise at home.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Complete beginner?", desc: "Perfect, we'll start from scratch." },
              { title: "Have some experience?", desc: "We'll build on what you know." },
              { title: "Carnatic/Hindustani → Western?", desc: "Made successful transitions with many students." },
              { title: "Need structure?", desc: "You'll have a clear progression plan." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#e2f5ed] border border-[#b0dfc6] rounded-xl p-4 text-left"
              >
                <p className="text-sm font-medium text-[#185c3a] mb-1 font-sans">{title}</p>
                <p className="text-xs text-[#2d7a52] font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-6 bg-[#f8f7f4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">
            What You'll Learn
          </h2>
          <p className="text-base text-[#5a5a56] font-sans mb-10 max-w-xl mx-auto leading-relaxed">
            Each student gets a customised progression plan, but here are the universal elements every lesson includes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              "Proper bowing and posture technique",
              "Music reading and theory fundamentals",
              "Western classical repertoire",
              "Western contemporary music",
              "Structured practice habits",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 font-sans text-[#1a1a18]">
                <div className="w-2 h-2 rounded-full bg-[#27b56e] flex-shrink-0" />
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Setup */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-4 text-center">
            Online Lessons
          </h2>
          <p className="text-base text-[#5a5a56] font-sans text-center mb-10 leading-relaxed">
            Lessons are 45 minutes long and conducted via Google Meet. Once we agree on a time, I'll share a link you can bookmark for every session. Payments are made in advance, either per session or in a set of four.
          </p>

          <div className="bg-[#f8f7f4] border border-[#deded8] rounded-2xl p-6 md:p-8">
            <p className="text-sm font-medium text-[#3a3a38] font-sans mb-4">
              For the best experience, please:
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Tune your violin before the session begins",
                "Ensure good lighting in the room",
                "Join from a laptop, large-screen tablet, or computer.",
                "Have enough space to play freely.",
                "Position your camera to capture your upper body and arms.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 font-sans text-[#1a1a18]">
                  <div className="w-2 h-2 rounded-full bg-[#27b56e] flex-shrink-0 mt-[7px]" />
                  <span className="text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#f8f7f4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img
              src="/paul.jpg"
              alt="Paul with violin"
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-6">
              About Me
            </h2>
            <div className="font-sans text-base leading-relaxed space-y-5 text-[#3a3a38]">
              <p className="text-[#27b56e] font-medium">Greetings, future violinist!</p>
              <p>
                My name is Paul Lazarus, and I've been playing the violin for over 14 years.
              </p>
              <p>
                During this journey I've had the honour of studying under many experienced violinists, most notably the respected pedagogue{" "}
                <a
                  href="https://www.youtube.com/@JoyLeeViolin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#27b56e] underline underline-offset-2 hover:text-[#185c3a] transition-colors"
                >
                  Joy Lee
                </a>.
              </p>
              <p>
                Although I have a master's degree in psychology and worked in mental health, my love for the violin eventually led me to switch careers. Today I am a full-time violinist, freelance composer, and writer.
              </p>
              <p>
                I've performed at private events, weddings, and charity concerts — but what motivates me most is watching students move from one breakthrough to the next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">
            What Students and Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/review1.jpg", label: "Violin Student" },
              { src: "/review7.jpg", label: "Violin Student" },
              { src: "/review8.jpg", label: "Violin Student" },
              { src: "/review2.jpg", label: "Composition Client" },
              { src: "/review3.jpg", label: "Composition Client" },
              { src: "/review4.jpg", label: "Composition Client" },
              { src: "/review5.jpg", label: "Composition Client" },
              { src: "/review6.jpg", label: "Composition Client" },
            ].map(({ src, label }) => (
              <div key={src}>
                <img
                  src={src}
                  alt={`Review from ${label}`}
                  className="rounded-xl w-full object-cover"
                />
                <p className="mt-3 text-sm text-[#888884] font-sans">— {label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-[#27b56e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-white/80 font-sans text-lg mb-8">
            Your first lesson is completely free. No commitment required.
          </p>
          <a
            href="https://wa.me/919962448276"
            className="inline-block bg-white text-[#185c3a] px-8 py-3 rounded-lg font-sans font-medium text-base hover:bg-[#e2f5ed] transition-colors"
          >
            Book Your Free Trial
          </a>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 px-6 bg-[#f8f7f4] text-center">
        <h2 className="text-2xl font-serif mb-4">Questions?</h2>
        <p className="text-base font-sans text-[#5a5a56]">
          Send an email to{" "}
          <a
            href="mailto:contact@paullazarusviolin.com"
            className="text-[#27b56e] underline underline-offset-2 hover:text-[#185c3a] transition-colors"
          >
            contact@paullazarusviolin.com
          </a>
        </p>
      </section>

    </main>
  );
}
