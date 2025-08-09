import React from "react";

// Personal single-file React + Tailwind template
export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto p-6 lg:p-12">
        {/* NAV */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">ML</div>
            <div>
              <h1 className="text-lg font-semibold">Matthew Lentz</h1>
              <p className="text-sm text-gray-600">Undergraduate Meteorology Student</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#thesis" className="hover:underline">Research</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Hi — I'm Matthew Lentz.</h2>
            <p className="mt-4 text-gray-700 max-w-2xl">I'm a senior meteorology student at Mississippi State University, with a focus on wildfire climatology, climate modeling, and weather communication. My goal is to apply scientific research to help communities improve their resilience to climate and weather challenges. Currently, I'm working on modeling extreme rainfall and temperature trends to support sustainable agricultural practices.</p>

            <div className="mt-6 flex gap-3">
              <a href="/resume.pdf" download className="inline-block rounded-md px-4 py-2 bg-indigo-600 text-white text-sm font-medium shadow-sm">Download Résumé</a>
              <a href="#research" className="inline-block rounded-md px-4 py-2 border border-gray-200 text-sm">View Research</a>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="w-44 h-44 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
              {/* Placeholder for headshot */}
              <img alt="Matthew Lentz" src="unnamed.jpg" className="w-full h-full object-cover"/>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-12">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="mt-3 text-gray-700">I am passionate about applying meteorological and geoscientific research to solve real-world problems. With a 4.0 GPA and hands-on experience in climate modeling, wildfire research, and data analysis, I am dedicated to understanding the intersections between weather, climate, and society. Below are some of my academic achievements and research interests.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Education</h4>
              <p className="text-sm text-gray-600 mt-1">B.S. in Geosciences, Mississippi State University (Expected May 2026) — Professional Meteorology (Minors in Math & Sociology)</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Skills</h4>
              <p className="text-sm text-gray-600 mt-1">Python, ArcGIS Pro, Data Analysis, Statistical Modeling, Predictive Modeling, Research Communication</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Certifications</h4>
              <p className="text-sm text-gray-600 mt-1">Trained Storm Spotter (2021), NWS Certified</p>
            </div>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="thesis" className="mb-12">
          <h3 className="text-xl font-semibold">Research</h3>
          <p className="mt-3 text-gray-700 max-w-3xl">My research focuses on climate modeling and wildfire climatology. I'm currently studying the impact of extreme rainfall and temperature trends on sustainable agricultural practices in collaboration with USDA. Below are links to some of my ongoing and past research projects.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-5 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">USDA Agricultural Research</h4>
              <p className="text-sm text-gray-600 mt-2">Modeling extreme rainfall and temperature trends under RCP 4.5 & 8.5 to assess climate impacts on agriculture.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <a href="#" className="px-2 py-1 border rounded">Learn More</a>
                <a href="#" className="px-2 py-1 border rounded">View Code</a>
              </div>
            </article>

            <article className="p-5 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Wildfire Climatology</h4>
              <p className="text-sm text-gray-600 mt-2">Analyzing wildfire trends in the Ozark and Ouachita Mountains, evaluating fire causes, and climate patterns.</p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-12">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-3 text-gray-700">Feel free to reach out via email or LinkedIn for collaboration or inquiries.</p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="mailto:mwl140@msstate.edu" className="inline-block rounded-md px-4 py-2 border">mwl140@msstate.edu</a>
            <a href="https://www.linkedin.com/in/matthew-lentz-30b2922b0" target="_blank" rel="noopener noreferrer" className="inline-block rounded-md px-4 py-2 border">LinkedIn</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t mt-8 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <div>© {new Date().getFullYear()} Matthew Lentz. All rights reserved.</div>
            <div>Built with ❤️ • <a href="#" className="underline">Source</a></div>
          </div>
        </footer>
      </div>
    </div>
  );
}


