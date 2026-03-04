export default function Home() {
  return (
    <main className="bg-[#fdfaf6] text-gray-800">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">
          Violin Lessons With Paul
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-600">
          Online violin lessons for teens and adults.
        Build a strong classical foundation or learn to play the music you love.
        </p>
        <a 
          href="https://wa.me/919962448276"
          className="bg-[#c6a75e] text-white px-8 py-3 rounded-md text-lg hover:opacity-90 transition"
        >
          Book Your Trial Lesson Now, Completely Free
        </a>
      </section>

      {/* About Section */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Image */}
    <div className="flex justify-center">
      <img
        src="/paul.jpg"
        alt="Paul with violin"
        className="rounded-2xl shadow-lg w-full max-w-md object-cover"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-3xl font-serif mb-6">
        Hi! I'm Paul,
      </h2>

      <div className="text-lg leading-relaxed space-y-6 text-gray-700">
        <p>
          
           I began my violin journey in 2012 and spent several years as
            a self-taught musician before undergoing formal training.
        </p>

        <p>
        Over the years, I’ve had the privilege of studying under
        many experienced violinists, most notably the
         respected pedagogue Joy Lee.

        </p>

        <p>
         Although I have a master's degree in psychology and worked
          in mental health, my love for the violin and music eventually
           led me to switch careers and become a full-time violinist,
            freelance composer, and writer. 
        </p>

        <p>
          I’ve performed at private events, weddings, and
           charity concerts, but what motivates me the most
            is <em>planting new strings.</em> For me, there’s nothing more
             fulfilling than watching motivated violin students move
              from one breakthrough to another.


        </p>
      </div>
    </div>

  </div>
</section>

{/* Who It’s For */}
<section className="py-20 px-6 bg-[#f7f3ed]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-serif mb-6">
      Who These Lessons Are For
    </h2>

    <p className="text-lg text-[#4a4642] mb-8">
      My lessons are designed for teens and adults who are serious about learning the violin. 
      Ideally, you would commit to weekly lessons in addition to 
      daily practice at home. To put it simply, 
      my lessons are ideal if you are either:
    </p>

    <ul className="text-lg text-left list-disc list-outside space-y-4 text-[#4a4642] max-w-2xl mx-auto">
      <li>A complete beginner</li>
      <li>Have a few years of experience</li>
      <li>Switching from Carnatic/Hindustani to Western Classical/Western Contemporary</li>
      <li>Need more structure in your violin journey</li>
    </ul>
  </div>
</section>

{/* What You’ll Learn */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-serif mb-6">
      What You’ll Learn
    </h2>
<p className="text-lg text-[#4a4642] mb-8">
      Each student gets a customized progression plan but here are some universal elements that all students will be learning:
    </p>
    <ul className="text-lg text-left list-disc list-outside space-y-4 text-[#4a4642] max-w-2xl mx-auto">
      <li>Proper bowing and posture technique</li>
      <li>Music reading and theory fundamentals</li>
      <li>Western classical repertoire</li>
      <li>Pop and contemporary adaptations</li>
      <li>Structured practice habits</li>
    </ul>
  </div>
</section>

      {/* Online Setup */}
      <section className="py-20 px-6 bg-[#f7f3ed]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">How My Online Lessons Work</h2>
         <div className="text-lg leading-relaxed space-y-6">
  <p>
 Lessons are 45 Minutes long and conducted via Google Meet. Once you contact me,
  we’ll decide on a mutually convenient time and date. I will share the Google Meet link,
   which you can bookmark and visit for each lesson. Virtual lessons do have some limitations, so it would be best if you could:
  </p>

   

      <ul className="text-lg text-left list-disc list-outside space-y-4 text-[#4a4642] max-w-2xl mx-auto">
      <li>Use a Computer/Laptop instead of a phone</li>
      <li>Ensure your violin is tuned before the session</li>
      <li>Adjust your camera/space to capture your full upper body and arms.</li>

    </ul>
</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-serif mb-6">
          Support
        </h2>
        <p className="text-lg mb-8">
         Need more information or have other questions? send me an email at paullazarusviolin.com 
        </p>
        <a 
          href="mailto:mailpaullazarus@gmail.com"
          className="border border-[#c6a75e] text-[#c6a75e] px-8 py-3 rounded-md text-lg hover:bg-[#c6a75e] hover:text-white transition"
        >
          Contact via Email
        </a>
      </section>

    </main>
  );
}