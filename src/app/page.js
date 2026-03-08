
export default function Home() {
  return (
    <main className="bg-[#fdfaf6] text-gray-800">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Violin Lessons With Paul
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-600">
          Build a strong classical foundation and learn to play the music you love.
        </p>

        <a
          href="https://wa.me/919962448276"
          className="bg-[#c6a75e] text-white px-8 py-3 rounded-md text-lg hover:opacity-90 transition mb-4"
        >
          Book Your Trial Lesson Now, Completely Free
        </a>
      </section>

   {/* Who It’s For */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-serif mb-6">
      Who These Lessons Are For
    </h2>

    <p className="text-lg text-[#4a4642] mb-6 max-w-2xl mx-auto">
      My lessons are for teens and adults who are passionate about music and feel drawn to the violin. Ideally, you would recognize that the violin can be a serious commitment and requires regular practise at home. Thus, people who can set aside a 
      minimum of 30 minutes/day would see best results.
    </p>
      <p className="text-lg text-[#4a4642] mb-6 max-w-2xl mx-auto">
      My lessons will suit you if you are either:
    </p>

 

    <ul className="text-lg text-left list-disc list-outside space-y-4 text-[#4a4642] max-w-2xl mx-auto">
      <li>A complete beginner</li>
      <li>Have a few years of experience</li>
      <li>Are switching from Carnatic/Hindustani to Western Classical/Western Contemporary</li>
      <li>Need more structure in your violin journey</li>
    </ul>

  </div>
</section>

   {/* What You’ll Learn */}
<section className="py-20 px-6 bg-[#f7f3ed]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-serif mb-6">
      What You’ll Learn
    </h2>

    <p className="text-lg text-[#4a4642] mb-8">
      Each student gets a customized progression plan according to their goals, but here are some universal elements:
    </p>

    <ul className="text-lg text-left list-disc list-inside space-y-4 text-[#4a4642] max-w-2xl mx-auto">
      <li>Proper bowing and posture technique</li>
      <li>Music reading and theory fundamentals</li>
      <li>Western classical repertoire</li>
      <li>Western contemporary music</li>
      <li>Structured practice habits</li>
    </ul>

    

  </div>
</section>

      {/* Online Setup */}
      <section className="py-20 px-6 bg-[#f8f6f2]">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-serif mb-10 text-center">
      Online Lessons Information
    </h2>

    <div className="text-lg leading-relaxed space-y-6 text-[#4a4642]">
      
      <p>
        Lessons are 45 minutes long and conducted via Google Meet. Once you contact me
        and we decide on a mutually convenient time for lessons, I will share a Google
        Meet link with you. You can bookmark and visit this link for each lesson.
        For convenience, payments are made in advance, either per session or for a set
        of four.
      </p>

      <p>
        Virtual lessons do have some practical limitations, so it would be best if you
        could:
      </p>

      <ul className="list-disc list-outside space-y-3 pl-6">
        <li>Tune the violin before the session begins</li>
        <li>Ensure good lighting in the room</li>
        <li>Avoid joining through a phone (a laptop/large tablet/computer is preferred) </li>
        <li>Have enough space to play freely</li>
        <li>Ensure your camera captures full upper body & arms</li>
      </ul>
          </div>
        </div>
      </section>

     {/* About Section */}
<section className="py-24 px-6 bg-[#f7f3ed]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div className="flex justify-center">
      <img
        src="/paul.jpg"
        alt="Paul with violin"
        className="rounded-2xl shadow-lg w-full max-w-md object-cover"
      />
    </div>

    <div>
      <h2 className="text-3xl font-serif mb-6">
        About Me
      </h2>

      <div className="text-lg leading-relaxed space-y-6 text-gray-700">

        <p className="text-lg text-[#4a4642] mb-6 max-w-2xl mx-auto">
          Greetings! future violinist,
        </p>

        <p>
          My name is Paul Lazarus, and I've been playing the violin for over 14 years now.
        </p>

        <p>
          During this journey, I’ve had the honour of studying under many experienced violinists, most notably the respected pedagogue{" "}
          <a
            href="https://www.youtube.com/@JoyLeeViolin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c6a75e] underline hover:opacity-80"
          >
            Joy Lee
          </a>.
        </p>

        <p>
          Although I have a master's degree in psychology and worked in mental health, my love for the violin and music eventually led me to switch careers. Today, I am a full-time violinist, freelance composer, and writer.
        </p>

        <p>
          I’ve performed at private events, weddings, and charity concerts, but what motivates me the most is planting new strings. For me, watching students improve and move from one breakthrough to another is incredibly fulfilling.
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

    <div className="grid md:grid-cols-3 gap-12">

      {/* Review 1 */}
      <div>
        <img
          src="/review1.jpg"
          alt="Student review"
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">
          — Violin Student
        </p>
      </div>

      {/* Review 2 */}
      <div>
        <img
          src="/review2.jpg"
          alt="Student review"
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">
          — Composition Client 
        </p>
      </div>

      {/* Review 3 */}
      <div>
        <img
          src="/review3.jpg"
          alt="Student review"
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">
          — Composition Client
        </p>
      </div>
 {/* Review 4 */}
      <div>
        <img
          src="/review4.jpg"
          alt="Student review"
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">
          — Composition Client
        </p>
      </div>

      {/* Review 5 */}
      <div>
        <img
          src="/review5.jpg"
          alt="Student review"
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">
          — Composition Client
        </p>
      </div>

      {/* Review 6 */}
      <div>
        <img
          src="/review6.jpg"
          alt="Student review"
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">
          — Composition Client
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Support */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif mb-6">
          Support
        </h2>
        <p className="text-lg mb-8">
          Need more information or have other questions? Send me an email at
          contact@paullazarusviolin.com
        </p>
      </section>

    </main>
  );
}