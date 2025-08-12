import React from "react";
import {
  EnvelopeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function PersonalWebsite() {
  const fadeInUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: "easeOut" },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-gray-900 font-sans overflow-hidden">
      {/* Weather hero background (subtle) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-6rem] h-[28rem] opacity-30"
        style={{
          backgroundImage: "url('/weather-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.25), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.25), rgba(0,0,0,0))",
        }}
      />

      {/* soft color blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto p-6 lg:p-12 relative z-10">
        {/* NAV */}
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md hover:scale-105 transition-transform">
              ML
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Matthew Lentz</h1>
              <p className="text-xs text-gray-600 italic">
                Undergraduate Meteorology Student
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="flex items-center gap-1 hover:text-sky-700 transition">
              <AcademicCapIcon className="w-4 h-4" /> About
            </a>
            <a href="#work" className="flex items-center gap-1 hover:text-sky-700 transition">
              <BriefcaseIcon className="w-4 h-4" /> Work
            </a>
            <a href="#thesis" className="flex items-center gap-1 hover:text-sky-700 transition">
              <DocumentTextIcon className="w-4 h-4" /> Research
            </a>
            <a href="#survey" className="flex items-center gap-1 hover:text-sky-700 transition">
              <DocumentTextIcon className="w-4 h-4" /> Survey
            </a>
            <a href="#contact" className="flex items-center gap-1 hover:text-sky-700 transition">
              <EnvelopeIcon className="w-4 h-4" /> Contact
            </a>
          </nav>
        </motion.header>

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
              Hello, I’m Matthew Lentz.
            </h2>
            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              I’m a senior meteorology student at Mississippi State University,
              focusing on wildfire climatology, climate modeling, and weather communication.
              I love using research to help communities prepare for severe weather and
              long-term climate risks.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Lentz_Matthew_Resume_2025.pdf"
                download
                className="px-5 py-3 bg-gradient-to-r from-sky-600 to-emerald-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transition"
              >
                Download Résumé
              </a>
              <a
                href="#thesis"
                className="px-5 py-3 border-2 border-sky-600 text-sky-700 font-semibold rounded-md hover:bg-sky-600 hover:text-white transition"
              >
                View Research
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-44 h-44 rounded-3xl overflow-hidden shadow-xl border-4 border-transparent bg-gradient-to-tr from-sky-500 to-emerald-500 p-[2px]">
              <img
                alt="Portrait of Matthew Lentz"
                src="/matthew.jpg"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section id="about" {...fadeInUp} className="mb-16 bg-sky-50 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-sky-800 flex items-center gap-2">
            <AcademicCapIcon className="w-5 h-5 text-sky-600" /> About Me
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            4.0 GPA • Shackouls Honors College • Python & ArcGIS Pro. I’m interested in the
            intersection of weather, climate, and society—especially how we communicate risk to
            diverse communities.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Education",
                text:
                  "B.S. in Geosciences (Professional Meteorology) • Minors: Math & Sociology • Mississippi State University (May 2026)",
              },
              {
                title: "Skills",
                text:
                  "Python, ArcGIS Pro, data analysis, predictive modeling, research communication",
              },
              {
                title: "Certifications",
                text: "NWS Trained Storm Spotter (2021)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-sky-700 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* RESEARCH */}
        <motion.section id="thesis" {...fadeInUp} className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-sky-800 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5 text-sky-600" /> Research
          </h3>
          <p className="text-gray-700 text-lg mb-8">
            Current honors thesis: how international students perceive severe weather and risk.
            Past work includes modeling extreme rainfall/temperature for agriculture and analyzing
            wildfire patterns in the Ozark & Ouachita Mountains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "USDA Agricultural Research",
                desc:
                  "Modeled extreme rainfall & temperature trends (RCP 4.5 & 8.5) to assess climate impacts on agriculture.",
                links: ["Learn More", "View Code"],
              },
              {
                title: "Wildfire Climatology",
                desc:
                  "Spatial analysis of wildfire causes & patterns in the Ozark and Ouachita Mountains using ArcGIS Pro & Python.",
                links: [],
              },
            ].map((proj, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-sky-700 mb-2">{proj.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{proj.desc}</p>
                {proj.links.length > 0 && (
                  <div className="flex gap-3 text-xs">
                    {proj.links.map((link, i) => (
                      <a
                        key={i}
                        href="#"
                        className="px-3 py-1 border border-sky-600 rounded hover:bg-sky-600 hover:text-white transition"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* SURVEY (new) */}
        <motion.section
          id="survey"
          {...fadeInUp}
          className="mb-16 bg-emerald-50 rounded-xl p-8 shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4 text-emerald-800">
            International Student Survey
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            I’m gathering anonymous responses from international students to better
            understand how severe weather is perceived and what information helps most.
            Your input is voluntary and takes about 5–7 minutes. Thank you for helping
            move this research forward.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://survey.survicate.com/a3a2ec75e7662dee/?p=intercom&first_name={{first_name}}&last_name={{last_name}}&email={{email}}&uid={{user_id}}"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow hover:brightness-110 transition"
            >
              Take the Survey
            </a>
            {/* Optional: embed instead of link — replace src with your live form URL
            <div className="w-full h-[620px]">
              <iframe
                title="International Student Survey (IN-PROGRESS)"
                src="https://your-embeddable-survey-link"
                className="w-full h-full rounded-lg border"
                loading="lazy"
              />
            </div>
            */}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Note: Responses are anonymous. Please avoid sharing personally identifying information in open-ended answers.
          </p>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" {...fadeInUp} className="mb-16 bg-sky-50 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-sky-800 flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5 text-sky-600" /> Contact
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Open to collaborations, internships, and research discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:mwl140@msstate.edu"
              className="px-6 py-3 border-2 border-sky-600 text-sky-700 font-semibold rounded-md text-center hover:bg-sky-600 hover:text-white transition"
            >
              mwl140@msstate.edu
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-lentz-30b2922b0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-sky-600 text-sky-700 font-semibold rounded-md text-center hover:bg-sky-600 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="/Lentz_Matthew_Resume_2025.pdf"
              className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md text-center hover:brightness-110 transition"
            >
              View Résumé
            </a>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="pt-8 border-t mt-12 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Matthew Lentz. All rights reserved.
        </footer>
      </div>
    </div>
  );
}