import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isDarkMode ? "opacity-50" : "opacity-5"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 via-purple-400 via-blue-400 via-blue-300 to-blue-600 animate-gradient-x transition-all duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent animate-gradient-y transition-all duration-500 ease-in-out" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
          Who I Am
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Avatar with glow effect */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="relative w-48 h-48 group">
              <div
                className={`absolute inset-0 rounded-lg blur-xl transition-opacity duration-300 group-hover:blur-2xl ${
                  isDarkMode ? "bg-purple-600/30" : "bg-purple-600/20"
                }`}
              />
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <div className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-lg ${
              isDarkMode
                ? "bg-gray-800/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                : "bg-white/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            } hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`}
          >
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Driven by the passion to make meaningful differences, I do want
              to craft solutions that positively impact humanity using my
              creativity. My journey is fueled by a relentless creativity to
              harness the power of technology in order to effect tangible
              changes in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
